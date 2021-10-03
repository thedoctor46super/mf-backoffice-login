var e=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const t={id:"app"};var n,r,o,a=e({name:"App"},[["render",function(e,n,r,o,a,i){const s=vue.resolveComponent("router-view");return vue.openBlock(),vue.createElementBlock("div",t,[vue.createVNode(s)])}]]),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r=n={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports,o=i,r.exports=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var t=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var t,n=String(e),r=n.length,o=-1,a="",i=n.charCodeAt(0);++o<r;)0!=(t=n.charCodeAt(o))?a+=t>=1&&t<=31||127==t||0==o&&t>=48&&t<=57||1==o&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==o&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(o):n.charAt(o):a+="�";return a};return e.CSS||(e.CSS={}),e.CSS.escape=t,t}(o),n.exports;var p={appOptions:null,template:null,Vue:null,createApp:null,handleInstance:null};function d(e){return e.loadRootComponent?e.loadRootComponent().then((function(t){return e.rootComponent=t})):Promise.resolve()}function f(e,t,n){var r={};return Promise.resolve().then((function(){return(o=e,a=n,"function"==typeof o.appOptions?o.appOptions(a):Promise.resolve(c({},o.appOptions))).then((function(o){var a;if(n.domElement&&!o.el&&(o.el=n.domElement),o.el)if("string"==typeof o.el){if(!(a=document.querySelector(o.el)))throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(o.el))}else(a=o.el).id||(a.id="single-spa-application:".concat(n.name)),o.el="#".concat(CSS.escape(a.id));else{var i="single-spa-application:".concat(n.name);o.el="#".concat(CSS.escape(i)),(a=document.getElementById(i))||((a=document.createElement("div")).id=i,document.body.appendChild(a))}if(e.replaceMode||(o.el=o.el+" .single-spa-container"),!a.querySelector(".single-spa-container")){var s=document.createElement("div");s.className="single-spa-container",a.appendChild(s)}if(r.domEl=a,o.render||o.template||!e.rootComponent||(o.render=function(t){return t(e.rootComponent)}),o.data||(o.data={}),o.data=function(){return c(c({},o.data),n)},e.createApp){if(r.vueInstance=e.createApp(o),e.handleInstance)return Promise.resolve(e.handleInstance(r.vueInstance,n)).then((function(){return r.root=r.vueInstance.mount(o.el),t[n.name]=r,r.vueInstance}));r.root=r.vueInstance.mount(o.el)}else if(r.vueInstance=new e.Vue(o),r.vueInstance.bind&&(r.vueInstance=r.vueInstance.bind(r.vueInstance)),e.handleInstance)return Promise.resolve(e.handleInstance(r.vueInstance,n)).then((function(){return t[n.name]=r,r.vueInstance}));return t[n.name]=r,r.vueInstance}));var o,a}))}function h(e,t,n){return Promise.resolve().then((function(){var r=t[n.name],o=c(c({},e.appOptions.data||{}),n),a=r.root||r.vueInstance;for(var i in o)a[i]=o[i]}))}function m(e,t,n){return Promise.resolve().then((function(){var r=t[n.name];e.createApp?r.vueInstance.unmount(r.domEl):(r.vueInstance.$destroy(),r.vueInstance.$el.innerHTML=""),delete r.vueInstance,r.domEl&&(r.domEl.innerHTML="",delete r.domEl)}))}var g={exports:{}},v=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},y=v,b=Object.prototype.toString;function w(e){return"[object Array]"===b.call(e)}function E(e){return void 0===e}function S(e){return null!==e&&"object"==typeof e}function x(e){if("[object Object]"!==b.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function O(e){return"[object Function]"===b.call(e)}function k(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),w(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var C={isArray:w,isArrayBuffer:function(e){return"[object ArrayBuffer]"===b.call(e)},isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:S,isPlainObject:x,isUndefined:E,isDate:function(e){return"[object Date]"===b.call(e)},isFile:function(e){return"[object File]"===b.call(e)},isBlob:function(e){return"[object Blob]"===b.call(e)},isFunction:O,isStream:function(e){return S(e)&&O(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:k,merge:function e(){var t={};function n(n,r){x(t[r])&&x(n)?t[r]=e(t[r],n):x(n)?t[r]=e({},n):w(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)k(arguments[r],n);return t},extend:function(e,t,n){return k(t,(function(t,r){e[r]=n&&"function"==typeof t?y(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},j=C;function A(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var N=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(j.isURLSearchParams(t))r=t.toString();else{var o=[];j.forEach(t,(function(e,t){null!=e&&(j.isArray(e)?t+="[]":e=[e],j.forEach(e,(function(e){j.isDate(e)?e=e.toISOString():j.isObject(e)&&(e=JSON.stringify(e)),o.push(A(t)+"="+A(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},T=C;function P(){this.handlers=[]}P.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},P.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},P.prototype.forEach=function(e){T.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var I=P,R=C,L=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},V=L,B=function(e,t,n,r,o){var a=new Error(e);return V(a,t,n,r,o)},U=B,D=C,q=D.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),D.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),D.isString(r)&&i.push("path="+r),D.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},G=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},z=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},M=C,_=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],F=C,H=F.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=F.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},$=C,J=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(U("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},W=q,K=N,X=function(e,t){return e&&!G(t)?z(e,t):t},Z=function(e){var t,n,r,o={};return e?(M.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=M.trim(e.substr(0,r)).toLowerCase(),n=M.trim(e.substr(r+1)),t){if(o[t]&&_.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},Q=H,Y=B,ee=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers,a=e.responseType;$.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+c)}var u=X(e.baseURL,e.url);function l(){if(i){var r="getAllResponseHeaders"in i?Z(i.getAllResponseHeaders()):null,o={data:a&&"text"!==a&&"json"!==a?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:r,config:e,request:i};J(t,n,o),i=null}}if(i.open(e.method.toUpperCase(),K(u,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,"onloadend"in i?i.onloadend=l:i.onreadystatechange=function(){i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))&&setTimeout(l)},i.onabort=function(){i&&(n(Y("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(Y("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(Y(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},$.isStandardBrowserEnv()){var p=(e.withCredentials||Q(u))&&e.xsrfCookieName?W.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}"setRequestHeader"in i&&$.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),$.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),a&&"json"!==a&&(i.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},te=C,ne=function(e,t){R.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},re=L,oe={"Content-Type":"application/x-www-form-urlencoded"};function ae(e,t){!te.isUndefined(e)&&te.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ie,se={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ie=ee),ie),transformRequest:[function(e,t){return ne(t,"Accept"),ne(t,"Content-Type"),te.isFormData(e)||te.isArrayBuffer(e)||te.isBuffer(e)||te.isStream(e)||te.isFile(e)||te.isBlob(e)?e:te.isArrayBufferView(e)?e.buffer:te.isURLSearchParams(e)?(ae(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):te.isObject(e)||t&&"application/json"===t["Content-Type"]?(ae(t,"application/json"),function(e,t,n){if(te.isString(e))try{return(t||JSON.parse)(e),te.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&te.isString(e)&&e.length)try{return JSON.parse(e)}catch(r){if(a){if("SyntaxError"===r.name)throw re(r,this,"E_JSON_PARSE");throw r}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};se.headers={common:{Accept:"application/json, text/plain, */*"}},te.forEach(["delete","get","head"],(function(e){se.headers[e]={}})),te.forEach(["post","put","patch"],(function(e){se.headers[e]=te.merge(oe)}));var ce=se,ue=C,le=ce,pe=function(e){return!(!e||!e.__CANCEL__)},de=C,fe=function(e,t,n){var r=this||le;return ue.forEach(n,(function(n){e=n.call(r,e,t)})),e},he=pe,me=ce;function ge(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ve=C,ye=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return ve.isPlainObject(e)&&ve.isPlainObject(t)?ve.merge(e,t):ve.isPlainObject(t)?ve.merge({},t):ve.isArray(t)?t.slice():t}function c(r){ve.isUndefined(t[r])?ve.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}ve.forEach(r,(function(e){ve.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),ve.forEach(o,c),ve.forEach(a,(function(r){ve.isUndefined(t[r])?ve.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),ve.forEach(i,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var u=r.concat(o).concat(a).concat(i),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return ve.forEach(l,c),n};var be={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},we={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){we[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Ee={},Se=be.version.split(".");function xe(e,t){for(var n=t?t.split("."):Se,r=e.split("."),o=0;o<3;o++){if(n[o]>r[o])return!0;if(n[o]<r[o])return!1}return!1}we.transitional=function(e,t,n){var r=t&&xe(t);function o(e,t){return"[Axios v"+be.version+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,a,i){if(!1===e)throw new Error(o(a," has been removed in "+t));return r&&!Ee[a]&&(Ee[a]=!0,console.warn(o(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,i)}};var Oe=C,ke=N,Ce=I,je=function(e){return ge(e),e.headers=e.headers||{},e.data=fe.call(e,e.data,e.headers,e.transformRequest),e.headers=de.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),de.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||me.adapter)(e).then((function(t){return ge(e),t.data=fe.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return he(t)||(ge(e),t&&t.response&&(t.response.data=fe.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ae=ye,Ne={isOlderVersion:xe,assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],i=t[a];if(i){var s=e[a],c=void 0===s||i(s,a,e);if(!0!==c)throw new TypeError("option "+a+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+a)}},validators:we},Te=Ne.validators;function Pe(e){this.defaults=e,this.interceptors={request:new Ce,response:new Ce}}Pe.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Ae(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Ne.assertOptions(t,{silentJSONParsing:Te.transitional(Te.boolean,"1.0.0"),forcedJSONParsing:Te.transitional(Te.boolean,"1.0.0"),clarifyTimeoutError:Te.transitional(Te.boolean,"1.0.0")},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!r){var i=[je,void 0];for(Array.prototype.unshift.apply(i,n),i=i.concat(a),o=Promise.resolve(e);i.length;)o=o.then(i.shift(),i.shift());return o}for(var s=e;n.length;){var c=n.shift(),u=n.shift();try{s=c(s)}catch(l){u(l);break}}try{o=je(s)}catch(l){return Promise.reject(l)}for(;a.length;)o=o.then(a.shift(),a.shift());return o},Pe.prototype.getUri=function(e){return e=Ae(this.defaults,e),ke(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Oe.forEach(["delete","get","head","options"],(function(e){Pe.prototype[e]=function(t,n){return this.request(Ae(n||{},{method:e,url:t,data:(n||{}).data}))}})),Oe.forEach(["post","put","patch"],(function(e){Pe.prototype[e]=function(t,n,r){return this.request(Ae(r||{},{method:e,url:t,data:n}))}}));var Ie=Pe;function Re(e){this.message=e}Re.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Re.prototype.__CANCEL__=!0;var Le=Re,Ve=Le;function Be(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new Ve(e),t(n.reason))}))}Be.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Be.source=function(){var e;return{token:new Be((function(t){e=t})),cancel:e}};var Ue=Be,De=C,qe=v,Ge=Ie,ze=ye;function Me(e){var t=new Ge(e),n=qe(Ge.prototype.request,t);return De.extend(n,Ge.prototype,t),De.extend(n,t),n}var _e=Me(ce);_e.Axios=Ge,_e.create=function(e){return Me(ze(_e.defaults,e))},_e.Cancel=Le,_e.CancelToken=Ue,_e.isCancel=pe,_e.all=function(e){return Promise.all(e)},_e.spread=function(e){return function(t){return e.apply(null,t)}},_e.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},g.exports=_e,g.exports.default=_e;var Fe=g.exports;
/*! js-cookie v3.0.1 | MIT */function He(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var $e=function e(t,n){function o(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=He({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var i in o)o[i]&&(a+="; "+i,!0!==o[i]&&(a+="="+o[i].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+a}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},a=0;a<n.length;a++){var i=n[a].split("="),s=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(o[c]=t.read(s,c),e===c)break}catch(r){}}return e?o[e]:o}},remove:function(e,t){o(e,"",He({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,He({},this.attributes,t))},withConverter:function(t){return e(He({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const Je=(e,t,n)=>{const r=60*(n?525600:480)*1e3,o=window.location.protocol.includes("https"),a=new Date;a.setTime(a.getTime()+r),$e.set(e,t,{path:"/",domain:document.domain,expires:a,secure:o})},We=$e.get;$e.remove;const Ke=e=>{(e=>{Je("ft-portaltoken",e,!0)})(e.AuthToken),e.Permissions=e.Permissions||[],Je("ft-user",JSON.stringify({UserId:e.UserId,Username:e.Username,AuthToken:e.AuthToken,Permissions:e.Permissions.filter((e=>e.toLowerCase().includes("serviceportal")))}),!0)};const Xe={name:"Login",components:{vueRecaptcha:{name:"vueRecaptcha",data:()=>({recaptcha:null}),props:{siteKey:{type:String,required:!0},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"light"}},emits:{verify:e=>!!e,expire:null,fail:null},methods:{renderRecaptcha(){this.recaptcha=grecaptcha.render(this.$refs.recaptcha,{sitekey:this.siteKey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:e=>this.$emit("verify",e),"expired-callback":()=>this.$emit("expire"),"error-callback":()=>this.$emit("fail")})},reset(){grecaptcha.reset(this.recaptcha)}},mounted(){null==window.grecaptcha?new Promise((e=>{window.recaptchaReady=function(){e()};const t=window.document,n=t.createElement("script");n.id="recaptcha-script",n.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit"),t.head.appendChild(n)})).then((()=>{this.renderRecaptcha()})):this.renderRecaptcha()},render:()=>vue.h("div",{ref:"recaptcha"},{})}},data:()=>({loading:!1,showGoogleLogin:!1,loginError:!1,username:"",password:"",showGoogleOnly:!1}),watch:{loginError(e){e&&setTimeout((()=>{this.loginError=!1}),3e3)},showGoogleLogin(e){Je("ft-spf-google-login",e,!0)}},async mounted(){this.showGoogleOnly=await(async()=>!1)(),this.showGoogleLogin="true"===We("ft-spf-google-login")||this.showGoogleOnly},methods:{async triggerGoogleLogin(){const e=await this.$gAuth.signIn();if(!e)return null;this.toggleLoading(!0),this.performGoogleLogin(e)},async performGoogleLogin(e){const t=await async function(e){return Fe.post("https://patrik-staging.ft-crm.com/crm-api/Authentication/GoogleLogin",{gToken:e})}(e.getAuthResponse().id_token);this.loginError=!t.data.Success,t.data.Success&&this.loginSuccess(t.data.Data)},async loginSuccess(e){Ke(e),this.$router.push({path:"/"})},async onSubmit(){this.username.trim()&&this.password.trim()?grecaptcha.execute():this.loginError=!0},recaptchaVerified(e){try{const t=e;(async function({username:e,password:t,recaptchaToken:n}){return Fe.post("https://patrik-staging.ft-crm.com/prisma-api/Authentication/LoginAdminCaptcha",{Username:e,Password:t,RecaptchaToken:n})})({username:this.username,password:this.password,recaptchaToken:t}).then((e=>{this.loginError=!e.data.Success,e.data.Success&&this.loginSuccess(e.data.Data),this.$refs.vueRecaptcha.reset()}))}catch(t){console.error("Login error: ",t)}},recaptchaError(e){console.error("Error with recaptcha:",e)},recaptchaExpired(){console.log("Recaptcha expired")},toggleLoading(e){this.loading=e}}},Ze=e=>(vue.pushScopeId("data-v-6550fa98"),e=e(),vue.popScopeId(),e),Qe={class:"login flex center"},Ye={key:0,class:"login-error flex center"},et=[Ze((()=>vue.createElementVNode("img",{src:"/assets/img/warning.svg",alt:""},null,-1))),vue.createTextVNode("   "),Ze((()=>vue.createElementVNode("span",null,"Login failed. Please try again.",-1)))],tt=Ze((()=>vue.createElementVNode("span",{class:"login-title"},[vue.createTextVNode("Sign in to "),vue.createElementVNode("span",{class:"ft"},"ft"),vue.createTextVNode(" crm")],-1))),nt={key:0},rt={key:0,class:"loading"},ot=[Ze((()=>vue.createElementVNode("div",{class:"ball"},null,-1))),Ze((()=>vue.createElementVNode("div",{class:"ball"},null,-1))),Ze((()=>vue.createElementVNode("div",{class:"ball"},null,-1))),Ze((()=>vue.createElementVNode("div",{class:"ball"},null,-1)))],at={key:1,class:"flex center"},it=[Ze((()=>vue.createElementVNode("img",{src:"/assets/img/google.svg",class:"g-logo",alt:""},null,-1))),Ze((()=>vue.createElementVNode("span",null,"Sign In",-1)))],st={key:0},ct={class:"floating-label"},ut=Ze((()=>vue.createElementVNode("span",{class:"highlight"},null,-1))),lt=Ze((()=>vue.createElementVNode("label",{id:"emailLabel"},"Enter your email",-1))),pt=Ze((()=>vue.createElementVNode("span",{class:"focus-border"},null,-1))),dt={class:"floating-label"},ft=Ze((()=>vue.createElementVNode("span",{class:"highlight"},null,-1))),ht=Ze((()=>vue.createElementVNode("label",{id:"passwordLabel"},"Enter your password",-1))),mt=Ze((()=>vue.createElementVNode("span",{class:"focus-border"},null,-1))),gt=Ze((()=>vue.createElementVNode("button",{id:"normalLoginButton",type:"submit",class:"login-btn flex center"}," Sign In ",-1)));const vt=[{path:"/mf-backoffice-root/login",name:"Login",component:e(Xe,[["render",function(e,t,n,r,o,a){const i=vue.resolveComponent("vue-recaptcha");return vue.openBlock(),vue.createElementBlock("div",Qe,[vue.createVNode(vue.Transition,null,{default:vue.withCtx((()=>[o.loginError?(vue.openBlock(),vue.createElementBlock("div",Ye,et)):vue.createCommentVNode("",!0)])),_:1}),tt,vue.createElementVNode("div",{class:vue.normalizeClass(["login-container",{short:o.showGoogleLogin}])},[vue.createVNode(vue.Transition,null,{default:vue.withCtx((()=>[o.showGoogleLogin?(vue.openBlock(),vue.createElementBlock("div",nt,[vue.createElementVNode("button",{ref:"ftGoogleSignInButton",class:"login-btn flex center",onClick:t[0]||(t[0]=(...e)=>a.triggerGoogleLogin&&a.triggerGoogleLogin(...e))},[o.loading?(vue.openBlock(),vue.createElementBlock("div",rt,ot)):(vue.openBlock(),vue.createElementBlock("div",at,it))],512)])):vue.createCommentVNode("",!0)])),_:1}),vue.createVNode(vue.Transition,null,{default:vue.withCtx((()=>[o.showGoogleLogin?vue.createCommentVNode("",!0):(vue.openBlock(),vue.createElementBlock("div",st,[vue.createElementVNode("form",{onSubmit:t[3]||(t[3]=vue.withModifiers(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[o.showGoogleLogin?vue.createCommentVNode("",!0):(vue.openBlock(),vue.createBlock(i,{key:0,ref:"vueRecaptcha","site-key":"6Lf29EQUAAAAALFiD7lhOASZ5cM3mb8mbGpKYKss",size:"invisible",onVerify:a.recaptchaVerified,onExpire:a.recaptchaExpired,onFail:a.recaptchaError},null,8,["onVerify","onExpire","onFail"])),vue.createElementVNode("fieldset",null,[vue.createElementVNode("div",ct,[vue.withDirectives(vue.createElementVNode("input",{id:"username","onUpdate:modelValue":t[1]||(t[1]=e=>o.username=e),class:"floating-input",name:"username",type:"text",placeholder:" "},null,512),[[vue.vModelText,o.username]]),ut,lt,pt]),vue.createElementVNode("div",dt,[vue.withDirectives(vue.createElementVNode("input",{id:"password","onUpdate:modelValue":t[2]||(t[2]=e=>o.password=e),class:"floating-input",name:"password",type:"password",autocomplete:"on",placeholder:" "},null,512),[[vue.vModelText,o.password]]),ft,ht,mt]),gt])],32)]))])),_:1})],2),o.showGoogleOnly?vue.createCommentVNode("",!0):(vue.openBlock(),vue.createElementBlock("p",{key:0,class:vue.normalizeClass(["login-switcher",{padded:!o.showGoogleLogin}])},[vue.createElementVNode("button",{onClick:t[4]||(t[4]=e=>o.showGoogleLogin=!o.showGoogleLogin)},vue.toDisplayString(o.showGoogleLogin?"Login with Username / Password":"Login with Google"),1)],2))])}],["__scopeId","data-v-6550fa98"]])}],yt=VueRouter.createRouter({history:VueRouter.createWebHistory(),routes:vt});let bt;bt=vue.reactive({isInit:!1,isAuthorized:!1});const wt=new function e(){if(!(this instanceof e))return new e;this.instance=null,this.load=e=>{new Promise((e=>{let t=document.createElement("script");t.src="https://apis.google.com/js/api.js",t.onreadystatechange=t.onload=function(){t.readyState&&!/loaded|complete/.test(t.readyState)||setTimeout((function(){e()}),500)},document.getElementsByTagName("head")[0].appendChild(t)})).then((()=>function(e){return new Promise(((t,n)=>{window.gapi.load("auth2",(()=>{window.gapi.auth2.init(e).then((()=>{t(window.gapi)})).catch((e=>{n(e)}))}))}))}(e))).then((t=>{this.instance=t.auth2.getAuthInstance(),this.prompt=e.prompt,bt.instance=t.auth2.getAuthInstance(),bt.isInit=!0,bt.isAuthorized=this.instance.isSignedIn.get()})).catch((e=>{console.error(e)}))},this.signIn=()=>new Promise(((e,t)=>{this.instance?this.instance.signIn().then((t=>{bt.isAuthorized=this.instance.isSignedIn.get(),e(t)})).catch((e=>{t(e)})):t(!1)})),this.getAuthCode=()=>new Promise(((e,t)=>{this.instance?this.instance.grantOfflineAccess({prompt:this.prompt}).then((function(t){e(t.code)})).catch((function(e){t(e)})):t(!1)})),this.signOut=()=>new Promise(((e,t)=>{this.instance?this.instance.signOut().then((()=>{bt.isAuthorized=!1,e(!0)})).catch((e=>{t(e)})):t(!1)}))};var Et={install:(e,t)=>{let n=null,r={scope:"profile email",prompt:"select_account"};if("object"!=typeof t)throw new TypeError("invalid option type. Object type accepted only");if(n=Object.assign(r,t),!t.clientId)throw new Error("clientId is required");wt.load(n),e.config.globalProperties.$gAuth=wt,e.provide("Vue3GoogleOauth",vue.readonly(bt))}};const St=function(e){if("object"!==l(e))throw new Error("single-spa-vue requires a configuration object");var t=c(c({},p),e);if(!t.Vue&&!t.createApp)throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");if(!t.appOptions)throw Error("single-spa-vue must be passed opts.appOptions");if(t.appOptions.el&&"string"!=typeof t.appOptions.el&&!(t.appOptions.el instanceof HTMLElement))throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(l(t.appOptions.el)));t.createApp=t.createApp||t.Vue&&t.Vue.createApp;var n={};return{bootstrap:d.bind(null,t,n),mount:f.bind(null,t,n),unmount:m.bind(null,t,n),update:h.bind(null,t,n)}}({createApp:vue.createApp,appOptions:{render(){return vue.h(a,{props:{name:this.name,mountParcel:this.mountParcel,singleSpa:this.singleSpa}})}},handleInstance:e=>{e.use(yt),e.use(Et,{clientId:"706365197587-enedvlgphegpc7sb5c401f4lsmbip4po.apps.googleusercontent.com"})}}),xt=St.bootstrap,Ot=St.mount,kt=St.unmount;export{xt as bootstrap,Ot as mount,kt as unmount};
