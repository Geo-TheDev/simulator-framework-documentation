"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[6571],{1012:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=t(4848),o=t(8453);const i={sidebar_position:18,description:"Products with a timer."},c="\u23f0 TimedProduct",s={id:"Server/TimedProduct",title:"\u23f0 TimedProduct",description:"Products with a timer.",source:"@site/docs/Server/TimedProduct.md",sourceDirName:"Server",slug:"/Server/TimedProduct",permalink:"/simulator-framework-documentation/docs/Server/TimedProduct",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Server/TimedProduct.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,description:"Products with a timer."},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfa1 Spin The Wheel",permalink:"/simulator-framework-documentation/docs/Server/SpinWheelService"},next:{title:"\ud83d\udd34 Trails",permalink:"/simulator-framework-documentation/docs/Server/Trails"}},d={},a=[{value:"Setup",id:"setup",level:2},{value:"new",id:"new",level:3},{value:"PromptProductPurchase",id:"promptproductpurchase",level:3},{value:"GetTimeString",id:"gettimestring",level:3}];function u(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"-timedproduct",children:"\u23f0 TimedProduct"}),"\n",(0,n.jsx)(r.h2,{id:"setup",children:"Setup"}),"\n",(0,n.jsx)(r.h3,{id:"new",children:"new"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:'local Framework = require(path).GetServer()\r\nlocal TimedProducts = Framework.TimedProducts\r\n\r\n--Product ID, TimeStarted, TimeEnd, BoughtFunction\r\nlocal Product = TimedProducts.new(32834, tick(), tick() + 10800, function(player: Player)\r\n    print("Player has bought the pass")\r\nend)\n'})}),"\n",(0,n.jsx)(r.h3,{id:"promptproductpurchase",children:"PromptProductPurchase"}),"\n",(0,n.jsx)(r.p,{children:"Prompts the purchase for the product, fails if it goes overtime"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:'Product:PromptProductPurchase(player, function(player: Player)\r\n    print("Player has bought the pass")\r\nend)\n'})}),"\n",(0,n.jsx)(r.h3,{id:"gettimestring",children:"GetTimeString"}),"\n",(0,n.jsx)(r.p,{children:"Returns a cool string like:"}),"\n",(0,n.jsx)(r.p,{children:"'1 Day Left'"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:"Product:GetTimeString()\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>s});var n=t(6540);const o={},i=n.createContext(o);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);