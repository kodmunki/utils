!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).ku4es_ui_kernel={})}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u,a=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&function(t,e){(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(){r(this,t)}return o(t,null,[{key:"isNull",value:function(t){return null===t}},{key:"isEmpty",value:function(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1}},{key:"isUndefined",value:function(t){return void 0===t}},{key:"isZero",value:function(t){return 0===t}},{key:"exists",value:function(e){return!(t.isUndefined(e)||t.isNull(e))}},{key:"isNullOrEmpty",value:function(e){return!t.exists(e)||t.isEmpty(e)}},{key:"isArray",value:function(t){return Array.isArray(t)}},{key:"isBool",value:function(t){return"boolean"==typeof t}},{key:"isTrue",value:function(e){return t.isBool(e)&&!0===e}},{key:"isFalse",value:function(e){return t.isBool(e)&&!1===e}},{key:"isDate",value:function(t){return t instanceof Date}},{key:"isNumber",value:function(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}},{key:"isEven",value:function(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}},{key:"isOdd",value:function(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}},{key:"isString",value:function(t){return"string"==typeof t||t instanceof String}},{key:"isFunction",value:function(t){return t instanceof Function}},{key:"isObject",value:function(e){return t.exists(e)&&"object"===n(e)&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))}},{key:"isObjectLiteral",value:function(e){return t.isObject(e)&&e.constructor==={}.constructor}},{key:"isTruthy",value:function(e){return!t.isFalsy(e)}},{key:"isFalsy",value:function(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)}}]),t}();function y(){var t;return(t="").concat.apply(t,arguments)}function d(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(t,e,n){return t.replace(new RegExp("\\{".concat(n,"\\}"),"g"),e.toString())}),t)}function v(t){return p(m(t))}function p(t){return f.exists(t)&&f.isFunction(t.replace)?t.replace(/^[\s\n]*/,""):t}function m(t){return f.exists(t)&&f.isFunction(t.replace)?t.replace(/[\s\n]*$/,""):t}var g,k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r(this,t),this._first=e||"",this._middle=n||"",this._last=i||""}return o(t,[{key:"equals",value:function(t){return f.exists(t)&&t.first===this.first&&t.middle===this.middle&&t.last===this.last}},{key:"toString",value:function(t){var e=this.first.charAt(0),n=this.middle.charAt(0),r=this.last.charAt(0);return f.isNullOrEmpty(t)?this.full:t.replace(/([FfMmLl])/g,"{$1}").replace("{F}",this.first).replace("{M}",this.middle).replace("{L}",this.last).replace("{f}",e).replace("{m}",n).replace("{l}",r)}},{key:"first",get:function(){return this._first}},{key:"middle",get:function(){return this._middle}},{key:"last",get:function(){return this._last}},{key:"full",get:function(){var t=f.isNullOrEmpty(this.middle)?"F L":"F M L";return v(this.toString(t).replace(/\s+/," "))}},{key:"initials",get:function(){var t=f.isNullOrEmpty(this.middle)?"f.l.":"f.m.l.";return v(this.toString(t).replace(/\s{2,}/,""))}}]),t}(),w=function(){function t(e){r(this,t),this._list=e,this._head=0}return o(t,[{key:"isEmpty",get:function(){return this.length<1}},{key:"index",get:function(){return this._head}},{key:"length",get:function(){return this._list.length}},{key:"current",get:function(){return this._list[this._head]}},{key:"next",get:function(){var t=this.length,e=this._head;return this._head=e++<t-1?e:0,this.current}},{key:"prev",get:function(){var t=this.length,e=this._head;return this._head=--e<0?t-1:e,this.current}},{key:"peekNext",get:function(){var t=this._head,e=this.length;return this._list[t+1<e?t+1:0]}},{key:"peekPrev",get:function(){var t=this._head,e=this.length;return this._list[t-1<0?e-1:t-1]}}]),t}(),b=function(){function t(e,n,i){if(r(this,t),n<1||n>12)throw new Error("Invalid month at Assert.DayPoint");if(i<1||i>_(n,e))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(e,n-1,i):new Date,this._day=this._value.getDay(),this._date=i,this._month=n,this._year=e}return o(t,[{key:"add",value:function(t,e,n){function r(t,e,n){for(var r=t,i=e;i--;)r=r[n];return r}var i=Math.abs,o=i(t),u=i(n),a=i(e),s=n<0?"prevDay":"nextDay",c=e<0?"prevMonth":"nextMonth";return r(r(r(this,o,t<0?"prevYear":"nextYear"),a,c),u,s)}},{key:"isBefore",value:function(t){return!(this.isAfter(t)||this.equals(t))}},{key:"isAfter",value:function(t){var e=this._year,n=t.year,r=this._month,i=t.month;return e>n||e===n&&r>i||e===n&&r===i&&this._date>t.date}},{key:"equals",value:function(t){return this._year===t.year&&this._month===t.month&&this._date===t.date}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm/dd/yyyy",e=/y{3,}/i.test(t)?this._year:this.shortYear,n=this._month,r=this._date,i="{0}",o=/m{2}/i.test(t)&&n<10?"0{1}":"{1}",u=/d{2}/i.test(t)&&r<10?"0{2}":"{2}",a=t.replace(/y+/gi,i).replace(/m+/gi,o).replace(/d+/gi,u);return d(a,e,n,r)}},{key:"toDate",value:function(){return this._value}},{key:"toJson",value:function(){return this._value.toJSON()}},{key:"value",get:function(){return this._value}},{key:"day",get:function(){return this._day}},{key:"date",get:function(){return this._date}},{key:"month",get:function(){return this._month}},{key:"year",get:function(){return this._year}},{key:"shortYear",get:function(){var t=this._year.toString();return parseInt(t.substr(t.length-2))}},{key:"isWeekday",get:function(){var t=this._day;return t>0&&t<6}},{key:"isWeekend",get:function(){return!this.isWeekday}},{key:"isLeapYear",get:function(){return x(this._year)}},{key:"nextDay",get:function(){return S(this,1,0,0)}},{key:"prevDay",get:function(){return S(this,-1,0,0)}},{key:"nextMonth",get:function(){return S(this,0,1,0)}},{key:"prevMonth",get:function(){return S(this,0,-1,0)}},{key:"nextYear",get:function(){return S(this,0,0,1)}},{key:"prevYear",get:function(){return S(this,0,0,-1)}},{key:"firstDayOfMonth",get:function(){return new t(this._year,this._month,1)}},{key:"lastDayOfMonth",get:function(){return new t(this._year,this._month,_(this._month,this._year))}}],[{key:"canParse",value:function(t){return!!(f.isString(t)||f.isNumber(t)||f.isDate(t))&&!isNaN(new Date(t).valueOf())}},{key:"parse",value:function(e){if(e instanceof t)return e;var n=f.isString(e)?v(e).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):e;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(n)){var r=n.split("-"),i=l(r,1)[0];r.push(i),r.shift(),n=r.join("/")}var o=new Date(n);if(!f.exists(n)||isNaN(o.valueOf()))throw new Error(d("Cannot parse value= {0}",n));return new t(o.getFullYear(),o.getMonth()+1,o.getDate())}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}},{key:"assumeNow",value:function(e){g=t.parse(e)}},{key:"today",get:function(){return g||t.parse(new Date)}}]),t}();function _(t,e){return 2===t?x(e)?29:28:t<8&&f.isEven(t)||t>7&&f.isOdd(t)?30:31}function x(t){var e=t.toString().split(/\B/);return parseFloat(y(e[e.length-2],e[e.length-1]))%4==0}function S(t,e,n,r){var i=t.month,o=t.year,u=t.date,a=n,s=r,c=u+e,l=i+a,h=o+s;if(u+e>_(i,o)&&(c=1,l=i+a+1),u+e<1){var f=t.prevMonth;c=_(f.month,f.year),l=i+a-1}return l>12&&(l=1,h=o+s+1),l<1&&(l=12,h=o+s-1),new b(h,l,c)}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,-e);return Math.round(parseFloat((t*n).toFixed(Math.abs(e))))/n}function K(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=5*Math.pow(10,e-1);return E(t+n,e)}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===t)return 0;var n=5*Math.pow(10,e-1);return E(t-n,e)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t<0?K(t,e):A(t,e)}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=parseInt(t);return isNaN(n)?e:n}var M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;if(r(this,t),!f.isNumber(e))throw new Error("Money requires valid numeric amount.");var i=O(e);this._cents=/\./.test(e)?parseFloat(e.toString().replace(/\d+\./,".")):0,this._dollars=i,this._currency=n||"$",this._value=e}return o(t,[{key:"add",value:function(e){return P(this,e),new t(this.value+e.value,this.currency)}},{key:"subtract",value:function(e){return P(this,e),new t(this.value-e.value,this.currency)}},{key:"multiply",value:function(e){if(!f.isNumber(e))throw new Error("Invalid factor ".concat(e));return new t(this.value*e,this.currency)}},{key:"divide",value:function(e){if(!f.isNumber(e))throw new Error("Invalid divisor ".concat(e));return new t(this.value/e,this.currency)}},{key:"equals",value:function(t){return this.isOfCurrency(t)&&this.value===t.value}},{key:"isGreaterThan",value:function(t){return P(this,t),this.value>t.value}},{key:"isLessThan",value:function(t){return P(this,t),this.value<t.value}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(E(this.value,e),this.currency)}},{key:"roundDown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(A(this.value,e),this.currency)}},{key:"roundUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(K(this.value,e),this.currency)}},{key:"exchange",value:function(e,n){return new t(this.multiply(e).value,n)}},{key:"isOfCurrency",value:function(t){return this.currency===t.currency}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"d.c2",e=/d(.)c(\d+)/.exec(t),n=l(e,3),r=n[1],i=n[2],o={".":",",",":"."}[r],u=T(this.dollars,o),a=F(this.cents,N(i,2)),s="".concat(this.currency).concat(u).concat(r).concat(a);return this.value<0?"(".concat(s,")"):s}},{key:"cents",get:function(){return this._cents}},{key:"dollars",get:function(){return this._dollars}},{key:"currency",get:function(){return this._currency}},{key:"value",get:function(){return this._value}},{key:"nearestWhole",get:function(){return new t(E(this.value,0),this.currency)}},{key:"nearestDollar",get:function(){return this.nearestWhole}}],[{key:"zero",value:function(e){return new t(0,e)}},{key:"isMoney",value:function(e){return e instanceof t}},{key:"canParse",value:function(e){try{return t.parse(e),!0}catch(t){return!1}}},{key:"parse",value:function(e){if(f.isNumber(e))return new t(e);var n=e;if(/,\d{2}$/.test(e)){var r=e.split(","),i=r.pop(),o=r.join().replace(/\./g,",");n="".concat(o,".").concat(i)}var u=/(\(.*\))|(-)/.test(n),a=u?1:0,s=n.match(/[^\d.,-]/g),c=f.isArray(s)?s[a]:null,l=parseFloat(n.replace(/[^\d.]/g,""));return new t(u?-l:l,c)}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}}]),t}();function P(t,e){if(!t.isOfCurrency(e))throw new Error("Invalid operation on non-conforming currencies. ".concat(t.currency," !== ").concat(e.currency))}function T(t,e){if(0===t)return"0";var n=t.toString().replace(/[^\d]/,"").split(/\B/),r=0;return n.reverse().reduce((function(t,n){return r>0&&!(r%3)&&(t.push(e),r=0),t.push(n),r++,t}),[]).reverse().join("").replace(/[^\d]$/,"")}function F(t,e){var n=t.toString().replace(/[^\d]|0\./g,""),r="0".repeat(e);return"".concat(n).concat(r).slice(0,e)}var D=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r(this,t),!f.isNumber(e)||!f.isNumber(n))throw new Error("Coord requires numeric x and y values");this._x=e,this._y=n}return o(t,[{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"multiply",value:function(e){return new t(this.x*e.x,this.y*e.y)}},{key:"divide",value:function(e){return new t(this.x/e.x,this.y/e.y)}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new t(E(this.x,e),E(this.y,e))}},{key:"toString",value:function(){return"(".concat(this.x,",").concat(this.y,")")}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"value",get:function(){return{x:this.x,y:this.y}}},{key:"half",get:function(){return this.divide(new t(2,2))}},{key:"abs",get:function(){return new t(Math.abs(this.x),Math.abs(this.y))}}],[{key:"canParse",value:function(e){return f.isArray(e)?!(isNaN(e[0])||isNaN(e[1])):f.isObjectLiteral(e)&&"x"in e&&"y"in e?!(isNaN(e.x)||isNaN(e.y)):e instanceof t}},{key:"parse",value:function(e){return f.exists(e)?e instanceof t?e:f.isArray(e)?new t(e[0],e[1]):f.isObjectLiteral(e)&&f.exists(e.x)&&f.exists(e.y)?new t(e.x,e.y):null:null}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}}]),t}(),j=function(t){u(n,D);var e=c(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r(this,n),(t=e.call(this,i,o))._lengthSquared=Math.pow(i,2)+Math.pow(o,2),t._magnitude=Math.sqrt(t._lengthSquared),t._unitNormalX=0===i&&0===o?0:i/t._magnitude,t._unitNormalY=0===i&&0===o?0:o/t._magnitude,t}return o(n,[{key:"equals",value:function(t){return t instanceof n&&this.x===t.x&&this.y===t.y}},{key:"add",value:function(t){return t instanceof n?new n(this.x+t.x,this.y+t.y):null}},{key:"dot",value:function(t){return t instanceof n?this.x*t.x+this.y*t.y:null}},{key:"perpendicularAtTo",value:function(t){if(!(t instanceof n))return null;var e=t.add(this.projectionOfOnto(t).invert);return new n(e.x,e.y)}},{key:"projectionOfOnto",value:function(t){if(!(t instanceof n))return null;var e=t.normal.scale(this.dot(t.normal));return new n(e.x,e.y)}},{key:"scale",value:function(t){return new n(this.x*t,this.y*t)}},{key:"unitNormalDot",value:function(t){return t instanceof n?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null}},{key:"reflect",value:function(t){if(!(t instanceof n))return null;if(t.isZero)return this;var e=t.normal;return this.add(e.scale(2*e.dot(this)).invert)}},{key:"round",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new n(E(this.x,t),E(this.y,t))}},{key:"magnitude",get:function(){return this._magnitude}},{key:"isZero",get:function(){return 0===this.x&&0===this.y}},{key:"normal",get:function(){return new n(this._unitNormalX,this._unitNormalY)}},{key:"invert",get:function(){return new n(-this.x,-this.y)}},{key:"norm",get:function(){return new n(Math.abs(this.x),Math.abs(this.y))}},{key:"perpendicular",get:function(){return new n(-this.y,this.x)}}]),n}(),B=function(t){u(n,D);var e=c(n);function n(t,i){return r(this,n),e.call(this,t,i)}return o(n,[{key:"isAbove",value:function(t){return this.y<t.y}},{key:"isBelow",value:function(t){return this.y>t.y}},{key:"isLeftOf",value:function(t){return this.x<t.x}},{key:"isRightOf",value:function(t){return this.x>t.x}},{key:"distanceFrom",value:function(t){return new j(this.x-t.x,this.y-t.y)}},{key:"distanceTo",value:function(t){return this.distanceFrom(t).invert}}],[{key:"canParse",value:function(t){return t instanceof n||D.canParse(t)}},{key:"parse",value:function(t){if(t instanceof n)return t;var e=D.parse(t);return new n(e.x,e.y)}},{key:"tryParse",value:function(t){return n.canParse(t)?n.parse(t):null}}]),n}(),L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;r(this,t),this.origin=new B(e,n),this.dimensions=new D(i,o),this.diagonal=B.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half}return o(t,[{key:"contains",value:function(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)}},{key:"aspectToFit",value:function(e){var n=this.dimensions,r=e.dimensions,i=r.x,o=r.y,u=n.x,a=n.y;return u>a&&0!==u?(a*=i/u,u=i,a>o&&(u*=(a=o)/n.y)):a>o&&(u*=o/a,a=o),new t(this.origin.x,this.origin.y,u,a)}}]),t}(),Y=function(){function t(){if(r(this,t),this.constructor===t)throw new Error("Cannot instantiate abstract class: AbstractSpecification")}return o(t,[{key:"and",value:function(t){return new C(this,t)}},{key:"or",value:function(t){return new R(this,t)}},{key:"xor",value:function(t){return new I(this,t)}},{key:"not",value:function(t){return new $(this,t)}},{key:"isSatisfiedBy",value:function(){throw new Error("Abstract method must be implemented.")}}]),t}(),C=function(t){u(n,Y);var e=c(n);function n(t,i){var o;return r(this,n),(o=e.call(this))._specificationA=t,o._specificationB=i,o}return o(n,[{key:"isSatisfiedBy",value:function(t){return this._specificationA.isSatisfiedBy(t)&&this._specificationB.isSatisfiedBy(t)}}]),n}(),R=function(t){u(n,Y);var e=c(n);function n(t,i){var o;return r(this,n),(o=e.call(this))._specificationA=t,o._specificationB=i,o}return o(n,[{key:"isSatisfiedBy",value:function(t){return this._specificationA.isSatisfiedBy(t)||this._specificationB.isSatisfiedBy(t)}}]),n}(),I=function(t){u(n,Y);var e=c(n);function n(t,i){var o;return r(this,n),(o=e.call(this))._specificationA=t,o._specificationB=i,o}return o(n,[{key:"isSatisfiedBy",value:function(t){return!this._specificationA.isSatisfiedBy(t)!=!this._specificationB.isSatisfiedBy(t)}}]),n}(),$=function(t){u(n,Y);var e=c(n);function n(t){var i;return r(this,n),(i=e.call(this))._specification=t,i}return o(n,[{key:"isSatisfiedBy",value:function(t){return!this._specification.isSatisfiedBy(t)}}]),n}(),U=(function(t){u(n,Y);var e=c(n);function n(){return r(this,n),e.apply(this,arguments)}o(n,[{key:"isSatisfiedBy",value:function(){return!0}}])}(),function(t){u(n,Y);var e=c(n);function n(){return r(this,n),e.apply(this,arguments)}o(n,[{key:"isSatisfiedBy",value:function(){return!1}}])}(),function(){function t(){if(r(this,t),this.constructor===t)throw new Error("Cannot instantiate abstract class.")}return o(t,[{key:"execute",value:function(){throw new Error("Abstract method must be implemented.")}}]),t}()),z=Object.freeze({__proto__:null,pattern:function(t){return t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});e.AbstractSpecification=Y,e.AbstractStrategy=U,e.Assert=f,e.Coord=D,e.DayPoint=b,e.Money=M,e.Name=k,e.Point=B,e.Rectangle=L,e.Rolodex=w,e.Vector=j,e.build=y,e.capitalize=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()},e.debounce=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];var a=r&&!n,s=function(){n=null,r||t.apply(void 0,o)};clearTimeout(n),n=setTimeout(s,e),a&&t.apply(void 0,o)}},e.deduplicate=function(t){return t.reduce((function(t,e){return t.includes(e)||t.push(e),t}),[])},e.format=d,e.gcd=function t(e,n){return 0===n?Math.abs(e):t(n,e%n)},e.nextTick=function(t){return setTimeout(t,0)},e.regex=z,e.round=E,e.roundDown=A,e.roundTowardZero=O,e.roundUp=K,e.trim=v,e.trimEnd=m,e.trimStart=p,e.tryParseFloat=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=parseFloat(t);return isNaN(n)?e:n},e.tryParseInt=N,e.uid=function(){return Math.random().toString().substr(2)},e.uuid=function(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()},e.wait=function(t){return new Promise((function(e){return setTimeout(e,t)}))}}));(u=a)&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")&&u.default;a.AbstractSpecification,a.AbstractStrategy;var s=a.Assert,c=(a.Coord,a.DayPoint,a.Money,a.Name,a.Point),l=(a.Rectangle,a.Rolodex,a.Vector,a.build,a.capitalize,a.debounce,a.deduplicate,a.format,a.gcd,a.nextTick,a.regex,a.round,a.roundDown,a.roundTowardZero,a.roundUp,a.trim,a.trimEnd,a.trimStart,a.tryParseFloat,a.tryParseInt,a.uid,a.uuid,a.wait,function(){function t(){e(this,t)}return r(t,null,[{key:"preventScroll",value:function(){t.position=document.body.style.position,t.top=document.body.style.top,t.left=document.body.style.left,t.width=document.body.style.width,t.height=document.body.style.height,t.documentWidth=document.documentElement.style.width,t.documentHeight=document.documentElement.style.height,t.overflowY=document.documentElement.style.overflowY,t.scrollX=window.scrollX||window.pageXOffset,t.scrollY=window.scrollY||window.pageYOffset;var e=t.scrollbarWidth;document.body.style.position="fixed",document.body.style.left="-".concat(t.scrollX,"px"),document.body.style.top="-".concat(t.scrollY,"px"),document.body.style.width="calc(100vw - ".concat(e,"px - ").concat(window.getComputedStyle(document.body)["padding-left"]," - ").concat(window.getComputedStyle(document.body)["padding-right"],")"),document.body.style.height="calc(100% + 1px)",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=e&&"scroll"}},{key:"resumeScroll",value:function(){document.body.style.position=t.position,document.body.style.top=t.top,document.body.style.left=t.left,document.body.style.width=t.width,document.body.style.height=t.height,document.documentElement.style.width=t.documentWidth,document.documentElement.style.height=t.documentHeight,document.documentElement.style.overflowY=t.overflowY,window.scrollTo(t.scrollX,t.scrollY),t.position=null,t.top=null,t.left=null,t.width=null,t.height=null,t.documentWidth=null,t.documentHeight=null,t.overflowY=null,t.scrollX=null,t.scrollY=null}},{key:"scrollbarWidth",get:function(){return window.innerWidth-document.documentElement.clientWidth}},{key:"isScrollPrevented",get:function(){return s.exists(t.scrollY)}}]),t}()),h=function(){function t(){e(this,t)}return r(t,null,[{key:"mute",value:function(t){return!!s.exists(t)&&(s.isFunction(t.preventDefault)&&t.preventDefault(),s.isFunction(t.stopPropagation)&&t.stopPropagation(),s.isFunction(t.stopImmediatePropagation)&&t.stopImmediatePropagation(),s.exists(t.cancelBubble)&&(t.cancelBubble=!0),!1)}}]),t}(),f=function(t){return new window.FormData(t)},y=function(t){var e={};return f(t).forEach((function(t,n){return e[n]=t})),e},d={read:y,readData:f,readJson:function(t){return JSON.stringify(y(t))}},v=function(){function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(this,t),this.key=n,this.msKey=r||n,this.altKey=i.altKey||!1,this.ctrlKey=i.ctrlKey||!1,this.metaKey=i.metaKey||!1,this.shiftKey=i.shiftKey||!1}return r(t,[{key:"equals",value:function(e){return e instanceof t&&this.altKey===e.altKey&&this.ctrlKey===e.ctrlKey&&this.metaKey===e.metaKey&&this.shiftKey===e.shiftKey&&(this.key===e.key||this.msKey===e.msKey)}},{key:"didFire",value:function(e){var n=e.code,r=e.key,i=e.altKey,o=e.ctrlKey,u=e.metaKey,a=e.shiftKey,s="Dead"===r?n:r;return e&&("ANY"===this.key||this.equals(new t(s,s,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:a})))}},{key:"alt",get:function(){return new t(this.key,this.msKey,{altKey:!0,ctrlKey:this.ctrlKey,metaKey:this.metaKey,shiftKey:this.shiftKey})}},{key:"ctrl",get:function(){return new t(this.key,this.msKey,{altKey:this.altKey,ctrlKey:!0,metaKey:this.metaKey,shiftKey:this.shiftKey})}},{key:"meta",get:function(){return new t(this.key,this.msKey,{altKey:this.altKey,ctrlKey:this.ctrlKey,metaKey:!0,shiftKey:this.shiftKey})}},{key:"shift",get:function(){return new t(this.key,this.msKey,{altKey:this.altKey,ctrlKey:this.ctrlKey,metaKey:this.metaKey,shiftKey:!0})}}],[{key:"press",get:function(){return"keypress"}},{key:"down",get:function(){return"keydown"}},{key:"up",get:function(){return"keyup"}},{key:"any",get:function(){return new t("ANY")}},{key:"esc",get:function(){return new t("Escape","Esc")}},{key:"enter",get:function(){return new t("Enter")}},{key:"space",get:function(){return new t(" ","Spacebar")}},{key:"tab",get:function(){return new t("Tab")}},{key:"left",get:function(){return new t("ArrowLeft","Left")}},{key:"right",get:function(){return new t("ArrowRight","Right")}}]),t}(),p=function(){function t(){e(this,t)}return r(t,null,[{key:"on",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=function(t){return e.didFire(t)?n(t,e):null};return window.addEventListener(t,i,r),{unsubscribe:function(){window.removeEventListener(t,i)}}}},{key:"onKeyPress",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.on(v.press,e,n,r)}},{key:"onKeyDown",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.on(v.down,e,n,r)}},{key:"onKeyUp",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.on(v.up,e,n,r)}}]),t}(),m=function(){function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e(this,t),this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),n.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),n.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),n.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=n,this.tolerance=r}return r(t,[{key:"onLeft",value:function(t){return this.didSwipeLeft=t,this}},{key:"onRight",value:function(t){return this.didSwipeRight=t,this}},{key:"onMove",value:function(t){return this.didMove=t,this}},{key:"destroy",value:function(){var t=this.element;return t.removeEventListener("touchstart",this.didTouchStart,!1),t.removeEventListener("touchend",this.didTouchEnd,!1),t.removeEventListener("touchmove",this.didTouchMove,!1),this}},{key:"didTouchStart",value:function(t){var e=i(t.touches,1)[0];this.touchStartPoint=new c(e.pageX,e.pageY)}},{key:"didTouchEnd",value:function(t){var e=i(t.changedTouches,1)[0],n=this.touchStartPoint,r=new c(e.pageX,e.pageY);r.isLeftOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeLeft(t),r.isRightOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeRight(t)}},{key:"didTouchMove",value:function(t){var e=i(t.touches,1)[0],n=this.touchStartPoint,r=new c(e.pageX,e.pageY);this.didMove({distance:r.distanceFrom(n),up:r.isAbove(n),down:r.isBelow(n),left:r.isLeftOf(n),right:r.isRightOf(n)})}}]),t}();t.Document=l,t.Event=h,t.Key=v,t.Keyboard=p,t.Swipe=m,t.decodeBase64=function(t){if(!s.isString(t))throw new Error("Cannot encode non-string values.");return window.atob(t)},t.decodeUtf8=function(t){if(!s.isString(t))throw new Error("Cannot decode non-string values.");return decodeURIComponent(encodeURIComponent(t))},t.encodeBase64=function(t){if(!s.isString(t))throw new Error("Cannot encode non-string values.");return window.btoa(t)},t.encodeUtf8=function(t){if(!s.isString(t))throw new Error("Cannot encode non-string values.");return decodeURIComponent(encodeURIComponent(t))},t.form=d,Object.defineProperty(t,"__esModule",{value:!0})}));
