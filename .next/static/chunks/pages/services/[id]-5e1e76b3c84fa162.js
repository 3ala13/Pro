(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{7729:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[id]",function(){return l(8118)}])},5677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return n},default:function(){return a}});let i=l(8754),s=(l(7294),i._(l(8976)));function r(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let l=s.default,i={loading:e=>{let{error:t,isLoading:l,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e}),i={...i,...t};let a=i.loader,d=()=>null!=a?a().then(r):Promise.resolve(r(()=>null));return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?l({...i,loader:d}):(delete i.webpack,delete i.modules,n(l,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let i=l(8754),s=i._(l(7294)),r=s.default.createContext(null)},8976:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let i=l(8754),s=i._(l(7294)),r=l(2254),n=[],a=[],d=!1;function o(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function n(){if(!i){let t=new u(e,l);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!d){let e=l.webpack?l.webpack():l.modules;e&&a.push(t=>{for(let l of e)if(t.includes(l))return n()})}function o(e,t){!function(){n();let e=s.default.useContext(r.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let a=s.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),s.default.useMemo(()=>{var t;return a.loading||a.error?s.default.createElement(l.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?s.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return o.preload=()=>n(),o.displayName="LoadableComponent",s.default.forwardRef(o)}(o,e)}function m(e,t){let l=[];for(;e.length;){let i=e.pop();l.push(i(t))}return Promise.all(l).then(()=>{if(e.length)return m(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{m(n).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let l=()=>(d=!0,t());m(a,e).then(l,l)})),window.__NEXT_PRELOADREADY=c.preloadReady;let h=c},163:function(e,t,l){"use strict";var i=l(5893),s=l(9008),r=l.n(s),n=l(1664),a=l.n(n),d=l(1163),o=l(2806);let u=e=>{let t,{pageTitle:l,breadTitle:s,align:n}=e,{asPath:u}=(0,d.useRouter)();t=void 0!=s?s:l.replace(/(<([^>]+)>)/gi,"");let c="".concat(o.Xd.aD," - ").concat(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{children:(0,i.jsx)("title",{children:c})}),(0,i.jsxs)("section",{className:"mil-banner-sm mil-".concat(n),children:[(0,i.jsx)("div",{className:"mil-banner-top mil-up"}),(0,i.jsxs)("div",{className:"mil-banner-title",children:[(0,i.jsx)("h1",{className:"mil-h1-sm mil-up mil-mb-60",dangerouslySetInnerHTML:{__html:l}}),(0,i.jsxs)("ul",{className:"mil-breadcrumbs mil-up",children:[(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/",children:"Page d'accueil"})}),-1!=u.indexOf("/blog/")&&(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/blog",children:"Blog"})}),-1!=u.indexOf("/projects/")&&(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/projects",children:"Mes Projets"})}),-1!=u.indexOf("/services/")&&(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/services",children:"Services"})}),(0,i.jsx)("li",{dangerouslySetInnerHTML:{__html:t}})]})]})]})]})};t.Z=u},7741:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var i=l(5893),s=JSON.parse('{"T":"Pr\xeat \xe0 amener vos projets au niveau sup\xe9rieur ? Je suis l\xe0 pour vous aider !","L":{"P":"Contactez moi","p":"/contact"}}'),r=l(1664),n=l.n(r);let a=e=>{let{bg:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mil-divider mil-up mil-mb-90"}),(0,i.jsx)("div",{className:"mil-p-0-90",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-8",children:(0,i.jsxs)("div",{className:"mil-center",children:[(0,i.jsx)("h2",{className:"mil-up mil-mb-30",children:s.T}),(0,i.jsx)("div",{className:"mil-up",children:(0,i.jsx)(n(),{href:s.L.p,className:"mil-btn mil-sm-btn",children:s.L.P})})]})})})})]})};var d=a},8118:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return h}});var i=l(5893),s=l(6204),r=l(163),n=l(5152),a=l.n(n),d=l(7294),o=l(6641);l(1664);var u=l(7741);let c=a()(()=>Promise.all([l.e(949),l.e(416)]).then(l.bind(l,1563)),{loadableGenerated:{webpack:()=>[1563]},ssr:!1}),m=e=>{let{postData:t}=e;return(0,d.useEffect)(()=>{(0,o.T)()},[]),(0,i.jsxs)(s.Z,{rightPanelBackground:"/img/person/bg-3.jpg",rightPanelImg:"/img/person/6.png",children:[(0,i.jsx)(r.Z,{pageTitle:t.title,align:"center"}),void 0!=t.subtitle&&(0,i.jsxs)("div",{className:"mil-section-title mil-up mil-mb-90",children:[(0,i.jsx)("div",{className:"mil-divider"}),(0,i.jsx)("h3",{children:t.subtitle})]}),(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-10",children:(0,i.jsx)("div",{className:"mil-text-lg mil-dark mil-center mil-up mil-mb-90",children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.contentHtml}})})})}),void 0!=t.list&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"mil-section-title mil-up mil-mb-90",children:[(0,i.jsx)("div",{className:"mil-divider"}),(0,i.jsx)("h3",{children:t.list.heading})]}),(0,i.jsx)("div",{className:"mil-p-0-60",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-12",children:t.list.items.map((e,t)=>(0,i.jsxs)("div",{className:"mil-accordion-group mil-up",children:[(0,i.jsxs)("div",{className:"mil-accordion-menu",children:[(0,i.jsx)("p",{className:"mil-accordion-head",children:e.label}),(0,i.jsxs)("div",{className:"mil-symbol mil-h3",children:[(0,i.jsx)("div",{className:"mil-plus",children:"+"}),(0,i.jsx)("div",{className:"mil-minus",children:"-"})]})]}),(0,i.jsx)("div",{className:"mil-accordion-content",dangerouslySetInnerHTML:{__html:e.value}})]},"service-list-".concat(t)))})})})]}),(0,i.jsx)(c,{}),(0,i.jsx)(u.Z,{})]})};var h=!0;t.default=m},5152:function(e,t,l){e.exports=l(5677)}},function(e){e.O(0,[802,78,204,774,888,179],function(){return e(e.s=7729)}),_N_E=e.O()}]);