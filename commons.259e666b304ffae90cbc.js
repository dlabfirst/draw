webpackJsonp(["commons"],{104:function(t,e,n){var r=n(147);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},105:function(t,e,n){var r=n(73),o=n(272),a=n(273),i=n(274),c=n(275),u=n(276);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=c,s.prototype.set=u,t.exports=s},106:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},107:function(t,e,n){var r=n(285),o=n(156),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,c=i?function(t){return null==t?[]:(t=Object(t),r(i(t),function(e){return a.call(t,e)}))}:o;t.exports=c},108:function(t,e,n){var r=n(80),o=n(56);t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},109:function(t,e,n){var r=n(38),o=n(52),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||i.test(t)||!a.test(t)||null!=e&&t in Object(e)}},110:function(t,e){t.exports=function(t){return t}},111:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
`;e.a=o},112:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
  display: flex;
  align-items: center;

  height: 19px;
  margin: -1px -1px -1px -1px;
  border: #aaa solid 1px;

  text-align: center;
  text-decoration: none;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;

  @media (max-width: 999px) {
    height: 13px;
    font-family: Roboto, sans-serif;
    font-size: 10px;
  }
`;e.a=o},113:function(t,e,n){"use strict";var r=n(1),o=n(594),a=n(161);const i=Object(r["a"])(o["a"])`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 2px;
    background-size: 12px;
    padding-left: 16px;
  }
`,c=Object(r["a"])(i)`
  ${({country:t})=>t&&`\n    background-image: url('${Object(a.a)(t)}');\n  `}
`;e.a=c},114:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(47),c=n(596);const u=a["a"].div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`;e.a=class extends r.PureComponent{render(){const{maxTeams:t,currentPotNum:e,groups:n,possibleGroups:r,airborneTeams:a,groupColors:s}=this.props;return o.a.createElement(u,{numGroups:n.length},n&&n.map((u,l)=>{const p=Object(i.a)(l);let f;return s&&(f=s&&s[~~(l/n.length*s.length)]),o.a.createElement(c.a,{key:p,maxTeams:t,groupLetter:p,teams:u,potNum:e,possible:null!==r&&r.includes(l),airborneTeams:a,background:f})}))}}},115:function(t,e,n){var r=n(144)(Object.getPrototypeOf,Object);t.exports=r},116:function(t,e,n){var r=n(153);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},117:function(t,e,n){t.exports=function(){return new Worker(n.p+"ac663ceb501c655b936e.worker.js")}},118:function(t,e,n){t.exports=function(){return new Worker(n.p+"c384ba794b333e29bbfe.worker.js")}},147:function(t,e,n){var r=n(45),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},151:function(t,e,n){var r=n(98),o=n(278),a=n(279);function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},152:function(t,e){t.exports=function(t,e){return t.has(e)}},153:function(t,e,n){var r=n(40).Uint8Array;t.exports=r},154:function(t,e,n){var r=n(155),o=n(107),a=n(51);t.exports=function(t){return r(t,a,o)}},155:function(t,e,n){var r=n(106),o=n(38);t.exports=function(t,e,n){var a=e(t);return o(t)?a:r(a,n(t))}},156:function(t,e){t.exports=function(){return[]}},162:function(t,e,n){"use strict";e.a=(t=>"ru"===t.country?t=>"ua"===t.country:"ua"===t.country?t=>"ru"===t.country:t=>!1)},163:function(t,e,n){var r=n(579),o=n(164),a=n(587),i=n(592),c=a(function(t,e){return i(t)?r(t,o(e,1,i,!0)):[]});t.exports=c},164:function(t,e,n){var r=n(106),o=n(586);t.exports=function t(e,n,a,i,c){var u=-1,s=e.length;for(a||(a=o),c||(c=[]);++u<s;){var l=e[u];n>0&&a(l)?n>1?t(l,n-1,a,i,c):r(c,l):i||(c[c.length]=l)}return c}},165:function(t,e,n){var r=n(588),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,c=o(a.length-e,0),u=Array(c);++i<c;)u[i]=a[e+i];i=-1;for(var s=Array(e+1);++i<e;)s[i]=a[i];return s[e]=n(u),r(t,this,s)}}},166:function(t,e,n){var r=n(589),o=n(591)(r);t.exports=o},167:function(t,e,n){"use strict";var r=n(1),o=n(168);const a=Object(r["a"])(o["a"])`
  ${t=>t.depleted&&"\n    filter: grayscale(0.5);\n    opacity: 0.4;\n  "}
  ${t=>t.highlighted&&"\n    color: #f70;\n  "}
