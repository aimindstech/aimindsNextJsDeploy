(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{6064:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms-conditions",function(){return n(9218)}])},3538:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(1664);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,o,c=d(l);function l(){return a(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,o=e.homePageText,a=e.portfolioPageUrl,s=e.portfolioPageText,c=e.activePageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("a",{children:o})})}),a&&(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:a,children:(0,r.jsx)("a",{children:s})})}),(0,r.jsx)("li",{children:c})]})]})})})}}])&&s(t.prototype,n),o&&s(t,o),l}(o.Component);t.Z=h},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),s=n(387),c=n(7190);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=i.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,y=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],I=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=j&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,d,h,{locale:t})}),[h,d,j,m,n,o]);var E={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,o,d,h,y,v,b,m)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof m?m:o&&o.locale,O=o&&o.isLocaleDomain&&a.getDomainLocale(h,T,o&&o.locales,o&&o.domainLocales);E.href=O||a.addBasePath(a.addLocale(h,T,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),l=r(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},9218:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(8614)),i=n(3538),a=n(8348),s=n(9008);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"Terms & Conditions"})}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(i.Z,{pageTitle:"Terms & Conditions",homePageUrl:"/",homePageText:"Home",activePageText:"Terms & Conditions"}),(0,r.jsx)("div",{className:"text-container ptb-100",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h3",{children:"PLEASE READ CAREFULLY. THIS IS A RELEASE OF LIABILITY."}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"BY PARTICIPATING IN OUR WORKSHOPS, YOU UNDERSTAND AND AGREE TO THE FOLLOWING TERMS AND CONDITIONS:"}),(0,r.jsx)("p",{children:"I expressly assume all risks associated with my child(ren) participating in Tech Bytes Workshop including, without limitation, the risks associated with negligence by the participants leading to physical risk, injury or other serious consequences."}),(0,r.jsx)("p",{children:"I acknowledge that the organizers expect my child(ren) participating in Tech Bytes Workshop to conduct professionally. Participants need to be kind to others and not insult or put down fellow participants. Harassment, bullying, disrespectful attitude and other exclusionary behaviour are not acceptable by any students. Any such behaviour would be reported immediately to parents and those students may have to leave the workshop."}),(0,r.jsx)("p",{children:"I represent that I am the parent and/or legal guardian of such child(ren), and that the child(ren) is/are in good health and there are no special physical problems associated with the care of the child(ren), unless a caretaker will be present to administer to the child(ren)\u2019s needs, as noted."}),(0,r.jsx)("p",{children:"I recognize that I am fully responsible for my child(ren) participating in Tech Bytes Workshop for: (i) the online browsing and conduct of such child(ren) and Tech Bytes team has no control and will not be responsible for the contents (including inappropriate contents) which participants search online. (ii) the consequences of any misuse by the minor including but not limited to causing intentional damages to the hardware devices like computer."}),(0,r.jsx)("p",{children:"This Release of Liability supersedes any other agreements or representations by or between the parties and is governed by the Laws of British Columbia and Canada and is intended to be interpreted as broadly as possible. If any part of this agreement is found to be unenforceable, all other parts shall be given full force and effect."}),(0,r.jsx)("p",{children:"I have carefully read this release of liability and fully understand its contents. I represent that I am at least 18 years of age. I am aware that this is a release of a liability and I accept its terms and conditions of my own free will."})]})}),(0,r.jsx)(a.Z,{})]})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=6064,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
