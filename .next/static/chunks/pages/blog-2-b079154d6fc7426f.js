(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{1016:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-2",function(){return i(9372)}])},163:function(e,n,i){"use strict";var r=i(5893),t=i(9008),s=i.n(t),l=i(1664),a=i.n(l),c=i(1163),o=i(2806);let d=e=>{let n,{pageTitle:i,breadTitle:t,align:l}=e,{asPath:d}=(0,c.useRouter)();n=void 0!=t?t:i.replace(/(<([^>]+)>)/gi,"");let m="".concat(o.Xd.aD," - ").concat(n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:m})}),(0,r.jsxs)("section",{className:"mil-banner-sm mil-".concat(l),children:[(0,r.jsx)("div",{className:"mil-banner-top mil-up"}),(0,r.jsxs)("div",{className:"mil-banner-title",children:[(0,r.jsx)("h1",{className:"mil-h1-sm mil-up mil-mb-60",dangerouslySetInnerHTML:{__html:i}}),(0,r.jsxs)("ul",{className:"mil-breadcrumbs mil-up",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/",children:"Page d'accueil"})}),-1!=d.indexOf("/blog/")&&(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/blog",children:"Blog"})}),-1!=d.indexOf("/projects/")&&(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/projects",children:"Mes Projets"})}),-1!=d.indexOf("/services/")&&(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/services",children:"Services"})}),(0,r.jsx)("li",{dangerouslySetInnerHTML:{__html:n}})]})]})]})]})};n.Z=d},9925:function(e,n,i){"use strict";var r=i(5893),t=i(1664),s=i.n(t);i(3265);let l=e=>{let{items:n}=e;return(0,r.jsx)(r.Fragment,{children:n.map((e,n)=>(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsxs)(s(),{href:"/blog/".concat(e.id),className:"mil-blog-card mil-mb-60",children:[(0,r.jsxs)("div",{className:"mil-cover mil-up",children:[(0,r.jsx)("img",{src:e.image,alt:e.title}),(0,r.jsx)("div",{className:"mil-link mil-icon-link",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",children:[(0,r.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,r.jsx)("polyline",{points:"12 5 19 12 12 19"})]})})]}),(0,r.jsxs)("div",{className:"mil-descr",children:[(0,r.jsx)("h4",{className:"mil-up mil-mb-15",children:e.title}),(0,r.jsx)("p",{className:"mil-up",children:e.short})]})]})},"post-".concat(n)))})};n.Z=l},520:function(e,n,i){"use strict";i.d(n,{Z:function(){return o},D:function(){return a}});var r=i(5893),t=i(1664),s=i.n(t);let l=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:e},(e,i)=>i+n)},a="...",c=e=>{let{currentPage:n,totalItems:i,perPage:t,renderPageLink:c}=e,o=function(e,n,i){let r=Math.ceil(e/i);return r<=5?l(r):n<=3?[1,2,3,4,a,r]:n<r-2?[1,a,n-1,n,n+1,a,r]:[1,a,...l(4,r-3)]}(i,n,t);return(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsxs)("div",{className:"mil-pagination mil-up",children:[(0,r.jsx)("div",{className:"mil-divider mil-mb-90"}),(0,r.jsxs)("div",{className:"mil-pagination-buttons",children:[n>1&&(0,r.jsx)(s(),{href:n>1?c(n-1):c(n),className:"mil-pagination-btn mil-pagination-btm--prev",children:"\xab"},"pagination-item-prev"),o.map((e,i)=>e===a?(0,r.jsx)("span",{className:"mil-pagination-text",children:e},i):(0,r.jsx)(s(),{href:c(e),className:"".concat(e===n?"mil-active":""," mil-pagination-btn"),children:e},"pagination-item-".concat(i))),n<o.length&&(0,r.jsx)(s(),{href:n<o.length?c(n+1):c(n),className:"mil-pagination-btn mil-pagination-btn--next",children:"\xbb"},"pagination-item-next")]})]})})};var o=c},3987:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var r=i(5893),t=JSON.parse('{"T":"Restez au courant de mes derni\xe8res actualit\xe9s en vous abonnant !"}'),s=i(2806);let l=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{id:"about",className:"mil-p-90-90",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsxs)("div",{className:"mil-center",children:[(0,r.jsx)("h2",{className:"mil-up mil-mb-60",children:t.T}),(0,r.jsx)("div",{className:"mil-up",children:(0,r.jsxs)("form",{action:s.Xd.Gp.H,method:"post",target:"_blank",className:"mil-subscribe-form",children:[(0,r.jsx)("input",{type:"email",placeholder:"Your Email",name:"EMAIL",required:!0}),(0,r.jsx)("input",{type:"hidden",name:s.Xd.Gp.J}),(0,r.jsx)("button",{type:"submit",children:"S'inscrire"})]})})]})})})})});var a=l},3265:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var r=i(5893),t=i(8420),s=i(4900);function l(e){let{dateString:n}=e,i=(0,t.Z)(n);return(0,r.jsx)("time",{dateTime:n,children:(0,s.Z)(i,"LLLL d, yyyy")})}},9372:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return m}});var r=i(5893),t=i(6699),s=i(9925),l=i(520),a=i(163),c=i(3987),o=i(6204);let d=e=>{let{posts:n,totalPosts:i,currentPage:d}=e;return(0,r.jsxs)(o.Z,{fullWidth:!0,rightPanelBackground:"/img/person/bg-2.jpg",rightPanelImg:"/img/person/1.png",children:[(0,r.jsx)(a.Z,{pageTitle:"Exploring the World <br>Through Our Blog",breadTitle:"Blog",align:"center"}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,r.jsx)(s.Z,{items:n}),(0,r.jsx)(l.Z,{currentPage:d,totalItems:i,perPage:t.PER_PAGE,renderPageLink:e=>"/blog/page/".concat(e)})]})}),(0,r.jsx)(c.Z,{})]})};var m=!0;n.default=d},2243:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return m}});var r=i(5893),t=i(6699),s=i(9925),l=i(520),a=i(163),c=i(3987),o=i(6204);let d=e=>{let{posts:n,totalPosts:i,currentPage:d}=e;return(0,r.jsxs)(o.Z,{rightPanelBackground:"/img/person/bg-2.jpg",rightPanelImg:"/img/person/1.png",children:[(0,r.jsx)(a.Z,{pageTitle:"Exploring the World <br>Through Our Blog",breadTitle:"Blog",align:"center"}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,r.jsx)(s.Z,{items:n}),(0,r.jsx)(l.Z,{currentPage:d,totalItems:i,perPage:t.PER_PAGE,renderPageLink:e=>"/blog/page/".concat(e)})]})}),(0,r.jsx)(c.Z,{})]})};var m=!0;n.default=d},6699:function(e,n,i){"use strict";i.r(n),i.d(n,{PER_PAGE:function(){return d},__N_SSG:function(){return o}});var r=i(5893),t=i(9925),s=i(520),l=i(163),a=i(3987),c=i(6204);i(2243);var o=!0;let d=8,m=e=>{let{posts:n,currentPage:i,totalPosts:o}=e;return(0,r.jsxs)(c.Z,{rightPanelBackground:"/img/person/bg-2.jpg",rightPanelImg:"/img/person/1.png",children:[(0,r.jsx)(l.Z,{pageTitle:"Exploring the World <br>Through Our Blog",breadTitle:"Blog",align:"center"}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,r.jsx)(t.Z,{items:n}),(0,r.jsx)(s.Z,{currentPage:i,totalItems:o,perPage:d,renderPageLink:e=>"/blog/page/".concat(e)})]})}),(0,r.jsx)(a.Z,{})]})};n.default=m}},function(e){e.O(0,[802,78,790,204,774,888,179],function(){return e(e.s=1016)}),_N_E=e.O()}]);