`;e.a=a},168:function(t,e,n){"use strict";var r=n(1),o=n(112);const a=Object(r["a"])(o["a"])`
  justify-content: center;
  font-weight: 600;
  background-color: ${t=>t.background};
  color: ${t=>t.color};
`;e.a=a},169:function(t,e,n){"use strict";var r=n(1),o=n(113);const a=Object(r["a"])(o["a"])`
  ${t=>t.selected&&"color: blue;"}
  ${t=>t.picked&&"\n    filter: grayscale(0.5);\n    opacity: 0.4;\n  "}
`;e.a=a},170:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */

  width: 50px;
  height: 50px;

  margin: 2px;
  padding: 10px;

  font-size: ${t=>t.selected?.8:0}em;
  font-family: 'Arial Narrow', 'Ubuntu Condensed', sans-serif;
  font-weight: ${t=>t.selected?"bold":""};
  text-align: center;
  text-overflow: ellipsis;
  color: ${t=>t.selected?"white":""};

  background: ${t=>t.selected?"":"radial-gradient(#004, #002, #002)"};
  border-radius: 100%;
  cursor: ${t=>t.noHover?"not-allowed":"pointer"};
  user-select: none;

  &:hover {
    ${({noHover:t})=>!t&&"background: radial-gradient(#ccf, #ccf)"};
  }
  @media (max-width: 999px) {
    flex-flow: row wrap;
    & > * {
      flex: 1;
      flex-basis: 22%;
    }

    width: 18px;
    height: 18px;

    font-size: ${t=>t.selected?8:0}px;
  }
`;e.a=o},171:function(t,e,n){"use strict";var r=n(43),o=(n.n(r),n(162));e.a=(([t,e],n,a)=>{function i(a,c){const u=n[c],s=u[0],l=Object(o.a)(s),p=t[a];if(p.country===s.country||p.group===s.group||l(p))return!1;t.splice(a,1),u.push(p);const f=++c===n.length||function(n,o){const a=n[o],c=r(t.length);return e.some((t,n)=>{const r=e.splice(n,1)[0];a.push(r);const u=c.some(t=>i(t,o));return a.pop(),e.splice(n,0,r),u})}(n,c);return u.pop(),t.splice(a,0,p),f}return r(t.length).filter(t=>i(t,a))})},172:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(601),c=n(82);const u=Object(a["a"])(c["a"])`
  width: 340px;
  align-self: center;
  max-width: initial;
`;e.a=(({currentPotNum:t,matchups:e,airborneTeams:n})=>o.a.createElement(u,null,e&&e.map((e,r)=>o.a.createElement(i.a,{index:r,teams:e,potNum:t,airborneTeams:n}))))},173:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
  font-width: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  user-select: none;
