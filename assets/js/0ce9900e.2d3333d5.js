"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[5176],{8586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(4848),o=r(8453);const a={sidebar_position:1,description:"Show queued alerts to the player!"},s=void 0,i={id:"Client/GUI/Alert",title:"Alert",description:"Show queued alerts to the player!",source:"@site/docs/Client/GUI/Alert.md",sourceDirName:"Client/GUI",slug:"/Client/GUI/Alert",permalink:"/simulator-framework-documentation/docs/Client/GUI/Alert",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/GUI/Alert.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Show queued alerts to the player!"},sidebar:"tutorialSidebar",previous:{title:"GUI",permalink:"/simulator-framework-documentation/docs/category/gui"},next:{title:"Buttons",permalink:"/simulator-framework-documentation/docs/Client/GUI/Buttons"}},l={},c=[];function d(e){const t={admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"To use the Alerts, you want to grab the framework as per usual, and reference the GUI section of the Framework."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The alerts are queued into an array, this means you can add multiple alerts at one time without discarding the current one!"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"local Framework = require(path.to.framework).GetClient()\r\nlocal GUI = Framework.GUI\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then, to send Alerts to the Player, you'll want to do:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'GUI.Alert.new("Hey! This is an alert!")\n'})}),"\n",(0,n.jsx)(t.p,{children:"Here is what that would look like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Example alert",src:r(1057).A+"",width:"644",height:"495"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1057:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/AlertImage-e4588b30d5da7a2d4e12c95ee5b768a3.png"},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);