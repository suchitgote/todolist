(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(6),a=n.n(i),r=(n(12),n(13),n(7)),o=n(5),l=n(0),j=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),j=a[0],u=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"inputdiv",children:[Object(l.jsx)("input",{type:"text",className:"input",placeholder:"enter task",value:n,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{onClick:function(){n?(console.log(" inputData",n),u([].concat(Object(r.a)(j),[n])),s(""),console.log(" .................................")):(alert("enter some value"),console.log(" .............ples enter text...................."))},children:" Add "})]}),Object(l.jsx)("div",{className:"tasklist",children:j.map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"task",children:[Object(l.jsx)("h3",{children:e}),Object(l.jsx)("span",{className:"delete",onClick:function(){return function(e){var t=j.filter((function(t,n){return n!==e}));u(t)}(t)},children:"  Delete   "})]},t)})}))})]})};var u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"create todo list"}),Object(l.jsx)(j,{})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.350ff2b3.chunk.js.map