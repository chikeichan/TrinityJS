var Renderer = function(){};

Renderer.prototype.createTemplate = function() {
    return new Template();
};

var Template = function(){
    this._queue = [];
};

//////////////////////////////////////////////////////
/////////////// DOM Templating methods ///////////////
//////////////////////////////////////////////////////

// Each of the methods below push a command object to a command queue.
// The command queue will be executed by .render to create DOM fragments.
Template.prototype.open         = queueCommand('openTag');
Template.prototype.addClass     = queueCommand('addClass');
Template.prototype.text         = queueCommand('text');
Template.prototype.attr         = queueCommand('attribute');
Template.prototype.style        = queueCommand('style');
Template.prototype.close        = queueCommand('closeTag');
Template.prototype.if           = queueCommand('if');
Template.prototype.else         = queueCommand('else');
Template.prototype.each         = queueCommand('loop');
Template.prototype.done         = queueCommand('done');
Template.prototype.xif          = Template.prototype.done; 
Template.prototype.xeach        = Template.prototype.done;

function queueCommand(commandName) {
    return function() {
        this._queue.push({
            action: commandName,
            detail: Array.prototype.slice.call(arguments)
        });
        return this;
    };
}

//////////////////////////////////////////////////////
/////////////////////// Render ///////////////////////
//////////////////////////////////////////////////////

Template.prototype.render = function(data) {
    // Root element to store DOMs
    var root            = document.createDocumentFragment(),
    // Stacks to reference current context
        elements        = [],
        conditionals    = [],
        loops           = [],
        states          = [],
    // Reference index for current execution
        execIndex       = 0,
        el, condition, loop;

    handleCommand.call(this, this._queue[execIndex], data);

    return root;

    function handleCommand(command, execData) {
        // Grab current state: LOOP, CONDITIONAL, or undefined
        var state = getLastFrom(states);

        // Base case: exit if no command
        if (!command) {
            return;
        }

        // Change data in current execuation if in a loop
        // From [{a: 'a'}, {b: 'b'}, {c: 'c'}] to {a: 'a'}
        if (state === 'LOOP') {
            setDataContext();
        }

        // Handle IF, ELSE, EACH, or DONE
        // These methods change state of rendering
        handleStateActions();

        // Exit if condition is not met
        if ((state === 'CONDITIONAL' && !getLastFrom(conditionals)) || (state === 'LOOP' && !execData)) {
            handleCommand.call(this, this._queue[++execIndex], execData);
            return;
        }

        // Handle CREATE, APPEND, STYLE, ATTR, TEXT
        // These methods are purely rendering and do not change rendering state
        handleCommonActions();

        // Increment index for next execution
        execIndex++;

        // Execute next command
        handleCommand.call(this, this._queue[execIndex], execData);
        
        function setDataContext() {
            loop = getLastFrom(loops);
            execData = loop.data[loop.index];
        }

        function handleStateActions() {
            if (command.action === 'loop') {
                handleLoop();
            }

            if (command.action === 'done') {
                handleDone();
            }
            
            if (command.action === 'if') {
                handleIf();
            }

            if (command.action === 'else') {
                handleElse();
            }
        }

        function handleLoop() {
            states.push('LOOP');
            loops.push({
                data: evaluate(execData, command.detail[0]),
                index: 0,
                start: execIndex
            });
        }

        function handleDone() {
            states.pop();
            if (state === 'CONDITIONAL') {
                conditionals.pop();
            } else if (state === 'LOOP') {
                loop = getLastFrom(loops);
                loop.index = loop.index + 1;
                // If current loop is not done, set state back to loop
                // and set next execution at start of loop
                if (loop.index < loop.data.length) {
                    execIndex = loop.start;
                    states.push('LOOP');
                } else {
                    loops.pop();
                }
            }
        }

        function handleIf() {
            states.push('CONDITIONAL');
            condition = evaluate(execData, command.detail[0]);
            conditionals.push(condition);
        }

        function handleElse() {
            condition = !conditionals.pop();
            conditionals.push(condition);
        }

        function handleCommonActions() {
            switch (command.action) {
                case 'openTag':
                    elements.push(createTag.apply(null, command.detail));
                    break;
                case 'addClass':
                    el = getLastFrom(elements);
                    addClass.apply(el, [evaluate(execData, command.detail[0])]);
                    break;
                case 'style':
                    el = getLastFrom(elements);
                    addStyle.apply(el, [evaluate(execData, command.detail[0]), evaluate(execData, command.detail[1])]);
                    break;
                case 'attribute':
                    el = getLastFrom(elements);
                    addAttribute.apply(el, [evaluate(execData, command.detail[0]), evaluate(execData, command.detail[1])]);
                    break;
                case 'text':
                    el = getLastFrom(elements);
                    addText.apply(el, [evaluate(execData, command.detail[0])]);
                    break;
                case 'closeTag':
                    el = elements.pop();
                    if (elements.length === 0) {
                        root.appendChild(el);
                    } else {
                        getLastFrom(elements).appendChild(el);
                    }
                    break;
            }
        }
    }
};

