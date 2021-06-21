/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${o}`);class r{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],r=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:m}}=t;for(;u<m;){const t=r.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=d.exec(e)[2],s=i.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:h,name:i,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,o=e.split(n),r=o.length-1;for(let e=0;e<r;e++){let i,n=o[e];if(""===n)i=c();else{const t=d.exec(n);null!==t&&a(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===o[r]?(s.insertBefore(c(),t),i.push(t)):t.data=o[r],u+=r}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(c(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:s}=t,o=document.createTreeWalker(i,133,null,!1);let n=p(s),r=s[n],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,n=p(s,n),r=s[n]}c.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,_=t=>"function"==typeof t&&m.has(t),f={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,r=0,a=0,c=o.nextNode();for(;r<s.length;)if(n=s[r],l(n)){for(;a<n.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=i.pop(),c=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${s} `;class b{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const a=d.exec(t);e+=null===a?t+(i?w:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new I(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let s="";for(let o=0;o<e;o++){s+=t[o];const e=i[o];if(void 0!==e){const t=e.value;if(S(t)||!C(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class I{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||S(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const o of t)i=e[s],void 0===i&&(i=new T(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(o),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class A extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends I{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class D{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function M(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(s);return i=e.keyString.get(o),void 0===i&&(i=new r(t,t.getTemplateElement()),e.keyString.set(o,i)),e.stringsArray.set(t.strings,i),i}const $=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const F=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const o=e[0];if("."===o){return new A(t,e.slice(1),i).parts}if("@"===o)return[new D(t,e.slice(1),s.eventContext)];if("?"===o)return[new k(t,e.slice(1),i)];return new x(t,e,i).parts}handleTextExpression(t){return new T(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(t,...e)=>new b(t,e,"html",F)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,O=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const L=t=>e=>{const i=O(e.type,t);let o=$.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},$.set(i,o));let n=o.stringsArray.get(e.strings);if(void 0!==n)return n;const a=e.strings.join(s);if(n=o.keyString.get(a),void 0===n){const i=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(i,t),n=new r(e,i),o.keyString.set(a,n)}return o.stringsArray.set(e.strings,n),n},H=["html","svg"],Y=new Set,j=(t,e,i)=>{Y.add(t);const s=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{H.forEach(e=>{const i=$.get(O(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:o}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let r=p(o),a=0,l=-1;for(;n.nextNode();){l++;for(n.currentNode===i&&(a=u(e),i.parentNode.insertBefore(e,i));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=p(o,r);return}r=p(o,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},z=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:z};class G extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdateInternal(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=z){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||q,o="function"==typeof s?s:s.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||q.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=B){const s=this.constructor,o=s._attributeNameForProperty(t,i);if(void 0!==o){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const o=this.constructor;i=i||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function J(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):K(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class Q{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new Q(i,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class it extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Z){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Q(String(e),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}it.finalized=!0,it.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,n=U.has(e),r=R&&11===e.nodeType&&!!e.host,a=r&&!Y.has(o),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let o=U.get(e);void 0===o&&(i(e,e.firstChild),U.set(e,o=new T(Object.assign({templateFactory:M},s))),o.appendInto(e)),o.setValue(t),o.commit()})(t,l,Object.assign({templateFactory:L(o)},s)),a){const t=U.get(l);U.delete(l);const s=t.value instanceof v?t.value.template:void 0;j(o,l,s),i(e,e.firstChild),e.appendChild(l),U.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};var st=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ot="[^\\s]+",nt=/\[([^]*?)\]/gm;function rt(t,e){for(var i=[],s=0,o=t.length;s<o;s++)i.push(t[s].substr(0,e));return i}var at=function(t){return function(e,i){var s=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function lt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0,o=e;s<o.length;s++){var n=o[s];for(var r in n)t[r]=n[r]}return t}var ct=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dt=["January","February","March","April","May","June","July","August","September","October","November","December"],ht=rt(dt,3),ut={dayNamesShort:rt(ct,3),dayNames:ct,monthNamesShort:ht,monthNames:dt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},pt=lt({},ut),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},_t={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},ft=function(t){return+t-1},gt=[null,"[1-9]\\d?"],vt=[null,ot],yt=["isPm",ot,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],wt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],bt=(at("monthNamesShort"),at("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var St=function(t,e,i){if(void 0===e&&(e=bt.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=bt[e]||e).replace(nt,(function(t,e){return s.push(e),"@@@"}));var o=lt(lt({},pt),i);return(e=e.replace(st,(function(e){return _t[e](t,o)}))).replace(/@@@/g,(function(){return s.shift()}))},Ct=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return St(t,"mediumDate")},xt=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return St(t,"haDateTime")},It=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return St(t,"shortTime")},Tt=[60,60,24,7],kt=["second","minute","hour","day"];function At(t){return t.substr(0,t.indexOf("."))}function Pt(t,e,i){if("unknown"===e.state||"unavailable"===e.state)return t("state.default."+e.state);if(e.attributes.unit_of_measurement)return e.state+" "+e.attributes.unit_of_measurement;var s=function(t){return At(t.entity_id)}(e);if("input_datetime"===s){var o;if(!e.attributes.has_time)return o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),Ct(o,i);if(!e.attributes.has_date){var n=new Date;return o=new Date(n.getFullYear(),n.getMonth(),n.getDay(),e.attributes.hour,e.attributes.minute),It(o,i)}return o=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),xt(o,i)}return e.attributes.device_class&&t("component."+s+".state."+e.attributes.device_class+"."+e.state)||t("component."+s+".state._."+e.state)||e.state}var Et=["closed","locked","off"],Dt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o},Nt=function(t){Dt(window,"haptic",t)},Mt=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var s,o=At(e),n="group"===o?"homeassistant":o;switch(o){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(n,s,{entity_id:e})}(t,e,Et.includes(t.states[e].state))},$t=function(t,e,i,s){var o;if("double_tap"===s&&i.double_tap_action?o=i.double_tap_action:"hold"===s&&i.hold_action?o=i.hold_action:"tap"===s&&i.tap_action&&(o=i.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Nt("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&Dt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Dt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(Mt(e,i.entity),Nt("success"));break;case"call-service":if(!o.service)return void Nt("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data),Nt("success")}};function Ut(t){return void 0!==t&&"none"!==t.action}const Ft={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Vt=class extends it{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return V``;const t=Object.keys(this.hass.states).filter(t=>"sun"===t.substr(0,t.indexOf(".")));return V`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ft.required.icon}></ha-icon>
            <div class="title">${Ft.required.name}</div>
          </div>
          <div class="secondary">${Ft.required.secondary}</div>
        </div>
        ${Ft.required.show?V`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>V`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ft.actions.icon}></ha-icon>
            <div class="title">${Ft.actions.name}</div>
          </div>
          <div class="secondary">${Ft.actions.secondary}</div>
        </div>
        ${Ft.actions.show?V`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ft.actions.options.tap.icon}></ha-icon>
                    <div class="title">${Ft.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${Ft.actions.options.tap.secondary}</div>
                </div>
                ${Ft.actions.options.tap.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ft.actions.options.hold.icon}></ha-icon>
                    <div class="title">${Ft.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${Ft.actions.options.hold.secondary}</div>
                </div>
                ${Ft.actions.options.hold.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+Ft.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${Ft.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${Ft.actions.options.double_tap.secondary}</div>
                </div>
                ${Ft.actions.options.double_tap.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ft.appearance.icon}></ha-icon>
            <div class="title">${Ft.appearance.name}</div>
          </div>
          <div class="secondary">${Ft.appearance.secondary}</div>
        </div>
        ${Ft.appearance.show?V`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-switch
                  aria-label=${"Toggle warning "+(this._show_warning?"off":"on")}
                  .checked=${!1!==this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                  >Show Warning?</ha-switch
                >
                <ha-switch
                  aria-label=${"Toggle error "+(this._show_error?"off":"on")}
                  .checked=${!1!==this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                  >Show Error?</ha-switch
                >
              </div>
            `:""}
      </div>
    `}_toggleAction(t){this._toggleThing(t,Ft.actions.options)}_toggleOption(t){this._toggleThing(t,Ft)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Dt(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([J()],Vt.prototype,"hass",void 0),t([J()],Vt.prototype,"_config",void 0),t([J()],Vt.prototype,"_toggle",void 0),Vt=t([W("rpi-monitor-card-editor")],Vt);const Ot="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Rt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ot?"100px":"50px",height:Ot?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Dt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Dt(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Dt(t,"action",{action:"double_tap"})):Dt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",t=>{13===t.keyCode&&s(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-rpi-monitor",Rt);const Lt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-rpi-monitor"))return t.querySelector("action-handler-rpi-monitor");const e=document.createElement("action-handler-rpi-monitor");return t.appendChild(e),e})();i&&i.bind(t,e)},Ht=(Yt=(t={})=>e=>{Lt(e.committer.element,t)},(...t)=>{const e=Yt(...t);return m.set(e,!0),e});var Yt;var jt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},qt={common:jt},zt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Bt={common:zt},Gt={en:Object.freeze({__proto__:null,common:jt,default:qt}),nb:Object.freeze({__proto__:null,common:zt,default:Bt})};function Wt(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var o;try{o=t.split(".").reduce((t,e)=>t[e],Gt[s])}catch(e){o=t.split(".").reduce((t,e)=>t[e],Gt.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],Gt.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}console.info(`%c  RPI-MONITOR-CARD \n%c  ${Wt("common.version")} 1.2.5    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"rpi-monitor-card",name:"RPi Monitor Card",description:"A template custom card for you to create something awesome"});let Kt=class extends it{constructor(){super(...arguments),this._firstTime=!0,this._sensorAvailable=!1,this._hostname="",this.kREPLACE_WITH_TEMP_UNITS="replace-with-temp-units",this._show_debug=!1,this._cardFullElements={Storage:"fs_total_gb","Storage Use":"fs_free_prcnt",Updated:"last_update",Temperature:"temperature_c","Up-time":"up_time",OS:"show-os-parts",Model:"rpi_model",Interfaces:"ifaces"},this._cardFullIconNames={Storage:"sd","Storage Use":"file-percent",Updated:"update",Temperature:"thermometer","Up-time":"clock-check-outline",OS:"linux",Model:"raspberry-pi",Interfaces:""},this.kClassIdIconFSAvail="ico-fs-percent",this.kClassIdIconFSTotal="ico-fs-total",this.kClassIdIconSysTemp="ico-sys-temp",this.kClassIdIconUptime="ico-up-time",this.kClassIdIconUpdated="ico-last-update",this.kClassIdIconOS="ico-*nix",this.kClassIdIconRPiModel="ico-rpi-model",this.kClassIdIconInterfaces="ico-rpi-ifaces",this.kClassIdFSAvail="fs-percent",this.kClassIdFSTotal="fs-total",this.kClassIdSysTemp="sys-temp",this.kClassIdUptime="up-time",this.kClassIdUpdated="last-update",this.kClassIdOS="*nix",this.kClassIdRPiModel="rpi-model",this.kClassIdInterfaces="rpi-ifaces",this.kClassIdTempScale="sys-temp-scale",this._cardFullCssIDs={Storage:this.kClassIdFSTotal,"Storage Use":this.kClassIdFSAvail,Updated:this.kClassIdUpdated,Temperature:this.kClassIdSysTemp,"Up-time":this.kClassIdUptime,OS:this.kClassIdOS,Model:this.kClassIdRPiModel,Interfaces:this.kClassIdInterfaces},this._cardFullIconCssIDs={Storage:this.kClassIdIconFSTotal,"Storage Use":this.kClassIdIconFSAvail,Updated:this.kClassIdIconUpdated,Temperature:this.kClassIdIconSysTemp,"Up-time":this.kClassIdIconUptime,OS:this.kClassIdIconOS,Model:this.kClassIdIconRPiModel,Interfaces:this.kClassIdIconInterfaces},this._cardGlanceElements={"%":"fs_free_prcnt",GB:"fs_total_gb","replace-with-temp-units":"temperature_c",UpTime:"up_time",Upd:"last_update"},this._cardGlanceIconNames={"%":"file-percent",GB:"sd","replace-with-temp-units":"thermometer",UpTime:"clock-check-outline",Upd:"update"},this._cardGlanceCssIDs={"%":this.kClassIdFSAvail,GB:this.kClassIdFSTotal,"replace-with-temp-units":this.kClassIdSysTemp,UpTime:this.kClassIdUptime,Upd:this.kClassIdUpdated},this._cardGlanceIconCssIDs={"%":this.kClassIdIconFSAvail,GB:this.kClassIdIconFSTotal,"replace-with-temp-units":this.kClassIdIconSysTemp,UpTime:this.kClassIdIconUptime,Upd:this.kClassIdIconUpdated},this._circleIconsValueByName={"circle-outline":0,"circle-slice-1":13,"circle-slice-2":25,"circle-slice-3":38,"circle-slice-4":50,"circle-slice-5":63,"circle-slice-6":75,"circle-slice-7":88,"circle-slice-8":100},this._colorUsedSpaceDefault=[{color:"undefined",from:0,to:59},{color:"yellow",from:60,to:84},{color:"red",from:85,to:100}],this._colorTemperatureDefault=[{color:"undefined",from:0,to:59},{color:"yellow",from:60,to:79},{color:"red",from:85,to:100}],this._colorReportPeriodsAgoDefault=[{color:"undefined",from:0,to:0},{color:"yellow",from:1,to:1},{color:"red",from:2,to:100}]}static async getConfigElement(){return document.createElement("rpi-monitor-card-editor")}static getStubConfig(){return{}}setConfig(t){if(this._showDebug()&&console.log("- setConfig()"),!t||t.show_error)throw new Error(Wt("common.invalid_configuration"));if(null!=t.card_style){const e=t.card_style.toLocaleLowerCase();if("full"!=e&&"glance"!=e)throw console.log("Invalid configuration. INVALID card_style = ["+t.card_style+"]"),new Error("Illegal card_style: value (card_style: "+t.card_style+") must be [full or glance]")}if(null!=t.temp_scale){const e=t.temp_scale.toLocaleLowerCase();if("c"!=e&&"f"!=e)throw console.log("Invalid configuration. INVALID temp_scale = ["+t.temp_scale+"]"),new Error("Illegal temp_scale: value (temp_scale: "+t.temp_scale+") must be [F or C]")}if(!t.entity)throw console.log("Invalid configuration. If no entity provided, you'll need to provide a remote entity"),new Error("You need to associate an entity");t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({},t),this._updateSensorAvailability()}shouldUpdate(t){if(this._updateSensorAvailability(),t.has("_config"))return!0;if(this.hass&&this._config){const e=t.get("hass");if(e)return e.states[this._config.entity]!==this.hass.states[this._config.entity]}return!0}render(){if(this._showDebug()&&console.log("- render()"),this._config.show_warning)return this.showWarning(Wt("common.show_warning"));const t=this._config.entity?this._config.entity:void 0;if(t&&!this._sensorAvailable){const e="Entity Unavailable: "+t;return this.showWarning(e)}const e=this._config.entity?this.hass.states[this._config.entity]:void 0;if(!t&&!e)return this.showWarning("Entity Unavailable");this._firstTime&&(this._showDebug()&&(console.log("- stateObj:"),console.log(e)),this._startCardRefreshTimer(),this._showDebug()&&(console.log("- 1st-time _config:"),console.log(this._config)),this._firstTime=!1);const i=this._getAttributeValueForKey("fqdn");let s="RPi monitor "+i;s=null!=this._config.name_prefix?this._config.name_prefix+" "+i:s,s=null!=this._config.name?this._config.name:s;const o=null==this._config.show_title||this._config.show_title;0==o&&(s="");const n=0==o?"last-heard-full-notitle":"last-heard-full",r=0==o?"last-heard-notitle":"last-heard",a=this._getRelativeTimeSinceUpdate();if(this._useFullCard()){const t=this._generateFullsizeCardRows();return V`
        <ha-card
          .header=${s}
          @action=${this._handleAction}
          .actionHandler=${Ht({hasHold:Ut(this._config.hold_action),hasDoubleClick:Ut(this._config.double_tap_action)})}
          tabindex="0"
          aria-label=${s}
        >
          <div id="states" class="card-content">
            ${t}
            <div id="card-timestamp" class=${n}>${a}</div>
          </div>
        </ha-card>
      `}{const t=this._generateGlanceCardRows();return V`
        <ha-card
          .header=${s}
          @action=${this._handleAction}
          .actionHandler=${Ht({hasHold:Ut(this._config.hold_action),hasDoubleClick:Ut(this._config.double_tap_action)})}
          tabindex="0"
          aria-label=${s}
        >
          <div class="content">
            ${t}
            <div id="card-timestamp" class=${r}>${a}</div>
          </div>
        </ha-card>
      `}}_getRelativeTimeSinceUpdate(){var t,e,i;const s=this._config.entity?this.hass.states[this._config.entity]:void 0,o=Pt(null===(t=this.hass)||void 0===t?void 0:t.localize,s,null===(e=this.hass)||void 0===e?void 0:e.language),n=void 0===o?"{unknown}":function(t,e,i){void 0===i&&(i={});var s,o=((i.compareTime||new Date).getTime()-t.getTime())/1e3,n=o>=0?"past":"future";o=Math.abs(o);for(var r=0;r<Tt.length;r++){if(o<Tt[r]){o=Math.floor(o),s=e("ui.components.relative_time.duration."+kt[r],"count",o);break}o/=Tt[r]}return void 0===s&&(s=e("ui.components.relative_time.duration.week","count",o=Math.floor(o))),!1===i.includeTense?s:e("ui.components.relative_time."+n,"time",s)}(new Date(o),null===(i=this.hass)||void 0===i?void 0:i.localize);return this._sensorAvailable?n:"{unknown}"}_getMinutesSinceUpdate(){var t,e;const i=this._config.entity?this.hass.states[this._config.entity]:void 0,s=Pt(null===(t=this.hass)||void 0===t?void 0:t.localize,i,null===(e=this.hass)||void 0===e?void 0:e.language),o=new Date(s);let n=((new Date).getTime()-o.getTime())/1e3;return n/=60,Math.abs(Math.round(n))}updated(t){if(this._showDebug()&&console.log("- updated()"),!this._config)return;if(this.hass){const e=t.get("hass");e&&e.themes===this.hass.themes||function(t,e,i,s){void 0===s&&(s=!1),t._themes||(t._themes={});var o=e.default_theme;("default"===i||i&&e.themes[i])&&(o=i);var n=Object.assign({},t._themes);if("default"!==o){var r=e.themes[o];Object.keys(r).forEach((function(e){var i="--"+e;t._themes[i]="",n[i]=r[e]}))}if(t.updateStyles?t.updateStyles(n):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,n),s){var a=document.querySelector("meta[name=theme-color]");if(a){a.hasAttribute("default-content")||a.setAttribute("default-content",a.getAttribute("content"));var l=n["--primary-color"]||a.getAttribute("default-content");a.setAttribute("content",l)}}}(this,this.hass.themes,this._config.theme)}this.hass.states[this._config.entity]||this._stopCardRefreshTimer();const e=this.shadowRoot;if(this._sensorAvailable)if(this._useFullCard())for(const t in this._cardFullCssIDs){const i=this._cardFullCssIDs[t],s=this._cardFullElements[t],o=this._getAttributeValueForKey(s),n=this._getFullCardValueForAttributeKey(s),r=e.getElementById(i);r.textContent=n;const a=this._cardFullIconCssIDs[t],l=e.getElementById(a);if("fs_free_prcnt"==s){const t=this._computeFileSystemUsageColor(o);""!=t&&(r.style.setProperty("color",t),l.style.setProperty("color",t))}if("temperature_c"==s){const t=this._computeTemperatureColor(o);""!=t&&(r.style.setProperty("color",t),l.style.setProperty("color",t))}}else for(const t in this._cardGlanceCssIDs){const i=this._cardGlanceCssIDs[t],s=this._cardGlanceElements[t],o=this._getAttributeValueForKey(s),n=this._getGlanceCardValueForAttributeKey(s),r=e.getElementById(i);r.textContent=n;const a=this._cardGlanceIconCssIDs[t],l=e.getElementById(a);if("fs_free_prcnt"==s){const t=this._computeFileSystemUsageColor(o);""!=t&&(r.style.setProperty("color",t),l.style.setProperty("color",t))}if("temperature_c"==s&&"n/a"!=n){const t=this._computeTemperatureColor(o);""!=t&&(r.style.setProperty("color",t),l.style.setProperty("color",t));e.getElementById(this.kClassIdTempScale).textContent=this._getTemperatureScale()}}}_handleAction(t){this.hass&&this._config&&t.detail.action&&$t(this,this.hass,this._config,t.detail.action)}showWarning(t){return V`
      <hui-warning>${t}</hui-warning>
    `}showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),V`
      ${e}
    `}_startCardRefreshTimer(){this._updateTimerID=setInterval(()=>this._handleCardUpdateTimerExpiration(),1e3)}_stopCardRefreshTimer(){null!=this._updateTimerID&&(clearInterval(this._updateTimerID),this._updateTimerID=void 0)}_handleCardUpdateTimerExpiration(){const t=this.shadowRoot;let e=!1;if(null!=(this._config.entity?this.hass.states[this._config.entity]:void 0)){const i=t.getElementById("card-timestamp");if(i){let t=this._getRelativeTimeSinceUpdate();t&&(t.includes("NaN")&&(t="waiting for report...",e=!0),i.textContent=t),e&&this._emptyCardValuesWhileWaitingForSensor()}}}_useFullCard(){let t=!0;return this._config&&null!=this._config.card_style&&(t="full"==this._config.card_style.toLocaleLowerCase()),t}_useTempsInC(){let t=!0;return this._config&&null!=this._config.temp_scale&&(t="c"==this._config.temp_scale.toLocaleLowerCase()),t}_logChangeMessage(t){""==this._hostname&&(this._hostname=this._getAttributeValueForKey("host_name"));const e="("+this._hostname+"): "+t;this._showDebug()&&console.log(e)}_updateSensorAvailability(){let t=!1;if(this.hass&&this._config){const e=this._config.entity?this._config.entity:void 0,i=this._config.entity?this.hass.states[this._config.entity]:void 0;if(e||i)try{const e="unavailable"!=this.hass.states[this._config.entity].state;t=this._sensorAvailable!=e,this._sensorAvailable=e}catch(e){this._sensorAvailable=!1,t=!0}else this._sensorAvailable=!1,t=!0}else this._sensorAvailable=!1,t=!0;t&&this._logChangeMessage("* SENSOR available: "+this._sensorAvailable)}_getIconNameForPercent(t){let e="";for(const i in this._circleIconsValueByName){if(t<=this._circleIconsValueByName[i]){e=i;break}}return e}_computeReporterAgeColor(t){const e=Number(t);let i;return this._colorReportPeriodsAgoDefault.forEach(t=>{e>=t.from&&e<=t.to&&(i=t.color)}),null==i&&(i=""),i}_computeTemperatureColor(t){const e=this._config,i=Number(t),s=e.temp_severity?e.temp_severity:this._colorTemperatureDefault;let o;isNaN(i)?s.forEach(e=>{t==e.text&&(o=e.color)}):s.forEach(e=>{if(i>=e.from&&i<=e.to){o=e.color;const i="_computeTemperatureColor() - value=["+t+"] matched(from="+e.from+", to="+e.to+", color="+o+")";this._showDebug()&&console.log(i)}});const n="_computeTemperatureColor() - value=["+t+"] returns(color="+o+")";return this._showDebug()&&console.log(n),null==o&&(o=""),o}_computeFileSystemUsageColor(t){const e=this._config,i=Number(t),s=e.fs_severity?e.fs_severity:this._colorUsedSpaceDefault;let o;isNaN(i)?s.forEach(e=>{t==e.text&&(o=e.color)}):s.forEach(e=>{if(i>=e.from&&i<=e.to){o=e.color;const i="_computeFileSystemUsageColor() - value=["+t+"] matched(from="+e.from+", to="+e.to+", color="+o+")";this._showDebug()&&console.log(i)}});const n="_computeFileSystemUsageColor() - value=["+t+"] returns(color="+o+")";return this._showDebug()&&console.log(n),null==o&&(o=""),o}_filterUptime(t){const e=t.split(" ");let i=t;if(i.includes(":")){for(let t=0;t<e.length;t++){const i=e[t];if(i.includes(":")){const s=i.split(":"),o=s[0]+"h:"+s[1]+"m";e[t]=o}}i=e.join(" ")}return i}_getAttributeValueForKey(t){if(!this.hass||!this._config)return"";const e=this._config.entity?this._config.entity:void 0,i=this._config.entity?this.hass.states[this._config.entity]:void 0;if(!e&&!i)return"";if(null==(null==i?void 0:i.attributes))return"";let s="";return t in(null==i?void 0:i.attributes)&&(s=null==i?void 0:i.attributes[t]),s}_emptyCardValuesWhileWaitingForSensor(){const t=this.shadowRoot;if(this._sensorAvailable)if(this._useFullCard())for(const e in this._cardFullCssIDs){const i=this._cardFullCssIDs[e];t.getElementById(i).textContent=""}else for(const e in this._cardGlanceCssIDs){const i=this._cardGlanceCssIDs[e],s=this._cardGlanceElements[e];if(t.getElementById(i).textContent="","temperature_c"==s){t.getElementById(this.kClassIdTempScale).textContent=this._getTemperatureScale()}}}_generateFullsizeCardRows(){const t=[];for(const e in this._cardFullElements){const i=this._cardFullElements[e],s=this._getFullCardValueForAttributeKey(i);let o=this._cardFullIconNames[e];if("fs_free_prcnt"==i){const t=this._getAttributeValueForKey(i);o=this._getIconNameForPercent(t)}const n=this._cardFullIconCssIDs[e],r=this._cardFullCssIDs[e];let a="attribute-row";"Model"==e?a="first-short":"Interfaces"==e&&(a="last-short"),t.push(V`
        <div class="${a}">
          <rpi-attribute-row>
            <div class="icon-holder">
              <ha-icon id="${n}" class="attr-icon-full pointer" icon="mdi:${o}"></ha-icon>
            </div>
            <div class="info pointer text-content attr-value">${e}</div>
            <div id="${r}" class="text-content right uom">${s}</div>
          </rpi-attribute-row>
        </div>
      `)}return t}_generateGlanceCardRows(){const t=[];for(const e in this._cardGlanceElements){const i=this._cardGlanceElements[e],s=this._getGlanceCardValueForAttributeKey(i);let o=e;o==this.kREPLACE_WITH_TEMP_UNITS&&(o="n/a"!=s?this._getTemperatureScale():"");let n=this._cardGlanceIconNames[e];"fs_free_prcnt"==i&&(n=this._getIconNameForPercent(s));const r=this._cardGlanceCssIDs[e],a=this._cardGlanceIconCssIDs[e];let l="units";"temperature_c"==i&&(l=this.kClassIdTempScale),t.push(V`
        <div class="attributes" tabindex="0">
          <div>
            <ha-icon id="${a}" class="attr-icon" icon="mdi:${n}"></ha-icon>
          </div>
          <div id="${r}" class="attr-value">${s}</div>
          <div id="${l}" class="uom">${o}</div>
        </div>
      `)}return t}_getTemperatureScale(){const t=1==this._useTempsInC()?"ºC":"ºF",e="_getTemperatureScale() scaleInterp=("+t+")";return this._showDebug()&&console.log(e),t}_getScaledTemperatureValue(t){let e=t;"n/a"!=e&&0==this._useTempsInC()&&(e=(9*parseFloat(t)/5+32).toFixed(1));const i="_getScaledTemperatureValue("+t+") scaleInterp=("+e+")";return this._showDebug()&&console.log(i),e}_getFullCardValueForAttributeKey(t){const e=this._getAttributeValueForKey(t);let i=e;if("last_update"==t)i=this._getUIDateForTimestamp(e);else if("temperature_c"==t){if(i=this._getScaledTemperatureValue(e),"n/a"!=i){i=i+" "+this._getTemperatureScale()}}else if("fs_total_gb"==t)i=e+" GB";else if("fs_free_prcnt"==t)i=e+" %";else if("up_time"==t)i=this._filterUptime(i);else if("show-os-parts"==t){i=this._getAttributeValueForKey("ux_release")+" v"+this._getAttributeValueForKey("ux_version")}else if("ifaces"==t){const t=[];e.includes("e")&&t.push("Ether"),e.includes("w")&&t.push("WiFi"),e.includes("b")&&t.push("Bluetooth"),i=t.join(", ")}return i}_getGlanceCardValueForAttributeKey(t){const e=this._getAttributeValueForKey(t);let i=e;return"last_update"==t?i=this._getUIDateForTimestamp(e):"temperature_c"==t?i=this._getScaledTemperatureValue(e):"up_time"==t&&(i=this._filterUptime(i)),i}_getUIDateForTimestamp(t){return new Date(t).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}_showDebug(){let t=this._show_debug;return this._config&&null!=this._config.show_debug&&(t=1==t||1==this._config.show_debug),t}static get styles(){return tt`
      ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }
      rpi-attribute-row {
        display: grid;
        flex-direction: row;
        align-items: center;
        height: 40px;
        grid-template-columns: 40px 2fr 3fr;
      }
      #states > * {
        margin: 8px 0px;
      }
      #states > div > * {
        overflow: hidden;
      }
      #states {
        flex: 1 1 0%;
      }
      .right {
        text-align: right;
      }
      .first-short {
        margin: 8px 0px 0px 0px;
        height: 20px;
      }
      .mid-short {
        margin: 0px;
        height: 20px;
      }
      .last-short {
        margin: 0px 0px 8px 0px;
        height: 20px;
      }
      .pointer {
        cursor: pointer;
      }
      .icon-holder {
        align-items: center;
        margin-left: 8px;
      }
      .attr-icon-full {
        color: var(--paper-item-icon-color);
      }
      .attribute-row {
        height: 40px;
      }
      .text-content {
        display: inline;
        line-height: 20px;
      }
      .info {
        white-space: nowrap;
        text-overflow: ellipses;
        overflow: hidden;
        margin-left: 16px;
        flex: 1 0 60px;
      }
      .content {
        display: flex;
        justify-content: space-between;
        padding: 16px 32px 24px 32px;
      }
      .attributes {
        cursor: pointer;
      }
      .attributes div {
        text-align: center;
      }
      .uom {
        color: var(--secondary-text-color);
      }
      .attr-value {
        color: var(--primary-text-color);
      }
      .attr-icon {
        color: var(--paper-item-icon-color);
        margin-bottom: 8px;
      }
      .last-heard-full {
        position: absolute;
        top: 45px;
        right: 30px;
        font-size: 12px;
        color: var(--primary-text-color);
      }
      .last-heard {
        position: absolute;
        top: 55px;
        right: 30px;
        font-size: 12px;
        color: var(--primary-text-color);
      }
      .last-heard-full-notitle {
        position: absolute;
        top: 3px;
        right: 30px;
        font-size: 12px;
        color: var(--primary-text-color);
      }
      .last-heard-notitle {
        position: absolute;
        bottom: 5px;
        right: 90px;
        font-size: 12px;
        color: var(--primary-text-color);
      }
    `}};t([J()],Kt.prototype,"hass",void 0),t([J()],Kt.prototype,"_config",void 0),Kt=t([W("rpi-monitor-card")],Kt);export{Kt as RPiMonitorCard};
