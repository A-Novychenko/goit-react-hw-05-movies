"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{8647:function(e,r,n){n.d(r,{eW:function(){return v}});var t,a,c,o=n(7689),s=n(168),u=n(6444),i=n(1087),p=u.ZP.ul(t||(t=(0,s.Z)(["\n  margin-top: 20px;\n  color: green;\n  list-style: circle;\n"]))),l=u.ZP.li(a||(a=(0,s.Z)(["\n  margin-bottom: 8px;\n\n  border-radius: 12px;\n"]))),f=(0,u.ZP)(i.OL)(c||(c=(0,s.Z)(["\n  display: inline-block;\n  padding: 8px;\n  text-decoration: none;\n  color: black;\n  border-radius: 12px;\n\n  :hover {\n    background-color: green;\n    box-shadow: -1px -1px 52px -8px rgba(0, 128, 0, 0.75);\n    -webkit-box-shadow: -1px -1px 52px -8px rgba(0, 128, 0, 0.75);\n    -moz-box-shadow: -1px -1px 52px -8px rgba(0, 128, 0, 0.75);\n\n    font-weight: 700;\n    color: white;\n  }\n"]))),d=n(184),v=function(e){var r=e.movies,n=e.path,t=void 0===n?"":n,a=(0,o.TH)();return(0,d.jsx)(d.Fragment,{children:r&&(0,d.jsx)(p,{children:r.map((function(e){return(0,d.jsx)(l,{children:(0,d.jsx)(f,{to:"".concat(t).concat(e.id),state:{from:a},children:e.title})},e.id)}))})})}},5415:function(e,r,n){n.r(r);var t=n(5861),a=n(9439),c=n(7757),o=n.n(c),s=n(2791),u=n(3961),i=n(8647),p=n(5243),l=n(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),n=r[0],c=r[1],f=(0,s.useState)(!1),d=(0,a.Z)(f,2),v=d[0],h=d[1],x=(0,s.useState)(!1),m=(0,a.Z)(x,2),b=m[0],g=m[1];return(0,s.useEffect)((function(){g(!0);var e=new AbortController,r=function(){var r=(0,t.Z)(o().mark((function r(){var n,t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,g(!0),h(!1),r.next=5,(0,u.It)(e.signal);case 5:if(n=r.sent,t=n.results){r.next=11;break}return r.next=10,Promise.reject(new Error('" Not found "'));case 10:return r.abrupt("return",r.sent);case 11:c(t),r.next=16;break;case 14:r.prev=14,r.t0=r.catch(0);case 16:return r.prev=16,g(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[0,14,16,19]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){e.abort()}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Trending today"}),b&&(0,l.jsx)(p.p2,{height:"300",width:"300",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{display:"flex",justifyContent:"center",position:"fixed",top:"150px",left:"50%",transform:"translate(-50%)"},wrapperClass:"",visible:!0}),v&&(0,l.jsx)("h2",{style:{color:"red",fontSize:20},children:"Oops, mistake! Please try again"}),!v&&(0,l.jsx)(i.eW,{movies:n,path:"movies/"})]})}},3961:function(e,r,n){n.d(r,{HI:function(){return i},It:function(){return u},Jh:function(){return l},XT:function(){return f},bp:function(){return p}});var t=n(5861),a=n(7757),c=n.n(a),o=n(1243),s="6b1b36ecf2f3f3c0d27307e18cbffcb3";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("trending/movie/day",{signal:r,params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(r),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(r,"/credits"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:s}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("\n/search/movie",{params:{api_key:s,query:r}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.aab0df7b.chunk.js.map