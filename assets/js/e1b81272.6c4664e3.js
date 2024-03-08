"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[5097],{908:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=n(4848),a=n(8453);const i={sidebar_position:2,description:"Changes a number to an abbreviated version"},o="\ud83d\udd22 Abbreviation",s={id:"Shared/Abbreviation",title:"\ud83d\udd22 Abbreviation",description:"Changes a number to an abbreviated version",source:"@site/docs/Shared/Abbreviation.md",sourceDirName:"Shared",slug:"/Shared/Abbreviation",permalink:"/simulator-framework-documentation/docs/Shared/Abbreviation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Shared/Abbreviation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Changes a number to an abbreviated version"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f Setup",permalink:"/simulator-framework-documentation/docs/Shared/Setup"},next:{title:"\ud83d\udd11 Admin List",permalink:"/simulator-framework-documentation/docs/Shared/AdminList"}},c={},d=[{value:"abbreviate",id:"abbreviate",level:3}];function b(e){const r={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"-abbreviation",children:"\ud83d\udd22 Abbreviation"}),"\n",(0,t.jsx)(r.p,{children:"Changes a number to an abbreviated version."}),"\n",(0,t.jsx)(r.h3,{id:"abbreviate",children:"abbreviate"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"local Framework = require(path).GetClient()\r\nlocal Shared = Framework.Shared\r\nlocal Abbreviation = Shared.Abbreviation\r\n\r\nlocal number = 100000\r\nlocal secondNumber = 100000000000\r\n\r\nprint(Abbreviation.abbreviate(number)) -- 100K\r\nprint(Abbreviation.abbreviate(secondNumber)) -- 100Aa\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>s});var t=n(6540);const a={},i=t.createContext(a);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);