(this["webpackJsonpportfolio-page"]=this["webpackJsonpportfolio-page"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),c=a.n(o),i=(a(63),a(12)),l=a(4),s=a.n(l),u=a(9),m=a(2),d=a(20),p=a(40),f=a.n(p),g=function(){return window.history.replaceState({},document.title,window.location.pathname)},h=Object(n.createContext)(),v=function(){return Object(n.useContext)(h)},b=(a(66),a(8)),E=a(14),_=a(15);a(69);var w=function(){return r.a.createElement("div",{className:"logo"},"JEmil")};a(70);function y(e){var t=Object(n.useRef)(null);return function(e,t){function a(a){e.current&&!e.current.contains(a.target)&&t()}Object(n.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}))}(t,e.close),r.a.createElement("div",{ref:t},e.children)}function O(){var e=v(),t=e.isAuthenticated,a=e.loginWithRedirect,n=e.logout,o=t?{class:"button logout",onClick:function(){return n()},text:"Log out"}:{class:"button login",onClick:function(){return a({})},text:"Log in"};return r.a.createElement("button",{className:o.class,onClick:o.onClick},o.text)}var j=function(){var e=v().isAuthenticated,t=Object(n.useState)(!1),a=Object(m.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(window.innerWidth<1024),l=Object(m.a)(i,2),s=l[0],u=l[1],d=function(){u(window.innerWidth<1024)};Object(n.useEffect)((function(){return window.addEventListener("orientationchange",d),window.addEventListener("resize",d),function(){window.removeEventListener("orientationchange",d),window.removeEventListener("resize",d)}}));var p="/React_Portfolio";return r.a.createElement("div",{className:"header"},r.a.createElement(b.a,{to:p},r.a.createElement(w,null)),r.a.createElement(y,{close:function(){o&&s&&c(!o)}},r.a.createElement("nav",{className:"nav",onClick:function(){o&&c(!o)}},r.a.createElement(E.a,{icon:_.a,size:"lg",onClick:function(){s&&c(!o)}}),r.a.createElement("ul",{className:!o&&s?"hidden":"ul"},r.a.createElement(O,null),r.a.createElement(b.a,{to:p},r.a.createElement(E.a,{icon:_.d,size:"lg"}),"home"),r.a.createElement(b.a,{to:p+"/projects"},r.a.createElement(E.a,{icon:_.c,size:"lg"}),"projects"),r.a.createElement(b.a,{to:p+"/contact"},r.a.createElement(E.a,{icon:_.b,size:"lg"}),"contact"),r.a.createElement(b.a,{to:p+"/how-to"},r.a.createElement(E.a,{icon:_.e,size:"lg"}),"how-to"),e&&r.a.createElement(b.a,{to:p+"/profile"},r.a.createElement(E.a,{icon:_.f,size:"lg"}),"profile")))))};a(73);var k=function(e){var t=e.className,a=e.text,n=e.to,o=e.id;return r.a.createElement(b.a,{to:n,id:o,className:"button ".concat(t)},a)},x=(a(74),a(43)),N=a.n(x),P=a(16),C=a(38);var T=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=e.current.children,a=t.title,n=t.subtitle,r=t.projects,o=t.contact,c=t.ship;console.log(a),console.log(t),P.a.registerPlugin(C.a),P.a.set([a,n,r,o],{autoAlpha:0}),P.a.set(c,{xPercent:-50,yPercent:-20,autoAlpha:1,transformOrigin:"50% 50%"}),P.a.timeline({defaults:{ease:"Power0.easeNone"}}).fromTo(a,{x:"-=300"},{duration:.7,x:"+=300",autoAlpha:1}).fromTo(n,{x:"-=300"},{duration:.7,x:"+=300",autoAlpha:1}).fromTo(r,{x:"-=300"},{duration:.5,x:"+=300",autoAlpha:1}).fromTo(o,{x:"+=300"},{duration:.5,x:"-=300",autoAlpha:1},"-=.5"),P.a.timeline({defaults:{ease:"Power1.easeOut"}}).add(P.a.timeline({defaults:{ease:"Power1.easeOut"}}).addLabel("tiltOne",.2).addLabel("tiltTwo",.7).addLabel("tiltThree",1.6).to(c,{duration:10,immediateRender:!0,ease:"Elastic.easeOut.config(1, 1.2)",motionPath:"M-399.25379,-340.71797 C-399.25379,-340.71797 386.70813,-284.92113 420.50613,-152.49513 454.28013,-20.09013 -159.91287,-245.09513 -159.91287,-91.90313 -159.91287,61.26087 378.10113,-103.60513 384.90413,21.27287 391.70213,146.13787 122.70503,104.22685 122.70503,104.22685 "},0).from(c,{duration:4,scale:.1,immediateRender:!1},0).to(c,{duration:.5,rotate:"15deg",ease:"Power1.easeInOut"},"tiltOne").to(c,{duration:.5,rotate:"-15deg",ease:"Power1.easeInOut"},"tiltTwo").to(c,{duration:.5,rotate:"15deg",ease:"Power1.easeInOut"},"tiltThree").to(c,{duration:.7,rotate:"0deg",ease:"Back.easeOut.config(8)"},"tiltThree+=1"),.5)}),[]),r.a.createElement("div",{className:"home"},r.a.createElement("div",{ref:e,className:"welcome"},r.a.createElement("h1",{className:"title",id:"title"},"Hi, I'm Emil"),r.a.createElement("h2",{id:"subtitle"},"let's get to know each other"),r.a.createElement(k,{id:"projects",className:"projects",text:"projects",to:"React_Portfolio/projects"}),r.a.createElement(k,{id:"contact",className:"contact",text:"contact",to:"React_Portfolio/contact"}),r.a.createElement("img",{className:"ship",id:"ship",src:N.a,alt:"UFO ship",style:{visibility:"hidden",height:50,width:50,position:"absolute",top:400,left:200}})))},R=a(19),z=a(44),S=a.n(z),A=a(45),I=a.n(A),L=a(46),D=a.n(L),W=(a(76),function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var B=function(e){var t=e.name,a=e.git,o=e.preview,c=e.imgs,i=Object(R.useAsync)(W,[D.a]),l=Object(n.useState)(!1),s=Object(m.a)(l,2),u=s[0],d=s[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),g=f[0],h=f[1];Object(n.useEffect)((function(){if(u){var e=setInterval((function(){h(g<c.length-1?g+1:0)}),3500);return function(){return clearInterval(e)}}}),[u,c.length,g]);var v=u?{backgroundImage:"url("+c[g].src+")"}:{};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"project__title"},t),r.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",title:"See demo"},r.a.createElement("img",{src:S.a,alt:"See demo"})),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",title:"GitHub"},r.a.createElement("img",{src:I.a,alt:"GitHub"})),i.loading&&r.a.createElement("div",{className:"gifs__loading"},"Loading"),i.error&&r.a.createElement("div",{className:"gifs__error"},"Error: ",i.error.message),i.result&&r.a.createElement("div",{className:"TV"},r.a.createElement("div",{className:"TV__frame",style:{backgroundImage:"url(".concat(i.result.url,")")}}),r.a.createElement("div",{className:u?"TV__screen TV__screen-on":"TV__screen",style:v}),r.a.createElement("div",{className:u?"TV__switch TV__switch-active":"TV__switch",onClick:function(){d(!u),h(0)},title:"Turn ON/OFF"})))},G=(a(77),[{id:1,name:"Company Incomes",git:"https://github.com/Ecuki/company-incomes",preview:"https://ecuki.github.io/company-incomes/",imgs:[{src:"/React_Portfolio/img/company/tab_1.jpg",alt:"Material Table with companies incomes"},{src:"/React_Portfolio/img/company/tab_2.jpg",alt:"Company details view"},{src:"/React_Portfolio/img/company/tab_3.jpg",alt:"Nivo Bar Chart"}]},{id:2,name:"Crazy Balls",git:"https://github.com/Ecuki/CrazyBalls",preview:"https://ecuki.github.io/CrazyBalls/",imgs:[{src:"/React_Portfolio/img/crazy_ball/crazy_balls_1.jpg",alt:"Gravity simulation"},{src:"/React_Portfolio/img/crazy_ball/crazy_balls_2.jpg",alt:"Score save in local storage"},{src:"/React_Portfolio/img/crazy_ball/crazy_balls_3.jpg",alt:"Scores board"},{src:"/React_Portfolio/img/crazy_ball/crazy_balls_4.gif",alt:"Modern design and beautiful graphics"}]},{id:3,name:"Ola i Zuzia",git:"https://github.com/Ecuki/OlaZuziaHeruku",preview:"https://ola-zuzia.herokuapp.com/",imgs:[{src:"/React_Portfolio/img/ola_zuzia/ola_zuzia_1.gif",alt:"Colorful page for Ola and Zuzia"},{src:"/React_Portfolio/img/ola_zuzia/ola_zuzia_2.gif",alt:"Dynamically generated welcome message and photo"},{src:"/React_Portfolio/img/ola_zuzia/ola_zuzia_3.gif",alt:"Simple chat"},{src:"/React_Portfolio/img/ola_zuzia/ola_zuzia_4.jpg",alt:"Interactive letters"}]},{id:4,name:"Portfolio 1.0",git:"https://github.com/Ecuki/Portfolio",preview:"https://ecuki.github.io/Portfolio/",imgs:[{src:"/React_Portfolio/img/portfolio/portfolio_1.jpg",alt:"Portfolio start page"},{src:"/React_Portfolio/img/portfolio/portfolio_2.jpg",alt:"Flip cards"},{src:"/React_Portfolio/img/portfolio/portfolio_3.jpg",alt:"Simple image slider"},{src:"/React_Portfolio/img/portfolio/portfolio_4.jpg",alt:"Circle image slider"},{src:"/React_Portfolio/img/portfolio/portfolio_5.gif",alt:"Circle image slider"}]}]);var V=function(){return r.a.createElement("div",{className:"projects-site"},G.map((function(e){return r.a.createElement(B,Object.assign({key:e.id},e))})))};a(78);var F=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),p=d[0],f=d[1];return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();""!==a&&""!==l&&(!function(e,t){window.emailjs.send("gmail",e,t).then((function(e){alert("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}("template_QBf5wqdK",{message_html:a,from_name:l,reply_to:"jeziorski.emil@gmail.com",from_email:p}),s(""),f(""),o(""))}},r.a.createElement("h1",null,"write to me!"),r.a.createElement("input",{id:"name",name:"name",type:"text",onChange:function(e){return s(e.target.value)},placeholder:"name",required:!0,value:l}),r.a.createElement("input",{id:"email",name:"email",type:"email",onChange:function(e){return f(e.target.value)},placeholder:"email",required:!0,value:p}),r.a.createElement("textarea",{id:"message",name:"message",onChange:function(e){return o(e.target.value)},placeholder:"ask me a question or write what you want",required:!0,value:a}),r.a.createElement("input",{type:"submit",value:"Send",className:"button"}))},H=a(47),U=a(49),q=a.n(U),M=a(50),X=a.n(M),K=(a(80),function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=""!==t,!e.t0){e.next=5;break}return e.next=4,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("jVp98MydXglb8I0XjnrH2kcQlGnXiMGO","&q=").concat(t,"&limit=25&offset=0&rating=G&lang=en"));case 4:e.t0=e.sent.json();case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(R.useAsync)(K,[l]);return r.a.createElement("div",{className:"gifs"},r.a.createElement("h1",{className:"gifs__title"},"Or just search for GIFs",r.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude0e")),r.a.createElement("form",{className:"gifs__form",onSubmit:function(e){e.preventDefault(),s(a)}},r.a.createElement("input",{type:"text",value:a,onChange:function(e){return o(e.target.value)},placeholder:"search for Gifs"}),r.a.createElement("button",{type:"submit",className:"button"},"Search")),r.a.createElement(r.a.Fragment,null,u.loading&&r.a.createElement("div",{className:"gifs__loading"},"Loading"),u.error&&r.a.createElement("div",{className:"gifs__error"},"Error: ",u.error.message),u.result&&r.a.createElement("div",{className:"gifs__conteiner"},u.result.data.map((function(e){return r.a.createElement("div",{key:e.images.preview_webp.url,className:"gif_bgi",style:{backgroundImage:"url(".concat(e.images.preview_webp.url,")")}}," ",r.a.createElement("video",{autoPlay:!0,loop:!0,title:e.title,src:e.images.preview.mp4}))}))),r.a.createElement("img",{className:"gifs__logo",src:window.innerWidth>600?X.a:q.a,alt:"Giphy logo"})))};a(81);function Q(e){return e.contacts.map((function(e){return r.a.createElement(Z,Object.assign({key:e.value},e))}))}function Z(e){var t=e.type,a=e.link,n=e.value,o=e.message,c=Object(H.a)(n,{successDuration:1500}),i=Object(m.a)(c,2),l=i[0],s=i[1];return r.a.createElement("div",{key:t},r.a.createElement("h2",{className:"contact__subtitle"},t),r.a.createElement("div",{className:"contact__text"},a?r.a.createElement("a",{href:a,className:"contact__link"},n):r.a.createElement("span",null," ",n),r.a.createElement("p",{className:"contact_message"},o)," ",r.a.createElement("button",{onClick:s,className:"button"},l?"Copied \ud83d\udc4d":"Copy! ")))}var Y=function(){return r.a.createElement("div",{className:"contact-site"},r.a.createElement("div",{className:"contact__section"},r.a.createElement("h1",{className:"contact__title"},"contact"),r.a.createElement(Q,{contacts:[{type:"email",value:"jeziorski.emil@gmail.com",message:"You can write me an email\ud83d\udcee\ud83d\udce9"},{type:"phone",value:"726 558 563",message:"or you can call \ud83d\udcf1\ud83d\udcde"},{type:"gitHub",value:"github.com/ecuki",link:"https://github.com/Ecuki",message:"I'm just getting started \ud83d\ude0a"},{type:"facebook",value:"I do not use",message:"such a waste of time \ud83d\ude1c"}]})),r.a.createElement(F,null),r.a.createElement(J,null))},$=a(11),ee=a(25);a(82);function te(e){var t=e.id,a=void 0===t?Date.now():t,o=e.description,c=void 0===o?"":o,i=e.url,l=void 0===i?"":i,s=e.text,u=void 0===s?"":s,m=e.isEdited,d=Object(n.useContext)(ie).dispatch;return r.a.createElement("div",{className:"modal"},r.a.createElement("span",{className:"exit",onClick:function(){return d({type:"exit"})}},"+"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={};Object(ee.a)(e.currentTarget).map((function(e){return e.name,t[e.name]=e.value})),d({type:m?"update":"post",payload:t})}(e)},onReset:function(e){return function(e){e.preventDefault();var t=Object(ee.a)(e.currentTarget),a=t.findIndex((function(e){return"id"===e.name}));d({type:"delete",payload:t[a].value})}(e)},key:a},r.a.createElement("label",{htmlFor:"id"},"Id:"),r.a.createElement("input",{type:"text",name:"id",defaultValue:a,disabled:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{type:"text",name:"description",defaultValue:c,required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"url"},"Url:"),r.a.createElement("input",{type:"text",name:"url",defaultValue:l,required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"text"},"Text:"),r.a.createElement("textarea",{type:"text",name:"text",defaultValue:u,disabled:!1,required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Save",className:"button save"}),r.a.createElement("input",{type:"reset",value:"Delete",className:"button delete",disabled:!m})))}function ae(){var e=Object(n.useContext)(ie).dispatch;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"search"},"How to:"),r.a.createElement("input",{type:"text",id:"search",name:"q","aria-label":"Search for HowTO",onChange:function(t){return function(t){t.preventDefault();var a=t.currentTarget.value.split(" ");e({type:"search",payload:a})}(t)},placeholder:"search"}))}var ne=a(18),re=a.n(ne),oe=(a(99),Object({NODE_ENV:"production",PUBLIC_URL:"/React_Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"FOBXmh39zG8VDDWBrweBoynUNGjsiD8P",REACT_APP_DOMAIN:"ecuki.eu.auth0.com",REACT_APP_GIPHY:"jVp98MydXglb8I0XjnrH2kcQlGnXiMGO",REACT_APP_MONGODB:"mongodb+srv://ecuki:ecuki@cluster0-y1tva.mongodb.net/howto?retryWrites=true&w=majority",REACT_APP_PORT:"5000"}).PORT||"5000"),ce="http://localhost:".concat(oe,"/howtos"),ie=r.a.createContext();function le(e,t){switch(t.type){case"load":return Object($.a)({},e,{active:t.payload[0]?t.payload[0]._id:0,items:t.payload.map((function(e){return e={id:e._id,description:e.description,url:e.url,text:e.text}}))});case"active":return Object($.a)({},e,{active:t.payload});case"new":return Object($.a)({},e,{modal:!0});case"post":var a=t.payload,n=a.description,r=a.url,o=a.text;return re.a.post(ce,{description:n,url:r,text:o}).then((function(e){console.log(e),window.location.reload()})).catch((function(e){return console.log(e)})),Object($.a)({},e);case"delete":return re.a.delete(ce+"/"+t.payload).then((function(e){console.log(e),window.location.reload()})).catch((function(e){return console.log(e)})),Object($.a)({},e);case"edit":return Object($.a)({},e,{modal:!0,isEdited:!0,active:t.payload});case"exit":return Object($.a)({},e,{modal:!1,isEdited:!1});case"update":var c=t.payload,i=c.description,l=c.url,s=c.text;return re.a.put(ce+"/"+t.payload.id,{description:i,url:l,text:s}).then((function(e){console.log(e),window.location.reload()})).catch((function(e){return console.log(e)})),Object($.a)({},e);case"search":return Object($.a)({},e,{search:t.payload});default:return e}}var se=function(){var e=Object(n.useReducer)(le,{active:0,items:[],search:[""],modal:!1,isEdited:!1}),t=Object(m.a)(e,2),a=t[0],o=t[1],c=v().isAuthenticated,i=a.items,l=a.search,s=a.active,u=a.modal,d=a.isEdited,p=function(){return i.filter((function(e){return e.id===s}))[0]};return Object(n.useEffect)((function(){console.log(ce),re.a.get(ce).then((function(e){return o({type:"load",payload:e.data})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(ie.Provider,{value:{dispatch:o,isAuthenticated:c,active:s}},r.a.createElement("div",{className:"howTo"},r.a.createElement(ae,null),r.a.createElement(ue,{items:function(){var e=[];return 1===l.length&&""===l[0]?e=i:i.map((function(t){return l.map((function(a){var n=!!t.description.toLowerCase().includes(a.toLowerCase()),r=-1===e.indexOf(t);return n&&r&&""!==a?e.push(t):null}))})),e}()}),r.a.createElement(de,p())),u&&r.a.createElement(te,Object.assign({isEdited:d},d?p():{})))};function ue(e){var t=e.items;return r.a.createElement("ul",{className:"howTo__list"},t.map((function(e){return r.a.createElement(me,Object.assign({key:e.id},e))})))}function me(e){var t=e.id,a=e.description,o=Object(n.useContext)(ie).dispatch,c=Object(n.useContext)(ie).active;return r.a.createElement("li",{id:t,key:t,onClick:function(){return o({type:"active",payload:t})},className:t===c?"active":""},a)}function de(e){var t=e.id,a=e.text,o=e.url,c=Object(n.useContext)(ie),i=c.dispatch,l=c.isAuthenticated,s=c.active;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"howTo__description-top"},r.a.createElement("button",{onClick:function(){i({type:"edit",payload:t})},className:"button",disabled:!s||!l},"Edit")),r.a.createElement("p",{className:"howTo__description-mid"}," ",a),r.a.createElement("div",{className:"howTo__description-bottom"},r.a.createElement("a",{className:"howTo__link",href:o,target:"_blank",rel:"noopener noreferrer"},"Learn more"),r.a.createElement("button",{className:"button new",onClick:function(e){e.preventDefault(),i({type:"new"})},title:"Add new",disabled:!l},"New")))}a(100);var pe=function(){var e=v(),t=e.loading,a=e.user;return t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"profile"},r.a.createElement("img",{src:a.picture,alt:"Profile"}),r.a.createElement("h2",null,a.name),r.a.createElement("p",null,a.email))},fe=function(e){var t=e.component,a=e.path,o=Object(d.a)(e,["component","path"]),c=v(),l=c.loading,m=c.isAuthenticated,p=c.loginWithRedirect,f="/React_Portfolio";Object(n.useEffect)((function(){l||m||function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({appState:{targetUrl:window.location.pathname+f}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,m,p,a]);return console.log(a),r.a.createElement(i.a,Object.assign({path:f+a,render:function(e){return!0===m?r.a.createElement(t,e):null}},o))},ge=a(5),he=Object(ge.a)();var ve=function(){var e="/React_Portfolio";return v().loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"app"},r.a.createElement(i.b,{history:he},r.a.createElement(j,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"".concat(e),exact:!0,component:T}),r.a.createElement(i.a,{path:"".concat(e,"/projects"),component:V}),">",r.a.createElement(i.a,{path:"".concat(e,"/contact"),component:Y}),r.a.createElement(i.a,{path:"".concat(e,"/how-to"),component:se}),r.a.createElement(fe,{path:"".concat(e,"/profile"),component:pe}),r.a.createElement(i.a,{path:"".concat(e,"/"),render:function(){return r.a.createElement("div",null,"404")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,o=void 0===a?g:a,c=Object(d.a)(e,["children","onRedirectCallback"]),i=Object(n.useState)(),l=Object(m.a)(i,2),p=l[0],v=l[1],b=Object(n.useState)(),E=Object(m.a)(b,2),_=E[0],w=E[1],y=Object(n.useState)(),O=Object(m.a)(y,2),j=O[0],k=O[1],x=Object(n.useState)(!0),N=Object(m.a)(x,2),P=N[0],C=N[1],T=Object(n.useState)(!1),R=Object(m.a)(T,2),z=R[0],S=R[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(c);case 2:if(t=e.sent,k(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,o(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,v(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,w(i);case 19:C(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},S(!0),e.prev=2,e.next=5,j.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,S(!1),e.finish(10);case 13:return e.next=15,j.getUser();case 15:a=e.sent,w(a),v(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,j.handleRedirectCallback();case 3:return e.next=5,j.getUser();case 5:t=e.sent,C(!1),v(!0),w(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{isAuthenticated:p,user:_,loading:P,popupOpen:z,loginWithPopup:A,handleRedirectCallback:I,getIdTokenClaims:function(){return j.getIdTokenClaims.apply(j,arguments)},loginWithRedirect:function(){return j.loginWithRedirect.apply(j,arguments)},getTokenSilently:function(){return j.getTokenSilently.apply(j,arguments)},getTokenWithPopup:function(){return j.getTokenWithPopup.apply(j,arguments)},logout:function(){return j.logout.apply(j,arguments)}}},t)}),{domain:"ecuki.eu.auth0.com",client_id:"FOBXmh39zG8VDDWBrweBoynUNGjsiD8P",redirect_uri:window.location.origin+"/React_Portfolio",onRedirectCallback:function(e){he.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports=a.p+"static/media/ship.4df5ac0f.png"},44:function(e,t,a){e.exports=a.p+"static/media/eye.e70ae992.svg"},45:function(e,t,a){e.exports=a.p+"static/media/github_icon.a9f7ad3d.svg"},46:function(e,t,a){e.exports=a.p+"static/media/tv-cut2.d8e43799.png"},49:function(e,t,a){e.exports=a.p+"static/media/PoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.d6fbf239.gif"},50:function(e,t,a){e.exports=a.p+"static/media/PoweredBy_640_Horizontal_Light-Backgrounds_With_Logo.cc636247.gif"},58:function(e,t,a){e.exports=a(101)},63:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},99:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.0b59f8d7.chunk.js.map