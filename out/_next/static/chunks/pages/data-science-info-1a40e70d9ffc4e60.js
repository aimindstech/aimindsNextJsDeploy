(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{2363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data-science-info",function(){return n(1504)}])},3538:function(e,t,n){"use strict";var r=n(5893),o=n(7294),c=n(1664);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(f,e);var t,n,o,a=p(f);function f(){return i(this,f),a.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,o=e.homePageText,i=e.activePageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:n,children:(0,r.jsx)("a",{children:o})})}),(0,r.jsx)("li",{children:i})]})]})})})}}])&&u(t.prototype,n),o&&u(t,o),f}(o.Component);t.Z=d},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),u=n(387),a=n(7190);var f={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),s=c.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],c=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):c||n}}),[o,e.href,e.as]),p=s.href,d=s.as,h=e.children,y=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var j=(t=c.default.Children.only(h))&&"object"===typeof t&&t.ref,w=r(a.useIntersection({rootMargin:"200px"}),2),g=w[0],_=w[1],x=c.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);c.default.useEffect((function(){var e=_&&n&&i.isLocalURL(p),t="undefined"!==typeof m?m:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,_,m,n,o]);var O={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,u,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:a,scroll:u}))}(e,o,p,d,y,v,b,m)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof m?m:o&&o.locale,E=o&&o.isLocaleDomain&&i.getDomainLocale(d,P,o&&o.locales,o&&o.domainLocales);O.href=E||i.addBasePath(i.addLocale(d,P,o&&o.defaultLocale))}return c.default.cloneElement(t,O)};t.default=s},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,c=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=o.useRef(),f=r(o.useState(!1),2),l=f[0],s=f[1],p=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||l||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!i&&!l){var e=c.requestIdleCallback((function(){return s(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(7294),c=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},1504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),o=n(7294),c=n(8614),i=n(3538);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,o,c=d(i);function i(){return u(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsx)("section",{className:"service-details-area ptb-100",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsxs)("div",{className:"service-details-wrap",children:[(0,r.jsx)("p",{children:"Connect with us to know more on the Data Science related projects our candidates have done."}),(0,r.jsxs)("p",{children:["Snippet of the Data Science related training projects our candidates have taken can be found ",(0,r.jsx)("a",{href:"https://courses.m2mtechconnect.com/collections?category=datascience",children:(0,r.jsx)("strong",{children:"here"})}),"."]}),(0,r.jsx)("p",{children:"If you would like to enhance our curriculum to better train our candidates with your needs, please connect with us."})]})})})})})}}])&&a(t.prototype,n),o&&a(t,o),i}(o.Component),y=n(8348);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,o,u=_(a);function a(){return v(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)(i.Z,{pageTitle:"Data Science",homePageUrl:"/",homePageText:"Home",activePageText:"Data Science Details"}),(0,r.jsx)(h,{}),(0,r.jsx)(y.Z,{})]})}}])&&b(t.prototype,n),o&&b(t,o),a}(o.Component)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=2363,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
