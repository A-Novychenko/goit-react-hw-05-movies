"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[607],{6607:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t,a,c,u,s,o=r(5861),i=r(9439),p=r(7757),l=r.n(p),f=r(2791),h=r(5243),v=r(7689),d=r(3961),m=r(168),g=r(6444),x=g.ZP.ul(t||(t=(0,m.Z)(["\n  padding-left: 32px;\n  padding-right: 32px;\n"]))),Z=g.ZP.li(a||(a=(0,m.Z)(["\n  margin-bottom: 24px;\n"]))),b=g.ZP.h3(c||(c=(0,m.Z)(["\n  margin-bottom: 16px;\n  font-size: 20px;\n"]))),w=g.ZP.p(u||(u=(0,m.Z)(["\n  line-height: 1.2;\n"]))),k=g.ZP.p(s||(s=(0,m.Z)(["\n  color: red;\n"]))),y=r(184),_=function(){var e=(0,f.useState)(null),n=(0,i.Z)(e,2),r=n[0],t=n[1],a=(0,f.useState)(!1),c=(0,i.Z)(a,2),u=c[0],s=c[1],p=(0,f.useState)(!1),m=(0,i.Z)(p,2),g=m[0],_=m[1],j=(0,v.UO)().movieId;return(0,f.useEffect)((function(){s(!1),_(!0);var e=new AbortController,n=function(){var n=(0,o.Z)(l().mark((function n(){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Jh)(j,e.signal);case 3:if(0!==(r=n.sent).results.length){n.next=9;break}return s(!0),n.next=8,Promise.reject(new Error('" Not found "'));case 8:return n.abrupt("return",n.sent);case 9:t(r.results),n.next=14;break;case 12:n.prev=12,n.t0=n.catch(0);case 14:return n.prev=14,_(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,12,14,17]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){e.abort()}}),[j]),(0,y.jsxs)(y.Fragment,{children:[g&&(0,y.jsx)(h.Fe,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"line-wave",wrapperStyle:{},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),(0,y.jsxs)(x,{children:[u&&(0,y.jsx)(Z,{children:(0,y.jsx)(k,{children:"There is no information about this film."})},"notFound"),r&&0!==r.length&&r.map((function(e,n){var r=e.content,t=e.author_details.username;return(0,y.jsxs)(Z,{children:[(0,y.jsx)(b,{children:"Author ".concat(t)}),(0,y.jsx)(w,{children:r})]},n)}))]})]})}},3961:function(e,n,r){r.d(n,{HI:function(){return i},It:function(){return o},Jh:function(){return l},XT:function(){return f},bp:function(){return p}});var t=r(5861),a=r(7757),c=r.n(a),u=r(1243),s="6b1b36ecf2f3f3c0d27307e18cbffcb3";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day",{signal:n,params:{api_key:s}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n),{signal:r,params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/credits"),{signal:r,params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/reviews"),{signal:r,params:{api_key:s}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("\n/search/movie",{signal:r,params:{api_key:s,query:n}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.843788ba.chunk.js.map