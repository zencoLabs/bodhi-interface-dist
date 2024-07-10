"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{6384:function(e,n,t){t.d(n,{G:function(){return y}});var i=t(5893),s=t(2313),a=t(5616),r=t(5861),o=t(3946),l=t(3219),c=t(7294),d=t(948),p=t(6078),x=t(9940),u=t(3926);let m=(0,d.ZP)(p.Z)(e=>{let{theme:n}=e;return{".MuiTooltip-tooltip":{color:"text.primary",backgroundColor:"#312f5c",p:0,borderRadius:"6px",boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)",maxWidth:"280px"},".MuiTooltip-arrow":{color:"#312f5c","&:before":{boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)"}}}}),h=e=>{let{children:n,tooltipContent:t,placement:s="top",withoutHover:r,open:o,setOpen:l,offset:d}=e,[p,h]=(0,c.useState)(!1),y=void 0!==o?o:p,f=()=>void 0!==l?l(!y):h(!y),b=()=>void 0!==l?l(!1):h(!1);return(0,i.jsx)(x.Z,{sx:{},open:y,onClose:b,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:s,PopperComponent:m,componentsProps:{popper:{modifiers:[{name:"offset",options:{offset:null!=d?d:[]}}],onClick:e=>{e.stopPropagation()}}},title:(0,i.jsx)(u.d,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:b,children:(0,i.jsx)(a.Z,{sx:{background:"#312f5c",py:4,px:6,fontSize:"12px",lineHeight:"16px",a:{fontSize:"12px",lineHeight:"16px",fontWeight:500,"&:hover":{textDecoration:"underline"}},color:"text.primary"},children:t})}),arrow:!0,children:(0,i.jsx)(a.Z,{sx:{display:"inline-flex",cursor:"pointer",transition:"all 0.2s ease","&:hover":{opacity:r?1:y?1:.5}},onClick:e=>{e.preventDefault(),e.stopPropagation(),f()},children:n})})},y=e=>{let{text:n,icon:t,iconSize:d=14,iconColor:p,iconMargin:x,children:u,textColor:m,wrapperProps:{sx:y,...f}={},open:b=!1,setOpen:g,...j}=e,[v,Z]=(0,c.useState)(b);return(0,i.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",...y},...f,children:[n&&(0,i.jsx)(r.Z,{...j,color:m,children:n}),(0,i.jsx)(h,{tooltipContent:(0,i.jsx)(i.Fragment,{children:u}),open:v,setOpen:()=>{g&&g(!v),Z(!v)},children:(0,i.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:d,height:d,borderRadius:"50%",p:0,minWidth:0,ml:x||.5},onClick:()=>{},children:(0,i.jsx)(l.Z,{sx:{fontSize:d,color:p||(v?"info.main":"text.muted"),borderRadius:"50%","&:hover":{color:p||"info.main"}},children:t||(0,i.jsx)(s.Z,{})})})})]})}},9479:function(e,n,t){t.d(n,{B:function(){return c}});var i=t(5893),s=t(794);function a(e){return e instanceof s.O?e:new s.O(e)}s.O.clone({DECIMAL_PLACES:0,ROUNDING_MODE:s.O.ROUND_DOWN});var r=t(5861);let o=["","K","M","B","T","P","E","Z","Y"];function l(e){let{value:n,visibleDecimals:t=2}=e,s=a(n),r=s.toFixed(0).length,l=Math.min(Math.floor(r?(r-1)/3:0),o.length-1),c=o[l],d=a(s).shiftedBy(-1*(3*l)).toNumber();return(0,i.jsxs)(i.Fragment,{children:[new Intl.NumberFormat("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}).format(d),c]})}function c(e){let{value:n,symbol:t,visibleDecimals:s,compact:a,percent:o,symbolsVariant:c,symbolsColor:d,...p}=e,x=o?100*Number(n):Number(n),u=s;0===x?u=0:void 0===s&&(u=x>1||o||"USD"===t?2:6);let m=10**-u,h=0!==x&&Math.abs(x)<Math.abs(m),y=h?m:x,f=!1!==a&&(a||x>99999);return(0,i.jsxs)(r.Z,{className:"formatted-number-apt",...p,sx:{display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative",...p.sx},noWrap:!0,children:[h&&(0,i.jsx)(r.Z,{component:"span",sx:{mr:.5},variant:c||p.variant,color:d||"text.secondary",children:"<"}),(null==t?void 0:t.toLowerCase())==="usd"&&!o&&(0,i.jsx)(r.Z,{component:"span",sx:{mr:.5},variant:c||p.variant,color:d||"text.secondary",children:"$"}),!f&&y>0?new Intl.NumberFormat("en-US",{maximumFractionDigits:u,minimumFractionDigits:u}).format(y):(0,i.jsx)(l,{value:y,visibleDecimals:u}),o&&(0,i.jsx)(r.Z,{component:"span",sx:{ml:.5},variant:c||p.variant,color:d||"text.secondary",children:"%"}),(null==t?void 0:t.toLowerCase())!=="usd"&&void 0!==t&&(0,i.jsx)(r.Z,{component:"span",sx:{ml:.5},variant:c||p.variant,color:d||"text.secondary",children:t})]})}},6444:function(e,n,t){t.d(n,{X:function(){return r}});var i=t(5893),s=t(5616),a=t(5861);let r=e=>{let{caption:n,children:t,captionVariant:r="secondary16",captionColor:o,align:l="center",...c}=e;return(0,i.jsxs)(s.Z,{...c,sx:{display:"flex",alignItems:l,justifyContent:"space-between",...c.sx},children:[n&&(0,i.jsx)(a.Z,{component:"div",variant:r,color:o,sx:{mr:2},children:n}),t]})}},5786:function(e,n,t){t.r(n),t.d(n,{AssetBuyModal:function(){return F}});var i=t(5893),s=t(4032),a=t(8320),r=t(5861),o=t(5616),l=t(916),c=t(44),d=t(7294),p=t(9417),x=t(1298),u=t(7109),m=t(8456);let h=e=>{let{children:n}=e;return(0,i.jsxs)(o.Z,{sx:{pt:5},children:[(0,i.jsx)(r.Z,{sx:{mb:1},color:"text.secondary",children:(0,i.jsx)(i.Fragment,{children:"Transaction overview"})}),(0,i.jsx)(o.Z,{sx:e=>({p:3,border:"1px solid ".concat(e.palette.divider),borderRadius:"4px",".MuiBox-root:last-of-type":{mb:0}}),children:n})]})};var y=t(9479),f=t(6384);let b=e=>{let{...n}=e;return(0,i.jsx)(f.G,{...n,children:(0,i.jsxs)(i.Fragment,{children:["Share price will go up when more people buy. And you can sell it anytime.",(0,i.jsx)("br",{}),"price = 0.00006 * supply^2"]})})};var g=t(6444),j=t(7333);let v=d.forwardRef(function(e,n){let{onChange:t,...s}=e;return(0,i.jsx)(j.Z,{...s,getInputRef:n,onValueChange:n=>{n.value!==e.value&&t({target:{name:e.name,value:n.value||""}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1})});var Z=t(1065),C=t(4187),S=t(6076),w=t(5553),T=JSON.parse('[{"inputs":[{"internalType":"address","name":"_bodhi","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"}],"name":"SafeBuy","type":"event"},{"inputs":[],"name":"bodhi","outputs":[{"internalType":"contract IBodhi","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"safeBuy","outputs":[],"stateMutability":"payable","type":"function"}]'),D=t(84),I=t(9215);let k=e=>{let{assetId:n,totalSupply:t}=e,{close:a}=(0,s.a)(),{account:l,signer:c,getBuyPriceAfterFee:f,ethPrice:j}=(0,Z.Yh)(),[k,M]=(0,d.useState)(0),[B,L]=(0,d.useState)(0),[R,F]=(0,d.useState)(!1),{refetchBodhiData:N}=(0,I.n)();async function A(){let e=await f(n,k,t);L(null!=e?e:0),console.log({name:"_getBuyPriceAfterFee---------------------------",price:e,assetId:n})}async function O(){if(0!=B&&0!=k){F(!0);try{let e=C.TT[C.KY].tradeHelper,t=new S.CH(e,T,c),i=w.fi(B.toString()),s=w.vz(k.toString(),18),r={from:l,to:e,value:i,data:t.interface.encodeFunctionData("safeBuy",[n,s])},o=await t.provider.estimateGas(r);console.log("gasLimit:",o.toNumber());let d=null==c?void 0:c.sendTransaction({...r,gasLimit:o});null==d||d.then(e=>{e.wait().then(e=>{1===e.status?((0,D.L)(!0,"Confirm Success."),N&&N()):(0,D.L)(!1,"Confirm failure."),F(!1),a()}).catch(e=>{F(!1),(0,D.L)(!1,e.reason)})}).catch(e=>{F(!1),(0,D.L)(!1,e.reason)})}catch(e){F(!1),-32603===e.code&&-32015==e.data.code?(0,D.L)(!1,"Insufficient funds for gas."):(0,D.L)(!1,"Confirm failure.")}}}return(0,d.useEffect)(()=>{k&&0!==k?A():L(0)},[k]),(0,i.jsxs)(o.Z,{sx:{mt:8,display:"flex",flexDirection:"column",gap:4},children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{variant:"secondary16",color:"text.secondary",children:"Amount"}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",gap:1},children:[(0,i.jsx)(p.Z,{onClick:()=>{M(10)},sx:{minWidth:"20px"},children:"10"}),(0,i.jsx)(p.Z,{onClick:()=>{M(50)},sx:{minWidth:"20px"},children:"50"}),(0,i.jsx)(p.Z,{onClick:()=>{M(100)},sx:{minWidth:"20px"},children:"100"}),(0,i.jsx)(p.Z,{onClick:()=>{M(500)},sx:{minWidth:"20px"},children:"500"})]})]}),(0,i.jsx)(o.Z,{sx:{display:"flex",flexDirection:"row",gap:3},children:(0,i.jsx)(x.ZP,{sx:{flex:1,border:"1px solid #3c4454",borderRadius:1,padding:"4px 10px",backgroundColor:"#3f3d73"},placeholder:"0.00",value:k,autoFocus:!0,onChange:e=>{M(Number(e.target.value))},inputProps:{"aria-label":"amount input",style:{fontSize:"18px",lineHeight:"24,01px",height:"24px"}},endAdornment:(0,i.jsx)(u.Z,{position:"end",children:(0,i.jsx)(r.Z,{children:"share"})}),inputComponent:v})})]}),(0,i.jsx)(h,{children:(0,i.jsx)(g.X,{caption:(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{color:"text.secondary",children:"Shares Value"}),(0,i.jsx)(b,{})]}),captionVariant:"description",mb:2,children:(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsxs)(r.Z,{children:[" ",(0,i.jsx)(y.B,{value:B,variant:"secondary14",compact:!0,visibleDecimals:4,symbol:"CFX"})]}),(0,i.jsxs)(r.Z,{children:["(",(0,i.jsx)(y.B,{value:B*(null!=j?j:0),variant:"secondary14",symbol:"USD"}),")"]})]})})}),(0,i.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",mt:6},children:(0,i.jsxs)(p.Z,{variant:B>0?"surface":"contained",disabled:R,onClick:O,size:"large",sx:{borderRadius:2,minHeight:"44px"},"data-cy":"actionButton",children:[R&&(0,i.jsx)(m.Z,{color:"inherit",size:"16px",sx:{mr:2}}),R?"Signing":"Confirm Buy"]})})]})};var M=t(2593),B=t(1783);let L=e=>{let{assetId:n,totalSupply:t}=e,{refetchBodhiData:a}=(0,I.n)(),{close:l}=(0,s.a)(),{account:c,signer:f,getSellPriceAfterFee:j,getBalanceByAccount_Asset:T,ethPrice:k}=(0,Z.Yh)(),[L,R]=(0,d.useState)(0),[F,N]=(0,d.useState)(0),[A,O]=(0,d.useState)(0),[P,W]=(0,d.useState)(!1);async function z(){let e=await j(n,L,t);O(null!=e?e:0)}async function E(){if(0!=A&&0!=L){if(0==F){(0,D.L)(!1," Insufficient balance.");return}W(!0);try{let e=C.TT[C.KY].bodhi,t=new S.CH(e,B,f),i=w.vz(L.toString(),18),s={from:c,to:e,value:M.O$.from(0),data:t.interface.encodeFunctionData("sell",[n,i])},r=await t.provider.estimateGas(s);console.log("gasLimit:",r.toNumber());let o=null==f?void 0:f.sendTransaction({...s,gasLimit:r});null==o||o.then(e=>{e.wait().then(e=>{1===e.status?((0,D.L)(!0,"Confirm Success."),a&&a()):(0,D.L)(!1,"Confirm failure."),W(!1),l()}).catch(e=>{W(!1),(0,D.L)(!1,e.reason)})}).catch(e=>{W(!1),(0,D.L)(!1,e.reason)})}catch(e){W(!1),-32603===e.code&&-32015==e.data.code?(0,D.L)(!1,"Insufficient funds for gas."):(0,D.L)(!1,"Confirm failure.")}}}return(0,d.useEffect)(()=>{c&&(async()=>{let e=await T(c,n);N(null!=e?e:0)})()},[n,c]),(0,d.useEffect)(()=>{L&&0!==L?z():O(0)},[L]),(0,i.jsxs)(o.Z,{sx:{mt:8,display:"flex",flexDirection:"column",gap:4},children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{variant:"secondary16",color:"text.secondary",children:"Amount"}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",gap:1},children:[(0,i.jsx)(p.Z,{onClick:()=>{R(.25*F)},sx:{minWidth:"20px"},children:"25%"}),(0,i.jsx)(p.Z,{onClick:()=>{R(.5*F)},sx:{minWidth:"20px"},children:"50%"}),(0,i.jsx)(p.Z,{onClick:()=>{R(.75*F)},sx:{minWidth:"20px"},children:"75%"}),(0,i.jsx)(p.Z,{onClick:()=>{R(1*F)},sx:{minWidth:"20px"},children:"Max"})]})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:3},children:[(0,i.jsx)(x.ZP,{sx:{flex:1,border:"1px solid #3c4454",borderRadius:1,padding:"4px 10px",backgroundColor:"#3f3d73"},placeholder:"0.00",value:L,autoFocus:!0,onChange:e=>{R(Number(e.target.value))},inputProps:{"aria-label":"amount input",style:{fontSize:"18px",lineHeight:"24,01px",height:"24px"}},endAdornment:(0,i.jsx)(u.Z,{position:"end",children:(0,i.jsx)(r.Z,{children:"share"})}),inputComponent:v}),(0,i.jsx)(o.Z,{sx:{padding:"0px 0px 0px 0px",display:"flex",justifyContent:"space-between"},children:(0,i.jsxs)(r.Z,{component:"div",sx:{display:"flex",gap:"10px",alignItems:"center"},variant:"secondary16",color:"text.secondary",children:[(0,i.jsx)(i.Fragment,{children:"Balance: "}),(0,i.jsx)(y.B,{value:F,compact:!0,symbolsColor:"text.disabled"})]})})]})]}),(0,i.jsx)(h,{children:(0,i.jsx)(g.X,{caption:(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{color:"text.secondary",children:"Shares Value"}),(0,i.jsx)(b,{})]}),captionVariant:"description",mb:2,children:(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsxs)(r.Z,{children:[" ",(0,i.jsx)(y.B,{value:A,variant:"secondary14",compact:!0,visibleDecimals:4,symbol:"CFX"})]}),(0,i.jsxs)(r.Z,{children:["(",(0,i.jsx)(y.B,{value:A*(null!=k?k:0),variant:"secondary14",symbol:"USD"}),")"]})]})})}),(0,i.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",mt:6},children:(0,i.jsxs)(p.Z,{variant:A>0?"surface":"contained",disabled:P,onClick:E,size:"large",sx:{borderRadius:2,minHeight:"44px"},"data-cy":"actionButton",children:[P&&(0,i.jsx)(m.Z,{color:"inherit",size:"16px",sx:{mr:2}}),P?"Signing":"Confirm Sell"]})})]})};var R=t(7781);let F=()=>{var e,n;let{type:t,close:p}=(0,s.a)(),{tempAssetModal:x}=(0,R.R)(),[u,m]=(0,d.useState)(0);async function h(){p()}return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.P,{open:t===s.w.AssetBuy,setOpen:h,contentMaxWidth:420,children:[(0,i.jsxs)(r.Z,{variant:"h2",sx:{mb:4},children:[0==u?"Buy":"Sell"," shares #",null==x?void 0:x.assetId]}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(l.Z,{value:u,onChange:(e,n)=>{m(n)},centered:!0,sx:{minHeight:"36px","& .MuiTabs-indicator":{backgroundColor:"#75cedb"},"& .Mui-selected":{color:"#75cedb"}},children:[(0,i.jsx)(c.Z,{label:"Buy",className:"bodhi-tabs",sx:{minHeight:"36px",fontSize:"0.975rem","&.Mui-selected":{color:"#75cedb"}}}),(0,i.jsx)(c.Z,{label:"Sell",className:"bodhi-tabs",sx:{minHeight:"36px",fontSize:"0.975rem","&.Mui-selected":{color:"#75cedb"}}})]})}),0==u&&(0,i.jsx)(k,{assetId:null==x?void 0:x.assetId,totalSupply:null!==(e=null==x?void 0:x.assetSupply)&&void 0!==e?e:0}),1==u&&(0,i.jsx)(L,{assetId:null==x?void 0:x.assetId,totalSupply:null!==(n=null==x?void 0:x.assetSupply)&&void 0!==n?n:0})]})})}},84:function(e,n,t){t.d(n,{L:function(){return s},V:function(){return a}}),t(7294);var i=t(5678);function s(e,n){e?i.Am.success(n,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):i.Am.error("".concat(n),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function a(e,n){e?i.Am.success(n,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):i.Am.error("".concat(n),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},7781:function(e,n,t){t.d(n,{R:function(){return s}});var i=t(4529);let s=(0,i.Ue)(e=>({setTempAssetModal(n){e({tempAssetModal:n})},setTempSelectMemuIndex(n){e({tempSelectMemuIndex:n})}}))}}]);