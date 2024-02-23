"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[6839],{6091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(4848),n=r(8453);const a={sidebar_position:1,description:"Shared setup."},s="Setup",i={id:"Shared/Setup",title:"Setup",description:"Shared setup.",source:"@site/docs/Shared/Setup.md",sourceDirName:"Shared",slug:"/Shared/Setup",permalink:"/simulator-framework-documentation/docs/Shared/Setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Shared/Setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Shared setup."},sidebar:"tutorialSidebar",previous:{title:"Shared",permalink:"/simulator-framework-documentation/docs/category/shared"},next:{title:"Abbreviation",permalink:"/simulator-framework-documentation/docs/Shared/Abbreviation"}},c={},d=[];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"BOTH"})," the ",(0,o.jsx)(t.strong,{children:"server"})," and ",(0,o.jsx)(t.strong,{children:"client"})," can use this."]})}),"\n",(0,o.jsx)(t.p,{children:"To use the shared modules, do the following:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'local ReplicatedStorage = game:GetService("ReplicatedStorage")\r\nlocal Framework = require(path.to.framework).GetServer() -- or GetClient()\r\n\r\nlocal Shared = Framework.Shared\n'})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var o=r(6540);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);