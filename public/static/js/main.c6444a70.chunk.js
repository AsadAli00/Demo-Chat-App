(this["webpackJsonpdemo-chat-app"]=this["webpackJsonpdemo-chat-app"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var n=s(4),a=s(1),c=s(23),r=s.n(c),i=(s(40),s(41),s(14)),o=s(15),u=s(18),h=s(17),l=s(33),d=s(6),p=s(16),j=s(28);s(45),s(47);j.a.initializeApp({apiKey:"AIzaSyCv6QiXhizyAg-CquVSfCrpHerGER7EJkI",authDomain:"chat-app-demo-cfe65.firebaseapp.com",databaseURL:"https://chat-app-demo-cfe65.firebaseio.com",projectId:"chat-app-demo-cfe65",storageBucket:"chat-app-demo-cfe65.appspot.com",messagingSenderId:"503378303014",appId:"1:503378303014:web:9a4bef31601429dfca6ee7",measurementId:"G-4LY7N47NWM"});var b=j.a,f=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).chat=function(t){e.setState({chat_user:t});var s=e.props.current_user,n=e.uid_merge(s.uid,t.uid);console.log(n),e.get_messages(n)},e.state={chat_user:{},chats:[],message:"",chatmessages:null,loading:!1},e}return Object(o.a)(s,[{key:"sendmsg",value:function(){var e=this.props.current_user,t=this.state.chat_user,s=this.uid_merge(e.uid,t.uid);console.log(s),b.database().ref("/").child("chat/".concat(s)).push({message:this.state.message,name:e.name,uid:e.uid}),this.setState({chat:this.state.chats,message:""})}},{key:"uid_merge",value:function(e,t){return e<t?e+t:t+e}},{key:"get_messages",value:function(e){var t=this;b.database().ref("/").child("chat/".concat(e)).on("child_added",(function(e){console.log("message=>"),t.state.chats.push({message:e.val().message}),t.setState({chats:t.state.chats})}))}},{key:"componentDidMount",value:function(){this.props.get_users()}},{key:"render",value:function(){var e=this;console.log("firebase users => ",this.props.users);var t=this.props.current_user;return console.log(t),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h4",{children:["Welcome ",t.name," "]}),Object(n.jsx)("img",{alt:"profile",src:t.profile}),Object(n.jsxs)("h5",{children:["Email:",t.email]}),Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsxs)("div",{style:{width:"50%",backgroundColor:"green"},children:[Object(n.jsx)("h4",{children:"Chat Users:"}),Object(n.jsx)("ul",{children:this.props.users.map((function(s,a){return s.uid&&s.uid!==t.uid&&Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{alt:"",src:s.profile,width:"20"})," ",s.name," ",Object(n.jsx)("button",{onClick:function(){return e.chat(s)},children:"chat"})]},a)}))})]}),Object(n.jsxs)("div",{style:{width:"50%",backgroundColor:"yellow"},children:[Object(n.jsx)("h4",{children:"Chat"}),Object.keys(this.state.chat_user).length?Object(n.jsxs)("div",{children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("img",{alt:"",src:this.state.chat_user.profile,width:"20"}),this.state.chat_user.name]}),Object(n.jsx)("ul",{children:this.state.chats.map((function(e,t){return Object(n.jsx)("li",{children:e.message},t)}))}),Object(n.jsx)("input",{value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})},type:"text",placeholder:"enter your message"}),Object(n.jsx)("button",{onClick:function(){return e.sendmsg()},children:"send"})]}):Object(n.jsx)("h4",{children:"No User"})]})]})]})}}]),s}(a.Component),m=Object(p.b)((function(e){return{current_user:e.current_user,users:e.users}}),(function(e){return{get_users:function(){return e((function(e){var t=[];b.database().ref("/").child("users").on("child_added",(function(e){t.push(e.val())})),e({type:"SETFIREBASEUSERS",payload:t})}))}}}))(f),g=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Home "}),Object(n.jsx)("button",{onClick:function(){return e.props.facebook_login(e.props.history)},children:"Facebook Login"})]})}}]),s}(a.Component),O=Object(p.b)((function(e){return{}}),(function(e){return{facebook_login:function(t){return e((s=t,function(e){var t=new b.auth.FacebookAuthProvider;b.auth().signInWithPopup(t).then((function(t){t.credential.accessToken;var n=t.user,a={name:n.displayName,email:n.email,profile:n.photoURL,uid:n.uid};b.database().ref("/").child("users/".concat(n.uid)).set(a).then((function(){e({type:"SETUSER",payload:a}),alert("User Login Successfull"),s.push("/chat")}))})).catch((function(e){e.code,e.message,e.email,e.credential}))}));var s}}}))(g),v=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(n.jsx)(d.a,{exact:!0,path:"/chat",component:m})]})}}]),s}(a.Component);var x=function(){return Object(n.jsx)(v,{})},y=s(21),_={users:[],current_user:{}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(console.log("app==>",t),t.type){case"SETUSER":return Object(y.a)(Object(y.a)({},e),{},{current_user:t.payload});case"SETFIREBASEUSERS":return Object(y.a)(Object(y.a)({},e),{},{users:t.payload});default:return e}},S=s(20),C=s(34),E=Object(S.c)(k,Object(S.a)(C.a)),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(n.jsx)(p.a,{store:E,children:Object(n.jsx)(x,{})}),document.getElementById("root")),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.c6444a70.chunk.js.map