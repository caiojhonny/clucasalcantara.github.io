(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"register",function(){return V}),n.d(r,"unregister",function(){return K});var a=n(0),o=n.n(a),i=n(20),c=n.n(i),l=n(74),u=n(33),s=n(9),d=n(28),m=n.n(d),f=n(2),p=n(29),g=n.n(p),v=f.a.div(function(e){return{padding:".5rem",justifyContent:"center",textTransform:"uppercase",color:e.color||"black"}}),h=f.a.div(function(e){return{fontSize:".8rem",fontWeight:300,color:e.color||"blue"}});function b(e){var t=e.content,n=e.subtitle,r=e.color,a=e.subtitleColor;return o.a.createElement(v,{color:r},o.a.createElement("div",{className:"content"},t),n&&o.a.createElement(h,{color:a},n))}b.defaultProps={content:"LOGO",subtitle:"Sua logo aqui",color:"black",subtitleColor:"blue"};var k=f.a.a({textDecoration:"none",color:"black"}),E=function(e){var t=e.text,n=e.href;return o.a.createElement(k,{href:n},t)},w=f.a.li({padding:".5rem",listStyle:"none"}),x=function(e){var t=e.text,n=e.path;return o.a.createElement(w,null,o.a.createElement(E,{href:n,text:t}))},y=n(34),O=f.a.div({padding:".3rem",background:"transparent",cursor:"pointer"}),j=function(e){var t=e.iconName,n=e.size,r=void 0===n?"1em":n,a=e.handleClick,i=void 0===a?function(){return console.log("Clicked")}:a,c=y[t];return o.a.createElement(O,null,o.a.createElement(c,{size:r,onClick:function(){return i()}}))},C=n(73),M=f.a.div({marginTop:"1rem",textAlign:"center",padding:".5rem",fontSize:".7rem"});function I(e){var t=e.description,n=e.author,r=e.url,a=e.darkMode;return o.a.createElement(M,null,t," by"," ",o.a.createElement(C.a,{to:r,target:"_blank"},o.a.createElement(S,{darkMode:a},"".concat(n))))}var S=f.a.span(function(e){return{textDecoration:e.darkMode?"underline !important":"none"}}),W=f.a.div(function(e){var t=e.palette;return{margin:".5rem",padding:".5rem",fontSize:".7rem",background:"".concat(t.blue," !important"),color:"white"}}),z=(n(50),f.a.div({display:"flex",padding:"1rem",justifyContent:"space-between",alignItems:"center",background:"transparent"})),P=function(e){var t=e.darkMode,n=e.setDarkMode;return o.a.createElement(z,null,o.a.createElement(j,{iconName:"IoIosSunny",handleClick:function(){return n(!1)}}),o.a.createElement(g.a,{checked:t,icons:!1,onChange:function(){return n(!t)}}),o.a.createElement(j,{iconName:"IoMdMoon",handleClick:function(){return n(!0)}}))},D=f.a.footer({width:"100%",display:"flex",justifyContent:"space-around",bottom:0,left:0,position:"relative",fontSize:".7rem",marginTop:"5rem"}),T=function(){return o.a.createElement(D,null,o.a.createElement("p",null,"\xa9 2019 Todos os direitos reservados"))},F=n(1),A=f.a.ul(function(e){return{display:"flex",flexDirection:e.isMobile?"column":"row"}}),L=function(e){var t=e.navItems,n=e.isMobile,r=e.handleOpen,a=e.isOpen;return o.a.createElement(A,{isMobile:n},n&&o.a.createElement(j,{size:"2em",iconName:a?"IoIosClose":"IoIosMenu",handleClick:function(){return r(!a)}}),!n&&function(e){return e.map(function(e){var t=e.text,n=e.path;return o.a.createElement(x,{key:n,text:t,path:n})})}(t))},N=f.a.header(function(e){var t=e.palette;return{top:0,left:0,textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",position:"sticky",background:e.darkMode?t.black:t.white,transition:"all .2s ease-in"}}),R=function(e){var t=e.navItems,n=e.title,r=e.subtitle,a=e.theme.colors,i=e.isMobile,c=e.darkMode,l=e.handleOpen,u=e.isOpen;return o.a.createElement(N,{palette:a,darkMode:c},o.a.createElement(b,{content:n,subtitle:r,color:a.main,subtitleColor:a.blue}),o.a.createElement(L,{navItems:t,isMobile:i,handleOpen:l,isOpen:u}))};N.propTypes={isMobile:F.bool,navItems:F.array,title:F.string,subtitle:F.string,theme:F.object},N.defaultProps={navItems:[]};var _=function(e){var t=e.children,n=e.loadingContent;return o.a.createElement(a.Suspense,{fallback:n},t)};_.defaultProps={loadingContent:o.a.createElement("div",null,"Loading...")};var B=f.a.div(function(e){var t=e.isOpen;return{display:t?"block":"none",transition:t?"opacity 3s, height 0":"opacity 3s, height 0 3s",opacity:t?"1":"0"}});function U(e){var t=e.navItems,n=e.isOpen;return o.a.createElement(B,{isOpen:n},t.map(function(e){var t=e.text,n=e.path;return o.a.createElement(x,{key:n,text:t,path:n})}))}var q=f.a.div(function(e){var t=e.palette;return{display:"flex",flexDirection:"column",minWidth:"25rem",minHeight:"12rem",background:e.darkMode?t.main:t.gray,padding:"1rem",margin:".5rem",borderRadius:".5rem"}}),H=f.a.div({background:"transparent",zIndex:2}),J=f.a.div(function(e){return{background:"transparent",color:e.palette.white,fontSize:"1.5rem",zIndex:2}});function G(e){var t=e.data,n=t.title,r=t.categories,a=void 0===r?[]:r,i=t.link,c=void 0===i?"":i,l=e.palette,u=e.darkMode,s="//".concat(c.replace("https://",""));return o.a.createElement(C.a,{to:s,target:"_blank"},o.a.createElement(q,{palette:l,darkMode:u},o.a.createElement(H,null,o.a.createElement(J,{palette:l,darkMode:u},n)),a.length>0&&o.a.createElement(ce,{palette:l,categories:a})))}var Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Q?(!function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):$(t,e)})}}function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function K(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}var X=n(13),Y=n.n(X),Z=n(15),ee=n(30),te=new(n.n(ee).a)({applicationId:"56ef0262b44c0f3a1ee9a4576c4f35105325aa1d21e18b78132355dd89ebec47",secret:"013bb4b541a0fa9e3070d93d847181aed0e36ca96d71f210b51825947b5d958e"}),ne=function(){var e=Object(Z.a)(Y.a.mark(function e(t){var n,r,a=arguments;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"drone",e.next=3,te.photos.getRandomPhoto({query:n}).then(function(e){return e.json()}).then(function(e){return e});case 3:if(!(r=e.sent).urls){e.next=6;break}return e.abrupt("return",t(r));case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(Z.a)(Y.a.mark(function e(t){var n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed","/@").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ae=f.a.div(function(e){var t=e.urls;return{background:"url('".concat(t.full,"')"),height:"80vh",backgroundSize:"cover",backgroundPosition:"center"}});function oe(e){var t=e.darkMode,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],c=r[1];if(Object(a.useEffect)(function(){ne(c)},[]),i){var l="//".concat(i.user.links.html.replace("https://",""));return o.a.createElement(a.Fragment,null,o.a.createElement(ae,{urls:i.urls}),o.a.createElement(I,{darkMode:t,description:i.alt_description,author:i.user.username,url:l}))}return null}var ie=f.a.div(function(e){return{marginTop:"1rem",display:"flex",flexWrap:"wrap",background:"transparent",color:e.palette.white}});function ce(e){var t=e.palette,n=e.categories;return o.a.createElement(ie,{palette:t},n.map(function(e){return o.a.createElement(W,{key:e,palette:t},e)}))}var le=f.a.section({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",overflow:"scroll",marginLeft:"-.5rem",minHeight:"20rem"}),ue=f.a.h3(function(e){return{padding:"1rem 0 1rem 0",fontWeight:500,color:e.palette.blue}}),se=function(e){var t=e.dataset,n=e.error,r=e.theme.colors,i=e.darkMode,c=e.title,l=e.cardElement,u=(void 0===l?null:l)||G;return n?o.a.createElement(le,null,o.a.createElement(ue,{content:"Ops, something went wrong...!"})):o.a.createElement(a.Fragment,null,o.a.createElement(ue,{palette:r},c),o.a.createElement(m.a,{id:"posts"},o.a.createElement(le,null,t.map(function(e){return o.a.createElement(u,{data:e,key:e.guid,palette:r,darkMode:i})}))))},de=n(31),me=n(18),fe=n(21);function pe(){var e=Object(de.a)(["\n          .react-toggle-track-x {\n            margin-left: 0.2rem;\n          }\n\n          a {\n            text-decoration: none;\n          }\n\n          body {\n            .react-toggle-track,\n            .react-toggle-track-check,\n            .react-toggle-track-x {\n              background-color: #4d4d4d !important;\n            }\n\n            svg {\n              background-color: transparent !important;\n            }\n\n            background-color: ",";\n            transition: all 0.2s ease-in;\n            top: 0;\n            left: 0;\n            ","\n          }\n        "]);return pe=function(){return e},e}var ge=f.a.div(function(e){return{height:"100%",flex:1,padding:"0 1rem;",fontFamily:e.theme.fontFamily}}),ve=function(){var e=Object(a.useState)(window.innerWidth),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),n};function he(e){var t=e.children,n=e.theme,r=e.isDarkmodeToggable,i=Object(a.useState)(!1),c=Object(s.a)(i,2),l=c[0],u=c[1],d=n.colors,m=o.a.Children.map(t,function(e){return e?o.a.cloneElement(e,Object(me.a)({theme:n},{isMobile:ve()<=360,darkMode:l})):null});return o.a.createElement(a.Fragment,null,r&&o.a.createElement(P,{setDarkMode:u,darkMode:l}),o.a.createElement(fe.a,{styles:Object(fe.b)(pe(),d.white,l&&"\n              * {\n                color: white !important;\n              }\n\n              background-color: ".concat(d.black," !important;\n              color: white !important;\n              transition: all .2s ease-in;\n\n              .react-toggle-track,\n              .react-toggle-track-check,\n              .react-toggle-track-x {\n                background-color: ").concat(d.white," !important;\n                transition: all .2s ease;\n              }\n            "))}),o.a.createElement(ge,{theme:n},m))}he.defaultProps={isDarkmodeToggable:!0};var be,ke=[{path:"/",exact:!0,component:function(e){var t=e.baseContext,n=t.config,r=t.theme,i=Object(a.useState)([]),c=Object(s.a)(i,2),l=c[0],u=c[1],d=Object(a.useState)(!1),m=Object(s.a)(d,2),f=m[0],p=m[1];return Object(a.useEffect)(function(){re("clucasalcantara").then(function(e){var t=e.items;return u(t.filter(function(e){return e.categories.length}))})},[]),o.a.createElement(he,{theme:r},o.a.createElement(R,{title:n.title,subtitle:n.subtitle,navItems:n.nav,handleOpen:p,isOpen:f}),o.a.createElement(U,{isOpen:f,navItems:n.nav}),o.a.createElement(oe,null),o.a.createElement(se,{id:"posts",dataset:l,title:"\xdaltimos textos"}),o.a.createElement(T,{title:n.title}))}}],Ee={config:{name:"caioalcantara",title:"caio alcantara",subtitle:"Software Engineer",nav:[{text:"Sobre mim",path:"/#1"},{text:"Projetos",path:"/#2"},{text:"Posts",path:"#posts"},{text:"Contato",path:"/#4"}]},theme:{fontFamily:"Quicksand",colors:{main:"#243033",black:"#0E1111",gray:"#333",blue:"#3A3CD4",white:"#F5F5FD"}}},we=Object(a.createContext)(Object(me.a)({},Ee,be));c.a.render(o.a.createElement(l.a,null,Object(u.a)(ke,{Provider:we.Provider,Consumer:we.Consumer,baseContext:we._currentValue})),document.getElementById("root")),r.register()}},[[35,2,1]]]);
//# sourceMappingURL=main.291b1b2f.chunk.js.map