"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[960],{5572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(4848),o=t(8453);const a={sidebar_position:3,description:"Get inventory data synced from the server."},i="\ud83c\udf92 Inventory",s={id:"Client/Inventory",title:"\ud83c\udf92 Inventory",description:"Get inventory data synced from the server.",source:"@site/docs/Client/Inventory.md",sourceDirName:"Client",slug:"/Client/Inventory",permalink:"/simulator-framework-documentation/docs/Client/Inventory",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/Inventory.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Get inventory data synced from the server."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcca Leaderboard",permalink:"/simulator-framework-documentation/docs/Client/GUI/Leaderboard"},next:{title:"\ud83d\udcbb Platform",permalink:"/simulator-framework-documentation/docs/Client/Platform"}},c={},d=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-inventory",children:"\ud83c\udf92 Inventory"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"You cannot edit inventory data in this module, this is simply to GET inventory data.\r\nThink of it like a RemoteFunction, without the yielding."})}),"\n",(0,r.jsx)(n.p,{children:"To use the inventory module, do:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"local Framework = require(path.to.framework).GetClient()\r\nlocal Inventory = Framework.Inventory\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get Inventory Data:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"local PlayerInventory = Inventory.Swords\r\n-- returns an untyped dictionary with all the players swords\r\n-- remember, it could be nil, so check that too!\n"})}),"\n",(0,r.jsx)(n.p,{children:"The code for the module is very small, its just a dictionary that updates itself once Inventory Data on the server is updated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local Network = require(script.Parent.Parent.Shared.Network)\r\n\r\nlocal Inventory = {}\r\n\r\nNetwork.Connect("InventoryUpdate", function(name, value)\r\n    Inventory[name] = value\r\nend)\r\n\r\nreturn Inventory\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);