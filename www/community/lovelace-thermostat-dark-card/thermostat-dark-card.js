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
function t(t,e,i,s){var r,a=arguments.length,n=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n
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
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${r}`);class n{constructor(t,e){this.parts=[],this.element=e;const i=[],r=[],n=document.createTreeWalker(e.content,133,null,!1);let l=0,c=-1,u=0;const{strings:p,values:{length:_}}=t;for(;u<_;){const t=n.nextNode();if(null!==t){if(c++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=d.exec(e)[2],s=i.toLowerCase()+"$lit$",r=t.getAttribute(s);t.removeAttribute(s);const n=r.split(a);this.parts.push({type:"attribute",index:c,name:i,strings:n}),u+=n.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,r=e.split(a),n=r.length-1;for(let e=0;e<n;e++){let i,a=r[e];if(""===a)i=h();else{const t=d.exec(a);null!==t&&o(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(a)}s.insertBefore(i,t),this.parts.push({type:"node",index:++c})}""===r[n]?(s.insertBefore(h(),t),i.push(t)):t.data=r[n],u+=n}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&c!==l||(c++,e.insertBefore(h(),t)),l=c,this.parts.push({type:"node",index:c}),null===t.nextSibling?t.data="":(i.push(t),c--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else n.currentNode=r.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,133,null,!1);let a=p(s),n=s[a],o=-1,l=0;const h=[];let d=null;for(;r.nextNode();){o++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(h.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==n&&n.index===o;)n.index=null!==d?-1:n.index-l,a=p(s,a),n=s[a]}h.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
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
const _=new WeakMap,m=t=>"function"==typeof t&&_.has(t),g={},f={};
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
class v{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let a,n=0,o=0,h=r.nextNode();for(;n<s.length;)if(a=s[n],l(a)){for(;o<a.index;)o++,"TEMPLATE"===h.nodeName&&(i.push(h),r.currentNode=h.content),null===(h=r.nextNode())&&(r.currentNode=i.pop(),h=r.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,a.name,a.strings,this.options));n++}else this.__parts.push(void 0),n++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),b=` ${s} `;class S{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let a=0;a<t;a++){const t=this.strings[a],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=d.exec(t);e+=null===o?t+(i?b:r):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
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
 */const w=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new T(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let s="";for(let r=0;r<e;r++){s+=t[r];const e=i[r];if(void 0!==e){const t=e.value;if(w(t)||!C(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||w(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class V{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===f?(this.value=f,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)i=e[s],void 0===i&&(i=new V(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class k extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends T{}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function O(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(s);return i=e.keyString.get(r),void 0===i&&(i=new n(t,t.getTemplateElement()),e.keyString.set(r,i)),e.stringsArray.set(t.strings,i),i}const D=new Map,R=new WeakMap;
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
 */const z=new
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
class{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new k(t,e.slice(1),i).parts}if("@"===r)return[new E(t,e.slice(1),s.eventContext)];if("?"===r)return[new P(t,e.slice(1),i)];return new x(t,e,i).parts}handleTextExpression(t){return new V(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(t,...e)=>new S(t,e,"html",z)
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
 */,H=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const Y=t=>e=>{const i=H(e.type,t);let r=D.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},D.set(i,r));let a=r.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(s);if(a=r.keyString.get(o),void 0===a){const i=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(i,t),a=new n(e,i),r.keyString.set(o,a)}return r.stringsArray.set(e.strings,a),a},U=["html","svg"],j=new Set,q=(t,e,i)=>{j.add(t);const s=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:a}=r;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(s,t);const n=document.createElement("style");for(let t=0;t<a;t++){const e=r[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{U.forEach(e=>{const i=D.get(H(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),c(t,i)})})})(t);const o=s.content;i?function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const a=document.createTreeWalker(s,133,null,!1);let n=p(r),o=0,l=-1;for(;a.nextNode();){l++;for(a.currentNode===i&&(o=u(e),i.parentNode.insertBefore(e,i));-1!==n&&r[n].index===l;){if(o>0){for(;-1!==n;)r[n].index+=o,n=p(r,n);return}n=p(r,n)}}}(i,n,o.firstChild):o.insertBefore(n,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(n,o.firstChild);const t=new Set;t.add(n),c(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:F};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||G}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=F){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||I,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||I.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=G){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
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
const Z=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),W=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function J(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):W(t,e)}function X(t){return J({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class tt{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new tt(i,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const it={};class st extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!K){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new tt(String(e),Q)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==it&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return it}}st.finalized=!0,st.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,a=R.has(e),n=L&&11===e.nodeType&&!!e.host,o=n&&!j.has(r),l=o?document.createDocumentFragment():e;if(((t,e,s)=>{let r=R.get(e);void 0===r&&(i(e,e.firstChild),R.set(e,r=new V(Object.assign({templateFactory:O},s))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:Y(r)},s)),o){const t=R.get(l);R.delete(l);const s=t.value instanceof v?t.value.template:void 0;q(r,l,s),i(e,e.firstChild),e.appendChild(l),R.set(e,t)}!a&&n&&window.ShadyCSS.styleElement(e.host)};var rt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,at="[^\\s]+",nt=/\[([^]*?)\]/gm;function ot(t,e){for(var i=[],s=0,r=t.length;s<r;s++)i.push(t[s].substr(0,e));return i}var lt=function(t){return function(e,i){var s=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function ht(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0,r=e;s<r.length;s++){var a=r[s];for(var n in a)t[n]=a[n]}return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ct=["January","February","March","April","May","June","July","August","September","October","November","December"],ut=ot(ct,3),pt={dayNamesShort:ot(dt,3),dayNames:dt,monthNamesShort:ut,monthNames:ct,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},_t=ht({},pt),mt=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},gt={D:function(t){return String(t.getDate())},DD:function(t){return mt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return mt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return mt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return mt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return mt(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return mt(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return mt(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return mt(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return mt(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return mt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return mt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+mt(Math.floor(Math.abs(e)/60),2)+":"+mt(Math.abs(e)%60,2)}},ft=function(t){return+t-1},vt=[null,"[1-9]\\d?"],yt=[null,at],bt=["isPm",at,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],St=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],wt=(lt("monthNamesShort"),lt("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Ct=function(t,e,i){if(void 0===e&&(e=wt.default),void 0===i&&(i={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var s=[];e=(e=wt[e]||e).replace(nt,(function(t,e){return s.push(e),"@@@"}));var r=ht(ht({},_t),i);return(e=e.replace(rt,(function(e){return gt[e](t,r)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();let xt=class extends st{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _step(){var t;return(null===(t=this._config)||void 0===t?void 0:t.step)||.5}get _chevron_size(){var t;return(null===(t=this._config)||void 0===t?void 0:t.chevron_size)||50}get _pending(){var t;return(null===(t=this._config)||void 0===t?void 0:t.pending)||3}get _idle_zone(){var t;return(null===(t=this._config)||void 0===t?void 0:t.idle_zone)||2}get _highlight_tap(){var t;return(null===(t=this._config)||void 0===t?void 0:t.highlight_tap)||!1}render(){return this.hass&&this._config?$`
      <div class="card-config">
        <div class="values">
        <ha-entity-picker
          label="Entity (Required)"
          .hass=${this.hass}
          .value=${this._entity}
          .configValue=${"entity"}
          .includeDomains=${["climate"]}
          @value-changed=${this._valueChanged}
          allow-custom-entity
        ></ha-entity-picker>
        </div>
        <div class="values">
          <paper-input
            label="Name (Optional)"
            .value=${this._name}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>
            <paper-input
              label="Step (Optional)"
              .value=${this._step}
              .configValue=${"step"}
              @value-changed=${this._valueChanged}
            ></paper-input>
            <paper-input
              label="Chevron size (Optional)"
              .value=${this._chevron_size}
              .configValue=${"chevron_size"}
              @value-changed=${this._valueChanged}
            ></paper-input>
            <paper-input
              label="Activation delay (Optional)"
              .value=${this._pending}
              .configValue=${"pending"}
              @value-changed=${this._valueChanged}
            ></paper-input>
            <paper-input
              label="Minimum difference between set points (Optional)"
              .value=${this._idle_zone}
              .configValue=${"idle_zone"}
              @value-changed=${this._valueChanged}
            ></paper-input>
            <br />
            <ha-formfield .label=${"Highlight tap is "+(this._highlight_tap?"on":"off")}>
              <ha-switch
                .checked=${!1!==this._highlight_tap}
                .configValue=${"highlight_tap"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>
      </div>
    `:$``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;let i=!0;if(this["_"+e.configValue]!==e.value){if(e.configValue)if(""===e.value)try{delete this._config[e.configValue]}catch(t){i=!1,console.warn("Could not delete %s",e.configValue)}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});i&&function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});r.detail=i,t.dispatchEvent(r)}(this,"config-changed",{config:this._config})}}static get styles(){return et`
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        margin: 5px;
      }
      ha-switch {
        margin: 5px;
      }
    `}};t([J({attribute:!1})],xt.prototype,"hass",void 0),t([X()],xt.prototype,"_config",void 0),t([X()],xt.prototype,"_helpers",void 0),xt=t([Z("thermostat-dark-card-editor")],xt);const Tt="heating",Vt="cooling",Pt="idle",kt=["eco","away"];class Mt{static rotatePoint(t,e,i){const s=e*Math.PI/180,r=t[0]-i[0],a=t[1]-i[1];return[r*Math.cos(s)-a*Math.sin(s)+i[0],r*Math.sin(s)+a*Math.cos(s)+i[1]]}static rotatePoints(t,e,i){return t.map(t=>this.rotatePoint(t,e,i))}static pointsToPath(t){return t.map((t,e)=>(e>0?"L":"M")+t[0]+" "+t[1]).join(" ")+"Z"}static circleToPath(t,e,i){return["M",t,",",e,"m",0-i,",",0,"a",i,",",i,0,1,",",0,2*i,",",0,"a",i,",",i,0,1,",",0,0-2*i,",",0,"z"].join(" ").replace(/\s,\s/g,",")}static donutPath(t,e,i,s){return this.circleToPath(t,e,i)+" "+this.circleToPath(t,e,s)}static superscript(t){return`${Math.floor(t)}${t%1!=0?"⁵":""}`}static restrictToRange(t,e,i){return t<e?e:t>i?i:t}static anglesToSectors(t,e,i){let s=0,r=0,a=0,n=0,o=0;const l=i>180?360-i:i;return s=l*Math.PI/180,r=Math.sqrt(2*t*t-2*t*t*Math.cos(s)),a=l<=90?t*Math.sin(s):t*Math.sin((180-l)*Math.PI/180),o=Math.sqrt(r*r-a*a),n=i<=180?t+a:t-a,{L:t,X:n,Y:o,R:e}}}class Nt extends st{get hvacState(){return this._hvacState}get container(){return this._container}set dual(t){this._dual=t}get dual(){return this._dual}get temperature(){return{ambient:this._ambient,low:this._low,high:this._high,target:this._target,dual:this.dual}}set temperature(t){this._ambient=t.ambient,this._low=t.low,this._high=t.high,this._target=t.target,this._dual="number"==typeof this._low&&"number"==typeof this._high}createSVGElement(t,e){const i=document.createElementNS("http://www.w3.org/2000/svg",t);return this.svgAttributes(i,e),i}svgAttributes(t,e){for(const i in e)t.setAttribute(i,e[i])}renderSVG(t){t.step=Number(t.step),t.chevron_size=Number(t.chevron_size),t.pending=Number(t.pending),t.idle_zone=Number(t.idle_zone),this._config=t,this._ticks=[],this._controls=[],this._container&&this._container.removeChild&&this._container.removeChild(this._container.childNodes[0]),this._container=document.createElement("ha-card"),this._container.className="dial_container";const e=document.createElement("style");t.name&&this._container.appendChild(this._buildTitle(t.name)),this._container.appendChild(e);const i=this._buildCore(t.diameter);i.appendChild(this._buildDial(t.radius)),i.appendChild(this._buildTicks(t.numTicks)),i.appendChild(this._buildRing(t.radius)),i.appendChild(this._buildLeaf(t.radius)),i.appendChild(this._buildThermoIcon(t.radius)),i.appendChild(this._buildDialSlot(1)),i.appendChild(this._buildDialSlot(2)),i.appendChild(this._buildDialSlot(3)),i.appendChild(this._buildText(t.radius,"ambient",0)),i.appendChild(this._buildText(t.radius,"target",0)),i.appendChild(this._buildText(t.radius,"low",-t.radius/2.5)),i.appendChild(this._buildText(t.radius,"high",t.radius/3)),i.appendChild(this._buildChevrons(t.radius,0,"low",.7,-t.radius/2.5)),i.appendChild(this._buildChevrons(t.radius,0,"high",.7,t.radius/3)),i.appendChild(this._buildChevrons(t.radius,0,"target",1,0)),i.appendChild(this._buildChevrons(t.radius,180,"low",.7,-t.radius/2.5)),i.appendChild(this._buildChevrons(t.radius,180,"high",.7,t.radius/3)),i.appendChild(this._buildChevrons(t.radius,180,"target",1,0)),this._container.appendChild(i),this._root=i,this._buildControls(t.radius),this._savedOptions&&this.updateState(this._savedOptions),this._root.addEventListener("click",()=>this._enableControls())}_configDial(){const t=this._config;let e,i,s;this._updateClass("has_dual",this.dual);const r=[],a=Mt.restrictToRange(Math.round((this._ambient-this.minValue)/(this.maxValue-this.minValue)*t.numTicks),0,t.numTicks-1),n=Mt.restrictToRange(Math.round((this._target-this.minValue)/(this.maxValue-this.minValue)*t.numTicks),0,t.numTicks-1),o=Mt.restrictToRange(Math.round((this._high-this.minValue)/(this.maxValue-this.minValue)*t.numTicks),0,t.numTicks-1),l=Mt.restrictToRange(Math.round((this._low-this.minValue)/(this.maxValue-this.minValue)*t.numTicks),0,t.numTicks-1);if(this.dual)switch(e=[this._low,this._high,this._ambient].sort(),this._updateTemperatureSlot(null,0,"temperature_slot_1"),this._updateTemperatureSlot(null,0,"temperature_slot_2"),this._updateTemperatureSlot(null,0,"temperature_slot_3"),this._hvacState){case Vt:o<a&&(i=o,s=a,this._updateTemperatureSlot(this._ambient,8,"temperature_slot_3"),this._updateTemperatureSlot(this._high,-8,"temperature_slot_2"));break;case Tt:l>a&&(i=a,s=l,this._updateTemperatureSlot(this._ambient,-8,"temperature_slot_1"),this._updateTemperatureSlot(this._low,8,"temperature_slot_2"));break;case Pt:o<a&&(i=o,s=a,this._updateTemperatureSlot(this._ambient,8,"temperature_slot_3"),this._updateTemperatureSlot(this._high,-8,"temperature_slot_2")),l>a&&(i=a,s=l,this._updateTemperatureSlot(this._ambient,-8,"temperature_slot_1"),this._updateTemperatureSlot(this._low,8,"temperature_slot_2"))}else switch(e=[this._target,this._ambient].sort(),this._updateTemperatureSlot(e[0],-8,"temperature_slot_1"),this._updateTemperatureSlot(e[1],8,"temperature_slot_2"),this._hvacState){case Vt:n<a&&(i=n,s=a);break;case Tt:n>a&&(i=a,s=n)}e.forEach(e=>r.push(Mt.restrictToRange(Math.round((e-this.minValue)/(this.maxValue-this.minValue)*t.numTicks),0,t.numTicks-1))),this._updateTicks(i,s,r),this._updateClass("has-leaf",this._away),this._updateHvacState(),this._updateText("ambient",this._ambient),this._updateEdit(!1),this._updateClass("has-thermo",!1)}updateState(t){this._away=t.away||!1,this.minValue=t.minValue,this.maxValue=t.maxValue,this._hvacState=t.hvacState,this.temperature={low:t.target_temperature_low,high:t.target_temperature_high,target:t.target_temperature,ambient:t.ambientTemperature,dual:"number"==typeof t.target_temperature_low&&"number"==typeof t.target_temperature_high},this._savedOptions=t,this._configDial()}_temperatureControlClicked(t){const e=this._config;let i;if(this._root.querySelectorAll("path.dial__chevron").forEach(t=>this.setSvgClass(t,"pressed",!1)),this._inControl){if(this.dual){switch(t){case 0:i=this._root.querySelectorAll("path.dial__chevron--low")[1],this._low=this._low+e.step,this._low+e.idle_zone>=this._high&&(this._low=this._high-e.idle_zone);break;case 1:i=this._root.querySelectorAll("path.dial__chevron--high")[1],this._high=this._high+e.step,this._high>this.maxValue&&(this._high=this.maxValue);break;case 2:i=this._root.querySelectorAll("path.dial__chevron--high")[0],this._high=this._high-e.step,this._high-e.idle_zone<=this._low&&(this._high=this._low+e.idle_zone);break;case 3:i=this._root.querySelectorAll("path.dial__chevron--low")[0],this._low=this._low-e.step,this._low<this.minValue&&(this._low=this.minValue)}this.setSvgClass(i,"pressed",!0),setTimeout(()=>this.setSvgClass(i,"pressed",!1),200),e.highlight_tap&&this.setSvgClass(this._controls[t],"control-visible",!0)}else t<2?(i=this._root.querySelectorAll("path.dial__chevron--target")[1],this._target=this._target+e.step,this._target>this.maxValue&&(this._target=this.maxValue),e.highlight_tap&&(this.setSvgClass(this._controls[0],"control-visible",!0),this.setSvgClass(this._controls[1],"control-visible",!0))):(i=this._root.querySelectorAll("path.dial__chevron--target")[0],this._target=this._target-e.step,this._target<this.minValue&&(this._target=this.minValue),e.highlight_tap&&(this.setSvgClass(this._controls[2],"control-visible",!0),this.setSvgClass(this._controls[3],"control-visible",!0))),this.setSvgClass(i,"pressed",!0),setTimeout(()=>this.setSvgClass(i,"pressed",!1),200);e.highlight_tap&&setTimeout(()=>{this.setSvgClass(this._controls[0],"control-visible",!1),this.setSvgClass(this._controls[1],"control-visible",!1),this.setSvgClass(this._controls[2],"control-visible",!1),this.setSvgClass(this._controls[3],"control-visible",!1)},200)}else this._enableControls()}_updateEdit(t){this.setSvgClass(this._root,"dial--edit",t)}_enableControls(){const t=this._config;this._inControl=!0,this._updateClass("in_control",this._inControl),this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._updateEdit(!0),this._updateClass("has-thermo",!0),this._updateText("target",this.temperature.target),this._updateText("low",this.temperature.low),this._updateText("high",this.temperature.high),this._timeoutHandler=window.setTimeout(()=>{this._updateText("ambient",this._ambient),this._updateEdit(!1),this._updateClass("has-thermo",!1),this._inControl=!1,this._updateClass("in_control",this._inControl),t.control()},1e3*t.pending)}_toggle(){return this._config.toggle(),!1}_updateClass(t,e){this.setSvgClass(this._root,t,e)}setSvgClass(t,e,i){t.classList[i?"add":"remove"](e)}_updateText(t,e){const i=this._root.querySelector("#"+t).querySelectorAll("tspan"),s=Math.floor(e);e&&(i[0].textContent=String(s),i[1].textContent=e%1!=0?String(Math.round(e%1*10)):""),this._inControl&&"target"==t&&this.dual&&(i[0].textContent="·")}_updateTemperatureSlot(t,e,i){const s=this._config,r=this._root.querySelector("#"+i);r.textContent=null!=t?Mt.superscript(t):"";const a=Mt.restrictToRange(t,this.minValue,this.maxValue),n=[s.radius,s.ticksOuterRadius-(s.ticksOuterRadius-s.ticksInnerRadius)/2],o=s.tickDegrees*(a-this.minValue)/(this.maxValue-this.minValue)-s.offsetDegrees+e,l=Mt.rotatePoint(n,o,[s.radius,s.radius]);this.svgAttributes(r,{x:l[0],y:l[1]})}_updateHvacState(){this._root.classList.forEach(t=>{-1!=t.indexOf("dial--state--")&&this._root.classList.remove(t)}),this._root.classList.add("dial--state--"+this._hvacState)}_updateTicks(t,e,i){const s=this._config,r=[[s.radius-1,s.ticksOuterRadius],[s.radius+1,s.ticksOuterRadius],[s.radius+1,s.ticksInnerRadius],[s.radius-1,s.ticksInnerRadius]],a=[[s.radius-1.5,s.ticksOuterRadius],[s.radius+1.5,s.ticksOuterRadius],[s.radius+1.5,s.ticksInnerRadius+20],[s.radius-1.5,s.ticksInnerRadius+20]];this._ticks.forEach((n,o)=>{let l=!1,h=o>=t&&o<=e?"active":"";i.forEach(t=>l=l||o==t),l&&(h+=" large");const d=s.tickDegrees/s.numTicks;this.svgAttributes(n,{d:Mt.pointsToPath(Mt.rotatePoints(l?a:r,o*d-s.offsetDegrees,[s.radius,s.radius])),class:h})})}_buildCore(t){return this.createSVGElement("svg",{width:"100%",height:"100%",viewBox:"0 0 "+t+" "+t,class:"dial"})}_buildTitle(t){const e=document.createElement("div");return e.className="dial_title",e.textContent=t,e}_buildDial(t){return this.createSVGElement("circle",{cx:t,cy:t,r:t,class:"dial__shape"})}_buildRing(t){return this.createSVGElement("path",{d:Mt.donutPath(t,t,t-4,t-8),class:"dial__editableIndicator"})}_buildTicks(t){const e=this.createSVGElement("g",{class:"dial__ticks"});for(let i=0;i<t;i++){const t=this.createSVGElement("path",{});this._ticks.push(t),e.appendChild(t)}return e}_buildLeaf(t){const e=t/5/100,i=["M",3,84,"c",24,17,51,18,73,-6,"C",100,52,100,22,100,4,"c",-13,15,-37,9,-70,19,"C",4,32,0,63,0,76,"c",6,-7,18,-17,33,-23,24,-9,34,-9,48,-20,-9,10,-20,16,-43,24,"C",22,63,8,78,3,84,"z"].map(t=>isNaN(t)?t:t*e).join(" "),s=[t-100*e*.5,1.5*t];return this.createSVGElement("path",{class:"dial__ico__leaf",d:i,transform:"translate("+s[0]+","+s[1]+")"})}_buildChevrons(t,e,i,s,r){const a=e>0?-1:1,n=this._config.chevron_size,o=["M",0,0,"L",n/2,.3*n,"L",n,0].map(t=>isNaN(t)?t:t*s).join(" "),l=[t-n/2*s*a+r,t+70*s*1.1*a];return this.createSVGElement("path",{class:"dial__chevron dial__chevron--"+i,d:o,transform:`translate(${l[0]},${l[1]}) rotate(${e})`})}_buildThermoIcon(t){const e=t/3/100,i="M 37.999 38.261 V 7 c 0 -3.859 -3.141 -7 -7 -7 s -7 3.141 -7 7 v 31.261 c -3.545 2.547 -5.421 6.769 -4.919 11.151 c 0.629 5.482 5.066 9.903 10.551 10.512 c 0.447 0.05 0.895 0.074 1.339 0.074 c 2.956 0 5.824 -1.08 8.03 -3.055 c 2.542 -2.275 3.999 -5.535 3.999 -8.943 C 42.999 44.118 41.14 40.518 37.999 38.261 Z M 37.666 55.453 c -2.146 1.921 -4.929 2.8 -7.814 2.482 c -4.566 -0.506 -8.261 -4.187 -8.785 -8.752 c -0.436 -3.808 1.28 -7.471 4.479 -9.56 l 0.453 -0.296 V 38 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -1 v -3 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -1 v -3 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -1 v -3 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -1 v -3 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -1 v -3 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 h -1 V 8 h 1 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 26.1 c 0.465 -2.279 2.484 -4 4.899 -4 c 2.757 0 5 2.243 5 5 v 1 h -1 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 1 v 3 h -1 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 1 v 3 h -1 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 1 v 3 h -1 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 1 v 3 h -1 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 1 v 3 h -1 c -0.553 0 -1 0.447 -1 1 s 0.447 1 1 1 h 1 v 4.329 l 0.453 0.296 c 2.848 1.857 4.547 4.988 4.547 8.375 C 40.999 50.841 39.784 53.557 37.666 55.453 Z".split(" ").map(t=>isNaN(t)?t:t*e).join(" "),s=[t-100*e*.3,1.65*t];return this.createSVGElement("path",{class:"dial__ico__thermo",d:i,transform:"translate("+s[0]+","+s[1]+")"})}_buildDialSlot(t){return this.createSVGElement("text",{class:"dial__lbl dial__lbl--ring",id:"temperature_slot_"+t})}_buildText(t,e,i){const s=this.createSVGElement("text",{x:t+i,y:t,class:"dial__lbl dial__lbl--"+e,id:e}),r=this.createSVGElement("tspan",{});"target"!=e&&"ambient"!=e||(i+=20);const a=this.createSVGElement("tspan",{x:t+t/3.1+i,y:t-t/6,class:"dial__lbl--super--"+e});return s.appendChild(r),s.appendChild(a),s}_buildControls(t){let e=270;for(let i=0;i<4;i++){const s=90,r=Mt.anglesToSectors(t,e,s),a="M"+r.L+","+r.L+" L"+r.L+",0 A"+r.L+","+r.L+" 1 0,1 "+r.X+", "+r.Y+" z",n=this.createSVGElement("path",{class:"dial__temperatureControl",fill:"blue",d:a,transform:"rotate("+r.R+", "+r.L+", "+r.L+")"});this._controls.push(n),n.addEventListener("click",()=>this._temperatureControlClicked(i)),this._root.appendChild(n),e+=s}}}t([X()],Nt.prototype,"_container",void 0),t([X()],Nt.prototype,"_dual",void 0),t([X()],Nt.prototype,"_inControl",void 0),t([X()],Nt.prototype,"_low",void 0),t([X()],Nt.prototype,"_high",void 0),t([X()],Nt.prototype,"_target",void 0),t([X()],Nt.prototype,"_ambient",void 0),t([X()],Nt.prototype,"_config",void 0),t([X()],Nt.prototype,"_ticks",void 0),t([X()],Nt.prototype,"_controls",void 0),t([X()],Nt.prototype,"_root",void 0),t([X()],Nt.prototype,"minValue",void 0),t([X()],Nt.prototype,"maxValue",void 0),t([X()],Nt.prototype,"_timeoutHandler",void 0),t([X()],Nt.prototype,"_hvacState",void 0),t([X()],Nt.prototype,"_away",void 0),t([X()],Nt.prototype,"_savedOptions",void 0);var Et={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},At={common:Et},Ot={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Dt={common:Ot};const Rt={en:Object.freeze({__proto__:null,common:Et,default:At}),nb:Object.freeze({__proto__:null,common:Ot,default:Dt})};window.customCards=window.customCards||[],window.customCards.push({type:"thermostat-dark-card",name:"Dark Thermostat",description:"Thermostat with a round dial"});let zt=class extends Nt{static async getConfigElement(){return document.createElement("thermostat-dark-card-editor")}static getStubConfig(){return{}}set hass(t){const e=this.config,i=t.states[e.entity];let s,r=i.attributes.current_temperature;e.ambient_temperature&&t.states[e.ambient_temperature]&&(r=t.states[e.ambient_temperature].state),s=e.hvac.attribute?i.attributes[e.hvac.attribute]:e.hvac.sensor&&e.hvac.sensor.sensor?e.hvac.sensor.attribute?t.states[e.hvac.sensor.sensor][e.hvac.sensor.attribute]:t.states[e.hvac.sensor.sensor].state:i.attributes.hvac_action||i.state,[Pt,Tt,Vt].includes(s)||(s=e.hvac.states[s]||Pt);let a=i.attributes[e.away.attribute];if(e.away.sensor.sensor){const i=t.states[e.away.sensor.sensor];a=i.state,e.away.sensor.attribute&&(a=i.attributes[e.away.sensor.attribute])}const n={minValue:e.range_min||i.attributes.min_temp,maxValue:e.range_max||i.attributes.max_temp,ambientTemperature:r,target_temperature:i.attributes.temperature,target_temperature_low:i.attributes.target_temp_low,target_temperature_high:i.attributes.target_temp_high,hvacState:s,away:kt.includes(a)};this._savedState&&this._savedState.minValue==n.minValue&&this._savedState.maxValue==n.maxValue&&this._savedState.ambientTemperature==n.ambientTemperature&&this._savedState.target_temperature==n.target_temperature&&this._savedState.target_temperature_low==n.target_temperature_low&&this._savedState.target_temperature_high==n.target_temperature_high&&this._savedState.hvacState==n.hvacState&&this._savedState.away==n.away||(this._savedState=n,this.updateState(n)),this._hass=t}setConfig(t){if(!t)throw new Error(function(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Rt[s])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Rt.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Rt.en)),""!==e&&""!==i&&(r=r.replace(e,i)),r}("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0);const e=Object.assign({},t);e.hvac=Object.assign({},t.hvac),e.diameter||(e.diameter=400),e.pending||(e.pending=3),e.idleZone||(e.idleZone=2),e.step||(e.step=.5),e.highlight_tap||(e.highlight_tap=!1),e.chevron_size||(e.chevron_size=50),e.numTicks||(e.numTicks=150),e.tickDegrees||(e.tickDegrees=300),e.hvac.states||(e.hvac.states={idle:Pt,heating:Tt,cooling:Vt}),e.radius=e.diameter/2,e.ticksOuterRadius=e.diameter/30,e.ticksInnerRadius=e.diameter/8,e.offsetDegrees=180-(360-e.tickDegrees)/2,e.control=this._controlSetPoints.bind(this),e.away=Object.assign({attribute:"preset_mode",sensor:{}},t.away||{}),this.renderSVG(e),this.config=e,this._hass&&(this.hass=this._hass)}shouldUpdate(t){return!!this.config&&(function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}}(this,t,!0),!0)}render(){return $`
    ${this.container}`}_controlSetPoints(){this.dual?this.temperature.high==this._savedState.target_temperature_high&&this.temperature.low==this._savedState.target_temperature_low||this._hass.callService("climate","set_temperature",{entity_id:this.config.entity,target_temp_high:this.temperature.high,target_temp_low:this.temperature.low}):this.temperature.target!=this._savedState.target_temperature&&this._hass.callService("climate","set_temperature",{entity_id:this.config.entity,temperature:this.temperature.target})}static get styles(){return et`
      .dial_container {
        padding: 8px;
      }
      .dial_title {
        font-size: 20px;
        padding: 8px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .dial {
        user-select: none;
        --thermostat-off-fill: #555;
        --thermostat-idle-fill: #222;
        --thermostat-path-color: rgba(255, 255, 255, 0.3);
        --thermostat-heating-fill: #e36304;
        --thermostat-cooling-fill: #007af1;
        --thermostat-path-active-color: rgba(255, 255, 255, 0.8);
        --thermostat-path-active-color-large: rgba(255, 255, 255, 1);
        --thermostat-text-color: white;
      }
      .dial.has-thermo .dial__ico__leaf {
        visibility: hidden;
      }
      .dial .dial__shape {
        transition: fill 0.5s;
      }
      .dial__ico__leaf {
        fill: #13eb13;
        opacity: 0;
        transition: opacity 0.5s;
        pointer-events: none;
      }
      .dial.has-leaf .dial__ico__leaf {
        display: block;
        opacity: 1;
        pointer-events: initial;
      }
      .dial__ico__thermo {
        fill: var(--thermostat-path-active-color);
        opacity: 0;
        transition: opacity 0.5s;
        pointer-events: none;
      }
      .dial.has-thermo .dial__ico__thermo {
        display: block;
        opacity: 1;
        pointer-events: initial;
      }
      .dial__editableIndicator {
        fill: white;
        fill-rule: evenodd;
        opacity: 0;
        transition: opacity 0.5s;
      }
      .dial__temperatureControl {
        fill: white;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .dial__temperatureControl.control-visible {
        opacity: 0.2;
      }
      .dial--edit .dial__editableIndicator {
        opacity: 1;
      }
      .dial--state--off .dial__shape {
        fill: var(--thermostat-off-fill);
      }
      .dial--state--idle .dial__shape {
        fill: var(--thermostat-idle-fill);
      }
      .dial--state--heating .dial__shape {
        fill: var(--thermostat-heating-fill);
      }
      .dial--state--cooling .dial__shape {
        fill: var(--thermostat-cooling-fill);
      }
      .dial__ticks path {
        fill: var(--thermostat-path-color);
      }
      .dial__ticks path.active {
        fill: var(--thermostat-path-active-color);
      }
      .dial__ticks path.active.large {
        fill: var(--thermostat-path-active-color-large);
      }
      .dial text,
      .dial text tspan {
        fill: var(--thermostat-text-color);
        text-anchor: middle;
        font-family: Helvetica, sans-serif;
        alignment-baseline: central;
        dominant-baseline: central;
      }
      .dial__lbl--target {
        font-size: 120px;
        font-weight: bold;
        visibility: hidden;
      }
      .dial__lbl--low,
      .dial__lbl--high {
        font-size: 90px;
        font-weight: bold;
        visibility: hidden;
      }
      .dial.in_control .dial__lbl--target {
        visibility: visible;
      }
      .dial.in_control .dial__lbl--low {
        visibility: visible;
      }
      .dial.in_control .dial__lbl--high {
        visibility: visible;
      }
      .dial__lbl--ambient {
        font-size: 120px;
        font-weight: bold;
        visibility: visible;
      }
      .dial.in_control.has_dual .dial__chevron--low,
      .dial.in_control.has_dual .dial__chevron--high {
        visibility: visible;
      }
      .dial.in_control .dial__chevron--target {
        visibility: visible;
      }
      .dial.in_control.has_dual .dial__chevron--target {
        visibility: hidden;
      }
      .dial .dial__chevron {
        visibility: hidden;
        fill: none;
        stroke: var(--thermostat-text-color);
        stroke-width: 4px;
        opacity: 0.3;
      }
      .dial .dial__chevron.pressed {
        opacity: 1;
      }
      .dial.in_control .dial__lbl--ambient {
        visibility: hidden;
      }
      .dial__lbl--super--ambient,
      .dial__lbl--super--target {
        font-size: 40px;
        font-weight: bold;
      }
      .dial__lbl--super--high,
      .dial__lbl--super--low {
        font-size: 30px;
        font-weight: bold;
      }
      .dial__lbl--ring {
        font-size: 22px;
        font-weight: bold;
      }
    `}};t([J({attribute:!1})],zt.prototype,"_hass",void 0),t([X()],zt.prototype,"config",void 0),t([X()],zt.prototype,"_savedState",void 0),zt=t([Z("thermostat-dark-card")],zt);export{zt as ThermostatDarkCard};