//////////////////////////////////////////////////////
/////////////////////// Patch ////////////////////////
//////////////////////////////////////////////////////

Template.prototype.patch = function(root, data) {
    var frag = this.render(data);

    dfPatch(root, frag);

    function dfPatch(from, to) {
        var fromNode, toNode;
        var length = Math.max(from.childNodes.length, to.childNodes.length);

        for (var i = 0; i < length; i++) {
            fromNode = from.childNodes[i];
            toNode   = to.childNodes[i];

            if (!toNode && fromNode) {
                removeAllAfter(from, i);
                return;
            } else if (!fromNode && toNode) {
                from.appendChild(toNode.cloneNode(true));
            } else if (fromNode.tagName !== toNode.tagName) {
                from.replaceChild(toNode.cloneNode(true), fromNode);
            } else {
                patchNode(fromNode, toNode);
                dfPatch(fromNode, toNode);
            }
        }
    }

    function removeAllAfter(node, index) {
        for (var i = node.childNodes.length - 1; i >= index; i--) {
            node.childNodes[i].remove();
        }
    }

    function patchNode(from, to) {
        patchClass(from, to);
        patchStyle(from, to);
        patchAttributes(from, to);
        patchText(from, to);
    }

    function patchClass(from, to) {
        var map;
        var toClasses   = to && to.className ? to.className.split(' ') : [];
        var fromClasses = from && from.className ? from.className.split(' ') : [];
        
        map = toClasses.reduce(function(accumulator, cls) {
            if (cls === '') {
                return accumulator;
            }
            addClass.call(from, cls);
            accumulator[cls] = cls;
            return accumulator;
        }, {});

        fromClasses.forEach(function(cls) {
            if (!map[cls]) {
                removeClass.call(from, cls);
            }
        });
    }

    function patchText(from, to) {
        if (from.textContent !== to.textContent) {
            from.textContent = to.textContent;
        }
    }

    function patchStyle(from, to) {
        var map = {};
        var styleKey, styleVal, fromKeys;

        if (to.style) {
            for (var i = 0; i < to.style.length; i++) {
                styleKey = to.style[i];
                styleVal = to.style[to.style[i]];
                addStyle.call(from, styleKey, styleVal);
                map[styleKey] = styleVal;
            }
        }

        if (from.style) {
            fromKeys = Array.prototype.slice.call(from.style);
            for (var j = 0; j < fromKeys.length; j++) {
                styleKey = fromKeys[j];
                if (!map[styleKey]) {
                    addStyle.call(from, styleKey, '');
                }
            }
        }
    }

    function patchAttributes(from, to) {
        var map = {};
        var attr, attrKey, attrVal, fromKeys;

        if (to.attributes) {
            for (var i = 0; i < to.attributes.length; i++) {
                attr = to.attributes[i];
                attrKey = attr.name;
                if (attrKey !== 'style' && attrKey !== 'class') {
                    from.setAttribute(attrKey, attr.value);
                    map[attrKey] = attr.value;                 
                }
            }
        }

        if (from.attributes) {
            fromKeys = Array.prototype.slice.call(from.attributes);
            for (var j = 0; j < fromKeys.length; j++) {
                attr = fromKeys[j];
                attrKey = attr.name;
                if (attrKey !== 'style' && attrKey !== 'class') {
                    if (!map[attrKey]) {
                        from.setAttribute(attrKey, '');
                    }
                }
            }
        }
    }

};

//////////////////////////////////////////////////////
/////////////////// Helper Methods ///////////////////
//////////////////////////////////////////////////////

function createTag(tag) {
    var tagName = parseTag(tag);
    var el      = document.createElement(tagName[0]);

    if (tagName[1] === '.') {
        el.className = tagName[2];
    } else if (tagName[1] === '#') {
        el.id = tagName[2];
    }

    return el;
}

function addClass(className) {
    var separator = this.className.length > 0 ? ' ' : '';
    className = typeof className === 'string' ? className : '';

    if (!hasClass(this, className)) {
        this.className += separator + className;
    }
}

function removeClass(className) {
    if (hasClass(this, className)) {
        var old = this.className;
        var out = old.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'), '');
        this.className = out;
    }
}

function addStyle(attr, val) {
    if (this.style[attr] !== val) {
        this.style[attr] = val;
    }
}

function addAttribute(attr, val) {
    this.setAttribute(attr, typeof val === 'undefined' ? '' : val);
}

function addText(content) {
    this.textContent = content;
}

function getLastFrom(array) {
    return array[array.length - 1];
}

function hasClass(el, className) {
  return !!el.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}

function parseTag(tag) {
    tag = tag.replace(/[.#]/, function(d) { return ',' + d + ',';})
             .split(',');
    return tag;
}

function evaluate(data, funcOrVal) {
    switch (typeof funcOrVal) {
        case 'function':
            try {
                return funcOrVal.call(this, data);
            } catch (e) {
                return '';
            }
            break;
        default:
            return funcOrVal;

    }
}
