"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[7747],{6675:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(4848),i=t(8453);const l={sidebar_position:19,description:"Everything Trails."},n="\ud83d\udd34 Trails",s={id:"Server/Trails",title:"\ud83d\udd34 Trails",description:"Everything Trails.",source:"@site/docs/Server/Trails.md",sourceDirName:"Server",slug:"/Server/Trails",permalink:"/simulator-framework-documentation/docs/Server/Trails",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/Trails.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,description:"Everything Trails."},sidebar:"tutorialSidebar",previous:{title:"\u23f0 TimedProduct",permalink:"/simulator-framework-documentation/docs/Server/TimedProduct"},next:{title:"\ud83c\udf0d Worlds",permalink:"/simulator-framework-documentation/docs/Server/Worlds"}},o={},d=[{value:"new",id:"new",level:2},{value:"Destroy",id:"destroy",level:3},{value:"GetMultiplier",id:"getmultiplier",level:2},{value:"AddTrailToData",id:"addtrailtodata",level:2},{value:"AttemptToEquip",id:"attempttoequip",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"-trails",children:"\ud83d\udd34 Trails"}),"\n",(0,a.jsx)(r.h2,{id:"new",children:"new"}),"\n",(0,a.jsx)(r.p,{children:"Gives the player a trail, physically"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lua",children:"local Framework = require(path).GetServer()\r\nlocal Trails = Framework.Trails\r\n\r\nlocal MyTrail = Trails.new(player, ColorSequence, 10) -- 10x\n"})}),"\n",(0,a.jsx)(r.h3,{id:"destroy",children:"Destroy"}),"\n",(0,a.jsx)(r.p,{children:"Destroys the trail"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lua",children:"MyTrail:Destroy()\n"})}),"\n",(0,a.jsx)(r.h2,{id:"getmultiplier",children:"GetMultiplier"}),"\n",(0,a.jsx)(r.p,{children:"Returns the multiplier the player has"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lua",children:"Trails.GetMultiplier(player)\n"})}),"\n",(0,a.jsx)(r.h2,{id:"addtrailtodata",children:"AddTrailToData"}),"\n",(0,a.jsx)(r.p,{children:"Adds a trail to someones data, has to be a valid trail name."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lua",children:'Trails.AddTrailToData(player, "Blue Trail")\n'})}),"\n",(0,a.jsx)(r.h2,{id:"attempttoequip",children:"AttemptToEquip"}),"\n",(0,a.jsx)(r.p,{children:"Checks if the player has the trail, and equips it if they do"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lua",children:'Trails.AttemptToEquip(player, "Blue Trail")\n'})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>s});var a=t(6540);const i={},l=a.createContext(i);function n(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);