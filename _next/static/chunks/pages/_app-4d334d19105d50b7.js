(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(t,e,n){t.exports=n(6029)},1780:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8985)}])},6029:function(t,e,n){"use strict";var r,o=(r=n(8520))&&r.__esModule?r:{default:r};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}e.default=void 0;var p=function(t){return t&&t.__esModule?t:{default:t}}(n(7294)),y=n(3794);function b(t,e,n,r,o,i,u){try{var c=t[i](u),f=c.value}catch(a){return void n(a)}c.done?e(f):Promise.resolve(f).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){b(i,r,o,u,c,"next",t)}function c(t){b(i,r,o,u,c,"throw",t)}u(void 0)}))}}function v(){return(v=h(o.default.mark((function t(e){var n,r,i;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,y.loadGetInitialProps(n,r);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}var m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(c,t);var e,n,r,o=s(c);function c(){return i(this,c),o.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return p.default.createElement(e,Object.assign({},n))}}])&&u(e.prototype,n),r&&u(e,r),c}(p.default.Component);m.origGetInitialProps=d,m.getInitialProps=d,e.default=m},8985:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=n(5893),o=(n(74),n(2647),n(4962),n(2868),n(8804),n(9818),n(9246),n(6598),n(7544)),i=n(9008),u=n(7294);function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var y=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,o,i=p(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).state={is_visible:!1},e}return e=u,(n=[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("scroll",(function(e){t.toggleVisibility()}))}},{key:"toggleVisibility",value:function(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var t=this,e=this.state.is_visible;return(0,r.jsx)("div",{className:"scroll-to-top",children:e&&(0,r.jsxs)("div",{className:"top",onClick:function(){return t.scrollToTop()},children:[(0,r.jsx)("i",{className:"bx bx-chevrons-up"}),(0,r.jsx)("i",{className:"bx bx-chevrons-up bx-fade-up"})]})})}}])&&c(e.prototype,n),o&&c(e,o),u}(u.Component);function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){d(t,e,n[e])}))}return t}function O(t,e){return!e||"object"!==j(e)&&"function"!==typeof e?b(t):e}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}var P=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(c,t);var e,n,o,u=g(c);function c(){var t;return h(this,c),d(b(t=u.apply(this,arguments)),"state",{loading:!0}),t}return e=c,(n=[{key:"componentDidMount",value:function(){var t=this;this.timerHandle=setTimeout((function(){return t.setState({loading:!1})}),2e3)}},{key:"componentWillUnmount",value:function(){this.timerHandle&&(clearTimeout(this.timerHandle),this.timerHandle=0)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("title",{children:"AiMinds | Hire Trained Candidates"})]}),(0,r.jsx)(e,w({},n)),(0,r.jsx)(y,{scrollStepInPx:"100",delayInMs:"10.50"})]})}}])&&v(e.prototype,n),o&&v(e,o),c}(o.default)},2647:function(){},9818:function(){},8804:function(){},74:function(){},4962:function(){},2868:function(){},6598:function(){},9246:function(){},9008:function(t,e,n){t.exports=n(5443)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1780),e(387)}));var n=t.O();_N_E=n}]);