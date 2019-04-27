!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/slider/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return s(e,arguments,u(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a(o,e)})(e)}function s(e,t,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=function(e){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unknown";return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=i(this,u(t).call(this,e))).type=o,n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,l(Error)),n=t,(o=[{key:"show",value:function(){console.log(this.message,"(".concat(this.type,")"))}}])&&r(n.prototype,o),s&&r(n,s),t}(),d={value:0,min:0,max:100,step:1,showBubble:!0,showSteps:!1,horizontal:!0,sliderLength:0};function f(e){return void 0===e}var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};for(var o in Object.assign(n,d),t){var r=i(o,t[o]);r instanceof c?r.show():n[o]=r}function i(e,t){if(f(d[e]))return new c("".concat(e," does not exist or is not configurable."),"notProperty");switch(e){case"value":case"max":case"min":case"step":case"sliderLength":if(t=parseFloat(t),isNaN(t))return new c("".concat(e," is not a number."),"notNum");break;case"showBubble":case"showSteps":case"horizontal":if("boolean"!=typeof t)return new c("".concat(e," is not a boolean."),"notBool");break;default:return new c("".concat(e," is not configurable"),"notConf")}switch(e){case"value":if(t>n.max)return n.pos=n.sliderLength,n.max;if(t<n.min)return n.pos=0,n.min;t=n.min+n.step*Math.round((t-n.min)/n.step),n.pos=n.sliderLength*(t-n.min)/(n.max-n.min);break;case"min":if(t>n.max)return new c("Invalid min value: ".concat(t),"notMin");break;case"max":if(t<n.min)return new c("Invalid max value: ".concat(t),"notMax");break;case"step":if(t<=0||(n.max-n.min)%t!=0||t>n.max-n.min)return new c("Invalid step value: ".concat(t),"notStep");break;case"sliderLength":if(t<=0)return new c("Invalid slider length value","notLength")}return t}function l(e,t){var o=i(e,t);o instanceof c?o.show():n[e]=o}return n.pos=0,n.selector=e,n.observers=[],{set:function(e,t){if(e instanceof Object)for(var n in e)l(n,e[n]);else l(e,t)},validate:i,get:function(e){if(f(n[e]))throw new c("".concat(e," does not exist."),"notProperty");return n[e]},addObserver:function(e){n.observers.push(e)},notifyAll:function(){n.observers.forEach(function(e){e.update()})}}};function h(e){if(this.model=e,this.root=document.querySelector(e.get("selector")),!this.root)throw new Error("Invalid selector (".concat(e.get("selector"),"): element not found."));e.addObserver(this)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);for(var o in t)n.setAttribute(o,t[o]);return n}h.prototype={render:function(e){var t=this.model.get("horizontal"),n=t?"slider_hor":"slider_ver",o=this.model.get("showBubble")?"display:absolute;":"display:none;",r=this.model.get("max"),i=this.model.get("min"),l={cont:m("div",{class:"slider-cont"}),input:m("input",{type:"text"}),slider:m("div",{class:"slider ".concat(n)}),bubble:m("div",{class:"value-bubble",style:o}),sliderDone:m("div",{class:"slider__done"}),sliderHandle:m("span",{class:"slider__head"})};if(l.cont.appendChild(l.input),l.cont.appendChild(l.slider),l.bubble.innerHTML=i,[l.bubble,l.sliderDone,l.sliderHandle].forEach(function(e){l.slider.appendChild(e)}),this.model.get("showSteps"))for(var s=this.model.get("step"),a=0;a<=r-i;a+=s){var u=100*a/(r-i),c=m("label",{style:t?"left:".concat(u,"%"):"top:".concat(u,"%")});c.innerHTML=a+i,l.slider.appendChild(c)}this.root.innerHTML="",this.root.appendChild(l.cont),l.slider.addEventListener("click",e.handleClick),l.sliderHandle.addEventListener("mousedown",e.handleDrag),l.input.addEventListener("blur",e.handleInput);var d=t?l.slider.offsetWidth:l.slider.offsetHeight;this.model.set("sliderLength",d),this.dom=l},update:function(){var e=this.model.get("pos"),t=this.model.get("value");this.model.get("horizontal")?(this.dom.sliderHandle.style.left=e+"px",this.dom.sliderDone.style.width=e+5+"px",this.dom.bubble.style.left=e-4+"px"):(this.dom.sliderHandle.style.top=e+"px",this.dom.sliderDone.style.height=e+5+"px",this.dom.bubble.style.top=e-4+"px"),this.dom.bubble.innerHTML=t,this.dom.input.value=t}};var b=h;var v=function(e,t){this.model=e,this.view=t,this.handleClick=function(e){if("slider__head"!==e.target.className&&"value-bubble"!==e.target.className){var t=e.target.getBoundingClientRect(),n=this.model.get("horizontal")?e.clientX-t.left:e.clientY-t.top,o=(this.model.get("max")-this.model.get("min"))*n/this.model.get("sliderLength");this.model.set("value",o+this.model.get("min")),this.model.notifyAll()}}.bind(this),this.handleDrag=function(e){var t=this.model,n=t.get("horizontal"),o=e.target,r=o.offsetLeft,i=o.offsetTop,l=e.clientX,s=e.clientY;function a(e){var o=n?r+e.clientX-l:i+e.clientY-s,a=t.get("max")-t.get("min"),u=a*o/t.get("sliderLength");t.set("value",u+t.get("min")),t.notifyAll()}o.addEventListener("mousemove",a),window.addEventListener("mouseup",function(e){o.removeEventListener("mousemove",a)})}.bind(this),this.handleInput=function(e){this.model.set("value",e.target.value),this.model.notifyAll()}.bind(this),t.render(this)};function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new p(e,t),o=new b(n);return{model:n,view:o,controller:new v(n,o)}}window.onload=function(){y("#example1"),y("#example2",{step:20,showBubble:!1,showSteps:!0}),y("#example3",{min:40,max:75,horizontal:!1});var e,t,n,o=y("#config-example");e="panel",t=o,(n=document.getElementById(e))&&n.addEventListener("submit",function(e){e.preventDefault(),Array.prototype.forEach.call(e.target.elements,function(e){if("submit"!==e.type){var n=e.name,o=e.value.trim();"radio"!==e.type&&"checkbox"!==e.type||(o=e.checked),""!==o&&t.model.set(n,o)}}),t.view.render(t.controller)})}}]);