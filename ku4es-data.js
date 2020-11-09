!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ku4es_ui_kernel={})}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e(this,t),this.$byteString=n}var r,i,o;return r=t,(i=[{key:"getByteAt",value:function(t){return this.$byteString.charCodeAt(t)}},{key:"getLength",value:function(){return this.$byteString.length}},{key:"getStringAt",value:function(t,e){return this.$byteString.substring(t,t+e)}},{key:"getShortAt",value:function(t,e){var n=this.$byteString,r=n.charCodeAt(t)||0,i=n.charCodeAt(t+1)||0;return e?(r<<8)+i:(i<<8)+r}},{key:"getLongAt",value:function(t,e){var n=this.$byteString,r=n.charCodeAt(t)||0,i=n.charCodeAt(t+1)||0,o=n.charCodeAt(t+2)||0,u=n.charCodeAt(t+3)||0,a=e?(((r<<8)+i<<8)+o<<8)+u:(((u<<8)+o<<8)+i<<8)+r;return a<0?a+4294967296:a}},{key:"getSLongAt",value:function(t,e){var n=this.getLongAt(t,e);return n>2147483647?n-4294967296:n}}])&&n(r.prototype,i),o&&n(r,o),t}();var i=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0});var y=function(){function t(){r(this,t)}return o(t,null,[{key:"isNull",value:function(t){return null===t}},{key:"isEmpty",value:function(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1}},{key:"isUndefined",value:function(t){return void 0===t}},{key:"isZero",value:function(t){return 0===t}},{key:"exists",value:function(e){return!(t.isUndefined(e)||t.isNull(e))}},{key:"isNullOrEmpty",value:function(e){return!t.exists(e)||t.isEmpty(e)}},{key:"isArray",value:function(t){return Array.isArray(t)}},{key:"isBool",value:function(t){return"boolean"==typeof t}},{key:"isTrue",value:function(e){return t.isBool(e)&&!0===e}},{key:"isFalse",value:function(e){return t.isBool(e)&&!1===e}},{key:"isDate",value:function(t){return t instanceof Date}},{key:"isNumber",value:function(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}},{key:"isEven",value:function(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}},{key:"isOdd",value:function(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}},{key:"isString",value:function(t){return"string"==typeof t||t instanceof String}},{key:"isFunction",value:function(t){return t instanceof Function}},{key:"isObject",value:function(e){return t.exists(e)&&"object"===n(e)&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))}},{key:"isObjectLiteral",value:function(e){return t.isObject(e)&&e.constructor==={}.constructor}},{key:"isTruthy",value:function(e){return!t.isFalsy(e)}},{key:"isFalsy",value:function(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)}}]),t}();function d(){var t;return(t="").concat.apply(t,arguments)}function g(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(t,e,n){return t.replace(new RegExp("\\{".concat(n,"\\}"),"g"),e.toString())}),t)}function v(t){return p(m(t))}function p(t){return y.exists(t)&&y.isFunction(t.replace)?t.replace(/^[\s\n]*/,""):t}function m(t){return y.exists(t)&&y.isFunction(t.replace)?t.replace(/[\s\n]*$/,""):t}var k,S=Object.freeze({__proto__:null,build:d,format:g,trim:v,trimStart:p,trimEnd:m,capitalize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()},mask:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_";return t.split("").reduce((function(t,e){return t.replace(new RegExp(n),e)}),e)},unmask:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_",r=new RegExp(n);return t.split("").reduce((function(t,n,i){return!r.test(n)&&r.test(e.charAt(i))?t+n:t}),"")}}),_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r(this,t),this._first=e||"",this._middle=n||"",this._last=i||""}return o(t,[{key:"equals",value:function(t){return y.exists(t)&&t.first===this.first&&t.middle===this.middle&&t.last===this.last}},{key:"toString",value:function(t){var e=this.first.charAt(0),n=this.middle.charAt(0),r=this.last.charAt(0);return y.isNullOrEmpty(t)?this.full:t.replace(/([FfMmLl])/g,"{$1}").replace("{F}",this.first).replace("{M}",this.middle).replace("{L}",this.last).replace("{f}",e).replace("{m}",n).replace("{l}",r)}},{key:"first",get:function(){return this._first}},{key:"middle",get:function(){return this._middle}},{key:"last",get:function(){return this._last}},{key:"full",get:function(){var t=y.isNullOrEmpty(this.middle)?"F L":"F M L";return v(this.toString(t).replace(/\s+/," "))}},{key:"initials",get:function(){var t=y.isNullOrEmpty(this.middle)?"f.l.":"f.m.l.";return v(this.toString(t).replace(/\s{2,}/,""))}}]),t}(),w=function(){function t(e){r(this,t),this._list=e,this._head=0}return o(t,[{key:"isEmpty",get:function(){return this.length<1}},{key:"index",get:function(){return this._head}},{key:"length",get:function(){return this._list.length}},{key:"current",get:function(){return this._list[this._head]}},{key:"next",get:function(){var t=this.length,e=this._head;return this._head=e++<t-1?e:0,this.current}},{key:"prev",get:function(){var t=this.length,e=this._head;return this._head=--e<0?t-1:e,this.current}},{key:"peekNext",get:function(){var t=this._head,e=this.length;return this._list[t+1<e?t+1:0]}},{key:"peekPrev",get:function(){var t=this._head,e=this.length;return this._list[t-1<0?e-1:t-1]}}]),t}(),b=function(){function t(e,n,i){if(r(this,t),n<1||n>12)throw new Error("Invalid month at Assert.DayPoint");if(i<1||i>A(n,e))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(e,n-1,i):new Date,this._day=this._value.getDay(),this._date=i,this._month=n,this._year=e}return o(t,[{key:"add",value:function(t,e,n){function r(t,e,n){for(var r=t,i=e;i--;)r=r[n];return r}var i=Math.abs,o=i(t),u=i(n),a=i(e),s=n<0?"prevDay":"nextDay",c=e<0?"prevMonth":"nextMonth";return r(r(r(this,o,t<0?"prevYear":"nextYear"),a,c),u,s)}},{key:"isBefore",value:function(t){return!(this.isAfter(t)||this.equals(t))}},{key:"isAfter",value:function(t){var e=this._year,n=t.year,r=this._month,i=t.month;return e>n||e===n&&r>i||e===n&&r===i&&this._date>t.date}},{key:"equals",value:function(t){return this._year===t.year&&this._month===t.month&&this._date===t.date}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm/dd/yyyy",e=/y{3,}/i.test(t)?this._year:this.shortYear,n=this._month,r=this._date,i="{0}",o=/m{2}/i.test(t)&&n<10?"0{1}":"{1}",u=/d{2}/i.test(t)&&r<10?"0{2}":"{2}",a=t.replace(/y+/gi,i).replace(/m+/gi,o).replace(/d+/gi,u);return g(a,e,n,r)}},{key:"toDate",value:function(){return this._value}},{key:"toJson",value:function(){return this._value.toJSON()}},{key:"value",get:function(){return this._value}},{key:"day",get:function(){return this._day}},{key:"date",get:function(){return this._date}},{key:"month",get:function(){return this._month}},{key:"year",get:function(){return this._year}},{key:"shortYear",get:function(){var t=this._year.toString();return parseInt(t.substr(t.length-2))}},{key:"isWeekday",get:function(){var t=this._day;return t>0&&t<6}},{key:"isWeekend",get:function(){return!this.isWeekday}},{key:"isLeapYear",get:function(){return x(this._year)}},{key:"nextDay",get:function(){return P(this,1,0,0)}},{key:"prevDay",get:function(){return P(this,-1,0,0)}},{key:"nextMonth",get:function(){return P(this,0,1,0)}},{key:"prevMonth",get:function(){return P(this,0,-1,0)}},{key:"nextYear",get:function(){return P(this,0,0,1)}},{key:"prevYear",get:function(){return P(this,0,0,-1)}},{key:"firstDayOfMonth",get:function(){return new t(this._year,this._month,1)}},{key:"lastDayOfMonth",get:function(){return new t(this._year,this._month,A(this._month,this._year))}}],[{key:"canParse",value:function(t){return!!(y.isString(t)||y.isNumber(t)||y.isDate(t))&&!isNaN(new Date(t).valueOf())}},{key:"parse",value:function(e){if(e instanceof t)return e;var n=y.isString(e)?v(e).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):e;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(n)){var r=n.split("-"),i=f(r,1)[0];r.push(i),r.shift(),n=r.join("/")}var o=new Date(n);if(!y.exists(n)||isNaN(o.valueOf()))throw new Error(g("Cannot parse value= {0}",n));return new t(o.getFullYear(),o.getMonth()+1,o.getDate())}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}},{key:"assumeNow",value:function(e){k=t.parse(e)}},{key:"today",get:function(){return k||t.parse(new Date)}}]),t}();function A(t,e){return 2===t?x(e)?29:28:t<8&&y.isEven(t)||t>7&&y.isOdd(t)?30:31}function x(t){var e=t.toString().split(/\B/);return parseFloat(d(e[e.length-2],e[e.length-1]))%4==0}function P(t,e,n,r){var i=t.month,o=t.year,u=t.date,a=n,s=r,c=u+e,l=i+a,f=o+s;if(u+e>A(i,o)&&(c=1,l=i+a+1),u+e<1){var h=t.prevMonth;c=A(h.month,h.year),l=i+a-1}return l>12&&(l=1,f=o+s+1),l<1&&(l=12,f=o+s-1),new b(f,l,c)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,-e);return Math.round(parseFloat((t*n).toFixed(Math.abs(e))))/n}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=5*Math.pow(10,e-1);return F(t+n,e)}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===t)return 0;var n=5*Math.pow(10,e-1);return F(t-n,e)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t<0?D(t,e):C(t,e)}function N(t){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return 0<e?t(--e,r,n+r):n}(t)}function B(t){for(var e=0,n=1,r=0;t>1;)r=e,e=n,n+=r,t--;return t<1?e:n}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=parseInt(t);return isNaN(n)?e:n}var L=Object.freeze({__proto__:null,round:F,roundUp:D,roundDown:C,roundTowardZero:O,gcd:function t(e,n){return 0===n?Math.abs(e):t(n,e%n)},fib:N,fib2:B,fibArray:function(t){return Array(t).fill(0).map((function(){return N(--t)})).reverse()},fib2Array:function(t){return Array(t).fill(0).map((function(){return B(--t)})).reverse()},tryParseInt:I,tryParseFloat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=parseFloat(t);return isNaN(n)?e:n}}),E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;if(r(this,t),!y.isNumber(e))throw new Error("Money requires valid numeric amount.");var i=O(e);this._cents=/\./.test(e)?parseFloat(e.toString().replace(/\d+\./,".")):0,this._dollars=i,this._currency=n||"$",this._value=e}return o(t,[{key:"add",value:function(e){return M(this,e),new t(this.value+e.value,this.currency)}},{key:"subtract",value:function(e){return M(this,e),new t(this.value-e.value,this.currency)}},{key:"multiply",value:function(e){if(!y.isNumber(e))throw new Error("Invalid factor ".concat(e));return new t(this.value*e,this.currency)}},{key:"divide",value:function(e){if(!y.isNumber(e))throw new Error("Invalid divisor ".concat(e));return new t(this.value/e,this.currency)}},{key:"equals",value:function(t){return this.isOfCurrency(t)&&this.value===t.value}},{key:"isGreaterThan",value:function(t){return M(this,t),this.value>t.value}},{key:"isLessThan",value:function(t){return M(this,t),this.value<t.value}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(F(this.value,e),this.currency)}},{key:"roundDown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(C(this.value,e),this.currency)}},{key:"roundUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(D(this.value,e),this.currency)}},{key:"exchange",value:function(e,n){return new t(this.multiply(e).value,n)}},{key:"isOfCurrency",value:function(t){return this.currency===t.currency}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"d.c2",e=/d(.)c(\d+)/.exec(t),n=f(e,3),r=n[1],i=n[2],o={".":",",",":"."}[r],u=T(this.dollars,o),a=R(this.cents,I(i,2)),s="".concat(this.currency).concat(u).concat(r).concat(a);return this.value<0?"(".concat(s,")"):s}},{key:"cents",get:function(){return this._cents}},{key:"dollars",get:function(){return this._dollars}},{key:"currency",get:function(){return this._currency}},{key:"value",get:function(){return this._value}},{key:"nearestWhole",get:function(){return new t(F(this.value,0),this.currency)}},{key:"nearestDollar",get:function(){return this.nearestWhole}}],[{key:"zero",value:function(e){return new t(0,e)}},{key:"isMoney",value:function(e){return e instanceof t}},{key:"canParse",value:function(e){try{return t.parse(e),!0}catch(t){return!1}}},{key:"parse",value:function(e){if(y.isNumber(e))return new t(e);var n=e;if(/,\d{2}$/.test(e)){var r=e.split(","),i=r.pop(),o=r.join().replace(/\./g,",");n="".concat(o,".").concat(i)}var u=/(\(.*\))|(-)/.test(n),a=u?1:0,s=n.match(/[^\d.,-]/g),c=y.isArray(s)?s[a]:null,l=parseFloat(n.replace(/[^\d.]/g,""));return new t(u?-l:l,c)}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}}]),t}();function M(t,e){if(!t.isOfCurrency(e))throw new Error("Invalid operation on non-conforming currencies. ".concat(t.currency," !== ").concat(e.currency))}function T(t,e){if(0===t)return"0";var n=t.toString().replace(/[^\d]/,"").split(/\B/),r=0;return n.reverse().reduce((function(t,n){return r>0&&!(r%3)&&(t.push(e),r=0),t.push(n),r++,t}),[]).reverse().join("").replace(/[^\d]$/,"")}function R(t,e){var n=t.toString().replace(/[^\d]|0\./g,""),r="0".repeat(e);return"".concat(n).concat(r).slice(0,e)}var j=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r(this,t),!y.isNumber(e)||!y.isNumber(n))throw new Error("Coord requires numeric x and y values");this._x=e,this._y=n}return o(t,[{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"multiply",value:function(e){return new t(this.x*e.x,this.y*e.y)}},{key:"divide",value:function(e){return new t(this.x/e.x,this.y/e.y)}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new t(F(this.x,e),F(this.y,e))}},{key:"toString",value:function(){return"(".concat(this.x,",").concat(this.y,")")}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"value",get:function(){return{x:this.x,y:this.y}}},{key:"half",get:function(){return this.divide(new t(2,2))}},{key:"abs",get:function(){return new t(Math.abs(this.x),Math.abs(this.y))}}],[{key:"canParse",value:function(e){return y.isArray(e)?!(isNaN(e[0])||isNaN(e[1])):y.isObjectLiteral(e)&&"x"in e&&"y"in e?!(isNaN(e.x)||isNaN(e.y)):e instanceof t}},{key:"parse",value:function(e){return y.exists(e)?e instanceof t?e:y.isArray(e)?new t(e[0],e[1]):y.isObjectLiteral(e)&&y.exists(e.x)&&y.exists(e.y)?new t(e.x,e.y):null:null}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}}]),t}(),G=function(t){u(n,j);var e=l(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r(this,n),(t=e.call(this,i,o))._lengthSquared=Math.pow(i,2)+Math.pow(o,2),t._magnitude=Math.sqrt(t._lengthSquared),t._unitNormalX=0===i&&0===o?0:i/t._magnitude,t._unitNormalY=0===i&&0===o?0:o/t._magnitude,t}return o(n,[{key:"equals",value:function(t){return t instanceof n&&this.x===t.x&&this.y===t.y}},{key:"add",value:function(t){return t instanceof n?new n(this.x+t.x,this.y+t.y):null}},{key:"dot",value:function(t){return t instanceof n?this.x*t.x+this.y*t.y:null}},{key:"perpendicularAtTo",value:function(t){if(!(t instanceof n))return null;var e=t.add(this.projectionOfOnto(t).invert);return new n(e.x,e.y)}},{key:"projectionOfOnto",value:function(t){if(!(t instanceof n))return null;var e=t.normal.scale(this.dot(t.normal));return new n(e.x,e.y)}},{key:"scale",value:function(t){return new n(this.x*t,this.y*t)}},{key:"unitNormalDot",value:function(t){return t instanceof n?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null}},{key:"reflect",value:function(t){if(!(t instanceof n))return null;if(t.isZero)return this;var e=t.normal;return this.add(e.scale(2*e.dot(this)).invert)}},{key:"round",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new n(F(this.x,t),F(this.y,t))}},{key:"magnitude",get:function(){return this._magnitude}},{key:"isZero",get:function(){return 0===this.x&&0===this.y}},{key:"normal",get:function(){return new n(this._unitNormalX,this._unitNormalY)}},{key:"invert",get:function(){return new n(-this.x,-this.y)}},{key:"norm",get:function(){return new n(Math.abs(this.x),Math.abs(this.y))}},{key:"perpendicular",get:function(){return new n(-this.y,this.x)}}]),n}(),$=function(t){u(n,j);var e=l(n);function n(t,i){return r(this,n),e.call(this,t,i)}return o(n,[{key:"isAbove",value:function(t){return this.y<t.y}},{key:"isBelow",value:function(t){return this.y>t.y}},{key:"isLeftOf",value:function(t){return this.x<t.x}},{key:"isRightOf",value:function(t){return this.x>t.x}},{key:"distanceFrom",value:function(t){return new G(this.x-t.x,this.y-t.y)}},{key:"distanceTo",value:function(t){return this.distanceFrom(t).invert}}],[{key:"canParse",value:function(t){return t instanceof n||j.canParse(t)}},{key:"parse",value:function(t){if(t instanceof n)return t;var e=j.parse(t);return new n(e.x,e.y)}},{key:"tryParse",value:function(t){return n.canParse(t)?n.parse(t):null}}]),n}(),z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;r(this,t),this.origin=new $(e,n),this.dimensions=new j(i,o),this.diagonal=$.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half}return o(t,[{key:"contains",value:function(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)}},{key:"aspectToFit",value:function(e){var n=this.dimensions,r=e.dimensions,i=r.x,o=r.y,u=n.x,a=n.y;return u>a&&0!==u?(a*=i/u,u=i,a>o&&(u*=(a=o)/n.y)):a>o&&(u*=o/a,a=o),new t(this.origin.x,this.origin.y,u,a)}}]),t}(),q=Object.freeze({__proto__:null,uid:function(){return Math.random().toString().substr(2)},uuid:function(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}}),Y=function(){function t(){if(r(this,t),this.constructor===t)throw new Error("Cannot instantiate abstract class: AbstractSpecification")}return o(t,[{key:"and",value:function(t){return new U(this,t)}},{key:"or",value:function(t){return new W(this,t)}},{key:"xor",value:function(t){return new V(this,t)}},{key:"not",value:function(t){return new Z(this,t)}},{key:"isSatisfiedBy",value:function(){throw new Error("Abstract method must be implemented.")}}]),t}(),U=function(t){u(n,Y);var e=l(n);function n(t,i){var o;return r(this,n),(o=e.call(this))._specificationA=t,o._specificationB=i,o}return o(n,[{key:"isSatisfiedBy",value:function(t){return this._specificationA.isSatisfiedBy(t)&&this._specificationB.isSatisfiedBy(t)}}]),n}(),W=function(t){u(n,Y);var e=l(n);function n(t,i){var o;return r(this,n),(o=e.call(this))._specificationA=t,o._specificationB=i,o}return o(n,[{key:"isSatisfiedBy",value:function(t){return this._specificationA.isSatisfiedBy(t)||this._specificationB.isSatisfiedBy(t)}}]),n}(),V=function(t){u(n,Y);var e=l(n);function n(t,i){var o;return r(this,n),(o=e.call(this))._specificationA=t,o._specificationB=i,o}return o(n,[{key:"isSatisfiedBy",value:function(t){return!this._specificationA.isSatisfiedBy(t)!=!this._specificationB.isSatisfiedBy(t)}}]),n}(),Z=function(t){u(n,Y);var e=l(n);function n(t){var i;return r(this,n),(i=e.call(this))._specification=t,i}return o(n,[{key:"isSatisfiedBy",value:function(t){return!this._specification.isSatisfiedBy(t)}}]),n}(),X=(function(t){u(n,Y);var e=l(n);function n(){return r(this,n),e.apply(this,arguments)}o(n,[{key:"isSatisfiedBy",value:function(){return!0}}])}(),function(t){u(n,Y);var e=l(n);function n(){return r(this,n),e.apply(this,arguments)}o(n,[{key:"isSatisfiedBy",value:function(){return!1}}])}(),function(){function t(){if(r(this,t),this.constructor===t)throw new Error("Cannot instantiate abstract class.")}return o(t,[{key:"execute",value:function(){throw new Error("Abstract method must be implemented.")}}]),t}()),H=Object.freeze({__proto__:null,pattern:function(t){return t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i}),J=function(){function t(e){r(this,t),this._milliseconds=e}return o(t,[{key:"onInterval",value:function(t){return this.clear(),this._didInterval=t,this}},{key:"start",value:function(){var t=this;return this.clear(),this._intervalId=setInterval((function(){t._didInterval()}),this._milliseconds),this}},{key:"clear",value:function(){return clearInterval(this._intervalId),this._intervalId=null,this}},{key:"isRunning",get:function(){return y.exists(this._intervalId)}}]),t}(),K=function(){function t(e){r(this,t),this._milliseconds=e}return o(t,[{key:"onTimeout",value:function(t){return this.clear(),this._didTimeout=t,this}},{key:"start",value:function(){var t=this;return this.clear(),this._timeoutId=setTimeout((function(){t._didTimeout()}),this._milliseconds),this}},{key:"clear",value:function(){return clearTimeout(this._timeoutId),this._timeoutId=null,this}},{key:"isRunning",get:function(){return y.exists(this._timeoutId)}}]),t}();e.AbstractSpecification=Y,e.AbstractStrategy=X,e.Assert=y,e.Coord=j,e.DayPoint=b,e.Interval=J,e.Money=E,e.Name=_,e.Point=$,e.Rectangle=z,e.Rolodex=w,e.Timeout=K,e.Vector=G,e.debounce=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];var a=r&&!n,s=function(){n=null,r||t.apply(void 0,o)};clearTimeout(n),n=setTimeout(s,e),a&&t.apply(void 0,o)}},e.deduplicate=function(t){return t.reduce((function(t,e){return t.includes(e)||t.push(e),t}),[])},e.identity=q,e.math=L,e.nextTick=function(t){return setTimeout(t,0)},e.regex=H,e.string=S,e.wait=function(t){return new Promise((function(e){return setTimeout(e,t)}))}})),o={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},u={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},a={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},s={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"};function c(t,e){if(!function(t,e){return"Exif"===t.getStringAt(e,4)}(t,e))return{};var n=e+6,r=19789===t.getShortAt(n),c=function(t,e,n){return function(t,e,n){return 42===t.getShortAt(e+2,n)||8===t.getLongAt(e+4,n)}(t,e,n)?l(t,e,e+8,s,n):{}}(t,n,r),f=function(t,e,n,r){if(!i.Assert.exists(n))return{};var u=l(t,e,e+n,o,r),s={};for(var c in u)if(Object.prototype.hasOwnProperty.call(u,c)){var f=u[c];if(!i.Assert.exists(f))continue;switch(c){case"FileSource":u[c]=a[c][f];break;case"FlashpixVersion":u[c]=String.fromCharCode(f[0],f[1],f[2],f[3]);break;case"ComponentsConfiguration":var h=a.Components;u[c]=h[f[0]]+h[f[1]]+h[f[2]]+h[f[3]]}s[c]=u[c]}return s}(t,n,c.ExifIFDPointer,r),h=function(t,e,n,r){if(!i.Assert.exists(n))return{};var o=l(t,e,e+n,u,r),a={};for(var s in o)if(Object.prototype.hasOwnProperty.call(o,s)){var c=o[s];if(!i.Assert.exists(c))continue;switch(s){case"GPSVersionID":o[s]="".concat(c[0],".").concat(c[1],".").concat(c[2],".").concat(c[3])}a[s]=o[s]}return a}(t,n,c.GPSInfoIFDPointer,r);return Object.assign({},c,f,h)}function l(t,e,n,r,i){for(var o,u=t.getShortAt(n,i),a={},s=0;s<u;s++)o=n+12*s+2,a[r[t.getShortAt(o,i)]||"UNDEF_Proprietary_data_".concat(n,"_").concat(s)]=f(t,o,e,n,i);return a}function f(t,e,n,r,i){var o,u,a,s,c,l=t.getShortAt(e+2,i),f=t.getLongAt(e+4,i),h=t.getLongAt(e+8,i)+n;switch(l){case 2:return o=f>4?h:e+8,t.getStringAt(o,f-1);case 3:if(1===f)return t.getShortAt(e+8,i);for(o=f>2?h:e+8,s=[],c=0;c<f;c++)s[c]=t.getShortAt(o+2*c,i);return s;case 4:if(1===f)return t.getLongAt(e+8,i);for(s=[],c=0;c<f;c++)s[c]=t.getLongAt(h+4*c,i);return s;case 5:if(1===f)return(u=t.getLongAt(h,i))/(a=t.getLongAt(h+4,i));for(s=[],c=0;c<f;c++)u=t.getLongAt(h+8*c,i),a=t.getLongAt(h+4+8*c,i),s[c]=u/a;return s;case 7:if(1===f)return t.getByteAt(e+8,i);for(o=f>4?h:e+8,s=[],c=0;c<f;c++)s[c]=t.getByteAt(o+c);return s;case 9:if(1===f)return t.getSLongAt(e+8,i);for(s=[],c=0;c<f;c++)s[c]=t.getSLongAt(h+4*c,i);return s;case 10:if(1===f)return t.getSLongAt(h,i)/t.getSLongAt(h+4,i);for(s=[],c=0;c<f;c++)s[c]=t.getSLongAt(h+8*c,i)/t.getSLongAt(h+4+8*c,i);return s;default:return null}}function h(t,e){return 255===t.getByteAt(e)}function y(t){return 225===t}var d={__INVALID_FILE__:"Cannot read EXIF data."};t.BinaryFile=r,t.readExif=function(t){if(!(t instanceof r))throw new Error("EXIF can only read a valid BinaryFile.");try{return function(t){return i.Assert.exists(t)&&255===t.getByteAt(0)&&216===t.getByteAt(1)}(t)?function(t){for(var e=t.getLength(),n=2;n<e;){var r=n+4,i=t.getShortAt(n+2,!0)+2;if(h(t,n)&&y(t.getByteAt(n+1)))return c(t,r);n+=i}}(t)||d:(function(t){i.Assert.exists(t)&&137===t.getByteAt(0)&&80===t.getByteAt(1)&&78===t.getByteAt(2)&&71===t.getByteAt(3)&&13===t.getByteAt(4)&&10===t.getByteAt(5)&&26===t.getByteAt(6)&&t.getByteAt(7)}(t),d)}catch(t){return console.error(t),d}},Object.defineProperty(t,"__esModule",{value:!0})}));
