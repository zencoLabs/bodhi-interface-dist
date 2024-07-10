(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{1023:function(e,s,n){"use strict";var t=n(4836);s.Z=void 0;var r=t(n(4938)),a=n(5893);s.Z=(0,r.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},261:function(e,s,n){"use strict";var t=n(4836);s.Z=void 0;var r=t(n(4938)),a=n(5893);s.Z=(0,r.default)((0,a.jsx)("path",{d:"M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"}),"CandlestickChart")},2964:function(e,s,n){"use strict";var t=n(4836);s.Z=void 0;var r=t(n(4938)),a=n(5893);s.Z=(0,r.default)((0,a.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"}),"ChatBubbleOutline")},5058:function(e,s,n){"use strict";var t=n(4836);s.Z=void 0;var r=t(n(4938)),a=n(5893);s.Z=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Create")},8878:function(e,s,n){"use strict";var t=n(4836);s.Z=void 0;var r=t(n(4938)),a=n(5893);s.Z=(0,r.default)((0,a.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"}),"PermIdentity")},3370:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/space-overview",function(){return n(1848)}])},1848:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return M}});var t=n(5893),r=n(1730),a=n(5616),i=n(7294),l=n(9766),d=n(1163),c=n(2138),o=n(5861),u=n(1519),x=n(1664),v=n.n(x),p=n(1023),h=n(2027),f=n(2729),m=n(5751),y=n(1065),j=n(8806),I=n(6312);function g(){let e=(0,f._)(["\n  query GetCreates($assetId: Int!) {\n   creates(where: {assetId: $assetId}) {\n     id\n     assetId\n     arTxId\n     sender\n     blockTimestamp\n     transactionHash\n    }\n  }\n"]);return g=function(){return e},e}let Z=(0,j.Ps)(g()),b=e=>{var s,n,r,a;let{assetId:l}=e,{currentTimestamp:d}=(0,y.Yh)(),{loading:c,error:u,data:x,refetch:v}=(0,I.a)(Z,{variables:{assetId:l}});(0,i.useEffect)(()=>{v()},[d,v]);let p=(null==x?void 0:null===(s=x.creates)||void 0===s?void 0:s.filter(e=>""!==e.arTxId).map(e=>e.arTxId))||[],h=(0,m.lv)(p);return console.log({arweaveQueries:h}),(0,t.jsx)(t.Fragment,{children:h.length>0&&(0,t.jsx)(o.Z,{variant:"secondary14",color:"text.secondary",children:(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(a=null===(r=h[0])||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:n.replace(/\n/g,"<br />"))&&void 0!==a?a:""}})})})};var w=n(5577),C=n(9479),k=n(8878);let S=e=>{let{spaceUserInfo:s}=e,{ethPrice:n}=(0,y.Yh)(),{data:r,error:i}=(0,c.Qn)(null==s?void 0:s.spaceAddress),{userAssets:l,totalAmount:d,totalAmountETH:x,totalFees:f,totalHolders:m}=(0,w.Z)(null==s?void 0:s.address);return(0,t.jsx)(a.Z,{children:!i&&s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",borderRadius:1,padding:"10px",gap:2},children:[(0,t.jsx)(v(),{href:"/space",children:(0,t.jsx)(p.Z,{sx:{color:"#F9FFFE"}})}),(0,t.jsxs)(o.Z,{children:["Space #",null==s?void 0:s.spaceId]})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)(h.v,{sender:s.address,spaceUserInfo:s}),(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},component:"div",title:"Holders",children:[(0,t.jsx)(k.Z,{sx:{color:"text.secondary",width:"20px"}}),(0,t.jsx)(C.B,{value:m,variant:"secondary16",symbolsVariant:"secondary16",color:"text.secondary",symbolsColor:"text.secondary",visibleDecimals:0})]})]}),(0,t.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(a.Z,{sx:{mt:2},children:(0,t.jsx)(C.B,{value:Number(x)*(null!=n?n:0),variant:"main21",symbolsVariant:"main21",color:"text.primary",symbolsColor:"text.primary",visibleDecimals:4,symbol:"USD"})}),(0,t.jsx)(a.Z,{sx:{mb:1},children:(0,t.jsx)(C.B,{value:x,variant:"secondary16",symbolsVariant:"secondary16",color:"text.secondary",symbolsColor:"text.secondary",visibleDecimals:4,symbol:"CFX"})})]}),r?(0,t.jsx)(a.Z,{sx:{paddingLeft:"48px",paddingTop:"10px",paddingBottom:"10px"},children:(0,t.jsx)(b,{assetId:r})}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsx)(u.Z,{sx:{mt:1,mb:2}})]})})};var _=n(9417),H=n(629),T=n(7781),F=n(3124),D=n(9573),B=n(8117),q=n(1266),A=n(5058),V=n(4032);function $(){let e=(0,f._)(['\n  query GetCreates($first: Int!, $skip: Int!, $sender: String!) {\n  creates(\n      skip: $skip\n      first: $first\n       where: { arTxId_not: "", sender: $sender }\n      orderDirection: desc\n      orderBy: blockTimestamp\n    ) {\n     id\n     assetId\n     arTxId\n     sender\n     blockTimestamp\n     transactionHash\n    }\n  }\n']);return $=function(){return e},e}function E(){let e=(0,f._)(["\nquery GetAssets($assetIds: [Int!]) {\nassets( \n     where: { assetId_in: $assetIds } \n  ) {\n    assetId\n    totalSupply\n  }\n}\n"]);return E=function(){return e},e}let N=(0,j.Ps)($()),P=(0,j.Ps)(E()),U=e=>{var s,n,r;let{spaceUserInfo:l}=e,c=(0,d.useRouter)(),{setTempAssetModal:o}=(0,T.R)(),{setType:u}=(0,V.a)(),{currentTimestamp:x,setWalletModalOpen:v,disconnectWallet:p,account:f,spaceUserInfo:j}=(0,y.Yh)(),[g,Z]=(0,i.useState)(0),{loading:b,error:w,data:C,refetch:k}=(0,I.a)(N,{variables:{first:20,skip:20*g,sender:null==l?void 0:l.address}}),S=(null==C?void 0:null===(s=C.creates)||void 0===s?void 0:s.map(e=>Number(e.assetId)))||[],{loading:$,error:E,data:U,refetch:M}=(0,I.a)(P,{variables:{assetIds:S}});(0,i.useEffect)(()=>{k(),M()},[x,k]);let Y=(null==C?void 0:null===(n=C.creates)||void 0===n?void 0:n.map(e=>e.arTxId))||[],z=(0,m.lv)(Y);function L(e,s){var n,t;o({id:e.id,assetId:e.assetId,arTxId:e.arTxId,sender:e.sender,blockTimestamp:e.blockTimestamp,transactionHash:e.transactionHash,contentData:null===(n=z[s])||void 0===n?void 0:n.data,spaceUserInfo:l,assetSupply:null!==(t=null==U?void 0:U.assets.find(s=>s.assetId==Number(e.assetId)).totalSupply)&&void 0!==t?t:0})}async function R(){if(!f){v(!0);return}let e=!!j&&!!j.spaceAddress&&""!=j.spaceAddress&&"0x0000000000000000000000000000000000000000"!=j.spaceAddress;if(!e){u(V.w.UserInfo);return}u(V.w.BlogEditor)}return(0,t.jsxs)(a.Z,{sx:{mt:8},children:[(0,t.jsx)(a.Z,{sx:{display:"flex",gap:4,mb:3},children:(0,t.jsx)(_.Z,{variant:"surface",size:"medium",startIcon:(0,t.jsx)(A.Z,{fontSize:"small"}),onClick:()=>{R()},children:"Create"})}),l&&(0,t.jsx)(t.Fragment,{children:null==C?void 0:C.creates.map((e,s)=>{var n,i,d;return(0,t.jsxs)(H.Z,{sx:e=>({padding:"12px",background:"#312f5c"}),children:[(0,t.jsx)(a.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.v,{blockTimestamp:e.blockTimestamp,sender:e.sender,spaceUserInfo:l})})}),(0,t.jsx)(a.Z,{sx:{mt:3,color:"#d7e2e3"},component:"div",onClick:()=>{L(e,s),c.push("/asset-overview/?assetid=".concat(e.assetId))},children:(0,t.jsx)(t.Fragment,{children:(null===(n=z[s])||void 0===n?void 0:n.data)&&(0,t.jsx)(F.Z,{content:null===(i=z[s])||void 0===i?void 0:i.data})})}),(0,t.jsxs)(a.Z,{sx:{mt:3,pt:1,borderTop:"1px solid #434b59",display:"flex",justifyContent:"space-between"},children:[(0,t.jsx)(a.Z,{children:(0,t.jsx)(D.j,{assetId:e.assetId,spaceAddress:null===(d=l.spaceAddress)||void 0===d?void 0:d.toString(),handleClick:()=>{L(e,s),c.push("/asset-overview/?assetid=".concat(e.assetId,"&reply=1"))}})}),(0,t.jsxs)(a.Z,{sx:{display:"flex",gap:4},children:[(0,t.jsx)(B.H,{assetId:e.assetId,totalSupply:null!==(r=null==U?void 0:U.assets.find(s=>s.assetId==Number(e.assetId)).totalSupply)&&void 0!==r?r:0,handleClick:()=>{L(e,s)}}),(0,t.jsx)(q.p,{assetId:e.assetId,handleClick:()=>{L(e,s)}})]})]})]},s)})})]})};function M(){var e,s,n;(0,r.Z)("(max-width:980px)");let i=(0,d.useRouter)(),o=null===(e=i.query.address)||void 0===e?void 0:e.toString(),u=(0,c.SV)([null!=o?o:""]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{children:(0,t.jsx)(a.Z,{sx:{display:"flex",flex:1,flexDirection:"column",gap:4},children:u&&u[0].data?(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(S,{spaceUserInfo:null===(s=u[0])||void 0===s?void 0:s.data}),(0,t.jsx)(U,{spaceUserInfo:null===(n=u[0])||void 0===n?void 0:n.data})]}):(0,t.jsx)(t.Fragment,{children:"No data"})})})})}},2027:function(e,s,n){"use strict";n.d(s,{v:function(){return d}});var t=n(5893),r=n(7726),a=n(5616),i=n(5861),l=n(9661);let d=e=>{let{sender:s,blockTimestamp:n,spaceUserInfo:d,imgWidth:c,showSpaceId:o,handleClick:u}=e,{avatar:x,spacename:v}=(0,r.Dm)(s,d);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",gap:1,cursor:"pointer"},component:"div",onClick:()=>{u&&u()},children:[o&&(0,t.jsxs)(i.Z,{variant:"main16",sx:{mr:2},children:["#",null==d?void 0:d.spaceId]}),(0,t.jsx)(l.Z,{sx:{width:c?"".concat(c,"px"):"36px",height:c?"".concat(c,"px"):"36px"},alt:v,src:x}),(0,t.jsxs)(a.Z,{sx:{ml:2},children:[(0,t.jsx)(i.Z,{variant:"main16",children:v}),(0,t.jsx)(i.Z,{variant:"secondary14",color:"text.secondary",children:(0,r.Xe)(s,4,4)})]})]}),n&&(0,t.jsx)(a.Z,{children:(0,t.jsx)(i.Z,{variant:"secondary14",color:"text.secondary",children:(0,r.i$)(n)})})]})}},8117:function(e,s,n){"use strict";n.d(s,{H:function(){return x}});var t=n(5893),r=n(5616),a=n(9417),i=n(5861),l=n(9479),d=n(261),c=n(8144),o=n(1065),u=n(4032);let x=e=>{let{totalSupply:s,assetId:n,handleClick:x,showUnit:v}=e,{setType:p}=(0,u.a)(),{account:h,getBuyPrice:f,ethPrice:m,setWalletModalOpen:y}=(0,o.Yh)(),{data:j,error:I}=(0,c.a)({queryKey:["getBuyPrice",n,s],queryFn:()=>f(n,1,s),refetchInterval:6e4});async function g(){h?(p(u.w.AssetBuy),x&&x()):y(!0)}return(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsx)(a.Z,{variant:"text",startIcon:(0,t.jsx)(d.Z,{}),sx:{padding:"2px 0px",minWidth:"20px"},onClick:()=>{g()},children:(0,t.jsx)(l.B,{value:!I&&j?j*(null!=m?m:0):0,symbol:"USD",variant:"secondary16",symbolsVariant:"secondary16",visibleDecimals:3})}),v&&(0,t.jsx)(i.Z,{color:"text.secondary",sx:{ml:4},children:(0,t.jsx)(l.B,{value:null!=j?j:0,variant:"secondary14",compact:!0,visibleDecimals:3,symbol:"CFX/Share"})})]})}},1266:function(e,s,n){"use strict";n.d(s,{p:function(){return h}});var t=n(2729),r=n(5893),a=n(9417),i=n(9479),l=n(8878),d=n(8806),c=n(6312),o=n(1163),u=n(1065),x=n(7294);function v(){let e=(0,t._)(["\n  query GetHolders($id: Int!) {\n     assets(where: {id: $id}) { \n       totalHolders\n    }\n  }\n"]);return v=function(){return e},e}let p=(0,d.Ps)(v()),h=e=>{let{assetId:s,handleClick:n}=e,t=(0,o.useRouter)(),{currentTimestamp:d}=(0,u.Yh)(),{loading:v,error:h,data:f,refetch:m}=(0,c.a)(p,{variables:{id:parseInt(s.toString())}});(0,x.useEffect)(()=>{m()},[d,m]);let y=v||h?0:f.assets[0].totalHolders;return(0,r.jsx)(a.Z,{variant:"text",startIcon:(0,r.jsx)(l.Z,{}),sx:{padding:"2px 6px",minWidth:"20px"},onClick:()=>{n&&n(),t.push("/asset-overview/?assetid=".concat(s))},children:(0,r.jsx)(i.B,{value:y,variant:"secondary16",symbolsVariant:"secondary16",visibleDecimals:0})})}},9573:function(e,s,n){"use strict";n.d(s,{j:function(){return o}});var t=n(5893),r=n(9417),a=n(9479),i=n(1065),l=n(2138),d=n(2964),c=n(2292);let o=e=>{let{assetId:s,spaceAddress:n,handleClick:o}=e,{account:u,setWalletModalOpen:x}=(0,i.Yh)(),{data:v,error:p}=(0,l.So)(null!=n?n:c._,s),h=!p&&v?v.length:0;async function f(){u?o&&o():x(!0)}return(0,t.jsx)(r.Z,{variant:"text",startIcon:(0,t.jsx)(d.Z,{}),sx:{padding:"2px 6px",minWidth:"20px"},onClick:()=>{f()},children:(0,t.jsx)(a.B,{value:h,variant:"secondary16",symbolsVariant:"secondary16",visibleDecimals:0})})}},3124:function(e,s,n){"use strict";var t=n(5893);n(7294);var r=n(5616);s.Z=e=>{let{content:s}=e,n=function(e){if(!e)return"";let s=e.replace(/<[^>]*>?/gm,""),n=s.slice(0,140);return n.length<s.length?n+"...":n}(s),a=function(e){if(!e)return null;let s=/<img[^>]+src=['"]([^'"]+)['"][^>]*>/g.exec(e);if(s){let e=s[1];return(0,t.jsx)("img",{src:e,alt:"Arweave Image",width:"100%",style:{maxHeight:"80px",borderRadius:"4px"}})}return null}(s);return(0,t.jsx)(t.Fragment,{children:s&&(0,t.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",gap:3,alignItems:"center"},children:[(0,t.jsx)(r.Z,{sx:{flex:"1 1 auto"},children:(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:n},style:{lineHeight:"24px",letterSpacing:"0.05em",cursor:"pointer"}})}),a&&(0,t.jsx)(r.Z,{sx:{width:"120px",flex:"0 0 auto"},children:a})]})})}},2138:function(e,s,n){"use strict";n.d(s,{Qn:function(){return d},SV:function(){return i},So:function(){return l}});var t=n(1065),r=n(9673),a=n(8144);let i=e=>{let s=(0,t.Yh)(e=>e.getSpaceUserInfo),n=(0,r.h)({queries:e.map(e=>({queryKey:["getuserlist",e],queryFn:()=>s(e),refetchInterval:6e4}))});return n},l=(e,s)=>{let n=(0,t.Yh)(e=>e.getAssetsByParent),r=(0,a.a)({queryKey:["getAssetsByParent",e,s],queryFn:()=>n(e,s),refetchInterval:6e4});return r},d=e=>{let s=(0,t.Yh)(e=>e.getSpaceAssetId),n=(0,a.a)({queryKey:["spaceAssetId",e],queryFn:()=>s(e)});return n}},2292:function(e,s,n){"use strict";n.d(s,{_:function(){return t}});let t="0x0000000000000000000000000000000000000000"}},function(e){e.O(0,[498,986,395,766,774,888,179],function(){return e(e.s=3370)}),_N_E=e.O()}]);