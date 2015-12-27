(function(){
"use strict";
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.12-86a041b
window.WebComponents=window.WebComponents||{},function(e){var t=e.flags||{},n="webcomponents.js",r=document.querySelector('script[src*="'+n+'"]');if(!t.noOpts){if(location.search.slice(1).split("&").forEach(function(e){var n,r=e.split("=");r[0]&&(n=r[0].match(/wc-(.+)/))&&(t[n[1]]=r[1]||!0)}),r)for(var o,i=0;o=r.attributes[i];i++)"src"!==o.name&&(t[o.name]=o.value||!0);if(t.log&&t.log.split){var a=t.log.split(",");t.log={},a.forEach(function(e){t.log[e]=!0})}else t.log={}}t.shadow=t.shadow||t.shadowdom||t.polyfill,"native"===t.shadow?t.shadow=!1:t.shadow=t.shadow||!HTMLElement.prototype.createShadowRoot,t.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=t.register),e.flags=t}(WebComponents),WebComponents.flags.shadow&&("undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),window.ShadowDOMPolyfill={},function(e){"use strict";function t(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if(navigator.getDeviceStorage)return!1;try{var e=new Function("return true;");return e()}catch(t){return!1}}function n(e){if(!e)throw new Error("Assertion failed")}function r(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];A(e,o,F(t,o))}return e}function o(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];switch(o){case"arguments":case"caller":case"length":case"name":case"prototype":case"toString":continue}A(e,o,F(t,o))}return e}function i(e,t){for(var n=0;n<t.length;n++)if(t[n]in e)return t[n]}function a(e,t,n){U.value=n,A(e,t,U)}function s(e,t){var n=e.__proto__||Object.getPrototypeOf(e);if(q)try{W(n)}catch(r){n=n.__proto__}var o=R.get(n);if(o)return o;var i=s(n),a=E(i);return g(n,a,t),a}function c(e,t){w(e,t,!0)}function l(e,t){w(t,e,!1)}function u(e){return/^on[a-z]+$/.test(e)}function d(e){return/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e)}function p(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e):function(){return this.__impl4cf1e782hg__[e]}}function h(e){return k&&d(e)?new Function("v","this.__impl4cf1e782hg__."+e+" = v"):function(t){this.__impl4cf1e782hg__[e]=t}}function f(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e+".apply(this.__impl4cf1e782hg__, arguments)"):function(){return this.__impl4cf1e782hg__[e].apply(this.__impl4cf1e782hg__,arguments)}}function m(e,t){try{return Object.getOwnPropertyDescriptor(e,t)}catch(n){return B}}function w(t,n,r,o){for(var i=W(t),a=0;a<i.length;a++){var s=i[a];if("polymerBlackList_"!==s&&!(s in n||t.polymerBlackList_&&t.polymerBlackList_[s])){q&&t.__lookupGetter__(s);var c,l,d=m(t,s);if("function"!=typeof d.value){var w=u(s);c=w?e.getEventHandlerGetter(s):p(s),(d.writable||d.set||V)&&(l=w?e.getEventHandlerSetter(s):h(s));var v=V||d.configurable;A(n,s,{get:c,set:l,configurable:v,enumerable:d.enumerable})}else r&&(n[s]=f(s))}}}function v(e,t,n){if(null!=e){var r=e.prototype;g(r,t,n),o(t,e)}}function g(e,t,r){var o=t.prototype;n(void 0===R.get(e)),R.set(e,t),I.set(o,e),c(e,o),r&&l(o,r),a(o,"constructor",t),t.prototype=o}function b(e,t){return R.get(t.prototype)===e}function y(e){var t=Object.getPrototypeOf(e),n=s(t),r=E(n);return g(t,r,e),r}function E(e){function t(t){e.call(this,t)}var n=Object.create(e.prototype);return n.constructor=t,t.prototype=n,t}function _(e){return e&&e.__impl4cf1e782hg__}function S(e){return!_(e)}function T(e){if(null===e)return null;n(S(e));var t=e.__wrapper8e3dd93a60__;return null!=t?t:e.__wrapper8e3dd93a60__=new(s(e,e))(e)}function M(e){return null===e?null:(n(_(e)),e.__impl4cf1e782hg__)}function O(e){return e.__impl4cf1e782hg__}function L(e,t){t.__impl4cf1e782hg__=e,e.__wrapper8e3dd93a60__=t}function N(e){return e&&_(e)?M(e):e}function C(e){return e&&!_(e)?T(e):e}function j(e,t){null!==t&&(n(S(e)),n(void 0===t||_(t)),e.__wrapper8e3dd93a60__=t)}function D(e,t,n){G.get=n,A(e.prototype,t,G)}function H(e,t){D(e,t,function(){return T(this.__impl4cf1e782hg__[t])})}function x(e,t){e.forEach(function(e){t.forEach(function(t){e.prototype[t]=function(){var e=C(this);return e[t].apply(e,arguments)}})})}var R=new WeakMap,I=new WeakMap,P=Object.create(null),k=t(),A=Object.defineProperty,W=Object.getOwnPropertyNames,F=Object.getOwnPropertyDescriptor,U={value:void 0,configurable:!0,enumerable:!1,writable:!0};W(window);var q=/Firefox/.test(navigator.userAgent),B={get:function(){},set:function(e){},configurable:!0,enumerable:!0},V=function(){var e=Object.getOwnPropertyDescriptor(Node.prototype,"nodeType");return e&&!e.get&&!e.set}(),G={get:void 0,configurable:!0,enumerable:!0};e.assert=n,e.constructorTable=R,e.defineGetter=D,e.defineWrapGetter=H,e.forwardMethodsToWrapper=x,e.isIdentifierName=d,e.isWrapper=_,e.isWrapperFor=b,e.mixin=r,e.nativePrototypeTable=I,e.oneOf=i,e.registerObject=y,e.registerWrapper=v,e.rewrap=j,e.setWrapper=L,e.unsafeUnwrap=O,e.unwrap=M,e.unwrapIfNeeded=N,e.wrap=T,e.wrapIfNeeded=C,e.wrappers=P}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t,n){return{index:e,removed:t,addedCount:n}}function n(){}var r=0,o=1,i=2,a=3;n.prototype={calcEditDistances:function(e,t,n,r,o,i){for(var a=i-o+1,s=n-t+1,c=new Array(a),l=0;a>l;l++)c[l]=new Array(s),c[l][0]=l;for(var u=0;s>u;u++)c[0][u]=u;for(var l=1;a>l;l++)for(var u=1;s>u;u++)if(this.equals(e[t+u-1],r[o+l-1]))c[l][u]=c[l-1][u-1];else{var d=c[l-1][u]+1,p=c[l][u-1]+1;c[l][u]=p>d?d:p}return c},spliceOperationsFromEditDistances:function(e){for(var t=e.length-1,n=e[0].length-1,s=e[t][n],c=[];t>0||n>0;)if(0!=t)if(0!=n){var l,u=e[t-1][n-1],d=e[t-1][n],p=e[t][n-1];l=p>d?u>d?d:u:u>p?p:u,l==u?(u==s?c.push(r):(c.push(o),s=u),t--,n--):l==d?(c.push(a),t--,s=d):(c.push(i),n--,s=p)}else c.push(a),t--;else c.push(i),n--;return c.reverse(),c},calcSplices:function(e,n,s,c,l,u){var d=0,p=0,h=Math.min(s-n,u-l);if(0==n&&0==l&&(d=this.sharedPrefix(e,c,h)),s==e.length&&u==c.length&&(p=this.sharedSuffix(e,c,h-d)),n+=d,l+=d,s-=p,u-=p,s-n==0&&u-l==0)return[];if(n==s){for(var f=t(n,[],0);u>l;)f.removed.push(c[l++]);return[f]}if(l==u)return[t(n,[],s-n)];for(var m=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,n,s,c,l,u)),f=void 0,w=[],v=n,g=l,b=0;b<m.length;b++)switch(m[b]){case r:f&&(w.push(f),f=void 0),v++,g++;break;case o:f||(f=t(v,[],0)),f.addedCount++,v++,f.removed.push(c[g]),g++;break;case i:f||(f=t(v,[],0)),f.addedCount++,v++;break;case a:f||(f=t(v,[],0)),f.removed.push(c[g]),g++}return f&&w.push(f),w},sharedPrefix:function(e,t,n){for(var r=0;n>r;r++)if(!this.equals(e[r],t[r]))return r;return n},sharedSuffix:function(e,t,n){for(var r=e.length,o=t.length,i=0;n>i&&this.equals(e[--r],t[--o]);)i++;return i},calculateSplices:function(e,t){return this.calcSplices(e,0,e.length,t,0,t.length)},equals:function(e,t){return e===t}},e.ArraySplice=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(){a=!1;var e=i.slice(0);i=[];for(var t=0;t<e.length;t++)e[t]()}function n(e){i.push(e),a||(a=!0,r(t,0))}var r,o=window.MutationObserver,i=[],a=!1;if(o){var s=1,c=new o(t),l=document.createTextNode(s);c.observe(l,{characterData:!0}),r=function(){s=(s+1)%2,l.data=s}}else r=window.setTimeout;e.setEndOfMicrotask=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.scheduled_||(e.scheduled_=!0,f.push(e),m||(u(n),m=!0))}function n(){for(m=!1;f.length;){var e=f;f=[],e.sort(function(e,t){return e.uid_-t.uid_});for(var t=0;t<e.length;t++){var n=e[t];n.scheduled_=!1;var r=n.takeRecords();i(n),r.length&&n.callback_(r,n)}}}function r(e,t){this.type=e,this.target=t,this.addedNodes=new p.NodeList,this.removedNodes=new p.NodeList,this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function o(e,t){for(;e;e=e.parentNode){var n=h.get(e);if(n)for(var r=0;r<n.length;r++){var o=n[r];o.options.subtree&&o.addTransientObserver(t)}}}function i(e){for(var t=0;t<e.nodes_.length;t++){var n=e.nodes_[t],r=h.get(n);if(!r)return;for(var o=0;o<r.length;o++){var i=r[o];i.observer===e&&i.removeTransientObservers()}}}function a(e,n,o){for(var i=Object.create(null),a=Object.create(null),s=e;s;s=s.parentNode){var c=h.get(s);if(c)for(var l=0;l<c.length;l++){var u=c[l],d=u.options;if((s===e||d.subtree)&&("attributes"!==n||d.attributes)&&("attributes"!==n||!d.attributeFilter||null===o.namespace&&-1!==d.attributeFilter.indexOf(o.name))&&("characterData"!==n||d.characterData)&&("childList"!==n||d.childList)){var p=u.observer;i[p.uid_]=p,("attributes"===n&&d.attributeOldValue||"characterData"===n&&d.characterDataOldValue)&&(a[p.uid_]=o.oldValue)}}}for(var f in i){var p=i[f],m=new r(n,e);"name"in o&&"namespace"in o&&(m.attributeName=o.name,m.attributeNamespace=o.namespace),o.addedNodes&&(m.addedNodes=o.addedNodes),o.removedNodes&&(m.removedNodes=o.removedNodes),o.previousSibling&&(m.previousSibling=o.previousSibling),o.nextSibling&&(m.nextSibling=o.nextSibling),void 0!==a[f]&&(m.oldValue=a[f]),t(p),p.records_.push(m)}}function s(e){if(this.childList=!!e.childList,this.subtree=!!e.subtree,"attributes"in e||!("attributeOldValue"in e||"attributeFilter"in e)?this.attributes=!!e.attributes:this.attributes=!0,"characterDataOldValue"in e&&!("characterData"in e)?this.characterData=!0:this.characterData=!!e.characterData,!this.attributes&&(e.attributeOldValue||"attributeFilter"in e)||!this.characterData&&e.characterDataOldValue)throw new TypeError;if(this.characterData=!!e.characterData,this.attributeOldValue=!!e.attributeOldValue,this.characterDataOldValue=!!e.characterDataOldValue,"attributeFilter"in e){if(null==e.attributeFilter||"object"!=typeof e.attributeFilter)throw new TypeError;this.attributeFilter=w.call(e.attributeFilter)}else this.attributeFilter=null}function c(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++v,this.scheduled_=!1}function l(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var u=e.setEndOfMicrotask,d=e.wrapIfNeeded,p=e.wrappers,h=new WeakMap,f=[],m=!1,w=Array.prototype.slice,v=0;c.prototype={constructor:c,observe:function(e,t){e=d(e);var n,r=new s(t),o=h.get(e);o||h.set(e,o=[]);for(var i=0;i<o.length;i++)o[i].observer===this&&(n=o[i],n.removeTransientObservers(),n.options=r);n||(n=new l(this,e,r),o.push(n),this.nodes_.push(e))},disconnect:function(){this.nodes_.forEach(function(e){for(var t=h.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}},l.prototype={addTransientObserver:function(e){if(e!==this.target){t(this.observer),this.transientObservedNodes.push(e);var n=h.get(e);n||h.set(e,n=[]),n.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];for(var t=0;t<e.length;t++)for(var n=e[t],r=h.get(n),o=0;o<r.length;o++)if(r[o]===this){r.splice(o,1);break}}},e.enqueueMutation=a,e.registerTransientObservers=o,e.wrappers.MutationObserver=c,e.wrappers.MutationRecord=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){this.root=e,this.parent=t}function n(e,t){if(e.treeScope_!==t){e.treeScope_=t;for(var r=e.shadowRoot;r;r=r.olderShadowRoot)r.treeScope_.parent=t;for(var o=e.firstChild;o;o=o.nextSibling)n(o,t)}}function r(n){if(n instanceof e.wrappers.Window,n.treeScope_)return n.treeScope_;var o,i=n.parentNode;return o=i?r(i):new t(n,null),n.treeScope_=o}t.prototype={get renderer(){return this.root instanceof e.wrappers.ShadowRoot?e.getRendererForHost(this.root.host):null},contains:function(e){for(;e;e=e.parent)if(e===this)return!0;return!1}},e.TreeScope=t,e.getTreeScope=r,e.setTreeScope=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e instanceof G.ShadowRoot}function n(e){return A(e).root}function r(e,r){var s=[],c=e;for(s.push(c);c;){var l=a(c);if(l&&l.length>0){for(var u=0;u<l.length;u++){var p=l[u];if(i(p)){var h=n(p),f=h.olderShadowRoot;f&&s.push(f)}s.push(p)}c=l[l.length-1]}else if(t(c)){if(d(e,c)&&o(r))break;c=c.host,s.push(c)}else c=c.parentNode,c&&s.push(c)}return s}function o(e){if(!e)return!1;switch(e.type){case"abort":case"error":case"select":case"change":case"load":case"reset":case"resize":case"scroll":case"selectstart":return!0}return!1}function i(e){return e instanceof HTMLShadowElement}function a(t){return e.getDestinationInsertionPoints(t)}function s(e,t){if(0===e.length)return t;t instanceof G.Window&&(t=t.document);for(var n=A(t),r=e[0],o=A(r),i=l(n,o),a=0;a<e.length;a++){var s=e[a];if(A(s)===i)return s}return e[e.length-1]}function c(e){for(var t=[];e;e=e.parent)t.push(e);return t}function l(e,t){for(var n=c(e),r=c(t),o=null;n.length>0&&r.length>0;){var i=n.pop(),a=r.pop();if(i!==a)break;o=i}return o}function u(e,t,n){t instanceof G.Window&&(t=t.document);var o,i=A(t),a=A(n),s=r(n,e),o=l(i,a);o||(o=a.root);for(var c=o;c;c=c.parent)for(var u=0;u<s.length;u++){var d=s[u];if(A(d)===c)return d}return null}function d(e,t){return A(e)===A(t)}function p(e){if(!K.get(e)&&(K.set(e,!0),f(V(e),V(e.target)),P)){var t=P;throw P=null,t}}function h(e){switch(e.type){case"load":case"beforeunload":case"unload":return!0}return!1}function f(t,n){if($.get(t))throw new Error("InvalidStateError");$.set(t,!0),e.renderAllPending();var o,i,a;if(h(t)&&!t.bubbles){var s=n;s instanceof G.Document&&(a=s.defaultView)&&(i=s,o=[])}if(!o)if(n instanceof G.Window)a=n,o=[];else if(o=r(n,t),!h(t)){var s=o[o.length-1];s instanceof G.Document&&(a=s.defaultView)}return ne.set(t,o),m(t,o,a,i)&&w(t,o,a,i)&&v(t,o,a,i),J.set(t,re),Y["delete"](t,null),$["delete"](t),t.defaultPrevented}function m(e,t,n,r){var o=oe;if(n&&!g(n,e,o,t,r))return!1;for(var i=t.length-1;i>0;i--)if(!g(t[i],e,o,t,r))return!1;return!0}function w(e,t,n,r){var o=ie,i=t[0]||n;return g(i,e,o,t,r)}function v(e,t,n,r){for(var o=ae,i=1;i<t.length;i++)if(!g(t[i],e,o,t,r))return;n&&t.length>0&&g(n,e,o,t,r)}function g(e,t,n,r,o){var i=z.get(e);if(!i)return!0;var a=o||s(r,e);if(a===e){if(n===oe)return!0;n===ae&&(n=ie)}else if(n===ae&&!t.bubbles)return!0;if("relatedTarget"in t){var c=B(t),l=c.relatedTarget;if(l){if(l instanceof Object&&l.addEventListener){var d=V(l),p=u(t,e,d);if(p===a)return!0}else p=null;Z.set(t,p)}}J.set(t,n);var h=t.type,f=!1;X.set(t,a),Y.set(t,e),i.depth++;for(var m=0,w=i.length;w>m;m++){var v=i[m];if(v.removed)f=!0;else if(!(v.type!==h||!v.capture&&n===oe||v.capture&&n===ae))try{if("function"==typeof v.handler?v.handler.call(e,t):v.handler.handleEvent(t),ee.get(t))return!1}catch(g){P||(P=g)}}if(i.depth--,f&&0===i.depth){var b=i.slice();i.length=0;for(var m=0;m<b.length;m++)b[m].removed||i.push(b[m])}return!Q.get(t)}function b(e,t,n){this.type=e,this.handler=t,this.capture=Boolean(n)}function y(e,t){if(!(e instanceof se))return V(T(se,"Event",e,t));var n=e;return ge||"beforeunload"!==n.type||this instanceof M?void U(n,this):new M(n)}function E(e){return e&&e.relatedTarget?Object.create(e,{relatedTarget:{value:B(e.relatedTarget)}}):e}function _(e,t,n){var r=window[e],o=function(t,n){return t instanceof r?void U(t,this):V(T(r,e,t,n))};if(o.prototype=Object.create(t.prototype),n&&W(o.prototype,n),r)try{F(r,o,new r("temp"))}catch(i){F(r,o,document.createEvent(e))}return o}function S(e,t){return function(){arguments[t]=B(arguments[t]);var n=B(this);n[e].apply(n,arguments)}}function T(e,t,n,r){if(we)return new e(n,E(r));var o=B(document.createEvent(t)),i=me[t],a=[n];return Object.keys(i).forEach(function(e){var t=null!=r&&e in r?r[e]:i[e];"relatedTarget"===e&&(t=B(t)),a.push(t)}),o["init"+t].apply(o,a),o}function M(e){y.call(this,e)}function O(e){return"function"==typeof e?!0:e&&e.handleEvent}function L(e){switch(e){case"DOMAttrModified":case"DOMAttributeNameChanged":case"DOMCharacterDataModified":case"DOMElementNameChanged":case"DOMNodeInserted":case"DOMNodeInsertedIntoDocument":case"DOMNodeRemoved":case"DOMNodeRemovedFromDocument":case"DOMSubtreeModified":return!0}return!1}function N(e){U(e,this)}function C(e){return e instanceof G.ShadowRoot&&(e=e.host),B(e)}function j(e,t){var n=z.get(e);if(n)for(var r=0;r<n.length;r++)if(!n[r].removed&&n[r].type===t)return!0;return!1}function D(e,t){for(var n=B(e);n;n=n.parentNode)if(j(V(n),t))return!0;return!1}function H(e){k(e,ye)}function x(t,n,o,i){e.renderAllPending();var a=V(Ee.call(q(n),o,i));if(!a)return null;var c=r(a,null),l=c.lastIndexOf(t);return-1==l?null:(c=c.slice(0,l),s(c,t))}function R(e){return function(){var t=te.get(this);return t&&t[e]&&t[e].value||null}}function I(e){var t=e.slice(2);return function(n){var r=te.get(this);r||(r=Object.create(null),te.set(this,r));var o=r[e];if(o&&this.removeEventListener(t,o.wrapped,!1),"function"==typeof n){var i=function(t){var r=n.call(this,t);r===!1?t.preventDefault():"onbeforeunload"===e&&"string"==typeof r&&(t.returnValue=r)};this.addEventListener(t,i,!1),r[e]={value:n,wrapped:i}}}}var P,k=e.forwardMethodsToWrapper,A=e.getTreeScope,W=e.mixin,F=e.registerWrapper,U=e.setWrapper,q=e.unsafeUnwrap,B=e.unwrap,V=e.wrap,G=e.wrappers,z=(new WeakMap,new WeakMap),K=new WeakMap,$=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,J=new WeakMap,Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=0,oe=1,ie=2,ae=3;b.prototype={equals:function(e){return this.handler===e.handler&&this.type===e.type&&this.capture===e.capture},get removed(){return null===this.handler},remove:function(){this.handler=null}};var se=window.Event;se.prototype.polymerBlackList_={returnValue:!0,keyLocation:!0},y.prototype={get target(){return X.get(this)},get currentTarget(){return Y.get(this)},get eventPhase(){return J.get(this)},get path(){var e=ne.get(this);return e?e.slice():[]},stopPropagation:function(){Q.set(this,!0)},stopImmediatePropagation:function(){Q.set(this,!0),ee.set(this,!0)}},F(se,y,document.createEvent("Event"));var ce=_("UIEvent",y),le=_("CustomEvent",y),ue={get relatedTarget(){var e=Z.get(this);return void 0!==e?e:V(B(this).relatedTarget)}},de=W({initMouseEvent:S("initMouseEvent",14)},ue),pe=W({initFocusEvent:S("initFocusEvent",5)},ue),he=_("MouseEvent",ce,de),fe=_("FocusEvent",ce,pe),me=Object.create(null),we=function(){try{new window.FocusEvent("focus")}catch(e){return!1}return!0}();if(!we){var ve=function(e,t,n){if(n){var r=me[n];t=W(W({},r),t)}me[e]=t};ve("Event",{bubbles:!1,cancelable:!1}),ve("CustomEvent",{detail:null},"Event"),ve("UIEvent",{view:null,detail:0},"Event"),ve("MouseEvent",{screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null},"UIEvent"),ve("FocusEvent",{relatedTarget:null},"UIEvent")}var ge=window.BeforeUnloadEvent;M.prototype=Object.create(y.prototype),W(M.prototype,{get returnValue(){return q(this).returnValue},set returnValue(e){q(this).returnValue=e}}),ge&&F(ge,M);var be=window.EventTarget,ye=["addEventListener","removeEventListener","dispatchEvent"];[Node,Window].forEach(function(e){var t=e.prototype;ye.forEach(function(e){Object.defineProperty(t,e+"_",{value:t[e]})})}),N.prototype={addEventListener:function(e,t,n){if(O(t)&&!L(e)){var r=new b(e,t,n),o=z.get(this);if(o){for(var i=0;i<o.length;i++)if(r.equals(o[i]))return}else o=[],o.depth=0,z.set(this,o);o.push(r);var a=C(this);a.addEventListener_(e,p,!0)}},removeEventListener:function(e,t,n){n=Boolean(n);var r=z.get(this);if(r){for(var o=0,i=!1,a=0;a<r.length;a++)r[a].type===e&&r[a].capture===n&&(o++,r[a].handler===t&&(i=!0,r[a].remove()));if(i&&1===o){var s=C(this);s.removeEventListener_(e,p,!0)}}},dispatchEvent:function(t){var n=B(t),r=n.type;K.set(n,!1),e.renderAllPending();var o;D(this,r)||(o=function(){},this.addEventListener(r,o,!0));try{return B(this).dispatchEvent_(n)}finally{o&&this.removeEventListener(r,o,!0)}}},be&&F(be,N);var Ee=document.elementFromPoint;e.elementFromPoint=x,e.getEventHandlerGetter=R,e.getEventHandlerSetter=I,e.wrapEventTargetMethods=H,e.wrappers.BeforeUnloadEvent=M,e.wrappers.CustomEvent=le,e.wrappers.Event=y,e.wrappers.EventTarget=N,e.wrappers.FocusEvent=fe,e.wrappers.MouseEvent=he,e.wrappers.UIEvent=ce}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,m)}function n(e){l(e,this)}function r(){this.length=0,t(this,"length")}function o(e){for(var t=new r,o=0;o<e.length;o++)t[o]=new n(e[o]);return t.length=o,t}function i(e){a.call(this,e)}var a=e.wrappers.UIEvent,s=e.mixin,c=e.registerWrapper,l=e.setWrapper,u=e.unsafeUnwrap,d=e.wrap,p=window.TouchEvent;if(p){var h;try{h=document.createEvent("TouchEvent")}catch(f){return}var m={enumerable:!1};n.prototype={get target(){return d(u(this).target)}};var w={configurable:!0,enumerable:!0,get:null};["clientX","clientY","screenX","screenY","pageX","pageY","identifier","webkitRadiusX","webkitRadiusY","webkitRotationAngle","webkitForce"].forEach(function(e){w.get=function(){return u(this)[e]},Object.defineProperty(n.prototype,e,w)}),r.prototype={item:function(e){return this[e]}},i.prototype=Object.create(a.prototype),s(i.prototype,{get touches(){return o(u(this).touches)},get targetTouches(){return o(u(this).targetTouches)},get changedTouches(){return o(u(this).changedTouches)},initTouchEvent:function(){throw new Error("Not implemented")}}),c(p,i,h),e.wrappers.Touch=n,e.wrappers.TouchEvent=i,e.wrappers.TouchList=r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,s)}function n(){this.length=0,t(this,"length")}function r(e){if(null==e)return e;for(var t=new n,r=0,o=e.length;o>r;r++)t[r]=a(e[r]);return t.length=o,t}function o(e,t){e.prototype[t]=function(){return r(i(this)[t].apply(i(this),arguments))}}var i=e.unsafeUnwrap,a=e.wrap,s={enumerable:!1};n.prototype={item:function(e){return this[e]}},t(n.prototype,"item"),e.wrappers.NodeList=n,e.addWrapNodeListMethod=o,e.wrapNodeList=r}(window.ShadowDOMPolyfill),function(e){"use strict";e.wrapHTMLCollection=e.wrapNodeList,e.wrappers.HTMLCollection=e.wrappers.NodeList}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){O(e instanceof _)}function n(e){var t=new T;return t[0]=e,t.length=1,t}function r(e,t,n){N(t,"childList",{removedNodes:n,previousSibling:e.previousSibling,nextSibling:e.nextSibling})}function o(e,t){N(e,"childList",{removedNodes:t})}function i(e,t,r,o){if(e instanceof DocumentFragment){var i=s(e);U=!0;for(var a=i.length-1;a>=0;a--)e.removeChild(i[a]),i[a].parentNode_=t;U=!1;for(var a=0;a<i.length;a++)i[a].previousSibling_=i[a-1]||r,i[a].nextSibling_=i[a+1]||o;return r&&(r.nextSibling_=i[0]),o&&(o.previousSibling_=i[i.length-1]),i}var i=n(e),c=e.parentNode;return c&&c.removeChild(e),e.parentNode_=t,e.previousSibling_=r,e.nextSibling_=o,r&&(r.nextSibling_=e),o&&(o.previousSibling_=e),i}function a(e){if(e instanceof DocumentFragment)return s(e);var t=n(e),o=e.parentNode;return o&&r(e,o,t),t}function s(e){for(var t=new T,n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t.length=n,o(e,t),t}function c(e){return e}function l(e,t){R(e,t),e.nodeIsInserted_()}function u(e,t){for(var n=C(t),r=0;r<e.length;r++)l(e[r],n)}function d(e){R(e,new M(e,null))}function p(e){for(var t=0;t<e.length;t++)d(e[t])}function h(e,t){var n=e.nodeType===_.DOCUMENT_NODE?e:e.ownerDocument;n!==t.ownerDocument&&n.adoptNode(t)}function f(t,n){if(n.length){var r=t.ownerDocument;if(r!==n[0].ownerDocument)for(var o=0;o<n.length;o++)e.adoptNodeNoRemove(n[o],r)}}function m(e,t){f(e,t);var n=t.length;if(1===n)return P(t[0]);for(var r=P(e.ownerDocument.createDocumentFragment()),o=0;n>o;o++)r.appendChild(P(t[o]));return r}function w(e){if(void 0!==e.firstChild_)for(var t=e.firstChild_;t;){var n=t;t=t.nextSibling_,n.parentNode_=n.previousSibling_=n.nextSibling_=void 0}e.firstChild_=e.lastChild_=void 0}function v(e){if(e.invalidateShadowRenderer()){for(var t=e.firstChild;t;){O(t.parentNode===e);var n=t.nextSibling,r=P(t),o=r.parentNode;o&&X.call(o,r),t.previousSibling_=t.nextSibling_=t.parentNode_=null,t=n}e.firstChild_=e.lastChild_=null}else for(var n,i=P(e),a=i.firstChild;a;)n=a.nextSibling,X.call(i,a),a=n}function g(e){var t=e.parentNode;return t&&t.invalidateShadowRenderer()}function b(e){for(var t,n=0;n<e.length;n++)t=e[n],t.parentNode.removeChild(t)}function y(e,t,n){var r;if(r=A(n?q.call(n,I(e),!1):B.call(I(e),!1)),t){for(var o=e.firstChild;o;o=o.nextSibling)r.appendChild(y(o,!0,n));if(e instanceof F.HTMLTemplateElement)for(var i=r.content,o=e.content.firstChild;o;o=o.nextSibling)i.appendChild(y(o,!0,n))}return r}function E(e,t){if(!t||C(e)!==C(t))return!1;for(var n=t;n;n=n.parentNode)if(n===e)return!0;return!1}function _(e){O(e instanceof V),S.call(this,e),this.parentNode_=void 0,this.firstChild_=void 0,this.lastChild_=void 0,this.nextSibling_=void 0,this.previousSibling_=void 0,this.treeScope_=void 0}var S=e.wrappers.EventTarget,T=e.wrappers.NodeList,M=e.TreeScope,O=e.assert,L=e.defineWrapGetter,N=e.enqueueMutation,C=e.getTreeScope,j=e.isWrapper,D=e.mixin,H=e.registerTransientObservers,x=e.registerWrapper,R=e.setTreeScope,I=e.unsafeUnwrap,P=e.unwrap,k=e.unwrapIfNeeded,A=e.wrap,W=e.wrapIfNeeded,F=e.wrappers,U=!1,q=document.importNode,B=window.Node.prototype.cloneNode,V=window.Node,G=window.DocumentFragment,z=(V.prototype.appendChild,V.prototype.compareDocumentPosition),K=V.prototype.isEqualNode,$=V.prototype.insertBefore,X=V.prototype.removeChild,Y=V.prototype.replaceChild,Z=/Trident|Edge/.test(navigator.userAgent),J=Z?function(e,t){try{X.call(e,t)}catch(n){if(!(e instanceof G))throw n}}:function(e,t){X.call(e,t)};_.prototype=Object.create(S.prototype),D(_.prototype,{appendChild:function(e){return this.insertBefore(e,null)},insertBefore:function(e,n){t(e);var r;n?j(n)?r=P(n):(r=n,n=A(r)):(n=null,r=null),n&&O(n.parentNode===this);var o,s=n?n.previousSibling:this.lastChild,c=!this.invalidateShadowRenderer()&&!g(e);if(o=c?a(e):i(e,this,s,n),c)h(this,e),w(this),$.call(I(this),P(e),r);else{s||(this.firstChild_=o[0]),n||(this.lastChild_=o[o.length-1],void 0===this.firstChild_&&(this.firstChild_=this.firstChild));var l=r?r.parentNode:I(this);l?$.call(l,m(this,o),r):f(this,o)}return N(this,"childList",{addedNodes:o,nextSibling:n,previousSibling:s}),u(o,this),e},removeChild:function(e){if(t(e),e.parentNode!==this){for(var r=!1,o=(this.childNodes,this.firstChild);o;o=o.nextSibling)if(o===e){r=!0;break}if(!r)throw new Error("NotFoundError")}var i=P(e),a=e.nextSibling,s=e.previousSibling;if(this.invalidateShadowRenderer()){var c=this.firstChild,l=this.lastChild,u=i.parentNode;u&&J(u,i),c===e&&(this.firstChild_=a),l===e&&(this.lastChild_=s),s&&(s.nextSibling_=a),a&&(a.previousSibling_=s),e.previousSibling_=e.nextSibling_=e.parentNode_=void 0}else w(this),J(I(this),i);return U||N(this,"childList",{removedNodes:n(e),nextSibling:a,previousSibling:s}),H(this,e),e},replaceChild:function(e,r){t(e);var o;if(j(r)?o=P(r):(o=r,r=A(o)),r.parentNode!==this)throw new Error("NotFoundError");var s,c=r.nextSibling,l=r.previousSibling,p=!this.invalidateShadowRenderer()&&!g(e);return p?s=a(e):(c===e&&(c=e.nextSibling),s=i(e,this,l,c)),p?(h(this,e),w(this),Y.call(I(this),P(e),o)):(this.firstChild===r&&(this.firstChild_=s[0]),this.lastChild===r&&(this.lastChild_=s[s.length-1]),r.previousSibling_=r.nextSibling_=r.parentNode_=void 0,o.parentNode&&Y.call(o.parentNode,m(this,s),o)),N(this,"childList",{addedNodes:s,removedNodes:n(r),nextSibling:c,previousSibling:l}),d(r),u(s,this),r},nodeIsInserted_:function(){for(var e=this.firstChild;e;e=e.nextSibling)e.nodeIsInserted_()},hasChildNodes:function(){return null!==this.firstChild},get parentNode(){return void 0!==this.parentNode_?this.parentNode_:A(I(this).parentNode)},get firstChild(){return void 0!==this.firstChild_?this.firstChild_:A(I(this).firstChild)},get lastChild(){return void 0!==this.lastChild_?this.lastChild_:A(I(this).lastChild)},get nextSibling(){return void 0!==this.nextSibling_?this.nextSibling_:A(I(this).nextSibling)},get previousSibling(){return void 0!==this.previousSibling_?this.previousSibling_:A(I(this).previousSibling)},get parentElement(){for(var e=this.parentNode;e&&e.nodeType!==_.ELEMENT_NODE;)e=e.parentNode;return e},get textContent(){for(var e="",t=this.firstChild;t;t=t.nextSibling)t.nodeType!=_.COMMENT_NODE&&(e+=t.textContent);return e},set textContent(e){null==e&&(e="");var t=c(this.childNodes);if(this.invalidateShadowRenderer()){if(v(this),""!==e){var n=I(this).ownerDocument.createTextNode(e);this.appendChild(n)}}else w(this),I(this).textContent=e;var r=c(this.childNodes);N(this,"childList",{addedNodes:r,removedNodes:t}),p(t),u(r,this)},get childNodes(){for(var e=new T,t=0,n=this.firstChild;n;n=n.nextSibling)e[t++]=n;return e.length=t,e},cloneNode:function(e){return y(this,e)},contains:function(e){return E(this,W(e))},compareDocumentPosition:function(e){return z.call(I(this),k(e))},isEqualNode:function(e){return K.call(I(this),k(e))},normalize:function(){for(var e,t,n=c(this.childNodes),r=[],o="",i=0;i<n.length;i++)t=n[i],t.nodeType===_.TEXT_NODE?e||t.data.length?e?(o+=t.data,r.push(t)):e=t:this.removeChild(t):(e&&r.length&&(e.data+=o,b(r)),r=[],o="",e=null,t.childNodes.length&&t.normalize());e&&r.length&&(e.data+=o,b(r))}}),L(_,"ownerDocument"),x(V,_,document.createDocumentFragment()),delete _.prototype.querySelector,delete _.prototype.querySelectorAll,_.prototype=D(Object.create(S.prototype),_.prototype),e.cloneNode=y,e.nodeWasAdded=l,e.nodeWasRemoved=d,e.nodesWereAdded=u,e.nodesWereRemoved=p,e.originalInsertBefore=$,e.originalRemoveChild=X,e.snapshotNodeList=c,e.wrappers.Node=_}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n,r,o){for(var i=null,a=null,s=0,c=t.length;c>s;s++)i=b(t[s]),!o&&(a=v(i).root)&&a instanceof e.wrappers.ShadowRoot||(r[n++]=i);return n}function n(e){return String(e).replace(/\/deep\/|::shadow|>>>/g," ")}function r(e){return String(e).replace(/:host\(([^\s]+)\)/g,"$1").replace(/([^\s]):host/g,"$1").replace(":host","*").replace(/\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g," ")}function o(e,t){for(var n,r=e.firstElementChild;r;){if(r.matches(t))return r;if(n=o(r,t))return n;r=r.nextElementSibling}return null}function i(e,t){return e.matches(t)}function a(e,t,n){var r=e.localName;return r===t||r===n&&e.namespaceURI===j}function s(){return!0}function c(e,t,n){return e.localName===n}function l(e,t){return e.namespaceURI===t}function u(e,t,n){return e.namespaceURI===t&&e.localName===n}function d(e,t,n,r,o,i){for(var a=e.firstElementChild;a;)r(a,o,i)&&(n[t++]=a),t=d(a,t,n,r,o,i),a=a.nextElementSibling;return t}function p(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,null);if(c instanceof N)s=S.call(c,i);else{if(!(c instanceof C))return d(this,r,o,n,i,null);s=_.call(c,i)}return t(s,r,o,a)}function h(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,a);if(c instanceof N)s=M.call(c,i,a);else{if(!(c instanceof C))return d(this,r,o,n,i,a);s=T.call(c,i,a)}return t(s,r,o,!1)}function f(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,a);if(c instanceof N)s=L.call(c,i,a);else{if(!(c instanceof C))return d(this,r,o,n,i,a);s=O.call(c,i,a)}return t(s,r,o,!1)}var m=e.wrappers.HTMLCollection,w=e.wrappers.NodeList,v=e.getTreeScope,g=e.unsafeUnwrap,b=e.wrap,y=document.querySelector,E=document.documentElement.querySelector,_=document.querySelectorAll,S=document.documentElement.querySelectorAll,T=document.getElementsByTagName,M=document.documentElement.getElementsByTagName,O=document.getElementsByTagNameNS,L=document.documentElement.getElementsByTagNameNS,N=window.Element,C=window.HTMLDocument||window.Document,j="http://www.w3.org/1999/xhtml",D={querySelector:function(t){var r=n(t),i=r!==t;t=r;var a,s=g(this),c=v(this).root;if(c instanceof e.wrappers.ShadowRoot)return o(this,t);if(s instanceof N)a=b(E.call(s,t));else{
if(!(s instanceof C))return o(this,t);a=b(y.call(s,t))}return a&&!i&&(c=v(a).root)&&c instanceof e.wrappers.ShadowRoot?o(this,t):a},querySelectorAll:function(e){var t=n(e),r=t!==e;e=t;var o=new w;return o.length=p.call(this,i,0,o,e,r),o}},H={matches:function(t){return t=r(t),e.originalMatches.call(g(this),t)}},x={getElementsByTagName:function(e){var t=new m,n="*"===e?s:a;return t.length=h.call(this,n,0,t,e,e.toLowerCase()),t},getElementsByClassName:function(e){return this.querySelectorAll("."+e)},getElementsByTagNameNS:function(e,t){var n=new m,r=null;return r="*"===e?"*"===t?s:c:"*"===t?l:u,n.length=f.call(this,r,0,n,e||null,t),n}};e.GetElementsByInterface=x,e.SelectorsInterface=D,e.MatchesInterface=H}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}function n(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}var r=e.wrappers.NodeList,o={get firstElementChild(){return t(this.firstChild)},get lastElementChild(){return n(this.lastChild)},get childElementCount(){for(var e=0,t=this.firstElementChild;t;t=t.nextElementSibling)e++;return e},get children(){for(var e=new r,t=0,n=this.firstElementChild;n;n=n.nextElementSibling)e[t++]=n;return e.length=t,e},remove:function(){var e=this.parentNode;e&&e.removeChild(this)}},i={get nextElementSibling(){return t(this.nextSibling)},get previousElementSibling(){return n(this.previousSibling)}},a={getElementById:function(e){return/[ \t\n\r\f]/.test(e)?null:this.querySelector('[id="'+e+'"]')}};e.ChildNodeInterface=i,e.NonElementParentNodeInterface=a,e.ParentNodeInterface=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}var n=e.ChildNodeInterface,r=e.wrappers.Node,o=e.enqueueMutation,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=window.CharacterData;t.prototype=Object.create(r.prototype),i(t.prototype,{get nodeValue(){return this.data},set nodeValue(e){this.data=e},get textContent(){return this.data},set textContent(e){this.data=e},get data(){return s(this).data},set data(e){var t=s(this).data;o(this,"characterData",{oldValue:t}),s(this).data=e}}),i(t.prototype,n),a(c,t,document.createTextNode("")),e.wrappers.CharacterData=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e>>>0}function n(e){r.call(this,e)}var r=e.wrappers.CharacterData,o=(e.enqueueMutation,e.mixin),i=e.registerWrapper,a=window.Text;n.prototype=Object.create(r.prototype),o(n.prototype,{splitText:function(e){e=t(e);var n=this.data;if(e>n.length)throw new Error("IndexSizeError");var r=n.slice(0,e),o=n.slice(e);this.data=r;var i=this.ownerDocument.createTextNode(o);return this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling),i}}),i(a,n,document.createTextNode("")),e.wrappers.Text=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return i(e).getAttribute("class")}function n(e,t){a(e,"attributes",{name:"class",namespace:null,oldValue:t})}function r(t){e.invalidateRendererBasedOnAttribute(t,"class")}function o(e,o,i){var a=e.ownerElement_;if(null==a)return o.apply(e,i);var s=t(a),c=o.apply(e,i);return t(a)!==s&&(n(a,s),r(a)),c}if(!window.DOMTokenList)return void void 0;var i=e.unsafeUnwrap,a=e.enqueueMutation,s=DOMTokenList.prototype.add;DOMTokenList.prototype.add=function(){o(this,s,arguments)};var c=DOMTokenList.prototype.remove;DOMTokenList.prototype.remove=function(){o(this,c,arguments)};var l=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(){return o(this,l,arguments)}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n){var r=t.parentNode;if(r&&r.shadowRoot){var o=e.getRendererForHost(r);o.dependsOnAttribute(n)&&o.invalidate()}}function n(e,t,n){u(e,"attributes",{name:t,namespace:null,oldValue:n})}function r(e){a.call(this,e)}var o=e.ChildNodeInterface,i=e.GetElementsByInterface,a=e.wrappers.Node,s=e.ParentNodeInterface,c=e.SelectorsInterface,l=e.MatchesInterface,u=(e.addWrapNodeListMethod,e.enqueueMutation),d=e.mixin,p=(e.oneOf,e.registerWrapper),h=e.unsafeUnwrap,f=e.wrappers,m=window.Element,w=["matches","mozMatchesSelector","msMatchesSelector","webkitMatchesSelector"].filter(function(e){return m.prototype[e]}),v=w[0],g=m.prototype[v],b=new WeakMap;r.prototype=Object.create(a.prototype),d(r.prototype,{createShadowRoot:function(){var t=new f.ShadowRoot(this);h(this).polymerShadowRoot_=t;var n=e.getRendererForHost(this);return n.invalidate(),t},get shadowRoot(){return h(this).polymerShadowRoot_||null},setAttribute:function(e,r){var o=h(this).getAttribute(e);h(this).setAttribute(e,r),n(this,e,o),t(this,e)},removeAttribute:function(e){var r=h(this).getAttribute(e);h(this).removeAttribute(e),n(this,e,r),t(this,e)},get classList(){var e=b.get(this);if(!e){if(e=h(this).classList,!e)return;e.ownerElement_=this,b.set(this,e)}return e},get className(){return h(this).className},set className(e){this.setAttribute("class",e)},get id(){return h(this).id},set id(e){this.setAttribute("id",e)}}),w.forEach(function(e){"matches"!==e&&(r.prototype[e]=function(e){return this.matches(e)})}),m.prototype.webkitCreateShadowRoot&&(r.prototype.webkitCreateShadowRoot=r.prototype.createShadowRoot),d(r.prototype,o),d(r.prototype,i),d(r.prototype,s),d(r.prototype,c),d(r.prototype,l),p(m,r,document.createElementNS(null,"x")),e.invalidateRendererBasedOnAttribute=t,e.matchesNames=w,e.originalMatches=g,e.wrappers.Element=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function n(e){return e.replace(L,t)}function r(e){return e.replace(N,t)}function o(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function i(e){if(e.namespaceURI!==D)return!0;var t=e.ownerDocument.doctype;return t&&t.publicId&&t.systemId}function a(e,t){switch(e.nodeType){case Node.ELEMENT_NODE:for(var o,a=e.tagName.toLowerCase(),c="<"+a,l=e.attributes,u=0;o=l[u];u++)c+=" "+o.name+'="'+n(o.value)+'"';return C[a]?(i(e)&&(c+="/"),c+">"):c+">"+s(e)+"</"+a+">";case Node.TEXT_NODE:var d=e.data;return t&&j[t.localName]?d:r(d);case Node.COMMENT_NODE:return"<!--"+e.data+"-->";default:throw void 0,new Error("not implemented")}}function s(e){e instanceof O.HTMLTemplateElement&&(e=e.content);for(var t="",n=e.firstChild;n;n=n.nextSibling)t+=a(n,e);return t}function c(e,t,n){var r=n||"div";e.textContent="";var o=T(e.ownerDocument.createElement(r));o.innerHTML=t;for(var i;i=o.firstChild;)e.appendChild(M(i))}function l(e){m.call(this,e)}function u(e,t){var n=T(e.cloneNode(!1));n.innerHTML=t;for(var r,o=T(document.createDocumentFragment());r=n.firstChild;)o.appendChild(r);return M(o)}function d(t){return function(){return e.renderAllPending(),S(this)[t]}}function p(e){w(l,e,d(e))}function h(t){Object.defineProperty(l.prototype,t,{get:d(t),set:function(n){e.renderAllPending(),S(this)[t]=n},configurable:!0,enumerable:!0})}function f(t){Object.defineProperty(l.prototype,t,{value:function(){return e.renderAllPending(),S(this)[t].apply(S(this),arguments)},configurable:!0,enumerable:!0})}var m=e.wrappers.Element,w=e.defineGetter,v=e.enqueueMutation,g=e.mixin,b=e.nodesWereAdded,y=e.nodesWereRemoved,E=e.registerWrapper,_=e.snapshotNodeList,S=e.unsafeUnwrap,T=e.unwrap,M=e.wrap,O=e.wrappers,L=/[&\u00A0"]/g,N=/[&\u00A0<>]/g,C=o(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),j=o(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),D="http://www.w3.org/1999/xhtml",H=/MSIE/.test(navigator.userAgent),x=window.HTMLElement,R=window.HTMLTemplateElement;l.prototype=Object.create(m.prototype),g(l.prototype,{get innerHTML(){return s(this)},set innerHTML(e){if(H&&j[this.localName])return void(this.textContent=e);var t=_(this.childNodes);this.invalidateShadowRenderer()?this instanceof O.HTMLTemplateElement?c(this.content,e):c(this,e,this.tagName):!R&&this instanceof O.HTMLTemplateElement?c(this.content,e):S(this).innerHTML=e;var n=_(this.childNodes);v(this,"childList",{addedNodes:n,removedNodes:t}),y(t),b(n,this)},get outerHTML(){return a(this,this.parentNode)},set outerHTML(e){var t=this.parentNode;if(t){t.invalidateShadowRenderer();var n=u(t,e);t.replaceChild(n,this)}},insertAdjacentHTML:function(e,t){var n,r;switch(String(e).toLowerCase()){case"beforebegin":n=this.parentNode,r=this;break;case"afterend":n=this.parentNode,r=this.nextSibling;break;case"afterbegin":n=this,r=this.firstChild;break;case"beforeend":n=this,r=null;break;default:return}var o=u(n,t);n.insertBefore(o,r)},get hidden(){return this.hasAttribute("hidden")},set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}}),["clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollWidth"].forEach(p),["scrollLeft","scrollTop"].forEach(h),["getBoundingClientRect","getClientRects","scrollIntoView"].forEach(f),E(x,l,document.createElement("b")),e.wrappers.HTMLElement=l,e.getInnerHTML=s,e.setInnerHTML=c}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.HTMLCanvasElement;t.prototype=Object.create(n.prototype),r(t.prototype,{getContext:function(){var e=i(this).getContext.apply(i(this),arguments);return e&&a(e)}}),o(s,t,document.createElement("canvas")),e.wrappers.HTMLCanvasElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=window.HTMLContentElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get select(){return this.getAttribute("select")},set select(e){this.setAttribute("select",e)},setAttribute:function(e,t){n.prototype.setAttribute.call(this,e,t),"select"===String(e).toLowerCase()&&this.invalidateShadowRenderer(!0)}}),i&&o(i,t),e.wrappers.HTMLContentElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=window.HTMLFormElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get elements(){return i(a(this).elements)}}),o(s,t,document.createElement("form")),e.wrappers.HTMLFormElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e,t){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var o=i(document.createElement("img"));r.call(this,o),a(o,this),void 0!==e&&(o.width=e),void 0!==t&&(o.height=t)}var r=e.wrappers.HTMLElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLImageElement;t.prototype=Object.create(r.prototype),o(s,t,document.createElement("img")),n.prototype=t.prototype,e.wrappers.HTMLImageElement=t,e.wrappers.Image=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=(e.mixin,e.wrappers.NodeList,e.registerWrapper),o=window.HTMLShadowElement;t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o&&r(o,t),e.wrappers.HTMLShadowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){if(!e.defaultView)return e;var t=d.get(e);if(!t){for(t=e.implementation.createHTMLDocument("");t.lastChild;)t.removeChild(t.lastChild);d.set(e,t)}return t}function n(e){for(var n,r=t(e.ownerDocument),o=c(r.createDocumentFragment());n=e.firstChild;)o.appendChild(n);return o}function r(e){if(o.call(this,e),!p){var t=n(e);u.set(this,l(t))}}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.wrap,u=new WeakMap,d=new WeakMap,p=window.HTMLTemplateElement;r.prototype=Object.create(o.prototype),i(r.prototype,{constructor:r,get content(){return p?l(s(this).content):u.get(this)}}),p&&a(p,r),e.wrappers.HTMLTemplateElement=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.registerWrapper,o=window.HTMLMediaElement;o&&(t.prototype=Object.create(n.prototype),r(o,t,document.createElement("audio")),e.wrappers.HTMLMediaElement=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var t=i(document.createElement("audio"));r.call(this,t),a(t,this),t.setAttribute("preload","auto"),void 0!==e&&t.setAttribute("src",e)}var r=e.wrappers.HTMLMediaElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLAudioElement;s&&(t.prototype=Object.create(r.prototype),o(s,t,document.createElement("audio")),n.prototype=t.prototype,e.wrappers.HTMLAudioElement=t,e.wrappers.Audio=n)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e.replace(/\s+/g," ").trim()}function n(e){o.call(this,e)}function r(e,t,n,i){if(!(this instanceof r))throw new TypeError("DOM object constructor cannot be called as a function.");var a=c(document.createElement("option"));o.call(this,a),s(a,this),void 0!==e&&(a.text=e),void 0!==t&&a.setAttribute("value",t),n===!0&&a.setAttribute("selected",""),a.selected=i===!0}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.rewrap,c=e.unwrap,l=e.wrap,u=window.HTMLOptionElement;n.prototype=Object.create(o.prototype),i(n.prototype,{get text(){return t(this.textContent)},set text(e){this.textContent=t(String(e))},get form(){return l(c(this).form)}}),a(u,n,document.createElement("option")),r.prototype=n.prototype,e.wrappers.HTMLOptionElement=n,e.wrappers.Option=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=window.HTMLSelectElement;t.prototype=Object.create(n.prototype),r(t.prototype,{add:function(e,t){"object"==typeof t&&(t=i(t)),i(this).add(i(e),t)},remove:function(e){return void 0===e?void n.prototype.remove.call(this):("object"==typeof e&&(e=i(e)),void i(this).remove(e))},get form(){return a(i(this).form)}}),o(s,t,document.createElement("select")),e.wrappers.HTMLSelectElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=e.wrapHTMLCollection,c=window.HTMLTableElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get caption(){return a(i(this).caption)},createCaption:function(){return a(i(this).createCaption())},get tHead(){return a(i(this).tHead)},createTHead:function(){return a(i(this).createTHead())},createTFoot:function(){return a(i(this).createTFoot())},get tFoot(){return a(i(this).tFoot)},get tBodies(){return s(i(this).tBodies)},createTBody:function(){return a(i(this).createTBody())},get rows(){return s(i(this).rows)},insertRow:function(e){return a(i(this).insertRow(e))}}),o(c,t,document.createElement("table")),e.wrappers.HTMLTableElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableSectionElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get rows(){return i(a(this).rows)},insertRow:function(e){return s(a(this).insertRow(e))}}),o(c,t,document.createElement("thead")),e.wrappers.HTMLTableSectionElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableRowElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get cells(){return i(a(this).cells)},insertCell:function(e){return s(a(this).insertCell(e))}}),o(c,t,document.createElement("tr")),e.wrappers.HTMLTableRowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e.localName){case"content":return new n(e);case"shadow":return new o(e);case"template":return new i(e)}r.call(this,e)}var n=e.wrappers.HTMLContentElement,r=e.wrappers.HTMLElement,o=e.wrappers.HTMLShadowElement,i=e.wrappers.HTMLTemplateElement,a=(e.mixin,e.registerWrapper),s=window.HTMLUnknownElement;t.prototype=Object.create(r.prototype),a(s,t),e.wrappers.HTMLUnknownElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.Element,r=e.wrappers.HTMLElement,o=e.registerWrapper,i=(e.defineWrapGetter,e.unsafeUnwrap),a=e.wrap,s=e.mixin,c="http://www.w3.org/2000/svg",l=window.SVGElement,u=document.createElementNS(c,"title");if(!("classList"in u)){var d=Object.getOwnPropertyDescriptor(n.prototype,"classList");Object.defineProperty(r.prototype,"classList",d),delete n.prototype.classList}t.prototype=Object.create(n.prototype),s(t.prototype,{get ownerSVGElement(){return a(i(this).ownerSVGElement)}}),o(l,t,document.createElementNS(c,"title")),e.wrappers.SVGElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){p.call(this,e)}var n=e.mixin,r=e.registerWrapper,o=e.unwrap,i=e.wrap,a=window.SVGUseElement,s="http://www.w3.org/2000/svg",c=i(document.createElementNS(s,"g")),l=document.createElementNS(s,"use"),u=c.constructor,d=Object.getPrototypeOf(u.prototype),p=d.constructor;t.prototype=Object.create(d),"instanceRoot"in l&&n(t.prototype,{get instanceRoot(){return i(o(this).instanceRoot)},get animatedInstanceRoot(){return i(o(this).animatedInstanceRoot)}}),r(a,t,l),e.wrappers.SVGUseElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.SVGElementInstance;s&&(t.prototype=Object.create(n.prototype),r(t.prototype,{get correspondingElement(){return a(i(this).correspondingElement)},get correspondingUseElement(){return a(i(this).correspondingUseElement)},get parentNode(){return a(i(this).parentNode)},get childNodes(){throw new Error("Not implemented")},get firstChild(){return a(i(this).firstChild)},get lastChild(){return a(i(this).lastChild)},get previousSibling(){return a(i(this).previousSibling)},get nextSibling(){return a(i(this).nextSibling)}}),o(s,t),e.wrappers.SVGElementInstance=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrap,s=e.unwrapIfNeeded,c=e.wrap,l=window.CanvasRenderingContext2D;n(t.prototype,{get canvas(){return c(i(this).canvas)},drawImage:function(){arguments[0]=s(arguments[0]),i(this).drawImage.apply(i(this),arguments)},createPattern:function(){return arguments[0]=a(arguments[0]),i(this).createPattern.apply(i(this),arguments)}}),r(l,t,document.createElement("canvas").getContext("2d")),e.wrappers.CanvasRenderingContext2D=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.WebGLRenderingContext;if(c){n(t.prototype,{get canvas(){return s(i(this).canvas)},texImage2D:function(){arguments[5]=a(arguments[5]),i(this).texImage2D.apply(i(this),arguments)},texSubImage2D:function(){arguments[6]=a(arguments[6]),i(this).texSubImage2D.apply(i(this),arguments)}});var l=/WebKit/.test(navigator.userAgent)?{drawingBufferHeight:null,drawingBufferWidth:null}:{};r(c,t,l),e.wrappers.WebGLRenderingContext=t}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.Node,r=e.GetElementsByInterface,o=e.NonElementParentNodeInterface,i=e.ParentNodeInterface,a=e.SelectorsInterface,s=e.mixin,c=e.registerObject,l=e.registerWrapper,u=window.DocumentFragment;t.prototype=Object.create(n.prototype),s(t.prototype,i),s(t.prototype,a),s(t.prototype,r),s(t.prototype,o),l(u,t,document.createDocumentFragment()),e.wrappers.DocumentFragment=t;var d=c(document.createComment(""));e.wrappers.Comment=d}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(u(e).ownerDocument.createDocumentFragment());n.call(this,t),c(t,this);var o=e.shadowRoot;h.set(this,o),this.treeScope_=new r(this,a(o||e)),p.set(this,e)}var n=e.wrappers.DocumentFragment,r=e.TreeScope,o=e.elementFromPoint,i=e.getInnerHTML,a=e.getTreeScope,s=e.mixin,c=e.rewrap,l=e.setInnerHTML,u=e.unsafeUnwrap,d=e.unwrap,p=new WeakMap,h=new WeakMap;t.prototype=Object.create(n.prototype),s(t.prototype,{constructor:t,get innerHTML(){return i(this)},set innerHTML(e){l(this,e),this.invalidateShadowRenderer()},get olderShadowRoot(){return h.get(this)||null},get host(){return p.get(this)||null},invalidateShadowRenderer:function(){return p.get(this).invalidateShadowRenderer()},elementFromPoint:function(e,t){return o(this,this.ownerDocument,e,t)}}),e.wrappers.ShadowRoot=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(e).root;return t instanceof h?t.host:null}function n(t,n){if(t.shadowRoot){n=Math.min(t.childNodes.length-1,n);var r=t.childNodes[n];if(r){var o=e.getDestinationInsertionPoints(r);if(o.length>0){var i=o[0].parentNode;i.nodeType==Node.ELEMENT_NODE&&(t=i)}}}return t}function r(e){return e=u(e),t(e)||e}function o(e){a(e,this)}var i=e.registerWrapper,a=e.setWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.unwrapIfNeeded,u=e.wrap,d=e.getTreeScope,p=window.Range,h=e.wrappers.ShadowRoot;o.prototype={get startContainer(){return r(s(this).startContainer)},get endContainer(){return r(s(this).endContainer)},get commonAncestorContainer(){return r(s(this).commonAncestorContainer)},setStart:function(e,t){e=n(e,t),s(this).setStart(l(e),t)},setEnd:function(e,t){e=n(e,t),s(this).setEnd(l(e),t)},setStartBefore:function(e){s(this).setStartBefore(l(e))},setStartAfter:function(e){s(this).setStartAfter(l(e))},setEndBefore:function(e){s(this).setEndBefore(l(e))},setEndAfter:function(e){s(this).setEndAfter(l(e))},selectNode:function(e){s(this).selectNode(l(e))},selectNodeContents:function(e){s(this).selectNodeContents(l(e))},compareBoundaryPoints:function(e,t){return s(this).compareBoundaryPoints(e,c(t))},extractContents:function(){return u(s(this).extractContents())},cloneContents:function(){return u(s(this).cloneContents())},insertNode:function(e){s(this).insertNode(l(e))},surroundContents:function(e){s(this).surroundContents(l(e))},cloneRange:function(){return u(s(this).cloneRange())},isPointInRange:function(e,t){return s(this).isPointInRange(l(e),t)},comparePoint:function(e,t){return s(this).comparePoint(l(e),t)},intersectsNode:function(e){return s(this).intersectsNode(l(e))},toString:function(){return s(this).toString()}},p.prototype.createContextualFragment&&(o.prototype.createContextualFragment=function(e){return u(s(this).createContextualFragment(e))}),i(window.Range,o,document.createRange()),e.wrappers.Range=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.previousSibling_=e.previousSibling,e.nextSibling_=e.nextSibling,e.parentNode_=e.parentNode}function n(n,o,i){var a=x(n),s=x(o),c=i?x(i):null;if(r(o),t(o),i)n.firstChild===i&&(n.firstChild_=i),i.previousSibling_=i.previousSibling;else{n.lastChild_=n.lastChild,n.lastChild===n.firstChild&&(n.firstChild_=n.firstChild);var l=R(a.lastChild);l&&(l.nextSibling_=l.nextSibling)}e.originalInsertBefore.call(a,s,c)}function r(n){var r=x(n),o=r.parentNode;if(o){var i=R(o);t(n),n.previousSibling&&(n.previousSibling.nextSibling_=n),n.nextSibling&&(n.nextSibling.previousSibling_=n),i.lastChild===n&&(i.lastChild_=n),i.firstChild===n&&(i.firstChild_=n),e.originalRemoveChild.call(o,r)}}function o(e){P.set(e,[])}function i(e){var t=P.get(e);return t||P.set(e,t=[]),t}function a(e){for(var t=[],n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t}function s(){for(var e=0;e<F.length;e++){var t=F[e],n=t.parentRenderer;n&&n.dirty||t.render()}F=[]}function c(){T=null,s()}function l(e){var t=A.get(e);return t||(t=new h(e),A.set(e,t)),t}function u(e){var t=j(e).root;return t instanceof C?t:null}function d(e){return l(e.host)}function p(e){this.skip=!1,this.node=e,this.childNodes=[]}function h(e){this.host=e,this.dirty=!1,this.invalidateAttributes(),this.associateNode(e)}function f(e){for(var t=[],n=e.firstChild;n;n=n.nextSibling)E(n)?t.push.apply(t,i(n)):t.push(n);return t}function m(e){if(e instanceof L)return e;if(e instanceof O)return null;for(var t=e.firstChild;t;t=t.nextSibling){var n=m(t);if(n)return n}return null}function w(e,t){i(t).push(e);var n=k.get(e);n?n.push(t):k.set(e,[t])}function v(e){return k.get(e)}function g(e){k.set(e,void 0)}function b(e,t){var n=t.getAttribute("select");if(!n)return!0;if(n=n.trim(),!n)return!0;if(!(e instanceof M))return!1;if(!q.test(n))return!1;try{return e.matches(n)}catch(r){return!1}}function y(e,t){var n=v(t);return n&&n[n.length-1]===e}function E(e){return e instanceof O||e instanceof L}function _(e){return e.shadowRoot}function S(e){for(var t=[],n=e.shadowRoot;n;n=n.olderShadowRoot)t.push(n);return t}var T,M=e.wrappers.Element,O=e.wrappers.HTMLContentElement,L=e.wrappers.HTMLShadowElement,N=e.wrappers.Node,C=e.wrappers.ShadowRoot,j=(e.assert,e.getTreeScope),D=(e.mixin,e.oneOf),H=e.unsafeUnwrap,x=e.unwrap,R=e.wrap,I=e.ArraySplice,P=new WeakMap,k=new WeakMap,A=new WeakMap,W=D(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","setTimeout"]),F=[],U=new I;U.equals=function(e,t){return x(e.node)===t},p.prototype={append:function(e){var t=new p(e);return this.childNodes.push(t),t},sync:function(e){if(!this.skip){for(var t=this.node,o=this.childNodes,i=a(x(t)),s=e||new WeakMap,c=U.calculateSplices(o,i),l=0,u=0,d=0,p=0;p<c.length;p++){for(var h=c[p];d<h.index;d++)u++,o[l++].sync(s);for(var f=h.removed.length,m=0;f>m;m++){var w=R(i[u++]);s.get(w)||r(w)}for(var v=h.addedCount,g=i[u]&&R(i[u]),m=0;v>m;m++){var b=o[l++],y=b.node;n(t,y,g),s.set(y,!0),b.sync(s)}d+=v}for(var p=d;p<o.length;p++)o[p].sync(s)}}},h.prototype={render:function(e){if(this.dirty){this.invalidateAttributes();var t=this.host;this.distribution(t);var n=e||new p(t);this.buildRenderTree(n,t);var r=!e;r&&n.sync(),this.dirty=!1}},get parentRenderer(){return j(this.host).renderer},invalidate:function(){if(!this.dirty){this.dirty=!0;var e=this.parentRenderer;if(e&&e.invalidate(),F.push(this),T)return;T=window[W](c,0)}},distribution:function(e){this.resetAllSubtrees(e),this.distributionResolution(e)},resetAll:function(e){E(e)?o(e):g(e),this.resetAllSubtrees(e)},resetAllSubtrees:function(e){for(var t=e.firstChild;t;t=t.nextSibling)this.resetAll(t);e.shadowRoot&&this.resetAll(e.shadowRoot),e.olderShadowRoot&&this.resetAll(e.olderShadowRoot)},distributionResolution:function(e){if(_(e)){for(var t=e,n=f(t),r=S(t),o=0;o<r.length;o++)this.poolDistribution(r[o],n);for(var o=r.length-1;o>=0;o--){var i=r[o],a=m(i);if(a){var s=i.olderShadowRoot;s&&(n=f(s));for(var c=0;c<n.length;c++)w(n[c],a)}this.distributionResolution(i)}}for(var l=e.firstChild;l;l=l.nextSibling)this.distributionResolution(l)},poolDistribution:function(e,t){if(!(e instanceof L))if(e instanceof O){var n=e;this.updateDependentAttributes(n.getAttribute("select"));for(var r=!1,o=0;o<t.length;o++){var e=t[o];e&&b(e,n)&&(w(e,n),t[o]=void 0,r=!0)}if(!r)for(var i=n.firstChild;i;i=i.nextSibling)w(i,n)}else for(var i=e.firstChild;i;i=i.nextSibling)this.poolDistribution(i,t)},buildRenderTree:function(e,t){for(var n=this.compose(t),r=0;r<n.length;r++){var o=n[r],i=e.append(o);this.buildRenderTree(i,o)}if(_(t)){var a=l(t);a.dirty=!1}},compose:function(e){for(var t=[],n=e.shadowRoot||e,r=n.firstChild;r;r=r.nextSibling)if(E(r)){this.associateNode(n);for(var o=i(r),a=0;a<o.length;a++){var s=o[a];y(r,s)&&t.push(s)}}else t.push(r);return t},invalidateAttributes:function(){this.attributes=Object.create(null)},updateDependentAttributes:function(e){if(e){var t=this.attributes;/\.\w+/.test(e)&&(t["class"]=!0),/#\w+/.test(e)&&(t.id=!0),e.replace(/\[\s*([^\s=\|~\]]+)/g,function(e,n){t[n]=!0})}},dependsOnAttribute:function(e){return this.attributes[e]},associateNode:function(e){H(e).polymerShadowRenderer_=this}};var q=/^(:not\()?[*.#[a-zA-Z_|]/;N.prototype.invalidateShadowRenderer=function(e){var t=H(this).polymerShadowRenderer_;return t?(t.invalidate(),!0):!1},O.prototype.getDistributedNodes=L.prototype.getDistributedNodes=function(){return s(),i(this)},M.prototype.getDestinationInsertionPoints=function(){return s(),v(this)||[]},O.prototype.nodeIsInserted_=L.prototype.nodeIsInserted_=function(){this.invalidateShadowRenderer();var e,t=u(this);t&&(e=d(t)),H(this).polymerShadowRenderer_=e,e&&e.invalidate()},e.getRendererForHost=l,e.getShadowTrees=S,e.renderAllPending=s,e.getDestinationInsertionPoints=v,e.visual={insertBefore:n,remove:r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){if(window[t]){r(!e.wrappers[t]);var c=function(e){n.call(this,e)};c.prototype=Object.create(n.prototype),o(c.prototype,{get form(){return s(a(this).form)}}),i(window[t],c,document.createElement(t.slice(4,-7))),e.wrappers[t]=c}}var n=e.wrappers.HTMLElement,r=e.assert,o=e.mixin,i=e.registerWrapper,a=e.unwrap,s=e.wrap,c=["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLKeygenElement","HTMLLabelElement","HTMLLegendElement","HTMLObjectElement","HTMLOutputElement","HTMLTextAreaElement"];c.forEach(t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.Selection;t.prototype={get anchorNode(){return s(o(this).anchorNode)},get focusNode(){return s(o(this).focusNode)},addRange:function(e){o(this).addRange(a(e))},collapse:function(e,t){o(this).collapse(a(e),t)},containsNode:function(e,t){return o(this).containsNode(a(e),t)},getRangeAt:function(e){return s(o(this).getRangeAt(e))},removeRange:function(e){o(this).removeRange(i(e))},selectAllChildren:function(e){o(this).selectAllChildren(a(e))},toString:function(){return o(this).toString()}},c.prototype.extend&&(t.prototype.extend=function(e,t){o(this).extend(a(e),t)}),n(window.Selection,t,window.getSelection()),e.wrappers.Selection=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrapIfNeeded,a=e.wrap,s=window.TreeWalker;t.prototype={get root(){return a(o(this).root)},get currentNode(){return a(o(this).currentNode)},set currentNode(e){o(this).currentNode=i(e)},get filter(){return o(this).filter},parentNode:function(){return a(o(this).parentNode())},firstChild:function(){return a(o(this).firstChild())},lastChild:function(){return a(o(this).lastChild())},previousSibling:function(){return a(o(this).previousSibling())},previousNode:function(){return a(o(this).previousNode())},nextNode:function(){return a(o(this).nextNode())}},n(s,t),e.wrappers.TreeWalker=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){u.call(this,e),this.treeScope_=new w(this,null)}function n(e){var n=document[e];t.prototype[e]=function(){return C(n.apply(L(this),arguments))}}function r(e,t){H.call(L(t),N(e)),o(e,t)}function o(e,t){e.shadowRoot&&t.adoptNode(e.shadowRoot),e instanceof m&&i(e,t);for(var n=e.firstChild;n;n=n.nextSibling)o(n,t)}function i(e,t){var n=e.olderShadowRoot;n&&t.adoptNode(n)}function a(e){O(e,this)}function s(e,t){var n=document.implementation[t];e.prototype[t]=function(){return C(n.apply(L(this),arguments))}}function c(e,t){var n=document.implementation[t];e.prototype[t]=function(){return n.apply(L(this),arguments)}}var l=e.GetElementsByInterface,u=e.wrappers.Node,d=e.ParentNodeInterface,p=e.NonElementParentNodeInterface,h=e.wrappers.Selection,f=e.SelectorsInterface,m=e.wrappers.ShadowRoot,w=e.TreeScope,v=e.cloneNode,g=e.defineWrapGetter,b=e.elementFromPoint,y=e.forwardMethodsToWrapper,E=e.matchesNames,_=e.mixin,S=e.registerWrapper,T=e.renderAllPending,M=e.rewrap,O=e.setWrapper,L=e.unsafeUnwrap,N=e.unwrap,C=e.wrap,j=e.wrapEventTargetMethods,D=(e.wrapNodeList,
new WeakMap);t.prototype=Object.create(u.prototype),g(t,"documentElement"),g(t,"body"),g(t,"head"),["createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode"].forEach(n);var H=document.adoptNode,x=document.getSelection;_(t.prototype,{adoptNode:function(e){return e.parentNode&&e.parentNode.removeChild(e),r(e,this),e},elementFromPoint:function(e,t){return b(this,this,e,t)},importNode:function(e,t){return v(e,t,L(this))},getSelection:function(){return T(),new h(x.call(N(this)))},getElementsByName:function(e){return f.querySelectorAll.call(this,"[name="+JSON.stringify(String(e))+"]")}});var R=document.createTreeWalker,I=e.wrappers.TreeWalker;if(t.prototype.createTreeWalker=function(e,t,n,r){var o=null;return n&&(n.acceptNode&&"function"==typeof n.acceptNode?o={acceptNode:function(e){return n.acceptNode(C(e))}}:"function"==typeof n&&(o=function(e){return n(C(e))})),new I(R.call(N(this),N(e),t,o,r))},document.registerElement){var P=document.registerElement;t.prototype.registerElement=function(t,n){function r(e){return e?void O(e,this):i?document.createElement(i,t):document.createElement(t)}var o,i;if(void 0!==n&&(o=n.prototype,i=n["extends"]),o||(o=Object.create(HTMLElement.prototype)),e.nativePrototypeTable.get(o))throw new Error("NotSupportedError");for(var a,s=Object.getPrototypeOf(o),c=[];s&&!(a=e.nativePrototypeTable.get(s));)c.push(s),s=Object.getPrototypeOf(s);if(!a)throw new Error("NotSupportedError");for(var l=Object.create(a),u=c.length-1;u>=0;u--)l=Object.create(l);["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"].forEach(function(e){var t=o[e];t&&(l[e]=function(){C(this)instanceof r||M(this),t.apply(C(this),arguments)})});var d={prototype:l};i&&(d["extends"]=i),r.prototype=o,r.prototype.constructor=r,e.constructorTable.set(l,r),e.nativePrototypeTable.set(o,l);P.call(N(this),t,d);return r},y([window.HTMLDocument||window.Document],["registerElement"])}y([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement,window.HTMLHtmlElement],["appendChild","compareDocumentPosition","contains","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","insertBefore","querySelector","querySelectorAll","removeChild","replaceChild"]),y([window.HTMLBodyElement,window.HTMLHeadElement,window.HTMLHtmlElement],E),y([window.HTMLDocument||window.Document],["adoptNode","importNode","contains","createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","createTreeWalker","elementFromPoint","getElementById","getElementsByName","getSelection"]),_(t.prototype,l),_(t.prototype,d),_(t.prototype,f),_(t.prototype,p),_(t.prototype,{get implementation(){var e=D.get(this);return e?e:(e=new a(N(this).implementation),D.set(this,e),e)},get defaultView(){return C(N(this).defaultView)}}),S(window.Document,t,document.implementation.createHTMLDocument("")),window.HTMLDocument&&S(window.HTMLDocument,t),j([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement]);var k=document.implementation.createDocument;a.prototype.createDocument=function(){return arguments[2]=N(arguments[2]),C(k.apply(L(this),arguments))},s(a,"createDocumentType"),s(a,"createHTMLDocument"),c(a,"hasFeature"),S(window.DOMImplementation,a),y([window.DOMImplementation],["createDocument","createDocumentType","createHTMLDocument","hasFeature"]),e.adoptNodeNoRemove=r,e.wrappers.DOMImplementation=a,e.wrappers.Document=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.wrappers.Selection,o=e.mixin,i=e.registerWrapper,a=e.renderAllPending,s=e.unwrap,c=e.unwrapIfNeeded,l=e.wrap,u=window.Window,d=window.getComputedStyle,p=window.getDefaultComputedStyle,h=window.getSelection;t.prototype=Object.create(n.prototype),u.prototype.getComputedStyle=function(e,t){return l(this||window).getComputedStyle(c(e),t)},p&&(u.prototype.getDefaultComputedStyle=function(e,t){return l(this||window).getDefaultComputedStyle(c(e),t)}),u.prototype.getSelection=function(){return l(this||window).getSelection()},delete window.getComputedStyle,delete window.getDefaultComputedStyle,delete window.getSelection,["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){u.prototype[e]=function(){var t=l(this||window);return t[e].apply(t,arguments)},delete window[e]}),o(t.prototype,{getComputedStyle:function(e,t){return a(),d.call(s(this),c(e),t)},getSelection:function(){return a(),new r(h.call(s(this)))},get document(){return l(s(this).document)}}),p&&(t.prototype.getDefaultComputedStyle=function(e,t){return a(),p.call(s(this),c(e),t)}),i(u,t,window),e.wrappers.Window=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrap,n=window.DataTransfer||window.Clipboard,r=n.prototype.setDragImage;r&&(n.prototype.setDragImage=function(e,n,o){r.call(this,t(e),n,o)})}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t;t=e instanceof i?e:new i(e&&o(e)),r(t,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unwrap,i=window.FormData;i&&(n(i,t,new i),e.wrappers.FormData=t)}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrapIfNeeded,n=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){return n.call(this,t(e))}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=n[e],r=window[t];if(r){var o=document.createElement(e),i=o.constructor;window[t]=i}}var n=(e.isWrapperFor,{a:"HTMLAnchorElement",area:"HTMLAreaElement",audio:"HTMLAudioElement",base:"HTMLBaseElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",col:"HTMLTableColElement",content:"HTMLContentElement",data:"HTMLDataElement",datalist:"HTMLDataListElement",del:"HTMLModElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",font:"HTMLFontElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",head:"HTMLHeadElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",marquee:"HTMLMarqueeElement",menu:"HTMLMenuElement",menuitem:"HTMLMenuItemElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",script:"HTMLScriptElement",select:"HTMLSelectElement",shadow:"HTMLShadowElement",source:"HTMLSourceElement",span:"HTMLSpanElement",style:"HTMLStyleElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",template:"HTMLTemplateElement",textarea:"HTMLTextAreaElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",ul:"HTMLUListElement",video:"HTMLVideoElement"});Object.keys(n).forEach(t),Object.getOwnPropertyNames(e.wrappers).forEach(function(t){window[t]=e.wrappers[t]})}(window.ShadowDOMPolyfill),function(e){function t(e,t){var n="";return Array.prototype.forEach.call(e,function(e){n+=e.textContent+"\n\n"}),t||(n=n.replace(d,"")),n}function n(e){var t=document.createElement("style");return t.textContent=e,t}function r(e){var t=n(e);document.head.appendChild(t);var r=[];if(t.sheet)try{r=t.sheet.cssRules}catch(o){}else void 0;return t.parentNode.removeChild(t),r}function o(){C.initialized=!0,document.body.appendChild(C);var e=C.contentDocument,t=e.createElement("base");t.href=document.baseURI,e.head.appendChild(t)}function i(e){C.initialized||o(),document.body.appendChild(C),e(C.contentDocument),document.body.removeChild(C)}function a(e,t){if(t){var o;if(e.match("@import")&&D){var a=n(e);i(function(e){e.head.appendChild(a.impl),o=Array.prototype.slice.call(a.sheet.cssRules,0),t(o)})}else o=r(e),t(o)}}function s(e){e&&l().appendChild(document.createTextNode(e))}function c(e,t){var r=n(e);r.setAttribute(t,""),r.setAttribute(x,""),document.head.appendChild(r)}function l(){return j||(j=document.createElement("style"),j.setAttribute(x,""),j[x]=!0),j}var u={strictStyling:!1,registry:{},shimStyling:function(e,n,r){var o=this.prepareRoot(e,n,r),i=this.isTypeExtension(r),a=this.makeScopeSelector(n,i),s=t(o,!0);s=this.scopeCssText(s,a),e&&(e.shimmedStyle=s),this.addCssToDocument(s,n)},shimStyle:function(e,t){return this.shimCssText(e.textContent,t)},shimCssText:function(e,t){return e=this.insertDirectives(e),this.scopeCssText(e,t)},makeScopeSelector:function(e,t){return e?t?"[is="+e+"]":e:""},isTypeExtension:function(e){return e&&e.indexOf("-")<0},prepareRoot:function(e,t,n){var r=this.registerRoot(e,t,n);return this.replaceTextInStyles(r.rootStyles,this.insertDirectives),this.removeStyles(e,r.rootStyles),this.strictStyling&&this.applyScopeToContent(e,t),r.scopeStyles},removeStyles:function(e,t){for(var n,r=0,o=t.length;o>r&&(n=t[r]);r++)n.parentNode.removeChild(n)},registerRoot:function(e,t,n){var r=this.registry[t]={root:e,name:t,extendsName:n},o=this.findStyles(e);r.rootStyles=o,r.scopeStyles=r.rootStyles;var i=this.registry[r.extendsName];return i&&(r.scopeStyles=i.scopeStyles.concat(r.scopeStyles)),r},findStyles:function(e){if(!e)return[];var t=e.querySelectorAll("style");return Array.prototype.filter.call(t,function(e){return!e.hasAttribute(R)})},applyScopeToContent:function(e,t){e&&(Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){e.setAttribute(t,"")}),Array.prototype.forEach.call(e.querySelectorAll("template"),function(e){this.applyScopeToContent(e.content,t)},this))},insertDirectives:function(e){return e=this.insertPolyfillDirectivesInCssText(e),this.insertPolyfillRulesInCssText(e)},insertPolyfillDirectivesInCssText:function(e){return e=e.replace(p,function(e,t){return t.slice(0,-2)+"{"}),e.replace(h,function(e,t){return t+" {"})},insertPolyfillRulesInCssText:function(e){return e=e.replace(f,function(e,t){return t.slice(0,-1)}),e.replace(m,function(e,t,n,r){var o=e.replace(t,"").replace(n,"");return r+o})},scopeCssText:function(e,t){var n=this.extractUnscopedRulesFromCssText(e);if(e=this.insertPolyfillHostInCssText(e),e=this.convertColonHost(e),e=this.convertColonHostContext(e),e=this.convertShadowDOMSelectors(e),t){var e,r=this;a(e,function(n){e=r.scopeRules(n,t)})}return e=e+"\n"+n,e.trim()},extractUnscopedRulesFromCssText:function(e){for(var t,n="";t=w.exec(e);)n+=t[1].slice(0,-1)+"\n\n";for(;t=v.exec(e);)n+=t[0].replace(t[2],"").replace(t[1],t[3])+"\n\n";return n},convertColonHost:function(e){return this.convertColonRule(e,E,this.colonHostPartReplacer)},convertColonHostContext:function(e){return this.convertColonRule(e,_,this.colonHostContextPartReplacer)},convertColonRule:function(e,t,n){return e.replace(t,function(e,t,r,o){if(t=O,r){for(var i,a=r.split(","),s=[],c=0,l=a.length;l>c&&(i=a[c]);c++)i=i.trim(),s.push(n(t,i,o));return s.join(",")}return t+o})},colonHostContextPartReplacer:function(e,t,n){return t.match(g)?this.colonHostPartReplacer(e,t,n):e+t+n+", "+t+" "+e+n},colonHostPartReplacer:function(e,t,n){return e+t.replace(g,"")+n},convertShadowDOMSelectors:function(e){for(var t=0;t<N.length;t++)e=e.replace(N[t]," ");return e},scopeRules:function(e,t){var n="";return e&&Array.prototype.forEach.call(e,function(e){if(e.selectorText&&e.style&&void 0!==e.style.cssText)n+=this.scopeSelector(e.selectorText,t,this.strictStyling)+" {\n ",n+=this.propertiesFromRule(e)+"\n}\n\n";else if(e.type===CSSRule.MEDIA_RULE)n+="@media "+e.media.mediaText+" {\n",n+=this.scopeRules(e.cssRules,t),n+="\n}\n\n";else try{e.cssText&&(n+=e.cssText+"\n\n")}catch(r){e.type===CSSRule.KEYFRAMES_RULE&&e.cssRules&&(n+=this.ieSafeCssTextFromKeyFrameRule(e))}},this),n},ieSafeCssTextFromKeyFrameRule:function(e){var t="@keyframes "+e.name+" {";return Array.prototype.forEach.call(e.cssRules,function(e){t+=" "+e.keyText+" {"+e.style.cssText+"}"}),t+=" }"},scopeSelector:function(e,t,n){var r=[],o=e.split(",");return o.forEach(function(e){e=e.trim(),this.selectorNeedsScoping(e,t)&&(e=n&&!e.match(O)?this.applyStrictSelectorScope(e,t):this.applySelectorScope(e,t)),r.push(e)},this),r.join(", ")},selectorNeedsScoping:function(e,t){if(Array.isArray(t))return!0;var n=this.makeScopeMatcher(t);return!e.match(n)},makeScopeMatcher:function(e){return e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")"+S,"m")},applySelectorScope:function(e,t){return Array.isArray(t)?this.applySelectorScopeList(e,t):this.applySimpleSelectorScope(e,t)},applySelectorScopeList:function(e,t){for(var n,r=[],o=0;n=t[o];o++)r.push(this.applySimpleSelectorScope(e,n));return r.join(", ")},applySimpleSelectorScope:function(e,t){return e.match(L)?(e=e.replace(O,t),e.replace(L,t+" ")):t+" "+e},applyStrictSelectorScope:function(e,t){t=t.replace(/\[is=([^\]]*)\]/g,"$1");var n=[" ",">","+","~"],r=e,o="["+t+"]";return n.forEach(function(e){var t=r.split(e);r=t.map(function(e){var t=e.trim().replace(L,"");return t&&n.indexOf(t)<0&&t.indexOf(o)<0&&(e=t.replace(/([^:]*)(:*)(.*)/,"$1"+o+"$2$3")),e}).join(e)}),r},insertPolyfillHostInCssText:function(e){return e.replace(M,b).replace(T,g)},propertiesFromRule:function(e){var t=e.style.cssText;e.style.content&&!e.style.content.match(/['"]+|attr/)&&(t=t.replace(/content:[^;]*;/g,"content: '"+e.style.content+"';"));var n=e.style;for(var r in n)"initial"===n[r]&&(t+=r+": initial; ");return t},replaceTextInStyles:function(e,t){e&&t&&(e instanceof Array||(e=[e]),Array.prototype.forEach.call(e,function(e){e.textContent=t.call(this,e.textContent)},this))},addCssToDocument:function(e,t){e.match("@import")?c(e,t):s(e)}},d=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,p=/\/\*\s*@polyfill ([^*]*\*+([^/*][^*]*\*+)*\/)([^{]*?){/gim,h=/polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,f=/\/\*\s@polyfill-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,m=/(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,w=/\/\*\s@polyfill-unscoped-rule([^*]*\*+([^/*][^*]*\*+)*)\//gim,v=/(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,g="-shadowcsshost",b="-shadowcsscontext",y=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",E=new RegExp("("+g+y,"gim"),_=new RegExp("("+b+y,"gim"),S="([>\\s~+[.,{:][\\s\\S]*)?$",T=/\:host/gim,M=/\:host-context/gim,O=g+"-no-combinator",L=new RegExp(g,"gim"),N=(new RegExp(b,"gim"),[/>>>/g,/::shadow/g,/::content/g,/\/deep\//g,/\/shadow\//g,/\/shadow-deep\//g,/\^\^/g,/\^/g]),C=document.createElement("iframe");C.style.display="none";var j,D=navigator.userAgent.match("Chrome"),H="shim-shadowdom",x="shim-shadowdom-css",R="no-shim";if(window.ShadowDOMPolyfill){s("style { display: none !important; }\n");var I=ShadowDOMPolyfill.wrap(document),P=I.querySelector("head");P.insertBefore(l(),P.childNodes[0]),document.addEventListener("DOMContentLoaded",function(){e.urlResolver;if(window.HTMLImports&&!HTMLImports.useNative){var t="link[rel=stylesheet]["+H+"]",n="style["+H+"]";HTMLImports.importer.documentPreloadSelectors+=","+t,HTMLImports.importer.importsPreloadSelectors+=","+t,HTMLImports.parser.documentSelectors=[HTMLImports.parser.documentSelectors,t,n].join(",");var r=HTMLImports.parser.parseGeneric;HTMLImports.parser.parseGeneric=function(e){if(!e[x]){var t=e.__importElement||e;if(!t.hasAttribute(H))return void r.call(this,e);e.__resource&&(t=e.ownerDocument.createElement("style"),t.textContent=e.__resource),HTMLImports.path.resolveUrlsInStyle(t,e.href),t.textContent=u.shimStyle(t),t.removeAttribute(H,""),t.setAttribute(x,""),t[x]=!0,t.parentNode!==P&&(e.parentNode===P?P.replaceChild(t,e):this.addElementToDocument(t)),t.__importParsed=!0,this.markParsingComplete(e),this.parseNext()}};var o=HTMLImports.parser.hasResource;HTMLImports.parser.hasResource=function(e){return"link"===e.localName&&"stylesheet"===e.rel&&e.hasAttribute(H)?e.__resource:o.call(this,e)}}})}e.ShadowCSS=u}(window.WebComponents)),function(e){window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}}(window.WebComponents),function(e){"use strict";function t(e){return void 0!==p[e]}function n(){s.call(this),this._isInvalid=!0}function r(e){return""==e&&n.call(this),e.toLowerCase()}function o(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function i(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function a(e,a,s){function c(e){b.push(e)}var l=a||"scheme start",u=0,d="",v=!1,g=!1,b=[];e:for(;(e[u-1]!=f||0==u)&&!this._isInvalid;){var y=e[u];switch(l){case"scheme start":if(!y||!m.test(y)){if(a){c("Invalid scheme.");break e}d="",l="no scheme";continue}d+=y.toLowerCase(),l="scheme";break;case"scheme":if(y&&w.test(y))d+=y.toLowerCase();else{if(":"!=y){if(a){if(f==y)break e;c("Code point not allowed in scheme: "+y);break e}d="",u=0,l="no scheme";continue}if(this._scheme=d,d="",a)break e;t(this._scheme)&&(this._isRelative=!0),l="file"==this._scheme?"relative":this._isRelative&&s&&s._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==y?(this._query="?",l="query"):"#"==y?(this._fragment="#",l="fragment"):f!=y&&" "!=y&&"\n"!=y&&"\r"!=y&&(this._schemeData+=o(y));break;case"no scheme":if(s&&t(s._scheme)){l="relative";continue}c("Missing scheme."),n.call(this);break;case"relative or authority":if("/"!=y||"/"!=e[u+1]){c("Expected /, got: "+y),l="relative";continue}l="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=s._scheme),f==y){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password;break e}if("/"==y||"\\"==y)"\\"==y&&c("\\ is an invalid code point."),l="relative slash";else if("?"==y)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,l="query";else{if("#"!=y){var E=e[u+1],_=e[u+2];("file"!=this._scheme||!m.test(y)||":"!=E&&"|"!=E||f!=_&&"/"!=_&&"\\"!=_&&"?"!=_&&"#"!=_)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),l="relative path";continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,l="fragment"}break;case"relative slash":if("/"!=y&&"\\"!=y){"file"!=this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),l="relative path";continue}"\\"==y&&c("\\ is an invalid code point."),l="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=y){c("Expected '/', got: "+y),l="authority ignore slashes";continue}l="authority second slash";break;case"authority second slash":if(l="authority ignore slashes","/"!=y){c("Expected '/', got: "+y);continue}break;case"authority ignore slashes":if("/"!=y&&"\\"!=y){l="authority";continue}c("Expected authority, got: "+y);break;case"authority":if("@"==y){v&&(c("@ already seen."),d+="%40"),v=!0;for(var S=0;S<d.length;S++){var T=d[S];if("   "!=T&&"\n"!=T&&"\r"!=T)if(":"!=T||null!==this._password){var M=o(T);null!==this._password?this._password+=M:this._username+=M}else this._password="";else c("Invalid whitespace in authority.")}d=""}else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){u-=d.length,d="",l="host";continue}d+=y}break;case"file host":if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){2!=d.length||!m.test(d[0])||":"!=d[1]&&"|"!=d[1]?0==d.length?l="relative path start":(this._host=r.call(this,d),d="",l="relative path start"):l="relative path";continue}"  "==y||"\n"==y||"\r"==y?c("Invalid whitespace in file host."):d+=y;break;case"host":case"hostname":if(":"!=y||g){if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){if(this._host=r.call(this,d),d="",l="relative path start",a)break e;continue}"    "!=y&&"\n"!=y&&"\r"!=y?("["==y?g=!0:"]"==y&&(g=!1),d+=y):c("Invalid code point in host/hostname: "+y)}else if(this._host=r.call(this,d),d="",l="port","hostname"==a)break e;break;case"port":if(/[0-9]/.test(y))d+=y;else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y||a){if(""!=d){var O=parseInt(d,10);O!=p[this._scheme]&&(this._port=O+""),d=""}if(a)break e;l="relative path start";continue}"    "==y||"\n"==y||"\r"==y?c("Invalid code point in port: "+y):n.call(this)}break;case"relative path start":if("\\"==y&&c("'\\' not allowed in path."),l="relative path","/"!=y&&"\\"!=y)continue;break;case"relative path":if(f!=y&&"/"!=y&&"\\"!=y&&(a||"?"!=y&&"#"!=y))" "!=y&&"\n"!=y&&"\r"!=y&&(d+=o(y));else{"\\"==y&&c("\\ not allowed in relative path.");var L;(L=h[d.toLowerCase()])&&(d=L),".."==d?(this._path.pop(),"/"!=y&&"\\"!=y&&this._path.push("")):"."==d&&"/"!=y&&"\\"!=y?this._path.push(""):"."!=d&&("file"==this._scheme&&0==this._path.length&&2==d.length&&m.test(d[0])&&"|"==d[1]&&(d=d[0]+":"),this._path.push(d)),d="","?"==y?(this._query="?",l="query"):"#"==y&&(this._fragment="#",l="fragment")}break;case"query":a||"#"!=y?f!=y&&" "!=y&&"\n"!=y&&"\r"!=y&&(this._query+=i(y)):(this._fragment="#",l="fragment");break;case"fragment":f!=y&&"  "!=y&&"\n"!=y&&"\r"!=y&&(this._fragment+=y)}u++}}function s(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,s.call(this);var n=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");a.call(this,n,null,t)}var l=!1;if(!e.forceJURL)try{var u=new URL("b","http://a");u.pathname="c%20d",l="http://a/c%20d"===u.href}catch(d){}if(!l){var p=Object.create(null);p.ftp=21,p.file=0,p.gopher=70,p.http=80,p.https=443,p.ws=80,p.wss=443;var h=Object.create(null);h["%2e"]=".",h[".%2e"]="..",h["%2e."]="..",h["%2e%2e"]="..";var f=void 0,m=/[a-zA-Z]/,w=/[a-zA-Z0-9\+\-\.]/;c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var e="";return(""!=this._username||null!=this._password)&&(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){s.call(this),a.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||a.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],a.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),a.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),a.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}};var v=e.URL;v&&(c.createObjectURL=function(e){return v.createObjectURL.apply(v,arguments)},c.revokeObjectURL=function(e){v.revokeObjectURL(e)}),e.URL=c}}(self),function(e){function t(e){y.push(e),b||(b=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){b=!1;var e=y;y=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=w.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=w.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++E}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function l(e,t){return _=new s(e,t)}function u(e){return S?S:(S=c(_),S.oldValue=e,S)}function d(){_=S=void 0}function p(e){return e===S||e===_}function h(e,t){return e===t?e:S&&p(e)?S:null}function f(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var m,w=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))m=setTimeout;else if(window.setImmediate)m=window.setImmediate;else{var v=[],g=String(Math.random());window.addEventListener("message",function(e){if(e.data===g){var t=v;v=[],t.forEach(function(e){e()})}}),m=function(e){v.push(e),window.postMessage(g,"*")}}var b=!1,y=[],E=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=w.get(e);r||w.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new f(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=w.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var _,S;f.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=h(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=w.get(e);t||w.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=w.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new l("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=l("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,p=e.target;"DOMNodeInserted"===e.type?(s=[p],c=[]):(s=[],c=[p]);var h=p.previousSibling,f=p.nextSibling,o=l("childList",e.target.parentNode);o.addedNodes=s,o.removedNodes=c,o.previousSibling=h,o.nextSibling=f,i(e.relatedNode,function(e){return e.childList?o:void 0})}d()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a)}(self),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||f,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===v}function r(e,t){if(n(t))e&&e();else{var o=function(){("complete"===t.readyState||t.readyState===v)&&(t.removeEventListener(g,o),r(e,t))};t.addEventListener(g,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){c==l&&e&&e({allImports:s,loadedImports:u,errorImports:d})}function r(e){o(e),u.push(this),c++,n()}function i(e){d.push(this),c++,n()}var s=t.querySelectorAll("link[rel=import]"),c=0,l=s.length,u=[],d=[];if(l)for(var p,h=0;l>h&&(p=s[h]);h++)a(p)?(c++,n()):(p.addEventListener("load",r),p.addEventListener("error",i));else n()}function a(e){return d?e.__loaded||e["import"]&&"loading"!==e["import"].readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&l(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function l(e){var t=e["import"];t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",d=Boolean(u in document.createElement("link")),p=Boolean(window.ShadowDOMPolyfill),h=function(e){return p?window.ShadowDOMPolyfill.wrapIfNeeded(e):e},f=h(document),m={get:function(){var e=window.HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return h(e)},configurable:!0};Object.defineProperty(document,"_currentScript",m),Object.defineProperty(f,"_currentScript",m);var w=/Trident/.test(navigator.userAgent),v=w?"complete":"interactive",g="readystatechange";d&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)l(e)}()),t(function(e){window.HTMLImports.ready=!0,window.HTMLImports.readyTime=(new Date).getTime();var t=f.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded",!0,!0,e),f.dispatchEvent(t)}),e.IMPORT_LINK_TYPE=u,e.useNative=d,e.rootDocument=f,e.whenReady=t,e.isIE=w}(window.HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(window.HTMLImports),window.HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e,t){var n=e.ownerDocument,r=n.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,t,r),e},resolveUrlsInCssText:function(e,r,o){var i=this.replaceUrls(e,o,r,t);return i=this.replaceUrls(i,o,r,n)},replaceUrls:function(e,t,n,r){return e.replace(r,function(e,r,o,i){var a=o.replace(/["']/g,"");return n&&(a=new URL(a,n).href),t.href=a,a=t.href,r+"'"+a+"'"+i})}};e.path=r}),window.HTMLImports.addModule(function(e){
var t={async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(n,r,o){var i=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(n+="?"+Math.random()),i.open("GET",n,t.async),i.addEventListener("readystatechange",function(e){if(4===i.readyState){var n=i.getResponseHeader("Location"),a=null;if(n)var a="/"===n.substr(0,1)?location.origin+n:n;r.call(o,!t.ok(i)&&i,i.response||i.responseText,a)}}),i.send(),i},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}};e.xhr=t}),window.HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){if(this.pending[e])return this.pending[e].push(t),!0;return this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&void 0,e)if(e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}else setTimeout(function(){this.receive(e,r,{error:"href must be specified"},null)}.bind(this),0)},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),window.HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),window.HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===u}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,c=e.flags,l=e.isIE,u=e.IMPORT_LINK_TYPE,d="link[rel="+u+"]",p={documentSelectors:d,importsSelectors:[d,"link[rel=stylesheet]:not([type])","style:not([type])","script:not([type])",'script[type="application/javascript"]','script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(c.parse&&void 0);var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){c.parse&&void 0,this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,c.parse&&void 0},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(e["import"]=e.__doc,window.HTMLImports.__importsParsingHook&&window.HTMLImports.__importsParsingHook(e),e["import"]&&(e["import"].__importParsed=!0),this.markParsingComplete(e),e.__resource&&!e.__error?e.dispatchEvent(new CustomEvent("load",{bubbles:!1})):e.dispatchEvent(new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),t.__appliedElement=e,e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){var t=this.rootImportForElement(e.__importElement||e);t.parentNode.insertBefore(e,t)},trackElement:function(e,t){var n=this,r=function(o){e.removeEventListener("load",r),e.removeEventListener("error",r),t&&t(o),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),l&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,c=0;s>c&&(i=a[c]);c++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&setTimeout(function(){e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))})}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(t){r.parentNode&&r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.__doc,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return t(e)&&void 0===e.__doc?!1:!0}};e.parser=p,e.IMPORT_SELECTOR=d}),window.HTMLImports.addModule(function(e){function t(e){return n(e,a)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e){return!!Object.getOwnPropertyDescriptor(e,"baseURI")}function o(e,t){var n=document.implementation.createHTMLDocument(a);n._URL=t;var o=n.createElement("base");o.setAttribute("href",t),n.baseURI||r(n)||Object.defineProperty(n,"baseURI",{value:t});var i=n.createElement("meta");return i.setAttribute("charset","utf-8"),n.head.appendChild(i),n.head.appendChild(o),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var i=e.flags,a=e.IMPORT_LINK_TYPE,s=e.IMPORT_SELECTOR,c=e.rootDocument,l=e.Loader,u=e.Observer,d=e.parser,p={documents:{},documentPreloadSelectors:s,importsPreloadSelectors:[s].join(","),loadNode:function(e){h.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);h.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===c?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,r,a,s){if(i.load&&void 0,n.__resource=r,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:o(r,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n.__doc=c}d.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),d.parseNext()},loadedAll:function(){d.parseNext()}},h=new l(p.loaded.bind(p),p.loadedAll.bind(p));if(p.observer=new u,!document.baseURI){var f={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",f),Object.defineProperty(c,"baseURI",f)}e.importer=p,e.importLoader=h}),window.HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a,s=0,c=e.length;c>s&&(a=e[s]);s++)r||(r=a.ownerDocument,o=t.isParsed(r)),i=this.shouldLoadNode(a),i&&n.loadNode(a),this.shouldParseNode(a)&&o&&t.parseDynamic(a,i)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){window.HTMLImports.importer.bootDocument(o)}var n=e.initializeModules,r=e.isIE;if(!e.useNative){r&&"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},n},window.CustomEvent.prototype=window.Event.prototype),n();var o=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(window.HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.isIE=/Trident/.test(navigator.userAgent),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:void r(e,t)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){i(e,t,[])}function i(e,t,n){if(e=window.wrap(e),!(n.indexOf(e)>=0)){n.push(e);for(var r,o=e.querySelectorAll("link[rel="+a+"]"),s=0,c=o.length;c>s&&(r=o[s]);s++)r["import"]&&i(r["import"],t,n);t(e)}}var a=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),window.CustomElements.addModule(function(e){function t(e,t){return n(e,t)||r(e,t)}function n(t,n){return e.upgrade(t,n)?!0:void(n&&a(t))}function r(e,t){b(e,function(e){return n(e,t)?!0:void 0})}function o(e){S.push(e),_||(_=!0,setTimeout(i))}function i(){_=!1;for(var e,t=S,n=0,r=t.length;r>n&&(e=t[n]);n++)e();S=[]}function a(e){E?o(function(){s(e)}):s(e)}function s(e){e.__upgraded__&&!e.__attached&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){l(e),b(e,function(e){l(e)})}function l(e){E?o(function(){u(e)}):u(e)}function u(e){e.__upgraded__&&e.__attached&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function d(e){for(var t=e,n=window.wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host}}function p(e){if(e.shadowRoot&&!e.shadowRoot.__watched){g.dom&&void 0;for(var t=e.shadowRoot;t;)m(t),t=t.olderShadowRoot}}function h(e,n){if(g.dom){var r=n[0];if(r&&"childList"===r.type&&r.addedNodes&&r.addedNodes){for(var o=r.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var i=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";i=i.split("/?").shift().split("/").pop()}void 0}var a=d(e);n.forEach(function(e){"childList"===e.type&&(T(e.addedNodes,function(e){e.localName&&t(e,a)}),T(e.removedNodes,function(e){e.localName&&c(e)}))}),g.dom&&void 0}function f(e){for(e=window.wrap(e),e||(e=window.wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(h(e,t.takeRecords()),i())}function m(e){if(!e.__observer){var t=new MutationObserver(h.bind(this,e));t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function w(e){e=window.wrap(e),g.dom&&void 0;var n=e===window.wrap(document);t(e,n),m(e),g.dom&&void 0}function v(e){y(e,w)}var g=e.flags,b=e.forSubtree,y=e.forDocumentTree,E=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=E;var _=!1,S=[],T=Array.prototype.forEach.call.bind(Array.prototype.forEach),M=Element.prototype.createShadowRoot;M&&(Element.prototype.createShadowRoot=function(){var e=M.call(this);return window.CustomElements.watchShadow(this),e}),e.watchShadow=p,e.upgradeDocumentTree=v,e.upgradeDocument=w,e.upgradeSubtree=r,e.upgradeAll=t,e.attached=a,e.takeRecords=f}),window.CustomElements.addModule(function(e){function t(t,r){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var o=t.getAttribute("is"),i=e.getRegisteredDefinition(t.localName)||e.getRegisteredDefinition(o);if(i&&(o&&i.tag==t.localName||!o&&!i["extends"]))return n(t,i,r)}}function n(t,n,o){return a.upgrade&&void 0,n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),o&&e.attached(t),e.upgradeSubtree(t,o),a.upgrade&&void 0,t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t["native"]),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),window.CustomElements.addModule(function(e){function t(t,r){var c=r||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(o(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(l(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return c.prototype||(c.prototype=Object.create(HTMLElement.prototype)),c.__name=t.toLowerCase(),c.lifecycle=c.lifecycle||{},c.ancestry=i(c["extends"]),a(c),s(c),n(c.prototype),u(c.__name,c),c.ctor=d(c),c.ctor.prototype=c.prototype,c.prototype.constructor=c.ctor,e.ready&&v(document),c.ctor}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;t<_.length;t++)if(e===_[t])return!0}function i(e){var t=l(e);return t?i(t["extends"]).concat([t]):[]}function a(e){for(var t,n=e["extends"],r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag);t=Object.getPrototypeOf(n)}for(var r,o=e.prototype,i=!1;o;)o==t&&(i=!0),r=Object.getPrototypeOf(o),r&&(o.__proto__=r),o=r;i||void 0,e["native"]=t}}function c(e){return b(M(e.tag),e)}function l(e){return e?S[e.toLowerCase()]:void 0}function u(e,t){S[e]=t}function d(e){return function(){return c(e)}}function p(e,t,n){return e===T?h(t,n):O(e,t)}function h(e,t){e&&(e=e.toLowerCase()),t&&(t=t.toLowerCase());var n=l(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=h(e),r.setAttribute("is",t),r):(r=M(e),e.indexOf("-")>=0&&y(r,HTMLElement),r)}function f(e,t){var n=e[t];e[t]=function(){var e=n.apply(this,arguments);return g(e),e}}var m,w=e.isIE,v=e.upgradeDocumentTree,g=e.upgradeAll,b=e.upgradeWithDefinition,y=e.implementPrototype,E=e.useNative,_=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],S={},T="http://www.w3.org/1999/xhtml",M=document.createElement.bind(document),O=document.createElementNS.bind(document);m=Object.__proto__||E?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},f(Node.prototype,"cloneNode"),f(document,"importNode"),w&&!function(){var e=document.importNode;document.importNode=function(){var t=e.apply(document,arguments);if(t.nodeType==t.DOCUMENT_FRAGMENT_NODE){var n=document.createDocumentFragment();return n.appendChild(t),n}return t}}(),document.registerElement=t,document.createElement=h,document.createElementNS=p,e.registry=S,e["instanceof"]=m,e.reservedTagList=_,e.getRegisteredDefinition=l,document.register=document.registerElement}),function(e){function t(){a(window.wrap(document)),window.CustomElements.ready=!0;var e=window.requestAnimationFrame||function(e){setTimeout(e,16)};e(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}var n=e.useNative,r=e.initializeModules,o=e.isIE;if(n){var i=function(){};e.watchShadow=i,e.upgrade=i,e.upgradeAll=i,e.upgradeDocumentTree=i,e.upgradeSubtree=i,e.takeRecords=i,e["instanceof"]=function(e,t){return e instanceof t}}else r();var a=e.upgradeDocumentTree,s=e.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(e){e["import"]&&s(wrap(e["import"]))}),o&&"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},n},window.CustomEvent.prototype=window.Event.prototype),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var c=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(c,t)}else t()}(window.CustomElements),function(e){Function.prototype.bind||(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(e,r)}})}(window.WebComponents),function(e){"use strict";if(!window.performance){var t=Date.now();window.performance={now:function(){return Date.now()-t}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}())}(window.WebComponents),function(e){var t=document.createElement("style");t.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var n=document.querySelector("head");n.insertBefore(t,n.firstChild)}(window.WebComponents),function(e){window.Platform=e}(window.WebComponents);
// Create Global Trio Object
var Trio = {};

// Create global scope object
var scope = {};

(function() {
    // Global Interceptor for AJAX request    
    var GLOBAL_AJAX_REQUEST_INTERCEPT = function(req) { 
        return req;
    };
    var GLOBAL_AJAX_RESPONSE_INTERCEPT = function(res) {
        return res;
    };

    // Ajax object constructor
    // 
    // Example: 
    // var request = new Ajax({
    //     type: 'GET',
    //     url: 'http://www.someapi.com/api/',
    //     onload: function(response) {
    //         console.log(response);
    //     }.bind(this)
    // });
    // 
    // request.send();
    // 
    // This will log the response object
    var Ajax = function(opts) {
        // Create XHR Object
        var xhr        = new XMLHttpRequest();

        // Intercept response with Global Interceptor
        // and then invoke opts.onload callback
        xhr.onload  = function() {
            var response = GLOBAL_AJAX_RESPONSE_INTERCEPT(xhr);
            opts.onload(response);
        };

        this.url     = opts.url;
        this.type    = opts.type.toUpperCase();
        this.headers = {};
        this.xhr     = xhr;

        // Intercept Ajax object on creation
        GLOBAL_AJAX_REQUEST_INTERCEPT(this);
    };

    Ajax.prototype.setUrl = function(url) {
        if (!url) throw new Error('Expect parameter: url.');
        this.url = url;
    };

    Ajax.prototype.setType = function(type) {
        if (!type) throw new Error('Expect parameter: type.');
        this.type = type.toUpperCase();
    };

    Ajax.prototype.setHeader = function(key, value) {
        this.headers[key] = value;
    };

    // Add request metadata to XHR, and the send
    Ajax.prototype.send = function(payload) {
        if (!this.url) throw new Error('Expect request to contain property: url.');
        if (!this.type) throw new Error('Expect request to contain property: type.');

        this.xhr.open(this.type, this.url);

        for (var header in this.headers) {
            this.xhr.setRequestHeader(header, this.headers[header]);
        }

        if (payload) {
            this.xhr.send(payload);
        } else {
            this.xhr.send();
        }
    };

    scope.Ajax = Ajax;

    Trio.AJAX = {
        interceptAllRequest: function(cb) {
            GLOBAL_AJAX_REQUEST_INTERCEPT = cb;
        },
        interceptAllResponse: function(cb) {
            GLOBAL_AJAX_RESPONSE_INTERCEPT = cb;
        }
    };
    
})();

(function() {
    // Extend function to to extend Trio Class
    scope.extend = extend;

    function extend(methods) {
        var parent = this._constructor;

        if (!parent) {
            return;
        }

        var staticAttr = {};
        var child = function() {
            for (var key in staticAttr) {
                this[key] = staticAttr[key];
            }
            parent.apply(this, arguments);
        };
        
        var extended = {};

        for (var prop in parent.prototype) {
            if (Object.prototype.hasOwnProperty.call(parent.prototype, prop)) {
                extended[prop] = parent.prototype[prop];
            }
        }

        for (var met in methods) {
            if (Object.prototype.hasOwnProperty.call(methods, met)) {
                var method = methods[met];
                if (typeof method === 'function') {
                    extended[met] = methods[met];
                } else {
                    staticAttr[met] = methods[met];
                }
            }
        }

        child.prototype = Object.create(extended);

        return child;
    }
})();
(function() {
    // Function to generate uuid for Trio instance
    
    scope.idGenerator = idGenerator;
    
    function idGenerator(str) {
        var count = 1;

        return function() {
            var id = str + count;
            count++;
            return id;
        };
    }
})();

(function() {
    //////////////////////////////////////////////////////
    ///////////////////////// Vow ////////////////////////
    //////////////////////////////////////////////////////
    // A light-weight Promise library for internal use

    // Vow states reference
    var PENDING   = {},
        RESOLVED  = {},
        REJECTED  = {},
        FULFILLED = {};

    // Vow constructor
    // 
    // Example:
    // var vow = Vow();
    // 
    // vow.promise.then(function(data) {
    //      console.log(data);
    // });
    // 
    // vow.resolve('hi');
    // 
    // This is log 'hi'
    var Vow = function() {
        var vow = {};
        var _promise = PromiseObj();

        vow.resolve = _promise.resolve;
        vow.reject  = _promise.reject;
        vow.promise = {
            then: _promise.then,
            catch: _promise.catch,
            done: _promise.done
        };

        return vow;

        // Promise Object constructor
        function PromiseObj() {
            var state = PENDING;
            var value, onResolved, onRejected, onFullfilled, returnPromise;

            var ret = {

                resolve: function (val) {
                    value = val;
                    state = RESOLVED;

                    if (onResolved) {
                        handleResolve(onResolved);
                    } else if (onFullfilled) {
                        handleDone(onFullfilled);
                    }
                },

                reject: function (err) {
                    value = err;
                    state = REJECTED;

                    if (onRejected) {
                        handleReject(onRejected);
                    } else if (onFullfilled) {
                        handleDone(onFullfilled);
                    }
                },

                then: function (successCallback) {
                    returnPromise = PromiseObj();
                    handleResolve(successCallback);

                    return {
                        then: returnPromise.then,
                        catch: returnPromise.catch,
                        done: returnPromise.done
                    };
                },

                catch: function (failCallback) {
                    returnPromise = PromiseObj();
                    handleReject(failCallback);

                    return {
                        then: returnPromise.then,
                        catch: returnPromise.catch,
                        done: returnPromise.done
                    };
                },

                done: function (finallyCallback) {
                    handleDone(finallyCallback);
                }
            };

            return ret;

            function handleDone(fn) {
                if (state === PENDING) {
                    onFullfilled = fn || 'done';
                    return;
                }

                if (state === RESOLVED && typeof fn === 'function') {
                    state = FULFILLED;
                    return fn.call(this, value);
                }

                if (state === REJECTED) {
                    state = FULFILLED;
                    throw value;
                }
            }

            function handleResolve(fn) {
                var error;
                if (state === PENDING) {
                    onResolved = fn;
                }

                if (state === RESOLVED) {
                    if (value && typeof value.then === 'function') {
                        value.then(ret.resolve);
                        return;
                    }

                    try {
                        value = fn.call(this, value);
                    } catch (err) {
                        value = err;
                        error = true;
                    }

                    if (returnPromise) {
                        if (!error) {
                            returnPromise.resolve(value);
                            return;
                        }
                        returnPromise.reject(value);
                    }
                }
            }

            function handleReject(fn) {
                var error;
                if (state === PENDING) {
                    onRejected = fn;
                }

                if (state === REJECTED) {
                    try {
                        value = fn.call(this, value);
                    } catch (err) {
                        value = err;
                        error = true;
                    }

                    if (returnPromise) {
                        if (!error) {
                            returnPromise.resolve(value);
                            return;
                        }
                        returnPromise.reject(value);
                    }
                }

                if (state === RESOLVED) {
                    if (returnPromise) {
                        returnPromise.resolve(value);
                    }
                }
            }
        }
    };

    scope.Vow = Vow;

})();
(function() {
    // Storage to store all Signals instances
    var SIGNALS_STORAGE = {};

    // Constructor for Signals
    // Example:
    // var context = {};
    // 
    // new Signal('test', context);
    // 
    // context will now have Signal methods that are exposed
    var Signal = function(uuid, origin) {
        this.storage          = {};
        this.handleAll        = null;
        this.connectors       = {};
        this.origin           = origin;
        this.uuid             = uuid;
        SIGNALS_STORAGE[uuid] = this;
        origin.on             = this.on.bind(this);
        origin.off            = this.off.bind(this);
        origin.emit           = this.emit.bind(this);
        origin.broadcast      = this.broadcast.bind(this);
        origin.reset          = this.reset.bind(this);
        origin.connect        = this.connect.bind(this);
        origin.disconnect     = this.disconnect.bind(this);
    };

    // Add listener for a specific pulse type
    // If only passing in a function, it will set that function
    // as the default handler for all pulses
    Signal.prototype.on = function(pulseType, func) {
        if (typeof pulseType === 'function') {
            this.handleAll = pulseType;
            return;
        }

        if (!this.storage[pulseType]) {
            this.storage[pulseType] = [];
        }

        if (typeof func !== 'function') {
            throw new Error('Missing callback function on ' + pulseType + '.');
        }
        
        this.storage[pulseType].push(func);
    };

    // Remove listener for a pulse
    Signal.prototype.off = function(pulseType, func) {
        var bucket = this.storage[pulseType] || [];

        bucket.forEach(function(fn, i) {
            if(fn === func) {
                bucket.splice(i, 1);
                return;
            }
        });
    };

    // Create pulse with pulseType and detail, then trigger
    // pulse type to all connectors
    Signal.prototype.emit = function(pulseType, detail) {
        var pulse, connector;

        if (typeof pulseType === 'object' && pulseType.type) {
            pulse = pulseType;
        } else if (typeof pulseType === 'string') {
            pulse = MakePulse(pulseType, detail, this.origin);
        }

        for (var id in this.connectors) {
            connector = this.connectors[id];
            connector.trigger(pulse);
        }
    };

    // Similar to emit, accepts a pulse object
    Signal.prototype.trigger = function(pulse) {
        if (!pulse.type) {
            throw new Error('Expect parameter to be a pulse');
        }

        var bucket = this.storage[pulse.type] || [];
        for (var i = 0; i < bucket.length; i++) {
            bucket[i](pulse);
        }
        if (this.handleAll) {
            this.handleAll(pulse);
        }
    };

    // Broadcast pulse type to all Signals instances
    Signal.prototype.broadcast = function(pulseType, detail) {
        var pulse = MakePulse(pulseType, detail, this.origin),
            signal;

        for (var id in SIGNALS_STORAGE) {
            signal = SIGNALS_STORAGE[id];
            signal.trigger(pulse);
        }
    };

    // Reset a specific event
    // When passing in no argument, it will reset Signal to init state
    Signal.prototype.reset = function(name) {
        if (name) {
            this.storage[name] = [];
        } else {
            this.storage = {};
            for (var connectorId in this.connectors) {
                this.disconnect(connectorId);
            }
        }
    };

    // Connect to a signal reference by a uuid.
    // When connected, Signal A will listen to pulses from Signal B
    Signal.prototype.connect = function(connectorId) {
        var connector = SIGNALS_STORAGE[connectorId];
        this.addConnector(connectorId);
        connector.addConnector(this.uuid);
    };

    // Helper method to addConnector to a signl
    Signal.prototype.addConnector = function(connectorId) {
        var connector = SIGNALS_STORAGE[connectorId];
        if (connector) {
            this.connectors[connectorId] = connector;
        } else {
            throw new Error('Cannot find connector ' + connectorId + '.');
        }
    };

    // Disconnect signal reference by a uuid
    Signal.prototype.disconnect = function(connectorId) {
        var connector = SIGNALS_STORAGE[connectorId];
        this.removeConnector(connectorId);
        connector.removeConnector(this.uuid);
    };

    // Helper method to removeConnector
    Signal.prototype.removeConnector = function(connectorId) {
        if (this.connectors[connectorId]) {
            delete this.connectors[connectorId];
        } else {
            throw new Error('Cannot find connector ' + connectorId + '.');
        }
    };

    scope.Signal = Signal;

    // Constructor to make one pulse
    function MakePulse(type, detail, origin) {
        var pulse = {
            type: type,
            detail: detail,
            origin: origin
        };

        return pulse;
    }

})();

(function() {
    var Vow = scope.Vow;
    //////////////////////////////////////////////////////
    /////////////////////// Module ///////////////////////
    //////////////////////////////////////////////////////
    // Module loaders to enable clean, modularized code

    // Storage to cache all loaded modules
    var MODULE_STORE = {};

    // Module Constructor
    var Module = function() {};

    // Export will invoke the function and cache its result at
    // MODULE_STORE using filepath
    // 
    // Example:
    // Trio.Module.export(function() {
    //     return 'hi';
    // });
    // 
    // This will store a wrapped function that resolve 'hi' to MODULE_STORE[filepath]
    Module.prototype.export = function() {
        var func, url;
        if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
            func = arguments[1];
            url  = arguments[0];
        } else {
            func = arguments[0];
        }

        if (typeof func !== 'function') {
            throw new Error('Module is not a function.');
        }

        // Invoke func to get module value
        var module = func();
        var filepath = getFilepath(url);

        // Store wrapped value in Storage
        // You can later on unwrapped value by doing:
        // 
        // MODULE_STORE[filepath](function(module) {
        //      console.log(module);
        // });
        // 
        // This is necessary as we need this to be unwrapped by 
        // the import promises resolve method in order to load 
        // each file in the correct order
        MODULE_STORE[filepath] = function(done) {
            done(module);
        };


    };


    // Import accept an array consist of ['Filepath']
    // and will perform the following:
    //   - If module is in cache
    //      a. Resolve promise and pass in cache value to the promise callback
    //   - If module is not in cache
    //      a. Load the URL (expecting a js file containing Trio.Module.export)
    //      b. On success, Trio.Module.export will cache the module value
    //      c. Return cached value
    //      
    //  Example:
    //  Trio.Module.import([
    //      '../src/js/logo.js'
    //  ]).and.export('app', function(logo) {
    //      console.log(logo);
    //  });
    //  
    //  This will log the return value from logo.js
    Module.prototype.import = function(modules) {
        var i  = 0;

        // Create main promise
        var vow = Vow();

        _import(modules[i], [], vow);

        // Expose an and.export method for cleaner API when
        // importing and exporting modules.
        vow.promise.and = {};
        vow.promise.and.export = function() {
            var func, url;

            if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
                func = arguments[1];
                url  = arguments[0];
            } else {
                func = arguments[0];
            }

            var module;
            var filepath = getFilepath(url);
            MODULE_STORE[filepath] = function(done) {
                if (module) {
                    done(module);
                    return;
                }

                vow.promise
                    .then(function(ret) {
                        module = func.apply(this, ret);
                        return module;
                    }.bind(this))
                    .done(done);
            };
        }.bind(this);

        vow.promise.and.then = function() {
            var func, url, module;

            if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
                func = arguments[1];
                url  = arguments[0];
            } else {
                func = arguments[0];
            }

            vow.promise
                .then(function(ret) {
                    module = func.apply(this, ret);
                    return module;
                }.bind(this))
                .done();
        }.bind(this);

        return vow.promise;

        // Sub routine for import
        function _import(relativeUrl, returnObject, promise) {
            var script, filepath, module;

            if (MODULE_STORE[relativeUrl]) {
                module = MODULE_STORE[relativeUrl];
            } else {
                // Create script tag
                script   = makeScript(relativeUrl);
                filepath = script.src;

                // See if module is already cached
                module   = MODULE_STORE[script.src];
            }

            // If module is not already cached
            if (!module) {
                script.onload = function() {
                    var defer = Vow();

                    void 0;

                    defer.promise.then(loadNextOrResolve(returnObject, promise));

                    script.remove();
                    MODULE_STORE[filepath](defer.resolve);
                };

                document.body.appendChild(script);
            } else {
                module(loadNextOrResolve(returnObject, promise));
            }
        }

        // Make a script tag given a filepath
        function makeScript(url) {
            if (typeof url !== 'string') {
                throw new Error('Filepath is not a string.');
            }

            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = url;
            return script;
        }

        //  Load next module, or resolve promise if all modules are loaded
        function loadNextOrResolve(returnObject, promise) {
            return function(data) {
                returnObject.push(data);
                i++;
                if (i >= modules.length) {
                    promise.resolve(returnObject);
                } else {
                    _import(modules[i], returnObject, promise);
                }
            };
        }
    };

    Trio.Module = new Module();

    function getFilepath(url) {
        if (url && typeof url === 'string') {
            return url;
        }

        if (document && document.currentScript) {
            return document.currentScript.src;
        }

        throw new Error('Error getting current filepath.');
    }

})();

(function() {
    var extend = scope.extend;
    var Signal = scope.Signal;
    var Ajax = scope.Ajax;

    //////////////////////////////////////////////
    /////////// Resource Manager Class ///////////
    //////////////////////////////////////////////
    /// A Resource Manager to manager registering 
    /// and getting resoources
    
    var ResourceManager = function() {};
    // Resources Storage
    var RESOURCE_STORE = {};

    // Use Trio.Resrouce.register({name: 'name'}) to 
    // create and register Resource
    ResourceManager.prototype.register = function(opts) {
        if (!opts.name) throw new Error('Expect parameter to have property: name.');
        var Res = Resource.extend(opts);
        RESOURCE_STORE[opts.name] = new Res(opts);
    };

    // Use Trio.Resrouce.get('name') to get access to resource
    ResourceManager.prototype.get = function(name) {
        var resource = RESOURCE_STORE[name];
        if (!resource) throw new Error('Resource ' + name + ' not found.');
        return resource;
    };

    //////////////////////////////////////////////
    ////////////////// Resource //////////////////
    //////////////////////////////////////////////
    /// Resource is a caching layer between backend
    /// and frontend. All AJAX request should go 
    /// through resource and cache as dev see fit.
    /// Resource will act as a source of truth for 
    /// Trio.Factory to sync data with.

    var resourceIdGenerator = scope.idGenerator('resource');
    
    var Resource = {};

    Resource._constructor = function(opts) {
        var cache = new LruCache(opts.cacheSize);
        this.uuid = resourceIdGenerator();
        new Signal(this.uuid, this);

        // Exposed a setter and getter to interact with LRU Cache
        this.set = cache.set.bind(this);
        this.get = cache.get.bind(this);
        this.initialize(opts);
    };

    // Decorated ajax function
    Resource._constructor.prototype.sendRequest = function (opts, callback) {
        var request = new Ajax({
            type: opts.type,
            url: opts.url,
            onload: function(response) {
                callback(this.interceptResponse(response));
            }.bind(this)
        });

        this.interceptRequest(request);
        request.send(opts.payload);
    };

    // Intercept all Response and Request thru resource instance
    Resource._constructor.prototype.initialize = function() {};
    Resource._constructor.prototype.interceptResponse = function(res) { return res; };
    Resource._constructor.prototype.interceptRequest = function(req) { return req; };

    // Convenience method to encode JSON into URL param
    Resource._constructor.prototype.encodeUrlParam = function(param) {
        var encodedString = '';
        for (var prop in param) {
            if (param.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += encodeURI(prop + '=' + param[prop]);
            }
        }
        return encodedString;
    };

    // When this method is called, all Trio Factory that is synced with 
    // the resource instance will be notified
    Resource._constructor.prototype.hasBeenUpdated = function(key) {
        this.emit('update:' + this.uuid, null);
    };

    Resource.extend = extend;
    Trio.Resource = new ResourceManager();

    //////////////////////////////////////////////
    ////////////////// LRU Cache /////////////////
    //////////////////////////////////////////////
    /// LRU Cache data structure created for internal use

    var LruCache = function(size) {
        var map = {};
        var list = new DblyLinkedList();
        var maxLength = size || 0;
        
        this.set = function(key, data) {
            var node = map[key];
            var oldTail;

            if (node) {
                list.pushToHead(node);
                node.data = data;
            } else {
                list.addToHead(key, data);
                map[key] = list.head;
            }

            if (maxLength !== 0 && list.length > maxLength) {
                oldTail = list.tail;
                list.removeTail();
                delete map[oldTail.key];
            }

        };

        this.get = function(key) {
            var node = map[key];

            if (node) {
                list.pushToHead(node);
            }

            return node ? node.data : null;

        };

    };

    var DblyLinkedList = function() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    DblyLinkedList.prototype.addToHead = function(key, data) {
        var node = new DblyLinkedListNode(key, data);
        var oldHead;

        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            oldHead = this.head;
            oldHead.prev = node;
            node.next = oldHead;
            this.head = node;
        }

        this.length++;

    };

    DblyLinkedList.prototype.pushToHead = function(node) {
        var oldHead = this.head;
        var prevNode = node.prev;
        var nextNode = node.next;

        if (this.head === node) {
            return;
        }

        if (prevNode && nextNode) {
            // Connect prev and next nodes
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        } else if (!nextNode) {
            // Set new tail
            this.tail = prevNode;
            this.tail.next = null;
        }

        // Push node to head
        this.head = node;
        node.next = oldHead;
        oldHead.prev = node;

    };

    DblyLinkedList.prototype.removeTail = function() {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
    };

    var DblyLinkedListNode = function(key, data) {
        this.prev = null;
        this.next = null;
        this.key  = key;
        this.data = data;
    };

})();

(function() {
    var factoryIdGenerator = scope.idGenerator('factory');
    var Signal = scope.Signal;

    //////////////////////////////////////////////////////
    ////////////////////// Factory ///////////////////////
    //////////////////////////////////////////////////////
    /// Sync data with different resource, and manage data 
    /// as the single source of truth for components

    // NOTE:
    // Planned Features--
    //  1. Schema enforcement

    var Factory = {};

    Factory._constructor = function(opts) {
        this.attributes = {};
        this.uuid       = factoryIdGenerator();
        this.resources  = {};
        new Signal(this.uuid, this);

        this.initialize(opts);
    };

    Factory._constructor.prototype.initialize = function() {};

    /**
     * Sync factory with resourceName, and connect with resource's signal.
     * Map callback will be invoked with the resource object passed in on first sync, 
     * and every time resource is updated.
     */
    Factory._constructor.prototype.sync = function(resourceName, map) {
        var resource = Trio.Resource.get(resourceName);

        if (!resource) throw new Error('Resource ' + resourceName + ' does not exist.');

        this.resources[resourceName] = resource;
        this.connect(resource.uuid);
        map.call(this, resource);
        this.on('update:' + resource.uuid, map.bind(this, resource));

    };

    Factory.extend = scope.extend;
    Trio.Factory = Factory;

})();

(function() {
    var serviceIdGenerator = scope.idGenerator('service');
    var Signal = scope.Signal;
    var extend = scope.extend;

    //////////////////////////////////////////////////////
    ////////////////////// Service ///////////////////////
    //////////////////////////////////////////////////////
    /// Service is a layer for components and factory to 
    /// work with each other. It exposes a method call 
    /// implement to connect two modules togther. Connected
    /// module can communicate via Signals.

    var Service = {};

    Service._constructor = function(opts) {
        this.uuid = serviceIdGenerator();
        new Signal(this.uuid, this);
        this.onReady(opts);
    };

    // Invoke on instantiation of Service
    Service._constructor.prototype.onReady = function() {
        // To be implemented by instance
    };

    // Invoke on Service.start()
    Service._constructor.prototype.onStart = function() {
        // To be implemented by instance
    };

    // Invoke on Service.stop()
    Service._constructor.prototype.onStop = function() {
        // To be implemented by instance
    };

    Service._constructor.prototype.start = function(opts) {
        this.onStart(opts);
        this.on(this.emit.bind(this));
    };

    Service._constructor.prototype.stop = function(opts) {
        this.onStop(opts);
        this.reset();
    };

    // Expect uuid from an Trio module. This method will make a
    // connection with the other signal, and on any pulse, re-emit
    // it to all other implemented modules.
    Service._constructor.prototype.implement = function(inst) {
        if (inst && inst.uuid) {
            this.connect(inst.uuid);
        } else {
            throw new Error('Expect parameter to contains property uuid.');
        }
    };

    Service.extend = extend;
    Trio.Service = Service;
    
})();

(function() {
    //////////////////////////////////////////////////////
    ////////////////////// Stylizer //////////////////////
    //////////////////////////////////////////////////////
    /// Stylizer is the CSS rendering library for Trio.
    /// It allows dev to generate CSS using a set of 
    /// simple API. It has functionality similar to
    /// some pre-compiler, such as the ability to set 
    /// variables, mixins, and auto-prefix.
    
    // Storage for all variables and mixins
    var MIXINS = {};
    var VARIABLES = {};

    // All vendors prefixes needed
    var _ALLVENDORS = ['-webkit-', '-moz-', '-ms-', '-o-'];
    // CSS Properties/Attributes that needs prefixes. This list will grow.
    var ATTRIBUTES_TO_PREFIX = ['flex', 'transition', 'transform', 'calc', 'align-self', 'flex-flow', 'linear-gradient'];
    // Regex to match any string that contains words need prefixes
    var IS_PREFIXABLE = new RegExp(ATTRIBUTES_TO_PREFIX.join('|'));
    // Key-pair for color to hex
    var COLOR_MAP = {
        'black': '#000000',
        'white': '#ffffff',
        'blue': '#0000ff',
        'yellow': '#ffff00',
        'light-gray': '#cccccc',
        'dark-gray': '#333333',
        'gray': '#666666',
        'orange': '#ffa500',
        'purple': '#8a2be2'
    };

    var Stylizer = function() {};

    Stylizer.prototype.create = function() {
        return new CSSTemplate();
    };

    Stylizer.prototype.registerMixin = function(key, func) {
        MIXINS[key] = func;
    };

    Stylizer.prototype.registerVariable = function(key, val) {
        VARIABLES[key] = val;
    };

    Stylizer.prototype.getVariable = function(key) {
        if (!VARIABLES[key]) {
            void 0;
            return;
        }
        return VARIABLES[key];
    };

    Stylizer.prototype.getMixin = function(key) {
        if (!MIXINS[key]) {
            void 0;
            return;
        }
        return MIXINS[key];
    };

    Trio.Stylizer = new Stylizer();

    var CSSTemplate = function() {
        this.style = {};
        this._context = null;
        this.toCSS = this.toCSS.bind(this);
    };

    CSSTemplate.prototype.select = function(selector) {
        if (!this.style[selector]) {
            this.style[selector] = {};
        }
        this._context = this.style[selector];
        return this;
    };

    CSSTemplate.prototype.css = function(key, attr) {
        if (!this._context) {
            throw new Error('CSS Selector not present.');
        }

        if (typeof key === 'string') {
            addOneStyle(key, attr, this._context);
        } else if (typeof key === 'object') {
            for (var k in key) {
                addOneStyle(k, key[k], this._context);
            }
        }

        return this;

        function addOneStyle(key, attr, obj) {
            obj[key] = attr;
        }
    };

    CSSTemplate.prototype.toCSS = function() {
        var ret = '';

        for (var selector in this.style) {
            // Error for when style is not a two-layers object
            // Example:
            // cssSelector : {
            //     cssProperties: cssAttributes
            // }
            if (typeof selector !== 'string') {
                throw new Error('Invalid Style Object');
            }
            ret += selector + '{';
            var properties = this.style[selector];
            for (var prop in properties) {
                var setting = properties[prop];
                    setting = replaceVariable.call(this, setting);
                ret += autoPrefix(prop, setting);
            }
            ret = ret.substring(0, ret.length - 1);
            ret += '}';
        }

        return ret;

        // Helper method that return css string with prefixes if necessary
        function autoPrefix(prop, setting) {
            var prefixedString = '' + prop + ':' + setting + ';';

            if (prop.match(IS_PREFIXABLE)) {
                for (var i = 0; i < _ALLVENDORS.length; i++) {
                    prefixedString += _ALLVENDORS[i] + prop + ':' + setting + ';';
                }
            }

            if (setting.match(IS_PREFIXABLE)) {
                for (var j = 0; j < _ALLVENDORS.length; j++) {
                    prefixedString += prop + ':' + _ALLVENDORS[j] + setting + ';';
                }
            }

            return prefixedString;
        }

        function replaceVariable(setting) {
            var rgbs = setting.match(/((rgb|rgba)\([^)]*\))/gi);
            var rgb, newRgb;
            var key, val;

            if (rgbs) {
                for (var j = 0; j < rgbs.length; j++) {
                    rgb = rgbs[j];
                    newRgb = replaceColor.call(this, rgb);
                    setting = setting.replace(rgb, newRgb);
                }
            }

            var VARIABLES = setting.match(/\$([^\$][^\s\d\,\(\)]+)/gi);

            if (VARIABLES) {
                for (var i = 0; i < VARIABLES.length; i++) {
                    key = VARIABLES[i].slice(1);
                    val = Stylizer.prototype.getVariable.call(this, key);
                    setting = setting.replace(VARIABLES[i], val);
                }
            }

            return setting;
        }

        function replaceColor(rgb) {
            var colors = rgb.match(/\$([^\$][^\s\d\,\(\)]+)/gi);
            var key, val;

            if (colors) {
                key = colors[0].slice(1);
                val = Stylizer.prototype.getVariable.call(this, key);
                val = toRGB(val);
                rgb = rgb.replace(colors[0], val);
            }
            return rgb;
        }

        function toRGB(color) {
            if (COLOR_MAP[color]) {
                color = COLOR_MAP[color];
            }

            var isHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
            var isRGB = /((rgb|rgba)\([^)]*\))/i.exec(color);

            if (isHex) {
                return [
                    parseInt(isHex[1], 16),
                    parseInt(isHex[2], 16),
                    parseInt(isHex[3], 16)
                ].join(',');
            } 

            if (isRGB) {
                return color.replace(/[a-z]|\(|\)/gi, '')
                    .split(',')
                    .slice(0, 3)
                    .join(',');
            }

            throw new Error('Invalid color string.');
        }
    };

    CSSTemplate.prototype.toHex = function(rgb) {
        rgb = rgb.replace(' ', '').split(',');
        return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

        function componentToHex(c) {
            var hex = (+c).toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
    };
})();

