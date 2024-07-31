"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{26384:function(e,n,t){t.d(n,{G:function(){return f}});var r=t(85893),s=t(82313),i=t(5616),o=t(15861),a=t(93946),c=t(53219),l=t(67294),x=t(90948),d=t(16078),p=t(34386),u=t(23926);let m=(0,x.ZP)(d.Z)(e=>{let{theme:n}=e;return{".MuiTooltip-tooltip":{color:"text.primary",backgroundColor:"#312f5c",p:0,borderRadius:"6px",boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)",maxWidth:"280px"},".MuiTooltip-arrow":{color:"#312f5c","&:before":{boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)"}}}}),h=e=>{let{children:n,tooltipContent:t,placement:s="top",withoutHover:o,open:a,setOpen:c,offset:x}=e,[d,h]=(0,l.useState)(!1),f=void 0!==a?a:d,j=()=>void 0!==c?c(!f):h(!f),y=()=>void 0!==c?c(!1):h(!1);return(0,r.jsx)(p.Z,{sx:{},open:f,onClose:y,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:s,PopperComponent:m,componentsProps:{popper:{modifiers:[{name:"offset",options:{offset:null!=x?x:[]}}],onClick:e=>{e.stopPropagation()}}},title:(0,r.jsx)(u.d,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:y,children:(0,r.jsx)(i.Z,{sx:{background:"#312f5c",py:4,px:6,fontSize:"12px",lineHeight:"16px",a:{fontSize:"12px",lineHeight:"16px",fontWeight:500,"&:hover":{textDecoration:"underline"}},color:"text.primary"},children:t})}),arrow:!0,children:(0,r.jsx)(i.Z,{sx:{display:"inline-flex",cursor:"pointer",transition:"all 0.2s ease","&:hover":{opacity:o?1:f?1:.5}},onClick:e=>{e.preventDefault(),e.stopPropagation(),j()},children:n})})},f=e=>{let{text:n,icon:t,iconSize:x=14,iconColor:d,iconMargin:p,children:u,textColor:m,wrapperProps:{sx:f,...j}={},open:y=!1,setOpen:Z,...g}=e,[b,v]=(0,l.useState)(y);return(0,r.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",...f},...j,children:[n&&(0,r.jsx)(o.Z,{...g,color:m,children:n}),(0,r.jsx)(h,{tooltipContent:(0,r.jsx)(r.Fragment,{children:u}),open:b,setOpen:()=>{Z&&Z(!b),v(!b)},children:(0,r.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:x,height:x,borderRadius:"50%",p:0,minWidth:0,ml:p||.5},onClick:()=>{},children:(0,r.jsx)(c.Z,{sx:{fontSize:x,color:d||(b?"info.main":"text.muted"),borderRadius:"50%","&:hover":{color:d||"info.main"}},children:t||(0,r.jsx)(s.Z,{})})})})]})}},49479:function(e,n,t){t.d(n,{B:function(){return l}});var r=t(85893),s=t(70794);function i(e){return e instanceof s.O?e:new s.O(e)}s.O.clone({DECIMAL_PLACES:0,ROUNDING_MODE:s.O.ROUND_DOWN});var o=t(15861);let a=["","K","M","B","T","P","E","Z","Y"];function c(e){let{value:n,visibleDecimals:t=2}=e,s=i(n),o=s.toFixed(0).length,c=Math.min(Math.floor(o?(o-1)/3:0),a.length-1),l=a[c],x=i(s).shiftedBy(-1*(3*c)).toNumber();return(0,r.jsxs)(r.Fragment,{children:[new Intl.NumberFormat("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}).format(x),l]})}function l(e){let{value:n,symbol:t,visibleDecimals:s,compact:i,percent:a,symbolsVariant:l,symbolsColor:x,...d}=e,p=a?100*Number(n):Number(n),u=s;0===p?u=0:void 0===s&&(u=p>1||a||"USD"===t?2:6);let m=10**-u,h=0!==p&&Math.abs(p)<Math.abs(m),f=h?m:p,j=!1!==i&&(i||p>99999);return(0,r.jsxs)(o.Z,{className:"formatted-number-apt",...d,sx:{display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative",...d.sx},noWrap:!0,children:[h&&(0,r.jsx)(o.Z,{component:"span",sx:{mr:.5},variant:l||d.variant,color:x||"text.secondary",children:"<"}),(null==t?void 0:t.toLowerCase())==="usd"&&!a&&(0,r.jsx)(o.Z,{component:"span",sx:{mr:.5},variant:l||d.variant,color:x||"text.secondary",children:"$"}),!j&&f>0?new Intl.NumberFormat("en-US",{maximumFractionDigits:u,minimumFractionDigits:u}).format(f):(0,r.jsx)(c,{value:f,visibleDecimals:u}),a&&(0,r.jsx)(o.Z,{component:"span",sx:{ml:.5},variant:l||d.variant,color:x||"text.secondary",children:"%"}),(null==t?void 0:t.toLowerCase())!=="usd"&&void 0!==t&&(0,r.jsx)(o.Z,{component:"span",sx:{ml:.5},variant:l||d.variant,color:x||"text.secondary",children:t})]})}},59242:function(e,n,t){t.d(n,{$w:function(){return Z},DI:function(){return T},Jh:function(){return M},aB:function(){return D},iG:function(){return F},k0:function(){return A},ki:function(){return R},oX:function(){return E},qE:function(){return _},so:function(){return z}});var r=t(82729),s=t(40885),i=t(68806),o=t(76312),a=t(67294);function c(){let e=(0,r._)(['\n  query GetLatestCreate {\n    creates(\n      first: 1\n      orderBy: assetId\n      orderDirection: desc\n      where: { arTxId_not: "", isContract: false }\n    ) {\n      id\n      assetId\n      arTxId\n      sender\n      blockTimestamp\n      transactionHash\n    }\n  }\n']);return c=function(){return e},e}function l(){let e=(0,r._)(['\n  query GetCreates($first: Int!, $skip: Int!) {\n  creates(\n      skip: $skip\n      first: $first\n      where: { arTxId_not: "", isContract: false }\n      orderDirection: desc\n      orderBy: blockTimestamp\n    ) {\n     id\n     assetId\n     arTxId\n     sender\n     blockTimestamp\n     transactionHash\n    }\n  }\n']);return l=function(){return e},e}function x(){let e=(0,r._)(["\n  query GetAssets($assetIds: [Int!]) {\n    assets(where: { assetId_in: $assetIds }) {\n      assetId\n      isDelete\n      totalFees\n      totalHolders\n      totalSupply\n      totalTradValue\n      totalTradVolume\n      totalTrades\n      creator {\n        address\n      }\n    }\n  }\n"]);return x=function(){return e},e}function d(){let e=(0,r._)(["\n  query GetUserAssets($assetId: Int!,$pageCount:Int!) {\n     userAssets(\n      where: {assetId: $assetId, user_: {isContract: false}}\n      orderBy: amount\n      orderDirection: desc\n      first: $pageCount\n    ) {\n      user {\n        address \n      }\n    }\n  }\n"]);return d=function(){return e},e}function p(){let e=(0,r._)(["\n  query GetSpaces($useArray: [String!]) { \n    spaceFactories(where: {id_in: $useArray}) {\n      user\n      spaceId\n      spaceName\n      descriptionAssetId\n      avatarArTxId\n      spaceAddress\n    }\n  }\n"]);return p=function(){return e},e}function u(){let e=(0,r._)(["\n  query GetAssetReply($parentAssetIds: [Int!]) { \n    spaceCounts(where: {parentId_in: $parentAssetIds}) {\n      parentId\n      count\n    }\n  }\n"]);return u=function(){return e},e}function m(){let e=(0,r._)(["\n  query GetSpaces ($assetId: Int!){\n    spaces(orderBy: blockNumber, orderDirection: desc, where: { parentId: $assetId }) {\n      id\n      sender\n      parentId\n      assetId\n      arTxId\n      isDelete\n      blockTimestamp\n      transactionHash\n      spaceFactory {\n        user\n        spaceName\n        avatarArTxId\n        descriptionAssetId\n        spaceId\n        spaceAddress\n      }\n    }\n  }\n"]);return m=function(){return e},e}function h(){let e=(0,r._)(["\n  query GetUsers ($address: String!){\n    users(where: {address: $address}) {\n      id\n      address\n      isContract\n      totalAssets\n      totalFees\n      totalHolders\n      totalTradValue\n      totalTradVolume\n      totalTrades\n    }\n  }\n"]);return h=function(){return e},e}function f(){let e=(0,r._)(["\n  query GetSpaceFactoryUser($address: String!) { \n    spaceFactories(where: {user: $address}) {\n        id\n        user\n        spaceId\n        spaceName\n        descriptionAssetId\n        avatarArTxId\n        spaceAddress\n        spaceAsset {\n          totalFees\n          totalHolders\n          totalSupply\n          totalTradValue\n          totalTradVolume\n          totalTrades\n          isDelete\n        }\n       spaceUser { \n          totalFees\n          totalHolders\n          totalAssets\n          totalTradValue\n          totalTradVolume\n          totalTrades \n        }\n    }\n  }\n"]);return f=function(){return e},e}function j(){let e=(0,r._)(["\n  query GetSpaceFactoryUsers($first: Int!, $skip: Int!) { \n    spaceFactories(\n    first: $first\n    skip: $skip\n    orderBy: spaceUser__totalTradValue\n    orderDirection: desc\n    ) {\n        id\n        user\n        spaceId\n        spaceName\n        descriptionAssetId\n        avatarArTxId\n        spaceAddress\n        spaceAsset {\n          totalFees\n          totalHolders\n          totalSupply\n          totalTradValue\n          totalTradVolume\n          totalTrades\n          isDelete\n        }\n        spaceUser { \n          totalFees\n          totalHolders\n          totalAssets\n          totalTradValue\n          totalTradVolume\n          totalTrades \n        }\n    }\n  }\n"]);return j=function(){return e},e}let y=(0,i.Ps)(c()),Z=(0,i.Ps)(l()),g=(0,i.Ps)(x()),b=(0,i.Ps)(d()),v=(0,i.Ps)(p()),w=(0,i.Ps)(u()),C=(0,i.Ps)(m()),S=(0,i.Ps)(h()),k=(0,i.Ps)(f()),I=(0,i.Ps)(j()),z=()=>{let{loading:e,error:n,data:t,refetch:r}=(0,o.a)(y,{client:s.c});return{loading:e,error:n,data:t,refetch:r}},F=e=>{let{loading:n,error:t,data:r,refetch:i}=(0,o.a)(g,{variables:{assetIds:e},client:s.c});return{loading:n,error:t,data:r,refetch:i}},D=e=>{let{loading:n,error:t,data:r,refetch:i}=(0,o.a)(v,{variables:{useArray:e},client:s.c,fetchPolicy:"cache-first"});return{loading:n,error:t,data:r,refetch:i}},T=e=>{let{loading:n,error:t,data:r,refetch:i}=(0,o.a)(w,{variables:{parentAssetIds:e},client:s.c});return{loading:n,error:t,data:r,refetch:i}},A=e=>{let{loading:n,error:t,data:r,refetch:i}=(0,o.a)(C,{variables:{assetId:e},client:s.c});return{loading:n,error:t,data:r,refetch:i}},M=e=>{let{loading:n,error:t,data:r,refetch:i}=(0,o.a)(S,{variables:{address:e},client:s.c}),c=(0,a.useMemo)(()=>!t&&r?r.users[0]:void 0,[r,t]);return{userInfo:c,loading:n,error:t,refetch:i}},_=e=>{let{loading:n,error:t,data:r,refetch:i}=(0,o.a)(k,{variables:{address:e},client:s.c}),c=(0,a.useMemo)(()=>!t&&r?r.spaceFactories[0]:void 0,[r,t]);return{sapceUser:c,loading:n,error:t,refetch:i}},E=(e,n)=>{let{loading:t,error:r,data:i,refetch:c}=(0,o.a)(I,{variables:{first:n,skip:e*n},client:s.c}),l=(0,a.useMemo)(()=>!r&&i?i.spaceFactories:void 0,[i,r]);return{userArray:l,loading:t,error:r,refetch:c}},R=(e,n)=>{let{loading:t,error:r,data:i,refetch:c}=(0,o.a)(b,{variables:{assetId:e,pageCount:n},client:s.c}),l=(0,a.useMemo)(()=>!r&&i?i.userAssets.map(e=>e.user.address):void 0,[i,r]);return{userArray:l,loading:t,error:r,refetch:c}}},67952:function(e,n,t){t.d(n,{Z:function(){return ep}});var r=t(85893),s=t(5616),i=t(15861),o=t(69417),a=t(78462),c=t(76113),l=t(48885),x=t(87952),d=t(67294),p=t(59334),u=t(57922),m=t(76638),h=t(5306),f=t(76824),j=t(28201),y=t(11898),Z=t(33334),g=t(49123),b=t(43800),v=t(94229),w=t(60181),C=t(23508),S=t(57976),k=t(41664),I=t.n(k),z=t(47726),F=t(26384),D=t(77985),T=t(64032),A=t(31065),M=t(74187),_=t(19215),E=t(11163),R=t(10084),P=t(47781);function $(){let e=(0,E.useRouter)(),{connector:n}=(0,D.useWeb3React)(),{setWalletModalOpen:t,disconnectWallet:k,account:$,spaceUserInfo:N}=(0,A.Yh)(),{setType:G}=(0,T.a)(),[H,O]=(0,d.useState)(!0),{refetchSpaceUserData:U}=(0,_.n)(),{tempSelectMemuIndex:V,setTempSelectMemuIndex:B}=(0,P.R)(),L=()=>{O(!H)},[W,q]=d.useState(-1);(0,d.useEffect)(()=>{let n=e.pathname;switch(n){case"/":case"/asset-overview":q(0);break;case"/space":q(1)}},[]),(0,d.useEffect)(()=>{V&&(q(V),V>30&&V<40&&O(!0))},[V]);let Y=(n,t,r)=>{q(t),B(t),3==t?L():0==t||1==t||2==t||31==t||33==t?e.push(r):34==t?window.open(r):35==t?K():(0,R.L)(!1,"Coming soon!")},K=async()=>{await k(n),U&&U()},{avatar:X,spacename:J}=(0,d.useMemo)(()=>(0,z.Dm)($,N),[$,N]);return(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"},children:[(0,r.jsxs)(s.Z,{sx:{mt:6},children:[(0,r.jsx)(I(),{href:"/",style:{display:"flex",textAlign:"center",alignItems:"center",padding:"0px 0 20px 40px",gap:"10px"},children:(0,r.jsx)("img",{src:"/zenco.png",style:{width:"50px",height:"50px",borderRadius:"8px"}})}),(0,r.jsxs)(a.Z,{component:"nav","aria-labelledby":"nested-list-subheader",children:[(0,r.jsxs)(c.Z,{onClick:e=>Y(e,0,"/"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(m.Z,{fontSize:"medium",sx:{color:0===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Trending",sx:{color:0===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{onClick:e=>Y(e,1,"/space"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(h.Z,{fontSize:"medium",sx:{color:1===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Spaces",sx:{color:1===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{onClick:e=>$?Y(e,2,"/message"):t(!0),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(f.Z,{fontSize:"small",sx:{color:2===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Messages",sx:{color:2===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{onClick:e=>{$?Y(e,3,"/"):t(!0)},sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(j.Z,{fontSize:"medium",sx:{color:3===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Account",sx:{color:3===W?"text.primary":"text.secondary",fontSize:"0.985rem"}}),H?(0,r.jsx)(w.Z,{}):(0,r.jsx)(C.Z,{})]}),(0,r.jsx)(u.Z,{in:H,timeout:"auto",unmountOnExit:!0,children:(0,r.jsxs)(a.Z,{component:"div",disablePadding:!0,children:[(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>$?Y(e,31,"/space-overview?address=".concat($,"&menu=1")):t(!0),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(y.Z,{fontSize:"medium",sx:{color:31===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Space",sx:{color:31===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>$?Y(e,33,"/holdings?address=".concat($,"&menu=1")):t(!0),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(Z.Z,{fontSize:"medium",sx:{color:33===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Holdings",sx:{color:33===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>Y(e,34,"".concat(M.zG[M.KY].blockExplorerUrls[0],"/address/").concat($)),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(b.Z,{fontSize:"medium",sx:{color:34===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"View on Explorer",sx:{color:34===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>Y(e,35,"/"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(g.Z,{fontSize:"medium",sx:{color:35===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Disconnect Wallet",sx:{color:35===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]})]})}),(0,r.jsxs)(c.Z,{onClick:e=>Y(e,4,"/"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(v.Z,{fontSize:"medium",sx:{color:4===W?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Settings",sx:{color:4===W?"text.primary":"text.secondary",fontSize:"0.985rem"}})]})]})]}),(0,r.jsx)(s.Z,{sx:{mb:4},children:$&&(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,r.jsxs)(s.Z,{sx:{display:"flex",gap:2,cursor:"pointer"},component:"div",onClick:()=>{G(T.w.UserInfo)},children:[(0,r.jsx)(x.Z,{alt:"",src:X}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,r.jsx)(i.Z,{variant:"main16",color:"text.main",children:J}),(0,r.jsx)(i.Z,{variant:"secondary12",color:"text.secondary",children:(0,z.Xe)($,4,4)})]})]}),(0,r.jsx)(s.Z,{sx:{marginRight:2,display:"flex",alignItems:"center"},children:(0,r.jsx)(F.G,{icon:(0,r.jsx)(S.Z,{fontSize:"medium",sx:{color:"#f9ffff"}}),iconSize:20,children:(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:5},children:[(0,r.jsx)(o.Z,{variant:"surface_1",onClick:()=>{t(!0),K()},children:"Switch wallet"}),(0,r.jsx)(o.Z,{variant:"surface_1",onClick:()=>{K()},children:"Disconnect"})]})})})]})})]})}var N=t(42293),G=t(10155),H=t(93946),O=t(34386),U=t(35294),V=t(18972),B=t(77533),L=t(23795),W=t(326),q=t(46154),Y=t(72876),K=t(25449),X=t(75341);function J(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:3},children:[(0,r.jsx)(I(),{target:"_blank",href:"https://x.com/ZencoSpace",children:(0,r.jsx)(H.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,r.jsx)(Y.Z,{style:{fontSize:"18px",color:"#F9FFFE"}})})}),(0,r.jsx)(I(),{target:"_blank",href:"https://discord.gg/anxkqrJm",children:(0,r.jsx)(H.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1897",id:"mx_n_1722125676534",width:"18",height:"18",children:(0,r.jsx)("path",{d:"M658.432 486.4c0 31.232-23.04 56.832-52.224 56.832-28.672 0-52.224-25.6-52.224-56.832s23.04-56.832 52.224-56.832c29.184 0 52.224 25.6 52.224 56.832z m-239.104-56.832c-29.184 0-52.224 25.6-52.224 56.832s23.552 56.832 52.224 56.832c29.184 0 52.224-25.6 52.224-56.832 0.512-31.232-23.04-56.832-52.224-56.832zM960 105.472V1024c-128.988-113.988-87.736-76.256-237.568-215.552l27.136 94.72H168.96C111.104 903.168 64 856.064 64 797.696V105.472C64 47.104 111.104 0 168.96 0h686.08C912.896 0 960 47.104 960 105.472z m-145.92 485.376c0-164.864-73.728-298.496-73.728-298.496-73.728-55.296-143.872-53.76-143.872-53.76l-7.168 8.192c87.04 26.624 127.488 65.024 127.488 65.024-121.622-66.658-264.488-66.67-382.464-14.848-18.944 8.704-30.208 14.848-30.208 14.848s42.496-40.448 134.656-67.072l-5.12-6.144s-70.144-1.536-143.872 53.76c0 0-73.728 133.632-73.728 298.496 0 0 43.008 74.24 156.16 77.824 0 0 18.944-23.04 34.304-42.496-65.024-19.456-89.6-60.416-89.6-60.416 7.532 5.272 19.952 12.106 20.992 12.8 86.42 48.396 209.176 64.252 319.488 17.92 17.92-6.656 37.888-16.384 58.88-30.208 0 0-25.6 41.984-92.672 60.928 15.36 19.456 33.792 41.472 33.792 41.472 113.152-3.584 156.672-77.824 156.672-77.824z",fill:"#F9FFFE","p-id":"1898"})})})}),(0,r.jsx)(I(),{target:"_blank",href:"https://bodhi-1.gitbook.io/zenco-documentation",onClick:()=>{(0,R.L)(!1," Coming soon!")},children:(0,r.jsx)(H.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3062",width:"20",height:"20",children:(0,r.jsx)("path",{d:"M512 0C229.205333 0 0 229.205333 0 512s229.205333 512 512 512 512-229.205333 512-512S794.794667 0 512 0z m-16.768 735.573333a23.978667 23.978667 0 0 0-23.722667-24.234666 24.021333 24.021333 0 0 0-23.68 24.234666 23.978667 23.978667 0 0 0 23.68 24.234667 24.021333 24.021333 0 0 0 23.722667-24.234667z m324.949333-198.698666a23.978667 23.978667 0 0 0 23.68 24.234666 24.064 24.064 0 0 0 23.722667-24.192 23.978667 23.978667 0 0 0-23.68-24.277333 24.021333 24.021333 0 0 0-23.722667 24.234667z m-49.706666 0c0-41.386667 32.938667-75.093333 73.429333-75.093334 40.490667 0 73.429333 33.706667 73.429333 75.093334 0 41.429333-32.938667 75.093333-73.429333 75.093333-16.341333 0-32.341333-5.632-45.141333-15.914667l-253.781334 140.629334c-0.64 40.917333-33.322667 73.984-73.472 73.984-36.48 0-67.413333-27.52-72.618666-64.341334l-230.4-121.514666c-37.845333-20.309333-64.341333-75.648-61.653334-128.725334 1.792-33.493333 15.232-60.458667 36.992-74.026666 12.16-7.509333 225.621333-115.626667 385.109334-196.266667l8.533333-4.352c4.394667-2.816 29.013333-16.64 59.605333-0.213333 35.413333 18.986667 116.138667 57.6 187.306667 91.690666l1.408 0.64c32.853333 15.786667 66.389333 31.829333 88.32 42.581334 0 0 11.946667 4.650667 11.946667 16.426666 0 8.533333-6.656 14.165333-12.373334 16.384l-390.656 207.786667c-20.906667 10.112-27.733333 7.722667-39.978666 1.962667-8.021333-3.797333-196.992-105.6-254.72-136.704l-1.450667-0.768c-7.68-4.138667-14.933333-4.437333-20.906667-0.938667-9.472 5.504-15.701333 19.84-16.64 38.229333-1.834667 35.285333 15.402667 74.069333 38.4 86.442667l217.941334 117.504a73.386667 73.386667 0 0 1 65.834666-41.984c24.149333 0 46.506667 12.032 60.288 32.341333l242.56-132.053333c-2.56-7.68-3.84-15.786667-3.882666-23.893333z",fill:"#F9FFFE","p-id":"3063"})})})}),(0,r.jsx)(I(),{target:"_blank",href:"https://github.com/zencoLabs",children:(0,r.jsx)(H.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,r.jsx)(K.Z,{style:{fontSize:"20px",color:"#F9FFFE"}})})}),(0,r.jsx)(I(),{href:"/terms",style:{textDecoration:"none"},children:(0,r.jsx)(H.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:20,height:20,borderRadius:"50%",p:0,minWidth:0},children:(0,r.jsx)(X.Z,{style:{fontSize:"20px",color:"#F9FFFE"}})})})]})})}function Q(){let[e,n]=(0,d.useState)(!1),t=e=>()=>{n(e)},S=(0,E.useRouter)(),{connector:k}=(0,D.useWeb3React)(),{setWalletModalOpen:I,disconnectWallet:F,account:$,spaceUserInfo:Y}=(0,A.Yh)(),{setType:K}=(0,T.a)(),{refetchSpaceUserData:X}=(0,_.n)(),[Q,ee]=(0,d.useState)(!0),[en,et]=(0,d.useState)(-1),{tempSelectMemuIndex:er,setTempSelectMemuIndex:es}=(0,P.R)(),ei=()=>{ee(!Q)};(0,d.useEffect)(()=>{let e=S.pathname;switch(e){case"/":case"/asset-overview":et(0);break;case"/space":et(1)}},[]),(0,d.useEffect)(()=>{er&&(et(er),er>30&&er<40&&ee(!0))},[er]);let eo=(e,n,r)=>{et(n),es(n),3==n?ei():(t(!1),0==n||1==n||2==n||31==n||33==n?S.push(r):34==n?window.open(r):35==n?ea():(0,R.L)(!1,"Coming soon!"))},ea=async()=>{await F(k),X&&X()},[ec,el]=(0,d.useState)(null),ex=()=>{el(null)},{avatar:ed,spacename:ep}=(0,d.useMemo)(()=>(0,z.Dm)($,Y),[$,Y]);async function eu(){if(!$){I(!0);return}let e=(0,q.fO)(Y);if(!e){K(T.w.UserInfo);return}S.push("/mobile-blogeditor")}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{sx:{flexGrow:1},children:(0,r.jsx)(N.Z,{position:"fixed",sx:{borderRadius:"0px",backgroundColor:"#000000"},children:(0,r.jsxs)(G.Z,{children:[(0,r.jsx)(H.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:t(!0),children:(0,r.jsx)(W.Z,{fontSize:"large"})}),(0,r.jsx)(s.Z,{component:"div",sx:{flexGrow:1,display:"flex",justifyContent:"center"},children:$?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(i.Z,{variant:"h4",className:"art-text-logo",children:"Zenco"})}),$?(0,r.jsxs)(s.Z,{sx:{display:"flex",flexGrow:0,gap:"20px"},children:[(0,r.jsx)(H.Z,{onClick:()=>eu(),sx:{p:0},children:(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3724",width:"24",height:"24",children:(0,r.jsx)("path",{d:"M425.396383 555.773581 431.371301 561.74849 852.57519 140.54461 814.060439 102.029857 392.856547 523.233737 397.485239 527.862435 355.764622 678.571814 495.194066 647.358507 496.733003 648.897427 499.159706 646.470743 501.690154 645.904253 500.789814 644.840622 925.298594 220.331836 886.783842 181.817091 465.477263 603.123668 425.396383 555.773581 425.396383 555.773581ZM44.988027 196.085106 12.307176 196.085106 12.307176 1023.999999 44.988027 1023.999999 840.222068 1023.999999 840.222068 991.319148 840.222068 991.319148 840.222068 370.382978 796.6476 392.170212 796.6476 980.425531 55.881644 980.425531 55.881644 980.425531 55.881644 239.659574 644.136962 239.659574 665.924196 196.085106 44.988027 196.085106 44.988027 196.085106ZM884.769233 27.03553C901.827657 9.977109 929.364418 9.856704 946.619979 27.112265L1000.236757 80.729042C1017.337559 97.829842 1017.429165 125.464114 1000.313491 142.579788L954.170992 188.722287 838.626735 73.178029 884.769233 27.03553Z",fill:"#75cedb","p-id":"3725"})})}),(0,r.jsx)(O.Z,{title:"Open settings",children:(0,r.jsx)(H.Z,{onClick:e=>{el(e.currentTarget)},sx:{p:0},children:(0,r.jsx)(x.Z,{alt:"",src:ed,sx:{width:"28px",height:"28px"}})})}),(0,r.jsxs)(U.Z,{sx:{mt:"40px","& .MuiMenu-paper":{backgroundColor:"#000000"}},id:"menu-appbar",anchorEl:ec,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!!ec,onClose:ex,PaperProps:{sx:{}},children:[(0,r.jsx)(V.Z,{onClick:ex,children:(0,r.jsxs)(s.Z,{sx:{display:"flex",gap:2,cursor:"pointer",minWidth:"200px"},component:"div",onClick:()=>{K(T.w.UserInfo)},children:[(0,r.jsx)(x.Z,{alt:"",src:ed,sx:{width:"36px",height:"36px"}}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,r.jsx)(i.Z,{variant:"main16",color:"text.main",children:ep}),(0,r.jsx)(i.Z,{variant:"secondary12",color:"text.secondary",children:(0,z.Xe)($,4,4)})]})]})}),(0,r.jsx)(V.Z,{onClick:ex,sx:{padding:"2px 6px",minHeight:"32px"},children:(0,r.jsx)(o.Z,{variant:"text",onClick:()=>{K(T.w.UserInfo)},sx:{backgroundColor:"transparent","& span":{display:"none"}},children:"Profile"})}),(0,r.jsx)(V.Z,{onClick:ex,sx:{padding:"2px 6px",minHeight:"32px"},children:(0,r.jsx)(o.Z,{variant:"text",onClick:()=>{ea()},sx:{backgroundColor:"transparent","& span":{display:"none"}},children:"Disconnect"})})]})]}):(0,r.jsx)(o.Z,{color:"inherit",sx:{fontSize:"18px"},onClick:()=>{I(!0)},children:"Login"})]})})}),(0,r.jsx)(B.ZP,{open:e,onClose:t(!1),sx:{},PaperProps:{sx:{background:"#26244b",borderRadius:"unset"}},children:(0,r.jsx)(s.Z,{sx:{display:"flex",width:250,flex:1},role:"presentation",children:(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1},children:[(0,r.jsxs)(s.Z,{sx:{mt:6},children:[(0,r.jsx)(L.Z,{href:"/",style:{display:"flex",textAlign:"center",alignItems:"center",padding:"0px 0 20px 40px",gap:"10px",textDecoration:"none"},onClick:t(!1),children:(0,r.jsx)(i.Z,{variant:"main21",children:"Zenco"})}),(0,r.jsxs)(a.Z,{component:"nav","aria-labelledby":"nested-list-subheader",children:[(0,r.jsxs)(c.Z,{onClick:e=>eo(e,0,"/"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(m.Z,{fontSize:"medium",sx:{color:0===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Trending",sx:{color:0===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{onClick:e=>eo(e,1,"/space"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(h.Z,{fontSize:"medium",sx:{color:1===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Spaces",sx:{color:1===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{onClick:e=>$?eo(e,2,"/message"):I(!0),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(f.Z,{fontSize:"small",sx:{color:2===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Messages",sx:{color:2===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{onClick:e=>{$?eo(e,3,"/"):I(!0)},sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(j.Z,{fontSize:"medium",sx:{color:3===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Account",sx:{color:3===en?"text.primary":"text.secondary",fontSize:"0.985rem"}}),Q?(0,r.jsx)(w.Z,{}):(0,r.jsx)(C.Z,{})]}),(0,r.jsx)(u.Z,{in:Q,timeout:"auto",unmountOnExit:!0,children:(0,r.jsxs)(a.Z,{component:"div",disablePadding:!0,children:[(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>$?eo(e,31,"/space-overview?address=".concat($,"&menu=1")):I(!0),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(y.Z,{fontSize:"medium",sx:{color:31===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Space",sx:{color:31===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>$?eo(e,33,"/holdings?address=".concat($,"&menu=1")):I(!0),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(Z.Z,{fontSize:"medium",sx:{color:33===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Holdings",sx:{color:33===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>eo(e,34,"".concat(M.zG[M.KY].blockExplorerUrls[0],"/address/").concat($)),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(b.Z,{fontSize:"medium",sx:{color:34===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"View on Explorer",sx:{color:34===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]}),(0,r.jsxs)(c.Z,{sx:{pl:8},onClick:e=>eo(e,35,"/"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(g.Z,{fontSize:"medium",sx:{color:35===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Disconnect Wallet",sx:{color:35===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]})]})}),(0,r.jsxs)(c.Z,{onClick:e=>eo(e,4,"/"),children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(v.Z,{fontSize:"medium",sx:{color:4===en?"text.primary":"text.secondary"}})}),(0,r.jsx)(p.Z,{primary:"Settings",sx:{color:4===en?"text.primary":"text.secondary",fontSize:"0.985rem"}})]})]})]}),(0,r.jsx)(s.Z,{sx:{mb:3,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:1},children:(0,r.jsx)(J,{})})]})})})]})}var ee=t(2734),en=t(90629),et=t(67720),er=t(21737),es=t(49479),ei=t(61730),eo=t(9526);let ea=e=>{let{icon:n,title:t,titleIcon:o,children:a,hideIcon:c,variant:l="main14",withLine:x,loading:d,withoutIconWrapper:p}=e,u=(0,ee.Z)(),m=(0,ei.Z)(u.breakpoints.up("sm"));return(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[x&&(0,r.jsx)(s.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!c&&(p?n&&n:(0,r.jsx)(s.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#383D51",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:n&&n})),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column"},children:[d?(0,r.jsx)(eo.Z,{width:60,height:m?28:24,sx:{background:"#383D51"}}):a,(0,r.jsxs)(s.Z,{sx:{display:"inline-flex",alignItems:"center",mt:1},children:[(0,r.jsx)(i.Z,{variant:l,color:"text.secondary",component:"div",children:t}),o&&o]})]})]})};var ec=t(59242),el=t(42292);function ex(){var e;(0,ee.Z)();let{account:n,setWalletModalOpen:t,ethPrice:a,currentTimestamp:c}=(0,A.Yh)(),{userInfo:l,error:x,refetch:p}=(0,ec.Jh)(null!=n?n:el._);async function u(){n||t(!0)}return(0,d.useEffect)(()=>{p()},[c,p]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{children:(0,r.jsxs)(en.Z,{sx:e=>({padding:"12px",background:"transparent",border:"1px solid #434b59"}),children:[(0,r.jsx)(i.Z,{variant:"h3",color:"#75cedb",sx:{},children:"My assets"}),(0,r.jsx)(et.Z,{sx:{mb:4,mt:2}}),n?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.Z,{sx:{display:"grid",gridTemplateColumns:" repeat(2, 3fr)",gridGap:"4px",minHeight:"40px"},children:[(0,r.jsx)(s.Z,{sx:{},children:(0,r.jsx)(ea,{title:(0,r.jsx)(r.Fragment,{children:"Assets"}),hideIcon:!0,variant:"secondary14",children:(0,r.jsx)(es.B,{value:null!==(e=null==l?void 0:l.totalAssets)&&void 0!==e?e:0,variant:"main16",symbolsVariant:"secondary16",visibleDecimals:0})})}),(0,r.jsx)(s.Z,{sx:{},children:(0,r.jsx)(ea,{title:(0,r.jsx)(r.Fragment,{children:"Holders"}),hideIcon:!0,variant:"secondary14",children:(0,r.jsx)(es.B,{value:(null==l?void 0:l.totalHolders)?Number(l.totalHolders)+1:1,variant:"main16",symbolsVariant:"secondary16",visibleDecimals:0,color:"text.primary",symbolsColor:"text.primary"})})})]})}):(0,r.jsx)(o.Z,{variant:"surface",size:"large",onClick:u,sx:{width:"100%"},children:"Connect Wallet"})]})}),(0,r.jsx)(er.Z,{severity:"info",icon:(0,r.jsx)(r.Fragment,{}),sx:{mt:"24px",mb:"6px",display:"flex",".MuiAlert-icon":{display:"none"}},children:"The Zenco project is inspired by the Bodhi protocol. Special thanks to the founder of Bodhi for their innovative approach to decentralized content incentivization."}),(0,r.jsx)(er.Z,{severity:"warning",icon:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(X.Z,{})}),sx:{mt:"24px",mb:"6px",display:"flex"},children:(0,r.jsx)(I(),{href:"/terms",style:{textDecoration:"none"},children:"Terms of Service"})})]})}var ed=t(85518);function ep(e){let{children:n}=e,{setWalletModalOpen:t,account:a}=(0,A.Yh)();async function c(){a||t(!0)}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{sx:{margin:"0px auto",width:ed.tq?"100%":"1024px",pl:"0",pr:"0"},children:ed.tq?(0,r.jsxs)(s.Z,{component:"main",sx:{display:"flex",flexDirection:"column",flex:1},children:[(0,r.jsx)(Q,{}),(0,r.jsx)(s.Z,{sx:{pl:"10px",pr:"10px",pt:"80px",pb:"10px"},children:n})]}):(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%"},children:[(0,r.jsx)(s.Z,{sx:{width:"230px",flexBasis:"230px",flexShrink:"0",justifyContent:"flex-end",marginRight:"20px"},children:(0,r.jsx)(s.Z,{sx:{width:"230px",height:"100vh",position:"fixed",top:0,overflow:"hidden",borderRight:"1px solid  #434b59"},children:(0,r.jsx)($,{})})}),(0,r.jsx)(s.Z,{sx:{flex:1,overflowY:"auto"},children:(0,r.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"row",mt:6,mb:4},children:[(0,r.jsx)(s.Z,{sx:{flex:1},children:n}),(0,r.jsx)(s.Z,{sx:{width:"240px",marginLeft:"20px"},children:(0,r.jsx)(ex,{})})]})})]})}),!ed.tq&&(0,r.jsx)(r.Fragment,{children:a?(0,r.jsx)(s.Z,{sx:{position:"fixed",bottom:"16px",right:"2%"},children:(0,r.jsx)(J,{})}):(0,r.jsx)(s.Z,{sx:{position:"fixed",width:"100%",height:ed.tq?"80px":"120px",background:"#5d5cdc",bottom:0},children:(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",gap:2},children:[(0,r.jsx)(i.Z,{fontSize:"16px",children:"Zonco makes content tradable. Each piece is like a mini-company. You buy and sell its shares directly with Zonco. "}),(0,r.jsx)(o.Z,{variant:"surface",size:"large",onClick:c,startIcon:(0,r.jsx)(Z.Z,{fontSize:"small"}),children:"Connect Wallet"})]})})})]})}},10084:function(e,n,t){t.d(n,{L:function(){return s},V:function(){return i}}),t(67294);var r=t(55678);function s(e,n){e?r.Am.success(n,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):r.Am.error("".concat(n),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function i(e,n){e?r.Am.success(n,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):r.Am.error("".concat(n),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},42292:function(e,n,t){t.d(n,{_:function(){return r}});let r="0x0000000000000000000000000000000000000000"},47781:function(e,n,t){t.d(n,{R:function(){return s}});var r=t(64529);let s=(0,r.Ue)(e=>({setTempAssetModal(n){e({tempAssetModal:n})},setTempSpaceModal(n){e({tempSpaceModal:n})},setTempSelectMemuIndex(n){e({tempSelectMemuIndex:n})}}))},46154:function(e,n,t){t.d(n,{Q1:function(){return i},fO:function(){return o}});var r=t(25733),s=t(74187);async function i(e){let n=new r.r(s.zG[s.KY].urls[0]),t=await n.getTransaction(e);return t}function o(e){return!!e&&!!e.spaceAddress&&""!=e.spaceAddress&&"0x0000000000000000000000000000000000000000"!=e.spaceAddress&&!!e.spaceName}},47726:function(e,n,t){t.d(n,{Dm:function(){return a},Xe:function(){return o},i$:function(){return c}});var r=t(11288),s=t.n(r),i=t(74187);let o=(e,n,t)=>e&&""!==e?"".concat(e.substr(0,n),"...").concat(e.substr(e.length-t,e.length)):"",a=(e,n)=>{let t=n&&n.avatarArTxId?"".concat(i.zA.ar_url).concat(null==n?void 0:n.avatarArTxId):e?s()(e):"/icons/img/user.jpg",r=n&&n.spaceName?n.spaceName:o(e,4,4);return{avatar:t,spacename:r}},c=e=>{let n=Date.now()/1e3,t=n-e;if(t<0){let n=Math.abs(t);if(n<60)return"".concat(Math.floor(n),"s from now");if(n<3600)return"".concat(Math.floor(n/60),"m from now");{if(n<86400)return"".concat(Math.floor(n/3600),"h from now");let t=new Date(1e3*e),r=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return"on ".concat(r.format(t))}}if(t<60)return"".concat(Math.floor(t),"s ago");if(t<3600)return"".concat(Math.floor(t/60),"m ago");{if(t<86400)return"".concat(Math.floor(t/3600),"h ago");let n=new Date(1e3*e),r=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return r.format(n)}}}}]);