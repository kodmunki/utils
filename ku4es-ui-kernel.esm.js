class t{static isNull(t){return null===t}static isEmpty(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1}static isUndefined(t){return void 0===t}static isZero(t){return 0===t}static exists(e){return!(t.isUndefined(e)||t.isNull(e))}static isNullOrEmpty(e){return!t.exists(e)||t.isEmpty(e)}static isArray(t){return Array.isArray(t)}static isBool(t){return"boolean"==typeof t}static isTrue(e){return t.isBool(e)&&!0===e}static isFalse(e){return t.isBool(e)&&!1===e}static isDate(t){return t instanceof Date}static isNumber(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}static isEven(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}static isOdd(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}static isString(t){return"string"==typeof t||t instanceof String}static isFunction(t){return t instanceof Function}static isObject(e){return t.exists(e)&&"object"==typeof e&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))}static isObjectLiteral(e){return t.isObject(e)&&e.constructor==={}.constructor}static isTruthy(e){return!t.isFalsy(e)}static isFalsy(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)}}function e(t,e=0){const n=Math.pow(10,-e);return Math.round(parseFloat((t*n).toFixed(Math.abs(e))))/n}class n{constructor(e=0,n=0){if(!t.isNumber(e)||!t.isNumber(n))throw new Error("Coord requires numeric x and y values");this.x=e,this.y=n}abs(){return new n(Math.abs(this.x),Math.abs(this.y))}add(t){return new n(this.x+t.x,this.y+t.y)}divide(t){return new n(this.x/t.x,this.y/t.y)}equals(t){return this.x===t.x&&this.y===t.y}multiply(t){return new n(this.x*t.x,this.y*t.y)}subtract(t){return new n(this.x-t.x,this.y-t.y)}round(t=0){return new n(e(this.x,t),e(this.y,t))}half(){return this.divide(new n(2,2))}value(){return{x:this.x,y:this.y}}toString(){return`(${this.x},${this.y})`}static canParse(e){return t.isArray(e)?!(isNaN(e[0])||isNaN(e[1])):t.isObjectLiteral(e)&&"x"in e&&"y"in e?!(isNaN(e.x)||isNaN(e.y)):e instanceof n}static parse(e){return t.exists(e)?e instanceof n?e:t.isArray(e)?new n(e[0],e[1]):t.isObjectLiteral(e)&&t.exists(e.x)&&t.exists(e.y)?new n(e.x,e.y):null:null}static tryParse(t){return n.canParse(t)?n.parse(t):null}}class i extends n{constructor(t=0,e=0){super(t,e),this.lengthSquared=Math.pow(t,2)+Math.pow(e,2),this.magnitude=Math.sqrt(this.lengthSquared),this.unitNormalX=0===t&&0===e?0:t/this.magnitude,this.unitNormalY=0===t&&0===e?0:e/this.magnitude}isZero(){return 0===this.x&&0===this.y}equals(t){return t instanceof i&&this.x===t.x&&this.y===t.y}normal(){return new i(this.unitNormalX,this.unitNormalY)}invert(){return new i(-this.x,-this.y)}norm(){return new i(Math.abs(this.x),Math.abs(this.y))}perpendicular(){return new i(-this.y,this.x)}add(t){return t instanceof i?new i(this.x+t.x,this.y+t.y):null}dot(t){return t instanceof i?this.x*t.x+this.y*t.y:null}perpendicularAtTo(t){if(!(t instanceof i))return null;const e=t.add(this.projectionOfOnto(t).invert());return new i(e.x,e.y)}projectionOfOnto(t){if(!(t instanceof i))return null;const e=t.normal().scale(this.dot(t.normal()));return new i(e.x,e.y)}scale(t){return new i(this.x*t,this.y*t)}unitNormalDot(t){return t instanceof i?this.normal().x*t.normal().x+this.normal().y*t.normal().y:null}reflect(t){if(!(t instanceof i))return null;if(t.isZero())return this;const e=t.normal();return this.add(e.scale(2*e.dot(this)).invert())}round(t=0){return new i(e(this.x,t),e(this.y,t))}}class s extends n{constructor(t,e){super(t,e)}isAbove(t){return this.y<t.y}isBelow(t){return this.y>t.y}isLeftOf(t){return this.x<t.x}isRightOf(t){return this.x>t.x}distanceFrom(t){return new i(this.x-t.x,this.y-t.y)}distanceTo(t){return this.distanceFrom(t).invert()}static canParse(t){return t instanceof s||n.canParse(t)}static parse(t){if(t instanceof s)return t;const e=n.parse(t);return new s(e.x,e.y)}static tryParse(t){return s.canParse(t)?s.parse(t):null}}Object.freeze({__proto__:null,alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});const r={};class o{static mute(e){return!!t.exists(e)&&(t.isFunction(e.preventDefault)&&e.preventDefault(),t.isFunction(e.stopPropagation)&&e.stopPropagation(),t.isFunction(e.stopImmediatePropagation)&&e.stopImmediatePropagation(),t.exists(e.cancelBubble)&&(e.cancelBubble=!0),!1)}static add(t,e,n,i){const s=Math.random().toString().substr(2);return r[s]={element:t,event:e,callback:n,options:i},t.addEventListener(e,n,i),s}static remove(t){const{element:e,event:n,callback:i,options:s}=r[t];e.removeEventListener(n,i,s)}}class a{static get scrollbarWidth(){return window.innerWidth-document.documentElement.clientWidth}static get isScrollPrevented(){return t.exists(a.scrollY)}static preventScroll(){a.position=document.body.style.position,a.top=document.body.style.top,a.left=document.body.style.left,a.width=document.body.style.width,a.height=document.body.style.height,a.documentWidth=document.documentElement.style.width,a.documentHeight=document.documentElement.style.height,a.overflowY=document.documentElement.style.overflowY,a.scrollX=window.scrollX||window.pageXOffset,a.scrollY=window.scrollY||window.pageYOffset;const{scrollbarWidth:t}=a;document.body.style.position="fixed",document.body.style.left=`-${a.scrollX}px`,document.body.style.top=`-${a.scrollY}px`,document.body.style.width=`calc(100vw - ${t}px)`,document.body.style.height="calc(100% + 1px)",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=t&&"scroll"}static resumeScroll(){document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,document.body.style.width=a.width,document.body.style.height=a.height,document.documentElement.style.width=a.documentWidth,document.documentElement.style.height=a.documentHeight,document.documentElement.style.overflowY=a.overflowY,window.scrollTo(a.scrollX,a.scrollY),a.position=null,a.top=null,a.left=null,a.width=null,a.height=null,a.documentWidth=null,a.documentHeight=null,a.overflowY=null,a.scrollX=null,a.scrollY=null}static onClick(t,e){return o.add(document,"click",t,e)}static onKeyUp(t,e){return o.add(document,"keyup",t,e)}static removeEvent(t){o.remove(t)}}class c{static onClick(t,e){return o.add(window,"click",t,e)}static onKeyUp(t,e){return o.add(window,"keyup",t,e)}static removeEvent(t){o.remove(t)}}class u{constructor(t,e){this.key=t,this.msKey=e||t}equals(t){return t instanceof u&&(this.key===t.key||this.msKey===t.msKey)}didFire(t){const{code:e,key:n}=t,i="Dead"===n?e:n;return t&&(this.equals(new u(i))||"ANY"===this.key)}static get press(){return"keypress"}static get down(){return"keydown"}static get up(){return"keyup"}static get any(){return new u("ANY")}static get esc(){return new u("Escape","Esc")}static get enter(){return new u("Enter")}static get space(){return new u(" ","Spacebar")}static get tab(){return new u("Tab")}static get left(){return new u("ArrowLeft","Left")}static get right(){return new u("ArrowRight","Right")}}class d{static on(t,e,n,i=!1){const s=t=>e.didFire(t)?n(t,e):null;return window.addEventListener(t,s,i),{unsubscribe:()=>{window.removeEventListener(t,s)}}}static onKeyPress(t,e,n=!1){return d.on(u.press,t,e,n)}static onKeyDown(t,e,n=!1){return d.on(u.down,t,e,n)}static onKeyUp(t,e,n=!1){return d.on(u.up,t,e,n)}}class l{constructor(t,e=0){this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),t.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),t.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),t.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=t,this.tolerance=e}onLeft(t){return this.didSwipeLeft=t,this}onRight(t){return this.didSwipeRight=t,this}onMove(t){return this.didMove=t,this}destroy(){const{element:t}=this;return t.removeEventListener("touchstart",this.didTouchStart,!1),t.removeEventListener("touchend",this.didTouchEnd,!1),t.removeEventListener("touchmove",this.didTouchMove,!1),this}didTouchStart({touches:[t]}){this.touchStartPoint=new s(t.pageX,t.pageY)}didTouchEnd(t){const[e]=t.changedTouches,{touchStartPoint:n}=this,i=new s(e.pageX,e.pageY);i.isLeftOf(n)&&Math.abs(i.distanceFrom(n).x)>this.tolerance&&this.didSwipeLeft(t),i.isRightOf(n)&&Math.abs(i.distanceFrom(n).x)>this.tolerance&&this.didSwipeRight(t)}didTouchMove(t){const[e]=t.touches,{touchStartPoint:n}=this,i=new s(e.pageX,e.pageY);this.didMove({distance:i.distanceFrom(n),up:i.isAbove(n),down:i.isBelow(n),left:i.isLeftOf(n),right:i.isRightOf(n)})}}function h(e){if(!t.isString(e))throw new Error("Cannot encode non-string values.");return window.btoa(e)}function y(e){if(!t.isString(e))throw new Error("Cannot encode non-string values.");return window.atob(e)}function m(e){if(!t.isString(e))throw new Error("Cannot encode non-string values.");return decodeURIComponent(encodeURIComponent(e))}function w(e){if(!t.isString(e))throw new Error("Cannot decode non-string values.");return decodeURIComponent(encodeURIComponent(e))}export{a as Document,o as Event,u as Key,d as Keyboard,l as Swipe,c as Window,y as decodeBase64,w as decodeUtf8,h as encodeBase64,m as encodeUtf8};