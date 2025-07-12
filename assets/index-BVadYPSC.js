(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Px(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Of={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function zx(){if(Xg)return xo;Xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xo.Fragment=e,xo.jsx=i,xo.jsxs=i,xo}var Wg;function Bx(){return Wg||(Wg=1,Of.exports=zx()),Of.exports}var lt=Bx(),Pf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Ix(){if(qg)return re;qg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function y(U,$,xt){this.props=U,this.context=$,this.refs=C,this.updater=xt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function z(U,$,xt){this.props=U,this.context=$,this.refs=C,this.updater=xt||M}var L=z.prototype=new _;L.constructor=z,A(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(U,$,xt,yt,Q,mt){return xt=mt.ref,{$$typeof:o,type:U,key:$,ref:xt!==void 0?xt:null,props:mt}}function q(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return $[xt]})}var V=/\/+/g;function ct(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function st(){}function vt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function dt(U,$,xt,yt,Q){var mt=typeof U;(mt==="undefined"||mt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case e:Mt=!0;break;case g:return Mt=U._init,dt(Mt(U._payload),$,xt,yt,Q)}}if(Mt)return Q=Q(U),Mt=yt===""?"."+ct(U,0):yt,w(Q)?(xt="",Mt!=null&&(xt=Mt.replace(V,"$&/")+"/"),dt(Q,$,xt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=q(Q,xt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(V,"$&/")+"/")+Mt)),$.push(Q)),1;Mt=0;var Rt=yt===""?".":yt+":";if(w(U))for(var wt=0;wt<U.length;wt++)yt=U[wt],mt=Rt+ct(yt,wt),Mt+=dt(yt,$,xt,mt,Q);else if(wt=x(U),typeof wt=="function")for(U=wt.call(U),wt=0;!(yt=U.next()).done;)yt=yt.value,mt=Rt+ct(yt,wt++),Mt+=dt(yt,$,xt,mt,Q);else if(mt==="object"){if(typeof U.then=="function")return dt(vt(U),$,xt,yt,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(U,$,xt){if(U==null)return U;var yt=[],Q=0;return dt(U,yt,"","",function(mt){return $.call(xt,mt,Q++)}),yt}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Et(){}return re.Children={map:P,forEach:function(U,$,xt){P(U,function(){$.apply(this,arguments)},xt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,$,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=A({},U.props),Q=U.key,mt=void 0;if($!=null)for(Mt in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(Q=""+$.key),$)!G.call($,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&$.ref===void 0||(yt[Mt]=$[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=xt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];yt.children=Rt}return I(U.type,Q,void 0,void 0,mt,yt)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,$,xt){var yt,Q={},mt=null;if($!=null)for(yt in $.key!==void 0&&(mt=""+$.key),$)G.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var Mt=arguments.length-2;if(Mt===1)Q.children=xt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];Q.children=Rt}if(U&&U.defaultProps)for(yt in Mt=U.defaultProps,Mt)Q[yt]===void 0&&(Q[yt]=Mt[yt]);return I(U,mt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=D,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},re.memo=function(U,$){return{$$typeof:m,type:U,compare:$===void 0?null:$}},re.startTransition=function(U){var $=F.T,xt={};F.T=xt;try{var yt=U(),Q=F.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,Y)}catch(mt){Y(mt)}finally{F.T=$}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(U){return F.H.use(U)},re.useActionState=function(U,$,xt){return F.H.useActionState(U,$,xt)},re.useCallback=function(U,$){return F.H.useCallback(U,$)},re.useContext=function(U){return F.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,$){return F.H.useDeferredValue(U,$)},re.useEffect=function(U,$,xt){var yt=F.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,$)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(U,$,xt){return F.H.useImperativeHandle(U,$,xt)},re.useInsertionEffect=function(U,$){return F.H.useInsertionEffect(U,$)},re.useLayoutEffect=function(U,$){return F.H.useLayoutEffect(U,$)},re.useMemo=function(U,$){return F.H.useMemo(U,$)},re.useOptimistic=function(U,$){return F.H.useOptimistic(U,$)},re.useReducer=function(U,$,xt){return F.H.useReducer(U,$,xt)},re.useRef=function(U){return F.H.useRef(U)},re.useState=function(U){return F.H.useState(U)},re.useSyncExternalStore=function(U,$,xt){return F.H.useSyncExternalStore(U,$,xt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.1.0",re}var Yg;function od(){return Yg||(Yg=1,Pf.exports=Ix()),Pf.exports}var $i=od();const Sr=Px($i);var zf={exports:{}},So={},Bf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Fx(){return jg||(jg=1,function(o){function e(P,Z){var Y=P.length;P.push(Z);t:for(;0<Y;){var Et=Y-1>>>1,U=P[Et];if(0<l(U,Z))P[Et]=Z,P[Y]=U,Y=Et;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Z=P[0],Y=P.pop();if(Y!==Z){P[0]=Y;t:for(var Et=0,U=P.length,$=U>>>1;Et<$;){var xt=2*(Et+1)-1,yt=P[xt],Q=xt+1,mt=P[Q];if(0>l(yt,Y))Q<U&&0>l(mt,yt)?(P[Et]=mt,P[Q]=Y,Et=Q):(P[Et]=yt,P[xt]=Y,Et=xt);else if(Q<U&&0>l(mt,Y))P[Et]=mt,P[Q]=Y,Et=Q;else break t}}return Z}function l(P,Z){var Y=P.sortIndex-Z.sortIndex;return Y!==0?Y:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,x=3,M=!1,A=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var Z=i(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=P)r(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=i(m)}}function F(P){if(C=!1,w(P),!A)if(i(p)!==null)A=!0,G||(G=!0,ct());else{var Z=i(m);Z!==null&&dt(F,Z.startTime-P)}}var G=!1,I=-1,q=5,D=-1;function R(){return y?!0:!(o.unstable_now()-D<q)}function V(){if(y=!1,G){var P=o.unstable_now();D=P;var Z=!0;try{t:{A=!1,C&&(C=!1,z(I),I=-1),M=!0;var Y=x;try{e:{for(w(P),v=i(p);v!==null&&!(v.expirationTime>P&&R());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,x=v.priorityLevel;var U=Et(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,w(P),Z=!0;break e}v===i(p)&&r(p),w(P)}else r(p);v=i(p)}if(v!==null)Z=!0;else{var $=i(m);$!==null&&dt(F,$.startTime-P),Z=!1}}break t}finally{v=null,x=Y,M=!1}Z=void 0}}finally{Z?ct():G=!1}}}var ct;if(typeof L=="function")ct=function(){L(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,vt=st.port2;st.port1.onmessage=V,ct=function(){vt.postMessage(null)}}else ct=function(){_(V,0)};function dt(P,Z){I=_(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return P()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=x;x=P;try{return Z()}finally{x=Y}},o.unstable_scheduleCallback=function(P,Z,Y){var Et=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Et+Y:Et):Y=Et,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,P={id:g++,callback:Z,priorityLevel:P,startTime:Y,expirationTime:U,sortIndex:-1},Y>Et?(P.sortIndex=Y,e(m,P),i(p)===null&&P===i(m)&&(C?(z(I),I=-1):C=!0,dt(F,Y-Et))):(P.sortIndex=U,e(p,P),A||M||(A=!0,G||(G=!0,ct()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var Z=x;return function(){var Y=x;x=Z;try{return P.apply(this,arguments)}finally{x=Y}}}}(If)),If}var Zg;function Hx(){return Zg||(Zg=1,Bf.exports=Fx()),Bf.exports}var Ff={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Gx(){if(Kg)return An;Kg=1;var o=od();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},An.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.0",An}var Qg;function Vx(){if(Qg)return Ff.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ff.exports=Gx(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function kx(){if(Jg)return So;Jg=1;var o=Hx(),e=od(),i=Vx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,s=f;break}if(b===s){S=!0,s=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,s=c;break}if(b===s){S=!0,s=f,a=c;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var dt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Et=[],U=-1;function $(t){return{current:t}}function xt(t){0>U||(t.current=Et[U],Et[U]=null,U--)}function yt(t,n){U++,Et[U]=t.current,t.current=n}var Q=$(null),mt=$(null),Mt=$(null),Rt=$(null);function wt(t,n){switch(yt(Mt,n),yt(mt,t),yt(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?vg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=vg(n),t=xg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(Q),yt(Q,t)}function oe(){xt(Q),xt(mt),xt(Mt)}function Qt(t){t.memoizedState!==null&&yt(Rt,t);var n=Q.current,a=xg(n,t.type);n!==a&&(yt(mt,t),yt(Q,a))}function Ne(t){mt.current===t&&(xt(Q),xt(mt)),Rt.current===t&&(xt(Rt),po._currentValue=Y)}var Fe=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,B=o.unstable_cancelCallback,vn=o.unstable_shouldYield,ye=o.unstable_requestPaint,de=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,tt=o.unstable_setDisableYieldValue,ft=null,pt=null;function ot(t){if(typeof E=="function"&&tt(t),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,t)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(t){return t>>>=0,t===0?32:31-(Ut(t)/Gt|0)|0}var St=256,zt=4194304;function qt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=qt(s):(S&=b,S!==0?c=qt(S):a||(a=b&~t,a!==0&&(c=qt(a))))):(b=s&~f,b!==0?c=qt(b):S!==0?c=qt(S):a||(a=s&~t,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=St;return St<<=1,(St&4194048)===0&&(St=256),t}function Nt(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function At(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,O=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Pt(a),gt=1<<ut;b[ut]=0,O[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var nt=et[ut];nt!==null&&(nt.lane&=-536870913)}a&=~gt}s!==0&&_t(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ft(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ce(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Ig(t.type))}function Gn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,xn="__reactProps$"+fn,Nn="__reactContainer$"+fn,ka="__reactEvents$"+fn,zo="__reactListeners$"+fn,Bo="__reactHandles$"+fn,Xa="__reactResources$"+fn,sa="__reactMarker$"+fn;function oa(t){delete t[rn],delete t[xn],delete t[ka],delete t[zo],delete t[Bo]}function Ci(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Eg(t);t!==null;){if(a=t[rn])return a;t=Eg(t)}return n}t=a,a=t.parentNode}return null}function wi(t){if(t=t[rn]||t[Nn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Wa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function la(t){var n=t[Xa];return n||(n=t[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[sa]=!0}var Io=new Set,Fo={};function Di(t,n){T(t,n),T(t+"Capture",n)}function T(t,n){for(Fo[t]=n,t=0;t<n.length;t++)Io.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function j(t){return Fe.call(at,t)?!0:Fe.call(it,t)?!1:W.test(t)?at[t]=!0:(it[t]=!0,!1)}function Tt(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Dt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ot(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var It,te;function Kt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+te}var Xt=!1;function le(t,n){if(!t||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(nt){var et=nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(nt){et=nt}t.call(gt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var O=S.split(`
`),J=b.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===J.length)for(s=O.length-1,c=J.length-1;1<=s&&0<=c&&O[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==J[c]){var ut=`
`+O[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Kt(a):""}function Ae(t){switch(t.tag){case 26:case 27:case 5:return Kt(t.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return Kt("Activity");default:return""}}function Xe(t){try{var n="";do n+=Ae(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t){var n=Re(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Le(t){t._valueTracker||(t._valueTracker=Zt(t))}function ve(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Re(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function hn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ca=/[\n"\\]/g;function Ve(t){return t.replace(ca,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(t,n,a,s,c,f,S,b){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?bn(t,S,fe(n)):a!=null?bn(t,S,fe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+fe(b):t.removeAttribute("name")}function He(t,n,a,s,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function bn(t,n,a){n==="number"&&hn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function Sn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function vi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function xd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&vd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&vd(t,f,n[f])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return O_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Er=null,br=null;function Sd(t){var n=wi(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ui(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[xn]||null;if(!c)throw Error(r(90));Ui(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ve(s)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var Pc=!1;function yd(t,n,a){if(Pc)return t(n,a);Pc=!0;try{var s=t(n);return s}finally{if(Pc=!1,(Er!==null||br!==null)&&(Tl(),Er&&(n=Er,t=br,br=Er=null,Sd(n),t)))for(n=0;n<t.length;n++)Sd(t[n])}}function As(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Li)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{zc=!1}var ua=null,Bc=null,Go=null;function Md(){if(Go)return Go;var t,n=Bc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return Go=c.slice(t,1<s?1-s:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Ed(){return!1}function Ln(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Ed,this.isPropagationStopped=Ed,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Ln(qa),Cs=g({},qa,{view:0,detail:0}),P_=Ln(Cs),Ic,Fc,ws,Wo=g({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(Ic=t.screenX-ws.screenX,Fc=t.screenY-ws.screenY):Fc=Ic=0,ws=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),bd=Ln(Wo),z_=g({},Wo,{dataTransfer:0}),B_=Ln(z_),I_=g({},Cs,{relatedTarget:0}),Hc=Ln(I_),F_=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),H_=Ln(F_),G_=g({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V_=Ln(G_),k_=g({},qa,{data:0}),Td=Ln(k_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=q_[t])?!!n[t]:!1}function Gc(){return Y_}var j_=g({},Cs,{key:function(t){if(t.key){var n=X_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z_=Ln(j_),K_=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=Ln(K_),Q_=g({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),J_=Ln(Q_),$_=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=Ln($_),ev=g({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nv=Ln(ev),iv=g({},qa,{newState:0,oldState:0}),av=Ln(iv),rv=[9,13,27,32],Vc=Li&&"CompositionEvent"in window,Ds=null;Li&&"documentMode"in document&&(Ds=document.documentMode);var sv=Li&&"TextEvent"in window&&!Ds,Rd=Li&&(!Vc||Ds&&8<Ds&&11>=Ds),Cd=" ",wd=!1;function Dd(t,n){switch(t){case"keyup":return rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function ov(t,n){switch(t){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(wd=!0,Cd);case"textInput":return t=n.data,t===Cd&&wd?null:t;default:return null}}function lv(t,n){if(Tr)return t==="compositionend"||!Vc&&Dd(t,n)?(t=Md(),Go=Bc=ua=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cv[t.type]:n==="textarea"}function Ld(t,n,a,s){Er?br?br.push(s):br=[s]:Er=s,n=Ul(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Us=null,Ns=null;function uv(t){dg(t,0)}function qo(t){var n=Wa(t);if(ve(n))return t}function Od(t,n){if(t==="change")return n}var Pd=!1;if(Li){var kc;if(Li){var Xc="oninput"in document;if(!Xc){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Xc=typeof zd.oninput=="function"}kc=Xc}else kc=!1;Pd=kc&&(!document.documentMode||9<document.documentMode)}function Bd(){Us&&(Us.detachEvent("onpropertychange",Id),Ns=Us=null)}function Id(t){if(t.propertyName==="value"&&qo(Ns)){var n=[];Ld(n,Ns,t,Oc(t)),yd(uv,n)}}function fv(t,n,a){t==="focusin"?(Bd(),Us=n,Ns=a,Us.attachEvent("onpropertychange",Id)):t==="focusout"&&Bd()}function hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(Ns)}function dv(t,n){if(t==="click")return qo(n)}function pv(t,n){if(t==="input"||t==="change")return qo(n)}function mv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:mv;function Ls(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Fe.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hd(t,n){var a=Fd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fd(a)}}function Gd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=hn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=hn(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var gv=Li&&"documentMode"in document&&11>=document.documentMode,Ar=null,qc=null,Os=null,Yc=!1;function kd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Ar==null||Ar!==hn(s)||(s=Ar,"selectionStart"in s&&Wc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Os&&Ls(Os,s)||(Os=s,s=Ul(qc,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ar)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Rr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},jc={},Xd={};Li&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function ja(t){if(jc[t])return jc[t];if(!Rr[t])return t;var n=Rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xd)return jc[t]=n[a];return t}var Wd=ja("animationend"),qd=ja("animationiteration"),Yd=ja("animationstart"),_v=ja("transitionrun"),vv=ja("transitionstart"),xv=ja("transitioncancel"),jd=ja("transitionend"),Zd=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function oi(t,n){Zd.set(t,n),Di(n,[t])}var Kd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=Kd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Kd.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Jn=[],Cr=0,Kc=0;function Yo(){for(var t=Cr,n=Kc=Cr=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&Qd(a,c,f)}}function jo(t,n,a,s){Jn[Cr++]=t,Jn[Cr++]=n,Jn[Cr++]=a,Jn[Cr++]=s,Kc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Qc(t,n,a,s){return jo(t,n,a,s),Zo(t)}function wr(t,n){return jo(t,null,null,n),Zo(t)}function Qd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<ro)throw ro=0,af=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={};function Sv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new Sv(t,n,a,s)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ko(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Jc(t)&&(S=1);else if(typeof t=="string")S=Mx(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case A:return Za(a.children,c,f,n);case C:S=8,c|=24;break;case y:return t=kn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case F:return t=kn(13,a,n,c),t.elementType=F,t.lanes=f,t;case G:return t=kn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:S=10;break t;case z:S=9;break t;case w:S=11;break t;case I:S=14;break t;case q:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Za(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function $c(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function tu(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ur=[],Nr=0,Qo=null,Jo=0,$n=[],ti=0,Ka=null,Pi=1,zi="";function Qa(t,n){Ur[Nr++]=Jo,Ur[Nr++]=Qo,Qo=t,Jo=n}function $d(t,n,a){$n[ti++]=Pi,$n[ti++]=zi,$n[ti++]=Ka,Ka=t;var s=Pi;t=zi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Pi=1<<32-Pt(n)+c|a<<c|s,zi=f+t}else Pi=1<<f|a<<c|s,zi=t}function eu(t){t.return!==null&&(Qa(t,1),$d(t,1,0))}function nu(t){for(;t===Qo;)Qo=Ur[--Nr],Ur[Nr]=null,Jo=Ur[--Nr],Ur[Nr]=null;for(;t===Ka;)Ka=$n[--ti],$n[ti]=null,zi=$n[--ti],$n[ti]=null,Pi=$n[--ti],$n[ti]=null}var wn=null,Ye=null,Te=!1,Ja=null,xi=!1,iu=Error(r(519));function $a(t){var n=Error(r(418,""));throw Bs(Qn(n,t)),iu}function tp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[xn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)me(oo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Le(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,s.value,s.defaultValue,s.children),Le(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||_g(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Nl),n=!0):n=!1,n||$a(t)}function ep(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:wn=wn.return}}function Ps(t){if(t!==wn)return!1;if(!Te)return ep(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&Ye&&$a(t),ep(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ye=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ye=null}}else n===27?(n=Ye,Aa(t.type)?(t=bf,bf=null,Ye=t):Ye=n):Ye=wn?ci(t.stateNode.nextSibling):null;return!0}function zs(){Ye=wn=null,Te=!1}function np(){var t=Ja;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),Ja=null),t}function Bs(t){Ja===null?Ja=[t]:Ja.push(t)}var au=$(null),tr=null,Bi=null;function fa(t,n,a){yt(au,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=au.current,xt(au)}function ru(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var O=0;O<n.length;O++)if(b.context===n[O]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ru(f.return,a,t),s||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ru(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Is(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=c.type;Vn(c.pendingProps.value,S.value)||(t!==null?t.push(b):t=[b])}}else if(c===Rt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}c=c.return}t!==null&&su(n,t,a,s),n.flags|=262144}function $o(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function er(t){tr=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return ip(tr,t)}function tl(t,n){return tr===null&&er(t),ip(t,n)}function ip(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var yv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Mv=o.unstable_scheduleCallback,Ev=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new yv,data:new Map,refCount:0}}function Fs(t){t.refCount--,t.refCount===0&&Mv(Ev,function(){t.controller.abort()})}var Hs=null,lu=0,Lr=0,Or=null;function bv(t,n){if(Hs===null){var a=Hs=[];lu=0,Lr=ff(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return lu++,n.then(ap,ap),n}function ap(){if(--lu===0&&Hs!==null){Or!==null&&(Or.status="fulfilled");var t=Hs;Hs=null,Lr=0,Or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Tv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var rp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&bv(t,n),rp!==null&&rp(t,n)};var nr=$(null);function cu(){var t=nr.current;return t!==null?t:ke.pooledCache}function el(t,n){n===null?yt(nr,nr.current):yt(nr,n.pool)}function sp(){var t=cu();return t===null?null:{parent:on._currentValue,pool:t}}var Gs=Error(r(460)),op=Error(r(474)),nl=Error(r(542)),uu={then:function(){}};function lp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function il(){}function cp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(il,il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fp(t),t;default:if(typeof n.status=="string")n.then(il,il);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fp(t),t}throw Vs=n,Gs}}var Vs=null;function up(){if(Vs===null)throw Error(r(459));var t=Vs;return Vs=null,t}function fp(t){if(t===Gs||t===nl)throw Error(r(483))}var ha=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Zo(t),Qd(t,null,a),n}return jo(t,s,n,a),Zo(t)}function ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}function du(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pu=!1;function Xs(){if(pu){var t=Or;if(t!==null)throw t}}function Ws(t,n,a,s){pu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var O=b,J=O.next;O.next=null,S===null?f=J:S.next=J,S=O;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==S&&(b===null?ut.firstBaseUpdate=J:b.next=J,ut.lastBaseUpdate=O))}if(f!==null){var gt=c.baseState;S=0,ut=J=O=null,b=f;do{var et=b.lane&-536870913,nt=et!==b.lane;if(nt?(Se&et)===et:(s&et)===et){et!==0&&et===Lr&&(pu=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=t,Jt=b;et=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(ze,gt,et);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,et=typeof ee=="function"?ee.call(ze,gt,et):ee,et==null)break t;gt=g({},gt,et);break t;case 2:ha=!0}}et=b.callback,et!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?(J=ut=nt,O=gt):ut=ut.next=nt,S|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;nt=b,b=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ut===null&&(O=gt),c.baseState=O,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ma|=S,t.lanes=S,t.memoizedState=gt}}function hp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function dp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)hp(a[t],n)}var Pr=$(null),al=$(0);function pp(t,n){t=Wi,yt(al,t),yt(Pr,n),Wi=t|n.baseLanes}function mu(){yt(al,Wi),yt(Pr,Pr.current)}function gu(){Wi=al.current,xt(Pr),xt(al)}var ma=0,ue=null,Oe=null,en=null,rl=!1,zr=!1,ir=!1,sl=0,qs=0,Br=null,Av=0;function Ke(){throw Error(r(321))}function _u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function vu(t,n,a,s,c,f){return ma=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Qp:Jp,ir=!1,f=a(s,c),ir=!1,zr&&(f=gp(n,a,s,c)),mp(t),f}function mp(t){P.H=hl;var n=Oe!==null&&Oe.next!==null;if(ma=0,en=Oe=ue=null,rl=!1,qs=0,Br=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&$o(t)&&(pn=!0))}function gp(t,n,a,s){ue=t;var c=0;do{if(zr&&(Br=null),qs=0,zr=!1,25<=c)throw Error(r(301));if(c+=1,en=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Lv,f=n(a,s)}while(zr);return f}function Rv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Ys(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(ue.flags|=1024),n}function xu(){var t=sl!==0;return sl=0,t}function Su(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}ma=0,en=Oe=ue=null,zr=!1,qs=sl=0,Br=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=t:en=en.next=t,en}function nn(){if(Oe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=t:en=en.next=t}return en}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(t){var n=qs;return qs+=1,Br===null&&(Br=[]),t=cp(Br,t,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Qp:Jp),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ys(t);if(t.$$typeof===L)return Tn(t)}throw Error(r(438,String(t)))}function Eu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ll(t){var n=nn();return bu(n,Oe,t)}function bu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=S=null,O=null,J=n,ut=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(Se&gt)===gt:(ma&gt)===gt){var et=J.revertLane;if(et===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Lr&&(ut=!0);else if((ma&et)===et){J=J.next,et===Lr&&(ut=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(b=O=gt,S=f):O=O.next=gt,ue.lanes|=et,Ma|=et;gt=J.action,ir&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else et={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(b=O=et,S=f):O=O.next=et,ue.lanes|=gt,Ma|=gt;J=J.next}while(J!==null&&J!==n);if(O===null?S=f:O.next=b,!Vn(f,t.memoizedState)&&(pn=!0,ut&&(a=Or,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Tu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function _p(t,n,a){var s=ue,c=nn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Oe||c).memoizedState,a);S&&(c.memoizedState=a,pn=!0),c=c.queue;var b=Sp.bind(null,s,c,t);if(js(2048,8,b,[t]),c.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Ir(9,cl(),xp.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(ma&124)!==0||vp(s,n,a)}return a}function vp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Mu(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function xp(t,n,a,s){n.value=a,n.getSnapshot=s,yp(n)&&Mp(t)}function Sp(t,n,a){return a(function(){yp(n)&&Mp(t)})}function yp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Mp(t){var n=wr(t,2);n!==null&&jn(n,t,2)}function Au(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),ir){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function Ep(t,n,a,s){return t.baseState=a,bu(t,Oe,typeof s=="function"?s:Fi)}function Cv(t,n,a,s,c){if(fl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var b=a(c,s),O=P.S;O!==null&&O(S,b),Tp(t,n,b)}catch(J){Ru(t,n,J)}finally{P.T=f}}else try{f=a(c,s),Tp(t,n,f)}catch(J){Ru(t,n,J)}}function Tp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Ap(t,n,s)},function(s){return Ru(t,n,s)}):Ap(t,n,a)}function Ap(t,n,a){n.status="fulfilled",n.value=a,Rp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,bp(t,a)))}function Ru(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==s)}t.action=null}function Rp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Cp(t,n){return n}function wp(t,n){if(Te){var a=ke.formState;if(a!==null){t:{var s=ue;if(Te){if(Ye){e:{for(var c=Ye,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=ci(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=s,a=jp.bind(null,ue,s),s.dispatch=a,s=Au(!1),f=Nu.bind(null,ue,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Cv.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Dp(t){var n=nn();return Up(n,Oe,t)}function Up(t,n,a){if(n=bu(t,n,Cp)[0],t=ll(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ys(n)}catch(S){throw S===Gs?nl:S}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Ir(9,cl(),wv.bind(null,c,a),null)),[s,f,t]}function wv(t,n){t.action=n}function Np(t){var n=nn(),a=Oe;if(a!==null)return Up(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ir(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Mu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function cl(){return{destroy:void 0,resource:void 0}}function Lp(){return nn().memoizedState}function ul(t,n,a,s){var c=On();s=s===void 0?null:s,ue.flags|=t,c.memoizedState=Ir(1|n,cl(),a,s)}function js(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Oe!==null&&s!==null&&_u(s,Oe.memoizedState.deps)?c.memoizedState=Ir(n,f,a,s):(ue.flags|=t,c.memoizedState=Ir(1|n,f,a,s))}function Op(t,n){ul(8390656,8,t,n)}function Pp(t,n){js(2048,8,t,n)}function zp(t,n){return js(4,2,t,n)}function Bp(t,n){return js(4,4,t,n)}function Ip(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fp(t,n,a){a=a!=null?a.concat([t]):null,js(4,4,Ip.bind(null,n,t),a)}function Cu(){}function Hp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&_u(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Gp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&_u(n,s[1]))return s[0];if(s=t(),ir){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function wu(t,n,a){return a===void 0||(ma&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Xm(),ue.lanes|=t,Ma|=t,a)}function Vp(t,n,a,s){return Vn(a,n)?a:Pr.current!==null?(t=wu(t,a,s),Vn(t,n)||(pn=!0),t):(ma&42)===0?(pn=!0,t.memoizedState=a):(t=Xm(),ue.lanes|=t,Ma|=t,n)}function kp(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=P.T,b={};P.T=b,Nu(t,!1,n,a);try{var O=c(),J=P.S;if(J!==null&&J(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=Tv(O,s);Zs(t,n,ut,Yn(t))}else Zs(t,n,s,Yn(t))}catch(gt){Zs(t,n,{then:function(){},status:"rejected",reason:gt},Yn())}finally{Z.p=f,P.T=S}}function Dv(){}function Du(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Xp(t).queue;kp(t,c,n,Y,a===null?Dv:function(){return Wp(t),a(s)})}function Xp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Wp(t){var n=Xp(t).next.queue;Zs(t,n,{},Yn())}function Uu(){return Tn(po)}function qp(){return nn().memoizedState}function Yp(){return nn().memoizedState}function Uv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=da(a);var s=pa(n,t,a);s!==null&&(jn(s,n,a),ks(s,n,a)),n={cache:ou()},t.payload=n;return}n=n.return}}function Nv(t,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)?Zp(n,a):(a=Qc(t,n,a,s),a!==null&&(jn(a,t,s),Kp(a,n,s)))}function jp(t,n,a){var s=Yn();Zs(t,n,a,s)}function Zs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(t))Zp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Vn(b,S))return jo(t,n,c,0),ke===null&&Yo(),!1}catch{}finally{}if(a=Qc(t,n,c,s),a!==null)return jn(a,t,s),Kp(a,n,s),!0}return!1}function Nu(t,n,a,s){if(s={lane:2,revertLane:ff(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(n)throw Error(r(479))}else n=Qc(t,a,s,2),n!==null&&jn(n,t,2)}function fl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Zp(t,n){zr=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Kp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}var hl={readContext:Tn,use:ol,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Qp={readContext:Tn,use:ol,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Op,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,Ip.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(ir){ot(!0);try{t()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(ir){ot(!0);try{a(n)}finally{ot(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Nv.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Au(t);var n=t.queue,a=jp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cu,useDeferredValue:function(t,n){var a=On();return wu(a,t,n)},useTransition:function(){var t=Au(!1);return t=kp.bind(null,ue,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=On();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||vp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Op(Sp.bind(null,s,f,t),[t]),s.flags|=2048,Ir(9,cl(),xp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=ke.identifierPrefix;if(Te){var a=zi,s=Pi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Av++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Uu,useFormState:wp,useActionState:wp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Eu,useCacheRefresh:function(){return On().memoizedState=Uv.bind(null,ue)}},Jp={readContext:Tn,use:ol,useCallback:Hp,useContext:Tn,useEffect:Pp,useImperativeHandle:Fp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:ll,useRef:Lp,useState:function(){return ll(Fi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=nn();return Vp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ll(Fi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:_p,useId:qp,useHostTransitionStatus:Uu,useFormState:Dp,useActionState:Dp,useOptimistic:function(t,n){var a=nn();return Ep(a,Oe,t,n)},useMemoCache:Eu,useCacheRefresh:Yp},Lv={readContext:Tn,use:ol,useCallback:Hp,useContext:Tn,useEffect:Pp,useImperativeHandle:Fp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:Tu,useRef:Lp,useState:function(){return Tu(Fi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=nn();return Oe===null?wu(a,t,n):Vp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Tu(Fi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:_p,useId:qp,useHostTransitionStatus:Uu,useFormState:Np,useActionState:Np,useOptimistic:function(t,n){var a=nn();return Oe!==null?Ep(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:Yp},Fr=null,Ks=0;function dl(t){var n=Ks;return Ks+=1,Fr===null&&(Fr=[]),cp(Fr,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $p(t){var n=t._init;return n(t._payload)}function tm(t){function n(X,H){if(t){var K=X.deletions;K===null?(X.deletions=[H],X.flags|=16):K.push(H)}}function a(X,H){if(!t)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function s(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=Oi(X,H),X.index=0,X.sibling=null,X}function f(X,H,K){return X.index=K,t?(K=X.alternate,K!==null?(K=K.index,K<H?(X.flags|=67108866,H):K):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function b(X,H,K,ht){return H===null||H.tag!==6?(H=$c(K,X.mode,ht),H.return=X,H):(H=c(H,K),H.return=X,H)}function O(X,H,K,ht){var Ht=K.type;return Ht===A?ut(X,H,K.props.children,ht,K.key):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===q&&$p(Ht)===H.type)?(H=c(H,K.props),Qs(H,K),H.return=X,H):(H=Ko(K.type,K.key,K.props,null,X.mode,ht),Qs(H,K),H.return=X,H)}function J(X,H,K,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=tu(K,X.mode,ht),H.return=X,H):(H=c(H,K.children||[]),H.return=X,H)}function ut(X,H,K,ht,Ht){return H===null||H.tag!==7?(H=Za(K,X.mode,ht,Ht),H.return=X,H):(H=c(H,K),H.return=X,H)}function gt(X,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=$c(""+H,X.mode,K),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return K=Ko(H.type,H.key,H.props,null,X.mode,K),Qs(K,H),K.return=X,K;case M:return H=tu(H,X.mode,K),H.return=X,H;case q:var ht=H._init;return H=ht(H._payload),gt(X,H,K)}if(dt(H)||ct(H))return H=Za(H,X.mode,K,null),H.return=X,H;if(typeof H.then=="function")return gt(X,dl(H),K);if(H.$$typeof===L)return gt(X,tl(X,H),K);pl(X,H)}return null}function et(X,H,K,ht){var Ht=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:b(X,H,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ht?O(X,H,K,ht):null;case M:return K.key===Ht?J(X,H,K,ht):null;case q:return Ht=K._init,K=Ht(K._payload),et(X,H,K,ht)}if(dt(K)||ct(K))return Ht!==null?null:ut(X,H,K,ht,null);if(typeof K.then=="function")return et(X,H,dl(K),ht);if(K.$$typeof===L)return et(X,H,tl(X,K),ht);pl(X,K)}return null}function nt(X,H,K,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return X=X.get(K)||null,b(H,X,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case x:return X=X.get(ht.key===null?K:ht.key)||null,O(H,X,ht,Ht);case M:return X=X.get(ht.key===null?K:ht.key)||null,J(H,X,ht,Ht);case q:var he=ht._init;return ht=he(ht._payload),nt(X,H,K,ht,Ht)}if(dt(ht)||ct(ht))return X=X.get(K)||null,ut(H,X,ht,Ht,null);if(typeof ht.then=="function")return nt(X,H,K,dl(ht),Ht);if(ht.$$typeof===L)return nt(X,H,K,tl(H,ht),Ht);pl(H,ht)}return null}function ee(X,H,K,ht){for(var Ht=null,he=null,Wt=H,$t=H=0,gn=null;Wt!==null&&$t<K.length;$t++){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ee=et(X,Wt,K[$t],ht);if(Ee===null){Wt===null&&(Wt=gn);break}t&&Wt&&Ee.alternate===null&&n(X,Wt),H=f(Ee,H,$t),he===null?Ht=Ee:he.sibling=Ee,he=Ee,Wt=gn}if($t===K.length)return a(X,Wt),Te&&Qa(X,$t),Ht;if(Wt===null){for(;$t<K.length;$t++)Wt=gt(X,K[$t],ht),Wt!==null&&(H=f(Wt,H,$t),he===null?Ht=Wt:he.sibling=Wt,he=Wt);return Te&&Qa(X,$t),Ht}for(Wt=s(Wt);$t<K.length;$t++)gn=nt(Wt,X,$t,K[$t],ht),gn!==null&&(t&&gn.alternate!==null&&Wt.delete(gn.key===null?$t:gn.key),H=f(gn,H,$t),he===null?Ht=gn:he.sibling=gn,he=gn);return t&&Wt.forEach(function(Ua){return n(X,Ua)}),Te&&Qa(X,$t),Ht}function Jt(X,H,K,ht){if(K==null)throw Error(r(151));for(var Ht=null,he=null,Wt=H,$t=H=0,gn=null,Ee=K.next();Wt!==null&&!Ee.done;$t++,Ee=K.next()){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ua=et(X,Wt,Ee.value,ht);if(Ua===null){Wt===null&&(Wt=gn);break}t&&Wt&&Ua.alternate===null&&n(X,Wt),H=f(Ua,H,$t),he===null?Ht=Ua:he.sibling=Ua,he=Ua,Wt=gn}if(Ee.done)return a(X,Wt),Te&&Qa(X,$t),Ht;if(Wt===null){for(;!Ee.done;$t++,Ee=K.next())Ee=gt(X,Ee.value,ht),Ee!==null&&(H=f(Ee,H,$t),he===null?Ht=Ee:he.sibling=Ee,he=Ee);return Te&&Qa(X,$t),Ht}for(Wt=s(Wt);!Ee.done;$t++,Ee=K.next())Ee=nt(Wt,X,$t,Ee.value,ht),Ee!==null&&(t&&Ee.alternate!==null&&Wt.delete(Ee.key===null?$t:Ee.key),H=f(Ee,H,$t),he===null?Ht=Ee:he.sibling=Ee,he=Ee);return t&&Wt.forEach(function(Ox){return n(X,Ox)}),Te&&Qa(X,$t),Ht}function ze(X,H,K,ht){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ht=K.key;H!==null;){if(H.key===Ht){if(Ht=K.type,Ht===A){if(H.tag===7){a(X,H.sibling),ht=c(H,K.props.children),ht.return=X,X=ht;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===q&&$p(Ht)===H.type){a(X,H.sibling),ht=c(H,K.props),Qs(ht,K),ht.return=X,X=ht;break t}a(X,H);break}else n(X,H);H=H.sibling}K.type===A?(ht=Za(K.props.children,X.mode,ht,K.key),ht.return=X,X=ht):(ht=Ko(K.type,K.key,K.props,null,X.mode,ht),Qs(ht,K),ht.return=X,X=ht)}return S(X);case M:t:{for(Ht=K.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(X,H.sibling),ht=c(H,K.children||[]),ht.return=X,X=ht;break t}else{a(X,H);break}else n(X,H);H=H.sibling}ht=tu(K,X.mode,ht),ht.return=X,X=ht}return S(X);case q:return Ht=K._init,K=Ht(K._payload),ze(X,H,K,ht)}if(dt(K))return ee(X,H,K,ht);if(ct(K)){if(Ht=ct(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Jt(X,H,K,ht)}if(typeof K.then=="function")return ze(X,H,dl(K),ht);if(K.$$typeof===L)return ze(X,H,tl(X,K),ht);pl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(X,H.sibling),ht=c(H,K),ht.return=X,X=ht):(a(X,H),ht=$c(K,X.mode,ht),ht.return=X,X=ht),S(X)):a(X,H)}return function(X,H,K,ht){try{Ks=0;var Ht=ze(X,H,K,ht);return Fr=null,Ht}catch(Wt){if(Wt===Gs||Wt===nl)throw Wt;var he=kn(29,Wt,null,X.mode);return he.lanes=ht,he.return=X,he}finally{}}}var Hr=tm(!0),em=tm(!1),ei=$(null),Si=null;function ga(t){var n=t.alternate;yt(ln,ln.current&1),yt(ei,t),Si===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(Si=t)}function nm(t){if(t.tag===22){if(yt(ln,ln.current),yt(ei,t),Si===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Si=t)}}else _a()}function _a(){yt(ln,ln.current),yt(ei,ei.current)}function Hi(t){xt(ei),Si===t&&(Si=null),xt(ln)}var ln=$(0);function ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ef(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Lu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ou={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(jn(n,t,s),ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(jn(n,t,s),ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(jn(n,t,a),ks(n,t,a))}};function im(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(c,f):!0}function am(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ou.enqueueReplaceState(n,n.state,null)}function ar(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function rm(t){gl(t)}function sm(t){console.error(t)}function om(t){gl(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function lm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Pu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function cm(t){return t=da(t),t.tag=3,t}function um(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){lm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){lm(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Ov(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return Si===null?sf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===uu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),lf(t,s,c)),!1;case 22:return a.flags|=65536,s===uu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),lf(t,s,c)),!1}throw Error(r(435,a.tag))}return lf(t,s,c),sf(),!1}if(Te)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==iu&&(t=Error(r(422),{cause:s}),Bs(Qn(t,a)))):(s!==iu&&(n=Error(r(423),{cause:s}),Bs(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Pu(t.stateNode,s,c),du(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),ao===null?ao=[f]:ao.push(f),je!==4&&(je=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Pu(a.stateNode,s,t),du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=cm(c),um(c,t,a,s),du(a,c),!1}a=a.return}while(a!==null);return!1}var fm=Error(r(461)),pn=!1;function yn(t,n,a,s){n.child=t===null?em(n,null,a,s):Hr(n,t.child,a,s)}function hm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var b in s)b!=="ref"&&(S[b]=s[b])}else S=s;return er(n),s=vu(t,n,a,S,f,c),b=xu(),t!==null&&!pn?(Su(t,n,c),Gi(t,n,c)):(Te&&b&&eu(n),n.flags|=1,yn(t,n,s,c),n.child)}function dm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pm(t,n,f,s,c)):(t=Ko(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ku(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(S,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Oi(f,s),t.ref=n.ref,t.return=n,n.child=t}function pm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ls(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,ku(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return zu(t,n,a,s,c)}function mm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return gm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&el(n,f!==null?f.cachePool:null),f!==null?pp(n,f):mu(),nm(n);else return n.lanes=n.childLanes=536870912,gm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(el(n,f.cachePool),pp(n,f),_a(),n.memoizedState=null):(t!==null&&el(n,null),mu(),_a());return yn(t,n,c,a),n.child}function gm(t,n,a,s){var c=cu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&el(n,null),mu(),nm(n),t!==null&&Is(t,n,s,!0),null}function vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function zu(t,n,a,s,c){return er(n),a=vu(t,n,a,s,void 0,c),s=xu(),t!==null&&!pn?(Su(t,n,c),Gi(t,n,c)):(Te&&s&&eu(n),n.flags|=1,yn(t,n,a,c),n.child)}function _m(t,n,a,s,c,f){return er(n),n.updateQueue=null,a=gp(n,s,a,c),mp(t),s=xu(),t!==null&&!pn?(Su(t,n,f),Gi(t,n,f)):(Te&&s&&eu(n),n.flags|=1,yn(t,n,a,f),n.child)}function vm(t,n,a,s,c){if(er(n),n.stateNode===null){var f=Dr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ou,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},fu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Dr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Lu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ou.enqueueReplaceState(f,f.state,null),Ws(n,s,f,c),Xs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,O=ar(a,b);f.props=O;var J=f.context,ut=a.contextType;S=Dr,typeof ut=="object"&&ut!==null&&(S=Tn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==S)&&am(n,f,s,S),ha=!1;var et=n.memoizedState;f.state=et,Ws(n,s,f,c),Xs(),J=n.memoizedState,b||et!==J||ha?(typeof gt=="function"&&(Lu(n,a,gt,s),J=n.memoizedState),(O=ha||im(n,a,O,s,et,J,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,hu(t,n),S=n.memoizedProps,ut=ar(a,S),f.props=ut,gt=n.pendingProps,et=f.context,J=a.contextType,O=Dr,typeof J=="object"&&J!==null&&(O=Tn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||et!==O)&&am(n,f,s,O),ha=!1,et=n.memoizedState,f.state=et,Ws(n,s,f,c),Xs();var nt=n.memoizedState;S!==gt||et!==nt||ha||t!==null&&t.dependencies!==null&&$o(t.dependencies)?(typeof b=="function"&&(Lu(n,a,b,s),nt=n.memoizedState),(ut=ha||im(n,a,ut,s,et,nt,O)||t!==null&&t.dependencies!==null&&$o(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=O,s=ut):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,vl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Hr(n,t.child,null,c),n.child=Hr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function xm(t,n,a,s){return zs(),n.flags|=256,yn(t,n,a,s),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Iu(t){return{baseLanes:t,cachePool:sp()}}function Fu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function Sm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(c?ga(n):_a(),Te){var b=Ye,O;if(O=b){t:{for(O=b,b=xi;O.nodeType!==8;){if(!b){b=null;break t}if(O=ci(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ka!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},O=kn(18,null,null,0),O.stateNode=b,O.return=n,n.child=O,wn=n,Ye=null,O=!0):O=!1}O||$a(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ef(b)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return b=s.children,s=s.fallback,c?(_a(),c=n.mode,b=xl({mode:"hidden",children:b},c),s=Za(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,c=n.child,c.memoizedState=Iu(a),c.childLanes=Fu(t,S,a),n.memoizedState=Bu,s):(ga(n),Hu(n,b))}if(O=t.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=Gu(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),c=s.fallback,b=n.mode,s=xl({mode:"visible",children:s.children},b),c=Za(c,b,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Hr(n,t.child,null,a),s=n.child,s.memoizedState=Iu(a),s.childLanes=Fu(t,S,a),n.memoizedState=Bu,n=c);else if(ga(n),Ef(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Bs({value:s,source:null,stack:null}),n=Gu(t,n,a)}else if(pn||Is(t,n,a,!1),S=(a&t.childLanes)!==0,pn||S){if(S=ke,S!==null&&(s=a&-a,s=(s&42)!==0?1:ne(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,wr(t,s),jn(S,t,s),fm;b.data==="$?"||sf(),n=Gu(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Ye=ci(b.nextSibling),wn=n,Te=!0,Ja=null,xi=!1,t!==null&&($n[ti++]=Pi,$n[ti++]=zi,$n[ti++]=Ka,Pi=t.id,zi=t.overflow,Ka=n),n=Hu(n,s.children),n.flags|=4096);return n}return c?(_a(),c=s.fallback,b=n.mode,O=t.child,J=O.sibling,s=Oi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,J!==null?c=Oi(J,c):(c=Za(c,b,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,b=t.child.memoizedState,b===null?b=Iu(a):(O=b.cachePool,O!==null?(J=on._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=sp(),b={baseLanes:b.baseLanes|a,cachePool:O}),c.memoizedState=b,c.childLanes=Fu(t,S,a),n.memoizedState=Bu,s):(ga(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Hu(t,n){return n=xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xl(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Gu(t,n,a){return Hr(n,t.child,null,a),t=Hu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ym(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ru(t.return,n,a)}function Vu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Mm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(yn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,a,n);else if(t.tag===19)ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ml(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Vu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ml(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Vu(n,!0,a,null,f);break;case"together":Vu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ku(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&$o(t)))}function Pv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),fa(n,on,t.memoizedState.cache),zs();break;case 27:case 5:Qt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sm(t,n,a):(ga(n),t=Gi(t,n,a),t!==null?t.sibling:null);ga(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Is(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Mm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,mm(t,n,a);case 24:fa(n,on,t.memoizedState.cache)}return Gi(t,n,a)}function Em(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!ku(t,a)&&(n.flags&128)===0)return pn=!1,Pv(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Te&&(n.flags&1048576)!==0&&$d(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Jc(s)?(t=ar(s,t),n.tag=1,n=vm(null,n,s,t,a)):(n.tag=0,n=zu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===w){n.tag=11,n=hm(null,n,s,t,a);break t}else if(c===I){n.tag=14,n=dm(null,n,s,t,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return zu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),vm(t,n,s,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,hu(t,n),Ws(n,s,null,a);var S=n.memoizedState;if(s=S.cache,fa(n,on,s),s!==f.cache&&su(n,[on],a,!0),Xs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=xm(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Bs(c),n=xm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=ci(t.firstChild),wn=n,Te=!0,Ja=null,xi=!0,a=em(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),s===c){n=Gi(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return vl(t,n),t===null?(a=Rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=Ll(Mt.current).createElement(a),s[rn]=n,s[xn]=t,En(s,a,t),tn(s),n.stateNode=s):n.memoizedState=Rg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&Te&&(s=n.stateNode=bg(n.type,n.pendingProps,Mt.current),wn=n,xi=!0,c=Ye,Aa(n.type)?(bf=c,Ye=ci(s.firstChild)):Ye=c),yn(t,n,n.pendingProps.children,a),vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((c=s=Ye)&&(s=cx(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,wn=n,Ye=ci(s.firstChild),xi=!1,c=!0):c=!1),c||$a(n)),Qt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,Sf(c,f)?s=null:S!==null&&Sf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=vu(t,n,Rv,null,null,a),po._currentValue=c),vl(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=Ye)&&(a=ux(a,n.pendingProps,xi),a!==null?(n.stateNode=a,wn=n,Ye=null,t=!0):t=!1),t||$a(n)),null;case 13:return Sm(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Hr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return hm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=Tn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return dm(t,n,n.type,n.pendingProps,a);case 15:return pm(t,n,n.type,n.pendingProps,a);case 19:return Mm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=xl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return mm(t,n,a);case 24:return er(n),s=Tn(on),t===null?(c=cu(),c===null&&(c=ke,f=ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},fu(n),fa(n,on,c)):((t.lanes&a)!==0&&(hu(t,n),Ws(n,null,null,a),Xs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,on,s)):(s=f.cache,fa(n,on,s),s!==c.cache&&su(n,[on],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(t){t.flags|=4}function bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ng(n)){if(n=ei.current,n!==null&&((Se&4194048)===Se?Si!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Si))throw Vs=uu,op;t.flags|=8192}}function Sl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nt():536870912,t.lanes|=n,Xr|=n)}function Js(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function zv(t,n,a){var s=n.pendingProps;switch(nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,np())),qe(n),null;case 26:return a=n.memoizedState,t===null?(Vi(n),a!==null?(qe(n),bm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Vi(n),qe(n),bm(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Vi(n),qe(n),n.flags&=-16777217),null;case 27:Ne(n),a=Mt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Q.current,Ps(n)?tp(n):(t=bg(c,s,a),n.stateNode=t,Vi(n))}return qe(n),null;case 5:if(Ne(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=Q.current,Ps(n))tp(n);else{switch(c=Ll(Mt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[rn]=n,t[xn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(En(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Vi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Mt.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||_g(t.nodeValue,a)),t||$a(n)}else t=Ll(t).createTextNode(s),t[rn]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=np(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Sl(n,n.updateQueue),qe(n),null;case 4:return oe(),t===null&&mf(n.stateNode.containerInfo),qe(n),null;case 10:return Ii(n.type),qe(n),null;case 19:if(xt(ln),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Js(c,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ml(t),f!==null){for(n.flags|=128,Js(c,!1),t=f.updateQueue,n.updateQueue=t,Sl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jd(a,t),a=a.sibling;return yt(ln,ln.current&1|2),n.child}t=t.sibling}c.tail!==null&&de()>El&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304)}else{if(!s)if(t=ml(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Sl(n,t),Js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Te)return qe(n),null}else 2*de()-c.renderingStartTime>El&&a!==536870912&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,t=ln.current,yt(ln,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Hi(n),gu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Sl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(on),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Bv(t,n){switch(nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(on),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xt(ln),null;case 4:return oe(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),gu(),t!==null&&xt(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(on),null;case 25:return null;default:return null}}function Tm(t,n){switch(nu(n),n.tag){case 3:Ii(on),oe();break;case 26:case 27:case 5:Ne(n);break;case 4:oe();break;case 13:Hi(n);break;case 19:xt(ln);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),gu(),t!==null&&xt(nr);break;case 24:Ii(on)}}function $s(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(b){Ge(n,n.return,b)}}function va(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var O=a,J=b;try{J()}catch(ut){Ge(c,O,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ge(n,n.return,ut)}}function Am(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{dp(n,a)}catch(s){Ge(t,t.return,s)}}}function Rm(t,n,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function to(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ge(t,n,c)}}function yi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Cm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function Xu(t,n,a){try{var s=t.stateNode;ax(s,t.type,a,n),s[xn]=n}catch(c){Ge(t,t.return,c)}}function wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function Wu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Nl));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(qu(t,n,a),t=t.sibling;t!==null;)qu(t,n,a),t=t.sibling}function yl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yl(t,n,a),t=t.sibling;t!==null;)yl(t,n,a),t=t.sibling}function Dm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,s,a),n[rn]=t,n[xn]=a}catch(f){Ge(t,t.return,f)}}var ki=!1,Qe=!1,Yu=!1,Um=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Iv(t,n){if(t=t.containerInfo,vf=Fl,t=Vd(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,O=-1,J=0,ut=0,gt=t,et=null;e:for(;;){for(var nt;gt!==a||c!==0&&gt.nodeType!==3||(b=S+c),gt!==f||s!==0&&gt.nodeType!==3||(O=S+s),gt.nodeType===3&&(S+=gt.nodeValue.length),(nt=gt.firstChild)!==null;)et=gt,gt=nt;for(;;){if(gt===t)break e;if(et===a&&++J===c&&(b=S),et===f&&++ut===s&&(O=S),(nt=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=nt}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(xf={focusedElem:t,selectionRange:a},Fl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=ar(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Nm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:xa(t,a),s&4&&$s(5,a);break;case 1:if(xa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&Am(a),s&512&&to(a,a.return);break;case 3:if(xa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dp(t,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&Dm(a);case 26:case 5:xa(t,a),n===null&&s&4&&Cm(a),s&512&&to(a,a.return);break;case 12:xa(t,a);break;case 13:xa(t,a),s&4&&Pm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Yv.bind(null,a),fx(t,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||Qe,c=ki;var f=Qe;ki=s,(Qe=n)&&!f?Sa(t,a,(a.subtreeFlags&8772)!==0):xa(t,a),ki=c,Qe=f}break;case 30:break;default:xa(t,a)}}function Lm(t){var n=t.alternate;n!==null&&(t.alternate=null,Lm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Pn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Om(t,n,a),a=a.sibling}function Om(t,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Qe||yi(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||yi(a,n);var s=We,c=Pn;Aa(a.type)&&(We=a.stateNode,Pn=!1),Xi(t,n,a),co(a.stateNode),We=s,Pn=c;break;case 5:Qe||yi(a,n);case 6:if(s=We,c=Pn,We=null,Xi(t,n,a),We=s,Pn=c,We!==null)if(Pn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(Pn?(t=We,Mg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vo(t)):Mg(We,a.stateNode));break;case 4:s=We,c=Pn,We=a.stateNode.containerInfo,Pn=!0,Xi(t,n,a),We=s,Pn=c;break;case 0:case 11:case 14:case 15:Qe||va(2,a,n),Qe||va(4,a,n),Xi(t,n,a);break;case 1:Qe||(yi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rm(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Xi(t,n,a),Qe=s;break;default:Xi(t,n,a)}}function Pm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vo(t)}catch(a){Ge(n,n.return,a)}}function Fv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Um),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Um),n;default:throw Error(r(435,t.tag))}}function ju(t,n){var a=Fv(t);n.forEach(function(s){var c=jv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Aa(b.type)){We=b.stateNode,Pn=!1;break t}break;case 5:We=b.stateNode,Pn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Pn=!0;break t}b=b.return}if(We===null)throw Error(r(160));Om(f,S,c),We=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)zm(n,t),n=n.sibling}var li=null;function zm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(va(3,t,t.return),$s(3,t),va(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&(Qe||a===null||yi(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Xn(n,t),Wn(t),s&512&&(Qe||a===null||yi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[sa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,s,a),f[rn]=t,tn(f),s=f;break t;case"link":var S=Dg("link","href",c).get(s+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Dg("meta","content",c).get(s+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,tn(f),s=f}t.stateNode=s}else Ug(c,t.type,t.stateNode);else t.stateNode=wg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ug(c,t.type,t.stateNode):wg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Xu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&(Qe||a===null||yi(a,a.return)),a!==null&&s&4&&Xu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&(Qe||a===null||yi(a,a.return)),t.flags&32){c=t.stateNode;try{vi(c,"")}catch(nt){Ge(t,t.return,nt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Xu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Yu=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(nt){Ge(t,t.return,nt)}}break;case 3:if(zl=null,c=li,li=Ol(n.containerInfo),Xn(n,t),li=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(nt){Ge(t,t.return,nt)}Yu&&(Yu=!1,Bm(t));break;case 4:s=li,li=Ol(t.stateNode.containerInfo),Xn(n,t),Wn(t),li=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tf=de()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ju(t,s)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=ki,ut=Qe;if(ki=J||c,Qe=ut||O,Xn(n,t),Qe=ut,ki=J,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||ki||Qe||rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=O.stateNode;var gt=O.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Ge(O,O.return,nt)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(nt){Ge(O,O.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ju(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ju(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Wu(t);yl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(vi(S,""),a.flags&=-33);var b=Wu(t);yl(t,b,S);break;case 3:case 4:var O=a.stateNode.containerInfo,J=Wu(t);qu(t,J,O);break;default:throw Error(r(161))}}catch(ut){Ge(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(t,n.alternate,n),n=n.sibling}function rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),rr(n);break;case 1:yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),rr(n);break;case 27:co(n.stateNode);case 26:case 5:yi(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(c,f,a),$s(4,f);break;case 1:if(Sa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ge(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)hp(O[c],b)}catch(J){Ge(s,s.return,J)}}a&&S&64&&Am(f),to(f,f.return);break;case 27:Dm(f);case 26:case 5:Sa(c,f,a),a&&s===null&&S&4&&Cm(f),to(f,f.return);break;case 12:Sa(c,f,a);break;case 13:Sa(c,f,a),a&&S&4&&Pm(c,f);break;case 22:f.memoizedState===null&&Sa(c,f,a),to(f,f.return);break;case 30:break;default:Sa(c,f,a)}n=n.sibling}}function Zu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fs(a))}function Ku(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Im(t,n,a,s),n=n.sibling}function Im(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&$s(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t)));break;case 12:if(c&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ge(n,n.return,O)}}else Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):eo(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,Gr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Zu(S,n);break;case 24:Mi(t,n,a,s),c&2048&&Ku(n.alternate,n);break;default:Mi(t,n,a,s)}}function Gr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,b=a,O=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Gr(f,S,b,O,c),$s(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Gr(f,S,b,O,c):eo(f,S):(ut._visibility|=2,Gr(f,S,b,O,c)),c&&J&2048&&Zu(S.alternate,S);break;case 24:Gr(f,S,b,O,c),c&&J&2048&&Ku(S.alternate,S);break;default:Gr(f,S,b,O,c)}n=n.sibling}}function eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:eo(a,s),c&2048&&Zu(s.alternate,s);break;case 24:eo(a,s),c&2048&&Ku(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function Vr(t){if(t.subtreeFlags&no)for(t=t.child;t!==null;)Fm(t),t=t.sibling}function Fm(t){switch(t.tag){case 26:Vr(t),t.flags&no&&t.memoizedState!==null&&bx(li,t.memoizedState,t.memoizedProps);break;case 5:Vr(t);break;case 3:case 4:var n=li;li=Ol(t.stateNode.containerInfo),Vr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,Vr(t),no=n):Vr(t));break;default:Vr(t)}}function Hm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Vm(s,t)}Hm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gm(t),t=t.sibling}function Gm(t){switch(t.tag){case 0:case 11:case 15:io(t),t.flags&2048&&va(9,t,t.return);break;case 3:io(t);break;case 12:io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):io(t);break;default:io(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Vm(s,t)}Hm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:va(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function Vm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Lm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Hv={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Gv=typeof WeakMap=="function"?WeakMap:Map,we=0,ke=null,pe=null,Se=0,De=0,qn=null,ya=!1,kr=!1,Qu=!1,Wi=0,je=0,Ma=0,sr=0,Ju=0,ni=0,Xr=0,ao=null,zn=null,$u=!1,tf=0,El=1/0,bl=null,Ea=null,Mn=0,ba=null,Wr=null,qr=0,ef=0,nf=null,km=null,ro=0,af=null;function Yn(){if((we&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var t=Lr;return t!==0?t:ff()}return Me()}function Xm(){ni===0&&(ni=(Se&536870912)===0||Te?k():536870912);var t=ei.current;return t!==null&&(t.flags|=32),ni}function jn(t,n,a){(t===ke&&(De===2||De===9)||t.cancelPendingCommit!==null)&&(Yr(t,0),Ta(t,Se,ni,!1)),Bt(t,a),((we&2)===0||t!==ke)&&(t===ke&&((we&2)===0&&(sr|=a),je===4&&Ta(t,Se,ni,!1)),Ei(t))}function Wm(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),c=s?Xv(t,n):of(t,n,!0),f=s;do{if(c===0){kr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Vv(a)){c=of(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=t;c=ao;var O=b.current.memoizedState.isDehydrated;if(O&&(Yr(b,S).flags|=256),S=of(b,S,!1),S!==2){if(Qu&&!O){b.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Yr(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ni,!ya);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=tf+300-de(),10<c)){if(Ta(s,n,ni,!ya),Yt(s,0,!0)!==0)break t;s.timeoutHandle=Sg(qm.bind(null,s,a,zn,bl,$u,n,ni,sr,Xr,ya,f,2,-0,0),c);break t}qm(s,a,zn,bl,$u,n,ni,sr,Xr,ya,f,0,-0,0)}}break}while(!0);Ei(t)}function qm(t,n,a,s,c,f,S,b,O,J,ut,gt,et,nt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:Ex},Fm(n),gt=Tx(),gt!==null)){t.cancelPendingCommit=gt($m.bind(null,t,n,f,a,s,c,S,b,O,ut,1,et,nt)),Ta(t,f,S,!J);return}$m(t,n,f,a,s,c,S,b,O)}function Vv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~Ju,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&_t(t,a,n)}function Tl(){return(we&6)===0?(so(0),!1):!0}function rf(){if(pe!==null){if(De===0)var t=pe.return;else t=pe,Bi=tr=null,yu(t),Fr=null,Ks=0,t=pe;for(;t!==null;)Tm(t.alternate,t),t=t.return;pe=null}}function Yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,sx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),rf(),ke=t,pe=a=Oi(t.current,null),Se=n,De=0,qn=null,ya=!1,kr=Ct(t,n),Qu=!1,Xr=ni=Ju=sr=Ma=je=0,zn=ao=null,$u=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return Wi=n,Yo(),a}function Ym(t,n){ue=null,P.H=hl,n===Gs||n===nl?(n=up(),De=3):n===op?(n=up(),De=4):De=n===fm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pe===null&&(je=1,_l(t,Qn(n,t.current)))}function jm(){var t=P.H;return P.H=hl,t===null?hl:t}function Zm(){var t=P.A;return P.A=Hv,t}function sf(){je=4,ya||(Se&4194048)!==Se&&ei.current!==null||(kr=!0),(Ma&134217727)===0&&(sr&134217727)===0||ke===null||Ta(ke,Se,ni,!1)}function of(t,n,a){var s=we;we|=2;var c=jm(),f=Zm();(ke!==t||Se!==n)&&(bl=null,Yr(t,n)),n=!1;var S=je;t:do try{if(De!==0&&pe!==null){var b=pe,O=qn;switch(De){case 8:rf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var J=De;if(De=0,qn=null,jr(t,b,O,J),a&&kr){S=0;break t}break;default:J=De,De=0,qn=null,jr(t,b,O,J)}}kv(),S=je;break}catch(ut){Ym(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Bi=tr=null,we=s,P.H=c,P.A=f,pe===null&&(ke=null,Se=0,Yo()),S}function kv(){for(;pe!==null;)Km(pe)}function Xv(t,n){var a=we;we|=2;var s=jm(),c=Zm();ke!==t||Se!==n?(bl=null,El=de()+500,Yr(t,n)):kr=Ct(t,n);t:do try{if(De!==0&&pe!==null){n=pe;var f=qn;e:switch(De){case 1:De=0,qn=null,jr(t,n,f,1);break;case 2:case 9:if(lp(f)){De=0,qn=null,Qm(n);break}n=function(){De!==2&&De!==9||ke!==t||(De=7),Ei(t)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:lp(f)?(De=0,qn=null,Qm(n)):(De=0,qn=null,jr(t,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var b=pe;if(!S||Ng(S)){De=0,qn=null;var O=b.sibling;if(O!==null)pe=O;else{var J=b.return;J!==null?(pe=J,Al(J)):pe=null}break e}}De=0,qn=null,jr(t,n,f,5);break;case 6:De=0,qn=null,jr(t,n,f,6);break;case 8:rf(),je=6;break t;default:throw Error(r(462))}}Wv();break}catch(ut){Ym(t,ut)}while(!0);return Bi=tr=null,P.H=s,P.A=c,we=a,pe!==null?0:(ke=null,Se=0,Yo(),je)}function Wv(){for(;pe!==null&&!vn();)Km(pe)}function Km(t){var n=Em(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?Al(t):pe=n}function Qm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_m(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=_m(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:yu(n);default:Tm(a,n),n=pe=Jd(n,Wi),n=Em(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?Al(t):pe=n}function jr(t,n,a,s){Bi=tr=null,yu(n),Fr=null,Ks=0;var c=n.return;try{if(Ov(t,c,n,a,Se)){je=1,_l(t,Qn(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;je=1,_l(t,Qn(a,t.current)),pe=null;return}n.flags&32768?(Te||s===1?t=!0:kr||(Se&536870912)!==0?t=!1:(ya=t=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),Jm(n,t)):Al(n)}function Al(t){var n=t;do{if((n.flags&32768)!==0){Jm(n,ya);return}t=n.return;var a=zv(n.alternate,n,Wi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);je===0&&(je=5)}function Jm(t,n){do{var a=Bv(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);je=6,pe=null}function $m(t,n,a,s,c,f,S,b,O){t.cancelPendingCommit=null;do Rl();while(Mn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Kc,At(t,a,f,S,b,O),t===ke&&(pe=ke=null,Se=0),Wr=n,ba=t,qr=a,ef=f,nf=c,km=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zv(ae,function(){return ag(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=Z.p,Z.p=2,S=we,we|=4;try{Iv(t,n,a)}finally{we=S,Z.p=c,P.T=s}}Mn=1,tg(),eg(),ng()}}function tg(){if(Mn===1){Mn=0;var t=ba,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=we;we|=4;try{zm(n,t);var f=xf,S=Vd(t.containerInfo),b=f.focusedElem,O=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&Gd(b.ownerDocument.documentElement,b)){if(O!==null&&Wc(b)){var J=O.start,ut=O.end;if(ut===void 0&&(ut=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ut,b.value.length);else{var gt=b.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),ee=b.textContent.length,Jt=Math.min(O.start,ee),ze=O.end===void 0?Jt:Math.min(O.end,ee);!nt.extend&&Jt>ze&&(S=ze,ze=Jt,Jt=S);var X=Hd(b,Jt),H=Hd(b,ze);if(X&&H&&(nt.rangeCount!==1||nt.anchorNode!==X.node||nt.anchorOffset!==X.offset||nt.focusNode!==H.node||nt.focusOffset!==H.offset)){var K=gt.createRange();K.setStart(X.node,X.offset),nt.removeAllRanges(),Jt>ze?(nt.addRange(K),nt.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),nt.addRange(K))}}}}for(gt=[],nt=b;nt=nt.parentNode;)nt.nodeType===1&&gt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var ht=gt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Fl=!!vf,xf=vf=null}finally{we=c,Z.p=s,P.T=a}}t.current=n,Mn=2}}function eg(){if(Mn===2){Mn=0;var t=ba,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=we;we|=4;try{Nm(t,n.alternate,n)}finally{we=c,Z.p=s,P.T=a}}Mn=3}}function ng(){if(Mn===4||Mn===3){Mn=0,ye();var t=ba,n=Wr,a=qr,s=km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Wr=ba=null,ig(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),Ce(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var b=s[S];f(b.value,{componentStack:b.stack})}}finally{P.T=n,Z.p=c}}(qr&3)!==0&&Rl(),Ei(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===af?ro++:(ro=0,af=t):ro=0,so(0)}}function ig(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Fs(n)))}function Rl(t){return tg(),eg(),ng(),ag()}function ag(){if(Mn!==5)return!1;var t=ba,n=ef;ef=0;var a=Ce(qr),s=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=nf,nf=null;var f=ba,S=qr;if(Mn=0,Wr=ba=null,qr=0,(we&6)!==0)throw Error(r(331));var b=we;if(we|=4,Gm(f.current),Im(f,f.current,S,a),we=b,so(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,P.T=s,ig(t,n)}}function rg(t,n,a){n=Qn(a,n),n=Pu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(Bt(t,2),Ei(t))}function Ge(t,n,a){if(t.tag===3)rg(t,t,a);else for(;n!==null;){if(n.tag===3){rg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){t=Qn(a,t),a=cm(2),s=pa(n,a,2),s!==null&&(um(a,s,n,t),Bt(s,2),Ei(s));break}}n=n.return}}function lf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Gv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Qu=!0,c.add(a),t=qv.bind(null,t,n,a),n.then(t,t))}function qv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Se&a)===a&&(je===4||je===3&&(Se&62914560)===Se&&300>de()-tf?(we&2)===0&&Yr(t,0):Ju|=a,Xr===Se&&(Xr=0)),Ei(t)}function sg(t,n){n===0&&(n=Nt()),t=wr(t,n),t!==null&&(Bt(t,n),Ei(t))}function Yv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),sg(t,a)}function jv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),sg(t,a)}function Zv(t,n){return ge(t,n)}var Cl=null,Zr=null,cf=!1,wl=!1,uf=!1,or=0;function Ei(t){t!==Zr&&t.next===null&&(Zr===null?Cl=Zr=t:Zr=Zr.next=t),wl=!0,cf||(cf=!0,Qv())}function so(t,n){if(!uf&&wl){uf=!0;do for(var a=!1,s=Cl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ug(s,f))}else f=Se,f=Yt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,ug(s,f));s=s.next}while(a);uf=!1}}function Kv(){og()}function og(){wl=cf=!1;var t=0;or!==0&&(rx()&&(t=or),or=0);for(var n=de(),a=null,s=Cl;s!==null;){var c=s.next,f=lg(s,n);f===0?(s.next=null,a===null?Cl=c:a.next=c,c===null&&(Zr=a)):(a=s,(t!==0||(f&3)!==0)&&(wl=!0)),s=c}so(t)}function lg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Pt(f),b=1<<S,O=c[S];O===-1?((b&a)===0||(b&s)!==0)&&(c[S]=ie(b,n)):O<=n&&(t.expiredLanes|=b),f&=~b}if(n=ke,a=Se,a=Yt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(De===2||De===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&B(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&B(s),Ce(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return s=cg.bind(null,t),a=ge(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&B(s),t.callbackPriority=2,t.callbackNode=null,2}function cg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Rl()&&t.callbackNode!==a)return null;var s=Se;return s=Yt(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Wm(t,s,n),lg(t,de()),t.callbackNode!=null&&t.callbackNode===a?cg.bind(null,t):null)}function ug(t,n){if(Rl())return null;Wm(t,n,!0)}function Qv(){ox(function(){(we&6)!==0?ge(_e,Kv):og()})}function ff(){return or===0&&(or=k()),or}function fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function hg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Jv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=fg((c[xn]||null).action),S=s.submitter;S&&(n=(n=S[xn]||null)?fg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new Xo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var O=S?hg(c,S):new FormData(c);Du(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(b.preventDefault(),O=S?hg(c,S):new FormData(c),Du(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var hf=0;hf<Zc.length;hf++){var df=Zc[hf],$v=df.toLowerCase(),tx=df[0].toUpperCase()+df.slice(1);oi($v,"on"+tx)}oi(Wd,"onAnimationEnd"),oi(qd,"onAnimationIteration"),oi(Yd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(_v,"onTransitionRun"),oi(vv,"onTransitionStart"),oi(xv,"onTransitionCancel"),oi(jd,"onTransitionEnd"),T("onMouseEnter",["mouseout","mouseover"]),T("onMouseLeave",["mouseout","mouseover"]),T("onPointerEnter",["pointerout","pointerover"]),T("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function dg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var b=s[S],O=b.instance,J=b.currentTarget;if(b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ut){gl(ut)}c.currentTarget=null,f=O}else for(S=0;S<s.length;S++){if(b=s[S],O=b.instance,J=b.currentTarget,b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ut){gl(ut)}c.currentTarget=null,f=O}}}}function me(t,n){var a=n[ka];a===void 0&&(a=n[ka]=new Set);var s=t+"__bubble";a.has(s)||(pg(n,t,2,!1),a.add(s))}function pf(t,n,a){var s=0;n&&(s|=4),pg(a,t,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[Dl]){t[Dl]=!0,Io.forEach(function(a){a!=="selectionchange"&&(ex.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,pf("selectionchange",!1,n))}}function pg(t,n,a,s){switch(Ig(n)){case 2:var c=Cx;break;case 8:c=wx;break;default:c=wf}a=c.bind(null,n,a,t),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function gf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var b=s.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=Ci(b),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=f=S;continue t}b=b.parentNode}}s=s.return}yd(function(){var J=f,ut=Oc(a),gt=[];t:{var et=Zd.get(t);if(et!==void 0){var nt=Xo,ee=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":nt=Z_;break;case"focusin":ee="focus",nt=Hc;break;case"focusout":ee="blur",nt=Hc;break;case"beforeblur":case"afterblur":nt=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=B_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=J_;break;case Wd:case qd:case Yd:nt=H_;break;case jd:nt=tv;break;case"scroll":case"scrollend":nt=P_;break;case"wheel":nt=nv;break;case"copy":case"cut":case"paste":nt=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Ad;break;case"toggle":case"beforetoggle":nt=av}var Jt=(n&4)!==0,ze=!Jt&&(t==="scroll"||t==="scrollend"),X=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var H=J,K;H!==null;){var ht=H;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||X===null||(ht=As(H,X),ht!=null&&Jt.push(lo(H,ht,K))),ze)break;H=H.return}0<Jt.length&&(et=new nt(et,ee,null,a,ut),gt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",et&&a!==Lc&&(ee=a.relatedTarget||a.fromElement)&&(Ci(ee)||ee[Nn]))break t;if((nt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(ee=a.relatedTarget||a.toElement,nt=J,ee=ee?Ci(ee):null,ee!==null&&(ze=u(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(nt=null,ee=J),nt!==ee)){if(Jt=bd,ht="onMouseLeave",X="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Ad,ht="onPointerLeave",X="onPointerEnter",H="pointer"),ze=nt==null?et:Wa(nt),K=ee==null?et:Wa(ee),et=new Jt(ht,H+"leave",nt,a,ut),et.target=ze,et.relatedTarget=K,ht=null,Ci(ut)===J&&(Jt=new Jt(X,H+"enter",ee,a,ut),Jt.target=K,Jt.relatedTarget=ze,ht=Jt),ze=ht,nt&&ee)e:{for(Jt=nt,X=ee,H=0,K=Jt;K;K=Kr(K))H++;for(K=0,ht=X;ht;ht=Kr(ht))K++;for(;0<H-K;)Jt=Kr(Jt),H--;for(;0<K-H;)X=Kr(X),K--;for(;H--;){if(Jt===X||X!==null&&Jt===X.alternate)break e;Jt=Kr(Jt),X=Kr(X)}Jt=null}else Jt=null;nt!==null&&mg(gt,et,nt,Jt,!1),ee!==null&&ze!==null&&mg(gt,ze,ee,Jt,!0)}}t:{if(et=J?Wa(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ht=Od;else if(Nd(et))if(Pd)Ht=pv;else{Ht=hv;var he=fv}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Nc(J.elementType)&&(Ht=Od):Ht=dv;if(Ht&&(Ht=Ht(t,J))){Ld(gt,Ht,a,ut);break t}he&&he(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&bn(et,"number",et.value)}switch(he=J?Wa(J):window,t){case"focusin":(Nd(he)||he.contentEditable==="true")&&(Ar=he,qc=J,Os=null);break;case"focusout":Os=qc=Ar=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,kd(gt,a,ut);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":kd(gt,a,ut)}var Wt;if(Vc)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Tr?Dd(t,a)&&($t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Rd&&a.locale!=="ko"&&(Tr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Tr&&(Wt=Md()):(ua=ut,Bc="value"in ua?ua.value:ua.textContent,Tr=!0)),he=Ul(J,$t),0<he.length&&($t=new Td($t,t,null,a,ut),gt.push({event:$t,listeners:he}),Wt?$t.data=Wt:(Wt=Ud(a),Wt!==null&&($t.data=Wt)))),(Wt=sv?ov(t,a):lv(t,a))&&($t=Ul(J,"onBeforeInput"),0<$t.length&&(he=new Td("onBeforeInput","beforeinput",null,a,ut),gt.push({event:he,listeners:$t}),he.data=Wt)),Jv(gt,t,J,a,ut)}dg(gt,n)})}function lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ul(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=As(t,a),c!=null&&s.unshift(lo(t,c,f)),c=As(t,n),c!=null&&s.push(lo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mg(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var b=a,O=b.alternate,J=b.stateNode;if(b=b.tag,O!==null&&O===s)break;b!==5&&b!==26&&b!==27||J===null||(O=J,c?(J=As(a,f),J!=null&&S.unshift(lo(a,J,O))):c||(J=As(a,f),J!=null&&S.push(lo(a,J,O)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var nx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(ix,"")}function _g(t,n){return n=gg(n),gg(t)===n}function Nl(){}function Pe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||vi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&vi(t,""+s);break;case"className":Dt(t,"class",s);break;case"tabIndex":Dt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(t,a,s);break;case"style":xd(t,s,f);break;case"data":if(n!=="object"){Dt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ho(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Nl);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":Ot(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ot(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ot(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ot(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ot(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ot(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=L_.get(a)||a,Tt(t,a,s))}}function _f(t,n,a,s,c,f){switch(a){case"style":xd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?vi(t,s):(typeof s=="number"||typeof s=="bigint")&&vi(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,S,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=S=c=null,O=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":S=ut;break;case"checked":O=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Pe(t,n,s,ut,a,null)}}He(t,f,b,O,J,S,c,!1),Le(t);return;case"select":me("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":s=b;default:Pe(t,n,c,b,a,null)}n=f,a=S,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pe(t,n,S,b,a,null)}Sn(t,s,c,f),Le(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,O,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<oo.length;s++)me(oo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,J,s,a,null)}return;default:if(Nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&_f(t,n,ut,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Pe(t,n,b,s,a,null))}function ax(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,O=null,J=null,ut=null;for(nt in a){var gt=a[nt];if(a.hasOwnProperty(nt)&&gt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":O=gt;default:s.hasOwnProperty(nt)||Pe(t,n,nt,null,s,gt)}}for(var et in s){var nt=s[et];if(gt=a[et],s.hasOwnProperty(et)&&(nt!=null||gt!=null))switch(et){case"type":f=nt;break;case"name":c=nt;break;case"checked":J=nt;break;case"defaultChecked":ut=nt;break;case"value":S=nt;break;case"defaultValue":b=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==gt&&Pe(t,n,et,nt,s,gt)}}Ui(t,S,b,O,J,ut,f,c);return;case"select":nt=S=b=et=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":nt=O;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":et=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==O&&Pe(t,n,c,f,s,O)}n=b,a=S,s=nt,et!=null?sn(t,!!a,et,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(t,n,b,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pe(t,n,S,c,s,f)}dn(t,et,nt);return;case"option":for(var ee in a)if(et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:Pe(t,n,ee,null,s,et)}for(O in s)if(et=s[O],nt=a[O],s.hasOwnProperty(O)&&et!==nt&&(et!=null||nt!=null))switch(O){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Pe(t,n,O,et,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!s.hasOwnProperty(Jt)&&Pe(t,n,Jt,null,s,et);for(J in s)if(et=s[J],nt=a[J],s.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Pe(t,n,J,et,s,nt)}return;default:if(Nc(n)){for(var ze in a)et=a[ze],a.hasOwnProperty(ze)&&et!==void 0&&!s.hasOwnProperty(ze)&&_f(t,n,ze,void 0,s,et);for(ut in s)et=s[ut],nt=a[ut],!s.hasOwnProperty(ut)||et===nt||et===void 0&&nt===void 0||_f(t,n,ut,et,s,nt);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!s.hasOwnProperty(X)&&Pe(t,n,X,null,s,et);for(gt in s)et=s[gt],nt=a[gt],!s.hasOwnProperty(gt)||et===nt||et==null&&nt==null||Pe(t,n,gt,et,s,nt)}var vf=null,xf=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function vg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function rx(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Sg=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(lx)}:Sg;function lx(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function Mg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&co(S.documentElement),a&2&&co(S.body),a&4)for(a=S.head,co(a),S=a.firstChild;S;){var b=S.nextSibling,O=S.nodeName;S[sa]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){t.removeChild(f),vo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);vo(n)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[sa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function ux(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var bf=null;function Eg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function bg(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);oa(t)}var ii=new Map,Tg=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=Z.d;Z.d={f:hx,r:dx,D:px,C:mx,L:gx,m:_x,X:xx,S:vx,M:Sx};function hx(){var t=qi.f(),n=Tl();return t||n}function dx(t){var n=wi(t);n!==null&&n.tag===5&&n.type==="form"?Wp(n):qi.r(t)}var Qr=typeof document>"u"?null:document;function Ag(t,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Tg.has(c)||(Tg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),En(n,"link",t),tn(n),s.head.appendChild(n)))}}function px(t){qi.D(t),Ag("dns-prefetch",t,null)}function mx(t,n){qi.C(t,n),Ag("preconnect",t,n)}function gx(t,n,a){qi.L(t,n,a);var s=Qr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(t)+'"]';var f=c;switch(n){case"style":f=Jr(t);break;case"script":f=$r(t)}ii.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(fo(f))||(n=s.createElement("link"),En(n,"link",t),tn(n),s.head.appendChild(n)))}}function _x(t,n){qi.m(t,n);var a=Qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(s)+'"][href="'+Ve(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(t)}if(!ii.has(f)&&(t=g({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(f)))return}s=a.createElement("link"),En(s,"link",t),tn(s),a.head.appendChild(s)}}}function vx(t,n,a){qi.S(t,n,a);var s=Qr;if(s&&t){var c=la(s).hoistableStyles,f=Jr(t);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=s.querySelector(uo(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&Tf(t,a);var O=S=s.createElement("link");tn(O),En(O,"link",t),O._p=new Promise(function(J,ut){O.onload=J,O.onerror=ut}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Pl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function xx(t,n){qi.X(t,n);var a=Qr;if(a&&t){var s=la(a).hoistableScripts,c=$r(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=g({src:t,async:!0},n),(n=ii.get(c))&&Af(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Sx(t,n){qi.M(t,n);var a=Qr;if(a&&t){var s=la(a).hoistableScripts,c=$r(t),f=s.get(c);f||(f=a.querySelector(fo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&Af(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Rg(t,n,a,s){var c=(c=Mt.current)?Ol(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=la(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Jr(a.href);var f=la(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(uo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||yx(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=la(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Jr(t){return'href="'+Ve(t)+'"'}function uo(t){return'link[rel="stylesheet"]['+t+"]"}function Cg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function yx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),tn(n),t.head.appendChild(n))}function $r(t){return'[src="'+Ve(t)+'"]'}function fo(t){return"script[async]"+t}function wg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),En(s,"style",c),Pl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Jr(a.href);var f=t.querySelector(uo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=Cg(a),(c=ii.get(c))&&Tf(s,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),En(f,"link",s),n.state.loading|=4,Pl(f,a.precedence,t),n.instance=f;case"script":return f=$r(a.src),(c=t.querySelector(fo(f)))?(n.instance=c,tn(c),c):(s=a,(c=ii.get(f))&&(s=g({},a),Af(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),En(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,t));return n.instance}function Pl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var b=s[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zl=null;function Dg(t,n,a){if(zl===null){var s=new Map,c=zl=new Map;c.set(a,s)}else c=zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[sa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var b=s.get(S);b?b.push(f):s.set(S,[f])}}return s}function Ug(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Mx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ng(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ho=null;function Ex(){}function bx(t,n,a){if(ho===null)throw Error(r(475));var s=ho;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Jr(a.href),f=t.querySelector(uo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Bl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Cg(a),(c=ii.get(c))&&Tf(a,c),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),En(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Bl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Tx(){if(ho===null)throw Error(r(475));var t=ho;return t.stylesheets&&t.count===0&&Rf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Rf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Bl(){if(this.count--,this.count===0){if(this.stylesheets)Rf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function Rf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,n.forEach(Ax,t),Il=null,Bl.call(t))}function Ax(t,n){if(!(n.state.loading&4)){var a=Il.get(t);if(a)var s=a.get(null);else{a=new Map,Il.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Bl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var po={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Rx(t,n,a,s,c,f,S,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Lg(t,n,a,s,c,f,S,b,O,J,ut,gt){return t=new Rx(t,n,a,S,b,O,J,gt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},fu(f),t}function Og(t){return t?(t=Dr,t):Dr}function Pg(t,n,a,s,c,f){c=Og(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(jn(a,t,n),ks(a,t,n))}function zg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cf(t,n){zg(t,n),(t=t.alternate)&&zg(t,n)}function Bg(t){if(t.tag===13){var n=wr(t,67108864);n!==null&&jn(n,t,67108864),Cf(t,67108864)}}var Fl=!0;function Cx(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,wf(t,n,a,s)}finally{Z.p=f,P.T=c}}function wx(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,wf(t,n,a,s)}finally{Z.p=f,P.T=c}}function wf(t,n,a,s){if(Fl){var c=Df(s);if(c===null)gf(t,n,s,Hl,a),Fg(t,s);else if(Ux(c,t,n,a,s))s.stopPropagation();else if(Fg(t,s),n&4&&-1<Dx.indexOf(t)){for(;c!==null;){var f=wi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var O=1<<31-Pt(S);b.entanglements[1]|=O,S&=~O}Ei(f),(we&6)===0&&(El=de()+500,so(0))}}break;case 13:b=wr(f,2),b!==null&&jn(b,f,2),Tl(),Cf(f,2)}if(f=Df(s),f===null&&gf(t,n,s,Hl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else gf(t,n,s,null,a)}}function Df(t){return t=Oc(t),Uf(t)}var Hl=null;function Uf(t){if(Hl=null,t=Ci(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hl=t,null}function Ig(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case _e:return 2;case jt:return 8;case ae:case Ze:return 32;case N:return 268435456;default:return 32}default:return 32}}var Nf=!1,Ra=null,Ca=null,wa=null,mo=new Map,go=new Map,Da=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=wi(n),n!==null&&Bg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ux(t,n,a,s,c){switch(n){case"focusin":return Ra=_o(Ra,t,n,a,s,c),!0;case"dragenter":return Ca=_o(Ca,t,n,a,s,c),!0;case"mouseover":return wa=_o(wa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return mo.set(f,_o(mo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,_o(go.get(f)||null,t,n,a,s,c)),!0}return!1}function Hg(t){var n=Ci(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var s=Yn();s=ne(s);var c=wr(a,s);c!==null&&jn(c,a,s),Cf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Df(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=wi(a),n!==null&&Bg(n),t.blockedOn=a,!1;n.shift()}return!0}function Gg(t,n,a){Gl(t)&&a.delete(n)}function Nx(){Nf=!1,Ra!==null&&Gl(Ra)&&(Ra=null),Ca!==null&&Gl(Ca)&&(Ca=null),wa!==null&&Gl(wa)&&(wa=null),mo.forEach(Gg),go.forEach(Gg)}function Vl(t,n){t.blockedOn===n&&(t.blockedOn=null,Nf||(Nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Nx)))}var kl=null;function Vg(t){kl!==t&&(kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===t&&(kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Uf(s||a)===null)continue;break}var f=wi(a);f!==null&&(t.splice(n,3),n-=3,Du(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function vo(t){function n(O){return Vl(O,t)}Ra!==null&&Vl(Ra,t),Ca!==null&&Vl(Ca,t),wa!==null&&Vl(wa,t),mo.forEach(n),go.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Hg(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[xn]||null;if(typeof f=="function")S||Vg(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[xn]||null)b=S.formAction;else if(Uf(c)!==null)continue}else b=S.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Vg(a)}}}function Lf(t){this._internalRoot=t}Xl.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Pg(a,s,t,n,null,null)},Xl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Pg(t.current,2,null,t,null,null),Tl(),n[Nn]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&Hg(t)}};var kg=e.version;if(kg!=="19.1.0")throw Error(r(527,kg,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Lx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{ft=Wl.inject(Lx),pt=Wl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=rm,f=sm,S=om,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Lg(t,1,!1,null,null,a,s,c,f,S,b,null),t[Nn]=n.current,mf(t),new Lf(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=rm,S=sm,b=om,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Lg(t,1,!0,n,a??null,s,c,f,S,b,O,J),n.context=Og(null),a=n.current,s=Yn(),s=ne(s),c=da(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,Bt(n,a),Ei(n),t[Nn]=n.current,mf(t),new Xl(n)},So.version="19.1.0",So}var $g;function Xx(){if($g)return zf.exports;$g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=kx(),zf.exports}var Wx=Xx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="178",qx=0,t0=1,Yx=2,e_=1,jx=2,Ji=3,Ga=0,In=1,ta=2,Fa=0,ms=1,e0=2,n0=3,i0=4,Zx=5,gr=100,Kx=101,Qx=102,Jx=103,$x=104,tS=200,eS=201,nS=202,iS=203,xh=204,Sh=205,aS=206,rS=207,sS=208,oS=209,lS=210,cS=211,uS=212,fS=213,hS=214,yh=0,Mh=1,Eh=2,vs=3,bh=4,Th=5,Ah=6,Rh=7,n_=0,dS=1,pS=2,Ha=0,mS=1,gS=2,_S=3,vS=4,xS=5,SS=6,yS=7,i_=300,xs=301,Ss=302,Ch=303,wh=304,Cc=306,Dh=1e3,vr=1001,Uh=1002,gi=1003,MS=1004,ql=1005,Ti=1006,Hf=1007,xr=1008,aa=1009,a_=1010,r_=1011,Ro=1012,cd=1013,yr=1014,ea=1015,Uo=1016,ud=1017,fd=1018,Co=1020,s_=35902,o_=1021,l_=1022,pi=1023,wo=1026,Do=1027,c_=1028,hd=1029,u_=1030,dd=1031,pd=1033,gc=33776,_c=33777,vc=33778,xc=33779,Nh=35840,Lh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,Sc=36492,$h=36494,td=36495,f_=36283,ed=36284,nd=36285,id=36286,ES=3200,bS=3201,TS=0,AS=1,Ia="",ri="srgb",ys="srgb-linear",Mc="linear",Be="srgb",ts=7680,a0=519,RS=512,CS=513,wS=514,h_=515,DS=516,US=517,NS=518,LS=519,r0=35044,s0="300 es",na=2e3,Ec=2001;class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,ad=180/Math.PI;function No(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function OS(o,e){return(o%e+e)%e}function Vf(o,e,i){return(1-i)*o+i*e}function yo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,i=0){Ie.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const x=u[h+0],M=u[h+1],A=u[h+2],C=u[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(v!==C||p!==x||m!==M||g!==A){let y=1-d;const _=p*x+m*M+g*A+v*C,z=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const F=Math.sqrt(L),G=Math.atan2(F,_*z);y=Math.sin(y*G)/F,d=Math.sin(d*G)/F}const w=d*z;if(p=p*y+x*w,m=m*y+M*w,g=g*y+A*w,v=v*y+C*w,y===1-d){const F=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=F,m*=F,g*=F,v*=F}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[h],x=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*v+p*M-m*x,e[i+1]=p*A+g*x+m*v-d*M,e[i+2]=m*A+g*M+d*x-p*v,e[i+3]=g*A-d*v-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(u/2),x=p(r/2),M=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=x*g*v+m*M*A,this._y=m*M*v-x*g*A,this._z=m*g*A+x*M*v,this._w=m*g*v-x*M*A;break;case"YXZ":this._x=x*g*v+m*M*A,this._y=m*M*v-x*g*A,this._z=m*g*A-x*M*v,this._w=m*g*v+x*M*A;break;case"ZXY":this._x=x*g*v-m*M*A,this._y=m*M*v+x*g*A,this._z=m*g*A+x*M*v,this._w=m*g*v-x*M*A;break;case"ZYX":this._x=x*g*v-m*M*A,this._y=m*M*v+x*g*A,this._z=m*g*A-x*M*v,this._w=m*g*v+x*M*A;break;case"YZX":this._x=x*g*v+m*M*A,this._y=m*M*v+x*g*A,this._z=m*g*A-x*M*v,this._w=m*g*v-x*M*A;break;case"XZY":this._x=x*g*v-m*M*A,this._y=m*M*v-x*g*A,this._z=m*g*A+x*M*v,this._w=m*g*v+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-r*m,this._z=u*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(o0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(o0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kf.copy(this).projectOnVector(e),this.sub(kf)}reflect(e){return this.sub(kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new rt,o0=new Lo;class se{constructor(e,i,r,l,u,h,d,p,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m)}set(e,i,r,l,u,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],M=r[5],A=r[8],C=l[0],y=l[3],_=l[6],z=l[1],L=l[4],w=l[7],F=l[2],G=l[5],I=l[8];return u[0]=h*C+d*z+p*F,u[3]=h*y+d*L+p*G,u[6]=h*_+d*w+p*I,u[1]=m*C+g*z+v*F,u[4]=m*y+g*L+v*G,u[7]=m*_+g*w+v*I,u[2]=x*C+M*z+A*F,u[5]=x*y+M*L+A*G,u[8]=x*_+M*w+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*u*g+r*d*p+l*u*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,x=d*p-g*u,M=m*u-h*p,A=i*v+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*m-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*p)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(r*p-m*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Xf.makeScale(e,i)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new se;function d_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PS(){const o=bc("canvas");return o.style.display="block",o}const l0={};function gs(o){o in l0||(l0[o]=!0,console.warn(o))}function zS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function BS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const c0=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u0=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FS(){const o={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=_s(l.r),l.g=_s(l.g),l.b=_s(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ys]:{primaries:e,whitePoint:r,transfer:Mc,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const be=FS();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let es;class HS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{es===void 0&&(es=bc("canvas")),es.width=e.width,es.height=e.height;const l=es.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=es}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GS=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Wf(l[h].image)):u.push(Wf(l[h]))}else u=Wf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;const qf=new rt;class Fn extends Es{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=vr,l=vr,u=Ti,h=xr,d=pi,p=aa,m=Fn.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=No(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qf).x}get height(){return this.source.getSize(qf).y}get depth(){return this.source.getSize(qf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=i_;Fn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],M=p[5],A=p[9],C=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(M+1)/2,F=(_+1)/2,G=(g+x)/4,I=(v+C)/4,q=(A+y)/4;return L>w&&L>F?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=G/r,u=I/r):w>F?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=G/l,u=q/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=I/u,l=q/u),this.set(r,l,u,i),this}let z=Math.sqrt((y-A)*(y-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(y-A)/z,this.y=(v-C)/z,this.z=(x-g)/z,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kS extends Es{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends kS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class p_ extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(u,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),jl.subVectors(this.max,Mo),ns.subVectors(e.a,Mo),is.subVectors(e.b,Mo),as.subVectors(e.c,Mo),Na.subVectors(is,ns),La.subVectors(as,is),lr.subVectors(ns,as);let i=[0,-Na.z,Na.y,0,-La.z,La.y,0,-lr.z,lr.y,Na.z,0,-Na.x,La.z,0,-La.x,lr.z,0,-lr.x,-Na.y,Na.x,0,-La.y,La.x,0,-lr.y,lr.x,0];return!Yf(i,ns,is,as,jl)||(i=[1,0,0,0,1,0,0,0,1],!Yf(i,ns,is,as,jl))?!1:(Zl.crossVectors(Na,La),i=[Zl.x,Zl.y,Zl.z],Yf(i,ns,is,as,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],ui=new rt,Yl=new Oo,ns=new rt,is=new rt,as=new rt,Na=new rt,La=new rt,lr=new rt,Mo=new rt,jl=new rt,Zl=new rt,cr=new rt;function Yf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),p=e.dot(cr),m=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const WS=new Oo,Eo=new rt,jf=new rt;class wc{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):WS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(jf)),this.expandByPoint(Eo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new rt,Zf=new rt,Kl=new rt,Oa=new rt,Kf=new rt,Ql=new rt,Qf=new rt;class m_{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Oa.dot(this.direction),p=-Oa.dot(Kl),m=Oa.lengthSq(),g=Math.abs(1-h*h);let v,x,M,A;if(g>0)if(v=h*p-d,x=h*d-p,A=u*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,M=v*(v+h*x+2*d)+x*(h*v+x+2*p)+m}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;else x<=-A?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m):x<=A?(v=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zf).addScaledVector(Kl,x),M}intersectSphere(e,i){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,i,r,l,u){Kf.subVectors(i,e),Ql.subVectors(r,e),Qf.crossVectors(Kf,Ql);let h=this.direction.dot(Qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const p=d*this.direction.dot(Ql.crossVectors(Oa,Ql));if(p<0)return null;const m=d*this.direction.dot(Kf.cross(Oa));if(m<0||p+m>h)return null;const g=-d*Oa.dot(Qf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,p,m,g,v,x,M,A,C,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,p,m,g,v,x,M,A,C,y)}set(e,i,r,l,u,h,d,p,m,g,v,x,M,A,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=A,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/rs.setFromMatrixColumn(e,0).length(),u=1/rs.setFromMatrixColumn(e,1).length(),h=1/rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=h*g,M=h*v,A=d*g,C=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+A*m,i[5]=x-C*m,i[9]=-d*p,i[2]=C-x*m,i[6]=A+M*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*g,M=p*v,A=m*g,C=m*v;i[0]=x+C*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=C+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*g,M=p*v,A=m*g,C=m*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*g,M=h*v,A=d*g,C=d*v;i[0]=p*g,i[4]=A*m-M,i[8]=x*m+C,i[1]=p*v,i[5]=C*m+x,i[9]=M*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,M=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=C-x*v,i[8]=A*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*v+A,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*p,M=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+C,i[5]=h*g,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,YS)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Pa.crossVectors(r,Zn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Pa.crossVectors(r,Zn)),Pa.normalize(),Jl.crossVectors(Zn,Pa),l[0]=Pa.x,l[4]=Jl.x,l[8]=Zn.x,l[1]=Pa.y,l[5]=Jl.y,l[9]=Zn.y,l[2]=Pa.z,l[6]=Jl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],M=r[13],A=r[2],C=r[6],y=r[10],_=r[14],z=r[3],L=r[7],w=r[11],F=r[15],G=l[0],I=l[4],q=l[8],D=l[12],R=l[1],V=l[5],ct=l[9],st=l[13],vt=l[2],dt=l[6],P=l[10],Z=l[14],Y=l[3],Et=l[7],U=l[11],$=l[15];return u[0]=h*G+d*R+p*vt+m*Y,u[4]=h*I+d*V+p*dt+m*Et,u[8]=h*q+d*ct+p*P+m*U,u[12]=h*D+d*st+p*Z+m*$,u[1]=g*G+v*R+x*vt+M*Y,u[5]=g*I+v*V+x*dt+M*Et,u[9]=g*q+v*ct+x*P+M*U,u[13]=g*D+v*st+x*Z+M*$,u[2]=A*G+C*R+y*vt+_*Y,u[6]=A*I+C*V+y*dt+_*Et,u[10]=A*q+C*ct+y*P+_*U,u[14]=A*D+C*st+y*Z+_*$,u[3]=z*G+L*R+w*vt+F*Y,u[7]=z*I+L*V+w*dt+F*Et,u[11]=z*q+L*ct+w*P+F*U,u[15]=z*D+L*st+w*Z+F*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],M=e[14],A=e[3],C=e[7],y=e[11],_=e[15];return A*(+u*p*v-l*m*v-u*d*x+r*m*x+l*d*M-r*p*M)+C*(+i*p*M-i*m*x+u*h*x-l*h*M+l*m*g-u*p*g)+y*(+i*m*v-i*d*M-u*h*v+r*h*M+u*d*g-r*m*g)+_*(-l*d*g-i*p*v+i*d*x+l*h*v-r*h*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],M=e[11],A=e[12],C=e[13],y=e[14],_=e[15],z=v*y*m-C*x*m+C*p*M-d*y*M-v*p*_+d*x*_,L=A*x*m-g*y*m-A*p*M+h*y*M+g*p*_-h*x*_,w=g*C*m-A*v*m+A*d*M-h*C*M-g*d*_+h*v*_,F=A*v*p-g*C*p-A*d*x+h*C*x+g*d*y-h*v*y,G=i*z+r*L+l*w+u*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=z*I,e[1]=(C*x*u-v*y*u-C*l*M+r*y*M+v*l*_-r*x*_)*I,e[2]=(d*y*u-C*p*u+C*l*m-r*y*m-d*l*_+r*p*_)*I,e[3]=(v*p*u-d*x*u-v*l*m+r*x*m+d*l*M-r*p*M)*I,e[4]=L*I,e[5]=(g*y*u-A*x*u+A*l*M-i*y*M-g*l*_+i*x*_)*I,e[6]=(A*p*u-h*y*u-A*l*m+i*y*m+h*l*_-i*p*_)*I,e[7]=(h*x*u-g*p*u+g*l*m-i*x*m-h*l*M+i*p*M)*I,e[8]=w*I,e[9]=(A*v*u-g*C*u-A*r*M+i*C*M+g*r*_-i*v*_)*I,e[10]=(h*C*u-A*d*u+A*r*m-i*C*m-h*r*_+i*d*_)*I,e[11]=(g*d*u-h*v*u-g*r*m+i*v*m+h*r*M-i*d*M)*I,e[12]=F*I,e[13]=(g*C*l-A*v*l+A*r*x-i*C*x-g*r*y+i*v*y)*I,e[14]=(A*d*l-h*C*l-A*r*p+i*C*p+h*r*y-i*d*y)*I,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*x+i*d*x)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,p=e.z,m=u*h,g=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,x=u*m,M=u*g,A=u*v,C=h*g,y=h*v,_=d*v,z=p*m,L=p*g,w=p*v,F=r.x,G=r.y,I=r.z;return l[0]=(1-(C+_))*F,l[1]=(M+w)*F,l[2]=(A-L)*F,l[3]=0,l[4]=(M-w)*G,l[5]=(1-(x+_))*G,l[6]=(y+z)*G,l[7]=0,l[8]=(A+L)*I,l[9]=(y-z)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),d=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const m=1/u,g=1/h,v=1/d;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=na){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(d===na)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Ec)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=na){const p=this.elements,m=1/(i-e),g=1/(r-l),v=1/(h-u),x=(i+e)*m,M=(r+l)*g;let A,C;if(d===na)A=(h+u)*v,C=-2*v;else if(d===Ec)A=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const rs=new rt,fi=new $e,qS=new rt(0,0,0),YS=new rt(1,1,1),Pa=new rt,Jl=new rt,Zn=new rt,f0=new $e,h0=new Lo;class ra{constructor(e=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return f0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return h0.setFromEuler(this),this.setFromQuaternion(h0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const d0=new rt,ss=new Lo,Zi=new $e,$l=new rt,bo=new rt,ZS=new rt,KS=new Lo,p0=new rt(1,0,0),m0=new rt(0,1,0),g0=new rt(0,0,1),_0={type:"added"},QS={type:"removed"},os={type:"childadded",child:null},Jf={type:"childremoved",child:null};class Hn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new rt,i=new ra,r=new Lo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new se}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(p0,e)}rotateY(e){return this.rotateOnAxis(m0,e)}rotateZ(e){return this.rotateOnAxis(g0,e)}translateOnAxis(e,i){return d0.copy(e).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(p0,e)}translateY(e){return this.translateOnAxis(m0,e)}translateZ(e){return this.translateOnAxis(g0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?$l.copy(e):$l.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(bo,$l,this.up):Zi.lookAt($l,bo,this.up),this.quaternion.setFromRotationMatrix(Zi),l&&(Zi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Zi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(QS),Jf.child=e,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new rt(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new rt,Ki=new rt,$f=new rt,Qi=new rt,ls=new rt,cs=new rt,v0=new rt,th=new rt,eh=new rt,nh=new rt,ih=new Je,ah=new Je,rh=new Je;class di{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Ki.subVectors(r,i),$f.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(Ki),p=hi.dot($f),m=Ki.dot(Ki),g=Ki.dot($f),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(m*p-d*g)*x,A=(h*g-d*p)*x;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,u,h,d,p){return this.getBarycoord(e,i,r,l,Qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Qi.x),p.addScaledVector(h,Qi.y),p.addScaledVector(d,Qi.z),p)}static getInterpolatedAttribute(e,i,r,l,u,h){return ih.setScalar(0),ah.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,r),rh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ih,u.x),h.addScaledVector(ah,u.y),h.addScaledVector(rh,u.z),h}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Ki.subVectors(e,i),hi.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),hi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ls.subVectors(l,r),cs.subVectors(u,r),th.subVectors(e,r);const p=ls.dot(th),m=cs.dot(th);if(p<=0&&m<=0)return i.copy(r);eh.subVectors(e,l);const g=ls.dot(eh),v=cs.dot(eh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(ls,h);nh.subVectors(e,u);const M=ls.dot(nh),A=cs.dot(nh);if(A>=0&&M<=A)return i.copy(u);const C=M*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(r).addScaledVector(cs,d);const y=g*A-M*v;if(y<=0&&v-g>=0&&M-A>=0)return v0.subVectors(u,l),d=(v-g)/(v-g+(M-A)),i.copy(l).addScaledVector(v0,d);const _=1/(y+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(ls,h).addScaledVector(cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},tc={h:0,s:0,l:0};function sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=OS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=sh(h,u,e+1/3),this.g=sh(h,u,e),this.b=sh(h,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=__[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return be.workingToColorSpace(Cn.copy(this),e),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ri){be.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(tc);const r=Vf(za.h,tc.h,i),l=Vf(za.s,tc.s,i),u=Vf(za.l,tc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ue;Ue.NAMES=__;let JS=0;class Po extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ms,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tc extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=n_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new rt,ec=new Ie;let $S=0;class _i{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=r0,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==r0&&(e.usage=this.usage),e}}class v_ extends _i{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class x_ extends _i{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ai extends _i{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ty=0;const ai=new $e,oh=new Hn,us=new rt,Kn=new Oo,To=new Oo,_n=new rt;class Ri extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d_(e)?x_:v_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ai(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];To.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,To.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,To.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(To.min),Kn.expandByPoint(To.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(us.fromBufferAttribute(e,m),_n.add(us)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<r.count;q++)d[q]=new rt,p[q]=new rt;const m=new rt,g=new rt,v=new rt,x=new Ie,M=new Ie,A=new Ie,C=new rt,y=new rt;function _(q,D,R){m.fromBufferAttribute(r,q),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,q),M.fromBufferAttribute(u,D),A.fromBufferAttribute(u,R),g.sub(m),v.sub(m),M.sub(x),A.sub(x);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(V),d[q].add(C),d[D].add(C),d[R].add(C),p[q].add(y),p[D].add(y),p[R].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let q=0,D=z.length;q<D;++q){const R=z[q],V=R.start,ct=R.count;for(let st=V,vt=V+ct;st<vt;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const L=new rt,w=new rt,F=new rt,G=new rt;function I(q){F.fromBufferAttribute(l,q),G.copy(F);const D=d[q];L.copy(D),L.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(G,D);const V=w.dot(p[q])<0?-1:1;h.setXYZW(q,L.x,L.y,L.z,V)}for(let q=0,D=z.length;q<D;++q){const R=z[q],V=R.start,ct=R.count;for(let st=V,vt=V+ct;st<vt;st+=3)I(e.getX(st+0)),I(e.getX(st+1)),I(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,p=new rt,m=new rt,g=new rt,v=new rt;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),d.add(g),p.add(g),m.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let M=0,A=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*g;for(let _=0;_<g;_++)x[A++]=m[M++]}return new _i(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new $e,ur=new m_,nc=new wc,S0=new rt,ic=new rt,ac=new rt,rc=new rt,lh=new rt,sc=new rt,y0=new rt,oc=new rt;class mi extends Hn{constructor(e=new Ri,i=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(lh.fromBufferAttribute(v,e),h?sc.addScaledVector(lh,g):sc.addScaledVector(lh.sub(i),g))}i.add(sc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(u),ur.copy(e.ray).recast(e.near),!(nc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(nc,S0)===null||ur.origin.distanceToSquared(S0)>(e.far-e.near)**2))&&(x0.copy(u).invert(),ur.copy(e.ray).applyMatrix4(x0),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ur)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],_=h[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=z,F=L;w<F;w+=3){const G=d.getX(w),I=d.getX(w+1),q=d.getX(w+2);l=lc(this,_,e,r,m,g,v,G,I,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=A,_=C;y<_;y+=3){const z=d.getX(y),L=d.getX(y+1),w=d.getX(y+2);l=lc(this,h,e,r,m,g,v,z,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],_=h[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let w=z,F=L;w<F;w+=3){const G=w,I=w+1,q=w+2;l=lc(this,_,e,r,m,g,v,G,I,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=A,_=C;y<_;y+=3){const z=y,L=y+1,w=y+2;l=lc(this,h,e,r,m,g,v,z,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ey(o,e,i,r,l,u,h,d){let p;if(e.side===In?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,e.side===Ga,d),p===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(oc);return m<i.near||m>i.far?null:{distance:m,point:oc.clone(),object:o}}function lc(o,e,i,r,l,u,h,d,p,m){o.getVertexPosition(d,ic),o.getVertexPosition(p,ac),o.getVertexPosition(m,rc);const g=ey(o,e,i,r,ic,ac,rc,y0);if(g){const v=new rt;di.getBarycoord(y0,ic,ac,rc,v),l&&(g.uv=di.getInterpolatedAttribute(l,d,p,m,v,new Ie)),u&&(g.uv1=di.getInterpolatedAttribute(u,d,p,m,v,new Ie)),h&&(g.normal=di.getInterpolatedAttribute(h,d,p,m,v,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new rt,materialIndex:0};di.getNormal(ic,ac,rc,x.normal),g.face=x,g.barycoord=v}return g}class bs extends Ri{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Ai(m,3)),this.setAttribute("normal",new Ai(g,3)),this.setAttribute("uv",new Ai(v,2));function A(C,y,_,z,L,w,F,G,I,q,D){const R=w/I,V=F/q,ct=w/2,st=F/2,vt=G/2,dt=I+1,P=q+1;let Z=0,Y=0;const Et=new rt;for(let U=0;U<P;U++){const $=U*V-st;for(let xt=0;xt<dt;xt++){const yt=xt*R-ct;Et[C]=yt*z,Et[y]=$*L,Et[_]=vt,m.push(Et.x,Et.y,Et.z),Et[C]=0,Et[y]=0,Et[_]=G>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(xt/I),v.push(1-U/q),Z+=1}}for(let U=0;U<q;U++)for(let $=0;$<I;$++){const xt=x+$+dt*U,yt=x+$+dt*(U+1),Q=x+($+1)+dt*(U+1),mt=x+($+1)+dt*U;p.push(xt,yt,mt),p.push(yt,Q,mt),Y+=6}d.addGroup(M,Y,D),M+=Y,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)e[l]=r[l]}return e}function ny(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function S_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const iy={clone:Ms,merge:Dn};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class y_ extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=na}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new rt,M0=new Ie,E0=new Ie;class si extends y_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,M0,E0),i.subVectors(E0,M0)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Gf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class sy extends Hn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(fs,hs,e,i);l.layers=this.layers,this.add(l);const u=new si(fs,hs,e,i);u.layers=this.layers,this.add(u);const h=new si(fs,hs,e,i);h.layers=this.layers,this.add(h);const d=new si(fs,hs,e,i);d.layers=this.layers,this.add(d);const p=new si(fs,hs,e,i);p.layers=this.layers,this.add(p);const m=new si(fs,hs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class M_ extends Fn{constructor(e=[],i=xs,r,l,u,h,d,p,m,g){super(e,i,r,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oy extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new M_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new bs(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Fa});u.uniforms.tEquirect.value=i;const h=new mi(l,u),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ti),new sy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class cc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ly={type:"move"};class ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),_=this._getHandJoint(m,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,A=.005;m.inputState.pinching&&x>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class cy extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new rt,uy=new rt,fy=new se;class pr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(uy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||fy.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new wc,hy=new Ie(.5,.5),uc=new rt;class E_{constructor(e=new pr,i=new pr,r=new pr,l=new pr,u=new pr,h=new pr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],M=l[8],A=l[9],C=l[10],y=l[11],_=l[12],z=l[13],L=l[14],w=l[15];if(r[0].setComponents(p-u,x-m,y-M,w-_).normalize(),r[1].setComponents(p+u,x+m,y+M,w+_).normalize(),r[2].setComponents(p+h,x+g,y+A,w+z).normalize(),r[3].setComponents(p-h,x-g,y-A,w-z).normalize(),r[4].setComponents(p-d,x-v,y-C,w-L).normalize(),i===na)r[5].setComponents(p+d,x+v,y+C,w+L).normalize();else if(i===Ec)r[5].setComponents(d,v,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);const i=hy.distanceTo(e.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?e.max.x:e.min.x,uc.y=l.normal.y>0?e.max.y:e.min.y,uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b_ extends Po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const b0=new $e,rd=new m_,fc=new wc,hc=new rt;class dy extends Hn{constructor(e=new Ri,i=new b_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,e.ray.intersectsSphere(fc)===!1)return;b0.copy(l).invert(),rd.copy(e.ray).applyMatrix4(b0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let A=x,C=M;A<C;A++){const y=m.getX(A);hc.fromBufferAttribute(v,y),T0(hc,y,p,l,e,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let A=x,C=M;A<C;A++)hc.fromBufferAttribute(v,A),T0(hc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function T0(o,e,i,r,l,u,h){const d=rd.distanceSqToPoint(o);if(d<i){const p=new rt;rd.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class T_ extends Fn{constructor(e,i,r=yr,l,u,h,d=gi,p=gi,m,g=wo,v=1){if(g!==wo&&g!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,h,d,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dc extends Ri{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,x=i/p,M=[],A=[],C=[],y=[];for(let _=0;_<g;_++){const z=_*x-h;for(let L=0;L<m;L++){const w=L*v-u;A.push(w,-z,0),C.push(0,0,1),y.push(L/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let z=0;z<d;z++){const L=z+m*_,w=z+m*(_+1),F=z+1+m*(_+1),G=z+1+m*_;M.push(L,w,G),M.push(w,F,G)}this.setIndex(M),this.setAttribute("position",new Ai(A,3)),this.setAttribute("normal",new Ai(C,3)),this.setAttribute("uv",new Ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class gd extends Ri{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],v=new rt,x=new rt,M=[],A=[],C=[],y=[];for(let _=0;_<=r;_++){const z=[],L=_/r;let w=0;_===0&&h===0?w=.5/i:_===r&&p===Math.PI&&(w=-.5/i);for(let F=0;F<=i;F++){const G=F/i;v.x=-e*Math.cos(l+G*u)*Math.sin(h+L*d),v.y=e*Math.cos(h+L*d),v.z=e*Math.sin(l+G*u)*Math.sin(h+L*d),A.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),y.push(G+w,1-L),z.push(m++)}g.push(z)}for(let _=0;_<r;_++)for(let z=0;z<i;z++){const L=g[_][z+1],w=g[_][z],F=g[_+1][z],G=g[_+1][z+1];(_!==0||h>0)&&M.push(L,w,G),(_!==r-1||p<Math.PI)&&M.push(w,F,G)}this.setIndex(M),this.setAttribute("position",new Ai(A,3)),this.setAttribute("normal",new Ai(C,3)),this.setAttribute("uv",new Ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class py extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gy extends y_{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _y extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function A0(o,e,i,r){const l=vy(r);switch(i){case o_:return o*e;case c_:return o*e/l.components*l.byteLength;case hd:return o*e/l.components*l.byteLength;case u_:return o*e*2/l.components*l.byteLength;case dd:return o*e*2/l.components*l.byteLength;case l_:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case pd:return o*e*4/l.components*l.byteLength;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Ph:return Math.max(o,16)*Math.max(e,8)/4;case Nh:case Oh:return Math.max(o,8)*Math.max(e,8)/2;case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sc:case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case f_:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vy(o){switch(o){case aa:case a_:return{byteLength:1,components:1};case Ro:case r_:case Uo:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case yr:case cd:case ea:return{byteLength:4,components:1};case s_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A_(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function xy(o){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<v.length;M++){const A=v[x],C=v[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,A=v.length;M<A;M++){const C=v[M];o.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Sy,alphahash_pars_fragment:yy,alphamap_fragment:My,alphamap_pars_fragment:Ey,alphatest_fragment:by,alphatest_pars_fragment:Ty,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:wy,begin_vertex:Dy,beginnormal_vertex:Uy,bsdfs:Ny,iridescence_fragment:Ly,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:zy,clipping_planes_pars_vertex:By,clipping_planes_vertex:Iy,color_fragment:Fy,color_pars_fragment:Hy,color_pars_vertex:Gy,color_vertex:Vy,common:ky,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:jy,emissivemap_pars_fragment:Zy,colorspace_fragment:Ky,colorspace_pars_fragment:Qy,envmap_fragment:Jy,envmap_common_pars_fragment:$y,envmap_pars_fragment:tM,envmap_pars_vertex:eM,envmap_physical_pars_fragment:hM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:aM,fog_fragment:rM,fog_pars_fragment:sM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:fM,lights_toon_fragment:dM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:_M,lights_physical_pars_fragment:vM,lights_fragment_begin:xM,lights_fragment_maps:SM,lights_fragment_end:yM,logdepthbuf_fragment:MM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:TM,map_fragment:AM,map_pars_fragment:RM,map_particle_fragment:CM,map_particle_pars_fragment:wM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:UM,morphinstance_vertex:NM,morphcolor_vertex:LM,morphnormal_vertex:OM,morphtarget_pars_vertex:PM,morphtarget_vertex:zM,normal_fragment_begin:BM,normal_fragment_maps:IM,normal_pars_fragment:FM,normal_pars_vertex:HM,normal_vertex:GM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:kM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:qM,opaque_fragment:YM,packing:jM,premultiplied_alpha_fragment:ZM,project_vertex:KM,dithering_fragment:QM,dithering_pars_fragment:JM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:aE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:fE,tonemapping_pars_fragment:hE,transmission_fragment:dE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:_E,worldpos_vertex:vE,background_vert:xE,background_frag:SE,backgroundCube_vert:yE,backgroundCube_frag:ME,cube_vert:EE,cube_frag:bE,depth_vert:TE,depth_frag:AE,distanceRGBA_vert:RE,distanceRGBA_frag:CE,equirect_vert:wE,equirect_frag:DE,linedashed_vert:UE,linedashed_frag:NE,meshbasic_vert:LE,meshbasic_frag:OE,meshlambert_vert:PE,meshlambert_frag:zE,meshmatcap_vert:BE,meshmatcap_frag:IE,meshnormal_vert:FE,meshnormal_frag:HE,meshphong_vert:GE,meshphong_frag:VE,meshphysical_vert:kE,meshphysical_frag:XE,meshtoon_vert:WE,meshtoon_frag:qE,points_vert:YE,points_frag:jE,shadow_vert:ZE,shadow_frag:KE,sprite_vert:QE,sprite_frag:JE},Lt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Dn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Dn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Dn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Dn([Lt.lights,Lt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const dc={r:0,b:0,g:0},hr=new ra,$E=new $e;function t1(o,e,i,r,l,u,h){const d=new Ue(0);let p=u===!0?0:1,m,g,v=null,x=0,M=null;function A(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:e).get(w)),w}function C(L){let w=!1;const F=A(L);F===null?_(d,p):F&&F.isColor&&(_(F,1),w=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,w){const F=A(w);F&&(F.isCubeTexture||F.mapping===Cc)?(g===void 0&&(g=new mi(new bs(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Ms(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(w.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(hr)),g.material.toneMapped=be.getTransfer(F.colorSpace)!==Be,(v!==F||x!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=F,x=F.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new mi(new Dc(2,2),new Va({name:"BackgroundMaterial",uniforms:Ms(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=be.getTransfer(F.colorSpace)!==Be,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||x!==F.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,v=F,x=F.version,M=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,w){L.getRGB(dc,S_(o)),r.buffers.color.setClear(dc.r,dc.g,dc.b,w,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),p=w,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:C,addToRenderList:y,dispose:z}}function e1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(R,V,ct,st,vt){let dt=!1;const P=v(st,ct,V);u!==P&&(u=P,m(u.object)),dt=M(R,st,ct,vt),dt&&A(R,st,ct,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,w(R,V,ct,st),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,V,ct){const st=ct.wireframe===!0;let vt=r[R.id];vt===void 0&&(vt={},r[R.id]=vt);let dt=vt[V.id];dt===void 0&&(dt={},vt[V.id]=dt);let P=dt[st];return P===void 0&&(P=x(p()),dt[st]=P),P}function x(R){const V=[],ct=[],st=[];for(let vt=0;vt<i;vt++)V[vt]=0,ct[vt]=0,st[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ct,attributeDivisors:st,object:R,attributes:{},index:null}}function M(R,V,ct,st){const vt=u.attributes,dt=V.attributes;let P=0;const Z=ct.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=vt[Y];let $=dt[Y];if($===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return u.attributesNum!==P||u.index!==st}function A(R,V,ct,st){const vt={},dt=V.attributes;let P=0;const Z=ct.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=dt[Y];U===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),vt[Y]=$,P++}u.attributes=vt,u.attributesNum=P,u.index=st}function C(){const R=u.newAttributes;for(let V=0,ct=R.length;V<ct;V++)R[V]=0}function y(R){_(R,0)}function _(R,V){const ct=u.newAttributes,st=u.enabledAttributes,vt=u.attributeDivisors;ct[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),vt[R]!==V&&(o.vertexAttribDivisor(R,V),vt[R]=V)}function z(){const R=u.newAttributes,V=u.enabledAttributes;for(let ct=0,st=V.length;ct<st;ct++)V[ct]!==R[ct]&&(o.disableVertexAttribArray(ct),V[ct]=0)}function L(R,V,ct,st,vt,dt,P){P===!0?o.vertexAttribIPointer(R,V,ct,vt,dt):o.vertexAttribPointer(R,V,ct,st,vt,dt)}function w(R,V,ct,st){C();const vt=st.attributes,dt=ct.getAttributes(),P=V.defaultAttributeValues;for(const Z in dt){const Y=dt[Z];if(Y.location>=0){let Et=vt[Z];if(Et===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const U=Et.normalized,$=Et.itemSize,xt=e.get(Et);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,mt=xt.bytesPerElement,Mt=Q===o.INT||Q===o.UNSIGNED_INT||Et.gpuType===cd;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,wt=Rt.stride,oe=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)_(Y.location+Qt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<Y.locationSize;Qt++)y(Y.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Qt=0;Qt<Y.locationSize;Qt++)L(Y.location+Qt,$/Y.locationSize,Q,U,wt*mt,(oe+$/Y.locationSize*Qt)*mt,Mt)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<Y.locationSize;Rt++)_(Y.location+Rt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)y(Y.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Rt=0;Rt<Y.locationSize;Rt++)L(Y.location+Rt,$/Y.locationSize,Q,U,$*mt,$/Y.locationSize*Rt*mt,Mt)}}else if(P!==void 0){const U=P[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}z()}function F(){q();for(const R in r){const V=r[R];for(const ct in V){const st=V[ct];for(const vt in st)g(st[vt].object),delete st[vt];delete V[ct]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const ct in V){const st=V[ct];for(const vt in st)g(st[vt].object),delete st[vt];delete V[ct]}delete r[R.id]}function I(R){for(const V in r){const ct=r[V];if(ct[R.id]===void 0)continue;const st=ct[R.id];for(const vt in st)g(st[vt].object),delete st[vt];delete ct[R.id]}}function q(){D(),h=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function n1(o,e,i){let r;function l(m){r=m}function u(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,v){v!==0&&(o.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A];i.update(M,r,1)}function p(m,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)h(m[A],g[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function i1(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==pi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==aa&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ea&&!q)}function p(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:F,maxSamples:G}}function a1(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new pr,d=new se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const A=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!y)u?g(null):m();else{const z=u?0:r,L=z*4;let w=_.clippingState||null;p.value=w,w=g(A,x,L,M);for(let F=0;F!==L;++F)w[F]=i[F];_.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,A){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=p.value,A!==!0||y===null){const _=M+C*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,w=M;L!==C;++L,w+=4)h.copy(v[L]).applyMatrix4(z,d),h.normal.toArray(y,w),y[w+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function r1(o){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=xs:d===wh&&(h.mapping=Ss),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new oy(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ps=4,R0=[.125,.215,.35,.446,.526,.582],_r=20,fh=new gy,C0=new Ue;let hh=null,dh=0,ph=0,mh=!1;const mr=(1+Math.sqrt(5))/2,ds=1/mr,w0=[new rt(-mr,ds,0),new rt(mr,ds,0),new rt(-ds,0,mr),new rt(ds,0,mr),new rt(0,mr,-ds),new rt(0,mr,ds),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],s1=new rt;class D0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=s1}=u;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Uo,format:pi,colorSpace:ys,depthBuffer:!1},l=U0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o1(u)),this._blurMaterial=l1(u,e,i)}return l}_compileMaterial(e){const i=new mi(this._lodPlanes[0],e);this._renderer.compile(i,fh)}_sceneToCubeUV(e,i,r,l,u){const p=new si(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(C0),v.toneMapping=Ha,v.autoClear=!1;const A=new Tc({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),C=new mi(new bs,A);let y=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,y=!0):(A.color.copy(C0),y=!0);for(let z=0;z<6;z++){const L=z%3;L===0?(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[z],u.y,u.z)):L===1?(p.up.set(0,0,m[z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[z],u.z)):(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[z]));const w=this._cubeSize;pc(l,L*w,z>2?w:0,w,w),v.setRenderTarget(l),y&&v.render(C,p),v.render(e,p)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new mi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,fh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=w0[(l-u-1)%w0.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new mi(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),C=u/A,y=isFinite(u)?1+Math.floor(g*C):_r;y>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const _=[];let z=0;for(let I=0;I<_r;++I){const q=I/C,D=Math.exp(-q*q/2);_.push(D),I===0?z+=D:I<y&&(z+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/z;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=A,x.mipInt.value=L-r;const w=this._sizeLods[l],F=3*w*(l>L-ps?l-L+ps:0),G=4*(this._cubeSize-w);pc(i,F,G,3*w,2*w),p.setRenderTarget(i),p.render(v,fh)}}function o1(o){const e=[],i=[],r=[];let l=o;const u=o-ps+1+R0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-ps?p=R0[h-o+ps-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,A=6,C=3,y=2,_=1,z=new Float32Array(C*A*M),L=new Float32Array(y*A*M),w=new Float32Array(_*A*M);for(let G=0;G<M;G++){const I=G%3*2/3-1,q=G>2?0:-1,D=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];z.set(D,C*A*G),L.set(x,y*A*G);const R=[G,G,G,G,G,G];w.set(R,_*A*G)}const F=new Ri;F.setAttribute("position",new _i(z,C)),F.setAttribute("uv",new _i(L,y)),F.setAttribute("faceIndex",new _i(w,_)),e.push(F),l>ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function U0(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function l1(o,e,i){const r=new Float32Array(_r),l=new rt(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function N0(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function L0(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function _d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ch||p===wh,g=p===xs||p===Ss;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new D0(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new D0(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function u1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function f1(o,e,i,r){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function m(v){const x=[],M=v.index,A=v.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let L=0,w=z.length;L<w;L+=3){const F=z[L+0],G=z[L+1],I=z[L+2];x.push(F,G,G,I,I,F)}}else if(A!==void 0){const z=A.array;C=A.version;for(let L=0,w=z.length/3-1;L<w;L+=3){const F=L+0,G=L+1,I=L+2;x.push(F,G,G,I,I,F)}}else return;const y=new(d_(x)?x_:v_)(x,1);y.version=C;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function h1(o,e,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function m(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,x*h,A),i.update(M,r,A))}function g(x,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,r,1)}function v(x,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,A);let _=0;for(let z=0;z<A;z++)_+=M[z]*C[z];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function d1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function p1(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let R=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;A===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let F=d.attributes.position.count*w,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const I=new Float32Array(F*G*4*v),q=new p_(I,F,G,v);q.type=ea,q.needsUpdate=!0;const D=w*4;for(let V=0;V<v;V++){const ct=_[V],st=z[V],vt=L[V],dt=F*G*4*V;for(let P=0;P<ct.count;P++){const Z=P*D;A===!0&&(l.fromBufferAttribute(ct,P),I[dt+Z+0]=l.x,I[dt+Z+1]=l.y,I[dt+Z+2]=l.z,I[dt+Z+3]=0),C===!0&&(l.fromBufferAttribute(st,P),I[dt+Z+4]=l.x,I[dt+Z+5]=l.y,I[dt+Z+6]=l.z,I[dt+Z+7]=0),y===!0&&(l.fromBufferAttribute(vt,P),I[dt+Z+8]=l.x,I[dt+Z+9]=l.y,I[dt+Z+10]=l.z,I[dt+Z+11]=vt.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new Ie(F,G)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<m.length;y++)A+=m[y];const C=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function m1(o,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const R_=new Fn,O0=new T_(1,1),C_=new p_,w_=new XS,D_=new M_,P0=[],z0=[],B0=new Float32Array(16),I0=new Float32Array(9),F0=new Float32Array(4);function Ts(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=P0[l];if(u===void 0&&(u=new Float32Array(l),P0[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Uc(o,e){let i=z0[e];i===void 0&&(i=new Int32Array(e),z0[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function g1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function v1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function S1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;F0.set(r),o.uniformMatrix2fv(this.addr,!1,F0),un(i,r)}}function y1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;I0.set(r),o.uniformMatrix3fv(this.addr,!1,I0),un(i,r)}}function M1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;B0.set(r),o.uniformMatrix4fv(this.addr,!1,B0),un(i,r)}}function E1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function R1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function C1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function w1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function D1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function U1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(O0.compareFunction=h_,u=O0):u=R_,i.setTexture2D(e||u,l)}function N1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||w_,l)}function L1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||D_,l)}function O1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||C_,l)}function P1(o){switch(o){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return w1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return O1}}function z1(o,e){o.uniform1fv(this.addr,e)}function B1(o,e){const i=Ts(e,this.size,2);o.uniform2fv(this.addr,i)}function I1(o,e){const i=Ts(e,this.size,3);o.uniform3fv(this.addr,i)}function F1(o,e){const i=Ts(e,this.size,4);o.uniform4fv(this.addr,i)}function H1(o,e){const i=Ts(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function G1(o,e){const i=Ts(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function V1(o,e){const i=Ts(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function k1(o,e){o.uniform1iv(this.addr,e)}function X1(o,e){o.uniform2iv(this.addr,e)}function W1(o,e){o.uniform3iv(this.addr,e)}function q1(o,e){o.uniform4iv(this.addr,e)}function Y1(o,e){o.uniform1uiv(this.addr,e)}function j1(o,e){o.uniform2uiv(this.addr,e)}function Z1(o,e){o.uniform3uiv(this.addr,e)}function K1(o,e){o.uniform4uiv(this.addr,e)}function Q1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||R_,u[h])}function J1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||w_,u[h])}function $1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||D_,u[h])}function tb(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||C_,u[h])}function eb(o){switch(o){case 5126:return z1;case 35664:return B1;case 35665:return I1;case 35666:return F1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return X1;case 35668:case 35672:return W1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return j1;case 36295:return Z1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return tb}}class nb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=P1(i.type)}}class ib{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eb(i.type)}}class ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function H0(o,e){o.seq.push(e),o.map[e.id]=e}function rb(o,e,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){H0(i,m===void 0?new nb(d,o,e):new ib(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new ab(d),H0(i,v)),i=v}}}class yc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);rb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G0(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const sb=37297;let ob=0;function lb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const V0=new se;function cb(o){be._getMatrix(V0,be.workingColorSpace,o);const e=`mat3( ${V0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Mc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function k0(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+lb(o.getShaderSource(e),h)}else return l}function ub(o,e){const i=cb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function fb(o,e){let i;switch(e){case mS:i="Linear";break;case gS:i="Reinhard";break;case _S:i="Cineon";break;case vS:i="ACESFilmic";break;case SS:i="AgX";break;case yS:i="Neutral";break;case xS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new rt;function hb(){be.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),e=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function db(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function pb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function mb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ao(o){return o!==""}function X0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(o){return o.replace(gb,vb)}const _b=new Map;function vb(o,e){let i=ce[e];if(i===void 0){const r=_b.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sd(i)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(o){return o.replace(xb,Sb)}function Sb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Y0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Mb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xs:case Ss:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function bb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case n_:e="ENVMAP_BLENDING_MULTIPLY";break;case dS:e="ENVMAP_BLENDING_MIX";break;case pS:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Ab(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=yb(i),m=Mb(i),g=Eb(i),v=bb(i),x=Tb(i),M=db(i),A=pb(u),C=l.createProgram();let y,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(y=[Y0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[Y0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?fb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,ub("linearToOutputTexel",i.outputColorSpace),hb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=sd(h),h=X0(h,i),h=W0(h,i),d=sd(d),d=X0(d,i),d=W0(d,i),h=q0(h),d=q0(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===s0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===s0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=z+y+h,w=z+_+d,F=G0(l,l.VERTEX_SHADER,L),G=G0(l,l.FRAGMENT_SHADER,w);l.attachShader(C,F),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(V){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(F).trim(),vt=l.getShaderInfoLog(G).trim();let dt=!0,P=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,G);else{const Z=k0(l,F,"vertex"),Y=k0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ct+`
`+Z+`
`+Y)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(st===""||vt==="")&&(P=!1);P&&(V.diagnostics={runnable:dt,programLog:ct,vertexShader:{log:st,prefix:y},fragmentShader:{log:vt,prefix:_}})}l.deleteShader(F),l.deleteShader(G),q=new yc(l,C),D=mb(l,C)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,sb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=G,this}let Rb=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new wb(e),i.set(e,r)),r}}class wb{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function Db(o,e,i,r,l,u,h){const d=new g_,p=new Cb,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,R,V,ct,st){const vt=ct.fog,dt=st.geometry,P=D.isMeshStandardMaterial?ct.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),Y=Z&&Z.mapping===Cc?Z.image.height:null,Et=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,$=U!==void 0?U.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let yt,Q,mt,Mt;if(Et){const Me=bi[Et];yt=Me.vertexShader,Q=Me.fragmentShader}else yt=D.vertexShader,Q=D.fragmentShader,p.update(D),mt=p.getVertexShaderID(D),Mt=p.getFragmentShaderID(D);const Rt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Qt=st.isBatchedMesh===!0,Ne=!!D.map,Fe=!!D.matcap,ge=!!Z,B=!!D.aoMap,vn=!!D.lightMap,ye=!!D.bumpMap,de=!!D.normalMap,Vt=!!D.displacementMap,_e=!!D.emissiveMap,jt=!!D.metalnessMap,ae=!!D.roughnessMap,Ze=D.anisotropy>0,N=D.clearcoat>0,E=D.dispersion>0,tt=D.iridescence>0,ft=D.sheen>0,pt=D.transmission>0,ot=Ze&&!!D.anisotropyMap,Pt=N&&!!D.clearcoatMap,Ut=N&&!!D.clearcoatNormalMap,Gt=N&&!!D.clearcoatRoughnessMap,kt=tt&&!!D.iridescenceMap,St=tt&&!!D.iridescenceThicknessMap,zt=ft&&!!D.sheenColorMap,qt=ft&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Ct=!!D.specularColorMap,ie=!!D.specularIntensityMap,k=pt&&!!D.transmissionMap,Nt=pt&&!!D.thicknessMap,bt=!!D.gradientMap,Bt=!!D.alphaMap,At=D.alphaTest>0,_t=!!D.alphaHash,Ft=!!D.extensions;let ne=Ha;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Ce={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Q,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:ys,alphaToCoverage:!!D.alphaToCoverage,map:Ne,matcap:Fe,envMap:ge,envMapMode:ge&&Z.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:vn,bumpMap:ye,normalMap:de,displacementMap:x&&Vt,emissiveMap:_e,normalMapObjectSpace:de&&D.normalMapType===AS,normalMapTangentSpace:de&&D.normalMapType===TS,metalnessMap:jt,roughnessMap:ae,anisotropy:Ze,anisotropyMap:ot,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:tt,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:zt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Ct,specularIntensityMap:ie,transmission:pt,transmissionMap:k,thicknessMap:Nt,gradientMap:bt,opaque:D.transparent===!1&&D.blending===ms&&D.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:_t,combine:D.combine,mapUv:Ne&&C(D.map.channel),aoMapUv:B&&C(D.aoMap.channel),lightMapUv:vn&&C(D.lightMap.channel),bumpMapUv:ye&&C(D.bumpMap.channel),normalMapUv:de&&C(D.normalMap.channel),displacementMapUv:Vt&&C(D.displacementMap.channel),emissiveMapUv:_e&&C(D.emissiveMap.channel),metalnessMapUv:jt&&C(D.metalnessMap.channel),roughnessMapUv:ae&&C(D.roughnessMap.channel),anisotropyMapUv:ot&&C(D.anisotropyMap.channel),clearcoatMapUv:Pt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&C(D.sheenRoughnessMap.channel),specularMapUv:Yt&&C(D.specularMap.channel),specularColorMapUv:Ct&&C(D.specularColorMap.channel),specularIntensityMapUv:ie&&C(D.specularIntensityMap.channel),transmissionMapUv:k&&C(D.transmissionMap.channel),thicknessMapUv:Nt&&C(D.thicknessMap.channel),alphaMapUv:Bt&&C(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(de||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(Ne||Bt),fog:!!vt,useFog:D.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:_e&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===In,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ce.vertexUv1s=m.has(1),Ce.vertexUv2s=m.has(2),Ce.vertexUv3s=m.has(3),m.clear(),Ce}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)R.push(V),R.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(z(R,D),L(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function z(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const R=A[D.type];let V;if(R){const ct=bi[R];V=iy.clone(ct.uniforms)}else V=D.uniforms;return V}function F(D,R){let V;for(let ct=0,st=g.length;ct<st;ct++){const vt=g[ct];if(vt.cacheKey===R){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new Ab(o,R,D,u),g.push(V)),V}function G(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function I(D){p.remove(D)}function q(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:F,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:q}}function Ub(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Nb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Z0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,A,C,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:A,renderOrder:v.renderOrder,z:C,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=y),e++,_}function d(v,x,M,A,C,y){const _=h(v,x,M,A,C,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(v,x,M,A,C,y){const _=h(v,x,M,A,C,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||Nb),r.length>1&&r.sort(x||j0),l.length>1&&l.sort(x||j0)}function g(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function Lb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new Z0,o.set(r,[h])):l>=u.length?(h=new Z0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Ob(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ue};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function Pb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let zb=0;function Bb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ib(o){const e=new Ob,i=Pb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new rt);const l=new rt,u=new $e,h=new $e;function d(m){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,C=0,y=0,_=0,z=0,L=0,w=0,F=0,G=0,I=0;m.sort(Bb);for(let D=0,R=m.length;D<R;D++){const V=m[D],ct=V.color,st=V.intensity,vt=V.distance,dt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ct.r*st,v+=ct.g*st,x+=ct.b*st;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],st);I++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=V.shadow.matrix,z++}r.directional[M]=P,M++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(ct).multiplyScalar(st),P.distance=vt,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[C]=P;const Z=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,Z.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[C]=Z.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=dt,w++}C++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(ct).multiplyScalar(st),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=P,y++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=dt,r.pointShadowMatrix[A]=V.shadow.matrix,L++}r.point[A]=P,A++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(st),P.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==M||q.pointLength!==A||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==_||q.numDirectionalShadows!==z||q.numPointShadows!==L||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+F-G,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,q.directionalLength=M,q.pointLength=A,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=_,q.numDirectionalShadows=z,q.numPointShadows=L,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=I,r.version=zb++)}function p(m,g){let v=0,x=0,M=0,A=0,C=0;const y=g.matrixWorldInverse;for(let _=0,z=m.length;_<z;_++){const L=m[_];if(L.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(L.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const w=r.rectArea[A];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),A++}else if(L.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:r}}function K0(o){const e=new Ib(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function Fb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new K0(o),e.set(l,[d])):u>=h.length?(d=new K0(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vb(o,e,i){let r=new E_;const l=new Ie,u=new Ie,h=new Je,d=new py({depthPacking:bS}),p=new my,m={},g=i.maxTextureSize,v={[Ga]:In,[In]:Ga,[ta]:ta},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Hb,fragmentShader:Gb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ri;A.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mi(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_;let _=this.type;this.render=function(G,I,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Fa),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const st=_!==Ji&&this.type===Ji,vt=_===Ji&&this.type!==Ji;for(let dt=0,P=G.length;dt<P;dt++){const Z=G[dt],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Et=Y.getFrameExtents();if(l.multiply(Et),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,Y.mapSize.y=u.y)),Y.map===null||st===!0||vt===!0){const $=this.type!==Ji?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const xt=Y.getViewport($);h.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),ct.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),w(I,q,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ji&&z(Y,q),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,R,V)};function z(G,I){const q=e.update(C);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,q,x,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,q,M,C,null)}function L(G,I,q,D){let R=null;const V=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)R=V;else if(R=q.isPointLight===!0?p:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ct=R.uuid,st=I.uuid;let vt=m[ct];vt===void 0&&(vt={},m[ct]=vt);let dt=vt[st];dt===void 0&&(dt=R.clone(),vt[st]=dt,I.addEventListener("dispose",F)),R=dt}if(R.visible=I.visible,R.wireframe=I.wireframe,D===Ji?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:v[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ct=o.properties.get(R);ct.light=q}return R}function w(G,I,q,D,R){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Ji)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const st=e.update(G),vt=G.material;if(Array.isArray(vt)){const dt=st.groups;for(let P=0,Z=dt.length;P<Z;P++){const Y=dt[P],Et=vt[Y.materialIndex];if(Et&&Et.visible){const U=L(G,Et,D,R);G.onBeforeShadow(o,G,I,q,st,U,Y),o.renderBufferDirect(q,null,st,U,G,Y),G.onAfterShadow(o,G,I,q,st,U,Y)}}}else if(vt.visible){const dt=L(G,vt,D,R);G.onBeforeShadow(o,G,I,q,st,dt,null),o.renderBufferDirect(q,null,st,dt,G,null),G.onAfterShadow(o,G,I,q,st,dt,null)}}const ct=G.children;for(let st=0,vt=ct.length;st<vt;st++)w(ct[st],I,q,D,R)}function F(G){G.target.removeEventListener("dispose",F);for(const q in m){const D=m[q],R=G.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const kb={[yh]:Mh,[Eh]:Ah,[bh]:Rh,[vs]:Th,[Mh]:yh,[Ah]:Eh,[Rh]:bh,[Th]:vs};function Xb(o,e){function i(){let k=!1;const Nt=new Je;let bt=null;const Bt=new Je(0,0,0,0);return{setMask:function(At){bt!==At&&!k&&(o.colorMask(At,At,At,At),bt=At)},setLocked:function(At){k=At},setClear:function(At,_t,Ft,ne,Ce){Ce===!0&&(At*=ne,_t*=ne,Ft*=ne),Nt.set(At,_t,Ft,ne),Bt.equals(Nt)===!1&&(o.clearColor(At,_t,Ft,ne),Bt.copy(Nt))},reset:function(){k=!1,bt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,bt=null,Bt=null,At=null;return{setReversed:function(_t){if(Nt!==_t){const Ft=e.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(_t){_t?Rt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Nt&&(_t=kb[_t]),Bt!==_t){switch(_t){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case vs:o.depthFunc(o.LEQUAL);break;case bh:o.depthFunc(o.EQUAL);break;case Th:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){At!==_t&&(Nt&&(_t=1-_t),o.clearDepth(_t),At=_t)},reset:function(){k=!1,bt=null,Bt=null,At=null,Nt=!1}}}function l(){let k=!1,Nt=null,bt=null,Bt=null,At=null,_t=null,Ft=null,ne=null,Ce=null;return{setTest:function(Me){k||(Me?Rt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Me){Nt!==Me&&!k&&(o.stencilMask(Me),Nt=Me)},setFunc:function(Me,Gn,fn){(bt!==Me||Bt!==Gn||At!==fn)&&(o.stencilFunc(Me,Gn,fn),bt=Me,Bt=Gn,At=fn)},setOp:function(Me,Gn,fn){(_t!==Me||Ft!==Gn||ne!==fn)&&(o.stencilOp(Me,Gn,fn),_t=Me,Ft=Gn,ne=fn)},setLocked:function(Me){k=Me},setClear:function(Me){Ce!==Me&&(o.clearStencil(Me),Ce=Me)},reset:function(){k=!1,Nt=null,bt=null,Bt=null,At=null,_t=null,Ft=null,ne=null,Ce=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,M=[],A=null,C=!1,y=null,_=null,z=null,L=null,w=null,F=null,G=null,I=new Ue(0,0,0),q=0,D=!1,R=null,V=null,ct=null,st=null,vt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=Z>=2);let Et=null,U={};const $=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),yt=new Je().fromArray($),Q=new Je().fromArray(xt);function mt(k,Nt,bt,Bt){const At=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<bt;Ft++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Nt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return _t}const Mt={};Mt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(o.DEPTH_TEST),h.setFunc(vs),ye(!1),de(t0),Rt(o.CULL_FACE),B(Fa);function Rt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function wt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function oe(k,Nt){return v[k]!==Nt?(o.bindFramebuffer(k,Nt),v[k]=Nt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(k,Nt){let bt=M,Bt=!1;if(k){bt=x.get(Nt),bt===void 0&&(bt=[],x.set(Nt,bt));const At=k.textures;if(bt.length!==At.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=At.length;_t<Ft;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=At.length,Bt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(bt)}function Ne(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Fe={[gr]:o.FUNC_ADD,[Kx]:o.FUNC_SUBTRACT,[Qx]:o.FUNC_REVERSE_SUBTRACT};Fe[Jx]=o.MIN,Fe[$x]=o.MAX;const ge={[tS]:o.ZERO,[eS]:o.ONE,[nS]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[lS]:o.SRC_ALPHA_SATURATE,[sS]:o.DST_COLOR,[aS]:o.DST_ALPHA,[iS]:o.ONE_MINUS_SRC_COLOR,[Sh]:o.ONE_MINUS_SRC_ALPHA,[oS]:o.ONE_MINUS_DST_COLOR,[rS]:o.ONE_MINUS_DST_ALPHA,[cS]:o.CONSTANT_COLOR,[uS]:o.ONE_MINUS_CONSTANT_COLOR,[fS]:o.CONSTANT_ALPHA,[hS]:o.ONE_MINUS_CONSTANT_ALPHA};function B(k,Nt,bt,Bt,At,_t,Ft,ne,Ce,Me){if(k===Fa){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(Rt(o.BLEND),C=!0),k!==Zx){if(k!==y||Me!==D){if((_!==gr||w!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,w=gr),Me)switch(k){case ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e0:o.blendFunc(o.ONE,o.ONE);break;case n0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case i0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case n0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,L=null,F=null,G=null,I.set(0,0,0),q=0,y=k,D=Me}return}At=At||Nt,_t=_t||bt,Ft=Ft||Bt,(Nt!==_||At!==w)&&(o.blendEquationSeparate(Fe[Nt],Fe[At]),_=Nt,w=At),(bt!==z||Bt!==L||_t!==F||Ft!==G)&&(o.blendFuncSeparate(ge[bt],ge[Bt],ge[_t],ge[Ft]),z=bt,L=Bt,F=_t,G=Ft),(ne.equals(I)===!1||Ce!==q)&&(o.blendColor(ne.r,ne.g,ne.b,Ce),I.copy(ne),q=Ce),y=k,D=!1}function vn(k,Nt){k.side===ta?wt(o.CULL_FACE):Rt(o.CULL_FACE);let bt=k.side===In;Nt&&(bt=!bt),ye(bt),k.blending===ms&&k.transparent===!1?B(Fa):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function de(k){k!==qx?(Rt(o.CULL_FACE),k!==V&&(k===t0?o.cullFace(o.BACK):k===Yx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),V=k}function Vt(k){k!==ct&&(P&&o.lineWidth(k),ct=k)}function _e(k,Nt,bt){k?(Rt(o.POLYGON_OFFSET_FILL),(st!==Nt||vt!==bt)&&(o.polygonOffset(Nt,bt),st=Nt,vt=bt)):wt(o.POLYGON_OFFSET_FILL)}function jt(k){k?Rt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function ae(k){k===void 0&&(k=o.TEXTURE0+dt-1),Et!==k&&(o.activeTexture(k),Et=k)}function Ze(k,Nt,bt){bt===void 0&&(Et===null?bt=o.TEXTURE0+dt-1:bt=Et);let Bt=U[bt];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[bt]=Bt),(Bt.type!==k||Bt.texture!==Nt)&&(Et!==bt&&(o.activeTexture(bt),Et=bt),o.bindTexture(k,Nt||Mt[k]),Bt.type=k,Bt.texture=Nt)}function N(){const k=U[Et];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(k){yt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function qt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function Yt(k,Nt){let bt=m.get(Nt);bt===void 0&&(bt=new WeakMap,m.set(Nt,bt));let Bt=bt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Nt,k.name),bt.set(k,Bt))}function Ct(k,Nt){const Bt=m.get(Nt).get(k);p.get(Nt)!==Bt&&(o.uniformBlockBinding(Nt,Bt,k.__bindingPointIndex),p.set(Nt,Bt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Et=null,U={},v={},x=new WeakMap,M=[],A=null,C=!1,y=null,_=null,z=null,L=null,w=null,F=null,G=null,I=new Ue(0,0,0),q=0,D=!1,R=null,V=null,ct=null,st=null,vt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Rt,disable:wt,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Ne,setBlending:B,setMaterial:vn,setFlipSided:ye,setCullFace:de,setLineWidth:Vt,setPolygonOffset:_e,setScissorTest:jt,activeTexture:ae,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:kt,texImage3D:St,updateUBOMapping:Yt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Pt,scissor:zt,viewport:qt,reset:ie}}function Wb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ie,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):bc("canvas")}function C(N,E,tt){let ft=1;const pt=Ze(N);if((pt.width>tt||pt.height>tt)&&(ft=tt/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ot=Math.floor(ft*pt.width),Pt=Math.floor(ft*pt.height);v===void 0&&(v=A(ot,Pt));const Ut=E?A(ot,Pt):v;return Ut.width=ot,Ut.height=Pt,Ut.getContext("2d").drawImage(N,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ot+"x"+Pt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,E,tt,ft,pt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ot=E;if(E===o.RED&&(tt===o.FLOAT&&(ot=o.R32F),tt===o.HALF_FLOAT&&(ot=o.R16F),tt===o.UNSIGNED_BYTE&&(ot=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ot=o.R8UI),tt===o.UNSIGNED_SHORT&&(ot=o.R16UI),tt===o.UNSIGNED_INT&&(ot=o.R32UI),tt===o.BYTE&&(ot=o.R8I),tt===o.SHORT&&(ot=o.R16I),tt===o.INT&&(ot=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ot=o.RG32F),tt===o.HALF_FLOAT&&(ot=o.RG16F),tt===o.UNSIGNED_BYTE&&(ot=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ot=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ot=o.RG16UI),tt===o.UNSIGNED_INT&&(ot=o.RG32UI),tt===o.BYTE&&(ot=o.RG8I),tt===o.SHORT&&(ot=o.RG16I),tt===o.INT&&(ot=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),tt===o.UNSIGNED_INT&&(ot=o.RGB32UI),tt===o.BYTE&&(ot=o.RGB8I),tt===o.SHORT&&(ot=o.RGB16I),tt===o.INT&&(ot=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ot=o.RGBA32UI),tt===o.BYTE&&(ot=o.RGBA8I),tt===o.SHORT&&(ot=o.RGBA16I),tt===o.INT&&(ot=o.RGBA32I)),E===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),E===o.RGBA){const Pt=pt?Mc:be.getTransfer(ft);tt===o.FLOAT&&(ot=o.RGBA32F),tt===o.HALF_FLOAT&&(ot=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ot=Pt===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function w(N,E){let tt;return N?E===null||E===yr||E===Co?tt=o.DEPTH24_STENCIL8:E===ea?tt=o.DEPTH32F_STENCIL8:E===Ro&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===yr||E===Co?tt=o.DEPTH_COMPONENT24:E===ea?tt=o.DEPTH_COMPONENT32F:E===Ro&&(tt=o.DEPTH_COMPONENT16),tt}function F(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==gi&&N.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function G(N){const E=N.target;E.removeEventListener("dispose",G),q(E),E.isVideoTexture&&g.delete(E)}function I(N){const E=N.target;E.removeEventListener("dispose",I),R(E)}function q(N){const E=r.get(N);if(E.__webglInit===void 0)return;const tt=N.source,ft=x.get(tt);if(ft){const pt=ft[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&D(N),Object.keys(ft).length===0&&x.delete(tt)}r.remove(N)}function D(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const tt=N.source,ft=x.get(tt);delete ft[E.__cacheKey],h.memory.textures--}function R(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let pt=0;pt<E.__webglFramebuffer[ft].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=N.textures;for(let ft=0,pt=tt.length;ft<pt;ft++){const ot=r.get(tt[ft]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove(tt[ft])}r.remove(N)}let V=0;function ct(){V=0}function st(){const N=V;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function vt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function dt(N,E){const tt=r.get(N);if(N.isVideoTexture&&jt(N),N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(tt,N,E);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function P(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Mt(tt,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function Z(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Mt(tt,N,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){Rt(tt,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const Et={[Dh]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},U={[gi]:o.NEAREST,[MS]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Hf]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},$={[RS]:o.NEVER,[LS]:o.ALWAYS,[CS]:o.LESS,[h_]:o.LEQUAL,[wS]:o.EQUAL,[NS]:o.GEQUAL,[DS]:o.GREATER,[US]:o.NOTEQUAL};function xt(N,E){if(E.type===ea&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===Hf||E.magFilter===ql||E.magFilter===xr||E.minFilter===Ti||E.minFilter===Hf||E.minFilter===ql||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Et[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Et[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Et[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===gi||E.minFilter!==ql&&E.minFilter!==xr||E.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(N,E){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",G));const ft=E.source;let pt=x.get(ft);pt===void 0&&(pt={},x.set(ft,pt));const ot=vt(E);if(ot!==N.__cacheKey){pt[ot]===void 0&&(pt[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),pt[ot].usedTimes++;const Pt=pt[N.__cacheKey];Pt!==void 0&&(pt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(E)),N.__cacheKey=ot,N.__webglTexture=pt[ot].texture}return tt}function Q(N,E,tt){return Math.floor(Math.floor(N/tt)/E)}function mt(N,E,tt,ft){const ot=N.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ft,E.data);else{ot.sort((St,zt)=>St.start-zt.start);let Pt=0;for(let St=1;St<ot.length;St++){const zt=ot[Pt],qt=ot[St],Yt=zt.start+zt.count,Ct=Q(qt.start,E.width,4),ie=Q(zt.start,E.width,4);qt.start<=Yt+1&&Ct===ie&&Q(qt.start+qt.count-1,E.width,4)===Ct?zt.count=Math.max(zt.count,qt.start+qt.count-zt.start):(++Pt,ot[Pt]=qt)}ot.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let St=0,zt=ot.length;St<zt;St++){const qt=ot[St],Yt=Math.floor(qt.start/4),Ct=Math.ceil(qt.count/4),ie=Yt%E.width,k=Math.floor(Yt/E.width),Nt=Ct,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ie,k,Nt,bt,tt,ft,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function Mt(N,E,tt){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const pt=yt(N,E),ot=E.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+tt);const Pt=r.get(ot);if(ot.version!==Pt.__version||pt===!0){i.activeTexture(o.TEXTURE0+tt);const Ut=be.getPrimaries(be.workingColorSpace),Gt=E.colorSpace===Ia?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===Ia||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=C(E.image,!1,l.maxTextureSize);St=ae(E,St);const zt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Yt=L(E.internalFormat,zt,qt,E.colorSpace,E.isVideoTexture);xt(ft,E);let Ct;const ie=E.mipmaps,k=E.isVideoTexture!==!0,Nt=Pt.__version===void 0||pt===!0,bt=ot.dataReady,Bt=F(E,St);if(E.isDepthTexture)Yt=w(E.format===Do,E.type),Nt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Yt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Yt,St.width,St.height,0,zt,qt,null));else if(E.isDataTexture)if(ie.length>0){k&&Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,Yt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],k?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,qt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,zt,qt,Ct.data);E.generateMipmaps=!1}else k?(Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,Yt,St.width,St.height),bt&&mt(E,St,zt,qt)):i.texImage2D(o.TEXTURE_2D,0,Yt,St.width,St.height,0,zt,qt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Yt,ie[0].width,ie[0].height,St.depth);for(let At=0,_t=ie.length;At<_t;At++)if(Ct=ie[At],E.format!==pi)if(zt!==null)if(k){if(bt)if(E.layerUpdates.size>0){const Ft=A0(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const Ce=Ct.data.subarray(ne*Ft/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ne,Ct.width,Ct.height,1,zt,Ce)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,St.depth,zt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,St.depth,zt,qt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,Yt,Ct.width,Ct.height,St.depth,0,zt,qt,Ct.data)}else{k&&Nt&&i.texStorage2D(o.TEXTURE_2D,Bt,Yt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],E.format!==pi?zt!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,qt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,Yt,Ct.width,Ct.height,0,zt,qt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Yt,St.width,St.height,St.depth),bt)if(E.layerUpdates.size>0){const At=A0(St.width,St.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=St.data.subarray(_t*At/St.data.BYTES_PER_ELEMENT,(_t+1)*At/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,zt,qt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,zt,qt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,St.width,St.height,St.depth,0,zt,qt,St.data);else if(E.isData3DTexture)k?(Nt&&i.texStorage3D(o.TEXTURE_3D,Bt,Yt,St.width,St.height,St.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,zt,qt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,St.width,St.height,St.depth,0,zt,qt,St.data);else if(E.isFramebufferTexture){if(Nt)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,Yt,St.width,St.height);else{let At=St.width,_t=St.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Yt,At,_t,0,zt,qt,null),At>>=1,_t>>=1}}else if(ie.length>0){if(k&&Nt){const At=Ze(ie[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Yt,At.width,At.height)}for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],k?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,zt,qt,Ct):i.texImage2D(o.TEXTURE_2D,At,Yt,zt,qt,Ct);E.generateMipmaps=!1}else if(k){if(Nt){const At=Ze(St);i.texStorage2D(o.TEXTURE_2D,Bt,Yt,At.width,At.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,qt,St)}else i.texImage2D(o.TEXTURE_2D,0,Yt,zt,qt,St);y(E)&&_(ft),Pt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Rt(N,E,tt){if(E.image.length!==6)return;const ft=yt(N,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const ot=r.get(pt);if(pt.version!==ot.__version||ft===!0){i.activeTexture(o.TEXTURE0+tt);const Pt=be.getPrimaries(be.workingColorSpace),Ut=E.colorSpace===Ia?null:be.getPrimaries(E.colorSpace),Gt=E.colorSpace===Ia||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let _t=0;_t<6;_t++)!kt&&!St?zt[_t]=C(E.image[_t],!0,l.maxCubemapSize):zt[_t]=St?E.image[_t].image:E.image[_t],zt[_t]=ae(E,zt[_t]);const qt=zt[0],Yt=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),ie=L(E.internalFormat,Yt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Nt=ot.__version===void 0||ft===!0,bt=pt.dataReady;let Bt=F(E,qt);xt(o.TEXTURE_CUBE_MAP,E);let At;if(kt){k&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){At=zt[_t].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==pi?Yt!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,Yt,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,Yt,Ct,ne.data)}}}else{if(At=E.mipmaps,k&&Nt){At.length>0&&Bt++;const _t=Ze(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,zt[_t].width,zt[_t].height,Yt,Ct,zt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,zt[_t].width,zt[_t].height,0,Yt,Ct,zt[_t].data);for(let Ft=0;Ft<At.length;Ft++){const Ce=At[Ft].image[_t].image;k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Ce.width,Ce.height,Yt,Ct,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,Ce.width,Ce.height,0,Yt,Ct,Ce.data)}}else{k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Yt,Ct,zt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Yt,Ct,zt[_t]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Yt,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,Yt,Ct,ne.image[_t])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ot.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,tt,ft,pt,ot){const Pt=u.convert(tt.format,tt.colorSpace),Ut=u.convert(tt.type),Gt=L(tt.internalFormat,Pt,Ut,tt.colorSpace),kt=r.get(E),St=r.get(tt);if(St.__renderTarget=E,!kt.__hasExternalTextures){const zt=Math.max(1,E.width>>ot),qt=Math.max(1,E.height>>ot);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,ot,Gt,zt,qt,E.depth,0,Pt,Ut,null):i.texImage2D(pt,ot,Gt,zt,qt,0,Pt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,pt,St.__webglTexture,0,Vt(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,pt,St.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(N,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,ot=w(E.stencilBuffer,pt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Vt(E);_e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ot,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ot,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,N)}else{const ft=E.textures;for(let pt=0;pt<ft.length;pt++){const ot=ft[pt],Pt=u.convert(ot.format,ot.colorSpace),Ut=u.convert(ot.type),Gt=L(ot.internalFormat,Pt,Ut,ot.colorSpace),kt=Vt(E);tt&&_e(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Gt,E.width,E.height):_e(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const pt=ft.__webglTexture,ot=Vt(E);if(E.depthTexture.format===wo)_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Do)_e(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const E=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Qt(E.__webglFramebuffer[0],N):Qt(E.__webglFramebuffer,N)}else if(tt){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ft],N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ot)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(N,E,tt){const ft=r.get(N);E!==void 0&&wt(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Ne(N)}function ge(N){const E=N.texture,tt=r.get(N),ft=r.get(E);N.addEventListener("dispose",I);const pt=N.textures,ot=N.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),ot){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)tt.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=r.get(pt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&_e(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];tt.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),St=u.convert(Gt.type),zt=L(Gt.internalFormat,kt,St,Gt.colorSpace,N.isXRRenderTarget===!0),qt=Vt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,zt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(tt.__webglFramebuffer[Ut][Gt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(tt.__webglFramebuffer[Ut],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=pt[Ut],St=r.get(kt);i.bindTexture(o.TEXTURE_2D,St.__webglTexture),xt(o.TEXTURE_2D,kt),wt(tt.__webglFramebuffer,N,kt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),y(kt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),xt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)wt(tt.__webglFramebuffer[Gt],N,E,o.COLOR_ATTACHMENT0,Ut,Gt);else wt(tt.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Ut,0);y(E)&&_(Ut),i.unbindTexture()}N.depthBuffer&&Ne(N)}function B(N){const E=N.textures;for(let tt=0,ft=E.length;tt<ft;tt++){const pt=E[tt];if(y(pt)){const ot=z(N),Pt=r.get(pt).__webglTexture;i.bindTexture(ot,Pt),_(ot),i.unbindTexture()}}}const vn=[],ye=[];function de(N){if(N.samples>0){if(_e(N)===!1){const E=N.textures,tt=N.width,ft=N.height;let pt=o.COLOR_BUFFER_BIT;const ot=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(N),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const St=r.get(E[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,pt,o.NEAREST),p===!0&&(vn.length=0,ye.length=0,vn.push(o.COLOR_ATTACHMENT0+kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(vn.push(ot),ye.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,vn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const St=r.get(E[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function _e(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function ae(N,E){const tt=N.colorSpace,ft=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==ys&&tt!==Ia&&(be.getTransfer(tt)===Be?(ft!==pi||pt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=_e}function qb(o,e){function i(r,l=Ia){let u;const h=be.getTransfer(l);if(r===aa)return o.UNSIGNED_BYTE;if(r===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===s_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===a_)return o.BYTE;if(r===r_)return o.SHORT;if(r===Ro)return o.UNSIGNED_SHORT;if(r===cd)return o.INT;if(r===yr)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===o_)return o.ALPHA;if(r===l_)return o.RGB;if(r===pi)return o.RGBA;if(r===wo)return o.DEPTH_COMPONENT;if(r===Do)return o.DEPTH_STENCIL;if(r===c_)return o.RED;if(r===hd)return o.RED_INTEGER;if(r===u_)return o.RG;if(r===dd)return o.RG_INTEGER;if(r===pd)return o.RGBA_INTEGER;if(r===gc||r===_c||r===vc||r===xc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nh||r===Lh||r===Oh||r===Ph)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Ih)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zh||r===Bh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Fh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sc||r===$h||r===td)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===f_||r===ed||r===nd||r===id)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Va({vertexShader:Yb,fragmentShader:jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Dc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends Es{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,M=null,A=null;const C=new Zb,y=i.getContextAttributes();let _=null,z=null;const L=[],w=[],F=new Ie;let G=null;const I=new si;I.viewport=new Je;const q=new si;q.viewport=new Je;const D=[I,q],R=new _y;let V=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=L[Q];return mt===void 0&&(mt=new ch,L[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=L[Q];return mt===void 0&&(mt=new ch,L[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=L[Q];return mt===void 0&&(mt=new ch,L[Q]=mt),mt.getHandSpace()};function st(Q){const mt=w.indexOf(Q.inputSource);if(mt===-1)return;const Mt=L[mt];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,m||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function vt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",dt);for(let Q=0;Q<L.length;Q++){const mt=w[Q];mt!==null&&(w[Q]=null,L[Q].disconnect(mt))}V=null,ct=null,C.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,z=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,wt=null;y.depth&&(wt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?Do:wo,Rt=y.stencil?Co:yr);const oe={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new Mr(x.textureWidth,x.textureHeight,{format:pi,type:aa,depthTexture:new T_(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Mr(M.framebufferWidth,M.framebufferHeight,{format:pi,type:aa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function dt(Q){for(let mt=0;mt<Q.removed.length;mt++){const Mt=Q.removed[mt],Rt=w.indexOf(Mt);Rt>=0&&(w[Rt]=null,L[Rt].disconnect(Mt))}for(let mt=0;mt<Q.added.length;mt++){const Mt=Q.added[mt];let Rt=w.indexOf(Mt);if(Rt===-1){for(let oe=0;oe<L.length;oe++)if(oe>=w.length){w.push(Mt),Rt=oe;break}else if(w[oe]===null){w[oe]=Mt,Rt=oe;break}if(Rt===-1)break}const wt=L[Rt];wt&&wt.connect(Mt)}}const P=new rt,Z=new rt;function Y(Q,mt,Mt){P.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const Rt=P.distanceTo(Z),wt=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),Ne=wt[14]/(wt[10]+1),Fe=(wt[9]+1)/wt[5],ge=(wt[9]-1)/wt[5],B=(wt[8]-1)/wt[0],vn=(oe[8]+1)/oe[0],ye=Qt*B,de=Qt*vn,Vt=Rt/(-B+vn),_e=Vt*-B;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Ne+Vt,Ze=ye-_e,N=de+(Rt-_e),E=Fe*Ne/ae*jt,tt=ge*Ne/ae*jt;Q.projectionMatrix.makePerspective(Ze,N,E,tt,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,Mt=Q.far;C.texture!==null&&(C.depthNear>0&&(mt=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=q.near=I.near=mt,R.far=q.far=I.far=Mt,(V!==R.near||ct!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,ct=R.far),I.layers.mask=Q.layers.mask|2,q.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|q.layers.mask;const Rt=Q.parent,wt=R.cameras;Et(R,Rt);for(let oe=0;oe<wt.length;oe++)Et(wt[oe],Rt);wt.length===2?Y(R,I,q):R.projectionMatrix.copy(I.projectionMatrix),U(Q,R,Rt)};function U(Q,mt,Mt){Mt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let $=null;function xt(Q,mt){if(g=mt.getViewerPose(m||h),A=mt,g!==null){const Mt=g.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Rt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Mt.length;Qt++){const Ne=Mt[Qt];let Fe=null;if(M!==null)Fe=M.getViewport(Ne);else{const B=v.getViewSubImage(x,Ne);Fe=B.viewport,Qt===0&&(e.setRenderTargetTextures(z,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(z))}let ge=D[Qt];ge===void 0&&(ge=new si,ge.layers.enable(Qt),ge.viewport=new Je,D[Qt]=ge),ge.matrix.fromArray(Ne.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ne.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(ge)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Mt[0]);Qt&&Qt.isValid&&Qt.texture&&C.init(e,Qt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const Rt=w[Mt],wt=L[Mt];Rt!==null&&wt!==void 0&&wt.update(Rt,mt,m||h)}$&&$(Q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),A=null}const yt=new A_;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const dr=new ra,Qb=new $e;function Jb(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,S_(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,z,L,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(u(y,_),A(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),C(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,z,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const z=e.get(_),L=z.envMap,w=z.envMapRotation;L&&(y.envMap.value=L,dr.copy(w),dr.x*=-1,dr.y*=-1,dr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),y.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(dr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,z,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*z,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,z){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const z=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function $b(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,L){const w=L.program;r.uniformBlockBinding(z,w)}function m(z,L){let w=l[z.id];w===void 0&&(A(z),w=g(z),l[z.id]=w,z.addEventListener("dispose",y));const F=L.program;r.updateUBOMapping(z,F);const G=e.render.frame;u[z.id]!==G&&(x(z),u[z.id]=G)}function g(z){const L=v();z.__bindingPointIndex=L;const w=o.createBuffer(),F=z.__size,G=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const L=l[z.id],w=z.uniforms,F=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,I=w.length;G<I;G++){const q=Array.isArray(w[G])?w[G]:[w[G]];for(let D=0,R=q.length;D<R;D++){const V=q[D];if(M(V,G,D,F)===!0){const ct=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let dt=0;dt<st.length;dt++){const P=st[dt],Z=C(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ct+vt,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,vt),vt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,L,w,F){const G=z.value,I=L+"_"+w;if(F[I]===void 0)return typeof G=="number"||typeof G=="boolean"?F[I]=G:F[I]=G.clone(),!0;{const q=F[I];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return F[I]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function A(z){const L=z.uniforms;let w=0;const F=16;for(let I=0,q=L.length;I<q;I++){const D=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,V=D.length;R<V;R++){const ct=D[R],st=Array.isArray(ct.value)?ct.value:[ct.value];for(let vt=0,dt=st.length;vt<dt;vt++){const P=st[vt],Z=C(P),Y=w%F,Et=Y%Z.boundary,U=Y+Et;w+=Et,U!==0&&F-U<Z.storage&&(w+=F-U),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=w,w+=Z.storage}}}const G=w%F;return G>0&&(w+=F-G),z.__size=w,z.__cache={},this}function C(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class tT{constructor(e={}){const{canvas:i=PS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const z=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=ri;let G=0,I=0,q=null,D=-1,R=null;const V=new Je,ct=new Je;let st=null;const vt=new Ue(0);let dt=0,P=i.width,Z=i.height,Y=1,Et=null,U=null;const $=new Je(0,0,P,Z),xt=new Je(0,0,P,Z);let yt=!1;const Q=new E_;let mt=!1,Mt=!1;const Rt=new $e,wt=new $e,oe=new rt,Qt=new Je,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return q===null?Y:1}let B=r;function vn(T,W){return i.getContext(T,W)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",_t,!1),B===null){const W="webgl2";if(B=vn(W,T),B===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,de,Vt,_e,jt,ae,Ze,N,E,tt,ft,pt,ot,Pt,Ut,Gt,kt,St,zt,qt,Yt,Ct,ie,k;function Nt(){ye=new u1(B),ye.init(),Ct=new qb(B,ye),de=new i1(B,ye,e,Ct),Vt=new Xb(B,ye),de.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),_e=new d1(B),jt=new Ub,ae=new Wb(B,ye,Vt,jt,de,Ct,_e),Ze=new r1(w),N=new c1(w),E=new xy(B),ie=new e1(B,E),tt=new f1(B,E,_e,ie),ft=new m1(B,tt,E,_e),zt=new p1(B,de,ae),Gt=new a1(jt),pt=new Db(w,Ze,N,ye,de,ie,Gt),ot=new Jb(w,jt),Pt=new Lb,Ut=new Fb(ye),St=new t1(w,Ze,N,Vt,ft,M,p),kt=new Vb(w,ft,de),k=new $b(B,_e,de,Vt),qt=new n1(B,ye,_e),Yt=new h1(B,ye,_e),_e.programs=pt.programs,w.capabilities=de,w.extensions=ye,w.properties=jt,w.renderLists=Pt,w.shadowMap=kt,w.state=Vt,w.info=_e}Nt();const bt=new Kb(w,B);this.xr=bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(P,Z,!1))},this.getSize=function(T){return T.set(P,Z)},this.setSize=function(T,W,it=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,Z=W,i.width=Math.floor(T*Y),i.height=Math.floor(W*Y),it===!0&&(i.style.width=T+"px",i.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(P*Y,Z*Y).floor()},this.setDrawingBufferSize=function(T,W,it){P=T,Z=W,Y=it,i.width=Math.floor(T*it),i.height=Math.floor(W*it),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,W,it,at){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,W,it,at),Vt.viewport(V.copy($).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,W,it,at){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,W,it,at),Vt.scissor(ct.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){Vt.setScissorTest(yt=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,it=!0){let at=0;if(T){let j=!1;if(q!==null){const Tt=q.texture.format;j=Tt===pd||Tt===dd||Tt===hd}if(j){const Tt=q.texture.type,Dt=Tt===aa||Tt===yr||Tt===Ro||Tt===Co||Tt===ud||Tt===fd,Ot=St.getClearColor(),It=St.getClearAlpha(),te=Ot.r,Kt=Ot.g,Xt=Ot.b;Dt?(A[0]=te,A[1]=Kt,A[2]=Xt,A[3]=It,B.clearBufferuiv(B.COLOR,0,A)):(C[0]=te,C[1]=Kt,C[2]=Xt,C[3]=It,B.clearBufferiv(B.COLOR,0,C))}else at|=B.COLOR_BUFFER_BIT}W&&(at|=B.DEPTH_BUFFER_BIT),it&&(at|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),Pt.dispose(),Ut.dispose(),jt.dispose(),Ze.dispose(),N.dispose(),ft.dispose(),ie.dispose(),k.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",rn),bt.removeEventListener("sessionend",xn),Nn.stop()};function Bt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const T=_e.autoReset,W=kt.enabled,it=kt.autoUpdate,at=kt.needsUpdate,j=kt.type;Nt(),_e.autoReset=T,kt.enabled=W,kt.autoUpdate=it,kt.needsUpdate=at,kt.type=j}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ft(T){const W=T.target;W.removeEventListener("dispose",Ft),ne(W)}function ne(T){Ce(T),jt.remove(T)}function Ce(T){const W=jt.get(T).programs;W!==void 0&&(W.forEach(function(it){pt.releaseProgram(it)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,it,at,j,Tt){W===null&&(W=Ne);const Dt=j.isMesh&&j.matrixWorld.determinant()<0,Ot=Wa(T,W,it,at,j);Vt.setMaterial(at,Dt);let It=it.index,te=1;if(at.wireframe===!0){if(It=tt.getWireframeAttribute(it),It===void 0)return;te=2}const Kt=it.drawRange,Xt=it.attributes.position;let le=Kt.start*te,Ae=(Kt.start+Kt.count)*te;Tt!==null&&(le=Math.max(le,Tt.start*te),Ae=Math.min(Ae,(Tt.start+Tt.count)*te)),It!==null?(le=Math.max(le,0),Ae=Math.min(Ae,It.count)):Xt!=null&&(le=Math.max(le,0),Ae=Math.min(Ae,Xt.count));const Xe=Ae-le;if(Xe<0||Xe===1/0)return;ie.setup(j,at,Ot,it,It);let fe,Re=qt;if(It!==null&&(fe=E.get(It),Re=Yt,Re.setIndex(fe)),j.isMesh)at.wireframe===!0?(Vt.setLineWidth(at.wireframeLinewidth*ge()),Re.setMode(B.LINES)):Re.setMode(B.TRIANGLES);else if(j.isLine){let Zt=at.linewidth;Zt===void 0&&(Zt=1),Vt.setLineWidth(Zt*ge()),j.isLineSegments?Re.setMode(B.LINES):j.isLineLoop?Re.setMode(B.LINE_LOOP):Re.setMode(B.LINE_STRIP)}else j.isPoints?Re.setMode(B.POINTS):j.isSprite&&Re.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Re.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,Le=j._multiDrawCounts,ve=j._multiDrawCount,hn=It?E.get(It).bytesPerElement:1,ca=jt.get(at).currentProgram.getUniforms();for(let Ve=0;Ve<ve;Ve++)ca.setValue(B,"_gl_DrawID",Ve),Re.render(Zt[Ve]/hn,Le[Ve])}else if(j.isInstancedMesh)Re.renderInstances(le,Xe,j.count);else if(it.isInstancedBufferGeometry){const Zt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Le=Math.min(it.instanceCount,Zt);Re.renderInstances(le,Xe,Le)}else Re.render(le,Xe)};function Me(T,W,it){T.transparent===!0&&T.side===ta&&T.forceSinglePass===!1?(T.side=In,T.needsUpdate=!0,oa(T,W,it),T.side=Ga,T.needsUpdate=!0,oa(T,W,it),T.side=ta):oa(T,W,it)}this.compile=function(T,W,it=null){it===null&&(it=T),_=Ut.get(it),_.init(W),L.push(_),it.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),T!==it&&T.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const at=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];Me(Ot,it,j),at.add(Ot)}else Me(Tt,it,j),at.add(Tt)}),_=L.pop(),at},this.compileAsync=function(T,W,it=null){const at=this.compile(T,W,it);return new Promise(j=>{function Tt(){if(at.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&at.delete(Dt)}),at.size===0){j(T);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function fn(T){Gn&&Gn(T)}function rn(){Nn.stop()}function xn(){Nn.start()}const Nn=new A_;Nn.setAnimationLoop(fn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(T){Gn=T,bt.setAnimationLoop(T),T===null?Nn.stop():Nn.start()},bt.addEventListener("sessionstart",rn),bt.addEventListener("sessionend",xn),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,W,q),_=Ut.get(T,L.length),_.init(W),L.push(_),wt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(wt),Mt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,Mt),y=Pt.get(T,z.length),y.init(),z.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&ka(Tt,W,-1/0,w.sortObjects)}ka(T,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Et,U),Fe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Fe&&St.addToRenderList(y,T),this.info.render.frame++,mt===!0&&Gt.beginShadows();const it=_.state.shadowsArray;kt.render(it,T,W),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];Bo(at,j,T,It)}Fe&&St.render(T);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];zo(y,T,It,It.viewport)}}else j.length>0&&Bo(at,j,T,W),Fe&&St.render(T),zo(y,T,W);q!==null&&I===0&&(ae.updateMultisampleRenderTarget(q),ae.updateRenderTargetMipmap(q)),T.isScene===!0&&T.onAfterRender(w,T,W),ie.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],mt===!0&&Gt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function ka(T,W,it,at){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)it=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){at&&Qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const Dt=ft.update(T),Ot=T.material;Ot.visible&&y.push(T,Dt,Ot,it,Qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Dt=ft.update(T),Ot=T.material;if(at&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const It=Dt.groups;for(let te=0,Kt=It.length;te<Kt;te++){const Xt=It[te],le=Ot[Xt.materialIndex];le&&le.visible&&y.push(T,Dt,le,it,Qt.z,Xt)}}else Ot.visible&&y.push(T,Dt,Ot,it,Qt.z,null)}}const Tt=T.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)ka(Tt[Dt],W,it,at)}function zo(T,W,it,at){const j=T.opaque,Tt=T.transmissive,Dt=T.transparent;_.setupLightsView(it),mt===!0&&Gt.setGlobalState(w.clippingPlanes,it),at&&Vt.viewport(V.copy(at)),j.length>0&&Xa(j,W,it),Tt.length>0&&Xa(Tt,W,it),Dt.length>0&&Xa(Dt,W,it),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Bo(T,W,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new Mr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Uo:aa,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[at.id],Dt=at.viewport||V;Tt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Ot=w.getRenderTarget(),It=w.getActiveCubeFace(),te=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(vt),dt=w.getClearAlpha(),dt<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&St.render(it);const Kt=w.toneMapping;w.toneMapping=Ha;const Xt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),mt===!0&&Gt.setGlobalState(w.clippingPlanes,at),Xa(T,it,at),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ae=0,Xe=W.length;Ae<Xe;Ae++){const fe=W[Ae],Re=fe.object,Zt=fe.geometry,Le=fe.material,ve=fe.group;if(Le.side===ta&&Re.layers.test(at.layers)){const hn=Le.side;Le.side=In,Le.needsUpdate=!0,sa(Re,it,at,Zt,Le,ve),Le.side=hn,Le.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Ot,It,te),w.setClearColor(vt,dt),Xt!==void 0&&(at.viewport=Xt),w.toneMapping=Kt}function Xa(T,W,it){const at=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=T.length;j<Tt;j++){const Dt=T[j],Ot=Dt.object,It=Dt.geometry,te=Dt.group;let Kt=Dt.material;Kt.allowOverride===!0&&at!==null&&(Kt=at),Ot.layers.test(it.layers)&&sa(Ot,W,it,It,Kt,te)}}function sa(T,W,it,at,j,Tt){T.onBeforeRender(w,W,it,at,j,Tt),T.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(w,W,it,at,T,Tt),j.transparent===!0&&j.side===ta&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,w.renderBufferDirect(it,W,at,j,T,Tt),j.side=Ga,j.needsUpdate=!0,w.renderBufferDirect(it,W,at,j,T,Tt),j.side=ta):w.renderBufferDirect(it,W,at,j,T,Tt),T.onAfterRender(w,W,it,at,j,Tt)}function oa(T,W,it){W.isScene!==!0&&(W=Ne);const at=jt.get(T),j=_.state.lights,Tt=_.state.shadowsArray,Dt=j.state.version,Ot=pt.getParameters(T,j.state,Tt,W,it),It=pt.getProgramCacheKey(Ot);let te=at.programs;at.environment=T.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(T.isMeshStandardMaterial?N:Ze).get(T.envMap||at.environment),at.envMapRotation=at.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,te===void 0&&(T.addEventListener("dispose",Ft),te=new Map,at.programs=te);let Kt=te.get(It);if(Kt!==void 0){if(at.currentProgram===Kt&&at.lightsStateVersion===Dt)return wi(T,Ot),Kt}else Ot.uniforms=pt.getUniforms(T),T.onBeforeCompile(Ot,w),Kt=pt.acquireProgram(Ot,It),te.set(It,Kt),at.uniforms=Ot.uniforms;const Xt=at.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),wi(T,Ot),at.needsLights=tn(T),at.lightsStateVersion=Dt,at.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=Kt,at.uniformsList=null,Kt}function Ci(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=yc.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function wi(T,W){const it=jt.get(T);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Wa(T,W,it,at,j){W.isScene!==!0&&(W=Ne),ae.resetTextureUnits();const Tt=W.fog,Dt=at.isMeshStandardMaterial?W.environment:null,Ot=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ys,It=(at.isMeshStandardMaterial?N:Ze).get(at.envMap||Dt),te=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Kt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Xt=!!it.morphAttributes.position,le=!!it.morphAttributes.normal,Ae=!!it.morphAttributes.color;let Xe=Ha;at.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const fe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Re=fe!==void 0?fe.length:0,Zt=jt.get(at),Le=_.state.lights;if(mt===!0&&(Mt===!0||T!==R)){const dn=T===R&&at.id===D;Gt.setState(at,T,dn)}let ve=!1;at.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Le.state.version||Zt.outputColorSpace!==Ot||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==It||at.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Gt.numPlanes||Zt.numIntersection!==Gt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Kt||Zt.morphTargets!==Xt||Zt.morphNormals!==le||Zt.morphColors!==Ae||Zt.toneMapping!==Xe||Zt.morphTargetsCount!==Re)&&(ve=!0):(ve=!0,Zt.__version=at.version);let hn=Zt.currentProgram;ve===!0&&(hn=oa(at,W,j));let ca=!1,Ve=!1,Ui=!1;const He=hn.getUniforms(),bn=Zt.uniforms;if(Vt.useProgram(hn.program)&&(ca=!0,Ve=!0,Ui=!0),at.id!==D&&(D=at.id,Ve=!0),ca||R!==T){Vt.buffers.depth.getReversed()?(Rt.copy(T.projectionMatrix),BS(Rt),IS(Rt),He.setValue(B,"projectionMatrix",Rt)):He.setValue(B,"projectionMatrix",T.projectionMatrix),He.setValue(B,"viewMatrix",T.matrixWorldInverse);const Sn=He.map.cameraPosition;Sn!==void 0&&Sn.setValue(B,oe.setFromMatrixPosition(T.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&He.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Ve=!0,Ui=!0)}if(j.isSkinnedMesh){He.setOptional(B,j,"bindMatrix"),He.setOptional(B,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),He.setValue(B,"boneTexture",dn.boneTexture,ae))}j.isBatchedMesh&&(He.setOptional(B,j,"batchingTexture"),He.setValue(B,"batchingTexture",j._matricesTexture,ae),He.setOptional(B,j,"batchingIdTexture"),He.setValue(B,"batchingIdTexture",j._indirectTexture,ae),He.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&He.setValue(B,"batchingColorTexture",j._colorsTexture,ae));const sn=it.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&zt.update(j,it,hn),(Ve||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,He.setValue(B,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=It,bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(bn.envMapIntensity.value=W.environmentIntensity),Ve&&(He.setValue(B,"toneMappingExposure",w.toneMappingExposure),Zt.needsLights&&la(bn,Ui),Tt&&at.fog===!0&&ot.refreshFogUniforms(bn,Tt),ot.refreshMaterialUniforms(bn,at,Y,Z,_.state.transmissionRenderTarget[T.id]),yc.upload(B,Ci(Zt),bn,ae)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(yc.upload(B,Ci(Zt),bn,ae),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&He.setValue(B,"center",j.center),He.setValue(B,"modelViewMatrix",j.modelViewMatrix),He.setValue(B,"normalMatrix",j.normalMatrix),He.setValue(B,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let Sn=0,vi=dn.length;Sn<vi;Sn++){const Ni=dn[Sn];k.update(Ni,hn),k.bind(Ni,hn)}}return hn}function la(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,W,it){const at=jt.get(T);at.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),jt.get(T.texture).__webglTexture=W,jt.get(T.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const it=jt.get(T);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const Io=B.createFramebuffer();this.setRenderTarget=function(T,W=0,it=0){q=T,G=W,I=it;let at=!0,j=null,Tt=!1,Dt=!1;if(T){const It=jt.get(T);if(It.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(B.FRAMEBUFFER,null),at=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(It.__hasExternalTextures)ae.rebindTextures(T,jt.get(T.texture).__webglTexture,jt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xt=T.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const te=T.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Kt=jt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[W])?j=Kt[W][it]:j=Kt[W],Tt=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?j=jt.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?j=Kt[it]:j=Kt,V.copy(T.viewport),ct.copy(T.scissor),st=T.scissorTest}else V.copy($).multiplyScalar(Y).floor(),ct.copy(xt).multiplyScalar(Y).floor(),st=yt;if(it!==0&&(j=Io),Vt.bindFramebuffer(B.FRAMEBUFFER,j)&&at&&Vt.drawBuffers(T,j),Vt.viewport(V),Vt.scissor(ct),Vt.setScissorTest(st),Tt){const It=jt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,it)}else if(Dt){const It=jt.get(T.texture),te=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,it,te)}else if(T!==null&&it!==0){const It=jt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(T,W,it,at,j,Tt,Dt,Ot=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){Vt.bindFramebuffer(B.FRAMEBUFFER,It);try{const te=T.textures[Ot],Kt=te.format,Xt=te.type;if(!de.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-at&&it>=0&&it<=T.height-j&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot),B.readPixels(W,it,at,j,Ct.convert(Kt),Ct.convert(Xt),Tt))}finally{const te=q!==null?jt.get(q).__webglFramebuffer:null;Vt.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(T,W,it,at,j,Tt,Dt,Ot=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if(W>=0&&W<=T.width-at&&it>=0&&it<=T.height-j){Vt.bindFramebuffer(B.FRAMEBUFFER,It);const te=T.textures[Ot],Kt=te.format,Xt=te.type;if(!de.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot),B.readPixels(W,it,at,j,Ct.convert(Kt),Ct.convert(Xt),0);const Ae=q!==null?jt.get(q).__webglFramebuffer:null;Vt.bindFramebuffer(B.FRAMEBUFFER,Ae);const Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zS(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(le),B.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,it=0){const at=Math.pow(2,-it),j=Math.floor(T.image.width*at),Tt=Math.floor(T.image.height*at),Dt=W!==null?W.x:0,Ot=W!==null?W.y:0;ae.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,Dt,Ot,j,Tt),Vt.unbindTexture()};const Fo=B.createFramebuffer(),Di=B.createFramebuffer();this.copyTextureToTexture=function(T,W,it=null,at=null,j=0,Tt=null){Tt===null&&(j!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Dt,Ot,It,te,Kt,Xt,le,Ae,Xe;const fe=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(it!==null)Dt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,Kt=it.min.y,Xt=it.isBox3?it.min.z:0;else{const sn=Math.pow(2,-j);Dt=Math.floor(fe.width*sn),Ot=Math.floor(fe.height*sn),T.isDataArrayTexture?It=fe.depth:T.isData3DTexture?It=Math.floor(fe.depth*sn):It=1,te=0,Kt=0,Xt=0}at!==null?(le=at.x,Ae=at.y,Xe=at.z):(le=0,Ae=0,Xe=0);const Re=Ct.convert(W.format),Zt=Ct.convert(W.type);let Le;W.isData3DTexture?(ae.setTexture3D(W,0),Le=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),Le=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ve=B.getParameter(B.UNPACK_ROW_LENGTH),hn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ca=B.getParameter(B.UNPACK_SKIP_PIXELS),Ve=B.getParameter(B.UNPACK_SKIP_ROWS),Ui=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Kt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const He=T.isDataArrayTexture||T.isData3DTexture,bn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const sn=jt.get(T),dn=jt.get(W),Sn=jt.get(sn.__renderTarget),vi=jt.get(dn.__renderTarget);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)He&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.get(T).__webglTexture,j,Xt+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.get(W).__webglTexture,Tt,Xe+Ni)),B.blitFramebuffer(te,Kt,Dt,Ot,le,Ae,Dt,Ot,B.DEPTH_BUFFER_BIT,B.NEAREST);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||jt.has(T)){const sn=jt.get(T),dn=jt.get(W);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,Fo),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Di);for(let Sn=0;Sn<It;Sn++)He?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,j,Xt+Sn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,j),bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dn.__webglTexture,Tt,Xe+Sn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,dn.__webglTexture,Tt),j!==0?B.blitFramebuffer(te,Kt,Dt,Ot,le,Ae,Dt,Ot,B.COLOR_BUFFER_BIT,B.NEAREST):bn?B.copyTexSubImage3D(Le,Tt,le,Ae,Xe+Sn,te,Kt,Dt,Ot):B.copyTexSubImage2D(Le,Tt,le,Ae,te,Kt,Dt,Ot);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Le,Tt,le,Ae,Xe,Dt,Ot,It,Re,Zt,fe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,Tt,le,Ae,Xe,Dt,Ot,It,Re,fe.data):B.texSubImage3D(Le,Tt,le,Ae,Xe,Dt,Ot,It,Re,Zt,fe):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,le,Ae,Dt,Ot,Re,Zt,fe.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,le,Ae,fe.width,fe.height,Re,fe.data):B.texSubImage2D(B.TEXTURE_2D,Tt,le,Ae,Dt,Ot,Re,Zt,fe);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,hn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ca),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ui),Tt===0&&W.generateMipmaps&&B.generateMipmap(Le),Vt.unbindTexture()},this.copyTextureToTexture3D=function(T,W,it=null,at=null,j=0){return gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,W,it,at,j)},this.initRenderTarget=function(T){jt.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),Vt.unbindTexture()},this.resetState=function(){G=0,I=0,q=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}var U_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Q0=Sr.createContext&&Sr.createContext(U_),eT=["attr","size","title"];function nT(o,e){if(o==null)return{};var i=iT(o,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function iT(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Ac(){return Ac=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Ac.apply(this,arguments)}function J0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Rc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?J0(Object(i),!0).forEach(function(r){aT(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):J0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function aT(o,e,i){return e=rT(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function rT(o){var e=sT(o,"string");return typeof e=="symbol"?e:e+""}function sT(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function N_(o){return o&&o.map((e,i)=>Sr.createElement(e.tag,Rc({key:i},e.attr),N_(e.child)))}function Un(o){return e=>Sr.createElement(oT,Ac({attr:Rc({},o.attr)},e),N_(o.child))}function oT(o){var e=i=>{var{attr:r,size:l,title:u}=o,h=nT(o,eT),d=l||i.size||"1em",p;return i.className&&(p=i.className),o.className&&(p=(p?p+" ":"")+o.className),Sr.createElement("svg",Ac({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:p,style:Rc(Rc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&Sr.createElement("title",null,u),o.children)};return Q0!==void 0?Sr.createElement(Q0.Consumer,null,i=>e(i)):e(U_)}function _h(o){return Un({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function $0(o){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function lT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(o)}function t_(o){return Un({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(o)}function cT(o){return Un({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(o)}function uT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(o)}function fT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(o)}function hT(o){return Un({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"},child:[]}]})(o)}function dT(o){return Un({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(o)}function pT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"},child:[]}]})(o)}function mT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(o)}function vh(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(o)}function gT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(o)}function _T(o){return Un({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(o)}function vT(o){return Un({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(o)}const xT=()=>{const[o,e]=$i.useState(!1),[i,r]=$i.useState({x:0,y:0}),[l,u]=$i.useState("home"),h=$i.useRef(null);$i.useEffect(()=>{if(!h.current)return;const p=new cy,m=new si(75,window.innerWidth/window.innerHeight,.1,1e3),g=new tT({canvas:h.current,alpha:!0,antialias:!0});g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(window.devicePixelRatio);const v=new Ri,x=500,M=new Float32Array(x*3);for(let q=0;q<x*3;q++)M[q]=(Math.random()-.5)*10;v.setAttribute("position",new _i(M,3));const A=new b_({size:.005,color:"#00a8ff",transparent:!0,opacity:.8}),C=new dy(v,A);p.add(C);const y=new gd(1,32,32),_=new Tc({color:"#ff6b35",wireframe:!0,transparent:!0,opacity:.3}),z=new mi(y,_);p.add(z);const L=new bs(1,1,1),w=new Tc({color:"#00a8ff",wireframe:!0,transparent:!0,opacity:.3}),F=new mi(L,w);F.position.x=3,p.add(F),m.position.z=5;const G=()=>{if(requestAnimationFrame(G),z.rotation.x+=.001,z.rotation.y+=.002,F.rotation.x+=.002,F.rotation.y+=.001,C.rotation.y+=5e-4,i.x&&i.y){const q=i.x/window.innerWidth*2-1,D=-(i.y/window.innerHeight)*2+1;z.position.x=q*.5,z.position.y=D*.5}g.render(p,m)};G();const I=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I),g.dispose()}},[i]),$i.useEffect(()=>{const p=m=>{r({x:m.clientX,y:m.clientY})};return window.addEventListener("mousemove",p),()=>window.removeEventListener("mousemove",p)},[]),$i.useEffect(()=>{const p=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const d=p=>{document.getElementById(p)?.scrollIntoView({behavior:"smooth"})};return lt.jsxs("div",{className:"bg-black text-white min-h-screen overflow-x-hidden",children:[lt.jsx("div",{className:"fixed w-5 h-5 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] transition-all duration-100 mix-blend-difference",style:{left:i.x-10,top:i.y-10}}),lt.jsx("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${o?"bg-black/90 backdrop-blur-lg py-4 shadow-lg shadow-blue-500/20":"bg-transparent py-6"}`,children:lt.jsxs("div",{className:"max-w-7xl mx-auto px-8 flex justify-between items-center",children:[lt.jsx("div",{className:"text-2xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform",children:"JRP"}),lt.jsx("div",{className:"hidden md:flex gap-8 items-center",children:["Home","About","Skills","Projects","Experience","Contact"].map(p=>lt.jsxs("button",{onClick:()=>d(p.toLowerCase()),className:"text-gray-300 hover:text-blue-500 transition-colors duration-300 relative group",children:[p,lt.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"})]},p))})]})}),lt.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[lt.jsx("canvas",{ref:h,className:"absolute inset-0 z-0"}),lt.jsxs("div",{className:"relative z-10 text-center max-w-4xl mx-auto px-8",children:[lt.jsx("div",{className:"mb-6 inline-block",children:lt.jsx("div",{className:"w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-orange-500 rounded-full p-1 animate-pulse",children:lt.jsx("div",{className:"w-full h-full bg-black rounded-full flex items-center justify-center",children:lt.jsx(pT,{className:"text-5xl text-blue-500 animate-spin",style:{animationDuration:"10s"}})})})}),lt.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient",children:"Jaya Raghu Ram Penugonda"}),lt.jsx("p",{className:"text-2xl md:text-3xl text-gray-300 mb-8",children:"Data Scientist | AI/ML Engineer | Full-Stack Developer"}),lt.jsx("p",{className:"text-lg text-gray-400 mb-10",children:"Transforming data into intelligent solutions that drive innovation"}),lt.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:[lt.jsxs("button",{onClick:()=>d("projects"),className:"group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2",children:[lt.jsx(uT,{}),"View Projects",lt.jsx(t_,{className:"group-hover:translate-x-2 transition-transform"})]}),lt.jsxs("button",{onClick:()=>d("contact"),className:"group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2",children:[lt.jsx(vh,{}),"Get In Touch"]})]})]}),lt.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:lt.jsx("div",{className:"w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center",children:lt.jsx("div",{className:"w-1 h-3 bg-blue-500 rounded-full mt-2"})})})]}),lt.jsx("section",{id:"about",className:"py-20 px-8",children:lt.jsxs("div",{className:"max-w-6xl mx-auto",children:[lt.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent",children:"About Me"}),lt.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[lt.jsxs("div",{className:"space-y-6 text-gray-300",children:[lt.jsx("p",{className:"text-lg leading-relaxed",children:"I'm a passionate Data Analytics Engineering graduate student at Northeastern University with a perfect 4.0 GPA, combining 2.5 years of professional experience with cutting-edge academic knowledge."}),lt.jsx("p",{className:"text-lg leading-relaxed",children:"What drives me is the intersection of data science, artificial intelligence, and practical software engineering. I believe in creating solutions that not only leverage the latest in ML/AI technology but also deliver real business value."}),lt.jsx("p",{className:"text-lg leading-relaxed",children:"Currently focused on advancing my expertise in machine learning, natural language processing, and cloud-native data architectures. Actively seeking opportunities to contribute to innovative AI/ML projects."}),lt.jsxs("button",{className:"group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2",children:[lt.jsx(mT,{}),"Download Resume",lt.jsx(t_,{className:"group-hover:translate-x-1 transition-transform"})]})]}),lt.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{number:"3.9/4.0",label:"GPA at Northeastern",icon:"🎓"},{number:"2.5+",label:"Years Experience",icon:"💼"},{number:"10+",label:"Technologies",icon:"🚀"},{number:"5+",label:"Major Projects",icon:"💡"}].map((p,m)=>lt.jsxs("div",{className:"group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer",children:[lt.jsx("div",{className:"text-4xl mb-2 group-hover:animate-bounce",children:p.icon}),lt.jsx("div",{className:"text-3xl font-bold text-blue-500 mb-2",children:p.number}),lt.jsx("div",{className:"text-sm text-gray-400",children:p.label})]},m))})]})]})}),lt.jsx("section",{id:"skills",className:"py-20 px-8 bg-gray-900/30",children:lt.jsxs("div",{className:"max-w-6xl mx-auto",children:[lt.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent",children:"Technical Skills"}),lt.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{category:"Programming Languages",icon:lt.jsx(dT,{className:"text-2xl"}),skills:["Python","JavaScript","TypeScript","C#","SQL","HTML/CSS"]},{category:"ML/AI Frameworks",icon:lt.jsx(cT,{className:"text-2xl"}),skills:["TensorFlow","Keras","Scikit-learn","HuggingFace","LangChain","LangGraph"]},{category:"Data & Visualization",icon:lt.jsx(fT,{className:"text-2xl"}),skills:["Power BI","Tableau","Plotly","Excel","SQL Server"]},{category:"Cloud & DevOps",icon:lt.jsx(hT,{className:"text-2xl"}),skills:["GCP","Docker","Git","Azure DevOps","CI/CD"]}].map((p,m)=>lt.jsxs("div",{className:"group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300",children:[lt.jsxs("div",{className:"flex items-center gap-3 mb-4 text-blue-500",children:[p.icon,lt.jsx("h3",{className:"text-xl font-semibold",children:p.category})]}),lt.jsx("div",{className:"space-y-2",children:p.skills.map((g,v)=>lt.jsxs("div",{className:"text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer text-sm",children:["• ",g]},v))})]},m))})]})}),lt.jsx("section",{id:"projects",className:"py-20 px-8",children:lt.jsxs("div",{className:"max-w-6xl mx-auto",children:[lt.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent",children:"Featured Projects"}),lt.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"NUBOT - AI Student Assistant",description:"Developed an intelligent chatbot using RAG architecture to provide personalized student support.",tech:["Mistral LLM","LangChain","FAISS","Docker","GCP"],gradient:"from-blue-500 to-purple-600",icon:"🤖"},{title:"COVID-19 Detection System",description:"Built a CNN model using transfer learning with VGG16. Achieved 91.61% accuracy.",tech:["TensorFlow","VGG16","Streamlit","Python","OpenCV"],gradient:"from-orange-500 to-red-600",icon:"🏥"},{title:"Health Monitoring Platform",description:"Designed SQL-based data insights platform with real-time Power BI dashboards.",tech:["SQL Server","Power BI","Python","ETL","DAX"],gradient:"from-green-500 to-teal-600",icon:"📊"}].map((p,m)=>lt.jsxs("div",{className:"group relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 cursor-pointer",children:[lt.jsx("div",{className:`h-48 bg-gradient-to-br ${p.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}),lt.jsx("div",{className:"absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300",children:p.icon}),lt.jsxs("div",{className:"p-6 relative",children:[lt.jsx("h3",{className:"text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300",children:p.title}),lt.jsx("p",{className:"text-gray-400 mb-4 line-clamp-2",children:p.description}),lt.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:p.tech.map((g,v)=>lt.jsx("span",{className:"px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400 hover:bg-blue-500/20 transition-colors duration-300",children:g},v))}),lt.jsxs("div",{className:"flex gap-4",children:[lt.jsxs("a",{className:"flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 cursor-pointer",children:[lt.jsx(_h,{}),lt.jsx("span",{className:"text-sm",children:"GitHub"})]}),lt.jsxs("a",{className:"flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 cursor-pointer",children:[lt.jsx(gT,{}),lt.jsx("span",{className:"text-sm",children:"Demo"})]})]})]})]},m))})]})}),lt.jsx("section",{id:"experience",className:"py-20 px-8 bg-gray-900/30",children:lt.jsxs("div",{className:"max-w-4xl mx-auto",children:[lt.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent",children:"Professional Experience"}),lt.jsxs("div",{className:"relative",children:[lt.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"}),[{date:"2022 - 2024",title:"Programmer Analyst",company:"Cognizant Technology Solutions",description:["Built predictive SQL procedures and ASP.NET REST APIs","Migrated legacy email systems to modern .NET frameworks","Developed full-stack MVC web applications"],icon:"💼"},{date:"2024 - Present",title:"Graduate Research Assistant",company:"Northeastern University",description:["Conducting research in AI/ML applications","Developing innovative NLP solutions","Publishing academic findings"],icon:"🎓"}].map((p,m)=>lt.jsxs("div",{className:`relative flex items-center mb-12 ${m%2===0?"justify-start":"justify-end"}`,children:[lt.jsx("div",{className:`w-5/12 ${m%2===0?"text-right pr-8":"text-left pl-8"}`,children:lt.jsxs("div",{className:"group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300",children:[lt.jsx("div",{className:"text-blue-500 text-sm font-semibold mb-2",children:p.date}),lt.jsx("h3",{className:"text-xl font-bold text-white mb-1",children:p.title}),lt.jsx("p",{className:"text-orange-500 mb-3",children:p.company}),lt.jsx("ul",{className:"space-y-1 text-gray-400 text-sm",children:p.description.map((g,v)=>lt.jsx("li",{children:g},v))})]})}),lt.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg",children:p.icon})]},m))]})]})}),lt.jsx("section",{id:"contact",className:"py-20 px-8",children:lt.jsxs("div",{className:"max-w-6xl mx-auto",children:[lt.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent",children:"Get In Touch"}),lt.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[lt.jsx("div",{className:"space-y-6",children:lt.jsxs("div",{className:"bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8",children:[lt.jsx("h3",{className:"text-2xl font-bold text-blue-500 mb-4",children:"Let's Connect"}),lt.jsx("p",{className:"text-gray-400 mb-6",children:"I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation."}),lt.jsx("div",{className:"space-y-4",children:[{icon:lt.jsx(vh,{}),text:"penugonda.j@northeastern.edu",color:"text-blue-500"},{icon:lt.jsx(_T,{}),text:"Boston, Massachusetts",color:"text-orange-500"},{icon:lt.jsx($0,{}),text:"linkedin.com/in/jayaraghuram",color:"text-blue-500"},{icon:lt.jsx(_h,{}),text:"github.com/jayaraghuram",color:"text-orange-500"}].map((p,m)=>lt.jsxs("div",{className:"flex items-center gap-4 group cursor-pointer",children:[lt.jsx("span",{className:`text-2xl ${p.color} group-hover:scale-125 transition-transform duration-300`,children:p.icon}),lt.jsx("span",{className:"text-gray-300 group-hover:text-white transition-colors duration-300",children:p.text})]},m))})]})}),lt.jsx("div",{className:"bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8",children:lt.jsxs("div",{className:"space-y-6",children:[lt.jsxs("div",{children:[lt.jsx("label",{className:"block text-gray-300 mb-2",children:"Name"}),lt.jsx("input",{type:"text",className:"w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white",placeholder:"Your Name"})]}),lt.jsxs("div",{children:[lt.jsx("label",{className:"block text-gray-300 mb-2",children:"Email"}),lt.jsx("input",{type:"email",className:"w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white",placeholder:"your.email@example.com"})]}),lt.jsxs("div",{children:[lt.jsx("label",{className:"block text-gray-300 mb-2",children:"Message"}),lt.jsx("textarea",{rows:"5",className:"w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white resize-none",placeholder:"Your message..."})]}),lt.jsxs("button",{className:"w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2",children:[lt.jsx(vT,{}),"Send Message"]})]})})]})]})}),lt.jsx("footer",{className:"py-8 border-t border-gray-800",children:lt.jsxs("div",{className:"max-w-6xl mx-auto px-8 text-center",children:[lt.jsx("div",{className:"flex justify-center gap-6 mb-4",children:[{icon:lt.jsx($0,{}),link:"#"},{icon:lt.jsx(_h,{}),link:"#"},{icon:lt.jsx(vh,{}),link:"#"},{icon:lt.jsx(lT,{}),link:"#"}].map((p,m)=>lt.jsx("a",{href:p.link,className:"text-2xl text-gray-400 hover:text-blue-500 transform hover:-translate-y-2 transition-all duration-300",children:p.icon},m))}),lt.jsx("p",{className:"text-gray-500",children:"© 2024 Jaya Raghu Ram Penugonda. All rights reserved."})]})}),lt.jsx("style",{children:`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `})]})};Wx.createRoot(document.getElementById("root")).render(lt.jsx($i.StrictMode,{children:lt.jsx(xT,{})}));
