"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[8021],{7261:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=t(4848),s=t(8453);const n={sidebar_position:1,description:"Server side setup."},i="\ud83d\udee0\ufe0f Setup",a={id:"Server/Setup",title:"\ud83d\udee0\ufe0f Setup",description:"Server side setup.",source:"@site/docs/Server/Setup.md",sourceDirName:"Server",slug:"/Server/Setup",permalink:"/simulator-framework-documentation/docs/Server/Setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/Setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Server side setup."},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/simulator-framework-documentation/docs/category/server"},next:{title:"\u26a0\ufe0f Alert",permalink:"/simulator-framework-documentation/docs/Server/Alert"}},c={},d=[];function u(e){const r={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"\ufe0f-setup",children:"\ud83d\udee0\ufe0f Setup"}),"\n",(0,o.jsx)(r.admonition,{type:"danger",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"ONLY"})," use the ",(0,o.jsx)(r.strong,{children:"GetServer"})," method on server side scripts / modules, otherwise you will break the framework and it will not load correctly."]})}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsx)(r.p,{children:"It is suggested you create a ServerLoader server script inside of ServerScriptService to hold the interfacing for the modules."})}),"\n",(0,o.jsx)(r.p,{children:"To use the server side of the framework, do the following:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lua",children:'local ReplicatedStorage = game:GetService("ReplicatedStorage")\r\nlocal Framework = require(path.to.framework).GetServer()\n'})}),"\n",(0,o.jsx)(r.p,{children:"This also gives you access to the 'Shared' modules, these are also documented"})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var o=t(6540);const s={},n=o.createContext(s);function i(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);