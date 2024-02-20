"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[854],{1785:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(4848),r=o(8453);const a={sidebar_position:4,description:"Find out what platform the player is playing on."},s=void 0,i={id:"Client/Platform",title:"Platform",description:"Find out what platform the player is playing on.",source:"@site/docs/Client/Platform.md",sourceDirName:"Client",slug:"/Client/Platform",permalink:"/simulator-framework-documentation/docs/Client/Platform",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/Platform.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Find out what platform the player is playing on."},sidebar:"tutorialSidebar",previous:{title:"Inventory",permalink:"/simulator-framework-documentation/docs/Client/Inventory"},next:{title:"ZoneDoor",permalink:"/simulator-framework-documentation/docs/Client/ZoneDoor"}},l={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This is used to find out what platform the player is playing on, to alter the user experience."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"local Framework = require(path.to.framework).GetClient()\r\nlocal Platform = Framework.Platform\n"})}),"\n",(0,n.jsx)(t.p,{children:"This returns a dictionary of booleans:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"{\r\n    Desktop = false,\r\n    Mobile = false,\r\n    Console = false,\r\n    VR = false,\r\n    SupportsVR = false;\r\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The values are automatically changed, so all you have to do is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"local isConsole = Platform.Console\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);