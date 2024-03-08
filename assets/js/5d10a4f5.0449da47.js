"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[8791],{5893:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(4848),a=r(8453);const o={sidebar_position:16,description:"Gamepasses in the form of developer products."},t="\ud83d\udd11 PsuedoPasses",l={id:"Server/PseudoPasses",title:"\ud83d\udd11 PsuedoPasses",description:"Gamepasses in the form of developer products.",source:"@site/docs/Server/PseudoPasses.md",sourceDirName:"Server",slug:"/Server/PseudoPasses",permalink:"/simulator-framework-documentation/docs/Server/PseudoPasses",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/PseudoPasses.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,description:"Gamepasses in the form of developer products."},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddea Potion Boosts",permalink:"/simulator-framework-documentation/docs/Server/PotionBoosts"},next:{title:"\ud83c\udfa1 Spin The Wheel",permalink:"/simulator-framework-documentation/docs/Server/SpinWheelService"}},c={},i=[{value:"Setup",id:"setup",level:2},{value:"new",id:"new",level:3},{value:"UserOwns",id:"userowns",level:3},{value:"PromptPurchase",id:"promptpurchase",level:3},{value:"Give",id:"give",level:3},{value:"Get",id:"get",level:2},{value:"PromptPass",id:"promptpass",level:2},{value:"UserOwnsPass",id:"userownspass",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"-psuedopasses",children:"\ud83d\udd11 PsuedoPasses"}),"\n",(0,n.jsx)(s.p,{children:"Gamepasses in the form of developer products."}),"\n",(0,n.jsx)(s.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(s.h3,{id:"new",children:"new"}),"\n",(0,n.jsx)(s.p,{children:'Makes a new "gamepass"'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'local Framework = require(path).GetServer()\r\nlocal Passes = Framework.PsuedoPasses\r\n\r\nlocal newPass = Passes.new("10x Luck", 234934) -- name, product ID\n'})}),"\n",(0,n.jsx)(s.h3,{id:"userowns",children:"UserOwns"}),"\n",(0,n.jsx)(s.p,{children:"Checks if the user owns the pass"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"newPass:UserOwns(player)\n"})}),"\n",(0,n.jsx)(s.h3,{id:"promptpurchase",children:"PromptPurchase"}),"\n",(0,n.jsx)(s.p,{children:"Prompts the purchase for the pass"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"newPass:PromptPurchase(player)\n"})}),"\n",(0,n.jsx)(s.h3,{id:"give",children:"Give"}),"\n",(0,n.jsx)(s.p,{children:"Gives the player the pass"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"newPass:Give(player)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"get",children:"Get"}),"\n",(0,n.jsx)(s.p,{children:"Returns the pass metatable"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'Passes.Get("10x Luck")\n'})}),"\n",(0,n.jsx)(s.h2,{id:"promptpass",children:"PromptPass"}),"\n",(0,n.jsx)(s.p,{children:"Prompts the purchase for a pass"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'Passes.PromptPass(player, "10x Luck")\n'})}),"\n",(0,n.jsx)(s.h2,{id:"userownspass",children:"UserOwnsPass"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:'Passes.UserOwnsPass(player, "10x Luck")\n'})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>l});var n=r(6540);const a={},o=n.createContext(a);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);