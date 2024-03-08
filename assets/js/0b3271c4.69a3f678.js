"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[8047],{7982:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(4848),n=t(8453);const s={sidebar_position:2,description:"Send alerts to the player"},a="\u26a0\ufe0f Alert",i={id:"Server/Alert",title:"\u26a0\ufe0f Alert",description:"Send alerts to the player",source:"@site/docs/Server/Alert.md",sourceDirName:"Server",slug:"/Server/Alert",permalink:"/simulator-framework-documentation/docs/Server/Alert",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/Alert.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Send alerts to the player"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f Setup",permalink:"/simulator-framework-documentation/docs/Server/Setup"},next:{title:"\ud83d\udd22 Codes",permalink:"/simulator-framework-documentation/docs/Server/Codes"}},c={},d=[];function l(e){const r={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"\ufe0f-alert",children:"\u26a0\ufe0f Alert"}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsx)(r.p,{children:"This is a server side function used to send alerts to the player."})}),"\n",(0,o.jsx)(r.p,{children:"To use the server side of the framework, do the following:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lua",children:'local ReplicatedStorage = game:GetService("ReplicatedStorage")\r\nlocal Framework = require(path.to.framework).GetServer()\r\n\r\ngame.Players.PlayerAdded:connect(function(player: Player)\r\n    Framework.Alert(player, "This is the message")\r\nend)\n'})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var o=t(6540);const n={},s=o.createContext(n);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);