"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[8020],{3355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(4848),o=n(8453);const r={sidebar_position:1,description:"Confetti"},c="\ud83c\udf8a Confetti",s={id:"Shared/WorldFX/Confetti",title:"\ud83c\udf8a Confetti",description:"Confetti",source:"@site/docs/Shared/WorldFX/Confetti.md",sourceDirName:"Shared/WorldFX",slug:"/Shared/WorldFX/Confetti",permalink:"/simulator-framework-documentation/docs/Shared/WorldFX/Confetti",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Shared/WorldFX/Confetti.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Confetti"},sidebar:"tutorialSidebar",previous:{title:"WorldFX",permalink:"/simulator-framework-documentation/docs/category/worldfx"},next:{title:"Internal Tools",permalink:"/simulator-framework-documentation/docs/category/internal-tools"}},d={},l=[{value:"Module Structure",id:"module-structure",level:2},{value:"<code>confettiInfo</code>",id:"confettiinfo",level:2},{value:"<code>Confetti.create(Player: Player, ConfettiInfo: confettiInfo)</code>",id:"confetticreateplayer-player-confettiinfo-confettiinfo",level:2},{value:"<code>Confetti.__new(Player: Player, Speed: number, Rate: number, Height: number, DestroyTime: number)</code>",id:"confetti__newplayer-player-speed-number-rate-number-height-number-destroytime-number",level:2},{value:"<code>Confetti:Init()</code>",id:"confettiinit",level:2},{value:"<code>Confetti:Destroy()</code>",id:"confettidestroy",level:2},{value:"<code>Network.Connect(&quot;Confetti&quot;, function(confettiInfo: confettiInfo))</code>",id:"networkconnectconfetti-functionconfettiinfo-confettiinfo",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-confetti",children:"\ud83c\udf8a Confetti"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Confetti"})," module manages the creation and display of confetti effects in the game. It utilizes the ",(0,i.jsx)(t.code,{children:"WorldFX"})," module to generate visual effects, and it can be triggered both on the server and the client."]}),"\n",(0,i.jsx)(t.h2,{id:"module-structure",children:"Module Structure"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"Confetti\r\n\u251c\u2500\u2500\u2500 create\r\n\u251c\u2500\u2500\u2500 __new\r\n\u251c\u2500\u2500\u2500 Init\r\n\u2514\u2500\u2500\u2500 Destroy\n"})}),"\n",(0,i.jsx)(t.h1,{id:"types",children:"Types"}),"\n",(0,i.jsx)(t.h2,{id:"confettiinfo",children:(0,i.jsx)(t.code,{children:"confettiInfo"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Represents the data structure for configuring the confetti effect.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Speed: number"}),": Speed of the confetti particles."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Rate: number"}),": Rate at which confetti particles are emitted."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Height: number"}),": Vertical height at which the confetti appears."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DestroyTime: number"}),": Time before the confetti effect is automatically destroyed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(t.h2,{id:"confetticreateplayer-player-confettiinfo-confettiinfo",children:(0,i.jsx)(t.code,{children:"Confetti.create(Player: Player, ConfettiInfo: confettiInfo)"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Creates and displays a confetti effect for a specific player."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Player"}),": The player for whom the confetti effect is generated."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ConfettiInfo"}),": The configuration data for the confetti effect."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"confetti__newplayer-player-speed-number-rate-number-height-number-destroytime-number",children:(0,i.jsx)(t.code,{children:"Confetti.__new(Player: Player, Speed: number, Rate: number, Height: number, DestroyTime: number)"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Internal function for creating a new instance of the ",(0,i.jsx)(t.code,{children:"Confetti"})," class."]}),"\n",(0,i.jsxs)(t.li,{children:["Called by ",(0,i.jsx)(t.code,{children:"Confetti.create"})," to handle the confetti creation process."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"confettiinit",children:(0,i.jsx)(t.code,{children:"Confetti:Init()"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Initializes the confetti effect by enabling it and scheduling its destruction after a specified time."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"confettidestroy",children:(0,i.jsx)(t.code,{children:"Confetti:Destroy()"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Destroys the confetti effect, disconnecting connections, removing attachments, and disabling the visual effect."}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h2,{id:"networkconnectconfetti-functionconfettiinfo-confettiinfo",children:(0,i.jsx)(t.code,{children:'Network.Connect("Confetti", function(confettiInfo: confettiInfo))'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Listens for a network event indicating the need to create a confetti effect on the client."}),"\n",(0,i.jsxs)(t.li,{children:["Calls ",(0,i.jsx)(t.code,{children:"Confetti.create"})," to initiate the confetti effect."]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(6540);const o={},r=i.createContext(o);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);