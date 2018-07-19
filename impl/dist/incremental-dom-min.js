/**
 * @preserve
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0.
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.IncrementalDOM={})}(this,function(t){"use strict";function n(){}function e(t,n){return nt.call(t,n)}function r(){return new n}function o(t,n){for(;t.length>n;)t.pop()}function i(t){return 0===t.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===t.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0}function u(t,n,e){if(null==e)t.removeAttribute(n);else{var r=i(n);r?t.setAttributeNS(r,n,String(e)):t.setAttribute(n,String(e))}}function a(t,n,e){t[n]=e}function l(t,n,e){n.indexOf("-")>=0?t.setProperty(n,e):t[n]=e}function f(t,n,r){if("string"==typeof r)t.style.cssText=r;else{t.style.cssText="";var o=t.style;for(var i in r)e(r,i)&&l(o,i,r[i])}}function c(t,n,e){var r=typeof e;"object"===r||"function"===r?a(t,n,e):u(t,n,e)}function s(t,n,e){var r=et[n]||et[tt.default];r(t,n,e)}function d(t){var n=rt;return rt=t,n}function p(t){var n=ot;return ot=t,n}function v(t){return t}function h(t){return 11===t.nodeType||9===t.nodeType}function g(t){return 1===t.nodeType}function y(t,n){for(var e=[],r=t;r!==n;){var o=r;e.push(o),r=o.parentNode}return e}function m(t){var n=at.call(t);return h(n)?n.activeElement:null}function x(t,n){var e=m(t);return e&&t.contains(e)?y(e,n):[]}function b(t,n,e){for(var r=n.nextSibling,o=e;null!==o&&o!==n;){var i=o.nextSibling;t.insertBefore(o,r),o=i}}function O(t,n,e){var r=new lt(n,e);return t.__incrementalDOMData=r,r}function w(t){return C(t),t.__incrementalDOMData}function C(t){if(!t.__incrementalDOMData){var n=g(t)?t.localName:t.nodeName,e=g(t)?t.getAttribute("key"):null,r=O(t,n,e);if(g(t))for(var o=t.attributes,i=r.attrsArr,u=0;u<o.length;u+=1){var a=o[u],l=a.name,f=a.value;i.push(l),i.push(f)}for(var c=t.firstChild;c;c=c.nextSibling)C(c)}}function D(t){t.__incrementalDOMData=null;for(var n=t.firstChild;n;n=n.nextSibling)D(n)}function k(t,n){return"svg"===t?"http://www.w3.org/2000/svg":null==n?null:"foreignObject"===w(n).nameOrCtor?null:n.namespaceURI}function S(t,n,e,r){var o;if(e instanceof Function)o=new e;else{var i=k(e,n);o=i?t.createElementNS(i,e):t.createElement(e)}return O(o,e,r),o}function N(t){var n=t.createTextNode("");return O(n,"#text",null),n}function _(){return pt}function A(t,n){for(var e=0;e<t.length;e+=1)w(t[e]).focused=n}function j(t){var n=function(n,e,r){var o=ft,i=dt,u=pt,a=ct,l=st,f=!1,c=!1;ft=new ut,dt=n.ownerDocument,pt=[],st=n.parentNode;var s=x(n,st);try{A(s,!0);var v=t(n,e,r);return v}finally{A(s,!1),dt=i,pt=u,ct=a,st=l,ft.notifyChanges(),d(f),p(c),ft=o}};return n}function M(t,n,e){var r=w(t);return n==r.nameOrCtor&&e==r.key}function P(t,n,e){return t?M(t,n,e)?t:e?P(t.nextSibling,n,e):null:null}function T(t,n){var e;return e="#text"===t?N(dt):S(dt,st,t,n),ft.markCreated(e),e}function E(t,n){var e=P(ct,t,n),r=e||T(t,n);r!==ct&&(w(r).focused?b(st,r,ct):st.insertBefore(r,ct),ct=r)}function I(t,n,e){for(var r=t,o=n;o!==e;){var i=o.nextSibling;r.removeChild(o),ft.markDeleted(o),o=i}}function B(){st=ct,ct=null}function R(){return ct?ct.nextSibling:st.firstChild}function F(){ct=R()}function L(){I(st,R(),null),ct=st,st=st.parentNode}function U(t,n){return F(),E(t,n),B(),st}function V(){return L(),ct}function X(){return F(),E("#text",null),ct}function q(){return st}function z(){return R()}function G(){ct=st.lastChild}function H(t,n,e){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];var u=U(t,n),a=w(u);if(!a.staticsApplied){if(e)for(var l=0;l<e.length;l+=2){var f=e[l],c=e[l+1];s(u,f,c)}a.staticsApplied=!0}for(var d=a.attrsArr,p=!d.length,v=gt,h=0;v<arguments.length;v+=2,h+=2){var f=arguments[v];if(p)d[h]=f;else if(d[h]!==f)break;var c=arguments[v+1];(p||d[h+1]!==c)&&(d[h+1]=c,s(u,f,c))}if(v<arguments.length||h<d.length){for(var g=h;h<d.length;h+=2)yt[d[h]]=d[h+1];for(h=g;v<arguments.length;v+=2,h+=2){var f=arguments[v],c=arguments[v+1];yt[f]!==c&&s(u,f,c),d[h]=f,d[h+1]=c,delete yt[f]}o(d,h);for(var y=0,m=Object.keys(yt);y<m.length;y++){var f=m[y];s(u,f,void 0),delete yt[f]}}return u}function J(t,n,e){var r=_();r[0]=t,r[1]=n,r[2]=e}function K(t){var n=_();n[1]=t}function Q(t,n){var e=_();e.push(t),e.push(n)}function W(){var t=_();v(t);var n=H.apply(null,t);return o(t,0),n}function Y(t){var n=V();return n}function Z(t){for(var n=[],e=3;e<arguments.length;e++)n[e-3]=arguments[e];return H.apply(null,arguments),Y(t)}function $(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=X(),o=w(r);if(o.text!==t){o.text=t;for(var i=t,u=1;u<arguments.length;u+=1){var a=arguments[u];i=a(i)}r.data=i}return r}Object.assign||function(t){for(var n,e=1;e<arguments.length;e++){n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var tt={default:"__default"},nt=Object.prototype.hasOwnProperty;n.prototype=Object.create(null);var et=r();et[tt.default]=c,et.style=f;var rt=!1,ot=!1,it={nodesCreated:null,nodesDeleted:null},ut=function(){function t(){this.created=[],this.deleted=[]}return t.prototype.markCreated=function(t){this.created.push(t)},t.prototype.markDeleted=function(t){this.deleted.push(t)},t.prototype.notifyChanges=function(){it.nodesCreated&&this.created.length>0&&it.nodesCreated(this.created),it.nodesDeleted&&this.deleted.length>0&&it.nodesDeleted(this.deleted)},t}(),at=Node.prototype.getRootNode||function(){for(var t=this,n=t;t;)n=t,t=t.parentNode;return n},lt=function(){function t(t,n){this.attrsArr=[],this.staticsApplied=!1,this.text=null,this.focused=!1,this.nameOrCtor=t,this.key=n}return t}(),ft=null,ct=null,st=null,dt=null,pt=[],vt=j(function(t,n,e){return ct=t,B(),n(e),L(),t}),ht=j(function(t,n,e){var r={nextSibling:t};return ct=r,n(e),st&&I(st,R(),t.nextSibling),r===ct?null:ct}),gt=3,yt=r();t.applyAttr=u,t.applyProp=a,t.attributes=et,t.close=V,t.currentElement=q,t.currentPointer=z,t.open=U,t.patch=vt,t.patchInner=vt,t.patchOuter=ht,t.skip=G,t.skipNode=F,t.clearCache=D,t.importNode=C,t.notifications=it,t.symbols=tt,t.attr=Q,t.elementClose=Y,t.elementOpen=H,t.elementOpenEnd=W,t.elementOpenStart=J,t.elementVoid=Z,t.text=$,t.key=K,Object.defineProperty(t,"__esModule",{value:!0})});

//# sourceMappingURL=incremental-dom-min.js.map