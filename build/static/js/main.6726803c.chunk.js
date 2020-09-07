(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{45:function(e,t,a){e.exports=a(93)},53:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=a(96),l=(a(53),a(3)),i=a(4),u=a(6),m=a(5),d=a(97),p=a(44),v=a(95),h=a(18),f=a(12),g=a(30),b=a(2),k=a.n(b),y=a(11),E=a(29),w=a(42),j=a.n(w),O=a(16),S=a.n(O);var C={init:function(){},log:function(e){console.error(e)}};S.a.defaults.baseURL="https://infinite-plains-68389.herokuapp.com/api",S.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(C.log(e),h.toast.error("An unexpected error occurrred.")),Promise.reject(e)}));var N={get:S.a.get,post:S.a.post,put:S.a.put,delete:S.a.delete,setJwt:function(e){S.a.defaults.headers.common["x-auth-token"]=e}};function x(){return(x=Object(y.a)(k.a.mark((function e(t,a){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return localStorage.getItem("token")}N.setJwt(I());var P={login:function(e,t){return x.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem("token",e)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return j()(e)}catch(t){return null}},getJwt:I},R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a=Object(f.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))}))))}}]),a}(n.Component),_=a(14),A=a.n(_),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):A.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),D=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,o=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(R,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(M,{columns:t,data:o}))},G=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(E.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(G,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},"Delete")}};var n=P.getCurrentUser();return n&&n.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement(D,{columns:this.columns,data:t,sortColumn:n,onSort:a})}}]),a}(n.Component),T=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.selectedItem,s=e.onItemSelect;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{onClick:function(){return s(e)},key:e[n],className:e===o?"list-group-item active":"list-group-item"},e[a])})))};T.defaultProps={textProperty:"name",valueProperty:"_id"};var U=T,q=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange,s=Math.ceil(t/a);if(1===s)return null;var c=A.a.range(1,s+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return o(e)}},e))}))))};function B(e){return"".concat("/movies","/").concat(e)}function W(e){return N.get(B(e))}function F(e){if(e._id){var t=Object(f.a)({},e);return delete t._id,N.put(B(e._id),t)}return N.post("/movies",e)}function J(e){return N.delete(B(e))}function Q(){return N.get("/genres")}function z(e,t,a){var n=(t-1)*a;return A()(e).slice(n).take(a).value()}var V=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],currentPage:1,pageSize:4,searchQuery:"",selectedGenre:null,sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(){var t=Object(y.a)(k.a.mark((function t(a){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return e._id!==a._id})),e.setState({movies:r}),t.prev=3,t.next=6,J(a._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&h.toast.error("This movie has already been deleted."),e.setState({movies:n});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var a=Object(g.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(f.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.sortColumn,o=t.selectedGenre,s=t.searchQuery,c=t.movies,l=c;s?l=c.filter((function(e){return e.title.toLowerCase().startsWith(s.toLowerCase())})):o&&o._id&&(l=c.filter((function(e){return e.genre._id===o._id})));var i=z(A.a.orderBy(l,[r.path],[r.order]),n,a);return{totalCount:l.length,data:i}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a,n,r,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All Genres"}].concat(Object(g.a)(a)),e.next=7,N.get("/movies");case 7:r=e.sent,o=r.data,this.setState({movies:o,genres:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortColumn,o=e.searchQuery,s=this.props.user,c=this.getPagedData(),l=c.totalCount,i=c.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(U,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col"},s&&r.a.createElement(E.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20}},"New Movie"),r.a.createElement("p",null,"Showing ",l," movies in the database."),r.a.createElement(V,{value:o,onChange:this.handleSearch}),r.a.createElement(L,{movies:i,sortColumn:n,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),r.a.createElement(q,{itemsCount:l,pageSize:t,currentPage:a,onPageChange:this.handlePageChange})))}}]),a}(n.Component),$=a(8),H=a.n($),X=a(20),Y=a(43),Z=a(19),ee=function(e){var t=e.name,a=e.label,n=e.error,o=Object(Z.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{name:t,id:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},te=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,s=Object(Z.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},s,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o&&r.a.createElement("div",{className:"alert alert-danger"},o))},ae=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=H.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(Y.a)(t.details);try{for(r.s();!(a=r.n()).done;){var o=a.value;n[o.path[0]]=o.message}}catch(s){r.e(s)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(X.a)({},a,n),o=Object(X.a)({},a,e.schema[a]),s=H.a.validate(r,o).error;return s?s.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=Object(f.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var o=Object(f.a)({},e.state.data);o[a.name]=a.value,e.setState({data:o,errors:n})},e}return Object(i.a)(a,[{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderSelect",value:function(e,t,a){var n=this.state,o=n.data,s=n.errors;return r.a.createElement(te,{name:e,value:o[e],label:t,options:a,onChange:this.handleChange,error:s[e]})}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,o=n.data,s=n.errors;return r.a.createElement(ee,{type:a,name:e,value:o[e],label:t,onChange:this.handleChange,error:s[e]})}}]),a}(n.Component),ne=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:H.a.string(),title:H.a.string().required().label("Title"),genreId:H.a.string().required().label("Genre"),numberInStock:H.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:H.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.doSubmit=Object(y.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"populateGenres",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,W(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),a}(ae),re=function(){return r.a.createElement("h1",null,"Customers")},oe=function(){return r.a.createElement("h1",null,"Rentals")},se=function(){return r.a.createElement("h1",null,"Not Found")},ce=a(94),le=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(E.a,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/movies"},"Movies"),r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/customers"},"Customers"),r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/rentals"},"Rentals"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/register"},"Register")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/profile"},t.name),r.a.createElement(ce.a,{className:"nav-item nav-link",to:"/logout"},"Logout")))))},ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:H.a.string().required().label("Username"),password:H.a.string().required().label("Password")},e.doSubmit=Object(y.a)(k.a.mark((function t(){var a,n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,t.next=4,P.login(a.username,a.password);case 4:n=e.props.location.state,window.location=n?n.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(f.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return P.getCurrentUser()?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(ae);function ue(e){return N.post("/users",{email:e.username,password:e.password,name:e.name})}var me=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:H.a.string().required().email().label("Username"),password:H.a.string().required().min(5).label("Password"),name:H.a.string().required().label("Name")},e.doSubmit=Object(y.a)(k.a.mark((function t(){var a,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ue(e.state.data);case 3:a=t.sent,P.loginWithJwt(a.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((n=Object(f.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:n}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),a}(ae),de=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){P.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component),pe=function(e){e.path;var t=e.component,a=e.render,n=Object(Z.a)(e,["path","component","render"]);return r.a.createElement(p.a,Object.assign({},n,{render:function(e){return P.getCurrentUser()?t?r.a.createElement(t,e):a(e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ve=(a(89),a(90),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=P.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.ToastContainer,null),r.a.createElement(le,{user:t}),r.a.createElement("main",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/register",component:me}),r.a.createElement(p.a,{path:"/login",component:ie}),r.a.createElement(p.a,{path:"/logout",component:de}),r.a.createElement(pe,{path:"/movies/:id",component:ne}),r.a.createElement(p.a,{path:"/movies",render:function(t){return r.a.createElement(K,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(p.a,{path:"/customers",component:re}),r.a.createElement(p.a,{path:"/rentals",component:oe}),r.a.createElement(p.a,{path:"/not-found",component:se}),r.a.createElement(v.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(v.a,{to:"/not-found"}))))}}]),a}(n.Component)),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(91),a(92);s.a.render(r.a.createElement(c.a,null,r.a.createElement(ve,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");he?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):fe(e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.6726803c.chunk.js.map