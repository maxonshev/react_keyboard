(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(4),r=n(5),o=n(8),i=n(6),u=n(1),p=n.n(u),d=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pressedKey:""},e.handleKeyUp=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(p.a.PureComponent),y=(n(14),n(7)),h=function(){var e=Object(u.useState)(""),t=Object(y.a)(e,2),n=t[0],s=t[1],c=function(e){s(e.key)};return Object(u.useEffect)((function(){return document.addEventListener("keyup",c),function(){document.removeEventListener("keyup",c)}}),[]),Object(d.jsx)("div",{className:"App2",children:Object(d.jsx)("p",{className:"App__message",children:n?"The last pressed key is [".concat(n,"]"):"Nothing was pressed yet"})})};c.a.render(Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(h,{})]}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b46a9595.chunk.js.map