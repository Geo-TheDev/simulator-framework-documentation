"use strict";(self.webpackChunkframework_docs=self.webpackChunkframework_docs||[]).push([[4832],{8920:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var c=i(4848),o=i(8453);const t={sidebar_position:8,description:"Network"},r="\ud83d\udedc Network",s={id:"Shared/Network",title:"\ud83d\udedc Network",description:"Network",source:"@site/docs/Shared/Network.md",sourceDirName:"Shared",slug:"/Shared/Network",permalink:"/simulator-framework-documentation/docs/Shared/Network",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Shared/Network.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Network"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd11 Monetisation",permalink:"/simulator-framework-documentation/docs/Shared/Monetisation"},next:{title:"\ud83d\udd14 Notifications",permalink:"/simulator-framework-documentation/docs/Shared/Notifications"}},l={},a=[{value:"Module Structure",id:"module-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"<code>Connections: table</code>",id:"connections-table",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>communication.Connect(name: string, func: () -&gt; ()) -&gt; Connection</code>",id:"communicationconnectname-string-func-------connection",level:3},{value:"<code>communication.Endpoint(name: string, func: (Player) -&gt; ())</code>",id:"communicationendpointname-string-func-player---",level:3},{value:"<code>communication.Send(...)</code>",id:"communicationsend",level:3},{value:"<code>communication.SendToPlayer(player: Player, ...)</code>",id:"communicationsendtoplayerplayer-player-",level:3},{value:"<code>communication.Stream(...)</code>",id:"communicationstream",level:3},{value:"<code>communication.StreamToPlayer(player: Player, ...)</code>",id:"communicationstreamtoplayerplayer-player-",level:3},{value:"<code>communication.Request(...) -&gt; any</code>",id:"communicationrequest---any",level:3},{value:"<code>communication.Receive(...)</code>",id:"communicationreceive",level:3},{value:"Classes",id:"classes",level:2},{value:"<code>Connection</code>",id:"connection",level:3},{value:"<code>connection.new(name: string, func: () -&gt; ()) -&gt; Connection</code>",id:"connectionnewname-string-func-------connection",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"-network",children:"\ud83d\udedc Network"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"communication"})," module provides a framework for communication between server and client using RemoteEvents and RemoteFunctions. It allows for establishing connections, handling requests, and sending data between server and client."]}),"\n",(0,c.jsx)(n.h2,{id:"module-structure",children:"Module Structure"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"\u2502 Connections\r\n\u2502 send\r\n\u2502 send_to\r\n\u2502 stream\r\n\u2502 stream_to\r\n\u2502 request\r\n\u2502 Receive\r\n\u2502 Connect\r\n\u2502 Endpoint\r\n\u2502 Connection\r\n\u2502 connection.new\r\n\u2502 handle_request\r\n\u2502 enqueue\r\n\u2502 unqueue\n"})}),"\n",(0,c.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,c.jsx)(n.h3,{id:"connections-table",children:(0,c.jsx)(n.code,{children:"Connections: table"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"A table to store active connections."}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,c.jsx)(n.h3,{id:"communicationconnectname-string-func-------connection",children:(0,c.jsx)(n.code,{children:"communication.Connect(name: string, func: () -> ()) -> Connection"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Establishes a connection for handling named network events."}),"\n",(0,c.jsxs)(n.li,{children:["Parameters:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),": The name of the network event."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"func"}),": The function to be executed when the event is received."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationendpointname-string-func-player---",children:(0,c.jsx)(n.code,{children:"communication.Endpoint(name: string, func: (Player) -> ())"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Registers an endpoint to handle incoming requests."}),"\n",(0,c.jsxs)(n.li,{children:["Parameters:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),": The name of the endpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"func"}),": The function to be executed when a request is received."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationsend",children:(0,c.jsx)(n.code,{children:"communication.Send(...)"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Sends data using the TCP protocol to all clients or the server."}),"\n",(0,c.jsx)(n.li,{children:"Parameters: Variable arguments to be sent."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationsendtoplayerplayer-player-",children:(0,c.jsx)(n.code,{children:"communication.SendToPlayer(player: Player, ...)"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Sends data using the TCP protocol to a specific player on the server."}),"\n",(0,c.jsx)(n.li,{children:"Parameters: Variable arguments to be sent."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationstream",children:(0,c.jsx)(n.code,{children:"communication.Stream(...)"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Sends data using the UDP protocol to all clients or the server."}),"\n",(0,c.jsx)(n.li,{children:"Parameters: Variable arguments to be sent."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationstreamtoplayerplayer-player-",children:(0,c.jsx)(n.code,{children:"communication.StreamToPlayer(player: Player, ...)"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Sends data using the UDP protocol to a specific player on the server."}),"\n",(0,c.jsx)(n.li,{children:"Parameters: Variable arguments to be sent."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationrequest---any",children:(0,c.jsx)(n.code,{children:"communication.Request(...) -> any"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Sends a request using the Endpoint protocol to the server and waits for a response."}),"\n",(0,c.jsx)(n.li,{children:"Parameters: Variable arguments representing the request."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"communicationreceive",children:(0,c.jsx)(n.code,{children:"communication.Receive(...)"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Receives data and triggers associated connections or endpoints."}),"\n",(0,c.jsx)(n.li,{children:"Parameters: Variable arguments received from the network."}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,c.jsx)(n.h3,{id:"connection",children:(0,c.jsx)(n.code,{children:"Connection"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Represents a connection created using ",(0,c.jsx)(n.code,{children:"communication.Connect"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["Methods:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Disconnect()"}),": Disconnects the connection."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"connectionnewname-string-func-------connection",children:(0,c.jsx)(n.code,{children:"connection.new(name: string, func: () -> ()) -> Connection"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Creates a new connection instance."}),"\n",(0,c.jsxs)(n.li,{children:["Parameters:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),": The name of the connection."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"func"}),": The function to be executed when the event is received."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var c=i(6540);const o={},t=c.createContext(o);function r(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);