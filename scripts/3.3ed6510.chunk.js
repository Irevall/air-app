(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,,,,,,,,,function(t,e,a){var r=a(19);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(6).default)("6b0ff10d",r,!1,{})},function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n});class r{constructor(t){this.id=t.id,this.name=t.name,this.temperature=t.main.temp,this.countryCode=t.sys.country,this.date=new Date(1e3*t.dt),this.description=t.weather[0].description,console.log(t)}}class n{constructor(t){this.id=t.city.id,this.city=t.city.name,this.countryCode=t.city.country,this.date=new Date(1e3*t.list[0].dt),this.readings=t.list.map(t=>new i(t)).filter(t=>t.date.getDate()===this.date.getDate()),console.log(t)}}class i{constructor(t){this.temperature=t.main.temp,this.date=new Date(1e3*t.dt),this.description=t.weather[0].description,console.log(t)}}},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkyLjAwMDAwMDAwMDAwMDA2IiBoZWlnaHQ9IjI1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDx0aXRsZS8+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIyNTQiIHdpZHRoPSIzOTQiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMC40NyIgaWQ9InN2Z18xIiBmaWxsPSIjZTJlMmUyIiBkPSJtMzEwLjIwMjU4OCwxMjguNDQyMjc4YTEwNS4xLDEwNS4xIDAgMCAwIC03LjM0LC0yMy4zM2E2NC40LDY0LjQgMCAwIDAgLTEyLjY2LDMuMzNhMTA1LjY0LDEwNS42NCAwIDAgMCAtMTkuOSwtNDQuNDZhMTA2LDEwNiAwIDAgMCAtMTcwLjI0LDg0LjMyYzAsMi43MiAwLjExLDUuNDEgMC4zMSw4LjA4YTUwLDUwIDAgMCAwIC01OC4yMyw3MS44M2E0OS43OCw0OS43OCAwIDAgMCAyMy45Miw2LjA5bDI0NywwYTY1LDY1IDAgMCAwIDU0Ljg1LC05OS44NWE2NSw2NSAwIDAgMCAtNTcuNzEsLTZsMCwtMC4wMXoiLz4KICA8cGF0aCBpZD0ic3ZnXzIiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBkPSJtODcuNTYyNTg4LDg5LjExMjI3OGMtMC4wNywwLjE5IC0wLjE1LDAuMzcgLTAuMjIsMC41NnMtMC4xNSwwLjM2IC0wLjIyLDAuNTUiLz4KICA8cGF0aCBpZD0ic3ZnXzMiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIGQ9Im0zNzcuOTMyNTg4LDE3Mi43MTIyNzhjMS44NiwtMzMuMDcgLTIyLjkxLC02My4xNiAtNTUuNzIsLTY3Ljc2YTY1LjM5LDY1LjM5IDAgMCAwIC0zMiwzLjVjLTYuNDUsLTM0LjA4IC0zMCwtNjIuOTEgLTYxLjMyLC03Ny40N2MtNDMuODMsLTIxLjY4IC0xMDAuODMsLTQuNjggLTEyOC45OCwzNS41NiIvPgogIDxwYXRoIGlkPSJzdmdfNCIgc3Ryb2tlLXdpZHRoPSIyMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbD0ibm9uZSIgZD0ibTM1Ny43MTI1ODgsMjE2LjU0MjI3OGE2NC42Nyw2NC42NyAwIDAgMCAxMy42NCwtMTguNjIiLz4KICA8cGF0aCBpZD0ic3ZnXzUiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiIGZpbGw9Im5vbmUiIGQ9Im04MC44OTI1ODgsMTE1LjAwMjI3OGExMDcuNzEsMTA3LjcxIDAgMCAwIC0wLjUzLDIxLjM5YTUwLjQ4LDUwLjQ4IDAgMCAwIC01OS4zLDI2LjEzYTQ4LjMyLDQ4LjMyIDAgMCAwIDAsNDMuNzhjMyw1IDYsMTEgMTEsMTVhODMuNDIsODMuNDIgMCAwIDAgMTIsOGExMjAuOSwxMjAuOSAwIDAgMCAxOCw1cTEyOSwxLjUgMjU4LDBjNSwwIDExLC0zIDE1LjkyLC00LjE2Ii8+CiA8L2c+Cjwvc3ZnPg=="},function(t,e,a){"use strict";var r=a(15);a.n(r).a},function(t,e,a){(t.exports=a(5)(!1)).push([t.i,'.app-logo{--logo-font-size: 3rem;display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.app-logo__icon{height:calc(var(--logo-font-size) * 1.5)}.app-logo__name{margin-left:1rem;font-family:"Comfortaa",cursive;font-weight:700;font-size:var(--logo-font-size);margin-bottom:.25rem}',""])},function(t,e,a){var r=a(58);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(6).default)("bdf88f96",r,!1,{})},function(t,e,a){var r=a(60);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(6).default)("b5e4fd16",r,!1,{})},,function(t,e,a){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-logo"},[e("img",{staticClass:"app-logo__icon",attrs:{src:a(17),alt:""}}),this._v(" "),e("span",{staticClass:"app-logo__name"},[this._v("AirApp")])])}];r._withStripped=!0;var i={name:"app-logo"},s=(a(18),a(4)),o=Object(s.a)(i,r,n,!1,null,null,null);o.options.__file="components/app-logo.vue";e.a=o.exports},function(t,e,a){"use strict";var r=a(25);const n=a.n(r).a.create({headers:{Accept:"application/json","Content-Type":"application/json"}});function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.get(t,{params:e,headers:a})}n.interceptors.response.use(async function(t){return t.data},async function(t){throw t});var s=a(16);async function o(t,e){return i("\n    ".concat("https://cors-anywhere.herokuapp.com/","https://maps.googleapis.com/maps/api/place/autocomplete/json?input=").concat(t,"&key=").concat("AIzaSyCRTnX0sQ2JrVShlOGh79mvNQ828jRzNEU","&sessiontoken=").concat(e))}async function c(t){const e=await i("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=").concat("5b4ba78452cab73a2aefa61fd5d8cbd1"));return new s.a(e)}async function p(t){const e=await i("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&APPID=").concat("5b4ba78452cab73a2aefa61fd5d8cbd1"));return new s.b(e)}a.d(e,"a",function(){return o}),a.d(e,"b",function(){return c}),a.d(e,"c",function(){return p})},,,,,,,,,,function(t,e){for(var a=[],r=0;r<256;++r)a[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,n=a;return[n[t[r++]],n[t[r++]],n[t[r++]],n[t[r++]],"-",n[t[r++]],n[t[r++]],"-",n[t[r++]],n[t[r++]],"-",n[t[r++]],n[t[r++]],"-",n[t[r++]],n[t[r++]],n[t[r++]],n[t[r++]],n[t[r++]],n[t[r++]]].join("")}},,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(a(52)),i=r(a(54)),s=function(){return n.default()};s.regex={v4:/^(?:[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u,v5:/^(?:[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12})|(?:0{8}-0{4}-0{4}-0{4}-0{12})$/u},s.is=function(t){return s.regex.v4.test(t)||s.regex.v5.test(t)},s.empty=function(){return"00000000-0000-0000-0000-000000000000"},s.fromString=function(t){return i.default(t,"bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45")},e.default=s},function(t,e,a){var r=a(53),n=a(34);t.exports=function(t,e,a){var i=e&&a||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var s=(t=t||{}).random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var o=0;o<16;++o)e[i+o]=s[o];return e||n(s)}},function(t,e){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var r=new Uint8Array(16);t.exports=function(){return a(r),r}}else{var n=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}},function(t,e,a){var r=a(55),n=a(56);t.exports=r("v5",80,n)},function(t,e,a){var r=a(34);t.exports=function(t,e,a){var n=function(t,n,i,s){var o=i&&s||0;if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=new Array(t.length),a=0;a<t.length;a++)e[a]=t.charCodeAt(a);return e}(t)),"string"==typeof n&&(n=function(t){var e=[];return t.replace(/[a-fA-F0-9]{2}/g,function(t){e.push(parseInt(t,16))}),e}(n)),!Array.isArray(t))throw TypeError("value must be an array of bytes");if(!Array.isArray(n)||16!==n.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var c=a(n.concat(t));if(c[6]=15&c[6]|e,c[8]=63&c[8]|128,i)for(var p=0;p<16;++p)i[o+p]=c[p];return i||r(c)};try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}},function(t,e,a){"use strict";function r(t,e,a,r){switch(t){case 0:return e&a^~e&r;case 1:return e^a^r;case 2:return e&a^e&r^a&r;case 3:return e^a^r}}function n(t,e){return t<<e|t>>>32-e}t.exports=function(t){var e=[1518500249,1859775393,2400959708,3395469782],a=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var i=unescape(encodeURIComponent(t));t=new Array(i.length);for(var s=0;s<i.length;s++)t[s]=i.charCodeAt(s)}t.push(128);var o=t.length/4+2,c=Math.ceil(o/16),p=new Array(c);for(s=0;s<c;s++){p[s]=new Array(16);for(var u=0;u<16;u++)p[s][u]=t[64*s+4*u]<<24|t[64*s+4*u+1]<<16|t[64*s+4*u+2]<<8|t[64*s+4*u+3]}for(p[c-1][14]=8*(t.length-1)/Math.pow(2,32),p[c-1][14]=Math.floor(p[c-1][14]),p[c-1][15]=8*(t.length-1)&4294967295,s=0;s<c;s++){for(var l=new Array(80),h=0;h<16;h++)l[h]=p[s][h];for(h=16;h<80;h++)l[h]=n(l[h-3]^l[h-8]^l[h-14]^l[h-16],1);var m=a[0],f=a[1],g=a[2],d=a[3],w=a[4];for(h=0;h<80;h++){var y=Math.floor(h/20),I=n(m,5)+r(y,f,g,d)+w+e[y]+l[h]>>>0;w=d,d=g,g=n(f,30)>>>0,f=m,m=I}a[0]=a[0]+m>>>0,a[1]=a[1]+f>>>0,a[2]=a[2]+g>>>0,a[3]=a[3]+d>>>0,a[4]=a[4]+w>>>0}return[a[0]>>24&255,a[0]>>16&255,a[0]>>8&255,255&a[0],a[1]>>24&255,a[1]>>16&255,a[1]>>8&255,255&a[1],a[2]>>24&255,a[2]>>16&255,a[2]>>8&255,255&a[2],a[3]>>24&255,a[3]>>16&255,a[3]>>8&255,255&a[3],a[4]>>24&255,a[4]>>16&255,a[4]>>8&255,255&a[4]]}},function(t,e,a){"use strict";var r=a(20);a.n(r).a},function(t,e,a){(t.exports=a(5)(!1)).push([t.i,'.app-current-weather{position:relative;display:grid;grid-template-columns:auto auto 1fr;-webkit-box-align:center;align-items:center;justify-items:end;padding:1.5rem 5rem 1.5rem 3rem;background:rgba(191,191,191,.43)}.app-current-weather__temperature{font-family:"Comfortaa",cursive;font-size:2.5rem;margin-right:2rem}.app-current-weather__info{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.app-current-weather__info-line{display:-webkit-box;display:flex}.app-current-weather__info-header{font-weight:600;margin-right:.5rem}.app-current-weather__more-button{position:absolute;font-weight:600;text-transform:uppercase;cursor:pointer;bottom:.5rem;right:.75rem}',""])},function(t,e,a){"use strict";var r=a(21);a.n(r).a},function(t,e,a){(t.exports=a(5)(!1)).push([t.i,'.app-home{display:grid;grid-row-gap:1rem}.app-home__logo{margin-left:3rem}.app-home__search{display:grid;grid-template-columns:1fr auto}.app-home__input-wrapper{position:relative;overflow:hidden;z-index:1}.app-home__input{height:100%;width:100%;background:rgba(220,220,220,.3);border:2px solid rgba(220,220,220,.75);border-radius:2px;box-sizing:border-box;padding:0 .75rem;color:#fff;font-family:"Open Sans",sans-serif;font-size:1.25rem;outline:none}.app-home__input::-webkit-input-placeholder{color:#cbcfcc}.app-home__input-suggestion{position:absolute;top:0;left:calc(0.75rem + 2px);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;font-size:1.25rem;opacity:.5;white-space:nowrap;z-index:-1}.app-home__search-button{display:-webkit-box;display:flex;background:rgba(220,220,220,.6);padding:1rem 3.5rem;margin-left:.75rem;font-weight:600;text-transform:uppercase;cursor:pointer}',""])},,,function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-home"},[a("app-logo",{staticClass:"app-home__logo"}),t._v(" "),a("div",{staticClass:"app-home__description"},[t._v("\n    Check the weather! Start typing city name to get a suggestion.\n  ")]),t._v(" "),a("div",{staticClass:"app-home__search"},[a("div",{staticClass:"app-home__input-wrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"app-home__input",attrs:{type:"text",placeholder:"Start typing..."},domProps:{value:t.searchQuery},on:{input:[function(e){e.target.composing||(t.searchQuery=e.target.value)},t.searchAutocomplete],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.autocomplete(e)}}}),t._v(" "),t.suggestion?a("span",{staticClass:"app-home__input-suggestion"},[t._v(t._s(t.suggestion))]):t._e()]),t._v(" "),a("span",{staticClass:"app-home__search-button",on:{click:t.checkWeather}},[t._v("Check")])]),t._v(" "),t.searchResult?a("app-current-weather",{attrs:{"search-result":t.searchResult}}):t._e()],1)};r._withStripped=!0;var n=a(23),i=a(24),s=a(51),o=a.n(s),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-current-weather"},[a("span",{staticClass:"app-current-weather__temperature"},[t._v(t._s(t.formattedTemperature)+"°C")]),t._v(" "),a("div",{staticClass:"app-current-weather__info"},[a("div",{staticClass:"app-current-weather__info-line"},[a("span",{staticClass:"app-current-weather__info-header"},[t._v("Date:")]),t._v(" "),a("span",[t._v(t._s(t.formattedDate))])]),t._v(" "),a("div",{staticClass:"app-current-weather__info-line"},[a("span",{staticClass:"app-current-weather__info-header"},[t._v("Location:")]),t._v(" "),a("span",[t._v(t._s(t.searchResult.name+", "+t.searchResult.countryCode))])]),t._v(" "),a("div",{staticClass:"app-current-weather__info-line"},[a("span",{staticClass:"app-current-weather__info-header"},[t._v("Description:")]),t._v(" "),a("span",[t._v(t._s(t.searchResult.description))])])]),t._v(" "),a("div",{staticClass:"app-current-weather__more-button",on:{click:t.getDetails}},[t._v("More")])])};c._withStripped=!0;var p={name:"app-current-weather",props:{searchResult:a(16).a},computed:{formattedTemperature(){return Math.round(this.searchResult.temperature)},formattedDate(){return this.searchResult.date.toLocaleString("pl-PL",{year:"numeric",month:"2-digit",day:"2-digit"})}},methods:{getDetails(){this.$router.push({name:"details",params:{city:this.searchResult.name}})}}},u=(a(57),a(4)),l=Object(u.a)(p,c,[],!1,null,null,null);l.options.__file="components/app-current-weather.vue";var h={name:"app-home",components:{AppCurrentWeather:l.exports,AppLogo:n.a},data:()=>({suggestion:null,searchQuery:"",session:"",searchResult:null}),methods:{async searchAutocomplete(){const t=this.searchQuery;if(this.suggestion&&this.searchQuery&&this.suggestion.startsWith(this.searchQuery))return;if(this.suggestion=null,!this.searchQuery)return;this.session||(this.session=o()());const{predictions:e}=await Object(i.a)(this.searchQuery,this.session),a=e.filter(t=>t.types.includes("locality"));t===this.searchQuery&&(a.length?this.suggestion=a[0].structured_formatting.main_text:this.suggestion=null)},autocomplete(){this.searchQuery=this.suggestion,this.checkWeather()},async checkWeather(){const t=await Object(i.b)(this.searchQuery);console.log(t),this.searchResult=t}}},m=(a(59),Object(u.a)(h,r,[],!1,null,null,null));m.options.__file="components/app-home.vue";e.default=m.exports}]]);