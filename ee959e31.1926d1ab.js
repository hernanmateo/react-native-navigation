(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),i=(n(0),n(171)),c={id:"stack-backButton",title:"The Back button",sidebar_label:"Back button"},o={id:"stack-backButton",title:"The Back button",description:"The back button is added automatically when two or more screens are pushed into the stack.",source:"@site/docs/stack-backButton.mdx",permalink:"/../stack-backButton",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/stack-backButton.mdx",sidebar_label:"Back button"},l=[{value:"Styling the back button",id:"styling-the-back-button",children:[]},{value:"Controling visibility",id:"controling-visibility",children:[]},{value:"Changing visbility programmatically",id:"changing-visbility-programmatically",children:[]},{value:"Handling the back button",id:"handling-the-back-button",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The back button is added automatically when two or more screens are pushed into the stack."),Object(i.b)("h2",{id:"styling-the-back-button"},"Styling the back button"),Object(i.b)("p",null,"The back button's style can be customised by declaring a backButton options object. This configuration can be part of a screen's static options, or default options."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"backButton: {\n  color: 'red',\n  icon: require('../../img/customChevron.png')\n}\n")),Object(i.b)("h2",{id:"controling-visibility"},"Controling visibility"),Object(i.b)("p",null,"The back buttons visbility can be controlled with the visible property."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"backButton: {\n  visible: false\n}\n")),Object(i.b)("h2",{id:"changing-visbility-programmatically"},"Changing visbility programmatically"),Object(i.b)("p",null,"Back button visibility can be changed dynamically using the mergeOptions command. When using a screen's componentId, the change will affect only that specific screen. But when using the stack's id, the change will affect all screens pushed into the stack."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  backButton: {\n    visible: false\n  }\n});\n")),Object(i.b)("h2",{id:"handling-the-back-button"},"Handling the back button"),Object(i.b)("p",null,"Handling the back button is not possible. However, you can set a left button with a chevron and handle it like you'd handle any other button and calling ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.pop")," when desired."))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,h=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(h,o({ref:t},b,{components:n})):r.a.createElement(h,o({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);