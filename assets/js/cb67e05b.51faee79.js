"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[2087],{2261:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(4848),o=t(8453);const i={sidebar_position:3,description:"Returns number of entries"},a="\ud83d\udd22 GetDictionaryCount",s={id:"Shared/Functions/GetDictionaryCount",title:"\ud83d\udd22 GetDictionaryCount",description:"Returns number of entries",source:"@site/docs/Shared/Functions/GetDictionaryCount.md",sourceDirName:"Shared/Functions",slug:"/Shared/Functions/GetDictionaryCount",permalink:"/simulator-framework-documentation/docs/Shared/Functions/GetDictionaryCount",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Shared/Functions/GetDictionaryCount.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Returns number of entries"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd22 Commas",permalink:"/simulator-framework-documentation/docs/Shared/Functions/Commans"},next:{title:"\ud83d\udd10 GenerateUUID",permalink:"/simulator-framework-documentation/docs/Shared/Functions/GenerateUUID"}},c={},u=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"-getdictionarycount",children:"\ud83d\udd22 GetDictionaryCount"}),"\n",(0,r.jsx)(e.p,{children:"Get the amount of entries in a dictionary"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:'local Shared = Framework.Shared\r\nlocal Functions = Shared.Functions\r\n\r\nlocal dictionary = {\r\n    ["Value1"] = 10,\r\n    ["Value2"] = 50,\r\n    ["sdljkfh"] = "hehehe",\r\n    ["walter"] = "white",\r\n}\r\n\r\nlocal numOfEntries = Functions.GetDictionaryCount(dictionary)\r\nprint(numOfEntries) -- 4\n'})})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>s});var r=t(6540);const o={},i=r.createContext(o);function a(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);