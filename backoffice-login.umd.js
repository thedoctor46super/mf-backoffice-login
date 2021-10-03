!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BackofficeLogin={})}(this,(function(e){"use strict";var t=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const n={id:"app"};var r,o,i,a=t({name:"App"},[["render",function(e,t,r,o,i,a){const s=vue.resolveComponent("router-view");return vue.openBlock(),vue.createElementBlock("div",n,[vue.createVNode(s)])}]]),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o=r={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports,i=s,o.exports=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var t=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var t,n=String(e),r=n.length,o=-1,i="",a=n.charCodeAt(0);++o<r;)0!=(t=n.charCodeAt(o))?i+=t>=1&&t<=31||127==t||0==o&&t>=48&&t<=57||1==o&&t>=48&&t<=57&&45==a?"\\"+t.toString(16)+" ":0==o&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(o):n.charAt(o):i+="�";return i};return e.CSS||(e.CSS={}),e.CSS.escape=t,t}(i),r.exports;var d={appOptions:null,template:null,Vue:null,createApp:null,handleInstance:null};function f(e){return e.loadRootComponent?e.loadRootComponent().then((function(t){return e.rootComponent=t})):Promise.resolve()}function h(e,t,n){var r={};return Promise.resolve().then((function(){return(o=e,i=n,"function"==typeof o.appOptions?o.appOptions(i):Promise.resolve(u({},o.appOptions))).then((function(o){var i;if(n.domElement&&!o.el&&(o.el=n.domElement),o.el)if("string"==typeof o.el){if(!(i=document.querySelector(o.el)))throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(o.el))}else(i=o.el).id||(i.id="single-spa-application:".concat(n.name)),o.el="#".concat(CSS.escape(i.id));else{var a="single-spa-application:".concat(n.name);o.el="#".concat(CSS.escape(a)),(i=document.getElementById(a))||((i=document.createElement("div")).id=a,document.body.appendChild(i))}if(e.replaceMode||(o.el=o.el+" .single-spa-container"),!i.querySelector(".single-spa-container")){var s=document.createElement("div");s.className="single-spa-container",i.appendChild(s)}if(r.domEl=i,o.render||o.template||!e.rootComponent||(o.render=function(t){return t(e.rootComponent)}),o.data||(o.data={}),o.data=function(){return u(u({},o.data),n)},e.createApp){if(r.vueInstance=e.createApp(o),e.handleInstance)return Promise.resolve(e.handleInstance(r.vueInstance,n)).then((function(){return r.root=r.vueInstance.mount(o.el),t[n.name]=r,r.vueInstance}));r.root=r.vueInstance.mount(o.el)}else if(r.vueInstance=new e.Vue(o),r.vueInstance.bind&&(r.vueInstance=r.vueInstance.bind(r.vueInstance)),e.handleInstance)return Promise.resolve(e.handleInstance(r.vueInstance,n)).then((function(){return t[n.name]=r,r.vueInstance}));return t[n.name]=r,r.vueInstance}));var o,i}))}function m(e,t,n){return Promise.resolve().then((function(){var r=t[n.name],o=u(u({},e.appOptions.data||{}),n),i=r.root||r.vueInstance;for(var a in o)i[a]=o[a]}))}function g(e,t,n){return Promise.resolve().then((function(){var r=t[n.name];e.createApp?r.vueInstance.unmount(r.domEl):(r.vueInstance.$destroy(),r.vueInstance.$el.innerHTML=""),delete r.vueInstance,r.domEl&&(r.domEl.innerHTML="",delete r.domEl)}))}var v={exports:{}},y=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},b=y,w=Object.prototype.toString;function E(e){return"[object Array]"===w.call(e)}function S(e){return void 0===e}function x(e){return null!==e&&"object"==typeof e}function k(e){if("[object Object]"!==w.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function O(e){return"[object Function]"===w.call(e)}function j(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),E(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var C={isArray:E,isArrayBuffer:function(e){return"[object ArrayBuffer]"===w.call(e)},isBuffer:function(e){return null!==e&&!S(e)&&null!==e.constructor&&!S(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:x,isPlainObject:k,isUndefined:S,isDate:function(e){return"[object Date]"===w.call(e)},isFile:function(e){return"[object File]"===w.call(e)},isBlob:function(e){return"[object Blob]"===w.call(e)},isFunction:O,isStream:function(e){return x(e)&&O(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:j,merge:function e(){var t={};function n(n,r){k(t[r])&&k(n)?t[r]=e(t[r],n):k(n)?t[r]=e({},n):E(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)j(arguments[r],n);return t},extend:function(e,t,n){return j(t,(function(t,r){e[r]=n&&"function"==typeof t?b(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},A=C;function N(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var T=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(A.isURLSearchParams(t))r=t.toString();else{var o=[];A.forEach(t,(function(e,t){null!=e&&(A.isArray(e)?t+="[]":e=[e],A.forEach(e,(function(e){A.isDate(e)?e=e.toISOString():A.isObject(e)&&(e=JSON.stringify(e)),o.push(N(t)+"="+N(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},P=C;function L(){this.handlers=[]}L.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},L.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},L.prototype.forEach=function(e){P.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var I=L,R=C,V=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},B=V,U=function(e,t,n,r,o){var i=new Error(e);return B(i,t,n,r,o)},D=U,q=C,G=q.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),q.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),q.isString(r)&&a.push("path="+r),q.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},z=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},M=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},_=C,F=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],H=C,$=H.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=H.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},J=C,W=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(D("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},K=G,X=T,Z=function(e,t){return e&&!z(t)?M(e,t):t},Q=function(e){var t,n,r,o={};return e?(_.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=_.trim(e.substr(0,r)).toLowerCase(),n=_.trim(e.substr(r+1)),t){if(o[t]&&F.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},Y=$,ee=U,te=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers,i=e.responseType;J.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+c)}var u=Z(e.baseURL,e.url);function l(){if(a){var r="getAllResponseHeaders"in a?Q(a.getAllResponseHeaders()):null,o={data:i&&"text"!==i&&"json"!==i?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:r,config:e,request:a};W(t,n,o),a=null}}if(a.open(e.method.toUpperCase(),X(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=l:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(l)},a.onabort=function(){a&&(n(ee("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(ee("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(ee(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},J.isStandardBrowserEnv()){var p=(e.withCredentials||Y(u))&&e.xsrfCookieName?K.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}"setRequestHeader"in a&&J.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),J.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&"json"!==i&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),r||(r=null),a.send(r)}))},ne=C,re=function(e,t){R.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},oe=V,ie={"Content-Type":"application/x-www-form-urlencoded"};function ae(e,t){!ne.isUndefined(e)&&ne.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var se,ce={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(se=te),se),transformRequest:[function(e,t){return re(t,"Accept"),re(t,"Content-Type"),ne.isFormData(e)||ne.isArrayBuffer(e)||ne.isBuffer(e)||ne.isStream(e)||ne.isFile(e)||ne.isBlob(e)?e:ne.isArrayBufferView(e)?e.buffer:ne.isURLSearchParams(e)?(ae(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ne.isObject(e)||t&&"application/json"===t["Content-Type"]?(ae(t,"application/json"),function(e,t,n){if(ne.isString(e))try{return(t||JSON.parse)(e),ne.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||r&&ne.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw oe(o,this,"E_JSON_PARSE");throw o}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ce.headers={common:{Accept:"application/json, text/plain, */*"}},ne.forEach(["delete","get","head"],(function(e){ce.headers[e]={}})),ne.forEach(["post","put","patch"],(function(e){ce.headers[e]=ne.merge(ie)}));var ue=ce,le=C,pe=ue,de=function(e){return!(!e||!e.__CANCEL__)},fe=C,he=function(e,t,n){var r=this||pe;return le.forEach(n,(function(n){e=n.call(r,e,t)})),e},me=de,ge=ue;function ve(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ye=C,be=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return ye.isPlainObject(e)&&ye.isPlainObject(t)?ye.merge(e,t):ye.isPlainObject(t)?ye.merge({},t):ye.isArray(t)?t.slice():t}function c(r){ye.isUndefined(t[r])?ye.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}ye.forEach(r,(function(e){ye.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),ye.forEach(o,c),ye.forEach(i,(function(r){ye.isUndefined(t[r])?ye.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),ye.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var u=r.concat(o).concat(i).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return ye.forEach(l,c),n};var we={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},Ee={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Ee[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Se={},xe=we.version.split(".");function ke(e,t){for(var n=t?t.split("."):xe,r=e.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}Ee.transitional=function(e,t,n){var r=t&&ke(t);function o(e,t){return"[Axios v"+we.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,a){if(!1===e)throw new Error(o(i," has been removed in "+t));return r&&!Se[i]&&(Se[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}};var Oe=C,je=T,Ce=I,Ae=function(e){return ve(e),e.headers=e.headers||{},e.data=he.call(e,e.data,e.headers,e.transformRequest),e.headers=fe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),fe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ge.adapter)(e).then((function(t){return ve(e),t.data=he.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return me(t)||(ve(e),t&&t.response&&(t.response.data=he.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ne=be,Te={isOlderVersion:ke,assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:Ee},Pe=Te.validators;function Le(e){this.defaults=e,this.interceptors={request:new Ce,response:new Ce}}Le.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Ne(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Te.assertOptions(t,{silentJSONParsing:Pe.transitional(Pe.boolean,"1.0.0"),forcedJSONParsing:Pe.transitional(Pe.boolean,"1.0.0"),clarifyTimeoutError:Pe.transitional(Pe.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!r){var a=[Ae,void 0];for(Array.prototype.unshift.apply(a,n),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var s=e;n.length;){var c=n.shift(),u=n.shift();try{s=c(s)}catch(l){u(l);break}}try{o=Ae(s)}catch(l){return Promise.reject(l)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},Le.prototype.getUri=function(e){return e=Ne(this.defaults,e),je(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Oe.forEach(["delete","get","head","options"],(function(e){Le.prototype[e]=function(t,n){return this.request(Ne(n||{},{method:e,url:t,data:(n||{}).data}))}})),Oe.forEach(["post","put","patch"],(function(e){Le.prototype[e]=function(t,n,r){return this.request(Ne(r||{},{method:e,url:t,data:n}))}}));var Ie=Le;function Re(e){this.message=e}Re.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Re.prototype.__CANCEL__=!0;var Ve=Re,Be=Ve;function Ue(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new Be(e),t(n.reason))}))}Ue.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ue.source=function(){var e;return{token:new Ue((function(t){e=t})),cancel:e}};var De=Ue,qe=C,Ge=y,ze=Ie,Me=be;function _e(e){var t=new ze(e),n=Ge(ze.prototype.request,t);return qe.extend(n,ze.prototype,t),qe.extend(n,t),n}var Fe=_e(ue);Fe.Axios=ze,Fe.create=function(e){return _e(Me(Fe.defaults,e))},Fe.Cancel=Ve,Fe.CancelToken=De,Fe.isCancel=de,Fe.all=function(e){return Promise.all(e)},Fe.spread=function(e){return function(t){return e.apply(null,t)}},Fe.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},v.exports=Fe,v.exports.default=Fe;var He=v.exports;
/*! js-cookie v3.0.1 | MIT */function $e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var Je=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=$e({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in o)o[a]&&(i+="; "+a,!0!==o[a]&&(i+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+i}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var a=n[i].split("="),s=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(r[c]=t.read(s,c),e===c)break}catch(o){}}return e?r[e]:r}},remove:function(e,t){r(e,"",$e({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,$e({},this.attributes,t))},withConverter:function(t){return e($e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const We=(e,t,n)=>{const r=60*(n?525600:480)*1e3,o=window.location.protocol.includes("https"),i=new Date;i.setTime(i.getTime()+r),Je.set(e,t,{path:"/",domain:document.domain,expires:i,secure:o})},Ke=Je.get;Je.remove;const Xe=e=>{(e=>{We("ft-portaltoken",e,!0)})(e.AuthToken),e.Permissions=e.Permissions||[],We("ft-user",JSON.stringify({UserId:e.UserId,Username:e.Username,AuthToken:e.AuthToken,Permissions:e.Permissions.filter((e=>e.toLowerCase().includes("serviceportal")))}),!0)};const Ze={name:"Login",components:{vueRecaptcha:{name:"vueRecaptcha",data:()=>({recaptcha:null}),props:{siteKey:{type:String,required:!0},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"light"}},emits:{verify:e=>!!e,expire:null,fail:null},methods:{renderRecaptcha(){this.recaptcha=grecaptcha.render(this.$refs.recaptcha,{sitekey:this.siteKey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:e=>this.$emit("verify",e),"expired-callback":()=>this.$emit("expire"),"error-callback":()=>this.$emit("fail")})},reset(){grecaptcha.reset(this.recaptcha)}},mounted(){null==window.grecaptcha?new Promise((e=>{window.recaptchaReady=function(){e()};const t=window.document,n=t.createElement("script");n.id="recaptcha-script",n.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit"),t.head.appendChild(n)})).then((()=>{this.renderRecaptcha()})):this.renderRecaptcha()},render:()=>vue.h("div",{ref:"recaptcha"},{})}},data:()=>({loading:!1,showGoogleLogin:!1,loginError:!1,username:"",password:"",showGoogleOnly:!1}),watch:{loginError(e){e&&setTimeout((()=>{this.loginError=!1}),3e3)},showGoogleLogin(e){We("ft-spf-google-login",e,!0)}},async mounted(){this.showGoogleOnly=await(async()=>!1)(),this.showGoogleLogin="true"===Ke("ft-spf-google-login")||this.showGoogleOnly},methods:{async triggerGoogleLogin(){const e=await this.$gAuth.signIn();if(!e)return null;this.toggleLoading(!0),this.performGoogleLogin(e)},async performGoogleLogin(e){const t=await async function(e){return He.post("https://patrik-staging.ft-crm.com/crm-api/Authentication/GoogleLogin",{gToken:e})}(e.getAuthResponse().id_token);this.loginError=!t.data.Success,t.data.Success&&this.loginSuccess(t.data.Data)},async loginSuccess(e){Xe(e),this.$router.push({path:"/"})},async onSubmit(){this.username.trim()&&this.password.trim()?grecaptcha.execute():this.loginError=!0},recaptchaVerified(e){try{const t=e;(async function({username:e,password:t,recaptchaToken:n}){return He.post("https://patrik-staging.ft-crm.com/prisma-api/Authentication/LoginAdminCaptcha",{Username:e,Password:t,RecaptchaToken:n})})({username:this.username,password:this.password,recaptchaToken:t}).then((e=>{this.loginError=!e.data.Success,e.data.Success&&this.loginSuccess(e.data.Data),this.$refs.vueRecaptcha.reset()}))}catch(t){console.error("Login error: ",t)}},recaptchaError(e){console.error("Error with recaptcha:",e)},recaptchaExpired(){console.log("Recaptcha expired")},toggleLoading(e){this.loading=e}}},Qe=e=>(vue.pushScopeId("data-v-fe38d02c"),e=e(),vue.popScopeId(),e),Ye={class:"login flex center"},et={key:0,class:"login-error flex center"},tt=[Qe((()=>vue.createElementVNode("img",{src:"/mf-backoffice-root/assets/img/warning.svg",alt:""},null,-1))),vue.createTextVNode("   "),Qe((()=>vue.createElementVNode("span",null,"Login failed. Please try again.",-1)))],nt=Qe((()=>vue.createElementVNode("span",{class:"login-title"},[vue.createTextVNode("Sign in to "),vue.createElementVNode("span",{class:"ft"},"ft"),vue.createTextVNode(" crm")],-1))),rt={key:0},ot={key:0,class:"loading"},it=[Qe((()=>vue.createElementVNode("div",{class:"ball"},null,-1))),Qe((()=>vue.createElementVNode("div",{class:"ball"},null,-1))),Qe((()=>vue.createElementVNode("div",{class:"ball"},null,-1))),Qe((()=>vue.createElementVNode("div",{class:"ball"},null,-1)))],at={key:1,class:"flex center"},st=[Qe((()=>vue.createElementVNode("img",{src:"/mf-backoffice-root/assets/img/google.svg",class:"g-logo",alt:""},null,-1))),Qe((()=>vue.createElementVNode("span",null,"Sign In",-1)))],ct={key:0},ut={class:"floating-label"},lt=Qe((()=>vue.createElementVNode("span",{class:"highlight"},null,-1))),pt=Qe((()=>vue.createElementVNode("label",{id:"emailLabel"},"Enter your email",-1))),dt=Qe((()=>vue.createElementVNode("span",{class:"focus-border"},null,-1))),ft={class:"floating-label"},ht=Qe((()=>vue.createElementVNode("span",{class:"highlight"},null,-1))),mt=Qe((()=>vue.createElementVNode("label",{id:"passwordLabel"},"Enter your password",-1))),gt=Qe((()=>vue.createElementVNode("span",{class:"focus-border"},null,-1))),vt=Qe((()=>vue.createElementVNode("button",{id:"normalLoginButton",type:"submit",class:"login-btn flex center"}," Sign In ",-1)));var yt=t(Ze,[["render",function(e,t,n,r,o,i){const a=vue.resolveComponent("vue-recaptcha");return vue.openBlock(),vue.createElementBlock("div",Ye,[vue.createVNode(vue.Transition,null,{default:vue.withCtx((()=>[o.loginError?(vue.openBlock(),vue.createElementBlock("div",et,tt)):vue.createCommentVNode("",!0)])),_:1}),nt,vue.createElementVNode("div",{class:vue.normalizeClass(["login-container",{short:o.showGoogleLogin}])},[vue.createVNode(vue.Transition,null,{default:vue.withCtx((()=>[o.showGoogleLogin?(vue.openBlock(),vue.createElementBlock("div",rt,[vue.createElementVNode("button",{ref:"ftGoogleSignInButton",class:"login-btn flex center",onClick:t[0]||(t[0]=(...e)=>i.triggerGoogleLogin&&i.triggerGoogleLogin(...e))},[o.loading?(vue.openBlock(),vue.createElementBlock("div",ot,it)):(vue.openBlock(),vue.createElementBlock("div",at,st))],512)])):vue.createCommentVNode("",!0)])),_:1}),vue.createVNode(vue.Transition,null,{default:vue.withCtx((()=>[o.showGoogleLogin?vue.createCommentVNode("",!0):(vue.openBlock(),vue.createElementBlock("div",ct,[vue.createElementVNode("form",{onSubmit:t[3]||(t[3]=vue.withModifiers(((...e)=>i.onSubmit&&i.onSubmit(...e)),["prevent"]))},[o.showGoogleLogin?vue.createCommentVNode("",!0):(vue.openBlock(),vue.createBlock(a,{key:0,ref:"vueRecaptcha","site-key":"6Lf29EQUAAAAALFiD7lhOASZ5cM3mb8mbGpKYKss",size:"invisible",onVerify:i.recaptchaVerified,onExpire:i.recaptchaExpired,onFail:i.recaptchaError},null,8,["onVerify","onExpire","onFail"])),vue.createElementVNode("fieldset",null,[vue.createElementVNode("div",ut,[vue.withDirectives(vue.createElementVNode("input",{id:"username","onUpdate:modelValue":t[1]||(t[1]=e=>o.username=e),class:"floating-input",name:"username",type:"text",placeholder:" "},null,512),[[vue.vModelText,o.username]]),lt,pt,dt]),vue.createElementVNode("div",ft,[vue.withDirectives(vue.createElementVNode("input",{id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>o.password=e),class:"floating-input",name:"password",type:"password",autocomplete:"on",placeholder:" "},null,512),[[vue.vModelText,o.password]]),ht,mt,gt]),vt])],32)]))])),_:1})],2),o.showGoogleOnly?vue.createCommentVNode("",!0):(vue.openBlock(),vue.createElementBlock("p",{key:0,class:vue.normalizeClass(["login-switcher",{padded:!o.showGoogleLogin}])},[vue.createElementVNode("button",{onClick:t[4]||(t[4]=e=>o.showGoogleLogin=!o.showGoogleLogin)},vue.toDisplayString(o.showGoogleLogin?"Login with Username / Password":"Login with Google"),1)],2))])}],["__scopeId","data-v-fe38d02c"]]);const bt=[{path:"/mf-backoffice-root/",name:"Login",component:yt},{path:"/",name:"Login1",component:yt},{path:"/mf-backoffice-root/login",name:"Login2",component:yt}],wt=VueRouter.createRouter({history:VueRouter.createWebHistory(),routes:bt});let Et;Et=vue.reactive({isInit:!1,isAuthorized:!1});const St=new function e(){if(!(this instanceof e))return new e;this.instance=null,this.load=e=>{new Promise((e=>{let t=document.createElement("script");t.src="https://apis.google.com/js/api.js",t.onreadystatechange=t.onload=function(){t.readyState&&!/loaded|complete/.test(t.readyState)||setTimeout((function(){e()}),500)},document.getElementsByTagName("head")[0].appendChild(t)})).then((()=>function(e){return new Promise(((t,n)=>{window.gapi.load("auth2",(()=>{window.gapi.auth2.init(e).then((()=>{t(window.gapi)})).catch((e=>{n(e)}))}))}))}(e))).then((t=>{this.instance=t.auth2.getAuthInstance(),this.prompt=e.prompt,Et.instance=t.auth2.getAuthInstance(),Et.isInit=!0,Et.isAuthorized=this.instance.isSignedIn.get()})).catch((e=>{console.error(e)}))},this.signIn=()=>new Promise(((e,t)=>{this.instance?this.instance.signIn().then((t=>{Et.isAuthorized=this.instance.isSignedIn.get(),e(t)})).catch((e=>{t(e)})):t(!1)})),this.getAuthCode=()=>new Promise(((e,t)=>{this.instance?this.instance.grantOfflineAccess({prompt:this.prompt}).then((function(t){e(t.code)})).catch((function(e){t(e)})):t(!1)})),this.signOut=()=>new Promise(((e,t)=>{this.instance?this.instance.signOut().then((()=>{Et.isAuthorized=!1,e(!0)})).catch((e=>{t(e)})):t(!1)}))};var xt={install:(e,t)=>{let n=null,r={scope:"profile email",prompt:"select_account"};if("object"!=typeof t)throw new TypeError("invalid option type. Object type accepted only");if(n=Object.assign(r,t),!t.clientId)throw new Error("clientId is required");St.load(n),e.config.globalProperties.$gAuth=St,e.provide("Vue3GoogleOauth",vue.readonly(Et))}};const kt=function(e){if("object"!==p(e))throw new Error("single-spa-vue requires a configuration object");var t=u(u({},d),e);if(!t.Vue&&!t.createApp)throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");if(!t.appOptions)throw Error("single-spa-vue must be passed opts.appOptions");if(t.appOptions.el&&"string"!=typeof t.appOptions.el&&!(t.appOptions.el instanceof HTMLElement))throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(p(t.appOptions.el)));t.createApp=t.createApp||t.Vue&&t.Vue.createApp;var n={};return{bootstrap:f.bind(null,t,n),mount:h.bind(null,t,n),unmount:g.bind(null,t,n),update:m.bind(null,t,n)}}({createApp:vue.createApp,appOptions:{render(){return vue.h(a,{props:{name:this.name,mountParcel:this.mountParcel,singleSpa:this.singleSpa}})}},handleInstance:e=>{e.use(wt),e.use(xt,{clientId:"706365197587-enedvlgphegpc7sb5c401f4lsmbip4po.apps.googleusercontent.com"})}}),Ot=kt.bootstrap,jt=kt.mount,Ct=kt.unmount;e.bootstrap=Ot,e.mount=jt,e.unmount=Ct,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
