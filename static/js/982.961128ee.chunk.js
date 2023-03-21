"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[982],{2982:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t=r(5861),a=r(9439),i=r(7757),o=r.n(i),s=r(2791),c=r(1087),p=r(7689),u=r(1578),l=r(5243),d=r(6994);function x(n){if(!n)return null;var e=new Date(n);return" (".concat(e.getFullYear(),")")}var f,h,v,m,g,b,w,Z,j,k,y=r(168),P=r(6444),_=P.ZP.section(f||(f=(0,y.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding-bottom: 24px;\n"]))),C=P.ZP.div(h||(h=(0,y.Z)(["\n  display: flex;\n  gap: 40px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid green;\n"]))),S=P.ZP.img(v||(v=(0,y.Z)(["\n  width: 320px;\n"]))),z=P.ZP.h2(m||(m=(0,y.Z)(["\n  font-size: 32px;\n  margin-bottom: 32px;\n"]))),L=P.ZP.p(g||(g=(0,y.Z)(["\n  margin-bottom: 32px;\n  color: green;\n"]))),I=P.ZP.h3(b||(b=(0,y.Z)(["\n  font-size: 24px;\n  margin-bottom: 16px;\n"]))),F=P.ZP.div(w||(w=(0,y.Z)(["\n  font-size: 20px;\n  line-height: 1.3;\n  margin-bottom: 24px;\n"]))),O=P.ZP.div(Z||(Z=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  padding-bottom: 24px;\n  margin-top: 24px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid green;\n"]))),U=(0,P.ZP)(c.OL)(j||(j=(0,y.Z)(["\n  display: inline-block;\n  min-width: 80px;\n  padding: 8px;\n  background-color: #fff;\n\n  text-align: center;\n\n  font-size: 20px;\n  text-decoration: none;\n  color: green;\n  border-radius: 4px;\n\n  :hover {\n    color: white;\n    background-color: green;\n  }\n  &.active {\n    color: white;\n    background-color: green;\n    box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);\n    -webkit-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);\n    -moz-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);\n  }\n"]))),H=P.ZP.div(k||(k=(0,y.Z)(["\n  text-align: center;\n"]))),R=r(5807),A=r(184),E=function(n){var e,r,t=n.movie,a=t.poster_path,i=t.title,o=t.release_date,c=t.vote_average,u=t.overview,f=t.genres;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(_,{children:(0,A.jsxs)(C,{children:[(0,A.jsx)(S,{src:a?(0,d.a)(a):R,alt:i}),(0,A.jsxs)("div",{children:[(0,A.jsx)(z,{children:"".concat(i).concat(o?x(o):"")}),(0,A.jsx)(L,{children:"User score: ".concat((r=c,Math.round(10*r).toString()),"%")}),u&&(0,A.jsxs)(F,{children:[(0,A.jsx)(I,{children:"Overview"}),(0,A.jsx)("p",{children:u})]}),0!==f.length&&(0,A.jsxs)(F,{children:[(0,A.jsx)(I,{children:"Genres"}),(0,A.jsx)("p",{children:(e=f,e.map((function(n){return n.name})).join(" "))})]})]})]})}),(0,A.jsxs)(_,{children:[(0,A.jsx)(H,{children:(0,A.jsx)(I,{children:"Addtional information"})}),(0,A.jsxs)(O,{children:[(0,A.jsx)(U,{to:"cast",children:"Cast"}),(0,A.jsx)(U,{to:"reviews",children:"Reviews"})]}),(0,A.jsx)(s.Suspense,{fallback:(0,A.jsx)(l.Fe,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"line-wave",wrapperStyle:{},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),children:(0,A.jsx)(p.j3,{})})]})]})},N=r(3961),T=function(){var n,e,r=(0,s.useState)(null),i=(0,a.Z)(r,2),d=i[0],x=i[1],f=(0,s.useState)(!1),h=(0,a.Z)(f,2),v=h[0],m=h[1],g=(0,s.useState)(!1),b=(0,a.Z)(g,2),w=b[0],Z=b[1],j=(0,p.UO)().movieId,k=(0,p.TH)(),y=(0,s.useRef)(null!==(n=null===(e=k.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,s.useEffect)((function(){m(!1),Z(!0);var n=new AbortController,e=function(){var e=(0,t.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,N.HI)(j,n.signal);case 3:if(r=e.sent){e.next=9;break}return m(!0),e.next=8,Promise.reject(new Error('" Not found "'));case 8:return e.abrupt("return",e.sent);case 9:x(r),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:return e.prev=14,Z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[j]),(0,A.jsxs)(A.Fragment,{children:[w&&(0,A.jsx)(l.p2,{height:"300",width:"300",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{display:"flex",justifyContent:"center",position:"fixed",top:"150px",left:"50%",transform:"translate(-50%)"},wrapperClass:"",visible:!0}),v&&!w&&(0,A.jsx)("h2",{style:{color:"red",fontSize:20},children:"Oops, mistake! Please try again"}),(0,A.jsx)(c.rU,{to:y.current,children:(0,A.jsx)(u.owl,{size:40,color:"green"})}),d&&!v&&!w&&(0,A.jsx)(E,{movie:d})]})}},3961:function(n,e,r){r.d(e,{HI:function(){return p},It:function(){return c},Jh:function(){return l},XT:function(){return d},bp:function(){return u}});var t=r(5861),a=r(7757),i=r.n(a),o=r(1243),s="6b1b36ecf2f3f3c0d27307e18cbffcb3";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/day",{signal:e,params:{api_key:s}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e),{signal:r,params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"),{signal:r,params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews"),{signal:r,params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("\n/search/movie",{signal:r,params:{api_key:s,query:e}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}()},6994:function(n,e,r){r.d(e,{a:function(){return t}});var t=function(n){return"https://image.tmdb.org/t/p/w500/"+n}},5807:function(n,e,r){n.exports=r.p+"static/media/NoImg.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=982.961128ee.chunk.js.map