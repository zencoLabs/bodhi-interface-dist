(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{53707:function(e,n,t){"use strict";var s=t(64836);n.Z=void 0;var r=s(t(64938)),a=t(85893);n.Z=(0,r.default)((0,a.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"}),"Cached")},51886:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/asset-overview",function(){return t(85873)}])},85873:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ev}});var s=t(85893),r=t(5616),a=t(90629),i=t(67294),l=t(67952),o=t(11163),d=t(82729),c=t(93946),x=t(15861),u=t(60355),h=t(85119),p=t(67720),m=t(69417),f=t(98456),j=t(64032),v=t(53345),g=t(10084),y=t(87066),b=t(74187),Z=t(31065),I=t(77294),w=t(2593),F=t(86012),C=t(19215),S=t(97975),T=t(92900),D=t(53219),k=t(35294),B=t(18972),H=t(59334),M=t(79369),L=t(46907);let _=e=>{let{replyInfo:n}=e,{account:t,signer:a}=(0,Z.Yh)(),{refetchBodhiData:l}=(0,C.n)(),[o,d]=(0,i.useState)(null),x=!!o,u=()=>{d(null)};async function h(){try{let e=n.spaceFactory.spaceAddress,s=new I.CH(e,F,a),r={from:t,to:e,value:w.O$.from(0),data:s.interface.encodeFunctionData("removeFromBodhi",[n.parentId,n.assetId])},i=await s.provider.estimateGas(r);console.log("gasLimit:",i.toNumber());let o=null==a?void 0:a.sendTransaction({...r,gasLimit:i});null==o||o.then(e=>{e.wait().then(e=>{1===e.status?(0,g.L)(!0,"Remove Success."):(0,g.L)(!1,"Confirm failure."),l&&l()}).catch(e=>{(0,g.L)(!1,e.reason)})}).catch(e=>{(0,g.L)(!1,e.reason)})}catch(e){-32603===e.code&&-32015==e.data.code?(0,g.L)(!1,"Insufficient funds for gas."):(0,g.L)(!1,"Confirm failure.")}}return(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:18,height:18,borderRadius:"50%",p:0,minWidth:0},onClick:e=>{d(e.currentTarget)},children:(0,s.jsx)(D.Z,{sx:{fontSize:18,color:x?"info.main":"text.muted",borderRadius:"50%","&:hover":"info.main"},children:(0,s.jsx)(M.Z,{fontSize:"medium",sx:{color:"#d7e2e3"}})})}),(0,s.jsx)(k.Z,{id:"withdraw-item-extra-menu",anchorEl:o,open:x,onClose:u,keepMounted:!0,PaperProps:{sx:{minWidth:"120px",py:0}},sx:{"& .MuiMenu-paper":{backgroundColor:"#2e2c56",boxShadow:"3px 3px 2px #1e1d35"}},children:t==n.sender?(0,s.jsxs)(B.Z,{sx:{gap:2},onClick:()=>{u(),h()},children:[(0,s.jsx)(L.Z,{color:"error",fontSize:"small"}),(0,s.jsx)(H.Z,{sx:{color:"#ff0000"},children:"Delete"})]}):(0,s.jsx)(s.Fragment,{children:"..."})})]})},R=e=>{var n,t,a;let{replyInfo:i}=e,l=(0,o.useRouter)(),d=i?[i.arTxId]:[],c=(0,S.lv)(d);return(0,s.jsx)(s.Fragment,{children:c.length>0?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.Z,{sx:{mb:2,borderTop:"1px solid #434b59",padding:"10px 0"},children:[(0,s.jsx)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"},children:(0,s.jsx)(T.M,{blockTimestamp:i.blockTimestamp,sender:i.sender,spaceUserInfo:null==i?void 0:i.spaceFactory,imgWidth:28,handleClick:()=>{l.push("/space-overview/?address=".concat(i.sender))},MoreBox:(0,s.jsx)(s.Fragment,{children:i.isDelete?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(_,{replyInfo:i})})})}),(0,s.jsx)(r.Z,{sx:{mt:2,pl:8,color:"#d7e2e3"},component:"div",children:i.isDelete?(0,s.jsx)(x.Z,{color:"text.secondary",sx:{background:"#292848",borderRadius:"4px",padding:"2px 6px"},children:(0,s.jsx)("em",{children:"Removed"})}):(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:null!==(a=null===(t=c[0])||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.replace(/\n/g,"<br />"))&&void 0!==a?a:""}})})]})}):(0,s.jsx)(s.Fragment,{})})};var E=t(59242),P=t(46154);let A=e=>{var n,t;let{assetTempAssetModal:a}=e,{account:l,signer:o,setWalletModalOpen:d,spaceUserInfo:c,currentTimestamp:u}=(0,Z.Yh)(),{setType:h}=(0,j.a)(),{refetchBodhiData:S}=(0,C.n)(),[T,D]=(0,i.useState)(""),[k,B]=(0,i.useState)(!1),[H,M]=(0,i.useState)(""),{loading:L,error:_,data:A,refetch:N}=(0,E.DI)([a.assetId]),{loading:q,error:z,data:X,refetch:Y}=(0,E.k0)(a.assetId);async function U(){if(!l){d(!0);return}let e=(0,P.fO)(c);if(!e){h(j.w.UserInfo);return}if(!T||""===T){(0,g.L)(!1,"Please enter a reply.");return}if(B(!0),""!==H&&H)setTimeout(async()=>{await W(H)},500);else try{let e=await y.Z.post(b.zA.api_text,{text:T});200===e.status?(M(e.data.transactionId),await W(e.data.transactionId)):((0,g.L)(!1,"Upload failed. Please try again."),B(!1))}catch(e){console.error("Error uploading text:",e),B(!1)}}async function W(e){var n,t;if(!e||""==e)return;let s=null===(t=a.spaceUserInfo)||void 0===t?void 0:null===(n=t.spaceAddress)||void 0===n?void 0:n.toString(),r=new I.CH(s,F,o),i={from:l,to:s,value:w.O$.from(0),data:r.interface.encodeFunctionData("create",[e,a.assetId])},d=await r.provider.estimateGas(i);console.log("gasLimit:",d.toNumber());let c=null==o?void 0:o.sendTransaction({...i,gasLimit:d});null==c||c.then(e=>{e.wait().then(e=>{1===e.status?((0,g.L)(!0,"Thanks for the reply."),S&&S(),D(""),M("")):(0,g.L)(!1,"Signature failure."),B(!1)}).catch(()=>{B(!1)})}).catch(()=>{B(!1)})}return(0,i.useEffect)(()=>{N(),Y()},[u,N,Y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{sx:{mt:2,mb:2}}),(0,s.jsxs)(r.Z,{sx:{mt:2,mb:2},children:[(0,s.jsx)(v.H,{multiline:!0,style:{width:"100%"},value:T,onChange:e=>{D(e.target.value),""!=H&&H.length>0&&M("")},rows:3}),(0,s.jsx)(r.Z,{sx:{mt:3,display:"flex",justifyContent:"right",gap:4},children:(0,s.jsx)(m.Z,{variant:T?"surface":"contained",onClick:()=>{U()},sx:{minWidth:"90px"},disabled:k||!T,startIcon:k&&(0,s.jsx)(f.Z,{size:14}),children:(0,s.jsx)(x.Z,{variant:"buttonM",children:(0,s.jsx)(s.Fragment,{children:k?"Signing":"Reply"})})})})]}),(0,s.jsxs)(x.Z,{sx:{mb:4},children:["Replies (",L?0:null!==(t=null==A?void 0:null===(n=A.spaceCounts.find(e=>e.parentId==a.assetId))||void 0===n?void 0:n.count)&&void 0!==t?t:0,")"]}),(0,s.jsx)(r.Z,{children:q?(0,s.jsx)(s.Fragment,{children:"loading..."}):(0,s.jsx)(s.Fragment,{children:null==X?void 0:X.spaces.map((e,n)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(R,{replyInfo:e},n)}))})})]})};var N=t(47781),q=t(2623),z=t(20916),X=t(40044),Y=t(68806),U=t(76312),W=t(42292),$=t(47726),G=t(87952),O=t(11288),K=t.n(O);let V=e=>{let{trade:n}=e,t=0==n.tradeType?"MINTED":1==n.tradeType?"BOUGHT":2==n.tradeType?"SOLD":"",a=W._;if(n.user.address==b.TT[b.KY].tradeHelper){let e=(0,S.c1)(n.transactionHash);e&&(a=e.from.toLowerCase())}else a=n.user.address;return(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center"},children:[(0,s.jsx)(G.Z,{sx:{width:"24px",height:"24px"},alt:"",src:K()(a)}),(0,s.jsxs)(x.Z,{children:[(0,$.Xe)(a,5,0)," ","MINTED"===t?"(creator)":""]}),(0,s.jsx)(x.Z,{variant:"main16",sx:{backgroundColor:2==n.tradeType?"#6e1313":"#335456",borderRadius:"2px",padding:"0px 3px"},children:t}),(0,s.jsxs)(x.Z,{children:[n.tokenAmount," share ","MINTED"===t?"":"for ".concat(n.ethAmount," CFX")]})]})};var Q=t(36444);let J=e=>{let{holders:n}=e;return(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(Q.X,{sx:{padding:"4px 20px"},children:[(0,s.jsx)(x.Z,{variant:"main16",children:"HOLDER"}),(0,s.jsx)(x.Z,{variant:"main16",children:"SHARE"})]}),n.map((e,n)=>(0,s.jsxs)(Q.X,{sx:{padding:"4px 20px"},children:[(0,s.jsx)(x.Z,{variant:"secondary16",children:(0,$.Xe)(e.user.address,4,4)}),(0,s.jsx)(x.Z,{variant:"secondary16",children:e.amount})]},n))]})};var ee=t(49479),en=t(26384);let et=e=>{let{...n}=e;return(0,s.jsx)(en.G,{...n,children:(0,s.jsx)(s.Fragment,{children:"Total amount invested in this asset"})})},es=e=>{let{asset:n}=e,{ethPrice:t}=(0,Z.Yh)();return(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:"4px",padding:"4px 20px"},children:[(0,s.jsx)(r.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,s.jsx)(x.Z,{variant:"main16",children:"Share Supply"})}),(0,s.jsx)(ee.B,{value:n.totalSupply,variant:"main16",symbol:"Shares"})]}),(0,s.jsxs)(r.Z,{sx:{mt:4,display:"flex",flexDirection:"column",gap:"4px",padding:"4px 20px"},children:[(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,s.jsx)(x.Z,{variant:"main16",children:"Total Fees in the Pool"}),(0,s.jsx)(et,{})]}),(0,s.jsx)(ee.B,{value:n.totalFees*(null!=t?t:0),variant:"main16",symbol:"USD"}),(0,s.jsx)(ee.B,{value:n.totalFees,variant:"secondary14",color:"text.secondary",compact:!0,visibleDecimals:4,symbol:"CFX"})]}),(0,s.jsxs)(r.Z,{sx:{mt:4,display:"flex",flexDirection:"column",gap:"4px",padding:"4px 20px"},children:[(0,s.jsx)(r.Z,{sx:{display:"flex",flexDirection:"row"},children:(0,s.jsx)(x.Z,{variant:"main16",children:"Total Trading Volume"})}),(0,s.jsx)(ee.B,{value:n.totalTradValue*(null!=t?t:0),variant:"main16",symbol:"USD"}),(0,s.jsx)(ee.B,{value:n.totalTradValue,variant:"secondary14",color:"text.secondary",compact:!0,visibleDecimals:4,symbol:"CFX"})]})]})};function er(){let e=(0,d._)(["\n  query GetTrades($id: Int!) {\n      trades(orderDirection: desc, orderBy: blockNumber, where: {assetId: $id}) {\n        assetId\n        blockTimestamp \n        ethAmount \n        price\n        tokenAmount\n        tradeType\n        transactionHash\n        user {\n        address\n        }\n    }\n  }\n"]);return er=function(){return e},e}function ea(){let e=(0,d._)(['\n  query GetHolders($id: Int!) {\n     assets(where: {assetId: $id}) { \n        holders(orderBy: amount, orderDirection: desc, where: {amount_gt: "0"}) {\n            amount\n            user {\n                address\n            }\n        }\n    }\n  }\n']);return ea=function(){return e},e}function ei(){let e=(0,d._)(["\n  query GetOverview($id: Int!) {\n     assets(where: {assetId: $id}) {\n      assetId\n      isDelete\n      totalFees\n      totalHolders\n      totalSupply\n      totalTradValue\n      totalTradVolume\n      totalTrades\n      creator {\n        address\n      }\n    }\n  }\n"]);return ei=function(){return e},e}let el=(0,Y.Ps)(er()),eo=(0,Y.Ps)(ea()),ed=(0,Y.Ps)(ei()),ec=e=>{let{assetId:n}=e,{currentTimestamp:t}=(0,Z.Yh)(),[a,l]=(0,i.useState)(0),{loading:o,error:d,data:c,refetch:x}=(0,U.a)(el,{variables:{id:parseInt(n.toString())}}),{loading:u,error:h,data:p,refetch:m}=(0,U.a)(eo,{variables:{id:parseInt(n.toString())}}),{loading:f,error:j,data:v,refetch:g}=(0,U.a)(ed,{variables:{id:parseInt(n.toString())}});return(0,i.useEffect)(()=>{x(),m(),g()},[t,g]),(0,s.jsxs)(r.Z,{sx:{mt:3,mb:3},children:[(0,s.jsx)(r.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,s.jsxs)(z.Z,{value:a,onChange:(e,n)=>{l(n)},sx:{minHeight:"36px","& .MuiTabs-indicator":{backgroundColor:"#75cedb"},"& .Mui-selected":{color:"#75cedb"}},children:[(0,s.jsx)(X.Z,{label:"Recent Trades",className:"bodhi-tabs",sx:{minHeight:"36px",fontSize:"0.975rem","&.Mui-selected":{color:"#75cedb"}}}),(0,s.jsx)(X.Z,{label:"Holders",className:"bodhi-tabs",sx:{minHeight:"36px",fontSize:"0.975rem","&.Mui-selected":{color:"#75cedb"}}}),(0,s.jsx)(X.Z,{label:"Overview",className:"bodhi-tabs",sx:{minHeight:"36px",fontSize:"0.975rem","&.Mui-selected":{color:"#75cedb"}}})]})}),(0,s.jsxs)(r.Z,{sx:{mt:3},children:[0==a&&(0,s.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:4},children:o||d||!c?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:c.trades.map((e,n)=>(0,s.jsx)(V,{trade:e},n))})}),1==a&&(0,s.jsx)(r.Z,{children:u||h||!p?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(J,{holders:p.assets[0].holders},0)})}),2==a&&(0,s.jsx)(r.Z,{children:f||j||!v?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(es,{asset:v.assets[0]})})})]})]})};var ex=t(17567);let eu=e=>{var n,t,i,l;let{assetTempAssetModal:d,assetData:c}=e,p=(0,o.useRouter)(),{setTempAssetModal:m}=(0,N.R)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(q.W,{assetId:null==d?void 0:d.assetId,totalSupply:null!==(n=null==c?void 0:c.totalSupply)&&void 0!==n?n:0,goback:"/"}),(null==c?void 0:c.isDelete)?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{sx:e=>({padding:"12px",background:"#312f5c",mt:3}),children:(0,s.jsx)(x.Z,{variant:"secondary16",color:"text.secondary",children:"Hmm...this page doesn’t exist."})})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.Z,{sx:e=>({padding:"12px",background:"#312f5c",mt:3}),children:[(0,s.jsx)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,s.jsx)(s.Fragment,{children:d.spaceUserInfo&&(0,s.jsx)(T.M,{blockTimestamp:d.blockTimestamp,sender:d.sender,spaceUserInfo:d.spaceUserInfo,handleClick:()=>{p.push("/space-overview/?address=".concat(d.sender))},MoreBox:(0,s.jsx)(s.Fragment,{children:c&&(0,s.jsx)(ex.e,{assetId:d.assetId,assetData:c})})})})}),(0,s.jsx)(r.Z,{sx:{mt:3,color:"#d7e2e3"},component:"div",children:(0,s.jsx)("div",{className:"ql-editor bodhi-editor-detail",dangerouslySetInnerHTML:{__html:null!==(t=null==d?void 0:d.contentData)&&void 0!==t?t:""}})}),(0,s.jsx)(r.Z,{sx:{mt:3,pt:1,borderTop:"1px solid #434b59",display:"flex",justifyContent:"space-between"},children:(0,s.jsxs)(r.Z,{sx:{display:"flex",gap:4,alignItems:"start",justifyContent:"space-between",flex:1},children:[(0,s.jsx)(u.H,{assetId:null==d?void 0:d.assetId,totalSupply:null!==(i=null==c?void 0:c.totalSupply)&&void 0!==i?i:0,showUnit:!0,handleClick:()=>{m(d)}}),(0,s.jsx)(h.p,{assetId:null==d?void 0:d.assetId,holdersCount:null!==(l=null==c?void 0:c.totalHolders)&&void 0!==l?l:0})]})}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(A,{assetTempAssetModal:d})})]}),(0,s.jsx)(ec,{assetId:null==d?void 0:d.assetId})]})]})};var eh=t(40885),ep=t(53707);function em(){let e=(0,d._)(["\n  query GetCreates($assetId: Int!) {\n   creates(where: {assetId: $assetId}) {\n     id\n     assetId\n     arTxId\n     sender\n     blockTimestamp\n     transactionHash\n    }\n  }\n"]);return em=function(){return e},e}let ef=(0,Y.Ps)(em()),ej=e=>{var n,t,l,o;let{assetId:d}=e,[u,h]=(0,i.useState)(0),{currentTimestamp:p}=(0,Z.Yh)(),{loading:m,error:f,data:j,refetch:v}=(0,U.a)(ef,{variables:{assetId:Number(d)},client:eh.c,fetchPolicy:"cache-first"}),g=(null==j?void 0:null===(n=j.creates)||void 0===n?void 0:n.map(e=>e.sender))||[],{loading:y,error:b,data:I,refetch:w}=(0,E.iG)([Number(d)]),{loading:F,error:C,data:T,refetch:D}=(0,E.aB)(g),k=(null==j?void 0:null===(t=j.creates)||void 0===t?void 0:t.map(e=>e.arTxId))||[],B=(0,S.lv)(k);(0,i.useEffect)(()=>{v(),w(),D()},[p,v]),(0,i.useEffect)(()=>{j||setTimeout(()=>{v(),w()},1e3)},[j,u]);let H=(0,i.useMemo)(()=>I&&I.assets.length>0?I.assets[0]:void 0,[I]);return(0,s.jsx)(s.Fragment,{children:d&&B.length>0&&(null==j?void 0:j.creates)&&I?(0,s.jsx)(eu,{assetTempAssetModal:{id:null==j?void 0:j.creates[0].id,assetId:Number(d),arTxId:null==j?void 0:j.creates[0].arTxId,sender:null==j?void 0:j.creates[0].sender,blockTimestamp:null==j?void 0:j.creates[0].blockTimestamp,transactionHash:null==j?void 0:j.creates[0].transactionHash,contentData:null===(l=B[0])||void 0===l?void 0:l.data,spaceUserInfo:null==T?void 0:T.spaceFactories.find(e=>e.user==g[0]),assetSupply:null!==(o=null==H?void 0:H.totalSupply)&&void 0!==o?o:0},assetData:H}):(0,s.jsx)(a.Z,{sx:e=>({padding:"12px",background:"#312f5c"}),children:m?(0,s.jsx)(s.Fragment,{children:"loading..."}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(q.W,{assetId:parseInt(d),totalSupply:0}),(0,s.jsxs)(r.Z,{sx:{mt:5,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"16px"},children:[(0,s.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",p:0,minWidth:0},onClick:()=>{h(Math.floor(101*Math.random()))},children:(0,s.jsx)(ep.Z,{})}),(0,s.jsx)(x.Z,{sx:{},children:"No data"})]})]})})})};function ev(){let e=(0,o.useRouter)(),n=e.query.assetid;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{children:(0,s.jsx)(r.Z,{sx:{display:"flex",flex:1,flexDirection:"column",gap:4},children:(0,s.jsx)(s.Fragment,{children:n?(0,s.jsx)(ej,{assetId:null==n?void 0:n.toString()}):(0,s.jsx)(a.Z,{sx:e=>({padding:"12px",background:"#312f5c"}),children:"No data"})})})})})}},53345:function(e,n,t){"use strict";t.d(n,{H:function(){return d}});var s=t(82729),r=t(85893),a=t(67294),i=t(59608),l=t(45098);function o(){let e=(0,s._)(["\n  display: flex;\n  max-width: 100%;\n"]);return o=function(){return e},e}let d=a.forwardRef(function(e,n){return(0,r.jsx)(i.I,{slots:{root:x,input:"input",textarea:u},...e,ref:n})}),c={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},x=(0,l.Z)("div")(o()),u=(0,l.Z)("textarea",{shouldForwardProp:e=>!["ownerState","minRows","maxRows"].includes(e.toString())})(e=>{let{theme:n}=e;return"\n  width: 100%;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border-radius: 4px 4px 0 4px;\n  color: ".concat((n.palette.mode,c[900]),";\n  background: ").concat((n.palette.mode,"#f2f2f2"),";\n  border: 1px solid ").concat((n.palette.mode,c[200]),";\n \n\n  &:hover {\n    border-color: ").concat(c[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(c[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")})},92900:function(e,n,t){"use strict";t.d(n,{M:function(){return o}});var s=t(85893),r=t(47726),a=t(5616),i=t(15861),l=t(87952);t(67294);let o=e=>{let{sender:n,blockTimestamp:t,spaceUserInfo:o,imgWidth:d,showSpaceId:c,handleClick:x,MoreBox:u}=e,{avatar:h,spacename:p}=(0,r.Dm)(n,o);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",gap:1,cursor:"pointer"},component:"div",onClick:()=>{x&&x()},children:[c&&(0,s.jsxs)(i.Z,{variant:"main16",sx:{mr:2},children:["#",null==o?void 0:o.spaceId]}),(0,s.jsx)(l.Z,{sx:{width:d?"".concat(d,"px"):"36px",height:d?"".concat(d,"px"):"36px"},alt:p,src:h}),(0,s.jsxs)(a.Z,{sx:{ml:2},children:[(0,s.jsx)(i.Z,{variant:"main16",children:p}),(0,s.jsx)(i.Z,{variant:"secondary14",color:"text.secondary",children:(0,r.Xe)(n,4,4)})]})]}),(0,s.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",gap:3},children:[t&&(0,s.jsx)(a.Z,{children:(0,s.jsx)(i.Z,{variant:"secondary14",color:"text.secondary",children:(0,r.i$)(t)})}),u&&(0,s.jsx)(a.Z,{children:u})]})]})}},2623:function(e,n,t){"use strict";t.d(n,{W:function(){return h}});var s=t(85893),r=t(5616),a=t(15861),i=t(31065),l=t(21023),o=t(41664),d=t.n(o),c=t(11163),x=t(49479),u=t(97975);let h=e=>{let{assetId:n,totalSupply:t,child:o}=e,h=(0,c.useRouter)(),{account:p,ethPrice:m,currentTimestamp:f}=(0,i.Yh)(),{data:j,error:v}=(0,u.TX)(n,t,null!=f?f:0),{data:g,error:y}=(0,u.bo)(null!=p?p:"",n,null!=f?f:0);return(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#4b4984",border:"1px solid #4b4984",borderRadius:1,padding:"10px",gap:2},children:[(0,s.jsxs)(r.Z,{sx:{display:"flex",gap:2,alignItems:"center"},children:[(0,s.jsx)(d(),{href:"#",onClick:()=>{document.referrer?h.back():h.push("/")},children:(0,s.jsx)(l.Z,{sx:{color:"#F9FFFE"}})}),o&&(0,s.jsx)(s.Fragment,{children:o})]}),p?(0,s.jsx)(s.Fragment,{children:!v&&!y&&j&&g?(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"end",alignItems:"flex-end",mt:2,gap:2},children:[(0,s.jsx)(x.B,{value:j*g*(null!=m?m:0),variant:"main21",compact:!0,visibleDecimals:3,symbol:"USD"}),(0,s.jsxs)(a.Z,{children:["My Shares:"," ",g," "," ","(≈ ",(0,s.jsx)(x.B,{value:j*g,compact:!0,visibleDecimals:2,symbol:"CFX"}),")"]})]}):(0,s.jsx)(s.Fragment,{})}):(0,s.jsx)(s.Fragment,{})]})}},60355:function(e,n,t){"use strict";t.d(n,{H:function(){return u}});var s=t(85893),r=t(5616),a=t(69417),i=t(15861),l=t(49479),o=t(20261),d=t(31065),c=t(64032),x=t(97975);let u=e=>{let{totalSupply:n,assetId:t,handleClick:u,showUnit:h}=e,{setType:p}=(0,c.a)(),{account:m,ethPrice:f,setWalletModalOpen:j}=(0,d.Yh)(),{data:v,error:g}=(0,x.k)(t,n);async function y(){m?(p(c.w.AssetBuy),u&&u()):j(!0)}return(0,s.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[(0,s.jsx)(a.Z,{variant:"text",startIcon:(0,s.jsx)(o.Z,{}),sx:{padding:"2px 0px",minWidth:"20px"},onClick:()=>{y()},children:(0,s.jsx)(l.B,{value:!g&&v?v*(null!=f?f:0):0,symbol:"USD",variant:"secondary16",symbolsVariant:"secondary16",visibleDecimals:3})}),h&&(0,s.jsx)(i.Z,{color:"text.secondary",sx:{ml:4},component:"div",onClick:()=>{y()},children:(0,s.jsx)(l.B,{value:null!=v?v:0,variant:"secondary14",compact:!0,visibleDecimals:3,symbol:"CFX/Share"})})]})}},85119:function(e,n,t){"use strict";t.d(n,{p:function(){return o}});var s=t(85893),r=t(69417),a=t(49479),i=t(78878),l=t(11163);let o=e=>{let{assetId:n,holdersCount:t,handleClick:o}=e,d=(0,l.useRouter)();return(0,s.jsx)(r.Z,{variant:"text",startIcon:(0,s.jsx)(i.Z,{}),sx:{padding:"2px 6px",minWidth:"20px"},onClick:()=>{o&&o(),d.push("/asset-overview/?assetid=".concat(n))},children:(0,s.jsx)(a.B,{value:null!=t?t:0,variant:"secondary16",symbolsVariant:"secondary16",visibleDecimals:0})})}},17567:function(e,n,t){"use strict";t.d(n,{e:function(){return Z}});var s=t(85893),r=t(5616),a=t(93946),i=t(53219),l=t(35294),o=t(18972),d=t(15861),c=t(59334),x=t(79369),u=t(67294),h=t(46907),p=t(11359),m=t(10084),f=t(31065),j=t(74187),v=t(77294),g=t(2593),y=t(91783),b=t(19215);let Z=e=>{var n;let{assetId:t,assetData:Z}=e,{account:I,signer:w,spaceUserInfo:F}=(0,f.Yh)(),{refetchBodhiData:C}=(0,b.n)(),[S,T]=(0,u.useState)(null),D=!!S,k=()=>{T(null)};async function B(){try{let e=j.TT[j.KY].bodhi,n=new v.CH(e,y,w),s={from:I,to:e,value:g.O$.from(0),data:n.interface.encodeFunctionData("remove",[t])},r=await n.provider.estimateGas(s);console.log("gasLimit:",r.toNumber());let a=null==w?void 0:w.sendTransaction({...s,gasLimit:r});null==a||a.then(e=>{e.wait().then(e=>{1===e.status?(0,m.L)(!0,"Remove Success."):(0,m.L)(!1,"Confirm failure."),C&&C()}).catch(e=>{(0,m.L)(!1,e.reason)})}).catch(e=>{(0,m.L)(!1,e.reason)})}catch(e){-32603===e.code&&-32015==e.data.code?(0,m.L)(!1,"Insufficient funds for gas."):(0,m.L)(!1,"Confirm failure.")}}return(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:18,height:18,borderRadius:"50%",p:0,minWidth:0},onClick:e=>{T(e.currentTarget)},children:(0,s.jsx)(i.Z,{sx:{fontSize:18,color:D?"info.main":"text.muted",borderRadius:"50%","&:hover":"info.main"},children:(0,s.jsx)(x.Z,{fontSize:"medium",sx:{color:"#d7e2e3"}})})}),(0,s.jsxs)(l.Z,{id:"withdraw-item-extra-menu",anchorEl:S,open:D,onClose:k,keepMounted:!0,PaperProps:{sx:{minWidth:"120px",py:0}},sx:{"& .MuiMenu-paper":{backgroundColor:"#2e2c56",boxShadow:"3px 3px 2px #1e1d35"}},children:[(0,s.jsxs)(o.Z,{sx:{gap:2},onClick:()=>{k(),(0,m.L)(!1," Coming soon!")},children:[(0,s.jsx)(p.Z,{color:"info",fontSize:"small"}),(0,s.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,s.jsx)(c.Z,{sx:{},children:"Share on"}),(0,s.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",style:{height:"14px"},children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",fill:"#ffffff"})})})]})]}),I==(null===(n=Z.creator)||void 0===n?void 0:n.address)&&(null==F?void 0:F.descriptionAssetId)!==t.toString()?(0,s.jsxs)(o.Z,{sx:{gap:2},onClick:()=>{k(),B()},children:[(0,s.jsx)(h.Z,{color:"error",fontSize:"small"}),(0,s.jsx)(c.Z,{sx:{color:"#ff0000"},children:"Delete"})]}):(0,s.jsx)(s.Fragment,{})]})]})}},36444:function(e,n,t){"use strict";t.d(n,{X:function(){return i}});var s=t(85893),r=t(5616),a=t(15861);let i=e=>{let{caption:n,children:t,captionVariant:i="secondary16",captionColor:l,align:o="center",...d}=e;return(0,s.jsxs)(r.Z,{...d,sx:{display:"flex",alignItems:o,justifyContent:"space-between",...d.sx},children:[n&&(0,s.jsx)(a.Z,{component:"div",variant:i,color:l,sx:{mr:2},children:n}),t]})}},97975:function(e,n,t){"use strict";t.d(n,{TX:function(){return x},bo:function(){return u},c1:function(){return o},k:function(){return c},lv:function(){return l},r2:function(){return d}});var s=t(31065),r=t(46154),a=t(99673),i=t(88144);let l=e=>{let n=(0,s.Yh)(e=>e.fetchArweaveData),t=(0,a.h)({queries:e.map(e=>({queryKey:["arweaveData",e],queryFn:()=>n(e),refetchInterval:6e4}))});return t},o=e=>{let{data:n,error:t}=(0,i.a)({queryKey:["useGetTransactionInfo",e],queryFn:()=>(0,r.Q1)(e),refetchInterval:6e4});return t?void 0:n},d=e=>{let n=(0,s.Yh)(e=>e.getBuyPrice),t=(0,a.h)({queries:e.map(e=>({queryKey:["getBuyPrice",e.assetId,e.totalSupply],queryFn:()=>n(e.assetId,1,e.totalSupply),refetchInterval:6e4}))});return t},c=(e,n)=>{let t=(0,s.Yh)(e=>e.getBuyPrice),{data:r,error:a}=(0,i.a)({queryKey:["getBuyPrice",e,n],queryFn:()=>t(e,1,n),refetchInterval:6e4});return{data:r,error:a}},x=(e,n,t)=>{let r=(0,s.Yh)(e=>e.getSellPrice),{data:a,error:l}=(0,i.a)({queryKey:["getSellPrice",e,n,t],queryFn:()=>r(e,1,n),refetchInterval:6e4});return{data:a,error:l}},u=(e,n,t)=>{let r=(0,s.Yh)(e=>e.getBalanceByAccount_Asset),{data:a,error:l}=(0,i.a)({queryKey:["getBalanceByAccount_Asset",n,e,t],queryFn:()=>r(e,n),refetchInterval:6e4});return{data:a,error:l}}}},function(e){e.O(0,[240,266,87,930,342,144,66,114,709,973,952,774,888,179],function(){return e(e.s=51886)}),_N_E=e.O()}]);