(function() {
    //////////////////////////////////////////////////////
    ////////////////////// Renderer //////////////////////
    //////////////////////////////////////////////////////
    /// Renderer is the rendering library for Trio. It 
    /// employs a set of simple API for user to create HTML.
    /// It also exposes a patch method to diff generated HTML
    /// and DOM incrementally, updating only what needs to be 
    /// update.

    var Renderer = function(){};

    Renderer.prototype.createTemplate = function() {
        return new Template();
    };

    Trio.Renderer = new Renderer();

    //////////////////////////////////////////////////////
    ////////////////////// Template //////////////////////
    //////////////////////////////////////////////////////
    /// Template object to store command and on render,
    /// return HTML

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
    Template.prototype.data         = queueCommand('data');
    Template.prototype.doNotPatch   = queueCommand('doNotPatch');
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
            elements        = [];

        this.executeCommand(data, handleCommonActions);

        return root;

        function handleCommonActions(command, execData) {
            var el;
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
                case 'doNotPatch':
                    el = getLastFrom(elements);
                    addAttribute.call(el, 'data-do-not-patch', true);
                    break;
                case 'data':
                    el = getLastFrom(elements);
                    patchElement.apply(el, [evaluate(execData, command.detail[0])]);
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
    };

    // Execute command is an iterator
    // Base on the data that was input, executeCommand will invoke callback in the right order
    // with the command object + data context
    Template.prototype.executeCommand = function(data, cb) {
        // Stacks to reference current context
        var conditionals    = [],
            loops           = [],
            states          = [],
        // Reference index for current execution
            execIndex       = 0,
            condition, loop;

        handleCommand.call(this, this._queue[execIndex], data);

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
            cb(command, execData);

            // Increment index for next execution
            execIndex++;

            // Execute next command
            handleCommand.call(this, this._queue[execIndex], execData);
            
            function setDataContext() {
                loop = getLastFrom(loops);
                execData = loop.data[loop.index];
            }

            function handleStateActions() {
                switch (command.action) {
                    case 'loop':
                        handleLoop();
                        break;
                    case 'done':
                        handleDone();
                        break;
                    case 'if':
                        handleIf();
                        break;
                    case 'else':
                        handleElse();
                        break;
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
        }
    };

    //////////////////////////////////////////////////////
    /////////////////////// Patch ////////////////////////
    //////////////////////////////////////////////////////

    Template.prototype.patch = function(root, data) {
        var frag = this.render(data);

        _patch(root, frag);

        function _patch(from, to) {
            var fromNode, toNode;
            var length = Math.max(from.childNodes.length, to.childNodes.length);

            // Iterate over the longer children
            for (var i = 0; i < length; i++) {
                fromNode = from.childNodes[i];
                toNode   = to.childNodes[i];

                // If new DOM is shorter old DOM, trim old DOM
                if (!toNode && !!fromNode) {
                    removeAllAfter(from, i);
                    return;
                } else if (!fromNode && !!toNode) {
                    // If new DOM is longer than old DOM, insert new DOM
                    var clone = toNode.cloneNode(true);
                    from.appendChild(clone);
                    patchShadowRoot(clone, toNode);
                } else if (fromNode.tagName !== toNode.tagName) {
                    // Replace old with new if tag type is different
                    from.replaceChild(toNode.cloneNode(true), fromNode);
                } else {
                    // Patch node if no do-not-patch flag
                    if (fromNode.getAttribute && fromNode.getAttribute('data-do-not-patch')) return;
                    patchNode(fromNode, toNode);
                    _patch(fromNode, toNode);
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
            patchShadowRoot(from, to);
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
            if (from.nodeName === '#text' && to.nodeName === '#text') {
                if (from.textContent !== to.textContent) {
                    from.textContent = to.textContent;
                }
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

        function patchShadowRoot(from, to) {
            if(from.shadowRoot && to.shadowRoot) {
                _patch(from.shadowRoot, to.shadowRoot);
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
            var out = old.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
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

    function patchElement(data) {
        if (data) {
            this.patch(data);
        }
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

    function isCustomElement(tag) {
        return !!tag.match('-');
    }

    function evaluate(data, funcOrVal) {
        switch (typeof funcOrVal) {
            case 'function':
                try {
                    return funcOrVal.call(data, data);
                } catch (e) {
                    return '';
                }
                break;
            default:
                return funcOrVal;

        }
    }
})();

(function() {
    var idGenerator = scope.idGenerator;
    var componentIdGenerator = idGenerator('component');
    var Signal = scope.Signal;


    //////////////////////////////////////////////////////
    ///////////////// COMPONENT MANAGER //////////////////
    //////////////////////////////////////////////////////
    /// A Component Manager to allow registering and getting
    /// Trio Components

    var ComponentManager = {};
    var COMPONENT_STORE = {};

    ComponentManager.register = function(opts) {
        if (COMPONENT_STORE[opts.tagName]) {
            return COMPONENT_STORE[opts.tagName];
        }

        var component = new Component(opts);
        COMPONENT_STORE[opts.tagName] = component;
        return component;
    };

    ComponentManager.get = function(tagName) {
        return COMPONENT_STORE[tagName];
    };

    //////////////////////////////////////////////////////
    ///////////////////// COMPONENT //////////////////////
    //////////////////////////////////////////////////////
    ///
    
    var COMPONENT_DATASTORE = {};

    var Component = function(opts) {
        this.tagName = opts.tagName;
        this.registerElement(opts);
        this.dataKeygen = idGenerator(this.tagName);
    };

    Component.prototype.setData = function(data) {
        var dataKey = this.dataKeygen();
        COMPONENT_DATASTORE[dataKey] = data;
        return dataKey;
    };

    Component.prototype.getData = function(dataKey) {
        return COMPONENT_DATASTORE[dataKey];
    };

    /**
     * Render Helper Method
     * 1. If there is data, save it in COMPONENT_DATASTORE, get dataKey
     * 2. Render <custom-element data-key='dataKey'></custom-element>
     */
    Component.prototype.createElement = function(data) {
        var component = document.createElement(this.tagName);
        component.patch(data);
        return component;
    };

    /**
     * Register Custom Element using HTML5 API
     */
    Component.prototype.registerElement = function(opts) {
        // Set Prototype of custom element
        var proto = Object.create(HTMLElement.prototype);
        var tmpl   = opts.template || {};

        proto.createdCallback = function() {
            var shadow, dataKey, data, frag;
            
            if (!tmpl.render || !tmpl.patch) {
                throw new Error('Trio.Template instance not found.');
            }

            // Create shadow root
            shadow = this.createShadowRoot();

            // Grab data from COMPONENT
            dataKey = this.getAttribute('data-key');
            data = COMPONENT_DATASTORE[dataKey];

            // Append rendered fragments into shadowRoot
            frag = opts.template.render(data);
            replaceStyleHost.call(this, frag);

            shadow.appendChild(frag);

            delete COMPONENT_DATASTORE[dataKey];

            // Set Trio uuid and signal
            this.uuid = componentIdGenerator();
            new Signal(this.uuid, this);

            // Create patch method
            this.patch = function(data) {
                tmpl.patch(shadow, data);
                replaceStyleHost.call(this, shadow);
            };

            // Extend opts into element context
            _extend(this, opts);

            if (opts.onCreate) {
                opts.onCreate.apply(this, arguments);
            }

            function _extend(obj, extendedObject) {
                var blacklist = {
                    onChange: true,
                    onAttach: true,
                    onDetach: true,
                    onCreate: true,
                    createdCallback: true,
                    attachedCallback: true,
                    detachedCallback: true,
                    attributeChangedCallback: true,
                    tagName: true
                };

                for (var key in extendedObject) {
                    if (!blacklist[key]) {
                        obj[key] = extendedObject[key];
                    }
                }
            }

            function replaceStyleHost(root) {
                if (window && window.ShadowDOMPolyfill) {
                    var list = root.getElementsByTagName('style');
                    Array.prototype.forEach.call(list, function (style) {
                        var text = style.textContent
                            .replace(/:host\b/gm, this.tagName.toLowerCase())
                            .replace(/::shadow\b/gm, ' ')
                            .replace(/::content\b/gm, ' ');
                        style.textContent = text;
                    }.bind(this));
                }
            }
        };

        proto.attachedCallback = function() {
            if (opts.onAttach) {
                opts.onAttach.apply(this, arguments);
            }
        };

        proto.detachedCallback = function() {
            if (opts.onDetach) {
                opts.onDetach.apply(this, arguments);
            }
        };

        proto.attributeChangedCallback = function() {
            if (opts.onChange) {
                opts.onChange.apply(this, arguments);
            }
        };

        document.registerElement(opts.tagName, {
            prototype: proto
        });
    };

    Trio.Component = ComponentManager;
})();

if( typeof exports !== 'undefined' ) {
    
    if( typeof module !== 'undefined' && module.exports ) {
        exports = module.exports = Trio;
    }

    exports.Trio = Trio;

} else {

    if (typeof window !== 'undefined') {
        window.Trio = Trio;
    } else if (typeof global !== 'undefined') {
        global.Trio = Trio;
    }
}

})();