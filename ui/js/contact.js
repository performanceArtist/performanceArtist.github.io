!function(e){function r(r){for(var n,u,i=r[0],a=r[1],l=r[2],s=0,p=[];s<i.length;s++)u=i[s],o[u]&&p.push(o[u][0]),o[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(f&&f(r);p.length;)p.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(n=!1)}n&&(c.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={2:0},c=[];function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var f=a;c.push([45,0]),t()}({45:function(e,r,t){"use strict";t.r(r);t(3),t(46),t(47);var n=t(0);window.onload=function(){Object(n.e)();var e=document.querySelectorAll(".profile"),r=document.querySelector(".chat"),t=r.querySelector(".chat__name"),o=r.querySelector(".avatar img");e.forEach(function(r){var n=r.querySelector(".avatar img"),c=r.querySelector(".profile__name");r.addEventListener("click",function(){e.forEach(function(e){return e.classList.remove("selected-contact")}),r.classList.add("selected-contact"),t.innerText=c.innerText,o.src=n.src})})}},46:function(e,r,t){},47:function(e,r,t){e.exports=t.p+"images/billybob.jpg"}});