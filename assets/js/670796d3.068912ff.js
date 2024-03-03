"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[3383],{2698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(4848),o=t(8453);const i={sidebar_position:6,description:"Manually control the way UI works."},s="Controller",l={id:"Client/GUI/Controller",title:"Controller",description:"Manually control the way UI works.",source:"@site/docs/Client/GUI/Controller.md",sourceDirName:"Client/GUI",slug:"/Client/GUI/Controller",permalink:"/simulator-framework-documentation/docs/Client/GUI/Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/GUI/Controller.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Manually control the way UI works."},sidebar:"tutorialSidebar",previous:{title:"MenuButton",permalink:"/simulator-framework-documentation/docs/Client/GUI/MenuButton"},next:{title:"AdjustContentSize",permalink:"/simulator-framework-documentation/docs/Client/GUI/AdjustContentSize"}},a={},c=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"controller",children:"Controller"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ONLY"})," use this when dealing with custom ui you implement into the framework."]})}),"\n",(0,r.jsx)(n.p,{children:"Define your variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"local Framework = require(path.to.framework).GetClient()\r\nlocal GUI = Framework.GUI\r\n\r\nlocal Controller = Framework.Controller\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The 'Controller' module has 3 main functions. The rest, you do ",(0,r.jsx)(n.strong,{children:"NOT"})," use under any circumstance."]}),"\n",(0,r.jsx)(n.h1,{id:"showmainui",children:"ShowMainUI"}),"\n",(0,r.jsx)(n.p,{children:"This function shows all the main UI, and disables any lighting effects, such as blur."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Controller.ShowMainUI() -- Usually used when hiding a frame.\n"})}),"\n",(0,r.jsx)(n.h1,{id:"hidemainui",children:"HideMainUI"}),"\n",(0,r.jsx)(n.p,{children:"This function hides all the main UI, and enables any lighting effects.\r\nIt also hides all the UI currently being viewed to the user."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Controller.HideMainUI() -- Usually used when showing a frame.\n"})}),"\n",(0,r.jsx)(n.h1,{id:"hideui",children:"HideUI"}),"\n",(0,r.jsx)(n.p,{children:"This function loops through all UI defined in the first parameter and hides.\r\nIt takes in an exception as well, so you are able to hide everything BUT that one frame."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"Controller.HideUI(Frame, Exception) -- Usually used when showing a frame.\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);