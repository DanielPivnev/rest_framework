(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(34),c=a.n(r),o=(a(41),a(10)),i=a(11),l=a(13),d=a(12),u=(a(42),a(0)),j=function(e){var t=e.user;return Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-4 user",children:Object(u.jsxs)("div",{className:"list-group",id:"list-tab",role:"tablist",children:[Object(u.jsx)("a",{className:"list-group-item list-group-item-action active",id:"list-home-list","data-toggle":"list",href:"#list-home",role:"tab","aria-controls":"home",children:t.username}),Object(u.jsx)("a",{className:"list-group-item list-group-item-action",id:"list-profile-list","data-toggle":"list",href:"#list-profile",role:"tab","aria-controls":"profile",children:t.first_name}),Object(u.jsx)("a",{className:"list-group-item list-group-item-action",id:"list-messages-list","data-toggle":"list",href:"#list-messages",role:"tab","aria-controls":"messages",children:t.last_name}),Object(u.jsx)("a",{className:"list-group-item list-group-item-action",id:"list-settings-list","data-toggle":"list",href:"#list-settings",role:"tab","aria-controls":"settings",children:t.email})]})})})},h=function(e){var t=e.users;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"page-header",children:Object(u.jsx)("h2",{children:"Users"})}),Object(u.jsx)("div",{className:"users",children:t.map((function(e){return Object(u.jsx)(j,{user:e})}))})]})},m=a(21),b=a(5),p="",f=function(e){var t=e.project,a=e.users,s=e.f_e,n=e.delete_project;return Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsxs)("div",{className:"project",children:[Object(u.jsx)("div",{className:"project-property",children:t.name}),Object(u.jsx)("a",{href:t.project_link,className:"project-property middle-property",children:"Go to project"}),Object(u.jsx)("div",{className:"project-property",children:t.employees.map((function(e){return s?(s=!1,a.map((function(t){if(t.id===e)return t.first_name+" "+t.last_name}))):a.map((function(t){if(t.id===e)return", "+t.first_name+" "+t.last_name}))}))}),Object(u.jsx)("div",{className:"btn btn-danger",onClick:function(e){n.apply(void 0,Object(m.a)(function(e){return[e.target.getAttribute("data-id"),e.target.getAttribute("data-user-id")]}(e)))},"data-id":t.id,"data-user-id":t.leader,children:"Delete"})]})})},x=function(e){var t=e.projects,a=e.users,s=e.delete_project,n=e.load;return console.log(a),Object(u.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("h2",{children:"Projects"}),Object(u.jsx)("input",{className:"form-control me-2 search",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return function(e,t){p=e.target.value,t()}(e,n)},value:p})]}),t.map((function(e){if(e.name.includes(p)||""===p)return Object(u.jsx)(f,{f_e:!0,delete_project:function(e,t){s(e,t)},project:e,users:a})})),Object(u.jsx)(b.b,{className:"btn btn-light",to:"/create-project",children:"Create project"})]})},v=function(e){var t=e.todo,a=e.users,s=e.delete_todo;return Object(u.jsxs)("ul",{className:"list-group todo",children:[Object(u.jsx)("li",{className:"list-group-item todo-header",children:t.title}),Object(u.jsx)("li",{className:"list-group-item",children:t.text}),Object(u.jsxs)("li",{className:"list-group-item",children:["Created from: ",a.map((function(e){if(e.id===t.user)return e.first_name+" "+e.last_name}))]}),Object(u.jsxs)("li",{className:"list-group-item",children:["Latest update at ",t.updated_timestamp]}),Object(u.jsx)("li",{className:"list-group-item btn-delete btn-danger","data-todo-id":t.id,"data-user-id":t.user,onClick:function(e){s.apply(void 0,Object(m.a)(function(e){return[e.target.getAttribute("data-todo-id"),e.target.getAttribute("data-user-id")]}(e)))},children:"Delete"})]})},O=function(e){var t=e.project,a=e.users,s=e.todos,n=e.set_project,r=e.delete_todo;return Object(u.jsxs)("div",{className:"project-todos",children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsx)("div",{className:"todos-group",children:s.map((function(e){if(e.project===t.id&&e.active)return Object(u.jsx)(v,{todo:e,users:a,delete_todo:function(e,t){r(e,t)}})}))}),Object(u.jsx)(b.b,{className:"btn btn-light btn-todo",to:"/create-todo","data-project-id":"".concat(t.id),onClick:function(e){n(function(e){return e.target.getAttribute("data-project-id")}(e))},children:"Create todo"})]})},g=function(e){var t=e.todos,a=e.projects,s=e.set_project,n=e.users,r=e.delete_todo;return Object(u.jsxs)("div",{className:"todos",children:[Object(u.jsx)("div",{className:"page-header",children:Object(u.jsx)("h2",{children:"ToDo\u2019s"})}),a.map((function(e){return Object(u.jsx)(O,{delete_todo:function(e,t){r(e,t)},users:n,project:e,todos:t,set_project:s})}))]})},N=a(15),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={username:"",password:""},s}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.username,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"form",children:Object(u.jsxs)("form",{className:"form-area",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsxs)("div",{className:"form-group form-part",children:[Object(u.jsx)("label",{className:"label",htmlFor:"exampleInputEmail1",children:"Username"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"username",value:this.state.username,autoComplete:"username",onChange:function(t){return e.handleChange(t)}})]}),Object(u.jsxs)("div",{className:"form-group form-part",children:[Object(u.jsx)("label",{className:"label",htmlFor:"exampleInputPassword1",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:this.state.password,autoComplete:"password",onChange:function(t){return e.handleChange(t)}})]}),Object(u.jsx)("button",{type:"submit",className:"submit-btn btn btn-primary",children:"Login"})]})})}}]),a}(n.a.Component),k=a(9),y=a.n(k),C=a(2),S=a(18),w=a(36),F=function(e){return Object(w.a)(e),Object(u.jsx)("div",{className:"homeSlides",children:Object(u.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(u.jsxs)("div",{className:"carousel-indicators",children:[Object(u.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(u.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"})]}),Object(u.jsxs)("div",{className:"carousel-inner",children:[Object(u.jsxs)("div",{className:"carousel-item active","data-bs-interval":"5000",children:[Object(u.jsx)("img",{src:"artificial-intelligence-3706562_1280.webp",className:"img d-block w-100 ",alt:"..."}),Object(u.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(u.jsx)("h5",{children:"First slide label"}),Object(u.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),Object(u.jsxs)("div",{className:"carousel-item","data-bs-interval":"5000",children:[Object(u.jsx)("img",{src:"web-3706563__480.webp",className:"img d-block w-100",alt:"..."}),Object(u.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(u.jsx)("h5",{children:"Second slide label"}),Object(u.jsx)("p",{children:"Some representative placeholder content for the second slide."})]})]})]}),Object(u.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(u.jsx)("span",{"aria-hidden":"true"}),Object(u.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(u.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(u.jsx)("span",{"aria-hidden":"true"}),Object(u.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})},T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={title:"",text:"",created:!1},s}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.create_todo(this.state.title,this.state.text),this.state.created=!0,e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"form-create",children:Object(u.jsxs)("form",{className:"form-create-area",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Title"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Enter the title of the todo...",value:this.state.title,name:"title",autoComplete:"text",onChange:function(t){return e.handleChange(t)}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Text"}),Object(u.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"5",name:"text",placeholder:"Enter the todo...",value:this.state.text,autoComplete:"text",onChange:function(t){return e.handleChange(t)}})]}),this.state.created?Object(u.jsx)(C.a,{to:"/"}):Object(u.jsx)("button",{type:"submit",className:"submit-btn btn btn-create btn-success",children:"Create"})]})})}}]),a}(n.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={name:"",link:"",employees:[]},s}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"handleUsersChange",value:function(e){if(e.target.selectedOptions){this.state.employees=[];for(var t=0;t<e.target.selectedOptions.length;t++)this.state.employees.push(e.target.selectedOptions.item(t).value)}}},{key:"handleSubmit",value:function(e){this.props.create_project(this.state.name,this.state.link,this.state.employees),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"form-create",children:Object(u.jsxs)("form",{className:"form-create-area",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Enter the name of the project...",value:this.state.title,name:"name",autoComplete:"text",onChange:function(t){return e.handleChange(t)}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Link"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Enter the link to project...",value:this.state.title,name:"link",autoComplete:"text",onChange:function(t){return e.handleChange(t)}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Employees"}),Object(u.jsx)("select",{onChange:function(t){return e.handleUsersChange(t)},className:"form-select form-select-sm",multiple:!0,"aria-label":".form-select-sm example",children:this.props.users.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.first_name+" "+e.last_name})}))})]}),Object(u.jsx)("button",{type:"submit",className:"submit-btn btn btn-create btn-success",children:"Create"})]})})}}]),a}(n.a.Component),I=function(e){var t=e.location;return Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{className:"NotFound404",children:["Site at path '",t.pathname,"' wasn't found"]})})},D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={users:[],projects:[],todos:[],token:"",user:"",project:""},s}return Object(i.a)(a,[{key:"set_user",value:function(e){var t=this;this.state.users.map((function(a){a.username===e&&((new S.a).set("user",a.id),t.setState({user:a},(function(){return t.load_data()})))}))}},{key:"get_user_from_storage",value:function(){var e=this,t=(new S.a).get("user");this.setState({user:t},(function(){return e.load_data()}))}},{key:"set_project",value:function(e){this.state.project=e,console.log(this.state.project)}},{key:"create_todo",value:function(e,t){var a=this;if(this.is_authenticated()&&e&&t){var s=this.get_headers(),n={title:e,text:t,project:this.state.project,user:this.state.user};console.log(n),y.a.post("http://127.0.0.1:8000/api/todos/",n,{headers:s}).then((function(e){a.load_data()})).catch((function(e){return console.log(e)}))}else alert("You aren't login or title and text are empty...")}},{key:"delete_todo",value:function(e,t){var a=this;if(this.is_authenticated()&&this.state.user===t){var s=this.get_headers();y.a.delete("http://127.0.0.1:8000/api/todos/".concat(e),{headers:s}).then((function(e){a.load_data()})).catch((function(e){return console.log(e)}))}else alert("You aren't login or it isn't your todo...")}},{key:"delete_project",value:function(e,t){var a=this;if(this.is_authenticated()&&this.state.user===t){var s=this.get_headers();y.a.delete("http://127.0.0.1:8000/api/projects/".concat(e),{headers:s}).then((function(e){a.load_data()})).catch((function(e){return console.log(e)}))}else alert("You aren't login or your aren't the leader of this project...")}},{key:"create_project",value:function(e,t,a){var s=this;if(this.is_authenticated()&&e&&t&&a.length>0){var n=this.get_headers(),r={name:e,link:t,employees:a,user:this.state.user};console.log(r),y.a.post("http://127.0.0.1:8000/api/projects/",r,{headers:n}).then((function(e){s.load_data()})).catch((function(e){return console.log(e)}))}else alert("You aren't login or some fields are empty...")}},{key:"set_token",value:function(e){var t=this;(new S.a).set("token",e),this.setState({token:e},(function(){return t.load_data()}))}},{key:"is_authenticated",value:function(){return!!this.state.token}},{key:"logout",value:function(){this.set_token(""),this.load_data(),console.log(this.state.token)}},{key:"get_token_from_storage",value:function(){var e=this,t=(new S.a).get("token");this.setState({token:t},(function(){return e.load_data()}))}},{key:"get_token",value:function(e,t){var a=this;y.a.post("http://127.0.0.1:8000/api-token-auth/",{username:e,password:t}).then((function(t){a.set_token(t.data.token),a.set_user(e)})).catch((function(e){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}))}},{key:"get_headers",value:function(){var e={"Content-Type":"application/json;",Authorization:""};return this.is_authenticated()&&(e.Authorization="Token "+this.state.token),e}},{key:"load_data",value:function(){var e=this,t=this.get_headers();console.log(t),y.a.get("http://127.0.0.1:8000/api/users/",{headers:t}).then((function(t){var a=t.data;e.setState({users:a})})).catch((function(e){console.log(e)})),y.a.get("http://127.0.0.1:8000/api/projects/",{headers:t}).then((function(t){var a=t.data;e.setState({projects:a.results})})).catch((function(e){console.log(e)})),y.a.get("http://127.0.0.1:8000/api/todos/",{headers:t}).then((function(t){var a=t.data;e.setState({todos:a.results})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.get_token_from_storage(),this.get_user_from_storage()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{children:Object(u.jsxs)(b.a,{children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light nav-color main-nav navigation",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:"ToDo List"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/",children:Object(u.jsx)("a",{className:"nav-link",href:"#",children:"Home"})})}),this.is_authenticated()?Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/todos",children:Object(u.jsx)("a",{className:"nav-link",href:"#",children:"Todos"})})}):Object(u.jsx)("li",{}),this.is_authenticated()?Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/projects",children:Object(u.jsx)("a",{className:"nav-link",href:"#",children:"Projects"})})}):Object(u.jsx)("li",{}),this.is_authenticated()?Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(b.b,{className:"nav-link",to:"/users",children:Object(u.jsx)("a",{className:"nav-link",href:"#",children:"Users"})})}):Object(u.jsx)("li",{}),Object(u.jsx)("li",{className:"nav-item",children:this.is_authenticated()?Object(u.jsxs)(b.b,{className:"nav-link",children:[Object(u.jsx)("a",{className:"nav-link",onClick:function(){return e.logout()},children:"Logout"}),Object(u.jsx)(C.a,{to:"/"})]}):Object(u.jsx)(b.b,{className:"nav-link",to:"/login",children:Object(u.jsx)("a",{className:"nav-link",href:"#",children:"Login"})})})]})})]}),Object(u.jsxs)(C.d,{children:[Object(u.jsx)(C.b,{exact:!0,path:"/",component:function(){return Object(u.jsx)(F,{})}}),Object(u.jsx)(C.b,{exact:!0,path:"/users",component:function(){return Object(u.jsx)(h,{users:e.state.users})}}),Object(u.jsx)(C.b,{exact:!0,path:"/projects",component:function(){return Object(u.jsx)(x,{projects:e.state.projects,users:e.state.users,delete_project:function(t,a){return e.delete_project(t,a)},load:function(){return e.load_data()}})}}),Object(u.jsx)(C.b,{exact:!0,path:"/todos",component:function(){return Object(u.jsx)(g,{todos:e.state.todos,projects:e.state.projects,users:e.state.users,set_project:function(t){e.set_project(t)},delete_todo:function(t,a){e.delete_todo(t,a)}})}}),Object(u.jsx)(C.b,{exact:!0,path:"/create-todo",component:function(){return Object(u.jsx)(T,{create_todo:function(t,a){return e.create_todo(t,a)}})}}),Object(u.jsx)(C.b,{exact:!0,path:"/create-project",component:function(){return Object(u.jsx)(E,{create_project:function(t,a,s){return e.create_project(t,a,s)},users:e.state.users})}}),Object(u.jsx)(C.b,{exact:!0,path:"/login",component:function(){return Object(u.jsx)(_,{get_token:function(t,a){return e.get_token(t,a)}})}}),Object(u.jsx)(C.b,{component:I})]})]})}),Object(u.jsx)("footer",{className:"bg-light text-center text-lg-start",children:Object(u.jsx)("div",{className:"text-center p-3 footerH",children:"\xa9 2021 ToDo List"})})]})}}]),a}(n.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),L()}},[[70,1,2]]]);
//# sourceMappingURL=main.755d142d.chunk.js.map