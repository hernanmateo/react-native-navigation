/*! For license information please see ce2f4f71.d06f1dee.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),o=(n(0),n(171)),c=(n(175),n(176),{id:"component-api",title:"Component",sidebar_label:"Component"}),i={id:"component-api",title:"Component",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/api-component.mdx",permalink:"/../component-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-component.mdx",sidebar_label:"Component",sidebar:"api",next:{title:"Root",permalink:"/../root-api"}},p=[{value:"<code>registerComponent</code>",id:"registercomponent",children:[]},{value:"<code>updateProps</code>",id:"updateprops",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"registercomponent"},Object(o.b)("inlineCode",{parentName:"h2"},"registerComponent")),Object(o.b)("p",null,"Every screen component in your app must be registered with a unique name. The component itself is a traditional React component extending ",Object(o.b)("inlineCode",{parentName:"p"},"React.Component")," or ",Object(o.b)("inlineCode",{parentName:"p"},"React.PureComponent"),". It can also be a HOC to provide context (or a Redux store) or a functional component. Similar to React Native's ",Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"componentName"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique component name - not to be confused with ",Object(o.b)("strong",{parentName:"td"},"componentId"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"componentProvider"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Anonymous function that returns the React component to register, ",Object(o.b)("strong",{parentName:"td"},"OR")," the component wrapped with Providers")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"concreteComponentProvider"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Anonymous function that returns the concrete React component. If your component is wrapped with Providers, this must be an instance of the concrete component.")))),Object(o.b)("h4",{id:"examples"},"Examples"),Object(o.b)("h5",{id:"registering-a-component"},"Registering a component"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => WelcomeScreen);\n")),Object(o.b)("h5",{id:"registering-a-component-wrapped-with-providers"},"Registering a component wrapped with Providers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Provider } from 'react-redux';\nconst store = createStore();\n\nNavigation.registerComponent(`navigation.playground.MyScreen`, () => (props) =>\n  <Provider store={store}>\n    <MyScreen {...props} />\n  </Provider>,\n  () => MyScreen)\n);\n")),Object(o.b)("h2",{id:"updateprops"},Object(o.b)("inlineCode",{parentName:"h2"},"updateProps")),Object(o.b)("p",null,"Update props of a component registered with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#registercomponent"}),"registerComponent"),". Updating props triggers the component lifecycle methods related to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-component.html#updating"}),"updating"),"."),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"componentId"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unique component id")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"options"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"props object to pass to the component")))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.updateProps('MY_COMPONENT', {\n  // props to pass to the component\n};\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"updateProps")," is called with a componentId. This is the same unique id components have in props. Don't confuse it with the ",Object(o.b)("inlineCode",{parentName:"p"},"componentName")," we use when registering components with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#registerComponent"}),"Navigation.registerComponent"),"."))))}l.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?r.a.createElement(d,i({ref:t},b,{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},172:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},175:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(172),c=n.n(o),i=n(93),p=n.n(i);const b=37,l=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:i}=e,[m,s]=Object(a.useState)(o),u=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:c()("tab-item",p.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(u,e.target,e),onFocus:()=>s(e),onClick:()=>s(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},176:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);