"use strict";(self.webpackChunkfilmoteka_app_react=self.webpackChunkfilmoteka_app_react||[]).push([[957],{7176:function(n,e,t){t.d(e,{BQ:function(){return g},Hx:function(){return d},Mc:function(){return l},PY:function(){return u},uV:function(){return f},vw:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(7596),c="0b11624b950ea9c4284f61844023b09c",s="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,n.next=4,fetch("".concat(s,"trending/all/day?api_key=").concat(c,"&page=").concat(e));case 4:return t=n.sent,n.next=7,t.json();case 7:return r=n.sent,n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a,u,p=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:"",t=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2&&void 0!==p[2]&&p[2],n.prev=3,n.next=6,fetch("".concat(s,"search/movie?api_key=").concat(c,"&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"));case 6:return a=n.sent,n.next=9,a.json();case 9:return u=n.sent,r||0!==u.results.length||o.Am.warn("Nothing was found on your request"),n.abrupt("return",u);case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s,"genre/movie/list?api_key=").concat(c,"&language=en-US"));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r=t.genres.reduce((function(n,e){var t=e.id,r=e.name;return n[t]=r,n}),{}),localStorage.setItem("genresList",JSON.stringify(r)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}()},9777:function(n,e,t){t.d(e,{Z:function(){return _}});var r,a,i,o,c,s,u,p,l,d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=localStorage.getItem("genresList")?JSON.parse(localStorage.getItem("genresList")):{},t=n.map((function(n){return e[n]})).filter((function(n){return void 0!==n}));return t.length>2?t.splice(3,t.length-2).push("Others"):0===t.length&&t.push("no genres"),t},f=t(1087),g=t(5485),h=t(168),x=t(6444),m=x.ZP.ul(r||(r=(0,h.Z)(["\n    margin-top: 40px;\n    margin-bottom 40px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: minmax(300px, auto);\n    gap: 25px;\n"]))),v=x.ZP.li(a||(a=(0,h.Z)(["\n    position: relative;\n    border: 2px solid ",";\n    border-radius: 10px;\n    overflow: hidden;\n    transition: transform 250ms ease-in-out;\n\n    &:hover,\n    &:focus {\n        transform: scale(1.03);\n        box-shadow: -1px 8px 66px 6px rgba(115,149,174,0.76);\n    }\n"])),(function(n){return n.theme.accent})),w=x.ZP.div(i||(i=(0,h.Z)(["\n    padding: 10px;\n"]))),b=x.ZP.h2(o||(o=(0,h.Z)(["\n    font-size: 22px;\n"]))),y=x.ZP.img(c||(c=(0,h.Z)(["\n    object-fit: cover;\n    object-position: left top;\n    width: 100%;\n    height: 400px;\n"]))),Z=x.ZP.p(s||(s=(0,h.Z)(["\n    position: absolute; \n    top:20px;\n    left: 20px;\n    padding: 10px 7px;\n    border-radius: 5px;\n    font-weight: bold;\n    background-color: ","\n"])),(function(n){return n.theme.accent})),j=x.ZP.div(u||(u=(0,h.Z)(["\n    display: flex;\n    margin-top: 8px;\n    gap: 3px;\n"]))),k=x.ZP.p(p||(p=(0,h.Z)(["\n\n"]))),F=x.ZP.p(l||(l=(0,h.Z)(["\n\n"]))),P=t(184),_=function(n){var e=n.movieArr,t=void 0===e?[]:e,r=n.location;return(0,P.jsx)(m,{children:t.map((function(n){var e=n.id,t=n.original_title,a=n.original_name,i=n.vote_average,o=n.poster_path,c=n.genre_ids,s=n.release_date,u=n.first_air_date;return(0,P.jsx)(v,{children:(0,P.jsxs)(f.OL,{to:"/movies/".concat(e),state:{from:r},children:[(0,P.jsx)(y,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(o),alt:t}),(0,P.jsxs)(w,{children:[(0,P.jsx)(b,{children:t||a}),(0,P.jsx)(Z,{children:i?i.toFixed(1):"unknown"}),(0,P.jsxs)(j,{children:[(0,P.jsx)(k,{children:d(c).join(", ")}),(0,P.jsxs)(F,{children:["| ",(0,g.Z)(new Date(s||u))]})]})]})]})},e)}))})}},9593:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(168),i=t(6444),o=t(6048),c=t.n(o),s=(0,i.ZP)(c())(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 10px 0;\n  margin-bottom: 30px;\n  font-size: 18px;\n  \n  .selected {\n    color: ",";\n  }\n  a {\n    padding: 10px 0;\n    cursor: pointer;\n    &:hover {\n      color: blue;\n    }\n  }\n\n  .activeLink{\n    color: #FFFFFF;\n  }\n  .prev{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 35px;\n    height: 35px;\n    border-radius: 5px;\n    background-color: ",";\n    a:hover,\n    a:focus {\n        color: #FFFFFF;\n    }\n  }\n  .page{\n    min-width: 15px;\n    height: 15px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    background-color: ",";\n    a:hover,\n    a:focus {\n        color: #FFFFFF;\n    }\n    &:hover,\n    &:focus {\n        color: #FFFFFF;\n        background-color: ",";\n    }\n    \n  }\n/* .container{\n\n}\n\n.next{\n\n}\n\n.linkclass{\n\n}\n.pagebuilder{\n\n} */\n"])),(function(n){return n.theme.footer}),(function(n){return n.theme.header}),(function(n){return n.theme.header}),(function(n){return n.theme.footer})),u=t(184),p=function(n){var e=n.location,t=n.itemsPerPage,r=n.totalItems,a=n.setSearchParams,i=(n.params,function(n){return"number"===typeof n&&!isNaN(n)}),o=i(r)&&i(t)?Math.ceil(r/t):0;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s,{breakLabel:"...",nextLabel:">",onPageChange:function(n){var t=n.selected+1,r=new URLSearchParams(e.search);r.set("page",t||1),a(r)},pageRangeDisplayed:3,marginPagesDisplayed:1,pageCount:o,previousLabel:"<",renderOnZeroPageCount:null,onPageActive:window.scrollTo({top:0,behavior:"smooth"}),activeClassName:"active",activeLinkClassName:"activeLink",previousClassName:"prev",nextClassName:"prev",pageClassName:"page"})})}},3819:function(n,e,t){t.d(e,{nb:function(){return u},yd:function(){return s}});var r,a=t(168),i=t(6444),o=t(184),c=i.ZP.div(r||(r=(0,a.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n\n    & img {\n        @media screen and (min-width: 320px) {\n            width: 320px;\n         }\n         @media screen and (min-width: 768px) {\n            width: 255px;\n            nth-\n         }\n    }\n\n    & img:nth-child(1){\n        @media screen and (min-width: 768px) {\n            display:none;\n         }\n         @media screen and (min-width: 1280px) {\n            display: block;\n         }\n    }\n    & img:nth-child(2){\n        @media screen and (min-width: 768px) {\n            display:none;\n         }\n         @media screen and (min-width: 1280px) {\n            display: block;\n         }\n    }\n    \n"]))),s=function(){var n="https://media0.giphy.com/media/QPQ3xlJhqR1BXl89RG/200.webp?cid=ecf05e47oeisg3o2v6zfwr5kukig5sa97vyumtbagi4uuum0&rid=200.webp&ct=g";return(0,o.jsxs)(c,{children:[(0,o.jsx)("img",{src:n,alt:"waiting for reviews"}),(0,o.jsx)("img",{src:n,alt:"waiting for reviews"}),(0,o.jsx)("img",{src:n,alt:"waiting for reviews"}),(0,o.jsx)("img",{src:n,alt:"waiting for reviews"}),(0,o.jsx)("img",{src:n,alt:"waiting for reviews"})]})},u=function(){return(0,o.jsx)("img",{style:{height:"550px"},src:"https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif",alt:"waiting cat"})}},8957:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o=t(5861),c=t(9439),s=t(7757),u=t.n(s),p=t(2791),l=t(1087),d=t(7689),f=t(7176),g=t(763),h=t(3819),x=t(9777),m=t(168),v=t(6444),w=t(9126),b=v.ZP.form(r||(r=(0,m.Z)(["\n    position: absolute;\n    top: 152px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    justify-content: center;\n    background-color: ","\n\n    @media screen and (min-width: 320px) {\n        top: 170px;\n    }\n\n    @media screen and (min-width: 768px) {\n        top: 100px;\n    }\n    \n    @media screen and (min-width: 1280px) {\n        top: 90px;\n    }\n"])),(function(n){return n.theme.header})),y=(0,v.ZP)(w.dVI)(a||(a=(0,m.Z)(["\n    position: absolute;\n    right: 7px;\n    top: 3px;\n\n    @media screen and (min-width: 768px) {\n        right: 7px;\n        top: 4px;\n    }\n    \n    @media screen and (min-width: 1280px) {\n        right: 7px;\n        top: 5px;\n    }\n"]))),Z=v.ZP.input(i||(i=(0,m.Z)(["\n    \n    width: 250px;\n    padding: 10px;\n    padding-right: 15px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 16px;\n    margin-right: 1px;\n\n    @media screen and (min-width: 320px) {\n        height: 15px;\n    }\n\n    @media screen and (min-width: 768px) {\n        height: 15px;\n    }\n    \n    @media screen and (min-width: 1280px) {\n        \n    }\n"]))),j=t(184),k=function(n){var e=n.value,t=n.queryString;return(0,j.jsxs)(b,{children:[(0,j.jsx)(Z,{type:"text",value:null!==e&&void 0!==e?e:"",onChange:function(n){return t(n.target.value)}}),(0,j.jsx)(y,{size:30})]})},F=t(9593),P=function(){var n,e=(0,p.useState)({results:[]}),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,l.lr)({query:"",page:1}),s=(0,c.Z)(i,2),m=s[0],v=s[1],w=(0,p.useRef)(!0),b=(0,d.TH)(),y=null!==(n=m.get("query"))&&void 0!==n?n:"",Z=Number(m.get("page"))||1;(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.vw)(e,Z,w.current);case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();if(!w.current){var e=(0,g.debounce)(n,400);return e(y),function(){return e.cancel()}}w.current=!1}),[y,Z]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k,{value:y,queryString:function(n){v(""!==n?{query:n,page:1}:{})}}),r.results.length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x.Z,{movieArr:r.results,location:b}),(0,j.jsx)(F.Z,{itemsPerPage:20,totalItems:r.total_results,setSearchParams:v,params:m,location:b})]}):(0,j.jsx)(h.nb,{})]})}}}]);
//# sourceMappingURL=957.c892e527.chunk.js.map