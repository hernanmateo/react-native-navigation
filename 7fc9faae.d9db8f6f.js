/*! For license information please see 7fc9faae.d9db8f6f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(6),r=(n(0),n(171)),i=n(175),c=n(176),s={id:"docs-root",title:"Root",sidebar_label:"Root"},l={id:"docs-root",title:"Root",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/docs-root.mdx",permalink:"/../docs-root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-root.mdx",sidebar_label:"Root",sidebar:"docs",previous:{title:"External Component",permalink:"/../docs-externalComponent"},next:{title:"Modal",permalink:"/../docs-modal"}},u=[{value:"Setting root on app launch",id:"setting-root-on-app-launch",children:[]},{value:"Conditional initial root",id:"conditional-initial-root",children:[]},{value:"Common root structures",id:"common-root-structures",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. The root can be changed multiple times during the lifespan of the application. For example, if an app requires users to login, it's common to use a stack-based root and transition to either tabs- or SideMenu-based root if login is successful."),Object(r.b)("h2",{id:"setting-root-on-app-launch"},"Setting root on app launch"),Object(r.b)("p",null,"RNN exposes an appLaunched listener which is invoked whenever root needs to be set."),Object(r.b)("p",null,"On iOS, the app launched event is usually emitted once in the lifespan of the application - when the app is opened for the first time. On Android things become a little bit more complicated. Like on iOS, the event is emitted when an app is opened for the first time. Since the system can destroy the Activity when the app is in the background to free resources, the event is emitted when the app returns to foreground after the activity has been destroyed."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.events().registerAppLaunchedListener(() => {\n  Navigation.setRoot({\n    root: {\n\n    }\n  });\n});\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"registerAppLaunchedListener() must be called as soon as the bundle is executed. Otherwise the event, which is emitted from native to JS, won't be handled at the correct moment in time."))),Object(r.b)("h2",{id:"conditional-initial-root"},"Conditional initial root"),Object(r.b)("p",null,"A common use case is to set the initial root according to a condition of some sort. For example:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If a user is logged in, show the application main root; otherwise show a login screen.")),Object(r.b)("p",null,"To do this, simply set the appropriate root according to your needs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.events().registerAppLaunchedListener(() => {\n  if (isUserLoggedIn()) {\n    setMainRoot();\n  } else {\n    setLoginRoot();\n  }\n});\n")),Object(r.b)("h2",{id:"common-root-structures"},"Common root structures"),Object(r.b)(i.a,{defaultValue:"stack",values:[{label:"Stack root",value:"stack"},{label:"BottomTabs root",value:"bottomTabs"},{label:"SideMenu root",value:"sideMenu"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"stack",mdxType:"TabItem"},"Stacks are usually used as root for small scale apps or for short-lived flows within one big app. For example, here's a login flow:",Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [\n        {\n          component: {\n            name: 'LOGIN_SCREEN'\n          }\n        }\n      ]\n    }\n  }\n});\n"))),Object(r.b)(c.a,{value:"bottomTabs",mdxType:"TabItem"},"Typically, stacks are used as direct children of BottomTabs and each child is an independent root. This lets users seamlessly switch between tabs as each tab has its own navigation hierarchy.",Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [\n        stack: {\n          children: [\n            {\n              component: {\n                name: 'FEED_SCREEN'\n              }\n            }\n          ]\n        },\n        stack: {\n          children: [\n            {\n              component: {\n                name: 'CHAT_LIST'\n              }\n            }\n          ]\n        },\n        stack: {\n          children: [\n            {\n              component: {\n                name: 'PROFILE_SCREEN'\n              }\n            }\n          ]\n        }\n      ]\n    }\n  }\n});\n"))),Object(r.b)(c.a,{value:"sideMenu",mdxType:"TabItem"},"When a SideMenu layout is used as root, the center screen would typically be a stack. The center stack should be treated as a root - you can push child screens into it, or replace it alltogether by calling `setStackRoot`.",Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    sideMenu: {\n      center: {\n        stack: {\n          children: [\n            name: 'HOME_SCREEN'\n          ]\n        }\n      },\n      left: {\n        component: {\n          name: 'MENU_SCREEN'\n        }\n      }\n    }\n  }\n});\n")))))}d.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},172:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},175:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(172),i=n.n(r),c=n(93),s=n.n(c);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:r,values:c}=e,[p,d]=Object(a.useState)(r),b=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",s.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},176:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);