`;e.a=o},174:function(t,e,n){var r=n(64),o=n(603),a=n(624),i=n(80),c=n(63),u=n(627),s=n(629),l=n(178),p=s(function(t,e){var n={};if(null==t)return n;var s=!1;e=r(e,function(e){return e=i(e,t),s||(s=e.length>1),e}),c(t,l(t),n),s&&(n=o(n,7,u));for(var p=e.length;p--;)a(n,e[p]);return n});t.exports=p},175:function(t,e,n){var r=n(104),o=n(68),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var i=t[e];a.call(t,e)&&o(i,n)&&(void 0!==n||e in t)||r(t,e,n)}},176:function(t,e,n){var r=n(142),o=n(607),a=n(69);t.exports=function(t){return a(t)?r(t,!0):o(t)}},177:function(t,e,n){var r=n(106),o=n(115),a=n(107),i=n(156),c=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,a(t)),t=o(t);return e}:i;t.exports=c},178:function(t,e,n){var r=n(155),o=n(177),a=n(176);t.exports=function(t){return r(t,a,o)}},272:function(t,e,n){var r=n(73);t.exports=function(){this.__data__=new r,this.size=0}},273:function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},274:function(t,e){t.exports=function(t){return this.__data__.get(t)}},275:function(t,e){t.exports=function(t){return this.__data__.has(t)}},276:function(t,e,n){var r=n(73),o=n(99),a=n(98),i=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var c=n.__data__;if(!o||c.length<i-1)return c.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(c)}return n.set(t,e),this.size=n.size,this}},278:function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this}},279:function(t,e){t.exports=function(t){return this.__data__.has(t)}},285:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}},286:function(t,e,n){var r=n(45)(n(40),"DataView");t.exports=r},287:function(t,e,n){var r=n(45)(n(40),"Promise");t.exports=r},288:function(t,e,n){var r=n(45)(n(40),"Set");t.exports=r},289:function(t,e,n){var r=n(45)(n(40),"WeakMap");t.exports=r},293:function(t,e,n){var r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=n(294)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,function(t,n,r,a){e.push(r?a.replace(o,"$1"):n||t)}),e});t.exports=a},294:function(t,e,n){var r=n(71),o=500;t.exports=function(t){var e=r(t,function(t){return n.size===o&&n.clear(),t}),n=e.cache;return e}},46:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);const o=r["a"].div`
  display: flex;
  margin: auto;
  width: 1000px;
  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;e.default=o},47:function(t,e,n){"use strict";e.a=(t=>String.fromCharCode(65+t))},56:function(t,e,n){var r=n(52),o=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},57:function(t,e,n){"use strict";var r=n(67),o=(n.n(r),n(577));const a=2,i=2,c=o["a"]`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`,u=o["a"]`
  color: initial !important;
  position: fixed !important;
  border: initial !important;
  user-select: none !important;
`,s=document.createElement("div");function l(t,{left:e,top:n}){const r=e+a,o=n+i;t.style.transform=`translate3d(${r}px, ${o}px, 0px)`}s.classList.add(c),document.body.insertBefore(s,document.getElementById("app")),e.a=((t,e,n)=>{const o=function(t){const{width:e,fontFamily:n}=getComputedStyle(t),r=t.cloneNode(!0);r.classList.add(u);const{style:o}=r;return o.width=e,o.fontFamily=n,r.textContent=t.textContent,l(r,t.getBoundingClientRect()),r}(t);s.appendChild(o);const a=e.getBoundingClientRect();return o.style.transition=`transform ${n}ms ease-in-out`,l(o,a),new Promise(t=>{o.addEventListener("transitionend",e=>{t(),r.firefox?setTimeout(()=>{s.removeChild(o)},0):s.removeChild(o)})})})},577:function(t,e,n){"use strict";var r=n(578);n.n(r);let o;e.a=((t,...e)=>{o||(o=document.createElement("style"),document.head.appendChild(o));const n=(()=>`styled-element-${Math.random().toString(36).slice(2)}`)(),a=((t,...e)=>t.reduce((t,n,o)=>`${t}${n}${r(e[o])?"":e[o]}`,""))(t,...e);return o.textContent+=`.${n}{${a}}`,n})},578:function(t,e){t.exports=function(t){return null==t}},579:function(t,e,n){var r=n(151),o=n(580),a=n(585),i=n(64),c=n(77),u=n(152),s=200;t.exports=function(t,e,n,l){var p=-1,f=o,d=!0,m=t.length,x=[],b=e.length;if(!m)return x;n&&(e=i(e,c(n))),l?(f=a,d=!1):e.length>=s&&(f=u,d=!1,e=new r(e));t:for(;++p<m;){var h=t[p],v=null==n?h:n(h);if(h=l||0!==h?h:0,d&&v==v){for(var g=b;g--;)if(e[g]===v)continue t;x.push(h)}else f(e,v,l)||x.push(h)}return x}},58:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(163),c=(n.n(i),n(593)),u=n(595);const s="rgba(0, 0, 0, 0.75)",l="#fff",p=a["a"].div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  justify-content: center;
  & > * {
    flex: 1;
    flex-basis: 22%;
    ${t=>t.limitWidth?"max-width: 160px":""};

    @media (max-width: 999px) {
      max-width: initial;
    }
  }
