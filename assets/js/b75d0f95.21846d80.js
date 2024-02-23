"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[8557],{4354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(4848),a=r(8453);const o={sidebar_position:12,description:"Searches a dictionary"},i="SearchDictionary",c={id:"Shared/Functions/SearchDictionary",title:"SearchDictionary",description:"Searches a dictionary",source:"@site/docs/Shared/Functions/SearchDictionary.md",sourceDirName:"Shared/Functions",slug:"/Shared/Functions/SearchDictionary",permalink:"/simulator-framework-documentation/docs/Shared/Functions/SearchDictionary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Shared/Functions/SearchDictionary.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"Searches a dictionary"},sidebar:"tutorialSidebar",previous:{title:"SearchArray",permalink:"/simulator-framework-documentation/docs/Shared/Functions/SeachArray"},next:{title:"TimeSmall",permalink:"/simulator-framework-documentation/docs/Shared/Functions/TimeSmall"}},s={},d=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"searchdictionary",children:"SearchDictionary"}),"\n",(0,n.jsx)(t.p,{children:"Searches a dictionary for a specific value"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'local Shared = Framework.Shared\r\nlocal Functions = Shared.Functions\r\n\r\nlocal dictionary = {\r\n    ["first test"] = "test",\r\n    ["second test"] = "test2",\r\n    ["another test"] = "test3",\r\n}\r\n\r\nif Functions.SearchDictionary(dictionary, "test2") then\r\n    print("Yes")\r\nend\r\n\r\nlocal test2 = Functions.SearchDictionary(dictionary, "test2")\r\nprint(test2) -- "test2"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);