(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),s=n.n(a),l=(n(13),n(14),n(8)),r=n(6),o=n(3),u=n(0),j=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(function(){var e=localStorage.getItem("list");return console.log("list",e),e?JSON.parse(e):[]}()),s=Object(o.a)(a,2),j=s[0],d=s[1],b=Object(c.useState)(!0),O=Object(o.a)(b,2),f=O[0],h=O[1],m=Object(c.useState)(null),x=Object(o.a)(m,2),g=x[0],p=x[1],v=function(){if(n)if(f){var e={id:(new Date).getTime().toString(),name:n};d([].concat(Object(l.a)(j),[e])),i("")}else d(j.map((function(e){return e.id===g?Object(r.a)(Object(r.a)({},e),{},{name:n}):e}))),h(!0),i(""),p(null);else alert("enter some value")};return Object(c.useEffect)((function(){localStorage.setItem("list",JSON.stringify(j))}),[j]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Create todo list"}),Object(u.jsxs)("div",{className:"inputdiv",children:[Object(u.jsx)("input",{type:"text",className:"input",placeholder:"enter task",value:n,onChange:function(e){i(e.target.value)}}),f?Object(u.jsx)("span",{onClick:v,children:" Add "}):Object(u.jsx)("span",{onClick:v,children:" edit "})]}),Object(u.jsx)("div",{className:"tasklist",children:j.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"task",children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("span",{className:"edit",onClick:function(){return function(e){var t=j.find((function(t){return e===t.id}));console.log(" ..............edititem....",t),h(!1),i(t.name),p(e)}(e.id)},children:"  edit   "}),Object(u.jsx)("span",{className:"delete",onClick:function(){return function(e){var t=j.filter((function(t){return e!==t.id}));d(t)}(e.id)},children:"  x   "})]},e.id)})}))}),Object(u.jsx)("div",{className:"clearall",children:Object(u.jsx)("button",{type:"button",className:"deleteall",onClick:function(){d([])},children:" Delete all"})})]})};var d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.5630f8b0.chunk.js.map