`;e.a=class extends r.PureComponent{render(){const{initialPots:t,pots:e,selectedTeams:n,currentPotNum:r,split:a}=this.props;return o.a.createElement(p,{limitWidth:!a},t&&t.map((p,f)=>{const d=a?u.a:c.a,m=f===r,x=i(t[f],e[f],n||[]);return o.a.createElement(d,{key:p[0].id,potNum:f,isCurrent:m,teams:p,pickedTeams:x,selectedTeams:n,depleted:!p||x.length===p.length,background:s,color:l})}))}}},580:function(t,e,n){var r=n(581);t.exports=function(t,e){return!(null==t||!t.length)&&r(t,e,0)>-1}},581:function(t,e,n){var r=n(582),o=n(583),a=n(584);t.exports=function(t,e,n){return e==e?a(t,e,n):r(t,o,n)}},582:function(t,e){t.exports=function(t,e,n,r){for(var o=t.length,a=n+(r?1:-1);r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}},583:function(t,e){t.exports=function(t){return t!=t}},584:function(t,e){t.exports=function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}},585:function(t,e){t.exports=function(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}},586:function(t,e,n){var r=n(48),o=n(100),a=n(38),i=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(i&&t&&t[i])}},587:function(t,e,n){var r=n(110),o=n(165),a=n(166);t.exports=function(t,e){return a(o(t,e,r),t+"")}},588:function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},589:function(t,e,n){var r=n(590),o=n(147),a=n(110),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:a;t.exports=i},59:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  margin: 0px 5px 10px 5px;
`;e.a=o},590:function(t,e){t.exports=function(t){return function(){return t}}},591:function(t,e){var n=800,r=16,o=Date.now;t.exports=function(t){var e=0,a=0;return function(){var i=o(),c=r-(i-a);if(a=i,c>0){if(++e>=n)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},592:function(t,e,n){var r=n(69),o=n(41);t.exports=function(t){return o(t)&&r(t)}},593:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(82),c=n(111),u=n(167),s=n(169);const l=Object(a["a"])(i["a"])`
  transform: box-shadow 1s linear;
  ${t=>t.highlighted&&"\n  "}
`;e.a=(({isCurrent:t,potNum:e,teams:n,pickedTeams:r,selectedTeams:a,depleted:i,background:p,color:f})=>o.a.createElement(l,{highlighted:t},o.a.createElement(u.a,{highlighted:t,depleted:i,background:p,color:f},"Pot ",e+1),o.a.createElement(c.a,null,n&&n.map(t=>{const{name:e,country:n,shortName:i,pairing:c}=t;return o.a.createElement(s.a,{key:t.id,"data-cellid":t.id,title:c&&`paired with ${c.name}`,selected:a&&a.includes(t),picked:r.includes(t),country:n},i||e)}))))},594:function(t,e,n){"use strict";var r=n(1),o=n(112);const a=Object(r["a"])(o["a"])`
  padding-left: 3px;
  padding-right: 3px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 999px) {
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, sans-serif;
  }
`;e.a=a},595:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(43),c=(n.n(i),n(82)),u=n(111),s=n(167),l=n(169);const p=Object(a["a"])(c["a"])`
  transform: box-shadow 1s linear;
  ${t=>t.highlighted&&"\n  "}
`,f=a["a"].div`
  display: flex;
  border: none;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: -1px;
  &:last-child {
    margin-bottom: 0px;
  }
`,d=Object(a["a"])(l["a"])`
  width: 50%;
  margin-right: 0px;
`;e.a=(({isCurrent:t,potNum:e,teams:n,pickedTeams:r,selectedTeams:a,depleted:c,background:l,color:m})=>o.a.createElement(p,{highlighted:t},o.a.createElement(s.a,{highlighted:t,depleted:c,background:l,color:m},"Pot ",e+1),o.a.createElement(u.a,null,i(n.length/2).map(t=>{const e=[n[2*t],n[2*t+1]];return o.a.createElement(f,{key:t},e.map(t=>{const{name:e,country:n,shortName:i,pairing:c}=t;return o.a.createElement(d,{key:t.id,"data-cellid":t.id,title:c&&`paired with ${c.name}`,selected:a&&a.includes(t),picked:r.includes(t),country:n},i||e)}))}))))},596:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(163),i=(n.n(a),n(43)),c=(n.n(i),n(82)),u=n(168),s=n(111),l=n(597);e.a=(({maxTeams:t,groupLetter:e,teams:n,potNum:r,possible:p,airborneTeams:f,background:d,color:m})=>{const x=a(n,f);return o.a.createElement(c.a,null,o.a.createElement(u.a,{background:d,color:m},"Group ",e),o.a.createElement(s.a,null,x.map((t,e)=>o.a.createElement(l.a,{country:t.country,picked:!0},t.shortName||t.name)),i(x.length,t).map(t=>o.a.createElement(l.a,{possible:t===r&&p,"data-cellid":`${e}${t}`}))))})},597:function(t,e,n){"use strict";var r=n(1),o=n(113);const a=r["b"]`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,i=r["b"]`
  from {
    background-color: #ff8;
  }
  to {}
`,c=Object(r["a"])(o["a"])`
  ${t=>t.possible&&`\n    background-color: rgba(255, 255, 255, 0.9);\n    animation: ${a} 1s ease;\n    box-shadow: 0 0 5px #6af;\n  `}
  ${t=>t.picked&&`\n    animation: ${i} 5s normal forwards;\n  `}
`;e.a=c},599:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(43),c=(n.n(i),n(47)),u=n(600);const s=a["a"].div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;e.a=(({numGroups:t,possibleGroups:e})=>{const n=t>>1;return o.a.createElement(s,null,i(t).map(t=>{const r=Object(c.a)(t);return o.a.createElement(u.a,{key:r,color:t<n?"red":"blue",possible:e.includes(t)},r)}))})},60:function(t,e,n){"use strict";var r=n(1);e.a=r["a"].div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    align-items: center;
  }
`},600:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  margin: 2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  font-size: 18px;

  ${t=>t.possible?`\n    color: ${t.color};\n  `:"\n    color: #000;\n    border-color: rgba(0,0,0,0);\n    filter: opacity(0.25);\n  "}
