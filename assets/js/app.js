!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var o,l=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],l=0;l<e.length;l++){var r=e[l],s=t.base?r[0]+t.base:r[0],c=n[s]||0,d="".concat(s," ").concat(c);n[s]=c+1;var u=i(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:g(f,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var l=n.nc;l&&(o.nonce=l)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var l=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,l);else{var r=document.createTextNode(l),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,l=n.media,r=n.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var y=null,m=0;function g(e,t){var n,o,l;if(t.singleton){var r=m++;n=y||(y=c(t)),o=f.bind(null,n,r,!1),l=f.bind(null,n,r,!0)}else n=c(t),o=p.bind(null,n,t),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else l()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=l());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var l=i(n[o]);a[l].references--}for(var r=s(e,t),c=0;c<n.length;c++){var d=i(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},function(e,t,n){"use strict";n.r(t);n(2),n(4),n(6),n(7),n(8)},function(e,t,n){var o=n(0),l=n(3);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1},a=(o(l,r),l.locals?l.locals:{});e.exports=a},function(e,t,n){},function(e,t,n){var o=n(0),l=n(5);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var r={insert:"head",singleton:!1},a=(o(l,r),l.locals?l.locals:{});e.exports=a},function(e,t,n){},function(e,t){const n=document.querySelector(".filmsToggle"),o=document.querySelector(".channelsToggle"),l=document.querySelector(".new"),r=document.querySelector(".genres"),a=document.querySelector(".channels");n.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("active"),n.classList.add("active"),a.style.display="none",l.style.display="block",r.style.display="block"})),o.addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("active"),o.classList.add("active"),l.style.display="none",r.style.display="none",a.style.display="block",function(){let e,t,n,o=document.querySelector(".channels"),l=document.querySelector(".channels-wrapper"),r=(document.querySelector(".channels-wrapper row"),0),a=!1;function i(e){normalizedPosition=e.pageY,r=l.scrollTop,a=!0}function s(e){a=!1}function c(e){if(!0===a){let t=(e.pageY-normalizedPosition)*(l.scrollHeight/o.offsetHeight);l.scrollTop=r+t}}e=document.createElement("div"),e.className="scroller",n=o.offsetHeight/l.scrollHeight*o.offsetHeight,e.style.height=n+"px",o.appendChild(e),o.className+=" showScroll",e.addEventListener("mousedown",i),window.addEventListener("mouseup",s),window.addEventListener("mousemove",c),l.addEventListener("scroll",(function(n){let r=n.target.scrollTop/l.scrollHeight;t=r*(o.offsetHeight-5),e.style.top=t+"px"}))}()}))},function(e,t){!function(){const e=document.getElementById("form"),t=document.querySelector(".header__login_loggedIn"),n=document.getElementById("login"),o=document.querySelector(".header__login");e.addEventListener("submit",e=>{e.preventDefault(),localStorage.setItem("names",n.value),l(localStorage.getItem("names")),n.value=""});const l=e=>{const n=document.createDocumentFragment(),l=document.createElement("p"),r=document.createElement("a");l.textContent=e,r.textContent="Выйти",r.setAttribute("href","#"),r.classList.add("header__logout-link"),n.appendChild(l),n.appendChild(r),t.appendChild(n),t.style.display="flex",o.style.display="none",r.addEventListener("click",e=>{e.preventDefault(),r.style.display="none",l.textContent="",l.style.display="none",t.style.display="none",o.style.display="block",localStorage.setItem("loginBtn",o.style.display),localStorage.setItem("loginArea",t.style.display)}),l.addEventListener("click",e=>{l.style.display="none";const n=document.createElement("input");n.classList.add("name-input"),n.setAttribute("type","text"),t.insertAdjacentElement("afterbegin",n),n.value=l.textContent,n.focus(),n.setSelectionRange(0,-1),n.addEventListener("keyup",e=>{13===e.keyCode&&(l.textContent=n.value,n.style.display="none",l.style.display="block",localStorage.setItem("names",n.value))})}),localStorage.setItem("loginBtn",o.style.display),localStorage.setItem("loginArea",t.style.display),l.textContent=localStorage.getItem("names")};t.style.display=localStorage.getItem("loginArea"),o.style.display=localStorage.getItem("loginBtn"),"flex"==t.style.display&&l(localStorage.getItem("names"))}()},function(e,t){const n=document.getElementById("modal"),o=document.querySelector(".header__login"),l=document.querySelector(".overlay"),r=document.querySelector(".modal__submit");o.addEventListener("click",e=>{l.style.display="block",n.style.display="block"}),r.addEventListener("click",e=>{l.style.display="none",n.style.display="none"})}]);