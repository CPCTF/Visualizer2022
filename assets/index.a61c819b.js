var Ft=Object.defineProperty,Zt=Object.defineProperties;var Yt=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var De=(n,e,t)=>e in n?Ft(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,g=(n,e)=>{for(var t in e||(e={}))Je.call(e,t)&&De(n,t,e[t]);if(de)for(var t of de(e))Le.call(e,t)&&De(n,t,e[t]);return n},S=(n,e)=>Zt(n,Yt(e));var Ke=(n,e)=>{var t={};for(var s in n)Je.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&de)for(var s of de(n))e.indexOf(s)<0&&Le.call(n,s)&&(t[s]=n[s]);return t};var c=(n,e,t)=>(De(n,typeof e!="symbol"?e+"":e,t),t);import{r as m,j as Fe,T as Rt,G as Ht,F as Wt,m as Ut,B as K,a as B,R as E,b as h,c as Z,M as Me,d as nt,S as Vt,e as j,C as F,V as oe,E as Xt,f as rt,P as le,D as ot,g as ae,h as Ot,i as Ze,k as Be,l as Jt,n as Lt,o as Kt,A as jt,p as je,q as Nt,s as he,t as qt,u as _t,W as $t,v as es,w as ts,x as ss,y as is,z as ns,H as at,I as Ye,J as rs,K as os,L as as,N as cs}from"./vendor.bb89d3d6.js";const ls=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};ls();const Re=1.5,G=64*Re,Ne=200*Re,v=6*Re,fe=v/3*2,P=v/6*26,k=P*1.2;let ct=0;const qe=n=>{ct=n},ve=()=>ct;var us="/Visualizer/assets/clickup.207be81c.mp3",ds="/Visualizer/assets/clickdown.92e482ed.mp3",hs="/Visualizer/assets/hdd.670515d8.mp3";const z={mouseup:new Audio(us),mousedown:new Audio(ds),hdd:new Audio(hs)},pe=n=>{ve()!==0&&(!z[n]||(z[n].paused||(z[n].pause(),z[n].currentTime=0),z[n].volume=ve(),z[n].play()))},be=n=>{ve()!==0&&(!z[n]||(z[n].paused||(z[n].pause(),z[n].currentTime=Math.min(z[n].currentTime,5)),z[n].volume=ve(),z[n].play()))},As=()=>{const[n,e]=m.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,i)=>{e(r=>{if(r.windowSettings.starting)return r;if(!r.windowSettings.windowIndices.includes(s))return be("hdd"),setTimeout(()=>{e(d=>{const A=g({},d.windowSettings.windows);A[s]=i;const w=[...d.windowSettings.windowIndices],f=[...d.windowSettings.windowStack];return w.includes(s)||(f.push(s),w.push(s)),S(g({},d),{windowSettings:S(g({},d.windowSettings),{windows:A,windowIndices:w,windowStack:f,starting:""})})})},2e3),S(g({},r),{windowSettings:S(g({},r.windowSettings),{starting:s})});const o=g({},r.windowSettings.windows);o[s]=i;const a=[...r.windowSettings.windowIndices],l=[...r.windowSettings.windowStack];return a.includes(s)||(l.push(s),a.push(s),be("hdd")),S(g({},r),{windowSettings:S(g({},r.windowSettings),{windows:o,windowIndices:a,windowStack:l})})})},kill:s=>{e(i=>{const r=g({},i.windowSettings.windows);delete r[s];const o=i.windowSettings.windowIndices.filter(A=>A!==s),a=i.windowSettings.windowStack.filter(A=>A!==s),l=o.filter(A=>{var w;return(w=r[A])==null?void 0:w.visible}),d=l.length>0?l[l.length-1]:"";return S(g({},i),{windowSettings:S(g({},i.windowSettings),{windows:r,windowIndices:o,windowStack:a,focused:d})})})},focus:s=>{e(i=>{const r=g({},i.windowSettings.windows),o=r[s];if(!o)throw new Error("invalid id");r[s]=S(g({},o),{visible:!0});const a=i.windowSettings.windowIndices.filter(l=>l!==s);return a.push(s),S(g({},i),{windowSettings:S(g({},i.windowSettings),{windows:r,windowIndices:a,focused:s})})})},minimize:s=>{e(i=>{const r=g({},i.windowSettings.windows),o=r[s];if(!o)throw new Error("invalid id");r[s]=S(g({},o),{visible:!1});const a=i.windowSettings.windowIndices.filter(d=>{var A;return d!==s&&((A=r[d])==null?void 0:A.visible)}),l=a.length>0?a[a.length-1]:"";return S(g({},i),{windowSettings:S(g({},i.windowSettings),{windows:r,focused:l})})})}}}));return[n,()=>{e(s=>S(g({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},u=Fe.exports.jsx,I=Fe.exports.jsxs,O=Fe.exports.Fragment,Y=m.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),fs=({children:n})=>{const[e,t]=As();return m.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),u(Y.Provider,{value:e,children:n})},ws="ws://localhost:8000";class Ie{constructor(e,t){this.sizeX=e,this.sizeY=t}}class lt{constructor(e,t,s,i){this.x=e,this.z=t,this.isBig=s,this.category=i}}class ut{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class dt{static jsonToInfo(e){const t=JSON.parse(e);let s=new Ie(0,0);const i=new Array(0),r=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new Ie(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;i.push(new lt(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;r.push(new ut(a.x,a.z,a.wires))}}),[s,i,r]}static infoToJson(e,t,s){const i=new Array(0),r={class:"basis",sizeX:e.sizeX,sizeY:e.sizeY};return i.push(r),t.forEach(o=>{const a={class:"parts",x:o.x,z:o.z,isBig:o.isBig,category:o.category};i.push(a)}),s.forEach(o=>{const a={class:"wires",x:o.x,z:o.z,wires:o.wires};i.push(a)}),JSON.stringify(i)}}class ms{constructor(e,t){c(this,"x");c(this,"y");c(this,"parts");c(this,"wires");c(this,"wirePoints");this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,i)=>{this.wires[i]=new ps(i)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const i=s.getWirePointsInt(e,t);this.wirePoints.forEach((r,o)=>{this.wirePoints[o]=i[o]==1}),this.wires.forEach(r=>{r.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class vs{constructor(e){c(this,"notdir");c(this,"wireInd",0);c(this,"priority",[0,1,2]);c(this,"end",!1);c(this,"dir");c(this,"beforeDir");c(this,"counter",0);c(this,"straightCounter",0);c(this,"straightMax",2);c(this,"counterMax",2);this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class ps{constructor(e){c(this,"ind");c(this,"from");c(this,"to");c(this,"canTo");this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let i=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let r=0;r<3;r++){const o=t[r];if(this.canTo[o]!=-1&&o!=e){i=this.canTo[o];break}}return this.cantTo(),i==-1?(this.from=-1,-1):(this.to=i,i)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,i=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){i++;continue}if(a==this.from){s=i;continue}const l=this.canTo.findIndex(d=>d==a);l!=-1&&(t[l]=i)}const r=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?r[a]=o:r[a]=-1}),this.canTo=r}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const ge=class{constructor(e,t){c(this,"sizeX");c(this,"sizeY");c(this,"cells");c(this,"partsCellDict",{});c(this,"parts",new Array(0));this.sizeX=e,this.sizeY=t,this.cells=new Array(this.sizeY*this.sizeX);for(let s=0;s<t;s++)for(let i=0;i<e;i++)this.cells[s*e+i]=new ms(i,s)}putParts(e,t,s){if(!this.canPutParts(e,t,s))return!1;const i=s.sizeY,r=s.sizeX,o=new Array(0);for(let a=0;a<i;a++)for(let l=0;l<r;l++){const d=t+a,A=e+l,w=this.getCell(A,d);w.setParts(l,a,s),o.push(w)}return s.setPosition(e,t),this.partsCellDict[s.id]=o,this.parts.push(s),!0}getPartsCells(e){return e.id in this.partsCellDict?this.partsCellDict[e.id]:new Array(0)}getAllPartsCells(){return this.partsCellDict}extendWires(e){const t=e.x,s=e.y;e.getActiveWirePointsIndex().forEach(r=>{let o=t,a=s;const l=r%8,d=(r-l)/8,A=new vs(d);for(;r!=-1;){const[w,f]=this.indexConvertToAroundIndex(r);o+=ge.dx[w],a+=ge.dy[w];const b=this.getCell(o,a);if(b==null||(A.update(f,w),r=b.setWire(A),r==-1))break}})}convertToCircuitInfos(){const e=new Ie(this.sizeX,this.sizeY),t=new Array(0),s=new Array(0);return this.cells.forEach(i=>{const r=new Array(0);i.getAllWires().forEach(o=>{o.isEmpty()||(o.isHole()?r.push([o.ind,o.to]):r.push([o.from,o.to]))}),r.length!=0&&s.push(new ut(i.x,i.y,r))}),this.parts.forEach(i=>{const[r,o]=i.getPosition();t.push(new lt(r,o,i.isBig,i.problemCategory))}),[e,t,s]}canPutParts(e,t,s){const i=s.sizeY,r=s.sizeX;for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=t+o,d=e+a,A=this.getCell(d,l);if(A==null)return!1;if(A.isParts())return!1}return!0}getCell(e,t){if(0<=t&&t<this.sizeY&&0<=e&&e<this.sizeX)return this.cells[t*this.sizeX+e]}indexConvertToAroundIndex(e){const t=e%8,s=(e-t)/8,r=((s+2)%4+1)*8-t-1;return[s,r]}};let q=ge;c(q,"dy",[1,0,-1,0]),c(q,"dx",[0,1,0,-1]);const xe=class{constructor(e){c(this,"id");c(this,"isBig");c(this,"x",0);c(this,"y",0);this.isBig=e,this.id=xe.counter,xe.counter++}getWirePointsInt(e,t){return this.wirePointsInts[e+t*this.sizeX]}getPosition(){return[this.x,this.y]}setPosition(e,t){this.x=e,this.y=t}};let ce=xe;c(ce,"counter",0);class gs extends ce{constructor(e){super(e);c(this,"sizeX",1);c(this,"sizeY",1);c(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));c(this,"problemCategory","Web");this.wirePointsInts.forEach((t,s)=>this.wirePointsInts[s]=new Array(32)),this.wirePointsInts[0+0*this.sizeX]=[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]}}class xs extends ce{constructor(e){super(e);c(this,"sizeX",2);c(this,"sizeY",2);c(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));c(this,"problemCategory","None");this.wirePointsInts.forEach((t,s)=>this.wirePointsInts[s]=new Array(32)),this.wirePointsInts[0+0*this.sizeX]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],this.wirePointsInts[1+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],this.wirePointsInts[0+1*this.sizeX]=[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[1+1*this.sizeX]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}class Ms extends ce{constructor(e){super(e);c(this,"sizeX",1);c(this,"sizeY",6);c(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));c(this,"problemCategory","Reversing");this.wirePointsInts.forEach((t,s)=>this.wirePointsInts[s]=new Array(32)),this.wirePointsInts[0+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],this.wirePointsInts[1+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[2+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[3+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[4+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[5+0*this.sizeX]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]}}class Ds{static getJson(){const e=new q(50,50),t=new xs(!1),s=new gs(!1),i=new Ms(!1);e.putParts(24,24,t),e.putParts(23,23,s),e.putParts(26,23,i);const r=e.getPartsCells(t),o=e.getPartsCells(s),a=e.getPartsCells(i);r.forEach(w=>e.extendWires(w)),o.forEach(w=>e.extendWires(w)),a.forEach(w=>e.extendWires(w));const[l,d,A]=e.convertToCircuitInfos();return console.log(l),console.log(d),console.log(A),dt.infoToJson(l,d,A)}}const _e=["nanika","doreka","soreka"];var He="/Visualizer/assets/testicon.8f219171.jpg";const L=new Array(100).fill(null).map((n,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:He,point:0,rank:-1})),Bs=()=>({userid:L[Math.floor(Math.random()*L.length)].id,point:Math.random()*1e3,genre:_e[Math.floor(Math.random()*_e.length)],title:"\u30AA\u30E2\u30B7\u30ED\u554F\u984C -\u3053\u308C\u306F\u9069\u5F53\u306B\u8003\u3048\u305F\u30BF\u30A4\u30C8\u30EB-"}),ht=()=>(L.forEach(n=>{n.point+=Math.random()*1e3}),L.sort((n,e)=>n.point-e.point),L.forEach((n,e)=>{n.rank=e+1}),{ranking:L,circuit:{data:Ds.getJson()}}),Cs=()=>{const n=new Date;n.setMinutes(n.getMinutes()-5);const e=new Date;return e.setMinutes(e.getMinutes()+5),{users:L.map(({id:t,name:s,iconUrl:i})=>({id:t,name:s,iconUrl:i})),recalculate:ht(),startTime:n.toString(),endTime:e.toString()}},Ce=n=>g({data:{type:"recalculate",result:null},lastEventId:"",origin:"",ports:[],source:null,initMessageEvent:function(e,t,s,i,r,o,a,l){throw new Error("Function not implemented.")},bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:null,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:null,target:null,timeStamp:0,type:"",composedPath:function(){throw new Error("Function not implemented.")},initEvent:function(e,t,s){throw new Error("Function not implemented.")},preventDefault:function(){throw new Error("Function not implemented.")},stopImmediatePropagation:function(){throw new Error("Function not implemented.")},stopPropagation:function(){throw new Error("Function not implemented.")},AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0},n),ze=n=>new Promise(e=>{setTimeout(()=>e(),n)}),_={startTime:new Date,endTime:new Date};class At{static async initial(){return await ze(1e3),Cs()}static async recalculate(){return await ze(1e3),ht()}}const Ge={texture:new Rt,gltf:new Ht,fbx:new Wt},$e=(n,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Ge.gltf.load(n,i=>{t(i.scene)},()=>0,i=>{s(i)});break}case"texture":{Ge.texture.load(n,i=>{t(i)},()=>0,i=>{s(i)});break}}});class x{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const i=this.queue.length;if(i!==0)return this.queue.map(([r,o])=>{t?t=t.then(()=>$e(r,o)):t=$e(r,o),t=t.then((a=>{s+=1,this.resources[r]={type:o,data:a},e({path:r,data:a,total:i,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}c(x,"resources",{}),c(x,"queue",[]);class Ps extends EventTarget{constructor(e){super();c(this,"id");c(this,"_point",0);c(this,"_rank",-1);c(this,"_displayName","");c(this,"_icon",null);c(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,i){var r;this._point=e,this._rank=t,this._displayName=s,(!this._iconPath||this._iconPath!==i)&&(this._iconPath=i,(r=this._icon)==null||r.dispose(),this._icon=Ge.texture.load(i))}}class H{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const i=new Ps(e);this.users[e]=i,i.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:i,rank:r}){var o;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(o=this.users[e])==null||o.set(i,r,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,i;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((i=this.users[t])==null?void 0:i.rank)||999999999)})}static getUser(e){return this.users[e]}}c(H,"users",{}),c(H,"_ranking",[]);class ne{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=dt.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}c(ne,"circuitBasisInfo"),c(ne,"circuitPartsInfos"),c(ne,"circuitWiresInfos");const M=Ut(),ys=()=>{const n=new WebSocket(ws);n.addEventListener("message",we.bind(globalThis)),n.addEventListener("error",()=>{M.emit("disconnect")}),Es()},Ss=()=>{M.emit("initialized")},Es=()=>{setInterval(()=>{we(Ce({data:{type:"recalculate"}}))},3e4),setInterval(()=>{we(Ce({data:{type:"end"}}))},3e5),setInterval(()=>{we(Ce({data:{type:"submit",result:Bs()}}))},3e3)},we=n=>{switch(n.data.type){case"submit":{M.emit("submit",n.data.result);break}case"start":{_.startTime=new Date,M.emit("start");break}case"end":{_.endTime=new Date,M.emit("end");break}case"recalculate":{(async()=>{M.emit("recalculatestart"),await bs(),M.emit("recalculateend")})();break}}},bs=async()=>{const{ranking:n,circuit:e}=await At.recalculate();n.forEach(t=>{H.updateUser(t)}),H.updateRanking(),await ze(4e3),ne.setCircuitInfo(e.data)};let We="";const ft=()=>We,Is=n=>{We=n},zs=()=>{We=""};var Gs="data:image/png;base64,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",ks="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Ts="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",wt="/Visualizer/assets/recalculating.60ffccdf.glb",mt="/Visualizer/assets/monitor.894de1ca.glb",Qs="/Visualizer/assets/face.e8cae3d3.png",ke="/Visualizer/assets/cpu.57abf837.glb",vt="/Visualizer/assets/graphicBoard.df969daf.glb",pt="/Visualizer/assets/hdd.57193f05.glb",gt="/Visualizer/assets/memory.4bfe027c.glb",xt="/Visualizer/assets/powerSupply.2ca11cfa.glb",Mt="/Visualizer/assets/tipSet.f2956ffc.glb",Dt="/Visualizer/assets/audio.5e239d55.glb",Bt="/Visualizer/assets/condenser.07eb820d.glb",Ct="/Visualizer/assets/ports.6ad72da3.glb",Pt="/Visualizer/assets/ssd.523d4501.glb",Te="/Visualizer/assets/symbols.3d122568.glb";const Fs=()=>{x.addGLTF(wt),x.addGLTF(mt),x.addTexture(Qs),x.addTexture(He),x.addGLTF(ke),x.addGLTF(vt),x.addGLTF(pt),x.addGLTF(gt),x.addGLTF(xt),x.addGLTF(Mt),x.addGLTF(Dt),x.addGLTF(Bt),x.addGLTF(Ct),x.addGLTF(Pt),x.addGLTF(Te)},Zs=({width:n,height:e,loadedHandler:t})=>{const[s,i]=m.exports.useState(""),[r,o]=m.exports.useState(0),[a,l]=m.exports.useState({textures:[],index:-1});return m.exports.useEffect(()=>{(async()=>{Fs(),await x.load(({path:f,total:b,count:R})=>{i(f),o(R/b)}),t()})();const A=new K(Gs);l({index:0,textures:[new B(A,new E(64*0,0,64,64)),new B(A,new E(64*1,0,64,64)),new B(A,new E(64*2,0,64,64)),new B(A,new E(64*3,0,64,64)),new B(A,new E(64*4,0,64,64)),new B(A,new E(64*5,0,64,64)),new B(A,new E(64*6,0,64,64)),new B(A,new E(64*7,0,64,64))]});const w=setInterval(()=>{l(f=>({index:(f.index+1)%f.textures.length,textures:f.textures}))},200);return()=>{clearInterval(w)}},[]),I(h.exports.Container,{position:[n/2,e/2],children:[a.index<0?null:u(h.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),u(h.exports.Text,{text:s,anchor:.5,position:[0,0],style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),u(h.exports.Sprite,{image:ks,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*r)).fill(null).map((d,A)=>u(h.exports.Sprite,{image:Ts,anchor:[0,.5],position:[(A-8)*16,0],width:16,height:32},A))})]})};var Ys="/Visualizer/assets/traP_logo.25c1c1d8.png";const Rs=new K(Ys),Pe=50,Ae=24,Hs=({width:n,height:e,onComplete:t})=>{const[s,i]=m.exports.useState(0);return m.exports.useEffect(()=>{const r=setInterval(()=>{i(o=>o===Pe+Ae*2?(clearInterval(r),setTimeout(()=>{t()},1),o):o+1)},1e3/Ae)},[]),u(h.exports.Container,{position:[n/2,e/2],children:u(h.exports.Sprite,{texture:new B(Rs,new E(0,280*Math.min(s,Pe-1),1920,280)),alpha:1-Math.max(0,s-Pe-Ae)/Ae,anchor:.5,width:n*.9,height:n*.9/1920*280})})};class C{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}c(C,"startTime",-1),c(C,"_time",-1),c(C,"_deltaTime",-1),c(C,"prevTime",-1);class J extends Me{constructor(e,t){super(e,t);c(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof T||e instanceof J)&&e.update()}))}}class T extends nt{constructor(){super();c(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof T||e instanceof J)&&e.update()}))}}const Ws=`
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
`,Us=`
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
`;class Vs extends J{constructor(){super(new Vt(100),new j({uniforms:{radius:{value:100},colorA:{value:new F("#db2784")},colorB:{value:new F("#1c1330")},sunColorA:{value:new F("#db2784")},sunColorB:{value:new F("#f2ca2b")},sunPos:{value:new oe(-100,0,0).applyEuler(new Xt(0,0,-Math.PI*.06))},time:{value:0}},side:rt,vertexShader:Ws,fragmentShader:Us}))}update(){super.update(),this.material.uniforms.time.value=C.time}}const Xs=`
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
`,Os=`
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
`;class Js extends J{constructor(){super(new le(100,100,50,50),new j({uniforms:{colorA:{value:new F(16729343)},colorB:{value:new F(1127423)},time:{value:0}},vertexShader:Xs,fragmentShader:Os,side:ot}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=C.time}}class Ls extends T{constructor(){super();this.add(new Js),this.add(new Vs)}start(){}update(){super.update()}}var Ks=`uniform sampler2D face;
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
}`,js=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,Ns="/Visualizer/assets/face.e8cae3d3.png";class qs extends J{constructor(){super(new le(4*.5,3*.5),new j({vertexShader:js,fragmentShader:Ks,uniforms:{face:{value:x.get(Ns)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1.1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||x.get(He)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=ae.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=C.time)}}class ye extends T{constructor(){super();c(this,"display");c(this,"user",null);const e=x.get(mt).clone();this.add(e),this.display=new qs,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){const t=H.getUser(e);t?(this.user=t,this.display.setIcon(t.icon)):this.user=null}start(){}update(){super.update()}}class _s extends T{constructor(){super();c(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,i)=>{const r=new ye,o=i/e*Math.PI*2;return r.position.set(Math.sin(o)*4,0,Math.cos(o)*4),r.scale.set(.4,.4,.4),r.lookAt(0,-2,0),this.add(r),r});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,i)=>{const r=new ye,o=i/e*Math.PI*2;return r.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),r.scale.set(.15,.15,.15),r.lookAt(0,-2,0),this.add(r),r}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,i)=>{const r=new ye,o=i/e*Math.PI*2;return r.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),r.scale.set(.1,.1,.1),r.lookAt(0,-2,0),this.add(r),r}),this.users=this.users.concat(t)}start(){H.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),M.on("submit",({userid:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),M.on("recalculateend",()=>{H.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class $s extends Ot{constructor(){super(60,1,1,2e3);M.on("recalculatestart",()=>{ae.to(this.position,2,{y:-3})}),M.on("recalculateend",()=>{ae.to(this.position,2,{y:1})})}start(){this.position.set(Math.sin(C.time*.1)*4,1,Math.cos(C.time*.1)*4)}update(){this.position.set(Math.sin(C.time*.1)*4,this.position.y,Math.cos(C.time*.1)*4),this.lookAt(0,this.position.y+.5,0)}}class ei extends J{constructor(){super(new le(1,1),new Ze({color:Math.floor(Math.random()*256*256*256)}));this.rotation.set(-Math.PI/2,0,0)}to(e){const t=ae.timeline(),s=this.position;t.to(this.position,.2,{x:s.x,y:s.y+.3,z:s.z,ease:Be.easeOut}).to(this.position,.6,{x:e.x,y:e.y+.3,z:e.z,ease:Be.easeOut}).to(this.position,.2,{x:e.x,y:e.y,z:e.z,ease:Be.easeOut})}}const ti=()=>{const n=Math.floor(Math.random()*9),e=Math.floor(Math.random()*8),t=e<n?e:e+1;return[n,t]};class si extends T{constructor(){super();c(this,"children",[]);c(this,"animationTimeout",null);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){const s=new ei;s.position.set(t,0,e),this.add(s)}}animate(){this.exchange()}exchange(){const[e,t]=ti(),s=this.children[e];this.children[e]=this.children[t],this.children[t]=s,this.children[e].to(new oe(e%3-1,0,Math.floor(e/3)-1)),this.children[t].to(new oe(t%3-1,0,Math.floor(t/3)-1)),this.animationTimeout=setTimeout(this.exchange.bind(this),300)}stop(){!this.animationTimeout||(clearTimeout(this.animationTimeout),this.animationTimeout=null)}}class ii extends T{constructor(){super();c(this,"recLabel");const e=new si;e.scale.set(.5,.5,.5),this.add(e),this.position.set(0,-4,0),this.recLabel=x.get(wt),this.recLabel.children[0].material.transparent=!0,this.recLabel.position.set(0,.5,0),this.recLabel.scale.set(1.5,1.5,1.5),this.add(this.recLabel)}start(){M.on("recalculatestart",()=>{var e;(e=this.children[0])==null||e.animate()}),M.on("recalculateend",()=>{var e;(e=this.children[0])==null||e.stop()})}update(){super.update(),this.recLabel.rotation.y+=C.deltaTime}}const ni=async()=>{const n=await At.initial();n.users.forEach(e=>{H.addUser(e)}),H.updateRanking(),_.startTime=new Date(n.startTime),_.endTime=new Date(n.endTime)},V=class extends T{constructor(e){super();e.forEach(t=>{const s=this.createWireGeometry(t);this.add(new Me(s,new Ze({color:0})))})}start(){}update(){super.update()}createWireGeometry(e){let t=new Jt;const s=1,i=.25,r=.5,o=.25,a=16,[l,d]=e;if(d==-1){const A=s*r/8/2,w=s*o/8/2,f=new Lt(w,A,a);f.rotateX(-Math.PI/2);let[b,R]=this.wireIndexToPosition(l,s);const $=(l-l%8)/8;$==0||$==2?R-=Math.sign(R)*(A-w):b-=Math.sign(b)*(A-w);const ue=f.attributes.position.count;for(let p=0;p<ue;p++){const y=f.attributes.position.getX(p),D=f.attributes.position.getZ(p);f.attributes.position.setXYZ(p,y+b,0,D+R)}t=f}else{const[A,w]=this.wireIndexToPositionPair(l,s,i),[f,b]=this.wireIndexToPositionPair(d,s,i),R=new Float32Array([A[0],0,A[1],w[0],0,w[1],f[0],0,f[1],f[0],0,f[1],b[0],0,b[1],A[0],0,A[1]]);t.setAttribute("position",new Kt(R,3))}return t}wireIndexToPosition(e,t=1){const s=e%8,i=(e-s)/8,r=t/8,o=r*s-r*7/2,a=q.dx[i]/2+V.sx[i]*o,l=q.dy[i]/2+V.sy[i]*o;return[a,l]}wireIndexToPositionPair(e,t=1,s=.5){const i=e%8,r=(e-i)/8,o=t/8,[a,l]=this.wireIndexToPosition(e,t),d=[a-V.sx[r]*s*o/2,l-V.sy[r]*s*o/2],A=[a+V.sx[r]*s*o/2,l+V.sy[r]*s*o/2];return[d,A]}};let me=V;c(me,"sx",[1,0,-1,0]),c(me,"sy",[0,-1,0,1]);class re{}c(re,"cpuPath",ke),c(re,"partsPath",{None:ke,Reversing:vt,Pwn:pt,PPC:gt,Crypto:xt,Shell:Mt,Forensics:Dt,Web:Bt,OSINT:Ct,Misc:Pt}),c(re,"partsBigPath",{None:"",Reversing:"",Pwn:"",PPC:"",Crypto:"",Shell:"",Forensics:"",Web:"",OSINT:"",Misc:""});const ri=`
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
`,oi=`
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
`,ai=`
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
`,ci=`
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
`,li=n=>new j({uniforms:{colorA:{value:n},time:{value:0}},fragmentShader:oi,vertexShader:ri,transparent:!0}),ui=n=>new j({uniforms:{colorA:{value:n},time:{value:0}},fragmentShader:ci,vertexShader:ai,transparent:!0,side:rt}),et=(n,e)=>{const t=n.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),n.material=[li(e),ui(e)]};class di extends T{constructor(){super();c(this,"app");c(this,"texture");c(this,"nameText");c(this,"titleText");c(this,"needsUpdate",!1);const e=1024,t=48;this.app=new jt({width:e,height:t,autoStart:!1,backgroundAlpha:0});const s=new Z({dropShadowAngle:6.7,dropShadowDistance:3,fill:"red",fontSize:20,lineJoin:"round",stroke:"#8a0000",strokeThickness:2});this.nameText=new je("string",s),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new je("string",s.clone()),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const i=new Me(new le(e,t),new Ze({map:null,transparent:!0}));i.position.z=1e-4;const r=i.clone();r.rotation.y=Math.PI,r.position.z=-1e-5,this.texture=new Nt(this.app.view),i.material.map=this.texture,r.material.map=this.texture,this.add(i,r)}redraw(e,t,s){const i=s.getStyle(),r=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style.fill=i,this.nameText.style.stroke=r,this.titleText.text=t,this.titleText.style.fill=i,this.titleText.style.stroke=r,this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class tt extends T{constructor(){super();c(this,"question");c(this,"exclamation");c(this,"submissionInfo");c(this,"objects");this.objects=new nt,this.question=x.get(Te).children[0],this.exclamation=x.get(Te).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,et(this.question,new F(16711680)),et(this.exclamation,new F(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new di),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){M.on("submit",e=>{const t=ae.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=H.getUser(e.userid))==null?void 0:s.displayName,e.title,new F(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:he.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:he.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new F(65280))}),t.to(this.objects.position,.15,{z:0,ease:he.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:he.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*C.deltaTime*.3,this.position.y=Math.sin(C.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=C.time,this.exclamation.material[0].uniforms.time.value=C.time,this.question.material[1].uniforms.time.value=C.time,this.exclamation.material[1].uniforms.time.value=C.time}}class hi extends T{constructor(){super();this.add(new tt),this.position.add(new oe(0,.1,0))}start(){super.start(),M.on("recalculatestart",()=>{this.children.forEach(e=>{e instanceof tt||this.remove(e)})}),M.on("recalculateend",()=>{this.createCircuit()})}update(){super.update()}createCircuit(){const[e,t,s]=ne.getCircuitInfo();console.log(e,t,s);const i=-e.sizeX/2,r=0,o=-e.sizeY/2;t.forEach(a=>{let l="";a.isBig?l=re.partsBigPath[a.category]:l=re.partsPath[a.category];const d=x.get(l);d.position.set(a.x+i,0+r,a.z+o),this.add(d)}),s.forEach(a=>{const l=new me(a.wires);l.position.set(a.x+i,0+r,a.z+o),this.add(l)});{const a=new le(e.sizeX,e.sizeY,e.sizeX,e.sizeY);a.rotateX(-Math.PI/2);const l=new qt({color:16777215,wireframe:!0}),d=new Me(a,l);d.position.add(new oe(.5,0,.5)),this.add(d)}}}const st={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `},it={vertexShader:`
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
  `};class Ai extends _t{constructor(e,t,s,i){super();c(this,"camera");c(this,"scene");c(this,"material");c(this,"depthMaterial");c(this,"depthTexture");c(this,"oldClearColor");c(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new $t(s,i),this.depthMaterial=new j({uniforms:{progress:{value:0}},side:ot,vertexShader:it.vertexShader,fragmentShader:it.fragmentShader}),this.material=new j({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:st.vertexShader,fragmentShader:st.fragmentShader}),this.oldClearColor=new F,this.fsQuad=new es(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const i=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,C.time*.05&&(this.depthMaterial.uniforms.progress.value=C.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,C.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(i),e.autoClear=r}}const Ve=class{constructor(){c(this,"renderer",null);c(this,"camera",null);c(this,"composer",null);c(this,"_tick",null);c(this,"isLoaded",!1);c(this,"isStartCalled",!1);c(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new Ve,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new ts({canvas:e,antialias:!0});t.setClearColor(new F(1114129));const s=new ss(t);this.composer=s;const i=new $s,r=new is;r.add(new Ls,new _s,new ii,new hi),ys(),M.on("start",()=>{console.log("start ctf")}),M.on("end",()=>{console.log("end ctf")}),M.on("recalculatestart",async()=>{console.log("recalculatestart")}),M.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new ns(r,i));const o=new Ai(r,i,e.width,e.height);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(C.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),C.update(performance.now()),i.update(),r.children.map(l=>{(l instanceof T||l instanceof J)&&l.update()}),s.render())},this.renderer=t,this.camera=i,ni().then(()=>{this.isLoaded=!0,Ss()})}start(){this.isStartCalled=!0}};let X=Ve;c(X,"instance");const fi=({width:n,height:e})=>{const t=m.exports.useRef(null),[s,i]=m.exports.useState({width:n,height:e}),[r,o]=m.exports.useState(new B(new K)),[a,l]=m.exports.useState("loading");h.exports.useTick(()=>{r.update();const f=X.getInstance().tick;f&&f()}),m.exports.useEffect(()=>{X.getInstance().resize(n,e),r.update(),i({width:n,height:e})},[n,e]);const d=()=>{const f=document.createElement("canvas");document.body.appendChild(f),t.current=f,X.getInstance().setup(f),X.getInstance().resize(n,e),o(new B(K.from(f))),l("splashscreen")},A=()=>{X.getInstance().start(),l("visualizer")};return u(O,{children:(f=>f==="loading"?u(Zs,{width:n,height:e,loadedHandler:d}):f==="splashscreen"?u(Hs,{width:n,height:e,onComplete:A}):u(h.exports.Sprite,{texture:r,width:s.width,height:s.height}))(a)})},Se=n=>("00"+n).slice(-2),wi=({x:n,y:e,width:t,height:s})=>{const[i,r]=m.exports.useState(""),[o,a]=m.exports.useState("");return h.exports.useTick(()=>{const l=new Date;if(r(`${l.getHours()}:${Se(l.getMinutes())}:${Se(l.getSeconds())}`),!X.getInstance().isInitialized)return;const d=Math.ceil((_.endTime.getTime()-l.getTime())/1e3/60);a(`\u6B8B\u308A: ${Math.floor(d/60)}\u6642\u9593${Se(d%60)}\u5206`)}),I(h.exports.Container,{mask:m.exports.useMemo(()=>new at().drawRect(n,e,t,s),[n,e,t,s]),children:[u(h.exports.Text,{text:i,anchor:.5,position:[t/2,s/2],style:new Z({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),u(h.exports.Text,{text:o,anchor:.5,position:[t/2,s/2-50],style:new Z({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},mi=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,vi=({x:n,y:e,width:t,height:s})=>u(h.exports.Container,{mask:m.exports.useMemo(()=>new at().drawRect(n,e,t,s),[n,e,t,s]),children:u(h.exports.Text,{text:mi,anchor:0,position:[0,0],style:new Z({align:"left",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:32,fill:"#000000"})})});var pi="/Visualizer/assets/clock-icon.77140fc3.png",gi="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const Qe=B.from(pi),xi={Component:null,icon:Qe,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},yt={visualizer:{Component:fi,icon:B.from(gi),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:wi,icon:Qe,title:"Clock.exe",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:vi,icon:Qe,title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},ie=G/5,Mi=({id:n,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:i,starting:r}}=m.exports.useContext(Y),o=m.exports.useRef(0),a=()=>{const d=o.current;if(o.current=performance.now(),o.current-d>600)return;const A=yt[n];s[n]||!A||i(n,A)},l=m.exports.useCallback(d=>{d.clear(),r===n&&(d.beginFill(11184895,.5),d.drawRect(0,0,G,G))},[r]);return I(h.exports.Container,{position:t,interactive:!0,click:a,children:[u(h.exports.Graphics,{draw:l}),u(h.exports.Sprite,{texture:e.icon,position:[ie/2,0],width:G-ie,height:G-ie}),u(h.exports.Text,{text:e.title,anchor:[.5,0],position:[G/2,G-ie],style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:ie,fill:"#000"})})]})};var Di="/Visualizer/assets/xp.3ff07b20.jpg";const Ee=12,Bi=()=>{const{width:n,height:e}=m.exports.useContext(Y),t=Math.max(1,Math.floor((e-k-(G+Ee))/G));return I(O,{children:[u(h.exports.Sprite,{image:Di,anchor:0,x:0,y:0,width:n,height:e-k}),u(h.exports.Container,{position:[G/2,G/2],children:Object.entries(yt).map(([s,i],r)=>u(Mi,{id:s,iconInfo:i,position:[Math.floor(r/t)*(G+Ee),r%t*(G+Ee)]},s))})]})},Ci=(n,e,t,s)=>{const i=P,r=16,o=[0,0],a=[0,0];let l="none";const d={x:0,y:0};let A=!1,w="pointer",f={x:0,y:0,width:0,height:0};return{mouseDownHandler:p=>y=>{d.x=y.data.global.x,d.y=y.data.global.y,p.fullscreen?f={x:0,y:0,width:t,height:s-k}:f=p.rect,e.focus(n),!(o[0]===0&&o[1]===0&&d.y-f.y>i)&&(a[0]=o[0],a[1]=o[1],l=o[0]===0&&o[1]===0?"move":"scale",e.update(n,S(g({},p),{rect:f,fullscreen:!1})))},mouseMoveHandler:p=>y=>{if(l!=="none")if(l==="move")w="grabbing",e.update(n,S(g({},p),{rect:{x:f.x+y.offsetX-d.x,y:f.y+y.offsetY-d.y,width:p.rect.width,height:p.rect.height}}));else{const D=g({},f),ee=200,te=200;a[0]===1?D.width=Math.max(ee,f.width-d.x+y.offsetX):a[0]===-1&&(D.width=Math.max(ee,d.x+f.width-y.offsetX),D.x=Math.min(f.x+f.width-ee,f.x-d.x+y.offsetX)),a[1]===1?D.height=Math.max(te,f.height-d.y+y.offsetY):a[1]===-1&&(D.height=Math.max(te,d.y+f.height-y.offsetY),D.y=Math.min(f.y+f.height-te,f.y-d.y+y.offsetY)),D.width=Math.max(200,D.width),D.height=Math.max(P,D.height),e.update(n,S(g({},p),{rect:D}))}},mouseUpHandler:()=>()=>{l="none"},cursorMouseMoveHandler:p=>y=>{const D=p.fullscreen?{x:0,y:0,width:t,height:s-k}:p.rect;y.data.global.x-D.x<r?o[0]=-1:D.x+D.width-y.data.global.x<r?o[0]=1:o[0]=0,y.data.global.y-D.y<r?o[1]=-1:D.y+D.height-y.data.global.y<r?o[1]=1:o[1]=0,o[0]*o[1]===1?w="nwse-resize":o[0]*o[1]===-1?w="nesw-resize":o[0]!==0?w="ew-resize":o[1]!==0?w="ns-resize":y.data.global.y-D.y<i?w="grab":w="default"},mouseOverHandler:()=>{A=!0},mouseOutHandler:()=>{A=!1},getCursor:()=>A?w:""}};var St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAASCAYAAAANKtEjAAAAAXNSR0IArs4c6QAAAKxJREFUaIHt2cENhSAQhOHZ138rVmMDdvK8GRCJEb2w838XMe4aJJmIMdZl++upkKIYH4eLsSRFlCfVpdt7SaGyvVv/tr+ab10w1h9t/dv+Xn3T31nv2+e96E/u98VNfJYL2XwSAGBWBADWCACsDQWAPT+y4A0AawQA1ggArOUJwAwfJhPM0eknmJQpAMAAAgBrBADWCIA5rx1/iwDAGgGANQIAawTAjPue/2wHUxID2pDayCwAAAAASUVORK5CYII=",Pi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAASCAYAAAANKtEjAAAAAXNSR0IArs4c6QAAAIRJREFUaIHt0zEOg0AMRUE7R4+4N2kSCcECISko/kyD5HXBrvR6ek5z/aG7N9/hrLqqz2df7S/ORrOr+5tZve+wmh2d7c4+9/pxf/Q2V/ePZuked/8A3EkARBMA0QRANAEQTQBEEwDRBEA0ARBNAEQTANEEQDQBEE0ARBMA0QRANAEQ7QXZOwNyd1T76wAAAABJRU5ErkJggg==";const Et=({width:n,height:e,bgColor:t=16777215})=>{const s=m.exports.useCallback(i=>{i.clear(),i.beginFill(t),i.drawRect(0,0,n,e),i.endFill()},[n,e]);return u(h.exports.Graphics,{draw:s})};var yi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const W=new K(yi),U={topLeft:new B(W,new E(0,0,6,26)),top:new B(W,new E(6,0,3,26)),topRight:new B(W,new E(9,0,6,26)),right:new B(W,new E(9,26,6,3)),bottomRight:new B(W,new E(9,29,6,6)),bottom:new B(W,new E(6,29,3,6)),bottomLeft:new B(W,new E(0,29,6,6)),left:new B(W,new E(0,26,6,3))},Si=({width:n,height:e})=>I(O,{children:[u(h.exports.Sprite,{texture:U.topLeft,position:[0,0],width:v,height:P}),u(h.exports.Sprite,{texture:U.top,position:[v,0],width:n-v*2,height:P}),u(h.exports.Sprite,{texture:U.topRight,position:[n-v,0],width:v,height:P}),u(h.exports.Sprite,{texture:U.right,position:[n-v,P],width:v,height:e-P-v}),u(h.exports.Sprite,{texture:U.bottomRight,position:[n-v,e-v],width:v,height:v}),u(h.exports.Sprite,{texture:U.bottom,position:[v,e-v],width:n-v*2,height:v}),u(h.exports.Sprite,{texture:U.bottomLeft,position:[0,e-v],width:v,height:v}),u(h.exports.Sprite,{texture:U.left,position:[0,P],width:v,height:e-P-v})]});var Ei="/Visualizer/assets/close.d415dcd5.png",bi="/Visualizer/assets/fullscreen.f7ccf43f.png",Ii="data:image/png;base64,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";const Q=()=>(P-fe*2)*.9,zi=({onKill:n,onMinimize:e,onMaximize:t})=>{const s=[];let i=0;return n&&(s.push(u(h.exports.Sprite,{anchor:[1,.5],image:Ei,width:Q(),height:Q(),position:[-i*Q(),0],interactive:!0,click:n},"kill")),i++),t&&(s.push(u(h.exports.Sprite,{anchor:[1,.5],image:bi,width:Q(),height:Q(),position:[-i*Q(),0],interactive:!0,click:t},"maximize")),i++),e&&(s.push(u(h.exports.Sprite,{anchor:[1,.5],image:Ii,width:Q(),height:Q(),position:[-i*Q(),0],interactive:!0,click:e},"minimize")),i++),u(O,{children:s})},bt=n=>n-v*2,N=n=>n-P-v,Ue=({icon:n,width:e,height:t,title:s,isActive:i=!0,onMinimize:r,onMaximize:o,onKill:a,children:l})=>I(O,{children:[I(h.exports.Container,{position:[0,0],children:[u(Si,{width:e,height:t}),u(h.exports.Sprite,{image:i?St:Pi,width:e-v*2,height:P-fe*2,position:[v,fe]}),n?u(h.exports.Sprite,{texture:n,width:Q(),height:Q(),position:[v+2,fe]}):null,u(h.exports.Text,{text:s,anchor:[0,.5],position:[v+2+(n?Q()+2:0),P/2],style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})}),u(h.exports.Container,{position:[e-v,P/2],children:u(zi,{onKill:a,onMaximize:o,onMinimize:r})})]}),I(h.exports.Container,{position:[v,P],children:[l?u(Et,{width:e-v*2,height:t-P-v}):null,l]})]}),Gi=({id:n,windowInfo:e,focus:t})=>{const{width:s,height:i}=m.exports.useContext(Y),{title:r,visible:o,fullscreen:a,Component:l}=e,[d,A]=m.exports.useState(!1),w=a?{x:0,y:0,width:s,height:i-k}:e.rect,{windowSettings:f}=m.exports.useContext(Y),b=m.exports.useRef(e),R=()=>{f.update(n,S(g({},e),{fullscreen:!e.fullscreen}))},$=()=>{f.minimize(n)},ue=()=>{f.kill(n)};m.exports.useEffect(()=>{b.current=e},[e]);const[p,y]=m.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return m.exports.useEffect(()=>{const D=setTimeout(()=>{A(!0)},1500),{mouseDownHandler:ee,mouseMoveHandler:te,mouseUpHandler:It,cursorMouseMoveHandler:zt,mouseOutHandler:Gt,mouseOverHandler:kt,getCursor:Tt}=Ci(n,f,s,i);y({mouseDownHandler:ee,cursorMouseMoveHandler:zt,mouseOverHandler:kt,mouseOutHandler:Gt,getCursor:Tt});const Xe=Qt=>{te(b.current||e)(Qt)},Oe=()=>{It()()},se=document.getElementById("pixicanvas");if(!!se)return se.addEventListener("mousemove",Xe),se.addEventListener("mouseup",Oe),()=>{clearTimeout(D),se.removeEventListener("mousemove",Xe),se.removeEventListener("mouseup",Oe)}},[]),h.exports.useTick(()=>{p.getCursor&&p.getCursor()&&!ft()&&Is(p.getCursor())}),u(h.exports.Container,{position:o?[w.x,w.y]:[w.x,-99999],interactive:!0,mousedown:p.mouseDownHandler?p.mouseDownHandler(e):()=>"",mousemove:p.cursorMouseMoveHandler?p.cursorMouseMoveHandler(e):()=>"",mouseover:p.mouseOverHandler?p.mouseOverHandler:()=>"",mouseout:p.mouseOutHandler?p.mouseOutHandler:()=>"",children:u(Ue,{width:w.width,height:w.height,title:r,icon:e.icon,isActive:t,onMinimize:$,onMaximize:R,onKill:n==="visualizer"?void 0:ue,children:d?l?u(l,{x:w.x+v,y:w.y+P,width:bt(w.width),height:N(w.height)}):u(h.exports.Container,{}):null})})};var ki="/Visualizer/assets/youareanidiot_black.591803b6.png",Ti="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Qi=({width:n,height:e,trans:t})=>{const s=n*.7,i=s/1576*994,r=m.exports.useRef(null),o=m.exports.useRef([0,0]),a=m.exports.useRef([0,0]);return m.exports.useEffect(()=>{const l=Math.PI*Math.random();a.current=[Math.cos(l)*90,Math.sin(l)*90]},[]),h.exports.useTick(l=>{if(!r.current||!o.current||!a.current)return;a.current[1]+=98*l/30;const d=[o.current[0]+a.current[0]*l/30,o.current[1]+a.current[1]*l/30];d[0]<0?(d[0]=0,a.current[0]*=-1):d[0]>n-s?(d[0]=n-s,a.current[0]*=-1):d[1]>Math.max(1,e-i)&&(d[1]=Math.max(1,e-i),a.current[1]*=-1),o.current=d,r.current.position.set(d[0],d[1])}),u(h.exports.Container,{ref:r,children:u(Ue,{width:s,height:i,title:"Hahahahahaha",children:u(h.exports.Sprite,{image:t?ki:Ti,width:bt(s),height:N(i)})})})},Fi=({width:n,height:e})=>{const[t,s]=m.exports.useState(!1);return h.exports.useTick(()=>{const i=performance.now();s(Math.floor(i/500)%2==0)}),u(O,{children:new Array(10).fill(null).map((i,r)=>u(Qi,{width:n,height:e,index:r,trans:t},r))})},Zi=()=>{const{width:n,height:e,windowSettings:{windows:t,windowIndices:s,starting:i}}=m.exports.useContext(Y);h.exports.useTick(()=>{document.body.style.cursor=i?"wait":ft()||"default",zs()});const[r,o]=m.exports.useState(!1);return m.exports.useEffect(()=>{const a=()=>{const d=new Date().getTime();_.endTime.getTime()<d&&o(!0)},l=()=>{o(!0)};return M.on("initialized",a),M.on("end",l),()=>{M.off("initialized",a),M.off("end",l)}},[]),I(O,{children:[u(Bi,{}),s.map((a,l)=>u(Gi,{windowInfo:t[a]||xi,id:a,focus:l===s.length-1},a)),r?u(Fi,{width:n,height:e}):null]})};var Yi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFnUlEQVR4Ae3YsXFCURAEQUInDqWgIIhAMX2VEtiSMd61gfWqMLg2Znm9vz6Pj9+AAQYYYIABBgoDr+JLfAeMDDDAAAMMMPBnQFj4x8Y/VgwwwAADDGQGhAVMGSZrxVphgAEGGBAWwkJYMMAAAwwwkBkQFjBlmCwVS4UBBhhgQFgIC2HBAAMMMMBAZkBYwJRhslQsFQYYYICBf4fF98/z+PgNGGCAAQYYYGAZEBaCSTAywAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBkQFjBlmKyRG2vEnd2ZAQaWAWEhLIQFAwwwwAADmQFhAVOGaRWsNwuHAQYYuGFAWAgLYcEAAwwwwEBmQFjAlGGyRm6sEXd2ZwYYWAaEhbAQFgwwwAADDGQGhAVMGaZVsN4sHAYYYOCGAWEhLIQFAwwwwAADmQFhAVOGyRq5sUbc2Z0ZYGAZEBbCQlgwwAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBn4BbHYyZnBHIeHAAAAAElFTkSuQmCC",Ri="data:image/png;base64,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";const Hi=({id:n,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:i,minimize:r}}=m.exports.useContext(Y),o=t[n];if(!o)return u(O,{children:null});const{title:a,visible:l}=o,d=m.exports.useMemo(()=>new B(new K(Yi)),[]),A=m.exports.useMemo(()=>new B(new K(Ri)),[]);return I(h.exports.Container,{position:[e*Ne,k/2],interactive:!0,click:()=>s===n?r(n):i(n),children:[u(h.exports.Sprite,{width:Ne*.9,height:k*.9,texture:l?d:A,anchor:[0,.5],position:[0,0]}),u(h.exports.Sprite,{width:k*.6,height:k*.6,texture:o.icon,anchor:[0,.5],position:[7,0]}),u(h.exports.Text,{text:a,anchor:[0,.5],position:[14+k*.6,0],style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:k*.5*.8,fill:"#000"})})]})},Wi=()=>{const{width:n,height:e,windowSettings:{windowStack:t}}=m.exports.useContext(Y);return I(h.exports.Container,{position:[0,e-k],children:[u(h.exports.Sprite,{image:St,width:n,height:k,anchor:0,position:[0,0]}),u(h.exports.Container,{position:[200,0],children:t.map((s,i)=>u(Hi,{id:s,index:i},s))})]})};var Ui=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class Vi extends Ye{constructor(){super(void 0,Ui,{dimensions:[0,0]})}apply(e,t,s,i){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,i)}}var Xi=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class Oi extends Ye{constructor(){super(void 0,Xi,{dimensions:[0,0]})}apply(e,t,s,i){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,i)}}var Ji=`precision mediump float;

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
}`;class Li extends Ye{constructor(){super(void 0,Ji,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,i){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,i)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const Ki="_main_11f2u_1";var ji={main:Ki};const Ni=()=>{const{width:n,height:e}=m.exports.useContext(Y),[t,s]=m.exports.useState(!0),i={width:500,height:180,left:n*.5-250,top:e*.5-90};return t?I(h.exports.Container,{children:[u(Et,{bgColor:0,width:n,height:e}),u(h.exports.Container,{position:[i.left,i.top],children:I(Ue,{width:i.width,height:i.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[u(h.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})}),u(h.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[N(i.width)-305,N(i.height)-5],interactive:!0,click:()=>{qe(1),s(!1),pe("mousedown"),pe("mouseup"),be("hdd")},style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})}),u(h.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[N(i.width)-5,N(i.height)-5],interactive:!0,click:()=>{qe(0),s(!1)},style:new Z({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})})]})})]}):null},qi=({children:n,Context:e,render:t})=>u(e.Consumer,{children:s=>t(u(e.Provider,{value:s,children:n}))}),_i=t=>{var s=t,{children:n}=s,e=Ke(s,["children"]);const{width:i,height:r}=m.exports.useContext(Y);return u(qi,{Context:Y,render:o=>u(h.exports.Stage,S(g({width:i,height:r},e),{children:o})),children:n})},$i=h.exports.withFilters(h.exports.Container,{hex:Li,bloom:rs,colorshift:os,lensDistortion:Vi,visnetting:Oi}),en=()=>{const n=()=>{pe("mousedown")},e=()=>{pe("mouseup")},t=h.exports.useApp();return m.exports.useEffect(()=>{t.ticker.maxFPS=30},[]),u($i,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:I(h.exports.Container,{mousedown:n,mouseup:e,interactive:!0,children:[u(Wi,{}),u(Zi,{}),u(Ni,{})]})})},tn=()=>u(fs,{children:u("main",{className:ji.main,children:u(_i,{id:"pixicanvas",children:u(en,{})})})});as.render(u(cs.StrictMode,{children:u(tn,{})}),document.getElementById("root"));
