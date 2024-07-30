"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{53345:function(e,t,n){n.d(t,{H:function(){return c}});var a=n(82729),r=n(85893),i=n(67294),s=n(59608),l=n(45098);function o(){let e=(0,a._)(["\n  display: flex;\n  max-width: 100%;\n"]);return o=function(){return e},e}let c=i.forwardRef(function(e,t){return(0,r.jsx)(s.I,{slots:{root:x,input:"input",textarea:u},...e,ref:t})}),d={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},x=(0,l.Z)("div")(o()),u=(0,l.Z)("textarea",{shouldForwardProp:e=>!["ownerState","minRows","maxRows"].includes(e.toString())})(e=>{let{theme:t}=e;return"\n  width: 100%;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  padding: 8px 12px;\n  border-radius: 4px 4px 0 4px;\n  color: ".concat((t.palette.mode,d[900]),";\n  background: ").concat((t.palette.mode,"#f2f2f2"),";\n  border: 1px solid ").concat((t.palette.mode,d[200]),";\n \n\n  &:hover {\n    border-color: ").concat(d[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(d[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")})},85373:function(e,t,n){n.r(t),n.d(t,{UserinfoModal:function(){return _}});var a=n(85893),r=n(67294),i=n(5616),s=n(15861),l=n(69417),o=n(87952),c=n(98456),d=n(76770),x=n.n(d),u=n(87066),h=n(82084),f=n(56836),p=n(13950),m=n(64032),g=n(31065),j=n(5297),y=n(45098),v=n(22760);let Z=r.forwardRef(function(e,t){let{getRootProps:n,getInputProps:r}=(0,j.G)(e),i=r();return i.ref=(0,v.Z)(i.ref,t),(0,a.jsx)("div",{...n(),children:(0,a.jsx)(C,{...e,...i})})}),w={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"},C=(0,y.Z)("input")(e=>{let{theme:t}=e;return" \n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 8px 12px;\n  border-radius: 4px;\n  color: ".concat((t.palette.mode,w[900]),";\n  background: ").concat((t.palette.mode,"#fff"),";\n  border: 1px solid ").concat((t.palette.mode,w[200]),";\n \n  &:hover {\n    border-color: ").concat(w[400],";\n  }\n\n  &:focus {\n    border-color: ").concat(w[400],"; \n  }\n\n  // firefox\n  &:focus-visible {\n    outline: 0;\n  }\n")});var b=n(10084),S=n(81458),F=n(67720),I=n(53345),D=n(76172),L=n(60888),A=n(74187),M=n(77294),k=n(2593),T=n(91783),E=n(61085),N=n(93619),B=n(19215),P=n(11163);let R=()=>{let{type:e,close:t,setType:n}=(0,m.a)(),{signer:o,account:d,getBodhiUserAssets:x,getBodhiAssets:h,fetchArweaveData:f,spaceUserInfo:j}=(0,g.Yh)(),{refetchSpaceUserData:y}=(0,B.n)(),v=(0,P.useRouter)(),[w,C]=(0,r.useState)(""),[R,z]=(0,r.useState)(""),[U,W]=(0,r.useState)(0),[O,_]=(0,r.useState)(0),[H,G]=(0,r.useState)(""),[Y,K]=(0,r.useState)(),[$,J]=(0,r.useState)(!1),[Q,V]=(0,r.useState)(!1);async function X(){if(!w||""===w){(0,b.L)(!1,"Please enter a space name.");return}if(w.length>32){(0,b.L)(!1,"Maximum space name length is 32 strings.");return}if(!R||""===R){(0,b.L)(!1,"Please enter a description.");return}W(1)}async function q(){if(W(2),_(0),J(!0),""!==H&&H)setTimeout(()=>{ee(H)},500);else try{let e=await u.Z.post(A.zA.api_text,{text:R});200===e.status?(G(e.data.transactionId),ee(e.data.transactionId)):((0,b.L)(!1,"Upload failed. Please try again."),J(!1))}catch(e){console.error("Error uploading text:",e),J(!1)}let e=setInterval(()=>{_(e=>Math.min(e+20*Math.random(),100))},100);return()=>{clearInterval(e)}}async function ee(e){if(!e||""==e)return;J(!0);let t=A.TT[A.KY].bodhi,n=new M.CH(t,T,o);try{let a={from:d,to:t,value:k.O$.from(0),data:n.interface.encodeFunctionData("create",[e])},r=await n.provider.estimateGas(a);console.log("gasLimit:",r.toNumber());let i=null==o?void 0:o.sendTransaction({...a,gasLimit:r});null==i||i.then(e=>{e.wait().then(e=>{1===e.status?((0,b.L)(!0,"Bodhi Asset Created."),setTimeout(()=>{et()},500)):((0,b.L)(!1,"Signature failure."),J(!1))}).catch(e=>{J(!1),(0,b.L)(!1,e.reason)})}).catch(e=>{J(!1),(0,b.L)(!1,e.reason)})}catch(e){console.log({error:e}),J(!1),-32603===e.code&&-32015==e.data.code?(0,b.L)(!1,"Insufficient funds for gas."):"execution reverted: Asset already exists"==e.reason.toString()?et():(0,b.L)(!1,"Signature failure.")}}async function et(){if(!w||""===w){(0,b.L)(!1,"Please enter a space name.");return}W(3),J(!0);let e=await x(d);if(K(e),!e&&0!==e){(0,b.L)(!1,"Refresh and try again.");return}let t=A.TT[A.KY].spaceFactory,n=new M.CH(t,E,o),a={from:d,to:t,value:k.O$.from(0),data:n.interface.encodeFunctionData("create",[e,w])},r=await n.provider.estimateGas(a);console.log("gasLimit:",r.toNumber());let i=null==o?void 0:o.sendTransaction({...a,gasLimit:r});null==i||i.then(e=>{e.wait().then(e=>{1===e.status?((0,b.L)(!0,"Space Created."),en()):(0,b.L)(!1,"Signature failure."),J(!1)}).catch(()=>{J(!1)})}).catch(()=>{J(!1)})}async function en(){y&&y(),setTimeout(()=>{W(4)},1500)}return(0,r.useEffect)(()=>{j&&j.spaceName&&C(j.spaceName),(async()=>{if(d){let e=await x(d);if(e||0==e){K(e);let t=await h(null!=e?e:-1);if(t){G(t.arTxId),V(!0);let e=await f(t.arTxId);z(null!=e?e:"")}}else Q&&V(!1)}})()},[j,d]),(0,a.jsxs)(i.Z,{children:[0==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.E,{title:"Create a Space"}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Space Name"}),(0,a.jsx)(Z,{style:{width:"100%"},value:w,onChange:e=>{C(e.target.value)}})]}),(0,a.jsxs)(i.Z,{sx:{mt:2},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Description"}),(0,a.jsx)(I.H,{multiline:!0,style:{width:"100%"},value:R,onChange:e=>{z(e.target.value)},rows:4})]}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{t()},sx:{minWidth:"90px"},children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Cancel"})})}),(0,a.jsx)(l.Z,{variant:"outlined_2",onClick:()=>{X()},sx:{minWidth:"90px"},children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Preview"})})})]})]}),1==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.E,{title:"Space Preview"}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{sx:{mb:1.5},color:"text.secondary",children:"Space Name"}),(0,a.jsx)(s.Z,{variant:"h4",component:"div",children:w}),(0,a.jsxs)(i.Z,{sx:{mt:4},children:[(0,a.jsx)(s.Z,{sx:{mb:1.5},color:"text.secondary",children:"Description"}),(0,a.jsx)(s.Z,{variant:"secondary14",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:R.replace(/\n/g,"<br />")}})})]})]}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{W(0)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(D.Z,{}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back "})})}),(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{Q?et():q()},sx:{minWidth:"90px"},children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Confirm Create"})})})]})]}),2==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.E,{title:"Create Space"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(i.Z,{sx:{width:"100%"},children:100!=O?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(S.Z,{variant:"determinate",value:O})}):(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(s.Z,{variant:"main16",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)(L.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Uploaded"})]}),(0,a.jsxs)(s.Z,{variant:"secondary14",color:"text.secondary",children:["Arweave ID: ",H]}),(0,a.jsx)(F.Z,{sx:{mt:2,mb:2}}),(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.primary",children:"Creating Bodhi Asset..."})]})})}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{W(1)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(D.Z,{}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back"})})}),(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{ee(H)},sx:{minWidth:"90px"},disabled:$,startIcon:$&&(0,a.jsx)(c.Z,{size:14}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:$?"Signing":"Sign"})})})]})]}),3==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.E,{title:"Create Space"}),(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)(s.Z,{variant:"main16",sx:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)(L.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Uploaded"})]}),(0,a.jsxs)(s.Z,{variant:"secondary14",color:"text.secondary",children:["Arweave ID: ",H]}),(0,a.jsx)(F.Z,{sx:{mt:2,mb:2}}),(0,a.jsxs)(s.Z,{variant:"main16",sx:{mt:4,display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)(L.Z,{sx:{color:"#78e378"}}),(0,a.jsx)(a.Fragment,{children:"Bodhi Asset Created"})]}),(0,a.jsxs)(s.Z,{variant:"secondary14",color:"text.secondary",children:["Asset lD: ",Y]}),(0,a.jsx)(F.Z,{sx:{mt:2,mb:2}}),(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.primary",children:"Creating Space..."})]}),(0,a.jsxs)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"right",gap:4},children:[(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{W(2)},sx:{minWidth:"90px"},startIcon:(0,a.jsx)(D.Z,{}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Back"})})}),(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{et()},sx:{minWidth:"90px"},disabled:$,startIcon:$&&(0,a.jsx)(c.Z,{size:14}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:$?"Signing":"Sign"})})})]})]}),4==U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.E,{title:" "}),(0,a.jsxs)(s.Z,{variant:"h2",sx:{pt:8,pb:8,textAlign:"center"},children:["Space #",null==j?void 0:j.spaceId,"  ",w]}),(0,a.jsx)(i.Z,{sx:{mt:8,display:"flex",justifyContent:"center"},children:(0,a.jsx)(l.Z,{variant:"surface",onClick:()=>{v.push("/space-overview?address=".concat(d)),t()},sx:{minWidth:"90px"},disabled:$,endIcon:(0,a.jsx)(N.Z,{}),children:"Enter My Space"})})]})]})};var z=n(75071),U=n(35553),W=n(47726),O=n(46154);let _=()=>{let{type:e,close:t,setType:n}=(0,m.a)(),[d,j]=(0,r.useState)(!1),[y,v]=(0,r.useState)(!1),[w,C]=(0,r.useState)(!1),[S,F]=(0,r.useState)(""),[I,D]=(0,r.useState)(""),[L,T]=(0,r.useState)(""),[N,P]=(0,r.useState)(null),[_,H]=(0,r.useState)(null),{spaceUserInfo:G,account:Y,signer:K}=(0,g.Yh)(),{refetchSpaceUserData:$}=(0,B.n)(),J=(0,r.useMemo)(()=>(0,O.fO)(G),[G]);async function Q(){try{let e=A.TT[A.KY].spaceFactory,t=new M.CH(e,E,K),n={from:Y,to:e,value:k.O$.from(0),data:t.interface.encodeFunctionData("updateSpaceName",[S])},a=await t.provider.estimateGas(n);console.log("gasLimit:",a.toNumber());let r=null==K?void 0:K.sendTransaction({...n,gasLimit:a});null==r||r.then(e=>{e.wait().then(e=>{1===e.status?($&&$(),(0,b.L)(!0,"Space name updated successfully.")):(0,b.L)(!1,"Signature failure."),j(!1)}).catch(()=>{j(!1)})}).catch(()=>{})}catch(e){}}let{avatar:V,spacename:X}=(0,r.useMemo)(()=>(0,W.Dm)(Y,G),[Y,G]),q={x:0,y:0,width:200,height:200,unit:"px"},[ee,et]=(0,r.useState)(q),[en,ea]=(0,r.useState)(q),er=(0,r.useRef)(null),ei=e=>{er.current=e},es=(e,t)=>{let n=document.createElement("canvas"),a=e.naturalWidth/e.width,r=e.naturalHeight/e.height;n.width=t.width,n.height=t.height;let i=n.getContext("2d");return i?(i.drawImage(e,t.x*a,t.y*r,t.width*a,t.height*r,0,0,t.width,t.height),new Promise(e=>{n.toBlob(t=>{if(t){let n=new File([t],"croppedImage.jpg",{type:"image/jpeg"});e(n)}},"image/jpeg")})):Promise.reject(Error("Failed to crop image"))},el=async e=>{if(e.preventDefault(),!N||!en||!er.current){(0,b.L)(!1,"Please select and crop an image to upload.");return}C(!0);try{let e=await es(er.current,en);e.size<1e4?eo(e):x().imageFileResizer(e,200,200,"JPEG",100,0,async e=>{e instanceof File&&eo(e)},"file")}catch(e){console.error("Error uploading file:",e),(0,b.L)(!1,"Error uploading file.")}};async function eo(e){let t=new FormData;t.append("file",e);let n=await u.Z.post(A.zA.api_media,t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{}});200===n.status?(T(n.data.transactionId),ec(n.data.transactionId)):((0,b.L)(!1,"Upload failed. Please try again."),C(!1))}async function ec(e){if(e)try{let t=A.TT[A.KY].spaceFactory,n=new M.CH(t,E,K),a=U.fi("0.1"),r={from:Y,to:t,value:a,data:n.interface.encodeFunctionData("uploadAvatar",[e])},i=await n.provider.estimateGas(r);console.log("gasLimit:",i.toNumber());let s=null==K?void 0:K.sendTransaction({...r,gasLimit:i});null==s||s.then(e=>{e.wait().then(e=>{1===e.status?($&&$(),(0,b.L)(!0,"Avatar uploaded successfully.")):(0,b.L)(!1,"Signature failure."),v(!1),C(!1),H(null)}).catch(e=>{C(!1),v(!1),(0,b.L)(!1,e.reason)})}).catch(e=>{C(!1),v(!1),(0,b.L)(!1,e.reason)})}catch(e){C(!1),v(!1),-32603===e.code&&-32015==e.data.code?(0,b.L)(!1,"Insufficient funds for gas."):(0,b.L)(!1,"Signature failure.")}}return(0,a.jsx)(f.P,{open:e===m.w.UserInfo,setOpen:function(){j(!1),C(!1),v(!1),H(null),t()},contentMaxWidth:520,children:(0,a.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:J?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.E,{title:"Account"}),(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",gap:6},children:[(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Space Id"}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)(s.Z,{variant:"secondary16",color:"text.primary",sx:{paddingRight:10},children:["# ",null==G?void 0:G.spaceId]})})]}),(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Space Name"}),(0,a.jsx)(i.Z,{sx:{display:"flex",gap:6,alignItems:"center"},children:d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Z,{style:{width:"100%"},value:S,onChange:e=>{F(e.target.value)}}),(0,a.jsx)(l.Z,{variant:"outlined",onClick:()=>{Q()},children:"Save"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.primary",children:null==G?void 0:G.spaceName}),(0,a.jsxs)("span",{onClick:()=>{j(!0),F(null==G?void 0:G.spaceName)},children:[" ",(0,a.jsx)(z.Z,{fontSize:"small",sx:{color:"#75cedb"}})]})]})})]}),(0,a.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(s.Z,{variant:"secondary16",color:"text.secondary",children:"Avatar"}),(0,a.jsx)(i.Z,{sx:{display:"flex",gap:6,alignItems:"center"},children:y?(0,a.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:2},children:[(0,a.jsxs)("div",{className:"file-upload-container",children:[(0,a.jsx)("label",{htmlFor:"file-upload",className:"file-upload-label",children:"Choose File"}),(0,a.jsx)("input",{id:"file-upload",type:"file",onChange:e=>{if(e.target.files&&e.target.files.length>0){let t=e.target.files[0];H(URL.createObjectURL(t)),P(t)}},style:{display:"none"}})]}),(0,a.jsx)(l.Z,{variant:"surface",onClick:el,sx:{minWidth:"90px"},disabled:!_||w,startIcon:w&&(0,a.jsx)(c.Z,{size:14}),children:(0,a.jsx)(s.Z,{variant:"buttonM",children:(0,a.jsx)(a.Fragment,{children:"Upload"})})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{alt:"",src:V}),(0,a.jsxs)("span",{onClick:()=>{v(!0)},children:[" ",(0,a.jsx)(z.Z,{fontSize:"small",sx:{color:"#75cedb"}})]})]})})]}),(0,a.jsx)(i.Z,{children:_&&(0,a.jsx)("div",{className:"image-preview",children:(0,a.jsx)(h.ZP,{aspect:1,crop:ee,onComplete:e=>{ea(e)},onChange:e=>et(e),children:(0,a.jsx)("img",{src:_,alt:"Preview",onLoad:e=>ei(e.currentTarget)})})})})]})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(R,{})})})})}},10084:function(e,t,n){n.d(t,{L:function(){return r},V:function(){return i}}),n(67294);var a=n(55678);function r(e,t){e?a.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):a.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}function i(e,t){e?a.Am.success(t,{autoClose:5e3,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}}):a.Am.error("".concat(t),{autoClose:2500,position:"top-right",theme:"light",closeOnClick:!0,style:{borderRadius:"6px"}})}},46154:function(e,t,n){n.d(t,{Q1:function(){return i},fO:function(){return s}});var a=n(25733),r=n(74187);async function i(e){let t=new a.r(r.zG[r.KY].urls[0]),n=await t.getTransaction(e);return n}function s(e){return!!e&&!!e.spaceAddress&&""!=e.spaceAddress&&"0x0000000000000000000000000000000000000000"!=e.spaceAddress&&!!e.spaceName}},47726:function(e,t,n){n.d(t,{Dm:function(){return l},Xe:function(){return s},i$:function(){return o}});var a=n(11288),r=n.n(a),i=n(74187);let s=(e,t,n)=>e&&""!==e?"".concat(e.substr(0,t),"...").concat(e.substr(e.length-n,e.length)):"",l=(e,t)=>{let n=t&&t.avatarArTxId?"".concat(i.zA.ar_url).concat(null==t?void 0:t.avatarArTxId):e?r()(e):"/icons/img/user.jpg",a=t&&t.spaceName?t.spaceName:s(e,4,4);return{avatar:n,spacename:a}},o=e=>{let t=Date.now()/1e3,n=t-e;if(n<0){let t=Math.abs(n);if(t<60)return"".concat(Math.floor(t),"s from now");if(t<3600)return"".concat(Math.floor(t/60),"m from now");{if(t<86400)return"".concat(Math.floor(t/3600),"h from now");let n=new Date(1e3*e),a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return"on ".concat(a.format(n))}}if(n<60)return"".concat(Math.floor(n),"s ago");if(n<3600)return"".concat(Math.floor(n/60),"m ago");{if(n<86400)return"".concat(Math.floor(n/3600),"h ago");let t=new Date(1e3*e),a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"});return a.format(t)}}}}]);