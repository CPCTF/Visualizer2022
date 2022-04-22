var kt=Object.defineProperty,Qt=Object.defineProperties;var Tt=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var ge=(i,e,t)=>e in i?kt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,g=(i,e)=>{for(var t in e||(e={}))Oe.call(e,t)&&ge(i,t,e[t]);if(ce)for(var t of ce(e))Je.call(e,t)&&ge(i,t,e[t]);return i},S=(i,e)=>Qt(i,Tt(e));var Le=(i,e)=>{var t={};for(var s in i)Oe.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&ce)for(var s of ce(i))e.indexOf(s)<0&&Je.call(i,s)&&(t[s]=i[s]);return t};var w=(i,e,t)=>(ge(i,typeof e!="symbol"?e+"":e,t),t);import{r as f,j as Qe,T as Ft,G as Zt,F as Yt,m as Rt,B as K,a as B,R as E,b as d,c as Y,M as pe,d as tt,S as Ht,e as j,C as Z,V as re,E as Wt,f as st,P as oe,D as it,g as ne,h as Ut,i as Te,k as xe,l as Vt,n as Ot,o as Jt,A as Lt,p as Xe,q as Xt,s as le,t as Kt,u as jt,W as Nt,v as qt,w as _t,x as $t,y as es,z as ts,H as rt,I as Fe,J as ss,K as is,L as rs,N as ns}from"./vendor.62449376.js";const os=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};os();const Ze=1.5,z=64*Ze,Ke=200*Ze,v=6*Ze,de=v/3*2,y=v/6*26,G=y*1.2;let nt=0;const je=i=>{nt=i},we=()=>nt;var as="/Visualizer/assets/clickup.207be81c.mp3",cs="/Visualizer/assets/clickdown.92e482ed.mp3",ls="/Visualizer/assets/hdd.670515d8.mp3";const I={mouseup:new Audio(as),mousedown:new Audio(cs),hdd:new Audio(ls)},fe=i=>{we()!==0&&(!I[i]||(I[i].paused||(I[i].pause(),I[i].currentTime=0),I[i].volume=we(),I[i].play()))},Pe=i=>{we()!==0&&(!I[i]||(I[i].paused||(I[i].pause(),I[i].currentTime=Math.min(I[i].currentTime,5)),I[i].volume=we(),I[i].play()))},us=()=>{const[i,e]=f.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,r)=>{e(n=>{if(n.windowSettings.starting)return n;if(!n.windowSettings.windowIndices.includes(s))return Pe("hdd"),setTimeout(()=>{e(u=>{const A=g({},u.windowSettings.windows);A[s]=r;const m=[...u.windowSettings.windowIndices],h=[...u.windowSettings.windowStack];return m.includes(s)||(h.push(s),m.push(s)),S(g({},u),{windowSettings:S(g({},u.windowSettings),{windows:A,windowIndices:m,windowStack:h,starting:""})})})},2e3),S(g({},n),{windowSettings:S(g({},n.windowSettings),{starting:s})});const o=g({},n.windowSettings.windows);o[s]=r;const a=[...n.windowSettings.windowIndices],c=[...n.windowSettings.windowStack];return a.includes(s)||(c.push(s),a.push(s),Pe("hdd")),S(g({},n),{windowSettings:S(g({},n.windowSettings),{windows:o,windowIndices:a,windowStack:c})})})},kill:s=>{e(r=>{const n=g({},r.windowSettings.windows);delete n[s];const o=r.windowSettings.windowIndices.filter(A=>A!==s),a=r.windowSettings.windowStack.filter(A=>A!==s),c=o.filter(A=>{var m;return(m=n[A])==null?void 0:m.visible}),u=c.length>0?c[c.length-1]:"";return S(g({},r),{windowSettings:S(g({},r.windowSettings),{windows:n,windowIndices:o,windowStack:a,focused:u})})})},focus:s=>{e(r=>{const n=g({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=S(g({},o),{visible:!0});const a=r.windowSettings.windowIndices.filter(c=>c!==s);return a.push(s),S(g({},r),{windowSettings:S(g({},r.windowSettings),{windows:n,windowIndices:a,focused:s})})})},minimize:s=>{e(r=>{const n=g({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=S(g({},o),{visible:!1});const a=r.windowSettings.windowIndices.filter(u=>{var A;return u!==s&&((A=n[u])==null?void 0:A.visible)}),c=a.length>0?a[a.length-1]:"";return S(g({},r),{windowSettings:S(g({},r.windowSettings),{windows:n,focused:c})})})}}}));return[i,()=>{e(s=>S(g({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},l=Qe.exports.jsx,b=Qe.exports.jsxs,J=Qe.exports.Fragment,R=f.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),ds=({children:i})=>{const[e,t]=us();return f.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),l(R.Provider,{value:e,children:i})},hs="ws://cpctf.space/ws/visualizer",ot=["nanika","doreka","soreka"];var Ye="/Visualizer/assets/testicon.8f219171.jpg",As=[{class:"basis",sizeX:50,sizeY:50},{class:"parts",x:24,z:24,isBig:!1,category:"None"},{class:"parts",x:23,z:23,isBig:!1,category:"Web"},{class:"parts",x:26,z:23,isBig:!1,category:"Reversing"},{class:"wires",x:27,z:21,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1]]},{class:"wires",x:21,z:22,wires:[[11,-1]]},{class:"wires",x:22,z:22,wires:[[11,28]]},{class:"wires",x:23,z:22,wires:[[3,28],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:24,z:22,wires:[[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:25,z:22,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25],[15,24]]},{class:"wires",x:26,z:22,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24]]},{class:"wires",x:27,z:22,wires:[[0,23],[1,22],[2,21],[3,20],[4,19]]},{class:"wires",x:28,z:22,wires:[[5,-1]]},{class:"wires",x:24,z:23,wires:[[0,31],[1,30],[2,29],[3,20],[4,19],[5,18],[6,17],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:25,z:23,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,23],[9,22],[10,21],[11,20],[12,19],[13,18],[14,17],[15,16]]},{class:"wires",x:27,z:23,wires:[[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,10],[30,1],[31,0]]},{class:"wires",x:28,z:23,wires:[[29,18]]},{class:"wires",x:21,z:24,wires:[[12,-1]]},{class:"wires",x:22,z:24,wires:[[12,27]]},{class:"wires",x:23,z:24,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0],[20,27]]},{class:"wires",x:27,z:24,wires:[[2,21],[3,20],[4,19],[5,18],[6,17],[22,1],[23,0],[24,-1],[25,-1],[26,-1],[27,-1],[28,-1],[29,-1],[30,-1],[31,-1]]},{class:"wires",x:28,z:24,wires:[[7,-1]]},{class:"wires",x:23,z:25,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9],[23,8]]},{class:"wires",x:27,z:25,wires:[[22,-1],[23,-1],[24,-1],[25,-1],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:28,z:25,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[7,-1],[31,16]]},{class:"wires",x:24,z:26,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:25,z:26,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:27,z:26,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,15],[25,14],[26,13],[27,12],[28,11],[29,10],[30,9],[31,8]]},{class:"wires",x:28,z:26,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,16]]},{class:"wires",x:23,z:27,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:24,z:27,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:25,z:27,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:27,z:27,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:28,z:27,wires:[[31,0]]},{class:"wires",x:25,z:28,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9],[23,8]]},{class:"wires",x:27,z:28,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,0]]},{class:"wires",x:28,z:28,wires:[[23,-1]]},{class:"wires",x:24,z:29,wires:[[14,-1],[15,-1]]},{class:"wires",x:25,z:29,wires:[[14,25],[15,24]]},{class:"wires",x:26,z:29,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:27,z:29,wires:[[23,0]]},{class:"wires",x:25,z:30,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:26,z:30,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:27,z:30,wires:[[23,-1]]}];const X=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:Ye,point:0,rank:-1})),ws=()=>({userId:X[Math.floor(Math.random()*X.length)].id,point:Math.random()*1e3,genre:Math.floor(Math.random()*ot.length),title:"\u30AA\u30E2\u30B7\u30ED\u554F\u984C -\u3053\u308C\u306F\u9069\u5F53\u306B\u8003\u3048\u305F\u30BF\u30A4\u30C8\u30EB-"}),at=()=>(X.forEach(i=>{i.point+=Math.random()*1e3}),X.sort((i,e)=>i.point-e.point),X.forEach((i,e)=>{i.rank=e+1}),{ranking:X,circuit:{data:JSON.stringify(As)}}),fs=()=>{const i=new Date;i.setMinutes(i.getMinutes()-5);const e=new Date;return e.setMinutes(e.getMinutes()+5),{users:X.map(({id:t,name:s,iconUrl:r})=>({id:t,name:s,iconUrl:r})),recalculate:at(),startTime:i.toString(),endTime:e.toString()}},Me=i=>g({data:{type:0,data:null},lastEventId:"",origin:"",ports:[],source:null,initMessageEvent:function(e,t,s,r,n,o,a,c){throw new Error("Function not implemented.")},bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:null,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:null,target:null,timeStamp:0,type:"",composedPath:function(){throw new Error("Function not implemented.")},initEvent:function(e,t,s){throw new Error("Function not implemented.")},preventDefault:function(){throw new Error("Function not implemented.")},stopImmediatePropagation:function(){throw new Error("Function not implemented.")},stopPropagation:function(){throw new Error("Function not implemented.")},AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0},i),Se=i=>new Promise(e=>{setTimeout(()=>e(),i)}),me={startTime:new Date,endTime:new Date},ms=()=>{M.emit("start")},vs=()=>{M.emit("end")},Ee={texture:new Ft,gltf:new Zt,fbx:new Yt},Ne=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Ee.gltf.load(i,r=>{t(r.scene)},()=>0,r=>{s(r)});break}case"texture":{Ee.texture.load(i,r=>{t(r)},()=>0,r=>{s(r)});break}}});class x{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const r=this.queue.length;if(r!==0)return this.queue.map(([n,o])=>{t?t=t.then(()=>Ne(n,o)):t=Ne(n,o),t=t.then((a=>{s+=1,this.resources[n]={type:o,data:a},e({path:n,data:a,total:r,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}w(x,"resources",{}),w(x,"queue",[]);class ps extends EventTarget{constructor(e){super();w(this,"id");w(this,"_point",0);w(this,"_rank",-1);w(this,"_displayName","");w(this,"_icon",null);w(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,r){var n;this._point=e,this._rank=t,this._displayName=s,(!this._iconPath||this._iconPath!==r)&&(this._iconPath=r,(n=this._icon)==null||n.dispose(),this._icon=Ee.texture.load(r))}}class k{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const r=new ps(e);this.users[e]=r,r.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:r,rank:n}){var o;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(o=this.users[e])==null||o.set(r,n,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,r;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((r=this.users[t])==null?void 0:r.rank)||999999999)})}static getUser(e){return this.users[e]}}w(k,"users",{}),w(k,"_ranking",[]);const gs=({userId:i,name:e,iconUrl:t})=>{k.addUser({id:i,name:e,iconUrl:t})},xs=({userId:i,point:e,genre:t,title:s})=>{M.emit("submit",{userid:i,point:e,genre:ot[t],title:s})},Ms=({userId:i,name:e,iconUrl:t})=>{var r,n;const s=k.getUser(i);!s||k.updateUser({point:(r=s.point)!=null?r:0,rank:(n=s.rank)!=null?n:0,id:i,name:e,iconUrl:t})};class ct{static async initial(){return await Se(1e3),fs()}static async recalculate(){return await Se(1e3),at()}}class be{constructor(e,t){this.sizeX=e,this.sizeY=t}}class lt{constructor(e,t,s,r){this.x=e,this.z=t,this.isBig=s,this.category=r}}class ut{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class Ds{static jsonToInfo(e){const t=JSON.parse(e);let s=new be(0,0);const r=new Array(0),n=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new be(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;r.push(new lt(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;n.push(new ut(a.x,a.z,a.wires))}}),[s,r,n]}}class se{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=Ds.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}w(se,"circuitBasisInfo"),w(se,"circuitPartsInfos"),w(se,"circuitWiresInfos");const Bs=()=>{(async()=>{M.emit("recalculatestart"),await Cs(),M.emit("recalculateend")})()},Cs=async()=>{const i=await ct.recalculate();if(!i)return;const{ranking:e,circuit:t}=i;e.forEach(s=>{k.updateUser(s)}),k.updateRanking(),await Se(4e3),se.setCircuitInfo(t.data)},M=Rt(),ys=()=>{const i=new WebSocket(hs);i.addEventListener("message",he.bind(globalThis)),i.addEventListener("error",()=>{M.emit("disconnect")}),Ss()},Ps=()=>{M.emit("initialized")},Ss=()=>{setInterval(()=>{he(Me({data:{type:7}}))},3e4),setInterval(()=>{he(Me({data:{type:6}}))},3e5),setInterval(()=>{he(Me({data:{type:2,data:ws()}}))},3e3)},he=i=>{const{type:e,data:t}=i.data;if(!!e)switch(i.data.type){case 0:break;case 1:{gs(t);break}case 2:{xs(t);break}case 3:break;case 4:{Ms(t);break}case 5:{ms();break}case 6:{vs();break}case 7:{Bs();break}}};let Re="";const dt=()=>Re,Es=i=>{Re=i},bs=()=>{Re=""};var Is="data:image/png;base64,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",zs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Gs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",ht="/Visualizer/assets/recalculating.60ffccdf.glb",At="/Visualizer/assets/monitor.894de1ca.glb",ks="/Visualizer/assets/face.e8cae3d3.png",Ie="/Visualizer/assets/cpu.57abf837.glb",wt="/Visualizer/assets/graphicBoard.df969daf.glb",ft="/Visualizer/assets/hdd.57193f05.glb",mt="/Visualizer/assets/memory.4bfe027c.glb",vt="/Visualizer/assets/powerSupply.2ca11cfa.glb",pt="/Visualizer/assets/tipSet.f2956ffc.glb",gt="/Visualizer/assets/audio.5e239d55.glb",xt="/Visualizer/assets/condenser.07eb820d.glb",Mt="/Visualizer/assets/ports.6ad72da3.glb",Dt="/Visualizer/assets/ssd.523d4501.glb",ze="/Visualizer/assets/symbols.3d122568.glb";const Qs=()=>{x.addGLTF(ht),x.addGLTF(At),x.addTexture(ks),x.addTexture(Ye),x.addGLTF(Ie),x.addGLTF(wt),x.addGLTF(ft),x.addGLTF(mt),x.addGLTF(vt),x.addGLTF(pt),x.addGLTF(gt),x.addGLTF(xt),x.addGLTF(Mt),x.addGLTF(Dt),x.addGLTF(ze)},Ts=({width:i,height:e,loadedHandler:t})=>{const[s,r]=f.exports.useState(""),[n,o]=f.exports.useState(0),[a,c]=f.exports.useState({textures:[],index:-1});return f.exports.useEffect(()=>{(async()=>{Qs(),await x.load(({path:h,total:T,count:H})=>{r(h),o(H/T)}),t()})();const A=new K(Is);c({index:0,textures:[new B(A,new E(64*0,0,64,64)),new B(A,new E(64*1,0,64,64)),new B(A,new E(64*2,0,64,64)),new B(A,new E(64*3,0,64,64)),new B(A,new E(64*4,0,64,64)),new B(A,new E(64*5,0,64,64)),new B(A,new E(64*6,0,64,64)),new B(A,new E(64*7,0,64,64))]});const m=setInterval(()=>{c(h=>({index:(h.index+1)%h.textures.length,textures:h.textures}))},200);return()=>{clearInterval(m)}},[]),b(d.exports.Container,{position:[i/2,e/2],children:[a.index<0?null:l(d.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),l(d.exports.Text,{text:s,anchor:.5,position:[0,0],style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),l(d.exports.Sprite,{image:zs,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*n)).fill(null).map((u,A)=>l(d.exports.Sprite,{image:Gs,anchor:[0,.5],position:[(A-8)*16,0],width:16,height:32},A))})]})};var Fs="/Visualizer/assets/traP_logo.25c1c1d8.png";const Zs=new K(Fs),De=50,ue=24,Ys=({width:i,height:e,onComplete:t})=>{const[s,r]=f.exports.useState(0);return f.exports.useEffect(()=>{const n=setInterval(()=>{r(o=>o===De+ue*2?(clearInterval(n),setTimeout(()=>{t()},1),o):o+1)},1e3/ue)},[]),l(d.exports.Container,{position:[i/2,e/2],children:l(d.exports.Sprite,{texture:new B(Zs,new E(0,280*Math.min(s,De-1),1920,280)),alpha:1-Math.max(0,s-De-ue)/ue,anchor:.5,width:i*.9,height:i*.9/1920*280})})};class C{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}w(C,"startTime",-1),w(C,"_time",-1),w(C,"_deltaTime",-1),w(C,"prevTime",-1);class L extends pe{constructor(e,t){super(e,t);w(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof Q||e instanceof L)&&e.update()}))}}class Q extends tt{constructor(){super();w(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof Q||e instanceof L)&&e.update()}))}}const Rs=`
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vUv = position; 

  vWorldPos =  modelMatrix * vec4(position, 1.0);
  vViewPos = viewMatrix * vWorldPos;
  vec4 pos = projectionMatrix * vViewPos;
  vScreenPos = gl_Position = pos;
}
`,Hs=`
uniform vec3 colorA; 
uniform vec3 colorB;
uniform vec3 sunColorA;
uniform vec3 sunColorB;
uniform vec3 sunPos;
uniform float time;
uniform float radius;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vec4 sky = vec4(mix(colorA, colorB, 1.0 - pow(1.0 - smoothstep(0.0, radius, vWorldPos.y), 16.0)), 1.0);
  vec4 sun = vec4(mix(sunColorA, sunColorB, smoothstep(0.0, radius * 0.1, vWorldPos.y)), 1.0);
  vec4 sunBloom = sun * exp(-distance(vWorldPos.xyz, sunPos) / radius * 5.0);
  sun = sun * step(distance(vWorldPos.xyz, sunPos), radius * 0.3) + sunBloom;
  gl_FragColor = sky + sun;
}
`;class Ws extends L{constructor(){super(new Ht(100),new j({uniforms:{radius:{value:100},colorA:{value:new Z("#db2784")},colorB:{value:new Z("#1c1330")},sunColorA:{value:new Z("#db2784")},sunColorB:{value:new Z("#f2ca2b")},sunPos:{value:new re(-100,0,0).applyEuler(new Wt(0,0,-Math.PI*.06))},time:{value:0}},side:st,vertexShader:Rs,fragmentShader:Hs}))}update(){super.update(),this.material.uniforms.time.value=C.time}}const Us=`
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;
varying vec3 vWorldNormal;


float random (in vec2 st) {
  return fract(sin(dot(st.xy,
                       vec2(12.9898,78.233)))*
      43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
          (c - a)* u.y * (1.0 - u.x) +
          (d - b) * u.x * u.y;
}

#define OCTAVES 6
float fbm (in vec2 st) {
  // Initial values
  float value = 0.0;
  float amplitude = .5;
  float frequency = 0.;
  //
  // Loop of octaves
  for (int i = 0; i < OCTAVES; i++) {
      value += amplitude * abs(noise(st) * 2.0 - 1.0);
      st *= 2.;
      amplitude *= .5;
  }
  return value;
}

float getValue(in vec3 pos) {
  return fbm(pos.xz / 10.0) * min(pow(length(pos.xz) / 10.0, 2.0), 10.0);
}

vec3 getNorm(in vec3 pos) {
  vec2 d = vec2(0.0, 0.000001);
  vec3 center = vec3(pos.x, pos.y + getValue(pos), pos.z);
  vec3 dx = vec3(pos.x + d.y, pos.y + getValue(pos + d.yxx), pos.z) - center;
  vec3 dz = vec3(pos.x, pos.y + getValue(pos + d.xxy), pos.z + d.y) - center;
  return normalize(cross(
    normalize(dx),
    normalize(dz)
  ));
}

void main() {
  vUv = position;

  vWorldPos =  modelMatrix * vec4(position, 1.0);
  vWorldNormal = getNorm(vWorldPos.xyz);
  vViewPos = viewMatrix * (vWorldPos + vec4(0.0, getValue(vWorldPos.xyz), 0.0, 0.0));
  vec4 pos = projectionMatrix * vViewPos;
  vScreenPos = gl_Position = pos;
}
`,Vs=`
uniform vec3 colorA; 
uniform vec3 colorB; 
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;
varying vec3 vWorldNormal;

float line(in float v) {
  return pow(abs(mod(v, 1.0) * 2.0 - 1.0), 16.0);
}

void main() {
  float dark = mix(0.1, 1.0, max(max(0.0, line(vUv.x)), line(vUv.y)));
  float light = clamp(0.0, 1.0, dot(vWorldNormal, normalize(vec3(9.0, 1.0, 0.0))));
  vec3 bright = colorB;
  gl_FragColor = vec4(mix(colorA, colorB, min(length(vWorldPos.xyz) / 40.0, 1.0)) * dark + mix(colorA * 0.1, colorB, max(light, 0.0)), 1.0);
}
`;class Os extends L{constructor(){super(new oe(100,100,50,50),new j({uniforms:{colorA:{value:new Z(16729343)},colorB:{value:new Z(1127423)},time:{value:0}},vertexShader:Us,fragmentShader:Vs,side:it}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=C.time}}class Js extends Q{constructor(){super();this.add(new Os),this.add(new Ws)}start(){}update(){super.update()}}var Ls=`uniform sampler2D face;
uniform sampler2D icon;
uniform int mode;
uniform float progress;
uniform float time;
varying vec2 vUv;

#define LINE_WIDTH 0.1

float rand(vec2 co) //\u5F15\u6570\u306F\u30B7\u30FC\u30C9\u5024\u3068\u547C\u3070\u308C\u308B\u3000\u540C\u3058\u5024\u3092\u6E21\u305B\u3070\u540C\u3058\u3082\u306E\u3092\u8FD4\u3059
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec3 value = vec3(0.0);
  vec3 delta = vec3(
    (rand(floor(vUv.yy / LINE_WIDTH))  * 0.5 - 0.2) * progress,
    (rand(floor(vUv.yy / LINE_WIDTH + 10.0))  * 0.5 - 0.2) * progress,
    (rand(floor(vUv.yy / LINE_WIDTH + 20.0))  * 0.5 - 0.2) * progress
  );
  vec2 uvr = vUv + vec2(delta.r, 0.0);
  vec2 uvg = vUv + vec2(delta.g, 0.0);
  vec2 uvb = vUv + vec2(delta.b, 0.0);
  if (mode == 0) {
    value = vec3(
      texture2D(face, uvr).r,
      texture2D(face, uvg).r,
      texture2D(face, uvb).r
    );
  } else if (mode == 1) {
    value = vec3(
      texture2D(face, uvr).g,
      texture2D(face, uvg).g,
      texture2D(face, uvb).g
    );
  } else if (mode == 2) {
    value = vec3(
      texture2D(face, uvr).b,
      texture2D(face, uvg).b,
      texture2D(face, uvb).b
    );
  } else {
    value = vec3(
      texture2D(icon, uvr).r,
      texture2D(icon, uvg).g,
      texture2D(icon, uvb).b
    );
  }

  float scanline = mix(0.5, 1.0, sin(time * 4.0 + vUv.y * 60.0) * 0.5 + 0.5);
  float visnetting = mix(1.0, 0.5, distance(vUv, vec2(0.5)) * 2.0);
  vec4 icon = texture2D(icon, vUv);
  gl_FragColor = vec4(max(value + icon.rgb * 0.6, 0.1) * scanline * visnetting, 1.0);
}`,Xs=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,Ks="/Visualizer/assets/face.e8cae3d3.png";class js extends L{constructor(){super(new oe(4*.5,3*.5),new j({vertexShader:Xs,fragmentShader:Ls,uniforms:{face:{value:x.get(Ks)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1.1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||x.get(Ye)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=ne.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=C.time)}}class Be extends Q{constructor(){super();w(this,"display");w(this,"user",null);const e=x.get(At).clone();this.add(e),this.display=new js,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){const t=k.getUser(e);t?(this.user=t,this.display.setIcon(t.icon)):this.user=null}start(){}update(){super.update()}}class Ns extends Q{constructor(){super();w(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,r)=>{const n=new Be,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4,0,Math.cos(o)*4),n.scale.set(.4,.4,.4),n.lookAt(0,-2,0),this.add(n),n});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,r)=>{const n=new Be,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),n.scale.set(.15,.15,.15),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,r)=>{const n=new Be,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),n.scale.set(.1,.1,.1),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t)}start(){k.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),M.on("submit",({userid:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),M.on("recalculateend",()=>{k.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class qs extends Ut{constructor(){super(60,1,1,2e3);M.on("recalculatestart",()=>{ne.to(this.position,2,{y:-3})}),M.on("recalculateend",()=>{ne.to(this.position,2,{y:1})})}start(){this.position.set(Math.sin(C.time*.1)*4,1,Math.cos(C.time*.1)*4)}update(){this.position.set(Math.sin(C.time*.1)*4,this.position.y,Math.cos(C.time*.1)*4),this.lookAt(0,this.position.y+.5,0)}}class _s extends L{constructor(){super(new oe(1,1),new Te({color:Math.floor(Math.random()*256*256*256)}));this.rotation.set(-Math.PI/2,0,0)}to(e){const t=ne.timeline(),s=this.position;t.to(this.position,.2,{x:s.x,y:s.y+.3,z:s.z,ease:xe.easeOut}).to(this.position,.6,{x:e.x,y:e.y+.3,z:e.z,ease:xe.easeOut}).to(this.position,.2,{x:e.x,y:e.y,z:e.z,ease:xe.easeOut})}}const $s=()=>{const i=Math.floor(Math.random()*9),e=Math.floor(Math.random()*8),t=e<i?e:e+1;return[i,t]};class ei extends Q{constructor(){super();w(this,"children",[]);w(this,"animationTimeout",null);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){const s=new _s;s.position.set(t,0,e),this.add(s)}}animate(){this.exchange()}exchange(){const[e,t]=$s(),s=this.children[e];this.children[e]=this.children[t],this.children[t]=s,this.children[e].to(new re(e%3-1,0,Math.floor(e/3)-1)),this.children[t].to(new re(t%3-1,0,Math.floor(t/3)-1)),this.animationTimeout=setTimeout(this.exchange.bind(this),300)}stop(){!this.animationTimeout||(clearTimeout(this.animationTimeout),this.animationTimeout=null)}}class ti extends Q{constructor(){super();w(this,"recLabel");const e=new ei;e.scale.set(.5,.5,.5),this.add(e),this.position.set(0,-4,0),this.recLabel=x.get(ht),this.recLabel.children[0].material.transparent=!0,this.recLabel.position.set(0,.5,0),this.recLabel.scale.set(1.5,1.5,1.5),this.add(this.recLabel)}start(){M.on("recalculatestart",()=>{var e;(e=this.children[0])==null||e.animate()}),M.on("recalculateend",()=>{var e;(e=this.children[0])==null||e.stop()})}update(){super.update(),this.recLabel.rotation.y+=C.deltaTime}}const si=async()=>{const i=await ct.initial();i.users.forEach(e=>{k.addUser(e)}),k.updateRanking(),me.startTime=new Date(i.startTime),me.endTime=new Date(i.endTime)};class ii{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,r)=>{this.wires[r]=new ni(r)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const r=s.getWirePointsInt(e,t);this.wirePoints.forEach((n,o)=>{this.wirePoints[o]=r[o]==1}),this.wires.forEach(n=>{n.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class ri{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMax=2,this.counterMax=2,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class ni{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let r=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let n=0;n<3;n++){const o=t[n];if(this.canTo[o]!=-1&&o!=e){r=this.canTo[o];break}}return this.cantTo(),r==-1?(this.from=-1,-1):(this.to=r,r)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,r=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){r++;continue}if(a==this.from){s=r;continue}const c=this.canTo.findIndex(u=>u==a);c!=-1&&(t[c]=r)}const n=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?n[a]=o:n[a]=-1}),this.canTo=n}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const Ge=class{constructor(i,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=i,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.cells[t*i+s]=new ii(s,t)}putParts(i,e,t){if(!this.canPutParts(i,e,t))return!1;const s=t.sizeY,r=t.sizeX,n=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<r;a++){const c=e+o,u=i+a,A=this.getCell(u,c);A.setParts(a,o,t),n.push(A)}return t.setPosition(i,e),this.partsCellDict[t.id]=n,this.parts.push(t),!0}getPartsCells(i){return i.id in this.partsCellDict?this.partsCellDict[i.id]:new Array(0)}getAllPartsCells(){return this.partsCellDict}extendWires(i){const e=i.x,t=i.y;i.getActiveWirePointsIndex().forEach(r=>{let n=e,o=t;const a=r%8,c=(r-a)/8,u=new ri(c);for(;r!=-1;){const[A,m]=this.indexConvertToAroundIndex(r);n+=Ge.dx[A],o+=Ge.dy[A];const h=this.getCell(n,o);if(h==null||(u.update(m,A),r=h.setWire(u),r==-1))break}})}convertToCircuitInfos(){const i=new be(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const r=new Array(0);s.getAllWires().forEach(n=>{n.isEmpty()||(n.isHole()?r.push([n.ind,n.to]):r.push([n.from,n.to]))}),r.length!=0&&t.push(new ut(s.x,s.y,r))}),this.parts.forEach(s=>{const[r,n]=s.getPosition();e.push(new lt(r,n,s.isBig,s.problemCategory))}),[i,e,t]}canPutParts(i,e,t){const s=t.sizeY,r=t.sizeX;for(let n=0;n<s;n++)for(let o=0;o<r;o++){const a=e+n,c=i+o,u=this.getCell(c,a);if(u==null)return!1;if(u.isParts())return!1}return!0}getCell(i,e){if(0<=e&&e<this.sizeY&&0<=i&&i<this.sizeX)return this.cells[e*this.sizeX+i]}indexConvertToAroundIndex(i){const e=i%8,t=(i-e)/8,r=((t+2)%4+1)*8-e-1;return[t,r]}};let ve=Ge;ve.dy=[1,0,-1,0];ve.dx=[0,1,0,-1];const V=class extends Q{constructor(e){super();e.forEach(t=>{const s=this.createWireGeometry(t);this.add(new pe(s,new Te({color:0})))})}start(){}update(){super.update()}createWireGeometry(e){let t=new Vt;const s=1,r=.25,n=.5,o=.25,a=16,[c,u]=e;if(u==-1){const A=s*n/8/2,m=s*o/8/2,h=new Ot(m,A,a);h.rotateX(-Math.PI/2);let[T,H]=this.wireIndexToPosition(c,s);const q=(c-c%8)/8;q==0||q==2?H-=Math.sign(H)*(A-m):T-=Math.sign(T)*(A-m);const ae=h.attributes.position.count;for(let p=0;p<ae;p++){const P=h.attributes.position.getX(p),D=h.attributes.position.getZ(p);h.attributes.position.setXYZ(p,P+T,0,D+H)}t=h}else{const[A,m]=this.wireIndexToPositionPair(c,s,r),[h,T]=this.wireIndexToPositionPair(u,s,r),H=new Float32Array([A[0],0,A[1],m[0],0,m[1],h[0],0,h[1],h[0],0,h[1],T[0],0,T[1],A[0],0,A[1]]);t.setAttribute("position",new Jt(H,3))}return t}wireIndexToPosition(e,t=1){const s=e%8,r=(e-s)/8,n=t/8,o=n*s-n*7/2,a=ve.dx[r]/2+V.sx[r]*o,c=ve.dy[r]/2+V.sy[r]*o;return[a,c]}wireIndexToPositionPair(e,t=1,s=.5){const r=e%8,n=(e-r)/8,o=t/8,[a,c]=this.wireIndexToPosition(e,t),u=[a-V.sx[n]*s*o/2,c-V.sy[n]*s*o/2],A=[a+V.sx[n]*s*o/2,c+V.sy[n]*s*o/2];return[u,A]}};let Ae=V;w(Ae,"sx",[1,0,-1,0]),w(Ae,"sy",[0,-1,0,1]);class ie{}w(ie,"cpuPath",Ie),w(ie,"partsPath",{None:Ie,Reversing:wt,Pwn:ft,PPC:mt,Crypto:vt,Shell:pt,Forensics:gt,Web:xt,OSINT:Mt,Misc:Dt}),w(ie,"partsBigPath",{None:"",Reversing:"",Pwn:"",PPC:"",Crypto:"",Shell:"",Forensics:"",Web:"",OSINT:"",Misc:""});const oi=`
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vUv = position; 

  vWorldPos =  modelMatrix * vec4(position, 1.0);
  vViewPos = modelViewMatrix * vec4(position, 1.0);
  vec4 pos = projectionMatrix * vViewPos;
  vScreenPos = gl_Position = pos;
}
`,ai=`
uniform vec3 colorA; 
uniform vec3 colorB; 
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  float dark = mix(0.7, 1.0, step(0.0, sin(vScreenPos.y / vScreenPos.w * 300.0 + time * 20.0)));
  float alpha = mix(0.8, 1.0, step(0.05, mod(vScreenPos.y / vScreenPos.w + time * 10000.0, 1.0)));
  gl_FragColor = vec4(colorA * dark, alpha * 0.7);
}
`,ci=`
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;
varying vec3 vNormal;

void main() {
  vUv = position; 
  vNormal = normal;

  vWorldPos = modelMatrix * vec4(position + normal * 0.03, 1.0);
  vViewPos = viewMatrix * vWorldPos;
  vScreenPos = projectionMatrix * vViewPos;
  gl_Position = vScreenPos;
}
`,li=`
uniform vec3 colorA; 
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;
varying vec3 vNormal;

void main() {
  float dark = mix(0.5, 0.7, step(0.0, sin(vScreenPos.y / vScreenPos.w * 300.0 + time * 20.0)));
  float alpha = mix(0.8, 1.0, step(0.05, mod(vScreenPos.y / vScreenPos.w + time * 10000.0, 1.0)));
  gl_FragColor = vec4(colorA * dark, alpha * 0.7);
}
`,ui=i=>new j({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ai,vertexShader:oi,transparent:!0}),di=i=>new j({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:li,vertexShader:ci,transparent:!0,side:st}),qe=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[ui(e),di(e)]};class hi extends Q{constructor(){super();w(this,"app");w(this,"texture");w(this,"nameText");w(this,"titleText");w(this,"needsUpdate",!1);const e=1024,t=48;this.app=new Lt({width:e,height:t,autoStart:!1,backgroundAlpha:0});const s=new Y({dropShadowAngle:6.7,dropShadowDistance:3,fill:"red",fontSize:20,lineJoin:"round",stroke:"#8a0000",strokeThickness:2});this.nameText=new Xe("string",s),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new Xe("string",s.clone()),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const r=new pe(new oe(e,t),new Te({map:null,transparent:!0}));r.position.z=1e-4;const n=r.clone();n.rotation.y=Math.PI,n.position.z=-1e-5,this.texture=new Xt(this.app.view),r.material.map=this.texture,n.material.map=this.texture,this.add(r,n)}redraw(e,t,s){const r=s.getStyle(),n=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style.fill=r,this.nameText.style.stroke=n,this.titleText.text=t,this.titleText.style.fill=r,this.titleText.style.stroke=n,this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class _e extends Q{constructor(){super();w(this,"question");w(this,"exclamation");w(this,"submissionInfo");w(this,"objects");this.objects=new tt,this.question=x.get(ze).children[0],this.exclamation=x.get(ze).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,qe(this.question,new Z(16711680)),qe(this.exclamation,new Z(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new hi),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){M.on("submit",e=>{const t=ne.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=k.getUser(e.userid))==null?void 0:s.displayName,e.title,new Z(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:le.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:le.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new Z(65280))}),t.to(this.objects.position,.15,{z:0,ease:le.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:le.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*C.deltaTime*.3,this.position.y=Math.sin(C.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=C.time,this.exclamation.material[0].uniforms.time.value=C.time,this.question.material[1].uniforms.time.value=C.time,this.exclamation.material[1].uniforms.time.value=C.time}}class Ai extends Q{constructor(){super();this.add(new _e),this.position.add(new re(0,.1,0))}start(){super.start(),M.on("recalculatestart",()=>{this.children.forEach(e=>{e instanceof _e||this.remove(e)})}),M.on("recalculateend",()=>{this.createCircuit()})}update(){super.update()}createCircuit(){const[e,t,s]=se.getCircuitInfo();console.log(e,t,s);const r=-e.sizeX/2,n=0,o=-e.sizeY/2;t.forEach(a=>{let c="";a.isBig?c=ie.partsBigPath[a.category]:c=ie.partsPath[a.category];const u=x.get(c);u.position.set(a.x+r,0+n,a.z+o),this.add(u)}),s.forEach(a=>{const c=new Ae(a.wires);c.position.set(a.x+r,0+n,a.z+o),this.add(c)});{const a=new oe(e.sizeX,e.sizeY,e.sizeX,e.sizeY);a.rotateX(-Math.PI/2);const c=new Kt({color:16777215,wireframe:!0}),u=new pe(a,c);u.position.add(new re(.5,0,.5)),this.add(u)}}}const $e={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
  `,fragmentShader:`
uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform float near;
uniform float far;
uniform float progress;

varying vec2 vUv;

float absmax(vec4 _v) {
  vec4 v = vec4(_v);
  return max(max(v.x, v.y), v.z);
}

void main() {
  vec2 d = vec2(0.001, 0.0);
  vec4 texeln = texture2D( tDiffuse, vUv - d.yx );
  vec4 texels = texture2D( tDiffuse, vUv + d.yx );
  vec4 texelw = texture2D( tDiffuse, vUv - d.xy );
  vec4 texele = texture2D( tDiffuse, vUv + d.xy );
  vec4 texel = texture2D( tDiffuse, vUv );
  vec4 depth = texture2D( tDepth, vUv );

  float edgeProgress = 1.0 - smoothstep(0.0, 0.6, progress);
  float edgeKey = step(edgeProgress, depth.r);
  vec4 edge = mix(vec4(1.0), vec4(1.0) - absmax(texeln - texels) - absmax(texelw - texele), edgeKey);
  
  float round = 0.3;
  float mainProgress = (1.0 - smoothstep(0.2, 1.0, progress)) * (1.0 + round);
  float mainKey = step(mainProgress, depth.r + depth.g * round);
  vec4 main = mix(edge, texel, mainKey);
  gl_FragColor = vec4(main.rgb, 1.0);
}
  `},et={vertexShader:`
varying vec2 vUv;
varying vec4 worldPos;
varying vec3 worldNormal;
void main() {
  vUv = uv;
  worldPos = modelMatrix * vec4(position, 1.0);
  worldNormal = normalize((modelMatrix * vec4(normal, 1.0)).xyz - (modelMatrix * vec4(vec3(0.0), 1.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
  `,fragmentShader:`
#define PI 3.14159265
varying vec4 worldPos;
varying vec3 worldNormal;
uniform float progress;
void main() {
  float r = mix(0.0, 1.0, clamp(0.0, 1.0, exp(-(worldPos.y + 1.0) / 11.0)));
  float g = atan(worldNormal.x, worldNormal.z) / PI * 0.5 + 0.5;
  g = floor(g * 6.0) / 6.0;
  gl_FragColor = vec4(r, g, 0.0, 1.0);
}
  `};class wi extends jt{constructor(e,t,s,r){super();w(this,"camera");w(this,"scene");w(this,"material");w(this,"depthMaterial");w(this,"depthTexture");w(this,"oldClearColor");w(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new Nt(s,r),this.depthMaterial=new j({uniforms:{progress:{value:0}},side:it,vertexShader:et.vertexShader,fragmentShader:et.fragmentShader}),this.material=new j({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:$e.vertexShader,fragmentShader:$e.fragmentShader}),this.oldClearColor=new Z,this.fsQuad=new qt(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const r=e.getClearAlpha(),n=e.autoClear;e.autoClear=!1,C.time*.05&&(this.depthMaterial.uniforms.progress.value=C.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,C.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(r),e.autoClear=n}}const We=class{constructor(){w(this,"renderer",null);w(this,"camera",null);w(this,"composer",null);w(this,"_tick",null);w(this,"isLoaded",!1);w(this,"isStartCalled",!1);w(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new We,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new _t({canvas:e,antialias:!0});t.setClearColor(new Z(1114129));const s=new $t(t);this.composer=s;const r=new qs,n=new es;n.add(new Js,new Ns,new ti,new Ai),ys(),M.on("start",()=>{console.log("start ctf")}),M.on("end",()=>{console.log("end ctf")}),M.on("recalculatestart",async()=>{console.log("recalculatestart")}),M.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new ts(n,r));const o=new wi(n,r,e.width,e.height);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(C.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),C.update(performance.now()),r.update(),n.children.map(c=>{(c instanceof Q||c instanceof L)&&c.update()}),s.render())},this.renderer=t,this.camera=r,si().then(()=>{this.isLoaded=!0,Ps()})}start(){this.isStartCalled=!0}};let O=We;w(O,"instance");const fi=({width:i,height:e})=>{const t=f.exports.useRef(null),[s,r]=f.exports.useState({width:i,height:e}),[n,o]=f.exports.useState(new B(new K)),[a,c]=f.exports.useState("loading");d.exports.useTick(()=>{n.update();const h=O.getInstance().tick;h&&h()}),f.exports.useEffect(()=>{O.getInstance().resize(i,e),n.update(),r({width:i,height:e})},[i,e]);const u=()=>{const h=document.createElement("canvas");document.body.appendChild(h),t.current=h,O.getInstance().setup(h),O.getInstance().resize(i,e),o(new B(K.from(h))),c("splashscreen")},A=()=>{O.getInstance().start(),c("visualizer")};return l(J,{children:(h=>h==="loading"?l(Ts,{width:i,height:e,loadedHandler:u}):h==="splashscreen"?l(Ys,{width:i,height:e,onComplete:A}):l(d.exports.Sprite,{texture:n,width:s.width,height:s.height}))(a)})},Ce=i=>("00"+i).slice(-2),mi=({x:i,y:e,width:t,height:s})=>{const[r,n]=f.exports.useState(""),[o,a]=f.exports.useState("");return d.exports.useTick(()=>{const c=new Date;if(n(`${c.getHours()}:${Ce(c.getMinutes())}:${Ce(c.getSeconds())}`),!O.getInstance().isInitialized)return;const u=Math.ceil((me.endTime.getTime()-c.getTime())/1e3/60);a(`\u6B8B\u308A: ${Math.floor(u/60)}\u6642\u9593${Ce(u%60)}\u5206`)}),b(d.exports.Container,{mask:f.exports.useMemo(()=>new rt().drawRect(i,e,t,s),[i,e,t,s]),children:[l(d.exports.Text,{text:r,anchor:.5,position:[t/2,s/2],style:new Y({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),l(d.exports.Text,{text:o,anchor:.5,position:[t/2,s/2-50],style:new Y({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},vi=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,pi=({x:i,y:e,width:t,height:s})=>l(d.exports.Container,{mask:f.exports.useMemo(()=>new rt().drawRect(i,e,t,s),[i,e,t,s]),children:l(d.exports.Text,{text:vi,anchor:0,position:[0,0],style:new Y({align:"left",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:32,fill:"#000000"})})});var gi="/Visualizer/assets/clock-icon.77140fc3.png",xi="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const ke=B.from(gi),Mi={Component:null,icon:ke,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Bt={visualizer:{Component:fi,icon:B.from(xi),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:mi,icon:ke,title:"Clock.exe",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:pi,icon:ke,title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},te=z/5,Di=({id:i,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:r,starting:n}}=f.exports.useContext(R),o=f.exports.useRef(0),a=()=>{const u=o.current;if(o.current=performance.now(),o.current-u>600)return;const A=Bt[i];s[i]||!A||r(i,A)},c=f.exports.useCallback(u=>{u.clear(),n===i&&(u.beginFill(11184895,.5),u.drawRect(0,0,z,z))},[n]);return b(d.exports.Container,{position:t,interactive:!0,click:a,children:[l(d.exports.Graphics,{draw:c}),l(d.exports.Sprite,{texture:e.icon,position:[te/2,0],width:z-te,height:z-te}),l(d.exports.Text,{text:e.title,anchor:[.5,0],position:[z/2,z-te],style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:te,fill:"#000"})})]})};var Bi="/Visualizer/assets/xp.3ff07b20.jpg";const ye=12,Ci=()=>{const{width:i,height:e}=f.exports.useContext(R),t=Math.max(1,Math.floor((e-G-(z+ye))/z));return b(J,{children:[l(d.exports.Sprite,{image:Bi,anchor:0,x:0,y:0,width:i,height:e-G}),l(d.exports.Container,{position:[z/2,z/2],children:Object.entries(Bt).map(([s,r],n)=>l(Di,{id:s,iconInfo:r,position:[Math.floor(n/t)*(z+ye),n%t*(z+ye)]},s))})]})},yi=(i,e,t,s)=>{const r=y,n=16,o=[0,0],a=[0,0];let c="none";const u={x:0,y:0};let A=!1,m="pointer",h={x:0,y:0,width:0,height:0};return{mouseDownHandler:p=>P=>{u.x=P.data.global.x,u.y=P.data.global.y,p.fullscreen?h={x:0,y:0,width:t,height:s-G}:h=p.rect,e.focus(i),!(o[0]===0&&o[1]===0&&u.y-h.y>r)&&(a[0]=o[0],a[1]=o[1],c=o[0]===0&&o[1]===0?"move":"scale",e.update(i,S(g({},p),{rect:h,fullscreen:!1})))},mouseMoveHandler:p=>P=>{if(c!=="none")if(c==="move")m="grabbing",e.update(i,S(g({},p),{rect:{x:h.x+P.offsetX-u.x,y:h.y+P.offsetY-u.y,width:p.rect.width,height:p.rect.height}}));else{const D=g({},h),_=200,$=200;a[0]===1?D.width=Math.max(_,h.width-u.x+P.offsetX):a[0]===-1&&(D.width=Math.max(_,u.x+h.width-P.offsetX),D.x=Math.min(h.x+h.width-_,h.x-u.x+P.offsetX)),a[1]===1?D.height=Math.max($,h.height-u.y+P.offsetY):a[1]===-1&&(D.height=Math.max($,u.y+h.height-P.offsetY),D.y=Math.min(h.y+h.height-$,h.y-u.y+P.offsetY)),D.width=Math.max(200,D.width),D.height=Math.max(y,D.height),e.update(i,S(g({},p),{rect:D}))}},mouseUpHandler:()=>()=>{c="none"},cursorMouseMoveHandler:p=>P=>{const D=p.fullscreen?{x:0,y:0,width:t,height:s-G}:p.rect;P.data.global.x-D.x<n?o[0]=-1:D.x+D.width-P.data.global.x<n?o[0]=1:o[0]=0,P.data.global.y-D.y<n?o[1]=-1:D.y+D.height-P.data.global.y<n?o[1]=1:o[1]=0,o[0]*o[1]===1?m="nwse-resize":o[0]*o[1]===-1?m="nesw-resize":o[0]!==0?m="ew-resize":o[1]!==0?m="ns-resize":P.data.global.y-D.y<r?m="grab":m="default"},mouseOverHandler:()=>{A=!0},mouseOutHandler:()=>{A=!1},getCursor:()=>A?m:""}};var Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAASCAYAAAANKtEjAAAAAXNSR0IArs4c6QAAAKxJREFUaIHt2cENhSAQhOHZ138rVmMDdvK8GRCJEb2w838XMe4aJJmIMdZl++upkKIYH4eLsSRFlCfVpdt7SaGyvVv/tr+ab10w1h9t/dv+Xn3T31nv2+e96E/u98VNfJYL2XwSAGBWBADWCACsDQWAPT+y4A0AawQA1ggArOUJwAwfJhPM0eknmJQpAMAAAgBrBADWCIA5rx1/iwDAGgGANQIAawTAjPue/2wHUxID2pDayCwAAAAASUVORK5CYII=",Pi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAASCAYAAAANKtEjAAAAAXNSR0IArs4c6QAAAIRJREFUaIHt0zEOg0AMRUE7R4+4N2kSCcECISko/kyD5HXBrvR6ek5z/aG7N9/hrLqqz2df7S/ORrOr+5tZve+wmh2d7c4+9/pxf/Q2V/ePZuked/8A3EkARBMA0QRANAEQTQBEEwDRBEA0ARBNAEQTANEEQDQBEE0ARBMA0QRANAEQ7QXZOwNyd1T76wAAAABJRU5ErkJggg==";const yt=({width:i,height:e,bgColor:t=16777215})=>{const s=f.exports.useCallback(r=>{r.clear(),r.beginFill(t),r.drawRect(0,0,i,e),r.endFill()},[i,e]);return l(d.exports.Graphics,{draw:s})};var Si="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const W=new K(Si),U={topLeft:new B(W,new E(0,0,6,26)),top:new B(W,new E(6,0,3,26)),topRight:new B(W,new E(9,0,6,26)),right:new B(W,new E(9,26,6,3)),bottomRight:new B(W,new E(9,29,6,6)),bottom:new B(W,new E(6,29,3,6)),bottomLeft:new B(W,new E(0,29,6,6)),left:new B(W,new E(0,26,6,3))},Ei=({width:i,height:e})=>b(J,{children:[l(d.exports.Sprite,{texture:U.topLeft,position:[0,0],width:v,height:y}),l(d.exports.Sprite,{texture:U.top,position:[v,0],width:i-v*2,height:y}),l(d.exports.Sprite,{texture:U.topRight,position:[i-v,0],width:v,height:y}),l(d.exports.Sprite,{texture:U.right,position:[i-v,y],width:v,height:e-y-v}),l(d.exports.Sprite,{texture:U.bottomRight,position:[i-v,e-v],width:v,height:v}),l(d.exports.Sprite,{texture:U.bottom,position:[v,e-v],width:i-v*2,height:v}),l(d.exports.Sprite,{texture:U.bottomLeft,position:[0,e-v],width:v,height:v}),l(d.exports.Sprite,{texture:U.left,position:[0,y],width:v,height:e-y-v})]});var bi="/Visualizer/assets/close.d415dcd5.png",Ii="/Visualizer/assets/fullscreen.f7ccf43f.png",zi="data:image/png;base64,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";const F=()=>(y-de*2)*.9,Gi=({onKill:i,onMinimize:e,onMaximize:t})=>{const s=[];let r=0;return i&&(s.push(l(d.exports.Sprite,{anchor:[1,.5],image:bi,width:F(),height:F(),position:[-r*F(),0],interactive:!0,click:i},"kill")),r++),t&&(s.push(l(d.exports.Sprite,{anchor:[1,.5],image:Ii,width:F(),height:F(),position:[-r*F(),0],interactive:!0,click:t},"maximize")),r++),e&&(s.push(l(d.exports.Sprite,{anchor:[1,.5],image:zi,width:F(),height:F(),position:[-r*F(),0],interactive:!0,click:e},"minimize")),r++),l(J,{children:s})},Pt=i=>i-v*2,N=i=>i-y-v,He=({icon:i,width:e,height:t,title:s,isActive:r=!0,onMinimize:n,onMaximize:o,onKill:a,children:c})=>b(J,{children:[b(d.exports.Container,{position:[0,0],children:[l(Ei,{width:e,height:t}),l(d.exports.Sprite,{image:r?Ct:Pi,width:e-v*2,height:y-de*2,position:[v,de]}),i?l(d.exports.Sprite,{texture:i,width:F(),height:F(),position:[v+2,de]}):null,l(d.exports.Text,{text:s,anchor:[0,.5],position:[v+2+(i?F()+2:0),y/2],style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:y*.5,fill:"#000"})}),l(d.exports.Container,{position:[e-v,y/2],children:l(Gi,{onKill:a,onMaximize:o,onMinimize:n})})]}),b(d.exports.Container,{position:[v,y],children:[c?l(yt,{width:e-v*2,height:t-y-v}):null,c]})]}),ki=({id:i,windowInfo:e,focus:t})=>{const{width:s,height:r}=f.exports.useContext(R),{title:n,visible:o,fullscreen:a,Component:c}=e,[u,A]=f.exports.useState(!1),m=a?{x:0,y:0,width:s,height:r-G}:e.rect,{windowSettings:h}=f.exports.useContext(R),T=f.exports.useRef(e),H=()=>{h.update(i,S(g({},e),{fullscreen:!e.fullscreen}))},q=()=>{h.minimize(i)},ae=()=>{h.kill(i)};f.exports.useEffect(()=>{T.current=e},[e]);const[p,P]=f.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return f.exports.useEffect(()=>{const D=setTimeout(()=>{A(!0)},1500),{mouseDownHandler:_,mouseMoveHandler:$,mouseUpHandler:St,cursorMouseMoveHandler:Et,mouseOutHandler:bt,mouseOverHandler:It,getCursor:zt}=yi(i,h,s,r);P({mouseDownHandler:_,cursorMouseMoveHandler:Et,mouseOverHandler:It,mouseOutHandler:bt,getCursor:zt});const Ue=Gt=>{$(T.current||e)(Gt)},Ve=()=>{St()()},ee=document.getElementById("pixicanvas");if(!!ee)return ee.addEventListener("mousemove",Ue),ee.addEventListener("mouseup",Ve),()=>{clearTimeout(D),ee.removeEventListener("mousemove",Ue),ee.removeEventListener("mouseup",Ve)}},[]),d.exports.useTick(()=>{p.getCursor&&p.getCursor()&&!dt()&&Es(p.getCursor())}),l(d.exports.Container,{position:o?[m.x,m.y]:[m.x,-99999],interactive:!0,mousedown:p.mouseDownHandler?p.mouseDownHandler(e):()=>"",mousemove:p.cursorMouseMoveHandler?p.cursorMouseMoveHandler(e):()=>"",mouseover:p.mouseOverHandler?p.mouseOverHandler:()=>"",mouseout:p.mouseOutHandler?p.mouseOutHandler:()=>"",children:l(He,{width:m.width,height:m.height,title:n,icon:e.icon,isActive:t,onMinimize:q,onMaximize:H,onKill:i==="visualizer"?void 0:ae,children:u?c?l(c,{x:m.x+v,y:m.y+y,width:Pt(m.width),height:N(m.height)}):l(d.exports.Container,{}):null})})};var Qi="/Visualizer/assets/youareanidiot_black.591803b6.png",Ti="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Fi=({width:i,height:e,trans:t})=>{const s=i*.7,r=s/1576*994,n=f.exports.useRef(null),o=f.exports.useRef([0,0]),a=f.exports.useRef([0,0]);return f.exports.useEffect(()=>{const c=Math.PI*Math.random();a.current=[Math.cos(c)*90,Math.sin(c)*90]},[]),d.exports.useTick(c=>{if(!n.current||!o.current||!a.current)return;a.current[1]+=98*c/30;const u=[o.current[0]+a.current[0]*c/30,o.current[1]+a.current[1]*c/30];u[0]<0?(u[0]=0,a.current[0]*=-1):u[0]>i-s?(u[0]=i-s,a.current[0]*=-1):u[1]>Math.max(1,e-r)&&(u[1]=Math.max(1,e-r),a.current[1]*=-1),o.current=u,n.current.position.set(u[0],u[1])}),l(d.exports.Container,{ref:n,children:l(He,{width:s,height:r,title:"Hahahahahaha",children:l(d.exports.Sprite,{image:t?Qi:Ti,width:Pt(s),height:N(r)})})})},Zi=({width:i,height:e})=>{const[t,s]=f.exports.useState(!1);return d.exports.useTick(()=>{const r=performance.now();s(Math.floor(r/500)%2==0)}),l(J,{children:new Array(10).fill(null).map((r,n)=>l(Fi,{width:i,height:e,index:n,trans:t},n))})},Yi=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s,starting:r}}=f.exports.useContext(R);d.exports.useTick(()=>{document.body.style.cursor=r?"wait":dt()||"default",bs()});const[n,o]=f.exports.useState(!1);return f.exports.useEffect(()=>{const a=()=>{const u=new Date().getTime();me.endTime.getTime()<u&&o(!0)},c=()=>{o(!0)};return M.on("initialized",a),M.on("end",c),()=>{M.off("initialized",a),M.off("end",c)}},[]),b(J,{children:[l(Ci,{}),s.map((a,c)=>l(ki,{windowInfo:t[a]||Mi,id:a,focus:c===s.length-1},a)),n?l(Zi,{width:i,height:e}):null]})};var Ri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFnUlEQVR4Ae3YsXFCURAEQUInDqWgIIhAMX2VEtiSMd61gfWqMLg2Znm9vz6Pj9+AAQYYYIABBgoDr+JLfAeMDDDAAAMMMPBnQFj4x8Y/VgwwwAADDGQGhAVMGSZrxVphgAEGGBAWwkJYMMAAAwwwkBkQFjBlmCwVS4UBBhhgQFgIC2HBAAMMMMBAZkBYwJRhslQsFQYYYICBf4fF98/z+PgNGGCAAQYYYGAZEBaCSTAywAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBkQFjBlmKyRG2vEnd2ZAQaWAWEhLIQFAwwwwAADmQFhAVOGaRWsNwuHAQYYuGFAWAgLYcEAAwwwwEBmQFjAlGGyRm6sEXd2ZwYYWAaEhbAQFgwwwAADDGQGhAVMGaZVsN4sHAYYYOCGAWEhLIQFAwwwwAADmQFhAVOGyRq5sUbc2Z0ZYGAZEBbCQlgwwAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBn4BbHYyZnBHIeHAAAAAElFTkSuQmCC",Hi="data:image/png;base64,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";const Wi=({id:i,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:r,minimize:n}}=f.exports.useContext(R),o=t[i];if(!o)return l(J,{children:null});const{title:a,visible:c}=o,u=f.exports.useMemo(()=>new B(new K(Ri)),[]),A=f.exports.useMemo(()=>new B(new K(Hi)),[]);return b(d.exports.Container,{position:[e*Ke,G/2],interactive:!0,click:()=>s===i?n(i):r(i),children:[l(d.exports.Sprite,{width:Ke*.9,height:G*.9,texture:c?u:A,anchor:[0,.5],position:[0,0]}),l(d.exports.Sprite,{width:G*.6,height:G*.6,texture:o.icon,anchor:[0,.5],position:[7,0]}),l(d.exports.Text,{text:a,anchor:[0,.5],position:[14+G*.6,0],style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:G*.5*.8,fill:"#000"})})]})},Ui=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=f.exports.useContext(R);return b(d.exports.Container,{position:[0,e-G],children:[l(d.exports.Sprite,{image:Ct,width:i,height:G,anchor:0,position:[0,0]}),l(d.exports.Container,{position:[200,0],children:t.map((s,r)=>l(Wi,{id:s,index:r},s))})]})};var Vi=`// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec2 dimensions;

#define PI 3.14159265
const float viewAngle = PI / 7.0;
const float viewAngleCos = 0.5 / tan(viewAngle / 2.0);
vec2 lensDistortion(vec2 vUv, float colorScale) {
  float d = distance(vUv, vec2(0.5)) * colorScale;
  vec2 dir = normalize(vUv - vec2(0.5));
  return vec2(0.5) + tan(d * viewAngle) * viewAngleCos * dir;
}

vec4 getColor(vec2 uv) {
  if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return vec4(0.0, 0.0, 0.0, 1.0);
  return texture2D(uSampler, uv * dimensions / filterArea.xy);
}

void main (void) {
  vec2 uv = vTextureCoord * filterArea.xy / dimensions;
  vec2 uvr = lensDistortion(uv, 1.0);
  vec2 uvg = lensDistortion(uv, 1.0);
  vec2 uvb = lensDistortion(uv, 1.0);
  
  gl_FragColor = vec4(
    getColor(uvr).r,
    getColor(uvg).g,
    getColor(uvb).b,
    1.0
  );
}`;class Oi extends Fe{constructor(){super(void 0,Vi,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var Ji=`// lens distortion https://www.shadertoy.com/view/4lSGRw

precision mediump float;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

#define PI 3.14159265

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main (void) {
  vec2 uv = vTextureCoord * filterArea.xy / dimensions;
  float visnetting = mix(1.0, 0.7, smoothstep(0.3, 0.6, distance(uv, vec2(0.5))));
  gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(vec3(visnetting), 1.0);
}`;class Li extends Fe{constructor(){super(void 0,Ji,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var Xi=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float devicePixelRatio;
uniform vec2 lineWidth;
uniform vec2 lineSpacing;
uniform float blend;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord * devicePixelRatio;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord / devicePixelRatio;
}

vec4 getColor(vec2 index, vec2 size) {
  return texture2D(uSampler, unmapCoord(index * size));
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    float delta = mod(floor(coord.x), 2.0);
    int mode = int(mod((floor(delta * 1.5 + coord.y / 2.0)), 3.0));
    vec4 color = texture2D(uSampler, unmapCoord(floor(coord)));

    if (mode == 0) {
      gl_FragColor = mix(vec4(color.r, 0.0, 0.0, 1.0), color, blend);
    } else if (mode == 1) {
      gl_FragColor = mix(vec4(0.0, color.g, 0.0, 1.0), color, blend);
    } else if (mode == 2) {
      gl_FragColor = mix(vec4(0.0, 0.0, color.b, 1.0), color, blend);
    }
}`;class Ki extends Fe{constructor(){super(void 0,Xi,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,r)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const ji="_main_11f2u_1";var Ni={main:ji};const qi=()=>{const{width:i,height:e}=f.exports.useContext(R),[t,s]=f.exports.useState(!0),r={width:500,height:180,left:i*.5-250,top:e*.5-90};return t?b(d.exports.Container,{children:[l(yt,{bgColor:0,width:i,height:e}),l(d.exports.Container,{position:[r.left,r.top],children:b(He,{width:r.width,height:r.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[l(d.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:y*.5,fill:"#000"})}),l(d.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[N(r.width)-305,N(r.height)-5],interactive:!0,click:()=>{je(1),s(!1),fe("mousedown"),fe("mouseup"),Pe("hdd")},style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:y*.5,fill:"#000"})}),l(d.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[N(r.width)-5,N(r.height)-5],interactive:!0,click:()=>{je(0),s(!1)},style:new Y({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:y*.5,fill:"#000"})})]})})]}):null},_i=({children:i,Context:e,render:t})=>l(e.Consumer,{children:s=>t(l(e.Provider,{value:s,children:i}))}),$i=t=>{var s=t,{children:i}=s,e=Le(s,["children"]);const{width:r,height:n}=f.exports.useContext(R);return l(_i,{Context:R,render:o=>l(d.exports.Stage,S(g({width:r,height:n},e),{children:o})),children:i})},er=d.exports.withFilters(d.exports.Container,{hex:Ki,bloom:ss,colorshift:is,lensDistortion:Oi,visnetting:Li}),tr=()=>{const i=()=>{fe("mousedown")},e=()=>{fe("mouseup")},t=d.exports.useApp();return f.exports.useEffect(()=>{t.ticker.maxFPS=30},[]),l(er,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:b(d.exports.Container,{mousedown:i,mouseup:e,interactive:!0,children:[l(Ui,{}),l(Yi,{}),l(qi,{})]})})},sr=()=>l(ds,{children:l("main",{className:Ni.main,children:l($i,{id:"pixicanvas",children:l(tr,{})})})});rs.render(l(ns.StrictMode,{children:l(sr,{})}),document.getElementById("root"));
