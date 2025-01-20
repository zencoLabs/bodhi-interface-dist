"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{33286:function(e,n,t){t.d(n,{l:function(){return r}});var i=t(85893),a=t(67294),s=t(57333);let r=a.forwardRef(function(e,n){let{onChange:t,...a}=e;return(0,i.jsx)(s.Z,{...a,getInputRef:n,onValueChange:n=>{n.value!==e.value&&t({target:{name:e.name,value:n.value||""}})},thousandSeparator:!0,isNumericString:!0,allowNegative:!1})})},26384:function(e,n,t){t.d(n,{G:function(){return f}});var i=t(85893),a=t(82313),s=t(5616),r=t(15861),o=t(93946),l=t(53219),c=t(67294),d=t(90948),p=t(16078),u=t(34386),x=t(23926);let m=(0,d.ZP)(p.Z)(e=>{let{theme:n}=e;return{".MuiTooltip-tooltip":{color:"text.primary",backgroundColor:"#312f5c",p:0,borderRadius:"6px",boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)",maxWidth:"280px"},".MuiTooltip-arrow":{color:"#312f5c","&:before":{boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.3), 0px 2px 10px rgba(0, 0, 0, 0.2)"}}}}),h=e=>{let{children:n,tooltipContent:t,placement:a="top",withoutHover:r,open:o,setOpen:l,offset:d}=e,[p,h]=(0,c.useState)(!1),f=void 0!==o?o:p,y=()=>void 0!==l?l(!f):h(!f),j=()=>void 0!==l?l(!1):h(!1);return(0,i.jsx)(u.Z,{sx:{},open:f,onClose:j,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,placement:a,PopperComponent:m,componentsProps:{popper:{modifiers:[{name:"offset",options:{offset:null!=d?d:[]}}],onClick:e=>{e.stopPropagation()}}},title:(0,i.jsx)(x.d,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:j,children:(0,i.jsx)(s.Z,{sx:{background:"#312f5c",py:4,px:6,fontSize:"12px",lineHeight:"16px",a:{fontSize:"12px",lineHeight:"16px",fontWeight:500,"&:hover":{textDecoration:"underline"}},color:"text.primary"},children:t})}),arrow:!0,children:(0,i.jsx)(s.Z,{sx:{display:"inline-flex",cursor:"pointer",transition:"all 0.2s ease","&:hover":{opacity:r?1:f?1:.5}},onClick:e=>{e.preventDefault(),e.stopPropagation(),y()},children:n})})},f=e=>{let{text:n,icon:t,iconSize:d=14,iconColor:p,iconMargin:u,children:x,textColor:m,wrapperProps:{sx:f,...y}={},open:j=!1,setOpen:g,...v}=e,[b,Z]=(0,c.useState)(j);return(0,i.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",...f},...y,children:[n&&(0,i.jsx)(r.Z,{...v,color:m,children:n}),(0,i.jsx)(h,{tooltipContent:(0,i.jsx)(i.Fragment,{children:x}),open:b,setOpen:()=>{g&&g(!b),Z(!b)},children:(0,i.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:d,height:d,borderRadius:"50%",p:0,minWidth:0,ml:u||.5},onClick:()=>{},children:(0,i.jsx)(l.Z,{sx:{fontSize:d,color:p||(b?"info.main":"text.muted"),borderRadius:"50%","&:hover":{color:p||"info.main"}},children:t||(0,i.jsx)(a.Z,{})})})})]})}},78191:function(e,n,t){t.d(n,{m:function(){return r}});var i=t(85893),a=t(5616),s=t(15861);let r=e=>{let{title:n,children:t}=e;return(0,i.jsxs)(a.Z,{sx:{pt:5},children:[(0,i.jsx)(s.Z,{sx:{mb:1},color:"text.secondary",children:(0,i.jsx)(i.Fragment,{children:null!=n?n:"Transaction overview"})}),(0,i.jsx)(a.Z,{sx:e=>({p:3,border:"1px solid ".concat(e.palette.divider),borderRadius:"4px",".MuiBox-root:last-of-type":{mb:0}}),children:t})]})}},36840:function(e,n,t){t.d(n,{Y:function(){return s}});var i=t(85893),a=t(26384);let s=e=>{let{...n}=e;return(0,i.jsx)(a.G,{...n,children:(0,i.jsxs)(i.Fragment,{children:["Share price will go up when more people buy. And you can sell it anytime.",(0,i.jsx)("br",{}),"price = 0.00006 * supply^2"]})})}},49479:function(e,n,t){t.d(n,{B:function(){return c}});var i=t(85893),a=t(70794);function s(e){return e instanceof a.O?e:new a.O(e)}a.O.clone({DECIMAL_PLACES:0,ROUNDING_MODE:a.O.ROUND_DOWN});var r=t(15861);let o=["","K","M","B","T","P","E","Z","Y"];function l(e){let{value:n,visibleDecimals:t=2}=e,a=s(n),r=a.toFixed(0).length,l=Math.min(Math.floor(r?(r-1)/3:0),o.length-1),c=o[l],d=s(a).shiftedBy(-1*(3*l)).toNumber();return(0,i.jsxs)(i.Fragment,{children:[new Intl.NumberFormat("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}).format(d),c]})}function c(e){let{value:n,symbol:t,visibleDecimals:a,compact:s,percent:o,symbolsVariant:c,symbolsColor:d,...p}=e,u=o?100*Number(n):Number(n),x=a;0===u?x=0:void 0===a&&(x=u>1||o||"USD"===t?2:6);let m=10**-x,h=0!==u&&Math.abs(u)<Math.abs(m),f=h?m:u,y=!1!==s&&(s||u>99999);return(0,i.jsxs)(r.Z,{className:"formatted-number-apt",...p,sx:{display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative",...p.sx},noWrap:!0,children:[h&&(0,i.jsx)(r.Z,{component:"span",sx:{mr:.5},variant:c||p.variant,color:d||"text.secondary",children:"<"}),(null==t?void 0:t.toLowerCase())==="usd"&&!o&&(0,i.jsx)(r.Z,{component:"span",sx:{mr:.5},variant:c||p.variant,color:d||"text.secondary",children:"$"}),!y&&f>0?new Intl.NumberFormat("en-US",{maximumFractionDigits:x,minimumFractionDigits:x}).format(f):(0,i.jsx)(l,{value:f,visibleDecimals:x}),o&&(0,i.jsx)(r.Z,{component:"span",sx:{ml:.5},variant:c||p.variant,color:d||"text.secondary",children:"%"}),(null==t?void 0:t.toLowerCase())!=="usd"&&void 0!==t&&(0,i.jsx)(r.Z,{component:"span",sx:{ml:.5},variant:c||p.variant,color:d||"text.secondary",children:t})]})}},36444:function(e,n,t){t.d(n,{X:function(){return r}});var i=t(85893),a=t(5616),s=t(15861);let r=e=>{let{caption:n,children:t,captionVariant:r="secondary16",captionColor:o,align:l="center",...c}=e;return(0,i.jsxs)(a.Z,{...c,sx:{display:"flex",alignItems:l,justifyContent:"space-between",...c.sx},children:[n&&(0,i.jsx)(s.Z,{component:"div",variant:r,color:o,sx:{mr:2},children:n}),t]})}},53581:function(e,n,t){t.r(n),t.d(n,{SpaceTransactionModal:function(){return M}});var i=t(85893),a=t(64032),s=t(56836),r=t(15861),o=t(47781),l=t(5616),c=t(69417),d=t(11298),p=t(87109),u=t(98456),x=t(78191),m=t(49479),h=t(36840),f=t(36444),y=t(33286),j=t(67294),g=t(31065),v=t(74187),b=t(77294),Z=t(35553),C=t(7979),S=t(10084),w=t(19215);let T=e=>{let{assetId:n,totalSupply:t}=e,{close:s}=(0,a.a)(),{account:o,signer:T,getBuyPriceAfterFee:D,ethPrice:I}=(0,g.Yh)(),[k,M]=(0,j.useState)(0),[B,R]=(0,j.useState)(0),[L,F]=(0,j.useState)(!1),{refetchBodhiData:N}=(0,w.n)();async function O(){let e=await D(n,k,t);R(null!=e?e:0)}async function A(){if(0!=B&&0!=k){F(!0);try{let e=v.TT[v.KY].tradeHelper,t=new b.CH(e,C,T),i=Z.fi(B.toString()),a=Z.vz(k.toString(),18),r={from:o,to:e,value:i,data:t.interface.encodeFunctionData("safeBuy",[n,a])},l=await t.provider.estimateGas(r),c=null==T?void 0:T.sendTransaction({...r,gasLimit:l});null==c||c.then(e=>{e.wait().then(e=>{1===e.status?((0,S.L)(!0,"Confirm Success."),N&&N()):(0,S.L)(!1,"Confirm failure."),F(!1),s()}).catch(e=>{F(!1),(0,S.L)(!1,e.reason)})}).catch(e=>{F(!1),(0,S.L)(!1,e.reason)})}catch(e){console.log(e),F(!1),-32603===e.code&&-32015==e.data.code?(0,S.L)(!1,"Insufficient funds for gas."):(0,S.L)(!1,"Confirm failure.")}}}return(0,j.useEffect)(()=>{k&&0!==k?O():R(0)},[k]),(0,i.jsxs)(l.Z,{sx:{mt:8,display:"flex",flexDirection:"column",gap:4},children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{variant:"secondary16",color:"text.secondary",children:"Amount"}),(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"row",gap:1},children:[(0,i.jsx)(c.Z,{onClick:()=>{M(10)},sx:{minWidth:"20px"},children:"10"}),(0,i.jsx)(c.Z,{onClick:()=>{M(50)},sx:{minWidth:"20px"},children:"50"}),(0,i.jsx)(c.Z,{onClick:()=>{M(100)},sx:{minWidth:"20px"},children:"100"}),(0,i.jsx)(c.Z,{onClick:()=>{M(500)},sx:{minWidth:"20px"},children:"500"})]})]}),(0,i.jsx)(l.Z,{sx:{display:"flex",flexDirection:"row",gap:3},children:(0,i.jsx)(d.ZP,{sx:{flex:1,border:"1px solid #3c4454",borderRadius:1,padding:"4px 10px",backgroundColor:"#3f3d73"},placeholder:"0.00",value:k,autoFocus:!0,onChange:e=>{M(Number(e.target.value))},inputProps:{"aria-label":"amount input",style:{fontSize:"18px",lineHeight:"24,01px",height:"24px"}},endAdornment:(0,i.jsx)(p.Z,{position:"end",children:(0,i.jsx)(r.Z,{children:"share"})}),inputComponent:y.l})})]}),(0,i.jsx)(x.m,{children:(0,i.jsx)(f.X,{caption:(0,i.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{color:"text.secondary",children:"Shares Value"}),(0,i.jsx)(h.Y,{})]}),captionVariant:"description",mb:2,children:(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsxs)(r.Z,{children:[" ",(0,i.jsx)(m.B,{value:B,variant:"secondary14",compact:!0,visibleDecimals:4,symbol:"CFX"})]}),(0,i.jsxs)(r.Z,{children:["(",(0,i.jsx)(m.B,{value:B*(null!=I?I:0),variant:"secondary14",symbol:"USD"}),")"]})]})})}),(0,i.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",mt:6},children:(0,i.jsxs)(c.Z,{variant:B>0?"surface":"contained",disabled:L,onClick:A,size:"large",sx:{borderRadius:2,minHeight:"44px"},"data-cy":"actionButton",children:[L&&(0,i.jsx)(u.Z,{color:"inherit",size:"16px",sx:{mr:2}}),L?"Signing":"Confirm Buy"]})})]})};var D=t(2593),I=t(91783);let k=e=>{let{assetId:n,totalSupply:t}=e,{refetchBodhiData:s}=(0,w.n)(),{close:o}=(0,a.a)(),{account:C,signer:T,getSellPriceAfterFee:k,getBalanceByAccount_Asset:M,ethPrice:B}=(0,g.Yh)(),[R,L]=(0,j.useState)(0),[F,N]=(0,j.useState)(0),[O,A]=(0,j.useState)(0),[W,E]=(0,j.useState)(!1);async function P(){let e=await k(n,R,t);A(null!=e?e:0)}async function z(){if(0!=O&&0!=R){if(0==F){(0,S.L)(!1," Insufficient balance.");return}E(!0);try{let e=v.TT[v.KY].bodhi,t=new b.CH(e,I,T),i=Z.vz(R.toString(),18),a={from:C,to:e,value:D.O$.from(0),data:t.interface.encodeFunctionData("sell",[n,i])},r=await t.provider.estimateGas(a),l=null==T?void 0:T.sendTransaction({...a,gasLimit:r});null==l||l.then(e=>{e.wait().then(e=>{1===e.status?((0,S.L)(!0,"Confirm Success."),s&&s()):(0,S.L)(!1,"Confirm failure."),E(!1),o()}).catch(e=>{E(!1),(0,S.L)(!1,e.reason)})}).catch(e=>{E(!1),(0,S.L)(!1,e.reason)})}catch(e){E(!1),-32603===e.code&&-32015==e.data.code?(0,S.L)(!1,"Insufficient funds for gas."):(0,S.L)(!1,"Confirm failure.")}}}return(0,j.useEffect)(()=>{C&&(async()=>{let e=await M(C,n);N(null!=e?e:0)})()},[n,C]),(0,j.useEffect)(()=>{R&&0!==R?P():A(0)},[R]),(0,i.jsxs)(l.Z,{sx:{mt:8,display:"flex",flexDirection:"column",gap:4},children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,i.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{variant:"secondary16",color:"text.secondary",children:"Amount"}),(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"row",gap:1},children:[(0,i.jsx)(c.Z,{onClick:()=>{L(.25*F)},sx:{minWidth:"20px"},children:"25%"}),(0,i.jsx)(c.Z,{onClick:()=>{L(.5*F)},sx:{minWidth:"20px"},children:"50%"}),(0,i.jsx)(c.Z,{onClick:()=>{L(.75*F)},sx:{minWidth:"20px"},children:"75%"}),(0,i.jsx)(c.Z,{onClick:()=>{L(1*F)},sx:{minWidth:"20px"},children:"Max"})]})]}),(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",gap:3},children:[(0,i.jsx)(d.ZP,{sx:{flex:1,border:"1px solid #3c4454",borderRadius:1,padding:"4px 10px",backgroundColor:"#3f3d73"},placeholder:"0.00",value:R,autoFocus:!0,onChange:e=>{L(Number(e.target.value))},inputProps:{"aria-label":"amount input",style:{fontSize:"18px",lineHeight:"24,01px",height:"24px"}},endAdornment:(0,i.jsx)(p.Z,{position:"end",children:(0,i.jsx)(r.Z,{children:"share"})}),inputComponent:y.l}),(0,i.jsx)(l.Z,{sx:{padding:"0px 0px 0px 0px",display:"flex",justifyContent:"space-between"},children:(0,i.jsxs)(r.Z,{component:"div",sx:{display:"flex",gap:"10px",alignItems:"center"},variant:"secondary16",color:"text.secondary",children:[(0,i.jsx)(i.Fragment,{children:"Balance: "}),(0,i.jsx)(m.B,{value:F,compact:!0,symbolsColor:"text.disabled"})]})})]})]}),(0,i.jsx)(x.m,{children:(0,i.jsx)(f.X,{caption:(0,i.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,i.jsx)(r.Z,{color:"text.secondary",children:"Shares Value"}),(0,i.jsx)(h.Y,{})]}),captionVariant:"description",mb:2,children:(0,i.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsxs)(r.Z,{children:[" ",(0,i.jsx)(m.B,{value:O,variant:"secondary14",compact:!0,visibleDecimals:4,symbol:"CFX"})]}),(0,i.jsxs)(r.Z,{children:["(",(0,i.jsx)(m.B,{value:O*(null!=B?B:0),variant:"secondary14",symbol:"USD"}),")"]})]})})}),(0,i.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",mt:6},children:(0,i.jsxs)(c.Z,{variant:O>0?"surface":"contained",disabled:W,onClick:z,size:"large",sx:{borderRadius:2,minHeight:"44px"},"data-cy":"actionButton",children:[W&&(0,i.jsx)(u.Z,{color:"inherit",size:"16px",sx:{mr:2}}),W?"Signing":"Confirm Sell"]})})]})},M=()=>{var e,n;let{type:t,close:l}=(0,a.a)(),{tempSpaceModal:c}=(0,o.R)();async function d(){l()}return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.P,{open:t===a.w.SpaceBuy||t===a.w.SpaceSell,setOpen:d,contentMaxWidth:420,children:[(0,i.jsxs)(r.Z,{variant:"h2",sx:{mb:4},children:[t===a.w.SpaceBuy?"Buy":"Sell"," space #",null==c?void 0:c.spaceId]}),t===a.w.SpaceBuy&&(0,i.jsx)(T,{assetId:null==c?void 0:c.assetId,totalSupply:null!==(e=null==c?void 0:c.assetSupply)&&void 0!==e?e:0}),t===a.w.SpaceSell&&(0,i.jsx)(k,{assetId:null==c?void 0:c.assetId,totalSupply:null!==(n=null==c?void 0:c.assetSupply)&&void 0!==n?n:0})]})})}},10084:function(e,n,t){t.d(n,{L:function(){return a},V:function(){return s}}),t(67294);var i=t(55678);function a(e,n){e?i.Am.success(n,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):i.Am.error("".concat(n),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function s(e,n){e?i.Am.success(n,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):i.Am.error("".concat(n),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},47781:function(e,n,t){t.d(n,{R:function(){return a}});var i=t(64529);let a=(0,i.Ue)(e=>({setTempAssetModal(n){e({tempAssetModal:n})},setTempSpaceModal(n){e({tempSpaceModal:n})},setTempSelectMemuIndex(n){e({tempSelectMemuIndex:n})}}))},7979:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"safeBuy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_bodhi","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"}],"name":"SafeBuy","type":"event"},{"inputs":[],"name":"bodhi","outputs":[{"internalType":"contract IBodhi","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);