(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(16),s=n.n(c),o=(n(53),n(54),n(55),n(14)),i=n(6),l=n(90),u=function(){return Object(a.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(a.jsx)(l.a,{})})},d=n(91),j=n(92),p=n(13);n(62);var h=function(e){var t=e.history,n=Object(p.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(l.a,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)("div",{className:"intro-text",children:Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)(o.b,{to:"/login",children:Object(a.jsx)(j.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(a.jsx)(o.b,{to:"/register",children:Object(a.jsx)(j.a,{variant:"outline-primary",size:"lg",className:"landingbutton",children:"Signup"})})]})})})})})},b=n(12),g=n(95),O=n(45),f=n(93);var m=function(e){var t=e.size,n=void 0===t?100:t;return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(a.jsx)(f.a,{style:{width:n,height:n},animation:"border"})})},v=n(94),E=function(e){var t=e.variant,n=void 0===t?"info":t,r=e.children;return Object(a.jsx)(v.a,{variant:n,style:{fontSize:20},children:Object(a.jsx)("strong",{children:r})})},S=n(15),x=n.n(S),y=n(21),_="USER_LOGIN_REQUEST",C="USER_LOGIN_SUCCESS",I="USER_LOGIN_FAIL",T="USER_LOGOUT",w="USER_REGISTER_REQUEST",U="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",N="USER_UPDATE_REQUEST",R="USER_UPDATE_SUCCESS",P="USER_UPDATE_FAIL",A=n(23),D=n.n(A);n(84);var G=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(b.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(b.a)(l,2),h=u[0],f=u[1],v=Object(p.b)(),S=Object(p.c)((function(e){return e.userLogin})),T=S.loading,w=S.error,U=S.userInfo;return Object(r.useEffect)((function(){U&&t.push("/dashboard")}),[t,U]),Object(a.jsxs)("div",{className:"loginContainer",children:[w&&Object(a.jsx)(E,{variant:"danger",children:w}),T&&Object(a.jsx)(m,{}),Object(a.jsxs)(g.a,{onSubmit:function(e){e.preventDefault(),v(function(e,t){return function(){var n=Object(y.a)(x.a.mark((function n(a){var r,c,s;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:_}),r={headers:{"Content-type":"application/json"}},n.next=5,D.a.post("".concat("https://tesst-mcq.herokuapp.com/","api/users/login"),{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:C,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:I,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(s,h))},children:[Object(a.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(g.a.Label,{children:"Email address"}),Object(a.jsx)(g.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(g.a.Label,{children:"Password"}),Object(a.jsx)(g.a.Control,{type:"password",value:h,placeholder:"Password",onChange:function(e){return f(e.target.value)}})]}),Object(a.jsx)(j.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(a.jsx)(d.a,{className:"py-3",children:Object(a.jsxs)(O.a,{children:["New Customer ? ",Object(a.jsx)(o.b,{to:"/register",children:"Register Here"})]})})]})};n(86);var F=function(e){var t=e.children,n=e.title;return Object(a.jsx)("div",{className:"mainback",children:Object(a.jsx)(l.a,{children:Object(a.jsx)(d.a,{children:Object(a.jsxs)("div",{className:"page",children:[n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"heading",children:n}),Object(a.jsx)("hr",{})]}),t]})})})})};n(87);var k=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(b.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(b.a)(l,2),h=u[0],f=u[1],v=Object(r.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),S=Object(b.a)(v,2),_=S[0],I=S[1],T=Object(r.useState)(""),N=Object(b.a)(T,2),R=N[0],P=N[1],A=Object(r.useState)(""),G=Object(b.a)(A,2),k=G[0],Q=G[1],B=Object(r.useState)(null),z=Object(b.a)(B,2),J=z[0],q=z[1],H=Object(r.useState)(null),M=Object(b.a)(H,2),W=M[0],K=M[1],V=Object(p.b)(),X=Object(p.c)((function(e){return e.userRegister})),Y=X.loading,Z=X.error,$=X.userInfo;return Object(r.useEffect)((function(){$&&t.push("/")}),[t,$]),Object(a.jsx)(F,{title:"REGISTER",children:Object(a.jsxs)("div",{className:"loginContainer",children:[Z&&Object(a.jsx)(E,{variant:"danger",children:Z}),J&&Object(a.jsx)(E,{variant:"danger",children:J}),Y&&Object(a.jsx)(m,{}),Object(a.jsxs)(g.a,{onSubmit:function(e){e.preventDefault(),R!==k?q("Passwords do not match"):V(function(e,t,n,a){return function(){var r=Object(y.a)(x.a.mark((function r(c){var s,o,i;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:w}),s={headers:{"Content-type":"application/json"}},r.next=5,D.a.post("".concat("https://tesst-mcq.herokuapp.com/","api/users"),{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:U,payload:i}),c({type:C,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:L,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(h,s,R,_))},children:[Object(a.jsxs)(g.a.Group,{controlId:"name",children:[Object(a.jsx)(g.a.Label,{children:"Name"}),Object(a.jsx)(g.a.Control,{type:"name",value:h,placeholder:"Enter name",onChange:function(e){return f(e.target.value)}})]}),Object(a.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(g.a.Label,{children:"Email address"}),Object(a.jsx)(g.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(g.a.Label,{children:"Password"}),Object(a.jsx)(g.a.Control,{type:"password",value:R,placeholder:"Password",onChange:function(e){return P(e.target.value)}})]}),Object(a.jsxs)(g.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(g.a.Label,{children:"Confirm Password"}),Object(a.jsx)(g.a.Control,{type:"password",value:k,placeholder:"Confirm Password",onChange:function(e){return Q(e.target.value)}})]}),W&&Object(a.jsx)(E,{variant:"danger",children:W}),Object(a.jsxs)(g.a.Group,{controlId:"pic",children:[Object(a.jsx)(g.a.Label,{children:"Profile Picture"}),Object(a.jsx)(g.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return K("Please Select an Image");if(K(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return K("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){I(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(j.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(a.jsx)(d.a,{className:"py-3",children:Object(a.jsxs)(O.a,{children:["Have an Account ? ",Object(a.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})};var Q=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsxs)("main",{className:"App",children:[Object(a.jsx)(i.a,{path:"/",component:h,exact:!0}),Object(a.jsx)(i.a,{path:"/login",component:G}),Object(a.jsx)(i.a,{path:"/register",component:k})]}),Object(a.jsx)(u,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},z=n(17),J=n(46),q=n(47),H="NOTES_LIST_REQUEST",M="NOTES_LIST_SUCCESS",W="NOTES_LIST_FAIL",K="NOTES_CREATE_REQUEST",V="NOTES_CREATE_SUCCESS",X="NOTES_CREATE_FAIL",Y="NOTES_UPDATE_REQUEST",Z="NOTES_UPDATE_SUCCESS",$="NOTES_UPDATE_FAIL",ee="NOTES_DELETE_REQUEST",te="NOTES_DELETE_SUCCESS",ne="NOTES_DELETE_FAIL",ae=Object(z.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{loading:!0};case M:return{loading:!1,notes:t.payload};case W:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case C:return{loading:!1,userInfo:t.payload};case I:return{loading:!1,error:t.payload};case T:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case U:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{loading:!0};case V:return{loading:!1,success:!0};case X:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return{loading:!0};case te:return{loading:!1,success:!0};case ne:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case Z:return{loading:!1,success:!0};case $:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case R:return{loading:!1,userInfo:t.payload,success:!0};case P:return{loading:!1,error:t.payload,success:!1};default:return e}}}),re={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ce=[J.a],se=Object(z.createStore)(ae,re,Object(q.composeWithDevTools)(z.applyMiddleware.apply(void 0,ce)));s.a.render(Object(a.jsx)(p.a,{store:se,children:Object(a.jsx)(Q,{})}),document.getElementById("root")),B()}},[[88,1,2]]]);
//# sourceMappingURL=main.94576064.chunk.js.map