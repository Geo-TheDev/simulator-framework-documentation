"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[9187],{8869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(4848),r=n(8453);const s={sidebar_position:5,description:"Create custom Menu Buttons!"},a=void 0,i={id:"Client/GUI/MenuButton",title:"MenuButton",description:"Create custom Menu Buttons!",source:"@site/docs/Client/GUI/MenuButton.md",sourceDirName:"Client/GUI",slug:"/Client/GUI/MenuButton",permalink:"/simulator-framework-documentation/docs/Client/GUI/MenuButton",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/GUI/MenuButton.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Create custom Menu Buttons!"},sidebar:"tutorialSidebar",previous:{title:"Tooltips",permalink:"/simulator-framework-documentation/docs/Client/GUI/Tooltips"},next:{title:"Controller",permalink:"/simulator-framework-documentation/docs/Client/GUI/Controller"}},c={},u=[];function l(e){const t={code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"On the left side of the players screen, there are multiple buttons like so:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Left Side",src:n(6877).A+"",width:"345",height:"209"})}),"\n",(0,o.jsx)(t.p,{children:"You can create 'custom' buttons that can do almost anything, from opening frames to kicking the player."}),"\n",(0,o.jsx)(t.p,{children:"The menu button takes in 3 parameters:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The Image ID for the icon"}),"\n",(0,o.jsx)(t.li,{children:"The Tooltip Text when hovering over the button"}),"\n",(0,o.jsx)(t.li,{children:"A custom function to run or a frame to toggle"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:'local Framework = require(path.to.framework).GetClient()\r\nlocal GUI = Framework.GUI\r\n\r\n-- This creates a menu button that calls a function on click!\r\nGUI.MenuButton.createMenuButton(15872795453, "Custom", function() \r\n    game:GetService("Players").LocalPlayer:Kick("kicked")\r\nend)\r\n\r\n-- This passes in a frame, and the menu button handles the process of opening and closing the frame\r\nlocal FrameToOpen = game.Players.LocalPlayer.PlayerGui:WaitForChild("UI"):WaitForChild("Content").Codes\r\nGUI.MenuButton.createMenuButton(15997325157, "Custom 2", FrameToOpen)\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6877:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/MenuButtonsLeft-d7381eaa1a14803a2227573eb1544629.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);