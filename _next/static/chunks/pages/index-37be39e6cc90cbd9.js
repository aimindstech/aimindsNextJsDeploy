(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2244)}])},8418:function(e,n,s){"use strict";function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],a=!0,r=!1,t=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(s.push(i.value),!n||s.length!==n);a=!0);}catch(c){r=!0,t=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw t}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var r,t=(r=s(7294))&&r.__esModule?r:{default:r},i=s(6273),l=s(387),c=s(7190);var o={};function d(e,n,s,a){if(e&&i.isLocalURL(n)){e.prefetch(n,s,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;o[n+"%"+s+(r?"%"+r:"")]=!0}}var u=function(e){var n,s=!1!==e.prefetch,r=l.useRouter(),u=t.default.useMemo((function(){var n=a(i.resolveHref(r,e.href,!0),2),s=n[0],t=n[1];return{href:s,as:e.as?i.resolveHref(r,e.as):t||s}}),[r,e.href,e.as]),f=u.href,h=u.as,m=e.children,p=e.replace,x=e.shallow,v=e.scroll,j=e.locale;"string"===typeof m&&(m=t.default.createElement("a",null,m));var g=(n=t.default.Children.only(m))&&"object"===typeof n&&n.ref,y=a(c.useIntersection({rootMargin:"200px"}),2),N=y[0],b=y[1],w=t.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);t.default.useEffect((function(){var e=b&&s&&i.isLocalURL(f),n="undefined"!==typeof j?j:r&&r.locale,a=o[f+"%"+h+(n?"%"+n:"")];e&&!a&&d(r,f,h,{locale:n})}),[h,f,b,j,s,r]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,s,a,r,t,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(s))&&(e.preventDefault(),null==l&&a.indexOf("#")>=0&&(l=!1),n[r?"replace":"push"](s,a,{shallow:t,locale:c,scroll:l}))}(e,r,f,h,p,x,v,j)},onMouseEnter:function(e){i.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(r,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof j?j:r&&r.locale,E=r&&r.isLocaleDomain&&i.getDomainLocale(h,C,r&&r.locales,r&&r.domainLocales);k.href=E||i.addBasePath(i.addLocale(h,C,r&&r.defaultLocale))}return t.default.cloneElement(n,k)};n.default=u},7190:function(e,n,s){"use strict";function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=[],a=!0,r=!1,t=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(s.push(i.value),!n||s.length!==n);a=!0);}catch(c){r=!0,t=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw t}}return s}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,s=e.disabled||!i,c=r.useRef(),o=a(r.useState(!1),2),d=o[0],u=o[1],f=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),s||d||e&&e.tagName&&(c.current=function(e,n,s){var a=function(e){var n=e.rootMargin||"",s=l.get(n);if(s)return s;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;n&&s&&n(s)}))}),e);return l.set(n,s={id:n,observer:r,elements:a}),s}(s),r=a.id,t=a.observer,i=a.elements;return i.set(e,n),t.observe(e),function(){i.delete(e),t.unobserve(e),0===i.size&&(t.disconnect(),l.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:n}))}),[s,n,d]);return r.useEffect((function(){if(!i&&!d){var e=t.requestIdleCallback((function(){return u(!0)}));return function(){return t.cancelIdleCallback(e)}}}),[d]),[f,d]};var r=s(7294),t=s(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},2244:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return f}});var a=s(5893),r=s(8614),t=s(1664),i=function(){return(0,a.jsx)("section",{className:"main-banner-area main-banner-area-one",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("div",{className:"row align-items-center",children:(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("h1",{children:"Hire Trained Candidates Quickly From Us!"}),(0,a.jsx)("p",{children:"Connect with us and discover candidates who are highly trained in sectors such as Machine Learning, Artificial Intelligence, and Augmented Reality and their projects."}),(0,a.jsxs)("div",{className:"banner-btn",children:[(0,a.jsx)(t.default,{href:"/portfolio",children:(0,a.jsx)("a",{className:"default-btn",children:"Our Portfolio"})}),(0,a.jsx)(t.default,{href:"/contact",children:(0,a.jsx)("a",{className:"default-btn",children:"Get A Quote"})})]})]})})})})})},l=function(){return(0,a.jsx)("div",{className:"features-area pt-100 pb-70",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 p-0",children:(0,a.jsxs)("div",{className:"single-features",children:[(0,a.jsx)("i",{className:"flaticon-choice"}),(0,a.jsx)("h3",{children:"Hire Trained Candidates"}),(0,a.jsx)("p",{children:"Explore our pool of experienced candidates trained in Machine Learning, Artificial Intelligence and Augmented Reality sectors."})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 p-0",children:(0,a.jsxs)("div",{className:"single-features",children:[(0,a.jsx)("i",{className:"flaticon-blockchain"}),(0,a.jsx)("h3",{children:"Offset Hiring Costs"}),(0,a.jsx)("p",{children:"In some cases, we may be able to provide government grants to help offset hiring costs associated with onboarding Canadian candidates."})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0",children:(0,a.jsxs)("div",{className:"single-features",children:[(0,a.jsx)("i",{className:"flaticon-promotion"}),(0,a.jsx)("h3",{children:"Flexible Hiring"}),(0,a.jsx)("p",{children:"Hire candidates for contract work or part-time work with the ability to convert them into full-time employees at any time necessary."})]})})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 p-0",children:(0,a.jsxs)("div",{className:"single-features",children:[(0,a.jsx)("i",{className:"flaticon-user"}),(0,a.jsx)("h3",{children:"Consultancy Services"}),(0,a.jsx)("p",{children:"Enhance your business' digital services through our consultation services and deliver an umatched experience for your customers."})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 p-0",children:(0,a.jsxs)("div",{className:"single-features",children:[(0,a.jsx)("i",{className:"flaticon-engineer"}),(0,a.jsx)("h3",{children:"Outsource Your Development"}),(0,a.jsx)("p",{children:"Relieve your team the stress of software development and digitial marketing creation to our highly capable candidates."})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0",children:(0,a.jsxs)("div",{className:"single-features",children:[(0,a.jsx)("i",{className:"flaticon-success"}),(0,a.jsx)("h3",{children:"Transparent Pricing"}),(0,a.jsx)("p",{children:"No hidden fees. Schedule a call with us and discuss all the options available to you, we are fully transparent with associated pricing."})]})})]})]})})},c=function(){return(0,a.jsx)("section",{className:"about-area pb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"about-img",children:(0,a.jsx)("img",{src:"/aimindsNextJsDeploy/images/about.jpg",alt:"Image"})})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"about-content",children:[(0,a.jsx)("span",{children:"About Us"}),(0,a.jsx)("h2",{children:"We Are Always Ready to Help"}),(0,a.jsx)("p",{children:"Our candidates possess all the necessary skillsets to help jumpstart your project. Through employing our highly-trained candidates in highly sought-after technical sectors such as Machine Learning, Artificial Intelligence, as well as Augmented Reality, be assured that you are hiring competent developers who are open to contract as well as part- and full-time employment. Furthermore, to alleviate some costs associated with the hiring of Canadian workers, we may be able to provide government grants to help offset financial burdens. Feel free to contact us regarding outsourcing your software or digital marketing projects to us at any time and we will be glad to assist."}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"flaticon-checked"}),"Hire Trained Candidates"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"flaticon-checked"}),"Offset Hiring Costs"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"flaticon-checked"}),"Flexible Hiring"]})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"flaticon-checked"}),"Consultancy Services"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"flaticon-checked"}),"Outsource Your Development"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"flaticon-checked"}),"Transparent Pricing"]})]})})]}),(0,a.jsx)(t.default,{href:"/about",children:(0,a.jsx)("a",{className:"default-btn",children:"Learn More"})})]})})]})})})},o=s(8348),d=s(8189),u=s(9008),f=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u.default,{children:[(0,a.jsx)("title",{children:"AiMinds | Hire Trained Candidates"}),(0,a.jsx)("meta",{name:"description",content:"Connect with us to explore our candidate pool who are trained in Tech Companies' Emerging Tech skill requirements like ML, AI, AR based hands on projects."}),(0,a.jsx)("meta",{name:"google-site-verification",content:"auxexrT-u8Dhe22qe20kc8wyPRRgpIZuHvo89QCueus"})]}),(0,a.jsx)(r.Z,{}),(0,a.jsx)(i,{}),(0,a.jsx)(l,{}),(0,a.jsx)(c,{}),(0,a.jsx)(d.Z,{}),(0,a.jsx)(o.Z,{})]})}},1664:function(e,n,s){e.exports=s(8418)},1163:function(e,n,s){e.exports=s(387)}},function(e){e.O(0,[250,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
