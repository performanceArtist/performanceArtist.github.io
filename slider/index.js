!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/slider/",n(n.s=7)}([function(e,t,n){var r={"./components/Panel/panel.scss":1,"./components/checkmark/checkmark.scss":2,"./css/_bubble.scss":3,"./css/_globals.scss":4,"./css/slider.scss":5,"./main.scss":6};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=0},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e){e[e.NUM=0]="NUM",e[e.BOOL=1]="BOOL",e[e.CONF=2]="CONF",e[e.MAX=3]="MAX",e[e.MIN=4]="MIN",e[e.STEP=5]="STEP"}(r||(r={}));var f=new Map([[r.NUM,"Expected a number"],[r.BOOL,"Expected a boolean"],[r.CONF,"Invalid or non-configurable key"],[r.MAX,"Should be more than min"],[r.MIN,"Should be less than max"],[r.STEP,"Should be more than zero and less than max-min difference"]]),d=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o="Error in ".concat(r,": ").concat(f.get(e));return(n=a(this,c(t).call(this,o)))._type=e,n._message=o,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s(Error)),n=t,(r=[{key:"getMessage",value:function(){return this._message}},{key:"getType",value:function(){return this._type}},{key:"show",value:function(){console.log(this.getMessage())}}])&&i(n.prototype,r),o&&i(n,o),t}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._observers={},this.subscribe=this.subscribe.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.notify=this.notify.bind(this)}var t,n,r;return t=e,(n=[{key:"subscribe",value:function(e,t){this._observers[t]instanceof Array?this._observers[t].push(e):this._observers[t]=[e]}},{key:"unsubscribe",value:function(e,t){this._observers[t]=this._observers[t].filter(function(t){return t!==e})}},{key:"notify",value:function(e,t){this._observers[e].forEach(function(e){return e(t)})}}])&&h(t.prototype,n),r&&h(t,r),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _,O=(_={value:0,firstValue:0,secondValue:100,min:0,max:100,step:1,interval:!1,showBubble:!0,showSteps:!1,horizontal:!0},function(){return{state:w({},_),meta:{errors:[]}}}),k=function(e){function t(){var e,n,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=y(t).call(this))||"object"!==b(r)&&"function"!=typeof r?m(n):r)._model=O(),o&&e.setState(o),e.validate=e.validate.bind(m(e)),e.setState=e.setState.bind(m(e)),e.getState=e.getState.bind(m(e)),e.takeMeta=e.takeMeta.bind(m(e)),e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,p),n=t,(o=[{key:"validate",value:function(e,t){var n=function(e,t){switch(e){case"value":case"firstValue":case"secondValue":case"max":case"min":case"step":return Number.isNaN(parseFloat(t))?new d(r.NUM,e):parseFloat(t);case"interval":case"showBubble":case"showSteps":case"horizontal":return"boolean"!=typeof t?new d(r.BOOL,e):t;default:return new d(r.CONF,e)}}(e,t),o=this.getState();if(n instanceof d)return n;switch(e){case"value":case"firstValue":case"secondValue":if("firstValue"===e&&n>=o.secondValue-o.step)return o.firstValue;if("firstValue"===e&&n>o.max)return o.min;if("secondValue"===e&&n<=o.firstValue+o.step)return o.secondValue;var i=n-o.min,a=o.max-o.min;if(a%o.step!=0){var s=Math.floor(a/o.step)*o.step;if(i-s>(a-s)/2)return o.max}var l=o.min+o.step*Math.round(i/o.step);return l<o.min?o.min:l>o.max?o.max:l;case"min":return n>=o.max?new d(r.MIN,e):n;case"max":return n<=o.min?new d(r.MAX,e):n;case"step":return n<=0||n>o.max-o.min?new d(r.STEP,e):n;default:return n}}},{key:"setState",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t instanceof Object){var n,r,o,i=this._model,a=i.state,s=i.meta,l=function(t,n){var r=e.validate(t,n);r instanceof d?(s.errors.push(r.getMessage()),r.show()):a[t]=r},u=Object.keys(t).filter(function(e){return"value"!==e&&"firstValue"!==e&&"secondValue"!==e});if(u.forEach(function(e){l(e,t[e])}),void 0===t.interval?a.interval:t.interval){var c=void 0===t.firstValue?a.firstValue:t.firstValue,f=void 0===t.secondValue?a.secondValue:t.secondValue;l("firstValue",c),l("secondValue",f)}else l("value",void 0===t.value?a.value:t.value);0===u.length?this.notify("update"):(n=function(){e.notify("render")},r=200,function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var a=this;clearTimeout(o),o=setTimeout(function(){return n.apply(a,t)},r)})()}else console.log("Invalid object")}},{key:"getState",value:function(){return w({},this._model.state)}},{key:"takeMeta",value:function(){var e=w({},this._model.meta);return this._model.meta.errors=[],e}}])&&v(n.prototype,o),i&&v(n,i),t}();function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);return Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])}),n}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.position,r=void 0===n?0:n,o=t.horizontal,i=void 0===o||o,a=t.showBubble,s=void 0===a||a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var l=s?"display:absolute;":"display:none;";this.element=E("span",{class:"slider__head"}),this.bubble=E("div",{class:"slider__bubble",style:l}),this._horizontal=i,this.setPosition=this.setPosition.bind(this),this.setPosition(0,r)}var t,n,r;return t=e,(n=[{key:"setPosition",value:function(e,t){this._horizontal?(this.element.style.left="".concat(t-12.5,"px"),this.bubble.style.left="".concat(t-18,"px")):(this.element.style.top="".concat(t-12.5,"px"),this.bubble.style.top="".concat(t-18,"px")),this.bubble.innerHTML=e.toString()}},{key:"getElements",value:function(){var e=document.createDocumentFragment();return e.appendChild(this.element),e.appendChild(this.bubble),e}}])&&j(t.prototype,n),r&&j(t,r),e}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(e,n){var r,o,i;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(r=!(i=M(t).call(this))||"object"!==P(i)&&"function"!=typeof i?V(o):i).model=e,!n)throw new Error("Invalid root element");return r.root=n,r.createSlider=r.createSlider.bind(V(r)),r.render=r.render.bind(V(r)),r.update=r.update.bind(V(r)),r.getSliderLength=r.getSliderLength.bind(V(r)),r.render(),r}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,p),n=t,(r=[{key:"createSlider",value:function(){var e=this.model.getState(),t=e.interval,n=e.showBubble,r=e.horizontal,o=this.model.takeMeta().errors,i={container:E("div",{class:"slider"}),slider:E("div",{class:"slider__slider ".concat(r?"slider_hor":"slider_ver")}),selected:E("div",{class:"slider__done"}),errorCont:E("div",{class:"slider__error-container"})};i.slider.appendChild(i.selected),i.container.appendChild(i.slider),i.container.appendChild(i.errorCont),t?(this.handle={first:new x({horizontal:r,showBubble:n}),second:new x({horizontal:r,showBubble:n})},i.slider.appendChild(this.handle.first.getElements()),i.slider.appendChild(this.handle.second.getElements())):(this.handle=new x({horizontal:r,showBubble:n}),i.slider.appendChild(this.handle.getElements())),o.map(function(e){var t=E("div",{class:"slider__error"});return t.innerHTML=e,t}).forEach(function(e){i.errorCont.appendChild(e)}),this.dom=i}},{key:"render",value:function(){var e=this,t=this.model.getState(),n=t.horizontal,r=t.interval,o=t.showSteps,i=t.max,a=t.min,s=t.step;if(this.createSlider(),this.dom.slider.addEventListener("click",function(t){return e.notify("click",t)}),this.dom.slider.addEventListener("drag",function(t){return e.notify("drag",t)}),r){var l=this.handle,u=l.first,c=l.second;u.element.addEventListener("mousedown",function(t){return e.notify("mousedown",{event:t,handleNum:1})}),c.element.addEventListener("mousedown",function(t){return e.notify("mousedown",{event:t,handleNum:2})})}else{this.handle.element.addEventListener("mousedown",function(t){return e.notify("mousedown",{event:t})})}this.root.innerHTML="",this.root.appendChild(this.dom.container);var f=n?this.dom.slider.offsetWidth:this.dom.slider.offsetHeight;if(this._sliderLength=f,o)for(var d=f/((i-a)/s)<18?Math.floor(18*(i-a)/f):s,h=0;h<=i-a;h+=d){var p="".concat(n?100*h/(i-a)-3.5:100*h/(i-a)-2.7,"%"),b=E("label",{class:"slider__label",style:n?"left:".concat(p):"top:".concat(p)});b.innerHTML=(h+a).toString(),this.dom.slider.appendChild(b)}this.update()}},{key:"update",value:function(){var e=this.getSliderLength(),t=this.model.getState(),n=t.horizontal,r=t.interval,o=t.value,i=t.firstValue,a=t.secondValue,s=t.min,l=t.max;if(r){var u=this.handle,c=u.first,f=u.second,d=e*(i-s)/(l-s),h=e*(a-s)/(l-s);c.setPosition(i,d),f.setPosition(a,h),n?(this.dom.selected.style.width="".concat(h-d+5,"px"),this.dom.selected.style.left="".concat(d+5,"px")):(this.dom.selected.style.height="".concat(h-d+5,"px"),this.dom.selected.style.top="".concat(d+5,"px"))}else{var p=e*(o-s)/(l-s);this.handle.setPosition(o,p),n?this.dom.selected.style.width="".concat(p+5,"px"):this.dom.selected.style.height="".concat(p+5,"px")}}},{key:"getSliderLength",value:function(){return this._sliderLength}}])&&C(n.prototype,r),o&&C(n,o),t}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,this.handleClick=this.handleClick.bind(this),this.handleDrag=this.handleDrag.bind(this),t.subscribe(n.update,"update"),t.subscribe(n.render,"render"),n.subscribe(this.handleClick,"click"),n.subscribe(this.handleDrag,"mousedown"),n.subscribe(function(e){return e.preventDefault()},"drag")}var t,n,r;return t=e,(n=[{key:"handleClick",value:function(e){var t=e.target;if(t.classList.contains("slider__slider")||"slider__done"===t.className||"slider__label"===t.className){var n=this.model.getState(),r=n.firstValue,o=n.secondValue,i=n.horizontal,a=n.max,s=n.min,l=n.interval,u=this.view.dom.slider.getBoundingClientRect(),c=i?e.clientX-u.left:e.clientY-u.top,f=a-s,d=this.view.getSliderLength(),h="slider__label"===t.className?parseFloat(t.innerHTML):s+f*c/d;l?Math.abs(h-r)<Math.abs(h-o)?this.model.setState({firstValue:h}):this.model.setState({secondValue:h}):this.model.setState({value:h})}}},{key:"handleDrag",value:function(e){var t=e.event,n=e.handleNum,r=this.model,o=this.view.getSliderLength(),i=r.getState(),a=i.horizontal,s=i.interval,l=i.max,u=i.min,c=t.target,f=c.offsetLeft,d=c.offsetTop,h=t.clientX,p=t.clientY;function b(e){var t=a?f+e.clientX-h:d+e.clientY-p,i=(l-u)*t/o;s?1===n?r.setState({firstValue:i+u}):r.setState({secondValue:i+u}):r.setState({value:i+u})}t.preventDefault(),window.addEventListener("mousemove",b),window.addEventListener("mouseup",function(){window.removeEventListener("mousemove",b)})}}])&&N(t.prototype,n),r&&N(t,r),e}();var B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=new k(t),r=new T(n,e);return new z(n,r),{setState:n.setState,getState:n.getState,subscribe:n.subscribe,unsubscribe:n.unsubscribe}};function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=E("div",{class:"panel__input-wrapper"}),r=E("input",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){F(e,t,n[t])})}return e}({class:"panel__input"},e)),o=E("label",{class:"panel__label"});return o.innerText=t,n.appendChild(r),n.appendChild(o),n}var I,R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=document.querySelector(t),o=r.querySelector("form");if(!o||!r)throw new Error("Invalid element");this.form=o,this.inputContainer=o.querySelector(".panel__value-inputs"),this.slider=n,this.init=this.init.bind(this),this.update=this.update.bind(this),this.slider.subscribe(this.update,"update"),this.slider.subscribe(this.update,"render"),this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.form.addEventListener("change",function(t){t.preventDefault();var n={},r=t.currentTarget;Array.prototype.forEach.call(r.elements,function(e){if("submit"!==e.type){var t=e.name,r=e.value.trim();"radio"!==e.type&&"checkbox"!==e.type||(r=e.checked),n[t]=r}}),e.slider.setState(n)})}},{key:"update",value:function(){var e=this.slider.getState(),t=e.interval,n=e.value,r=e.firstValue,o=e.secondValue;if(t){var i=A({name:"firstValue",type:"number",value:r.toString()},"First value"),a=A({name:"secondValue",type:"number",value:o.toString()},"Second value");this.inputContainer.innerHTML="",this.inputContainer.appendChild(i),this.inputContainer.appendChild(a)}else{var s=A({name:"value",type:"number",value:n.toString()},"Value");this.inputContainer.innerHTML="",this.inputContainer.appendChild(s)}Array.prototype.forEach.call(this.form.elements,function(t){var n=e[t.name];void 0!==n&&("radio"===t.type||"checkbox"===t.type?t.checked=n:t.value=n.toString())})}}])&&D(t.prototype,n),r&&D(t,r),e}();window.onload=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=B(document.getElementById(e),t);new R("[data-slider=".concat(e,"]"),n)};e("example-1",{interval:!0}),e("example-2",{value:20,step:20,showBubble:!1,showSteps:!0}),e("example-3",{value:10,min:40,horizontal:!1,interval:!0})},(I=n(0)).keys().forEach(I)}]);