"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[7496],{6886:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(4848),r=t(8453);const s={sidebar_position:4,description:"Tooltips that show when you hover over buttons!"},i=void 0,a={id:"Client/GUI/Tooltips",title:"Tooltips",description:"Tooltips that show when you hover over buttons!",source:"@site/docs/Client/GUI/Tooltips.md",sourceDirName:"Client/GUI",slug:"/Client/GUI/Tooltips",permalink:"/simulator-framework-documentation/docs/Client/GUI/Tooltips",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/GUI/Tooltips.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Tooltips that show when you hover over buttons!"},sidebar:"tutorialSidebar",previous:{title:"InputBox",permalink:"/simulator-framework-documentation/docs/Client/GUI/InputBox"},next:{title:"MenuButton",permalink:"/simulator-framework-documentation/docs/Client/GUI/MenuButton"}},l={},c=[];function u(o){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"This allows the user to see extra information on a smooth animated Tooltip!"}),"\n",(0,n.jsx)(e.admonition,{type:"warning",children:(0,n.jsx)(e.p,{children:"This only works on button hover events, nothing else."})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-lua",children:"local Framework = require(path.to.framework).GetClient()\r\nlocal GUI = Framework.GUI\n"})}),"\n",(0,n.jsx)(e.p,{children:"To create a Tooltip, do the following:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-lua",children:'local Tooltip = Framework.GUI.Tooltips.new(Button, "Tooltip Text")\n'})}),"\n",(0,n.jsx)(e.p,{children:"To destroy the Tooltip completely, do:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-lua",children:"Tooltip:destroy()\n"})})]})}function d(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(u,{...o})}):u(o)}},8453:(o,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var n=t(6540);const r={},s=n.createContext(r);function i(o){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:i(o.components),n.createElement(s.Provider,{value:e},o.children)}}}]);