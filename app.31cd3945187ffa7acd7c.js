webpackJsonp(["app"],{23:function(t,e,n){"use strict";var a=n(0),i=n.n(a),o=n(6),r=n(1),s=n(33);const l=Promise.all([n.e("vendor-main-app"),n.e("main")]).then(n.bind(null,36)),c=r["a"].div`
  font-family: Tahoma, Arial, sans-serif;
`;e.a=class extends a.PureComponent{constructor(){super(...arguments),this.state={initial:!0,waiting:!0,error:null},this.onError=(t=>{const{message:e}=t;this.setState({initial:!1,waiting:!1,error:e.startsWith("Cannot find module")?"Could not load site":e})}),this.setPopup=(t=>{!1===t.waiting&&(t.initial=!1),this.setState(t)}),this.getWrappedPopup=(t=>i.a.createElement(s.a,Object.assign({},t,{noAnimation:this.state.initial})))}getPopup(){const{error:t,waiting:e}=this.state,n=this.getWrappedPopup;return navigator.onLine?t?i.a.createElement(n,null,t):e?i.a.createElement(n,null,"wait..."):null:i.a.createElement(n,null,"you're offline")}render(){return i.a.createElement(c,null,i.a.createElement(o.a,{component:l,onError:this.onError,initial:this.state.initial,setPopup:this.setPopup,getPopup:this.getPopup,onLoadError:this.onError}),this.getPopup())}}},33:function(t,e,n){"use strict";var a=n(0),i=n.n(a),o=n(1),r=n(34);const s=o["a"].div`
  font-size: 5vw;
  color: #808080;
  user-select: none;

  @media (max-width: 999px) {
    font-size: 8vw;
  }
`;e.a=class extends a.PureComponent{render(){const{noAnimation:t,children:e}=this.props;return i.a.createElement(r.a,{noAnimation:t},i.a.createElement(s,null,e))}}},34:function(t,e,n){"use strict";var a=n(0),i=n.n(a),o=n(1),r=n(35);const s=o["b"]`
  from {
    opacity: 0;
  }
  to {}
`,l=Object(o["a"])(r["a"])`
  z-index: 100000000;
  background-color: white;
  opacity: 0.75;
  ${t=>t.animate&&`\n    animation: ${s} 0.25s ease-out;\n  `}
`,c=Object(o["a"])(r["a"])`
  z-index: 100000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;e.a=class extends a.PureComponent{render(){const{noAnimation:t,children:e}=this.props;return i.a.createElement("div",null,i.a.createElement(l,{animate:!t}),i.a.createElement(c,null,e))}}},35:function(t,e,n){"use strict";var a=n(1);const i=a["a"].div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;e.a=i},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),i=(n.n(a),n(0)),o=n.n(i),r=n(15),s=n.n(r),l=n(23);s.a.render(o.a.createElement(l.a,null),document.getElementById("app"))}},[8]);