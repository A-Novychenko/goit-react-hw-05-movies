"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{2493:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,a,c,o,i,s,u,p,l=r(5861),f=r(9439),d=r(7757),x=r.n(d),h=r(2791),v=r(5243),m=r(7689),g=r(3961),b=r(6994),w=r(5807),Z=r(168),k=r(6444),y=k.ZP.ul(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 80px;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),j=k.ZP.li(a||(a=(0,Z.Z)(["\n  flex-basis: calc((100% - 10px) / 5);\n  border: 1px solid green;\n  border-radius: 8px;\n\n  overflow: hidden;\n\n  box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);\n  -webkit-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);\n  -moz-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);\n  transform: scale(1);\n  transition: transform 200ms linear;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),_=k.ZP.div(c||(c=(0,Z.Z)(["\n  height: 100%;\n"]))),P=k.ZP.div(o||(o=(0,Z.Z)(["\n  position: relative;\n  overflow: hidden;\n"]))),C=k.ZP.img(i||(i=(0,Z.Z)(["\n  width: 100%;\n  min-height: 345px;\n"]))),L=k.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: center;\n  flex-grow: 1;\n"]))),I=k.ZP.p(u||(u=(0,Z.Z)(["\n  padding: 8px 0;\n  font-size: 20px;\n  font-weight: 700;\n"]))),S=k.ZP.p(p||(p=(0,Z.Z)(["\n  padding: 8px 0;\n"]))),z=r(184),E=function(){var n=(0,h.useState)(null),e=(0,f.Z)(n,2),r=e[0],t=e[1],a=(0,h.useState)(!1),c=(0,f.Z)(a,2),o=c[0],i=c[1],s=(0,h.useState)(!1),u=(0,f.Z)(s,2),p=u[0],d=u[1],Z=(0,m.UO)().movieId;return(0,h.useEffect)((function(){i(!1),d(!0),t(null);var n=function(){var n=(0,l.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.bp)(Z);case 3:if(0!==(e=n.sent).cast.length){n.next=8;break}return n.next=7,Promise.reject(new Error('" Not found "'));case 7:return n.abrupt("return",n.sent);case 8:t(e.cast),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),i(!0);case 14:return n.prev=14,d(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){}}),[Z]),console.log("actors",r),(0,z.jsxs)(z.Fragment,{children:[p&&(0,z.jsx)(v.Fe,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"line-wave",wrapperStyle:{},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),(0,z.jsxs)(y,{children:[o&&!p&&(0,z.jsx)("li",{children:(0,z.jsx)("span",{style:{color:"red"},children:"Actor info not found"})}),r&&!p&&r.map((function(n){var e=n.id,r=n.name,t=n.character,a=n.profile_path;return(0,z.jsx)(j,{children:(0,z.jsxs)(_,{children:[(0,z.jsx)(P,{children:(0,z.jsx)(C,{src:a?(0,b.a)(a):w,alt:r})}),(0,z.jsxs)(L,{children:[(0,z.jsx)(I,{children:r}),(0,z.jsx)(S,{children:"Character ".concat(t)})]})]})},e)}))]})]})}},3961:function(n,e,r){r.d(e,{HI:function(){return u},It:function(){return s},Jh:function(){return l},XT:function(){return f},bp:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),o=r(1243),i="6b1b36ecf2f3f3c0d27307e18cbffcb3";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/day",{params:{api_key:i}});case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e),{params:{api_key:i}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"),{params:{api_key:i}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:i}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("\n/search/movie",{params:{api_key:i,query:e}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},6994:function(n,e,r){r.d(e,{a:function(){return t}});var t=function(n){return"https://image.tmdb.org/t/p/w500/"+n}},5807:function(n,e,r){n.exports=r.p+"static/media/NoImg.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=493.81917e7a.chunk.js.map