`;e.a=o},601:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(112),c=n(602);const u=Object(a["a"])(i["a"])`
  display: flex;
`,s=a["a"].div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  height: 19px;
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;
  color: #444;
  :before {
    content: "v";
  }
`,l=Object(a["a"])(c["a"])`
  border-right: 1px solid rgba(0, 0, 0, 0);
`,p=Object(a["a"])(c["a"])`
  border-left: 1px solid rgba(0, 0, 0, 0);
`;e.a=(({index:t,teams:e,potNum:n,airborneTeams:r})=>{const[a,i]=e||[],c=a&&!r.includes(a),f=i&&!r.includes(i);return o.a.createElement(u,null,o.a.createElement(l,{country:c&&a.country,picked:c,"data-cellid":`${t}ru`},c&&(a.shortName||a.name)),o.a.createElement(s,null),o.a.createElement(p,{country:f&&i.country,picked:f,"data-cellid":`${t}gw`},f&&(i.shortName||i.name)))})},602:function(t,e,n){"use strict";var r=n(1),o=n(113);const a=r["b"]`
  from {
    background-color: white;
    box-shadow: 0 0 20px #bcd;
  }
  to {}
`,i=r["b"]`
  from {
    background-color: #ff8;
  }
  to {}
`,c=Object(r["a"])(o["a"])`
  width: 150px;
  ${t=>t.possible&&`\n    background-color: rgba(255, 255, 255, 0.9);\n    animation: ${a} 1s ease;\n    box-shadow: 0 0 5px #bcd;\n  `}
  ${t=>t.picked&&`\n    animation: ${i} 5s normal forwards;\n  `}
`;e.a=c},603:function(t,e,n){var r=n(105),o=n(604),a=n(175),i=n(605),c=n(606),u=n(609),s=n(140),l=n(610),p=n(611),f=n(154),d=n(178),m=n(79),x=n(612),b=n(613),h=n(618),v=n(38),g=n(101),y=n(620),w=n(44),j=n(622),k=n(51),_=1,E=2,O=4,$="[object Arguments]",A="[object Function]",C="[object GeneratorFunction]",P="[object Object]",S={};S[$]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[P]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S["[object Error]"]=S[A]=S["[object WeakMap]"]=!1,t.exports=function t(e,n,T,N,z,M){var B,G=n&_,I=n&E,U=n&O;if(T&&(B=z?T(e,N,z,M):T(e)),void 0!==B)return B;if(!w(e))return e;var D=v(e);if(D){if(B=x(e),!G)return s(e,B)}else{var F=m(e),R=F==A||F==C;if(g(e))return u(e,G);if(F==P||F==$||R&&!z){if(B=I||R?{}:h(e),!G)return I?p(e,c(B,e)):l(e,i(B,e))}else{if(!S[F])return z?e:{};B=b(e,F,G)}}M||(M=new r);var W=M.get(e);if(W)return W;if(M.set(e,B),j(e))return e.forEach(function(r){B.add(t(r,n,T,r,e,M))}),B;if(y(e))return e.forEach(function(r,o){B.set(o,t(r,n,T,o,e,M))}),B;var L=U?I?d:f:I?keysIn:k,V=D?void 0:L(e);return o(V||e,function(r,o){V&&(r=e[o=r]),a(B,o,t(r,n,T,o,e,M))}),B}},604:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},605:function(t,e,n){var r=n(63),o=n(51);t.exports=function(t,e){return t&&r(e,o(e),t)}},606:function(t,e,n){var r=n(63),o=n(176);t.exports=function(t,e){return t&&r(e,o(e),t)}},607:function(t,e,n){var r=n(44),o=n(103),a=n(608),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=o(t),n=[];for(var c in t)("constructor"!=c||!e&&i.call(t,c))&&n.push(c);return n}},608:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},609:function(t,e,n){(function(t){var r=n(40),o="object"==typeof e&&e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o?r.Buffer:void 0,c=i?i.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=c?c(n):new t.constructor(n);return t.copy(r),r}}).call(e,n(76)(t))},61:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(170);const c=a["a"].div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`,u=Object(a["a"])(i["a"])`
  background: ${({selected:t,notSelected:e})=>t?"#004":e?"#ddd":"radial-gradient(#fff, #004)"};
`;e.a=class extends r.PureComponent{constructor(){super(...arguments),this.onBallPick=(t=>{const{pot:e,onPick:n}=this.props,r=t.target;n(e.findIndex(t=>t.id===r.dataset.teamid),e)})}render(){const{forceNoSelect:t,calculating:e,completed:n,pot:r,selectedTeam:a}=this.props,i=t||e||a;return o.a.createElement(c,null,!n&&r&&r.map((e,n)=>o.a.createElement(u,{key:e.id,"data-teamid":e.id,selected:e===a,notSelected:t||a&&e!==a,noHover:i,onClick:!i&&this.onBallPick},e.shortName||e.name)))}}},610:function(t,e,n){var r=n(63),o=n(107);t.exports=function(t,e){return r(t,o(t),e)}},611:function(t,e,n){var r=n(63),o=n(177);t.exports=function(t,e){return r(t,o(t),e)}},612:function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}},613:function(t,e,n){var r=n(116),o=n(614),a=n(615),i=n(616),c=n(617),u="[object Boolean]",s="[object Date]",l="[object Map]",p="[object Number]",f="[object RegExp]",d="[object Set]",m="[object String]",x="[object Symbol]",b="[object ArrayBuffer]",h="[object DataView]",v="[object Float32Array]",g="[object Float64Array]",y="[object Int8Array]",w="[object Int16Array]",j="[object Int32Array]",k="[object Uint8Array]",_="[object Uint8ClampedArray]",E="[object Uint16Array]",O="[object Uint32Array]";t.exports=function(t,e,n){var $=t.constructor;switch(e){case b:return r(t);case u:case s:return new $(+t);case h:return o(t,n);case v:case g:case y:case w:case j:case k:case _:case E:case O:return c(t,n);case l:return new $;case p:case m:return new $(t);case f:return a(t);case d:return new $;case x:return i(t)}}},614:function(t,e,n){var r=n(116);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}},615:function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e}},616:function(t,e,n){var r=n(48),o=r?r.prototype:void 0,a=o?o.valueOf:void 0;t.exports=function(t){return a?Object(a.call(t)):{}}},617:function(t,e,n){var r=n(116);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},618:function(t,e,n){var r=n(619),o=n(115),a=n(103);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:r(o(t))}},619:function(t,e,n){var r=n(44),o=Object.create,a=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=a},62:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(132),c=n(133),u=n(47),s=n(599);const l="https://github.com/inker/draw/issues/14",p=a["a"].div`
  width: 100%;
  font-size: 1.25em;
  line-height: 150%;
  vertical-align: middle;

  margin-top: 30px;
  margin-bottom: 30px;

  user-select: none;

  @media (max-width: 999px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`,f=a["a"].div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,d=a["a"].span`
  display: inline-block;
`,m=a["a"].strong`
  font-weight: 600;
`,x=a["a"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;e.a=class extends r.PureComponent{constructor(){super(...arguments),this.state={lastSelected:null}}static getDerivedStateFromProps(t){return t.completed?{lastSelected:null}:t.selectedTeam?{lastSelected:t.selectedTeam}:null}render(){const{long:t,calculating:e,completed:n,selectedTeam:r,pickedGroup:a,possibleGroups:b,numGroups:h,reset:v}=this.props,g=this.state.lastSelected||r;return o.a.createElement(p,null,e?o.a.createElement(f,null,o.a.createElement("div",null,"Calculation is taking too long."),o.a.createElement("div",null,"And ",o.a.createElement(i.a,{href:l,target:"_blank",rel:"noopener"},"here's why"),".")):n?o.a.createElement(x,null,o.a.createElement("div",null,"Draw completed!"),o.a.createElement(c.a,{onClick:v},"Restart")):null!==a?this.lastAnnouncement=o.a.createElement("div",null,t&&g?o.a.createElement("span",null,o.a.createElement(m,null,g.shortName||g.name)," goes to group"):o.a.createElement("span",null,"Group")," ",o.a.createElement(m,null,Object(u.a)(a)),"!"):g?b?o.a.createElement("div",null,"Possible groups for ",o.a.createElement(d,null,o.a.createElement(m,null,g.name),":"),o.a.createElement(s.a,{numGroups:h,possibleGroups:b})):this.lastAnnouncement:o.a.createElement("div",null,"Pick a ball"))}}},620:function(t,e,n){var r=n(621),o=n(77),a=n(102),i=a&&a.isMap,c=i?o(i):r;t.exports=c},621:function(t,e,n){var r=n(79),o=n(41),a="[object Map]";t.exports=function(t){return o(t)&&r(t)==a}},622:function(t,e,n){var r=n(623),o=n(77),a=n(102),i=a&&a.isSet,c=i?o(i):r;t.exports=c},623:function(t,e,n){var r=n(79),o=n(41),a="[object Set]";t.exports=function(t){return o(t)&&r(t)==a}},624:function(t,e,n){var r=n(80),o=n(625),a=n(626),i=n(56);t.exports=function(t,e){return e=r(e,t),null==(t=a(t,e))||delete t[i(o(e))]}},625:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},626:function(t,e,n){var r=n(108),o=n(160);t.exports=function(t,e){return e.length<2?t:r(t,o(e,0,-1))}},627:function(t,e,n){var r=n(628);t.exports=function(t){return r(t)?void 0:t}},628:function(t,e,n){var r=n(49),o=n(115),a=n(41),i="[object Object]",c=Function.prototype,u=Object.prototype,s=c.toString,l=u.hasOwnProperty,p=s.call(Object);t.exports=function(t){if(!a(t)||r(t)!=i)return!1;var e=o(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==p}},629:function(t,e,n){var r=n(630),o=n(165),a=n(166);t.exports=function(t){return a(o(t,void 0,r),t+"")}},63:function(t,e,n){var r=n(175),o=n(104);t.exports=function(t,e,n,a){var i=!n;n||(n={});for(var c=-1,u=e.length;++c<u;){var s=e[c],l=a?a(n[s],t[s],s,n,t):void 0;void 0===l&&(l=t[s]),i?o(n,s,l):r(n,s,l)}return n}},630:function(t,e,n){var r=n(164);t.exports=function(t){return null!=t&&t.length?r(t,1):[]}},79:function(t,e,n){var r=n(286),o=n(99),a=n(287),i=n(288),c=n(289),u=n(49),s=n(139),l=s(r),p=s(o),f=s(a),d=s(i),m=s(c),x=u;(r&&"[object DataView]"!=x(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=x(new o)||a&&"[object Promise]"!=x(a.resolve())||i&&"[object Set]"!=x(new i)||c&&"[object WeakMap]"!=x(new c))&&(x=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case l:return"[object DataView]";case p:return"[object Map]";case f:return"[object Promise]";case d:return"[object Set]";case m:return"[object WeakMap]"}return e}),t.exports=x},80:function(t,e,n){var r=n(38),o=n(109),a=n(293),i=n(87);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},82:function(t,e,n){"use strict";var r=n(1);const o=r["a"].div`
  border: #aaa solid 1px;
  margin: 0px 5px 10px 5px;
  width: 150px;
  min-width: 0;

  @media (max-width: 999px) {
    margin: 0px 3px 6px 3px;
  }
`;e.a=o}});