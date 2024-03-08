"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[7486],{4948:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(4848),n=t(8453);const a={sidebar_position:4,description:"Text Chat Commands"},s="\ud83d\udcac Commands",i={id:"Server/Commands",title:"\ud83d\udcac Commands",description:"Text Chat Commands",source:"@site/docs/Server/Commands.md",sourceDirName:"Server",slug:"/Server/Commands",permalink:"/simulator-framework-documentation/docs/Server/Commands",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/Commands.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Text Chat Commands"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd22 Codes",permalink:"/simulator-framework-documentation/docs/Server/Codes"},next:{title:"\ud83d\udcb5 Currency",permalink:"/simulator-framework-documentation/docs/Server/Currency"}},d={},c=[];function m(e){const r={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"-commands",children:"\ud83d\udcac Commands"}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsx)(r.p,{children:"The admins are set directly in the 'Shared' part of the framework, you should edit that to your liking as you will not be able to use the codes if you\r\naren't a registered admin."})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lua",children:'local ReplicatedStorage = game:GetService("ReplicatedStorage")\r\nlocal Framework = require(path.to.framework).GetServer()\r\n\r\nFramework.Commands.Create("KickMe", function(player: Player)\r\n    player:Kick("You kicked yourself!")\r\nend)\n'})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var o=t(6540);const n={},a=o.createContext(n);function s(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);