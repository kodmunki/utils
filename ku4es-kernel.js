!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ku4es_kernel={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=function(){function t(){n(this,t)}return i(t,null,[{key:"isNull",value:function(t){return null===t}},{key:"isEmpty",value:function(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1}},{key:"isUndefined",value:function(t){return void 0===t}},{key:"isZero",value:function(t){return 0===t}},{key:"exists",value:function(e){return!(t.isUndefined(e)||t.isNull(e))}},{key:"isNullOrEmpty",value:function(e){return!t.exists(e)||t.isEmpty(e)}},{key:"isArray",value:function(t){return Array.isArray(t)}},{key:"isBool",value:function(t){return"boolean"==typeof t}},{key:"isTrue",value:function(e){return t.isBool(e)&&!0===e}},{key:"isFalse",value:function(e){return t.isBool(e)&&!1===e}},{key:"isDate",value:function(t){return t instanceof Date}},{key:"isNumber",value:function(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}},{key:"isEven",value:function(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}},{key:"isOdd",value:function(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}},{key:"isString",value:function(t){return"string"==typeof t||t instanceof String}},{key:"isFunction",value:function(t){return t instanceof Function}},{key:"isObject",value:function(n){return t.exists(n)&&"object"===e(n)&&!(t.isBool(n)||t.isNumber(n)||t.isDate(n)||t.isArray(n)||t.isString(n)||t.isFunction(n))}},{key:"isObjectLiteral",value:function(e){return t.isObject(e)&&e.constructor==={}.constructor}},{key:"isTruthy",value:function(e){return!t.isFalsy(e)}},{key:"isFalsy",value:function(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)}}]),t}();function y(){var t;return(t="").concat.apply(t,arguments)}function v(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(t,e,n){return t.replace(new RegExp("\\{".concat(n,"\\}"),"g"),e.toString())}),t)}function d(t){return p(g(t))}function p(t){return h.exists(t)&&h.isFunction(t.replace)?t.replace(/^[\s\n]*/,""):t}function g(t){return h.exists(t)&&h.isFunction(t.replace)?t.replace(/[\s\n]*$/,""):t}var k,m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n(this,t),this._first=e||"",this._middle=r||"",this._last=i||""}return i(t,[{key:"equals",value:function(t){return h.exists(t)&&t.first===this.first&&t.middle===this.middle&&t.last===this.last}},{key:"toString",value:function(t){var e=this.first.charAt(0),n=this.middle.charAt(0),r=this.last.charAt(0);return h.isNullOrEmpty(t)?this.full:t.replace(/([FfMmLl])/g,"{$1}").replace("{F}",this.first).replace("{M}",this.middle).replace("{L}",this.last).replace("{f}",e).replace("{m}",n).replace("{l}",r)}},{key:"first",get:function(){return this._first}},{key:"middle",get:function(){return this._middle}},{key:"last",get:function(){return this._last}},{key:"full",get:function(){var t=h.isNullOrEmpty(this.middle)?"F L":"F M L";return d(this.toString(t).replace(/\s+/," "))}},{key:"initials",get:function(){var t=h.isNullOrEmpty(this.middle)?"f.l.":"f.m.l.";return d(this.toString(t).replace(/\s{2,}/,""))}}]),t}(),_=function(){function t(e){n(this,t),this._list=e,this._head=0}return i(t,[{key:"isEmpty",get:function(){return this.length<1}},{key:"index",get:function(){return this._head}},{key:"length",get:function(){return this._list.length}},{key:"current",get:function(){return this._list[this._head]}},{key:"next",get:function(){var t=this.length,e=this._head;return this._head=e++<t-1?e:0,this.current}},{key:"prev",get:function(){var t=this.length,e=this._head;return this._head=--e<0?t-1:e,this.current}},{key:"peekNext",get:function(){var t=this._head,e=this.length;return this._list[t+1<e?t+1:0]}},{key:"peekPrev",get:function(){var t=this._head,e=this.length;return this._list[t-1<0?e-1:t-1]}}]),t}(),w=function(){function t(e,r,i){if(n(this,t),r<1||r>12)throw new Error("Invalid month at Assert.DayPoint");if(i<1||i>b(r,e))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(e,r-1,i):new Date,this._day=this._value.getDay(),this._date=i,this._month=r,this._year=e}return i(t,[{key:"add",value:function(t,e,n){function r(t,e,n){for(var r=t,i=e;i--;)r=r[n];return r}var i=Math.abs,u=i(t),a=i(n),o=i(e),s=n<0?"prevDay":"nextDay",c=e<0?"prevMonth":"nextMonth";return r(r(r(this,u,t<0?"prevYear":"nextYear"),o,c),a,s)}},{key:"isBefore",value:function(t){return!(this.isAfter(t)||this.equals(t))}},{key:"isAfter",value:function(t){var e=this._year,n=t.year,r=this._month,i=t.month;return e>n||(e===n&&r>i||e===n&&r===i&&this._date>t.date)}},{key:"equals",value:function(t){return this._year===t.year&&this._month===t.month&&this._date===t.date}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm/dd/yyyy",e=/y{3,}/i.test(t)?this._year:this.shortYear,n=this._month,r=this._date,i="{0}",u=/m{2}/i.test(t)&&n<10?"0{1}":"{1}",a=/d{2}/i.test(t)&&r<10?"0{2}":"{2}",o=t.replace(/y+/gi,i).replace(/m+/gi,u).replace(/d+/gi,a);return v(o,e,n,r)}},{key:"toDate",value:function(){return this._value}},{key:"toJson",value:function(){return this._value.toJSON()}},{key:"value",get:function(){return this._value}},{key:"day",get:function(){return this._day}},{key:"date",get:function(){return this._date}},{key:"month",get:function(){return this._month}},{key:"year",get:function(){return this._year}},{key:"shortYear",get:function(){var t=this._year.toString();return parseInt(t.substr(t.length-2))}},{key:"isWeekday",get:function(){var t=this._day;return t>0&&t<6}},{key:"isWeekend",get:function(){return!this.isWeekday}},{key:"isLeapYear",get:function(){return x(this._year)}},{key:"nextDay",get:function(){return S(this,1,0,0)}},{key:"prevDay",get:function(){return S(this,-1,0,0)}},{key:"nextMonth",get:function(){return S(this,0,1,0)}},{key:"prevMonth",get:function(){return S(this,0,-1,0)}},{key:"nextYear",get:function(){return S(this,0,0,1)}},{key:"prevYear",get:function(){return S(this,0,0,-1)}},{key:"firstDayOfMonth",get:function(){return new t(this._year,this._month,1)}},{key:"lastDayOfMonth",get:function(){return new t(this._year,this._month,b(this._month,this._year))}}],[{key:"canParse",value:function(t){return!!(h.isString(t)||h.isNumber(t)||h.isDate(t))&&!isNaN(new Date(t).valueOf())}},{key:"parse",value:function(e){if(e instanceof t)return e;var n=h.isString(e)?d(e).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):e;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(n)){var r=n.split("-"),i=l(r,1)[0];r.push(i),r.shift(),n=r.join("/")}var u=new Date(n);if(!h.exists(n)||isNaN(u.valueOf()))throw new Error(v("Cannot parse value= {0}",n));return new t(u.getFullYear(),u.getMonth()+1,u.getDate())}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}},{key:"assumeNow",value:function(e){k=t.parse(e)}},{key:"today",get:function(){return k||t.parse(new Date)}}]),t}();function b(t,e){return 2===t?x(e)?29:28:t<8&&h.isEven(t)||t>7&&h.isOdd(t)?30:31}function x(t){var e=t.toString().split(/\B/);return parseFloat(y(e[e.length-2],e[e.length-1]))%4==0}function S(t,e,n,r){var i=t.month,u=t.year,a=t.date,o=n,s=r,c=a+e,l=i+o,f=u+s;if(a+e>b(i,u)&&(c=1,l=i+o+1),a+e<1){var h=t.prevMonth;c=b(h.month,h.year),l=i+o-1}return l>12&&(l=1,f=u+s+1),l<1&&(l=12,f=u+s-1),new w(f,l,c)}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,-e);return Math.round(parseFloat((t*n).toFixed(Math.abs(e))))/n}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=5*Math.pow(10,e-1);return A(t+n,e)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===t)return 0;var n=5*Math.pow(10,e-1);return A(t-n,e)}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t<0?N(t,e):O(t,e)}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=parseInt(t);return isNaN(n)?e:n}var B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;if(n(this,t),!h.isNumber(e))throw new Error("Money requires valid numeric amount.");var i=M(e);this._cents=/\./.test(e)?parseFloat(e.toString().replace(/\d+\./,".")):0,this._dollars=i,this._currency=r||"$",this._value=e}return i(t,[{key:"add",value:function(e){return P(this,e),new t(this.value+e.value,this.currency)}},{key:"subtract",value:function(e){return P(this,e),new t(this.value-e.value,this.currency)}},{key:"multiply",value:function(e){if(!h.isNumber(e))throw new Error("Invalid factor ".concat(e));return new t(this.value*e,this.currency)}},{key:"divide",value:function(e){if(!h.isNumber(e))throw new Error("Invalid divisor ".concat(e));return new t(this.value/e,this.currency)}},{key:"equals",value:function(t){return this.isOfCurrency(t)&&this.value===t.value}},{key:"isGreaterThan",value:function(t){return P(this,t),this.value>t.value}},{key:"isLessThan",value:function(t){return P(this,t),this.value<t.value}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(A(this.value,e),this.currency)}},{key:"roundDown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(O(this.value,e),this.currency)}},{key:"roundUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-2;return new t(N(this.value,e),this.currency)}},{key:"exchange",value:function(e,n){return new t(this.multiply(e).value,n)}},{key:"isOfCurrency",value:function(t){return this.currency===t.currency}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"d.c2",e=/d(.)c(\d+)/.exec(t),n=l(e,3),r=n[1],i=n[2],u={".":",",",":"."}[r],a=j(this.dollars,u),o=D(this.cents,E(i,2)),s="".concat(this.currency).concat(a).concat(r).concat(o);return this.value<0?"(".concat(s,")"):s}},{key:"cents",get:function(){return this._cents}},{key:"dollars",get:function(){return this._dollars}},{key:"currency",get:function(){return this._currency}},{key:"value",get:function(){return this._value}},{key:"nearestWhole",get:function(){return new t(A(this.value,0),this.currency)}},{key:"nearestDollar",get:function(){return this.nearestWhole}}],[{key:"zero",value:function(e){return new t(0,e)}},{key:"isMoney",value:function(e){return e instanceof t}},{key:"canParse",value:function(e){try{return t.parse(e),!0}catch(t){return!1}}},{key:"parse",value:function(e){if(h.isNumber(e))return new t(e);var n=e;if(/,\d{2}$/.test(e)){var r=e.split(","),i=r.pop(),u=r.join().replace(/\./g,",");n="".concat(u,".").concat(i)}var a=/(\(.*\))|(-)/.test(n),o=a?1:0,s=n.match(/[^\d.,-]/g),c=h.isArray(s)?s[o]:null,l=parseFloat(n.replace(/[^\d.]/g,""));return new t(a?-l:l,c)}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}}]),t}();function P(t,e){if(!t.isOfCurrency(e))throw new Error("Invalid operation on non-conforming currencies. ".concat(t.currency," !== ").concat(e.currency))}function j(t,e){if(0===t)return"0";var n=t.toString().replace(/[^\d]/,"").split(/\B/),r=0;return n.reverse().reduce((function(t,n){return r>0&&!(r%3)&&(t.push(e),r=0),t.push(n),r++,t}),[]).reverse().join("").replace(/[^\d]$/,"")}function D(t,e){var n=t.toString().replace(/[^\d]|0\./g,""),r="0".repeat(e);return"".concat(n).concat(r).slice(0,e)}var F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n(this,t),!h.isNumber(e)||!h.isNumber(r))throw new Error("Coord requires numeric x and y values");this._x=e,this._y=r}return i(t,[{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"multiply",value:function(e){return new t(this.x*e.x,this.y*e.y)}},{key:"divide",value:function(e){return new t(this.x/e.x,this.y/e.y)}},{key:"round",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new t(A(this.x,e),A(this.y,e))}},{key:"toString",value:function(){return"(".concat(this.x,",").concat(this.y,")")}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"value",get:function(){return{x:this.x,y:this.y}}},{key:"half",get:function(){return this.divide(new t(2,2))}},{key:"abs",get:function(){return new t(Math.abs(this.x),Math.abs(this.y))}}],[{key:"canParse",value:function(e){return h.isArray(e)?!(isNaN(e[0])||isNaN(e[1])):h.isObjectLiteral(e)&&"x"in e&&"y"in e?!(isNaN(e.x)||isNaN(e.y)):e instanceof t}},{key:"parse",value:function(e){return h.exists(e)?e instanceof t?e:h.isArray(e)?new t(e[0],e[1]):h.isObjectLiteral(e)&&h.exists(e.x)&&h.exists(e.y)?new t(e.x,e.y):null:null}},{key:"tryParse",value:function(e){return t.canParse(e)?t.parse(e):null}}]),t}(),T=function(t){u(r,t);var e=c(r);function r(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n(this,r),(t=e.call(this,i,u))._lengthSquared=Math.pow(i,2)+Math.pow(u,2),t._magnitude=Math.sqrt(t._lengthSquared),t._unitNormalX=0===i&&0===u?0:i/t._magnitude,t._unitNormalY=0===i&&0===u?0:u/t._magnitude,t}return i(r,[{key:"equals",value:function(t){return t instanceof r&&this.x===t.x&&this.y===t.y}},{key:"add",value:function(t){return t instanceof r?new r(this.x+t.x,this.y+t.y):null}},{key:"dot",value:function(t){return t instanceof r?this.x*t.x+this.y*t.y:null}},{key:"perpendicularAtTo",value:function(t){if(!(t instanceof r))return null;var e=t.add(this.projectionOfOnto(t).invert);return new r(e.x,e.y)}},{key:"projectionOfOnto",value:function(t){if(!(t instanceof r))return null;var e=t.normal.scale(this.dot(t.normal));return new r(e.x,e.y)}},{key:"scale",value:function(t){return new r(this.x*t,this.y*t)}},{key:"unitNormalDot",value:function(t){return t instanceof r?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null}},{key:"reflect",value:function(t){if(!(t instanceof r))return null;if(t.isZero)return this;var e=t.normal;return this.add(e.scale(2*e.dot(this)).invert)}},{key:"round",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new r(A(this.x,t),A(this.y,t))}},{key:"magnitude",get:function(){return this._magnitude}},{key:"isZero",get:function(){return 0===this.x&&0===this.y}},{key:"normal",get:function(){return new r(this._unitNormalX,this._unitNormalY)}},{key:"invert",get:function(){return new r(-this.x,-this.y)}},{key:"norm",get:function(){return new r(Math.abs(this.x),Math.abs(this.y))}},{key:"perpendicular",get:function(){return new r(-this.y,this.x)}}]),r}(F),$=function(t){u(r,t);var e=c(r);function r(t,i){return n(this,r),e.call(this,t,i)}return i(r,[{key:"isAbove",value:function(t){return this.y<t.y}},{key:"isBelow",value:function(t){return this.y>t.y}},{key:"isLeftOf",value:function(t){return this.x<t.x}},{key:"isRightOf",value:function(t){return this.x>t.x}},{key:"distanceFrom",value:function(t){return new T(this.x-t.x,this.y-t.y)}},{key:"distanceTo",value:function(t){return this.distanceFrom(t).invert}}],[{key:"canParse",value:function(t){return t instanceof r||F.canParse(t)}},{key:"parse",value:function(t){if(t instanceof r)return t;var e=F.parse(t);return new r(e.x,e.y)}},{key:"tryParse",value:function(t){return r.canParse(t)?r.parse(t):null}}]),r}(F),I=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this.origin=new $(e,r),this.dimensions=new F(i,u),this.diagonal=$.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half}return i(t,[{key:"contains",value:function(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)}},{key:"aspectToFit",value:function(e){var n=this.dimensions,r=e.dimensions,i=r.x,u=r.y,a=n.x,o=n.y;return a>o&&0!==a?(o*=i/a,a=i,o>u&&(a*=(o=u)/n.y)):o>u&&(a*=u/o,o=u),new t(this.origin.x,this.origin.y,a,o)}}]),t}();var z=function(){function t(){if(n(this,t),this.constructor===t)throw new Error("Cannot instantiate abstract class: AbstractSpecification")}return i(t,[{key:"and",value:function(t){return new R(this,t)}},{key:"or",value:function(t){return new C(this,t)}},{key:"xor",value:function(t){return new L(this,t)}},{key:"not",value:function(t){return new q(this,t)}},{key:"isSatisfiedBy",value:function(){throw new Error("Abstract method must be implemented.")}}]),t}(),R=function(t){u(r,t);var e=c(r);function r(t,i){var u;return n(this,r),(u=e.call(this))._specificationA=t,u._specificationB=i,u}return i(r,[{key:"isSatisfiedBy",value:function(t){return this._specificationA.isSatisfiedBy(t)&&this._specificationB.isSatisfiedBy(t)}}]),r}(z),C=function(t){u(r,t);var e=c(r);function r(t,i){var u;return n(this,r),(u=e.call(this))._specificationA=t,u._specificationB=i,u}return i(r,[{key:"isSatisfiedBy",value:function(t){return this._specificationA.isSatisfiedBy(t)||this._specificationB.isSatisfiedBy(t)}}]),r}(z),L=function(t){u(r,t);var e=c(r);function r(t,i){var u;return n(this,r),(u=e.call(this))._specificationA=t,u._specificationB=i,u}return i(r,[{key:"isSatisfiedBy",value:function(t){return!this._specificationA.isSatisfiedBy(t)!=!this._specificationB.isSatisfiedBy(t)}}]),r}(z),q=function(t){u(r,t);var e=c(r);function r(t){var i;return n(this,r),(i=e.call(this))._specification=t,i}return i(r,[{key:"isSatisfiedBy",value:function(t){return!this._specification.isSatisfiedBy(t)}}]),r}(z),Y=(function(t){u(r,t);var e=c(r);function r(){return n(this,r),e.apply(this,arguments)}i(r,[{key:"isSatisfiedBy",value:function(){return!0}}])}(z),function(t){u(r,t);var e=c(r);function r(){return n(this,r),e.apply(this,arguments)}i(r,[{key:"isSatisfiedBy",value:function(){return!1}}])}(z),function(){function t(){if(n(this,t),this.constructor===t)throw new Error("Cannot instantiate abstract class.")}return i(t,[{key:"execute",value:function(){throw new Error("Abstract method must be implemented.")}}]),t}()),Z=Object.freeze({__proto__:null,pattern:function(t){return t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i}),U=function(){function t(e){n(this,t),this._milliseconds=e}return i(t,[{key:"onTimeout",value:function(t){return this._didTimeout=t,this}},{key:"start",value:function(){var t=this;return this._timeoutId||(this._timeoutId=setTimeout((function(){t._didTimeout(),t._timeoutId=null}),this._milliseconds)),this}},{key:"clear",value:function(){return this._timeoutId&&(clearTimeout(this._timeoutId),this._timeoutId=null),this}},{key:"isRunning",get:function(){return!!this._timeoutId}}]),t}();t.AbstractSpecification=z,t.AbstractStrategy=Y,t.Assert=h,t.Coord=F,t.DayPoint=w,t.Money=B,t.Name=m,t.Point=$,t.Rectangle=I,t.Rolodex=_,t.Timeout=U,t.Vector=T,t.build=y,t.capitalize=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()},t.debounce=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var i=arguments.length,u=new Array(i),a=0;a<i;a++)u[a]=arguments[a];var o=r&&!n,s=function(){n=null,r||t.apply(void 0,u)};clearTimeout(n),n=setTimeout(s,e),o&&t.apply(void 0,u)}},t.deduplicate=function(t){return t.reduce((function(t,e){return t.includes(e)||t.push(e),t}),[])},t.format=v,t.gcd=function t(e,n){return 0===n?Math.abs(e):t(n,e%n)},t.mask=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_";return t.split("").reduce((function(t,e){return t.replace(new RegExp(n),e)}),e)},t.nextTick=function(t){return setTimeout(t,0)},t.regex=Z,t.round=A,t.roundDown=O,t.roundTowardZero=M,t.roundUp=N,t.trim=d,t.trimEnd=g,t.trimStart=p,t.tryParseFloat=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=parseFloat(t);return isNaN(n)?e:n},t.tryParseInt=E,t.uid=function(){return Math.random().toString().substr(2)},t.unmask=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_",r=new RegExp(n);return t.split("").reduce((function(t,n,i){return!r.test(n)&&r.test(e.charAt(i))?t+n:t}),"")},t.uuid=function(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()},t.wait=function(t){return new Promise((function(e){return setTimeout(e,t)}))},Object.defineProperty(t,"__esModule",{value:!0})}));
