(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e){e.exports={a:[{_id:1,name:"Adam",grades:["Math - A","History - B","Science - A","English - B"],img:"https://i.pravatar.cc/300",gender:"M",birthday:"July 23, 2003",athlete:!0,grade:10},{_id:2,name:"John",grades:["Math - B","History - B","Science - B","English - B"],img:"https://i.pravatar.cc/300",gender:"M",birthday:"September 8, 2005",athlete:!1,grade:8},{_id:3,name:"Sarah",grades:["Math - C","History - B","Science - B","English - C"],img:"https://i.pravatar.cc/300",gender:"F",birthday:"January 17, 2004",athlete:!1,grade:9},{_id:4,name:"Katie",grades:["Math - D","History - B","Science - C","English - B"],img:"https://i.pravatar.cc/300",gender:"F",birthday:"October 6, 2005",athlete:!0,grade:8},{_id:5,name:"Phil",grades:["Math - F","History - B","Science - C","English - D"],img:"https://i.pravatar.cc/300",gender:"M",birthday:"August 13, 2001",athlete:!1,grade:12}]}},40:function(e,a,t){e.exports=t(92)},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),i=(t(45),t(10)),s=t(13),m=t(21),u=t(6),o=t.n(u),d=t(19),g=t.n(d),h=t(9),p=t.n(h),E=t(39),y=t.n(E),v=t(38),b=t.n(v),f=t(20),G=t.n(f),C=t(37),S=t.n(C),x={backgroundColor:" #aaff80"},B={backgroundColor:"#ff4d4d"},O=function(e){var a=e.students,t={A:4,B:3,C:2,D:1,F:0},n=function(e,a,n,r,l,c,i){return{_id:e,name:a,math:n,history:r,science:l,english:c,averageGpa:function(e){return e.reduce(function(e,a){return e+(a=t[a.slice(-1)])/4},0)}(i)}},l=a.data.map(function(e){return n(e._id,e.name,e.grades[0].slice(-1),e.grades[1].slice(-1),e.grades[2].slice(-1),e.grades[3].slice(-1),e.grades)}),c=l.reduce(function(e,a){return(e||0)>a.averageGpa?e:a.averageGpa},0),i=l.reduce(function(e,a){return(e||0)<a.averageGpa?e:a.averageGpa},4);return console.log(i),console.log(c),r.a.createElement("div",{style:{margin:"40px"}},l&&r.a.createElement(S.a,{responsive:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",{style:{textAlign:"center"}},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Math"),r.a.createElement("th",null,"History"),r.a.createElement("th",null,"Science"),r.a.createElement("th",null,"English"),r.a.createElement("th",null,"GPA"))),r.a.createElement("tbody",{style:{textAlign:"center"}},l.map(function(e){return r.a.createElement("tr",{key:e._id,style:parseFloat(e.averageGpa)===c?x:parseFloat(e.averageGpa)===i?B:null},r.a.createElement("td",null,e._id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.math),r.a.createElement("td",null,e.history),r.a.createElement("td",null,e.science),r.a.createElement("td",null,e.english),r.a.createElement("td",null,e.averageGpa))}))))},j=t(15),A=t.n(j),M=function(e){return A.a.post("/api/students",e)},_=t(16),L=function(){var e={data:_.a},a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],u=Object(n.useState)({name:"",grades:[],mathGpa:"",historyGpa:"",scienceGpa:"",englishGpa:""}),d=Object(m.a)(u,2),h=d[0],E=d[1],v=h.name,f=h.grades,C=h.mathGpa,S=h.historyGpa,x=h.scienceGpa,B=h.englishGpa,j=_.a[_.a.length-1]._id,A=/^[A-DFa-df]/,L=/^[A-Za-z]+$/,H=function(e){E(Object(s.a)({},h,Object(i.a)({},e.target.name,e.target.value.toUpperCase()))),e.target.value.match(A)||(E(Object(s.a)({},h,Object(i.a)({},e.target.name,""))),e.target.value="",c(!0))};return r.a.createElement("div",{style:{margin:"40px"}}," ",r.a.createElement(g.a,null,r.a.createElement(g.a.Body,null,r.a.createElement(o.a,{onSubmit:function(a){a.preventDefault(),console.log("form submitted"),f.push("Math - ".concat(C),"History - ".concat(S),"Science - ".concat(x),"English - ".concat(B));var t={_id:++j,name:v,grades:f};e.data.push(t);var n=e,r=JSON.stringify(n);M({data:r}).catch(function(e){return console.log(e)}),E(Object(s.a)({},h,{name:"",grades:[],mathGpa:"",historyGpa:"",scienceGpa:"",englishGpa:""}))}},r.a.createElement(o.a.Label,{style:{fontWeight:"bold"}}," ","Enter Student's Name and Grades:"),r.a.createElement(o.a.Row,null,r.a.createElement(p.a,null,r.a.createElement(o.a.Label,null,"Name"),r.a.createElement(o.a.Control,{type:"text",name:"name",value:v||"",onChange:function(e){E(Object(s.a)({},h,Object(i.a)({},e.target.name,e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)))),e.target.value.match(L)||(E(Object(s.a)({},h,Object(i.a)({},e.target.name,""))),e.target.value="")},size:"sm",placeholder:"Name",required:!0})),r.a.createElement(p.a,null," ",r.a.createElement(o.a.Label,null,"Math"),r.a.createElement(o.a.Control,{type:"text",maxLength:"1",name:"mathGpa",value:C||"",onChange:H,size:"sm",placeholder:"Math",required:!0})),r.a.createElement(p.a,null," ",r.a.createElement(o.a.Label,null,"History"),r.a.createElement(o.a.Control,{type:"text",maxLength:"1",name:"historyGpa",value:S||"",onChange:H,size:"sm",placeholder:"History",required:!0})),r.a.createElement(p.a,null," ",r.a.createElement(o.a.Label,null,"Science"),r.a.createElement(o.a.Control,{type:"text",maxLength:"1",name:"scienceGpa",value:x||"",onChange:H,size:"sm",placeholder:"Science",required:!0})),r.a.createElement(p.a,null," ",r.a.createElement(o.a.Label,null,"English"),r.a.createElement(o.a.Control,{type:"text",maxLength:"1",name:"englishGpa",value:B||"",onChange:H,size:"sm",placeholder:"English",required:!0}))),r.a.createElement("br",null),r.a.createElement(b.a,{type:"submit",variant:"outline-primary",size:"sm"},"Add Student")))),r.a.createElement(y.a,null,r.a.createElement(p.a,{xs:6},r.a.createElement(G.a,{onClose:function(){return c(!1)},show:l,delay:3e3,autohide:!0},r.a.createElement(G.a.Body,null,"Please only enter grade values.")))),r.a.createElement(O,{students:e}))},H=function(){return r.a.createElement("div",null,r.a.createElement(L,null))};c.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d5f93d9a.chunk.js.map