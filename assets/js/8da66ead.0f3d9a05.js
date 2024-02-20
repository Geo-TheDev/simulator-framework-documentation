"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[6866],{7198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(4848),s=r(8453);const i={sidebar_position:13,description:"Player settings."},a="Player Settings",o={id:"Server/PlayerSettings",title:"Player Settings",description:"Player settings.",source:"@site/docs/Server/PlayerSettings.md",sourceDirName:"Server",slug:"/Server/PlayerSettings",permalink:"/simulator-framework-documentation/docs/Server/PlayerSettings",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/PlayerSettings.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"Player settings."},sidebar:"tutorialSidebar",previous:{title:"PlayerData",permalink:"/simulator-framework-documentation/docs/Server/PlayerData"},next:{title:"Playtime Rewards",permalink:"/simulator-framework-documentation/docs/Server/PlaytimeRewards"}},l={},c=[{value:"ToggleSettings",id:"togglesettings",level:2},{value:"GetSettings",id:"getsettings",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"player-settings",children:"Player Settings"}),"\n",(0,n.jsx)(t.p,{children:"All the settings for the player"}),"\n",(0,n.jsx)(t.h2,{id:"togglesettings",children:"ToggleSettings"}),"\n",(0,n.jsx)(t.p,{children:"Toggles a setting:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'local Framework = require(path).GetServer()\r\nlocal Settings = Framework.PlayerSettings\r\n\r\nSettings.ToggleSetting(player, "Music")\n'})}),"\n",(0,n.jsx)(t.h2,{id:"getsettings",children:"GetSettings"}),"\n",(0,n.jsx)(t.p,{children:"Returns a table of settings"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"local settings = Settings.GetSettings(player)\n"})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(6540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);