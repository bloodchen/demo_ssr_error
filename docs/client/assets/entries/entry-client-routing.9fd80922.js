import{j as M,_ as T,s as gt,k as ht,m as x,n as F,p as H,g as B,q as Fe,r as l,t as Y,d as S,u as J,v as c,b as u,w as E,x as U,y as p,z as pt,o as d,A as j,B as Ae,C as ie,D as ae,a as mt,l as z,E as Ee,F as Te,G as $e,H as $,I as yt,J as bt,K as _t,L as St,M as Rt,c as Pt,N as xe,O as ke,P as wt,Q as vt,R as Ot,S as le,i as X,h as Ct,T as Ft}from"../chunks/chunk-30a30e46.js";function C(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function me(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function Z(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function At(e){return typeof e=="object"&&e!==null&&"then"in e&&M(e.then)}const Et=["default"],Tt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"})),$t=["default"],xt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$t},Symbol.toStringTag,{value:"Module"})),kt=["default"],It=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"})),jt=["render","passToClient"],Nt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"})),Ht=["onBeforeRender"],Bt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"})),Lt=["render"],Wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"})),ue={},Ie={},Dt={},q={},Ut=[],je={},Vt=!0,zt=[],Gt={onBeforeRoute:null,onPrerenderStart:null},Kt=Object.assign({"/pages/_error.page.svelte":()=>T(()=>import("./pages_error.page.a69d12a3.js"),["assets/entries/pages_error.page.a69d12a3.js","assets/chunks/chunk-3a7c50c6.js","assets/static/_layout.80e14bac.css"]),"/pages/about/index.page.svelte":()=>T(()=>import("./pages_about_index.page.04633bff.js"),["assets/entries/pages_about_index.page.04633bff.js","assets/chunks/chunk-3a7c50c6.js","assets/static/_layout.80e14bac.css","assets/chunks/chunk-73e663ad.js","assets/static/index.page.1a170f7d.css"]),"/pages/index.page.svelte":()=>T(()=>import("./pages_index.page.65b28bfc.js"),["assets/entries/pages_index.page.65b28bfc.js","assets/chunks/chunk-3a7c50c6.js","assets/static/_layout.80e14bac.css","assets/chunks/chunk-73e663ad.js"])}),Mt={...Kt};ue[".page"]=Mt;const Yt=Object.assign({"/pages/_error.page.svelte":Tt,"/pages/about/index.page.svelte":xt,"/pages/index.page.svelte":It}),Jt={...Yt};q[".page"]=Jt;const qt=Object.assign({"/pages/_default/_default.page.server.js":Nt,"/pages/about/index.page.server.js":Bt}),Qt={...qt};q[".page.server"]=Qt;const Xt=Object.assign({}),Zt={...Xt};Ie[".page.route"]=Zt;const en=Object.assign({"/pages/_default/_default.page.client.js":()=>T(()=>import("./pages_default_default.page.client.00038293.js"),[])}),tn={...en};ue[".page.client"]=tn;const nn=Object.assign({"/pages/_default/_default.page.client.js":Wt}),rn={...nn};q[".page.client"]=rn;const on=Object.assign({"/pages/_default/_default.page.server.js":()=>T(()=>import("./pages_default_default.page.server.extractAssets.ed77219c.js").then(e=>e._),[]),"/pages/about/index.page.server.js":()=>T(()=>import("./pages_about_index.page.server.extractAssets.4ed993c7.js"),[])}),sn={...on};je[".page.server"]=sn;const an=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:Vt,neverLoaded:je,pageConfigGlobal:Gt,pageConfigs:zt,pageFilesEager:Ie,pageFilesExportNamesEager:q,pageFilesExportNamesLazy:Dt,pageFilesLazy:ue,pageFilesList:Ut},Symbol.toStringTag,{value:"Module"}));gt(an);function ln(){ht(),x()}function un(){var r,o,s,i;const e=!!((o=(r=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)==null?void 0:r.renderers)!=null&&o.size),t=!!((i=(s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)==null?void 0:s.rendererInterfaces)!=null&&i.size),n=!!window.__vite_plugin_react_preamble_installed__;return e||t||n}function Ne(e,t){const n=Object.keys,r=typeof e;return e&&t&&r==="object"&&r===typeof t?n(e).length===n(t).length&&n(e).every(s=>Ne(e[s],t[s])):e===t}function cn(e,t){return F(e)&&F(t)&&e.constructor===t.constructor&&Ne({...e,stack:null},{...t,stack:null})&&t.message===t.message}function G(e){window.location.href=e}function fn(e){return new Promise(t=>setTimeout(t,e))}function dn(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}ln();const ye=H("navigationState.ts",{}),gn=B(),He={markNavigationChange(){ye.navigationChanged=!0},get noNavigationChangeYet(){return!ye.navigationChanged&&this.isFirstUrl(B())},isFirstUrl(e){return e===gn}};async function hn(e,t){const r=Fe(e,t).filter(s=>s.fileType===".page.server");return await Promise.all(r.map(async s=>{s.exportNames||(l(s.loadExportNames,t),await s.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:r.some(({exportNames:s})=>(l(s),s.includes("onBeforeRender")))}}function pn(e,t){if(!C(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function mn(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}function yn(e,t){if(l(e.length>0),e.length===1)return e[0];const n=e.slice(0,e.length-1),r=e[e.length-1];return n.join(", ")+` ${t} `+r}Y()&&x();function Be(e,t=!0){l(e.urlOriginal),"urlPathname"in e&&l(Z(e,"urlPathname")),Object.defineProperty(e,"urlPathname",{get:We,enumerable:t,configurable:!0}),"url"in e&&l(Z(e,"url")),Object.defineProperty(e,"url",{get:bn,enumerable:!1,configurable:!0}),"urlParsed"in e&&l(Z(e,"urlParsed")),Object.defineProperty(e,"urlParsed",{get:_n,enumerable:t,configurable:!0})}function Le(e){let t=e._urlHandler;t||(t=s=>s);const n=e._urlRewrite??e.urlOriginal;l(n&&typeof n=="string");const r=t(n),o=e._baseServer;return l(o.startsWith("/")),J(r,o)}function We(){const{pathname:e}=Le(this),t=e;return l(t.startsWith("/")),t}function bn(){return S(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),We.call(this)}function _n(){const e=Le(this),{origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:s,searchOriginal:i,hash:a,hashOriginal:g}=e,f=Y(),h=w=>{S(f,`pageContext.urlParsed.${w} isn't available on the server-side (HTTP requests don't include the URL hash by design)`,{onlyOnce:!0,showStackTrace:!0})},m={origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:s,searchOriginal:i,get hash(){return h("hash"),a},get hashOriginal(){return h("hashOriginal"),g},get hashString(){return S(!1,"pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal",{onlyOnce:!0,showStackTrace:!0}),h("hashString"),g},get searchString(){return S(!1,"pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal",{onlyOnce:!0,showStackTrace:!0}),i}};return W(m,"hashString"),W(m,"searchString"),f||(W(m,"hash"),W(m,"hashOriginal")),m}function W(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function Sn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(C(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const De="@",re=":";function Rn(e,t="Invalid"){l(t.endsWith("Invalid")||t.endsWith("invalid")),u(e!=="",`${t} Route String ${O(e)} (empty string): set it to ${O("/")} instead`),u(e.startsWith("/")||e==="*",`${t} Route String ${O(e)}: Route Strings should start with a leading slash ${O("/")} (or be ${O("*")})`)}function oe(e,t){Rn(e),l(t.startsWith("/"));const n=e.split("/"),r=t.split("/"),o={};Pn(e),e==="*"&&(e="/*");for(let s=0;s<Math.max(n.length,r.length);s++){const i=n[s],a=r[s];if(i==="*")return o["*"]=r.slice(Math.max(1,s)).join("/"),{routeParams:o};if(i&&V(i)){if(S(!i.startsWith(re),`Outdated Route String ${c.cyan(e)}, use ${c.cyan(e.split(re).join(De))} instead.`,{onlyOnce:!0}),!a)return null;o[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:o}}function Pn(e){const t=e.split("*").length-1;u(t<=1,`Invalid Route String ${O(e)}: Route Strings aren't allowed to contain more than one glob ${O("*")} (use a Route Function instead)`),u(t===0||t===1&&e.endsWith("*"),`Invalid Route String ${O(e)}: make sure it ends with ${O("*")} or use a Route Function`)}function I(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if(V(i))break;n++}const r=t.filter(i=>!V(i)).length,o=t.filter(i=>V(i)).length,s=e.endsWith("*");return{numberOfParameterSegments:o,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:r,isCatchAll:s}}function V(e){return e.startsWith(De)||e.startsWith(re)}function be(e){const n=oe(e,e);return l(n),Object.keys(n.routeParams).length===0}function O(e){return Y()?`'${e}'`:(e===""&&(e="''"),c.cyan(e))}function wn(e){e.sort(vn).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(E(t=>t.routeType==="STRING"&&be(t.routeString)===!1)).sort(E(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(E(t=>t.routeType==="STRING"&&be(t.routeString)===!0)).sort(E(t=>t.routeType==="FILESYSTEM")).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function vn(e,t){{const n=e.precedence??0,r=t.precedence??0;if(n!==r)return n>r?-1:1}if(!t.routeString||!e.routeString)return 0;{const r=U(o=>I(o).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(r!==0)return r}{const r=U(o=>I(o).numberOfStaticSegements)(e.routeString,t.routeString);if(r!==0)return r}{const r=U(o=>I(o).numberOfParameterSegments)(e.routeString,t.routeString);if(r!==0)return r}{if(I(t.routeString).isCatchAll)return-1;if(I(e.routeString).isCatchAll)return 1}return 0}async function On(e,t,n){Sn(t);let r=e(t);if(Ue(r,`The Route Function ${n}`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(C(r),`The Route Function ${n} should return a boolean or a plain JavaScript object (but it's ${c.cyan(`typeof result === ${JSON.stringify(typeof r)}`)} instead)`),"match"in r){const{match:i}=r;if(u(typeof i=="boolean",`The ${c.cyan("match")} value returned by the Route Function ${n} should be a boolean.`),!i)return null}let o=null;"precedence"in r&&(o=r.precedence,u(typeof o=="number",`The ${c.cyan("precedence")} value returned by the Route Function ${n} should be a number.`)),Ve(r,`The ${c.cyan("routeParams")} object returned by the Route Function ${n} should`);const s=r.routeParams||{};return u(!("pageContext"in r),`Providing ${c.cyan("pageContext")} in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext`),l(C(s)),Object.keys(r).forEach(i=>{u(i==="match"||i==="routeParams"||i==="precedence",`The Route Function ${n} returned an object with an unknown property ${c.cyan(i)} (the known properties are ${c.cyan("match")}, ${c.cyan("routeParams")}, and ${c.cyan("precedence")})`)}),{precedence:o,routeParams:s}}function Ue(e,t){S(!At(e),`${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vite-plugin-ssr.com/route-function#async`,{onlyOnce:!0})}function _e(){const e=c.cyan("iKnowThePerformanceRisksOfAsyncRouteFunctions");S(!1,`${e} is deprecated and will be removed in the next major release`,{onlyOnce:!0})}function Ve(e,t){l(t.endsWith(" should")),p(e,"routeParams")&&(l(t.endsWith(" should")),u(C(e.routeParams),`${t} be a plain JavaScript object.`),u(mn(e.routeParams),`${t} only hold string values.`))}function ze(e,{hookName:t,hookFilePath:n}){if(e==null)return;l(!t.endsWith(")"));const r=`The ${c.cyan("pageContext")} object provided by the ${t}() hook defined by ${n}`;u(F(e),`${r} should be an object (but it's ${c.cyan(`typeof pageContext === ${JSON.stringify(typeof e)}`)} instead)`),u(!("_objectCreatedByVitePluginSsr"in e),`${r} shouldn't be the whole ${c.cyan("pageContext")} object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),S(!("_pageId"in e),`${r} sets ${c.cyan("pageContext._pageId")} which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,{onlyOnce:!0}),u(!("is404"in e),`${r} sets ${c.cyan("pageContext.is404")} which is forbidden, use ${c.cyan("throw render()")} instead, see https://vite-plugin-ssr.com/render`)}async function Cn(e,t){let n=e.onBeforeRoute(t);Ue(n,`The onBeforeRoute() hook ${e.hookFilePath}`),n=await n;const r=`The onBeforeRoute() hook defined by ${e.hookFilePath}`;if(u(n==null||pn(n,["pageContext"])&&p(n,"pageContext"),`${r} should return ${c.cyan("null")}, ${c.cyan("undefined")}, or a plain JavaScript object ${c.cyan("{ pageContext: { /* ... */ } }")}`),n==null)return null;if(u(p(n,"pageContext","object"),`${r} returned ${c.cyan("{ pageContext }")} but pageContext should be a plain JavaScript object.`),p(n.pageContext,"_pageId")&&!p(n.pageContext,"_pageId","null")){const s=`${r} returned ${c.cyan("{ pageContext: { _pageId } }")} but ${c.cyan("_pageId")} should be`;u(p(n.pageContext,"_pageId","string"),`${s} a string or null`),u(t._allPageIds.includes(n.pageContext._pageId),`${s} ${yn(t._allPageIds.map(i=>c.cyan(i)),"or")}`)}p(n.pageContext,"routeParams")&&Ve(n.pageContext,`${r} returned ${c.cyan("{ pageContext: { routeParams } }")} but routeParams should`);const o={};return p(n.pageContext,"url")&&(S(!1,`${r} returned ${c.cyan("{ pageContext: { url } }")} but ${c.cyan("pageContext.url")} has been renamed to ${c.cyan("pageContext.urlOriginal")}. Return ${c.cyan("{ pageContext: { urlOriginal } }")} instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),p(n.pageContext,"urlOriginal")&&(pt(n.pageContext.urlOriginal,`${r} returned ${c.cyan("{ pageContext: { urlOriginal } }")} but ${c.cyan("urlOriginal")}`),d(o,{_urlOriginalPristine:t.urlOriginal})),ze(n.pageContext,{hookFilePath:e.hookFilePath,hookName:"onBeforeRoute"}),d(o,n.pageContext),o}var D;function Se(...e){var t;D||(D=(t=globalThis.__brillout_debug_createDebugger)==null?void 0:t.call(globalThis,"vps:routing")),D&&D(...e)}Y()&&x();async function Ge(e){Be(e),Se("Pages routes:",e._pageRoutes);const t={};if(e._onBeforeRouteHook){const i=await Cn(e._onBeforeRouteHook,e);if(i){if(d(t,i),p(t,"_pageId","string")||p(t,"_pageId","null"))return p(t,"routeParams")?l(p(t,"routeParams","object")):d(t,{routeParams:{}}),d(t,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:t};d(e,t)}}d(t,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(n.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:r}=e;l(r.startsWith("/"));const o=[];await Promise.all(e._pageRoutes.map(async i=>{const{pageId:a,routeType:g}=i;if(i.routeType==="FILESYSTEM"){const{routeString:f}=i,h=oe(f,r);if(h){const{routeParams:m}=h;o.push({pageId:a,routeParams:m,routeString:f,routeType:g})}return}if(i.routeType==="STRING"){const{routeString:f}=i,h=oe(f,r);if(h){const{routeParams:m}=h;l(g==="STRING"),o.push({pageId:a,routeString:f,routeParams:m,routeType:g})}return}if(i.routeType==="FUNCTION"){const{routeFunction:f,routeDefinedAt:h}=i,m=await On(f,e,h);if(m){const{routeParams:w,precedence:R}=m;o.push({pageId:a,precedence:R,routeParams:w,routeType:g})}return}l(!1)})),wn(o);const s=o[0];if(Se(`Route matches for URL ${c.cyan(r)} (in precedence order):`,o),d(t,{_routeMatches:o}),!s)return d(t,{_pageId:null,routeParams:{}}),{pageContextAddendum:t};{const{routeParams:i}=s;l(C(i)),d(t,{_pageId:s.pageId,routeParams:s.routeParams})}return{pageContextAddendum:t}}const Re=["urlPathname","urlParsed"],Fn=["Page","pageExports","exports"];function Ke(e){[...Fn,...Re].forEach(n=>{n in e&&(Re.includes(n)?(l(n.startsWith("url")),S(!1,`pageContext.${n} is already available in the browser when using Client Routing; adding '${n}' to passToClient has no effect`,{onlyOnce:!0})):S(!1,`pageContext.${n} is a built-in that cannot be overriden; adding '${n}' to passToClient has no effect`,{onlyOnce:!0}),delete e[n])})}const An="/";function En(e,t,n){const{pathnameOriginal:r,searchOriginal:o,hashOriginal:s}=J(e,An);e.startsWith("/")&&l(e===`${r}${o||""}${s||""}`,{url:e});const i=r.endsWith("/");let a;return n&&r!=="/"?(i?a=j(r,0,-1):a=r,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=r+(i?"":"/")+"index",l(a),a=a+t,`${a}${o||""}${s||""}`}const Tn=".pageContext.json",$n=!1;function xn(e){return En(e,Tn,$n)}function kn(e,t,n){l(!n.endsWith(" "));const r=[],o=Object.keys(e);for(const s of o)t.includes(s)||r.push(s);u(r.length===0,[n,"returned an object with following unknown keys:",me(r)+".","Only following keys are allowed:",me(t)+"."].join(" "))}function In(e,t){if(e==null)return;const n=`The onBeforeRender() hook defined by ${t}`;u(C(e),`${n} should return a plain JavaScript object, ${c.cyan("undefined")}, or ${c.cyan("null")}`),kn(e,["pageContext"],n),e.pageContext&&ze(e.pageContext,{hookName:"onBeforeRender",hookFilePath:t})}async function jn(e,t){let n;if(e._pageFilesAll.length>0?(l(e._pageConfigs.length===0),n=Nn(e._pageId,e._pageFilesAll)):n=Ae(e,"guard"),!n)return;const r=n.hookFn;let o=e;const s=t(e);s&&(o=s);const i=await ie(()=>r(o),"guard",n.hookFilePath);u(i===void 0,`The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`)}function Nn(e,t){const n=t.find(a=>a.pageId===e&&a.fileType===".page.route");if(!n)return null;const{filePath:r,fileExports:o}=n;l(o);const s=o.guard;if(!s)return null;const i=r;return u(M(s),`guard() defined by ${i} should be a function`),{hookFn:s,hookName:"guard",hookFilePath:i}}function Hn(e){const t=new Error("AbortRender");return d(t,{_pageContextAbort:e,[Me]:!0}),t}const Me="_isAbortError";function ee(e){return typeof e=="object"&&e!==null&&Me in e}function Bn(e){return e._urlRewrite||e._urlRedirect||e.abortStatusCode?(l(p(e,"_abortCall","string")),!0):!1}function Ln(e,t,n){if(t)return;const r=n._urlRewrite??n.urlOriginal;l(r);const o=e._pageContextAbort._abortCall;ae(!1,`${c.cyan(o)} intercepted while rendering ${c.cyan(r)}`,{onlyOnce:!1})}function Wn(e){Dn(e);const t={_urlRewrite:null};return e.forEach(n=>{Object.assign(t,n)}),t}function Dn(e){const t=[];e.forEach(n=>{const r=n._urlRewrite;{const o=t.indexOf(r);if(o!==-1){const s=[...t.slice(o),r].map(i=>`render('${i}')`).join(" => ");u(!1,`Infinite loop of render() calls: ${s}`)}}t.push(r)})}function Un(e,t){const n=[e>0&&c.cyan("throw render('/some-url')"),t>0&&c.cyan("throw redirect('/some-url')")].filter(Boolean).join(" and ");u(e+t<=7,`Maximum chain length of 7 ${n} exceeded. Did you define an infinite loop of ${n}?`)}const Ye=H("router/getPageContext.ts",{});async function Vn(e){if(e._isFirstRenderAttempt&&He.isFirstUrl(e.urlOriginal)){l(p(e,"_isFirstRenderAttempt","true"));const t=await zn(e);return Pe(t),t}else{l(p(e,"_isFirstRenderAttempt","false"));const t=await Kn(e);return Pe(t),t}}async function zn(e){const t=mt();Ke(t),d(t,{isHydration:!0,_hasPageContextFromClient:!1}),d(t,await z(e._pageFilesAll,e._pageConfigs,t._pageId));{const n={...e,...t};if(await Jn(n)){const r=await qe(n);d(t,r)}}return t}async function Gn(e){const t=Ee(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page defined.");const n={isHydration:!1,_pageId:t};return d(n,await Je({...e,...n},!0)),n}async function Kn(e){const t={isHydration:!1};return d(t,await qn(e)),d(t,await Je({...e,...t},!1)),t}async function Je(e,t){let n={};if(d(n,await z(e._pageFilesAll,e._pageConfigs,e._pageId)),!t&&await Mn({...e,...n})){const r=await Zn(e);if(!r._isError)d(n,r);else{const o=Ee(e._pageFilesAll,e._pageConfigs);l(o),n={},d(n,{isHydration:!1,_pageId:o}),d(n,await z(e._pageFilesAll,e._pageConfigs,n._pageId)),l(p(r,"is404","boolean")),l(p(r,"pageProps","object")),l(p(r.pageProps,"is404","boolean")),l(!("serverSideError"in r)),d(n,r)}}else d(n,{_hasPageContextFromServer:!1}),t||await jn({_hasPageContextFromClient:!1,...e,...n},r=>Te(r,!0));{const r=await qe({...e,...n});d(n,r)}return n}async function qe(e){const t=Ae(e,"onBeforeRender");if(!t)return{_hasPageContextFromClient:!1};const n=t.hookFn,r={_hasPageContextFromClient:!0},o=Te({...e,...r},!0),s=await ie(()=>n(o),"onBeforeRender",t.hookFilePath);In(s,t.hookFilePath);const i=s==null?void 0:s.pageContext;return d(r,i),r}async function Mn(e){return!!Ye.pageContextInitHasClientData||await Yn(e)}function Pe(e){e._pageContextInitHasClientData&&(Ye.pageContextInitHasClientData=!0)}async function Yn(e){var t;if(e._pageConfigs.length>0){const n=$e(e._pageId,e._pageConfigs);return((t=$(n,"onBeforeRenderEnv"))==null?void 0:t.value)==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:n}=await hn(e._pageFilesAll,e._pageId);return n}}async function Jn(e){var t;if(e._pageConfigs.length>0){const n=$e(e._pageId,e._pageConfigs);return((t=$(n,"onBeforeRenderEnv"))==null?void 0:t.value)==="client-only"}else return!1}async function qn(e){const n=(await Ge(e)).pageContextAddendum;if(!n._pageId){const r=new Error("No routing match");throw Qn(r),r}return l(p(n,"_pageId","string")),n}function Qn(e){d(e,{_is404:!0})}function Xn(e){return F(e)&&e._is404===!0}async function Zn(e){const t=e._urlRewrite??e._urlOriginalPristine??e.urlOriginal,n=xn(t),r=await fetch(n);{const i=r.headers.get("content-type"),a="application/json",g=i&&i.includes(a);if(!g&&r.status===404)throw G(e.urlOriginal),tr();u(g,`Wrong Content-Type for ${n}: it should be ${a} but it's ${i} instead. Make sure to properly use pageContext.httpResponse.headers, see https://vite-plugin-ssr.com/renderPage`)}const o=await r.text(),s=yt(o);if(l(F(s)),"serverSideError"in s)throw bt("The pageContext object couldn't be fetched from the server as an error occurred on the server-side. Check your server logs.");if(Bn(s))throw Hn(s);return l(p(s,"_pageId","string")),Ke(s),d(s,{_hasPageContextFromServer:!0}),s}function er(e){return F(e)&&!!e._alreadyServerSideRouted}function tr(){const e=new Error("Page doesn't exist");return Object.assign(e,{_alreadyServerSideRouted:!0}),e}function nr(e,t){const r=t.filter(({filesystemRoot:s})=>e.startsWith(s)).sort(U(({filesystemRoot:s})=>s.length))[0];let o;if(r){const{filesystemRoot:s,urlRoot:i}=r,a={pageId:e,filesystemRoot:s,urlRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&s.startsWith("/"),a),l(e.startsWith(s),a),s!=="/"?(l(!s.endsWith("/"),a),o=j(e,s.length,0)):o=e,l(o.startsWith("/"),a),o=i+(i.endsWith("/")?"":"/")+j(o,1,0)}else o=e;return l(o.startsWith("/")),o=o.split("/").filter(s=>s!=="pages"&&s!=="src"&&s!=="index").join("/"),l(!o.includes(".page.")),l(!o.endsWith(".")),o.endsWith("/index")&&(o=j(o,0,-6)),o===""&&(o="/"),l(o.startsWith("/")),l(!o.endsWith("/")||o==="/"),o}async function rr(e,t,n,r){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var g;return(g=a.loadFile)==null?void 0:g.call(a)}));const{onBeforeRouteHook:o,filesystemRoots:s}=sr(e,t,n);return{pageRoutes:or(s,e,t,r),onBeforeRouteHook:o}}function or(e,t,n,r){const o=[];let s=[...r];if(n.length>0){l(e===null);const i=!0;n.filter(a=>!a.isErrorPage).forEach(a=>{const g=a.pageId;s=ar(s,g);let f=null;{const h="route",m=$(a,h);if(m){const w=_t(a,h),R=m.value,k=St(w);typeof R=="string"?f={pageId:g,comesFromV1PageConfig:i,routeString:R,routeDefinedAt:k,routeType:"STRING"}:(l(M(R)),$(a,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean")&&_e(),f={pageId:g,comesFromV1PageConfig:i,routeFunction:R,routeDefinedAt:k,routeType:"FUNCTION"})}}if(!f){const{routeFilesystem:h}=a;l(h);const{routeString:m,definedBy:w}=h;l(h.routeString.startsWith("/")),f={pageId:g,routeFilesystemDefinedBy:w,comesFromV1PageConfig:i,routeString:m,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(f),o.push(f)})}if(n.length===0){l(e);const i=!1;s.filter(a=>!Rt(a)).forEach(a=>{const g=t.find(f=>f.pageId===a&&f.fileType===".page.route");if(!g||!("default"in g.fileExports)){const f=nr(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),o.push({pageId:a,comesFromV1PageConfig:i,routeString:f,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}else{const{filePath:f,fileExports:h}=g;if(l(h.default),p(h,"default","string")){const m=h.default;u(m.startsWith("/"),`A Route String should start with a leading slash '/' but ${f} has \`export default '${m}'\`. Make sure to \`export default '/${m}'\` instead.`),o.push({pageId:a,comesFromV1PageConfig:i,routeString:m,routeDefinedAt:f,routeType:"STRING"});return}if(p(h,"default","function")){const m=h.default;"iKnowThePerformanceRisksOfAsyncRouteFunctions"in h&&_e(),o.push({pageId:a,comesFromV1PageConfig:i,routeFunction:m,routeDefinedAt:f,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}})}return o}function sr(e,t,n){if(t.length>0){if(n.onBeforeRoute){const s=n.onBeforeRoute.value;if(s){l(!n.onBeforeRoute.isComputed);const i=n.onBeforeRoute.definedAtInfo.filePath;return l(i),u(M(s),`The hook onBeforeRoute() defined by ${i} should be a function.`),{onBeforeRouteHook:{hookFilePath:i,onBeforeRoute:s},filesystemRoots:null}}}return{onBeforeRouteHook:null,filesystemRoots:null}}let r=null;const o=[];return e.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){u(p(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:a}=i;r={hookFilePath:`${s} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in i&&(u(p(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(p(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),o.push({filesystemRoot:ir(s),urlRoot:i.filesystemRoutingRoot}))}),{onBeforeRouteHook:r,filesystemRoots:o}}function ir(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=j(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function ar(e,t){const{length:n}=e;return e=e.filter(r=>r!==t),l(e.length===n-1),e}function Qe(){const e="/";return l(lr(e)),e}function lr(e){return e.startsWith("/")}const te=H("createPageContext.ts",{});async function Xe(e){te.pageFilesData||(te.pageFilesData=await Pt(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:r,pageConfigGlobal:o}=te.pageFilesData,{pageRoutes:s,onBeforeRouteHook:i}=await rr(t,r,o,n),a=Qe();l(xe(a));const f={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_urlRewrite:null,_baseServer:a,_isProduction:!0,_pageFilesAll:t,_pageConfigs:r,_pageConfigGlobal:o,_allPageIds:n,_pageRoutes:s,_onBeforeRouteHook:i};return d(f,e),Be(f),f}async function Ze(e){const t=await Xe({urlOriginal:e}),n=await Ge(t),r=t._pageFilesAll,o=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:r,pageConfigs:o};const s=n.pageContextAddendum._pageId;return s?{pageId:s,pageFilesAll:r,pageConfigs:o}:{pageId:null,pageFilesAll:r,pageConfigs:o}}function N(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function ur({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:r(),isClientRouting:s()};function r(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(o(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&N(a).includes("render")))}function o(){const i=e.some(a=>N(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,g)=>` (${g+1}): ${a.filePath}`)].join(`
`)].join(" "))}function s(){return e.some(a=>N(a).includes("clientRouting"))}}function cr({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:r}){let o=[];const s=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),i.push(...s.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)o=e.map(a=>a.filePath);else{const a=fr(r);i.push({id:a,onlyAssets:!1,eagerlyImported:!1}),o=[a]}return{clientEntries:o,clientDependencies:i}}function fr(e){return e?"@@vite-plugin-ssr/dist/esm/client/client-routing-runtime/entry.js":"@@vite-plugin-ssr/dist/esm/client/server-routing-runtime/entry.js"}function dr(e,t){let n=ke(e,t);const r=Fe(e,t),{isHtmlOnly:o,isClientRouting:s}=ur({pageFilesClientSide:n,pageFilesServerSide:r,pageId:t});o&&(n=n.filter(g=>g.isEnv("CLIENT_ONLY")&&!N(g).includes("render")),n=hr(n));const{clientEntries:i,clientDependencies:a}=cr({pageFilesClientSide:n,pageFilesServerSide:r,isHtmlOnly:o,isClientRouting:s});return{isHtmlOnly:o,isClientRouting:s,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:r}}async function gr(e,t,{sharedPageFilesAlreadyLoaded:n}){const r=ke(e,t);await Promise.all(r.map(async o=>{var s;l(o.isEnv("CLIENT_ONLY")||o.isEnv("CLIENT_AND_SERVER")),!(n&&o.isEnv("CLIENT_AND_SERVER"))&&await((s=o.loadExportNames)==null?void 0:s.call(o))}))}function hr(e){const t=[];for(const n of e)if(t.push(n),N(n).includes("overrideDefaultPages"))break;return t}function pr(e,t,n){var r,o;if(e){const s=((r=$(e,"clientRouting","boolean"))==null?void 0:r.value)??!1;return{isClientSideRenderable:((o=$(e,"isClientSideRenderable","boolean"))==null?void 0:o.value)??!1,isClientRouting:s}}else{const{isHtmlOnly:s,isClientRouting:i}=dr(t,n);return{isClientSideRenderable:!s,isClientRouting:i}}}async function et(e){const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Ze(e);if(!t)return!1;await gr(n,t,{sharedPageFilesAlreadyLoaded:!1});const o=wt(r,t),{isClientSideRenderable:s,isClientRouting:i}=pr(o,n,t);return s&&i}function tt(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function nt(e){const t=e.getAttribute("href");return!!(t===null||t===""||tt(t)||yr(e)||br(t)||!_r(t)||!vt(t)||!mr(e))}function mr(e){if(Lr()){const n=e.getAttribute("data-vike-link");return n!==null&&n!=="false"}else return!0}function yr(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function br(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function _r(e){const t=Qe();l(xe(t));const{hasBaseServer:n}=J(e,t);return n}function Sr(e,t){let n=Rr(e,t);return n==="viewport"&&!e._isProduction&&(ae(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n="hover"),{prefetchStaticAssets:n}}function Rr(e,t){{const n=Pr(t);if(n!==null)return n}if("prefetchLinks"in e.exports&&u(!1,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;if(n==="hover")return"hover";if(n==="viewport")return"viewport";const r="prefetchStaticAssets value should be false, 'hover', or 'viewport'";u(C(n),r);const o=Object.keys(n);u(o.length===1&&o[0]==="when",r);const{when:s}=n;if(s==="HOVER"||s==="VIEWPORT"){const i=s.toLowerCase();return S(!1,`prefetchStaticAssets value \`{ when: '${s}' }\` is outdated: set prefetchStaticAssets to '${i}' instead`,{onlyOnce:!0}),i}u(!1,r)}return"hover"}function Pr(e){const t=e.getAttribute("data-prefetch-static-assets"),n=e.getAttribute("data-prefetch");if(t===null&&n===null)return null;const r="The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";if(t){if(u(n===null,r),t==="hover"||t==="viewport")return t;if(t==="false")return!1;u(!1,`data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`)}if(n){if(l(!t),S(!1,r,{onlyOnce:!0}),n==="true")return"viewport";if(n==="false")return"hover";u(!1,`data-prefetch has value "${n}" but it should instead be "true" or "false"`)}l(!1)}const rt=new Map;function ot(e){const t=it(e);return rt.has(t)}function st(e){const t=it(e);rt.set(t,!0)}function it(e){return J(e,"/").pathname}x();const we=new Map;async function wr(e){if(u(Ot(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch",{showStackTrace:!0}),u(!tt(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,{showStackTrace:!0}),ot(e))return;st(e);const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Ze(e);if(t)try{await z(n,r,t)}catch(o){if(le(o))se(o,!0);else throw o}}function vr(e){st(e.urlPathname),[...document.getElementsByTagName("A")].forEach(n=>{if(we.has(n))return;we.set(n,!0);const r=n.getAttribute("href");if(nt(n)||(l(r),ot(r)))return;const{prefetchStaticAssets:o}=Sr(e,n);if(o&&(o==="hover"&&(n.addEventListener("mouseover",()=>{ne(r)}),n.addEventListener("touchstart",()=>{ne(r)},{passive:!0})),o==="viewport")){const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(ne(r),s.disconnect())})});s.observe(n)}})}async function ne(e){try{if(!await et(e))return}catch{return}await wr(e)}function at(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=ut()),"scrollPosition"in e||(t=!0,e.scrollPosition=lt()),ct(e),t&&fe(e)}function ce(){const e=window.history.state||{};return ct(e),e}function lt(){return{x:window.scrollX,y:window.scrollY}}function ut(){return new Date().getTime()}function ve(){const e=lt(),t=ce();fe({...t,scrollPosition:e})}function Or(e,t){if(t)fe(ce(),e);else{const n=ut();Cr({timestamp:n,scrollPosition:null},e)}}function ct(e){if(l(F(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(p(t,"x","number")&&p(t,"y","number"))}}function fe(e,t){window.history.replaceState(e,"",t??null)}function Cr(e,t){window.history.pushState(e,"",t)}x();const Fr=H("navigate.ts",{});function Ar(e){Fr.navigate=e}const _=H("useClientRouter.ts",{previousState:K()});Nr();at();function se(e,t){l(le(e)),_.clientRoutingIsDisabled=!0,t&&console.log(e),ae(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function Er(){Ir(),Tr((o,{keepScrollPosition:s})=>{r({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),$r((o,s)=>{r({scrollTarget:o,isBackwardNavigation:s})}),Ar(async(o,{keepScrollPosition:s=!1,overwriteLastHistoryEntry:i=!1}={})=>{await r({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;r({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function r({scrollTarget:o,urlOriginal:s=B(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:g,pageContextsFromRewrite:f=[],redirectCount:h=0}){var pe;if(Un(f.length,h),_.clientRoutingIsDisabled){G(s);return}const m=Wn(f);if(g){const P=m._urlRewrite??s;let b;try{b=await et(P)}catch(A){if(ee(A))b=!0;else throw A}if(!b){G(s);return}}const w={urlOriginal:s,isBackwardNavigation:a,...m},R=++e;l(R>=1),R>1&&n===!1&&((pe=_.onPageTransitionStart)==null||pe.call(_,w),n=!0);let k=!1;const Q=()=>R===1&&k===!1?!1:R!==e,y=await Xe(w);if(Q())return;const ge=R===1;d(y,{_isFirstRenderAttempt:ge});let L,v,he=!1;try{L=await Vn(y)}catch(P){he=!0,v=P}if(he){if(ee(v)||console.error(v),Ce(v,y))return;if(ee(v)){const P=v;Ln(v,y._isProduction,y);const b=P._pageContextAbort;if(b._urlRewrite){await r({scrollTarget:o,urlOriginal:s,overwriteLastHistoryEntry:i,isBackwardNavigation:a,pageContextsFromRewrite:[...f,b],redirectCount:h});return}if(b._urlRedirect){const A=b._urlRedirect.url;if(A.startsWith("http")){window.location.href=A;return}else await r({scrollTarget:"scroll-to-top-or-hash",urlOriginal:A,overwriteLastHistoryEntry:!1,isBackwardNavigation:!1,checkClientSideRenderable:!0,pageContextsFromRewrite:f,redirectCount:h++});return}l(b.abortStatusCode),d(y,b),b.abortStatusCode===404&&d(y,{is404:!0})}else d(y,{is404:Xn(v)});try{L=await Gn(y)}catch(P){if(Ce(P,y)||(ge||setTimeout(()=>{window.location.pathname=s},0),cn(v,P)))return;throw P}}if(l(L),d(y,L),X(y,"onPageTransitionStart"),_.onPageTransitionStart=y.exports.onPageTransitionStart,y.exports.hydrationCanBeAborted?k=!0:S(!un(),"You seem to be using React; we recommend setting hydrationCanBeAborted to true, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),!Q()&&(t&&await t,!Q())){if(xr(s,i),He.markNavigationChange(),l(t===void 0),t=(async()=>{await Ct(y,!0),vr(y)})(),await t,t=void 0,y._isFirstRenderAttempt){X(y,"onHydrationEnd");const{onHydrationEnd:P}=y.exports;if(P){const b=y.exportsAll.onHydrationEnd[0].exportSource;l(b),await ie(()=>P(y),"onHydrationEnd",b)}}else R===e&&(y.exports.onPageTransitionEnd&&(X(y,"onPageTransitionEnd"),y.exports.onPageTransitionEnd(y)),n=!1);ft(o),de(),_.initialRenderIsDone=!0}}}function Tr(e){document.addEventListener("click",t);return;function t(o){if(!n(o))return;const s=r(o.target);if(!s)return;const i=s.getAttribute("href");if(nt(s))return;l(i),o.preventDefault();const a=![null,"false"].includes(s.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(o){return o.button===0&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!o.metaKey}function r(o){for(;o.tagName!=="A";){const{parentNode:s}=o;if(!s)return null;o=s}return o}}function $r(e){window.addEventListener("popstate",()=>{const t=K(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",r=t.urlWithoutHash===_.previousState.urlWithoutHash,o=!t.historyState.timestamp||!_.previousState.historyState.timestamp?null:t.historyState.timestamp<_.previousState.historyState.timestamp;_.previousState=t,r?window.history.state===null?(at(),_.previousState=K()):ft(n):e(n,o)})}function xr(e,t){B()!==e&&(de(),Or(e,t),_.previousState=K())}function K(){return{urlWithoutHash:B({withoutHash:!0}),historyState:ce()}}function ft(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=jr();if(n&&n!=="top"){const r=document.getElementById(n)||document.getElementsByName(n)[0];if(r){r.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;kr(t)}function kr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const r=new Date().getTime();for(;;)if(await fn(10),t(),n()||new Date().getTime()-r>100)return},0)}))}function Ir(){window.addEventListener("scroll",dn(ve,Math.ceil(1e3/3)),{passive:!0}),dt(ve)}function jr(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function Nr(){Oe(),dt(Oe),Hr(()=>_.initialRenderIsDone&&de())}function de(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function Oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function dt(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Hr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function Ce(e,t){return!!(er(e)||Br(e,t))}function Br(e,t){if(!le(e))return!1;if(t._isFirstRenderAttempt)throw se(e,!1),e;return se(e,!0),G(t.urlOriginal),!0}function Lr(){return!!window._disableAutomaticLinkInterception}x();const Wr=!0;Ft(Wr);Er();