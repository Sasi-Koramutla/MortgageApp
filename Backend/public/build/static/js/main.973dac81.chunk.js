(this.webpackJsonpmortageapp=this.webpackJsonpmortageapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),l=(a(13),a(1)),i=a(2),c=a(4),m=a(3),u=a(5),d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={firstName:"",lastName:"",username:"",password:"",baseURL:d},e.handleChange=function(t){e.setState(Object(u.a)({},t.currentTarget.id,t.currentTarget.value))},e.createUser=function(t){t.preventDefault(),fetch(e.state.baseURL,{method:"POST",body:JSON.stringify({firstName:e.state.firstName,lastName:e.state.lastName,username:e.state.username,password:e.state.password}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({signUp:!1,firstName:"",lastName:"",username:"",password:""})})).catch((function(e){return console.error({Error:e})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form justify-content-center",style:{width:"50%",margin:"50px"},onSubmit:this.createUser},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.firstName,placeholder:"First name",id:"firstName",name:"firstName"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.lastName,placeholder:"Last name",id:"lastName",name:"lastName"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.username,id:"username",name:"username",placeholder:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",onChange:this.handleChange,value:this.state.password,id:"password",name:"password",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"btn btn-primary form-control",style:{width:"70%"},type:"submit",value:"Sign up"}))))}}]),a}(n.Component),p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={address:"",city:"",state:"",zip:"",description:"",yearBuilt:"",loanPurpose:"",ssn:"",baseURL:p},e.handleChange=function(t){e.setState(Object(u.a)({},t.currentTarget.id,t.currentTarget.value))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form justify-content-center",style:{width:"50%",margin:"50px"},onSubmit:this.createUser},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.address,placeholder:"Property Address",id:"address",name:"address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.city,placeholder:"City",id:"city",name:"city"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.state,id:"state",name:"state",placeholder:"State"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"number",onChange:this.handleChange,value:this.state.zip,id:"zip",name:"zip",placeholder:"Zip"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.description,id:"description",name:"description",placeholder:"Property Description"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"number",onChange:this.handleChange,value:this.state.yearBuilt,id:"yearBuilt",name:"yearBuilt",placeholder:"Year Built"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.loanPurpose,id:"loanPurpose",name:"loanPurpose",placeholder:"Purpose of Loan"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",onChange:this.handleChange,value:this.state.ssn,id:"ssn",name:"ssn",placeholder:"Borrower's SSN"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"btn btn-success form-control",style:{width:"70%"},type:"submit",value:"Update"}))))}}]),a}(n.Component),f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL,v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loginUsername:"",loginPassword:"",baseURL:f,isLogin:!1},e.handleChange=function(t){e.setState(Object(u.a)({},t.currentTarget.id,t.currentTarget.value))},e.login=function(t){t.preventDefault(),fetch(e.state.baseURL+"/login",{method:"POST",body:JSON.stringify({username:e.state.loginUsername,password:e.state.loginPassword}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({loginUsername:t.username,loginPassword:"",token:t.token,userid:t.id,isLogin:!0}),localStorage.setItem("loginInfo",JSON.stringify({id:t.id,loginPassword:t.password,loginUsername:t.username,token:t.token}))})).catch((function(e){return console.error({Error:e})}))},e.logout=function(t){t.preventDefault(),e.setState({loginUsername:"",loginPassword:"",isLogin:!1,token:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLogin?r.a.createElement("div",null," ",r.a.createElement("button",{className:"btn btn-danger form-control",style:{marginLeft:"100px",width:"100px"},onClick:this.logout},"Logout"),r.a.createElement(g,null)," "):r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange,value:this.state.loginUsername,id:"loginUsername",name:"loginUsername",placeholder:"email (Username)"})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("input",{className:"form-control",type:"password",onChange:this.handleChange,value:this.state.loginPassword,id:"loginPassword",name:"loginPassword",placeholder:"Password"})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"btn btn-dark form-control",style:{marginLeft:"6px"},onClick:this.login},"Login"))))}}]),a}(n.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isSignUp:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(h,null),r.a.createElement(v,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.973dac81.chunk.js.map