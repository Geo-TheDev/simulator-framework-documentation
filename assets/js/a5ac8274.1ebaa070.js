"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[7386],{9663:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var d=n(4848),a=n(8453);const s={sidebar_position:8,description:"Leaderboard UI Creator"},i="Leaderboard Class",t={id:"Client/GUI/Leaderboard",title:"Leaderboard Class",description:"Leaderboard UI Creator",source:"@site/docs/Client/GUI/Leaderboard.md",sourceDirName:"Client/GUI",slug:"/Client/GUI/Leaderboard",permalink:"/simulator-framework-documentation/docs/Client/GUI/Leaderboard",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/GUI/Leaderboard.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Leaderboard UI Creator"},sidebar:"tutorialSidebar",previous:{title:"AdjustContentSize",permalink:"/simulator-framework-documentation/docs/Client/GUI/AdjustContentSize"},next:{title:"Inventory",permalink:"/simulator-framework-documentation/docs/Client/Inventory"}},l={},o=[{value:"Dependencies",id:"dependencies",level:2},{value:"Constructor",id:"constructor",level:2},{value:"<code>Leaderboard.new(part: BasePart, currency: string)</code>",id:"leaderboardnewpart-basepart-currency-string",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>Leaderboard:Update(rankings: {})</code>",id:"leaderboardupdaterankings-",level:3},{value:"<code>Leaderboard:CreatePlayer(rank: number, userId: number, amount: number)</code>",id:"leaderboardcreateplayerrank-number-userid-number-amount-number",level:3},{value:"<code>Leaderboard:Clear()</code>",id:"leaderboardclear",level:3},{value:"<code>findLeaderboards()</code>",id:"findleaderboards",level:3},{value:"Events",id:"events",level:2}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"leaderboard-class",children:"Leaderboard Class"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:"Leaderboard"})," class is designed to create and manage leaderboards in a game. It utilizes a UI template for player entries, updates rankings based on provided data, and listens for events to keep leaderboards synchronized."]}),"\n",(0,d.jsx)(r.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"Framework"}),": The framework containing shared modules."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"Shared"}),": Shared modules such as ",(0,d.jsx)(r.code,{children:"BigNum"}),", ",(0,d.jsx)(r.code,{children:"Functions"}),", ",(0,d.jsx)(r.code,{children:"Services"}),", ",(0,d.jsx)(r.code,{children:"Network"}),", and ",(0,d.jsx)(r.code,{children:"Abbreviation"}),"."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"Assets"}),": Asset folder containing GUI elements."]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"constructor",children:"Constructor"}),"\n",(0,d.jsx)(r.h3,{id:"leaderboardnewpart-basepart-currency-string",children:(0,d.jsx)(r.code,{children:"Leaderboard.new(part: BasePart, currency: string)"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["Creates a new instance of the ",(0,d.jsx)(r.code,{children:"Leaderboard"})," class."]}),"\n",(0,d.jsxs)(r.li,{children:["Parameters:","\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"part"}),": The BasePart to which the leaderboard UI will be attached."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"currency"}),": The currency type associated with the leaderboard."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(r.h3,{id:"leaderboardupdaterankings-",children:(0,d.jsx)(r.code,{children:"Leaderboard:Update(rankings: {})"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"Updates the leaderboard UI based on the provided rankings data."}),"\n",(0,d.jsx)(r.li,{children:"Clears existing entries and creates new player entries."}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"leaderboardcreateplayerrank-number-userid-number-amount-number",children:(0,d.jsx)(r.code,{children:"Leaderboard:CreatePlayer(rank: number, userId: number, amount: number)"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"Creates a new player entry in the leaderboard UI."}),"\n",(0,d.jsx)(r.li,{children:"Populates the entry with user information and ranking details."}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"leaderboardclear",children:(0,d.jsx)(r.code,{children:"Leaderboard:Clear()"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"Clears all player entries in the leaderboard UI."}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"findleaderboards",children:(0,d.jsx)(r.code,{children:"findLeaderboards()"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"Finds and initializes leaderboards in the game environment."}),"\n",(0,d.jsxs)(r.li,{children:["Creates instances of the ",(0,d.jsx)(r.code,{children:"Leaderboard"})," class for each valid leaderboard part."]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"events",children:"Events"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsxs)(r.strong,{children:["LeaderboardUpdated(currency: string, rankings: ",")"]})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"Triggered when the server sends updated leaderboard data."}),"\n",(0,d.jsx)(r.li,{children:"Updates the corresponding leaderboard instance with the new rankings."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"DataLoaded()"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"Triggered when the game data is loaded."}),"\n",(0,d.jsxs)(r.li,{children:["Calls ",(0,d.jsx)(r.code,{children:"findLeaderboards()"})," to initialize leaderboards."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var d=n(6540);const a={},s=d.createContext(a);function i(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),d.createElement(s.Provider,{value:r},e.children)}}}]);