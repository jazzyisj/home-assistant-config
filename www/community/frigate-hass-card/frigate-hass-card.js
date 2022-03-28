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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$5=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$6=Symbol(),n$8=new Map;class s$5{constructor(t,n){if(this._$cssResult$=!0,n!==e$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$8.get(this.cssText);return t$5&&void 0===e&&(n$8.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$7=t=>new s$5("string"==typeof t?t:t+"",e$6),r$5=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$5(o,e$6)},i$6=(e,n)=>{t$5?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$7(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$5=window.trustedTypes,r$4=e$5?e$5.emptyScript:"",h$5=window.reactiveElementPolyfillSupport,o$6={toAttribute(t,i){switch(i){case Boolean:t=t?r$4:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$7=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:o$6,reflect:!1,hasChanged:n$7};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$6(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$4){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$6.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$6.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$7)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$5||h$5({ReactiveElement:a$1}),(null!==(s$4=globalThis.reactiveElementVersions)&&void 0!==s$4?s$4:globalThis.reactiveElementVersions=[]).push("1.3.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$4;const i$5=globalThis.trustedTypes,s$3=i$5?i$5.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$4=`lit$${(Math.random()+"").slice(9)}$`,o$5="?"+e$4,n$6=`<${o$5}>`,l$3=document,h$4=(t="")=>l$3.createComment(t),r$3=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$4(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$3.createTreeWalker(l$3,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c$1?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c$1,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c$1:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$6:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$4+y):s+e$4+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$3?s$3.createHTML(u):u,l]};class E$1{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E$1.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$4)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$4),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$4),s=t.length-1;if(s>0){l.textContent=i$5?i$5.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$4()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$4());}}}else if(8===l.nodeType)if(l.data===o$5)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$4,t+1));)c.push({type:7,index:r}),t+=e$4.length-1;}r++;}}static createElement(t,i){const s=l$3.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$3(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$3).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L$1(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r$3(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r$3(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$3.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E$1.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E$1(t)),i}S(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$4()),this.A(h$4()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r$3(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$3(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$5?i$5.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L$1{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E$1,N),(null!==(t$4=globalThis.litHtmlVersions)&&void 0!==t$4?t$4:globalThis.litHtmlVersions=[]).push("2.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$4;class s$2 extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s$2.finalized=!0,s$2._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$2});const n$5=globalThis.litElementPolyfillSupport;null==n$5||n$5({LitElement:s$2});(null!==(o$4=globalThis.litElementVersions)&&void 0!==o$4?o$4:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$4=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$3(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$4(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$3(t){return e$3({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$3=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$3(i,n){return o$3({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$3;null!=(null===(n$3=window.HTMLSlotElement)||void 0===n$3?void 0:n$3.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$2=t=>(...e)=>({_$litDirective$:t,values:e});class i$2{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2=e$2(class extends i$2{constructor(t){var i;if(super(t),t.type!==t$2.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.et){this.et=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(s)}const e=i.element.classList;this.et.forEach((t=>{t in s||(e.remove(t),this.et.delete(t));}));for(const t in s){const i=!!s[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.et.add(t)):(e.remove(t),this.et.delete(t)));}return b}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1=e$2(class extends i$2{constructor(t){var e;if(super(t),t.type!==t$2.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ct){this.ct=new Set;for(const t in r)this.ct.add(t);return this.render(r)}this.ct.forEach((t=>{null==r[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.ct.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b}});

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=o=>null===o||"object"!=typeof o&&"function"!=typeof o,r$2=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return !1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),e$1(i,t);return !0},o$1=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t;}while(0===(null==s?void 0:s.size))},n$2=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(i))break;s.add(i),l$1(t);}};function r$1(i){void 0!==this._$AN?(o$1(this),this._$AM=i,n$2(this)):this._$AM=i;}function h$3(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)e$1(n[i],!1),o$1(n[i]);else null!=n&&(e$1(n,!1),o$1(n));else e$1(this,i);}const l$1=i=>{var t,e,o,n;i.type==t$2.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=h$3),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=r$1));};class d extends i$2{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,s){super._$AT(i,t,s),n$2(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(e$1(this,i),o$1(this));}setValue(t){if(r$2(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s$1{constructor(t){this.U=t;}disconnect(){this.U=void 0;}reconnect(t){this.U=t;}deref(){return this.U}}class i{constructor(){this.Y=void 0,this.q=void 0;}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)));}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0;}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$1=t=>!t$1(t)&&"function"==typeof t.then;class h$2 extends d{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new s$1(this),this._$CK=new i;}render(...s){var i;return null!==(i=s.find((t=>!n$1(t))))&&void 0!==i?i:b}update(s,i){const r=this._$Cyt;let e=r.length;this._$Cyt=i;const o=this._$CG,h=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n$1(s))return this._$Cwt=t,s;t<e&&s===r[t]||(this._$Cwt=1073741823,e=0,Promise.resolve(s).then((async t=>{for(;h.get();)await h.get();const i=o.deref();if(void 0!==i){const r=i._$Cyt.indexOf(s);r>-1&&r<i._$Cwt&&(i._$Cwt=r,i.setValue(t));}})));}return b}disconnected(){this._$CG.disconnect(),this._$CK.pause();}reconnected(){this._$CG.reconnect(this),this._$CK.resume();}}const c=e$2(h$2);

var t,r;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r||(r={}));function E(e){return e.substr(0,e.indexOf("."))}function L(e){return E(e.entity_id)}var Z=["closed","locked","off"],ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i},ce={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function me(e,t){if(e in ce)return ce[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return "mdi:bell-plus";case"armed_night":return "mdi:bell-sleep";case"disarmed":return "mdi:bell-outline";case"triggered":return "mdi:bell-ring";default:return "mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return "closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return "mdi:emoticon-dead";case"sleeping":return "mdi:sleep";case"initializing":return "mdi:timer-sand";default:return "mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var le=function(e){ne(window,"haptic",e);},de=function(e,t,r){void 0===r&&(r=!1),r?history.replaceState(null,"",t):history.pushState(null,"",t),ne(window,"location-changed",{replace:r});},fe=function(e,t,r){void 0===r&&(r=!0);var n,i=E(t),a="group"===i?"homeassistant":i;switch(i){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off";}return e.callService(a,n,{entity_id:t})},ge=function(e,t){var r=Z.includes(e.states[t].state);return fe(e,t,r)},pe=function(e,t,r,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(le("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(r.entity||r.camera_image)&&ne(e,"hass-more-info",{entityId:r.entity?r.entity:r.camera_image});break;case"navigate":n.navigation_path&&de(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":r.entity&&(ge(t,r.entity),le("success"));break;case"call-service":if(!n.service)return void le("failure");var i=n.service.split(".",2);t.callService(i[0],i[1],n.service_data,n.target),le("success");break;case"fire-dom-event":ne(e,"ll-custom",n);}};function ve(e){return void 0!==e&&"none"!==e.action}var ke=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null},xe={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},De={binary_sensor:function(e,t){var r="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return r?"mdi:battery":"mdi:battery-outline";case"battery_charging":return r?"mdi:battery":"mdi:battery-charging";case"cold":return r?"mdi:thermometer":"mdi:snowflake";case"connectivity":return r?"mdi:server-network-off":"mdi:server-network";case"door":return r?"mdi:door-closed":"mdi:door-open";case"garage_door":return r?"mdi:garage":"mdi:garage-open";case"power":return r?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return r?"mdi:check-circle":"mdi:alert-circle";case"smoke":return r?"mdi:check-circle":"mdi:smoke";case"heat":return r?"mdi:thermometer":"mdi:fire";case"light":return r?"mdi:brightness-5":"mdi:brightness-7";case"lock":return r?"mdi:lock":"mdi:lock-open";case"moisture":return r?"mdi:water-off":"mdi:water";case"motion":return r?"mdi:walk":"mdi:run";case"occupancy":return r?"mdi:home-outline":"mdi:home";case"opening":return r?"mdi:square":"mdi:square-outline";case"plug":return r?"mdi:power-plug-off":"mdi:power-plug";case"presence":return r?"mdi:home-outline":"mdi:home";case"running":return r?"mdi:stop":"mdi:play";case"sound":return r?"mdi:music-note-off":"mdi:music-note";case"update":return r?"mdi:package":"mdi:package-up";case"vibration":return r?"mdi:crop-portrait":"mdi:vibrate";case"window":return r?"mdi:window-closed":"mdi:window-open";default:return r?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return me("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in xe)return xe[t];if("battery"===t){var r=Number(e.state);if(isNaN(r))return "mdi:battery-unknown";var n=10*Math.round(r/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var i=e.attributes.unit_of_measurement;return "°C"===i||"°F"===i?"mdi:thermometer":me("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?me("input_datetime"):"mdi:calendar":"mdi:clock"}},Se=function(e){if(!e)return "mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=E(e.entity_id);return t in De?De[t](e):me(t,e.state)};

/* eslint-disable promise/prefer-await-to-then */

const methodMap = [
	[
		'requestFullscreen',
		'exitFullscreen',
		'fullscreenElement',
		'fullscreenEnabled',
		'fullscreenchange',
		'fullscreenerror',
	],
	// New WebKit
	[
		'webkitRequestFullscreen',
		'webkitExitFullscreen',
		'webkitFullscreenElement',
		'webkitFullscreenEnabled',
		'webkitfullscreenchange',
		'webkitfullscreenerror',

	],
	// Old WebKit
	[
		'webkitRequestFullScreen',
		'webkitCancelFullScreen',
		'webkitCurrentFullScreenElement',
		'webkitCancelFullScreen',
		'webkitfullscreenchange',
		'webkitfullscreenerror',

	],
	[
		'mozRequestFullScreen',
		'mozCancelFullScreen',
		'mozFullScreenElement',
		'mozFullScreenEnabled',
		'mozfullscreenchange',
		'mozfullscreenerror',
	],
	[
		'msRequestFullscreen',
		'msExitFullscreen',
		'msFullscreenElement',
		'msFullscreenEnabled',
		'MSFullscreenChange',
		'MSFullscreenError',
	],
];

const nativeAPI = (() => {
	const unprefixedMethods = methodMap[0];
	const returnValue = {};

	for (const methodList of methodMap) {
		const exitFullscreenMethod = methodList?.[1];
		if (exitFullscreenMethod in document) {
			for (const [index, method] of methodList.entries()) {
				returnValue[unprefixedMethods[index]] = method;
			}

			return returnValue;
		}
	}

	return false;
})();

const eventNameMap = {
	change: nativeAPI.fullscreenchange,
	error: nativeAPI.fullscreenerror,
};

// eslint-disable-next-line import/no-mutable-exports
let screenfull = {
	// eslint-disable-next-line default-param-last
	request(element = document.documentElement, options) {
		return new Promise((resolve, reject) => {
			const onFullScreenEntered = () => {
				screenfull.off('change', onFullScreenEntered);
				resolve();
			};

			screenfull.on('change', onFullScreenEntered);

			const returnPromise = element[nativeAPI.requestFullscreen](options);

			if (returnPromise instanceof Promise) {
				returnPromise.then(onFullScreenEntered).catch(reject);
			}
		});
	},
	exit() {
		return new Promise((resolve, reject) => {
			if (!screenfull.isFullscreen) {
				resolve();
				return;
			}

			const onFullScreenExit = () => {
				screenfull.off('change', onFullScreenExit);
				resolve();
			};

			screenfull.on('change', onFullScreenExit);

			const returnPromise = document[nativeAPI.exitFullscreen]();

			if (returnPromise instanceof Promise) {
				returnPromise.then(onFullScreenExit).catch(reject);
			}
		});
	},
	toggle(element, options) {
		return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
	},
	onchange(callback) {
		screenfull.on('change', callback);
	},
	onerror(callback) {
		screenfull.on('error', callback);
	},
	on(event, callback) {
		const eventName = eventNameMap[event];
		if (eventName) {
			document.addEventListener(eventName, callback, false);
		}
	},
	off(event, callback) {
		const eventName = eventNameMap[event];
		if (eventName) {
			document.removeEventListener(eventName, callback, false);
		}
	},
	raw: nativeAPI,
};

Object.defineProperties(screenfull, {
	isFullscreen: {
		get: () => Boolean(document[nativeAPI.fullscreenElement]),
	},
	element: {
		enumerable: true,
		get: () => document[nativeAPI.fullscreenElement] ?? undefined,
	},
	isEnabled: {
		enumerable: true,
		// Coerce to boolean in case of old WebKit.
		get: () => Boolean(document[nativeAPI.fullscreenEnabled]),
	},
});

if (!nativeAPI) {
	screenfull = {isEnabled: false};
}

var screenfull$1 = screenfull;

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var util;
(function (util) {
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = function (items) {
        var e_1, _a;
        var obj = {};
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                obj[item] = item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return obj;
    };
    util.getValidEnumValues = function (obj) {
        var e_2, _a;
        var validKeys = util.objectKeys(obj).filter(function (k) { return typeof obj[obj[k]] !== "number"; });
        var filtered = {};
        try {
            for (var validKeys_1 = __values(validKeys), validKeys_1_1 = validKeys_1.next(); !validKeys_1_1.done; validKeys_1_1 = validKeys_1.next()) {
                var k = validKeys_1_1.value;
                filtered[k] = obj[k];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (validKeys_1_1 && !validKeys_1_1.done && (_a = validKeys_1.return)) _a.call(validKeys_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return util.objectValues(filtered);
    };
    util.objectValues = function (obj) {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? function (obj) { return Object.keys(obj); } // eslint-disable-line ban/ban
        : function (object) {
            var keys = [];
            for (var key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = function (arr, checker) {
        var e_3, _a;
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                if (checker(item))
                    return item;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? function (val) { return Number.isInteger(val); } // eslint-disable-line ban/ban
        : function (val) {
            return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
        };
})(util || (util = {}));

var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
]);
var quotelessJson = function (obj) {
    var json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = /** @class */ (function (_super) {
    __extends(ZodError, _super);
    function ZodError(issues) {
        var _newTarget = this.constructor;
        var _this = _super.call(this) || this;
        _this.issues = [];
        _this.format = function () {
            var fieldErrors = { _errors: [] };
            var processError = function (error) {
                var e_1, _a;
                try {
                    for (var _b = __values(error.issues), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var issue = _c.value;
                        if (issue.code === "invalid_union") {
                            issue.unionErrors.map(processError);
                        }
                        else if (issue.code === "invalid_return_type") {
                            processError(issue.returnTypeError);
                        }
                        else if (issue.code === "invalid_arguments") {
                            processError(issue.argumentsError);
                        }
                        else if (issue.path.length === 0) {
                            fieldErrors._errors.push(issue.message);
                        }
                        else {
                            var curr = fieldErrors;
                            var i = 0;
                            while (i < issue.path.length) {
                                var el = issue.path[i];
                                var terminal = i === issue.path.length - 1;
                                if (!terminal) {
                                    if (typeof el === "string") {
                                        curr[el] = curr[el] || { _errors: [] };
                                    }
                                    else if (typeof el === "number") {
                                        var errorArray = [];
                                        errorArray._errors = [];
                                        curr[el] = curr[el] || errorArray;
                                    }
                                }
                                else {
                                    curr[el] = curr[el] || { _errors: [] };
                                    curr[el]._errors.push(issue.message);
                                }
                                curr = curr[el];
                                i++;
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            };
            processError(_this);
            return fieldErrors;
        };
        _this.addIssue = function (sub) {
            _this.issues = __spreadArray(__spreadArray([], __read(_this.issues), false), [sub], false);
        };
        _this.addIssues = function (subs) {
            if (subs === void 0) { subs = []; }
            _this.issues = __spreadArray(__spreadArray([], __read(_this.issues), false), __read(subs), false);
        };
        var actualProto = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(_this, actualProto);
        }
        else {
            _this.__proto__ = actualProto;
        }
        _this.name = "ZodError";
        _this.issues = issues;
        return _this;
    }
    Object.defineProperty(ZodError.prototype, "errors", {
        get: function () {
            return this.issues;
        },
        enumerable: false,
        configurable: true
    });
    ZodError.prototype.toString = function () {
        return this.message;
    };
    Object.defineProperty(ZodError.prototype, "message", {
        get: function () {
            return JSON.stringify(this.issues, null, 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodError.prototype, "isEmpty", {
        get: function () {
            return this.issues.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    ZodError.prototype.flatten = function (mapper) {
        var e_2, _a;
        if (mapper === void 0) { mapper = function (issue) { return issue.message; }; }
        var fieldErrors = {};
        var formErrors = [];
        try {
            for (var _b = __values(this.issues), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                if (sub.path.length > 0) {
                    fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                    fieldErrors[sub.path[0]].push(mapper(sub));
                }
                else {
                    formErrors.push(mapper(sub));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { formErrors: formErrors, fieldErrors: fieldErrors };
    };
    Object.defineProperty(ZodError.prototype, "formErrors", {
        get: function () {
            return this.flatten();
        },
        enumerable: false,
        configurable: true
    });
    ZodError.create = function (issues) {
        var error = new ZodError(issues);
        return error;
    };
    return ZodError;
}(Error));
var defaultErrorMap = function (issue, _ctx) {
    var message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === "undefined") {
                message = "Required";
            }
            else {
                message = "Expected ".concat(issue.expected, ", received ").concat(issue.received);
            }
            break;
        case ZodIssueCode.unrecognized_keys:
            message = "Unrecognized key(s) in object: ".concat(issue.keys
                .map(function (k) { return "'".concat(k, "'"); })
                .join(", "));
            break;
        case ZodIssueCode.invalid_union:
            message = "Invalid input";
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = "Invalid discriminator value. Expected ".concat(issue.options
                .map(function (val) { return (typeof val === "string" ? "'".concat(val, "'") : val); })
                .join(" | "));
            break;
        case ZodIssueCode.invalid_enum_value:
            message = "Invalid enum value. Expected ".concat(issue.options
                .map(function (val) { return (typeof val === "string" ? "'".concat(val, "'") : val); })
                .join(" | "));
            break;
        case ZodIssueCode.invalid_arguments:
            message = "Invalid function arguments";
            break;
        case ZodIssueCode.invalid_return_type:
            message = "Invalid function return type";
            break;
        case ZodIssueCode.invalid_date:
            message = "Invalid date";
            break;
        case ZodIssueCode.invalid_string:
            if (issue.validation !== "regex")
                message = "Invalid ".concat(issue.validation);
            else
                message = "Invalid";
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = "Array must contain ".concat(issue.inclusive ? "at least" : "more than", " ").concat(issue.minimum, " element(s)");
            else if (issue.type === "string")
                message = "String must contain ".concat(issue.inclusive ? "at least" : "over", " ").concat(issue.minimum, " character(s)");
            else if (issue.type === "number")
                message = "Number must be greater than ".concat(issue.inclusive ? "or equal to " : "").concat(issue.minimum);
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = "Array must contain ".concat(issue.inclusive ? "at most" : "less than", " ").concat(issue.maximum, " element(s)");
            else if (issue.type === "string")
                message = "String must contain ".concat(issue.inclusive ? "at most" : "under", " ").concat(issue.maximum, " character(s)");
            else if (issue.type === "number")
                message = "Number must be less than ".concat(issue.inclusive ? "or equal to " : "").concat(issue.maximum);
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = "Invalid input";
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = "Intersection results could not be merged";
            break;
        case ZodIssueCode.not_multiple_of:
            message = "Number must be a multiple of ".concat(issue.multipleOf);
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return { message: message };
};
var overrideErrorMap = defaultErrorMap;
var setErrorMap = function (map) {
    overrideErrorMap = map;
};

var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
function cacheAndReturn(data, parsedType, cache) {
    if (cache)
        cache.set(data, parsedType);
    return parsedType;
}
var getParsedType = function (data, cache) {
    if (cache && cache.has(data))
        return cache.get(data);
    var t = typeof data;
    switch (t) {
        case "undefined":
            return cacheAndReturn(data, ZodParsedType.undefined, cache);
        case "string":
            return cacheAndReturn(data, ZodParsedType.string, cache);
        case "number":
            return cacheAndReturn(data, isNaN(data) ? ZodParsedType.nan : ZodParsedType.number, cache);
        case "boolean":
            return cacheAndReturn(data, ZodParsedType.boolean, cache);
        case "function":
            return cacheAndReturn(data, ZodParsedType.function, cache);
        case "bigint":
            return cacheAndReturn(data, ZodParsedType.bigint, cache);
        case "object":
            if (Array.isArray(data)) {
                return cacheAndReturn(data, ZodParsedType.array, cache);
            }
            if (data === null) {
                return cacheAndReturn(data, ZodParsedType.null, cache);
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return cacheAndReturn(data, ZodParsedType.promise, cache);
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return cacheAndReturn(data, ZodParsedType.map, cache);
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return cacheAndReturn(data, ZodParsedType.set, cache);
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return cacheAndReturn(data, ZodParsedType.date, cache);
            }
            return cacheAndReturn(data, ZodParsedType.object, cache);
        default:
            return cacheAndReturn(data, ZodParsedType.unknown, cache);
    }
};
var makeIssue = function (params) {
    var e_1, _a;
    var data = params.data, path = params.path, errorMaps = params.errorMaps, issueData = params.issueData;
    var fullPath = __spreadArray(__spreadArray([], __read(path), false), __read((issueData.path || [])), false);
    var fullIssue = __assign(__assign({}, issueData), { path: fullPath });
    var errorMessage = "";
    var maps = errorMaps
        .filter(function (m) { return !!m; })
        .slice()
        .reverse();
    try {
        for (var maps_1 = __values(maps), maps_1_1 = maps_1.next(); !maps_1_1.done; maps_1_1 = maps_1.next()) {
            var map = maps_1_1.value;
            errorMessage = map(fullIssue, { data: data, defaultError: errorMessage }).message;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (maps_1_1 && !maps_1_1.done && (_a = maps_1.return)) _a.call(maps_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return __assign(__assign({}, issueData), { path: fullPath, message: issueData.message || errorMessage });
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    var issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideErrorMap,
            defaultErrorMap, // then global default map
        ].filter(function (x) { return !!x; }),
    });
    ctx.issues.push(issue);
}
var ParseStatus = /** @class */ (function () {
    function ParseStatus() {
        this.value = "valid";
    }
    ParseStatus.prototype.dirty = function () {
        if (this.value === "valid")
            this.value = "dirty";
    };
    ParseStatus.prototype.abort = function () {
        if (this.value !== "aborted")
            this.value = "aborted";
    };
    ParseStatus.mergeArray = function (status, results) {
        var e_2, _a;
        var arrayValue = [];
        try {
            for (var results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                var s = results_1_1.value;
                if (s.status === "aborted")
                    return INVALID;
                if (s.status === "dirty")
                    status.dirty();
                arrayValue.push(s.value);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { status: status.value, value: arrayValue };
    };
    ParseStatus.mergeObjectAsync = function (status, pairs) {
        return __awaiter(this, void 0, void 0, function () {
            var syncPairs, pairs_1, pairs_1_1, pair, _a, _b, e_3_1;
            var e_3, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        syncPairs = [];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 9]);
                        pairs_1 = __values(pairs), pairs_1_1 = pairs_1.next();
                        _e.label = 2;
                    case 2:
                        if (!!pairs_1_1.done) return [3 /*break*/, 6];
                        pair = pairs_1_1.value;
                        _b = (_a = syncPairs).push;
                        _d = {};
                        return [4 /*yield*/, pair.key];
                    case 3:
                        _d.key = _e.sent();
                        return [4 /*yield*/, pair.value];
                    case 4:
                        _b.apply(_a, [(_d.value = _e.sent(),
                                _d)]);
                        _e.label = 5;
                    case 5:
                        pairs_1_1 = pairs_1.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return)) _c.call(pairs_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, ParseStatus.mergeObjectSync(status, syncPairs)];
                }
            });
        });
    };
    ParseStatus.mergeObjectSync = function (status, pairs) {
        var e_4, _a;
        var finalObject = {};
        try {
            for (var pairs_2 = __values(pairs), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
                var pair = pairs_2_1.value;
                var key = pair.key, value = pair.value;
                if (key.status === "aborted")
                    return INVALID;
                if (value.status === "aborted")
                    return INVALID;
                if (key.status === "dirty")
                    status.dirty();
                if (value.status === "dirty")
                    status.dirty();
                if (typeof value.value !== "undefined" || pair.alwaysSet) {
                    finalObject[key.value] = value.value;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (pairs_2_1 && !pairs_2_1.done && (_a = pairs_2.return)) _a.call(pairs_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return { status: status.value, value: finalObject };
    };
    return ParseStatus;
}());
var INVALID = Object.freeze({
    status: "aborted",
});
var DIRTY = function (value) { return ({ status: "dirty", value: value }); };
var OK = function (value) { return ({ status: "valid", value: value }); };
var isAborted = function (x) {
    return x.status === "aborted";
};
var isDirty = function (x) {
    return x.status === "dirty";
};
var isValid = function (x) {
    return x.status === "valid";
};
var isAsync = function (x) {
    return typeof Promise !== undefined && x instanceof Promise;
};

var errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = function (message) {
        return typeof message === "string" ? { message: message } : message || {};
    };
    errorUtil.toString = function (message) {
        return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
    };
})(errorUtil || (errorUtil = {}));

var handleResult = function (ctx, result) {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        var error = new ZodError(ctx.issues);
        return { success: false, error: error };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    var errorMap = params.errorMap, invalid_type_error = params.invalid_type_error, required_error = params.required_error, description = params.description;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error("Can't use \"invalid\" or \"required\" in conjunction with custom error map.");
    }
    if (errorMap)
        return { errorMap: errorMap, description: description };
    var customMap = function (iss, ctx) {
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        if (typeof ctx.data === "undefined" && required_error)
            return { message: required_error };
        if (params.invalid_type_error)
            return { message: params.invalid_type_error };
        return { message: ctx.defaultError };
    };
    return { errorMap: customMap, description: description };
}
var ZodType = /** @class */ (function () {
    function ZodType(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this.superRefine = this._refinement;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.default = this.default.bind(this);
        this.describe = this.describe.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this.isNullable = this.isNullable.bind(this);
    }
    Object.defineProperty(ZodType.prototype, "description", {
        get: function () {
            return this._def.description;
        },
        enumerable: false,
        configurable: true
    });
    ZodType.prototype._processInputParams = function (input) {
        return {
            status: new ParseStatus(),
            ctx: __assign(__assign({}, input.parent), { data: input.data, parsedType: getParsedType(input.data, input.parent.typeCache), schemaErrorMap: this._def.errorMap, path: input.path, parent: input.parent }),
        };
    };
    ZodType.prototype._parseSync = function (input) {
        var result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    };
    ZodType.prototype._parseAsync = function (input) {
        var result = this._parse(input);
        return Promise.resolve(result);
    };
    ZodType.prototype.parse = function (data, params) {
        var result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    };
    ZodType.prototype.safeParse = function (data, params) {
        var _a;
        var ctx = {
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            issues: [],
            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            schemaErrorMap: this._def.errorMap,
            async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
            typeCache: typeof Map !== "undefined" ? new Map() : undefined,
            parent: null,
            data: data,
            parsedType: getParsedType(data),
        };
        var result = this._parseSync({ data: data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    };
    ZodType.prototype.parseAsync = function (data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.safeParseAsync(data, params)];
                    case 1:
                        result = _a.sent();
                        if (result.success)
                            return [2 /*return*/, result.data];
                        throw result.error;
                }
            });
        });
    };
    ZodType.prototype.safeParseAsync = function (data, params) {
        return __awaiter(this, void 0, void 0, function () {
            var ctx, maybeAsyncResult, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = {
                            path: (params === null || params === void 0 ? void 0 : params.path) || [],
                            issues: [],
                            contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                            schemaErrorMap: this._def.errorMap,
                            async: true,
                            typeCache: typeof Map !== "undefined" ? new Map() : undefined,
                            parent: null,
                            data: data,
                            parsedType: getParsedType(data),
                        };
                        maybeAsyncResult = this._parse({ data: data, path: [], parent: ctx });
                        return [4 /*yield*/, (isAsync(maybeAsyncResult)
                                ? maybeAsyncResult
                                : Promise.resolve(maybeAsyncResult))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, handleResult(ctx, result)];
                }
            });
        });
    };
    ZodType.prototype.refine = function (check, message) {
        var getIssueProperties = function (val) {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message: message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement(function (val, ctx) {
            var result = check(val);
            var setError = function () {
                return ctx.addIssue(__assign({ code: ZodIssueCode.custom }, getIssueProperties(val)));
            };
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then(function (data) {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    };
    ZodType.prototype.refinement = function (check, refinementData) {
        return this._refinement(function (val, ctx) {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    };
    ZodType.prototype._refinement = function (refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement: refinement },
        });
    };
    ZodType.prototype.optional = function () {
        return ZodOptional.create(this);
    };
    ZodType.prototype.nullable = function () {
        return ZodNullable.create(this);
    };
    ZodType.prototype.nullish = function () {
        return this.optional().nullable();
    };
    ZodType.prototype.array = function () {
        return ZodArray.create(this);
    };
    ZodType.prototype.promise = function () {
        return ZodPromise.create(this);
    };
    ZodType.prototype.or = function (option) {
        return ZodUnion.create([this, option]);
    };
    ZodType.prototype.and = function (incoming) {
        return ZodIntersection.create(this, incoming);
    };
    ZodType.prototype.transform = function (transform) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform: transform },
        });
    };
    ZodType.prototype.default = function (def) {
        var defaultValueFunc = typeof def === "function" ? def : function () { return def; };
        return new ZodDefault({
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
        });
    };
    ZodType.prototype.describe = function (description) {
        var This = this.constructor;
        return new This(__assign(__assign({}, this._def), { description: description }));
    };
    ZodType.prototype.isOptional = function () {
        return this.safeParse(undefined).success;
    };
    ZodType.prototype.isNullable = function () {
        return this.safeParse(null).success;
    };
    return ZodType;
}());
var cuidRegex = /^c[^\s-]{8,}$/i;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
// eslint-disable-next-line
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ZodString = /** @class */ (function (_super) {
    __extends(ZodString, _super);
    function ZodString() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._regex = function (regex, validation, message) {
            return _this.refinement(function (data) { return regex.test(data); }, __assign({ validation: validation, code: ZodIssueCode.invalid_string }, errorUtil.errToObj(message)));
        };
        /**
         * Deprecated.
         * Use z.string().min(1) instead.
         */
        _this.nonempty = function (message) {
            return _this.min(1, errorUtil.errToObj(message));
        };
        return _this;
    }
    ZodString.prototype._parse = function (input) {
        var e_1, _a;
        var _b = this._processInputParams(input), status = _b.status, ctx = _b.ctx;
        if (ctx.parsedType !== ZodParsedType.string) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            }
            //
            );
            return INVALID;
        }
        try {
            for (var _c = __values(this._def.checks), _d = _c.next(); !_d.done; _d = _c.next()) {
                var check = _d.value;
                if (check.kind === "min") {
                    if (ctx.data.length < check.value) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "max") {
                    if (ctx.data.length > check.value) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "email") {
                    if (!emailRegex.test(ctx.data)) {
                        addIssueToContext(ctx, {
                            validation: "email",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "uuid") {
                    if (!uuidRegex.test(ctx.data)) {
                        addIssueToContext(ctx, {
                            validation: "uuid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "cuid") {
                    if (!cuidRegex.test(ctx.data)) {
                        addIssueToContext(ctx, {
                            validation: "cuid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "url") {
                    try {
                        new URL(ctx.data);
                    }
                    catch (_e) {
                        addIssueToContext(ctx, {
                            validation: "url",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "regex") {
                    check.regex.lastIndex = 0;
                    var testResult = check.regex.test(ctx.data);
                    if (!testResult) {
                        addIssueToContext(ctx, {
                            validation: "regex",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { status: status.value, value: ctx.data };
    };
    ZodString.prototype._addCheck = function (check) {
        return new ZodString(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [check], false) }));
    };
    ZodString.prototype.email = function (message) {
        return this._addCheck(__assign({ kind: "email" }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.url = function (message) {
        return this._addCheck(__assign({ kind: "url" }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.uuid = function (message) {
        return this._addCheck(__assign({ kind: "uuid" }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.cuid = function (message) {
        return this._addCheck(__assign({ kind: "cuid" }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.regex = function (regex, message) {
        return this._addCheck(__assign({ kind: "regex", regex: regex }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.min = function (minLength, message) {
        return this._addCheck(__assign({ kind: "min", value: minLength }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.max = function (maxLength, message) {
        return this._addCheck(__assign({ kind: "max", value: maxLength }, errorUtil.errToObj(message)));
    };
    ZodString.prototype.length = function (len, message) {
        return this.min(len, message).max(len, message);
    };
    Object.defineProperty(ZodString.prototype, "isEmail", {
        get: function () {
            return !!this._def.checks.find(function (ch) { return ch.kind === "email"; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodString.prototype, "isURL", {
        get: function () {
            return !!this._def.checks.find(function (ch) { return ch.kind === "url"; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodString.prototype, "isUUID", {
        get: function () {
            return !!this._def.checks.find(function (ch) { return ch.kind === "uuid"; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodString.prototype, "isCUID", {
        get: function () {
            return !!this._def.checks.find(function (ch) { return ch.kind === "cuid"; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodString.prototype, "minLength", {
        get: function () {
            var min = -Infinity;
            this._def.checks.map(function (ch) {
                if (ch.kind === "min") {
                    if (min === null || ch.value > min) {
                        min = ch.value;
                    }
                }
            });
            return min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodString.prototype, "maxLength", {
        get: function () {
            var max = null;
            this._def.checks.map(function (ch) {
                if (ch.kind === "max") {
                    if (max === null || ch.value < max) {
                        max = ch.value;
                    }
                }
            });
            return max;
        },
        enumerable: false,
        configurable: true
    });
    ZodString.create = function (params) {
        return new ZodString(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodString }, processCreateParams(params)));
    };
    return ZodString;
}(ZodType));
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    var valDecCount = (val.toString().split(".")[1] || "").length;
    var stepDecCount = (step.toString().split(".")[1] || "").length;
    var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    var valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    var stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
var ZodNumber = /** @class */ (function (_super) {
    __extends(ZodNumber, _super);
    function ZodNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.min = _this.gte;
        _this.max = _this.lte;
        _this.step = _this.multipleOf;
        return _this;
    }
    ZodNumber.prototype._parse = function (input) {
        var e_2, _a;
        var _b = this._processInputParams(input), status = _b.status, ctx = _b.ctx;
        if (ctx.parsedType !== ZodParsedType.number) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        try {
            for (var _c = __values(this._def.checks), _d = _c.next(); !_d.done; _d = _c.next()) {
                var check = _d.value;
                if (check.kind === "int") {
                    if (!util.isInteger(ctx.data)) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_type,
                            expected: "integer",
                            received: "float",
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "min") {
                    var tooSmall = check.inclusive
                        ? ctx.data < check.value
                        : ctx.data <= check.value;
                    if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "number",
                            inclusive: check.inclusive,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "max") {
                    var tooBig = check.inclusive
                        ? ctx.data > check.value
                        : ctx.data >= check.value;
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "number",
                            inclusive: check.inclusive,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "multipleOf") {
                    if (floatSafeRemainder(ctx.data, check.value) !== 0) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.not_multiple_of,
                            multipleOf: check.value,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else {
                    util.assertNever(check);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { status: status.value, value: ctx.data };
    };
    ZodNumber.prototype.gte = function (value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    };
    ZodNumber.prototype.gt = function (value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    };
    ZodNumber.prototype.lte = function (value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    };
    ZodNumber.prototype.lt = function (value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    };
    ZodNumber.prototype.setLimit = function (kind, value, inclusive, message) {
        return new ZodNumber(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [
                {
                    kind: kind,
                    value: value,
                    inclusive: inclusive,
                    message: errorUtil.toString(message),
                },
            ], false) }));
    };
    ZodNumber.prototype._addCheck = function (check) {
        return new ZodNumber(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [check], false) }));
    };
    ZodNumber.prototype.int = function (message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.positive = function (message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.negative = function (message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.nonpositive = function (message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.nonnegative = function (message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message),
        });
    };
    ZodNumber.prototype.multipleOf = function (value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: errorUtil.toString(message),
        });
    };
    Object.defineProperty(ZodNumber.prototype, "minValue", {
        get: function () {
            var e_3, _a;
            var min = null;
            try {
                for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ch = _c.value;
                    if (ch.kind === "min") {
                        if (min === null || ch.value > min)
                            min = ch.value;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodNumber.prototype, "maxValue", {
        get: function () {
            var e_4, _a;
            var max = null;
            try {
                for (var _b = __values(this._def.checks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ch = _c.value;
                    if (ch.kind === "max") {
                        if (max === null || ch.value < max)
                            max = ch.value;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodNumber.prototype, "isInt", {
        get: function () {
            return !!this._def.checks.find(function (ch) { return ch.kind === "int"; });
        },
        enumerable: false,
        configurable: true
    });
    ZodNumber.create = function (params) {
        return new ZodNumber(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodNumber }, processCreateParams(params)));
    };
    return ZodNumber;
}(ZodType));
var ZodBigInt = /** @class */ (function (_super) {
    __extends(ZodBigInt, _super);
    function ZodBigInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodBigInt.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.bigint) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    ZodBigInt.create = function (params) {
        return new ZodBigInt(__assign({ typeName: ZodFirstPartyTypeKind.ZodBigInt }, processCreateParams(params)));
    };
    return ZodBigInt;
}(ZodType));
var ZodBoolean = /** @class */ (function (_super) {
    __extends(ZodBoolean, _super);
    function ZodBoolean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodBoolean.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.boolean) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    ZodBoolean.create = function (params) {
        return new ZodBoolean(__assign({ typeName: ZodFirstPartyTypeKind.ZodBoolean }, processCreateParams(params)));
    };
    return ZodBoolean;
}(ZodType));
var ZodDate = /** @class */ (function (_super) {
    __extends(ZodDate, _super);
    function ZodDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodDate.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== ZodParsedType.date) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(ctx.data.getTime())) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        return {
            status: status.value,
            value: new Date(ctx.data.getTime()),
        };
    };
    ZodDate.create = function (params) {
        return new ZodDate(__assign({ typeName: ZodFirstPartyTypeKind.ZodDate }, processCreateParams(params)));
    };
    return ZodDate;
}(ZodType));
var ZodUndefined = /** @class */ (function (_super) {
    __extends(ZodUndefined, _super);
    function ZodUndefined() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodUndefined.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.undefined) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    ZodUndefined.create = function (params) {
        return new ZodUndefined(__assign({ typeName: ZodFirstPartyTypeKind.ZodUndefined }, processCreateParams(params)));
    };
    return ZodUndefined;
}(ZodType));
var ZodNull = /** @class */ (function (_super) {
    __extends(ZodNull, _super);
    function ZodNull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNull.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.null) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    ZodNull.create = function (params) {
        return new ZodNull(__assign({ typeName: ZodFirstPartyTypeKind.ZodNull }, processCreateParams(params)));
    };
    return ZodNull;
}(ZodType));
var ZodAny = /** @class */ (function (_super) {
    __extends(ZodAny, _super);
    function ZodAny() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        _this._any = true;
        return _this;
    }
    ZodAny.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        return OK(ctx.data);
    };
    ZodAny.create = function (params) {
        return new ZodAny(__assign({ typeName: ZodFirstPartyTypeKind.ZodAny }, processCreateParams(params)));
    };
    return ZodAny;
}(ZodType));
var ZodUnknown = /** @class */ (function (_super) {
    __extends(ZodUnknown, _super);
    function ZodUnknown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // required
        _this._unknown = true;
        return _this;
    }
    ZodUnknown.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        return OK(ctx.data);
    };
    ZodUnknown.create = function (params) {
        return new ZodUnknown(__assign({ typeName: ZodFirstPartyTypeKind.ZodUnknown }, processCreateParams(params)));
    };
    return ZodUnknown;
}(ZodType));
var ZodNever = /** @class */ (function (_super) {
    __extends(ZodNever, _super);
    function ZodNever() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNever.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    };
    ZodNever.create = function (params) {
        return new ZodNever(__assign({ typeName: ZodFirstPartyTypeKind.ZodNever }, processCreateParams(params)));
    };
    return ZodNever;
}(ZodType));
var ZodVoid = /** @class */ (function (_super) {
    __extends(ZodVoid, _super);
    function ZodVoid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodVoid.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.undefined) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    ZodVoid.create = function (params) {
        return new ZodVoid(__assign({ typeName: ZodFirstPartyTypeKind.ZodVoid }, processCreateParams(params)));
    };
    return ZodVoid;
}(ZodType));
var ZodArray = /** @class */ (function (_super) {
    __extends(ZodArray, _super);
    function ZodArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodArray.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        var def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.async) {
            return Promise.all(ctx.data.map(function (item, i) {
                return def.type._parseAsync({
                    parent: ctx,
                    path: __spreadArray(__spreadArray([], __read(ctx.path), false), [i], false),
                    data: item,
                });
            })).then(function (result) {
                return ParseStatus.mergeArray(status, result);
            });
        }
        var result = ctx.data.map(function (item, i) {
            return def.type._parseSync({
                parent: ctx,
                path: __spreadArray(__spreadArray([], __read(ctx.path), false), [i], false),
                data: item,
            });
        });
        return ParseStatus.mergeArray(status, result);
    };
    Object.defineProperty(ZodArray.prototype, "element", {
        get: function () {
            return this._def.type;
        },
        enumerable: false,
        configurable: true
    });
    ZodArray.prototype.min = function (minLength, message) {
        return new ZodArray(__assign(__assign({}, this._def), { minLength: { value: minLength, message: errorUtil.toString(message) } }));
    };
    ZodArray.prototype.max = function (maxLength, message) {
        return new ZodArray(__assign(__assign({}, this._def), { maxLength: { value: maxLength, message: errorUtil.toString(message) } }));
    };
    ZodArray.prototype.length = function (len, message) {
        return this.min(len, message).max(len, message);
    };
    ZodArray.prototype.nonempty = function (message) {
        return this.min(1, message);
    };
    ZodArray.create = function (schema, params) {
        return new ZodArray(__assign({ type: schema, minLength: null, maxLength: null, typeName: ZodFirstPartyTypeKind.ZodArray }, processCreateParams(params)));
    };
    return ZodArray;
}(ZodType));
/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodObject      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
var objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = function (first, second) {
        return __assign(__assign({}, first), second);
    };
})(objectUtil || (objectUtil = {}));
var AugmentFactory = function (def) {
    return function (augmentation) {
        return new ZodObject(__assign(__assign({}, def), { shape: function () { return (__assign(__assign({}, def.shape()), augmentation)); } }));
    };
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        var newShape_1 = {};
        for (var key in schema.shape) {
            var fieldSchema = schema.shape[key];
            newShape_1[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject(__assign(__assign({}, schema._def), { shape: function () { return newShape_1; } }));
    }
    else if (schema instanceof ZodArray) {
        return ZodArray.create(deepPartialify(schema.element));
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map(function (item) { return deepPartialify(item); }));
    }
    else {
        return schema;
    }
}
var ZodObject = /** @class */ (function (_super) {
    __extends(ZodObject, _super);
    function ZodObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        _this.nonstrict = _this.passthrough;
        _this.augment = AugmentFactory(_this._def);
        _this.extend = AugmentFactory(_this._def);
        return _this;
    }
    ZodObject.prototype._getCached = function () {
        if (this._cached !== null)
            return this._cached;
        var shape = this._def.shape();
        var keys = util.objectKeys(shape);
        return (this._cached = { shape: shape, keys: keys });
    };
    ZodObject.prototype._parse = function (input) {
        var e_5, _a, e_6, _b, e_7, _c;
        var _this = this;
        var _d = this._processInputParams(input), status = _d.status, ctx = _d.ctx;
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        var _e = this._getCached(), shape = _e.shape, shapeKeys = _e.keys;
        var dataKeys = util.objectKeys(ctx.data);
        var extraKeys = dataKeys.filter(function (k) { return !shapeKeys.includes(k); });
        var pairs = [];
        try {
            for (var shapeKeys_1 = __values(shapeKeys), shapeKeys_1_1 = shapeKeys_1.next(); !shapeKeys_1_1.done; shapeKeys_1_1 = shapeKeys_1.next()) {
                var key = shapeKeys_1_1.value;
                var keyValidator = shape[key];
                var value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: keyValidator._parse({
                        parent: ctx,
                        data: value,
                        path: __spreadArray(__spreadArray([], __read(ctx.path), false), [key], false),
                    }),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (shapeKeys_1_1 && !shapeKeys_1_1.done && (_a = shapeKeys_1.return)) _a.call(shapeKeys_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (this._def.catchall instanceof ZodNever) {
            var unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                try {
                    for (var extraKeys_1 = __values(extraKeys), extraKeys_1_1 = extraKeys_1.next(); !extraKeys_1_1.done; extraKeys_1_1 = extraKeys_1.next()) {
                        var key = extraKeys_1_1.value;
                        pairs.push({
                            key: { status: "valid", value: key },
                            value: { status: "valid", value: ctx.data[key] },
                        });
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (extraKeys_1_1 && !extraKeys_1_1.done && (_b = extraKeys_1.return)) _b.call(extraKeys_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error("Internal ZodObject error: invalid unknownKeys value.");
            }
        }
        else {
            // run catchall validation
            var catchall = this._def.catchall;
            try {
                for (var extraKeys_2 = __values(extraKeys), extraKeys_2_1 = extraKeys_2.next(); !extraKeys_2_1.done; extraKeys_2_1 = extraKeys_2.next()) {
                    var key = extraKeys_2_1.value;
                    var value = ctx.data[key];
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: catchall._parse({ parent: ctx, path: __spreadArray(__spreadArray([], __read(ctx.path), false), [key], false), data: value } //, ctx.child(key), value, getParsedType(value)
                        ),
                        alwaysSet: key in ctx.data,
                    });
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (extraKeys_2_1 && !extraKeys_2_1.done && (_c = extraKeys_2.return)) _c.call(extraKeys_2);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        if (ctx.async) {
            return Promise.resolve()
                .then(function () { return __awaiter(_this, void 0, void 0, function () {
                var syncPairs, pairs_1, pairs_1_1, pair, key, _a, _b, e_8_1;
                var e_8, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            syncPairs = [];
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 7, 8, 9]);
                            pairs_1 = __values(pairs), pairs_1_1 = pairs_1.next();
                            _e.label = 2;
                        case 2:
                            if (!!pairs_1_1.done) return [3 /*break*/, 6];
                            pair = pairs_1_1.value;
                            return [4 /*yield*/, pair.key];
                        case 3:
                            key = _e.sent();
                            _b = (_a = syncPairs).push;
                            _d = {
                                key: key
                            };
                            return [4 /*yield*/, pair.value];
                        case 4:
                            _b.apply(_a, [(_d.value = _e.sent(),
                                    _d.alwaysSet = pair.alwaysSet,
                                    _d)]);
                            _e.label = 5;
                        case 5:
                            pairs_1_1 = pairs_1.next();
                            return [3 /*break*/, 2];
                        case 6: return [3 /*break*/, 9];
                        case 7:
                            e_8_1 = _e.sent();
                            e_8 = { error: e_8_1 };
                            return [3 /*break*/, 9];
                        case 8:
                            try {
                                if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return)) _c.call(pairs_1);
                            }
                            finally { if (e_8) throw e_8.error; }
                            return [7 /*endfinally*/];
                        case 9: return [2 /*return*/, syncPairs];
                    }
                });
            }); })
                .then(function (syncPairs) {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    };
    Object.defineProperty(ZodObject.prototype, "shape", {
        get: function () {
            return this._def.shape();
        },
        enumerable: false,
        configurable: true
    });
    ZodObject.prototype.strict = function (message) {
        var _this = this;
        errorUtil.errToObj;
        return new ZodObject(__assign(__assign(__assign({}, this._def), { unknownKeys: "strict" }), (message !== undefined
            ? {
                errorMap: function (issue, ctx) {
                    var _a, _b, _c, _d;
                    var defaultError = (_c = (_b = (_a = _this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                    if (issue.code === "unrecognized_keys")
                        return {
                            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                        };
                    return {
                        message: defaultError,
                    };
                },
            }
            : {})));
    };
    ZodObject.prototype.strip = function () {
        return new ZodObject(__assign(__assign({}, this._def), { unknownKeys: "strip" }));
    };
    ZodObject.prototype.passthrough = function () {
        return new ZodObject(__assign(__assign({}, this._def), { unknownKeys: "passthrough" }));
    };
    ZodObject.prototype.setKey = function (key, schema) {
        var _a;
        return this.augment((_a = {}, _a[key] = schema, _a));
    };
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    ZodObject.prototype.merge = function (merging) {
        var _this = this;
        // const mergedShape = objectUtil.mergeShapes(
        //   this._def.shape(),
        //   merging._def.shape()
        // );
        var merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: function () {
                return objectUtil.mergeShapes(_this._def.shape(), merging._def.shape());
            },
            typeName: ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    };
    ZodObject.prototype.catchall = function (index) {
        return new ZodObject(__assign(__assign({}, this._def), { catchall: index }));
    };
    ZodObject.prototype.pick = function (mask) {
        var _this = this;
        var shape = {};
        util.objectKeys(mask).map(function (key) {
            shape[key] = _this.shape[key];
        });
        return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return shape; } }));
    };
    ZodObject.prototype.omit = function (mask) {
        var _this = this;
        var shape = {};
        util.objectKeys(this.shape).map(function (key) {
            if (util.objectKeys(mask).indexOf(key) === -1) {
                shape[key] = _this.shape[key];
            }
        });
        return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return shape; } }));
    };
    ZodObject.prototype.deepPartial = function () {
        return deepPartialify(this);
    };
    ZodObject.prototype.partial = function (mask) {
        var _this = this;
        var newShape = {};
        if (mask) {
            util.objectKeys(this.shape).map(function (key) {
                if (util.objectKeys(mask).indexOf(key) === -1) {
                    newShape[key] = _this.shape[key];
                }
                else {
                    newShape[key] = _this.shape[key].optional();
                }
            });
            return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return newShape; } }));
        }
        else {
            for (var key in this.shape) {
                var fieldSchema = this.shape[key];
                newShape[key] = fieldSchema.optional();
            }
        }
        return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return newShape; } }));
    };
    ZodObject.prototype.required = function () {
        var newShape = {};
        for (var key in this.shape) {
            var fieldSchema = this.shape[key];
            var newField = fieldSchema;
            while (newField instanceof ZodOptional) {
                newField = newField._def.innerType;
            }
            newShape[key] = newField;
        }
        return new ZodObject(__assign(__assign({}, this._def), { shape: function () { return newShape; } }));
    };
    ZodObject.create = function (shape, params) {
        return new ZodObject(__assign({ shape: function () { return shape; }, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
    };
    ZodObject.strictCreate = function (shape, params) {
        return new ZodObject(__assign({ shape: function () { return shape; }, unknownKeys: "strict", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
    };
    ZodObject.lazycreate = function (shape, params) {
        return new ZodObject(__assign({ shape: shape, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(params)));
    };
    return ZodObject;
}(ZodType));
var ZodUnion = /** @class */ (function (_super) {
    __extends(ZodUnion, _super);
    function ZodUnion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodUnion.prototype._parse = function (input) {
        var _this = this;
        var ctx = this._processInputParams(input).ctx;
        var options = this._def.options;
        function handleResults(results) {
            var e_9, _a, e_10, _b, _c;
            try {
                // return first issue-free validation if it exists
                for (var results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var result = results_1_1.value;
                    if (result.result.status === "valid") {
                        return result.result;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_9) throw e_9.error; }
            }
            try {
                for (var results_2 = __values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                    var result = results_2_1.value;
                    if (result.result.status === "dirty") {
                        // add issues from dirty option
                        (_c = ctx.issues).push.apply(_c, __spreadArray([], __read(result.ctx.issues), false));
                        return result.result;
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (results_2_1 && !results_2_1.done && (_b = results_2.return)) _b.call(results_2);
                }
                finally { if (e_10) throw e_10.error; }
            }
            // return invalid
            var unionErrors = results.map(function (result) { return new ZodError(result.ctx.issues); });
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors: unionErrors,
            });
            return INVALID;
        }
        if (ctx.async) {
            return Promise.all(options.map(function (option) { return __awaiter(_this, void 0, void 0, function () {
                var childCtx;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            childCtx = __assign(__assign({}, ctx), { issues: [], parent: null });
                            _a = {};
                            return [4 /*yield*/, option._parseAsync({
                                    data: ctx.data,
                                    path: ctx.path,
                                    parent: childCtx,
                                })];
                        case 1: return [2 /*return*/, (_a.result = _b.sent(),
                                _a.ctx = childCtx,
                                _a)];
                    }
                });
            }); })).then(handleResults);
        }
        else {
            var optionResults = options.map(function (option) {
                var childCtx = __assign(__assign({}, ctx), { issues: [], parent: null });
                return {
                    result: option._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            });
            return handleResults(optionResults);
        }
    };
    Object.defineProperty(ZodUnion.prototype, "options", {
        get: function () {
            return this._def.options;
        },
        enumerable: false,
        configurable: true
    });
    ZodUnion.create = function (types, params) {
        return new ZodUnion(__assign({ options: types, typeName: ZodFirstPartyTypeKind.ZodUnion }, processCreateParams(params)));
    };
    return ZodUnion;
}(ZodType));
var ZodDiscriminatedUnion = /** @class */ (function (_super) {
    __extends(ZodDiscriminatedUnion, _super);
    function ZodDiscriminatedUnion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodDiscriminatedUnion.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        var discriminator = this.discriminator;
        var discriminatorValue = ctx.data[discriminator];
        var option = this.options.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: this.validDiscriminatorValues,
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    };
    Object.defineProperty(ZodDiscriminatedUnion.prototype, "discriminator", {
        get: function () {
            return this._def.discriminator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodDiscriminatedUnion.prototype, "validDiscriminatorValues", {
        get: function () {
            return Array.from(this.options.keys());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodDiscriminatedUnion.prototype, "options", {
        get: function () {
            return this._def.options;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    ZodDiscriminatedUnion.create = function (discriminator, types, params) {
        // Get all the valid discriminator values
        var options = new Map();
        try {
            types.forEach(function (type) {
                var discriminatorValue = type.shape[discriminator].value;
                options.set(discriminatorValue, type);
            });
        }
        catch (e) {
            throw new Error("The discriminator value could not be extracted from all the provided schemas");
        }
        // Assert that all the discriminator values are unique
        if (options.size !== types.length) {
            throw new Error("Some of the discriminator values are not unique");
        }
        return new ZodDiscriminatedUnion(__assign({ typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion, discriminator: discriminator, options: options }, processCreateParams(params)));
    };
    return ZodDiscriminatedUnion;
}(ZodType));
function mergeValues(a, b) {
    var e_11, _a;
    var aType = getParsedType(a);
    var bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        var bKeys_1 = util.objectKeys(b);
        var sharedKeys = util
            .objectKeys(a)
            .filter(function (key) { return bKeys_1.indexOf(key) !== -1; });
        var newObj = __assign(__assign({}, a), b);
        try {
            for (var sharedKeys_1 = __values(sharedKeys), sharedKeys_1_1 = sharedKeys_1.next(); !sharedKeys_1_1.done; sharedKeys_1_1 = sharedKeys_1.next()) {
                var key = sharedKeys_1_1.value;
                var sharedValue = mergeValues(a[key], b[key]);
                if (!sharedValue.valid) {
                    return { valid: false };
                }
                newObj[key] = sharedValue.data;
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (sharedKeys_1_1 && !sharedKeys_1_1.done && (_a = sharedKeys_1.return)) _a.call(sharedKeys_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        var newArray = [];
        for (var index = 0; index < a.length; index++) {
            var itemA = a[index];
            var itemB = b[index];
            var sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
var ZodIntersection = /** @class */ (function (_super) {
    __extends(ZodIntersection, _super);
    function ZodIntersection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodIntersection.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        var handleParsed = function (parsedLeft, parsedRight) {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            var merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(function (_a) {
                var _b = __read(_a, 2), left = _b[0], right = _b[1];
                return handleParsed(left, right);
            });
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    };
    ZodIntersection.create = function (left, right, params) {
        return new ZodIntersection(__assign({ left: left, right: right, typeName: ZodFirstPartyTypeKind.ZodIntersection }, processCreateParams(params)));
    };
    return ZodIntersection;
}(ZodType));
var ZodTuple = /** @class */ (function (_super) {
    __extends(ZodTuple, _super);
    function ZodTuple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodTuple.prototype._parse = function (input) {
        var _this = this;
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                type: "array",
            });
            return INVALID;
        }
        var rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                type: "array",
            });
            status.dirty();
        }
        var items = ctx.data
            .map(function (item, itemIndex) {
            var schema = _this._def.items[itemIndex] || _this._def.rest;
            if (!schema)
                return null;
            return schema._parse({
                data: item,
                path: __spreadArray(__spreadArray([], __read(ctx.path), false), [itemIndex], false),
                parent: ctx,
            });
        })
            .filter(function (x) { return !!x; }); // filter nulls
        if (ctx.async) {
            return Promise.all(items).then(function (results) {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    };
    Object.defineProperty(ZodTuple.prototype, "items", {
        get: function () {
            return this._def.items;
        },
        enumerable: false,
        configurable: true
    });
    ZodTuple.prototype.rest = function (rest) {
        return new ZodTuple(__assign(__assign({}, this._def), { rest: rest }));
    };
    ZodTuple.create = function (schemas, params) {
        return new ZodTuple(__assign({ items: schemas, typeName: ZodFirstPartyTypeKind.ZodTuple, rest: null }, processCreateParams(params)));
    };
    return ZodTuple;
}(ZodType));
var ZodRecord = /** @class */ (function (_super) {
    __extends(ZodRecord, _super);
    function ZodRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ZodRecord.prototype, "keySchema", {
        get: function () {
            return this._def.keyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodRecord.prototype, "valueSchema", {
        get: function () {
            return this._def.valueType;
        },
        enumerable: false,
        configurable: true
    });
    ZodRecord.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        var pairs = [];
        var keyType = this._def.keyType;
        var valueType = this._def.valueType;
        for (var key in ctx.data) {
            pairs.push({
                key: keyType._parse({
                    data: key,
                    path: __spreadArray(__spreadArray([], __read(ctx.path), false), [key], false),
                    parent: ctx,
                }),
                value: valueType._parse({
                    data: ctx.data[key],
                    path: __spreadArray(__spreadArray([], __read(ctx.path), false), [key], false),
                    parent: ctx,
                }),
            });
        }
        if (ctx.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    };
    Object.defineProperty(ZodRecord.prototype, "element", {
        get: function () {
            return this._def.valueType;
        },
        enumerable: false,
        configurable: true
    });
    ZodRecord.create = function (first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord(__assign({ keyType: first, valueType: second, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(third)));
        }
        return new ZodRecord(__assign({ keyType: ZodString.create(), valueType: first, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(second)));
    };
    return ZodRecord;
}(ZodType));
var ZodMap = /** @class */ (function (_super) {
    __extends(ZodMap, _super);
    function ZodMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodMap.prototype._parse = function (input) {
        var e_12, _a;
        var _this = this;
        var _b = this._processInputParams(input), status = _b.status, ctx = _b.ctx;
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        var keyType = this._def.keyType;
        var valueType = this._def.valueType;
        var pairs = __spreadArray([], __read(ctx.data.entries()), false).map(function (_a, index) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return {
                key: keyType._parse({
                    data: key,
                    path: __spreadArray(__spreadArray([], __read(ctx.path), false), [index, "key"], false),
                    parent: ctx,
                }),
                value: valueType._parse({
                    data: value,
                    path: __spreadArray(__spreadArray([], __read(ctx.path), false), [index, "value"], false),
                    parent: ctx,
                }),
            };
        });
        if (ctx.async) {
            var finalMap_1 = new Map();
            return Promise.resolve().then(function () { return __awaiter(_this, void 0, void 0, function () {
                var pairs_3, pairs_3_1, pair, key, value, e_13_1;
                var e_13, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 6, 7, 8]);
                            pairs_3 = __values(pairs), pairs_3_1 = pairs_3.next();
                            _b.label = 1;
                        case 1:
                            if (!!pairs_3_1.done) return [3 /*break*/, 5];
                            pair = pairs_3_1.value;
                            return [4 /*yield*/, pair.key];
                        case 2:
                            key = _b.sent();
                            return [4 /*yield*/, pair.value];
                        case 3:
                            value = _b.sent();
                            if (key.status === "aborted" || value.status === "aborted") {
                                return [2 /*return*/, INVALID];
                            }
                            if (key.status === "dirty" || value.status === "dirty") {
                                status.dirty();
                            }
                            finalMap_1.set(key.value, value.value);
                            _b.label = 4;
                        case 4:
                            pairs_3_1 = pairs_3.next();
                            return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            e_13_1 = _b.sent();
                            e_13 = { error: e_13_1 };
                            return [3 /*break*/, 8];
                        case 7:
                            try {
                                if (pairs_3_1 && !pairs_3_1.done && (_a = pairs_3.return)) _a.call(pairs_3);
                            }
                            finally { if (e_13) throw e_13.error; }
                            return [7 /*endfinally*/];
                        case 8: return [2 /*return*/, { status: status.value, value: finalMap_1 }];
                    }
                });
            }); });
        }
        else {
            var finalMap = new Map();
            try {
                for (var pairs_2 = __values(pairs), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
                    var pair = pairs_2_1.value;
                    var key = pair.key;
                    var value = pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (pairs_2_1 && !pairs_2_1.done && (_a = pairs_2.return)) _a.call(pairs_2);
                }
                finally { if (e_12) throw e_12.error; }
            }
            return { status: status.value, value: finalMap };
        }
    };
    ZodMap.create = function (keyType, valueType, params) {
        return new ZodMap(__assign({ valueType: valueType, keyType: keyType, typeName: ZodFirstPartyTypeKind.ZodMap }, processCreateParams(params)));
    };
    return ZodMap;
}(ZodType));
var ZodSet = /** @class */ (function (_super) {
    __extends(ZodSet, _super);
    function ZodSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodSet.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        var def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        var valueType = this._def.valueType;
        function finalizeSet(elements) {
            var e_14, _a;
            var parsedSet = new Set();
            try {
                for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                    var element = elements_1_1.value;
                    if (element.status === "aborted")
                        return INVALID;
                    if (element.status === "dirty")
                        status.dirty();
                    parsedSet.add(element.value);
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                }
                finally { if (e_14) throw e_14.error; }
            }
            return { status: status.value, value: parsedSet };
        }
        var elements = __spreadArray([], __read(ctx.data.values()), false).map(function (item, i) {
            return valueType._parse({ data: item, path: __spreadArray(__spreadArray([], __read(ctx.path), false), [i], false), parent: ctx });
        });
        if (ctx.async) {
            return Promise.all(elements).then(function (elements) { return finalizeSet(elements); });
        }
        else {
            return finalizeSet(elements);
        }
    };
    ZodSet.prototype.min = function (minSize, message) {
        return new ZodSet(__assign(__assign({}, this._def), { minSize: { value: minSize, message: errorUtil.toString(message) } }));
    };
    ZodSet.prototype.max = function (maxSize, message) {
        return new ZodSet(__assign(__assign({}, this._def), { maxSize: { value: maxSize, message: errorUtil.toString(message) } }));
    };
    ZodSet.prototype.size = function (size, message) {
        return this.min(size, message).max(size, message);
    };
    ZodSet.prototype.nonempty = function (message) {
        return this.min(1, message);
    };
    ZodSet.create = function (valueType, params) {
        return new ZodSet(__assign({ valueType: valueType, minSize: null, maxSize: null, typeName: ZodFirstPartyTypeKind.ZodSet }, processCreateParams(params)));
    };
    return ZodSet;
}(ZodType));
var ZodFunction = /** @class */ (function (_super) {
    __extends(ZodFunction, _super);
    function ZodFunction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validate = _this.implement;
        return _this;
    }
    ZodFunction.prototype._parse = function (input) {
        var _this = this;
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.contextualErrorMap,
                    ctx.schemaErrorMap,
                    overrideErrorMap,
                    defaultErrorMap,
                ].filter(function (x) { return !!x; }),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.contextualErrorMap,
                    ctx.schemaErrorMap,
                    overrideErrorMap,
                    defaultErrorMap,
                ].filter(function (x) { return !!x; }),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        var params = { errorMap: ctx.contextualErrorMap };
        var fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            return OK(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var error, parsedArgs, result, parsedReturns;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                error = new ZodError([]);
                                return [4 /*yield*/, this._def.args
                                        .parseAsync(args, params)
                                        .catch(function (e) {
                                        error.addIssue(makeArgsIssue(args, e));
                                        throw error;
                                    })];
                            case 1:
                                parsedArgs = _a.sent();
                                return [4 /*yield*/, fn.apply(void 0, __spreadArray([], __read(parsedArgs), false))];
                            case 2:
                                result = _a.sent();
                                return [4 /*yield*/, this._def.returns._def.type
                                        .parseAsync(result, params)
                                        .catch(function (e) {
                                        error.addIssue(makeReturnsIssue(result, e));
                                        throw error;
                                    })];
                            case 3:
                                parsedReturns = _a.sent();
                                return [2 /*return*/, parsedReturns];
                        }
                    });
                });
            });
        }
        else {
            return OK(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var parsedArgs = _this._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                var result = fn.apply(void 0, __spreadArray([], __read(parsedArgs.data), false));
                var parsedReturns = _this._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    };
    ZodFunction.prototype.parameters = function () {
        return this._def.args;
    };
    ZodFunction.prototype.returnType = function () {
        return this._def.returns;
    };
    ZodFunction.prototype.args = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return new ZodFunction(__assign(__assign({}, this._def), { args: ZodTuple.create(items).rest(ZodUnknown.create()) }));
    };
    ZodFunction.prototype.returns = function (returnType) {
        return new ZodFunction(__assign(__assign({}, this._def), { returns: returnType }));
    };
    ZodFunction.prototype.implement = function (func) {
        var validatedFunc = this.parse(func);
        return validatedFunc;
    };
    ZodFunction.prototype.strictImplement = function (func) {
        var validatedFunc = this.parse(func);
        return validatedFunc;
    };
    ZodFunction.create = function (args, returns, params) {
        return new ZodFunction(__assign({ args: (args
                ? args.rest(ZodUnknown.create())
                : ZodTuple.create([]).rest(ZodUnknown.create())), returns: returns || ZodUnknown.create(), typeName: ZodFirstPartyTypeKind.ZodFunction }, processCreateParams(params)));
    };
    return ZodFunction;
}(ZodType));
var ZodLazy = /** @class */ (function (_super) {
    __extends(ZodLazy, _super);
    function ZodLazy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ZodLazy.prototype, "schema", {
        get: function () {
            return this._def.getter();
        },
        enumerable: false,
        configurable: true
    });
    ZodLazy.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        var lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    };
    ZodLazy.create = function (getter, params) {
        return new ZodLazy(__assign({ getter: getter, typeName: ZodFirstPartyTypeKind.ZodLazy }, processCreateParams(params)));
    };
    return ZodLazy;
}(ZodType));
var ZodLiteral = /** @class */ (function (_super) {
    __extends(ZodLiteral, _super);
    function ZodLiteral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodLiteral.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.data !== this._def.value) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: getParsedType(this._def.value),
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: status.value, value: ctx.data };
    };
    Object.defineProperty(ZodLiteral.prototype, "value", {
        get: function () {
            return this._def.value;
        },
        enumerable: false,
        configurable: true
    });
    ZodLiteral.create = function (value, params) {
        return new ZodLiteral(__assign({ value: value, typeName: ZodFirstPartyTypeKind.ZodLiteral }, processCreateParams(params)));
    };
    return ZodLiteral;
}(ZodType));
function createZodEnum(values) {
    return new ZodEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
    });
}
var ZodEnum = /** @class */ (function (_super) {
    __extends(ZodEnum, _super);
    function ZodEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodEnum.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (this._def.values.indexOf(ctx.data) === -1) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_enum_value,
                options: this._def.values,
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    Object.defineProperty(ZodEnum.prototype, "options", {
        get: function () {
            return this._def.values;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodEnum.prototype, "enum", {
        get: function () {
            var e_15, _a;
            var enumValues = {};
            try {
                for (var _b = __values(this._def.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var val = _c.value;
                    enumValues[val] = val;
                }
            }
            catch (e_15_1) { e_15 = { error: e_15_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_15) throw e_15.error; }
            }
            return enumValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodEnum.prototype, "Values", {
        get: function () {
            var e_16, _a;
            var enumValues = {};
            try {
                for (var _b = __values(this._def.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var val = _c.value;
                    enumValues[val] = val;
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_16) throw e_16.error; }
            }
            return enumValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZodEnum.prototype, "Enum", {
        get: function () {
            var e_17, _a;
            var enumValues = {};
            try {
                for (var _b = __values(this._def.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var val = _c.value;
                    enumValues[val] = val;
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_17) throw e_17.error; }
            }
            return enumValues;
        },
        enumerable: false,
        configurable: true
    });
    ZodEnum.create = createZodEnum;
    return ZodEnum;
}(ZodType));
var ZodNativeEnum = /** @class */ (function (_super) {
    __extends(ZodNativeEnum, _super);
    function ZodNativeEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNativeEnum.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        var nativeEnumValues = util.getValidEnumValues(this._def.values);
        if (nativeEnumValues.indexOf(ctx.data) === -1) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_enum_value,
                options: util.objectValues(nativeEnumValues),
            });
            return INVALID;
        }
        return OK(ctx.data);
    };
    Object.defineProperty(ZodNativeEnum.prototype, "enum", {
        get: function () {
            return this._def.values;
        },
        enumerable: false,
        configurable: true
    });
    ZodNativeEnum.create = function (values, params) {
        return new ZodNativeEnum(__assign({ values: values, typeName: ZodFirstPartyTypeKind.ZodNativeEnum }, processCreateParams(params)));
    };
    return ZodNativeEnum;
}(ZodType));
var ZodPromise = /** @class */ (function (_super) {
    __extends(ZodPromise, _super);
    function ZodPromise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodPromise.prototype._parse = function (input) {
        var _this = this;
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType !== ZodParsedType.promise && ctx.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        var promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then(function (data) {
            return _this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.contextualErrorMap,
            });
        }));
    };
    ZodPromise.create = function (schema, params) {
        return new ZodPromise(__assign({ type: schema, typeName: ZodFirstPartyTypeKind.ZodPromise }, processCreateParams(params)));
    };
    return ZodPromise;
}(ZodType));
var ZodEffects = /** @class */ (function (_super) {
    __extends(ZodEffects, _super);
    function ZodEffects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodEffects.prototype.innerType = function () {
        return this._def.schema;
    };
    ZodEffects.prototype._parse = function (input) {
        var _this = this;
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        var effect = this._def.effect || null;
        if (effect.type === "preprocess") {
            var processed = effect.transform(ctx.data);
            if (ctx.async) {
                return Promise.resolve(processed).then(function (processed) {
                    return _this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                });
            }
            else {
                return this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
        if (effect.type === "refinement") {
            var checkCtx_1 = {
                addIssue: function (arg) {
                    addIssueToContext(ctx, arg);
                    if (arg.fatal) {
                        status.abort();
                    }
                    else {
                        status.dirty();
                    }
                },
                get path() {
                    return ctx.path;
                },
            };
            checkCtx_1.addIssue = checkCtx_1.addIssue.bind(checkCtx_1);
            var executeRefinement_1 = function (acc
            // effect: RefinementEffect<any>
            ) {
                var result = effect.refinement(acc, checkCtx_1);
                if (ctx.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.async === false) {
                var inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement_1(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then(function (inner) {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement_1(inner.value).then(function () {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.async === false) {
                var base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                // if (base.status === "aborted") return INVALID;
                // if (base.status === "dirty") {
                //   return { status: "dirty", value: base.value };
                // }
                if (!isValid(base))
                    return base;
                var result = effect.transform(base.value);
                if (result instanceof Promise) {
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return OK(result);
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then(function (base) {
                    if (!isValid(base))
                        return base;
                    // if (base.status === "aborted") return INVALID;
                    // if (base.status === "dirty") {
                    //   return { status: "dirty", value: base.value };
                    // }
                    return Promise.resolve(effect.transform(base.value)).then(OK);
                });
            }
        }
        util.assertNever(effect);
    };
    ZodEffects.create = function (schema, effect, params) {
        return new ZodEffects(__assign({ schema: schema, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: effect }, processCreateParams(params)));
    };
    ZodEffects.createWithPreprocess = function (preprocess, schema, params) {
        return new ZodEffects(__assign({ schema: schema, effect: { type: "preprocess", transform: preprocess }, typeName: ZodFirstPartyTypeKind.ZodEffects }, processCreateParams(params)));
    };
    return ZodEffects;
}(ZodType));
var ZodOptional = /** @class */ (function (_super) {
    __extends(ZodOptional, _super);
    function ZodOptional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodOptional.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
        });
    };
    ZodOptional.prototype.unwrap = function () {
        return this._def.innerType;
    };
    ZodOptional.create = function (type, params) {
        return new ZodOptional(__assign({ innerType: type, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(params)));
    };
    return ZodOptional;
}(ZodType));
var ZodNullable = /** @class */ (function (_super) {
    __extends(ZodNullable, _super);
    function ZodNullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNullable.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        if (ctx.parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
        });
    };
    ZodNullable.prototype.unwrap = function () {
        return this._def.innerType;
    };
    ZodNullable.create = function (type, params) {
        return new ZodNullable(__assign({ innerType: type, typeName: ZodFirstPartyTypeKind.ZodNullable }, processCreateParams(params)));
    };
    return ZodNullable;
}(ZodType));
var ZodDefault = /** @class */ (function (_super) {
    __extends(ZodDefault, _super);
    function ZodDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodDefault.prototype._parse = function (input) {
        var ctx = this._processInputParams(input).ctx;
        var data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data: data,
            path: ctx.path,
            parent: ctx,
        });
    };
    ZodDefault.prototype.removeDefault = function () {
        return this._def.innerType;
    };
    ZodDefault.create = function (type, params) {
        return new ZodOptional(__assign({ innerType: type, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(params)));
    };
    return ZodDefault;
}(ZodType));
var ZodNaN = /** @class */ (function (_super) {
    __extends(ZodNaN, _super);
    function ZodNaN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZodNaN.prototype._parse = function (input) {
        var _a = this._processInputParams(input), status = _a.status, ctx = _a.ctx;
        if (ctx.parsedType !== ZodParsedType.nan) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: status.value, value: ctx.data };
    };
    ZodNaN.create = function (params) {
        return new ZodNaN(__assign({ typeName: ZodFirstPartyTypeKind.ZodNaN }, processCreateParams(params)));
    };
    return ZodNaN;
}(ZodType));
var custom = function (check, params) {
    if (check)
        return ZodAny.create().refine(check, params);
    return ZodAny.create();
};
var late = {
    object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = function (cls, params) {
    if (params === void 0) { params = {
        message: "Input not instance of ".concat(cls.name),
    }; }
    return custom(function (data) { return data instanceof cls; }, params);
};
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var ostring = function () { return stringType().optional(); };
var onumber = function () { return numberType().optional(); };
var oboolean = function () { return booleanType().optional(); };

var mod = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    ZodType: ZodType,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    get objectUtil () { return objectUtil; },
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodNaN: ZodNaN,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError,
    defaultErrorMap: defaultErrorMap,
    get overrideErrorMap () { return overrideErrorMap; },
    setErrorMap: setErrorMap
});

/**
 * Recursively remove defaults from a zod schema.
 *
 * See: https://github.com/colinhacks/zod/discussions/845#discussioncomment-1936943
 *
 * @param schema The Zod schema.
 * @returns A new Zod schema.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepRemoveDefaults(schema) {
    if (schema instanceof mod.ZodDefault) {
        return deepRemoveDefaults(schema.removeDefault());
    }
    if (schema instanceof mod.ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = mod.ZodOptional.create(deepRemoveDefaults(fieldSchema));
        }
        return new mod.ZodObject(Object.assign(Object.assign({}, schema._def), { shape: () => newShape }));
    }
    if (schema instanceof mod.ZodArray) {
        return mod.ZodArray.create(deepRemoveDefaults(schema.element));
    }
    if (schema instanceof mod.ZodOptional) {
        return mod.ZodOptional.create(deepRemoveDefaults(schema.unwrap()));
    }
    if (schema instanceof mod.ZodNullable) {
        return mod.ZodNullable.create(deepRemoveDefaults(schema.unwrap()));
    }
    if (schema instanceof mod.ZodTuple) {
        return mod.ZodTuple.create(schema.items.map((item) => deepRemoveDefaults(item)));
    }
    return schema;
}

/**
 * Internal types.
 */
const FRIGATE_CARD_VIEWS_USER_SPECIFIED = [
    'live',
    'clip',
    'clips',
    'snapshot',
    'snapshots',
    'image', // Static image.
];
const FRIGATE_MENU_MODES = [
    'none',
    'hidden-top',
    'hidden-left',
    'hidden-bottom',
    'hidden-right',
    'overlay-top',
    'overlay-left',
    'overlay-bottom',
    'overlay-right',
    'hover-top',
    'hover-left',
    'hover-bottom',
    'hover-right',
    'above',
    'below',
];
const LIVE_PROVIDERS = ['auto', 'ha', 'frigate-jsmpeg', 'webrtc-card'];
class FrigateCardError extends Error {
}
/**
 * Action Types (for "Picture Elements" / Menu)
 */
// Declare schemas to existing types:
// - https://github.com/colinhacks/zod/issues/372#issuecomment-826380330
const schemaForType = () => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(arg) => {
    return arg;
};
const toggleActionSchema = schemaForType()(mod.object({
    action: mod.literal('toggle'),
}));
const callServiceActionSchema = schemaForType()(mod.object({
    action: mod.literal('call-service'),
    service: mod.string(),
    service_data: mod.object({}).passthrough().optional(),
}));
const navigateActionSchema = schemaForType()(mod.object({
    action: mod.literal('navigate'),
    navigation_path: mod.string(),
}));
const urlActionSchema = schemaForType()(mod.object({
    action: mod.literal('url'),
    url_path: mod.string(),
}));
const moreInfoActionSchema = schemaForType()(mod.object({
    action: mod.literal('more-info'),
}));
const customActionSchema = schemaForType()(mod.object({
    action: mod.literal('fire-dom-event'),
}));
const noActionSchema = schemaForType()(mod.object({
    action: mod.literal('none'),
}));
const frigateCardCustomActionBaseSchema = customActionSchema.extend({
    // Syntactic sugar to avoid 'fire-dom-event' as part of an external API.
    action: mod
        .literal('custom:frigate-card-action')
        .transform(() => 'fire-dom-event')
        .or(mod.literal('fire-dom-event')),
});
const FRIGATE_CARD_GENERAL_ACTIONS = [
    'default',
    'clip',
    'clips',
    'image',
    'live',
    'snapshot',
    'snapshots',
    'download',
    'frigate_ui',
    'fullscreen',
    'menu_toggle',
];
[...FRIGATE_CARD_GENERAL_ACTIONS, 'camera_select'];
const frigateCardGeneralActionSchema = frigateCardCustomActionBaseSchema.extend({
    frigate_card_action: mod.enum(FRIGATE_CARD_GENERAL_ACTIONS),
});
const frigateCardCameraSelectActionSchema = frigateCardCustomActionBaseSchema.extend({
    frigate_card_action: mod.literal('camera_select'),
    camera: mod.string(),
});
const frigateCardCustomActionSchema = mod.union([
    frigateCardGeneralActionSchema,
    frigateCardCameraSelectActionSchema,
]);
// Cannot use discriminatedUnion since frigateCardCustomActionSchema uses a
// transform on the discriminated union key.
const actionSchema = mod.union([
    toggleActionSchema,
    callServiceActionSchema,
    navigateActionSchema,
    urlActionSchema,
    moreInfoActionSchema,
    noActionSchema,
    frigateCardCustomActionSchema,
]);
const actionBaseSchema = mod
    .object({
    tap_action: actionSchema.or(actionSchema.array()).optional(),
    hold_action: actionSchema.or(actionSchema.array()).optional(),
    double_tap_action: actionSchema.or(actionSchema.array()).optional(),
    start_tap_action: actionSchema.or(actionSchema.array()).optional(),
    end_tap_action: actionSchema.or(actionSchema.array()).optional(),
})
    // Passthrough to allow (at least) entity/camera_image to go through. This
    // card doesn't need these attributes, but handleAction() in
    // custom_card_helpers may depending on how the action is configured.
    .passthrough();
const actionsSchema = mod.object({
    actions: actionBaseSchema.optional(),
});
const elementsBaseSchema = actionBaseSchema.extend({
    style: mod.object({}).passthrough().optional(),
    title: mod.string().nullable().optional(),
});
/**
 * Picture Element Configuration.
 *
 * All picture element types are validated (not just the Frigate card custom
 * ones) as a convenience to present the user with a consistent error display
 * up-front regardless of where they made their error.
 */
// https://www.home-assistant.io/lovelace/picture-elements/#state-badge
const stateBadgeIconSchema = elementsBaseSchema.extend({
    type: mod.literal('state-badge'),
    entity: mod.string(),
});
// https://www.home-assistant.io/lovelace/picture-elements/#state-icon
const stateIconSchema = elementsBaseSchema.extend({
    type: mod.literal('state-icon'),
    entity: mod.string(),
    icon: mod.string().optional(),
    state_color: mod.boolean().default(true),
});
// https://www.home-assistant.io/lovelace/picture-elements/#state-label
const stateLabelSchema = elementsBaseSchema.extend({
    type: mod.literal('state-label'),
    entity: mod.string(),
    attribute: mod.string().optional(),
    prefix: mod.string().optional(),
    suffix: mod.string().optional(),
});
// https://www.home-assistant.io/lovelace/picture-elements/#service-call-button
const serviceCallButtonSchema = elementsBaseSchema.extend({
    type: mod.literal('service-button'),
    // Title is required for service button.
    title: mod.string(),
    service: mod.string(),
    service_data: mod.object({}).passthrough().optional(),
});
// https://www.home-assistant.io/lovelace/picture-elements/#icon-element
const iconSchema = elementsBaseSchema.extend({
    type: mod.literal('icon'),
    icon: mod.string(),
    entity: mod.string().optional(),
});
// https://www.home-assistant.io/lovelace/picture-elements/#image-element
const imageSchema = elementsBaseSchema.extend({
    type: mod.literal('image'),
    entity: mod.string().optional(),
    image: mod.string().optional(),
    camera_image: mod.string().optional(),
    camera_view: mod.string().optional(),
    state_image: mod.object({}).passthrough().optional(),
    filter: mod.string().optional(),
    state_filter: mod.object({}).passthrough().optional(),
    aspect_ratio: mod.string().optional(),
});
// https://www.home-assistant.io/lovelace/picture-elements/#image-element
const conditionalSchema = mod.object({
    type: mod.literal('conditional'),
    conditions: mod
        .object({
        entity: mod.string(),
        state: mod.string().optional(),
        state_not: mod.string().optional(),
    })
        .array(),
    elements: mod.lazy(() => pictureElementsSchema),
});
// https://www.home-assistant.io/lovelace/picture-elements/#custom-elements
const customSchema = mod
    .object({
    // Insist that Frigate card custom elements are handled by other schemas.
    type: mod.string().superRefine((val, ctx) => {
        if (!val.match(/^custom:(?!frigate-card).+/)) {
            ctx.addIssue({
                code: mod.ZodIssueCode.custom,
                message: 'Frigate-card custom elements must match specific schemas',
                fatal: true,
            });
        }
    }),
})
    .passthrough();
/**
 * Camera configuration section
 */
const cameraConfigDefault = {
    client_id: 'frigate',
    live_provider: 'auto',
};
const webrtcCardCameraConfigSchema = mod.object({
    entity: mod.string().optional(),
    url: mod.string().optional(),
});
const cameraConfigSchema = mod
    .object({
    // No URL validation to allow relative URLs within HA (e.g. Frigate addon).
    frigate_url: mod.string().optional(),
    client_id: mod.string().default(cameraConfigDefault.client_id),
    camera_name: mod.string().optional(),
    label: mod.string().optional(),
    zone: mod.string().optional(),
    camera_entity: mod.string().optional(),
    live_provider: mod.enum(LIVE_PROVIDERS).default(cameraConfigDefault.live_provider),
    // Used for presentation in the UI (autodetected from the entity if
    // specified).
    icon: mod.string().optional(),
    title: mod.string().optional(),
    // Optional identifier to separate different camera configurations used in
    // this card.
    id: mod.string().optional(),
    // Camera identifiers for WebRTC.
    webrtc_card: webrtcCardCameraConfigSchema.optional(),
})
    .default(cameraConfigDefault);
/**
 * Custom Element Types.
 */
const menuIconSchema = iconSchema.extend({
    type: mod.literal('custom:frigate-card-menu-icon'),
});
const menuStateIconSchema = stateIconSchema.extend({
    type: mod.literal('custom:frigate-card-menu-state-icon'),
});
const menuSubmenuItemSchema = elementsBaseSchema.extend({
    entity: mod.string().optional(),
    icon: mod.string().optional(),
    state_color: mod.boolean().default(true),
    selected: mod.boolean().default(false),
});
const menuSubmenuSchema = iconSchema.extend({
    type: mod.literal('custom:frigate-card-menu-submenu'),
    items: menuSubmenuItemSchema.array(),
});
const frigateCardConditionSchema = mod.object({
    view: mod.string().array().optional(),
    fullscreen: mod.boolean().optional(),
    camera: mod.string().array().optional(),
});
const frigateConditionalSchema = mod.object({
    type: mod.literal('custom:frigate-card-conditional'),
    conditions: frigateCardConditionSchema,
    elements: mod.lazy(() => pictureElementsSchema),
});
// Cannot use discriminatedUnion since customSchema uses a superRefine, which
// causes false rejections.
const pictureElementSchema = mod.union([
    menuStateIconSchema,
    menuIconSchema,
    menuSubmenuSchema,
    frigateConditionalSchema,
    stateBadgeIconSchema,
    stateIconSchema,
    stateLabelSchema,
    serviceCallButtonSchema,
    iconSchema,
    imageSchema,
    conditionalSchema,
    customSchema,
]);
const pictureElementsSchema = pictureElementSchema.array().optional();
/**
 * View configuration section.
 */
const viewConfigDefault = {
    default: 'live',
    camera_select: 'current',
    timeout_seconds: 300,
    update_seconds: 0,
    update_force: false,
    update_cycle_camera: false,
};
const viewConfigSchema = mod
    .object({
    default: mod
        .enum(FRIGATE_CARD_VIEWS_USER_SPECIFIED)
        .default(viewConfigDefault.default),
    camera_select: mod
        .enum([...FRIGATE_CARD_VIEWS_USER_SPECIFIED, 'current'])
        .default(viewConfigDefault.camera_select),
    timeout_seconds: mod.number().default(viewConfigDefault.timeout_seconds),
    update_seconds: mod.number().default(viewConfigDefault.update_seconds),
    update_force: mod.boolean().default(viewConfigDefault.update_force),
    update_cycle_camera: mod.boolean().default(viewConfigDefault.update_cycle_camera),
    update_entities: mod.string().array().optional(),
    render_entities: mod.string().array().optional(),
})
    .merge(actionsSchema)
    .default(viewConfigDefault);
/**
 * Image view configuration section.
 */
const IMAGE_MODES = [
    'screensaver',
    'camera',
    'url',
];
const imageConfigDefault = {
    mode: 'url',
    refresh_seconds: 0,
};
const imageConfigSchema = mod
    .object({
    mode: mod.enum(IMAGE_MODES).default(imageConfigDefault.mode),
    url: mod.string().optional(),
    refresh_seconds: mod.number().min(0).default(imageConfigDefault.refresh_seconds),
})
    .merge(actionsSchema)
    .default(imageConfigDefault);
/**
 * Thumbnail controls configuration section.
 */
const thumbnailsControlSchema = mod.object({
    mode: mod.enum(['none', 'above', 'below']),
    size: mod.string().optional(),
});
/**
 * Next/Previous Control configuration section.
 */
const nextPreviousControlConfigSchema = mod.object({
    style: mod.enum(['none', 'chevrons', 'icons', 'thumbnails']),
    size: mod.string(),
});
/**
 * Carousel transition effect configuration.
 */
const transitionEffectConfigSchema = mod.enum(['none', 'slide']);
/**
 * Title Control configuration section.
 */
const titleControlConfigSchema = mod.object({
    mode: mod.enum([
        'none',
        'popup-top-right',
        'popup-top-left',
        'popup-bottom-right',
        'popup-bottom-left',
    ]),
    duration_seconds: mod.number().min(0).max(60),
});
/**
 * Live view configuration section.
 */
const liveConfigDefault = {
    auto_unmute: false,
    preload: false,
    lazy_load: true,
    lazy_unload: false,
    draggable: true,
    transition_effect: 'slide',
    controls: {
        next_previous: {
            size: '48px',
            style: 'chevrons',
        },
        thumbnails: {
            media: 'clips',
            size: '100px',
            mode: 'none',
        },
        title: {
            mode: 'popup-bottom-right',
            duration_seconds: 2,
        },
    },
};
const webrtcCardConfigSchema = webrtcCardCameraConfigSchema.passthrough().optional();
const jsmpegConfigSchema = mod
    .object({
    options: mod
        .object({
        // https://github.com/phoboslab/jsmpeg#usage
        audio: mod.boolean().optional(),
        video: mod.boolean().optional(),
        pauseWhenHidden: mod.boolean().optional(),
        disableGl: mod.boolean().optional(),
        disableWebAssembly: mod.boolean().optional(),
        preserveDrawingBuffer: mod.boolean().optional(),
        progressive: mod.boolean().optional(),
        throttled: mod.boolean().optional(),
        chunkSize: mod.number().optional(),
        maxAudioLag: mod.number().optional(),
        videoBufferSize: mod.number().optional(),
        audioBufferSize: mod.number().optional(),
    })
        .optional(),
})
    .optional();
const liveOverridableConfigSchema = mod
    .object({
    webrtc_card: webrtcCardConfigSchema,
    jsmpeg: jsmpegConfigSchema,
    controls: mod
        .object({
        next_previous: nextPreviousControlConfigSchema
            .extend({
            // Live cannot show thumbnails, remove that option.
            style: mod
                .enum(['none', 'chevrons', 'icons'])
                .default(liveConfigDefault.controls.next_previous.style),
            size: nextPreviousControlConfigSchema.shape.size.default(liveConfigDefault.controls.next_previous.size),
        })
            .default(liveConfigDefault.controls.next_previous),
        thumbnails: thumbnailsControlSchema
            .extend({
            mode: thumbnailsControlSchema.shape.mode.default(liveConfigDefault.controls.thumbnails.mode),
            size: thumbnailsControlSchema.shape.size.default(liveConfigDefault.controls.thumbnails.size),
            media: mod
                .enum(['clips', 'snapshots'])
                .default(liveConfigDefault.controls.thumbnails.media),
        })
            .default(liveConfigDefault.controls.thumbnails),
        title: titleControlConfigSchema
            .extend({
            mode: titleControlConfigSchema.shape.mode.default(liveConfigDefault.controls.title.mode),
            duration_seconds: titleControlConfigSchema.shape.duration_seconds.default(liveConfigDefault.controls.title.duration_seconds),
        })
            .default(liveConfigDefault.controls.title),
    })
        .default(liveConfigDefault.controls),
})
    .merge(actionsSchema);
const liveConfigSchema = liveOverridableConfigSchema
    .extend({
    // Non-overrideable parameters.
    auto_unmute: mod.boolean().default(liveConfigDefault.auto_unmute),
    preload: mod.boolean().default(liveConfigDefault.preload),
    lazy_load: mod.boolean().default(liveConfigDefault.lazy_load),
    lazy_unload: mod.boolean().default(liveConfigDefault.lazy_unload),
    draggable: mod.boolean().default(liveConfigDefault.draggable),
    transition_effect: transitionEffectConfigSchema.default(liveConfigDefault.transition_effect),
})
    .default(liveConfigDefault);
/**
 * Menu configuration section.
 */
const menuConfigDefault = {
    mode: 'hidden-top',
    buttons: {
        frigate: true,
        cameras: true,
        live: true,
        clips: true,
        snapshots: true,
        image: false,
        download: true,
        frigate_ui: true,
        fullscreen: true,
    },
    button_size: '40px',
};
const menuConfigSchema = mod
    .object({
    mode: mod.enum(FRIGATE_MENU_MODES).default(menuConfigDefault.mode),
    buttons: mod
        .object({
        frigate: mod.boolean().default(menuConfigDefault.buttons.frigate),
        cameras: mod.boolean().default(menuConfigDefault.buttons.cameras),
        live: mod.boolean().default(menuConfigDefault.buttons.live),
        clips: mod.boolean().default(menuConfigDefault.buttons.clips),
        snapshots: mod.boolean().default(menuConfigDefault.buttons.snapshots),
        image: mod.boolean().default(menuConfigDefault.buttons.image),
        download: mod.boolean().default(menuConfigDefault.buttons.download),
        frigate_ui: mod.boolean().default(menuConfigDefault.buttons.frigate_ui),
        fullscreen: mod.boolean().default(menuConfigDefault.buttons.fullscreen),
    })
        .default(menuConfigDefault.buttons),
    button_size: mod.string().default(menuConfigDefault.button_size),
})
    .default(menuConfigDefault);
/**
 * Event viewer configuration section (clip, snapshot).
 */
const viewerConfigDefault = {
    auto_play: true,
    auto_unmute: false,
    lazy_load: true,
    draggable: true,
    transition_effect: 'slide',
    controls: {
        next_previous: {
            size: '48px',
            style: 'thumbnails',
        },
        thumbnails: {
            size: '100px',
            mode: 'none',
        },
        title: {
            mode: 'popup-bottom-right',
            duration_seconds: 2,
        },
    },
};
const viewerNextPreviousControlConfigSchema = nextPreviousControlConfigSchema.extend({
    style: mod
        .enum(['none', 'thumbnails', 'chevrons'])
        .default(viewerConfigDefault.controls.next_previous.style),
    size: mod.string().default(viewerConfigDefault.controls.next_previous.size),
});
const viewerConfigSchema = mod
    .object({
    auto_play: mod.boolean().default(viewerConfigDefault.auto_play),
    auto_unmute: mod.boolean().default(viewerConfigDefault.auto_unmute),
    lazy_load: mod.boolean().default(viewerConfigDefault.lazy_load),
    draggable: mod.boolean().default(viewerConfigDefault.draggable),
    transition_effect: transitionEffectConfigSchema.default(viewerConfigDefault.transition_effect),
    controls: mod
        .object({
        next_previous: viewerNextPreviousControlConfigSchema.default(viewerConfigDefault.controls.next_previous),
        thumbnails: thumbnailsControlSchema
            .extend({
            mode: thumbnailsControlSchema.shape.mode.default(viewerConfigDefault.controls.thumbnails.mode),
            size: thumbnailsControlSchema.shape.size.default(viewerConfigDefault.controls.thumbnails.size),
        })
            .default(viewerConfigDefault.controls.thumbnails),
        title: titleControlConfigSchema
            .extend({
            mode: titleControlConfigSchema.shape.mode.default(viewerConfigDefault.controls.title.mode),
            duration_seconds: titleControlConfigSchema.shape.duration_seconds.default(viewerConfigDefault.controls.title.duration_seconds),
        })
            .default(viewerConfigDefault.controls.title),
    })
        .default(viewerConfigDefault.controls),
})
    .merge(actionsSchema)
    .default(viewerConfigDefault);
/**
 * Event gallery configuration section (clips, snapshots).
 */
const galleryConfigDefault = {
    min_columns: 5,
};
const galleryConfigSchema = mod
    .object({
    min_columns: mod.number().min(1).max(10).default(galleryConfigDefault.min_columns),
})
    .merge(actionsSchema)
    .default(galleryConfigDefault);
/**
 * Dimensions configuration section.
 */
const dimensionsConfigDefault = {
    aspect_ratio_mode: 'dynamic',
    aspect_ratio: [16, 9],
};
const dimensionsConfigSchema = mod
    .object({
    aspect_ratio_mode: mod
        .enum(['dynamic', 'static', 'unconstrained'])
        .default(dimensionsConfigDefault.aspect_ratio_mode),
    aspect_ratio: mod
        .number()
        .array()
        .length(2)
        .or(mod
        .string()
        .regex(/^\s*\d+\s*[:\/]\s*\d+\s*$/)
        .transform((input) => input.split(/[:\/]/).map((d) => Number(d))))
        .default(dimensionsConfigDefault.aspect_ratio),
})
    .default(dimensionsConfigDefault);
/**
 * Configuration overrides
 */
// Strip all defaults from the override schemas, to ensure values are only what
// the user has specified.
const overrideConfigurationSchema = mod.object({
    live: deepRemoveDefaults(liveOverridableConfigSchema).optional(),
    menu: deepRemoveDefaults(menuConfigSchema).optional(),
    image: deepRemoveDefaults(imageConfigSchema).optional(),
});
const overridesSchema = mod
    .object({
    conditions: frigateCardConditionSchema,
    overrides: overrideConfigurationSchema,
})
    .array()
    .optional();
mod
    .object({
    conditions: frigateCardConditionSchema,
    overrides: liveOverridableConfigSchema,
})
    .array()
    .optional();
/**
 * Main card config.
 */
const frigateCardConfigSchema = mod.object({
    // Main configuration sections.
    cameras: cameraConfigSchema.array().nonempty(),
    view: viewConfigSchema,
    menu: menuConfigSchema,
    live: liveConfigSchema,
    event_viewer: viewerConfigSchema,
    event_gallery: galleryConfigSchema,
    image: imageConfigSchema,
    elements: pictureElementsSchema,
    dimensions: dimensionsConfigSchema,
    // Configuration overrides.
    overrides: overridesSchema,
    // Support for card_mod (https://github.com/thomasloven/lovelace-card-mod).
    card_mod: mod.unknown(),
    // Stock lovelace card config.
    type: mod.string(),
    test_gui: mod.boolean().optional(),
});
const frigateCardConfigDefaults = {
    cameras: cameraConfigDefault,
    view: viewConfigDefault,
    menu: menuConfigDefault,
    live: liveConfigDefault,
    event_viewer: viewerConfigDefault,
    event_gallery: galleryConfigDefault,
    image: imageConfigDefault,
};
mod.discriminatedUnion("type", [
    menuIconSchema,
    menuStateIconSchema,
    menuSubmenuSchema,
]);
const browseMediaSourceSchema = mod.lazy(() => mod.object({
    title: mod.string(),
    media_class: mod.string(),
    media_content_type: mod.string(),
    media_content_id: mod.string(),
    can_play: mod.boolean(),
    can_expand: mod.boolean(),
    children_media_class: mod.string().nullable().optional(),
    thumbnail: mod.string().nullable(),
    children: mod.array(browseMediaSourceSchema).nullable().optional(),
}));
// Server side data-type defined here: https://github.com/home-assistant/core/blob/dev/homeassistant/components/media_source/models.py
const resolvedMediaSchema = mod.object({
    url: mod.string(),
    mime_type: mod.string(),
});
const signedPathSchema = mod.object({
    path: mod.string(),
});
const entitySchema = mod.object({
    entity_id: mod.string(),
    unique_id: mod.string(),
    platform: mod.string(),
});

const CARD_VERSION = '3.0.0';
const REPO_URL = 'https://github.com/dermotduffy/frigate-hass-card';
const TROUBLESHOOTING_URL = `${REPO_URL}#troubleshooting`;
const CONF_CAMERAS = 'cameras';
const CONF_CAMERAS_ARRAY_CAMERA_ENTITY = `${CONF_CAMERAS}.#.camera_entity`;
const CONF_CAMERAS_ARRAY_CAMERA_NAME = `${CONF_CAMERAS}.#.camera_name`;
const CONF_CAMERAS_ARRAY_CLIENT_ID = `${CONF_CAMERAS}.#.client_id`;
const CONF_CAMERAS_ARRAY_LABEL = `${CONF_CAMERAS}.#.label`;
const CONF_CAMERAS_ARRAY_URL = `${CONF_CAMERAS}.#.frigate_url`;
const CONF_CAMERAS_ARRAY_ZONE = `${CONF_CAMERAS}.#.zone`;
const CONF_CAMERAS_ARRAY_ID = `${CONF_CAMERAS}.#.id`;
const CONF_CAMERAS_ARRAY_TITLE = `${CONF_CAMERAS}.#.title`;
const CONF_CAMERAS_ARRAY_ICON = `${CONF_CAMERAS}.#.icon`;
const CONF_CAMERAS_ARRAY_WEBRTC_CARD_ENTITY = `${CONF_CAMERAS}.#.webrtc_card.entity`;
const CONF_CAMERAS_ARRAY_WEBRTC_CARD_URL = `${CONF_CAMERAS}.#.webrtc_card.url`;
const CONF_CAMERAS_ARRAY_LIVE_PROVIDER = `${CONF_CAMERAS}.#.live_provider`;
const CONF_VIEW = 'view';
const CONF_VIEW_CAMERA_SELECT = `${CONF_VIEW}.camera_select`;
const CONF_VIEW_DEFAULT = `${CONF_VIEW}.default`;
const CONF_VIEW_TIMEOUT_SECONDS = `${CONF_VIEW}.timeout_seconds`;
const CONF_VIEW_UPDATE_CYCLE_CAMERA = `${CONF_VIEW}.update_cycle_camera`;
const CONF_VIEW_UPDATE_FORCE = `${CONF_VIEW}.update_force`;
const CONF_VIEW_UPDATE_ENTITIES = `${CONF_VIEW}.update_entities`;
const CONF_VIEW_UPDATE_SECONDS = `${CONF_VIEW}.update_seconds`;
const CONF_EVENT_GALLERY = 'event_gallery';
const CONF_EVENT_GALLERY_MIN_COLUMNS = `${CONF_EVENT_GALLERY}.min_columns`;
const CONF_EVENT_VIEWER = 'event_viewer';
const CONF_EVENT_VIEWER_AUTO_PLAY = `${CONF_EVENT_VIEWER}.auto_play`;
const CONF_EVENT_VIEWER_AUTO_UNMUTE = `${CONF_EVENT_VIEWER}.auto_unmute`;
const CONF_EVENT_VIEWER_DRAGGABLE = `${CONF_EVENT_VIEWER}.draggable`;
const CONF_EVENT_VIEWER_LAZY_LOAD = `${CONF_EVENT_VIEWER}.lazy_load`;
const CONF_EVENT_VIEWER_TRANSITION_EFFECT = `${CONF_EVENT_VIEWER}.transition_effect`;
const CONF_EVENT_VIEWER_CONTROLS_NEXT_PREVIOUS_STYLE = `${CONF_EVENT_VIEWER}.controls.next_previous.style`;
const CONF_EVENT_VIEWER_CONTROLS_NEXT_PREVIOUS_SIZE = `${CONF_EVENT_VIEWER}.controls.next_previous.size`;
const CONF_EVENT_VIEWER_CONTROLS_THUMBNAILS_MODE = `${CONF_EVENT_VIEWER}.controls.thumbnails.mode`;
const CONF_EVENT_VIEWER_CONTROLS_THUMBNAILS_SIZE = `${CONF_EVENT_VIEWER}.controls.thumbnails.size`;
const CONF_EVENT_VIEWER_CONTROLS_TITLE_MODE = `${CONF_EVENT_VIEWER}.controls.title.mode`;
const CONF_EVENT_VIEWER_CONTROLS_TITLE_DURATION_SECONDS = `${CONF_EVENT_VIEWER}.controls.title.duration_seconds`;
const CONF_LIVE = 'live';
const CONF_LIVE_AUTO_UNMUTE = `${CONF_LIVE}.auto_unmute`;
const CONF_LIVE_CONTROLS_NEXT_PREVIOUS_STYLE = `${CONF_LIVE}.controls.next_previous.style`;
const CONF_LIVE_CONTROLS_NEXT_PREVIOUS_SIZE = `${CONF_LIVE}.controls.next_previous.size`;
const CONF_LIVE_CONTROLS_THUMBNAILS_MEDIA = `${CONF_LIVE}.controls.thumbnails.media`;
const CONF_LIVE_CONTROLS_THUMBNAILS_MODE = `${CONF_LIVE}.controls.thumbnails.mode`;
const CONF_LIVE_CONTROLS_THUMBNAILS_SIZE = `${CONF_LIVE}.controls.thumbnails.size`;
const CONF_LIVE_CONTROLS_TITLE_MODE = `${CONF_LIVE}.controls.title.mode`;
const CONF_LIVE_CONTROLS_TITLE_DURATION_SECONDS = `${CONF_LIVE}.controls.title.duration_seconds`;
const CONF_LIVE_DRAGGABLE = `${CONF_LIVE}.draggable`;
const CONF_LIVE_LAZY_LOAD = `${CONF_LIVE}.lazy_load`;
const CONF_LIVE_LAZY_UNLOAD = `${CONF_LIVE}.lazy_unload`;
const CONF_LIVE_PRELOAD = `${CONF_LIVE}.preload`;
const CONF_LIVE_TRANSITION_EFFECT = `${CONF_LIVE}.transition_effect`;
const CONF_LIVE_WEBRTC_CARD = `${CONF_LIVE}.webrtc_card`;
const CONF_IMAGE = 'image';
const CONF_IMAGE_MODE = `${CONF_IMAGE}.mode`;
const CONF_IMAGE_REFRESH_SECONDS = `${CONF_IMAGE}.refresh_seconds`;
const CONF_IMAGE_URL = `${CONF_IMAGE}.url`;
const CONF_MENU = 'menu';
const CONF_MENU_BUTTONS_FRIGATE = `${CONF_MENU}.buttons.frigate`;
const CONF_MENU_BUTTONS_FRIGATE_UI = `${CONF_MENU}.buttons.frigate_ui`;
const CONF_MENU_BUTTONS_FRIGATE_FULLSCREEN = `${CONF_MENU}.buttons.fullscreen`;
const CONF_MENU_BUTTONS_FRIGATE_DOWNLOAD = `${CONF_MENU}.buttons.download`;
const CONF_MENU_BUTTONS_LIVE = `${CONF_MENU}.buttons.live`;
const CONF_MENU_BUTTONS_CLIPS = `${CONF_MENU}.buttons.clips`;
const CONF_MENU_BUTTONS_SNAPSHOTS = `${CONF_MENU}.buttons.snapshots`;
const CONF_MENU_BUTTONS_IMAGE = `${CONF_MENU}.buttons.image`;
const CONF_MENU_BUTTON_SIZE = `${CONF_MENU}.button_size`;
const CONF_MENU_MODE = `${CONF_MENU}.mode`;
const CONF_DIMENSIONS = 'dimensions';
const CONF_DIMENSIONS_ASPECT_RATIO = `${CONF_DIMENSIONS}.aspect_ratio`;
const CONF_DIMENSIONS_ASPECT_RATIO_MODE = `${CONF_DIMENSIONS}.aspect_ratio_mode`;
const CONF_OVERRIDES = 'overrides';

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:w;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;

/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var Symbol$2 = Symbol$1;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$f.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$f.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$e.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag$3 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag$3);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray$1 = isArray;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];

var coreJsData$1 = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$d = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$d.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root$1, 'WeakMap');

var WeakMap$2 = WeakMap$1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var baseCreate$1 = baseCreate;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var defineProperty$1 = defineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var baseSetToString$1 = baseSetToString;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString$1);

var setToString$1 = setToString;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + '');
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$b;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments$1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root$1.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

var isBuffer$1 = isBuffer;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$4 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$3 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] =
typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] =
typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] =
typedArrayTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal$1.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

var nodeUtil$1 = nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray$1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

var nativeKeys$1 = nativeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

var nativeCreate$1 = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root$1, 'Map');

var Map$2 = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var stringToPath$1 = stringToPath;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

var getPrototype$1 = getPrototype;

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$4 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root$1.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var getSymbols$1 = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};

var getSymbolsIn$1 = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root$1, 'DataView');

var DataView$1 = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root$1, 'Promise');

var Promise$2 = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative(root$1, 'Set');

var Set$2 = Set$1;

/** `Object#toString` result references. */
var mapTag$4 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$4 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$3 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map$2),
    promiseCtorString = toSource(Promise$2),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap$2);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3) ||
    (Map$2 && getTag(new Map$2) != mapTag$4) ||
    (Promise$2 && getTag(Promise$2.resolve()) != promiseTag) ||
    (Set$2 && getTag(new Set$2) != setTag$4) ||
    (WeakMap$2 && getTag(new WeakMap$2) != weakMapTag$1)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$3;
        case mapCtorString: return mapTag$4;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$4;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$2.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/** Built-in value references. */
var Uint8Array$1 = root$1.Uint8Array;

var Uint8Array$2 = Uint8Array$1;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$3 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$2:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$3:
      return new Ctor;

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);

    case regexpTag$2:
      return cloneRegExp(object);

    case setTag$3:
      return new Ctor;

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate$1(getPrototype$1(object))
    : {};
}

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}

/* Node.js helper references. */
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

var isMap$1 = isMap;

/** `Object#toString` result references. */
var setTag$2 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}

/* Node.js helper references. */
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

var isSet$1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
cloneableTags[boolTag$1] = cloneableTags[dateTag$1] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag$1] =
cloneableTags[numberTag$1] = cloneableTags[objectTag$1] =
cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object),
      othIsArr = isArray$1(other),
      objTag = objIsArr ? arrayTag : getTag$1(object),
      othTag = othIsArr ? arrayTag : getTag$1(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray$1(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

var baseFor$1 = baseFor;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray$1(srcValue),
        isBuff = !isArr && isBuffer$1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

var merge$1 = merge;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var common$1 = {
	version: "Version",
	frigate_card: "Frigate card",
	frigate_card_description: "A Lovelace card for use with Frigate",
	no_snapshots: "No snapshots",
	no_clips: "No clips",
	no_snapshot: "No recent snapshot",
	no_clip: "No recent clip",
	live: "Live"
};
var config$1 = {
	cameras: {
		camera_entity: "Camera Entity",
		camera_name: "Frigate camera name (Autodetected from entity)",
		client_id: "Frigate client id (For >1 Frigate server)",
		id: "Unique id for this camera in this card",
		label: "Frigate label/object filter",
		frigate_url: "Frigate server URL",
		title: "Title for this camera (Autodetected from entity)",
		icon: "Icon for this camera (Autodetected from entity)",
		live_provider: "Live view provider for this camera",
		live_providers: {
			auto: "Automatic",
			ha: "Home Assistant (i.e. HLS, LL-HLS, WebRTC native)",
			"frigate-jsmpeg": "Frigate JSMpeg",
			"webrtc-card": "WebRTC Card (i.e. AlexxIT's WebRTC Card)"
		},
		webrtc_card: {
			entity: "WebRTC Card Camera Entity (Not a Frigate camera)",
			url: "WebRTC Card Camera URL"
		},
		zone: "Frigate zone"
	},
	view: {
		camera_select: "View for newly selected cameras",
		"default": "Default view",
		views: {
			live: "Live view",
			clip: "Most recent clip",
			clips: "Clips gallery",
			snapshot: "Most recent snapshot",
			snapshots: "Snapshots gallery",
			image: "Static image",
			current: "Current view"
		},
		timeout_seconds: "Reset to default view X seconds after user action (0=never)",
		update_cycle_camera: "Cycle through cameras when default view updates",
		update_force: "Force card updates (ignore user interaction)",
		update_seconds: "Refresh default view every X seconds (0=never)"
	},
	event_gallery: {
		min_columns: "Minimum number of columns"
	},
	event_viewer: {
		auto_play: "Automatically play media",
		auto_unmute: "Automatically unmute media",
		draggable: "Event Viewer can be dragged/swiped",
		lazy_load: "Event Viewer media is lazily loaded in carousel",
		transition_effect: "Event Viewer transition effect",
		transition_effects: {
			none: "No transition",
			slide: "Slide transition"
		},
		controls: {
			next_previous: {
				style: "Event Viewer next & previous control style",
				size: "Event Viewer next & previous control size (e.g. '48px')",
				styles: {
					thumbnails: "Thumbnails",
					chevrons: "Chevrons",
					none: "None"
				}
			},
			thumbnails: {
				mode: "Event Viewer thumbnails mode",
				size: "Event Viewer thumbnails size (e.g. '100px')",
				modes: {
					below: "Thumbnails below the media",
					above: "Thumbnails above the media",
					none: "No thumbnails"
				}
			},
			title: {
				mode: "Event Viewer media title display mode",
				modes: {
					none: "No title display",
					"popup-top-left": "Popup on the top left",
					"popup-top-right": "Popup on the top right",
					"popup-bottom-left": "Popup on the bottom left",
					"popup-bottom-right": "Popup on the bottom right"
				},
				duration_seconds: "Seconds to display popup title (0=forever)"
			}
		}
	},
	live: {
		preload: "Preload live view in the background",
		draggable: "Live cameras view can be dragged/swiped",
		lazy_load: "Live cameras are lazily loaded",
		lazy_unload: "Live cameras are lazily unloaded",
		auto_unmute: "Automatically unmute live cameras",
		transition_effect: "Live camera transition effect",
		controls: {
			next_previous: {
				style: "Live view next & previous control style",
				size: "Live view next & previous control size (e.g. '48px')",
				styles: {
					chevrons: "Chevrons",
					icons: "Icons",
					none: "None"
				}
			},
			thumbnails: {
				mode: "Live thumbnails mode",
				size: "Live thumbnails size (e.g. '100px')",
				media: "Whether to show thumbnails of clips or snapshots",
				medias: {
					clips: "Clip thumbnails",
					snapshots: "Snapshot thumbnails"
				}
			},
			title: {
				mode: "Live media title display mode",
				duration_seconds: "Seconds to display popup title (0=forever)"
			}
		}
	},
	image: {
		mode: "Image view mode",
		modes: {
			screensaver: "Embedded Frigate logo",
			url: "Arbitrary image specified by URL",
			camera: "Home Assistant camera snapshot of camera entity"
		},
		url: "Static image URL for image view",
		refresh_seconds: "Number of seconds after which to refresh (0=never)"
	},
	menu: {
		buttons: {
			frigate: "Frigate menu / Default view",
			frigate_ui: "Frigate user Interface",
			fullscreen: "Fullscreen",
			download: "Download event media",
			cameras: "Select camera"
		},
		mode: "Menu mode",
		modes: {
			none: "No menu",
			"hidden-top": "Hidden top",
			"hidden-left": "Hidden left",
			"hidden-bottom": "Hidden bottom",
			"hidden-right": "Hidden right",
			"overlay-top": "Overlay top",
			"overlay-left": "Overlay left",
			"overlay-bottom": "Overlay bottom",
			"overlay-right": "Overlay right",
			"hover-top": "Hover top",
			"hover-left": "Hover left",
			"hover-bottom": "Hover bottom",
			"hover-right": "Hover right",
			above: "Above",
			below: "Below"
		},
		button_size: "Menu button size (e.g. '40px')"
	},
	dimensions: {
		aspect_ratio: "Default aspect ratio (e.g. '16:9')",
		aspect_ratio_mode: "Aspect ratio mode",
		aspect_ratio_modes: {
			unconstrained: "Unconstrained aspect ratio",
			dynamic: "Aspect ratio adjusts to media",
			"static": "Static aspect ratio"
		}
	},
	overrides: {
		info: "This card configuration has manually specified overrides configured which may override values shown in the visual editor, please consult the code editor to view/modify these overrides"
	}
};
var editor$1 = {
	cameras: "Cameras",
	cameras_secondary: "What cameras to render on this card",
	view: "View",
	view_secondary: "What the card should show and how to show it",
	menu: "Menu",
	menu_secondary: "Menu look & feel options",
	live: "Live",
	live_secondary: "Live camera view options",
	event_gallery: "Event gallery",
	event_gallery_secondary: "Snapshots & clips gallery options",
	event_viewer: "Event viewer",
	event_viewer_secondary: "Snapshots & clips viewer options",
	image: "Image",
	image_secondary: "Static image view options",
	dimensions: "Dimensions",
	dimensions_secondary: "Dimensions & shape options",
	show_button: "Show button",
	upgrade: "Upgrade",
	upgrade_available: "An automatic card configuration upgrade is available",
	"delete": "Delete",
	move_up: "Move up",
	move_down: "Move down",
	add_new_camera: "Add new camera",
	camera: "Camera",
	overrides: "Overrides are active",
	overrides_secondary: "Dynamic configuration overrides detected"
};
var error$1 = {
	empty_response: "Received empty response from Home Assistant for request",
	invalid_response: "Received invalid response from Home Assistant for request",
	invalid_keys: "Invalid keys",
	unknown: "Unknown error",
	troubleshooting: "Check troubleshooting",
	could_not_resolve: "Could not resolve media URL",
	no_live_camera: "The camera_entity parameter must be set and valid for this live provider",
	live_camera_unavailable: "The configured camera_entity is unavailable",
	image_load_error: "The image could not be loaded",
	invalid_configuration: "Invalid configuration",
	invalid_configuration_no_hint: "No location hint available (bad or missing type?)",
	upgrade_available: "An automated card configuration upgrade is available, please visit the visual card editor",
	webrtc_card_reported_error: "WebRTC Card reported an error",
	webrtc_card_waiting: "Waiting for WebRTC Card to load ...",
	no_cameras: "No valid cameras found, you must configure at least one camera entry",
	no_camera_id: "Could not determine camera id for the following camera, may need to set 'id' parameter manually",
	duplicate_camera_id: "Duplicate Frigate camera id for the following camera, use the 'id' parameter to uniquely identify cameras",
	could_not_render_elements: "Could not render picture elements",
	invalid_elements_config: "Invalid picture elements configuration",
	jsmpeg_no_sign: "Could not retrieve or sign JSMPEG websocket path",
	jsmpeg_no_player: "Could not start JSMPEG player",
	no_camera_name: "Could not determine Frigate camera name for camera, please specify either 'camera_entity' or 'camera_name' for the following camera",
	download_no_media: "No media to download",
	download_no_event_id: "Could not extract Frigate event id from media",
	download_sign_failed: "Could not sign media URL for download"
};
var en = {
	common: common$1,
	config: config$1,
	editor: editor$1,
	error: error$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common$1,
    config: config$1,
    editor: editor$1,
    error: error$1,
    'default': en
});

var common = {
	version: "Versão",
	frigate_card: "Cartão Frigate",
	frigate_card_description: "Um cartão da Lovelace para usar com Frigate",
	no_snapshots: "Sem snapshots",
	no_clips: "Sem clips",
	no_snapshot: "Sem snapshot recente",
	no_clip: "Sem clip recente",
	live: "Ao Vivo"
};
var config = {
	cameras: {
		camera_entity: "Entidade da Câmera",
		camera_name: "Nome da câmera do Frigate (detectado automaticamente pela entidade)",
		client_id: "ID de cliente do Frigate (para >1 servidor da Frigate)",
		id: "ID exclusivo para esta câmera nesse cartão",
		label: "Filtro de rótulo/objeto do Frigate",
		frigate_url: "URL do servidor Frigate",
		title: "Título para esta câmera (detectado automaticamente pela entidade)",
		icon: "Ícone para esta câmera (detectado automaticamente pela entidade)",
		live_provider: "Provedor de visualização ao vivo para esta câmera",
		live_providers: {
			auto: "Automatico",
			ha: "Home Assistant (HLS, LL-HLS ou WebRTC nativo)",
			"frigate-jsmpeg": "Frigate JSMpeg",
			"webrtc-card": "Cartão WebRTC (de @AlexxIT)"
		},
		webrtc_card: {
			entity: "Entidade de câmera de cartão WebRTC (não é uma câmera Frigate)",
			url: "URL da câmera do cartão WebRTC"
		},
		zone: "Zona Frigate"
	},
	view: {
		camera_select: "Visualização de câmeras recém-selecionadas",
		"default": "Visualização padrão",
		views: {
			live: "Visualização ao vivo",
			clip: "Clipe mais recente",
			clips: "Galeria de clipes",
			snapshot: "Snapshot mais recente",
			snapshots: "Galeria de Snapshots",
			image: "Imagem estática",
			current: "Visualização atual"
		},
		timeout_seconds: "Redefinir para a visualização padrão X segundos após a ação do usuário (0 = nunca)",
		update_cycle_camera: "Percorrer as câmeras quando a visualização padrão for atualizada",
		update_force: "Forçar atualizações do cartão (ignore a interação do usuário)",
		update_seconds: "Atualize a visualização padrão a cada X segundos (0 = nunca)"
	},
	event_gallery: {
		min_columns: "Número mínimo de colunas"
	},
	event_viewer: {
		auto_play: "Reproduzir mídia automaticamente",
		auto_unmute: "Ativar mídia automaticamente",
		draggable: "Visualizador de eventos pode ser arrastado/deslizado",
		lazy_load: "A mídia do Visualizador de eventos é carregada lentamente no carrossel",
		transition_effect: "Efeito de transição do Visualizador de eventos",
		transition_effects: {
			none: "Sem transição",
			slide: "Transição de slides"
		},
		controls: {
			next_previous: {
				style: "Estilo do controle próximo e anterior do Visualizador de eventos",
				size: "Tamanho do controle próximo e anterior do Visualizador de eventos (por exemplo, '48px')",
				styles: {
					thumbnails: "Miniaturas",
					chevrons: "Chevrons",
					none: "Nenhum"
				}
			},
			thumbnails: {
				mode: "Modo de miniaturas do Visualizador de eventos",
				size: "Tamanho das miniaturas do Visualizador de eventos (por exemplo, '100px')",
				modes: {
					below: "Miniaturas abaixo da mídia",
					above: "Miniaturas acima da mídia",
					none: "Sem miniaturas"
				}
			},
			title: {
				mode: "Modo de exibição de título de mídia do Visualizador de eventos",
				modes: {
					none: "Sem exibição de título",
					"popup-top-left": "Pop-up no canto superior esquerdo",
					"popup-top-right": "Pop-up no canto superior direito",
					"popup-bottom-left": "Pop-up no canto inferior esquerdo",
					"popup-bottom-right": "Pop-up no canto inferior direito"
				},
				duration_seconds: "Segundos de exibição do pop-up no Visualizador de Eventos (0 = para sempre)"
			}
		}
	},
	live: {
		preload: "Pré-carregar a visualização ao vivo em segundo plano",
		draggable: "A visualização ao vivo das câmeras pode ser arrastada/deslizada",
		lazy_load: "As câmeras ao vivo são carregadas lentamente",
		lazy_unload: "As câmeras ao vivo são descarregadas preguiçosamente",
		auto_unmute: "Ativar automaticamente o som das câmeras ao vivo",
		transition_effect: "Efeito de transição de câmera ao vivo",
		controls: {
			next_previous: {
				style: "Estilo do controle próximo e anterior na visualização ao vivo",
				size: "Tamanho de controle próximo e anterior na visualização ao vivo (por exemplo, '48px')",
				styles: {
					chevrons: "Chevrons",
					icons: "Ícones",
					none: "Nenhum"
				}
			},
			thumbnails: {
				mode: "Miniaturas do modo ao vivo",
				size: "Tamanho das miniaturas ao vivo (e.g. '100px')",
				media: "Se deve mostrar miniaturas de clipes ou snapshots",
				medias: {
					clips: "Miniaturas de clipes",
					snapshots: "Miniaturas de Snapshots"
				}
			},
			title: {
				mode: "Modo de exibição de título de mídia ao vivo",
				duration_seconds: "Segundos para exibir o pop-up na visualização ao vivo (0 = para sempre)"
			}
		}
	},
	image: {
		mode: "Modo de visualização de imagem",
		modes: {
			screensaver: "Logo Frigate embutido",
			url: "Imagem arbitrária especificada por URL",
			camera: "Instantâneo da câmera do Home Assistant, da entidade de câmera"
		},
		url: "Imagem arbitrária especificada por URL",
		refresh_seconds: "Número de segundos após o qual atualizar (0 = nunca)"
	},
	menu: {
		buttons: {
			frigate: "Frigate menu / Visualização padrão",
			frigate_ui: "Frigate Interface de usuário",
			fullscreen: "Tela cheia",
			download: "Baixe a mídia do evento",
			cameras: "Selecionar câmera"
		},
		mode: "Modo do menu",
		modes: {
			none: "Sem menu",
			"hidden-top": "Ocultar parte superior",
			"hidden-left": "Ocultar esquerda",
			"hidden-bottom": "Ocultar parte inferior",
			"hidden-right": "Ocultar direita",
			"overlay-top": "Sobreposição da parte superior",
			"overlay-left": "Sobreposição esquerda",
			"overlay-bottom": "Sobreposição da parte inferior",
			"overlay-right": "Sobreposição direita",
			"hover-top": "Passar para cima",
			"hover-left": "Passar para esquerda",
			"hover-bottom": "Passar para baixo",
			"hover-right": "Passar para direita",
			above: "Acima",
			below: "Abaixo"
		},
		button_size: "Tamanho do botão de menu (e.g. '40px')"
	},
	dimensions: {
		aspect_ratio: "Proporção padrão (e.g. '16:9')",
		aspect_ratio_mode: "Modo de proporção",
		aspect_ratio_modes: {
			unconstrained: "Proporção irrestrita",
			dynamic: "A proporção se ajusta à mídia",
			"static": "Proporção estática"
		}
	},
	overrides: {
		info: "Esta configuração do cartão especificou manualmente as substituições configuradas que podem substituir os valores mostrados no editor visual, consulte o editor de código para visualizar/modificar essas substituições"
	}
};
var editor = {
	cameras: "Câmeras",
	cameras_secondary: "Quais câmeras renderizar neste cartão",
	view: "Visualizar",
	view_secondary: "O que o cartão deve mostrar e como mostrá-lo",
	menu: "Menu",
	menu_secondary: "Opções de aparência do menu",
	live: "Ao vivo",
	live_secondary: "Opções de visualização da câmera ao vivo",
	event_gallery: "Galeria de eventos",
	event_gallery_secondary: "Opções da galeria de Snapshots e clipes",
	event_viewer: "Visualizador de eventos",
	event_viewer_secondary: "Opções do visualizador de Snapshots e clipes",
	image: "Imagem",
	image_secondary: "Opções de visualização de imagem estática",
	dimensions: "Dimensões",
	dimensions_secondary: "Dimensões e opções de forma",
	show_button: "Mostrar botão",
	upgrade: "Upgrade",
	upgrade_available: "Um upgrade automático da configuração de cartão está disponível",
	"delete": "Excluir",
	move_up: "Subir",
	move_down: "Descer",
	add_new_camera: "Adicionar nova câmera",
	camera: "Câmera",
	overrides: "As substituições estão ativas",
	overrides_secondary: "Substituições de configuração dinâmica detectadas"
};
var error = {
	empty_response: "Sem resposta do Home Assistant para a solicitação",
	invalid_response: "Resposta inválida recebida do Home Assistant para a solicitação",
	invalid_keys: "Chaves inválidas",
	unknown: "Erro desconhecido",
	troubleshooting: "Verifique a solução de problemas",
	could_not_resolve: "Não foi possível resolver o URL de mídia",
	no_live_camera: "O parâmetro camera_entity deve ser definido e válido para este provedor ativo",
	live_camera_unavailable: "camera_entity configurada não está disponível",
	invalid_configuration: "Configuração inválida",
	invalid_configuration_no_hint: "Nenhuma dica de local disponível (tipo incorreto ou ausente?)",
	upgrade_available: "Uma atualização automatizada da configuração do cartão está disponível, visite o editor visual do cartão",
	webrtc_card_reported_error: "O cartão WebRTC relatou um erro",
	webrtc_card_waiting: "Aguardando o cartão WebRTC carregar ...",
	no_cameras: "Nenhuma câmera válida encontrada, você deve configurar pelo menos uma câmera",
	no_camera_id: "Não foi possível determinar o ID da câmera para a câmera a seguir, pode ser necessário definir o parâmetro 'id' manualmente",
	duplicate_camera_id: "Duplique o ID da câmera Frigate para a câmera a seguir, use o parâmetro 'id' para identificar exclusivamente as câmeras",
	could_not_render_elements: "Não foi possível renderizar os elementos da imagem",
	invalid_elements_config: "Configuração de elementos de imagem inválida",
	jsmpeg_no_sign: "Não foi possível recuperar ou assinar o caminho do websocket JSMPEG",
	jsmpeg_no_player: "Não foi possível iniciar o player JSMPEG",
	no_camera_name: "Não foi possível determinar o nome da câmera da Frigate, especifique 'camera_entity' ou 'camera_name' para a câmera a seguir",
	download_no_media: "Nenhuma mídia para download",
	download_no_event_id: "Não foi possível extrair o Frigate ID do evento da mídia",
	download_sign_failed: "Não foi possível assinar o URL de mídia para download"
};
var pt_br = {
	common: common,
	config: config,
	editor: editor,
	error: error
};

var pt_BR = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common,
    config: config,
    editor: editor,
    error: error,
    'default': pt_br
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages = {
    en: en$1,
    pt_BR: pt_BR,
};
function localize(string, search = '', replace = '') {
    var _a, _b;
    // Get the browser language.
    let lang = (_a = localStorage
        .getItem('selectedLanguage')) === null || _a === void 0 ? void 0 : _a.replace(/['"]+/g, '').replace('-', '_');
    // If that's not specified, try to find the Home Assistant language.
    if (!lang) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const hass = (_b = document.querySelector('home-assistant')) === null || _b === void 0 ? void 0 : _b.hass;
        lang = hass.selectedLanguage || hass.language;
    }
    // Default to English is there's still no language setting.
    lang = lang || 'en';
    let translated;
    try {
        translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
    }
    catch (e) {
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    }
    if (translated === undefined) {
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    }
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}

const MEDIA_INFO_HEIGHT_CUTOFF = 50;
const MEDIA_INFO_WIDTH_CUTOFF = MEDIA_INFO_HEIGHT_CUTOFF;
/**
 * Get the keys that didn't parse from a ZodError.
 * @param error The zoderror to extract the keys from.
 * @returns An array of error keys.
 */
function getParseErrorKeys(error) {
    const errors = error.format();
    return Object.keys(errors).filter((v) => !v.startsWith('_'));
}
/**
 * Make a HomeAssistant websocket request. May throw.
 * @param hass The HomeAssistant object to send the request with.
 * @param schema The expected Zod schema of the response.
 * @param request The request to make.
 * @returns The parsed valid response or null on malformed.
 */
async function homeAssistantWSRequest(hass, schema, request) {
    const response = await hass.callWS(request);
    if (!response) {
        const error_message = `${localize('error.empty_response')}: ${JSON.stringify(request)}`;
        console.warn(error_message);
        throw new Error(error_message);
    }
    const parseResult = schema.safeParse(response);
    if (!parseResult.success) {
        const keys = getParseErrorKeys(parseResult.error);
        const error_message = `${localize('error.invalid_response')}: ${JSON.stringify(request)}. ` +
            localize('error.invalid_keys') +
            `: '${keys}'`;
        console.warn(error_message);
        throw new Error(error_message);
    }
    return parseResult.data;
}
/**
 * Request that HA sign a path. May throw.
 * @param hass The HomeAssistant object used to request the signature.
 * @param path The path to sign.
 * @param expires An optional number of seconds to sign the path for.
 * @returns The signed URL, or null if the response was malformed.
 */
async function homeAssistantSignPath(hass, path, expires) {
    const request = {
        type: 'auth/sign_path',
        path: path,
        expires: expires,
    };
    const response = await homeAssistantWSRequest(hass, signedPathSchema, request);
    if (!response) {
        return null;
    }
    return hass.hassUrl(response.path);
}
/**
 * Dispatch a Frigate Card event.
 * @param element The element to send the event.
 * @param name The name of the Frigate card event to send.
 * @param detail An optional detail object to attach.
 */
function dispatchFrigateCardEvent(element, name, detail) {
    element.dispatchEvent(new CustomEvent(`frigate-card:${name}`, {
        bubbles: true,
        composed: true,
        detail: detail,
    }));
}
/**
 * Create a MediaShowInfo object.
 * @param source An event or HTMLElement that should be used as a source.
 * @returns A new MediaShowInfo object or null if one could not be created.
 */
function createMediaShowInfo(source) {
    let target;
    if (source instanceof Event) {
        target = source.composedPath()[0];
    }
    else {
        target = source;
    }
    if (target instanceof HTMLImageElement) {
        return {
            width: target.naturalWidth,
            height: target.naturalHeight,
        };
    }
    else if (target instanceof HTMLVideoElement) {
        return {
            width: target.videoWidth,
            height: target.videoHeight,
        };
    }
    else if (target instanceof HTMLCanvasElement) {
        return {
            width: target.width,
            height: target.height,
        };
    }
    return null;
}
/**
 * Dispatch a Frigate card media show event.
 * @param element The element to send the event.
 * @param source An event or HTMLElement that should be used as a source.
 */
function dispatchMediaShowEvent(element, source) {
    const mediaShowInfo = createMediaShowInfo(source);
    if (mediaShowInfo) {
        dispatchExistingMediaShowInfoAsEvent(element, mediaShowInfo);
    }
}
/**
 * Dispatch a pre-existing MediaShowInfo object as an event.
 * @param element The element to send the event.
 * @param mediaShowInfo The MediaShowInfo object to send.
 */
function dispatchExistingMediaShowInfoAsEvent(element, mediaShowInfo) {
    dispatchFrigateCardEvent(element, 'media-show', mediaShowInfo);
}
/**
 * Dispatch an event with a message to show to the user.
 * @param element The element to send the event.
 * @param message The message to show.
 * @param icon An optional icon to attach to the message.
 */
function dispatchMessageEvent(element, message, icon, context) {
    dispatchFrigateCardEvent(element, 'message', {
        message: message,
        type: 'info',
        icon: icon,
        context: context,
    });
}
/**
 * Dispatch an event with an error message to show to the user.
 * @param element The element to send the event.
 * @param message The message to show.
 */
function dispatchErrorMessageEvent(element, message, context) {
    dispatchFrigateCardEvent(element, 'message', {
        message: message,
        type: 'error',
        context: context,
    });
}
/**
 * Determine whether the card should be updated based on Home Assistant changes.
 * @param newHass The new HA object.
 * @param oldHass The old HA object.
 * @param entities The entities to examine for changes.
 * @returns A boolean indicating whether or not to allow an update.
 */
function shouldUpdateBasedOnHass(newHass, oldHass, entities) {
    if (!newHass || !entities || !entities.length) {
        return false;
    }
    if (!oldHass) {
        return true;
    }
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity && oldHass.states[entity] !== newHass.states[entity]) {
            return true;
        }
    }
    return false;
}
/**
 * Determine if a MediaShowInfo object is valid/acceptable.
 * @param info The MediaShowInfo object.
 * @returns True if the object is valid, false otherwise.
 */
function isValidMediaShowInfo(info) {
    return (info.height >= MEDIA_INFO_HEIGHT_CUTOFF && info.width >= MEDIA_INFO_WIDTH_CUTOFF);
}
/**
 * Convert a generic Action to a FrigateCardCustomAction if it parses correctly.
 * @param action The generic action configuration.
 * @returns A FrigateCardCustomAction or null if it cannot be converted.
 */
function convertActionToFrigateCardCustomAction(action) {
    if (!action) {
        return null;
    }
    // Parse a custom event as other things could generate ll-custom events that
    // are not related to Frigate Card.
    const parseResult = frigateCardCustomActionSchema.safeParse(action);
    return parseResult.success ? parseResult.data : null;
}
/**
 * Create a Frigate card custom action.
 * @param action The Frigate card action string (e.g. 'fullscreen')
 * @returns A FrigateCardCustomAction for that action string.
 */
function createFrigateCardCustomAction(action, camera) {
    if (action == 'camera_select') {
        if (!camera) {
            return undefined;
        }
        return {
            action: 'fire-dom-event',
            frigate_card_action: action,
            camera: camera,
        };
    }
    return {
        action: 'fire-dom-event',
        frigate_card_action: action,
    };
}
/**
 * Get an action configuration given a config and an interaction (e.g. 'tap').
 * @param interaction The interaction: `tap`, `hold` or `double_tap`
 * @param config The configuration containing multiple actions.
 * @returns The relevant action configuration or null if none found.
 */
function getActionConfigGivenAction(interaction, config) {
    if (!interaction || !config) {
        return undefined;
    }
    if (interaction == 'tap' && config.tap_action) {
        return config.tap_action;
    }
    else if (interaction == 'hold' && config.hold_action) {
        return config.hold_action;
    }
    else if (interaction == 'double_tap' && config.double_tap_action) {
        return config.double_tap_action;
    }
    else if (interaction == 'end_tap' && config.end_tap_action) {
        return config.end_tap_action;
    }
    else if (interaction == 'start_tap' && config.start_tap_action) {
        return config.start_tap_action;
    }
    return undefined;
}
/**
 * Calculate a style brightness from a hass state.
 * Inspired by https://github.com/home-assistant/frontend/blob/7d5b5663123bb16d1da0c5bac3f2fc26d5f69ae8/src/panels/lovelace/cards/hui-button-card.ts#L296
 * @param state The hass state object.
 * @returns A CSS brightness string.
 */
function computeBrightnessFromState(state) {
    if (state.state === 'off' || !state.attributes.brightness) {
        return '';
    }
    const brightness = state.attributes.brightness;
    return `brightness(${(brightness + 245) / 5}%)`;
}
/**
 * Calculate a style color from a hass state.
 * Inspired by https://github.com/home-assistant/frontend/blob/7d5b5663123bb16d1da0c5bac3f2fc26d5f69ae8/src/panels/lovelace/cards/hui-button-card.ts#L304
 * @param state The hass state object.
 * @returns A CSS color string.
 */
function computeColorFromState(state) {
    if (state.state === 'off') {
        return '';
    }
    return state.attributes.rgb_color
        ? `rgb(${state.attributes.rgb_color.join(',')})`
        : '';
}
/**
 * Get the style of emphasized menu items.
 * @returns A StyleInfo.
 */
function computeStyle(state) {
    return {
        color: computeColorFromState(state),
        filter: computeBrightnessFromState(state),
    };
}
/**
 * Determine the string state of a given stateObj.
 * From: https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_active_state.ts
 * @param stateObj The HassEntity object from `hass.states`.
 * @returns A string state, e.g. 'on'.
 */
const computeActiveState = (stateObj) => {
    const domain = stateObj.entity_id.split('.')[0];
    let state = stateObj.state;
    if (domain === 'climate') {
        state = stateObj.attributes.hvac_action;
    }
    return state;
};
/**
 * Use Home Assistant state to refresh state parameters for an item to be rendered.
 * @param hass Home Assistant object.
 * @param params A StateParameters object to modify in place.
 * @returns A StateParameters object updated based on HASS state.
 */
function refreshDynamicStateParameters(hass, params) {
    var _a, _b, _c;
    if (!params.entity) {
        return params;
    }
    const state = hass.states[params.entity];
    if (!!state && !!params.state_color) {
        params.style = Object.assign(Object.assign({}, computeStyle(state)), params.style);
    }
    params.title = (_a = params.title) !== null && _a !== void 0 ? _a : (((_b = state === null || state === void 0 ? void 0 : state.attributes) === null || _b === void 0 ? void 0 : _b.friendly_name) || params.entity);
    params.icon = (_c = params.icon) !== null && _c !== void 0 ? _c : Se(state);
    const domain = state ? L(state) : undefined;
    params.data_domain =
        params.state_color || (domain === 'light' && params.state_color !== false)
            ? domain
            : undefined;
    if (state) {
        params.data_state = computeActiveState(state);
    }
    return params;
}
/**
 * Prettify a Frigate name by converting '_' to spaces and capitalizing words.
 * @param input The input Frigate (camera/label/zone) name.
 * @returns A prettified name.
 */
function prettifyFrigateName(input) {
    if (!input) {
        return undefined;
    }
    const words = input.split(/[_\s]+/);
    return words
        .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    })
        .join(' ');
}
/**
 * Get the title of an entity.
 * @param entity The entity id.
 * @param hass The Home Assistant object.
 * @returns The title or undefined.
 */
function getEntityTitle(hass, entity) {
    var _a, _b;
    return entity ? (_b = (_a = hass === null || hass === void 0 ? void 0 : hass.states[entity]) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.friendly_name : undefined;
}
/**
 * Get the icon of an entity.
 * @param entity The entity id.
 * @param hass The Home Assistant object.
 * @returns The icon or undefined.
 */
function getEntityIcon(hass, entity) {
    return hass && entity ? Se(hass.states[entity]) : undefined;
}
/**
 * Get a camera text title.
 * @param hass The Home Assistant object.
 * @param config The camera config.
 * @returns A title string.
 */
function getCameraTitle(hass, config) {
    return ((config === null || config === void 0 ? void 0 : config.title) ||
        ((config === null || config === void 0 ? void 0 : config.camera_entity) ? getEntityTitle(hass, config.camera_entity) : '') ||
        ((config === null || config === void 0 ? void 0 : config.camera_name) ? prettifyFrigateName(config.camera_name) : '') ||
        '');
}
/**
 * Get a camera icon.
 * @param hass The Home Assistant object.
 * @param config The camera config.
 * @returns An icon string.
 */
function getCameraIcon(hass, config) {
    return (config === null || config === void 0 ? void 0 : config.icon) || getEntityIcon(hass, config === null || config === void 0 ? void 0 : config.camera_entity) || 'mdi:video';
}
/**
 * Move an element within an array.
 * @param target Target array.
 * @param from From index.
 * @param to To index.
 */
function arrayMove(target, from, to) {
    const element = target[from];
    target.splice(from, 1);
    target.splice(to, 0, element);
}
/**
 * Determine if the contents of the n(ew) and o(ld) values have changed. For use
 * in lit web components that may have a value that changes address but not
 * contents -- and for which a re-render is expensive/jarring.
 * @param n The new value.
 * @param o The old value.
 * @returns `true` is the contents have changed.
 */
function contentsChanged(n, o) {
    return !isEqual(n, o);
}
/**
 * Frigate card custom version of handleAction
 * (https://github.com/custom-cards/custom-card-helpers/blob/master/src/handle-action.ts)
 * that handles the custom action events the card supports.
 * @param node The node that fired the event.
 * @param hass The Home Assistant object.
 * @param config The multi-action configuration.
 * @param action The action string (e.g. 'hold')
 * @returns Whether or not an action was executed.
 */
const frigateCardHandleAction = (node, hass, config, action) => {
    return frigateCardHandleActionConfig(node, hass, config, action, getActionConfigGivenAction(action, config));
};
/**
 * Handle an ActionConfig or array of ActionConfigs.
 * @param node The node that fired the event.
 * @param hass The Home Assistant object.
 * @param actionConfig A single action config, array of action configs or
 * undefined for the default action config for 'tap'.
 * @param action The action string (e.g. 'hold')
 * @returns Whether or not an action was executed.
 */
const frigateCardHandleActionConfig = (node, hass, config, action, actionConfig) => {
    if (actionConfig || action == 'tap') {
        // Only allow a tap action to use a default non-config (the more-info config).
        if (Array.isArray(actionConfig)) {
            actionConfig.forEach((action) => pe(node, hass, config, action));
        }
        else {
            pe(node, hass, config, actionConfig);
        }
        return true;
    }
    return false;
};
/**
 * Determine if an action config has a real action. A modified version of
 * custom-card-helpers hasAction to also work with arrays of action configs.
 * @param config The action config in question.
 * @returns `true` if there's a real action defined, `false` otherwise.
 */
const frigateCardHasAction = (config) => {
    if (Array.isArray(config)) {
        return !!config.find((item) => ve(item));
    }
    return ve(config);
};
/**
 * Stop an event from activating card wide actions.
 */
const stopEventFromActivatingCardWideActions = (ev) => {
    ev.stopPropagation();
};

class ActionHandler extends HTMLElement {
    constructor() {
        super(...arguments);
        this.holdTime = 400;
        this.held = false;
    }
    connectedCallback() {
        [
            'touchcancel',
            'mouseout',
            'mouseup',
            'touchmove',
            'mousewheel',
            'wheel',
            'scroll',
        ].forEach((ev) => {
            document.addEventListener(ev, () => {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = undefined;
                }
            }, { passive: true });
        });
    }
    bind(element, options) {
        if (element.actionHandlerOptions) {
            // Reset the options on an existing actionHandler.
            element.actionHandlerOptions = options;
            return;
        }
        element.actionHandlerOptions = options;
        element.addEventListener('contextmenu', (ev) => {
            const e = ev || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        });
        const start = () => {
            const options = element.actionHandlerOptions;
            if (options === null || options === void 0 ? void 0 : options.hasHold) {
                this.held = false;
                this.timer = window.setTimeout(() => {
                    this.held = true;
                }, this.holdTime);
            }
            ne(element, 'action', { action: 'start_tap' });
        };
        const end = (ev) => {
            const options = element.actionHandlerOptions;
            if (!(options === null || options === void 0 ? void 0 : options.allowPropagation)) {
                // This will ensure only 1 actionHandler is invoked for a given interaction.
                stopEventFromActivatingCardWideActions(ev);
            }
            if (['touchend', 'touchcancel'].includes(ev.type) &&
                // This action handler by default relies on synthetic click events for
                // touch devices, in order to ensure that embedded cards (e.g. WebRTC)
                // can use stock click handlers. The exception is for hold events.
                !((options === null || options === void 0 ? void 0 : options.hasHold) && this.held)) {
                return;
            }
            if (options === null || options === void 0 ? void 0 : options.hasHold) {
                clearTimeout(this.timer);
                this.timer = undefined;
            }
            ne(element, 'action', { action: 'end_tap' });
            if ((options === null || options === void 0 ? void 0 : options.hasHold) && this.held) {
                ne(element, 'action', { action: 'hold' });
            }
            else if (options === null || options === void 0 ? void 0 : options.hasDoubleClick) {
                if ((ev.type === 'click' && ev.detail < 2) ||
                    !this.dblClickTimeout) {
                    this.dblClickTimeout = window.setTimeout(() => {
                        this.dblClickTimeout = undefined;
                        ne(element, 'action', { action: 'tap' });
                    }, 250);
                }
                else {
                    clearTimeout(this.dblClickTimeout);
                    this.dblClickTimeout = undefined;
                    ne(element, 'action', { action: 'double_tap' });
                }
            }
            else {
                ne(element, 'action', { action: 'tap' });
            }
        };
        const handleEnter = (ev) => {
            if (ev.keyCode !== 13) {
                return;
            }
            end(ev);
        };
        element.addEventListener('touchstart', start, { passive: true });
        element.addEventListener('touchend', end);
        element.addEventListener('touchcancel', end);
        element.addEventListener('mousedown', start, { passive: true });
        element.addEventListener('click', end);
        element.addEventListener('keyup', handleEnter);
    }
}
customElements.define('action-handler-frigate-card', ActionHandler);
const getActionHandler = () => {
    const body = document.body;
    if (body.querySelector('action-handler-frigate-card')) {
        return body.querySelector('action-handler-frigate-card');
    }
    const actionhandler = document.createElement('action-handler-frigate-card');
    body.appendChild(actionhandler);
    return actionhandler;
};
const actionHandlerBind = (element, options) => {
    const actionhandler = getActionHandler();
    if (!actionhandler) {
        return;
    }
    actionhandler.bind(element, options);
};
const actionHandler = e$2(class extends i$2 {
    update(part, [options]) {
        actionHandlerBind(part.element, options);
        return b;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    render(_options) { }
});

var css$i = "ha-icon-button.button {\n  color: var(--secondary-color, white);\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n  opacity: 0.9;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nha-icon[data-domain=alert][data-state=on],\nha-icon[data-domain=automation][data-state=on],\nha-icon[data-domain=binary_sensor][data-state=on],\nha-icon[data-domain=calendar][data-state=on],\nha-icon[data-domain=camera][data-state=streaming],\nha-icon[data-domain=cover][data-state=open],\nha-icon[data-domain=fan][data-state=on],\nha-icon[data-domain=humidifier][data-state=on],\nha-icon[data-domain=light][data-state=on],\nha-icon[data-domain=input_boolean][data-state=on],\nha-icon[data-domain=lock][data-state=unlocked],\nha-icon[data-domain=media_player][data-state=on],\nha-icon[data-domain=media_player][data-state=paused],\nha-icon[data-domain=media_player][data-state=playing],\nha-icon[data-domain=script][data-state=on],\nha-icon[data-domain=sun][data-state=above_horizon],\nha-icon[data-domain=switch][data-state=on],\nha-icon[data-domain=timer][data-state=active],\nha-icon[data-domain=vacuum][data-state=cleaning],\nha-icon[data-domain=group][data-state=on],\nha-icon[data-domain=group][data-state=home],\nha-icon[data-domain=group][data-state=open],\nha-icon[data-domain=group][data-state=locked],\nha-icon[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=pending],\nha-icon[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=plant][data-state=problem],\nha-icon[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\nha-icon-button[data-domain=alert][data-state=on],\nha-icon-button[data-domain=automation][data-state=on],\nha-icon-button[data-domain=binary_sensor][data-state=on],\nha-icon-button[data-domain=calendar][data-state=on],\nha-icon-button[data-domain=camera][data-state=streaming],\nha-icon-button[data-domain=cover][data-state=open],\nha-icon-button[data-domain=fan][data-state=on],\nha-icon-button[data-domain=humidifier][data-state=on],\nha-icon-button[data-domain=light][data-state=on],\nha-icon-button[data-domain=input_boolean][data-state=on],\nha-icon-button[data-domain=lock][data-state=unlocked],\nha-icon-button[data-domain=media_player][data-state=on],\nha-icon-button[data-domain=media_player][data-state=paused],\nha-icon-button[data-domain=media_player][data-state=playing],\nha-icon-button[data-domain=script][data-state=on],\nha-icon-button[data-domain=sun][data-state=above_horizon],\nha-icon-button[data-domain=switch][data-state=on],\nha-icon-button[data-domain=timer][data-state=active],\nha-icon-button[data-domain=vacuum][data-state=cleaning],\nha-icon-button[data-domain=group][data-state=on],\nha-icon-button[data-domain=group][data-state=home],\nha-icon-button[data-domain=group][data-state=open],\nha-icon-button[data-domain=group][data-state=locked],\nha-icon-button[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon-button[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon-button[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon-button[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon-button[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=pending],\nha-icon-button[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=plant][data-state=problem],\nha-icon-button[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon-button[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\n:host {\n  pointer-events: auto;\n}\n\nmwc-list-item {\n  z-index: 20;\n}";

let FrigateCardSubmenu = class FrigateCardSubmenu extends s$2 {
    _renderItem(item) {
        if (!this.hass) {
            return;
        }
        const stateParameters = refreshDynamicStateParameters(this.hass, Object.assign({}, item));
        return $ `
      <mwc-list-item
        style="${i$1(stateParameters.style || {})}"
        graphic="icon"
        ?selected=${item.selected}
        ?activated=${item.selected}
        aria-label="${stateParameters.title || ''}"
        @action=${(ev) => {
            // Attach the action config so ascendants have access to it.
            ev.detail.config = item;
        }}
        .actionHandler=${actionHandler({
            hasHold: frigateCardHasAction(item.hold_action),
            hasDoubleClick: frigateCardHasAction(item.double_tap_action),
        })}
      >
        ${stateParameters.title || ''}
        ${stateParameters.icon
            ? $ ` <ha-icon
              data-domain=${l(stateParameters.data_domain)}
              data-state=${l(stateParameters.data_state)}
              style="${i$1(stateParameters.style || {})}"
              slot="graphic"
              icon="${stateParameters.icon}"
            >
            </ha-icon>`
            : ``}
      </mwc-list-item>
    `;
    }
    render() {
        if (!this.submenu) {
            return $ ``;
        }
        return $ `
      <ha-button-menu
        corner=${this.corner || 'BOTTOM_LEFT'}
        @closed=${
        // Prevent the submenu closing from closing anything upstream (e.g.
        // selecting a submenu in the editor dialog should not close the
        // editor, see https://github.com/dermotduffy/frigate-hass-card/issues/377).
        (ev) => ev.stopPropagation()}
        @click=${(ev) => stopEventFromActivatingCardWideActions(ev)}
      >
        <ha-icon-button
          style="${i$1(this.submenu.style || {})}"
          class="button"
          slot="trigger"
          .label=${this.submenu.title || ''}
          .actionHandler=${actionHandler({
            // Need to allow event to propagate upwards, as it's caught by the
            // <ha-button-menu> trigger slot to open/close the menu. Further
            // propagation is forbidden by the @click handler on
            // <ha-button-menu>.
            allowPropagation: true,
            hasHold: frigateCardHasAction(this.submenu.hold_action),
            hasDoubleClick: frigateCardHasAction(this.submenu.double_tap_action),
        })}
        >
          <ha-icon icon="${this.submenu.icon}"></ha-icon>
        </ha-icon-button>
        ${this.submenu.items.map(this._renderItem.bind(this))}
      </ha-button-menu>
    `;
    }
    static get styles() {
        return o$7(css$i);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardSubmenu.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardSubmenu.prototype, "submenu", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardSubmenu.prototype, "corner", void 0);
FrigateCardSubmenu = __decorate([
    n$4('frigate-card-submenu')
], FrigateCardSubmenu);

var css$h = "ha-icon-button.button {\n  color: var(--secondary-color, white);\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n  opacity: 0.9;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nha-icon[data-domain=alert][data-state=on],\nha-icon[data-domain=automation][data-state=on],\nha-icon[data-domain=binary_sensor][data-state=on],\nha-icon[data-domain=calendar][data-state=on],\nha-icon[data-domain=camera][data-state=streaming],\nha-icon[data-domain=cover][data-state=open],\nha-icon[data-domain=fan][data-state=on],\nha-icon[data-domain=humidifier][data-state=on],\nha-icon[data-domain=light][data-state=on],\nha-icon[data-domain=input_boolean][data-state=on],\nha-icon[data-domain=lock][data-state=unlocked],\nha-icon[data-domain=media_player][data-state=on],\nha-icon[data-domain=media_player][data-state=paused],\nha-icon[data-domain=media_player][data-state=playing],\nha-icon[data-domain=script][data-state=on],\nha-icon[data-domain=sun][data-state=above_horizon],\nha-icon[data-domain=switch][data-state=on],\nha-icon[data-domain=timer][data-state=active],\nha-icon[data-domain=vacuum][data-state=cleaning],\nha-icon[data-domain=group][data-state=on],\nha-icon[data-domain=group][data-state=home],\nha-icon[data-domain=group][data-state=open],\nha-icon[data-domain=group][data-state=locked],\nha-icon[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=pending],\nha-icon[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=plant][data-state=problem],\nha-icon[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\nha-icon-button[data-domain=alert][data-state=on],\nha-icon-button[data-domain=automation][data-state=on],\nha-icon-button[data-domain=binary_sensor][data-state=on],\nha-icon-button[data-domain=calendar][data-state=on],\nha-icon-button[data-domain=camera][data-state=streaming],\nha-icon-button[data-domain=cover][data-state=open],\nha-icon-button[data-domain=fan][data-state=on],\nha-icon-button[data-domain=humidifier][data-state=on],\nha-icon-button[data-domain=light][data-state=on],\nha-icon-button[data-domain=input_boolean][data-state=on],\nha-icon-button[data-domain=lock][data-state=unlocked],\nha-icon-button[data-domain=media_player][data-state=on],\nha-icon-button[data-domain=media_player][data-state=paused],\nha-icon-button[data-domain=media_player][data-state=playing],\nha-icon-button[data-domain=script][data-state=on],\nha-icon-button[data-domain=sun][data-state=above_horizon],\nha-icon-button[data-domain=switch][data-state=on],\nha-icon-button[data-domain=timer][data-state=active],\nha-icon-button[data-domain=vacuum][data-state=cleaning],\nha-icon-button[data-domain=group][data-state=on],\nha-icon-button[data-domain=group][data-state=home],\nha-icon-button[data-domain=group][data-state=open],\nha-icon-button[data-domain=group][data-state=locked],\nha-icon-button[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon-button[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon-button[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon-button[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon-button[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=pending],\nha-icon-button[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=plant][data-state=problem],\nha-icon-button[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon-button[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\n:host {\n  --frigate-card-menu-button-size: 40px;\n  --mdc-icon-button-size: var(--frigate-card-menu-button-size);\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n  pointer-events: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n:host([data-mode=above]), :host([data-mode=below]) {\n  width: 100%;\n  background: var(--secondary-background-color);\n}\n\n:host([data-mode=above]) {\n  border-top-left-radius: var(--ha-card-border-radius, 4px);\n  border-top-right-radius: var(--ha-card-border-radius, 4px);\n}\n\n:host([data-mode=below]) {\n  border-bottom-left-radius: var(--ha-card-border-radius, 4px);\n  border-bottom-right-radius: var(--ha-card-border-radius, 4px);\n}\n\n:host([data-mode$=-left]) {\n  left: 0px;\n  top: 0px;\n  writing-mode: vertical-lr;\n}\n\n:host([data-mode$=-right]) {\n  right: 0px;\n  top: 0px;\n  writing-mode: vertical-rl;\n}\n\n:host([data-mode$=-top]) {\n  left: 0px;\n  top: 0px;\n}\n\n:host([data-mode$=-bottom]) {\n  left: 0px;\n  bottom: 0px;\n  flex-wrap: wrap-reverse;\n}\n\n:host([data-mode^=overlay-]), :host([data-mode^=hover-]), :host([data-mode^=hidden-]) {\n  position: absolute;\n  overflow: hidden;\n  width: calc(var(--frigate-card-menu-button-size) + 6px);\n  height: calc(var(--frigate-card-menu-button-size) + 6px);\n}\n\n:host([data-mode=overlay-top]),\n:host([data-mode=overlay-bottom]),\n:host([data-mode=hover-top]),\n:host([data-mode=hover-bottom]),\n:host([data-mode=hidden-top][expanded]),\n:host([data-mode=hidden-bottom][expanded]) {\n  width: 100%;\n  height: auto;\n  overflow: visible;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n}\n\n:host([data-mode=overlay-left]),\n:host([data-mode=overlay-right]),\n:host([data-mode=hover-left]),\n:host([data-mode=hover-right]),\n:host([data-mode=hidden-left][expanded]),\n:host([data-mode=hidden-right][expanded]) {\n  height: 100%;\n  width: auto;\n  overflow: visible;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n}\n\n:host([data-mode=overlay-left]) > *,\n:host([data-mode=hover-left]) > *,\n:host([data-mode=hidden-left]) > *,\n:host([data-mode=overlay-right]) > *,\n:host([data-mode=hover-right]) > *,\n:host([data-mode=hidden-right]) > * {\n  writing-mode: horizontal-tb;\n}";

var FrigateCardMenu_1;
const FRIGATE_BUTTON_MENU_ICON = 'frigate';
const FRIGATE_ICON_FILLED = 'm 4.8759466,22.743573 c 0.0866,0.69274 0.811811,1.16359 0.37885,1.27183 ' +
    '-0.43297,0.10824 -2.32718,-3.43665 -2.7601492,-4.95202 -0.4329602,-1.51538 ' +
    '-0.6764993,-3.22017 -0.5682593,-4.19434 0.1082301,-0.97417 5.7097085,-2.48955 ' +
    '5.7097085,-2.89545 0,-0.4059 -1.81304,-0.0271 -1.89422,-0.35178 -0.0812,-0.32472 ' +
    '1.36925,-0.12989 1.75892,-0.64945 0.60885,-0.81181 1.3800713,-0.6765 1.8671505,' +
    '-1.1094696 0.4870902,-0.4329599 1.0824089,-2.0836399 1.1906589,-2.7871996 0.108241,' +
    '-0.70357 -1.0824084,-1.51538 -1.4071389,-2.05658 -0.3247195,-0.54121 0.7035702,' +
    '-0.92005 3.1931099,-1.94834 2.48954,-1.02829 10.39114,-3.30134994 10.49938,' +
    '-3.03074994 0.10824,0.27061 -2.59779,1.40713994 -4.492,2.11069994 -1.89422,0.70357 ' +
    '-4.97909,2.05658 -4.97909,2.43542 0,0.37885 0.16236,0.67651 0.0541,1.54244 -0.10824,' +
    '0.86593 -0.12123,1.2702597 -0.32472,1.8400997 -0.1353,0.37884 -0.2706,1.27183 ' +
    '0,2.0836295 0.21648,0.64945 0.92005,1.13653 1.24477,1.24478 0.2706,0.018 1.01746,' +
    '0.0433 1.8401,0 1.02829,-0.0541 2.48954,0.0541 2.48954,0.32472 0,0.2706 -2.21894,' +
    '0.10824 -2.21894,0.48708 0,0.37885 2.27306,-0.0541 2.21894,0.32473 -0.0541,0.37884 ' +
    '-1.89422,0.21648 -2.86839,0.21648 -0.77933,0 -1.93031,-0.0361 -2.43542,-0.21648 ' +
    'l -0.10824,0.37884 c -0.18038,0 -0.55744,0.10824 -0.94711,0.10824 -0.48708,0 ' +
    '-0.51414,0.16236 -1.40713,0.16236 -0.892989,0 -0.622391,-0.0541 -1.4341894,-0.10824 ' +
    '-0.81181,-0.0541 -3.842561,2.27306 -4.383761,3.03075 -0.54121,0.75768 ' +
    '-0.21649,2.59778 -0.21649,3.43665 0,0.75379 -0.10824,2.43542 0,3.30135 z';
/**
 * A menu for the FrigateCard.
 */
let FrigateCardMenu = FrigateCardMenu_1 = class FrigateCardMenu extends s$2 {
    constructor() {
        super(...arguments);
        this.expanded = false;
        this.buttons = [];
    }
    set menuConfig(menuConfig) {
        this._menuConfig = menuConfig;
        if (menuConfig) {
            this.style.setProperty('--frigate-card-menu-button-size', menuConfig.button_size);
        }
        // Store the menu mode as an attribute (used for CSS attribute selectors).
        this.setAttribute('data-mode', menuConfig.mode);
    }
    /**
     * Determine if a given menu configuration is a hiding menu.
     * @param menuConfig The menu configuration.
     * @returns `true` if the menu is hiding, `false` otherwise.
     */
    static isHidingMenu(menuConfig) {
        var _a;
        return (_a = menuConfig === null || menuConfig === void 0 ? void 0 : menuConfig.mode.startsWith('hidden-')) !== null && _a !== void 0 ? _a : false;
    }
    /**
     * Toggle the menu. Has no action if menu is not hiding/expandable.
     */
    toggleMenu() {
        if (this._isHidingMenu()) {
            this.expanded = !this.expanded;
        }
    }
    /**
     * Determine if a given menu configuration is a hiding menu (internal version).
     * @returns `true` if the menu is hiding, `false` otherwise.
     */
    _isHidingMenu() {
        return FrigateCardMenu_1.isHidingMenu(this._menuConfig);
    }
    /**
     * Determine if a given action is intended to toggle the menu.
     * @param action The action to check.
     * @returns `true` if the action toggles the menu, `false` otherwise.
     */
    _isMenuToggleAction(action) {
        // Determine if this action is a Frigate card action, if so handle it
        // internally.
        if (!action) {
            return false;
        }
        const frigateCardAction = convertActionToFrigateCardCustomAction(action);
        return !!frigateCardAction && frigateCardAction.frigate_card_action == 'menu_toggle';
    }
    /**
     * Handle an action on a menu button.
     * @param ev The action event.
     * @param button The button configuration.
     */
    _actionHandler(ev, config) {
        if (!ev) {
            return;
        }
        // If the event itself contains a configuration then use that. This is
        // useful in cases where the registration of the event handler does not have
        // access to the actual desired configuration (e.g. action events generated
        // by a submenu).
        if (ev.detail.config) {
            config = ev.detail.config;
        }
        // These interactions should only be handled by the menu, as nothing
        // upstream has the user-provided configuration.
        ev.stopPropagation();
        const interaction = ev.detail.action;
        let action = getActionConfigGivenAction(interaction, config);
        if (!config || !interaction) {
            return;
        }
        let tookAction = false;
        let menuToggle = false;
        if (Array.isArray(action)) {
            // Case 1: An array of actions.
            // Strip out actions that toggle the menu.
            const actionCount = action.length;
            action = action.filter((item) => !this._isMenuToggleAction(item));
            if (action.length != actionCount) {
                menuToggle = true;
            }
            // If there are still actions left, handle them as usual.
            if (action.length) {
                tookAction = frigateCardHandleActionConfig(this, this.hass, config, interaction, action);
            }
        }
        else {
            // Case 2: Either a specific action, or no action at all (i.e. default
            // action for `tap`).
            if (this._isMenuToggleAction(action)) {
                menuToggle = true;
            }
            else {
                tookAction = frigateCardHandleActionConfig(this, this.hass, config, interaction, action);
            }
        }
        if (this._isHidingMenu()) {
            if (menuToggle) {
                this.expanded = !this.expanded;
            }
            else if (tookAction) {
                this.expanded = false;
            }
        }
    }
    /**
     * Render a button.
     * @param button The button configuration to render.
     * @returns A rendered template or void.
     */
    _renderButton(button) {
        if (button.type == 'custom:frigate-card-menu-submenu') {
            return $ ` <frigate-card-submenu
        .hass=${this.hass}
        .submenu=${button}
        @action=${this._actionHandler.bind(this)}
      >
      </frigate-card-submenu>`;
        }
        let stateParameters = Object.assign({}, button);
        const svgPath = stateParameters.icon === FRIGATE_BUTTON_MENU_ICON ? FRIGATE_ICON_FILLED : '';
        if (this.hass && button.type === 'custom:frigate-card-menu-state-icon') {
            stateParameters = refreshDynamicStateParameters(this.hass, stateParameters);
        }
        const hasHold = frigateCardHasAction(button.hold_action);
        const hasDoubleClick = frigateCardHasAction(button.double_tap_action);
        const classes = {
            button: true,
        };
        // =====================================================================================
        // For `data-domain` and `data-state`, see: See
        // https://github.com/home-assistant/frontend/blob/dev/src/components/entity/state-badge.ts#L54
        // =====================================================================================
        // Buttons are styled in a few ways (in order of precedence):
        //
        // - User provided style
        // - Color/Brightness styling for the `light` domain (calculated in
        //   `refreshDynamicStateParameters`)
        // - Static styling based on domain (`data-domain`) and state
        //   (`data-state`). This looks up a CSS style in `menu.scss`.
        return $ ` <ha-icon-button
      data-domain=${l(stateParameters.data_domain)}
      data-state=${l(stateParameters.data_state)}
      class="${o$2(classes)}"
      style="${i$1(stateParameters.style || {})}"
      .actionHandler=${actionHandler({
            hasHold: hasHold,
            hasDoubleClick: hasDoubleClick,
        })}
      .label=${stateParameters.title || ''}
      @action=${(ev) => this._actionHandler(ev, button)}
    >
      ${svgPath
            ? $ `<ha-svg-icon .path="${svgPath}"></ha-svg-icon>`
            : $ `<ha-icon
            icon="${stateParameters.icon || 'mdi:gesture-tap-button'}"
          ></ha-icon>`}
    </ha-icon-button>`;
    }
    /**
     * Render the menu.
     * @returns A rendered template or void.
     */
    render() {
        if (!this._menuConfig) {
            return;
        }
        const mode = this._menuConfig.mode;
        if (mode == 'none') {
            return;
        }
        // If the hidden menu isn't expanded, only show the Frigate button.
        const buttons = !mode.startsWith('hidden-') || this.expanded
            ? this.buttons
            : this.buttons.filter((button) => button.icon === FRIGATE_BUTTON_MENU_ICON);
        return $ ` ${buttons.map((button) => this._renderButton(button))} `;
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$h);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardMenu.prototype, "hass", void 0);
__decorate([
    t$3()
], FrigateCardMenu.prototype, "_menuConfig", void 0);
__decorate([
    e$3({ attribute: true, type: Boolean, reflect: true })
], FrigateCardMenu.prototype, "expanded", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardMenu.prototype, "buttons", void 0);
FrigateCardMenu = FrigateCardMenu_1 = __decorate([
    n$4('frigate-card-menu')
], FrigateCardMenu);

class View {
    constructor(params) {
        this.view = params === null || params === void 0 ? void 0 : params.view;
        this.camera = params === null || params === void 0 ? void 0 : params.camera;
        this.target = params === null || params === void 0 ? void 0 : params.target;
        this.childIndex = params === null || params === void 0 ? void 0 : params.childIndex;
        this.previous = params === null || params === void 0 ? void 0 : params.previous;
    }
    /**
     * Clone a view.
     */
    clone() {
        return new View({
            view: this.view,
            camera: this.camera,
            target: this.target,
            childIndex: this.childIndex,
            previous: this.previous
        });
    }
    /**
     * Evolve this view by changing parameters and returning a new view.
     * @param params Parameters to change.
     * @returns A new evolved view.
     */
    evolve(params) {
        var _a, _b, _c, _d, _e;
        return new View({
            view: (_a = params.view) !== null && _a !== void 0 ? _a : this.view,
            camera: (_b = params.camera) !== null && _b !== void 0 ? _b : this.camera,
            target: (_c = params.target) !== null && _c !== void 0 ? _c : this.target,
            childIndex: (_d = params.childIndex) !== null && _d !== void 0 ? _d : this.childIndex,
            previous: (_e = params.previous) !== null && _e !== void 0 ? _e : this.previous,
        });
    }
    /**
     * Determine if current view matches a named view.
     */
    is(name) {
        return this.view == name;
    }
    /**
     * Determine if a view is a gallery.
     */
    isGalleryView() {
        return this.view == 'clips' || this.view == 'snapshots';
    }
    /**
     * Determine if a view is of a piece of media (i.e. not the gallery).
     */
    isMediaView() {
        return !this.isGalleryView();
    }
    /**
     * Determine if a view is for the media viewer.
     */
    isViewerView() {
        return ['clip', 'snapshot'].includes(this.view);
    }
    /**
     * Determine if a view is related to a clip or clips.
     */
    isClipRelatedView() {
        return ['clip', 'clips'].includes(this.view);
    }
    /**
     * Determine if a view is related to a snapshot or snapshots.
     */
    isSnapshotRelatedView() {
        return ['snapshot', 'snapshots'].includes(this.view);
    }
    /**
     *  Get the media item that should be played.
     **/
    get media() {
        if (this.target) {
            if (this.target.children && this.childIndex !== undefined) {
                return this.target.children[this.childIndex];
            }
            return this.target;
        }
        return undefined;
    }
    /**
     * Dispatch an event to request a view change.
     * @param node The element dispatching the event.
     */
    dispatchChangeEvent(node) {
        dispatchFrigateCardEvent(node, 'change-view', this);
    }
}

var css$g = ":host {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n\ndiv.wrapper {\n  height: 100%;\n}\n\ndiv.message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 10%;\n  height: 100%;\n}\n\ndiv.message div.contents {\n  padding: 10px;\n  height: 100%;\n}\n\ndiv.message div.icon {\n  padding: 10px;\n}\n\n.vertical {\n  flex-direction: column;\n}\n\n.message a {\n  color: var(--primary-text-color, white);\n  word-break: break-word;\n}\n\n.message pre {\n  margin-top: 20px;\n}";

let FrigateCardMessage = class FrigateCardMessage extends s$2 {
    constructor() {
        super(...arguments);
        this.message = '';
    }
    // Render the menu.
    render() {
        const icon = this.icon ? this.icon : 'mdi:information-outline';
        return $ `
      <div class="wrapper">
        <div class="message">
          <div class="icon">
            <ha-icon icon="${icon}"> </ha-icon>
          </div>
          <div class="contents">
            <span> ${this.message ? $ `${this.message}` : ''} </span>
            ${this.context ? $ `<pre>${JSON.stringify(this.context, null, 2)}</pre>` : ''}
          </div>
        </div>
      </div>`;
    }
    static get styles() {
        return o$7(css$g);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardMessage.prototype, "message", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardMessage.prototype, "context", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardMessage.prototype, "icon", void 0);
FrigateCardMessage = __decorate([
    n$4('frigate-card-message')
], FrigateCardMessage);
let FrigateCardErrorMessage = class FrigateCardErrorMessage extends s$2 {
    render() {
        if (!this.message) {
            return;
        }
        return $ ` <frigate-card-message
      .message=${$ ` ${this.message.message}.
        <a href="${TROUBLESHOOTING_URL}"> ${localize('error.troubleshooting')}</a>.`}
      .icon=${'mdi:alert-circle'}
      .context=${this.message.context}
    >
    </frigate-card-message>`;
    }
    static get styles() {
        return o$7(css$g);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardErrorMessage.prototype, "message", void 0);
FrigateCardErrorMessage = __decorate([
    n$4('frigate-card-error-message')
], FrigateCardErrorMessage);
let FrigateCardProgressIndicator = class FrigateCardProgressIndicator extends s$2 {
    constructor() {
        super(...arguments);
        this.message = '';
    }
    render() {
        return $ ` <div class="message vertical">
      <span>
        <ha-circular-progress active="true" size="large"> </ha-circular-progress>
      </span>
      ${this.message ? $ `<span>${this.message}</span>` : $ ``}
    </div>`;
    }
    static get styles() {
        return o$7(css$g);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardProgressIndicator.prototype, "message", void 0);
FrigateCardProgressIndicator = __decorate([
    n$4('frigate-card-progress-indicator')
], FrigateCardProgressIndicator);
function renderMessage(message) {
    if (message.type == 'error') {
        return $ ` <frigate-card-error-message
      .message=${message}
    ></frigate-card-error-message>`;
    }
    else if (message.type == 'info') {
        return $ ` <frigate-card-message
      .message=${message.message}
      .icon=${message.icon}
      .context=${message.context}
    ></frigate-card-message>`;
    }
    return $ ``;
}
function renderProgressIndicator(message) {
    return $ `
    <frigate-card-progress-indicator .message=${message || ''}>
    </frigate-card-progress-indicator>
  `;
}

/**
 * Set a configuration value.
 * @param obj The configuration.
 * @param key The key to the property to set.
 * @param value The value to set.
 */
const setConfigValue = (obj, keys, value) => {
    set(obj, keys, value);
};
/**
 * Get a configuration value.
 * @param obj The configuration.
 * @param key The key to the property to retrieve.
 * @returns The property or undefined if not found.
 */
const getConfigValue = (obj, keys, def) => {
    return get(obj, keys, def);
};
/**
 * Delete a configuration value.
 * @param obj The configuration.
 * @param key The key to the property to delete.
 */
const deleteConfigValue = (obj, key) => {
    let id = key;
    let targetObj = obj;
    if (key && key.split && key.includes('.')) {
        const keys = key.split('.');
        id = keys[keys.length - 1];
        targetObj = getConfigValue(obj, keys.slice(0, -1).join('.'));
    }
    if (targetObj && typeof targetObj === 'object') {
        delete targetObj[id];
    }
};
/**
 * Upgrade a configuration.
 * @param obj The configuration to upgrade.
 * @returns `true` if the configuration is modified.
 */
const upgradeConfig = function (obj) {
    let upgraded = false;
    for (let i = 0; i < UPGRADES.length; i++) {
        upgraded = UPGRADES[i](obj) || upgraded;
    }
    trimConfig(obj);
    return upgraded;
};
/**
 * Determine if a configuration is automatically upgradeable.
 * @param obj The configuration. It is not modified.
 * @returns `true` if the configuration is upgradeable.
 */
const isConfigUpgradeable = function (obj) {
    const newObj = JSON.parse(JSON.stringify(obj));
    return upgradeConfig(newObj);
};
/**
 * Remove empty sections from a configuration.
 * @param obj Configuration object.
 * @returns `true` if the configuration was modified.
 */
const trimConfig = function (obj) {
    const keys = Object.keys(obj);
    let modified = false;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] === 'object' && obj[key] != null) {
            modified || (modified = trimConfig(obj[key]));
            if (!Object.keys(obj[key]).length) {
                delete obj[key];
                modified = true;
            }
        }
    }
    return modified;
};
/**
 * Copy a configuration.
 * @param obj Configuration to copy.
 * @returns A new deeply-copied configuration.
 */
const copyConfig = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};
/**
 * Determines if a property is not an object.
 * @param value The value.
 * @returns `true` is the value is not an object.
 */
const isNotObject = function (value) {
    return typeof value !== 'object' ? value : undefined;
};
/**
 * Converts to a number or return undefined.
 * @param value The value.
 * @returns A number or undefined.
 */
const toNumberOrIgnore = function (value) {
    return isNaN(value) ? undefined : Number(value);
};
/**
 * Move a property from one location to another.
 * @param obj The configuration object in which the property resides.
 * @param oldPath The old property path.
 * @param newPath The new property path.
 * @param transform An optional transform for the value.
 * @returns `true` if the configuration was modified.
 */
const moveConfigValue = (obj, oldPath, newPath, transform) => {
    let value = getConfigValue(obj, oldPath);
    if (transform) {
        value = transform(value);
    }
    if (typeof value !== 'undefined') {
        deleteConfigValue(obj, oldPath);
        setConfigValue(obj, newPath, value);
        return true;
    }
    return false;
};
/**
 * Given an array path, return a true path.
 * @param path The array path (should have a '#').
 * @param index The numeric array index to use.
 * @returns The true config path.
 */
const getArrayConfigPath = (path, index) => {
    return path.replace('#', `[${index.toString()}]`);
};
/**
 * Upgrade by moving a property from one location to another.
 * @param oldPath The old property path.
 * @param newPath The new property path.
 * @param transform An optional transform for the value.
 * @returns `true` if the configuration was modified.
 */
const upgradeMoveTo = function (oldPath, newPath, transform) {
    return function (obj) {
        return moveConfigValue(obj, oldPath, newPath, transform);
    };
};
/**
 * Upgrade a property by changing it if it is present.
 * @param path The property path.
 * @param transform A callback that transforms the old value to the new value,
 * if undefined is returned the property is removed.
 * @returns `true` if the configuration was modified.
 */
const upgradeChangeIfPresent = function (path, transform) {
    return function (obj) {
        const oldValue = getConfigValue(obj, path);
        if (oldValue !== undefined) {
            const newValue = transform(oldValue);
            if (newValue === undefined) {
                deleteConfigValue(obj, path);
                return true;
            }
            else if (newValue !== oldValue) {
                setConfigValue(obj, path, newValue);
                return true;
            }
        }
        return false;
    };
};
/**
 * Upgrade by moving a property from one location to another, and moving a
 * property specified in a top-level overrides object.
 * @param oldPath The old property path.
 * @param newPath The new property path.
 * @param transform An optional transform for the value.
 * @returns A function that returns `true` if the configuration was modified.
 */
const upgradeMoveToWithOverrides = function (oldPath, newPath, transform) {
    return function (obj) {
        let modified = upgradeMoveTo(oldPath, newPath, transform)(obj);
        modified =
            upgradeArrayValue(CONF_OVERRIDES, upgradeMoveTo(oldPath, newPath, transform), (obj) => obj.overrides)(obj) || modified;
        return modified;
    };
};
/**
 * Given a path to an array, apply an upgrade to each object in the array.
 * @param arrayPath The path to the array to upgrade.
 * @param upgrade A function that applies an upgrade to an object.
 * @param getObject A optional function that takes an item in the array and
 * returns the object to modify within it.
 * @returns A function that returns `true` if the configuration was modified.
 */
const upgradeArrayValue = function (arrayPath, upgrade, getObject) {
    return function (obj) {
        let modified = false;
        const array = getConfigValue(obj, arrayPath);
        if (Array.isArray(array)) {
            array.forEach((item) => {
                const object = getObject ? getObject(item) : item;
                if (object && typeof object === 'object') {
                    modified = upgrade(object) || modified;
                }
            });
        }
        return modified;
    };
};
/**
 * Upgrade from a singular camera model to multiple.
 * @param key A string key.
 * @returns A safe key.
 */
const upgradeToMultipleCameras = () => {
    return function (obj) {
        let modified = false;
        const cameras = getConfigValue(obj, CONF_CAMERAS);
        // Only do an upgrade if the cameras section does not exist.
        if (cameras !== undefined) {
            return false;
        }
        const imports = {
            camera_entity: CONF_CAMERAS_ARRAY_CAMERA_ENTITY,
            'frigate.camera_name': CONF_CAMERAS_ARRAY_CAMERA_NAME,
            'frigate.client_id': CONF_CAMERAS_ARRAY_CLIENT_ID,
            'frigate.label': CONF_CAMERAS_ARRAY_LABEL,
            'frigate.url': CONF_CAMERAS_ARRAY_URL,
            'frigate.zone': CONF_CAMERAS_ARRAY_ZONE,
            'live.webrtc.entity': `cameras.#.webrtc.entity`,
            'live.webrtc.url': `cameras.#.webrtc.url`,
            'live.provider': CONF_CAMERAS_ARRAY_LIVE_PROVIDER,
        };
        Object.keys(imports).forEach((key) => {
            modified =
                moveConfigValue(obj, key, getArrayConfigPath(imports[key], 0)) || modified;
        });
        return modified;
    };
};
/**
 * Upgrade from a condition on the menu (to allow rendering) to a menu mode
 * override instead.
 * @param key A string key.
 * @returns A safe key.
 */
const upgradeMenuConditionToMenuOverride = () => {
    return function (obj) {
        const menuConditions = getConfigValue(obj, `${CONF_MENU}.conditions`);
        if (menuConditions === undefined) {
            return false;
        }
        const overrides = getConfigValue(obj, `${CONF_OVERRIDES}`) || [];
        setConfigValue(obj, `${CONF_OVERRIDES}.[${overrides.length}]`, {
            conditions: menuConditions,
            overrides: {
                menu: {
                    mode: 'none',
                },
            },
        });
        deleteConfigValue(obj, `${CONF_MENU}.conditions`);
        return true;
    };
};
const UPGRADES = [
    // v1.2.1 -> v2.0.0
    upgradeMoveTo('frigate_url', 'frigate.url'),
    upgradeMoveTo('frigate_client_id', 'frigate.client_id'),
    upgradeMoveTo('frigate_camera_name', 'frigate.camera_name'),
    upgradeMoveTo('label', 'frigate.label'),
    upgradeMoveTo('zone', 'frigate.zone'),
    upgradeMoveTo('view_default', CONF_VIEW_DEFAULT),
    upgradeMoveTo('view_timeout', 'view.timeout'),
    upgradeMoveTo('live_provider', 'live.provider'),
    upgradeMoveTo('live_preload', CONF_LIVE_PRELOAD),
    upgradeMoveTo('webrtc', 'live.webrtc'),
    upgradeMoveTo('autoplay_clip', 'event_viewer.autoplay_clip'),
    upgradeMoveTo('controls.nextprev', CONF_EVENT_VIEWER_CONTROLS_NEXT_PREVIOUS_STYLE),
    upgradeMoveTo('controls.nextprev_size', CONF_EVENT_VIEWER_CONTROLS_NEXT_PREVIOUS_SIZE),
    upgradeMoveTo('menu_mode', CONF_MENU_MODE),
    upgradeMoveTo('menu_buttons', 'menu.buttons'),
    upgradeMoveTo('menu_button_size', CONF_MENU_BUTTON_SIZE),
    upgradeMoveTo('image', 'image.src', isNotObject),
    // v2.0.0 -> v2.1.0
    upgradeMoveTo('update_entities', CONF_VIEW_UPDATE_ENTITIES),
    // v2.1.0 -> v3.0.0-rc.1
    upgradeToMultipleCameras(),
    upgradeMenuConditionToMenuOverride(),
    upgradeMoveTo('view.timeout', CONF_VIEW_TIMEOUT_SECONDS, toNumberOrIgnore),
    upgradeMoveTo('event_viewer.autoplay_clip', CONF_EVENT_VIEWER_AUTO_PLAY),
    // v3.0.0-rc.1 -> v3.0.0-rc.2
    upgradeArrayValue(CONF_CAMERAS, upgradeChangeIfPresent('live_provider', (val) => val === 'frigate' ? 'ha' : val === 'webrtc' ? 'webrtc-card' : val)),
    upgradeArrayValue(CONF_CAMERAS, upgradeMoveTo('webrtc', 'webrtc_card')),
    upgradeMoveToWithOverrides('live.webrtc', CONF_LIVE_WEBRTC_CARD),
    upgradeMoveToWithOverrides('image.src', CONF_IMAGE_URL),
];

var css$f = "ha-icon-button.button {\n  color: var(--secondary-color, white);\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n  opacity: 0.9;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nha-icon[data-domain=alert][data-state=on],\nha-icon[data-domain=automation][data-state=on],\nha-icon[data-domain=binary_sensor][data-state=on],\nha-icon[data-domain=calendar][data-state=on],\nha-icon[data-domain=camera][data-state=streaming],\nha-icon[data-domain=cover][data-state=open],\nha-icon[data-domain=fan][data-state=on],\nha-icon[data-domain=humidifier][data-state=on],\nha-icon[data-domain=light][data-state=on],\nha-icon[data-domain=input_boolean][data-state=on],\nha-icon[data-domain=lock][data-state=unlocked],\nha-icon[data-domain=media_player][data-state=on],\nha-icon[data-domain=media_player][data-state=paused],\nha-icon[data-domain=media_player][data-state=playing],\nha-icon[data-domain=script][data-state=on],\nha-icon[data-domain=sun][data-state=above_horizon],\nha-icon[data-domain=switch][data-state=on],\nha-icon[data-domain=timer][data-state=active],\nha-icon[data-domain=vacuum][data-state=cleaning],\nha-icon[data-domain=group][data-state=on],\nha-icon[data-domain=group][data-state=home],\nha-icon[data-domain=group][data-state=open],\nha-icon[data-domain=group][data-state=locked],\nha-icon[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=pending],\nha-icon[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=plant][data-state=problem],\nha-icon[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\nha-icon-button[data-domain=alert][data-state=on],\nha-icon-button[data-domain=automation][data-state=on],\nha-icon-button[data-domain=binary_sensor][data-state=on],\nha-icon-button[data-domain=calendar][data-state=on],\nha-icon-button[data-domain=camera][data-state=streaming],\nha-icon-button[data-domain=cover][data-state=open],\nha-icon-button[data-domain=fan][data-state=on],\nha-icon-button[data-domain=humidifier][data-state=on],\nha-icon-button[data-domain=light][data-state=on],\nha-icon-button[data-domain=input_boolean][data-state=on],\nha-icon-button[data-domain=lock][data-state=unlocked],\nha-icon-button[data-domain=media_player][data-state=on],\nha-icon-button[data-domain=media_player][data-state=paused],\nha-icon-button[data-domain=media_player][data-state=playing],\nha-icon-button[data-domain=script][data-state=on],\nha-icon-button[data-domain=sun][data-state=above_horizon],\nha-icon-button[data-domain=switch][data-state=on],\nha-icon-button[data-domain=timer][data-state=active],\nha-icon-button[data-domain=vacuum][data-state=cleaning],\nha-icon-button[data-domain=group][data-state=on],\nha-icon-button[data-domain=group][data-state=home],\nha-icon-button[data-domain=group][data-state=open],\nha-icon-button[data-domain=group][data-state=locked],\nha-icon-button[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon-button[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon-button[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon-button[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon-button[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=pending],\nha-icon-button[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=plant][data-state=problem],\nha-icon-button[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon-button[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\n.option {\n  padding: 4px 4px;\n  cursor: pointer;\n}\n\n.option.option-overrides .title {\n  color: var(--warning-color);\n}\n\n.row {\n  display: flex;\n  margin-bottom: -14px;\n  pointer-events: none;\n}\n\n.title {\n  padding-left: 16px;\n  margin-top: -6px;\n  pointer-events: none;\n}\n\n.secondary {\n  padding-left: 40px;\n  color: var(--secondary-text-color);\n  pointer-events: none;\n}\n\n.values {\n  padding: 10px;\n  background: var(--secondary-background-color);\n  display: grid;\n  margin-bottom: 10px;\n}\n\nha-formfield {\n  padding-bottom: 8px;\n}\n\ndiv.upgrade {\n  width: auto;\n  border: 1px dotted var(--primary-color);\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.upgrade span {\n  padding: 10px;\n}\n\n.camera-header {\n  display: flex;\n  margin-top: 4px;\n  cursor: pointer;\n}\n\n.camera-header * {\n  flex-basis: auto;\n  pointer-events: none;\n}\n\n.camera-header ha-icon {\n  padding-right: 10px;\n}\n\n.camera-header .new-camera {\n  font-style: italic;\n  color: var(--secondary-text-color, \"black\");\n}\n\n.cameras {\n  margin: 5px 5px 10px 20px;\n}\n\n.cameras .controls {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: 0px;\n  margin-bottom: 5px;\n}\n\n.cameras .controls ha-icon-button.button {\n  --mdc-icon-button-size: 32px;\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n}\n\nspan.info {\n  padding: 4px;\n}";

const options = {
    cameras: {
        icon: 'video',
        name: localize('editor.cameras'),
        secondary: localize('editor.cameras_secondary'),
        show: true,
    },
    view: {
        icon: 'eye',
        name: localize('editor.view'),
        secondary: localize('editor.view_secondary'),
        show: false,
    },
    menu: {
        icon: 'menu',
        name: localize('editor.menu'),
        secondary: localize('editor.menu_secondary'),
        show: false,
    },
    live: {
        icon: 'cctv',
        name: localize('editor.live'),
        secondary: localize('editor.live_secondary'),
        show: false,
    },
    event_viewer: {
        icon: 'filmstrip',
        name: localize('editor.event_viewer'),
        secondary: localize('editor.event_viewer_secondary'),
        show: false,
    },
    event_gallery: {
        icon: 'grid',
        name: localize('editor.event_gallery'),
        secondary: localize('editor.event_gallery_secondary'),
        show: false,
    },
    image: {
        icon: 'image',
        name: localize('editor.image'),
        secondary: localize('editor.image_secondary'),
        show: false,
    },
    dimensions: {
        icon: 'aspect-ratio',
        name: localize('editor.dimensions'),
        secondary: localize('editor.dimensions_secondary'),
        show: false,
    },
    overrides: {
        icon: 'file-replace',
        name: localize('editor.overrides'),
        secondary: localize('editor.overrides_secondary'),
        show: false,
    },
};
let FrigateCardEditor = class FrigateCardEditor extends s$2 {
    constructor() {
        super(...arguments);
        this._initialized = false;
        this._configUpgradeable = false;
        this._expandedCameraIndex = null;
        this._viewModes = [
            { value: '', label: '' },
            { value: 'live', label: localize('config.view.views.live') },
            { value: 'clips', label: localize('config.view.views.clips') },
            { value: 'snapshots', label: localize('config.view.views.snapshots') },
            { value: 'clip', label: localize('config.view.views.clip') },
            { value: 'snapshot', label: localize('config.view.views.snapshot') },
            { value: 'image', label: localize('config.view.views.image') },
        ];
        this._cameraSelectViewModes = [
            ...this._viewModes,
            { value: 'current', label: localize('config.view.views.current') },
        ];
        this._menuModes = [
            { value: '', label: '' },
            { value: 'none', label: localize('config.menu.modes.none') },
            { value: 'hidden-top', label: localize('config.menu.modes.hidden-top') },
            { value: 'hidden-left', label: localize('config.menu.modes.hidden-left') },
            { value: 'hidden-bottom', label: localize('config.menu.modes.hidden-bottom') },
            { value: 'hidden-right', label: localize('config.menu.modes.hidden-right') },
            { value: 'overlay-top', label: localize('config.menu.modes.overlay-top') },
            { value: 'overlay-left', label: localize('config.menu.modes.overlay-left') },
            { value: 'overlay-bottom', label: localize('config.menu.modes.overlay-bottom') },
            { value: 'overlay-right', label: localize('config.menu.modes.overlay-right') },
            { value: 'hover-top', label: localize('config.menu.modes.hover-top') },
            { value: 'hover-left', label: localize('config.menu.modes.hover-left') },
            { value: 'hover-bottom', label: localize('config.menu.modes.hover-bottom') },
            { value: 'hover-right', label: localize('config.menu.modes.hover-right') },
            { value: 'above', label: localize('config.menu.modes.above') },
            { value: 'below', label: localize('config.menu.modes.below') },
        ];
        this._eventViewerNextPreviousControlStyles = [
            { value: '', label: '' },
            {
                value: 'thumbnails',
                label: localize('config.event_viewer.controls.next_previous.styles.thumbnails'),
            },
            {
                value: 'chevrons',
                label: localize('config.event_viewer.controls.next_previous.styles.chevrons'),
            },
            {
                value: 'none',
                label: localize('config.event_viewer.controls.next_previous.styles.none'),
            },
        ];
        this._liveNextPreviousControlStyles = [
            { value: '', label: '' },
            {
                value: 'chevrons',
                label: localize('config.live.controls.next_previous.styles.chevrons'),
            },
            {
                value: 'icons',
                label: localize('config.live.controls.next_previous.styles.icons'),
            },
            { value: 'none', label: localize('config.live.controls.next_previous.styles.none') },
        ];
        this._aspectRatioModes = [
            { value: '', label: '' },
            {
                value: 'dynamic',
                label: localize('config.dimensions.aspect_ratio_modes.dynamic'),
            },
            { value: 'static', label: localize('config.dimensions.aspect_ratio_modes.static') },
            {
                value: 'unconstrained',
                label: localize('config.dimensions.aspect_ratio_modes.unconstrained'),
            },
        ];
        this._thumbnailModes = [
            { value: '', label: '' },
            {
                value: 'none',
                label: localize('config.event_viewer.controls.thumbnails.modes.none'),
            },
            {
                value: 'above',
                label: localize('config.event_viewer.controls.thumbnails.modes.above'),
            },
            {
                value: 'below',
                label: localize('config.event_viewer.controls.thumbnails.modes.below'),
            },
        ];
        this._thumbnailMedias = [
            { value: '', label: '' },
            { value: 'clips', label: localize('config.live.controls.thumbnails.medias.clips') },
            {
                value: 'snapshots',
                label: localize('config.live.controls.thumbnails.medias.snapshots'),
            },
        ];
        this._titleModes = [
            { value: '', label: '' },
            { value: 'none', label: localize('config.event_viewer.controls.title.modes.none') },
            {
                value: 'popup-top-left',
                label: localize('config.event_viewer.controls.title.modes.popup-top-left'),
            },
            {
                value: 'popup-top-right',
                label: localize('config.event_viewer.controls.title.modes.popup-top-right'),
            },
            {
                value: 'popup-bottom-left',
                label: localize('config.event_viewer.controls.title.modes.popup-bottom-left'),
            },
            {
                value: 'popup-bottom-right',
                label: localize('config.event_viewer.controls.title.modes.popup-bottom-right'),
            },
        ];
        this._transitionEffects = [
            { value: '', label: '' },
            { value: 'none', label: localize('config.event_viewer.transition_effects.none') },
            { value: 'slide', label: localize('config.event_viewer.transition_effects.slide') },
        ];
        this._imageModes = [
            { value: '', label: '' },
            { value: 'camera', label: localize('config.image.modes.camera') },
            { value: 'screensaver', label: localize('config.image.modes.screensaver') },
            { value: 'url', label: localize('config.image.modes.url') },
        ];
    }
    setConfig(config) {
        // Note: This does not use Zod to parse the configuration, so it may be
        // partially or completely invalid. It's more useful to have a partially
        // valid configuration here, to allow the user to fix the broken parts. As
        // such, RawFrigateCardConfig is used as the type.
        this._config = config;
        this._configUpgradeable = isConfigUpgradeable(config);
        this.loadCardHelpers();
    }
    shouldUpdate() {
        if (!this._initialized) {
            this._initialize();
        }
        return true;
    }
    _getEntities(domain) {
        if (!this.hass) {
            return [];
        }
        const entities = Object.keys(this.hass.states).filter((eid) => eid.substr(0, eid.indexOf('.')) === domain);
        entities.sort();
        // Add a blank entry to unset a selection.
        entities.unshift('');
        return entities;
    }
    /**
     * Render an option set header
     * @param optionSetName The name of the EditorOptionsSet.
     * @returns A rendered template.
     */
    _renderOptionSetHeader(optionSetName) {
        const optionSet = options[optionSetName];
        return $ `
      <div
        class="option option-${optionSetName}"
        @click=${this._toggleOptionHandler}
        .optionSetName=${optionSetName}
      >
        <div class="row">
          <ha-icon .icon=${`mdi:${optionSet.icon}`}></ha-icon>
          <div class="title">${optionSet.name}</div>
        </div>
        <div class="secondary">${optionSet.secondary}</div>
      </div>
    `;
    }
    /**
     * Get a localized help label for a given config path.
     * @param configPath The config path.
     * @returns A localized label.
     */
    _getLabel(configPath) {
        // Strip out array indices from the path.
        const path = configPath
            .split('.')
            .filter((e) => !e.match(/^\[[0-9]+\]$/))
            .join('.');
        return localize(`config.${path}`);
    }
    /**
     * Render an entity selector.
     * @param configPath The configuration path to set/read.
     * @param domain Only entities from this domain will be shown.
     * @returns A rendered template.
     */
    _renderEntitySelector(configPath, domain) {
        if (!this._config) {
            return;
        }
        return $ `
      <ha-selector
        .hass=${this.hass}
        .selector=${{ entity: { domain: domain } }}
        .label=${this._getLabel(configPath)}
        .value=${getConfigValue(this._config, configPath, '')}
        .required=${false}
        @value-changed=${(ev) => this._valueChangedHandler(configPath, ev)}
      >
      </ha-selector>
    `;
    }
    /**
     * Render an option/"select" selector.
     * @param configPath The configuration path to set/read.
     * @param options The options to show in the selector.
     * @returns A rendered template.
     */
    _renderOptionSelector(configPath, options) {
        if (!this._config) {
            return;
        }
        return $ `
      <ha-selector
        .hass=${this.hass}
        .selector=${{ select: { options: options } }}
        .label=${this._getLabel(configPath)}
        .value=${getConfigValue(this._config, configPath, '')}
        .required=${false}
        @value-changed=${(ev) => this._valueChangedHandler(configPath, ev)}
      >
      </ha-selector>
    `;
    }
    /**
     * Render a number slider.
     * @param configPath Configuration path of the variable.
     * @param valueDefault The default value.
     * @param icon The icon to use on the slider.
     * @param min The minimum value.
     * @param max The maximum value.
     * @returns A rendered template.
     */
    _renderNumberInput(configPath, min, max) {
        if (!this._config) {
            return;
        }
        const value = getConfigValue(this._config, configPath);
        const mode = max === undefined ? 'box' : 'slider';
        return $ `
      <ha-selector
        .hass=${this.hass}
        .selector=${{ number: { min: min || 0, max: max, mode: mode } }}
        .label=${this._getLabel(configPath)}
        .value=${value}
        .required=${false}
        @value-changed=${(ev) => this._valueChangedHandler(configPath, ev)}
      >
      </ha-selector>
    `;
    }
    /**
     * Render a simple text info box.
     * @param info The string to display.
     * @returns A rendered template.
     */
    _renderInfo(info) {
        return $ ` <span class="info">${info}</span>`;
    }
    /**
     * Render a camera header.
     * @param cameraIndex The index of the camera to edit/add.
     * @param cameraConfig The configuration of the camera in question.
     * @param addNewCamera Whether or not this is a header to add a new camera.
     * @returns A rendered template.
     */
    _renderCameraHeader(cameraIndex, cameraConfig, addNewCamera) {
        return $ `
      <div
        class="camera-header"
        @click=${this._toggleCameraHandler}
        .cameraIndex=${cameraIndex}
      >
        <ha-icon .icon=${addNewCamera ? 'mdi:video-plus' : 'mdi:video'}></ha-icon>
        <span>
          ${addNewCamera
            ? $ ` <span class="new-camera">
                [${localize('editor.add_new_camera')}...]
              </span>`
            : // Attempt to render a recognizable name for the camera,
                // starting with the most likely to be useful and working our
                // ways towards the least useful.
                $ ` <span>
                ${(cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.title) ||
                    (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.id) ||
                    [
                        (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.camera_entity)
                            ? getEntityTitle(this.hass, String(cameraConfig.camera_entity))
                            : '',
                        cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.client_id,
                        (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.camera_name)
                            ? prettifyFrigateName(String(cameraConfig.camera_name))
                            : '',
                        (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.label)
                            ? prettifyFrigateName(String(cameraConfig.label))
                            : '',
                        (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.zone)
                            ? prettifyFrigateName(String(cameraConfig.zone))
                            : '',
                    ]
                        .filter(Boolean)
                        .join(' / ') ||
                    localize('editor.camera') + ' #' + cameraIndex}
              </span>`}
        </span>
      </div>
    `;
    }
    /**
     * Render a camera section.
     * @param cameras The full array of cameras.
     * @param cameraIndex The index (in the array) to render.
     * @param addNewCamera Whether or not this is a section to add a new non-existent camera.
     * @returns A rendered template.
     */
    _renderCamera(cameras, cameraIndex, addNewCamera) {
        const liveProviders = [
            { value: '', label: '' },
            { value: 'auto', label: localize('config.cameras.live_providers.auto') },
            { value: 'ha', label: localize('config.cameras.live_providers.ha') },
            {
                value: 'frigate-jsmpeg',
                label: localize('config.cameras.live_providers.frigate-jsmpeg'),
            },
            {
                value: 'webrtc-card',
                label: localize('config.cameras.live_providers.webrtc-card'),
            },
        ];
        // Make a new config and update the editor with changes on it,
        const modifyConfig = (func) => {
            if (this._config) {
                const newConfig = copyConfig(this._config);
                if (func(newConfig)) {
                    this._updateConfig(newConfig);
                }
            }
        };
        return $ `
      ${this._renderCameraHeader(cameraIndex, cameras[cameraIndex], addNewCamera)}
      ${this._expandedCameraIndex === cameraIndex
            ? $ ` <div class="values">
            <div class="controls">
              <ha-icon-button
                class="button"
                .label=${localize('editor.move_up')}
                .disabled=${addNewCamera ||
                !this._config ||
                !Array.isArray(this._config.cameras) ||
                cameraIndex <= 0}
                @click=${() => !addNewCamera &&
                modifyConfig((config) => {
                    if (Array.isArray(config.cameras) && cameraIndex > 0) {
                        arrayMove(config.cameras, cameraIndex, cameraIndex - 1);
                        this._expandedCameraIndex = cameraIndex - 1;
                        return true;
                    }
                    return false;
                })}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon>
              </ha-icon-button>
              <ha-icon-button
                class="button"
                .label=${localize('editor.move_down')}
                .disabled=${addNewCamera ||
                !this._config ||
                !Array.isArray(this._config.cameras) ||
                cameraIndex >= this._config.cameras.length - 1}
                @click=${() => !addNewCamera &&
                modifyConfig((config) => {
                    if (Array.isArray(config.cameras) &&
                        cameraIndex < config.cameras.length - 1) {
                        arrayMove(config.cameras, cameraIndex, cameraIndex + 1);
                        this._expandedCameraIndex = cameraIndex + 1;
                        return true;
                    }
                    return false;
                })}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon>
              </ha-icon-button>
              <ha-icon-button
                class="button"
                .label=${localize('editor.delete')}
                .disabled=${addNewCamera}
                @click=${() => {
                modifyConfig((config) => {
                    if (Array.isArray(config.cameras)) {
                        config.cameras.splice(cameraIndex, 1);
                        this._expandedCameraIndex = null;
                        return true;
                    }
                    return false;
                });
            }}
              >
                <ha-icon icon="mdi:delete"></ha-icon>
              </ha-icon-button>
            </div>
            ${this._renderEntitySelector(getArrayConfigPath(CONF_CAMERAS_ARRAY_CAMERA_ENTITY, cameraIndex), 'camera')}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_CAMERA_NAME, cameraIndex))}
            ${this._renderOptionSelector(getArrayConfigPath(CONF_CAMERAS_ARRAY_LIVE_PROVIDER, cameraIndex), liveProviders)}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_URL, cameraIndex))}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_LABEL, cameraIndex))}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_ZONE, cameraIndex))}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_CLIENT_ID, cameraIndex))}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_TITLE, cameraIndex))}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_ICON, cameraIndex))}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_ID, cameraIndex))}
            ${this._renderEntitySelector(getArrayConfigPath(CONF_CAMERAS_ARRAY_WEBRTC_CARD_ENTITY, cameraIndex), 'camera')}
            ${this._renderStringInput(getArrayConfigPath(CONF_CAMERAS_ARRAY_WEBRTC_CARD_URL, cameraIndex))}
          </div>`
            : ``}
    `;
    }
    /**
     * Render a string input field.
     * @param configPath The configuration path to set/read.
     * @param type The allowable input
     * @returns A rendered template.
     */
    _renderStringInput(configPath, type) {
        if (!this._config) {
            return;
        }
        return $ `
      <ha-selector
        .hass=${this.hass}
        .selector=${{ text: { type: type || 'text' } }}
        .label=${this._getLabel(configPath)}
        .value=${getConfigValue(this._config, configPath, '')}
        .required=${false}
        @value-changed=${(ev) => this._valueChangedHandler(configPath, ev)}
      >
      </ha-selector>
    `;
    }
    /**
     * Render a boolean selector.
     * @param configPath The configuration path to set/read.
     * @param valueDefault The default switch value if unset.
     * @param label An optional switch label.
     * @returns A rendered template.
     */
    _renderSwitch(configPath, valueDefault, label) {
        if (!this._config) {
            return;
        }
        return $ `
      <ha-selector
        .hass=${this.hass}
        .selector=${{ boolean: {} }}
        .label=${label || this._getLabel(configPath)}
        .value=${getConfigValue(this._config, configPath, valueDefault)}
        .required=${false}
        @value-changed=${(ev) => this._valueChangedHandler(configPath, ev)}
      >
      </ha-selector>
    `;
    }
    _updateConfig(config) {
        this._config = config;
        ne(this, 'config-changed', { config: this._config });
    }
    render() {
        if (!this.hass || !this._helpers || !this._config) {
            return $ ``;
        }
        const defaults = frigateCardConfigDefaults;
        const getShowButtonLabel = (configPath) => localize('editor.show_button') + ': ' + localize(`config.${configPath}`);
        const cameras = (getConfigValue(this._config, CONF_CAMERAS) ||
            []);
        return $ `
      ${this._configUpgradeable
            ? $ ` <div class="upgrade">
              <span>${localize('editor.upgrade_available')}</span>
              <span>
                <mwc-button
                  raised
                  label="${localize('editor.upgrade')}"
                  @click=${() => {
                if (this._config) {
                    const upgradedConfig = copyConfig(this._config);
                    upgradeConfig(upgradedConfig);
                    this._updateConfig(upgradedConfig);
                }
            }}
                >
                </mwc-button>
              </span>
            </div>
            <br />`
            : $ ``}
      <div class="card-config">
        ${this._renderOptionSetHeader('cameras')}
        ${options.cameras.show
            ? $ ` <div class="cameras">
              ${cameras.map((_, index) => this._renderCamera(cameras, index))}
              ${this._renderCamera(cameras, cameras.length, true)}
            </div>`
            : ''}
        ${this._renderOptionSetHeader('view')}
        ${options.view.show
            ? $ `
              <div class="values">
                ${this._renderOptionSelector(CONF_VIEW_DEFAULT, this._viewModes)}
                ${this._renderOptionSelector(CONF_VIEW_CAMERA_SELECT, this._cameraSelectViewModes)}
                ${this._renderNumberInput(CONF_VIEW_TIMEOUT_SECONDS)}
                ${this._renderNumberInput(CONF_VIEW_UPDATE_SECONDS)}
                ${this._renderSwitch(CONF_VIEW_UPDATE_FORCE, defaults.view.update_force)}
                ${this._renderSwitch(CONF_VIEW_UPDATE_CYCLE_CAMERA, defaults.view.update_cycle_camera)}
              </div>
            `
            : ''}
        ${this._renderOptionSetHeader('menu')}
        ${options.menu.show
            ? $ `
              <div class="values">
                ${this._renderOptionSelector(CONF_MENU_MODE, this._menuModes)}
                ${this._renderStringInput(CONF_MENU_BUTTON_SIZE)}
                ${this._renderSwitch(CONF_MENU_BUTTONS_FRIGATE, defaults.menu.buttons.frigate, getShowButtonLabel(CONF_MENU_BUTTONS_FRIGATE))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_LIVE, defaults.menu.buttons.live, getShowButtonLabel('view.views.live'))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_CLIPS, defaults.menu.buttons.clips, getShowButtonLabel('view.views.clips'))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_SNAPSHOTS, defaults.menu.buttons.snapshots, getShowButtonLabel('view.views.snapshots'))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_IMAGE, defaults.menu.buttons.image, getShowButtonLabel('view.views.image'))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_FRIGATE_DOWNLOAD, defaults.menu.buttons.download, getShowButtonLabel(CONF_MENU_BUTTONS_FRIGATE_DOWNLOAD))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_FRIGATE_UI, defaults.menu.buttons.frigate_ui, getShowButtonLabel(CONF_MENU_BUTTONS_FRIGATE_UI))}
                ${this._renderSwitch(CONF_MENU_BUTTONS_FRIGATE_FULLSCREEN, defaults.menu.buttons.fullscreen, getShowButtonLabel(CONF_MENU_BUTTONS_FRIGATE_FULLSCREEN))}
              </div>
            `
            : ''}
        ${this._renderOptionSetHeader('live')}
        ${options.live.show
            ? $ `
              <div class="values">
                ${this._renderSwitch(CONF_LIVE_PRELOAD, defaults.live.preload)}
                ${this._renderSwitch(CONF_LIVE_DRAGGABLE, defaults.live.draggable)}
                ${this._renderSwitch(CONF_LIVE_LAZY_LOAD, defaults.live.lazy_load)}
                ${this._renderSwitch(CONF_LIVE_LAZY_UNLOAD, defaults.live.lazy_unload)}
                ${this._renderSwitch(CONF_LIVE_AUTO_UNMUTE, defaults.live.auto_unmute)}
                ${this._renderOptionSelector(CONF_LIVE_CONTROLS_NEXT_PREVIOUS_STYLE, this._liveNextPreviousControlStyles)}
                ${this._renderStringInput(CONF_LIVE_CONTROLS_NEXT_PREVIOUS_SIZE)}
                ${this._renderOptionSelector(CONF_LIVE_CONTROLS_THUMBNAILS_MODE, this._thumbnailModes)}
                ${this._renderOptionSelector(CONF_LIVE_CONTROLS_THUMBNAILS_MEDIA, this._thumbnailMedias)}
                ${this._renderStringInput(CONF_LIVE_CONTROLS_THUMBNAILS_SIZE)}
                ${this._renderOptionSelector(CONF_LIVE_CONTROLS_TITLE_MODE, this._titleModes)}
                ${this._renderNumberInput(CONF_LIVE_CONTROLS_TITLE_DURATION_SECONDS, 0, 60)}
                ${this._renderOptionSelector(CONF_LIVE_TRANSITION_EFFECT, this._transitionEffects)}
              </div>
            `
            : ''}
        ${this._renderOptionSetHeader('event_gallery')}
        ${options.event_gallery.show
            ? $ ` <div class="values">
              ${this._renderNumberInput(CONF_EVENT_GALLERY_MIN_COLUMNS, 1, 10)}
            </div>`
            : ''}
        ${this._renderOptionSetHeader('event_viewer')}
        ${options.event_viewer.show
            ? $ ` <div class="values">
              ${this._renderSwitch(CONF_EVENT_VIEWER_AUTO_PLAY, defaults.event_viewer.auto_play)}
              ${this._renderSwitch(CONF_EVENT_VIEWER_AUTO_UNMUTE, defaults.event_viewer.auto_unmute)}
              ${this._renderSwitch(CONF_EVENT_VIEWER_DRAGGABLE, defaults.event_viewer.draggable)}
              ${this._renderSwitch(CONF_EVENT_VIEWER_LAZY_LOAD, defaults.event_viewer.lazy_load)}
              ${this._renderOptionSelector(CONF_EVENT_VIEWER_CONTROLS_NEXT_PREVIOUS_STYLE, this._eventViewerNextPreviousControlStyles)}
              ${this._renderStringInput(CONF_EVENT_VIEWER_CONTROLS_NEXT_PREVIOUS_SIZE)}
              ${this._renderOptionSelector(CONF_EVENT_VIEWER_CONTROLS_THUMBNAILS_MODE, this._thumbnailModes)}
              ${this._renderStringInput(CONF_EVENT_VIEWER_CONTROLS_THUMBNAILS_SIZE)}
              ${this._renderOptionSelector(CONF_EVENT_VIEWER_CONTROLS_TITLE_MODE, this._titleModes)}
              ${this._renderNumberInput(CONF_EVENT_VIEWER_CONTROLS_TITLE_DURATION_SECONDS, 0, 60)}
              ${this._renderOptionSelector(CONF_EVENT_VIEWER_TRANSITION_EFFECT, this._transitionEffects)}
            </div>`
            : ''}
        ${this._renderOptionSetHeader('image')}
        ${options.image.show
            ? $ ` <div class="values">
              ${this._renderOptionSelector(CONF_IMAGE_MODE, this._imageModes)}
              ${this._renderStringInput(CONF_IMAGE_URL)}
              ${this._renderNumberInput(CONF_IMAGE_REFRESH_SECONDS)}
            </div>`
            : ''}
        ${this._renderOptionSetHeader('dimensions')}
        ${options.dimensions.show
            ? $ ` <div class="values">
              ${this._renderOptionSelector(CONF_DIMENSIONS_ASPECT_RATIO_MODE, this._aspectRatioModes)}
              ${this._renderStringInput(CONF_DIMENSIONS_ASPECT_RATIO)}
            </div>`
            : ''}
        ${this._config['overrides'] !== undefined
            ? $ ` ${this._renderOptionSetHeader('overrides')}
            ${options.overrides.show
                ? $ ` <div class="values">
                  ${this._renderInfo(localize('config.overrides.info'))}
                </div>`
                : ''}`
            : $ ``}
      </div>
    `;
    }
    /**
     * Verify editor is initialized.
     */
    _initialize() {
        if (this.hass === undefined)
            return;
        if (this._config === undefined)
            return;
        if (this._helpers === undefined)
            return;
        (async () => {
            // The picture-glance editor loads the ha-selectors.
            // See: https://github.com/thomasloven/hass-config/wiki/PreLoading-Lovelace-Elements
            const pictureGlance = await this._helpers.createCardElement({
                type: 'picture-glance',
                entities: [],
                camera_image: 'dummy-to-load-editor-components',
            });
            if (pictureGlance.constructor.getConfigElement) {
                await pictureGlance.constructor.getConfigElement();
                this._initialized = true;
            }
        })();
    }
    /**
     * Load card helpers.
     */
    async loadCardHelpers() {
        this._helpers = await window.loadCardHelpers();
    }
    /**
     * Display/hide a camera section.
     * @param ev The event triggering the change.
     */
    _toggleCameraHandler(ev) {
        if (ev && ev.target) {
            this._expandedCameraIndex =
                this._expandedCameraIndex == ev.target.cameraIndex
                    ? null
                    : ev.target.cameraIndex;
        }
    }
    /**
     * Handle a toggled set of options.
     * @param ev The event triggering the change.
     */
    _toggleOptionHandler(ev) {
        this._toggleOptionSet(ev, options);
    }
    /**
     * Toggle display of a set of options (e.g. 'Live')
     * @param ev The event triggering the change.
     * @param options The EditorOptions object.
     */
    _toggleOptionSet(ev, options) {
        if (ev && ev.target) {
            const show = !options[ev.target.optionSetName].show;
            for (const [key] of Object.entries(options)) {
                options[key].show = false;
            }
            options[ev.target.optionSetName].show = show;
            this.requestUpdate();
        }
    }
    /**
     * Handle a changed option value.
     * @param ev Event triggering the change.
     */
    _valueChangedHandler(key, ev) {
        if (!this._config || !this.hass) {
            return;
        }
        let value;
        if (ev.detail && ev.detail.value !== undefined) {
            value = ev.detail.value;
            if (typeof value === 'string') {
                value = value.trim();
            }
        }
        if (getConfigValue(this._config, key) === value) {
            return;
        }
        const newConfig = copyConfig(this._config);
        if (value === '' || value === undefined) {
            deleteConfigValue(newConfig, key);
        }
        else {
            setConfigValue(newConfig, key, value);
        }
        this._updateConfig(newConfig);
    }
    /**
     * Return compiled CSS styles.
     */
    static get styles() {
        return o$7(css$f);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardEditor.prototype, "hass", void 0);
__decorate([
    t$3()
], FrigateCardEditor.prototype, "_config", void 0);
__decorate([
    t$3()
], FrigateCardEditor.prototype, "_helpers", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardEditor.prototype, "_expandedCameraIndex", void 0);
FrigateCardEditor = __decorate([
    n$4('frigate-card-editor')
], FrigateCardEditor);

var css$e = ".element {\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n\nhui-error-card.element {\n  inset: 0px;\n  background-color: var(--secondary-background-color, black);\n  transform: unset;\n}";

class ConditionStateRequestEvent extends Event {
}
function evaluateCondition(condition, state) {
    var _a, _b;
    if (!state) {
        return false;
    }
    let result = true;
    if ((_a = condition === null || condition === void 0 ? void 0 : condition.view) === null || _a === void 0 ? void 0 : _a.length) {
        result && (result = !!state.view && condition.view.includes(state.view));
    }
    if ((condition === null || condition === void 0 ? void 0 : condition.fullscreen) !== undefined) {
        result && (result = state.fullscreen !== undefined && condition.fullscreen == state.fullscreen);
    }
    if ((_b = condition === null || condition === void 0 ? void 0 : condition.camera) === null || _b === void 0 ? void 0 : _b.length) {
        result && (result = !!state.camera && condition.camera.includes(state.camera));
    }
    return result;
}
/**
 * Evaluate whether a frigateCardCondition is met using an event to fetch state.
 * @returns A boolean indicating whether the condition is met.
 */
function fetchStateAndEvaluateCondition(node, condition) {
    if (!condition) {
        return true;
    }
    const stateEvent = new ConditionStateRequestEvent(`frigate-card:condition-state-request`, {
        bubbles: true,
        composed: true,
    });
    /* Special note on what's going on here:
     *
     * Some parts of the card (e.g. <frigate-card-elements>) may have arbitrary
     * complexity and layers (that this card doesn't control) between that master
     * element and the element that needs to evaluate the condition. In these
     * cases there's no clean way to pass state from the rest of card down
     * through these layers. Instead, an event is dispatched as a "request for
     * state" (StateRequestEvent) upwards which is caught by the outer card
     * and state added to the event object. Because event propagation is handled
     * synchronously, the state will be added to the event before the flow
     * proceeds.
     */
    node.dispatchEvent(stateEvent);
    return evaluateCondition(condition, stateEvent.conditionState);
}
function conditionStateRequestHandler(ev, conditionState) {
    ev.conditionState = conditionState;
}
function getOverriddenConfig(config, overrides, conditionState) {
    const output = cloneDeep(config);
    let overridden = false;
    if (overrides) {
        for (const override of overrides) {
            if (evaluateCondition(override.conditions, conditionState)) {
                merge$1(output, override.overrides);
                overridden = true;
            }
        }
    }
    // Attempt to return the same configuration object if it has not been
    // overridden (to reduce re-renders for a configuration that has not changed).
    return overridden ? output : config;
}
function getOverridesByKey(overrides, key) {
    var _a;
    return ((_a = overrides === null || overrides === void 0 ? void 0 : overrides.filter((o) => key in o.overrides).map((o) => ({
        conditions: o.conditions,
        overrides: o.overrides[key],
    }))) !== null && _a !== void 0 ? _a : []);
}

/* A note on picture element rendering:
 *
 * To avoid needing to deal with the rendering of all the picture elements
 * ourselves, instead the card relies on a stock conditional element (with no
 * conditions) to render elements (this._root). This has a few advantages:
 *
 * - Does not depend on (much of!) an internal API -- conditional picture
 *   elements are unlikely to go away or change.
 * - Forces usage of elements that HA understands. If the rendering is done
 *   directly, it is (ask me how I know!) very tempting to render things in such
 *   a way that a nested conditional element would not be able to render, i.e.
 *   the custom rendering logic would only apply at the first level.
 */
/* A note on custom elements:
 *
 * The native HA support for custom elements is used for the menu-icon and
 * menu-state-icon elements. This ensures multi-nested conditionals will work
 * correctly. These custom elements 'render' by firing events that are caught by
 * the card to call for inclusion/exclusion of the menu icon in question.
 *
 * One major complexity here is that the top <frigate-card-elements> element
 * will not necessarily know when a menu icon is no longer rendered because of a
 * conditional that no-longer evaluates to true. As such, it cannot know when to
 * signal for the menu icon removal. Furthermore, the menu icon element itself
 * will only know it's been removed _after_ it's been disconnected from the DOM,
 * so normal event propagation at that point will not work. Instead, we must
 * catch the menu icon _addition_ and register the eventhandler for the removal
 * directly on the child (which will have no parent at time of calling). That
 * then triggers <frigate-card-elements> to re-dispatch a removal event for
 * upper layers to handle correctly.
 */
// A small wrapper around a HA conditional element used to render a set of
// picture elements.
let FrigateCardElementsCore = class FrigateCardElementsCore extends s$2 {
    constructor() {
        super(...arguments);
        this._root = null;
    }
    /**
     * Set Home Assistant object.
     */
    set hass(hass) {
        if (this._root) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._root.hass = hass;
        }
        this._hass = hass;
    }
    /**
     * Create a transparent render root.
     */
    createRenderRoot() {
        return this;
    }
    /**
     * Create the root node for our picture elements.
     * @returns
     */
    _createRoot() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const elementConstructor = customElements.get('hui-conditional-element');
        if (!elementConstructor || !this._hass) {
            throw new Error(localize('error.could_not_render_elements'));
        }
        const element = new elementConstructor();
        element.hass = this._hass;
        const config = {
            type: 'conditional',
            conditions: [],
            elements: this.elements,
        };
        try {
            element.setConfig(config);
        }
        catch (e) {
            console.error(e, e.stack);
            throw new Error(localize('error.invalid_elements_config'));
        }
        return element;
    }
    /**
     * Render the elements.
     * @returns A rendered template or void.
     */
    render() {
        try {
            // Recreate the root on each render to ensure conditional ancestors
            // re-fire events as necessary.
            this._root = this._createRoot();
        }
        catch (e) {
            return dispatchErrorMessageEvent(this, e.message);
        }
        return $ `${this._root || ''}`;
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardElementsCore.prototype, "elements", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardElementsCore.prototype, "conditionState", void 0);
FrigateCardElementsCore = __decorate([
    n$4('frigate-card-elements-core')
], FrigateCardElementsCore);
/**
 * The master <frigate-card-elements> class, handles event listeners and styles.
 */
let FrigateCardElements = class FrigateCardElements extends s$2 {
    /**
     * Handle a picture element to be removed from the menu.
     * @param ev The event.
     */
    _menuRemoveHandler(ev) {
        // Re-dispatch event from this element (instead of the disconnected one, as
        // there is no parent of the disconnected element).
        dispatchFrigateCardEvent(this, 'menu-remove', ev.detail);
    }
    /**
     * Handle a picture element to be added to the menu.
     * @param ev The event.
     */
    _menuAddHandler(ev) {
        ev = ev;
        const path = ev.composedPath();
        if (!path.length) {
            return;
        }
        // See 'A note on custom elements' above to explain what's going on here.
        // Ensure listener is only attached 1 time by removing it first.
        path[0].removeEventListener('frigate-card:menu-remove', this._menuRemoveHandler.bind(this));
        path[0].addEventListener('frigate-card:menu-remove', this._menuRemoveHandler.bind(this));
    }
    /**
     * Connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        // Catch icons being added to the menu (so their removal can be subsequently
        // handled).
        this.addEventListener('frigate-card:menu-add', this._menuAddHandler);
    }
    /**
     * Disconnected callback.
     */
    disconnectedCallback() {
        this.removeEventListener('frigate-card:menu-add', this._menuAddHandler);
        super.disconnectedCallback();
    }
    /**
     * Render the template.
     * @returns A rendered template.
     */
    render() {
        return $ ` <frigate-card-elements-core
      .hass=${this.hass}
      .conditionState=${this.conditionState}
      .elements=${this.elements}
    >
    </frigate-card-elements-core>`;
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$e);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardElements.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardElements.prototype, "elements", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardElements.prototype, "conditionState", void 0);
__decorate([
    i$3('frigate-card-elements-core')
], FrigateCardElements.prototype, "_core", void 0);
FrigateCardElements = __decorate([
    n$4('frigate-card-elements')
], FrigateCardElements);
/**
 * An element that can render others based on Frigate state (e.g. only show
 * overlays in particular views). This is the Frigate Card equivalent to the HA
 * conditional card.
 */
let FrigateCardElementsConditional = class FrigateCardElementsConditional extends s$2 {
    /**
     * Set the Home Assistant object.
     */
    set hass(hass) {
        if (this._core) {
            this._core.hass = hass;
        }
        this._hass = hass;
    }
    /**
     * Set the card configuration.
     * @param config The card configuration.
     */
    setConfig(config) {
        this._config = config;
    }
    /**
     * Create a root into which to render. This card is "transparent".
     * @returns
     */
    createRenderRoot() {
        return this;
    }
    /**
     * Connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        // HA will automatically attach the 'element' class to picture elements. As
        // this is a transparent 'conditional' element (just like the stock HA
        // 'conditional' element), it should not have positioning.
        this.className = '';
    }
    /**
     * Render the card.
     */
    render() {
        if (fetchStateAndEvaluateCondition(this, this._config.conditions)) {
            return $ ` <frigate-card-elements-core
        .hass=${this._hass}
        .elements=${this._config.elements}
      >
      </frigate-card-elements-core>`;
        }
    }
};
__decorate([
    i$3('frigate-card-elements-core')
], FrigateCardElementsConditional.prototype, "_core", void 0);
FrigateCardElementsConditional = __decorate([
    n$4('frigate-card-conditional')
], FrigateCardElementsConditional);
// A base class for rendering menu icons / menu state icons.
class FrigateCardElementsBaseMenuIcon extends s$2 {
    constructor() {
        super(...arguments);
        this._config = null;
    }
    /**
     * Set the card config.
     * @param config The configuration.
     */
    setConfig(config) {
        this._config = config;
    }
    /**
     * Connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        if (this._config) {
            dispatchFrigateCardEvent(this, 'menu-add', this._config);
        }
    }
    /**
     * Disconnected callback.
     */
    disconnectedCallback() {
        if (this._config) {
            dispatchFrigateCardEvent(this, 'menu-remove', this._config);
        }
        super.disconnectedCallback();
    }
}
__decorate([
    e$3({ attribute: false })
], FrigateCardElementsBaseMenuIcon.prototype, "_config", void 0);
let FrigateCardElementsMenuIcon = class FrigateCardElementsMenuIcon extends FrigateCardElementsBaseMenuIcon {
};
FrigateCardElementsMenuIcon = __decorate([
    n$4('frigate-card-menu-icon')
], FrigateCardElementsMenuIcon);
let FrigateCardElementsMenuStateIcon = class FrigateCardElementsMenuStateIcon extends FrigateCardElementsBaseMenuIcon {
};
FrigateCardElementsMenuStateIcon = __decorate([
    n$4('frigate-card-menu-state-icon')
], FrigateCardElementsMenuStateIcon);
let FrigateCardElementsMenuSubmenu = class FrigateCardElementsMenuSubmenu extends FrigateCardElementsBaseMenuIcon {
};
FrigateCardElementsMenuSubmenu = __decorate([
    n$4('frigate-card-menu-submenu')
], FrigateCardElementsMenuSubmenu);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dayjs_min = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
}(dayjs_min));

var dayjs = dayjs_min.exports;

var customParseFormat = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,o={},s=function(t){return (t=+t)+(t>68?1900:2e3)};var a=function(t){return function(e){this[t]=+e;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t);}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=h(t,!1);}],a:[i,function(t){this.afternoon=h(t,!0);}],S:[/\d/,function(t){this.milliseconds=100*+t;}],SS:[n,function(t){this.milliseconds=10*+t;}],SSS:[/\d{3}/,function(t){this.milliseconds=+t;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(t){this.year=s(t);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=s.length,f=0;f<a;f+=1){var u=s[f],h=d[u],c=h&&h[0],l=h&&h[1];s[f]=l?{regex:c,parser:l}:u.replace(/^\[|\]$/g,"");}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,u=t.substr(r),h=o.exec(u)[0];f.call(e,h),t=t.replace(h,"");}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon;}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],u=!0===s[3],h=f||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=c(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(t){return new Date("")}}(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!=this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,t);};}}));
}(customParseFormat));

var dayjs_custom_parse_format = customParseFormat.exports;

dayjs.extend(dayjs_custom_parse_format);
class BrowseMediaUtil {
    /**
     * Return the Frigate event_id given a BrowseMediaSource object.
     * @param media The event to extract the id from.
     * @returns The `event_id` or `null` if not successfully parsed.
     */
    static extractEventID(media) {
        const result = media.media_content_id.match(/^media-source:\/\/frigate\/.*\/(?<id>[.0-9]+-[a-zA-Z0-9]+)$/);
        return result && result.groups ? result.groups['id'] : null;
    }
    /**
     * Return the event start time given a BrowseMediaSource object.
     * @param browseMedia The media object to extract the start time from.
     * @returns The start time in unix/epoch time, or null if it cannot be determined.
     */
    static extractEventStartTime(browseMedia) {
        // Example: 2021-08-27 20:57:22 [10s, Person 76%]
        const result = browseMedia.title.match(/^(?<iso_datetime>.+) \[/);
        if (result && result.groups) {
            const iso_datetime_str = result.groups['iso_datetime'];
            if (iso_datetime_str) {
                const iso_datetime = dayjs(iso_datetime_str, 'YYYY-MM-DD HH:mm:ss', true);
                if (iso_datetime.isValid()) {
                    return iso_datetime.unix();
                }
            }
        }
        return null;
    }
    /**
     * Determine if a BrowseMediaSource object is truly a media item (vs a folder).
     * @param media The media object.
     * @returns `true` if it's truly a media item, `false` otherwise.
     */
    static isTrueMedia(media) {
        return !media.can_expand;
    }
    /**
     * From a BrowseMediaSource item extract the first true media item from the
     * children (i.e. a clip/snapshot, not a folder).
     * @param media The media object with children.
     * @returns The first true media item found.
     */
    static getFirstTrueMediaChildIndex(media) {
        if (!media || !media.children) {
            return null;
        }
        const index = media.children.findIndex((child) => this.isTrueMedia(child));
        return index >= 0 ? index : null;
    }
    /**
     * Browse Frigate media with a media content id. May throw.
     * @param hass The HomeAssistant object.
     * @param media_content_id The media content id to browse.
     * @returns A BrowseMediaSource object or null on malformed.
     */
    static async browseMedia(hass, media_content_id) {
        const request = {
            type: 'media_source/browse_media',
            media_content_id: media_content_id,
        };
        return homeAssistantWSRequest(hass, browseMediaSourceSchema, request);
    }
    // Browse Frigate media with query parameters.
    /**
     * Browse Frigate media with a media query. May throw.
     * @param hass The HomeAssistant object.
     * @param params The search parameters to use to search for media.
     * @returns A BrowseMediaSource object or null on malformed.
     */
    static async browseMediaQuery(hass, params) {
        return this.browseMedia(hass, 
        // Defined in:
        // https://github.com/blakeblackshear/frigate-hass-integration/blob/master/custom_components/frigate/media_source.py
        [
            'media-source://frigate',
            params.clientId,
            'event-search',
            params.mediaType,
            '',
            params.after ? String(params.after) : '',
            params.before ? String(params.before) : '',
            params.cameraName,
            params.label,
            params.zone,
        ].join('/'));
    }
    /**
     * Get the parameters to search for media.
     * @returns A BrowseMediaQueryParameters object.
     */
    static getBrowseMediaQueryParameters(mediaType, cameraConfig) {
        if (!cameraConfig || !cameraConfig.camera_name) {
            return undefined;
        }
        return {
            mediaType: mediaType,
            clientId: cameraConfig.client_id,
            cameraName: cameraConfig.camera_name,
            label: cameraConfig.label,
            zone: cameraConfig.zone,
        };
    }
    /**
     * Get the parameters to search for media related to the current view.
     * @returns A BrowseMediaQueryParameters object.
     */
    static getBrowseMediaQueryParametersOrDispatchError(node, view, cameraConfig) {
        if (!view.isClipRelatedView() && !view.isSnapshotRelatedView()) {
            return undefined;
        }
        // Verify there is a camera name, otherwise getBrowseMediaQueryParameters()
        // will return undefined.
        if (!cameraConfig.camera_name) {
            dispatchErrorMessageEvent(node, localize('error.no_camera_name') + `: ${JSON.stringify(cameraConfig)}`);
            return undefined;
        }
        return BrowseMediaUtil.getBrowseMediaQueryParameters(view.isClipRelatedView() ? 'clips' : 'snapshots', cameraConfig);
    }
    /**
     * Fetch the latest media and dispatch a change view event to reflect the
     * results. If no media is found a suitable message event will be triggered
     * instead.
     * @param node The HTMLElement to dispatch events from.
     * @param hass The Home Assistant object.
     * @param view The current view to evolve.
     * @param browseMediaQueryParameters The media parameters to query with.
     * @returns
     */
    static async fetchLatestMediaAndDispatchViewChange(node, hass, view, browseMediaQueryParameters) {
        let parent;
        try {
            parent = await BrowseMediaUtil.browseMediaQuery(hass, browseMediaQueryParameters);
        }
        catch (e) {
            return dispatchErrorMessageEvent(node, e.message);
        }
        const childIndex = BrowseMediaUtil.getFirstTrueMediaChildIndex(parent);
        if (!parent || !parent.children || childIndex == null) {
            return dispatchMessageEvent(node, browseMediaQueryParameters.mediaType == 'clips'
                ? localize('common.no_clip')
                : localize('common.no_snapshot'), browseMediaQueryParameters.mediaType == 'clips'
                ? 'mdi:filmstrip-off'
                : 'mdi:camera-off');
        }
        view
            .evolve({
            target: parent,
            childIndex: childIndex,
        })
            .dispatchChangeEvent(node);
    }
    /**
     * Fetch the media of a child BrowseMediaSource object and dispatch a change
     * view event to reflect the results.
     * @param node The HTMLElement to dispatch events from.
     * @param hass The Home Assistant object.
     * @param view The current view to evolve.
     * @param child The BrowseMediaSource child to query for.
     * @returns
     */
    static async fetchChildMediaAndDispatchViewChange(node, hass, view, child) {
        let parent;
        try {
            parent = await BrowseMediaUtil.browseMedia(hass, child.media_content_id);
        }
        catch (e) {
            return dispatchErrorMessageEvent(node, e.message);
        }
        view
            .evolve({
            target: parent,
            previous: view,
        })
            .dispatchChangeEvent(node);
    }
}

var css$d = ".mdc-image-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.mdc-image-list__item,\n.mdc-image-list__image-aspect-container {\n  position: relative;\n  box-sizing: border-box;\n}\n\n.mdc-image-list__item {\n  list-style-type: none;\n}\n\n.mdc-image-list__image {\n  width: 100%;\n}\n\n.mdc-image-list__image-aspect-container .mdc-image-list__image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.mdc-image-list__image-aspect-container {\n  padding-bottom: calc(100% / 1);\n}\n\n.mdc-image-list__image {\n  border-radius: 0;\n}\n\n.mdc-image-list--with-text-protection .mdc-image-list__supporting {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.mdc-image-list__supporting {\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 8px 0;\n  line-height: 24px;\n}\n\n.mdc-image-list__label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Roboto, sans-serif;\n  /* @alternate */\n  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: 1rem;\n  /* @alternate */\n  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);\n  line-height: 1.75rem;\n  /* @alternate */\n  line-height: var(--mdc-typography-subtitle1-line-height, 1.75rem);\n  font-weight: 400;\n  /* @alternate */\n  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);\n  letter-spacing: 0.009375em;\n  /* @alternate */\n  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);\n  text-decoration: inherit;\n  /* @alternate */\n  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);\n  text-transform: inherit;\n  /* @alternate */\n  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.mdc-image-list--with-text-protection .mdc-image-list__supporting {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 48px;\n  padding: 0 16px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n\n.mdc-image-list--masonry {\n  display: block;\n}\n.mdc-image-list--masonry .mdc-image-list__item {\n  break-inside: avoid-column;\n}\n.mdc-image-list--masonry .mdc-image-list__image {\n  display: block;\n  height: auto;\n}\n\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  -ms-overflow-style: none;\n  /* Hide scrollbar: IE and Edge */\n  scrollbar-width: none;\n  /* Hide scrollbar: Firefox */\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n:host::-webkit-scrollbar {\n  display: none;\n}\n\n.frigate-card-gallery .mdc-image-list__item {\n  width: calc(\n        100% / 4 - 5.25px\n      );\n  margin: 2.5px;\n}\n.frigate-card-gallery .mdc-image-list__image {\n  border-radius: 5px;\n}\n.frigate-card-gallery.mdc-image-list--with-text-protection .mdc-image-list__supporting {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.frigate-card-gallery .mdc-image-list__image {\n  transition: transform 0.2s linear;\n}\n\n.frigate-card-gallery .mdc-image-list__image:hover {\n  transform: scale(1.04);\n}\n\nha-card.frigate-card-gallery-folder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  text-align: center;\n  opacity: 0.7;\n  color: var(--secondary-text-color, white);\n  border: 2px ridge var(--secondary-text-color, black);\n  border-radius: 5px;\n  background-color: var(--primary-background-color, black);\n  padding: 10px;\n  height: 100%;\n  line-height: 1;\n}";

const MAX_THUMBNAIL_WIDTH = 175;
let FrigateCardGallery = class FrigateCardGallery extends s$2 {
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        if (!this.hass || !this.view || !this.cameraConfig) {
            return;
        }
        if (!this.view.target) {
            const browseMediaQueryParameters = BrowseMediaUtil.getBrowseMediaQueryParametersOrDispatchError(this, this.view, this.cameraConfig);
            if (!browseMediaQueryParameters) {
                return;
            }
            BrowseMediaUtil.fetchLatestMediaAndDispatchViewChange(this, this.hass, this.view, browseMediaQueryParameters);
            return renderProgressIndicator();
        }
        return $ `
      <frigate-card-gallery-core
        .hass=${this.hass}
        .view=${this.view}
        .galleryConfig=${this.galleryConfig}
      >
      </frigate-card-gallery-core>
    `;
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return o$7(css$d);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardGallery.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardGallery.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardGallery.prototype, "cameraConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardGallery.prototype, "galleryConfig", void 0);
FrigateCardGallery = __decorate([
    n$4('frigate-card-gallery')
], FrigateCardGallery);
let FrigateCardGalleryCore = class FrigateCardGalleryCore extends s$2 {
    constructor() {
        super();
        this._columns = frigateCardConfigDefaults.event_gallery.min_columns;
        this._resizeObserver = new ResizeObserver(this._resizeHandler.bind(this));
    }
    /**
     * Component connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        this._resizeObserver.observe(this);
    }
    /**
     * Component disconnected callback.
     */
    disconnectedCallback() {
        this._resizeObserver.disconnect();
        super.disconnectedCallback();
    }
    /**
     * Handle gallery resize.
     */
    _resizeHandler() {
        var _a, _b;
        this._columns = Math.max((_b = (_a = this.galleryConfig) === null || _a === void 0 ? void 0 : _a.min_columns) !== null && _b !== void 0 ? _b : frigateCardConfigDefaults.event_gallery.min_columns, Math.ceil(this.clientWidth / MAX_THUMBNAIL_WIDTH));
    }
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        if (!this.hass ||
            !this.view ||
            !this.view.target ||
            !this.view.target.children ||
            !(this.view.is('clips') || this.view.is('snapshots'))) {
            return $ ``;
        }
        const itemStyle = {
            // Controls the number of columns in the gallery (allows for 5px gutter).
            width: `calc(${100 / this._columns}% - 5.25px)`,
        };
        const folderStyle = {
            // Values derived from experimentation on typical Lovelace card sizes.
            'font-size': `${Math.min(1.1, (0.6 * (this.clientWidth / this._columns)) / 50.0)}em`,
        };
        return $ ` <ul class="mdc-image-list frigate-card-gallery">
      ${this.view && this.view.previous
            ? $ `<li class="mdc-image-list__item" style="${i$1(itemStyle)}">
            <div class="mdc-image-list__image-aspect-container">
              <div class="mdc-image-list__image">
                <ha-card
                  @click=${(ev) => {
                if (this.view && this.view.previous) {
                    this.view.previous.dispatchChangeEvent(this);
                }
                stopEventFromActivatingCardWideActions(ev);
            }}
                  outlined=""
                  class="frigate-card-gallery-folder"
                >
                  <ha-icon .icon=${'mdi:arrow-left'}></ha-icon>
                </ha-card>
              </div>
            </div>
          </li>`
            : ''}
      ${this.view.target.children.map((child, index) => $ ` <li class="mdc-image-list__item" style="${i$1(itemStyle)}">
            <div class="mdc-image-list__image-aspect-container">
              ${child.can_expand
            ? $ `<div class="mdc-image-list__image">
                    <ha-card
                      @click=${(ev) => {
                if (this.hass && this.view) {
                    BrowseMediaUtil.fetchChildMediaAndDispatchViewChange(this, this.hass, this.view, child);
                }
                stopEventFromActivatingCardWideActions(ev);
            }}
                      outlined=""
                      class="frigate-card-gallery-folder"
                    >
                      <div style="${i$1(folderStyle)}">${child.title}</div>
                    </ha-card>
                  </div>`
            : child.thumbnail
                ? $ `<img
                    aria-label="${child.title}"
                    class="mdc-image-list__image"
                    src="${child.thumbnail}"
                    title="${child.title}"
                    @click=${(ev) => {
                    if (this.view) {
                        this.view
                            .evolve({
                            view: this.view.is('clips') ? 'clip' : 'snapshot',
                            childIndex: index,
                            previous: this.view,
                        })
                            .dispatchChangeEvent(this);
                    }
                    stopEventFromActivatingCardWideActions(ev);
                }}
                  />`
                : ``}
            </div>
          </li>`)}
    </ul>`;
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$d);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardGalleryCore.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardGalleryCore.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardGalleryCore.prototype, "galleryConfig", void 0);
__decorate([
    t$3()
], FrigateCardGalleryCore.prototype, "_columns", void 0);
FrigateCardGalleryCore = __decorate([
    n$4('frigate-card-gallery-core')
], FrigateCardGalleryCore);

class CachedValueController {
    constructor(host, timerSeconds, callback) {
        this._timerSeconds = timerSeconds;
        this._callback = callback;
        (this._host = host).addController(this);
    }
    /**
     * Remove the controller for the host.
     */
    removeController() {
        this._host.removeController(this);
    }
    /**
     * Get the value.
     */
    get value() {
        return this._value;
    }
    /**
     * Update the cached value (and reset the timer).
     */
    updateValue() {
        this._value = this._callback();
        this._startTimer();
    }
    /**
     * Clear the cached value.
     */
    clearValue() {
        this._value = undefined;
        this._stopTimer();
    }
    /**
     * Disable the timer.
     */
    _stopTimer() {
        clearInterval(this._timerID);
        this._timerID = undefined;
    }
    /**
     * Enable the timer. Repeated calls will have no effect.
     */
    _startTimer() {
        this._stopTimer();
        if (this._timerSeconds > 0) {
            this._timerID = window.setInterval(() => {
                this.updateValue();
                this._host.requestUpdate();
            }, this._timerSeconds * 1000);
        }
    }
    /**
     * Host has connected to the cache.
     */
    hostConnected() {
        this.updateValue();
        this._host.requestUpdate();
    }
    /**
     * Host has disconnected from the cache.
     */
    hostDisconnected() {
        this.clearValue();
    }
}

var img = "data:image/jpeg;base64,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";

var css$c = "img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: scale-down;\n}";

// See: https://github.com/home-assistant/core/blob/dev/homeassistant/components/camera/__init__.py#L101
const HASS_REJECTION_CUTOFF_MS = 5 * 60 * 1000;
let FrigateCardImage = class FrigateCardImage extends s$2 {
    constructor() {
        super(...arguments);
        this._boundVisibilityHandler = this._visibilityHandler.bind(this);
    }
    /**
     * Set the image configuration.
     */
    set imageConfig(imageConfig) {
        this._imageConfig = imageConfig;
        if (this._cachedValueController) {
            this._cachedValueController.removeController();
        }
        this._cachedValueController = new CachedValueController(this, this._imageConfig.refresh_seconds, this._getImageSource.bind(this));
    }
    /**
     * Get the camera entity for the current camera configuration.
     * @returns The entity or undefined if no camera entity is available.
     */
    _getCameraEntity() {
        var _a, _b, _c;
        return ((_a = this.cameraConfig) === null || _a === void 0 ? void 0 : _a.camera_entity) || ((_c = (_b = this.cameraConfig) === null || _b === void 0 ? void 0 : _b.webrtc_card) === null || _c === void 0 ? void 0 : _c.entity);
    }
    /**
     * Determine whether the element should be updated.
     * @param changedProps The changed properties if any.
     * @returns `true` if the element should be updated.
     */
    shouldUpdate(changedProps) {
        var _a, _b, _c;
        if (!this.hass || document.visibilityState !== 'visible') {
            return false;
        }
        // If camera mode is enabled, reject all updates if hass is older than
        // HASS_REJECTION_CUTOFF_MS or if HASS is not currently connected. By using
        // an older hass (even if it is not the property being updated), we run the
        // risk that the JS has an old access token for the camera, and that results
        // in a notification on the HA UI about a failed login. See
        // https://github.com/dermotduffy/frigate-hass-card/issues/398 .
        const cameraEntity = this._getCameraEntity();
        const state = cameraEntity ? this.hass.states[cameraEntity] : undefined;
        if (((_a = this._imageConfig) === null || _a === void 0 ? void 0 : _a.mode) === 'camera' &&
            (!this.hass.connected ||
                !state ||
                Date.now() - Date.parse(state.last_updated) >= HASS_REJECTION_CUTOFF_MS)) {
            return false;
        }
        if (changedProps.has('hass') &&
            changedProps.size == 1 &&
            ((_b = this._imageConfig) === null || _b === void 0 ? void 0 : _b.mode) === 'camera' &&
            cameraEntity) {
            if (shouldUpdateBasedOnHass(this.hass, changedProps.get('hass'), [cameraEntity])) {
                // If the state of the camera entity has changed, remove the cached
                // value (will be re-calculated in willUpdate). This is important to
                // ensure a changed access token is immediately used.
                (_c = this._cachedValueController) === null || _c === void 0 ? void 0 : _c.clearValue();
                return true;
            }
            return false;
        }
        return true;
    }
    /**
     * Ensure there is a cached value before an update.
     * @param _changedProps The changed properties
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    willUpdate(_changedProps) {
        var _a, _b;
        if (!((_a = this._cachedValueController) === null || _a === void 0 ? void 0 : _a.value)) {
            (_b = this._cachedValueController) === null || _b === void 0 ? void 0 : _b.updateValue();
        }
    }
    /**
     * Component connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('visibilitychange', this._boundVisibilityHandler);
    }
    /**
     * Component disconnected callback.
     */
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this._boundVisibilityHandler);
        super.disconnectedCallback();
    }
    /**
     * Handle document visibility changes.
     */
    _visibilityHandler() {
        var _a;
        if (!this._image) {
            return;
        }
        if (document.visibilityState === 'hidden') {
            // Set the image to default when the document is hidden. This is to avoid
            // some browsers (e.g. Firefox) eagerly re-loading the old image when the
            // document regains visibility -- for some images (e.g. camera mode) the
            // image may be using an old-expired token and re-use prior to
            // re-generation of a new URL would generate an unauthorized request
            // (401), see:
            // https://github.com/dermotduffy/frigate-hass-card/issues/398
            (_a = this._cachedValueController) === null || _a === void 0 ? void 0 : _a.clearValue();
            this._forceStockImage();
        }
        else {
            // If the document is freshly re-visible, immediately re-render it to
            // restore the image src. If the HASS object is old (i.e. browser tab was
            // inactive for some time) this update request may be (correctly)
            // rejected.
            this.requestUpdate();
        }
    }
    /**
     * Build a working absolute image URL that the browser will not cache.
     * @param url An input URL (may be relative to document origin)
     * @returns A new URL (absolute, will not be browser cached).
     */
    _buildImageURL(url) {
        const urlObj = new URL(url, document.baseURI);
        urlObj.searchParams.append('_t', String(Date.now()));
        return urlObj.toString();
    }
    _getImageSource() {
        var _a, _b, _c;
        if (((_a = this._imageConfig) === null || _a === void 0 ? void 0 : _a.mode) === 'url' && ((_b = this._imageConfig) === null || _b === void 0 ? void 0 : _b.url)) {
            return this._buildImageURL(this._imageConfig.url);
        }
        else if (this.hass && ((_c = this._imageConfig) === null || _c === void 0 ? void 0 : _c.mode) === 'camera') {
            const entity = this._getCameraEntity();
            if (entity) {
                const state = this.hass.states[entity];
                if (state && state.attributes.entity_picture) {
                    return this._buildImageURL(state.attributes.entity_picture);
                }
            }
        }
        return img;
    }
    /**
     * Force the img element to the stock image.
     */
    _forceStockImage() {
        if (this._image) {
            this._image.src = img;
        }
    }
    render() {
        var _a;
        const src = (_a = this._cachedValueController) === null || _a === void 0 ? void 0 : _a.value;
        return src
            ? $ ` <img
          src=${src}
          @load=${(ev) => {
                dispatchMediaShowEvent(this, ev);
            }}
          @error=${() => {
                var _a, _b;
                if (((_a = this._imageConfig) === null || _a === void 0 ? void 0 : _a.mode) === 'camera') {
                    // In camera mode, the user has likely not made an error, but HA
                    // may be unavailble, so show the stock image.
                    this._forceStockImage();
                }
                else if (((_b = this._imageConfig) === null || _b === void 0 ? void 0 : _b.mode) === 'url') {
                    // In url mode, the user likely specified a URL that cannot be
                    // resolved. Show an error message.
                    dispatchErrorMessageEvent(this, localize('error.image_load_error'), this._imageConfig);
                }
            }}
        />`
            : $ ``;
    }
    static get styles() {
        return o$7(css$c);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardImage.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardImage.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardImage.prototype, "cameraConfig", void 0);
__decorate([
    t$3()
], FrigateCardImage.prototype, "_imageConfig", void 0);
__decorate([
    i$3('img')
], FrigateCardImage.prototype, "_image", void 0);
FrigateCardImage = __decorate([
    n$4('frigate-card-image')
], FrigateCardImage);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var isString = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * determine a string type
 * @param str
 * @returns {boolean}
 */

var _default = function _default(str) {
  return typeof str === 'string' && str.constructor === String;
};

exports["default"] = _default;
});

var isString$1 = unwrapExports(isString);

var isPromise = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * determine a promise type
 * @param promise
 * @returns {boolean}
 */

var _default = function _default(promise) {
  return Object.prototype.toString.call(promise).slice(8, -1) === 'Promise';
};

exports["default"] = _default;
});

unwrapExports(isPromise);

var functionToPromise = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isPromise = _interopRequireDefault(isPromise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
 * function to promise
 * @param normalFunction
 * @param timeout
 * @returns {Promise<any>}
 */


var _default = function _default(normalFunction) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isPromise["default"])(normalFunction)) {
    return normalFunction;
  } // eslint-disable-next-line no-undef


  return new Promise(function (resolve) {
    normalFunction();
    setTimeout(resolve, timeout);
  });
};

exports["default"] = _default;
});

var functionToPromise$1 = unwrapExports(functionToPromise);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "._2RIcqcDcdd,._9Rxgc3-sVf,.H-DEgIh9Aq,.nk-GvVcgZw{position:absolute;z-index:1;left:0;top:0;width:100%;height:100%}._9Rxgc3-sVf{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}._2RIcqcDcdd,.nk-GvVcgZw{display:block}._2RIcqcDcdd.HE6yLI4_vV{display:none}._9Rxgc3-sVf,.H-DEgIh9Aq{opacity:.7;cursor:pointer;-webkit-tap-highlight-color:rgba(255,0,0,0)}.HE6yLI4_vV._9Rxgc3-sVf,.HE6yLI4_vV.H-DEgIh9Aq{display:none}._9Rxgc3-sVf{z-index:10}._9Rxgc3-sVf>svg{width:12vw;height:12vw;max-width:60px;max-height:60px;fill:#fff}.H-DEgIh9Aq{z-index:10;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.H-DEgIh9Aq>svg{margin:0 15px 15px 0;width:9vw;height:9vw;max-width:40px;max-height:40px;fill:#fff}";
var _style = {"canvas":"nk-GvVcgZw","poster":"_2RIcqcDcdd","playButton":"_9Rxgc3-sVf","unmuteButton":"H-DEgIh9Aq","hidden":"HE6yLI4_vV"};
styleInject(css_248z);

/**
 * PLAY_BUTTON HTML
 * @type {string}
 */
var PLAY_BUTTON = "\n<svg viewBox=\"0 0 64 64\">\n  <path d=\"M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z\"/>\n</svg>\n";
/**
 * UNMUTE_BUTTON HTML
 * @type {string}
 */

var UNMUTE_BUTTON = "\n<svg viewBox=\"0 0 64 64\">\n  <path d=\"M58.3,45.5l-4.8-4.3c1.4-2.9,2.2-6.2,2.2-9.6c0-11.1-8.2-20.3-18.9-21.9V3.3C50.9,4.9,62,16.9,62,31.6 C62,36.6,60.6,41.4,58.3,45.5L58.3,45.5z M30.4,5.6v15.2l-8.3-7.3L30.4,5.6L30.4,5.6z M36.7,19.9c4.6,1.9,7.9,6.4,7.9,11.7 c0,0.6-0.1,1.1-0.1,1.7l-7.8-6.9V19.9L36.7,19.9z M57.5,60.7l-7.1-6.3c-3.9,2.9-8.6,4.8-13.7,5.4v-6.4c3.2-0.5,6.2-1.7,8.8-3.4 l-8.1-7.2c-0.2,0.1-0.5,0.3-0.7,0.4v-1l-6.3-5.6v20.2L15.4,42.6H2V20.5h10.2l-9.7-8.6l4.2-4.7L61.7,56L57.5,60.7L57.5,60.7z\"/>\n</svg>\n";

var VideoElement = /*#__PURE__*/function () {
  function VideoElement(wrapper, videoUrl, _temp, overlayOptions) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$canvas = _ref.canvas,
        canvas = _ref$canvas === void 0 ? '' : _ref$canvas,
        _ref$poster = _ref.poster,
        poster = _ref$poster === void 0 ? '' : _ref$poster,
        _ref$autoplay = _ref.autoplay,
        autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
        _ref$autoSetWrapperSi = _ref.autoSetWrapperSize,
        autoSetWrapperSize = _ref$autoSetWrapperSi === void 0 ? false : _ref$autoSetWrapperSi,
        _ref$loop = _ref.loop,
        loop = _ref$loop === void 0 ? false : _ref$loop,
        _ref$control = _ref.control,
        control = _ref$control === void 0 ? true : _ref$control,
        _ref$decodeFirstFrame = _ref.decodeFirstFrame,
        decodeFirstFrame = _ref$decodeFirstFrame === void 0 ? true : _ref$decodeFirstFrame,
        _ref$picMode = _ref.picMode,
        picMode = _ref$picMode === void 0 ? false : _ref$picMode,
        _ref$progressive = _ref.progressive,
        progressive = _ref$progressive === void 0 ? true : _ref$progressive,
        _ref$chunkSize = _ref.chunkSize,
        chunkSize = _ref$chunkSize === void 0 ? 1024 * 1024 : _ref$chunkSize,
        _ref$hooks = _ref.hooks,
        hooks = _ref$hooks === void 0 ? {} : _ref$hooks;

    if (overlayOptions === void 0) {
      overlayOptions = {};
    }

    this.options = _extends({
      videoUrl: videoUrl,
      canvas: canvas,
      poster: poster,
      picMode: picMode,
      autoplay: autoplay,
      autoSetWrapperSize: autoSetWrapperSize,
      loop: loop,
      control: control,
      decodeFirstFrame: decodeFirstFrame,
      progressive: progressive,
      chunkSize: chunkSize,
      hooks: _extends({
        play: function play() {},
        pause: function pause() {},
        stop: function stop() {},
        load: function load() {}
      }, hooks)
    }, overlayOptions);
    this.options.needPlayButton = this.options.control && !this.options.picMode;
    this.player = null; // Setup canvas and play button

    this.els = {
      wrapper: isString$1(wrapper) ? document.querySelector(wrapper) : wrapper,
      canvas: null,
      playButton: document.createElement('div'),
      unmuteButton: null,
      poster: null
    };

    if (window.getComputedStyle(this.els.wrapper).getPropertyValue('position') === 'static') {
      this.els.wrapper.style.position = 'relative';
    }

    this.els.wrapper.clientRect = this.els.wrapper.getBoundingClientRect();
    this.initCanvas();
    this.initPlayButton();
    this.initPlayer();
  }

  var _proto = VideoElement.prototype;

  _proto.initCanvas = function initCanvas() {
    if (this.options.canvas) {
      this.els.canvas = isString$1(this.options.canvas) ? document.querySelector(this.options.canvas) : this.options.canvas;
    } else {
      this.els.canvas = document.createElement('canvas');
      this.els.canvas.classList.add(_style.canvas);
      this.els.wrapper.appendChild(this.els.canvas);
    }
  };

  _proto.initPlayer = function initPlayer() {
    var _this = this;

    // Parse the data-options - we try to decode the values as json. This way
    // we can get proper boolean and number values. If JSON.parse() fails,
    // treat it as a string.
    this.options = _extends(this.options, {
      canvas: this.els.canvas
    }); // eslint-disable-next-line no-underscore-dangle

    var _options = _extends({}, this.options, {
      autoplay: false
    }); // Create the player instance


    this.player = new Player(this.options.videoUrl, _options, {
      play: function play() {
        if (_this.options.needPlayButton) {
          _this.els.playButton.classList.add(_style.hidden);
        }

        if (_this.els.poster) {
          _this.els.poster.classList.add(_style.hidden);
        }

        _this.options.hooks.play();
      },
      pause: function pause() {
        if (_this.options.needPlayButton) {
          _this.els.playButton.classList.remove(_style.hidden);
        }

        _this.options.hooks.pause();
      },
      stop: function stop() {
        if (_this.els.poster) {
          _this.els.poster.classList.remove(_style.hidden);
        }

        _this.options.hooks.stop();
      },
      load: function load() {
        if (_this.options.autoplay) {
          _this.play();
        }

        _this._autoSetWrapperSize();

        _this.options.hooks.load();
      }
    });

    this._copyPlayerFuncs();

    this.els.wrapper.playerInstance = this.player; // Setup the poster element, if any

    if (this.options.poster && !this.options.autoplay && !this.player.options.streaming) {
      this.options.decodeFirstFrame = false;
      this.els.poster = new Image();
      this.els.poster.src = this.options.poster;
      this.els.poster.classList.add(_style.poster);
      this.els.wrapper.appendChild(this.els.poster);
    } // Add the click handler if this video is pausable


    if (!this.player.options.streaming) {
      this.els.wrapper.addEventListener('click', this.onClick.bind(this));
    } // Hide the play button if this video immediately begins playing


    if (this.options.autoplay || this.player.options.streaming) {
      this.els.playButton.classList.add(_style.hidden);
    } // Set up the unlock audio button for iOS devices. iOS only allows us to
    // play audio after a user action has initiated playing. For autoplay or
    // streaming players we set up a muted speaker icon as the button. For all
    // others, we can simply use the play button.


    if (this.player.audioOut && !this.player.audioOut.unlocked) {
      var unlockAudioElement = this.els.wrapper;

      if (this.options.autoplay || this.player.options.streaming) {
        this.els.unmuteButton = document.createElement('div');
        this.els.unmuteButton.innerHTML = UNMUTE_BUTTON;
        this.els.unmuteButton.classList.add(_style.unmuteButton);
        this.els.wrapper.appendChild(this.els.unmuteButton);
        unlockAudioElement = this.els.unmuteButton;
      }

      this.unlockAudioBound = this.onUnlockAudio.bind(this, unlockAudioElement);
      unlockAudioElement.addEventListener('touchstart', this.unlockAudioBound, false);
      unlockAudioElement.addEventListener('click', this.unlockAudioBound, true);
    }
  };

  _proto.initPlayButton = function initPlayButton() {
    if (!this.options.needPlayButton) {
      return;
    }

    this.els.playButton.classList.add(_style.playButton);
    this.els.playButton.innerHTML = PLAY_BUTTON;
    this.els.wrapper.appendChild(this.els.playButton);
  };

  _proto._autoSetWrapperSize = function _autoSetWrapperSize() {
    var _this2 = this;

    if (!this.options.autoSetWrapperSize) {
      return Promise.resolve();
    }

    var destination = this.player.video.destination;

    if (!destination) {
      return Promise.resolve();
    }

    return Promise.resolve().then(function () {
      return functionToPromise$1(function () {
        _this2.els.wrapper.style.width = destination.width + "px";
        _this2.els.wrapper.style.height = destination.height + "px";
      });
    });
  };

  _proto.onUnlockAudio = function onUnlockAudio(element, ev) {
    var _this3 = this;

    if (this.els.unmuteButton) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    this.player.audioOut.unlock(function () {
      if (_this3.els.unmuteButton) {
        _this3.els.unmuteButton.classList.add(_style.hidden);
      }

      element.removeEventListener('touchstart', _this3.unlockAudioBound);
      element.removeEventListener('click', _this3.unlockAudioBound);
    });
  };

  _proto.onClick = function onClick() {
    if (!this.options.control) {
      return;
    }

    if (this.player.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  /**
   * copy player functions
   * @private
   */
  ;

  _proto._copyPlayerFuncs = function _copyPlayerFuncs() {
    var _this4 = this;

    this.play = function () {
      return _this4.player.play();
    };

    this.pause = function () {
      return _this4.player.pause();
    };

    this.stop = function () {
      return _this4.player.stop();
    };

    this.destroy = function () {
      _this4.player.destroy();

      _this4.els.wrapper.innerHTML = '';
      _this4.els.wrapper.playerInstance = null;
    };
  };

  return VideoElement;
}();

var Now = function Now() {
  return window.performance ? window.performance.now() / 1000 : Date.now() / 1000;
};
var CreateVideoElements = function CreateVideoElements() {
  var elements = document.querySelectorAll('.jsmpeg');

  for (var i = 0; i < elements.length; i++) {
    // eslint-disable-next-line no-new
    new VideoElement(elements[i]);
  }
};
var Fill = function Fill(array, value) {
  if (array.fill) {
    array.fill(value);
  } else {
    for (var i = 0; i < array.length; i++) {
      array[i] = value;
    }
  }
};
var Base64ToArrayBuffer = function Base64ToArrayBuffer(base64) {
  var binary = window.atob(base64);
  var length = binary.length;
  var bytes = new Uint8Array(length);

  for (var i = 0; i < length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes.buffer;
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["resume"] }] */
var AjaxSource = /*#__PURE__*/function () {
  function AjaxSource(url, options) {
    this.url = url;
    this.destination = null;
    this.request = null;
    this.streaming = false;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted;

    if (options.hookOnEstablished) {
      this.hookOnEstablished = options.hookOnEstablished;
    }
  }

  var _proto = AjaxSource.prototype;

  _proto.connect = function connect(destination) {
    this.destination = destination;
  };

  _proto.start = function start() {
    this.request = new XMLHttpRequest(); // eslint-disable-next-line func-names

    this.request.onreadystatechange = function () {
      if (this.request.readyState === this.request.DONE && this.request.status === 200) {
        this.onLoad(this.request.response);
      }
    }.bind(this);

    this.request.onprogress = this.onProgress.bind(this);
    this.request.open('GET', this.url);
    this.request.responseType = 'arraybuffer';
    this.request.send();
  };

  _proto.resume = function resume() {// Nothing to do here
  };

  _proto.destroy = function destroy() {
    this.request.abort();
  };

  _proto.onProgress = function onProgress(ev) {
    this.progress = ev.loaded / ev.total;
  };

  _proto.onLoad = function onLoad(data) {
    this.established = true;
    this.completed = true;
    this.progress = 1;

    if (this.hookOnEstablished) {
      this.hookOnEstablished();
    }

    if (this.onEstablishedCallback) {
      this.onEstablishedCallback(this);
    }

    if (this.onCompletedCallback) {
      this.onCompletedCallback(this);
    }

    if (this.destination) {
      this.destination.write(data);
    }
  };

  return AjaxSource;
}();

var AjaxProgressiveSource = /*#__PURE__*/function () {
  function AjaxProgressiveSource(url, options) {
    this.url = url;
    this.destination = null;
    this.request = null;
    this.streaming = false;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.fileSize = 0;
    this.loadedSize = 0;
    this.chunkSize = options.chunkSize || 1024 * 1024;
    this.isLoading = false;
    this.loadStartTime = 0;
    this.throttled = options.throttled !== false;
    this.aborted = false;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted;

    if (options.hookOnEstablished) {
      this.hookOnEstablished = options.hookOnEstablished;
    }
  }

  var _proto = AjaxProgressiveSource.prototype;

  _proto.connect = function connect(destination) {
    this.destination = destination;
  };

  _proto.start = function start() {
    var _this = this;

    this.request = new XMLHttpRequest();

    this.request.onreadystatechange = function () {
      if (_this.request.readyState === _this.request.DONE) {
        _this.fileSize = parseInt(_this.request.getResponseHeader('Content-Length'), 10);

        _this.loadNextChunk();
      }
    };

    this.request.onprogress = this.onProgress.bind(this);
    this.request.open('HEAD', this.url);
    this.request.send();
  };

  _proto.resume = function resume(secondsHeadroom) {
    if (this.isLoading || !this.throttled) {
      return;
    } // Guess the worst case loading time with lots of safety margin. This is
    // somewhat arbitrary...


    var worstCaseLoadingTime = this.loadTime * 8 + 2;

    if (worstCaseLoadingTime > secondsHeadroom) {
      this.loadNextChunk();
    }
  };

  _proto.destroy = function destroy() {
    this.request.abort();
    this.aborted = true;
  };

  _proto.loadNextChunk = function loadNextChunk() {
    var _this2 = this;

    var start = this.loadedSize;
    var end = Math.min(this.loadedSize + this.chunkSize - 1, this.fileSize - 1);

    if (start >= this.fileSize || this.aborted) {
      this.completed = true;

      if (this.onCompletedCallback) {
        this.onCompletedCallback(this);
      }

      return;
    }

    this.isLoading = true;
    this.loadStartTime = Now();
    this.request = new XMLHttpRequest();

    this.request.onreadystatechange = function () {
      if (_this2.request.readyState === _this2.request.DONE && _this2.request.status >= 200 && _this2.request.status < 300) {
        _this2.onChunkLoad(_this2.request.response);
      } else if (_this2.request.readyState === _this2.request.DONE) {
        // Retry?
        if (_this2.loadFails++ < 3) {
          _this2.loadNextChunk();
        }
      }
    };

    if (start === 0) {
      this.request.onprogress = this.onProgress.bind(this);
    }

    this.request.open('GET', this.url + "?" + start + "-" + end);
    this.request.setRequestHeader('Range', "bytes=" + start + "-" + end);
    this.request.responseType = 'arraybuffer';
    this.request.send();
  };

  _proto.onProgress = function onProgress(ev) {
    this.progress = ev.loaded / ev.total;
  };

  _proto.onChunkLoad = function onChunkLoad(data) {
    var isFirstChunk = !this.established;
    this.established = true;
    this.progress = 1;
    this.loadedSize += data.byteLength;
    this.loadFails = 0;
    this.isLoading = false;

    if (isFirstChunk && this.hookOnEstablished) {
      this.hookOnEstablished();
    }

    if (isFirstChunk && this.onEstablishedCallback) {
      this.onEstablishedCallback(this);
    }

    if (this.destination) {
      this.destination.write(data);
    }

    this.loadTime = Now() - this.loadStartTime;

    if (!this.throttled) {
      this.loadNextChunk();
    }
  };

  return AjaxProgressiveSource;
}();

var WSSource = /*#__PURE__*/function () {
  function WSSource(url, options) {
    this.url = url;
    this.options = options;
    this.socket = null;
    this.streaming = true;
    this.callbacks = {
      connect: [],
      data: []
    };
    this.destination = null;
    this.reconnectInterval = // eslint-disable-next-line no-undefined
    options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
    this.shouldAttemptReconnect = !!this.reconnectInterval;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.reconnectTimeoutId = 0;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted; // Never used

    if (options.hookOnEstablished) {
      this.hookOnEstablished = options.hookOnEstablished;
    }
  }

  var _proto = WSSource.prototype;

  _proto.connect = function connect(destination) {
    this.destination = destination;
  };

  _proto.destroy = function destroy() {
    clearTimeout(this.reconnectTimeoutId);
    this.shouldAttemptReconnect = false;
    this.socket.close();
  };

  _proto.start = function start() {
    this.shouldAttemptReconnect = !!this.reconnectInterval;
    this.progress = 0;
    this.established = false;
    this.socket = new WebSocket(this.url, this.options.protocols || null);
    this.socket.binaryType = 'arraybuffer';
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onerror = this.onClose.bind(this);
    this.socket.onclose = this.onClose.bind(this);
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.resume = function resume() {// Nothing to do here
  };

  _proto.onOpen = function onOpen() {
    this.progress = 1;
  };

  _proto.onClose = function onClose() {
    var _this = this;

    if (this.shouldAttemptReconnect) {
      clearTimeout(this.reconnectTimeoutId);
      this.reconnectTimeoutId = setTimeout(function () {
        _this.start();
      }, this.reconnectInterval * 1000);
    }
  };

  _proto.onMessage = function onMessage(ev) {
    var isFirstChunk = !this.established;
    this.established = true;

    if (isFirstChunk && this.hookOnEstablished) {
      this.hookOnEstablished();
    }

    if (isFirstChunk && this.onEstablishedCallback) {
      this.onEstablishedCallback(this);
    }

    if (this.destination) {
      this.destination.write(ev.data);
    }
  };

  return WSSource;
}();

var BitBuffer = /*#__PURE__*/function () {
  function BitBuffer(bufferOrLength, mode) {
    if (typeof bufferOrLength === 'object') {
      this.bytes = bufferOrLength instanceof Uint8Array ? bufferOrLength : new Uint8Array(bufferOrLength);
      this.byteLength = this.bytes.length;
    } else {
      this.bytes = new Uint8Array(bufferOrLength || 1024 * 1024);
      this.byteLength = 0;
    }

    this.mode = mode || BitBuffer.MODE.EXPAND;
    this.index = 0;
  }

  var _proto = BitBuffer.prototype;

  _proto.resize = function resize(size) {
    var newBytes = new Uint8Array(size);

    if (this.byteLength !== 0) {
      this.byteLength = Math.min(this.byteLength, size);
      newBytes.set(this.bytes, 0, this.byteLength);
    }

    this.bytes = newBytes;
    this.index = Math.min(this.index, this.byteLength << 3);
  };

  _proto.evict = function evict(sizeNeeded) {
    var bytePos = this.index >> 3;
    var available = this.bytes.length - this.byteLength; // If the current index is the write position, we can simply reset both
    // to 0. Also reset (and throw away yet unread data) if we won't be able
    // to fit the new data in even after a normal eviction.

    if (this.index === this.byteLength << 3 || sizeNeeded > available + bytePos // emergency evac
    ) {
        this.byteLength = 0;
        this.index = 0;
        return;
      } else if (bytePos === 0) {
      // Nothing read yet - we can't evict anything
      return;
    } // Some browsers don't support copyWithin() yet - we may have to do
    // it manually using set and a subarray


    if (this.bytes.copyWithin) {
      this.bytes.copyWithin(0, bytePos, this.byteLength);
    } else {
      this.bytes.set(this.bytes.subarray(bytePos, this.byteLength));
    }

    this.byteLength -= bytePos;
    this.index -= bytePos << 3;
  };

  _proto.write = function write(buffers) {
    var isArrayOfBuffers = typeof buffers[0] === 'object';
    var totalLength = 0;
    var available = this.bytes.length - this.byteLength; // Calculate total byte length

    if (isArrayOfBuffers) {
      totalLength = 0;

      for (var i = 0; i < buffers.length; i++) {
        totalLength += buffers[i].byteLength;
      }
    } else {
      totalLength = buffers.byteLength;
    } // Do we need to resize or evict?


    if (totalLength > available) {
      if (this.mode === BitBuffer.MODE.EXPAND) {
        var newSize = Math.max(this.bytes.length * 2, totalLength - available);
        this.resize(newSize);
      } else {
        this.evict(totalLength);
      }
    }

    if (isArrayOfBuffers) {
      for (var _i = 0; _i < buffers.length; _i++) {
        this.appendSingleBuffer(buffers[_i]);
      }
    } else {
      this.appendSingleBuffer(buffers);
    }

    return totalLength;
  };

  _proto.appendSingleBuffer = function appendSingleBuffer(buffer) {
    buffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    this.bytes.set(buffer, this.byteLength);
    this.byteLength += buffer.length;
  };

  _proto.findNextStartCode = function findNextStartCode() {
    for (var i = this.index + 7 >> 3; i < this.byteLength; i++) {
      if (this.bytes[i] === 0x00 && this.bytes[i + 1] === 0x00 && this.bytes[i + 2] === 0x01) {
        this.index = i + 4 << 3;
        return this.bytes[i + 3];
      }
    }

    this.index = this.byteLength << 3;
    return -1;
  };

  _proto.findStartCode = function findStartCode(code) {
    var current = this.findNextStartCode();

    if (current === code || current === -1) {
      return current;
    }

    return -1;
  };

  _proto.nextBytesAreStartCode = function nextBytesAreStartCode() {
    var i = this.index + 7 >> 3;
    return i >= this.byteLength || this.bytes[i] === 0x00 && this.bytes[i + 1] === 0x00 && this.bytes[i + 2] === 0x01;
  };

  _proto.peek = function peek(count) {
    var offset = this.index;
    var value = 0;

    while (count) {
      var currentByte = this.bytes[offset >> 3];
      var remaining = 8 - (offset & 7); // remaining bits in byte

      var read = remaining < count ? remaining : count; // bits in this run

      var shift = remaining - read;
      var mask = 0xff >> 8 - read;
      value = value << read | (currentByte & mask << shift) >> shift;
      offset += read;
      count -= read;
    }

    return value;
  };

  _proto.read = function read(count) {
    var value = this.peek(count);
    this.index += count;
    return value;
  };

  _proto.skip = function skip(count) {
    return this.index += count;
  };

  _proto.rewind = function rewind(count) {
    this.index = Math.max(this.index - count, 0);
  };

  _proto.has = function has(count) {
    return (this.byteLength << 3) - this.index >= count;
  };

  return BitBuffer;
}();

BitBuffer.MODE = {
  EVICT: 1,
  EXPAND: 2
};

var TS = /*#__PURE__*/function () {
  function TS() {
    this.bits = null;
    this.leftoverBytes = null;
    this.guessVideoFrameEnd = true;
    this.pidsToStreamIds = {};
    this.pesPacketInfo = {};
    this.startTime = 0;
    this.currentTime = 0;
  }

  var _proto = TS.prototype;

  _proto.connect = function connect(streamId, destination) {
    this.pesPacketInfo[streamId] = {
      destination: destination,
      currentLength: 0,
      totalLength: 0,
      pts: 0,
      buffers: []
    };
  };

  _proto.write = function write(buffer) {
    if (this.leftoverBytes) {
      var totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
      this.bits = new BitBuffer(totalLength);
      this.bits.write([this.leftoverBytes, buffer]);
    } else {
      this.bits = new BitBuffer(buffer);
    } // eslint-disable-next-line no-empty


    while (this.bits.has(188 << 3) && this.parsePacket()) {}

    var leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
    this.leftoverBytes = leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
  };

  _proto.parsePacket = function parsePacket() {
    // Check if we're in sync with packet boundaries; attempt to resync if not.
    if (this.bits.read(8) !== 0x47) {
      if (!this.resync()) {
        // Couldn't resync; maybe next time...
        return false;
      }
    }

    var end = (this.bits.index >> 3) + 187; // eslint-disable-next-line no-unused-vars

    this.bits.read(1);
    var payloadStart = this.bits.read(1); // eslint-disable-next-line no-unused-vars

    this.bits.read(1);
    var pid = this.bits.read(13); // eslint-disable-next-line no-unused-vars

    this.bits.read(2);
    var adaptationField = this.bits.read(2); // eslint-disable-next-line no-unused-vars

    this.bits.read(4); // If this is the start of a new payload; signal the end of the previous
    // frame, if we didn't do so already.

    var streamId = this.pidsToStreamIds[pid];

    if (payloadStart && streamId) {
      var pi = this.pesPacketInfo[streamId];

      if (pi && pi.currentLength) {
        this.packetComplete(pi);
      }
    } // Extract current payload


    if (adaptationField & 0x1) {
      if (adaptationField & 0x2) {
        var adaptationFieldLength = this.bits.read(8);
        this.bits.skip(adaptationFieldLength << 3);
      }

      if (payloadStart && this.bits.nextBytesAreStartCode()) {
        this.bits.skip(24);
        streamId = this.bits.read(8);
        this.pidsToStreamIds[pid] = streamId;
        var packetLength = this.bits.read(16);
        this.bits.skip(8);
        var ptsDtsFlag = this.bits.read(2);
        this.bits.skip(6);
        var headerLength = this.bits.read(8);
        var payloadBeginIndex = this.bits.index + (headerLength << 3);
        var _pi = this.pesPacketInfo[streamId];

        if (_pi) {
          var pts = 0;

          if (ptsDtsFlag & 0x2) {
            // The Presentation Timestamp is encoded as 33(!) bit
            // integer, but has a "marker bit" inserted at weird places
            // in between, making the whole thing 5 bytes in size.
            // You can't make this shit up...
            this.bits.skip(4);
            var p32_30 = this.bits.read(3);
            this.bits.skip(1);
            var p29_15 = this.bits.read(15);
            this.bits.skip(1);
            var p14_0 = this.bits.read(15);
            this.bits.skip(1); // Can't use bit shifts here; we need 33 bits of precision,
            // so we're using JavaScript's double number type. Also
            // divide by the 90khz clock to get the pts in seconds.

            pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 90000;
            this.currentTime = pts;

            if (this.startTime === -1) {
              this.startTime = pts;
            }
          }

          var payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
          this.packetStart(_pi, pts, payloadLength);
        } // Skip the rest of the header without parsing it


        this.bits.index = payloadBeginIndex;
      }

      if (streamId) {
        // Attempt to detect if the PES packet is complete. For Audio (and
        // other) packets, we received a total packet length with the PES
        // header, so we can check the current length.
        // For Video packets, we have to guess the end by detecting if this
        // TS packet was padded - there's no good reason to pad a TS packet
        // in between, but it might just fit exactly. If this fails, we can
        // only wait for the next PES header for that stream.
        var _pi2 = this.pesPacketInfo[streamId];

        if (_pi2) {
          var start = this.bits.index >> 3;
          var complete = this.packetAddData(_pi2, start, end);
          var hasPadding = !payloadStart && adaptationField & 0x2;

          if (complete || this.guessVideoFrameEnd && hasPadding) {
            this.packetComplete(_pi2);
          }
        }
      }
    }

    this.bits.index = end << 3;
    return true;
  };

  _proto.resync = function resync() {
    // Check if we have enough data to attempt a resync. We need 5 full packets.
    if (!this.bits.has(188 * 6 << 3)) {
      return false;
    }

    var byteIndex = this.bits.index >> 3; // Look for the first sync token in the first 187 bytes

    for (var i = 0; i < 187; i++) {
      if (this.bits.bytes[byteIndex + i] === 0x47) {
        // Look for 4 more sync tokens, each 188 bytes appart
        var foundSync = true;

        for (var j = 1; j < 5; j++) {
          if (this.bits.bytes[byteIndex + i + 188 * j] !== 0x47) {
            foundSync = false;
            break;
          }
        }

        if (foundSync) {
          this.bits.index = byteIndex + i + 1 << 3;
          return true;
        }
      }
    } // In theory, we shouldn't arrive here. If we do, we had enough data but
    // still didn't find sync - this can only happen if we were fed garbage
    // data. Check your source!


    console.warn('JSMpeg: Possible garbage data. Skipping.');
    this.bits.skip(187 << 3);
    return false;
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.packetStart = function packetStart(pi, pts, payloadLength) {
    pi.totalLength = payloadLength;
    pi.currentLength = 0;
    pi.pts = pts;
  };

  _proto.packetAddData = function packetAddData(pi, start, end) {
    pi.buffers.push(this.bits.bytes.subarray(start, end));
    pi.currentLength += end - start;
    return pi.totalLength !== 0 && pi.currentLength >= pi.totalLength;
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.packetComplete = function packetComplete(pi) {
    pi.destination.write(pi.pts, pi.buffers);
    pi.totalLength = 0;
    pi.currentLength = 0;
    pi.buffers = [];
  };

  return TS;
}();

TS.STREAM = {
  PACK_HEADER: 0xba,
  SYSTEM_HEADER: 0xbb,
  PROGRAM_MAP: 0xbc,
  PRIVATE_1: 0xbd,
  PADDING: 0xbe,
  PRIVATE_2: 0xbf,
  AUDIO_1: 0xc0,
  VIDEO_1: 0xe0,
  DIRECTORY: 0xff
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["destroy"] }] */
var BaseDecoder = /*#__PURE__*/function () {
  function BaseDecoder(options) {
    this.destination = null;
    this.canPlay = false;
    this.collectTimestamps = !options.streaming;
    this.bytesWritten = 0;
    this.timestamps = [];
    this.timestampIndex = 0;
    this.startTime = 0;
    this.decodedTime = 0;
    Object.defineProperty(this, 'currentTime', {
      get: this.getCurrentTime
    });
  }

  var _proto = BaseDecoder.prototype;

  _proto.destroy = function destroy() {};

  _proto.connect = function connect(destination) {
    this.destination = destination;
  };

  _proto.bufferGetIndex = function bufferGetIndex() {
    return this.bits.index;
  };

  _proto.bufferSetIndex = function bufferSetIndex(index) {
    this.bits.index = index;
  };

  _proto.bufferWrite = function bufferWrite(buffers) {
    return this.bits.write(buffers);
  };

  _proto.write = function write(pts, buffers) {
    if (this.collectTimestamps) {
      if (this.timestamps.length === 0) {
        this.startTime = pts;
        this.decodedTime = pts;
      }

      this.timestamps.push({
        index: this.bytesWritten << 3,
        time: pts
      });
    }

    this.bytesWritten += this.bufferWrite(buffers);
    this.canPlay = true;
  };

  _proto.seek = function seek(time) {
    if (!this.collectTimestamps) {
      return;
    }

    this.timestampIndex = 0;

    for (var i = 0; i < this.timestamps.length; i++) {
      if (this.timestamps[i].time > time) {
        break;
      }

      this.timestampIndex = i;
    }

    var ts = this.timestamps[this.timestampIndex];

    if (ts) {
      this.bufferSetIndex(ts.index);
      this.decodedTime = ts.time;
    } else {
      this.bits.index = 0;
      this.decodedTime = this.startTime;
    }
  };

  _proto.decode = function decode() {
    this.advanceDecodedTime(0);
  };

  _proto.advanceDecodedTime = function advanceDecodedTime(seconds) {
    if (this.collectTimestamps) {
      var newTimestampIndex = -1;
      var currentIndex = this.bufferGetIndex();

      for (var i = this.timestampIndex; i < this.timestamps.length; i++) {
        if (this.timestamps[i].index > currentIndex) {
          break;
        }

        newTimestampIndex = i;
      } // Did we find a new PTS, different from the last? If so, we don't have
      // to advance the decoded time manually and can instead sync it exactly
      // to the PTS.


      if (newTimestampIndex !== -1 && newTimestampIndex !== this.timestampIndex) {
        this.timestampIndex = newTimestampIndex;
        this.decodedTime = this.timestamps[this.timestampIndex].time;
        return;
      }
    }

    this.decodedTime += seconds;
  };

  _proto.getCurrentTime = function getCurrentTime() {
    return this.decodedTime;
  };

  return BaseDecoder;
}();

var MPEG1 = /*#__PURE__*/function (_BaseDecoder) {
  _inheritsLoose(MPEG1, _BaseDecoder);

  function MPEG1(options) {
    var _this;

    _this = _BaseDecoder.call(this, options) || this;
    _this.onDecodeCallback = options.onVideoDecode;
    var bufferSize = options.videoBufferSize || 512 * 1024;
    var bufferMode = options.streaming ? BitBuffer.MODE.EVICT : BitBuffer.MODE.EXPAND;
    _this.bits = new BitBuffer(bufferSize, bufferMode);
    _this.customIntraQuantMatrix = new Uint8Array(64);
    _this.customNonIntraQuantMatrix = new Uint8Array(64);
    _this.blockData = new Int32Array(64);
    _this.currentFrame = 0;
    _this.decodeFirstFrame = options.decodeFirstFrame !== false;
    return _this;
  } // eslint-disable-next-line consistent-return


  var _proto = MPEG1.prototype;

  _proto.write = function write(pts, buffers) {
    BaseDecoder.prototype.write.call(this, pts, buffers);

    if (!this.hasSequenceHeader) {
      if (this.bits.findStartCode(MPEG1.START.SEQUENCE) === -1) {
        return false;
      }

      this.decodeSequenceHeader();

      if (this.decodeFirstFrame) {
        this.decode();
      }
    }
  };

  _proto.decode = function decode() {
    var startTime = Now();

    if (!this.hasSequenceHeader) {
      return false;
    }

    if (this.bits.findStartCode(MPEG1.START.PICTURE) === -1) {
      return false;
    }

    this.decodePicture();
    this.advanceDecodedTime(1 / this.frameRate);
    var elapsedTime = Now() - startTime;

    if (this.onDecodeCallback) {
      this.onDecodeCallback(this, elapsedTime);
    }

    return true;
  };

  _proto.readHuffman = function readHuffman(codeTable) {
    var state = 0;

    do {
      state = codeTable[state + this.bits.read(1)];
    } while (state >= 0 && codeTable[state] !== 0);

    return codeTable[state + 2];
  };

  _proto.decodeSequenceHeader = function decodeSequenceHeader() {
    var newWidth = this.bits.read(12);
    var newHeight = this.bits.read(12); // skip pixel aspect ratio

    this.bits.skip(4);
    this.frameRate = MPEG1.PICTURE_RATE[this.bits.read(4)]; // skip bitRate, marker, bufferSize and constrained bit

    this.bits.skip(18 + 1 + 10 + 1);

    if (newWidth !== this.width || newHeight !== this.height) {
      this.width = newWidth;
      this.height = newHeight;
      this.initBuffers();

      if (this.destination) {
        this.destination.resize(newWidth, newHeight);
      }
    }

    if (this.bits.read(1)) {
      // load custom intra quant matrix?
      for (var i = 0; i < 64; i++) {
        this.customIntraQuantMatrix[MPEG1.ZIG_ZAG[i]] = this.bits.read(8);
      }

      this.intraQuantMatrix = this.customIntraQuantMatrix;
    }

    if (this.bits.read(1)) {
      // load custom non intra quant matrix?
      for (var _i = 0; _i < 64; _i++) {
        var idx = MPEG1.ZIG_ZAG[_i];
        this.customNonIntraQuantMatrix[idx] = this.bits.read(8);
      }

      this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix;
    }

    this.hasSequenceHeader = true;
  };

  _proto.initBuffers = function initBuffers() {
    this.intraQuantMatrix = MPEG1.DEFAULT_INTRA_QUANT_MATRIX;
    this.nonIntraQuantMatrix = MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX;
    this.mbWidth = this.width + 15 >> 4;
    this.mbHeight = this.height + 15 >> 4;
    this.mbSize = this.mbWidth * this.mbHeight;
    this.codedWidth = this.mbWidth << 4;
    this.codedHeight = this.mbHeight << 4;
    this.codedSize = this.codedWidth * this.codedHeight;
    this.halfWidth = this.mbWidth << 3;
    this.halfHeight = this.mbHeight << 3; // Allocated buffers and resize the canvas

    this.currentY = new Uint8ClampedArray(this.codedSize);
    this.currentY32 = new Uint32Array(this.currentY.buffer);
    this.currentCr = new Uint8ClampedArray(this.codedSize >> 2);
    this.currentCr32 = new Uint32Array(this.currentCr.buffer);
    this.currentCb = new Uint8ClampedArray(this.codedSize >> 2);
    this.currentCb32 = new Uint32Array(this.currentCb.buffer);
    this.forwardY = new Uint8ClampedArray(this.codedSize);
    this.forwardY32 = new Uint32Array(this.forwardY.buffer);
    this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2);
    this.forwardCr32 = new Uint32Array(this.forwardCr.buffer);
    this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2);
    this.forwardCb32 = new Uint32Array(this.forwardCb.buffer);
  };

  _proto.decodePicture = function decodePicture() {
    this.currentFrame++;
    this.bits.skip(10); // skip temporalReference

    this.pictureType = this.bits.read(3);
    this.bits.skip(16); // skip vbv_delay
    // Skip B and D frames or unknown coding type

    if (this.pictureType <= 0 || this.pictureType >= MPEG1.PICTURE_TYPE.B) {
      return;
    } // full_pel_forward, forward_f_code


    if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
      this.fullPelForward = this.bits.read(1);
      this.forwardFCode = this.bits.read(3);

      if (this.forwardFCode === 0) {
        // Ignore picture with zero forward_f_code
        return;
      }

      this.forwardRSize = this.forwardFCode - 1;
      this.forwardF = 1 << this.forwardRSize;
    }

    var code = 0;

    do {
      code = this.bits.findNextStartCode();
    } while (code === MPEG1.START.EXTENSION || code === MPEG1.START.USER_DATA);

    while (code >= MPEG1.START.SLICE_FIRST && code <= MPEG1.START.SLICE_LAST) {
      this.decodeSlice(code & 0x000000ff);
      code = this.bits.findNextStartCode();
    }

    if (code !== -1) {
      // We found the next start code; rewind 32bits and let the main loop
      // handle it.
      this.bits.rewind(32);
    } // Invoke decode callbacks


    if (this.destination) {
      this.destination.render(this.currentY, this.currentCr, this.currentCb, true);
    } // If this is a reference picutre then rotate the prediction pointers


    if (this.pictureType === MPEG1.PICTURE_TYPE.INTRA || this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
      var tmpY = this.forwardY;
      var tmpY32 = this.forwardY32;
      var tmpCr = this.forwardCr;
      var tmpCr32 = this.forwardCr32;
      var tmpCb = this.forwardCb;
      var tmpCb32 = this.forwardCb32;
      this.forwardY = this.currentY;
      this.forwardY32 = this.currentY32;
      this.forwardCr = this.currentCr;
      this.forwardCr32 = this.currentCr32;
      this.forwardCb = this.currentCb;
      this.forwardCb32 = this.currentCb32;
      this.currentY = tmpY;
      this.currentY32 = tmpY32;
      this.currentCr = tmpCr;
      this.currentCr32 = tmpCr32;
      this.currentCb = tmpCb;
      this.currentCb32 = tmpCb32;
    }
  };

  _proto.decodeSlice = function decodeSlice(slice) {
    this.sliceBegin = true;
    this.macroblockAddress = (slice - 1) * this.mbWidth - 1; // Reset motion vectors and DC predictors

    this.motionFwH = this.motionFwHPrev = 0;
    this.motionFwV = this.motionFwVPrev = 0;
    this.dcPredictorY = 128;
    this.dcPredictorCr = 128;
    this.dcPredictorCb = 128;
    this.quantizerScale = this.bits.read(5); // skip extra bits

    while (this.bits.read(1)) {
      this.bits.skip(8);
    }

    do {
      this.decodeMacroblock();
    } while (!this.bits.nextBytesAreStartCode());
  };

  _proto.decodeMacroblock = function decodeMacroblock() {
    // Decode macroblock_address_increment
    var increment = 0;
    var t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);

    while (t === 34) {
      // macroblock_stuffing
      t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
    }

    while (t === 35) {
      // macroblock_escape
      increment += 33;
      t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
    }

    increment += t; // Process any skipped macroblocks

    if (this.sliceBegin) {
      // The first macroblock_address_increment of each slice is relative
      // to beginning of the preverious row, not the preverious macroblock
      this.sliceBegin = false;
      this.macroblockAddress += increment;
    } else {
      if (this.macroblockAddress + increment >= this.mbSize) {
        // Illegal (too large) macroblock_address_increment
        return;
      }

      if (increment > 1) {
        // Skipped macroblocks reset DC predictors
        this.dcPredictorY = 128;
        this.dcPredictorCr = 128;
        this.dcPredictorCb = 128; // Skipped macroblocks in P-pictures reset motion vectors

        if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
          this.motionFwH = this.motionFwHPrev = 0;
          this.motionFwV = this.motionFwVPrev = 0;
        }
      } // Predict skipped macroblocks


      while (increment > 1) {
        this.macroblockAddress++;
        this.mbRow = this.macroblockAddress / this.mbWidth | 0;
        this.mbCol = this.macroblockAddress % this.mbWidth;
        this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
        increment--;
      }

      this.macroblockAddress++;
    }

    this.mbRow = this.macroblockAddress / this.mbWidth | 0;
    this.mbCol = this.macroblockAddress % this.mbWidth; // Process the current macroblock

    var mbTable = MPEG1.MACROBLOCK_TYPE[this.pictureType];
    this.macroblockType = this.readHuffman(mbTable);
    this.macroblockIntra = this.macroblockType & 0x01;
    this.macroblockMotFw = this.macroblockType & 0x08; // Quantizer scale

    if ((this.macroblockType & 0x10) !== 0) {
      this.quantizerScale = this.bits.read(5);
    }

    if (this.macroblockIntra) {
      // Intra-coded macroblocks reset motion vectors
      this.motionFwH = this.motionFwHPrev = 0;
      this.motionFwV = this.motionFwVPrev = 0;
    } else {
      // Non-intra macroblocks reset DC predictors
      this.dcPredictorY = 128;
      this.dcPredictorCr = 128;
      this.dcPredictorCb = 128;
      this.decodeMotionVectors();
      this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
    } // Decode blocks


    var cbp = (this.macroblockType & 0x02) !== 0 ? this.readHuffman(MPEG1.CODE_BLOCK_PATTERN) : this.macroblockIntra ? 0x3f : 0;

    for (var block = 0, mask = 0x20; block < 6; block++) {
      if ((cbp & mask) !== 0) {
        this.decodeBlock(block);
      }

      mask >>= 1;
    }
  };

  _proto.decodeMotionVectors = function decodeMotionVectors() {
    var code;
    var d;
    var r = 0; // Forward

    if (this.macroblockMotFw) {
      // Horizontal forward
      code = this.readHuffman(MPEG1.MOTION);

      if (code !== 0 && this.forwardF !== 1) {
        r = this.bits.read(this.forwardRSize);
        d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;

        if (code < 0) {
          d = -d;
        }
      } else {
        d = code;
      }

      this.motionFwHPrev += d;

      if (this.motionFwHPrev > (this.forwardF << 4) - 1) {
        this.motionFwHPrev -= this.forwardF << 5;
      } else if (this.motionFwHPrev < -this.forwardF << 4) {
        this.motionFwHPrev += this.forwardF << 5;
      }

      this.motionFwH = this.motionFwHPrev;

      if (this.fullPelForward) {
        this.motionFwH <<= 1;
      } // Vertical forward


      code = this.readHuffman(MPEG1.MOTION);

      if (code !== 0 && this.forwardF !== 1) {
        r = this.bits.read(this.forwardRSize);
        d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;

        if (code < 0) {
          d = -d;
        }
      } else {
        d = code;
      }

      this.motionFwVPrev += d;

      if (this.motionFwVPrev > (this.forwardF << 4) - 1) {
        this.motionFwVPrev -= this.forwardF << 5;
      } else if (this.motionFwVPrev < -this.forwardF << 4) {
        this.motionFwVPrev += this.forwardF << 5;
      }

      this.motionFwV = this.motionFwVPrev;

      if (this.fullPelForward) {
        this.motionFwV <<= 1;
      }
    } else if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
      // No motion information in P-picture, reset vectors
      this.motionFwH = this.motionFwHPrev = 0;
      this.motionFwV = this.motionFwVPrev = 0;
    }
  };

  _proto.copyMacroblock = function copyMacroblock(motionH, motionV, sY, sCr, sCb) {
    var width;
    var scan;
    var H;
    var V;
    var oddH;
    var oddV;
    var src;
    var dest;
    var last; // We use 32bit writes here

    var dY = this.currentY32;
    var dCb = this.currentCb32;
    var dCr = this.currentCr32; // Luminance

    width = this.codedWidth;
    scan = width - 16;
    H = motionH >> 1;
    V = motionV >> 1;
    oddH = (motionH & 1) === 1;
    oddV = (motionV & 1) === 1;
    src = ((this.mbRow << 4) + V) * width + (this.mbCol << 4) + H;
    dest = this.mbRow * width + this.mbCol << 2;
    last = dest + (width << 2);
    var x;
    var y1;
    var y2;
    var y;

    if (oddH) {
      if (oddV) {
        while (dest < last) {
          y1 = sY[src] + sY[src + width];
          src++;

          for (x = 0; x < 4; x++) {
            y2 = sY[src] + sY[src + width];
            src++;
            y = y1 + y2 + 2 >> 2 & 0xff;
            y1 = sY[src] + sY[src + width];
            src++;
            y |= y1 + y2 + 2 << 6 & 0xff00;
            y2 = sY[src] + sY[src + width];
            src++;
            y |= y1 + y2 + 2 << 14 & 0xff0000;
            y1 = sY[src] + sY[src + width];
            src++;
            y |= y1 + y2 + 2 << 22 & 0xff000000;
            dY[dest++] = y;
          }

          dest += scan >> 2;
          src += scan - 1;
        }
      } else {
        while (dest < last) {
          y1 = sY[src++];

          for (x = 0; x < 4; x++) {
            y2 = sY[src++];
            y = y1 + y2 + 1 >> 1 & 0xff;
            y1 = sY[src++];
            y |= y1 + y2 + 1 << 7 & 0xff00;
            y2 = sY[src++];
            y |= y1 + y2 + 1 << 15 & 0xff0000;
            y1 = sY[src++];
            y |= y1 + y2 + 1 << 23 & 0xff000000;
            dY[dest++] = y;
          }

          dest += scan >> 2;
          src += scan - 1;
        }
      }
    } else if (oddV) {
      while (dest < last) {
        for (x = 0; x < 4; x++) {
          y = sY[src] + sY[src + width] + 1 >> 1 & 0xff;
          src++;
          y |= sY[src] + sY[src + width] + 1 << 7 & 0xff00;
          src++;
          y |= sY[src] + sY[src + width] + 1 << 15 & 0xff0000;
          src++;
          y |= sY[src] + sY[src + width] + 1 << 23 & 0xff000000;
          src++;
          dY[dest++] = y;
        }

        dest += scan >> 2;
        src += scan;
      }
    } else {
      while (dest < last) {
        for (x = 0; x < 4; x++) {
          y = sY[src];
          src++;
          y |= sY[src] << 8;
          src++;
          y |= sY[src] << 16;
          src++;
          y |= sY[src] << 24;
          src++;
          dY[dest++] = y;
        }

        dest += scan >> 2;
        src += scan;
      }
    } // Chrominance


    width = this.halfWidth;
    scan = width - 8;
    H = motionH / 2 >> 1;
    V = motionV / 2 >> 1;
    oddH = (motionH / 2 & 1) === 1;
    oddV = (motionV / 2 & 1) === 1;
    src = ((this.mbRow << 3) + V) * width + (this.mbCol << 3) + H;
    dest = this.mbRow * width + this.mbCol << 1;
    last = dest + (width << 1);
    var cr1;
    var cr2;
    var cr;
    var cb1;
    var cb2;
    var cb;

    if (oddH) {
      if (oddV) {
        while (dest < last) {
          cr1 = sCr[src] + sCr[src + width];
          cb1 = sCb[src] + sCb[src + width];
          src++;

          for (x = 0; x < 2; x++) {
            cr2 = sCr[src] + sCr[src + width];
            cb2 = sCb[src] + sCb[src + width];
            src++;
            cr = cr1 + cr2 + 2 >> 2 & 0xff;
            cb = cb1 + cb2 + 2 >> 2 & 0xff;
            cr1 = sCr[src] + sCr[src + width];
            cb1 = sCb[src] + sCb[src + width];
            src++;
            cr |= cr1 + cr2 + 2 << 6 & 0xff00;
            cb |= cb1 + cb2 + 2 << 6 & 0xff00;
            cr2 = sCr[src] + sCr[src + width];
            cb2 = sCb[src] + sCb[src + width];
            src++;
            cr |= cr1 + cr2 + 2 << 14 & 0xff0000;
            cb |= cb1 + cb2 + 2 << 14 & 0xff0000;
            cr1 = sCr[src] + sCr[src + width];
            cb1 = sCb[src] + sCb[src + width];
            src++;
            cr |= cr1 + cr2 + 2 << 22 & 0xff000000;
            cb |= cb1 + cb2 + 2 << 22 & 0xff000000;
            dCr[dest] = cr;
            dCb[dest] = cb;
            dest++;
          }

          dest += scan >> 2;
          src += scan - 1;
        }
      } else {
        while (dest < last) {
          cr1 = sCr[src];
          cb1 = sCb[src];
          src++;

          for (x = 0; x < 2; x++) {
            cr2 = sCr[src];
            cb2 = sCb[src++];
            cr = cr1 + cr2 + 1 >> 1 & 0xff;
            cb = cb1 + cb2 + 1 >> 1 & 0xff;
            cr1 = sCr[src];
            cb1 = sCb[src++];
            cr |= cr1 + cr2 + 1 << 7 & 0xff00;
            cb |= cb1 + cb2 + 1 << 7 & 0xff00;
            cr2 = sCr[src];
            cb2 = sCb[src++];
            cr |= cr1 + cr2 + 1 << 15 & 0xff0000;
            cb |= cb1 + cb2 + 1 << 15 & 0xff0000;
            cr1 = sCr[src];
            cb1 = sCb[src++];
            cr |= cr1 + cr2 + 1 << 23 & 0xff000000;
            cb |= cb1 + cb2 + 1 << 23 & 0xff000000;
            dCr[dest] = cr;
            dCb[dest] = cb;
            dest++;
          }

          dest += scan >> 2;
          src += scan - 1;
        }
      }
    } else if (oddV) {
      while (dest < last) {
        for (x = 0; x < 2; x++) {
          cr = sCr[src] + sCr[src + width] + 1 >> 1 & 0xff;
          cb = sCb[src] + sCb[src + width] + 1 >> 1 & 0xff;
          src++;
          cr |= sCr[src] + sCr[src + width] + 1 << 7 & 0xff00;
          cb |= sCb[src] + sCb[src + width] + 1 << 7 & 0xff00;
          src++;
          cr |= sCr[src] + sCr[src + width] + 1 << 15 & 0xff0000;
          cb |= sCb[src] + sCb[src + width] + 1 << 15 & 0xff0000;
          src++;
          cr |= sCr[src] + sCr[src + width] + 1 << 23 & 0xff000000;
          cb |= sCb[src] + sCb[src + width] + 1 << 23 & 0xff000000;
          src++;
          dCr[dest] = cr;
          dCb[dest] = cb;
          dest++;
        }

        dest += scan >> 2;
        src += scan;
      }
    } else {
      while (dest < last) {
        for (x = 0; x < 2; x++) {
          cr = sCr[src];
          cb = sCb[src];
          src++;
          cr |= sCr[src] << 8;
          cb |= sCb[src] << 8;
          src++;
          cr |= sCr[src] << 16;
          cb |= sCb[src] << 16;
          src++;
          cr |= sCr[src] << 24;
          cb |= sCb[src] << 24;
          src++;
          dCr[dest] = cr;
          dCb[dest] = cb;
          dest++;
        }

        dest += scan >> 2;
        src += scan;
      }
    }
  };

  _proto.decodeBlock = function decodeBlock(block) {
    var n = 0;
    var quantMatrix; // Decode DC coefficient of intra-coded blocks

    if (this.macroblockIntra) {
      var predictor;
      var dctSize; // DC prediction

      if (block < 4) {
        predictor = this.dcPredictorY;
        dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_LUMINANCE);
      } else {
        predictor = block === 4 ? this.dcPredictorCr : this.dcPredictorCb;
        dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_CHROMINANCE);
      } // Read DC coeff


      if (dctSize > 0) {
        var differential = this.bits.read(dctSize);

        if ((differential & 1 << dctSize - 1) !== 0) {
          this.blockData[0] = predictor + differential;
        } else {
          this.blockData[0] = predictor + (-1 << dctSize | differential + 1);
        }
      } else {
        this.blockData[0] = predictor;
      } // Save predictor value


      if (block < 4) {
        // eslint-disable-next-line prefer-destructuring
        this.dcPredictorY = this.blockData[0];
      } else if (block === 4) {
        // eslint-disable-next-line prefer-destructuring
        this.dcPredictorCr = this.blockData[0];
      } else {
        // eslint-disable-next-line prefer-destructuring
        this.dcPredictorCb = this.blockData[0];
      } // Dequantize + premultiply


      this.blockData[0] <<= 3 + 5;
      quantMatrix = this.intraQuantMatrix;
      n = 1;
    } else {
      quantMatrix = this.nonIntraQuantMatrix;
    } // Decode AC coefficients (+DC for non-intra)


    var level = 0; // eslint-disable-next-line no-constant-condition

    while (true) {
      var run = 0;
      var coeff = this.readHuffman(MPEG1.DCT_COEFF);

      if (coeff === 0x0001 && n > 0 && this.bits.read(1) === 0) {
        // end_of_block
        break;
      }

      if (coeff === 0xffff) {
        // escape
        run = this.bits.read(6);
        level = this.bits.read(8);

        if (level === 0) {
          level = this.bits.read(8);
        } else if (level === 128) {
          level = this.bits.read(8) - 256;
        } else if (level > 128) {
          level -= 256;
        }
      } else {
        run = coeff >> 8;
        level = coeff & 0xff;

        if (this.bits.read(1)) {
          level = -level;
        }
      }

      n += run;
      var dezigZagged = MPEG1.ZIG_ZAG[n];
      n++; // Dequantize, oddify, clip

      level <<= 1;

      if (!this.macroblockIntra) {
        level += level < 0 ? -1 : 1;
      }

      level = level * this.quantizerScale * quantMatrix[dezigZagged] >> 4;

      if ((level & 1) === 0) {
        level -= level > 0 ? 1 : -1;
      }

      if (level > 2047) {
        level = 2047;
      } else if (level < -2048) {
        level = -2048;
      } // Save premultiplied coefficient


      this.blockData[dezigZagged] = level * MPEG1.PREMULTIPLIER_MATRIX[dezigZagged];
    } // Move block to its place


    var destArray;
    var destIndex;
    var scan;

    if (block < 4) {
      destArray = this.currentY;
      scan = this.codedWidth - 8;
      destIndex = this.mbRow * this.codedWidth + this.mbCol << 4;

      if ((block & 1) !== 0) {
        destIndex += 8;
      }

      if ((block & 2) !== 0) {
        destIndex += this.codedWidth << 3;
      }
    } else {
      destArray = block === 4 ? this.currentCb : this.currentCr;
      scan = (this.codedWidth >> 1) - 8;
      destIndex = (this.mbRow * this.codedWidth << 2) + (this.mbCol << 3);
    }

    if (this.macroblockIntra) {
      // Overwrite (no prediction)
      if (n === 1) {
        MPEG1.CopyValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
        this.blockData[0] = 0;
      } else {
        MPEG1.IDCT(this.blockData);
        MPEG1.CopyBlockToDestination(this.blockData, destArray, destIndex, scan);
        Fill(this.blockData, 0);
      }
    } else {
      // Add data to the predicted macroblock
      // eslint-disable-next-line no-lonely-if
      if (n === 1) {
        MPEG1.AddValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
        this.blockData[0] = 0;
      } else {
        MPEG1.IDCT(this.blockData);
        MPEG1.AddBlockToDestination(this.blockData, destArray, destIndex, scan);
        Fill(this.blockData, 0);
      }
    }

    n = 0;
  };

  MPEG1.CopyBlockToDestination = function CopyBlockToDestination(block, dest, index, scan) {
    for (var n = 0; n < 64; n += 8, index += scan + 8) {
      dest[index + 0] = block[n + 0];
      dest[index + 1] = block[n + 1];
      dest[index + 2] = block[n + 2];
      dest[index + 3] = block[n + 3];
      dest[index + 4] = block[n + 4];
      dest[index + 5] = block[n + 5];
      dest[index + 6] = block[n + 6];
      dest[index + 7] = block[n + 7];
    }
  };

  MPEG1.AddBlockToDestination = function AddBlockToDestination(block, dest, index, scan) {
    for (var n = 0; n < 64; n += 8, index += scan + 8) {
      dest[index + 0] += block[n + 0];
      dest[index + 1] += block[n + 1];
      dest[index + 2] += block[n + 2];
      dest[index + 3] += block[n + 3];
      dest[index + 4] += block[n + 4];
      dest[index + 5] += block[n + 5];
      dest[index + 6] += block[n + 6];
      dest[index + 7] += block[n + 7];
    }
  };

  MPEG1.CopyValueToDestination = function CopyValueToDestination(value, dest, index, scan) {
    for (var n = 0; n < 64; n += 8, index += scan + 8) {
      dest[index + 0] = value;
      dest[index + 1] = value;
      dest[index + 2] = value;
      dest[index + 3] = value;
      dest[index + 4] = value;
      dest[index + 5] = value;
      dest[index + 6] = value;
      dest[index + 7] = value;
    }
  };

  MPEG1.AddValueToDestination = function AddValueToDestination(value, dest, index, scan) {
    for (var n = 0; n < 64; n += 8, index += scan + 8) {
      dest[index + 0] += value;
      dest[index + 1] += value;
      dest[index + 2] += value;
      dest[index + 3] += value;
      dest[index + 4] += value;
      dest[index + 5] += value;
      dest[index + 6] += value;
      dest[index + 7] += value;
    }
  };

  MPEG1.IDCT = function IDCT(block) {
    // See http://vsr.informatik.tu-chemnitz.de/~jan/MPEG/HTML/IDCT.html
    // for more info.
    var b1;
    var b3;
    var b4;
    var b6;
    var b7;
    var tmp1;
    var tmp2;
    var m0;
    var x0;
    var x1;
    var x2;
    var x3;
    var x4;
    var y3;
    var y4;
    var y5;
    var y6;
    var y7; // Transform columns

    for (var i = 0; i < 8; ++i) {
      b1 = block[4 * 8 + i];
      b3 = block[2 * 8 + i] + block[6 * 8 + i];
      b4 = block[5 * 8 + i] - block[3 * 8 + i];
      tmp1 = block[1 * 8 + i] + block[7 * 8 + i];
      tmp2 = block[3 * 8 + i] + block[5 * 8 + i];
      b6 = block[1 * 8 + i] - block[7 * 8 + i];
      b7 = tmp1 + tmp2;
      m0 = block[0 * 8 + i];
      x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
      x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
      x1 = m0 - b1;
      x2 = ((block[2 * 8 + i] - block[6 * 8 + i]) * 362 + 128 >> 8) - b3;
      x3 = m0 + b1;
      y3 = x1 + x2;
      y4 = x3 + b3;
      y5 = x1 - x2;
      y6 = x3 - b3;
      y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
      block[0 * 8 + i] = b7 + y4;
      block[1 * 8 + i] = x4 + y3;
      block[2 * 8 + i] = y5 - x0;
      block[3 * 8 + i] = y6 - y7;
      block[4 * 8 + i] = y6 + y7;
      block[5 * 8 + i] = x0 + y5;
      block[6 * 8 + i] = y3 - x4;
      block[7 * 8 + i] = y4 - b7;
    } // Transform rows


    for (var _i2 = 0; _i2 < 64; _i2 += 8) {
      b1 = block[4 + _i2];
      b3 = block[2 + _i2] + block[6 + _i2];
      b4 = block[5 + _i2] - block[3 + _i2];
      tmp1 = block[1 + _i2] + block[7 + _i2];
      tmp2 = block[3 + _i2] + block[5 + _i2];
      b6 = block[1 + _i2] - block[7 + _i2];
      b7 = tmp1 + tmp2;
      m0 = block[0 + _i2];
      x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
      x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
      x1 = m0 - b1;
      x2 = ((block[2 + _i2] - block[6 + _i2]) * 362 + 128 >> 8) - b3;
      x3 = m0 + b1;
      y3 = x1 + x2;
      y4 = x3 + b3;
      y5 = x1 - x2;
      y6 = x3 - b3;
      y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
      block[0 + _i2] = b7 + y4 + 128 >> 8;
      block[1 + _i2] = x4 + y3 + 128 >> 8;
      block[2 + _i2] = y5 - x0 + 128 >> 8;
      block[3 + _i2] = y6 - y7 + 128 >> 8;
      block[4 + _i2] = y6 + y7 + 128 >> 8;
      block[5 + _i2] = x0 + y5 + 128 >> 8;
      block[6 + _i2] = y3 - x4 + 128 >> 8;
      block[7 + _i2] = y4 - b7 + 128 >> 8;
    }
  };

  return MPEG1;
}(BaseDecoder); // Sequence Layer


MPEG1.prototype.frameRate = 30; // Picture Layer

MPEG1.prototype.currentY = null;
MPEG1.prototype.currentCr = null;
MPEG1.prototype.currentCb = null;
MPEG1.prototype.pictureType = 0; // Buffers for motion compensation

MPEG1.prototype.forwardY = null;
MPEG1.prototype.forwardCr = null;
MPEG1.prototype.forwardCb = null;
MPEG1.prototype.fullPelForward = false;
MPEG1.prototype.forwardFCode = 0;
MPEG1.prototype.forwardRSize = 0;
MPEG1.prototype.forwardF = 0; // Slice Layer

MPEG1.prototype.quantizerScale = 0;
MPEG1.prototype.sliceBegin = false; // Macroblock Layer

MPEG1.prototype.macroblockAddress = 0;
MPEG1.prototype.mbRow = 0;
MPEG1.prototype.mbCol = 0;
MPEG1.prototype.macroblockType = 0;
MPEG1.prototype.macroblockIntra = false;
MPEG1.prototype.macroblockMotFw = false;
MPEG1.prototype.motionFwH = 0;
MPEG1.prototype.motionFwV = 0;
MPEG1.prototype.motionFwHPrev = 0;
MPEG1.prototype.motionFwVPrev = 0; // Block layer

MPEG1.prototype.dcPredictorY = 0;
MPEG1.prototype.dcPredictorCr = 0;
MPEG1.prototype.dcPredictorCb = 0;
MPEG1.prototype.blockData = null; // VLC Tables and Constants

MPEG1.PICTURE_RATE = [0.0, 23.976, 24.0, 25.0, 29.97, 30.0, 50.0, 59.94, 60.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
MPEG1.ZIG_ZAG = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
MPEG1.DEFAULT_INTRA_QUANT_MATRIX = new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]);
MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);
MPEG1.PREMULTIPLIER_MATRIX = new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]); // MPEG-1 VLC
//  macroblock_stuffing decodes as 34.
//  macroblock_escape decodes as 35.

MPEG1.MACROBLOCK_ADDRESS_INCREMENT = new Int16Array([1 * 3, 2 * 3, 0, //   0
3 * 3, 4 * 3, 0, //   1  0
0, 0, 1, //   2  1.
5 * 3, 6 * 3, 0, //   3  00
7 * 3, 8 * 3, 0, //   4  01
9 * 3, 10 * 3, 0, //   5  000
11 * 3, 12 * 3, 0, //   6  001
0, 0, 3, //   7  010.
0, 0, 2, //   8  011.
13 * 3, 14 * 3, 0, //   9  0000
15 * 3, 16 * 3, 0, //  10  0001
0, 0, 5, //  11  0010.
0, 0, 4, //  12  0011.
17 * 3, 18 * 3, 0, //  13  0000 0
19 * 3, 20 * 3, 0, //  14  0000 1
0, 0, 7, //  15  0001 0.
0, 0, 6, //  16  0001 1.
21 * 3, 22 * 3, 0, //  17  0000 00
23 * 3, 24 * 3, 0, //  18  0000 01
25 * 3, 26 * 3, 0, //  19  0000 10
27 * 3, 28 * 3, 0, //  20  0000 11
-1, 29 * 3, 0, //  21  0000 000
-1, 30 * 3, 0, //  22  0000 001
31 * 3, 32 * 3, 0, //  23  0000 010
33 * 3, 34 * 3, 0, //  24  0000 011
35 * 3, 36 * 3, 0, //  25  0000 100
37 * 3, 38 * 3, 0, //  26  0000 101
0, 0, 9, //  27  0000 110.
0, 0, 8, //  28  0000 111.
39 * 3, 40 * 3, 0, //  29  0000 0001
41 * 3, 42 * 3, 0, //  30  0000 0011
43 * 3, 44 * 3, 0, //  31  0000 0100
45 * 3, 46 * 3, 0, //  32  0000 0101
0, 0, 15, //  33  0000 0110.
0, 0, 14, //  34  0000 0111.
0, 0, 13, //  35  0000 1000.
0, 0, 12, //  36  0000 1001.
0, 0, 11, //  37  0000 1010.
0, 0, 10, //  38  0000 1011.
47 * 3, -1, 0, //  39  0000 0001 0
-1, 48 * 3, 0, //  40  0000 0001 1
49 * 3, 50 * 3, 0, //  41  0000 0011 0
51 * 3, 52 * 3, 0, //  42  0000 0011 1
53 * 3, 54 * 3, 0, //  43  0000 0100 0
55 * 3, 56 * 3, 0, //  44  0000 0100 1
57 * 3, 58 * 3, 0, //  45  0000 0101 0
59 * 3, 60 * 3, 0, //  46  0000 0101 1
61 * 3, -1, 0, //  47  0000 0001 00
-1, 62 * 3, 0, //  48  0000 0001 11
63 * 3, 64 * 3, 0, //  49  0000 0011 00
65 * 3, 66 * 3, 0, //  50  0000 0011 01
67 * 3, 68 * 3, 0, //  51  0000 0011 10
69 * 3, 70 * 3, 0, //  52  0000 0011 11
71 * 3, 72 * 3, 0, //  53  0000 0100 00
73 * 3, 74 * 3, 0, //  54  0000 0100 01
0, 0, 21, //  55  0000 0100 10.
0, 0, 20, //  56  0000 0100 11.
0, 0, 19, //  57  0000 0101 00.
0, 0, 18, //  58  0000 0101 01.
0, 0, 17, //  59  0000 0101 10.
0, 0, 16, //  60  0000 0101 11.
0, 0, 35, //  61  0000 0001 000. -- macroblock_escape
0, 0, 34, //  62  0000 0001 111. -- macroblock_stuffing
0, 0, 33, //  63  0000 0011 000.
0, 0, 32, //  64  0000 0011 001.
0, 0, 31, //  65  0000 0011 010.
0, 0, 30, //  66  0000 0011 011.
0, 0, 29, //  67  0000 0011 100.
0, 0, 28, //  68  0000 0011 101.
0, 0, 27, //  69  0000 0011 110.
0, 0, 26, //  70  0000 0011 111.
0, 0, 25, //  71  0000 0100 000.
0, 0, 24, //  72  0000 0100 001.
0, 0, 23, //  73  0000 0100 010.
0, 0, 22 //  74  0000 0100 011.
]); //  macroblock_type bitmap:
//    0x10  macroblock_quant
//    0x08  macroblock_motion_forward
//    0x04  macroblock_motion_backward
//    0x02  macrobkock_pattern
//    0x01  macroblock_intra
//

MPEG1.MACROBLOCK_TYPE_INTRA = new Int8Array([1 * 3, 2 * 3, 0, //   0
-1, 3 * 3, 0, //   1  0
0, 0, 0x01, //   2  1.
0, 0, 0x11 //   3  01.
]);
MPEG1.MACROBLOCK_TYPE_PREDICTIVE = new Int8Array([1 * 3, 2 * 3, 0, //  0
3 * 3, 4 * 3, 0, //  1  0
0, 0, 0x0a, //  2  1.
5 * 3, 6 * 3, 0, //  3  00
0, 0, 0x02, //  4  01.
7 * 3, 8 * 3, 0, //  5  000
0, 0, 0x08, //  6  001.
9 * 3, 10 * 3, 0, //  7  0000
11 * 3, 12 * 3, 0, //  8  0001
-1, 13 * 3, 0, //  9  00000
0, 0, 0x12, // 10  00001.
0, 0, 0x1a, // 11  00010.
0, 0, 0x01, // 12  00011.
0, 0, 0x11 // 13  000001.
]);
MPEG1.MACROBLOCK_TYPE_B = new Int8Array([1 * 3, 2 * 3, 0, //  0
3 * 3, 5 * 3, 0, //  1  0
4 * 3, 6 * 3, 0, //  2  1
8 * 3, 7 * 3, 0, //  3  00
0, 0, 0x0c, //  4  10.
9 * 3, 10 * 3, 0, //  5  01
0, 0, 0x0e, //  6  11.
13 * 3, 14 * 3, 0, //  7  001
12 * 3, 11 * 3, 0, //  8  000
0, 0, 0x04, //  9  010.
0, 0, 0x06, // 10  011.
18 * 3, 16 * 3, 0, // 11  0001
15 * 3, 17 * 3, 0, // 12  0000
0, 0, 0x08, // 13  0010.
0, 0, 0x0a, // 14  0011.
-1, 19 * 3, 0, // 15  00000
0, 0, 0x01, // 16  00011.
20 * 3, 21 * 3, 0, // 17  00001
0, 0, 0x1e, // 18  00010.
0, 0, 0x11, // 19  000001.
0, 0, 0x16, // 20  000010.
0, 0, 0x1a // 21  000011.
]);
MPEG1.MACROBLOCK_TYPE = [null, MPEG1.MACROBLOCK_TYPE_INTRA, MPEG1.MACROBLOCK_TYPE_PREDICTIVE, MPEG1.MACROBLOCK_TYPE_B];
MPEG1.CODE_BLOCK_PATTERN = new Int16Array([2 * 3, 1 * 3, 0, //   0
3 * 3, 6 * 3, 0, //   1  1
4 * 3, 5 * 3, 0, //   2  0
8 * 3, 11 * 3, 0, //   3  10
12 * 3, 13 * 3, 0, //   4  00
9 * 3, 7 * 3, 0, //   5  01
10 * 3, 14 * 3, 0, //   6  11
20 * 3, 19 * 3, 0, //   7  011
18 * 3, 16 * 3, 0, //   8  100
23 * 3, 17 * 3, 0, //   9  010
27 * 3, 25 * 3, 0, //  10  110
21 * 3, 28 * 3, 0, //  11  101
15 * 3, 22 * 3, 0, //  12  000
24 * 3, 26 * 3, 0, //  13  001
0, 0, 60, //  14  111.
35 * 3, 40 * 3, 0, //  15  0000
44 * 3, 48 * 3, 0, //  16  1001
38 * 3, 36 * 3, 0, //  17  0101
42 * 3, 47 * 3, 0, //  18  1000
29 * 3, 31 * 3, 0, //  19  0111
39 * 3, 32 * 3, 0, //  20  0110
0, 0, 32, //  21  1010.
45 * 3, 46 * 3, 0, //  22  0001
33 * 3, 41 * 3, 0, //  23  0100
43 * 3, 34 * 3, 0, //  24  0010
0, 0, 4, //  25  1101.
30 * 3, 37 * 3, 0, //  26  0011
0, 0, 8, //  27  1100.
0, 0, 16, //  28  1011.
0, 0, 44, //  29  0111 0.
50 * 3, 56 * 3, 0, //  30  0011 0
0, 0, 28, //  31  0111 1.
0, 0, 52, //  32  0110 1.
0, 0, 62, //  33  0100 0.
61 * 3, 59 * 3, 0, //  34  0010 1
52 * 3, 60 * 3, 0, //  35  0000 0
0, 0, 1, //  36  0101 1.
55 * 3, 54 * 3, 0, //  37  0011 1
0, 0, 61, //  38  0101 0.
0, 0, 56, //  39  0110 0.
57 * 3, 58 * 3, 0, //  40  0000 1
0, 0, 2, //  41  0100 1.
0, 0, 40, //  42  1000 0.
51 * 3, 62 * 3, 0, //  43  0010 0
0, 0, 48, //  44  1001 0.
64 * 3, 63 * 3, 0, //  45  0001 0
49 * 3, 53 * 3, 0, //  46  0001 1
0, 0, 20, //  47  1000 1.
0, 0, 12, //  48  1001 1.
80 * 3, 83 * 3, 0, //  49  0001 10
0, 0, 63, //  50  0011 00.
77 * 3, 75 * 3, 0, //  51  0010 00
65 * 3, 73 * 3, 0, //  52  0000 00
84 * 3, 66 * 3, 0, //  53  0001 11
0, 0, 24, //  54  0011 11.
0, 0, 36, //  55  0011 10.
0, 0, 3, //  56  0011 01.
69 * 3, 87 * 3, 0, //  57  0000 10
81 * 3, 79 * 3, 0, //  58  0000 11
68 * 3, 71 * 3, 0, //  59  0010 11
70 * 3, 78 * 3, 0, //  60  0000 01
67 * 3, 76 * 3, 0, //  61  0010 10
72 * 3, 74 * 3, 0, //  62  0010 01
86 * 3, 85 * 3, 0, //  63  0001 01
88 * 3, 82 * 3, 0, //  64  0001 00
-1, 94 * 3, 0, //  65  0000 000
95 * 3, 97 * 3, 0, //  66  0001 111
0, 0, 33, //  67  0010 100.
0, 0, 9, //  68  0010 110.
106 * 3, 110 * 3, 0, //  69  0000 100
102 * 3, 116 * 3, 0, //  70  0000 010
0, 0, 5, //  71  0010 111.
0, 0, 10, //  72  0010 010.
93 * 3, 89 * 3, 0, //  73  0000 001
0, 0, 6, //  74  0010 011.
0, 0, 18, //  75  0010 001.
0, 0, 17, //  76  0010 101.
0, 0, 34, //  77  0010 000.
113 * 3, 119 * 3, 0, //  78  0000 011
103 * 3, 104 * 3, 0, //  79  0000 111
90 * 3, 92 * 3, 0, //  80  0001 100
109 * 3, 107 * 3, 0, //  81  0000 110
117 * 3, 118 * 3, 0, //  82  0001 001
101 * 3, 99 * 3, 0, //  83  0001 101
98 * 3, 96 * 3, 0, //  84  0001 110
100 * 3, 91 * 3, 0, //  85  0001 011
114 * 3, 115 * 3, 0, //  86  0001 010
105 * 3, 108 * 3, 0, //  87  0000 101
112 * 3, 111 * 3, 0, //  88  0001 000
121 * 3, 125 * 3, 0, //  89  0000 0011
0, 0, 41, //  90  0001 1000.
0, 0, 14, //  91  0001 0111.
0, 0, 21, //  92  0001 1001.
124 * 3, 122 * 3, 0, //  93  0000 0010
120 * 3, 123 * 3, 0, //  94  0000 0001
0, 0, 11, //  95  0001 1110.
0, 0, 19, //  96  0001 1101.
0, 0, 7, //  97  0001 1111.
0, 0, 35, //  98  0001 1100.
0, 0, 13, //  99  0001 1011.
0, 0, 50, // 100  0001 0110.
0, 0, 49, // 101  0001 1010.
0, 0, 58, // 102  0000 0100.
0, 0, 37, // 103  0000 1110.
0, 0, 25, // 104  0000 1111.
0, 0, 45, // 105  0000 1010.
0, 0, 57, // 106  0000 1000.
0, 0, 26, // 107  0000 1101.
0, 0, 29, // 108  0000 1011.
0, 0, 38, // 109  0000 1100.
0, 0, 53, // 110  0000 1001.
0, 0, 23, // 111  0001 0001.
0, 0, 43, // 112  0001 0000.
0, 0, 46, // 113  0000 0110.
0, 0, 42, // 114  0001 0100.
0, 0, 22, // 115  0001 0101.
0, 0, 54, // 116  0000 0101.
0, 0, 51, // 117  0001 0010.
0, 0, 15, // 118  0001 0011.
0, 0, 30, // 119  0000 0111.
0, 0, 39, // 120  0000 0001 0.
0, 0, 47, // 121  0000 0011 0.
0, 0, 55, // 122  0000 0010 1.
0, 0, 27, // 123  0000 0001 1.
0, 0, 59, // 124  0000 0010 0.
0, 0, 31 // 125  0000 0011 1.
]);
MPEG1.MOTION = new Int16Array([1 * 3, 2 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  0
0, 0, 0, //   2  1.
6 * 3, 5 * 3, 0, //   3  01
8 * 3, 7 * 3, 0, //   4  00
0, 0, -1, //   5  011.
0, 0, 1, //   6  010.
9 * 3, 10 * 3, 0, //   7  001
12 * 3, 11 * 3, 0, //   8  000
0, 0, 2, //   9  0010.
0, 0, -2, //  10  0011.
14 * 3, 15 * 3, 0, //  11  0001
16 * 3, 13 * 3, 0, //  12  0000
20 * 3, 18 * 3, 0, //  13  0000 1
0, 0, 3, //  14  0001 0.
0, 0, -3, //  15  0001 1.
17 * 3, 19 * 3, 0, //  16  0000 0
-1, 23 * 3, 0, //  17  0000 00
27 * 3, 25 * 3, 0, //  18  0000 11
26 * 3, 21 * 3, 0, //  19  0000 01
24 * 3, 22 * 3, 0, //  20  0000 10
32 * 3, 28 * 3, 0, //  21  0000 011
29 * 3, 31 * 3, 0, //  22  0000 101
-1, 33 * 3, 0, //  23  0000 001
36 * 3, 35 * 3, 0, //  24  0000 100
0, 0, -4, //  25  0000 111.
30 * 3, 34 * 3, 0, //  26  0000 010
0, 0, 4, //  27  0000 110.
0, 0, -7, //  28  0000 0111.
0, 0, 5, //  29  0000 1010.
37 * 3, 41 * 3, 0, //  30  0000 0100
0, 0, -5, //  31  0000 1011.
0, 0, 7, //  32  0000 0110.
38 * 3, 40 * 3, 0, //  33  0000 0011
42 * 3, 39 * 3, 0, //  34  0000 0101
0, 0, -6, //  35  0000 1001.
0, 0, 6, //  36  0000 1000.
51 * 3, 54 * 3, 0, //  37  0000 0100 0
50 * 3, 49 * 3, 0, //  38  0000 0011 0
45 * 3, 46 * 3, 0, //  39  0000 0101 1
52 * 3, 47 * 3, 0, //  40  0000 0011 1
43 * 3, 53 * 3, 0, //  41  0000 0100 1
44 * 3, 48 * 3, 0, //  42  0000 0101 0
0, 0, 10, //  43  0000 0100 10.
0, 0, 9, //  44  0000 0101 00.
0, 0, 8, //  45  0000 0101 10.
0, 0, -8, //  46  0000 0101 11.
57 * 3, 66 * 3, 0, //  47  0000 0011 11
0, 0, -9, //  48  0000 0101 01.
60 * 3, 64 * 3, 0, //  49  0000 0011 01
56 * 3, 61 * 3, 0, //  50  0000 0011 00
55 * 3, 62 * 3, 0, //  51  0000 0100 00
58 * 3, 63 * 3, 0, //  52  0000 0011 10
0, 0, -10, //  53  0000 0100 11.
59 * 3, 65 * 3, 0, //  54  0000 0100 01
0, 0, 12, //  55  0000 0100 000.
0, 0, 16, //  56  0000 0011 000.
0, 0, 13, //  57  0000 0011 110.
0, 0, 14, //  58  0000 0011 100.
0, 0, 11, //  59  0000 0100 010.
0, 0, 15, //  60  0000 0011 010.
0, 0, -16, //  61  0000 0011 001.
0, 0, -12, //  62  0000 0100 001.
0, 0, -14, //  63  0000 0011 101.
0, 0, -15, //  64  0000 0011 011.
0, 0, -11, //  65  0000 0100 011.
0, 0, -13 //  66  0000 0011 111.
]);
MPEG1.DCT_DC_SIZE_LUMINANCE = new Int8Array([2 * 3, 1 * 3, 0, //   0
6 * 3, 5 * 3, 0, //   1  1
3 * 3, 4 * 3, 0, //   2  0
0, 0, 1, //   3  00.
0, 0, 2, //   4  01.
9 * 3, 8 * 3, 0, //   5  11
7 * 3, 10 * 3, 0, //   6  10
0, 0, 0, //   7  100.
12 * 3, 11 * 3, 0, //   8  111
0, 0, 4, //   9  110.
0, 0, 3, //  10  101.
13 * 3, 14 * 3, 0, //  11  1111
0, 0, 5, //  12  1110.
0, 0, 6, //  13  1111 0.
16 * 3, 15 * 3, 0, //  14  1111 1
17 * 3, -1, 0, //  15  1111 11
0, 0, 7, //  16  1111 10.
0, 0, 8 //  17  1111 110.
]);
MPEG1.DCT_DC_SIZE_CHROMINANCE = new Int8Array([2 * 3, 1 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  1
6 * 3, 5 * 3, 0, //   2  0
8 * 3, 7 * 3, 0, //   3  11
0, 0, 2, //   4  10.
0, 0, 1, //   5  01.
0, 0, 0, //   6  00.
10 * 3, 9 * 3, 0, //   7  111
0, 0, 3, //   8  110.
12 * 3, 11 * 3, 0, //   9  1111
0, 0, 4, //  10  1110.
14 * 3, 13 * 3, 0, //  11  1111 1
0, 0, 5, //  12  1111 0.
16 * 3, 15 * 3, 0, //  13  1111 11
0, 0, 6, //  14  1111 10.
17 * 3, -1, 0, //  15  1111 111
0, 0, 7, //  16  1111 110.
0, 0, 8 //  17  1111 1110.
]); //  dct_coeff bitmap:
//    0xff00  run
//    0x00ff  level
//  Decoded values are unsigned. Sign bit follows in the stream.
//  Interpretation of the value 0x0001
//    for dc_coeff_first:  run=0, level=1
//    for dc_coeff_next:   If the next bit is 1: run=0, level=1
//                         If the next bit is 0: end_of_block
//  escape decodes as 0xffff.

MPEG1.DCT_COEFF = new Int32Array([1 * 3, 2 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  0
0, 0, 0x0001, //   2  1.
7 * 3, 8 * 3, 0, //   3  01
6 * 3, 5 * 3, 0, //   4  00
13 * 3, 9 * 3, 0, //   5  001
11 * 3, 10 * 3, 0, //   6  000
14 * 3, 12 * 3, 0, //   7  010
0, 0, 0x0101, //   8  011.
20 * 3, 22 * 3, 0, //   9  0011
18 * 3, 21 * 3, 0, //  10  0001
16 * 3, 19 * 3, 0, //  11  0000
0, 0, 0x0201, //  12  0101.
17 * 3, 15 * 3, 0, //  13  0010
0, 0, 0x0002, //  14  0100.
0, 0, 0x0003, //  15  0010 1.
27 * 3, 25 * 3, 0, //  16  0000 0
29 * 3, 31 * 3, 0, //  17  0010 0
24 * 3, 26 * 3, 0, //  18  0001 0
32 * 3, 30 * 3, 0, //  19  0000 1
0, 0, 0x0401, //  20  0011 0.
23 * 3, 28 * 3, 0, //  21  0001 1
0, 0, 0x0301, //  22  0011 1.
0, 0, 0x0102, //  23  0001 10.
0, 0, 0x0701, //  24  0001 00.
0, 0, 0xffff, //  25  0000 01. -- escape
0, 0, 0x0601, //  26  0001 01.
37 * 3, 36 * 3, 0, //  27  0000 00
0, 0, 0x0501, //  28  0001 11.
35 * 3, 34 * 3, 0, //  29  0010 00
39 * 3, 38 * 3, 0, //  30  0000 11
33 * 3, 42 * 3, 0, //  31  0010 01
40 * 3, 41 * 3, 0, //  32  0000 10
52 * 3, 50 * 3, 0, //  33  0010 010
54 * 3, 53 * 3, 0, //  34  0010 001
48 * 3, 49 * 3, 0, //  35  0010 000
43 * 3, 45 * 3, 0, //  36  0000 001
46 * 3, 44 * 3, 0, //  37  0000 000
0, 0, 0x0801, //  38  0000 111.
0, 0, 0x0004, //  39  0000 110.
0, 0, 0x0202, //  40  0000 100.
0, 0, 0x0901, //  41  0000 101.
51 * 3, 47 * 3, 0, //  42  0010 011
55 * 3, 57 * 3, 0, //  43  0000 0010
60 * 3, 56 * 3, 0, //  44  0000 0001
59 * 3, 58 * 3, 0, //  45  0000 0011
61 * 3, 62 * 3, 0, //  46  0000 0000
0, 0, 0x0a01, //  47  0010 0111.
0, 0, 0x0d01, //  48  0010 0000.
0, 0, 0x0006, //  49  0010 0001.
0, 0, 0x0103, //  50  0010 0101.
0, 0, 0x0005, //  51  0010 0110.
0, 0, 0x0302, //  52  0010 0100.
0, 0, 0x0b01, //  53  0010 0011.
0, 0, 0x0c01, //  54  0010 0010.
76 * 3, 75 * 3, 0, //  55  0000 0010 0
67 * 3, 70 * 3, 0, //  56  0000 0001 1
73 * 3, 71 * 3, 0, //  57  0000 0010 1
78 * 3, 74 * 3, 0, //  58  0000 0011 1
72 * 3, 77 * 3, 0, //  59  0000 0011 0
69 * 3, 64 * 3, 0, //  60  0000 0001 0
68 * 3, 63 * 3, 0, //  61  0000 0000 0
66 * 3, 65 * 3, 0, //  62  0000 0000 1
81 * 3, 87 * 3, 0, //  63  0000 0000 01
91 * 3, 80 * 3, 0, //  64  0000 0001 01
82 * 3, 79 * 3, 0, //  65  0000 0000 11
83 * 3, 86 * 3, 0, //  66  0000 0000 10
93 * 3, 92 * 3, 0, //  67  0000 0001 10
84 * 3, 85 * 3, 0, //  68  0000 0000 00
90 * 3, 94 * 3, 0, //  69  0000 0001 00
88 * 3, 89 * 3, 0, //  70  0000 0001 11
0, 0, 0x0203, //  71  0000 0010 11.
0, 0, 0x0104, //  72  0000 0011 00.
0, 0, 0x0007, //  73  0000 0010 10.
0, 0, 0x0402, //  74  0000 0011 11.
0, 0, 0x0502, //  75  0000 0010 01.
0, 0, 0x1001, //  76  0000 0010 00.
0, 0, 0x0f01, //  77  0000 0011 01.
0, 0, 0x0e01, //  78  0000 0011 10.
105 * 3, 107 * 3, 0, //  79  0000 0000 111
111 * 3, 114 * 3, 0, //  80  0000 0001 011
104 * 3, 97 * 3, 0, //  81  0000 0000 010
125 * 3, 119 * 3, 0, //  82  0000 0000 110
96 * 3, 98 * 3, 0, //  83  0000 0000 100
-1, 123 * 3, 0, //  84  0000 0000 000
95 * 3, 101 * 3, 0, //  85  0000 0000 001
106 * 3, 121 * 3, 0, //  86  0000 0000 101
99 * 3, 102 * 3, 0, //  87  0000 0000 011
113 * 3, 103 * 3, 0, //  88  0000 0001 110
112 * 3, 116 * 3, 0, //  89  0000 0001 111
110 * 3, 100 * 3, 0, //  90  0000 0001 000
124 * 3, 115 * 3, 0, //  91  0000 0001 010
117 * 3, 122 * 3, 0, //  92  0000 0001 101
109 * 3, 118 * 3, 0, //  93  0000 0001 100
120 * 3, 108 * 3, 0, //  94  0000 0001 001
127 * 3, 136 * 3, 0, //  95  0000 0000 0010
139 * 3, 140 * 3, 0, //  96  0000 0000 1000
130 * 3, 126 * 3, 0, //  97  0000 0000 0101
145 * 3, 146 * 3, 0, //  98  0000 0000 1001
128 * 3, 129 * 3, 0, //  99  0000 0000 0110
0, 0, 0x0802, // 100  0000 0001 0001.
132 * 3, 134 * 3, 0, // 101  0000 0000 0011
155 * 3, 154 * 3, 0, // 102  0000 0000 0111
0, 0, 0x0008, // 103  0000 0001 1101.
137 * 3, 133 * 3, 0, // 104  0000 0000 0100
143 * 3, 144 * 3, 0, // 105  0000 0000 1110
151 * 3, 138 * 3, 0, // 106  0000 0000 1010
142 * 3, 141 * 3, 0, // 107  0000 0000 1111
0, 0, 0x000a, // 108  0000 0001 0011.
0, 0, 0x0009, // 109  0000 0001 1000.
0, 0, 0x000b, // 110  0000 0001 0000.
0, 0, 0x1501, // 111  0000 0001 0110.
0, 0, 0x0602, // 112  0000 0001 1110.
0, 0, 0x0303, // 113  0000 0001 1100.
0, 0, 0x1401, // 114  0000 0001 0111.
0, 0, 0x0702, // 115  0000 0001 0101.
0, 0, 0x1101, // 116  0000 0001 1111.
0, 0, 0x1201, // 117  0000 0001 1010.
0, 0, 0x1301, // 118  0000 0001 1001.
148 * 3, 152 * 3, 0, // 119  0000 0000 1101
0, 0, 0x0403, // 120  0000 0001 0010.
153 * 3, 150 * 3, 0, // 121  0000 0000 1011
0, 0, 0x0105, // 122  0000 0001 1011.
131 * 3, 135 * 3, 0, // 123  0000 0000 0001
0, 0, 0x0204, // 124  0000 0001 0100.
149 * 3, 147 * 3, 0, // 125  0000 0000 1100
172 * 3, 173 * 3, 0, // 126  0000 0000 0101 1
162 * 3, 158 * 3, 0, // 127  0000 0000 0010 0
170 * 3, 161 * 3, 0, // 128  0000 0000 0110 0
168 * 3, 166 * 3, 0, // 129  0000 0000 0110 1
157 * 3, 179 * 3, 0, // 130  0000 0000 0101 0
169 * 3, 167 * 3, 0, // 131  0000 0000 0001 0
174 * 3, 171 * 3, 0, // 132  0000 0000 0011 0
178 * 3, 177 * 3, 0, // 133  0000 0000 0100 1
156 * 3, 159 * 3, 0, // 134  0000 0000 0011 1
164 * 3, 165 * 3, 0, // 135  0000 0000 0001 1
183 * 3, 182 * 3, 0, // 136  0000 0000 0010 1
175 * 3, 176 * 3, 0, // 137  0000 0000 0100 0
0, 0, 0x0107, // 138  0000 0000 1010 1.
0, 0, 0x0a02, // 139  0000 0000 1000 0.
0, 0, 0x0902, // 140  0000 0000 1000 1.
0, 0, 0x1601, // 141  0000 0000 1111 1.
0, 0, 0x1701, // 142  0000 0000 1111 0.
0, 0, 0x1901, // 143  0000 0000 1110 0.
0, 0, 0x1801, // 144  0000 0000 1110 1.
0, 0, 0x0503, // 145  0000 0000 1001 0.
0, 0, 0x0304, // 146  0000 0000 1001 1.
0, 0, 0x000d, // 147  0000 0000 1100 1.
0, 0, 0x000c, // 148  0000 0000 1101 0.
0, 0, 0x000e, // 149  0000 0000 1100 0.
0, 0, 0x000f, // 150  0000 0000 1011 1.
0, 0, 0x0205, // 151  0000 0000 1010 0.
0, 0, 0x1a01, // 152  0000 0000 1101 1.
0, 0, 0x0106, // 153  0000 0000 1011 0.
180 * 3, 181 * 3, 0, // 154  0000 0000 0111 1
160 * 3, 163 * 3, 0, // 155  0000 0000 0111 0
196 * 3, 199 * 3, 0, // 156  0000 0000 0011 10
0, 0, 0x001b, // 157  0000 0000 0101 00.
203 * 3, 185 * 3, 0, // 158  0000 0000 0010 01
202 * 3, 201 * 3, 0, // 159  0000 0000 0011 11
0, 0, 0x0013, // 160  0000 0000 0111 00.
0, 0, 0x0016, // 161  0000 0000 0110 01.
197 * 3, 207 * 3, 0, // 162  0000 0000 0010 00
0, 0, 0x0012, // 163  0000 0000 0111 01.
191 * 3, 192 * 3, 0, // 164  0000 0000 0001 10
188 * 3, 190 * 3, 0, // 165  0000 0000 0001 11
0, 0, 0x0014, // 166  0000 0000 0110 11.
184 * 3, 194 * 3, 0, // 167  0000 0000 0001 01
0, 0, 0x0015, // 168  0000 0000 0110 10.
186 * 3, 193 * 3, 0, // 169  0000 0000 0001 00
0, 0, 0x0017, // 170  0000 0000 0110 00.
204 * 3, 198 * 3, 0, // 171  0000 0000 0011 01
0, 0, 0x0019, // 172  0000 0000 0101 10.
0, 0, 0x0018, // 173  0000 0000 0101 11.
200 * 3, 205 * 3, 0, // 174  0000 0000 0011 00
0, 0, 0x001f, // 175  0000 0000 0100 00.
0, 0, 0x001e, // 176  0000 0000 0100 01.
0, 0, 0x001c, // 177  0000 0000 0100 11.
0, 0, 0x001d, // 178  0000 0000 0100 10.
0, 0, 0x001a, // 179  0000 0000 0101 01.
0, 0, 0x0011, // 180  0000 0000 0111 10.
0, 0, 0x0010, // 181  0000 0000 0111 11.
189 * 3, 206 * 3, 0, // 182  0000 0000 0010 11
187 * 3, 195 * 3, 0, // 183  0000 0000 0010 10
218 * 3, 211 * 3, 0, // 184  0000 0000 0001 010
0, 0, 0x0025, // 185  0000 0000 0010 011.
215 * 3, 216 * 3, 0, // 186  0000 0000 0001 000
0, 0, 0x0024, // 187  0000 0000 0010 100.
210 * 3, 212 * 3, 0, // 188  0000 0000 0001 110
0, 0, 0x0022, // 189  0000 0000 0010 110.
213 * 3, 209 * 3, 0, // 190  0000 0000 0001 111
221 * 3, 222 * 3, 0, // 191  0000 0000 0001 100
219 * 3, 208 * 3, 0, // 192  0000 0000 0001 101
217 * 3, 214 * 3, 0, // 193  0000 0000 0001 001
223 * 3, 220 * 3, 0, // 194  0000 0000 0001 011
0, 0, 0x0023, // 195  0000 0000 0010 101.
0, 0, 0x010b, // 196  0000 0000 0011 100.
0, 0, 0x0028, // 197  0000 0000 0010 000.
0, 0, 0x010c, // 198  0000 0000 0011 011.
0, 0, 0x010a, // 199  0000 0000 0011 101.
0, 0, 0x0020, // 200  0000 0000 0011 000.
0, 0, 0x0108, // 201  0000 0000 0011 111.
0, 0, 0x0109, // 202  0000 0000 0011 110.
0, 0, 0x0026, // 203  0000 0000 0010 010.
0, 0, 0x010d, // 204  0000 0000 0011 010.
0, 0, 0x010e, // 205  0000 0000 0011 001.
0, 0, 0x0021, // 206  0000 0000 0010 111.
0, 0, 0x0027, // 207  0000 0000 0010 001.
0, 0, 0x1f01, // 208  0000 0000 0001 1011.
0, 0, 0x1b01, // 209  0000 0000 0001 1111.
0, 0, 0x1e01, // 210  0000 0000 0001 1100.
0, 0, 0x1002, // 211  0000 0000 0001 0101.
0, 0, 0x1d01, // 212  0000 0000 0001 1101.
0, 0, 0x1c01, // 213  0000 0000 0001 1110.
0, 0, 0x010f, // 214  0000 0000 0001 0011.
0, 0, 0x0112, // 215  0000 0000 0001 0000.
0, 0, 0x0111, // 216  0000 0000 0001 0001.
0, 0, 0x0110, // 217  0000 0000 0001 0010.
0, 0, 0x0603, // 218  0000 0000 0001 0100.
0, 0, 0x0b02, // 219  0000 0000 0001 1010.
0, 0, 0x0e02, // 220  0000 0000 0001 0111.
0, 0, 0x0d02, // 221  0000 0000 0001 1000.
0, 0, 0x0c02, // 222  0000 0000 0001 1001.
0, 0, 0x0f02 // 223  0000 0000 0001 0110.
]);
MPEG1.PICTURE_TYPE = {
  INTRA: 1,
  PREDICTIVE: 2,
  B: 3
};
MPEG1.START = {
  SEQUENCE: 0xb3,
  SLICE_FIRST: 0x01,
  SLICE_LAST: 0xaf,
  PICTURE: 0x00,
  EXTENSION: 0xb5,
  USER_DATA: 0xb2
};

var MPEG1WASM = /*#__PURE__*/function (_BaseDecoder) {
  _inheritsLoose(MPEG1WASM, _BaseDecoder);

  function MPEG1WASM(options) {
    var _this;

    _this = _BaseDecoder.call(this, options) || this;
    _this.onDecodeCallback = options.onVideoDecode;
    _this.module = options.wasmModule;
    _this.bufferSize = options.videoBufferSize || 512 * 1024;
    _this.bufferMode = options.streaming ? BitBuffer.MODE.EVICT : BitBuffer.MODE.EXPAND;
    _this.decodeFirstFrame = options.decodeFirstFrame !== false;
    _this.hasSequenceHeader = false;
    return _this;
  }

  var _proto = MPEG1WASM.prototype;

  _proto.initializeWasmDecoder = function initializeWasmDecoder() {
    if (!this.module.instance) {
      console.warn('JSMpeg: WASM module not compiled yet');
      return;
    }

    this.instance = this.module.instance;
    this.functions = this.module.instance.exports;
    this.decoder = this.functions._mpeg1_decoder_create(this.bufferSize, this.bufferMode);
  };

  _proto.destroy = function destroy() {
    if (!this.decoder) {
      return;
    }

    this.functions._mpeg1_decoder_destroy(this.decoder);
  };

  _proto.bufferGetIndex = function bufferGetIndex() {
    if (!this.decoder) {
      return;
    } // eslint-disable-next-line consistent-return


    return this.functions._mpeg1_decoder_get_index(this.decoder);
  };

  _proto.bufferSetIndex = function bufferSetIndex(index) {
    if (!this.decoder) {
      return;
    }

    this.functions._mpeg1_decoder_set_index(this.decoder, index);
  };

  _proto.bufferWrite = function bufferWrite(buffers) {
    if (!this.decoder) {
      this.initializeWasmDecoder();
    }

    var totalLength = 0;

    for (var i = 0; i < buffers.length; i++) {
      totalLength += buffers[i].length;
    }

    var ptr = this.functions._mpeg1_decoder_get_write_ptr(this.decoder, totalLength);

    for (var _i = 0; _i < buffers.length; _i++) {
      this.instance.heapU8.set(buffers[_i], ptr);
      ptr += buffers[_i].length;
    }

    this.functions._mpeg1_decoder_did_write(this.decoder, totalLength);

    return totalLength;
  };

  _proto.write = function write(pts, buffers) {
    BaseDecoder.prototype.write.call(this, pts, buffers);

    if (!this.hasSequenceHeader && this.functions._mpeg1_decoder_has_sequence_header(this.decoder)) {
      this.loadSequnceHeader();
    }
  };

  _proto.loadSequnceHeader = function loadSequnceHeader() {
    this.hasSequenceHeader = true;
    this.frameRate = this.functions._mpeg1_decoder_get_frame_rate(this.decoder);
    this.codedSize = this.functions._mpeg1_decoder_get_coded_size(this.decoder);

    if (this.destination) {
      var w = this.functions._mpeg1_decoder_get_width(this.decoder);

      var h = this.functions._mpeg1_decoder_get_height(this.decoder);

      this.destination.resize(w, h);
    }

    if (this.decodeFirstFrame) {
      this.decode();
    }
  };

  _proto.decode = function decode() {
    var startTime = Now();

    if (!this.decoder) {
      return false;
    }

    var didDecode = this.functions._mpeg1_decoder_decode(this.decoder);

    if (!didDecode) {
      return false;
    } // Invoke decode callbacks


    if (this.destination) {
      var ptrY = this.functions._mpeg1_decoder_get_y_ptr(this.decoder);

      var ptrCr = this.functions._mpeg1_decoder_get_cr_ptr(this.decoder);

      var ptrCb = this.functions._mpeg1_decoder_get_cb_ptr(this.decoder);

      var dy = this.instance.heapU8.subarray(ptrY, ptrY + this.codedSize);
      var dcr = this.instance.heapU8.subarray(ptrCr, ptrCr + (this.codedSize >> 2));
      var dcb = this.instance.heapU8.subarray(ptrCb, ptrCb + (this.codedSize >> 2));
      this.destination.render(dy, dcr, dcb, false);
    }

    this.advanceDecodedTime(1 / this.frameRate);
    var elapsedTime = Now() - startTime;

    if (this.onDecodeCallback) {
      this.onDecodeCallback(this, elapsedTime);
    }

    return true;
  };

  return MPEG1WASM;
}(BaseDecoder);

var MP2 = /*#__PURE__*/function (_BaseDecoder) {
  _inheritsLoose(MP2, _BaseDecoder);

  function MP2(options) {
    var _this;

    _this = _BaseDecoder.call(this, options) || this;
    _this.onDecodeCallback = options.onAudioDecode;
    var bufferSize = options.audioBufferSize || 128 * 1024;
    var bufferMode = options.streaming ? BitBuffer.MODE.EVICT : BitBuffer.MODE.EXPAND;
    _this.bits = new BitBuffer(bufferSize, bufferMode);
    _this.left = new Float32Array(1152);
    _this.right = new Float32Array(1152);
    _this.sampleRate = 44100;
    _this.D = new Float32Array(1024);

    _this.D.set(MP2.SYNTHESIS_WINDOW, 0);

    _this.D.set(MP2.SYNTHESIS_WINDOW, 512);

    _this.V = [new Float32Array(1024), new Float32Array(1024)];
    _this.U = new Int32Array(32);
    _this.VPos = 0;
    _this.allocation = [new Array(32), new Array(32)];
    _this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)];
    _this.scaleFactor = [new Array(32), new Array(32)];
    _this.sample = [new Array(32), new Array(32)];

    for (var j = 0; j < 2; j++) {
      for (var i = 0; i < 32; i++) {
        _this.scaleFactor[j][i] = [0, 0, 0];
        _this.sample[j][i] = [0, 0, 0];
      }
    }

    return _this;
  }

  var _proto = MP2.prototype;

  _proto.decode = function decode() {
    var startTime = Now();
    var pos = this.bits.index >> 3;

    if (pos >= this.bits.byteLength) {
      return false;
    }

    var decoded = this.decodeFrame(this.left, this.right);
    this.bits.index = pos + decoded << 3;

    if (!decoded) {
      return false;
    }

    if (this.destination) {
      this.destination.play(this.sampleRate, this.left, this.right);
    }

    this.advanceDecodedTime(this.left.length / this.sampleRate);
    var elapsedTime = Now() - startTime;

    if (this.onDecodeCallback) {
      this.onDecodeCallback(this, elapsedTime);
    }

    return true;
  };

  _proto.getCurrentTime = function getCurrentTime() {
    var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
    return this.decodedTime - enqueuedTime;
  };

  _proto.decodeFrame = function decodeFrame(left, right) {
    // Check for valid header: syncword OK, MPEG-Audio Layer 2
    var sync = this.bits.read(11);
    var version = this.bits.read(2);
    var layer = this.bits.read(2);
    var hasCRC = !this.bits.read(1);

    if (sync !== MP2.FRAME_SYNC || version !== MP2.VERSION.MPEG_1 || layer !== MP2.LAYER.II) {
      // Invalid header or unsupported version
      return 0;
    }

    var bitrateIndex = this.bits.read(4) - 1;

    if (bitrateIndex > 13) {
      // Invalid bit rate or 'free format'
      return 0;
    }

    var sampleRateIndex = this.bits.read(2);
    var sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];

    if (sampleRateIndex === 3) {
      // Invalid sample rate
      return 0;
    }

    if (version === MP2.VERSION.MPEG_2) {
      sampleRateIndex += 4;
      bitrateIndex += 14;
    }

    var padding = this.bits.read(1); // eslint-disable-next-line no-unused-vars

    this.bits.read(1);
    var mode = this.bits.read(2); // Parse the mode_extension, set up the stereo bound

    var bound = 0;

    if (mode === MP2.MODE.JOINT_STEREO) {
      bound = this.bits.read(2) + 1 << 2;
    } else {
      this.bits.skip(2);
      bound = mode === MP2.MODE.MONO ? 0 : 32;
    } // Discard the last 4 bits of the header and the CRC value, if present


    this.bits.skip(4);

    if (hasCRC) {
      this.bits.skip(16);
    } // Compute the frame size


    var bitrate = MP2.BIT_RATE[bitrateIndex];
    sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];
    var frameSize = 144000 * bitrate / sampleRate + padding | 0; // Prepare the quantizer table lookups

    var tab3 = 0;
    var sblimit = 0;

    if (version === MP2.VERSION.MPEG_2) {
      // MPEG-2 (LSR)
      tab3 = 2;
      sblimit = 30;
    } else {
      // MPEG-1
      var tab1 = mode === MP2.MODE.MONO ? 0 : 1;
      var tab2 = MP2.QUANT_LUT_STEP_1[tab1][bitrateIndex];
      tab3 = MP2.QUANT_LUT_STEP_2[tab2][sampleRateIndex];
      sblimit = tab3 & 63;
      tab3 >>= 6;
    }

    if (bound > sblimit) {
      bound = sblimit;
    } // Read the allocation information


    for (var sb = 0; sb < bound; sb++) {
      this.allocation[0][sb] = this.readAllocation(sb, tab3);
      this.allocation[1][sb] = this.readAllocation(sb, tab3);
    }

    for (var _sb = bound; _sb < sblimit; _sb++) {
      this.allocation[0][_sb] = this.allocation[1][_sb] = this.readAllocation(_sb, tab3);
    } // Read scale factor selector information


    var channels = mode === MP2.MODE.MONO ? 1 : 2;

    for (var _sb2 = 0; _sb2 < sblimit; _sb2++) {
      for (var ch = 0; ch < channels; ch++) {
        if (this.allocation[ch][_sb2]) {
          this.scaleFactorInfo[ch][_sb2] = this.bits.read(2);
        }
      }

      if (mode === MP2.MODE.MONO) {
        this.scaleFactorInfo[1][_sb2] = this.scaleFactorInfo[0][_sb2];
      }
    } // Read scale factors


    for (var _sb3 = 0; _sb3 < sblimit; _sb3++) {
      for (var _ch = 0; _ch < channels; _ch++) {
        if (this.allocation[_ch][_sb3]) {
          var sf = this.scaleFactor[_ch][_sb3];

          switch (this.scaleFactorInfo[_ch][_sb3]) {
            case 0:
              sf[0] = this.bits.read(6);
              sf[1] = this.bits.read(6);
              sf[2] = this.bits.read(6);
              break;

            case 1:
              sf[0] = sf[1] = this.bits.read(6);
              sf[2] = this.bits.read(6);
              break;

            case 2:
              sf[0] = sf[1] = sf[2] = this.bits.read(6);
              break;

            case 3:
              sf[0] = this.bits.read(6);
              sf[1] = sf[2] = this.bits.read(6);
              break;
          }
        }
      }

      if (mode === MP2.MODE.MONO) {
        // eslint-disable-next-line prefer-destructuring
        this.scaleFactor[1][_sb3][0] = this.scaleFactor[0][_sb3][0]; // eslint-disable-next-line prefer-destructuring

        this.scaleFactor[1][_sb3][1] = this.scaleFactor[0][_sb3][1]; // eslint-disable-next-line prefer-destructuring

        this.scaleFactor[1][_sb3][2] = this.scaleFactor[0][_sb3][2];
      }
    } // Coefficient input and reconstruction


    var outPos = 0;

    for (var part = 0; part < 3; part++) {
      for (var granule = 0; granule < 4; granule++) {
        // Read the samples
        for (var _sb4 = 0; _sb4 < bound; _sb4++) {
          this.readSamples(0, _sb4, part);
          this.readSamples(1, _sb4, part);
        }

        for (var _sb5 = bound; _sb5 < sblimit; _sb5++) {
          this.readSamples(0, _sb5, part); // eslint-disable-next-line prefer-destructuring

          this.sample[1][_sb5][0] = this.sample[0][_sb5][0]; // eslint-disable-next-line prefer-destructuring

          this.sample[1][_sb5][1] = this.sample[0][_sb5][1]; // eslint-disable-next-line prefer-destructuring

          this.sample[1][_sb5][2] = this.sample[0][_sb5][2];
        }

        for (var _sb6 = sblimit; _sb6 < 32; _sb6++) {
          this.sample[0][_sb6][0] = 0;
          this.sample[0][_sb6][1] = 0;
          this.sample[0][_sb6][2] = 0;
          this.sample[1][_sb6][0] = 0;
          this.sample[1][_sb6][1] = 0;
          this.sample[1][_sb6][2] = 0;
        } // Synthesis loop


        for (var p = 0; p < 3; p++) {
          // Shifting step
          this.VPos = this.VPos - 64 & 1023;

          for (var _ch2 = 0; _ch2 < 2; _ch2++) {
            MP2.MatrixTransform(this.sample[_ch2], p, this.V[_ch2], this.VPos); // Build U, windowing, calculate output

            Fill(this.U, 0);
            var dIndex = 512 - (this.VPos >> 1);
            var vIndex = this.VPos % 128 >> 1;

            while (vIndex < 1024) {
              for (var i = 0; i < 32; ++i) {
                this.U[i] += this.D[dIndex++] * this.V[_ch2][vIndex++];
              }

              vIndex += 128 - 32;
              dIndex += 64 - 32;
            }

            vIndex = 128 - 32 + 1024 - vIndex;
            dIndex -= 512 - 32;

            while (vIndex < 1024) {
              for (var _i = 0; _i < 32; ++_i) {
                this.U[_i] += this.D[dIndex++] * this.V[_ch2][vIndex++];
              }

              vIndex += 128 - 32;
              dIndex += 64 - 32;
            } // Output samples


            var outChannel = _ch2 === 0 ? left : right;

            for (var j = 0; j < 32; j++) {
              outChannel[outPos + j] = this.U[j] / 2147418112;
            }
          } // End of synthesis channel loop


          outPos += 32;
        } // End of synthesis sub-block loop

      } // Decoding of the granule finished

    }

    this.sampleRate = sampleRate;
    return frameSize;
  };

  _proto.readAllocation = function readAllocation(sb, tab3) {
    var tab4 = MP2.QUANT_LUT_STEP_3[tab3][sb];
    var qtab = MP2.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)];
    return qtab ? MP2.QUANT_TAB[qtab - 1] : 0;
  };

  _proto.readSamples = function readSamples(ch, sb, part) {
    var q = this.allocation[ch][sb];
    var sf = this.scaleFactor[ch][sb][part];
    var sample = this.sample[ch][sb];
    var val = 0;

    if (!q) {
      // No bits allocated for this subband
      sample[0] = sample[1] = sample[2] = 0;
      return;
    } // Resolve scalefactor


    if (sf === 63) {
      sf = 0;
    } else {
      var shift = sf / 3 | 0;
      sf = MP2.SCALEFACTOR_BASE[sf % 3] + (1 << shift >> 1) >> shift;
    } // Decode samples


    var adj = q.levels;

    if (q.group) {
      // Decode grouped samples
      val = this.bits.read(q.bits);
      sample[0] = val % adj;
      val = val / adj | 0;
      sample[1] = val % adj;
      sample[2] = val / adj | 0;
    } else {
      // Decode direct samples
      sample[0] = this.bits.read(q.bits);
      sample[1] = this.bits.read(q.bits);
      sample[2] = this.bits.read(q.bits);
    } // Postmultiply samples


    var scale = 65536 / (adj + 1) | 0;
    adj = (adj + 1 >> 1) - 1;
    val = (adj - sample[0]) * scale;
    sample[0] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
    val = (adj - sample[1]) * scale;
    sample[1] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
    val = (adj - sample[2]) * scale;
    sample[2] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
  };

  MP2.MatrixTransform = function MatrixTransform(s, ss, d, dp) {
    var t01;
    var t02;
    var t03;
    var t04;
    var t05;
    var t06;
    var t07;
    var t08;
    var t09;
    var t10;
    var t11;
    var t12;
    var t13;
    var t14;
    var t15;
    var t16;
    var t17;
    var t18;
    var t19;
    var t20;
    var t21;
    var t22;
    var t23;
    var t24;
    var t25;
    var t26;
    var t27;
    var t28;
    var t29;
    var t30;
    var t31;
    var t32;
    var t33;
    t01 = s[0][ss] + s[31][ss];
    t02 = (s[0][ss] - s[31][ss]) * 0.500602998235;
    t03 = s[1][ss] + s[30][ss];
    t04 = (s[1][ss] - s[30][ss]) * 0.505470959898;
    t05 = s[2][ss] + s[29][ss];
    t06 = (s[2][ss] - s[29][ss]) * 0.515447309923;
    t07 = s[3][ss] + s[28][ss];
    t08 = (s[3][ss] - s[28][ss]) * 0.53104259109;
    t09 = s[4][ss] + s[27][ss];
    t10 = (s[4][ss] - s[27][ss]) * 0.553103896034;
    t11 = s[5][ss] + s[26][ss];
    t12 = (s[5][ss] - s[26][ss]) * 0.582934968206;
    t13 = s[6][ss] + s[25][ss];
    t14 = (s[6][ss] - s[25][ss]) * 0.622504123036;
    t15 = s[7][ss] + s[24][ss];
    t16 = (s[7][ss] - s[24][ss]) * 0.674808341455;
    t17 = s[8][ss] + s[23][ss];
    t18 = (s[8][ss] - s[23][ss]) * 0.744536271002;
    t19 = s[9][ss] + s[22][ss];
    t20 = (s[9][ss] - s[22][ss]) * 0.839349645416;
    t21 = s[10][ss] + s[21][ss];
    t22 = (s[10][ss] - s[21][ss]) * 0.972568237862;
    t23 = s[11][ss] + s[20][ss];
    t24 = (s[11][ss] - s[20][ss]) * 1.16943993343;
    t25 = s[12][ss] + s[19][ss];
    t26 = (s[12][ss] - s[19][ss]) * 1.48416461631;
    t27 = s[13][ss] + s[18][ss];
    t28 = (s[13][ss] - s[18][ss]) * 2.05778100995;
    t29 = s[14][ss] + s[17][ss];
    t30 = (s[14][ss] - s[17][ss]) * 3.40760841847;
    t31 = s[15][ss] + s[16][ss];
    t32 = (s[15][ss] - s[16][ss]) * 10.1900081235;
    t33 = t01 + t31;
    t31 = (t01 - t31) * 0.502419286188;
    t01 = t03 + t29;
    t29 = (t03 - t29) * 0.52249861494;
    t03 = t05 + t27;
    t27 = (t05 - t27) * 0.566944034816;
    t05 = t07 + t25;
    t25 = (t07 - t25) * 0.64682178336;
    t07 = t09 + t23;
    t23 = (t09 - t23) * 0.788154623451;
    t09 = t11 + t21;
    t21 = (t11 - t21) * 1.06067768599;
    t11 = t13 + t19;
    t19 = (t13 - t19) * 1.72244709824;
    t13 = t15 + t17;
    t17 = (t15 - t17) * 5.10114861869;
    t15 = t33 + t13;
    t13 = (t33 - t13) * 0.509795579104;
    t33 = t01 + t11;
    t01 = (t01 - t11) * 0.601344886935;
    t11 = t03 + t09;
    t09 = (t03 - t09) * 0.899976223136;
    t03 = t05 + t07;
    t07 = (t05 - t07) * 2.56291544774;
    t05 = t15 + t03;
    t15 = (t15 - t03) * 0.541196100146;
    t03 = t33 + t11;
    t11 = (t33 - t11) * 1.30656296488;
    t33 = t05 + t03;
    t05 = (t05 - t03) * 0.707106781187;
    t03 = t15 + t11;
    t15 = (t15 - t11) * 0.707106781187;
    t03 += t15;
    t11 = t13 + t07;
    t13 = (t13 - t07) * 0.541196100146;
    t07 = t01 + t09;
    t09 = (t01 - t09) * 1.30656296488;
    t01 = t11 + t07;
    t07 = (t11 - t07) * 0.707106781187;
    t11 = t13 + t09;
    t13 = (t13 - t09) * 0.707106781187;
    t11 += t13;
    t01 += t11;
    t11 += t07;
    t07 += t13;
    t09 = t31 + t17;
    t31 = (t31 - t17) * 0.509795579104;
    t17 = t29 + t19;
    t29 = (t29 - t19) * 0.601344886935;
    t19 = t27 + t21;
    t21 = (t27 - t21) * 0.899976223136;
    t27 = t25 + t23;
    t23 = (t25 - t23) * 2.56291544774;
    t25 = t09 + t27;
    t09 = (t09 - t27) * 0.541196100146;
    t27 = t17 + t19;
    t19 = (t17 - t19) * 1.30656296488;
    t17 = t25 + t27;
    t27 = (t25 - t27) * 0.707106781187;
    t25 = t09 + t19;
    t19 = (t09 - t19) * 0.707106781187;
    t25 += t19;
    t09 = t31 + t23;
    t31 = (t31 - t23) * 0.541196100146;
    t23 = t29 + t21;
    t21 = (t29 - t21) * 1.30656296488;
    t29 = t09 + t23;
    t23 = (t09 - t23) * 0.707106781187;
    t09 = t31 + t21;
    t31 = (t31 - t21) * 0.707106781187;
    t09 += t31;
    t29 += t09;
    t09 += t23;
    t23 += t31;
    t17 += t29;
    t29 += t25;
    t25 += t09;
    t09 += t27;
    t27 += t23;
    t23 += t19;
    t19 += t31;
    t21 = t02 + t32;
    t02 = (t02 - t32) * 0.502419286188;
    t32 = t04 + t30;
    t04 = (t04 - t30) * 0.52249861494;
    t30 = t06 + t28;
    t28 = (t06 - t28) * 0.566944034816;
    t06 = t08 + t26;
    t08 = (t08 - t26) * 0.64682178336;
    t26 = t10 + t24;
    t10 = (t10 - t24) * 0.788154623451;
    t24 = t12 + t22;
    t22 = (t12 - t22) * 1.06067768599;
    t12 = t14 + t20;
    t20 = (t14 - t20) * 1.72244709824;
    t14 = t16 + t18;
    t16 = (t16 - t18) * 5.10114861869;
    t18 = t21 + t14;
    t14 = (t21 - t14) * 0.509795579104;
    t21 = t32 + t12;
    t32 = (t32 - t12) * 0.601344886935;
    t12 = t30 + t24;
    t24 = (t30 - t24) * 0.899976223136;
    t30 = t06 + t26;
    t26 = (t06 - t26) * 2.56291544774;
    t06 = t18 + t30;
    t18 = (t18 - t30) * 0.541196100146;
    t30 = t21 + t12;
    t12 = (t21 - t12) * 1.30656296488;
    t21 = t06 + t30;
    t30 = (t06 - t30) * 0.707106781187;
    t06 = t18 + t12;
    t12 = (t18 - t12) * 0.707106781187;
    t06 += t12;
    t18 = t14 + t26;
    t26 = (t14 - t26) * 0.541196100146;
    t14 = t32 + t24;
    t24 = (t32 - t24) * 1.30656296488;
    t32 = t18 + t14;
    t14 = (t18 - t14) * 0.707106781187;
    t18 = t26 + t24;
    t24 = (t26 - t24) * 0.707106781187;
    t18 += t24;
    t32 += t18;
    t18 += t14;
    t26 = t14 + t24;
    t14 = t02 + t16;
    t02 = (t02 - t16) * 0.509795579104;
    t16 = t04 + t20;
    t04 = (t04 - t20) * 0.601344886935;
    t20 = t28 + t22;
    t22 = (t28 - t22) * 0.899976223136;
    t28 = t08 + t10;
    t10 = (t08 - t10) * 2.56291544774;
    t08 = t14 + t28;
    t14 = (t14 - t28) * 0.541196100146;
    t28 = t16 + t20;
    t20 = (t16 - t20) * 1.30656296488;
    t16 = t08 + t28;
    t28 = (t08 - t28) * 0.707106781187;
    t08 = t14 + t20;
    t20 = (t14 - t20) * 0.707106781187;
    t08 += t20;
    t14 = t02 + t10;
    t02 = (t02 - t10) * 0.541196100146;
    t10 = t04 + t22;
    t22 = (t04 - t22) * 1.30656296488;
    t04 = t14 + t10;
    t10 = (t14 - t10) * 0.707106781187;
    t14 = t02 + t22;
    t02 = (t02 - t22) * 0.707106781187;
    t14 += t02;
    t04 += t14;
    t14 += t10;
    t10 += t02;
    t16 += t04;
    t04 += t08;
    t08 += t14;
    t14 += t28;
    t28 += t10;
    t10 += t20;
    t20 += t02;
    t21 += t16;
    t16 += t32;
    t32 += t04;
    t04 += t06;
    t06 += t08;
    t08 += t18;
    t18 += t14;
    t14 += t30;
    t30 += t28;
    t28 += t26;
    t26 += t10;
    t10 += t12;
    t12 += t20;
    t20 += t24;
    t24 += t02;
    d[dp + 48] = -t33;
    d[dp + 49] = d[dp + 47] = -t21;
    d[dp + 50] = d[dp + 46] = -t17;
    d[dp + 51] = d[dp + 45] = -t16;
    d[dp + 52] = d[dp + 44] = -t01;
    d[dp + 53] = d[dp + 43] = -t32;
    d[dp + 54] = d[dp + 42] = -t29;
    d[dp + 55] = d[dp + 41] = -t04;
    d[dp + 56] = d[dp + 40] = -t03;
    d[dp + 57] = d[dp + 39] = -t06;
    d[dp + 58] = d[dp + 38] = -t25;
    d[dp + 59] = d[dp + 37] = -t08;
    d[dp + 60] = d[dp + 36] = -t11;
    d[dp + 61] = d[dp + 35] = -t18;
    d[dp + 62] = d[dp + 34] = -t09;
    d[dp + 63] = d[dp + 33] = -t14;
    d[dp + 32] = -t05;
    d[dp + 0] = t05;
    d[dp + 31] = -t30;
    d[dp + 1] = t30;
    d[dp + 30] = -t27;
    d[dp + 2] = t27;
    d[dp + 29] = -t28;
    d[dp + 3] = t28;
    d[dp + 28] = -t07;
    d[dp + 4] = t07;
    d[dp + 27] = -t26;
    d[dp + 5] = t26;
    d[dp + 26] = -t23;
    d[dp + 6] = t23;
    d[dp + 25] = -t10;
    d[dp + 7] = t10;
    d[dp + 24] = -t15;
    d[dp + 8] = t15;
    d[dp + 23] = -t12;
    d[dp + 9] = t12;
    d[dp + 22] = -t19;
    d[dp + 10] = t19;
    d[dp + 21] = -t20;
    d[dp + 11] = t20;
    d[dp + 20] = -t13;
    d[dp + 12] = t13;
    d[dp + 19] = -t24;
    d[dp + 13] = t24;
    d[dp + 18] = -t31;
    d[dp + 14] = t31;
    d[dp + 17] = -t02;
    d[dp + 15] = t02;
    d[dp + 16] = 0.0;
  };

  return MP2;
}(BaseDecoder);

MP2.FRAME_SYNC = 0x7ff;
MP2.VERSION = {
  MPEG_2_5: 0x0,
  MPEG_2: 0x2,
  MPEG_1: 0x3
};
MP2.LAYER = {
  III: 0x1,
  II: 0x2,
  I: 0x3
};
MP2.MODE = {
  STEREO: 0x0,
  JOINT_STEREO: 0x1,
  DUAL_CHANNEL: 0x2,
  MONO: 0x3
};
MP2.SAMPLE_RATE = new Uint16Array([44100, 48000, 32000, 0, // MPEG-1
22050, 24000, 16000, 0 // MPEG-2
]);
MP2.BIT_RATE = new Uint16Array([32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, // MPEG-1
8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160 // MPEG-2
]);
MP2.SCALEFACTOR_BASE = new Uint32Array([0x02000000, 0x01965fea, 0x01428a30]);
MP2.SYNTHESIS_WINDOW = new Float32Array([0.0, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -1.0, -1.0, -1.0, -1.0, -1.5, -1.5, -2.0, -2.0, -2.5, -2.5, -3.0, -3.5, -3.5, -4.0, -4.5, -5.0, -5.5, -6.5, -7.0, -8.0, -8.5, -9.5, -10.5, -12.0, -13.0, -14.5, -15.5, -17.5, -19.0, -20.5, -22.5, -24.5, -26.5, -29.0, -31.5, -34.0, -36.5, -39.5, -42.5, -45.5, -48.5, -52.0, -55.5, -58.5, -62.5, -66.0, -69.5, -73.5, -77.0, -80.5, -84.5, -88.0, -91.5, -95.0, -98.0, -101.0, -104.0, 106.5, 109.0, 111.0, 112.5, 113.5, 114.0, 114.0, 113.5, 112.0, 110.5, 107.5, 104.0, 100.0, 94.5, 88.5, 81.5, 73.0, 63.5, 53.0, 41.5, 28.5, 14.5, -1.0, -18.0, -36.0, -55.5, -76.5, -98.5, -122.0, -147.0, -173.5, -200.5, -229.5, -259.5, -290.5, -322.5, -355.5, -389.5, -424.0, -459.5, -495.5, -532.0, -568.5, -605.0, -641.5, -678.0, -714.0, -749.0, -783.5, -817.0, -849.0, -879.5, -908.5, -935.0, -959.5, -981.0, -1000.5, -1016.0, -1028.5, -1037.5, -1042.5, -1043.5, -1040.0, -1031.5, 1018.5, 1000.0, 976.0, 946.5, 911.0, 869.5, 822.0, 767.5, 707.0, 640.0, 565.5, 485.0, 397.0, 302.5, 201.0, 92.5, -22.5, -144.0, -272.5, -407.0, -547.5, -694.0, -846.0, -1003.0, -1165.0, -1331.5, -1502.0, -1675.5, -1852.5, -2031.5, -2212.5, -2394.0, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5, -3798.5, -3955.0, -4104.5, -4245.5, -4377.5, -4499.0, -4609.5, -4708.0, -4792.5, -4863.5, -4919.0, -4958.0, -4979.5, -4983.0, -4967.5, -4931.5, -4875.0, -4796.0, -4694.5, -4569.5, -4420.0, -4246.0, -4046.0, -3820.0, -3567.0, 3287.0, 2979.5, 2644.0, 2280.5, 1888.0, 1467.5, 1018.5, 541.0, 35.0, -499.0, -1061.0, -1650.0, -2266.5, -2909.0, -3577.0, -4270.0, -4987.5, -5727.5, -6490.0, -7274.0, -8077.5, -8899.5, -9739.0, -10594.5, -11464.5, -12347.0, -13241.0, -14144.5, -15056.0, -15973.5, -16895.5, -17820.0, -18744.5, -19668.0, -20588.0, -21503.0, -22410.5, -23308.5, -24195.0, -25068.5, -25926.5, -26767.0, -27589.0, -28389.0, -29166.5, -29919.0, -30644.5, -31342.0, -32009.5, -32645.0, -33247.0, -33814.5, -34346.0, -34839.5, -35295.0, -35710.0, -36084.5, -36417.5, -36707.5, -36954.0, -37156.5, -37315.0, -37428.0, -37496.0, 37519.0, 37496.0, 37428.0, 37315.0, 37156.5, 36954.0, 36707.5, 36417.5, 36084.5, 35710.0, 35295.0, 34839.5, 34346.0, 33814.5, 33247.0, 32645.0, 32009.5, 31342.0, 30644.5, 29919.0, 29166.5, 28389.0, 27589.0, 26767.0, 25926.5, 25068.5, 24195.0, 23308.5, 22410.5, 21503.0, 20588.0, 19668.0, 18744.5, 17820.0, 16895.5, 15973.5, 15056.0, 14144.5, 13241.0, 12347.0, 11464.5, 10594.5, 9739.0, 8899.5, 8077.5, 7274.0, 6490.0, 5727.5, 4987.5, 4270.0, 3577.0, 2909.0, 2266.5, 1650.0, 1061.0, 499.0, -35.0, -541.0, -1018.5, -1467.5, -1888.0, -2280.5, -2644.0, -2979.5, 3287.0, 3567.0, 3820.0, 4046.0, 4246.0, 4420.0, 4569.5, 4694.5, 4796.0, 4875.0, 4931.5, 4967.5, 4983.0, 4979.5, 4958.0, 4919.0, 4863.5, 4792.5, 4708.0, 4609.5, 4499.0, 4377.5, 4245.5, 4104.5, 3955.0, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5, 2758.5, 2576.5, 2394.0, 2212.5, 2031.5, 1852.5, 1675.5, 1502.0, 1331.5, 1165.0, 1003.0, 846.0, 694.0, 547.5, 407.0, 272.5, 144.0, 22.5, -92.5, -201.0, -302.5, -397.0, -485.0, -565.5, -640.0, -707.0, -767.5, -822.0, -869.5, -911.0, -946.5, -976.0, -1000.0, 1018.5, 1031.5, 1040.0, 1043.5, 1042.5, 1037.5, 1028.5, 1016.0, 1000.5, 981.0, 959.5, 935.0, 908.5, 879.5, 849.0, 817.0, 783.5, 749.0, 714.0, 678.0, 641.5, 605.0, 568.5, 532.0, 495.5, 459.5, 424.0, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5, 173.5, 147.0, 122.0, 98.5, 76.5, 55.5, 36.0, 18.0, 1.0, -14.5, -28.5, -41.5, -53.0, -63.5, -73.0, -81.5, -88.5, -94.5, -100.0, -104.0, -107.5, -110.5, -112.0, -113.5, -114.0, -114.0, -113.5, -112.5, -111.0, -109.0, 106.5, 104.0, 101.0, 98.0, 95.0, 91.5, 88.0, 84.5, 80.5, 77.0, 73.5, 69.5, 66.0, 62.5, 58.5, 55.5, 52.0, 48.5, 45.5, 42.5, 39.5, 36.5, 34.0, 31.5, 29.0, 26.5, 24.5, 22.5, 20.5, 19.0, 17.5, 15.5, 14.5, 13.0, 12.0, 10.5, 9.5, 8.5, 8.0, 7.0, 6.5, 5.5, 5.0, 4.5, 4.0, 3.5, 3.5, 3.0, 2.5, 2.5, 2.0, 2.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]); // Quantizer lookup, step 1: bitrate classes

MP2.QUANT_LUT_STEP_1 = [// 32, 48, 56, 64, 80, 96,112,128,160,192,224,256,320,384 <- bitrate
[0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], // mono
// 16, 24, 28, 32, 40, 48, 56, 64, 80, 96,112,128,160,192 <- bitrate / chan
[0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2] // stereo
]; // Quantizer lookup, step 2: bitrate class, sample rate -> B2 table idx, sblimit

MP2.QUANT_TAB = {
  A: 27 | 64,
  // Table 3-B.2a: high-rate, sblimit = 27
  B: 30 | 64,
  // Table 3-B.2b: high-rate, sblimit = 30
  C: 8,
  // Table 3-B.2c:  low-rate, sblimit =  8
  D: 12 // Table 3-B.2d:  low-rate, sblimit = 12

};
MP2.QUANT_LUT_STEP_2 = [//   44.1 kHz,        48 kHz,          32 kHz
[MP2.QUANT_TAB.C, MP2.QUANT_TAB.C, MP2.QUANT_TAB.D], // 32 - 48 kbit/sec/ch
[MP2.QUANT_TAB.A, MP2.QUANT_TAB.A, MP2.QUANT_TAB.A], // 56 - 80 kbit/sec/ch
[MP2.QUANT_TAB.B, MP2.QUANT_TAB.A, MP2.QUANT_TAB.B] // 96+	 kbit/sec/ch
]; // Quantizer lookup, step 3: B2 table, subband -> nbal, row index
// (upper 4 bits: nbal, lower 4 bits: row index)

MP2.QUANT_LUT_STEP_3 = [// Low-rate table (3-B.2c and 3-B.2d)
[0x44, 0x44, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34], // High-rate table (3-B.2a and 3-B.2b)
[0x43, 0x43, 0x43, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20], // MPEG-2 LSR table (B.2 in ISO 13818-3)
[0x45, 0x45, 0x45, 0x45, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24]]; // Quantizer lookup, step 4: table row, allocation[] value -> quant table index

MP2.QUANT_LUT_STEP4 = [[0, 1, 2, 17], [0, 1, 2, 3, 4, 5, 6, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17], [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]];
MP2.QUANT_TAB = [{
  levels: 3,
  group: 1,
  bits: 5
}, //  1
{
  levels: 5,
  group: 1,
  bits: 7
}, //  2
{
  levels: 7,
  group: 0,
  bits: 3
}, //  3
{
  levels: 9,
  group: 1,
  bits: 10
}, //  4
{
  levels: 15,
  group: 0,
  bits: 4
}, //  5
{
  levels: 31,
  group: 0,
  bits: 5
}, //  6
{
  levels: 63,
  group: 0,
  bits: 6
}, //  7
{
  levels: 127,
  group: 0,
  bits: 7
}, //  8
{
  levels: 255,
  group: 0,
  bits: 8
}, //  9
{
  levels: 511,
  group: 0,
  bits: 9
}, // 10
{
  levels: 1023,
  group: 0,
  bits: 10
}, // 11
{
  levels: 2047,
  group: 0,
  bits: 11
}, // 12
{
  levels: 4095,
  group: 0,
  bits: 12
}, // 13
{
  levels: 8191,
  group: 0,
  bits: 13
}, // 14
{
  levels: 16383,
  group: 0,
  bits: 14
}, // 15
{
  levels: 32767,
  group: 0,
  bits: 15
}, // 16
{
  levels: 65535,
  group: 0,
  bits: 16
} // 17
];

var MP2WASM = /*#__PURE__*/function (_BaseDecoder) {
  _inheritsLoose(MP2WASM, _BaseDecoder);

  function MP2WASM(options) {
    var _this;

    _this = _BaseDecoder.call(this, options) || this;
    _this.onDecodeCallback = options.onAudioDecode;
    _this.module = options.wasmModule;
    _this.bufferSize = options.audioBufferSize || 128 * 1024;
    _this.bufferMode = options.streaming ? BitBuffer.MODE.EVICT : BitBuffer.MODE.EXPAND;
    _this.sampleRate = 0;
    return _this;
  }

  var _proto = MP2WASM.prototype;

  _proto.initializeWasmDecoder = function initializeWasmDecoder() {
    if (!this.module.instance) {
      console.warn('JSMpeg: WASM module not compiled yet');
      return;
    }

    this.instance = this.module.instance;
    this.functions = this.module.instance.exports;
    this.decoder = this.functions._mp2_decoder_create(this.bufferSize, this.bufferMode);
  };

  _proto.destroy = function destroy() {
    if (!this.decoder) {
      return;
    }

    this.functions._mp2_decoder_destroy(this.decoder);
  };

  _proto.bufferGetIndex = function bufferGetIndex() {
    if (!this.decoder) {
      return;
    } // eslint-disable-next-line consistent-return


    return this.functions._mp2_decoder_get_index(this.decoder);
  };

  _proto.bufferSetIndex = function bufferSetIndex(index) {
    if (!this.decoder) {
      return;
    }

    this.functions._mp2_decoder_set_index(this.decoder, index);
  };

  _proto.bufferWrite = function bufferWrite(buffers) {
    if (!this.decoder) {
      this.initializeWasmDecoder();
    }

    var totalLength = 0;

    for (var i = 0; i < buffers.length; i++) {
      totalLength += buffers[i].length;
    }

    var ptr = this.functions._mp2_decoder_get_write_ptr(this.decoder, totalLength);

    for (var _i = 0; _i < buffers.length; _i++) {
      this.instance.heapU8.set(buffers[_i], ptr);
      ptr += buffers[_i].length;
    }

    this.functions._mp2_decoder_did_write(this.decoder, totalLength);

    return totalLength;
  };

  _proto.decode = function decode() {
    var startTime = Now();

    if (!this.decoder) {
      return false;
    }

    var decodedBytes = this.functions._mp2_decoder_decode(this.decoder);

    if (decodedBytes === 0) {
      return false;
    }

    if (!this.sampleRate) {
      this.sampleRate = this.functions._mp2_decoder_get_sample_rate(this.decoder);
    }

    if (this.destination) {
      // Create a Float32 View into the modules output channel data
      var leftPtr = this.functions._mp2_decoder_get_left_channel_ptr(this.decoder);

      var rightPtr = this.functions._mp2_decoder_get_right_channel_ptr(this.decoder);

      var leftOffset = leftPtr / Float32Array.BYTES_PER_ELEMENT;
      var rightOffset = rightPtr / Float32Array.BYTES_PER_ELEMENT;
      var left = this.instance.heapF32.subarray(leftOffset, leftOffset + MP2WASM.SAMPLES_PER_FRAME);
      var right = this.instance.heapF32.subarray(rightOffset, rightOffset + MP2WASM.SAMPLES_PER_FRAME);
      this.destination.play(this.sampleRate, left, right);
    }

    this.advanceDecodedTime(MP2WASM.SAMPLES_PER_FRAME / this.sampleRate);
    var elapsedTime = Now() - startTime;

    if (this.onDecodeCallback) {
      this.onDecodeCallback(this, elapsedTime);
    }

    return true;
  };

  _proto.getCurrentTime = function getCurrentTime() {
    var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
    return this.decodedTime - enqueuedTime;
  };

  return MP2WASM;
}(BaseDecoder);

MP2WASM.SAMPLES_PER_FRAME = 1152;

var WebGLRenderer = /*#__PURE__*/function () {
  function WebGLRenderer(options) {
    this.canvas = options.canvas || document.createElement('canvas');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.enabled = true;
    this.hasTextureData = {};
    var contextCreateOptions = {
      preserveDrawingBuffer: !!options.preserveDrawingBuffer,
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false
    };
    this.gl = this.canvas.getContext('webgl', contextCreateOptions) || this.canvas.getContext('experimental-webgl', contextCreateOptions);

    if (!this.gl) {
      throw new Error('Failed to get WebGL Context');
    }

    var gl = this.gl;
    var vertexAttr = null;
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); // Init buffers

    this.vertexBuffer = gl.createBuffer();
    var vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexCoords, gl.STATIC_DRAW); // Setup the main YCrCbToRGBA shader

    this.program = this.createProgram(WebGLRenderer.SHADER.VERTEX_IDENTITY, WebGLRenderer.SHADER.FRAGMENT_YCRCB_TO_RGBA);
    vertexAttr = gl.getAttribLocation(this.program, 'vertex');
    gl.enableVertexAttribArray(vertexAttr);
    gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
    this.textureY = this.createTexture(0, 'textureY');
    this.textureCb = this.createTexture(1, 'textureCb');
    this.textureCr = this.createTexture(2, 'textureCr'); // Setup the loading animation shader

    this.loadingProgram = this.createProgram(WebGLRenderer.SHADER.VERTEX_IDENTITY, WebGLRenderer.SHADER.FRAGMENT_LOADING);
    vertexAttr = gl.getAttribLocation(this.loadingProgram, 'vertex');
    gl.enableVertexAttribArray(vertexAttr);
    gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
    this.shouldCreateUnclampedViews = !this.allowsClampedTextureData();
  }

  var _proto = WebGLRenderer.prototype;

  _proto.destroy = function destroy() {
    var gl = this.gl;
    this.deleteTexture(gl.TEXTURE0, this.textureY);
    this.deleteTexture(gl.TEXTURE1, this.textureCb);
    this.deleteTexture(gl.TEXTURE2, this.textureCr);
    gl.useProgram(null);
    gl.deleteProgram(this.program);
    gl.deleteProgram(this.loadingProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.deleteBuffer(this.vertexBuffer);
    gl.getExtension('WEBGL_lose_context').loseContext();
    this.canvas.remove();
  };

  _proto.resize = function resize(width, height) {
    this.width = width | 0;
    this.height = height | 0;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.gl.useProgram(this.program);
    var codedWidth = this.width + 15 >> 4 << 4;
    this.gl.viewport(0, 0, codedWidth, this.height);
  };

  _proto.createTexture = function createTexture(index, name) {
    var gl = this.gl;
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(gl.getUniformLocation(this.program, name), index);
    return texture;
  };

  _proto.createProgram = function createProgram(vsh, fsh) {
    var gl = this.gl;
    var program = gl.createProgram();
    gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh));
    gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fsh));
    gl.linkProgram(program);
    gl.useProgram(program);
    return program;
  };

  _proto.compileShader = function compileShader(type, source) {
    var gl = this.gl;
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader));
    }

    return shader;
  };

  _proto.allowsClampedTextureData = function allowsClampedTextureData() {
    var gl = this.gl;
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, 1, 1, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, new Uint8ClampedArray([0]));
    return gl.getError() === 0;
  };

  _proto.renderProgress = function renderProgress(progress) {
    var gl = this.gl;
    gl.useProgram(this.loadingProgram);
    var loc = gl.getUniformLocation(this.loadingProgram, 'progress');
    gl.uniform1f(loc, progress);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  _proto.render = function render(y, cb, cr, isClampedArray) {
    if (!this.enabled) {
      return;
    }

    var gl = this.gl;
    var w = this.width + 15 >> 4 << 4;
    var h = this.height;
    var w2 = w >> 1;
    var h2 = h >> 1; // In some browsers WebGL doesn't like Uint8ClampedArrays (this is a bug
    // and should be fixed soon-ish), so we have to create a Uint8Array view
    // for each plane.

    if (isClampedArray && this.shouldCreateUnclampedViews) {
      y = new Uint8Array(y.buffer);
      cb = new Uint8Array(cb.buffer);
      cr = new Uint8Array(cr.buffer);
    }

    gl.useProgram(this.program);
    this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y);
    this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb);
    this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  _proto.updateTexture = function updateTexture(unit, texture, w, h, data) {
    var gl = this.gl;
    gl.activeTexture(unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    if (this.hasTextureData[unit]) {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
    } else {
      this.hasTextureData[unit] = true;
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, w, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
    }
  };

  _proto.deleteTexture = function deleteTexture(unit, texture) {
    var gl = this.gl;
    gl.activeTexture(unit);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.deleteTexture(texture);
  };

  WebGLRenderer.IsSupported = function IsSupported() {
    try {
      if (!window.WebGLRenderingContext) {
        return false;
      }

      var canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (err) {
      return false;
    }
  };

  return WebGLRenderer;
}();

WebGLRenderer.SHADER = {
  FRAGMENT_YCRCB_TO_RGBA: ['precision mediump float;', 'uniform sampler2D textureY;', 'uniform sampler2D textureCb;', 'uniform sampler2D textureCr;', 'varying vec2 texCoord;', 'mat4 rec601 = mat4(', '1.16438,  0.00000,  1.59603, -0.87079,', '1.16438, -0.39176, -0.81297,  0.52959,', '1.16438,  2.01723,  0.00000, -1.08139,', '0, 0, 0, 1', ');', 'void main() {', 'float y = texture2D(textureY, texCoord).r;', 'float cb = texture2D(textureCb, texCoord).r;', 'float cr = texture2D(textureCr, texCoord).r;', 'gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;', '}'].join('\n'),
  FRAGMENT_LOADING: ['precision mediump float;', 'uniform float progress;', 'varying vec2 texCoord;', 'void main() {', 'float c = ceil(progress-(1.0-texCoord.y));', 'gl_FragColor = vec4(c,c,c,1);', '}'].join('\n'),
  VERTEX_IDENTITY: ['attribute vec2 vertex;', 'varying vec2 texCoord;', 'void main() {', 'texCoord = vertex;', 'gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);', '}'].join('\n')
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["destroy"] }] */

var CanvasRenderer = /*#__PURE__*/function () {
  function CanvasRenderer(options) {
    this.canvas = options.canvas || document.createElement('canvas');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.enabled = true;
    this.context = this.canvas.getContext('2d');
  }

  var _proto = CanvasRenderer.prototype;

  _proto.destroy = function destroy() {// Nothing to do here
  };

  _proto.resize = function resize(width, height) {
    this.width = width | 0;
    this.height = height | 0;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.imageData = this.context.getImageData(0, 0, this.width, this.height);
    Fill(this.imageData.data, 255);
  };

  _proto.renderProgress = function renderProgress(progress) {
    var w = this.canvas.width;
    var h = this.canvas.height;
    var ctx = this.context;
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, h - h * progress, w, h * progress);
  };

  _proto.render = function render(y, cb, cr) {
    this.YCbCrToRGBA(y, cb, cr, this.imageData.data);
    this.context.putImageData(this.imageData, 0, 0);
  };

  _proto.YCbCrToRGBA = function YCbCrToRGBA(y, cb, cr, rgba) {
    if (!this.enabled) {
      return;
    } // Chroma values are the same for each block of 4 pixels, so we proccess
    // 2 lines at a time, 2 neighboring pixels each.
    // I wish we could use 32bit writes to the RGBA buffer instead of writing
    // each byte separately, but we need the automatic clamping of the RGBA
    // buffer.


    var w = this.width + 15 >> 4 << 4;
    var w2 = w >> 1;
    var yIndex1 = 0;
    var yIndex2 = w;
    var yNext2Lines = w + (w - this.width);
    var cIndex = 0;
    var cNextLine = w2 - (this.width >> 1);
    var rgbaIndex1 = 0;
    var rgbaIndex2 = this.width * 4;
    var rgbaNext2Lines = this.width * 4;
    var cols = this.width >> 1;
    var rows = this.height >> 1;
    var ccb;
    var ccr;
    var r;
    var g;
    var b;

    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        ccb = cb[cIndex];
        ccr = cr[cIndex];
        cIndex++;
        r = ccb + (ccb * 103 >> 8) - 179;
        g = (ccr * 88 >> 8) - 44 + (ccb * 183 >> 8) - 91;
        b = ccr + (ccr * 198 >> 8) - 227; // Line 1

        var y1 = y[yIndex1++];
        var y2 = y[yIndex1++];
        rgba[rgbaIndex1] = y1 + r;
        rgba[rgbaIndex1 + 1] = y1 - g;
        rgba[rgbaIndex1 + 2] = y1 + b;
        rgba[rgbaIndex1 + 4] = y2 + r;
        rgba[rgbaIndex1 + 5] = y2 - g;
        rgba[rgbaIndex1 + 6] = y2 + b;
        rgbaIndex1 += 8; // Line 2

        var y3 = y[yIndex2++];
        var y4 = y[yIndex2++];
        rgba[rgbaIndex2] = y3 + r;
        rgba[rgbaIndex2 + 1] = y3 - g;
        rgba[rgbaIndex2 + 2] = y3 + b;
        rgba[rgbaIndex2 + 4] = y4 + r;
        rgba[rgbaIndex2 + 5] = y4 - g;
        rgba[rgbaIndex2 + 6] = y4 + b;
        rgbaIndex2 += 8;
      }

      yIndex1 += yNext2Lines;
      yIndex2 += yNext2Lines;
      rgbaIndex1 += rgbaNext2Lines;
      rgbaIndex2 += rgbaNext2Lines;
      cIndex += cNextLine;
    }
  };

  return CanvasRenderer;
}();

var WebAudioOut = /*#__PURE__*/function () {
  function WebAudioOut() {
    this.context = WebAudioOut.CachedContext = WebAudioOut.CachedContext || new (window.AudioContext || window.webkitAudioContext)();
    this.gain = this.context.createGain();
    this.destination = this.gain; // Keep track of the number of connections to this AudioContext, so we
    // can safely close() it when we're the only one connected to it.

    this.gain.connect(this.context.destination);
    this.context._connections = (this.context._connections || 0) + 1;
    this.startTime = 0;
    this.buffer = null;
    this.wallclockStartTime = 0;
    this.volume = 1;
    this.enabled = true;
    this.unlocked = !WebAudioOut.NeedsUnlocking();
    Object.defineProperty(this, 'enqueuedTime', {
      get: this.getEnqueuedTime
    });
  }

  var _proto = WebAudioOut.prototype;

  _proto.destroy = function destroy() {
    this.gain.disconnect();
    this.context._connections--;

    if (this.context._connections === 0) {
      this.context.close();
      WebAudioOut.CachedContext = null;
    }
  };

  _proto.play = function play(sampleRate, left, right) {
    if (!this.enabled) {
      return;
    } // If the context is not unlocked yet, we simply advance the start time
    // to "fake" actually playing audio. This will keep the video in sync.


    if (!this.unlocked) {
      var ts = Now();

      if (this.wallclockStartTime < ts) {
        this.wallclockStartTime = ts;
      }

      this.wallclockStartTime += left.length / sampleRate;
      return;
    }

    this.gain.gain.value = this.volume;
    var buffer = this.context.createBuffer(2, left.length, sampleRate);
    buffer.getChannelData(0).set(left);
    buffer.getChannelData(1).set(right);
    var source = this.context.createBufferSource();
    source.buffer = buffer;
    source.connect(this.destination);
    var now = this.context.currentTime;
    var duration = buffer.duration;

    if (this.startTime < now) {
      this.startTime = now;
      this.wallclockStartTime = Now();
    }

    source.start(this.startTime);
    this.startTime += duration;
    this.wallclockStartTime += duration;
  };

  _proto.stop = function stop() {
    // Meh; there seems to be no simple way to get a list of currently
    // active source nodes from the Audio Context, and maintaining this
    // list ourselfs would be a pain, so we just set the gain to 0
    // to cut off all enqueued audio instantly.
    this.gain.gain.value = 0;
  };

  _proto.getEnqueuedTime = function getEnqueuedTime() {
    // The AudioContext.currentTime is only updated every so often, so if we
    // want to get exact timing, we need to rely on the system time.
    return Math.max(this.wallclockStartTime - Now(), 0);
  };

  _proto.resetEnqueuedTime = function resetEnqueuedTime() {
    this.startTime = this.context.currentTime;
    this.wallclockStartTime = Now();
  };

  _proto.unlock = function unlock(callback) {
    if (this.unlocked) {
      if (callback) {
        callback();
      }

      return;
    }

    this.unlockCallback = callback; // Create empty buffer and play it

    var buffer = this.context.createBuffer(1, 1, 22050);
    var source = this.context.createBufferSource();
    source.buffer = buffer;
    source.connect(this.destination); // polyfill source.start(0);

    if (source.start) {
      source.start(0);
    } else {
      source.noteOn(0);
    }

    setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0);
  };

  _proto.checkIfUnlocked = function checkIfUnlocked(source, attempt) {
    if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
      this.unlocked = true;

      if (this.unlockCallback) {
        this.unlockCallback();
        this.unlockCallback = null;
      }
    } else if (attempt < 10) {
      // Jeez, what a shit show. Thanks iOS!
      setTimeout(this.checkIfUnlocked.bind(this, source, attempt + 1), 100);
    }
  };

  WebAudioOut.NeedsUnlocking = function NeedsUnlocking() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  WebAudioOut.IsSupported = function IsSupported() {
    return window.AudioContext || window.webkitAudioContext;
  };

  return WebAudioOut;
}();

WebAudioOut.CachedContext = null;

var WASM = /*#__PURE__*/function () {
  function WASM() {
    this.stackSize = 5 * 1024 * 1024; // emscripten default

    this.pageSize = 64 * 1024; // wasm page size

    this.onInitCallback = null;
    this.ready = false;
  }

  var _proto = WASM.prototype;

  _proto.write = function write(buffer) {
    this.loadFromBuffer(buffer, this.onInitCallback);
  };

  _proto.loadFromFile = function loadFromFile(url, callback) {
    this.onInitCallback = callback;
    var ajax = new AjaxSource(url, {});
    ajax.connect(this);
    ajax.start();
  };

  _proto.loadFromBuffer = function loadFromBuffer(buffer, callback) {
    var _this = this;

    this.moduleInfo = this.readDylinkSection(buffer);

    if (!this.moduleInfo) {
      this.callback && this.callback(null);
      return;
    }

    this.memory = new WebAssembly.Memory({
      initial: 256
    });
    var env = {
      memory: this.memory,
      memoryBase: 0,
      __memory_base: 0,
      table: new WebAssembly.Table({
        initial: this.moduleInfo.tableSize,
        element: 'anyfunc'
      }),
      tableBase: 0,
      __table_base: 0,
      abort: this.c_abort.bind(this),
      ___assert_fail: this.c_assertFail.bind(this),
      _sbrk: this.c_sbrk.bind(this)
    };
    this.brk = this.align(this.moduleInfo.memorySize + this.stackSize);
    WebAssembly.instantiate(buffer, {
      env: env
    }).then(function (results) {
      _this.instance = results.instance;

      if (_this.instance.exports.__post_instantiate) {
        _this.instance.exports.__post_instantiate();
      }

      _this.createHeapViews();

      _this.ready = true;
      callback && callback(_this);
    });
  };

  _proto.createHeapViews = function createHeapViews() {
    this.instance.heapU8 = new Uint8Array(this.memory.buffer);
    this.instance.heapU32 = new Uint32Array(this.memory.buffer);
    this.instance.heapF32 = new Float32Array(this.memory.buffer);
  };

  _proto.align = function align(addr) {
    // eslint-disable-next-line no-restricted-properties
    var a = Math.pow(2, this.moduleInfo.memoryAlignment);
    return Math.ceil(addr / a) * a;
  };

  _proto.c_sbrk = function c_sbrk(size) {
    var previousBrk = this.brk;
    this.brk += size;

    if (this.brk > this.memory.buffer.byteLength) {
      var bytesNeeded = this.brk - this.memory.buffer.byteLength;
      var pagesNeeded = Math.ceil(bytesNeeded / this.pageSize);
      this.memory.grow(pagesNeeded);
      this.createHeapViews();
    }

    return previousBrk;
  } // eslint-disable-next-line no-unused-vars,class-methods-use-this
  ;

  _proto.c_abort = function c_abort(size) {
    // eslint-disable-next-line prefer-rest-params
    console.warn('JSMPeg: WASM abort', arguments);
  } // eslint-disable-next-line no-unused-vars,class-methods-use-this
  ;

  _proto.c_assertFail = function c_assertFail(size) {
    // eslint-disable-next-line prefer-rest-params
    console.warn('JSMPeg: WASM ___assert_fail', arguments);
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.readDylinkSection = function readDylinkSection(buffer) {
    // Read the WASM header and dylink section of the .wasm binary data
    // to get the needed table size and static data size.
    // https://github.com/WebAssembly/tool-conventions/blob/master/DynamicLinking.md
    // https://github.com/kripken/emscripten/blob/20602efb955a7c6c20865a495932427e205651d2/src/support.js
    var bytes = new Uint8Array(buffer);
    var next = 0;

    var readVarUint = function readVarUint() {
      var ret = 0;
      var mul = 1; // eslint-disable-next-line no-constant-condition

      while (1) {
        var byte = bytes[next++];
        ret += (byte & 0x7f) * mul;
        mul *= 0x80;

        if (!(byte & 0x80)) {
          return ret;
        }
      }
    };

    var matchNextBytes = function matchNextBytes(expected) {
      for (var i = 0; i < expected.length; i++) {
        var b = typeof expected[i] === 'string' ? expected[i].charCodeAt(0) : expected[i];

        if (bytes[next++] !== b) {
          return false;
        }
      }

      return true;
    }; // Make sure we have a wasm header


    if (!matchNextBytes([0, 'a', 's', 'm'])) {
      console.warn('JSMpeg: WASM header not found');
      return null;
    } // Make sure we have a dylink section


    next = 9; // eslint-disable-next-line no-unused-vars

    readVarUint();

    if (!matchNextBytes([6, 'd', 'y', 'l', 'i', 'n', 'k'])) {
      console.warn('JSMpeg: No dylink section found in WASM');
      return null;
    }

    return {
      memorySize: readVarUint(),
      memoryAlignment: readVarUint(),
      tableSize: readVarUint(),
      tableAlignment: readVarUint()
    };
  };

  WASM.IsSupported = function IsSupported() {
    return !!window.WebAssembly;
  };

  WASM.GetModule = function GetModule() {
    WASM.CACHED_MODULE = WASM.CACHED_MODULE || new WASM();
    return WASM.CACHED_MODULE;
  };

  return WASM;
}();

// get from jsmpeg
var WASM_BINARY = 'AGFzbQEAAAAADwZkeWxpbmuA0MACBAAAAAE0CWAEf39/fwBgAX8Bf2ACf38Bf2ABfwBgAn9/AGABfwF9YAZ/f39/f38AYAN/f38Bf2AAAAJGBANlbnYOX19fYXNzZXJ0X2ZhaWwAAANlbnYFX3NicmsAAQNlbnYNX19tZW1vcnlfYmFzZQN/AANlbnYGbWVtb3J5AgCAAgM9PAIDAgEEBAMBBQEBAQEBAQEDBAMGAwQAAwAAAAIDAgEEBAEBAQEBAAACAwIBAgECAQEBAQMEAwMCBwcHCAYLAn8BQQALfwFBAAsHggYfEl9fcG9zdF9pbnN0YW50aWF0ZQA9BV9mcmVlADgHX21hbGxvYwAxB19tZW1jcHkAOghfbWVtbW92ZQA7B19tZW1zZXQAPBNfbXAyX2RlY29kZXJfY3JlYXRlAB0TX21wMl9kZWNvZGVyX2RlY29kZQAmFF9tcDJfZGVjb2Rlcl9kZXN0cm95AB4WX21wMl9kZWNvZGVyX2RpZF93cml0ZQAiFl9tcDJfZGVjb2Rlcl9nZXRfaW5kZXgAICFfbXAyX2RlY29kZXJfZ2V0X2xlZnRfY2hhbm5lbF9wdHIAJCJfbXAyX2RlY29kZXJfZ2V0X3JpZ2h0X2NoYW5uZWxfcHRyACUcX21wMl9kZWNvZGVyX2dldF9zYW1wbGVfcmF0ZQAjGl9tcDJfZGVjb2Rlcl9nZXRfd3JpdGVfcHRyAB8WX21wMl9kZWNvZGVyX3NldF9pbmRleAAhFV9tcGVnMV9kZWNvZGVyX2NyZWF0ZQACFV9tcGVnMV9kZWNvZGVyX2RlY29kZQARFl9tcGVnMV9kZWNvZGVyX2Rlc3Ryb3kAAxhfbXBlZzFfZGVjb2Rlcl9kaWRfd3JpdGUABxlfbXBlZzFfZGVjb2Rlcl9nZXRfY2JfcHRyABAdX21wZWcxX2RlY29kZXJfZ2V0X2NvZGVkX3NpemUACxlfbXBlZzFfZGVjb2Rlcl9nZXRfY3JfcHRyAA8dX21wZWcxX2RlY29kZXJfZ2V0X2ZyYW1lX3JhdGUAChlfbXBlZzFfZGVjb2Rlcl9nZXRfaGVpZ2h0AA0YX21wZWcxX2RlY29kZXJfZ2V0X2luZGV4AAUYX21wZWcxX2RlY29kZXJfZ2V0X3dpZHRoAAwcX21wZWcxX2RlY29kZXJfZ2V0X3dy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BQJ/IANBzQBHDQIgACgCgAFBBhAwIQMCQAJAIAAoAoABQQgQMCIEIgYEQCAGQYABRgRADAIFDAMLAAsgACgCgAFBCBAwDAILIAAoAoABQQgQMEGAfmoMAQsgBEGAfmogBCAEQYABShsLCyEEDAELIAZB/wFxIgNBACADayAAKAKAAUEBEDBFGyEEIAZBCHUhAwsgAiADaiIGIwBBQGtqLQAAIgMgBWotAAAgACgCREEAIARBAXQiAkEfdUEBciAAKAJcGyACamxsIgJBBHVBAEEBQX8gAkEPShsgAkEQcRtrIgJBgHAgAkGAcEobIQIgAEGcAWogA0ECdGogAyMAQZA1amotAAAgAkH/DyACQf8PSBtsNgIAIAZBAWohAgwBCwsgAUEESARAIABBhAFqIQUgAUEDdEEIcSAAKAJUIAAoAhgiAyAAKAJQbGpBBHRyIANBA3RBACABQQJxG2ohBAUgAEGMAWogAEGIAWogAUEERhshBSAAKAJQIAAoAhgiAUECdGwgACgCVEEDdGohBCABQQF1IQMLIANBeGohAyAFKAIAIQUgAkEBRiECIABBnAFqIQEgACgCXARAIAIEQCABKAIAQYABakEIdSAFIAQgAxAYIAFBADYCAAUgARAZIAEgBSAEIAMQGiABQQBBgAIQPBoLBSACBEAgASgCAEGAAWpBCHUgBSAEIAMQGyABQQA2AgAFIAEQGSABIAUgBCADEBwgAUEAQYACEDwaCwsL7AYAIAEgAmogAEEAIABBAEobIgBB/wEgAEH/AUgbQf8BcSIAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA0EIaiIDaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA2oiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASACIANqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAiADaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA2oiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASACIANqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAiADaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAAAubBgEUfwNAIAFBEGpBAnQgAGoiBygCACIGIAFBMGpBAnQgAGoiDSgCACIJaiEFIAFBCGpBAnQgAGoiDigCACICIAFBOGpBAnQgAGoiDygCACIDaiEEIAIgA2siEEHZA2wgAUEoakECdCAAaiIKKAIAIgIgAUEYakECdCAAaiIRKAIAIgNrIgtBvH5sQYABampBCHUgBCACIANqIghqIgJrIgMgBCAIa0HqAmxBgAFqQQh1ayEEIAFBAnQgAGoiCCgCACIMIAFBIGpBAnQgAGoiEigCACITayIUIAYgCWtB6gJsQYABakEIdSAFayIJaiEGIAggAiAMIBNqIgggBWoiDGo2AgAgDiADIAZqNgIAIAcgFCAJayIHIARrNgIAIBEgC0HZA2xBgAFqIBBBxAFsakEIdSAEaiIJIAggBWsiBWo2AgAgEiAFIAlrNgIAIAogBCAHajYCACANIAYgA2s2AgAgDyAMIAJr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aiABQQxsaiAAKAIIQQYQMCICNgLUAiAAIANBgANsaiABQQxsaiACNgLQAiAFIAI2AgAMAgsgBSAAKAIIQQYQMDYCACAAIANBgANsaiABQQxsaiAAKAIIQQYQMCICNgLUAiAAIANBgANsaiABQQxsaiACNgLQAgsLCyADQQFqIgMgCEkNAAsgAUEBaiIBIAtHDQALCwsLaiALQSBJIRsgAEHMtgFqIQQgAEHMCGohHCAAQcz2AGohHSAAQcwLaiEeIABBzJYBaiEfA0BBACEWIBQhAwNAIBgEQEEAIQEDQCAAQQAgASAOECggAEEBIAEgDhAoIAFBAWoiASANSA0ACwsgGQRAIA0hAQNAIABBACABIA4QKCAAQcwLaiABQQxsaiAAQcwIaiABQQxsaigCADYCACAAIAFBDGxqQdALaiAAIAFBDGxqQdAIaigCADYCACAAIAFBDGxqQdQLaiAAIAFBDGxqQdQIaigCADYCACABQQFqIgEgC0gNAAsLIBsEQCALIQEDQCAAQcwIaiABQQxsakEANgIAIAAgAUEMbGpB0AhqQQA2AgAgACABQQxsakHUCGpBADYCACAAQcwLaiABQQxsakEANgIAIAAgAUEMbGpB0AtqQQA2AgAgACABQQxsakHUC2pBADYCACABQQFqIgFBIEcNAAsLIAAoAgQhASADIRFBACESA0AgACABQcAHakH/B3EiATYCBCAcIBIgHSABECkgBEIANwIAIARCADcCCCAEQgA3AhAgBEIANwIYIARCADcCICAEQgA3AiggBEIANwIwIARCADcCOCAEQUBrQgA3AgAgBEIANwJIIARCADcCUCAEQgA3AlggBEIANwJgIARCADcCaCAEQgA3AnAgBEIANwJ4IAAoAgQiD0EBdSETQf8HIA9BgAFvQQF1IgxrIgFBgH9xIRUgAUEHdkEGdEHABGohEEGABCATayEGIAwhAQNAIAYhB0EAIQkgASECA0AgB0EBaiEIIAJBAWohBSAAQcy2AWogCUECdGoiCiAAQczWAGogB0ECdGoqAgAgAEHM9gBqIAJBAnRqKgIAlCAKKAIAspKoNgIAIAlBAWoiCUEgRwRAIAghByAFIQIMAQsLIAFBgAFqIQIgBkFAayEGIAFBgAdIBEAgAiEBDAELC0HgByAMIBVqayIBQYAISARAIBAgE2tBoHxqIQYD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IkogWCBLk7tEujBFka7n9D+itiJLk7tEuEt/Zp6g5j+itiI6kiEqIANBMGpBAnQgAmogTSA8kow4AgAgA0EvakECdCACaiApICiSIEwgSZIgJJIiKJKMIik4AgAgA0ExakECdCACaiApOAIAIANBLmpBAnQgAmogRiBFkiAjkowiKTgCACADQTJqQQJ0IAJqICk4AgAgA0EtakECdCACaiAwIC2SIEAgPpIgJpIiKZIiPCAokowiKDgCACADQTNqQQJ0IAJqICg4AgAgA0EsakECdCACaiA2IE+SIFEgUJIgNZIiKJKMIjY4AgAgA0E0akECdCACaiA2OAIAIANBK2pBAnQgAmogPCA/IDiSIDOSIjwgJJIiJJKMIjY4AgAgA0E1akECdCACaiA2OAIAIANBKmpBAnQgAmogPSBSkiA7kiI9ICOSjCIjOAIAIANBNmpBAnQgAmogIzgCACADQSlqQQJ0IAJqIEsgSpIgOpIiIyAkkowiJDgCACADQTdqQQJ0IAJqICQ4AgAgA0EoakECdCACaiBIIE6SIDGSjCIkOAIAIANBOGpBAnQgAmogJDgCACADQSdqQQJ0IAJqICMgPCArkiIjkowiJDgCACADQTlqQQJ0IAJqICQ4AgAgA0EmakECdCACaiA9ICeSjCIkOAIAIANBOmpBAnQgAmogJDgCACADQSVqQQJ0IAJqICkgLSAwk7tEuEt/Zp6g5j+itiIpkiItICOSjCIjOAIAIANBO2pBAnQgAmogIzgCACADQSRqQQJ0IAJqICggR5KMIiM4AgAgA0E8akECdCACaiAjOAIAIANBI2pBAnQgAmogLSArIDKSIiOSjCIoOAIAIANBPWpBAnQgAmogKDgCACADQSJqQQJ0IAJqICcgU5KMIic4AgAgA0E+akECdCACaiAnOAIAIANBIWpBAnQgAmogIyBCkowiIzgCACADQT9qQQJ0IAJqICM4AgAgA0EgakECdCACaiA0jDgCACADQQJ0IAJqIDQ4AgAgA0EfakECdCACaiAsjDgCACADQQFqQQJ0IAJqICw4AgAgA0EeakECdCACaiA5jDgCACADQQJqQQJ0IAJqIDk4AgAgA0EdakECdCACaiApICaSIjQgQZIiI4w4AgAgA0EDakECdCACaiAjOAIAIANBHGpBAnQgAmogL4w4AgAgA0EEakECdCACaiAvOAIAIANBG2pBAnQgAmogNCA3IDOSIjSSIi+MOAIAIANBBWpBAnQgAmogLzgCACADQRpqQQJ0IAJqIEQgO5IiL4w4AgAgA0EGakECdCACaiAvOAIAIANBGWpBAnQgAmogNCA6kiI0jDgCACADQQdqQQJ0IAJqIDQ4AgAgA0EYakECdCACaiAxjDgCACADQQhqQQJ0IAJqIDE4AgAgA0EXakECdCACaiAqjDgCACADQQlqQQJ0IAJqICo4AgAgA0EWakECdCACaiA7IC6SIjGMOAIAIANBCmpBAnQgAmogMTgCACADQRVqQQJ0IAJqIEMgJpIiMYw4AgAgA0ELakECdCACaiAxOAIAIANBFGpBAnQgAmogNYw4AgAgA0EMakECdCACaiA1OAIAIANBE2pBAnQgAmogJiAlkiImjDgCACADQQ1qQQJ0IAJqICY4AgAgA0ESakECdCACaiAujDgCACADQQ5qQQJ0IAJqIC44AgAgA0ERakECdCACaiAljDgCACADQQ9qQQJ0IAJqICU4AgAgA0EQakECdCACakMAAAAAOAIACy8BAX9BFBAxIgIgATYCECACIAAQMTYCACACIAA2AgggAkEANgIMIAJBADYCBCACCw0AIAAoAgAQOCAAEDgL6QEBBH8gACgCCCIDIAAoAgwiAmsiBCABSQRAAkAgACgCEEECRgRAIAAgACgCACABIARrIANBAXQiAiACIARqIAFJGyIBEDk2AgAgACABNgIIIAAoAgQgACgCDCIBQQN0IgJNDQEgACACNgIEDAELIAIgACgCBCIFQQN2IgNGIAMgBGogAUlyBEAgAEEANgIMIABBADYCBEEAIQEMAQsgAwRAIAAoAgAiASABIANqIAIgA2sQOxogACAAKAIMIANrIgE2AgwgACAAKAIEIAVBeHFrNgIEBSACIQELCwUgAiEBCyAAKAIAIAFqC40BAQR/IAAoAgRBB2pBA3YiASAAKAIMIgRJBEACQCAAKAIAIQIDQAJAIAFBAWohAyABIAJqLAAARQRAIAIgA2osAABFBEAgAiABQQJqaiwAAEEBRg0CCwsgAyAETw0CIAMhAQwBCwsgACABQQN0QSBqNgIEIAIgAUEDamotAAAPCwsgACAEQQN0NgIEQX8LqQEBBH8gACgCBEEHakEDdiICIAAoAgwiBUkEQAJAIAAoAgAh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aiIGQRBLDQALIAMgCWohAyAIayECIQEMAgsgAyABKAIAIgU6AAAgAyABLAABOgABIAJBbGpBcHEiCEESaiIJIAFqIAJBbmogA0ECaiEEIAJBfmohBiABQQJqIQIgBSEBA0AgBCACKAICIgVBEHQgAUEQdnI2AgAgBCACKAIGIgFBEHQgBUEQdnI2AgQgBCACKAIKIgVBEHQgAUEQdnI2AgggBCACKAIOIgFBEHQgBUEQdnI2AgwgAkEQaiECIARBEGohBCAGQXBqIgZBEUsNAAsgAyAJaiEDIAhrIQIhAQwBCyADIAEoAgAiBToAACACQWxqQXBxIghBEWoiCSABaiACQW9qIANBAWohBCACQX9qIQYgAUEBaiECIAUhAQNAIAQgAigCAyIFQRh0IAFBCHZyNgIAIAQgAigCByIBQRh0IAVBCHZyNgIEIAQgAigCCyIFQRh0IAFBCHZyNgIIIAQgAigCDyIBQRh0IAVBCHZyNgIMIAJBEGohAiAEQRBqIQQgBkFwaiIGQRJLDQALIAMgCWohAyAIayECIQELCyACQRBxBEAgAyABLAAAOgAAIAMgASwAAToAASADIAEsAAI6AAIgAyABLAADOgADIAMgASwABDoABCADIAEsAAU6AAUgAyABLAAGOgAGIAMgASwABzoAByADIAEsAAg6AAggAyABLAAJOgAJIAMgASwACjoACiADIAEsAAs6AAsgAyABLAAMOgAMIAMgASwADToADSADIAEsAA46AA4gAyABLAAPOgAPIANBEGohAyABQRBqIQELIAJBCHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgAyABLAAEOgAEIAMgASwABToABSADIAEsAAY6AAYgAyABLAAHOgAHIANBCGohAyABQQhqIQELIAJBBHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgA0EEaiEDIAFBBGohAQsgAkECcQRAIAMgASwAADoAACADIAEsAAE6AAEgA0ECaiEDIAFBAmohAQsgAkEBcUUEQCAADwsgAyABLAAAOgAAIAALwAMBBn8gACABRgRAIAAPCyABIAJqIABLIAAgAmoiBSABS3FFBEAgACABIAIQOhogAA8LIAEgACIDc0EDcUUhBCADIAFJBH8g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JCQkJCQkJCQkJCQkJCQkJCQAAAABAhEAAAAAAAAAAAAAAAAAAQIDBAUGEQAAAAAAAAAAAAECAwQFBgcICQoLDA0OEQABAwUGBwgJCgsMDQ4PEBEAAQIEBQYHCAkKCwwNDg8RAAECAwQFBgcICQoLDA0ODwMAAQUFAAEHBwAAAwkAAQoPAAAEHwAABT8AAAZ/AAAH/wAACP8BAAn/AwAK/wcAC/8PAAz/HwAN/z8ADv9/AA///wAQAAAAAAAAAAAAAAAAAAAAAupflgEwikIBCAgMW1tbXltec2l6ZSA+IDAAL2hvbWUvZG9taW5pYy9wcm9qZWN0cy9lbXNkay9mYXN0Y29tcC9lbXNjcmlwdGVuLy9zeXN0ZW0vbGliL2VtbWFsbG9jLmNwcABnZXRGcmVlTGlzdEluZGV4AE1JTl9GUkVFTElTVF9JTkRFWCA8PSBpbmRleCAmJiBpbmRleCA8IE1BWF9GUkVFTElTVF9JTkRFWABnZXRBZnRlcihyZWdpb24pIDw9IHNicmsoMCkAZW1tYWxsb2NfbWFsbG9jAHJlZ2lvbi0+Z2V0VXNlZCgpAGdldFBheWxvYWQAKGNoYXIqKWV4dHJhUHRyID09IChjaGFyKilwdHIgKyBzYnJrU2l6ZQBhbGxvY2F0ZVJlZ2lvbgAhbGFzdFJlZ2lvbgAhZmlyc3RSZWdpb24AZmlyc3RSZWdpb24AcHRyID09IGdldEFmdGVyKGxhc3RSZWdpb24pAGV4dGVuZExhc3RSZWdpb24AYWRkVG9GcmVlTGlzdABnZXRCaWdFbm91Z2hGcmVlTGlzdEluZGV4AHBheWxvYWRTaXplID49IHNpemUAcG9zc2libHlTcGxpdFJlbWFpbmRlcgBleHRyYSA+PSBNSU5fUkVHSU9OX1NJWkUAdG90YWxTcGxpdFNpemUgPj0gTUlOX1JFR0lPTl9TSVpFAG1lcmdlSW50b0V4aXN0aW5nRnJlZVJlZ2lvbgByZWdpb24gPT0gbGFzdFJlZ2lvbgBlbW1hbGxvY19yZWFsbG9j';

var Player = /*#__PURE__*/function () {
  /**
   * @param url
   * @param options
   * @param hooks (play: function, pause: function, stop: function) 插入UI回调
   * @constructor
   */
  function Player(url, options, hooks) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    if (hooks === void 0) {
      hooks = {};
    }

    this.options = options;
    this.hooks = hooks;

    this.options.hookOnEstablished = function () {
      if (_this.hooks.load) {
        _this.hooks.load();
      }
    };

    if (options.source) {
      // eslint-disable-next-line new-cap
      this.source = new options.source(url, this.options);
      options.streaming = !!this.source.streaming;
    } else if (url.match(/^wss?:\/\//)) {
      this.source = new WSSource(url, this.options);
      options.streaming = true;
    } else if (options.progressive) {
      this.source = new AjaxProgressiveSource(url, this.options);
      options.streaming = false;
    } else {
      this.source = new AjaxSource(url, this.options);
      options.streaming = false;
    }

    this.maxAudioLag = options.maxAudioLag || 0.25;
    this.loop = options.loop !== false;
    this.autoplay = !!options.autoplay || options.streaming;
    this.demuxer = new TS(options);
    this.source.connect(this.demuxer);

    if (!options.disableWebAssembly && WASM.IsSupported()) {
      this.wasmModule = WASM.GetModule();
      options.wasmModule = this.wasmModule;
    }

    if (options.video !== false) {
      this.video = options.wasmModule ? new MPEG1WASM(options) : new MPEG1(options);
      this.renderer = !options.disableGl && WebGLRenderer.IsSupported() ? new WebGLRenderer(options) : new CanvasRenderer(options);
      this.demuxer.connect(TS.STREAM.VIDEO_1, this.video);
      this.video.connect(this.renderer);
    }

    if (options.audio !== false && WebAudioOut.IsSupported()) {
      this.audio = options.wasmModule ? new MP2WASM(options) : new MP2(options);
      this.audioOut = new WebAudioOut(options);
      this.demuxer.connect(TS.STREAM.AUDIO_1, this.audio);
      this.audio.connect(this.audioOut);
    }

    Object.defineProperty(this, 'currentTime', {
      get: this.getCurrentTime,
      set: this.setCurrentTime
    });
    Object.defineProperty(this, 'volume', {
      get: this.getVolume,
      set: this.setVolume
    });
    this.paused = true;
    this.unpauseOnShow = false;

    if (options.pauseWhenHidden !== false) {
      document.addEventListener('visibilitychange', this.showHide.bind(this));
    } // If we have WebAssembly support, wait until the module is compiled before
    // loading the source. Otherwise the decoders won't know what to do with
    // the source data.


    if (this.wasmModule) {
      if (this.wasmModule.ready) {
        this.startLoading();
      } else {
        var wasm = Base64ToArrayBuffer(WASM_BINARY);
        this.wasmModule.loadFromBuffer(wasm, this.startLoading.bind(this));
      }
    } else {
      this.startLoading();
    }
  }

  var _proto = Player.prototype;

  _proto.startLoading = function startLoading() {
    this.source.start();

    if (this.autoplay) {
      this.play();
    }
  };

  _proto.showHide = function showHide() {
    if (document.visibilityState === 'hidden') {
      this.unpauseOnShow = this.wantsToPlay;
      this.pause();
    } else if (this.unpauseOnShow) {
      this.play();
    }
  };

  _proto.play = function play() {
    if (this.animationId) {
      return;
    }

    this.animationId = requestAnimationFrame(this.update.bind(this));
    this.wantsToPlay = true;
    this.paused = false;
  };

  _proto.pause = function pause() {
    if (this.paused) {
      return;
    }

    cancelAnimationFrame(this.animationId);
    this.animationId = null;
    this.wantsToPlay = false;
    this.isPlaying = false;
    this.paused = true;

    if (this.audio && this.audio.canPlay) {
      // Seek to the currentTime again - audio may already be enqueued a bit
      // further, so we have to rewind it.
      this.audioOut.stop();
      this.seek(this.currentTime);
    }

    if (this.hooks.pause) {
      this.hooks.pause();
    }

    if (this.options.onPause) {
      this.options.onPause(this);
    }
  };

  _proto.getVolume = function getVolume() {
    return this.audioOut ? this.audioOut.volume : 0;
  };

  _proto.setVolume = function setVolume(volume) {
    if (this.audioOut) {
      this.audioOut.volume = volume;
    }
  };

  _proto.stop = function stop() {
    this.pause();
    this.seek(0);

    if (this.video && this.options.decodeFirstFrame !== false) {
      this.video.decode();
    }

    if (this.hooks.stop) {
      this.hooks.stop();
    }
  };

  _proto.destroy = function destroy() {
    this.pause();
    this.source.destroy();
    this.video && this.video.destroy();
    this.renderer && this.renderer.destroy();
    this.audio && this.audio.destroy();
    this.audioOut && this.audioOut.destroy();
  };

  _proto.seek = function seek(time) {
    var startOffset = this.audio && this.audio.canPlay ? this.audio.startTime : this.video.startTime;

    if (this.video) {
      this.video.seek(time + startOffset);
    }

    if (this.audio) {
      this.audio.seek(time + startOffset);
    }

    this.startTime = Now() - time;
  };

  _proto.getCurrentTime = function getCurrentTime() {
    return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video.currentTime - this.video.startTime;
  };

  _proto.setCurrentTime = function setCurrentTime(time) {
    this.seek(time);
  };

  _proto.update = function update() {
    this.animationId = requestAnimationFrame(this.update.bind(this));

    if (!this.source.established) {
      if (this.renderer) {
        this.renderer.renderProgress(this.source.progress);
      }

      return;
    }

    if (!this.isPlaying) {
      this.isPlaying = true;
      this.startTime = Now() - this.currentTime;

      if (this.hooks.play) {
        this.hooks.play();
      }

      if (this.options.onPlay) {
        this.options.onPlay(this);
      }
    }

    if (this.options.streaming) {
      this.updateForStreaming();
    } else {
      this.updateForStaticFile();
    }
  };

  _proto.nextFrame = function nextFrame() {
    if (this.source.established && this.video) {
      return this.video.decode();
    }

    return false;
  };

  _proto.updateForStreaming = function updateForStreaming() {
    // When streaming, immediately decode everything we have buffered up until
    // now to minimize playback latency.
    if (this.video) {
      this.video.decode();
    }

    if (this.audio) {
      var decoded = false;

      do {
        // If there's a lot of audio enqueued already, disable output and
        // catch up with the encoding.
        if (this.audioOut.enqueuedTime > this.maxAudioLag) {
          this.audioOut.resetEnqueuedTime();
          this.audioOut.enabled = false;
        }

        decoded = this.audio.decode();
      } while (decoded);

      this.audioOut.enabled = true;
    }
  };

  _proto.updateForStaticFile = function updateForStaticFile() {
    var notEnoughData = false;
    var headroom = 0; // If we have an audio track, we always try to sync the video to the audio.
    // Gaps and discontinuities are far more percetable in audio than in video.

    if (this.audio && this.audio.canPlay) {
      // Do we have to decode and enqueue some more audio data?
      while (!notEnoughData && this.audio.decodedTime - this.audio.currentTime < 0.25) {
        notEnoughData = !this.audio.decode();
      } // Sync video to audio


      if (this.video && this.video.currentTime < this.audio.currentTime) {
        notEnoughData = !this.video.decode();
      }

      headroom = this.demuxer.currentTime - this.audio.currentTime;
    } else if (this.video) {
      // Video only - sync it to player's wallclock
      var targetTime = Now() - this.startTime + this.video.startTime;
      var lateTime = targetTime - this.video.currentTime;
      var frameTime = 1 / this.video.frameRate;

      if (this.video && lateTime > 0) {
        // If the video is too far behind (>2 frames), simply reset the
        // target time to the next frame instead of trying to catch up.
        if (lateTime > frameTime * 2) {
          this.startTime += lateTime;
        }

        notEnoughData = !this.video.decode();
      }

      headroom = this.demuxer.currentTime - targetTime;
    } // Notify the source of the playhead headroom, so it can decide whether to
    // continue loading further data.


    this.source.resume(headroom); // If we failed to decode and the source is complete, it means we reached
    // the end of our data. We may want to loop.

    if (notEnoughData && this.source.completed) {
      if (this.loop) {
        this.seek(0);
      } else {
        // this.pause();
        this.stop();

        if (this.options.onEnded) {
          this.options.onEnded(this);
        }
      }
    } // If there's not enough data and the source is not completed, we have
    // just stalled.
    else if (notEnoughData && this.options.onStalled) {
        this.options.onStalled(this);
      }
  };

  return Player;
}();

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["resume"] }] */
var FetchSource = /*#__PURE__*/function () {
  function FetchSource(url, options) {
    this.url = url;
    this.destination = null;
    this.request = null;
    this.streaming = true;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.aborted = false;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted;

    if (options.hookOnEstablished) {
      this.hookOnEstablished = options.hookOnEstablished;
    }
  }

  var _proto = FetchSource.prototype;

  _proto.connect = function connect(destination) {
    this.destination = destination;
  };

  _proto.start = function start() {
    var _this = this;

    var params = {
      method: 'GET',
      headers: new Headers(),
      cache: 'default'
    };
    self.fetch(this.url, params) // eslint-disable-next-line consistent-return
    .then(function (res) {
      if (res.ok && res.status >= 200 && res.status <= 299) {
        _this.progress = 1;
        _this.established = true;
        return _this.pump(res.body.getReader());
      } // error

    }).catch(function (err) {
      throw err;
    });
  };

  _proto.pump = function pump(reader) {
    var _this2 = this;

    return reader.read() // eslint-disable-next-line consistent-return
    .then(function (result) {
      if (result.done) {
        _this2.completed = true;
      } else {
        if (_this2.aborted) {
          return reader.cancel();
        }

        if (_this2.destination) {
          _this2.destination.write(result.value.buffer);
        }

        return _this2.pump(reader);
      }
    }).catch(function (err) {
      throw err;
    });
  };

  _proto.resume = function resume() {// Nothing to do here
  };

  _proto.abort = function abort() {
    this.aborted = true;
  };

  return FetchSource;
}();

/**
 * According to jsmpeg project(https://github.com/phoboslab/jsmpeg)
 */
// utility function and the automatic CreateVideoElements() after DOMReady.

var JSMpeg = {
  // The Player sets up the connections between source, demuxer, decoders,
  // renderer and audio output. It ties everything together, is responsible
  // of scheduling decoding and provides some convenience methods for
  // external users.
  Player: Player,
  // A Video Element wraps the Player, shows HTML controls to start/pause
  // the video and handles Audio unlocking on iOS. VideoElements can be
  // created directly in HTML using the <div class="jsmpeg"/> tag.
  VideoElement: VideoElement,
  // The BitBuffer wraps a Uint8Array and allows reading an arbitrary number
  // of bits at a time. On writing, the BitBuffer either expands its
  // internal buffer (for static files) or deletes old data (for streaming).
  BitBuffer: BitBuffer,
  // A Source provides raw data from HTTP, a WebSocket connection or any
  // other mean. Sources must support the following API:
  //   .connect(destinationNode)
  //   .write(buffer)
  //   .start() - start reading
  //   .resume(headroom) - continue reading; headroom to play pos in seconds
  //   .established - boolean, true after connection is established
  //   .completed - boolean, true if the source is completely loaded
  //   .progress - float 0-1
  Source: {
    Ajax: AjaxSource,
    AjaxProgressive: AjaxProgressiveSource,
    WebSocket: WSSource,
    Fetch: FetchSource
  },
  // A Demuxer may sit between a Source and a Decoder. It separates the
  // incoming raw data into Video, Audio and other Streams. API:
  //   .connect(streamId, destinationNode)
  //   .write(buffer)
  //   .currentTime – float, in seconds
  //   .startTime - float, in seconds
  Demuxer: {
    TS: TS
  },
  // A Decoder accepts an incoming Stream of raw Audio or Video data, buffers
  // it and upon `.decode()` decodes a single frame of data. Video decoders
  // call `destinationNode.render(Y, Cr, CB)` with the decoded pixel data;
  // Audio decoders call `destinationNode.play(left, right)` with the decoded
  // PCM data. API:
  //   .connect(destinationNode)
  //   .write(pts, buffer)
  //   .decode()
  //   .seek(time)
  //   .currentTime - float, in seconds
  //   .startTime - float, in seconds
  Decoder: {
    Base: BaseDecoder,
    MPEG1Video: MPEG1,
    MPEG1VideoWASM: MPEG1WASM,
    MP2Audio: MP2,
    MP2AudioWASM: MP2WASM
  },
  // A Renderer accepts raw YCrCb data in 3 separate buffers via the render()
  // method. Renderers typically convert the data into the RGBA color space
  // and draw it on a Canvas, but other output - such as writing PNGs - would
  // be conceivable. API:
  //   .render(y, cr, cb) - pixel data as Uint8Arrays
  //   .enabled - wether the renderer does anything upon receiving data
  Renderer: {
    WebGL: WebGLRenderer,
    Canvas2D: CanvasRenderer
  },
  // Audio Outputs accept raw Stero PCM data in 2 separate buffers via the
  // play() method. Outputs typically play the audio on the user's device.
  // API:
  //   .play(sampleRate, left, right) - rate in herz; PCM data as Uint8Arrays
  //   .stop()
  //   .enqueuedTime - float, in seconds
  //   .enabled - wether the output does anything upon receiving data
  AudioOutput: {
    WebAudio: WebAudioOut
  },
  WASMModule: WASM,
  // functions
  Now: Now,
  CreateVideoElements: CreateVideoElements,
  Fill: Fill,
  Base64ToArrayBuffer: Base64ToArrayBuffer,
  // The build process may append `JSMpeg.WASM_BINARY_INLINED = base64data;`
  // to the minified source.
  // If this property is present, jsmpeg will use the inlined binary data
  // instead of trying to load a jsmpeg.wasm file via Ajax.
  WASM_BINARY_INLINED: WASM_BINARY
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new o;class o{}const h$1=new WeakMap,n=e$2(class extends d{render(i){return w}update(i,[s]){var e;const o=s!==this.U;return o&&void 0!==this.U&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.U=s,this.ht=null===(e=i.options)||void 0===e?void 0:e.host,this.ot(this.lt=i.element)),w}ot(t){"function"==typeof this.U?(void 0!==h$1.get(this.U)&&this.U.call(this.ht,void 0),h$1.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)):this.U.value=t;}get rt(){var t;return "function"==typeof this.U?h$1.get(this.U):null===(t=this.U)||void 0===t?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=Symbol();class h{constructor(t,i,s){this.t=0,this.status=0,this.autoRun=!0,this.i=t,this.i.addController(this);const h="object"==typeof i?i:{task:i,args:s};this.h=h.task,this.o=h.args,void 0!==h.autoRun&&(this.autoRun=h.autoRun),this.taskComplete=new Promise(((t,i)=>{this.l=t,this.u=i;}));}hostUpdated(){this.performTask();}async performTask(){var t;const i=null===(t=this.o)||void 0===t?void 0:t.call(this);this.shouldRun(i)&&this.run(i);}shouldRun(t){return this.autoRun&&this.v(t)}async run(t){var i;let h,r;null!=t||(t=null===(i=this.o)||void 0===i?void 0:i.call(this)),2!==this.status&&3!==this.status||(this.taskComplete=new Promise(((t,i)=>{this.l=t,this.u=i;}))),this.status=1,this.m=void 0,this.p=void 0,this.i.requestUpdate();const o=++this.t;try{h=await this.h(t);}catch(t){r=t;}this.t===o&&(h===s?this.status=0:(void 0===r?(this.status=2,this.l(h)):(this.status=3,this.u(r)),this.p=h,this.m=r),this.i.requestUpdate());}get value(){return this.p}get error(){return this.m}render(t){var i,s,h,r;switch(this.status){case 0:return null===(i=t.initial)||void 0===i?void 0:i.call(t);case 1:return null===(s=t.pending)||void 0===s?void 0:s.call(t);case 2:return null===(h=t.complete)||void 0===h?void 0:h.call(t,this.value);case 3:return null===(r=t.error)||void 0===r?void 0:r.call(t,this.error);default:this.status;}}v(i){const s=this.g;return this.g=i,Array.isArray(i)&&Array.isArray(s)?i.length===s.length&&i.some(((i,h)=>n$7(i,s[h]))):i!==s}}

const defaultOptions$2 = {
    autoPlayWhenVisible: true,
    autoUnmuteWhenVisible: true,
};
/**
 * An Embla plugin to take automated actions on media (e.g. pause, unmute, etc).
 * @param userOptions
 * @returns
 */
function AutoMediaPlugin(userOptions) {
    const options = Object.assign({}, defaultOptions$2, userOptions);
    let carousel;
    let slides;
    /**
     * Initialize the plugin.
     */
    function init(embla) {
        carousel = embla;
        slides = carousel.slideNodes();
        // Frigate card media autoplays when the media loads not necessarily when the
        // slide is selected, so only pause (and not play/unmute) based on carousel
        // events.
        carousel.on('destroy', pause);
        carousel.on('select', pausePrevious);
        carousel.on('destroy', mute);
        carousel.on('select', mutePrevious);
        document.addEventListener('visibilitychange', visibilityHandler);
    }
    /**
     * Destroy the plugin.
     */
    function destroy() {
        carousel.off('destroy', pause);
        carousel.off('select', pausePrevious);
        carousel.off('destroy', mute);
        carousel.off('select', mutePrevious);
        document.removeEventListener('visibilitychange', visibilityHandler);
    }
    /**
     * Handle document visibility changes.
     */
    function visibilityHandler() {
        if (document.visibilityState == 'hidden') {
            pause();
            mute();
        }
        else if (document.visibilityState == 'visible') {
            if (options.autoPlayWhenVisible) {
                play();
            }
            if (options.autoUnmuteWhenVisible) {
                unmute();
            }
        }
    }
    /**
     * Get the media player from a slide.
     * @param slide
     * @returns A FrigateCardMediaPlayer object or `null`.
     */
    function getPlayer(slide) {
        return slide === null || slide === void 0 ? void 0 : slide.querySelector(options.playerSelector);
    }
    /**
     * Play the current slide.
     */
    function play() {
        var _a;
        (_a = getPlayer(slides[carousel.selectedScrollSnap()])) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * Pause the current slide.
     */
    function pause() {
        var _a;
        (_a = getPlayer(slides[carousel.selectedScrollSnap()])) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * Pause the previous slide.
     */
    function pausePrevious() {
        var _a;
        (_a = getPlayer(slides[carousel.previousScrollSnap()])) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * Unmute the current slide.
     */
    function unmute() {
        var _a;
        (_a = getPlayer(slides[carousel.selectedScrollSnap()])) === null || _a === void 0 ? void 0 : _a.unmute();
    }
    /**
     * Mute the current slide.
     */
    function mute() {
        var _a;
        (_a = getPlayer(slides[carousel.selectedScrollSnap()])) === null || _a === void 0 ? void 0 : _a.mute();
    }
    /**
     * Mute the previous slide.
     */
    function mutePrevious() {
        var _a;
        (_a = getPlayer(slides[carousel.previousScrollSnap()])) === null || _a === void 0 ? void 0 : _a.mute();
    }
    const self = {
        name: 'AutoMediaPlugin',
        options,
        init,
        destroy,
        play,
        pause,
        mute,
        unmute,
    };
    return self;
}

function Alignment(align, viewSize) {
  var predefined = {
    start: start,
    center: center,
    end: end
  };

  function start() {
    return 0;
  }

  function center(n) {
    return end(n) / 2;
  }

  function end(n) {
    return viewSize - n;
  }

  function percent() {
    return viewSize * Number(align);
  }

  function measure(n) {
    if (typeof align === 'number') return percent();
    return predefined[align](n);
  }

  var self = {
    measure: measure
  };
  return self;
}

function Animation(callback) {
  var animationFrame = 0;

  function ifAnimating(active, cb) {
    return function () {
      if (active === !!animationFrame) cb();
    };
  }

  function start() {
    animationFrame = window.requestAnimationFrame(callback);
  }

  function stop() {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  var self = {
    proceed: ifAnimating(true, start),
    start: ifAnimating(false, start),
    stop: ifAnimating(true, stop)
  };
  return self;
}

function Axis(axis, direction) {
  var scroll = axis === 'y' ? 'y' : 'x';
  var cross = axis === 'y' ? 'x' : 'y';
  var startEdge = getStartEdge();
  var endEdge = getEndEdge();

  function measureSize(rect) {
    var width = rect.width,
        height = rect.height;
    return scroll === 'x' ? width : height;
  }

  function getStartEdge() {
    if (scroll === 'y') return 'top';
    return direction === 'rtl' ? 'right' : 'left';
  }

  function getEndEdge() {
    if (scroll === 'y') return 'bottom';
    return direction === 'rtl' ? 'left' : 'right';
  }

  var self = {
    scroll: scroll,
    cross: cross,
    startEdge: startEdge,
    endEdge: endEdge,
    measureSize: measureSize
  };
  return self;
}

function map(value, iStart, iStop, oStart, oStop) {
  return oStart + (oStop - oStart) * ((value - iStart) / (iStop - iStart));
}
function mathAbs(n) {
  return Math.abs(n);
}
function mathSign(n) {
  return !n ? 0 : n / mathAbs(n);
}
function deltaAbs(valueB, valueA) {
  return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
  var diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
  return mathAbs(diff / valueB);
}
function roundToDecimals(decimalPoints) {
  var pow = Math.pow(10, decimalPoints);
  return function (n) {
    return Math.round(n * pow) / pow;
  };
}
function debounce(callback, time) {
  var timeout = 0;
  return function () {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(callback, time) || 0;
  };
}
function arrayGroup(array, size) {
  var groups = [];

  for (var i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
}
function arrayKeys(array) {
  return Object.keys(array).map(Number);
}
function arrayLast(array) {
  return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
  return Math.max(0, array.length - 1);
}

function Limit(min, max) {
  var length = mathAbs(min - max);

  function reachedMin(n) {
    return n < min;
  }

  function reachedMax(n) {
    return n > max;
  }

  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }

  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }

  function removeOffset(n) {
    if (!length) return n;
    return n - length * Math.ceil((n - max) / length);
  }

  var self = {
    length: length,
    max: max,
    min: min,
    constrain: constrain,
    reachedAny: reachedAny,
    reachedMax: reachedMax,
    reachedMin: reachedMin,
    removeOffset: removeOffset
  };
  return self;
}

function Counter(max, start, loop) {
  var _a = Limit(0, max),
      min = _a.min,
      constrain = _a.constrain;

  var loopEnd = max + 1;
  var counter = withinLimit(start);

  function withinLimit(n) {
    return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
  }

  function get() {
    return counter;
  }

  function set(n) {
    counter = withinLimit(n);
    return self;
  }

  function add(n) {
    return set(get() + n);
  }

  function clone() {
    return Counter(max, get(), loop);
  }

  var self = {
    add: add,
    clone: clone,
    get: get,
    set: set,
    min: min,
    max: max
  };
  return self;
}

function Direction(direction) {
  var sign = direction === 'rtl' ? -1 : 1;

  function apply(n) {
    return n * sign;
  }

  var self = {
    apply: apply
  };
  return self;
}

function EventStore() {
  var listeners = [];

  function add(node, type, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(type, handler, options);
    listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    listeners = listeners.filter(function (remove) {
      return remove();
    });
    return self;
  }

  var self = {
    add: add,
    removeAll: removeAll
  };
  return self;
}

function Vector1D(value) {
  var vector = value;

  function get() {
    return vector;
  }

  function set(n) {
    vector = readNumber(n);
    return self;
  }

  function add(n) {
    vector += readNumber(n);
    return self;
  }

  function subtract(n) {
    vector -= readNumber(n);
    return self;
  }

  function multiply(n) {
    vector *= n;
    return self;
  }

  function divide(n) {
    vector /= n;
    return self;
  }

  function normalize() {
    if (vector !== 0) divide(vector);
    return self;
  }

  function readNumber(n) {
    return typeof n === 'number' ? n : n.get();
  }

  var self = {
    add: add,
    divide: divide,
    get: get,
    multiply: multiply,
    normalize: normalize,
    set: set,
    subtract: subtract
  };
  return self;
}

function DragHandler(axis, direction, rootNode, target, dragFree, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, events, loop, skipSnaps) {
  var crossAxis = axis.cross;
  var focusNodes = ['INPUT', 'SELECT', 'TEXTAREA'];
  var dragStartPoint = Vector1D(0);
  var activationEvents = EventStore();
  var interactionEvents = EventStore();
  var snapForceBoost = {
    mouse: 300,
    touch: 400
  };
  var freeForceBoost = {
    mouse: 500,
    touch: 600
  };
  var baseSpeed = dragFree ? 5 : 16;
  var baseMass = 1;
  var dragThreshold = 20;
  var startScroll = 0;
  var startCross = 0;
  var pointerIsDown = false;
  var preventScroll = false;
  var preventClick = false;
  var isMouse = false;

  function addActivationEvents() {
    var node = rootNode;
    activationEvents.add(node, 'touchmove', function () {
      return undefined;
    }).add(node, 'touchend', function () {
      return undefined;
    }).add(node, 'touchstart', down).add(node, 'mousedown', down).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click);
  }

  function addInteractionEvents() {
    var node = !isMouse ? rootNode : document;
    interactionEvents.add(node, 'touchmove', move).add(node, 'touchend', up).add(node, 'mousemove', move).add(node, 'mouseup', up);
  }

  function removeAllEvents() {
    activationEvents.removeAll();
    interactionEvents.removeAll();
  }

  function isFocusNode(node) {
    var name = node.nodeName || '';
    return focusNodes.indexOf(name) > -1;
  }

  function forceBoost() {
    var boost = dragFree ? freeForceBoost : snapForceBoost;
    var type = isMouse ? 'mouse' : 'touch';
    return boost[type];
  }

  function allowedForce(force, targetChanged) {
    var next = index.clone().add(mathSign(force) * -1);
    var isEdge = next.get() === index.min || next.get() === index.max;
    var baseForce = scrollTarget.byDistance(force, !dragFree).distance;
    if (dragFree || mathAbs(force) < dragThreshold) return baseForce;
    if (!loop && isEdge) return baseForce * 0.4;
    if (skipSnaps && targetChanged) return baseForce * 0.5;
    return scrollTarget.byIndex(next.get(), 0).distance;
  }

  function down(evt) {
    isMouse = evt.type === 'mousedown';
    if (isMouse && evt.button !== 0) return;
    var isMoving = deltaAbs(target.get(), location.get()) >= 2;
    var clearPreventClick = isMouse || !isMoving;
    var isNotFocusNode = !isFocusNode(evt.target);
    var preventDefault = isMoving || isMouse && isNotFocusNode;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    dragStartPoint.set(target);
    target.set(location);
    scrollBody.useBaseMass().useSpeed(80);
    addInteractionEvents();
    startScroll = dragTracker.readPoint(evt);
    startCross = dragTracker.readPoint(evt, crossAxis);
    events.emit('pointerDown');
    if (clearPreventClick) preventClick = false;
    if (preventDefault) evt.preventDefault();
  }

  function move(evt) {
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt);
      var lastScroll = dragTracker.readPoint(evt);
      var lastCross = dragTracker.readPoint(evt, crossAxis);
      var diffScroll = deltaAbs(lastScroll, startScroll);
      var diffCross = deltaAbs(lastCross, startCross);
      preventScroll = diffScroll > diffCross;
      if (!preventScroll && !preventClick) return up(evt);
    }

    var diff = dragTracker.pointerMove(evt);
    if (!preventClick && diff) preventClick = true;
    animation.start();
    target.add(direction.apply(diff));
    evt.preventDefault();
  }

  function up(evt) {
    var currentLocation = scrollTarget.byDistance(0, false);
    var targetChanged = currentLocation.index !== index.get();
    var rawForce = dragTracker.pointerUp(evt) * forceBoost();
    var force = allowedForce(direction.apply(rawForce), targetChanged);
    var forceFactor = factorAbs(rawForce, force);
    var isMoving = deltaAbs(target.get(), dragStartPoint.get()) >= 0.5;
    var isVigorous = targetChanged && forceFactor > 0.75;
    var isBelowThreshold = mathAbs(rawForce) < dragThreshold;
    var speed = isVigorous ? 10 : baseSpeed;
    var mass = isVigorous ? baseMass + 2.5 * forceFactor : baseMass;
    if (isMoving && !isMouse) preventClick = true;
    preventScroll = false;
    pointerIsDown = false;
    interactionEvents.removeAll();
    scrollBody.useSpeed(isBelowThreshold ? 9 : speed).useMass(mass);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    events.emit('pointerUp');
  }

  function click(evt) {
    if (preventClick) evt.preventDefault();
  }

  function clickAllowed() {
    return !preventClick;
  }

  function pointerDown() {
    return pointerIsDown;
  }

  var self = {
    addActivationEvents: addActivationEvents,
    clickAllowed: clickAllowed,
    pointerDown: pointerDown,
    removeAllEvents: removeAllEvents
  };
  return self;
}

function DragTracker(axis, pxToPercent) {
  var logInterval = 170;
  var startEvent;
  var lastEvent;

  function isTouchEvent(evt) {
    return typeof TouchEvent !== 'undefined' && evt instanceof TouchEvent;
  }

  function readTime(evt) {
    return evt.timeStamp;
  }

  function readPoint(evt, evtAxis) {
    var property = evtAxis || axis.scroll;
    var coord = "client" + (property === 'x' ? 'X' : 'Y');
    return (isTouchEvent(evt) ? evt.touches[0] : evt)[coord];
  }

  function pointerDown(evt) {
    startEvent = evt;
    lastEvent = evt;
    return pxToPercent.measure(readPoint(evt));
  }

  function pointerMove(evt) {
    var diff = readPoint(evt) - readPoint(lastEvent);
    var expired = readTime(evt) - readTime(startEvent) > logInterval;
    lastEvent = evt;
    if (expired) startEvent = evt;
    return pxToPercent.measure(diff);
  }

  function pointerUp(evt) {
    if (!startEvent || !lastEvent) return 0;
    var diffDrag = readPoint(lastEvent) - readPoint(startEvent);
    var diffTime = readTime(evt) - readTime(startEvent);
    var expired = readTime(evt) - readTime(lastEvent) > logInterval;
    var force = diffDrag / diffTime;
    var isFlick = diffTime && !expired && mathAbs(force) > 0.1;
    return isFlick ? pxToPercent.measure(force) : 0;
  }

  var self = {
    isTouchEvent: isTouchEvent,
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    readPoint: readPoint
  };
  return self;
}

function PxToPercent(viewInPx) {
  var totalPercent = 100;

  function measure(n) {
    if (viewInPx === 0) return 0;
    return n / viewInPx * totalPercent;
  }

  var self = {
    measure: measure,
    totalPercent: totalPercent
  };
  return self;
}

function ScrollBody(location, baseSpeed, baseMass) {
  var roundToTwoDecimals = roundToDecimals(2);
  var velocity = Vector1D(0);
  var acceleration = Vector1D(0);
  var attraction = Vector1D(0);
  var attractionDirection = 0;
  var speed = baseSpeed;
  var mass = baseMass;

  function update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.multiply(0);
  }

  function applyForce(force) {
    force.divide(mass);
    acceleration.add(force);
  }

  function seek(target) {
    attraction.set(target).subtract(location);
    var magnitude = map(attraction.get(), 0, 100, 0, speed);
    attractionDirection = mathSign(attraction.get());
    attraction.normalize().multiply(magnitude).subtract(velocity);
    applyForce(attraction);
    return self;
  }

  function settle(target) {
    var diff = target.get() - location.get();
    var hasSettled = !roundToTwoDecimals(diff);
    if (hasSettled) location.set(target);
    return hasSettled;
  }

  function direction() {
    return attractionDirection;
  }

  function useBaseSpeed() {
    return useSpeed(baseSpeed);
  }

  function useBaseMass() {
    return useMass(baseMass);
  }

  function useSpeed(n) {
    speed = n;
    return self;
  }

  function useMass(n) {
    mass = n;
    return self;
  }

  var self = {
    direction: direction,
    seek: seek,
    settle: settle,
    update: update,
    useBaseMass: useBaseMass,
    useBaseSpeed: useBaseSpeed,
    useMass: useMass,
    useSpeed: useSpeed
  };
  return self;
}

function ScrollBounds(limit, location, target, scrollBody) {
  var pullBackThreshold = 10;
  var edgeOffsetTolerance = 50;
  var maxFriction = 0.85;
  var disabled = false;

  function shouldConstrain() {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location.get())) return false;
    return true;
  }

  function constrain(pointerDown) {
    if (!shouldConstrain()) return;
    var edge = limit.reachedMin(location.get()) ? 'min' : 'max';
    var diffToEdge = mathAbs(limit[edge] - location.get());
    var diffToTarget = target.get() - location.get();
    var friction = Math.min(diffToEdge / edgeOffsetTolerance, maxFriction);
    target.subtract(diffToTarget * friction);

    if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useSpeed(10).useMass(3);
    }
  }

  function toggleActive(active) {
    disabled = !active;
  }

  var self = {
    constrain: constrain,
    toggleActive: toggleActive
  };
  return self;
}

function ScrollContain(viewSize, contentSize, snaps, snapsAligned, containScroll) {
  var scrollBounds = Limit(-contentSize + viewSize, snaps[0]);
  var snapsBounded = snapsAligned.map(scrollBounds.constrain);
  var snapsContained = measureContained();

  function findDuplicates() {
    var startSnap = snapsBounded[0];
    var endSnap = arrayLast(snapsBounded);
    var min = snapsBounded.lastIndexOf(startSnap);
    var max = snapsBounded.indexOf(endSnap) + 1;
    return Limit(min, max);
  }

  function measureContained() {
    if (contentSize <= viewSize) return [scrollBounds.max];
    if (containScroll === 'keepSnaps') return snapsBounded;

    var _a = findDuplicates(),
        min = _a.min,
        max = _a.max;

    return snapsBounded.slice(min, max);
  }

  var self = {
    snapsContained: snapsContained
  };
  return self;
}

function ScrollLimit(contentSize, scrollSnaps, loop) {
  var limit = measureLimit();

  function measureLimit() {
    var startSnap = scrollSnaps[0];
    var endSnap = arrayLast(scrollSnaps);
    var min = loop ? startSnap - contentSize : endSnap;
    var max = startSnap;
    return Limit(min, max);
  }

  var self = {
    limit: limit
  };
  return self;
}

function ScrollLooper(contentSize, pxToPercent, limit, location, vectors) {
  var min = limit.min + pxToPercent.measure(0.1);
  var max = limit.max + pxToPercent.measure(0.1);

  var _a = Limit(min, max),
      reachedMin = _a.reachedMin,
      reachedMax = _a.reachedMax;

  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location.get());
    if (direction === -1) return reachedMin(location.get());
    return false;
  }

  function loop(direction) {
    if (!shouldLoop(direction)) return;
    var loopDistance = contentSize * (direction * -1);
    vectors.forEach(function (v) {
      return v.add(loopDistance);
    });
  }

  var self = {
    loop: loop
  };
  return self;
}

function ScrollProgress(limit) {
  var max = limit.max,
      scrollLength = limit.length;

  function get(n) {
    var currentLocation = n - max;
    return currentLocation / -scrollLength;
  }

  var self = {
    get: get
  };
  return self;
}

function ScrollSnap(axis, alignment, pxToPercent, containerRect, slideRects, slidesToScroll) {
  var startEdge = axis.startEdge,
      endEdge = axis.endEdge;
  var snaps = measureUnaligned();
  var snapsAligned = measureAligned();

  function measureSizes() {
    return arrayGroup(slideRects, slidesToScroll).map(function (rects) {
      return arrayLast(rects)[endEdge] - rects[0][startEdge];
    }).map(pxToPercent.measure).map(mathAbs);
  }

  function measureUnaligned() {
    return slideRects.map(function (rect) {
      return containerRect[startEdge] - rect[startEdge];
    }).map(pxToPercent.measure).map(function (snap) {
      return -mathAbs(snap);
    });
  }

  function measureAligned() {
    var groupedSnaps = arrayGroup(snaps, slidesToScroll).map(function (g) {
      return g[0];
    });
    var alignments = measureSizes().map(alignment.measure);
    return groupedSnaps.map(function (snap, index) {
      return snap + alignments[index];
    });
  }

  var self = {
    snaps: snaps,
    snapsAligned: snapsAligned
  };
  return self;
}

function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
  var reachedAny = limit.reachedAny,
      removeOffset = limit.removeOffset,
      constrain = limit.constrain;

  function minDistance(d1, d2) {
    return mathAbs(d1) < mathAbs(d2) ? d1 : d2;
  }

  function findTargetSnap(target) {
    var distance = loop ? removeOffset(target) : constrain(target);
    var ascDiffsToSnaps = scrollSnaps.map(function (scrollSnap) {
      return scrollSnap - distance;
    }).map(function (diffToSnap) {
      return shortcut(diffToSnap, 0);
    }).map(function (diff, i) {
      return {
        diff: diff,
        index: i
      };
    }).sort(function (d1, d2) {
      return mathAbs(d1.diff) - mathAbs(d2.diff);
    });
    var index = ascDiffsToSnaps[0].index;
    return {
      index: index,
      distance: distance
    };
  }

  function shortcut(target, direction) {
    var t1 = target;
    var t2 = target + contentSize;
    var t3 = target - contentSize;
    if (!loop) return t1;
    if (!direction) return minDistance(minDistance(t1, t2), t3);
    var shortest = minDistance(t1, direction === 1 ? t2 : t3);
    return mathAbs(shortest) * direction;
  }

  function byIndex(index, direction) {
    var diffToSnap = scrollSnaps[index] - targetVector.get();
    var distance = shortcut(diffToSnap, direction);
    return {
      index: index,
      distance: distance
    };
  }

  function byDistance(distance, snap) {
    var target = targetVector.get() + distance;

    var _a = findTargetSnap(target),
        index = _a.index,
        targetSnapDistance = _a.distance;

    var reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index: index,
      distance: distance
    };
    var diffToSnap = scrollSnaps[index] - targetSnapDistance;
    var snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index: index,
      distance: snapDistance
    };
  }

  var self = {
    byDistance: byDistance,
    byIndex: byIndex,
    shortcut: shortcut
  };
  return self;
}

function ScrollTo(animation, indexCurrent, indexPrevious, scrollTarget, targetVector, events) {
  function scrollTo(target) {
    var distanceDiff = target.distance;
    var indexDiff = target.index !== indexCurrent.get();

    if (distanceDiff) {
      animation.start();
      targetVector.add(distanceDiff);
    }

    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      events.emit('select');
    }
  }

  function distance(n, snap) {
    var target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }

  function index(n, direction) {
    var targetIndex = indexCurrent.clone().set(n);
    var target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }

  var self = {
    distance: distance,
    index: index
  };
  return self;
}

function SlideLooper(axis, viewSize, contentSize, slideSizesWithGaps, scrollSnaps, slidesInView, scrollLocation, slides) {
  var ascItems = arrayKeys(slideSizesWithGaps);
  var descItems = arrayKeys(slideSizesWithGaps).reverse();
  var loopPoints = startPoints().concat(endPoints());

  function removeSlideSizes(indexes, from) {
    return indexes.reduce(function (a, i) {
      return a - slideSizesWithGaps[i];
    }, from);
  }

  function slidesInGap(indexes, gap) {
    return indexes.reduce(function (a, i) {
      var remainingGap = removeSlideSizes(a, gap);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }

  function findLoopPoints(indexes, edge) {
    var isStartEdge = edge === 'start';
    var offset = isStartEdge ? -contentSize : contentSize;
    var slideBounds = slidesInView.findSlideBounds([offset]);
    return indexes.map(function (index) {
      var initial = isStartEdge ? 0 : -contentSize;
      var altered = isStartEdge ? contentSize : 0;
      var bounds = slideBounds.filter(function (b) {
        return b.index === index;
      })[0];
      var point = bounds[isStartEdge ? 'end' : 'start'];

      var getTarget = function () {
        return scrollLocation.get() > point ? initial : altered;
      };

      return {
        point: point,
        getTarget: getTarget,
        index: index,
        location: -1
      };
    });
  }

  function startPoints() {
    var gap = scrollSnaps[0] - 1;
    var indexes = slidesInGap(descItems, gap);
    return findLoopPoints(indexes, 'end');
  }

  function endPoints() {
    var gap = viewSize - scrollSnaps[0] - 1;
    var indexes = slidesInGap(ascItems, gap);
    return findLoopPoints(indexes, 'start');
  }

  function canLoop() {
    return loopPoints.every(function (_a) {
      var index = _a.index;
      var otherIndexes = ascItems.filter(function (i) {
        return i !== index;
      });
      return removeSlideSizes(otherIndexes, viewSize) <= 0;
    });
  }

  function loop() {
    loopPoints.forEach(function (loopPoint) {
      var getTarget = loopPoint.getTarget,
          location = loopPoint.location,
          index = loopPoint.index;
      var target = getTarget();

      if (target !== location) {
        slides[index].style[axis.startEdge] = target + "%";
        loopPoint.location = target;
      }
    });
  }

  function clear() {
    loopPoints.forEach(function (_a) {
      var index = _a.index;
      slides[index].style[axis.startEdge] = '';
    });
  }

  var self = {
    canLoop: canLoop,
    clear: clear,
    loop: loop,
    loopPoints: loopPoints
  };
  return self;
}

function SlidesInView(viewSize, contentSize, slideSizes, snaps, limit, loop, inViewThreshold) {
  var removeOffset = limit.removeOffset,
      constrain = limit.constrain;
  var cachedThreshold = Math.min(Math.max(inViewThreshold, 0.01), 0.99);
  var cachedOffsets = loop ? [0, contentSize, -contentSize] : [0];
  var cachedBounds = findSlideBounds(cachedOffsets, cachedThreshold);

  function findSlideBounds(offsets, threshold) {
    var slideOffsets = offsets || cachedOffsets;
    var slideThreshold = threshold || 0;
    var thresholds = slideSizes.map(function (s) {
      return s * slideThreshold;
    });
    return slideOffsets.reduce(function (list, offset) {
      var bounds = snaps.map(function (snap, index) {
        return {
          start: snap - slideSizes[index] + thresholds[index] + offset,
          end: snap + viewSize - thresholds[index] + offset,
          index: index
        };
      });
      return list.concat(bounds);
    }, []);
  }

  function check(location, bounds) {
    var limitedLocation = loop ? removeOffset(location) : constrain(location);
    var slideBounds = bounds || cachedBounds;
    return slideBounds.reduce(function (list, slideBound) {
      var index = slideBound.index,
          start = slideBound.start,
          end = slideBound.end;
      var inList = list.indexOf(index) !== -1;
      var inView = start < limitedLocation && end > limitedLocation;
      return !inList && inView ? list.concat([index]) : list;
    }, []);
  }

  var self = {
    check: check,
    findSlideBounds: findSlideBounds
  };
  return self;
}

function SlideSizes(axis, pxToPercent, slides, slideRects, loop) {
  var measureSize = axis.measureSize,
      startEdge = axis.startEdge,
      endEdge = axis.endEdge;
  var sizesInPx = slideRects.map(measureSize);
  var slideSizes = sizesInPx.map(pxToPercent.measure);
  var slideSizesWithGaps = measureWithGaps();

  function measureWithGaps() {
    return slideRects.map(function (rect, index, rects) {
      var isLast = index === arrayLastIndex(rects);
      var style = window.getComputedStyle(arrayLast(slides));
      var endGap = parseFloat(style.getPropertyValue("margin-" + endEdge));
      if (isLast) return sizesInPx[index] + (loop ? endGap : 0);
      return rects[index + 1][startEdge] - rect[startEdge];
    }).map(pxToPercent.measure).map(mathAbs);
  }

  var self = {
    slideSizes: slideSizes,
    slideSizesWithGaps: slideSizesWithGaps
  };
  return self;
}

function Translate(axis, direction, container) {
  var translate = axis.scroll === 'x' ? x : y;
  var containerStyle = container.style;
  var disabled = false;

  function x(n) {
    return "translate3d(" + n + "%,0px,0px)";
  }

  function y(n) {
    return "translate3d(0px," + n + "%,0px)";
  }

  function to(target) {
    if (disabled) return;
    containerStyle.transform = translate(direction.apply(target.get()));
  }

  function toggleActive(active) {
    disabled = !active;
  }

  function clear() {
    containerStyle.transform = '';
  }

  var self = {
    clear: clear,
    to: to,
    toggleActive: toggleActive
  };
  return self;
}

function Engine(root, container, slides, options, events) {
  // Options
  var align = options.align,
      scrollAxis = options.axis,
      contentDirection = options.direction,
      startIndex = options.startIndex,
      inViewThreshold = options.inViewThreshold,
      loop = options.loop,
      speed = options.speed,
      dragFree = options.dragFree,
      slidesToScroll = options.slidesToScroll,
      skipSnaps = options.skipSnaps,
      containScroll = options.containScroll; // Measurements

  var containerRect = container.getBoundingClientRect();
  var slideRects = slides.map(function (slide) {
    return slide.getBoundingClientRect();
  });
  var direction = Direction(contentDirection);
  var axis = Axis(scrollAxis, contentDirection);
  var pxToPercent = PxToPercent(axis.measureSize(containerRect));
  var viewSize = pxToPercent.totalPercent;
  var alignment = Alignment(align, viewSize);

  var _a = SlideSizes(axis, pxToPercent, slides, slideRects, loop),
      slideSizes = _a.slideSizes,
      slideSizesWithGaps = _a.slideSizesWithGaps;

  var _b = ScrollSnap(axis, alignment, pxToPercent, containerRect, slideRects, slidesToScroll),
      snaps = _b.snaps,
      snapsAligned = _b.snapsAligned;

  var contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
  var snapsContained = ScrollContain(viewSize, contentSize, snaps, snapsAligned, containScroll).snapsContained;
  var contain = !loop && containScroll !== '';
  var scrollSnaps = contain ? snapsContained : snapsAligned;
  var limit = ScrollLimit(contentSize, scrollSnaps, loop).limit; // Indexes

  var index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
  var indexPrevious = index.clone();
  var slideIndexes = arrayKeys(slides); // Draw

  var update = function () {
    if (!loop) engine.scrollBounds.constrain(engine.dragHandler.pointerDown());
    engine.scrollBody.seek(target).update();
    var settled = engine.scrollBody.settle(target);

    if (settled && !engine.dragHandler.pointerDown()) {
      engine.animation.stop();
      events.emit('settle');
    }

    if (!settled) {
      events.emit('scroll');
    }

    if (loop) {
      engine.scrollLooper.loop(engine.scrollBody.direction());
      engine.slideLooper.loop();
    }

    engine.translate.to(location);
    engine.animation.proceed();
  }; // Shared


  var animation = Animation(update);
  var startLocation = scrollSnaps[index.get()];
  var location = Vector1D(startLocation);
  var target = Vector1D(startLocation);
  var scrollBody = ScrollBody(location, speed, 1);
  var scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
  var scrollTo = ScrollTo(animation, index, indexPrevious, scrollTarget, target, events);
  var slidesInView = SlidesInView(viewSize, contentSize, slideSizes, snaps, limit, loop, inViewThreshold); // DragHandler

  var dragHandler = DragHandler(axis, direction, root, target, dragFree, DragTracker(axis, pxToPercent), location, animation, scrollTo, scrollBody, scrollTarget, index, events, loop, skipSnaps); // Slider

  var engine = {
    containerRect: containerRect,
    slideRects: slideRects,
    animation: animation,
    axis: axis,
    direction: direction,
    dragHandler: dragHandler,
    eventStore: EventStore(),
    pxToPercent: pxToPercent,
    index: index,
    indexPrevious: indexPrevious,
    limit: limit,
    location: location,
    options: options,
    scrollBody: scrollBody,
    scrollBounds: ScrollBounds(limit, location, target, scrollBody),
    scrollLooper: ScrollLooper(contentSize, pxToPercent, limit, location, [location, target]),
    scrollProgress: ScrollProgress(limit),
    scrollSnaps: scrollSnaps,
    scrollTarget: scrollTarget,
    scrollTo: scrollTo,
    slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizesWithGaps, scrollSnaps, slidesInView, location, slides),
    slidesInView: slidesInView,
    slideIndexes: slideIndexes,
    target: target,
    translate: Translate(axis, direction, container)
  };
  return engine;
}

function EventEmitter() {
  var listeners = {};

  function getListeners(evt) {
    return listeners[evt] || [];
  }

  function emit(evt) {
    getListeners(evt).forEach(function (e) {
      return e(evt);
    });
    return self;
  }

  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }

  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter(function (e) {
      return e !== cb;
    });
    return self;
  }

  var self = {
    emit: emit,
    off: off,
    on: on
  };
  return self;
}

var defaultOptions$1 = {
  align: 'center',
  axis: 'x',
  containScroll: '',
  direction: 'ltr',
  dragFree: false,
  draggable: true,
  inViewThreshold: 0,
  loop: false,
  skipSnaps: false,
  slidesToScroll: 1,
  speed: 10,
  startIndex: 0
};

function OptionsPseudo(node) {
  var pseudoString = getComputedStyle(node, ':before').content;

  function get() {
    try {
      return JSON.parse(pseudoString.slice(1, -1).replace(/\\/g, ''));
    } catch (error) {} // eslint-disable-line no-empty


    return {};
  }

  var self = {
    get: get
  };
  return self;
}

function EmblaCarousel(nodes, userOptions, userPlugins) {
  var events = EventEmitter();
  var debouncedResize = debounce(resize, 500);
  var reInit = reActivate;
  var on = events.on,
      off = events.off;
  var engine;
  var activated = false;
  var optionsBase = Object.assign({}, defaultOptions$1, EmblaCarousel.globalOptions);
  var options = Object.assign({}, optionsBase);
  var optionsPseudo;
  var plugins;
  var rootSize = 0;
  var root;
  var container;
  var slides;

  function setupElements() {
    var providedContainer = 'container' in nodes && nodes.container;
    var providedSlides = 'slides' in nodes && nodes.slides;
    root = 'root' in nodes ? nodes.root : nodes;
    container = providedContainer || root.children[0];
    slides = providedSlides || [].slice.call(container.children);
    optionsPseudo = OptionsPseudo(root);
  }

  function activate(withOptions, withPlugins) {
    setupElements();
    optionsBase = Object.assign({}, optionsBase, withOptions);
    options = Object.assign({}, optionsBase, optionsPseudo.get());
    plugins = Object.assign([], withPlugins);
    engine = Engine(root, container, slides, options, events);
    engine.eventStore.add(window, 'resize', debouncedResize);
    engine.translate.to(engine.location);
    rootSize = engine.axis.measureSize(root.getBoundingClientRect());
    plugins.forEach(function (plugin) {
      return plugin.init(self);
    });

    if (options.loop) {
      if (!engine.slideLooper.canLoop()) {
        deActivate();
        return activate({
          loop: false
        }, withPlugins);
      }

      engine.slideLooper.loop();
    }

    if (options.draggable && container.offsetParent && slides.length) {
      engine.dragHandler.addActivationEvents();
    }

    if (!activated) {
      setTimeout(function () {
        return events.emit('init');
      }, 0);
      activated = true;
    }
  }

  function reActivate(withOptions, withPlugins) {
    if (!activated) return;
    var startIndex = selectedScrollSnap();
    var newOptions = Object.assign({
      startIndex: startIndex
    }, withOptions);
    deActivate();
    activate(newOptions, withPlugins || plugins);
    events.emit('reInit');
  }

  function deActivate() {
    engine.dragHandler.removeAllEvents();
    engine.animation.stop();
    engine.eventStore.removeAll();
    engine.translate.clear();
    engine.slideLooper.clear();
    plugins.forEach(function (plugin) {
      return plugin.destroy();
    });
  }

  function destroy() {
    if (!activated) return;
    deActivate();
    activated = false;
    events.emit('destroy');
  }

  function resize() {
    if (!activated) return;
    var size = engine.axis.measureSize(root.getBoundingClientRect());
    if (rootSize !== size) reActivate();
    events.emit('resize');
  }

  function slidesInView(target) {
    var location = engine[target ? 'target' : 'location'].get();
    var type = options.loop ? 'removeOffset' : 'constrain';
    return engine.slidesInView.check(engine.limit[type](location));
  }

  function slidesNotInView(target) {
    var inView = slidesInView(target);
    return engine.slideIndexes.filter(function (index) {
      return inView.indexOf(index) === -1;
    });
  }

  function scrollTo(index, jump, direction) {
    engine.scrollBody.useBaseMass().useSpeed(jump ? 100 : options.speed);
    if (activated) engine.scrollTo.index(index, direction || 0);
  }

  function scrollNext(jump) {
    var next = engine.index.clone().add(1);
    scrollTo(next.get(), jump === true, -1);
  }

  function scrollPrev(jump) {
    var prev = engine.index.clone().add(-1);
    scrollTo(prev.get(), jump === true, 1);
  }

  function canScrollNext() {
    var next = engine.index.clone().add(1);
    return next.get() !== selectedScrollSnap();
  }

  function canScrollPrev() {
    var prev = engine.index.clone().add(-1);
    return prev.get() !== selectedScrollSnap();
  }

  function scrollSnapList() {
    return engine.scrollSnaps.map(engine.scrollProgress.get);
  }

  function scrollProgress() {
    return engine.scrollProgress.get(engine.location.get());
  }

  function selectedScrollSnap() {
    return engine.index.get();
  }

  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }

  function clickAllowed() {
    return engine.dragHandler.clickAllowed();
  }

  function internalEngine() {
    return engine;
  }

  function rootNode() {
    return root;
  }

  function containerNode() {
    return container;
  }

  function slideNodes() {
    return slides;
  }

  var self = {
    canScrollNext: canScrollNext,
    canScrollPrev: canScrollPrev,
    clickAllowed: clickAllowed,
    containerNode: containerNode,
    internalEngine: internalEngine,
    destroy: destroy,
    off: off,
    on: on,
    previousScrollSnap: previousScrollSnap,
    reInit: reInit,
    rootNode: rootNode,
    scrollNext: scrollNext,
    scrollPrev: scrollPrev,
    scrollProgress: scrollProgress,
    scrollSnapList: scrollSnapList,
    scrollTo: scrollTo,
    selectedScrollSnap: selectedScrollSnap,
    slideNodes: slideNodes,
    slidesInView: slidesInView,
    slidesNotInView: slidesNotInView
  };
  activate(userOptions, userPlugins);
  return self;
}

EmblaCarousel.globalOptions = undefined;

var css$b = ":host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\nimg, video {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.embla {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.embla__container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.embla__viewport {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.embla__viewport.is-draggable {\n  cursor: move;\n  cursor: grab;\n}\n\n.embla__viewport.is-dragging {\n  cursor: grabbing;\n}\n\n.embla__slide {\n  position: relative;\n  height: 100%;\n  margin-right: 5px;\n  overflow: visible;\n}\n\n.embla__slide img, video {\n  object-fit: contain;\n}";

class FrigateCardCarousel extends s$2 {
    constructor() {
        super(...arguments);
        this._plugins = {};
    }
    /**
     * Scroll to a particular slide.
     * @param index Slide number.
     */
    carouselScrollTo(index) {
        var _a;
        (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.scrollTo(index, this._getTransitionEffect() === 'none');
    }
    /**
     * Get the selected slide.
     * @returns The slide index or undefined if the carousel is not loaded.
     */
    carouselSelected() {
        var _a;
        return (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.selectedScrollSnap();
    }
    /**
     * The updated lifecycle callback for this element.
     * @param changedProperties The properties that were changed in this render.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (!this._carousel) {
            this.updateComplete.then(() => {
                // Re-check for the carousel to prevent a double init.
                if (!this._carousel) {
                    this._initCarousel();
                }
            });
        }
    }
    /**
     * Get the transition effect to use.
     * @returns An TransitionEffect object.
     */
    _getTransitionEffect() {
        return 'slide';
    }
    /**
     * Get the Embla options to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getOptions() {
        return undefined;
    }
    /**
     * Get the Embla plugins to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getPlugins() {
        return undefined;
    }
    _destroyCarousel() {
        if (this._carousel) {
            this._carousel.destroy();
        }
        this._plugins = {};
        this._carousel = undefined;
    }
    /**
     * Initialize the carousel.
     */
    _initCarousel() {
        var _a;
        const carouselNode = this.renderRoot.querySelector('.embla__viewport');
        if (carouselNode) {
            const plugins = (_a = this._getPlugins()) !== null && _a !== void 0 ? _a : [];
            this._plugins = plugins.reduce((acc, cur) => {
                acc[cur.name] = cur;
                return acc;
            }, {});
            this._carousel = EmblaCarousel(carouselNode, this._getOptions(), plugins);
            this._carousel.on('init', () => dispatchFrigateCardEvent(this, 'carousel:init'));
            this._carousel.on('select', () => {
                const selected = this.carouselSelected();
                if (selected !== undefined) {
                    dispatchFrigateCardEvent(this, 'carousel:select', {
                        index: selected,
                    });
                }
            });
        }
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return o$7(css$b);
    }
}

var css$a = "ha-icon-button.button {\n  color: var(--secondary-color, white);\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n  opacity: 0.9;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nha-icon[data-domain=alert][data-state=on],\nha-icon[data-domain=automation][data-state=on],\nha-icon[data-domain=binary_sensor][data-state=on],\nha-icon[data-domain=calendar][data-state=on],\nha-icon[data-domain=camera][data-state=streaming],\nha-icon[data-domain=cover][data-state=open],\nha-icon[data-domain=fan][data-state=on],\nha-icon[data-domain=humidifier][data-state=on],\nha-icon[data-domain=light][data-state=on],\nha-icon[data-domain=input_boolean][data-state=on],\nha-icon[data-domain=lock][data-state=unlocked],\nha-icon[data-domain=media_player][data-state=on],\nha-icon[data-domain=media_player][data-state=paused],\nha-icon[data-domain=media_player][data-state=playing],\nha-icon[data-domain=script][data-state=on],\nha-icon[data-domain=sun][data-state=above_horizon],\nha-icon[data-domain=switch][data-state=on],\nha-icon[data-domain=timer][data-state=active],\nha-icon[data-domain=vacuum][data-state=cleaning],\nha-icon[data-domain=group][data-state=on],\nha-icon[data-domain=group][data-state=home],\nha-icon[data-domain=group][data-state=open],\nha-icon[data-domain=group][data-state=locked],\nha-icon[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=pending],\nha-icon[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=plant][data-state=problem],\nha-icon[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\nha-icon-button[data-domain=alert][data-state=on],\nha-icon-button[data-domain=automation][data-state=on],\nha-icon-button[data-domain=binary_sensor][data-state=on],\nha-icon-button[data-domain=calendar][data-state=on],\nha-icon-button[data-domain=camera][data-state=streaming],\nha-icon-button[data-domain=cover][data-state=open],\nha-icon-button[data-domain=fan][data-state=on],\nha-icon-button[data-domain=humidifier][data-state=on],\nha-icon-button[data-domain=light][data-state=on],\nha-icon-button[data-domain=input_boolean][data-state=on],\nha-icon-button[data-domain=lock][data-state=unlocked],\nha-icon-button[data-domain=media_player][data-state=on],\nha-icon-button[data-domain=media_player][data-state=paused],\nha-icon-button[data-domain=media_player][data-state=playing],\nha-icon-button[data-domain=script][data-state=on],\nha-icon-button[data-domain=sun][data-state=above_horizon],\nha-icon-button[data-domain=switch][data-state=on],\nha-icon-button[data-domain=timer][data-state=active],\nha-icon-button[data-domain=vacuum][data-state=cleaning],\nha-icon-button[data-domain=group][data-state=on],\nha-icon-button[data-domain=group][data-state=home],\nha-icon-button[data-domain=group][data-state=open],\nha-icon-button[data-domain=group][data-state=locked],\nha-icon-button[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon-button[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon-button[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon-button[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon-button[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=pending],\nha-icon-button[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=plant][data-state=problem],\nha-icon-button[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon-button[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\n:host {\n  --frigate-card-next-prev-size: 48px;\n  --frigate-card-next-prev-size-hover: calc(var(--frigate-card-next-prev-size) * 2);\n  --frigate-card-prev-position: 45px;\n  --frigate-card-next-position: 45px;\n  --mdc-icon-button-size: var(--frigate-card-next-prev-size);\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n}\n\n.controls {\n  position: absolute;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.controls.previous {\n  left: var(--frigate-card-prev-position);\n}\n\n.controls.next {\n  right: var(--frigate-card-next-position);\n}\n\n.controls.icons {\n  top: calc(50% - 20px);\n}\n\n.controls.thumbnails {\n  border-radius: 50%;\n  height: var(--frigate-card-next-prev-size);\n  top: calc(50% - var(--frigate-card-next-prev-size) / 2);\n  box-shadow: 0px 0px 20px 5px black;\n  transition: all 0.2s ease-out;\n  opacity: 0.8;\n}\n\n.controls.thumbnails:hover {\n  opacity: 1 !important;\n  height: var(--frigate-card-next-prev-size-hover);\n  top: calc(50% - var(--frigate-card-next-prev-size-hover) / 2);\n}\n\n.controls.previous.thumbnails:hover {\n  left: calc(var(--frigate-card-prev-position) - (var(--frigate-card-next-prev-size-hover) - var(--frigate-card-next-prev-size)) / 2);\n}\n\n.controls.next.thumbnails:hover {\n  right: calc(var(--frigate-card-next-position) - (var(--frigate-card-next-prev-size-hover) - var(--frigate-card-next-prev-size)) / 2);\n}";

let FrigateCardNextPreviousControl = class FrigateCardNextPreviousControl extends s$2 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        // Label that is used for ARIA support and as tooltip.
        this.label = "";
    }
    set controlConfig(controlConfig) {
        if (controlConfig === null || controlConfig === void 0 ? void 0 : controlConfig.size) {
            this.style.setProperty('--frigate-card-next-prev-size', controlConfig.size);
        }
        this._controlConfig = controlConfig;
    }
    render() {
        if (this.disabled || !this._controlConfig || this._controlConfig.style == 'none') {
            return $ ``;
        }
        const classes = {
            controls: true,
            previous: this.direction == 'previous',
            next: this.direction == 'next',
            thumbnails: this._controlConfig.style == 'thumbnails',
            icons: ['chevrons', 'icons'].includes(this._controlConfig.style),
            button: ['chevrons', 'icons'].includes(this._controlConfig.style),
        };
        if (['chevrons', 'icons'].includes(this._controlConfig.style)) {
            let icon;
            if (this._controlConfig.style === 'chevrons') {
                icon = this.direction == 'previous' ? 'mdi:chevron-left' : 'mdi:chevron-right';
            }
            else {
                if (!this.icon) {
                    return $ ``;
                }
                icon = this.icon;
            }
            return $ ` <ha-icon-button
        class="${o$2(classes)}"
        .label=${this.label}
      >
        <ha-icon icon=${icon}></ha-icon>
      </ha-icon-button>`;
        }
        if (!this.thumbnail) {
            return $ ``;
        }
        return $ `<img
      src="${this.thumbnail}"
      class="${o$2(classes)}"
      title="${this.label}"
      aria-label="${this.label}"
    />`;
    }
    static get styles() {
        return o$7(css$a);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardNextPreviousControl.prototype, "direction", void 0);
__decorate([
    t$3()
], FrigateCardNextPreviousControl.prototype, "_controlConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardNextPreviousControl.prototype, "thumbnail", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardNextPreviousControl.prototype, "icon", void 0);
__decorate([
    e$3({ attribute: true, type: Boolean })
], FrigateCardNextPreviousControl.prototype, "disabled", void 0);
__decorate([
    e$3()
], FrigateCardNextPreviousControl.prototype, "label", void 0);
FrigateCardNextPreviousControl = __decorate([
    n$4('frigate-card-next-previous-control')
], FrigateCardNextPreviousControl);

var css$9 = ":host {\n  --video-max-height: none;\n}\n\n.embla__slide {\n  flex: 0 0 100%;\n}";

const getEmptyImageSrc = (width, height) => `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
const IMG_EMPTY = getEmptyImageSrc(16, 9);
let FrigateCardMediaCarousel = class FrigateCardMediaCarousel extends FrigateCardCarousel {
    constructor() {
        super();
        // A "map" from slide number to MediaShowInfo object.
        this._mediaShowInfo = {};
        this._nextControlRef = e();
        this._previousControlRef = e();
        this._titleControlRef = e();
        this._titleTimerID = null;
        this._resizeObserver = new ResizeObserver(this._adaptiveHeightHandler.bind(this));
    }
    /**
     * Play the media on the selected slide. May be overridden to control when
     * autoplay should happen.
     */
    _autoPlayHandler() {
        var _a;
        (_a = this._plugins['AutoMediaPlugin']) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * Unmute the media on the selected slide. May be overridden to control when
     * autoplay should happen.
     */
    _autoUnmuteHandler() {
        var _a;
        (_a = this._plugins['AutoMediaPlugin']) === null || _a === void 0 ? void 0 : _a.unmute();
    }
    /**
     * Show the media title after the media loads.
     */
    _titleHandler() {
        var _a;
        const show = () => {
            var _a;
            this._titleTimerID = null;
            (_a = this._titleControlRef.value) === null || _a === void 0 ? void 0 : _a.show();
        };
        if (this._titleTimerID) {
            window.clearTimeout(this._titleTimerID);
        }
        if ((_a = this._titleControlRef.value) === null || _a === void 0 ? void 0 : _a.isVisible()) {
            // If it's already visible, update it immediately (but also update it
            // after the timer expires to ensure it re-positions if necessary, see
            // comment below).
            show();
        }
        // Allow a brief pause after the media loads, but before the title is
        // displayed. This allows for a pleasant appearance/disappear of the title,
        // and allows for the browser to finish rendering the carousel (inc.
        // adaptive height which has `0.5s ease`, see `media-carousel.scss`).
        this._titleTimerID = window.setTimeout(show, 0.5 * 1000);
    }
    /**
     * Component connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('frigate-card:media-show', this._autoPlayHandler);
        this.addEventListener('frigate-card:media-show', this._autoUnmuteHandler);
        this.addEventListener('frigate-card:media-show', this._adaptiveHeightHandler);
        this.addEventListener('frigate-card:media-show', this._titleHandler);
        this._resizeObserver.observe(this);
    }
    /**
     * Component disconnected callback.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('frigate-card:media-show', this._autoPlayHandler);
        this.removeEventListener('frigate-card:media-show', this._autoUnmuteHandler);
        this.removeEventListener('frigate-card:media-show', this._adaptiveHeightHandler);
        this.removeEventListener('frigate-card:media-show', this._titleHandler);
        this._resizeObserver.disconnect();
    }
    _destroyCarousel() {
        super._destroyCarousel();
        // Notes on instance variables:
        // * this._mediaShowInfo: This is set when the media in the DOM loads. If a
        //   new View included the same media, the DOM would not change and so the
        //   prior contents would still be valid and would not re-appear (as the
        //   media would not reload) -- as such, leave this alone on carousel
        //   destroy. New media in that slide will replace the prior contents on
        //   load.
    }
    /**
     * Initialize the carousel.
     */
    _initCarousel() {
        super._initCarousel();
        // Necessary because typescript local type narrowing is not paying attention
        // to the side-effect of the call to super._initCarousel().
        const carousel = this._carousel;
        // Update the view object as the carousel is moved.
        carousel === null || carousel === void 0 ? void 0 : carousel.on('select', this._selectSlideSetViewHandler.bind(this));
        // Update the next/previous controls as the carousel is moved.
        carousel === null || carousel === void 0 ? void 0 : carousel.on('select', this._selectSlideNextPreviousHandler.bind(this));
        // Dispatch MediaShow events as the carousel is moved.
        carousel === null || carousel === void 0 ? void 0 : carousel.on('init', this._selectSlideMediaShowHandler.bind(this));
        carousel === null || carousel === void 0 ? void 0 : carousel.on('select', this._selectSlideMediaShowHandler.bind(this));
    }
    /**
     * Set the the height of the container on media load in case the dimensions
     * have changed. This handler is not triggered from carousel events, as it's
     * actually the media load/show that will change the dimensions, and that is
     * async from carousel actions (e.g. lazy-loaded media).
     */
    _adaptiveHeightHandler() {
        const adaptCarouselHeight = () => {
            var _a;
            if (!this._carousel) {
                return;
            }
            const slide = (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.selectedScrollSnap();
            if (slide !== undefined) {
                this._carousel.containerNode().style.removeProperty('max-height');
                const slides = this._carousel.slideNodes();
                const height = slides[slide].getBoundingClientRect().height;
                if (height > 0) {
                    this._carousel.containerNode().style.maxHeight = `${height}px`;
                }
            }
        };
        // Hack: This method attempts to measure the height of the selected slide in
        // order to set the overall carousel height to match. This method is
        // triggered from `frigate-card:media-show` events, which are usually in
        // turn triggered from media/metadata load events from media players.
        // Sufficient time needs to be allowed after these metadata load events to
        // allow the browser to repaint the element heights, so that we can get the
        // right values here. requestAnimationFrame() works well for this.
        window.requestAnimationFrame(adaptCarouselHeight);
    }
    /**
     * Handle the user selecting a new slide in the carousel.
     */
    _selectSlideSetViewHandler() {
        // To be overridden in children.
    }
    /**
     * Handle updating of the next/previous controls when the carousel is moved.
     */
    _selectSlideNextPreviousHandler() {
        // To be overridden in children.
    }
    /**
     * Handle a next/previous control interaction.
     * @param direction The direction requested, previous or next.
     */
    _nextPreviousHandler(direction) {
        var _a, _b;
        if (direction == 'previous') {
            (_a = this._carousel) === null || _a === void 0 ? void 0 : _a.scrollPrev(this._getTransitionEffect() === 'none');
        }
        else if (direction == 'next') {
            (_b = this._carousel) === null || _b === void 0 ? void 0 : _b.scrollNext(this._getTransitionEffect() === 'none');
        }
    }
    /**
     * Fire a media show event when a slide is selected.
     */
    _selectSlideMediaShowHandler() {
        if (!this._carousel) {
            return;
        }
        const slideIndex = this._carousel.selectedScrollSnap();
        if (slideIndex in this._mediaShowInfo) {
            dispatchExistingMediaShowInfoAsEvent(this, this._mediaShowInfo[slideIndex]);
        }
    }
    /**
     * Handle a media-show event that is generated by a child component, saving the
     * contents for future use when the relevant slide is actually shown.
     * @param slideIndex The relevant slide index.
     * @param event The media-show event from the child component.
     */
    _mediaShowEventHandler(slideIndex, event) {
        // Don't allow the inbound event to propagate upwards, that will be
        // automatically done at the appropriate time as the slide is shown.
        event.stopPropagation();
        this._mediaLoadedHandler(slideIndex, event.detail);
    }
    /**
     * Handle a MediaShowInfo object that is generated on media load, by saving it
     * for future, or immediate use, when the relevant slide is displayed.
     * @param slideIndex The relevant slide index.
     * @param mediaShowInfo The MediaShowInfo object generated by the media.
     */
    _mediaLoadedHandler(slideIndex, mediaShowInfo) {
        var _a;
        // isValidMediaShowInfo is used to prevent saving media info that will be
        // rejected upstream (empty 1x1 images will be rejected here).
        if (mediaShowInfo && isValidMediaShowInfo(mediaShowInfo)) {
            this._mediaShowInfo[slideIndex] = mediaShowInfo;
            if (this._carousel && ((_a = this._carousel) === null || _a === void 0 ? void 0 : _a.selectedScrollSnap()) == slideIndex) {
                dispatchExistingMediaShowInfoAsEvent(this, mediaShowInfo);
            }
            /**
             * Images need a width/height from initial load, and browsers will assume
             * that the aspect ratio of the initial dummy-image load will persist. In
             * lazy-loading, this can cause a 1x1 pixel dummy image to cause the
             * browser to assume all images will be square, so the whole carousel will
             * have the wrong aspect-ratio until every single image has been lazily
             * loaded. Adaptive height helps in that the carousel gets resized on each
             * img display to the correct size, but it still causes a minor noticeable
             * flicker until the height change is complete.
             *
             * To avoid this, we use a 16:9 dummy image at first (most
             * likely?) and once the first piece of real media has been loaded, all
             * dummy images are replaced with dummy images that match the aspect ratio
             * of the real image. It still might be wrong, but it's the best option
             * available.
             */
            const firstMediaLoad = !Object.keys(this._mediaShowInfo).length;
            if (firstMediaLoad) {
                const replacementImageSrc = getEmptyImageSrc(mediaShowInfo.width, mediaShowInfo.height);
                this.renderRoot.querySelectorAll('.embla__container img').forEach((img) => {
                    const imageElement = img;
                    if (imageElement.src === IMG_EMPTY) {
                        imageElement.src = replacementImageSrc;
                    }
                });
            }
        }
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return [super.styles, o$7(css$9)];
    }
};
FrigateCardMediaCarousel = __decorate([
    n$4('frigate-card-media-carousel')
], FrigateCardMediaCarousel);

const defaultOptions = {
    lazyloadCount: 0,
};
function Lazyload(userOptions) {
    const options = Object.assign({}, defaultOptions, userOptions);
    let carousel;
    let slides;
    const isSlideLazyloaded = {};
    const loadEvents = ['init', 'select', 'resize'];
    const unloadEvents = ['select'];
    /**
     * Initialize the plugin.
     */
    function init(embla) {
        carousel = embla;
        slides = carousel.slideNodes();
        if (options.lazyloadCallback) {
            loadEvents.forEach((evt) => carousel.on(evt, lazyloadHandler));
        }
        if (options.lazyunloadCallback) {
            unloadEvents.forEach((evt) => carousel.on(evt, lazyunloadHandler));
        }
        document.addEventListener('visibilitychange', visibilityHandler);
    }
    /**
     * Destroy the plugin.
     */
    function destroy() {
        if (options.lazyloadCallback) {
            loadEvents.forEach((evt) => carousel.off(evt, lazyloadHandler));
        }
        if (options.lazyunloadCallback) {
            unloadEvents.forEach((evt) => carousel.off(evt, lazyunloadHandler));
        }
        document.removeEventListener('visibilitychange', visibilityHandler);
    }
    /**
     * Handle document visibility changes.
     */
    function visibilityHandler() {
        if (document.visibilityState == 'hidden' && lazyunloadHandler) {
            lazyunloadHandler();
        }
        else if (document.visibilityState == 'visible' && lazyloadHandler) {
            lazyloadHandler();
        }
    }
    /**
     * Determine if a slide index has been lazily loaded.
     * @param index Slide index.
     * @returns `true` if the slide has been lazily loaded.
     */
    function hasLazyloaded(index) {
        return !!isSlideLazyloaded[index];
    }
    /**
     * Lazily load media in the carousel.
     */
    function lazyloadHandler() {
        var _a;
        const lazyLoadCount = (_a = options.lazyloadCount) !== null && _a !== void 0 ? _a : 0;
        const currentIndex = carousel.selectedScrollSnap();
        const slidesToLoad = new Set();
        // Lazily load 'count' slides on either side of the slides in view.
        for (let i = 1; i <= lazyLoadCount && currentIndex - i >= 0; i++) {
            slidesToLoad.add(currentIndex - i);
        }
        slidesToLoad.add(currentIndex);
        for (let i = 1; i <= lazyLoadCount && currentIndex + i < slides.length; i++) {
            slidesToLoad.add(currentIndex + i);
        }
        slidesToLoad.forEach((index) => {
            // Only lazy load slides that are not already loaded.
            if (isSlideLazyloaded[index]) {
                return;
            }
            if (options.lazyloadCallback) {
                isSlideLazyloaded[index] = true;
                options.lazyloadCallback(index, slides[index]);
            }
        });
    }
    /**
     * Lazily unload media in the carousel.
     */
    function lazyunloadHandler() {
        const index = carousel.previousScrollSnap();
        // Only lazy unload slides that are lazy loaded.
        if (!isSlideLazyloaded[index]) {
            return;
        }
        if (options.lazyunloadCallback) {
            options.lazyunloadCallback(index, slides[index]);
            isSlideLazyloaded[index] = false;
        }
    }
    const self = {
        name: 'Lazyload',
        options,
        init,
        destroy,
        hasLazyloaded,
    };
    return self;
}

var css$8 = ":host {\n  --paper-toast-background-color: rgba(0,0,0,0.6);\n  --paper-toast-color: white;\n}\n\npaper-toast {\n  max-width: unset;\n  min-width: unset;\n}";

let FrigateCardTitleControl = class FrigateCardTitleControl extends s$2 {
    constructor() {
        super(...arguments);
        this._toastRef = e();
    }
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        if (!this.text || !this.config || this.config.mode == 'none' || !this.fitInto) {
            return $ ``;
        }
        const verticalAlign = this.config.mode.match(/-top-/) ? 'top' : 'bottom';
        const horizontalAlign = this.config.mode.match(/-left$/) ? 'left' : 'right';
        return $ ` <paper-toast
      ${n(this._toastRef)}
      class="capsule"
      .duration=${this.config.duration_seconds * 1000}
      .verticalAlign=${verticalAlign}
      .horizontalAlign=${horizontalAlign}
      .text="${this.text}"
      .fitInto=${this.fitInto}
    >
    </paper-toast>`;
    }
    /**
     * Determine if the toast is visible.
     * @returns `true` if the toast is visible, `false` otherwise.
     */
    isVisible() {
        var _a, _b;
        return (_b = (_a = this._toastRef.value) === null || _a === void 0 ? void 0 : _a.opened) !== null && _b !== void 0 ? _b : false;
    }
    /**
     * Show the toast.
     */
    hide() {
        if (this._toastRef.value) {
            // Set it to false first, to ensure the timer resets.
            this._toastRef.value.opened = false;
        }
    }
    /**
     * Show the toast.
     */
    show() {
        if (this._toastRef.value) {
            // Set it to false first, to ensure the timer resets.
            this._toastRef.value.opened = false;
            this._toastRef.value.opened = true;
        }
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return o$7(css$8);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardTitleControl.prototype, "config", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardTitleControl.prototype, "text", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardTitleControl.prototype, "fitInto", void 0);
FrigateCardTitleControl = __decorate([
    n$4('frigate-card-title-control')
], FrigateCardTitleControl);

var css$7 = ":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-live-carousel {\n  flex: 1;\n  min-height: 0;\n}\n\nfrigate-card-thumbnail-carousel {\n  flex: 0 0 var(--frigate-card-carousel-thumbnail-size);\n}";

var css$6 = ":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  --video-max-height: none;\n}";

var css$5 = ":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\ncanvas {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}";

var css$4 = ":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n/* Don't drop shadow or have radius for nested webrtc card */\nwebrtc-camera ha-card {\n  box-shadow: none;\n  border-radius: 0px;\n  background-color: black;\n  margin: 0px;\n}";

// Number of seconds a signed URL is valid for.
const URL_SIGN_EXPIRY_SECONDS = 24 * 60 * 60;
// Number of seconds before the expiry to trigger a refresh.
const URL_SIGN_REFRESH_THRESHOLD_SECONDS = 1 * 60 * 60;
let FrigateCardLive = class FrigateCardLive extends s$2 {
    set preloaded(preloaded) {
        this._preloaded = preloaded;
        if (!preloaded && this._savedMediaShowInfo) {
            dispatchExistingMediaShowInfoAsEvent(this, this._savedMediaShowInfo);
        }
    }
    /**
     * Handler for media show events that special cases preloaded live views.
     * @param e The media show event.
     */
    _mediaShowHandler(e) {
        this._savedMediaShowInfo = e.detail;
        if (this._preloaded) {
            // If live is being pre-loaded, don't let the event propagate upwards yet
            // as the media is not really being shown.
            e.stopPropagation();
        }
    }
    /**
     * Render thumbnails carousel.
     * @returns A rendered template or void.
     */
    renderThumbnails(config) {
        if (!this.liveConfig || !this.view) {
            return;
        }
        const fetchThumbnailsThenRender = async () => {
            if (!this.hass || !this.cameras || !this.view) {
                return;
            }
            const browseMediaParams = BrowseMediaUtil.getBrowseMediaQueryParameters(config.controls.thumbnails.media, this.cameras.get(this.view.camera));
            if (!browseMediaParams) {
                return;
            }
            let parent;
            try {
                parent = await BrowseMediaUtil.browseMediaQuery(this.hass, browseMediaParams);
            }
            catch (e) {
                return dispatchErrorMessageEvent(this, e.message);
            }
            if (BrowseMediaUtil.getFirstTrueMediaChildIndex(parent) != null) {
                return $ `<frigate-card-thumbnail-carousel
          .target=${parent}
          .view=${this.view}
          .config=${config.controls.thumbnails}
          .highlightSelected=${false}
          @frigate-card:carousel:tap=${(ev) => {
                    const mediaType = browseMediaParams.mediaType;
                    if (mediaType && this.view && ['snapshots', 'clips'].includes(mediaType)) {
                        new View({
                            view: mediaType === 'clips' ? 'clip' : 'snapshot',
                            camera: this.view.camera,
                            target: ev.detail.target,
                            childIndex: ev.detail.childIndex,
                        }).dispatchChangeEvent(this);
                    }
                }}
        >
        </frigate-card-thumbnail-carousel>`;
            }
        };
        const fillerStyle = {
            height: config.controls.thumbnails.size,
        };
        // As the live carousel moves, thumbnails are re-fetched. This is an async
        // request, so it can jarring to the user to have the main camera view nudge
        // up/down as the thumbnails disappear and re-appear. Instead, if there was
        // previously a thumbnail carousel rendered, use a filler that is the same
        // size until it is replaced with a real carousel (or empty, if no carousel
        // is rendered for the next camera).
        return $ `${c(fetchThumbnailsThenRender(), this._thumbnailCarousel
            ? $ ` <div style="${i$1(fillerStyle)}"></div>`
            : $ ``)}`;
    }
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        if (!this.hass || !this.liveConfig || !this.cameras) {
            return;
        }
        const config = getOverriddenConfig(this.liveConfig, this.liveOverrides, this.conditionState);
        // Note use of liveConfig and not config below -- the carousel will
        // independently override the liveconfig to reflect the camera in the
        // carousel (not necessarily the selected camera).
        return $ `
      ${config.controls.thumbnails.mode === 'above' ? this.renderThumbnails(config) : ''}
      <frigate-card-live-carousel
        .hass=${this.hass}
        .view=${this.view}
        .cameras=${this.cameras}
        .liveConfig=${this.liveConfig}
        .preloaded=${this._preloaded}
        .conditionState=${this.conditionState}
        .liveOverrides=${this.liveOverrides}
        @frigate-card:media-show=${this._mediaShowHandler}
        @frigate-card:change-view=${(ev) => {
            if (this._preloaded) {
                // Don't allow change-view events to propagate upwards if the card
                // is only preloaded rather than being live displayed. These events
                // could be triggered if the camera is switched and the carousel
                // moves to focus on that camera -- as the card isn't actually being
                // displayed, do not allow the view to actually be updated.
                ev.stopPropagation();
            }
        }}
      >
      </frigate-card-live-carousel>
      ${config.controls.thumbnails.mode === 'below' ? this.renderThumbnails(config) : ''}
    `;
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$7);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardLive.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLive.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLive.prototype, "cameras", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLive.prototype, "liveConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLive.prototype, "liveOverrides", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLive.prototype, "conditionState", void 0);
__decorate([
    t$3()
], FrigateCardLive.prototype, "_preloaded", void 0);
__decorate([
    i$3('frigate-card-thumbnail-carousel')
], FrigateCardLive.prototype, "_thumbnailCarousel", void 0);
FrigateCardLive = __decorate([
    n$4('frigate-card-live')
], FrigateCardLive);
let FrigateCardLiveCarousel = class FrigateCardLiveCarousel extends FrigateCardMediaCarousel {
    constructor() {
        super(...arguments);
        // Index between camera name and slide number.
        this._cameraToSlide = {};
    }
    /**
     * The updated lifecycle callback for this element.
     * @param changedProperties The properties that were changed in this render.
     */
    updated(changedProperties) {
        var _a, _b;
        if (this._carousel &&
            (changedProperties.has('cameras') || changedProperties.has('liveConfig'))) {
            // All of these properties may fundamentally change the contents/size of
            // the DOM, and the carousel should be reset when they change.
            this._destroyCarousel();
        }
        super.updated(changedProperties);
        if (changedProperties.has('view')) {
            const oldView = changedProperties.get('view');
            if (this._carousel &&
                oldView &&
                ((_a = this.view) === null || _a === void 0 ? void 0 : _a.camera) &&
                ((_b = this.view) === null || _b === void 0 ? void 0 : _b.camera) != oldView.camera) {
                const slide = this._cameraToSlide[this.view.camera];
                if (slide !== undefined && slide !== this.carouselSelected()) {
                    this.carouselScrollTo(slide);
                }
            }
        }
        if (changedProperties.has('preloaded')) {
            const automedia = this._plugins['AutoMediaPlugin'];
            if (automedia) {
                // If this has changed to preloaded then pause & mute, otherwise play
                // and potentially unmute (depending on configuration).
                if (this.preloaded) {
                    automedia.pause();
                    automedia.mute();
                }
                else {
                    automedia.play();
                    this._autoUnmuteHandler();
                }
            }
        }
    }
    /**
     * Get the transition effect to use.
     * @returns An TransitionEffect object.
     */
    _getTransitionEffect() {
        var _a;
        return (_a = this.liveConfig) === null || _a === void 0 ? void 0 : _a.transition_effect;
    }
    /**
     * Get the Embla options to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getOptions() {
        var _a;
        let startIndex = -1;
        if (this.cameras && this.view) {
            startIndex = Array.from(this.cameras.keys()).indexOf(this.view.camera);
        }
        return {
            startIndex: startIndex < 0 ? undefined : startIndex,
            draggable: (_a = this.liveConfig) === null || _a === void 0 ? void 0 : _a.draggable,
            loop: true,
        };
    }
    /**
     * Get the Embla plugins to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getPlugins() {
        var _a, _b, _c;
        return [
            Lazyload({
                lazyloadCallback: ((_a = this.liveConfig) === null || _a === void 0 ? void 0 : _a.lazy_load)
                    ? (...args) => this._lazyloadOrUnloadSlide('load', ...args)
                    : undefined,
                lazyunloadCallback: ((_b = this.liveConfig) === null || _b === void 0 ? void 0 : _b.lazy_unload)
                    ? (...args) => this._lazyloadOrUnloadSlide('unload', ...args)
                    : undefined,
            }),
            AutoMediaPlugin({
                playerSelector: 'frigate-card-live-provider',
                autoUnmuteWhenVisible: !!((_c = this.liveConfig) === null || _c === void 0 ? void 0 : _c.auto_unmute),
            }),
        ];
    }
    /**
     * Unmute the media on the selected slide.
     */
    _autoUnmuteHandler() {
        var _a;
        if ((_a = this.liveConfig) === null || _a === void 0 ? void 0 : _a.auto_unmute) {
            super._autoUnmuteHandler();
        }
    }
    /**
     * Returns the number of slides to lazily load. 0 means all slides are lazy
     * loaded, 1 means that 1 slide on each side of the currently selected slide
     * should lazy load, etc. `null` means lazy loading is disabled and everything
     * should load simultaneously.
     * @returns
     */
    _getLazyLoadCount() {
        var _a;
        // Defaults to fully-lazy loading.
        return ((_a = this.liveConfig) === null || _a === void 0 ? void 0 : _a.lazy_load) === false ? null : 0;
    }
    /**
     * Get slides to include in the render.
     * @returns The slides to include in the render and an index keyed by camera
     * name to slide number.
     */
    _getSlides() {
        if (!this.cameras) {
            return [[], {}];
        }
        const slides = [];
        const cameraToSlide = {};
        for (const [camera, cameraConfig] of this.cameras) {
            const slide = this._renderLive(camera, cameraConfig, slides.length);
            if (slide) {
                cameraToSlide[camera] = slides.length;
                slides.push(slide);
            }
        }
        return [slides, cameraToSlide];
    }
    /**
     * Handle the user selecting a new slide in the carousel.
     */
    _selectSlideSetViewHandler() {
        if (!this._carousel || !this.view || !this.cameras) {
            return;
        }
        const selectedSnap = this._carousel.selectedScrollSnap();
        this.view
            .evolve({
            camera: Array.from(this.cameras.keys())[selectedSnap],
            previous: this.view,
        })
            .dispatchChangeEvent(this);
    }
    /**
     * Lazy load a slide.
     * @param _index The slide number to lazy load.
     * @param slide The slide to lazy load.
     */
    _lazyloadOrUnloadSlide(action, _index, slide) {
        const liveProvider = slide.querySelector('frigate-card-live-provider');
        if (liveProvider) {
            liveProvider.disabled = action == 'load' ? false : true;
        }
    }
    _renderLive(camera, cameraConfig, slideIndex) {
        if (!this.liveConfig) {
            return;
        }
        // The conditionState object contains the currently live camera, which (in
        // the carousel for example) is not necessarily the live camera this
        // <frigate-card-live-provider> is rendering right now.
        const conditionState = Object.assign(Object.assign(Object.assign({}, this.conditionState), { camera: camera }));
        const config = getOverriddenConfig(this.liveConfig, this.liveOverrides, conditionState);
        return $ ` <div class="embla__slide">
      <frigate-card-live-provider
        ?disabled=${this.liveConfig.lazy_load}
        .cameraConfig=${cameraConfig}
        .label=${getCameraTitle(this.hass, cameraConfig)}
        .liveConfig=${config}
        .hass=${this.hass}
        @frigate-card:media-show=${(e) => this._mediaShowEventHandler(slideIndex, e)}
      >
      </frigate-card-live-provider>
    </div>`;
    }
    _getCameraNeighbors() {
        var _a, _b;
        if (!this.cameras || !this.view || !this.hass) {
            return [null, null];
        }
        const keys = Array.from(this.cameras.keys());
        const currentIndex = keys.indexOf(this.view.camera);
        if (currentIndex < 0 || this.cameras.size <= 1) {
            return [null, null];
        }
        const prev = (_a = this.cameras.get(keys[currentIndex > 0 ? currentIndex - 1 : this.cameras.size - 1])) !== null && _a !== void 0 ? _a : null;
        const next = (_b = this.cameras.get(keys[currentIndex + 1 < this.cameras.size ? currentIndex + 1 : 0])) !== null && _b !== void 0 ? _b : null;
        return [prev, next];
    }
    /**
     * Handle updating of the next/previous controls when the carousel is moved.
     */
    _selectSlideNextPreviousHandler() {
        const updateNextPreviousControl = (control, direction) => {
            const [prev, next] = this._getCameraNeighbors();
            const target = direction == 'previous' ? prev : next;
            control.disabled = target == null;
            control.title = getCameraTitle(this.hass, target);
            control.icon = getCameraIcon(this.hass, target);
        };
        if (this._previousControlRef.value) {
            updateNextPreviousControl(this._previousControlRef.value, 'previous');
        }
        if (this._nextControlRef.value) {
            updateNextPreviousControl(this._nextControlRef.value, 'next');
        }
    }
    /**
     * Render the element.
     * @returns A template to display to the user.
     */
    render() {
        const [slides, cameraToSlide] = this._getSlides();
        this._cameraToSlide = cameraToSlide;
        if (!slides || !this.liveConfig || !this.cameras || !this.view) {
            return;
        }
        const config = getOverriddenConfig(this.liveConfig, this.liveOverrides, this.conditionState);
        const [prev, next] = this._getCameraNeighbors();
        const title = getCameraTitle(this.hass, this.cameras.get(this.view.camera));
        return $ `
      <div class="embla">
        <frigate-card-next-previous-control
          ${n(this._previousControlRef)}
          .direction=${'previous'}
          .controlConfig=${config.controls.next_previous}
          .label=${getCameraTitle(this.hass, prev)}
          .icon=${getCameraIcon(this.hass, prev)}
          ?disabled=${prev == null}
          @click=${(ev) => {
            this._nextPreviousHandler('previous');
            stopEventFromActivatingCardWideActions(ev);
        }}
        >
        </frigate-card-next-previous-control>
        <div class="embla__viewport">
          <div class="embla__container">${slides}</div>
        </div>
        <frigate-card-next-previous-control
          ${n(this._nextControlRef)}
          .direction=${'next'}
          .controlConfig=${config.controls.next_previous}
          .label=${getCameraTitle(this.hass, next)}
          .icon=${getCameraIcon(this.hass, next)}
          ?disabled=${next == null}
          @click=${(ev) => {
            this._nextPreviousHandler('next');
            stopEventFromActivatingCardWideActions(ev);
        }}
        >
        </frigate-card-next-previous-control>
      </div>
      <frigate-card-title-control
        ${n(this._titleControlRef)}
        .config=${config.controls.title}
        .text="${title ? `${localize('common.live')}: ${title}` : ''}"
        .fitInto=${this}
      >
      </frigate-card-title-control>
    `;
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "cameras", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "liveConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "liveOverrides", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "preloaded", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveCarousel.prototype, "conditionState", void 0);
FrigateCardLiveCarousel = __decorate([
    n$4('frigate-card-live-carousel')
], FrigateCardLiveCarousel);
let FrigateCardLiveProvider = class FrigateCardLiveProvider extends s$2 {
    constructor() {
        super(...arguments);
        // Whether or not to disable this entity. If `true`, no contents are rendered
        // until this attribute is set to `false` (this is useful for lazy loading).
        this.disabled = false;
        // Label that is used for ARIA support and as tooltip.
        this.label = '';
        this._providerRef = e();
    }
    /**
     * Play the video.
     */
    play() {
        var _a;
        (_a = this._providerRef.value) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * Pause the video.
     */
    pause() {
        var _a;
        (_a = this._providerRef.value) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * Mute the video.
     */
    mute() {
        var _a;
        (_a = this._providerRef.value) === null || _a === void 0 ? void 0 : _a.mute();
    }
    /**
     * Unmute the video.
     */
    unmute() {
        var _a;
        (_a = this._providerRef.value) === null || _a === void 0 ? void 0 : _a.unmute();
    }
    _getResolvedProvider() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_a = this.cameraConfig) === null || _a === void 0 ? void 0 : _a.live_provider) === 'auto') {
            if (((_c = (_b = this.cameraConfig) === null || _b === void 0 ? void 0 : _b.webrtc_card) === null || _c === void 0 ? void 0 : _c.entity) ||
                ((_e = (_d = this.cameraConfig) === null || _d === void 0 ? void 0 : _d.webrtc_card) === null || _e === void 0 ? void 0 : _e.url)) {
                return 'webrtc-card';
            }
            else if ((_f = this.cameraConfig) === null || _f === void 0 ? void 0 : _f.camera_entity) {
                return 'ha';
            }
            else if ((_g = this.cameraConfig) === null || _g === void 0 ? void 0 : _g.camera_name) {
                return 'frigate-jsmpeg';
            }
            return frigateCardConfigDefaults.cameras.live_provider;
        }
        return (((_h = this.cameraConfig) === null || _h === void 0 ? void 0 : _h.live_provider) || frigateCardConfigDefaults.cameras.live_provider);
    }
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        if (this.disabled || !this.hass || !this.liveConfig || !this.cameraConfig) {
            return;
        }
        // Set title and ariaLabel from the provided label property.
        this.title = this.label;
        this.ariaLabel = this.label;
        const provider = this._getResolvedProvider();
        return $ `
      ${provider == 'ha'
            ? $ ` <frigate-card-live-ha
            ${n(this._providerRef)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
          >
          </frigate-card-live-ha>`
            : provider == 'webrtc-card'
                ? $ `<frigate-card-live-webrtc-card
            ${n(this._providerRef)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .webRTCConfig=${this.liveConfig.webrtc_card}
          >
          </frigate-card-live-webrtc-card>`
                : $ ` <frigate-card-live-jsmpeg
            ${n(this._providerRef)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .jsmpegConfig=${this.liveConfig.jsmpeg}
          >
          </frigate-card-live-jsmpeg>`}
    `;
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveProvider.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveProvider.prototype, "cameraConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveProvider.prototype, "liveConfig", void 0);
__decorate([
    e$3({ attribute: true, type: Boolean })
], FrigateCardLiveProvider.prototype, "disabled", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveProvider.prototype, "label", void 0);
FrigateCardLiveProvider = __decorate([
    n$4('frigate-card-live-provider')
], FrigateCardLiveProvider);
let FrigateCardLiveFrigate = class FrigateCardLiveFrigate extends s$2 {
    constructor() {
        super(...arguments);
        this._playerRef = e();
    }
    /**
     * Play the video.
     */
    play() {
        var _a;
        (_a = this._playerRef.value) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * Pause the video.
     */
    pause() {
        var _a;
        (_a = this._playerRef.value) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * Mute the video.
     */
    mute() {
        var _a;
        (_a = this._playerRef.value) === null || _a === void 0 ? void 0 : _a.mute();
    }
    /**
     * Unmute the video.
     */
    unmute() {
        var _a;
        (_a = this._playerRef.value) === null || _a === void 0 ? void 0 : _a.unmute();
    }
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        var _a;
        if (!this.hass) {
            return;
        }
        if (!((_a = this.cameraConfig) === null || _a === void 0 ? void 0 : _a.camera_entity)) {
            return dispatchErrorMessageEvent(this, localize('error.no_live_camera'), this.cameraConfig);
        }
        const stateObj = this.hass.states[this.cameraConfig.camera_entity];
        if (!stateObj || stateObj.state === 'unavailable') {
            return dispatchErrorMessageEvent(this, localize('error.live_camera_unavailable'), this.cameraConfig);
        }
        return $ ` <frigate-card-ha-camera-stream
      ${n(this._playerRef)}
      .hass=${this.hass}
      .stateObj=${stateObj}
      .controls=${true}
      .muted=${true}
    >
    </frigate-card-ha-camera-stream>`;
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$6);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveFrigate.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveFrigate.prototype, "cameraConfig", void 0);
FrigateCardLiveFrigate = __decorate([
    n$4('frigate-card-live-ha')
], FrigateCardLiveFrigate);
// Create a wrapper for AlexxIT's WebRTC card
//  - https://github.com/AlexxIT/WebRTC
let FrigateCardLiveWebRTCCard = class FrigateCardLiveWebRTCCard extends s$2 {
    constructor() {
        super(...arguments);
        // A task to await the load of the WebRTC component.
        this._webrtcTask = new h(this, this._getWebRTCCardElement, () => [1]);
    }
    /**
     * Play the video.
     */
    play() {
        var _a;
        (_a = this._getPlayer()) === null || _a === void 0 ? void 0 : _a.play().catch(() => {
            // WebRTC appears to generate additional spurious load events, which may
            // result in loads after a play() call, which causes the browser to spam
            // the logs unless the promise rejection is handled here.
        });
    }
    /**
     * Pause the video.
     */
    pause() {
        var _a;
        (_a = this._getPlayer()) === null || _a === void 0 ? void 0 : _a.pause();
    }
    /**
     * Mute the video.
     */
    mute() {
        const player = this._getPlayer();
        if (player) {
            player.muted = true;
        }
    }
    /**
     * Unmute the video.
     */
    unmute() {
        const player = this._getPlayer();
        if (player) {
            player.muted = false;
        }
    }
    /**
     * Get the underlying video player.
     * @returns The player or `null` if not found.
     */
    _getPlayer() {
        var _a;
        return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#video');
    }
    async _getWebRTCCardElement() {
        await customElements.whenDefined('webrtc-camera');
        return customElements.get('webrtc-camera');
    }
    /**
     * Create the WebRTC element. May throw.
     */
    _createWebRTC() {
        var _a, _b, _c, _d;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const webrtcElement = this._webrtcTask.value;
        if (webrtcElement && this.hass) {
            const webrtc = new webrtcElement();
            const config = Object.assign({}, this.webRTCConfig);
            // If the live WebRTC configuration does not specify a URL/entity to use,
            // then take values from the camera configuration instead (if there are
            // any).
            if (!config.url) {
                config.url = (_b = (_a = this.cameraConfig) === null || _a === void 0 ? void 0 : _a.webrtc_card) === null || _b === void 0 ? void 0 : _b.url;
            }
            if (!config.entity) {
                config.entity = (_d = (_c = this.cameraConfig) === null || _c === void 0 ? void 0 : _c.webrtc_card) === null || _d === void 0 ? void 0 : _d.entity;
            }
            webrtc.setConfig(config);
            webrtc.hass = this.hass;
            return webrtc;
        }
        return undefined;
    }
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        const render = () => {
            let webrtcElement;
            try {
                webrtcElement = this._createWebRTC();
            }
            catch (e) {
                return dispatchErrorMessageEvent(this, e instanceof FrigateCardError
                    ? e.message
                    : localize('error.webrtc_card_reported_error') + ': ' + e.message);
            }
            return $ `${webrtcElement}`;
        };
        // Use a task to allow us to asynchronously wait for the WebRTC card to
        // load, but yet still have the card load be followed by the updated()
        // lifecycle callback (unlike just using `until`).
        return $ `${this._webrtcTask.render({
            initial: () => renderProgressIndicator(localize('error.webrtc_card_waiting')),
            pending: () => renderProgressIndicator(localize('error.webrtc_card_waiting')),
            error: (e) => dispatchErrorMessageEvent(this, e.message),
            complete: () => render(),
        })}`;
    }
    /**
     * Updated lifecycle callback.
     */
    updated() {
        // Extract the video component after it has been rendered and generate the
        // media load event.
        this.updateComplete.then(() => {
            const video = this._getPlayer();
            if (video) {
                const onloadedmetadata = video.onloadedmetadata;
                video.onloadedmetadata = (e) => {
                    if (onloadedmetadata) {
                        onloadedmetadata.call(video, e);
                    }
                    dispatchMediaShowEvent(this, video);
                };
            }
        });
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$4);
    }
};
__decorate([
    e$3({ attribute: false, hasChanged: contentsChanged })
], FrigateCardLiveWebRTCCard.prototype, "webRTCConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveWebRTCCard.prototype, "cameraConfig", void 0);
FrigateCardLiveWebRTCCard = __decorate([
    n$4('frigate-card-live-webrtc-card')
], FrigateCardLiveWebRTCCard);
let FrigateCardLiveJSMPEG = class FrigateCardLiveJSMPEG extends s$2 {
    /**
     * Play the video.
     */
    play() {
        var _a;
        (_a = this._jsmpegVideoPlayer) === null || _a === void 0 ? void 0 : _a.play();
    }
    /**
     * Pause the video.
     */
    pause() {
        var _a;
        (_a = this._jsmpegVideoPlayer) === null || _a === void 0 ? void 0 : _a.stop();
    }
    /**
     * Mute the video (included for completeness, JSMPEG live disables audio as
     * Frigate does not encode it).
     */
    mute() {
        var _a;
        const player = (_a = this._jsmpegVideoPlayer) === null || _a === void 0 ? void 0 : _a.player;
        if (player) {
            player.volume = 0;
        }
    }
    /**
     * Unmute the video (included for completeness, JSMPEG live disables audio as
     * Frigate does not encode it).
     */
    unmute() {
        var _a;
        const player = (_a = this._jsmpegVideoPlayer) === null || _a === void 0 ? void 0 : _a.player;
        if (player) {
            player.volume = 1;
        }
    }
    /**
     * Get a signed player URL.
     * @returns A URL or null.
     */
    async _getURL() {
        var _a, _b;
        if (!this.hass || !((_a = this.cameraConfig) === null || _a === void 0 ? void 0 : _a.client_id) || !((_b = this.cameraConfig) === null || _b === void 0 ? void 0 : _b.camera_name)) {
            return null;
        }
        let response;
        try {
            response = await homeAssistantSignPath(this.hass, `/api/frigate/${this.cameraConfig.client_id}` +
                `/jsmpeg/${this.cameraConfig.camera_name}`, URL_SIGN_EXPIRY_SECONDS);
        }
        catch (err) {
            console.warn(err);
            return null;
        }
        if (!response) {
            return null;
        }
        return response.replace(/^http/i, 'ws');
    }
    /**
     * Create a JSMPEG player.
     * @param url The URL for the player to connect to.
     * @returns A JSMPEG player.
     */
    async _createJSMPEGPlayer(url) {
        return new Promise((resolve) => {
            var _a;
            let videoDecoded = false;
            const player = new JSMpeg.VideoElement(this, url, {
                canvas: this._jsmpegCanvasElement,
            }, Object.assign(Object.assign({ 
                // The media carousel automatically pauses when the browser tab is
                // inactive, JSMPEG does not need to also do so independently.
                pauseWhenHidden: false, protocols: [], audio: false, videoBufferSize: 1024 * 1024 * 4 }, (_a = this.jsmpegConfig) === null || _a === void 0 ? void 0 : _a.options), { 
                // Don't allow the player to internally reconnect, as it may re-use a
                // URL with a (newly) invalid signature, e.g. during a Home Assistant
                // restart.
                reconnectInterval: 0, onVideoDecode: () => {
                    // This is the only callback that is called after the dimensions
                    // are available. It's called on every frame decode, so just
                    // ignore any subsequent calls.
                    if (!videoDecoded && this._jsmpegCanvasElement) {
                        videoDecoded = true;
                        dispatchMediaShowEvent(this, this._jsmpegCanvasElement);
                        resolve(player);
                    }
                } }));
        });
    }
    /**
     * Reset / destroy the player.
     */
    _resetPlayer() {
        if (this._refreshPlayerTimerID) {
            window.clearTimeout(this._refreshPlayerTimerID);
            this._refreshPlayerTimerID = undefined;
        }
        if (this._jsmpegVideoPlayer) {
            try {
                this._jsmpegVideoPlayer.destroy();
            }
            catch (err) {
                // Pass.
            }
            this._jsmpegVideoPlayer = undefined;
        }
        if (this._jsmpegCanvasElement) {
            this._jsmpegCanvasElement.remove();
            this._jsmpegCanvasElement = undefined;
        }
    }
    /**
     * Component connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        if (this.isConnected) {
            this.requestUpdate();
        }
    }
    /**
     * Component disconnected callback.
     */
    disconnectedCallback() {
        if (!this.isConnected) {
            this._resetPlayer();
        }
        super.disconnectedCallback();
    }
    /**
     * Refresh the JSMPEG player.
     */
    async _refreshPlayer() {
        var _a;
        this._resetPlayer();
        this._jsmpegCanvasElement = document.createElement('canvas');
        this._jsmpegCanvasElement.className = 'media';
        if (!((_a = this.cameraConfig) === null || _a === void 0 ? void 0 : _a.camera_name)) {
            return dispatchErrorMessageEvent(this, localize('error.no_camera_name') + `: ${JSON.stringify(this.cameraConfig)}`);
        }
        const url = await this._getURL();
        if (url) {
            this._jsmpegVideoPlayer = await this._createJSMPEGPlayer(url);
            this._refreshPlayerTimerID = window.setTimeout(() => {
                this.requestUpdate();
            }, (URL_SIGN_EXPIRY_SECONDS - URL_SIGN_REFRESH_THRESHOLD_SECONDS) * 1000);
        }
        else {
            dispatchErrorMessageEvent(this, localize('error.jsmpeg_no_sign'));
        }
    }
    /**
     * Master render method.
     */
    render() {
        const _render = async () => {
            await this._refreshPlayer();
            if (!this._jsmpegVideoPlayer || !this._jsmpegCanvasElement) {
                return dispatchErrorMessageEvent(this, localize('error.jsmpeg_no_player'));
            }
            return $ `${this._jsmpegCanvasElement}`;
        };
        return $ `${c(_render(), renderProgressIndicator())}`;
    }
    /**
     * Get styles.
     */
    static get styles() {
        return o$7(css$5);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardLiveJSMPEG.prototype, "cameraConfig", void 0);
__decorate([
    e$3({ attribute: false, hasChanged: contentsChanged })
], FrigateCardLiveJSMPEG.prototype, "jsmpegConfig", void 0);
FrigateCardLiveJSMPEG = __decorate([
    n$4('frigate-card-live-jsmpeg')
], FrigateCardLiveJSMPEG);

class QuickLRU extends Map {
	constructor(options = {}) {
		super();

		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		if (typeof options.maxAge === 'number' && options.maxAge === 0) {
			throw new TypeError('`maxAge` must be a number greater than 0');
		}

		// TODO: Use private class fields when ESLint supports them.
		this.maxSize = options.maxSize;
		this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
		this.onEviction = options.onEviction;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}

	// TODO: Use private class methods when targeting Node.js 16.
	_emitEvictions(cache) {
		if (typeof this.onEviction !== 'function') {
			return;
		}

		for (const [key, item] of cache) {
			this.onEviction(key, item.value);
		}
	}

	_deleteIfExpired(key, item) {
		if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
			if (typeof this.onEviction === 'function') {
				this.onEviction(key, item.value);
			}

			return this.delete(key);
		}

		return false;
	}

	_getOrDeleteIfExpired(key, item) {
		const deleted = this._deleteIfExpired(key, item);
		if (deleted === false) {
			return item.value;
		}
	}

	_getItemValue(key, item) {
		return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
	}

	_peek(key, cache) {
		const item = cache.get(key);

		return this._getItemValue(key, item);
	}

	_set(key, value) {
		this.cache.set(key, value);
		this._size++;

		if (this._size >= this.maxSize) {
			this._size = 0;
			this._emitEvictions(this.oldCache);
			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}

	_moveToRecent(key, item) {
		this.oldCache.delete(key);
		this._set(key, item);
	}

	* _entriesAscending() {
		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield item;
				}
			}
		}

		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield item;
			}
		}
	}

	get(key) {
		if (this.cache.has(key)) {
			const item = this.cache.get(key);

			return this._getItemValue(key, item);
		}

		if (this.oldCache.has(key)) {
			const item = this.oldCache.get(key);
			if (this._deleteIfExpired(key, item) === false) {
				this._moveToRecent(key, item);
				return item.value;
			}
		}
	}

	set(key, value, {maxAge = this.maxAge} = {}) {
		const expiry =
			typeof maxAge === 'number' && maxAge !== Number.POSITIVE_INFINITY ?
				Date.now() + maxAge :
				undefined;
		if (this.cache.has(key)) {
			this.cache.set(key, {
				value,
				expiry
			});
		} else {
			this._set(key, {value, expiry});
		}
	}

	has(key) {
		if (this.cache.has(key)) {
			return !this._deleteIfExpired(key, this.cache.get(key));
		}

		if (this.oldCache.has(key)) {
			return !this._deleteIfExpired(key, this.oldCache.get(key));
		}

		return false;
	}

	peek(key) {
		if (this.cache.has(key)) {
			return this._peek(key, this.cache);
		}

		if (this.oldCache.has(key)) {
			return this._peek(key, this.oldCache);
		}
	}

	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}

		return this.oldCache.delete(key) || deleted;
	}

	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}

	resize(newSize) {
		if (!(newSize && newSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}

		const items = [...this._entriesAscending()];
		const removeCount = items.length - newSize;
		if (removeCount < 0) {
			this.cache = new Map(items);
			this.oldCache = new Map();
			this._size = items.length;
		} else {
			if (removeCount > 0) {
				this._emitEvictions(items.slice(0, removeCount));
			}

			this.oldCache = new Map(items.slice(removeCount));
			this.cache = new Map();
			this._size = 0;
		}

		this.maxSize = newSize;
	}

	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}

	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}

	* [Symbol.iterator]() {
		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}

		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}

	* entriesDescending() {
		let items = [...this.cache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}

		items = [...this.oldCache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}

	* entriesAscending() {
		for (const [key, value] of this._entriesAscending()) {
			yield [key, value.value];
		}
	}

	get size() {
		if (!this._size) {
			return this.oldCache.size;
		}

		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}

		return Math.min(this._size + oldCacheSize, this.maxSize);
	}

	entries() {
		return this.entriesAscending();
	}

	forEach(callbackFunction, thisArgument = this) {
		for (const [key, value] of this.entriesAscending()) {
			callbackFunction.call(thisArgument, value, key, this);
		}
	}

	[Symbol.toStringTag]() {
		return JSON.stringify([...this.entriesAscending()]);
	}
}

// It's important the cache size be at least as large as the largest likely
// media query or media items will from a given query will be evicted for other
// items in the same query (which would result in only partial results being
// returned to the user).
// Note: Each entry is about 400 bytes. 
const RESOLVED_MEDIA_CACHE_SIZE = 1000;
class ResolvedMediaCache {
    constructor() {
        this._cache = new QuickLRU({ maxSize: RESOLVED_MEDIA_CACHE_SIZE });
    }
    has(id) {
        return this._cache.has(id);
    }
    get(id) {
        return this._cache.get(id);
    }
    set(id, resolvedMedia) {
        this._cache.set(id, resolvedMedia);
    }
}
class ResolvedMediaUtil {
    static async resolveMedia(hass, mediaSource, cache) {
        if (!mediaSource) {
            return null;
        }
        const cachedValue = cache ? cache.get(mediaSource.media_content_id) : undefined;
        if (cachedValue) {
            return cachedValue;
        }
        const request = {
            type: 'media_source/resolve_media',
            media_content_id: mediaSource.media_content_id,
        };
        const resolvedMedia = await homeAssistantWSRequest(hass, resolvedMediaSchema, request);
        if (cache && resolvedMedia) {
            cache.set(mediaSource.media_content_id, resolvedMedia);
        }
        return resolvedMedia;
    }
}

var css$3 = ":host {\n  height: 100%;\n  width: 100%;\n  display: block;\n}";

var css$2 = ":host {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  height: 100%;\n  width: 100%;\n}\n\nfrigate-card-viewer-carousel {\n  flex: 1;\n  min-height: 0;\n}\n\nfrigate-card-thumbnail-carousel {\n  flex: 0 0 var(--frigate-card-carousel-thumbnail-size);\n}";

let FrigateCardViewer = class FrigateCardViewer extends s$2 {
    /**
     * Master render method.
     * @returns A rendered template.
     */
    render() {
        if (!this.hass || !this.view || !this.cameraConfig) {
            return;
        }
        const browseMediaQueryParameters = BrowseMediaUtil.getBrowseMediaQueryParametersOrDispatchError(this, this.view, this.cameraConfig);
        if (!browseMediaQueryParameters) {
            return;
        }
        if (!this.view.target) {
            BrowseMediaUtil.fetchLatestMediaAndDispatchViewChange(this, this.hass, this.view, browseMediaQueryParameters);
            return renderProgressIndicator();
        }
        return $ ` <frigate-card-viewer-core
      .view=${this.view}
      .viewerConfig=${this.viewerConfig}
      .resolvedMediaCache=${this.resolvedMediaCache}
      .hass=${this.hass}
      .browseMediaQueryParameters=${browseMediaQueryParameters}
    >
    </frigate-card-viewer-core>`;
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return o$7(css$3);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardViewer.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewer.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewer.prototype, "viewerConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewer.prototype, "cameraConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewer.prototype, "resolvedMediaCache", void 0);
FrigateCardViewer = __decorate([
    n$4('frigate-card-viewer')
], FrigateCardViewer);
let FrigateCardViewerCore = class FrigateCardViewerCore extends s$2 {
    constructor() {
        super(...arguments);
        this._viewerCarouselRef = e();
        this._thumbnailCarouselRef = e();
    }
    _syncThumbnailCarousel() {
        var _a, _b;
        const mediaSelected = (_a = this._viewerCarouselRef.value) === null || _a === void 0 ? void 0 : _a.carouselSelected();
        if (mediaSelected !== undefined) {
            (_b = this._thumbnailCarouselRef.value) === null || _b === void 0 ? void 0 : _b.carouselScrollTo(mediaSelected);
        }
    }
    _renderThumbnails() {
        if (!this.view || !this.viewerConfig) {
            return $ ``;
        }
        return $ ` <frigate-card-thumbnail-carousel
      ${n(this._thumbnailCarouselRef)}
      .target=${this.view.target}
      .config=${this.viewerConfig.controls.thumbnails}
      @frigate-card:carousel:tap=${(ev) => {
            var _a;
            (_a = this._viewerCarouselRef.value) === null || _a === void 0 ? void 0 : _a.carouselScrollTo(ev.detail.slideIndex);
        }}
      @frigate-card:carousel:init=${this._syncThumbnailCarousel.bind(this)}
    >
    </frigate-card-thumbnail-carousel>`;
    }
    render() {
        if (!this.view || !this.viewerConfig) {
            return $ ``;
        }
        return $ ` ${this.viewerConfig &&
            this.viewerConfig.controls.thumbnails.mode === 'above'
            ? this._renderThumbnails()
            : ''}
      <frigate-card-viewer-carousel
        ${n(this._viewerCarouselRef)}
        .hass=${this.hass}
        .view=${this.view}
        .viewerConfig=${this.viewerConfig}
        .browseMediaQueryParameters=${this.browseMediaQueryParameters}
        .resolvedMediaCache=${this.resolvedMediaCache}
        @frigate-card:carousel:select=${this._syncThumbnailCarousel.bind(this)}
      >
      </frigate-card-viewer-carousel>
      ${this.viewerConfig && this.viewerConfig.controls.thumbnails.mode === 'below'
            ? this._renderThumbnails()
            : ''}`;
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return o$7(css$2);
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCore.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCore.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false, hasChanged: contentsChanged })
], FrigateCardViewerCore.prototype, "viewerConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCore.prototype, "browseMediaQueryParameters", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCore.prototype, "resolvedMediaCache", void 0);
FrigateCardViewerCore = __decorate([
    n$4('frigate-card-viewer-core')
], FrigateCardViewerCore);
let FrigateCardViewerCarousel = class FrigateCardViewerCarousel extends FrigateCardMediaCarousel {
    constructor() {
        super(...arguments);
        // Mapping of slide # to BrowseMediaSource child #.
        // (Folders are not media items that can be rendered).
        this._slideToChild = {};
        // A task to resolve target media if lazy loading is disabled.
        this._mediaResolutionTask = new h(this, async ([target]) => {
            var _a;
            for (let i = 0; !((_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.lazy_load) &&
                this.hass &&
                target &&
                target.children &&
                i < (target.children || []).length; ++i) {
                if (BrowseMediaUtil.isTrueMedia(target.children[i])) {
                    await ResolvedMediaUtil.resolveMedia(this.hass, target.children[i], this.resolvedMediaCache);
                }
            }
        }, () => { var _a; return [(_a = this.view) === null || _a === void 0 ? void 0 : _a.target]; });
    }
    /**
     * The updated lifecycle callback for this element.
     * @param changedProperties The properties that were changed in this render.
     */
    updated(changedProperties) {
        var _a, _b, _c;
        if (this._carousel && changedProperties.has('viewerConfig')) {
            this._destroyCarousel();
        }
        if (this._carousel && changedProperties.has('view')) {
            const oldView = changedProperties.get('view');
            if (oldView) {
                if (oldView.target != ((_a = this.view) === null || _a === void 0 ? void 0 : _a.target)) {
                    // If the media target is different entirely, reset the carousel.
                    this._destroyCarousel();
                }
                else if (((_b = this.view) === null || _b === void 0 ? void 0 : _b.childIndex) != oldView.childIndex) {
                    const slide = this._getSlideForChild((_c = this.view) === null || _c === void 0 ? void 0 : _c.childIndex);
                    if (slide !== undefined && slide !== this.carouselSelected()) {
                        // If the media target is the same as already loaded, but isn't of
                        // the selected slide, scroll to that slide.
                        this.carouselScrollTo(slide);
                    }
                }
            }
        }
        super.updated(changedProperties);
    }
    /**
     * Play the media on the selected slide.
     */
    _autoPlayHandler() {
        var _a;
        if ((_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.auto_play) {
            super._autoPlayHandler();
        }
    }
    /**
     * Unmute the media on the selected slide.
     */
    _autoUnmuteHandler() {
        var _a;
        if ((_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.auto_unmute) {
            super._autoUnmuteHandler();
        }
    }
    _destroyCarousel() {
        super._destroyCarousel();
        // Notes on instance variables:
        // * this._slideToChild: This is set as part of each render and does not
        //   need to be destroyed here.
    }
    _getSlideForChild(childIndex) {
        if (childIndex === undefined) {
            return undefined;
        }
        const slideIndex = Object.keys(this._slideToChild).find((key) => this._slideToChild[key] === childIndex);
        return slideIndex !== undefined ? Number(slideIndex) : undefined;
    }
    /**
     * Get the transition effect to use.
     * @returns An TransitionEffect object.
     */
    _getTransitionEffect() {
        var _a;
        return (_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.transition_effect;
    }
    /**
     * Get the Embla options to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getOptions() {
        var _a, _b;
        return {
            // Start the carousel on the selected child number.
            startIndex: this._getSlideForChild((_a = this.view) === null || _a === void 0 ? void 0 : _a.childIndex),
            draggable: (_b = this.viewerConfig) === null || _b === void 0 ? void 0 : _b.draggable,
        };
    }
    /**
     * Get the Embla plugins to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getPlugins() {
        var _a, _b, _c, _d;
        return [
            Lazyload({
                lazyloadCallback: ((_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.lazy_load)
                    ? this._lazyloadSlide.bind(this)
                    : undefined,
            }),
            // Don't need autoplay/pause for snapshots.
            ...(((_b = this.view) === null || _b === void 0 ? void 0 : _b.is('clip'))
                ? [
                    AutoMediaPlugin({
                        playerSelector: 'frigate-card-ha-hls-player',
                        autoPlayWhenVisible: !!((_c = this.viewerConfig) === null || _c === void 0 ? void 0 : _c.auto_play),
                        autoUnmuteWhenVisible: !!((_d = this.viewerConfig) === null || _d === void 0 ? void 0 : _d.auto_unmute),
                    }),
                ]
                : []),
        ];
    }
    /**
     * Get the previous and next true media items from the current view.
     * @returns A BrowseMediaNeighbors with indices and objects of true media
     * neighbors.
     */
    _getMediaNeighbors() {
        if (!this.view ||
            !this.view.target ||
            !this.view.target.children ||
            this.view.childIndex === undefined) {
            return null;
        }
        // Work backwards from the index to get the previous real media.
        let prevIndex = null;
        for (let i = this.view.childIndex - 1; i >= 0; i--) {
            const media = this.view.target.children[i];
            if (media && BrowseMediaUtil.isTrueMedia(media)) {
                prevIndex = i;
                break;
            }
        }
        // Work forwards from the index to get the next real media.
        let nextIndex = null;
        for (let i = this.view.childIndex + 1; i < this.view.target.children.length; i++) {
            const media = this.view.target.children[i];
            if (media && BrowseMediaUtil.isTrueMedia(media)) {
                nextIndex = i;
                break;
            }
        }
        return {
            previousIndex: prevIndex,
            previous: prevIndex != null ? this.view.target.children[prevIndex] : null,
            nextIndex: nextIndex,
            next: nextIndex != null ? this.view.target.children[nextIndex] : null,
        };
    }
    /**
     * Get a clip view that matches a given snapshot. Includes clips within the
     * same range as the current view.
     * @param snapshot The snapshot to find a matching clip for.
     * @returns The view that would show the matching clip.
     */
    async _findRelatedClipView(snapshot) {
        if (!this.hass ||
            !this.view ||
            !this.view.target ||
            !this.view.target.children ||
            !this.view.target.children.length ||
            !this.browseMediaQueryParameters) {
            return null;
        }
        const snapshotStartTime = BrowseMediaUtil.extractEventStartTime(snapshot);
        if (!snapshotStartTime) {
            return null;
        }
        // Heuristic: At this point, the user has a particular snapshot that they
        // are interested in and want to see a related clip, yet the viewer code
        // does not know the exact search criteria that led to that snapshot (e.g.
        // it could be a 10-deep folder in the gallery). To give the user to ability
        // to 'navigate' in the clips view once they change into that mode, this
        // heuristic finds the earliest and latest snapshot that the user is
        // currently viewing and mirrors that range into the clips view. Then,
        // within the results see if there's a clip that matches the same time as
        // the snapshot.
        let earliest = null;
        let latest = null;
        for (let i = 0; i < this.view.target.children.length; i++) {
            const child = this.view.target.children[i];
            if (!BrowseMediaUtil.isTrueMedia(child)) {
                continue;
            }
            const startTime = BrowseMediaUtil.extractEventStartTime(child);
            if (startTime && (earliest === null || startTime < earliest)) {
                earliest = startTime;
            }
            if (startTime && (latest === null || startTime > latest)) {
                latest = startTime;
            }
        }
        if (!earliest || !latest) {
            return null;
        }
        let clips;
        try {
            clips = await BrowseMediaUtil.browseMediaQuery(this.hass, Object.assign(Object.assign({}, this.browseMediaQueryParameters), { mediaType: 'clips', before: latest, after: earliest }));
        }
        catch (e) {
            // This is best effort.
            return null;
        }
        if (!clips || !clips.children || !clips.children.length) {
            return null;
        }
        for (let i = 0; i < clips.children.length; i++) {
            const child = clips.children[i];
            if (!BrowseMediaUtil.isTrueMedia(child)) {
                continue;
            }
            const clipStartTime = BrowseMediaUtil.extractEventStartTime(child);
            if (clipStartTime && clipStartTime === snapshotStartTime) {
                return new View({
                    view: 'clip',
                    camera: this.view.camera,
                    target: clips,
                    childIndex: i,
                    previous: this.view,
                });
            }
        }
        return null;
    }
    /**
     * Handle the user selecting a new slide in the carousel.
     */
    _selectSlideSetViewHandler() {
        if (!this._carousel || !this.view) {
            return;
        }
        // Update the childIndex in the view.
        const slidesInView = this._carousel.slidesInView(true);
        if (slidesInView.length) {
            const childIndex = this._slideToChild[slidesInView[0]];
            if (childIndex !== undefined) {
                this.view
                    .evolve({
                    childIndex: childIndex,
                    previous: this.view,
                })
                    .dispatchChangeEvent(this);
            }
        }
    }
    /**
     * Lazy load a slide.
     * @param index The index of the slide to lazy load.
     * @param slide The slide to lazy load.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _lazyloadSlide(index, slide) {
        const childIndex = this._slideToChild[index];
        if (childIndex == undefined ||
            !this.hass ||
            !this.view ||
            !this.view.target ||
            !this.view.target.children ||
            !BrowseMediaUtil.isTrueMedia(this.view.target.children[childIndex])) {
            return;
        }
        ResolvedMediaUtil.resolveMedia(this.hass, this.view.target.children[childIndex], this.resolvedMediaCache).then((resolvedMedia) => {
            if (!resolvedMedia) {
                return;
            }
            // Snapshots.
            const img = slide.querySelector('img');
            // Frigate >= 0.9.0+ clips.
            const hls_player = slide.querySelector('frigate-card-ha-hls-player');
            if (img) {
                img.src = resolvedMedia.url;
            }
            else if (hls_player) {
                hls_player.url = resolvedMedia.url;
            }
        });
    }
    /**
     * Handle updating of the next/previous controls when the carousel is moved.
     */
    _selectSlideNextPreviousHandler() {
        const updateNextPreviousControl = (control, direction) => {
            const neighbors = this._getMediaNeighbors();
            const [prev, next] = [neighbors === null || neighbors === void 0 ? void 0 : neighbors.previous, neighbors === null || neighbors === void 0 ? void 0 : neighbors.next];
            const target = direction == 'previous' ? prev : next;
            control.disabled = target == null;
            control.title = target && target.title ? target.title : '';
            control.thumbnail = target && target.thumbnail ? target.thumbnail : undefined;
        };
        if (this._previousControlRef.value) {
            updateNextPreviousControl(this._previousControlRef.value, 'previous');
        }
        if (this._nextControlRef.value) {
            updateNextPreviousControl(this._nextControlRef.value, 'next');
        }
    }
    /**
     * Get slides to include in the render.
     * @returns The slides to include in the render and an index keyed by slide
     * number that maps to child number.
     */
    _getSlides() {
        var _a;
        if (!this.view ||
            !this.view.target ||
            !this.view.target.children ||
            !this.view.target.children.length) {
            return [[], {}];
        }
        const slideToChild = {};
        const slides = [];
        for (let i = 0; i < ((_a = this.view.target.children) === null || _a === void 0 ? void 0 : _a.length); ++i) {
            const slide = this._renderMediaItem(this.view.target.children[i], slides.length);
            if (slide) {
                slideToChild[slides.length] = i;
                slides.push(slide);
            }
        }
        return [slides, slideToChild];
    }
    /**
     * Determine if all the media in the carousel are resolved.
     */
    _isMediaFullyResolved() {
        var _a, _b, _c;
        for (const child of ((_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.children) || []) {
            if (!((_c = this.resolvedMediaCache) === null || _c === void 0 ? void 0 : _c.has(child.media_content_id))) {
                return false;
            }
        }
        return true;
    }
    /**
     * Render the element, resolving the media first if necessary.
     */
    render() {
        var _a;
        this._slideToChild = {};
        // If lazy loading is not enabled, wait for the media resolver task to
        // complete and show a progress indictator until this.
        if (!((_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.lazy_load) && !this._isMediaFullyResolved()) {
            return $ `${this._mediaResolutionTask.render({
                initial: () => renderProgressIndicator(),
                pending: () => renderProgressIndicator(),
                error: (e) => dispatchErrorMessageEvent(this, e.message),
                complete: () => this._render(),
            })}`;
        }
        return this._render();
    }
    /**
     * Render the element.
     * @returns A template to display to the user.
     */
    _render() {
        var _a, _b, _c, _d;
        const [slides, slideToChild] = this._getSlides();
        this._slideToChild = slideToChild;
        if (!slides) {
            return;
        }
        const neighbors = this._getMediaNeighbors();
        const [prev, next] = [neighbors === null || neighbors === void 0 ? void 0 : neighbors.previous, neighbors === null || neighbors === void 0 ? void 0 : neighbors.next];
        return $ `<div class="embla">
        <frigate-card-next-previous-control
          ${n(this._previousControlRef)}
          .direction=${'previous'}
          .controlConfig=${(_a = this.viewerConfig) === null || _a === void 0 ? void 0 : _a.controls.next_previous}
          .thumbnail=${prev && prev.thumbnail ? prev.thumbnail : undefined}
          .label=${prev ? prev.title : ''}
          ?disabled=${!prev}
          @click=${(ev) => {
            this._nextPreviousHandler('previous');
            stopEventFromActivatingCardWideActions(ev);
        }}
        ></frigate-card-next-previous-control>
        <div class="embla__viewport">
          <div class="embla__container">${slides}</div>
        </div>
        <frigate-card-next-previous-control
          ${n(this._nextControlRef)}
          .direction=${'next'}
          .controlConfig=${(_b = this.viewerConfig) === null || _b === void 0 ? void 0 : _b.controls.next_previous}
          .thumbnail=${next && next.thumbnail ? next.thumbnail : undefined}
          .label=${next ? next.title : ''}
          ?disabled=${!next}
          @click=${(ev) => {
            this._nextPreviousHandler('next');
            stopEventFromActivatingCardWideActions(ev);
        }}
        ></frigate-card-next-previous-control>
      </div>
      ${((_c = this.view) === null || _c === void 0 ? void 0 : _c.media)
            ? $ ` <frigate-card-title-control
            ${n(this._titleControlRef)}
            .config=${(_d = this.viewerConfig) === null || _d === void 0 ? void 0 : _d.controls.title}
            .text="${this.view.media.title}"
            .fitInto=${this}
          >
          </frigate-card-title-control>`
            : ``} `;
    }
    _renderMediaItem(mediaToRender, slideIndex) {
        var _a;
        // Skip folders as they cannot be rendered by this viewer.
        if (!this.view ||
            !this.viewerConfig ||
            !BrowseMediaUtil.isTrueMedia(mediaToRender)) {
            return;
        }
        const lazyLoad = this.viewerConfig.lazy_load;
        const resolvedMedia = (_a = this.resolvedMediaCache) === null || _a === void 0 ? void 0 : _a.get(mediaToRender.media_content_id);
        if (!resolvedMedia && !lazyLoad) {
            return;
        }
        return $ `
      <div class="embla__slide">
        ${this.view.isClipRelatedView()
            ? $ `<frigate-card-ha-hls-player
              allow-exoplayer
              aria-label="${mediaToRender.title}"
              ?autoplay=${false}
              controls
              muted
              playsinline
              title="${mediaToRender.title}"
              url=${l(lazyLoad ? undefined : resolvedMedia === null || resolvedMedia === void 0 ? void 0 : resolvedMedia.url)}
              .hass=${this.hass}
              @frigate-card:media-show=${(e) => this._mediaShowEventHandler(slideIndex, e)}
            >
            </frigate-card-ha-hls-player>`
            : $ `<img
              aria-label="${mediaToRender.title}"
              src=${l(lazyLoad ? IMG_EMPTY : resolvedMedia === null || resolvedMedia === void 0 ? void 0 : resolvedMedia.url)}
              title="${mediaToRender.title}"
              @click=${() => {
                var _a;
                if ((_a = this._carousel) === null || _a === void 0 ? void 0 : _a.clickAllowed()) {
                    this._findRelatedClipView(mediaToRender).then((view) => {
                        if (view) {
                            view.dispatchChangeEvent(this);
                        }
                    });
                }
            }}
              @load="${(e) => {
                var _a;
                if (
                // This handler will be called on the empty image (including
                // an updated empty image that is the same dimensions large as
                // the previously fully loaded image -- see the note on dummy
                // images in media-carousel.ts). Here we need to only call the
                // media load handler on a 'real' load.
                !lazyLoad ||
                    ((_a = this._plugins['Lazyload']) === null || _a === void 0 ? void 0 : _a.hasLazyloaded(slideIndex))) {
                    this._mediaLoadedHandler(slideIndex, createMediaShowInfo(e));
                }
            }}"
            />`}
      </div>
    `;
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCarousel.prototype, "hass", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCarousel.prototype, "view", void 0);
__decorate([
    e$3({ attribute: false, hasChanged: contentsChanged })
], FrigateCardViewerCarousel.prototype, "viewerConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCarousel.prototype, "browseMediaQueryParameters", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardViewerCarousel.prototype, "resolvedMediaCache", void 0);
FrigateCardViewerCarousel = __decorate([
    n$4('frigate-card-viewer-carousel')
], FrigateCardViewerCarousel);

var css$1 = ":host {\n  --frigate-card-carousel-thumbnail-size: 100px;\n  --frigate-card-carousel-thumbnail-opacity: 0.6;\n}\n\n.embla__slide {\n  flex: 0 0 var(--frigate-card-carousel-thumbnail-size);\n  opacity: var(--frigate-card-carousel-thumbnail-opacity);\n  transition: opacity 0.6s ease, transform 0.2s linear;\n}\n\n.embla__slide.slide-selected {\n  opacity: 1;\n}\n\n.embla__slide:hover {\n  transform: scale(1.04);\n}\n\n.embla__slide img {\n  border-radius: 5px;\n  object-fit: cover;\n  max-width: var(--frigate-card-carousel-thumbnail-size);\n  max-height: var(--frigate-card-carousel-thumbnail-size);\n}";

let FrigateCardThumbnailCarousel = class FrigateCardThumbnailCarousel extends FrigateCardCarousel {
    set config(config) {
        if (config) {
            if (config && config.size !== undefined && config.size !== null) {
                this.style.setProperty('--frigate-card-carousel-thumbnail-size', config.size);
            }
            this._config = config;
        }
    }
    set highlightSelected(value) {
        this.style.setProperty('--frigate-card-carousel-thumbnail-opacity', value ? '0.6' : '1.0');
    }
    /**
     * Get the Embla options to use.
     * @returns An EmblaOptionsType object or undefined for no options.
     */
    _getOptions() {
        return {
            containScroll: 'keepSnaps',
            dragFree: true,
        };
    }
    /**
     * Scroll to a particular slide.
     * @param index Slide number.
     */
    carouselScrollTo(index) {
        if (!this._carousel) {
            return;
        }
        if (this._tapSelected !== undefined) {
            this._carousel.slideNodes()[this._tapSelected].classList.remove('slide-selected');
        }
        super.carouselScrollTo(index);
        this._carousel.slideNodes()[index].classList.add('slide-selected');
        this._tapSelected = index;
    }
    /**
     * Get slides to include in the render.
     * @returns The slides to include in the render.
     */
    _getSlides() {
        if (!this.target || !this.target.children || !this.target.children.length) {
            return [];
        }
        const slides = [];
        for (let i = 0; i < this.target.children.length; ++i) {
            const thumbnail = this._renderThumbnail(this.target, i, slides.length);
            if (thumbnail) {
                slides.push(thumbnail);
            }
        }
        return slides;
    }
    /**
     * Render a given thumbnail.
     * @param mediaToRender The media item to render.
     * @returns A template or void if the item could not be rendered.
     */
    _renderThumbnail(parent, childIndex, slideIndex) {
        if (!parent.children || !parent.children.length) {
            return;
        }
        const mediaToRender = parent.children[childIndex];
        if (!BrowseMediaUtil.isTrueMedia(mediaToRender) || !mediaToRender.thumbnail) {
            return;
        }
        return $ `<div
      class="embla__slide"
      @click=${(ev) => {
            if (this._carousel && this._carousel.clickAllowed()) {
                dispatchFrigateCardEvent(this, 'carousel:tap', {
                    slideIndex: slideIndex,
                    target: parent,
                    childIndex: childIndex,
                });
            }
            stopEventFromActivatingCardWideActions(ev);
        }}
    >
      <img
        aria-label="${mediaToRender.title}"
        src="${mediaToRender.thumbnail}"
        title="${mediaToRender.title}"
      />
    </div>`;
    }
    /**
     * Render the element.
     * @returns A template to display to the user.
     */
    render() {
        const slides = this._getSlides();
        if (!slides || !this._config || this._config.mode == 'none') {
            return;
        }
        return $ ` <div class="embla">
      <div class="embla__viewport">
        <div class="embla__container">${slides}</div>
      </div>
    </div>`;
    }
    /**
     * Get element styles.
     */
    static get styles() {
        return [super.styles, o$7(css$1)];
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCardThumbnailCarousel.prototype, "target", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCardThumbnailCarousel.prototype, "config", null);
__decorate([
    e$3({ attribute: false })
], FrigateCardThumbnailCarousel.prototype, "highlightSelected", null);
FrigateCardThumbnailCarousel = __decorate([
    n$4('frigate-card-thumbnail-carousel')
], FrigateCardThumbnailCarousel);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
customElements.whenDefined('ha-camera-stream').then(() => {
    // ========================================================================================
    // From:
    // - https://github.com/home-assistant/frontend/blob/dev/src/data/camera.ts
    // - https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_state_name.ts
    // - https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_object_id.ts
    // ========================================================================================
    const computeMJPEGStreamUrl = (entity) => `/api/camera_proxy_stream/${entity.entity_id}?token=${entity.attributes.access_token}`;
    const computeObjectId = (entityId) => entityId.substr(entityId.indexOf('.') + 1);
    const computeStateName = (stateObj) => stateObj.attributes.friendly_name === undefined
        ? computeObjectId(stateObj.entity_id).replace(/_/g, ' ')
        : stateObj.attributes.friendly_name || '';
    const STREAM_TYPE_HLS = 'hls';
    const STREAM_TYPE_WEB_RTC = 'web_rtc';
    let FrigateCardHaCameraStream = 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class FrigateCardHaCameraStream extends customElements.get('ha-camera-stream') {
        constructor() {
            super(...arguments);
            this._playerRef = e();
        }
        // ========================================================================================
        // Minor modifications from:
        // - https://github.com/home-assistant/frontend/blob/dev/src/components/ha-camera-stream.ts
        // ========================================================================================
        /**
         * Play the video.
         */
        play() {
            var _a;
            (_a = this._playerRef.value) === null || _a === void 0 ? void 0 : _a.play();
        }
        /**
         * Pause the video.
         */
        pause() {
            var _a;
            (_a = this._playerRef.value) === null || _a === void 0 ? void 0 : _a.pause();
        }
        /**
         * Mute the video.
         */
        mute() {
            this.muted = true;
        }
        /**
         * Unmute the video.
         */
        unmute() {
            this.muted = false;
        }
        /**
         * Master render method.
         * @returns A rendered template.
         */
        render() {
            if (!this.stateObj) {
                return $ ``;
            }
            if (this._shouldRenderMJPEG) {
                return $ `
          <img
            @load=${(e) => {
                    dispatchMediaShowEvent(this, e);
                }}
            .src=${typeof this._connected == 'undefined' || this._connected
                    ? computeMJPEGStreamUrl(this.stateObj)
                    : ''}
            .alt=${`Preview of the ${computeStateName(this.stateObj)} camera.`}
          />
        `;
            }
            if (this.stateObj.attributes.frontend_stream_type === STREAM_TYPE_HLS) {
                return this._url
                    ? $ ` <frigate-card-ha-hls-player
              ${n(this._playerRef)}
              ?autoplay=${false}
              playsinline
              .allowExoPlayer=${this.allowExoPlayer}
              .muted=${this.muted}
              .controls=${this.controls}
              .hass=${this.hass}
              .url=${this._url}
            ></frigate-card-ha-hls-player>`
                    : $ ``;
            }
            if (this.stateObj.attributes.frontend_stream_type === STREAM_TYPE_WEB_RTC) {
                return $ `<frigate-card-ha-web-rtc-player
          ${n(this._playerRef)}
          ?autoplay=${false}
          playsinline
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
        ></frigate-card-ha-web-rtc-player>`;
            }
        }
        static get styles() {
            return [
                super.styles,
                r$5 `
          :host {
            width: 100%;
            height: 100%;
          }
        `,
            ];
        }
    };
    FrigateCardHaCameraStream = __decorate([
        n$4('frigate-card-ha-camera-stream')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ], FrigateCardHaCameraStream);
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
customElements.whenDefined('ha-hls-player').then(() => {
    let FrigateCardHaHlsPlayer = 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class FrigateCardHaHlsPlayer extends customElements.get('ha-hls-player') {
        constructor() {
            super(...arguments);
            this._videoRef = e();
        }
        /**
         * Play the video.
         */
        play() {
            var _a;
            (_a = this._videoRef.value) === null || _a === void 0 ? void 0 : _a.play();
        }
        /**
         * Pause the video.
         */
        pause() {
            var _a;
            (_a = this._videoRef.value) === null || _a === void 0 ? void 0 : _a.pause();
        }
        /**
         * Mute the video.
         */
        mute() {
            this.muted = true;
        }
        /**
         * Unmute the video.
         */
        unmute() {
            this.muted = false;
        }
        // =====================================================================================
        // Minor modifications from:
        // - https://github.com/home-assistant/frontend/blob/dev/src/components/ha-hls-player.ts
        // =====================================================================================
        render() {
            if (this._error) {
                // Use native Frigate card error handling, and attach the entityid to
                // clarify which camera the error refers to.
                return dispatchErrorMessageEvent(this, this._error);
            }
            return $ `
        <video
          ${n(this._videoRef)}
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadeddata=${(e) => {
                dispatchMediaShowEvent(this, e);
            }}
        ></video>
      `;
        }
        static get styles() {
            return [
                super.styles,
                r$5 `
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            object-fit: contain;
            height: 100%;
            width: 100%;
          }
        `
            ];
        }
    };
    FrigateCardHaHlsPlayer = __decorate([
        n$4('frigate-card-ha-hls-player')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ], FrigateCardHaHlsPlayer);
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
customElements.whenDefined('ha-web-rtc-player').then(() => {
    let FrigateCardHaWebRtcPlayer = 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    class FrigateCardHaWebRtcPlayer extends customElements.get('ha-web-rtc-player') {
        constructor() {
            super(...arguments);
            this._videoRef = e();
        }
        /**
         * Play the video.
         */
        play() {
            var _a;
            (_a = this._videoRef.value) === null || _a === void 0 ? void 0 : _a.play();
        }
        /**
         * Pause the video.
         */
        pause() {
            var _a;
            (_a = this._videoRef.value) === null || _a === void 0 ? void 0 : _a.pause();
        }
        /**
         * Mute the video.
         */
        mute() {
            this.muted = true;
        }
        /**
         * Unmute the video.
         */
        unmute() {
            this.muted = false;
        }
        // =====================================================================================
        // Minor modifications from:
        // - https://github.com/home-assistant/frontend/blob/dev/src/components/ha-web-rtc-player.ts
        // =====================================================================================
        render() {
            if (this._error) {
                // Use native Frigate card error handling, and attach the entityid to
                // clarify which camera the error refers to.
                return dispatchErrorMessageEvent(this, `${this._error} (${this.entityid})`);
            }
            return $ `
        <video
          ${n(this._videoRef)}
          id="remote-stream"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadeddata=${(e) => {
                dispatchMediaShowEvent(this, e);
            }}
        ></video>
      `;
        }
    };
    FrigateCardHaWebRtcPlayer = __decorate([
        n$4('frigate-card-ha-web-rtc-player')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ], FrigateCardHaWebRtcPlayer);
});

var css = ":host {\n  display: block;\n  position: relative;\n}\n\n.container {\n  position: relative;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  border-radius: var(--ha-card-border-radius, 4px);\n}\n\n.frigate-card-contents {\n  width: inherit;\n  height: inherit;\n  margin: auto;\n  overflow: auto;\n  -ms-overflow-style: none;\n  /* Hide scrollbar: IE and Edge */\n  scrollbar-width: none;\n  /* Hide scrollbar: Firefox */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.frigate-card-contents::-webkit-scrollbar {\n  display: none;\n}\n\n/* When forcing aspect ratio absolute positioning is required */\n.frigate-card-contents.absolute {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n\n/* The 'hover' menu mode is styling applied outside of the menu itself */\nfrigate-card-menu[data-mode^=hover-] {\n  z-index: 1;\n  transition: opacity 0.5s ease;\n}\n\n.outer + frigate-card-menu[data-mode^=hover-] {\n  opacity: 0;\n}\n\n.outer:hover + frigate-card-menu[data-mode^=hover-], frigate-card-menu[data-mode^=hover-]:hover {\n  opacity: 1;\n}\n\nha-card {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  overflow: visible;\n  width: 100%;\n  height: 100%;\n  position: static;\n  color: var(--secondary-text-color, white);\n  background-color: var(--secondary-background-color, black);\n  border-radius: var(--ha-card-border-radius, 4px);\n}\n\nfrigate-card-live.hidden {\n  display: none;\n}\n\n:host(:fullscreen) ha-card {\n  background-color: black;\n  border-radius: 0px;\n}\n\n:host(:-webkit-full-screen) ha-card {\n  background-color: black;\n  border-radius: 0px;\n}\n\n:host(:-moz-full-screen) ha-card {\n  background-color: black;\n  border-radius: 0px;\n}\n\n:host(:-ms-fullscreen) ha-card {\n  background-color: black;\n  border-radius: 0px;\n}";

/** A note on media callbacks:
 *
 * Media elements (e.g. <video>, <img> or <canvas>) need to callback when:
 *  - Metadata is loaded / dimensions are known (for aspect-ratio)
 *  - Media is playing / paused (to avoid reloading)
 *
 * A number of different approaches used to attach event handlers to
 * get these callbacks (which need to be attached directly to the media
 * elements, which may be 'buried' down the DOM):
 *  - Extend the `ha-hls-player` and `ha-camera-stream` to specify the required
 *    hooks (as querySelecting the media elements after rendering was a fight
 *    with the Lit rendering engine and was very fragile) .
 *  - For non-Lit elements (e.g. WebRTC) query selecting after rendering.
 *  - Library provided hooks (e.g. JSMPEG)
 *  - Directly specifying hooks (e.g. for snapshot viewing with simple <img> tags)
 */
/** A note on action/menu/ll-custom events:
 *
 * The card supports actions being configured in a number of places (e.g. tap on an
 * element, double_tap on a menu item, hold on the live view). These actions are
 * handled frigateCardHandleAction(). For Frigate-card specific actions,
 * frigateCardHandleAction() call will result in an ll-custom DOM event being
 * fired, which needs to be caught at the card level to handle.
 */
/* eslint no-console: 0 */
console.info(`%c  FRIGATE-HASS-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `, 'color: pink; font-weight: bold; background: black', 'color: white; font-weight: bold; background: dimgray');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.customCards = window.customCards || [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.customCards.push({
    type: 'frigate-card',
    name: localize('common.frigate_card'),
    description: localize('common.frigate_card_description'),
    preview: true,
    documentationURL: REPO_URL,
});
/**
 * Main FrigateCard class.
 */
let FrigateCard = class FrigateCard extends s$2 {
    constructor() {
        super(...arguments);
        // user interaction timer ("screensaver" functionality, return to default
        // view after user interaction).
        this._interactionTimerID = null;
        // Automated refreshes of the default view.
        this._updateTimerID = null;
        // Information about the most recently loaded media item.
        this._mediaShowInfo = null;
        // Array of dynamic menu buttons to be added to menu.
        this._dynamicMenuButtons = [];
        // Error/info message to render.
        this._message = null;
        // A cache of resolved media URLs/mimetypes for use in the whole card.
        this._resolvedMediaCache = new ResolvedMediaCache();
    }
    /**
     * Set the Home Assistant object.
     */
    set hass(hass) {
        this._hass = hass;
        // Manually set hass in the menu, elements and image. This is to allow these
        // to update, without necessarily re-rendering the entire card (re-rendering
        // interrupts clip playing).
        if (this._hass) {
            if (this._menu) {
                this._menu.hass = this._hass;
            }
            if (this._elements) {
                this._elements.hass = this._hass;
            }
            if (this._image) {
                this._image.hass = this._hass;
            }
        }
    }
    /**
     * Get the card editor element.
     * @returns A LovelaceCardEditor element.
     */
    static async getConfigElement() {
        return document.createElement('frigate-card-editor');
    }
    /**
     * Get a stub basic config using the first available camera of any kind.
     * @param _hass The Home Assistant object.
     * @param entities The entities available to Home Assistant.
     * @returns A valid stub card configuration.
     */
    static getStubConfig(_hass, entities) {
        const cameraEntity = entities.find((element) => element.startsWith('camera.'));
        return {
            cameras: [
                {
                    camera_entity: cameraEntity,
                },
            ],
            // Need to use 'as unknown' to convince Typescript that this really isn't a
            // mistake, despite the miniscule size of the configuration vs the full type
            // description.
        };
    }
    /**
     * Generate the state used to evaluate conditions.
     */
    _generateConditionState() {
        var _a, _b;
        this._conditionState = {
            view: (_a = this._view) === null || _a === void 0 ? void 0 : _a.view,
            fullscreen: screenfull$1.isEnabled && screenfull$1.isFullscreen,
            camera: (_b = this._view) === null || _b === void 0 ? void 0 : _b.camera,
        };
        const overriddenConfig = getOverriddenConfig(this._config, this._config.overrides, this._conditionState);
        // Save on Lit re-rendering costs by only updating the configuration if it
        // actually changes.
        if (contentsChanged(overriddenConfig, this._overriddenConfig)) {
            this._overriddenConfig = overriddenConfig;
        }
    }
    /**
     * Get the style of emphasized menu items.
     * @returns A StyleInfo.
     */
    _getEmphasizedStyle() {
        return {
            color: 'var(--primary-color, white)',
        };
    }
    /**
     * Get the menu buttons to display.
     * @returns An array of menu buttons.
     */
    _getMenuButtons() {
        var _a, _b, _c, _d, _e;
        const buttons = [];
        if (this._getConfig().menu.buttons.frigate) {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.menu.buttons.frigate'),
                // Use a magic icon value that the menu will use to render the icon as
                // it deems appropriate (certain menu configurations change the menu
                // icon for the 'Frigate' button).
                icon: FRIGATE_BUTTON_MENU_ICON,
                tap_action: FrigateCardMenu.isHidingMenu(this._getConfig().menu)
                    ? createFrigateCardCustomAction('menu_toggle')
                    : createFrigateCardCustomAction('default'),
            });
        }
        if (this._getConfig().menu.buttons.cameras &&
            this._cameras &&
            this._cameras.size > 1) {
            const menuItems = Array.from(this._cameras, ([camera, config]) => {
                var _a;
                return {
                    icon: getCameraIcon(this._hass, config),
                    entity: config.camera_entity,
                    state_color: true,
                    title: getCameraTitle(this._hass, config),
                    selected: ((_a = this._view) === null || _a === void 0 ? void 0 : _a.camera) === camera,
                    tap_action: createFrigateCardCustomAction('camera_select', camera),
                };
            });
            buttons.push({
                type: 'custom:frigate-card-menu-submenu',
                title: localize('config.menu.buttons.cameras'),
                icon: 'mdi:video-switch',
                items: menuItems,
            });
        }
        if (this._getConfig().menu.buttons.live) {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.view.views.live'),
                icon: 'mdi:cctv',
                style: ((_a = this._view) === null || _a === void 0 ? void 0 : _a.is('live')) ? this._getEmphasizedStyle() : {},
                tap_action: createFrigateCardCustomAction('live'),
            });
        }
        const cameraConfig = this._getSelectedCameraConfig();
        // Don't show `clips` button if there's no `camera_name` (e.g. non-Frigate
        // cameras), or is birdseye.
        if (this._getConfig().menu.buttons.clips &&
            (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.camera_name) &&
            (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.camera_name) !== 'birdseye') {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.view.views.clips'),
                icon: 'mdi:filmstrip',
                style: ((_b = this._view) === null || _b === void 0 ? void 0 : _b.is('clips')) ? this._getEmphasizedStyle() : {},
                tap_action: createFrigateCardCustomAction('clips'),
                hold_action: createFrigateCardCustomAction('clip'),
            });
        }
        // Don't show `snapshots` button if there's no `camera_name` (e.g. non-Frigate
        // cameras), or is birdseye.
        if (this._getConfig().menu.buttons.snapshots &&
            (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.camera_name) &&
            (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.camera_name) !== 'birdseye') {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.view.views.snapshots'),
                icon: 'mdi:camera',
                style: ((_c = this._view) === null || _c === void 0 ? void 0 : _c.is('snapshots')) ? this._getEmphasizedStyle() : {},
                tap_action: createFrigateCardCustomAction('snapshots'),
                hold_action: createFrigateCardCustomAction('snapshot'),
            });
        }
        if (this._getConfig().menu.buttons.image) {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.view.views.image'),
                icon: 'mdi:image',
                style: ((_d = this._view) === null || _d === void 0 ? void 0 : _d.is('image')) ? this._getEmphasizedStyle() : {},
                tap_action: createFrigateCardCustomAction('image'),
            });
        }
        if (this._getConfig().menu.buttons.download && ((_e = this._view) === null || _e === void 0 ? void 0 : _e.isViewerView())) {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.menu.buttons.download'),
                icon: 'mdi:download',
                tap_action: createFrigateCardCustomAction('download'),
            });
        }
        if (this._getConfig().menu.buttons.frigate_ui && (cameraConfig === null || cameraConfig === void 0 ? void 0 : cameraConfig.frigate_url)) {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.menu.buttons.frigate_ui'),
                icon: 'mdi:web',
                tap_action: createFrigateCardCustomAction('frigate_ui'),
            });
        }
        if (this._getConfig().menu.buttons.fullscreen && screenfull$1.isEnabled) {
            buttons.push({
                type: 'custom:frigate-card-menu-icon',
                title: localize('config.menu.buttons.fullscreen'),
                icon: screenfull$1.isFullscreen ? 'mdi:fullscreen-exit' : 'mdi:fullscreen',
                tap_action: createFrigateCardCustomAction('fullscreen'),
                style: screenfull$1.isFullscreen ? this._getEmphasizedStyle() : {},
            });
        }
        return buttons.concat(this._dynamicMenuButtons);
    }
    /**
     * Add a dynamic (elements) menu button.
     * @param button The button to add.
     */
    _addDynamicMenuButton(button) {
        if (!this._dynamicMenuButtons.includes(button)) {
            this._dynamicMenuButtons = [...this._dynamicMenuButtons, button];
        }
        this._menu.buttons = this._getMenuButtons();
    }
    /**
     * Remove a dynamic (elements) menu button that was previously added.
     * @param target The button to remove.
     */
    _removeDynamicMenuButton(target) {
        this._dynamicMenuButtons = this._dynamicMenuButtons.filter((button) => button != target);
        this._menu.buttons = this._getMenuButtons();
    }
    /**
     * Fully load the configured cameras.
     */
    async _loadCameras() {
        const cameras = new Map();
        let errorFree = true;
        const addCameraConfig = async (config) => {
            var _a;
            if (!config.camera_name && config.camera_entity) {
                const resolvedName = await this._getFrigateCameraNameFromEntity(config.camera_entity);
                if (resolvedName) {
                    config.camera_name = resolvedName;
                }
            }
            const id = config.id ||
                config.camera_entity ||
                ((_a = config.webrtc_card) === null || _a === void 0 ? void 0 : _a.entity) ||
                config.camera_name;
            if (!id) {
                this._setMessageAndUpdate({
                    message: localize('error.no_camera_id'),
                    type: 'error',
                    context: config,
                });
                errorFree = false;
            }
            else if (cameras.has(id)) {
                this._setMessageAndUpdate({
                    message: localize('error.duplicate_camera_id'),
                    type: 'error',
                    context: config,
                });
                errorFree = false;
            }
            else {
                cameras.set(id, config);
            }
        };
        if (this._getConfig().cameras && Array.isArray(this._getConfig().cameras)) {
            await Promise.all(this._getConfig().cameras.map(addCameraConfig.bind(this)));
        }
        if (!cameras.size) {
            return this._setMessageAndUpdate({
                message: localize('error.no_cameras'),
                type: 'error',
            });
        }
        if (errorFree) {
            this._cameras = cameras;
        }
    }
    /**
     * Get the camera configuration for the selected camera.
     * @returns The CameraConfig object or null if not found.
     */
    _getSelectedCameraConfig() {
        var _a;
        if (!this._cameras || !this._cameras.size || !((_a = this._view) === null || _a === void 0 ? void 0 : _a.camera)) {
            return null;
        }
        return this._cameras.get(this._view.camera) || null;
    }
    /**
     * Get the Frigate camera name from an entity name.
     * @returns The Frigate camera name or null if unavailable.
     */
    async _getFrigateCameraNameFromEntity(entity) {
        if (!this._hass) {
            return null;
        }
        // Find entity unique_id in registry.
        const request = {
            type: 'config/entity_registry/get',
            entity_id: entity,
        };
        try {
            const entityResult = await homeAssistantWSRequest(this._hass, entitySchema, request);
            if (entityResult && entityResult.platform == 'frigate') {
                const match = entityResult.unique_id.match(/:camera:(?<camera>[^:]+)$/);
                if (match && match.groups) {
                    return match.groups['camera'];
                }
            }
        }
        catch (e) {
            // Pass.
        }
        return null;
    }
    /**
     * Get configuration parse errors.
     * @param error The ZodError object from parsing.
     * @returns An array of string error paths.
     */
    _getParseErrorPaths(error) {
        /* Zod errors involving unions are complex, as Zod may not be able to tell
         * where the 'real' error is vs simply a union option not matching. This
         * function finds all ZodError "issues" that don't have an error with 'type'
         * in that object ('type' is the union discriminator for picture elements,
         * the major union in the schema). An array of user-readable error
         * locations is returned, or an empty list if none is available. None being
         * available suggests the configuration has an error, but we can't tell
         * exactly why (or rather Zod simply says it doesn't match any of the
         * available unions). This usually suggests the user specified an incorrect
         * type name entirely. */
        const contenders = new Set();
        if (error && error.issues) {
            for (let i = 0; i < error.issues.length; i++) {
                const issue = error.issues[i];
                if (issue.code == 'invalid_union') {
                    const unionErrors = issue.unionErrors;
                    for (let j = 0; j < unionErrors.length; j++) {
                        const nestedErrors = this._getParseErrorPaths(unionErrors[j]);
                        if (nestedErrors && nestedErrors.size) {
                            nestedErrors.forEach(contenders.add, contenders);
                        }
                    }
                }
                else if (issue.code == 'invalid_type') {
                    if (issue.path[issue.path.length - 1] == 'type') {
                        return null;
                    }
                    contenders.add(this._getParseErrorPathString(issue.path));
                }
                else if (issue.code != 'custom') {
                    contenders.add(this._getParseErrorPathString(issue.path));
                }
            }
        }
        return contenders;
    }
    /**
     * Convert an array of strings and indices into a more user readable string,
     * e.g. [a, 1, b, 2] => 'a[1] -> b[2]'
     * @param path An array of strings and numbers.
     * @returns A single string.
     */
    _getParseErrorPathString(path) {
        let out = '';
        for (let i = 0; i < path.length; i++) {
            const item = path[i];
            if (typeof item == 'number') {
                out += '[' + item + ']';
            }
            else if (out) {
                out += ' -> ' + item;
            }
            else {
                out = item;
            }
        }
        return out;
    }
    /**
     * Set the card configuration.
     * @param inputConfig The card configuration.
     */
    setConfig(inputConfig) {
        if (!inputConfig) {
            throw new Error(localize('error.invalid_configuration'));
        }
        const configUpgradeable = isConfigUpgradeable(inputConfig);
        const parseResult = frigateCardConfigSchema.safeParse(inputConfig);
        if (!parseResult.success) {
            const hint = this._getParseErrorPaths(parseResult.error);
            let upgradeMessage = '';
            if (configUpgradeable && ke().mode !== 'yaml') {
                upgradeMessage = `${localize('error.upgrade_available')}. `;
            }
            throw new Error(upgradeMessage +
                `${localize('error.invalid_configuration')}: ` +
                (hint && hint.size
                    ? JSON.stringify([...hint], null, ' ')
                    : localize('error.invalid_configuration_no_hint')));
        }
        const config = parseResult.data;
        if (config.test_gui) {
            ke().setEditMode(true);
        }
        this._config = config;
        this._cameras = undefined;
        this._view = undefined;
        this._message = null;
        this._generateConditionState();
    }
    /**
     * Card the card config, prioritizing the overriden config if present.
     * @returns A FrigateCardConfig.
     */
    _getConfig() {
        return this._overriddenConfig || this._config;
    }
    _changeView(args) {
        var _a, _b, _c;
        if ((_a = args === null || args === void 0 ? void 0 : args.resetMessage) !== null && _a !== void 0 ? _a : true) {
            this._message = null;
        }
        if ((args === null || args === void 0 ? void 0 : args.view) === undefined) {
            // Load the default view.
            let camera;
            if ((_b = this._cameras) === null || _b === void 0 ? void 0 : _b.size) {
                if (((_c = this._view) === null || _c === void 0 ? void 0 : _c.camera) &&
                    this._getConfig().view.update_cycle_camera) {
                    const keys = Array.from(this._cameras.keys());
                    const currentIndex = keys.indexOf(this._view.camera);
                    const targetIndex = currentIndex + 1 >= keys.length ? 0 : currentIndex + 1;
                    camera = keys[targetIndex];
                }
                else {
                    // Reset to the default camera.
                    camera = this._cameras.keys().next().value;
                }
            }
            if (camera) {
                this._view = new View({
                    view: this._getConfig().view.default,
                    camera: camera,
                });
                this._generateConditionState();
                // The default view has been loaded, so can abandon any running
                // 'screensaver' timer.
                this._clearInteractionTimer();
                // Restart the update timer, so the default view is refreshed at a fixed
                // interval from now (if so configured).
                this._startUpdateTimer();
            }
        }
        else {
            this._view = args.view;
            this._generateConditionState();
        }
    }
    /**
     * Handle a change view event.
     * @param e The change view event.
     */
    _changeViewHandler(e) {
        this._changeView({ view: e.detail });
    }
    /**
     * Determine whether the element should be updated.
     * @param changedProps The changed properties if any.
     * @returns `true` if the element should be updated.
     */
    shouldUpdate(changedProps) {
        const oldHass = changedProps.get('_hass');
        let shouldUpdate = !oldHass || changedProps.size != 1;
        if (oldHass) {
            // Home Assistant pumps a lot of updates through. Re-rendering the card is
            // necessary at times (e.g. to update the 'clip' view as new clips
            // arrive), but also is a jarring experience for the user (e.g. if they
            // are browsing the mini-gallery). Do not allow re-rendering from a Home
            // Assistant update if there's been recent interaction (e.g. clicks on the
            // card) or if there is media active playing.
            if (this._isAutomatedViewUpdateAllowed() &&
                shouldUpdateBasedOnHass(this._hass, oldHass, this._getConfig().view.update_entities || [])) {
                // If entities being monitored have changed then reset the view to the
                // default. Note that as per the Lit lifecycle, the setting of the view
                // itself will not trigger an *additional* re-render here.
                this._changeView();
                shouldUpdate || (shouldUpdate = true);
            }
            else {
                shouldUpdate || (shouldUpdate = shouldUpdateBasedOnHass(this._hass, oldHass, this._getConfig().view.render_entities || []));
            }
        }
        return shouldUpdate;
    }
    /**
     * Download media being displayed in the viewer.
     */
    async _downloadViewerMedia() {
        var _a;
        if (!this._hass || !((_a = this._view) === null || _a === void 0 ? void 0 : _a.isViewerView())) {
            // Should not occur.
            return;
        }
        if (!this._view.media) {
            this._setMessageAndUpdate({
                message: localize('error.download_no_media'),
                type: 'error',
            });
            return;
        }
        const event_id = BrowseMediaUtil.extractEventID(this._view.media);
        if (!event_id) {
            this._setMessageAndUpdate({
                message: localize('error.download_no_event_id'),
                type: 'error',
            });
            return;
        }
        const cameraConfig = this._getSelectedCameraConfig();
        if (!cameraConfig) {
            return;
        }
        const path = `/api/frigate/${cameraConfig.client_id}` +
            `/notifications/${event_id}/` +
            `${this._view.isClipRelatedView() ? 'clip.mp4' : 'snapshot.jpg'}` +
            `?download=true`;
        let response;
        try {
            response = await homeAssistantSignPath(this._hass, path);
        }
        catch (e) {
            console.error(e, e.stack);
        }
        if (!response) {
            this._setMessageAndUpdate({
                message: localize('error.download_sign_failed'),
                type: 'error',
            });
            return;
        }
        if (navigator.userAgent.startsWith('Home Assistant/') ||
            navigator.userAgent.startsWith('HomeAssistant/')) {
            // Home Assistant companion apps cannot download files without opening a
            // new browser window.
            //
            // User-agents are specified here:
            //  - Android: https://github.com/home-assistant/android/blob/master/app/src/main/java/io/homeassistant/companion/android/webview/WebViewActivity.kt#L107
            //  - iOS: https://github.com/home-assistant/iOS/blob/master/Sources/Shared/API/HAAPI.swift#L75
            window.open(response, '_blank');
        }
        else {
            // Use the HTML5 download attribute to prevent a new window from
            // temporarily opening.
            const link = document.createElement('a');
            link.setAttribute('download', '');
            link.href = response;
            link.click();
            link.remove();
        }
    }
    /**
     * Handle a request for a card action.
     * @param ev The action requested.
     */
    _cardActionHandler(ev) {
        var _a;
        // These interactions should only be handled by the card, as nothing
        // upstream has the user-provided configuration.
        ev.stopPropagation();
        const frigateCardAction = convertActionToFrigateCardCustomAction(ev.detail);
        if (!frigateCardAction) {
            return;
        }
        const action = frigateCardAction.frigate_card_action;
        switch (action) {
            case 'default':
                this._changeView();
                break;
            case 'clip':
            case 'clips':
            case 'image':
            case 'live':
            case 'snapshot':
            case 'snapshots':
                if (this._view) {
                    this._changeView({
                        view: new View({
                            view: action,
                            camera: this._view.camera,
                        }),
                    });
                }
                break;
            case 'download':
                this._downloadViewerMedia();
                break;
            case 'frigate_ui':
                const frigate_url = this._getFrigateURLFromContext();
                if (frigate_url) {
                    window.open(frigate_url);
                }
                break;
            case 'fullscreen':
                if (screenfull$1.isEnabled) {
                    screenfull$1.toggle(this);
                }
                break;
            case 'menu_toggle':
                // This is a rare code path: this would only be used if someone has a
                // menu toggle action configured outside of the menu itself (e.g.
                // picture elements).
                this._menu.toggleMenu();
                break;
            case 'camera_select':
                const camera = frigateCardAction.camera;
                if (((_a = this._cameras) === null || _a === void 0 ? void 0 : _a.has(camera)) && this._view) {
                    this._changeView({
                        view: new View({
                            view: this._getConfig().view.camera_select === 'current'
                                ? this._view.view
                                : this._getConfig().view.camera_select,
                            camera: camera,
                        }),
                    });
                }
                break;
            default:
                console.warn(`Frigate card received unknown card action: ${action}`);
        }
    }
    /**
     * Get the Frigate UI URL from context.
     * @returns The URL or null if unavailable.
     */
    _getFrigateURLFromContext() {
        const cameraConfig = this._getSelectedCameraConfig();
        if (!cameraConfig || !cameraConfig.frigate_url || !this._view) {
            return null;
        }
        if (!cameraConfig.camera_name) {
            return cameraConfig.frigate_url;
        }
        if (this._view.isViewerView() || this._view.isGalleryView()) {
            return `${cameraConfig.frigate_url}/events?camera=${cameraConfig.camera_name}`;
        }
        return `${cameraConfig.frigate_url}/cameras/${cameraConfig.camera_name}`;
    }
    /**
     * Handle an action called on an element.
     * @param ev The actionHandler event.
     */
    _actionHandler(ev, config) {
        const interaction = ev.detail.action;
        const node = ev.currentTarget;
        if (config &&
            node &&
            interaction &&
            // Don't call frigateCardHandleAction() unless there is explicitly an
            // action defined (as it uses a default that is unhelpful for views that
            // have default tap/click actions).
            getActionConfigGivenAction(interaction, config)) {
            frigateCardHandleAction(node, this._hass, config, ev.detail.action);
        }
        // Set the 'screensaver' timer.
        this._startInteractionTimer();
    }
    /**
     * Clear the user interaction ('screensaver') timer.
     */
    _clearInteractionTimer() {
        if (this._interactionTimerID) {
            window.clearTimeout(this._interactionTimerID);
            this._interactionTimerID = null;
        }
    }
    /**
     * Start the user interaction ('screensaver') timer to reset the view to
     * default `view.timeout_seconds` after user interaction.
     */
    _startInteractionTimer() {
        this._clearInteractionTimer();
        if (this._getConfig().view.timeout_seconds) {
            this._interactionTimerID = window.setTimeout(() => {
                this._changeView();
            }, this._getConfig().view.timeout_seconds * 1000);
        }
    }
    /**
     * Set the update timer to trigger an update refresh every
     * `view.update_seconds`.
     */
    _startUpdateTimer() {
        if (this._updateTimerID) {
            window.clearTimeout(this._updateTimerID);
            this._updateTimerID = null;
        }
        if (this._getConfig().view.update_seconds) {
            this._updateTimerID = window.setTimeout(() => {
                if (this._isAutomatedViewUpdateAllowed()) {
                    this._changeView();
                }
                else {
                    // Not allowed to update this time around, but try again at the next
                    // interval.
                    this._startUpdateTimer();
                }
            }, this._getConfig().view.update_seconds * 1000);
        }
    }
    /**
     * Determine if an automated view update is allowed.
     * @returns `true` if it's allowed, `false` otherwise.
     */
    _isAutomatedViewUpdateAllowed() {
        return this._getConfig().view.update_force || !this._interactionTimerID;
    }
    /**
     * Render the card menu.
     * @returns A rendered template.
     */
    _renderMenu() {
        return $ `
      <frigate-card-menu
        .hass=${this._hass}
        .menuConfig=${this._getConfig().menu}
        .buttons=${this._getMenuButtons()}
        .conditionState=${this._conditionState}
      ></frigate-card-menu>
    `;
    }
    /**
     * Set the message to display and trigger an update.
     * @param message The message to display.
     * @param skipUpdate If true an update request is skipped.
     */
    _setMessageAndUpdate(message, skipUpdate) {
        // Register the first message, or prioritize errors if there's pre-render competition.
        if (!this._message || (message.type == 'error' && this._message.type != 'error')) {
            this._message = message;
            if (!skipUpdate) {
                this.requestUpdate();
            }
        }
    }
    /**
     * Handle a message event to render to the user.
     * @param e The message event.
     */
    _messageHandler(e) {
        return this._setMessageAndUpdate(e.detail);
    }
    /**
     * Handle a new piece of media being shown.
     * @param e Event with MediaShowInfo details for the media.
     */
    _mediaShowHandler(e) {
        var _a, _b, _c;
        const mediaShowInfo = e.detail;
        // In Safari, with WebRTC, 0x0 is occasionally returned during loading,
        // so treat anything less than a safety cutoff as bogus.
        if (!isValidMediaShowInfo(mediaShowInfo)) {
            return;
        }
        let requestRefresh = false;
        if (((_a = this._view) === null || _a === void 0 ? void 0 : _a.isGalleryView()) &&
            (mediaShowInfo.width != ((_b = this._mediaShowInfo) === null || _b === void 0 ? void 0 : _b.width) ||
                mediaShowInfo.height != ((_c = this._mediaShowInfo) === null || _c === void 0 ? void 0 : _c.height))) {
            requestRefresh = true;
        }
        this._mediaShowInfo = mediaShowInfo;
        if (requestRefresh) {
            this.requestUpdate();
        }
    }
    /**
     * Handler called when fullscreen is toggled.
     */
    _fullScreenHandler() {
        this._generateConditionState();
        // Re-render after a change to fullscreen mode to take advantage of
        // the expanded screen real-estate (vs staying in aspect-ratio locked
        // modes).
        this.requestUpdate();
    }
    /**
     * Component connected callback.
     */
    connectedCallback() {
        super.connectedCallback();
        if (screenfull$1.isEnabled) {
            screenfull$1.on('change', this._fullScreenHandler.bind(this));
        }
    }
    /**
     * Component disconnected callback.
     */
    disconnectedCallback() {
        if (screenfull$1.isEnabled) {
            screenfull$1.off('change', this._fullScreenHandler.bind(this));
        }
        super.disconnectedCallback();
    }
    /**
     * Determine if the aspect ratio should be enforced given the current view and
     * context.
     */
    _isAspectRatioEnforced() {
        var _a;
        const aspectRatioMode = this._getConfig().dimensions.aspect_ratio_mode;
        // Do not artifically constrain aspect ratio if:
        // - It's fullscreen.
        // - Aspect ratio enforcement is disabled.
        // - Aspect ratio enforcement is dynamic and it's a media view (i.e. not the gallery).
        // - There is a message to display to the user.
        return !((screenfull$1.isEnabled && screenfull$1.isFullscreen) ||
            aspectRatioMode == 'unconstrained' ||
            (aspectRatioMode == 'dynamic' && ((_a = this._view) === null || _a === void 0 ? void 0 : _a.isMediaView())) ||
            this._message != null);
    }
    /**
     * Get the aspect ratio padding required to enforce the aspect ratio (if it is
     * required).
     * @returns A padding percentage.
     */
    _getAspectRatioPadding() {
        if (!this._isAspectRatioEnforced()) {
            return null;
        }
        const aspectRatioMode = this._getConfig().dimensions.aspect_ratio_mode;
        if (aspectRatioMode == 'dynamic' && this._mediaShowInfo) {
            return (this._mediaShowInfo.height / this._mediaShowInfo.width) * 100;
        }
        const defaultAspectRatio = this._getConfig().dimensions.aspect_ratio;
        if (defaultAspectRatio) {
            return (defaultAspectRatio[1] / defaultAspectRatio[0]) * 100;
        }
        else {
            return (9 / 16) * 100;
        }
    }
    /**
     * Merge card-wide and view-specific actions.
     * @returns A combined set of action.
     */
    _getMergedActions() {
        var _a, _b, _c, _d, _e, _f;
        let specificActions = undefined;
        if ((_a = this._view) === null || _a === void 0 ? void 0 : _a.is('live')) {
            specificActions = this._getConfig().live.actions;
        }
        else if ((_b = this._view) === null || _b === void 0 ? void 0 : _b.isGalleryView()) {
            specificActions = (_c = this._getConfig().event_gallery) === null || _c === void 0 ? void 0 : _c.actions;
        }
        else if ((_d = this._view) === null || _d === void 0 ? void 0 : _d.isViewerView()) {
            specificActions = this._getConfig().event_viewer.actions;
        }
        else if ((_e = this._view) === null || _e === void 0 ? void 0 : _e.is('image')) {
            specificActions = (_f = this._getConfig().image) === null || _f === void 0 ? void 0 : _f.actions;
        }
        return Object.assign(Object.assign({}, this._getConfig().view.actions), specificActions);
    }
    /**
     * Master render method for the card.
     */
    render() {
        if (!this._hass) {
            return;
        }
        const padding = this._getAspectRatioPadding();
        const outerStyle = {};
        // Padding to force a particular aspect ratio.
        if (padding != null) {
            outerStyle['padding-top'] = `${padding}%`;
        }
        const contentClasses = {
            'frigate-card-contents': true,
            absolute: padding != null,
        };
        const actions = this._getMergedActions();
        return $ ` <ha-card
      .actionHandler=${actionHandler({
            hasHold: frigateCardHasAction(actions.hold_action),
            hasDoubleClick: frigateCardHasAction(actions.double_tap_action),
        })}
      @action=${(ev) => this._actionHandler(ev, actions)}
      @ll-custom=${this._cardActionHandler.bind(this)}
      @frigate-card:message=${this._messageHandler}
      @frigate-card:change-view=${this._changeViewHandler}
      @frigate-card:media-show=${this._mediaShowHandler}
      @frigate-card:render=${() => this.requestUpdate()}
    >
      ${this._getConfig().menu.mode == 'above' ? this._renderMenu() : ''}
      <div class="container outer" style="${i$1(outerStyle)}">
        <div class="${o$2(contentClasses)}">
          ${this._cameras === undefined
            ? c((async () => {
                await this._loadCameras();
                // Don't reset messages as errors may have been generated
                // during the camera load.
                this._changeView({ resetMessage: false });
                return this._render();
            })(), renderProgressIndicator())
            : // Always want to call render even if there's a message, to
                // ensure live preload is always present (even if not displayed).
                this._render()}
          ${this._getConfig().elements
            ? // Always show elements to allow for custom menu items (etc.) to
                // be present even if a particular view has an error. Elements
                // need to render after the main views so it can render 'on top'.
                $ ` <frigate-card-elements
                .hass=${this._hass}
                .elements=${this._getConfig().elements}
                .conditionState=${this._conditionState}
                @frigate-card:menu-add=${(e) => {
                    this._addDynamicMenuButton(e.detail);
                }}
                @frigate-card:menu-remove=${(e) => {
                    this._removeDynamicMenuButton(e.detail);
                }}
                @frigate-card:condition-state-request=${(ev) => {
                    conditionStateRequestHandler(ev, this._conditionState);
                }}
              >
              </frigate-card-elements>`
            : ``}
          ${
        // Keep message rendering to last to show messages that may have
        // been generated during the render.
        this._message ? renderMessage(this._message) : ''}
        </div>
      </div>
      ${this._getConfig().menu.mode != 'above' ? this._renderMenu() : ''}
    </ha-card>`;
    }
    /**
     * Sub-render method for the card.
     */
    _render() {
        const cameraConfig = this._getSelectedCameraConfig();
        if (!this._hass || !this._view || !cameraConfig) {
            return $ ``;
        }
        // Render but hide the live view if there's a message, or if it's preload
        // mode and the view is not live.
        const liveClasses = {
            hidden: !!this._message || (this._getConfig().live.preload && !this._view.is('live')),
        };
        return $ `
      ${!this._message && this._view.is('image')
            ? $ ` <frigate-card-image
            .imageConfig=${this._getConfig().image}
            .view=${this._view}
            .hass=${this._hass}
            .cameraConfig=${cameraConfig}
          >
          </frigate-card-image>`
            : ``}
      ${!this._message && this._view.isGalleryView()
            ? $ ` <frigate-card-gallery
            .hass=${this._hass}
            .view=${this._view}
            .cameraConfig=${cameraConfig}
            .galleryConfig=${this._getConfig().event_gallery}
          >
          </frigate-card-gallery>`
            : ``}
      ${!this._message && this._view.isViewerView()
            ? $ ` <frigate-card-viewer
            .hass=${this._hass}
            .view=${this._view}
            .cameraConfig=${cameraConfig}
            .viewerConfig=${this._getConfig().event_viewer}
            .resolvedMediaCache=${this._resolvedMediaCache}
          >
          </frigate-card-viewer>`
            : ``}
      ${
        // Note: Subtle difference in condition below vs the other views in order
        // to always render the live view for live.preload mode.
        // Note: <frigate-card-live> uses the underlying _config rather than the
        // overriden config (via getConfig), as it does it's own overriding as
        // part of the camera carousel.
        this._getConfig().live.preload || (!this._message && this._view.is('live'))
            ? $ `
              <frigate-card-live
                .hass=${this._hass}
                .view=${this._view}
                .liveConfig=${this._config.live}
                .conditionState=${this._conditionState}
                .liveOverrides=${getOverridesByKey(this._getConfig().overrides, 'live')}
                .cameras=${this._cameras}
                .preloaded=${this._getConfig().live.preload && !this._view.is('live')}
                class="${o$2(liveClasses)}"
              >
              </frigate-card-live>
            `
            : ``}
    `;
    }
    /**
     * Return compiled CSS styles (thus safe to use with unsafeCSS).
     */
    static get styles() {
        return o$7(css);
    }
    /**
     * Get the Lovelace card size.
     * @returns The Lovelace card size in units of 50px.
     */
    getCardSize() {
        if (this._mediaShowInfo) {
            return this._mediaShowInfo.height / 50;
        }
        return 6;
    }
};
__decorate([
    e$3({ attribute: false })
], FrigateCard.prototype, "_hass", void 0);
__decorate([
    t$3()
], FrigateCard.prototype, "_config", void 0);
__decorate([
    t$3()
], FrigateCard.prototype, "_overriddenConfig", void 0);
__decorate([
    e$3({ attribute: false })
], FrigateCard.prototype, "_view", void 0);
__decorate([
    t$3()
], FrigateCard.prototype, "_conditionState", void 0);
__decorate([
    i$3('frigate-card-menu')
], FrigateCard.prototype, "_menu", void 0);
__decorate([
    i$3('frigate-card-elements')
], FrigateCard.prototype, "_elements", void 0);
__decorate([
    i$3('frigate-card-image')
], FrigateCard.prototype, "_image", void 0);
__decorate([
    t$3()
], FrigateCard.prototype, "_cameras", void 0);
FrigateCard = __decorate([
    n$4('frigate-card')
], FrigateCard);

export { FrigateCard };
