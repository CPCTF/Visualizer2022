var Lt=Object.defineProperty,jt=Object.defineProperties;var _t=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var Ue=(i,e,t)=>e in i?Lt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,y=(i,e)=>{for(var t in e||(e={}))at.call(e,t)&&Ue(i,t,e[t]);if(we)for(var t of we(e))ct.call(e,t)&&Ue(i,t,e[t]);return i},T=(i,e)=>jt(i,_t(e));var lt=(i,e)=>{var t={};for(var s in i)at.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&we)for(var s of we(i))e.indexOf(s)<0&&ct.call(i,s)&&(t[s]=i[s]);return t};var d=(i,e,t)=>(Ue(i,typeof e!="symbol"?e+"":e,t),t);import{r as v,j as tt,T as Ct,G as Ot,F as Yt,m as Qt,B as ve,a as I,R as F,b as h,c as O,M as pe,d as bt,S as Xt,e as re,C as E,V as L,E as Kt,f as Pt,P as Fe,D as Tt,g as Pe,h as zt,i as It,k as qt,l as Be,n as ut,U as dt,o as ht,p as Jt,q as Mt,s as Zt,t as $t,u as es,A as ts,v as ft,w as ss,x as Ae,y as is,W as rs,z as ns,H as os,I as as,J as cs,K as ls,L as Et,N as mt,O as st,Q as us,X as ds,Y as hs,Z as fs}from"./vendor.6615a397.js";const ms=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};ms();const ge=1.5,H=64*ge,vt=200*ge,x=6*ge,Ce=x/3*2,P=x/6*26,N=P*1.2,pt=20*ge;let kt=0;const gt=i=>{kt=i},Te=()=>kt;var vs="/Visualizer/assets/clickup.207be81c.mp3",ps="/Visualizer/assets/clickdown.92e482ed.mp3",gs="/Visualizer/assets/hdd.670515d8.mp3";const R={mouseup:new Audio(vs),mousedown:new Audio(ps),hdd:new Audio(gs)},ze=i=>{Te()!==0&&(!R[i]||(R[i].paused||(R[i].pause(),R[i].currentTime=0),R[i].volume=Te(),R[i].play()))},Ge=i=>{Te()!==0&&(!R[i]||(R[i].paused||(R[i].pause(),R[i].currentTime=Math.min(R[i].currentTime,5)),R[i].volume=Te(),R[i].play()))},xs=()=>{const[i,e]=v.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,r)=>{e(n=>{if(n.windowSettings.starting)return n;if(!n.windowSettings.windowIndices.includes(s))return Ge("hdd"),setTimeout(()=>{e(u=>{const f=y({},u.windowSettings.windows);f[s]=r;const p=[...u.windowSettings.windowIndices],m=[...u.windowSettings.windowStack];return p.includes(s)||(m.push(s),p.push(s)),T(y({},u),{windowSettings:T(y({},u.windowSettings),{windows:f,windowIndices:p,windowStack:m,starting:""})})})},2e3),T(y({},n),{windowSettings:T(y({},n.windowSettings),{starting:s})});const o=y({},n.windowSettings.windows);o[s]=r;const a=[...n.windowSettings.windowIndices],c=[...n.windowSettings.windowStack];return a.includes(s)||(c.push(s),a.push(s),Ge("hdd")),T(y({},n),{windowSettings:T(y({},n.windowSettings),{windows:o,windowIndices:a,windowStack:c})})})},kill:s=>{e(r=>{const n=y({},r.windowSettings.windows);delete n[s];const o=r.windowSettings.windowIndices.filter(f=>f!==s),a=r.windowSettings.windowStack.filter(f=>f!==s),c=o.filter(f=>{var p;return(p=n[f])==null?void 0:p.visible}),u=c.length>0?c[c.length-1]:"";return T(y({},r),{windowSettings:T(y({},r.windowSettings),{windows:n,windowIndices:o,windowStack:a,focused:u})})})},focus:s=>{e(r=>{const n=y({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=T(y({},o),{visible:!0});const a=r.windowSettings.windowIndices.filter(c=>c!==s);return a.push(s),T(y({},r),{windowSettings:T(y({},r.windowSettings),{windows:n,windowIndices:a,focused:s})})})},minimize:s=>{e(r=>{const n=y({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=T(y({},o),{visible:!1});const a=r.windowSettings.windowIndices.filter(u=>{var f;return u!==s&&((f=n[u])==null?void 0:f.visible)}),c=a.length>0?a[a.length-1]:"";return T(y({},r),{windowSettings:T(y({},r.windowSettings),{windows:n,focused:c})})})}}}));return[i,()=>{e(s=>T(y({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},l=tt.exports.jsx,D=tt.exports.jsxs,X=tt.exports.Fragment,Y=v.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),ws=({children:i})=>{const[e,t]=xs();return v.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),l(Y.Provider,{value:e,children:i})},As=["PPC","Web","Crypto","Binary","Pwn","Misc","Shell","Forensics","OSINT"];var it="/Visualizer/assets/testicon.8f219171.jpg";const ar=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:it,point:0,rank:-1}));const ys=i=>new Promise(e=>{setTimeout(()=>e(),i)}),Ie={startTime:new Date,endTime:new Date},Ss=!1,Cs=()=>{b.emit("start")},bs=()=>{b.emit("end")},Ve={texture:new Ct,gltf:new Ot,fbx:new Yt},xt=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Ve.gltf.load(i,r=>{t(r.scene)},()=>0,r=>{s(r)});break}case"texture":{Ve.texture.load(i,r=>{t(r)},()=>0,r=>{s(r)});break}}});class A{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const r=this.queue.length;if(r!==0)return this.queue.map(([n,o])=>{t?t=t.then(()=>xt(n,o)):t=xt(n,o),t=t.then((a=>{s+=1,this.resources[n]={type:o,data:a},e({path:n,data:a,total:r,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}d(A,"resources",{}),d(A,"queue",[]);class Ps extends EventTarget{constructor(e){super();d(this,"id");d(this,"_point",0);d(this,"_rank",-1);d(this,"_displayName","");d(this,"_icon",null);d(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,r){var n;if(this._point=e,this._rank=t,this._displayName=s,r&&(!this._iconPath||this._iconPath!==r)){const o=new URL(r).pathname;this._iconPath=o,(n=this._icon)==null||n.dispose(),this._icon=Ve.texture.load(o)}}}class W{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const r=new Ps(e);this.users[e]=r,r.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:r,rank:n}){var o;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(o=this.users[e])==null||o.set(r,n,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,r;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((r=this.users[t])==null?void 0:r.rank)||999999999)})}static getUser(e){return this.users[e]}}d(W,"users",{}),d(W,"_ranking",[]);const Ts=({userId:i,name:e,iconUrl:t})=>{W.addUser({id:i,name:e,iconUrl:t})},zs=({userId:i,point:e,genre:t,title:s})=>{b.emit("submit",{userid:i,point:e,genre:As[t],title:s})},Is=({userId:i,name:e,iconUrl:t})=>{var r,n;const s=W.getUser(i);!s||W.updateUser({point:(r=s.point)!=null?r:0,rank:(n=s.rank)!=null?n:0,id:i,name:e,iconUrl:t})},ye=i=>{if(i.status!==200)throw new Error("\u901A\u4FE1\u30A8\u30E9\u30FC");return i.json()};class Ft{static async initial(){const e=fetch("/api/users").then(ye),t=this.recalculate(),s=fetch("/api/schedule").then(ye),[r,n,o]=await Promise.all([e,t,s]);return{users:r,recalculate:n,startTime:o.starttime,endTime:o.endtime}}static async recalculate(){try{const e=fetch("./circuit.json").then(ye),t=fetch("/api/ranking").then(ye),[s,r]=await Promise.all([e,t]);return{circuit:s,ranking:r}}catch{return null}}}class Le{constructor(e,t){this.sizeX=e,this.sizeY=t}}class Dt{constructor(e,t,s,r){this.x=e,this.z=t,this.isBig=s,this.category=r}}class Ut{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class Ms{static jsonToInfo(e){const t=JSON.parse(e);let s=new Le(0,0);const r=new Array(0),n=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new Le(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;r.push(new Dt(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;n.push(new Ut(a.x,a.z,a.wires))}}),[s,r,n]}}class me{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=Ms.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}d(me,"circuitBasisInfo"),d(me,"circuitPartsInfos"),d(me,"circuitWiresInfos");const Es=()=>{(async()=>{b.emit("recalculatestart"),await ks(),b.emit("recalculateend")})()},ks=async()=>{const i=await Ft.recalculate();if(!i)return;const{ranking:e,circuit:t}=i;e.forEach(s=>{W.updateUser(s)}),W.updateRanking(),await ys(4e3),me.setCircuitInfo(JSON.stringify(t))},b=Qt(),Fs=()=>{try{const i=new WebSocket(`ws://${location.host}/ws/visualizer`);i.addEventListener("message",Us.bind(globalThis)),i.addEventListener("error",e=>{console.error(e),b.emit("disconnect")})}catch(i){console.log(i)}},Ds=()=>{b.emit("initialized")};const Us=i=>{if(!i.data)return;const{type:e,data:t}=JSON.parse(i.data);if(!!e)switch(Number(e)){case 0:break;case 1:{Ts(t);break}case 2:{zs(t);break}case 3:break;case 4:{Is(t);break}case 5:{Cs();break}case 6:{bs();break}case 7:{Es();break}}};var Bs="data:image/png;base64,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",Rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Hs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",Ns="/Visualizer/assets/recalculating.60ffccdf.glb",Bt="/Visualizer/assets/monitor.81b9fd78.glb",Ws="/Visualizer/assets/face.e8cae3d3.png",Rt="/Visualizer/assets/cpu.57abf837.glb",je="/Visualizer/assets/graphicBoard.4a06ae3d.glb",_e="/Visualizer/assets/hdd.caa7427b.glb",Oe="/Visualizer/assets/memory.83673af4.glb",Ye="/Visualizer/assets/powerSupply.4d848de2.glb",Qe="/Visualizer/assets/tipSet.fad5f9b9.glb",Xe="/Visualizer/assets/audio.3c50633a.glb",Ke="/Visualizer/assets/condenser.654b5786.glb",qe="/Visualizer/assets/ports.6ad72da3.glb",Je="/Visualizer/assets/ssd.447a4b88.glb",Ze="/Visualizer/assets/symbols.3d122568.glb",$e="/Visualizer/assets/emergency.19e4efc2.glb";const Gs=()=>{A.addGLTF(Ns),A.addGLTF(Bt),A.addTexture(Ws),A.addTexture(it),A.addGLTF(Rt),A.addGLTF(je),A.addGLTF(_e),A.addGLTF(Oe),A.addGLTF(Ye),A.addGLTF(Qe),A.addGLTF(Xe),A.addGLTF(Ke),A.addGLTF(qe),A.addGLTF(Je),A.addGLTF(Ze),A.addGLTF($e)},Vs=({width:i,height:e,loadedHandler:t})=>{const[s,r]=v.exports.useState(""),[n,o]=v.exports.useState(0),[a,c]=v.exports.useState({textures:[],index:-1});return v.exports.useEffect(()=>{(async()=>{Gs(),await A.load(({path:m,total:z,count:M})=>{r(m),o(M/z)}),t()})();const f=new ve(Bs);c({index:0,textures:[new I(f,new F(64*0,0,64,64)),new I(f,new F(64*1,0,64,64)),new I(f,new F(64*2,0,64,64)),new I(f,new F(64*3,0,64,64)),new I(f,new F(64*4,0,64,64)),new I(f,new F(64*5,0,64,64)),new I(f,new F(64*6,0,64,64)),new I(f,new F(64*7,0,64,64))]});const p=setInterval(()=>{c(m=>({index:(m.index+1)%m.textures.length,textures:m.textures}))},200);return()=>{clearInterval(p)}},[]),D(h.exports.Container,{position:[i/2,e/2],children:[a.index<0?null:l(h.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),l(h.exports.Text,{text:s,anchor:.5,position:[0,0],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),l(h.exports.Sprite,{image:Rs,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*n)).fill(null).map((u,f)=>l(h.exports.Sprite,{image:Hs,anchor:[0,.5],position:[(f-8)*16,0],width:16,height:32},f))})]})};var Ls="/Visualizer/assets/traP_logo.25c1c1d8.png";const js=new ve(Ls),Re=50,Se=24,_s=({width:i,height:e,onComplete:t})=>{const[s,r]=v.exports.useState(0);return v.exports.useEffect(()=>{const n=setInterval(()=>{r(o=>o===Re+Se*2?(clearInterval(n),setTimeout(()=>{t()},1),o):o+1)},1e3/Se)},[]),l(h.exports.Container,{position:[i/2,e/2],children:l(h.exports.Sprite,{texture:new I(js,new F(0,280*Math.min(s,Re-1),1920,280)),alpha:1-Math.max(0,s-Re-Se)/Se,anchor:.5,width:i*.9,height:i*.9/1920*280})})};class C{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}d(C,"startTime",-1),d(C,"_time",-1),d(C,"_deltaTime",-1),d(C,"prevTime",-1);class J extends pe{constructor(e,t){super(e,t);d(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof B||e instanceof J)&&e.update()}))}}class B extends bt{constructor(){super();d(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof B||e instanceof J)&&e.update()}))}}const Os=`
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
`,Ys=`
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
`;class Qs extends J{constructor(){super(new Xt(100),new re({uniforms:{radius:{value:100},colorA:{value:new E("#db2784")},colorB:{value:new E("#1c1330")},sunColorA:{value:new E("#db2784")},sunColorB:{value:new E("#f2ca2b")},sunPos:{value:new L(-100,0,0).applyEuler(new Kt(0,0,-Math.PI*.06))},time:{value:0}},side:Pt,vertexShader:Os,fragmentShader:Ys}))}update(){super.update(),this.material.uniforms.time.value=C.time}}const Xs=`
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
`,Ks=`
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
`;class qs extends J{constructor(){super(new Fe(100,100,50,50),new re({uniforms:{colorA:{value:new E(16729343)},colorB:{value:new E(1127423)},time:{value:0}},vertexShader:Xs,fragmentShader:Ks,side:Tt}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=C.time}}class Js extends B{constructor(){super();const e=new qs;e.position.setY(-1),this.add(e),this.add(new Qs)}start(){}update(){super.update()}}var Zs=`uniform sampler2D face;
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
}`,$s=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,ei="/Visualizer/assets/face.e8cae3d3.png";class ti extends J{constructor(){super(new Fe(4*.5,3*.5),new re({vertexShader:$s,fragmentShader:Zs,uniforms:{face:{value:A.get(ei)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||A.get(it)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=Pe.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=C.time)}}class He extends B{constructor(){super();d(this,"display");d(this,"user",null);const e=A.get(Bt).clone();this.add(e),this.display=new ti,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){const t=W.getUser(e);t?(this.user=t,this.display.setIcon(t.icon)):this.user=null}start(){}update(){super.update()}}class si extends B{constructor(){super();d(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,r)=>{const n=new He,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4,0,Math.cos(o)*4),n.scale.set(.4,.4,.4),n.lookAt(0,-2,0),this.add(n),n});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,r)=>{const n=new He,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),n.scale.set(.15,.15,.15),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,r)=>{const n=new He,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),n.scale.set(.1,.1,.1),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t)}start(){W.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),b.on("submit",({userid:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),b.on("recalculateend",()=>{W.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class ii extends zt{constructor(){super(60,1,1,2e3);b.on("recalculatestart",()=>{}),b.on("recalculateend",()=>{})}start(){this.position.set(0,20,0),this.lookAt(0,0,0)}update(){}}const ri=`
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
`,ni=`
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
`,oi=`
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
`,ai=`
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
`,ci=i=>new re({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ni,vertexShader:ri,transparent:!0}),li=i=>new re({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ai,vertexShader:oi,transparent:!0,side:Pt}),Me=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[ci(e),li(e)]},te=class extends B{constructor(e=0){super();d(this,"emergencyBlack");d(this,"emergencyRed");d(this,"offsetTime");d(this,"loopTime",2);var t,s;if(te.emergencyBlackGeom==null){const r=(t=A.get($e))==null?void 0:t.clone();te.emergencyBlackGeom=r.children[0].geometry}if(te.emergencyRedGeom==null){const r=(s=A.get($e))==null?void 0:s.clone();te.emergencyRedGeom=r.children[1].geometry}this.offsetTime=e,this.emergencyBlack=new pe(te.emergencyBlackGeom),this.emergencyRed=new pe(te.emergencyRedGeom),Me(this.emergencyBlack,new E(0)),Me(this.emergencyRed,new E(16711680)),this.add(this.emergencyBlack),this.add(this.emergencyRed)}start(){super.start()}update(){super.update();let e=Math.sin((C.time+this.offsetTime)/this.loopTime*Math.PI*2);e=e<0?0:e,this.scale.set(e,e,e),this.emergencyBlack.material[0].uniforms.time.value=C.time+this.offsetTime,this.emergencyRed.material[0].uniforms.time.value=C.time+this.offsetTime,this.emergencyBlack.material[1].uniforms.time.value=C.time+this.offsetTime,this.emergencyRed.material[1].uniforms.time.value=C.time+this.offsetTime}};let be=te;d(be,"emergencyBlackGeom"),d(be,"emergencyRedGeom");class ui extends B{constructor(){super();d(this,"size",30);d(this,"positionOffset",2/Math.sqrt(3));d(this,"offsetTimeUnit",.1);d(this,"emergencies",new Array(0));for(let e=0;e<this.size;e++){const t=e*(this.positionOffset*3/2)-Math.floor(this.size/2),s=e*this.offsetTimeUnit;for(let r=0;r<this.size;r++){const n=r*(Math.sqrt(3)*this.positionOffset)+(e%2==1?this.positionOffset*(Math.sqrt(3)/2):0)-Math.floor(this.size/2),o=new be(s);o.position.setX(n),o.position.setZ(t),this.emergencies.push(o),this.add(o)}}}}class Ht extends J{constructor(e){const t=e.clipBias!==void 0?e.clipBias:0,s=e.alpha!==void 0?e.alpha:1,r=e.time!==void 0?e.time:0,n=e.waterNormals!==void 0?e.waterNormals:null,o=e.sunDirection!==void 0?e.sunDirection:new L(.70707,.70707,0),a=new E(e.sunColor!==void 0?e.sunColor:16777215),c=new E(e.waterColor!==void 0?e.waterColor:8355711),u=e.eye!==void 0?e.eye:new L(0,0,0),f=e.distortionScale!==void 0?e.distortionScale:20,p=e.side!==void 0?e.side:It,m=e.fog!==void 0?e.fog:!1,z=new qt,M=new L,G=new L,Z=new L,g=new Be,S=new L(0,0,-1),w=new ut,Q=new L,K=new L,ne=new ut,ae=new Be,U=new zt,de={uniforms:dt.merge([ht.fog,ht.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Be},sunColor:{value:new E(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new E(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;
				varying vec4 mirrorCoord;
				varying vec4 worldPosition;
				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;
				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;
				varying vec4 mirrorCoord;
				varying vec4 worldPosition;
				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}
				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}
				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>
				void main() {
					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );
					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);
					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );
					float distance = length(worldToEye);
					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( 0.0 , 0.0 , 0.0 );
					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );
					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},V=new re({fragmentShader:de.fragmentShader,vertexShader:de.vertexShader,uniforms:dt.clone(de.uniforms),lights:!0,side:p,fog:m});V.uniforms.textureMatrix.value=ae,V.uniforms.alpha.value=s,V.uniforms.time.value=r,V.uniforms.normalSampler.value=n,V.uniforms.sunColor.value=a,V.uniforms.waterColor.value=c,V.uniforms.sunDirection.value=o,V.uniforms.distortionScale.value=f,V.uniforms.eye.value=u;const xe=new Fe(1e3,1e3);super(xe,V);d(this,"isWater",!0);this.onBeforeRender=function(De,ce,oe){if(G.setFromMatrixPosition(this.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld),g.extractRotation(this.matrixWorld),M.set(0,0,1),M.applyMatrix4(g),Q.subVectors(G,Z),Q.dot(M)>0)return;Q.reflect(M).negate(),Q.add(G),g.extractRotation(oe.matrixWorld),S.set(0,0,-1),S.applyMatrix4(g),S.add(Z),K.subVectors(G,S),K.reflect(M).negate(),K.add(G),U.position.copy(Q),U.up.set(0,1,0),U.up.applyMatrix4(g),U.up.reflect(M),U.lookAt(K),U.far=oe.far,U.updateMatrixWorld(),U.projectionMatrix.copy(oe.projectionMatrix),ae.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ae.multiply(U.projectionMatrix),ae.multiply(U.matrixWorldInverse),z.setFromNormalAndCoplanarPoint(M,G),z.applyMatrix4(U.matrixWorldInverse),w.set(z.normal.x,z.normal.y,z.normal.z,z.constant);const q=U.projectionMatrix;ne.x=(Math.sign(w.x)+q.elements[8])/q.elements[0],ne.y=(Math.sign(w.y)+q.elements[9])/q.elements[5],ne.z=-1,ne.w=(1+q.elements[10])/q.elements[14],w.multiplyScalar(2/w.dot(ne)),q.elements[2]=w.x,q.elements[6]=w.y,q.elements[10]=w.z+1-t,q.elements[14]=w.w,u.setFromMatrixPosition(oe.matrixWorld)}}}Ht.prototype.isWater=!0;var di="/Visualizer/assets/Water_1_M_Normal.6d782546.jpg";class hi extends B{constructor(){super();d(this,"water");const e={textureWidth:512,textureHeight:512,waterNormals:new Ct().load(di,function(t){t.wrapS=t.wrapT=Jt}),alpha:1,waterColor:4098510,distortionScale:2.7,fog:void 0,sunDirection:void 0,sunColor:void 0,clipBias:void 0,time:void 0,eye:void 0,side:It};this.water=new Ht(e),this.water.rotation.x=-Math.PI/2,this.add(this.water)}start(){super.start()}update(){super.update(),this.water.material.uniforms.time.value=C.time}}class fi extends B{constructor(){super();d(this,"startY",-2);d(this,"endY",2);d(this,"emergencyAnimation");d(this,"waterAnimation");this.emergencyAnimation=new ui,this.waterAnimation=new hi,this.add(this.emergencyAnimation),this.add(this.waterAnimation)}start(){super.start(),this.visible=!1,this.emergencyAnimation.position.y=.5,this.position.y=this.startY,b.on("recalculatestart",()=>{this.visible=!0,Pe.to(this.position,1,{y:this.endY})}),b.on("recalculateend",()=>{Pe.to(this.position,1,{y:this.startY}).eventCallback("onComplete",()=>{this.visible=!1})})}update(){super.update()}}const mi=async()=>{const i=await Ft.initial();i.users.forEach(e=>{W.addUser(e)}),W.updateRanking(),Ie.startTime=new Date(i.startTime),Ie.endTime=new Date(i.endTime)};class vi{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,r)=>{this.wires[r]=new gi(r)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const r=s.getWirePointsInt(e,t);this.wirePoints.forEach((n,o)=>{this.wirePoints[o]=r[o]==1}),this.wires.forEach(n=>{n.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class pi{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMax=4,this.counterMax=10,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class gi{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let r=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let n=0;n<3;n++){const o=t[n];if(this.canTo[o]!=-1&&o!=e){r=this.canTo[o];break}}return this.cantTo(),r==-1?(this.from=-1,-1):(this.to=r,r)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,r=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){r++;continue}if(a==this.from){s=r;continue}const c=this.canTo.findIndex(u=>u==a);c!=-1&&(t[c]=r)}const n=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?n[a]=o:n[a]=-1}),this.canTo=n}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const et=class{constructor(i,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=i,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.cells[t*i+s]=new vi(s,t)}putParts(i,e,t){if(!this.canPutParts(i,e,t))return!1;const s=t.SizeY(),r=t.SizeX(),n=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<r;a++){const c=e+o,u=i+a,f=this.getCell(u,c);f.setParts(a,o,t),n.push(f)}return t.setPosition(i,e),this.partsCellDict[t.id]=n,this.parts.push(t),!0}getPartsCells(i){return i.id in this.partsCellDict?this.partsCellDict[i.id]:new Array(0)}getAllPartsCells(){const i=new Array(0);for(const e in this.partsCellDict)i.push(this.partsCellDict[e]);return i}extendWires(i){const e=i.x,t=i.y;i.getActiveWirePointsIndex().forEach(r=>{let n=e,o=t;const a=r%8,c=(r-a)/8,u=new pi(c);for(;r!=-1;){const[f,p]=this.indexConvertToAroundIndex(r);n+=et.dx[f],o+=et.dy[f];const m=this.getCell(n,o);if(m==null||(u.update(p,f),r=m.setWire(u),r==-1))break}})}convertToCircuitInfos(){const i=new Le(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const r=new Array(0);s.getAllWires().forEach(n=>{n.isEmpty()||(n.isHole()?r.push([n.ind,n.to]):r.push([n.from,n.to]))}),r.length!=0&&t.push(new Ut(s.x,s.y,r))}),this.parts.forEach(s=>{const[r,n]=s.getPosition();e.push(new Dt(r,n,s.isBig,s.problemCategory!=null?s.problemCategory:""))}),[i,e,t]}canPutParts(i,e,t){const s=t.SizeY(),r=t.SizeX();for(let n=0;n<s;n++)for(let o=0;o<r;o++){const a=e+n,c=i+o,u=this.getCell(c,a);if(u==null)return!1;if(u.isParts())return!1}return!0}getCell(i,e){if(0<=e&&e<this.sizeY&&0<=i&&i<this.sizeX)return this.cells[e*this.sizeX+i]}indexConvertToAroundIndex(i){const e=i%8,t=(i-e)/8,r=((t+2)%4+1)*8-e-1;return[t,r]}};let Ee=et;Ee.dy=[1,0,-1,0];Ee.dx=[0,1,0,-1];const j=class extends J{constructor(e){const t=j.createWireGeometry(e);super(t,j.material)}start(){}update(){super.update()}static createWireGeometry(e){let t=new Zt;const s=1,r=.25,n=.5,o=.25,a=16,[c,u]=e;if(u==-1){const f=s*n/8/2,p=s*o/8/2,m=new $t(p,f,a);m.rotateX(-Math.PI/2);let[z,M]=this.wireIndexToPosition(c,s);const G=(c-c%8)/8;G==0||G==2?M-=Math.sign(M)*(f-p):z-=Math.sign(z)*(f-p);const Z=m.attributes.position.count;for(let g=0;g<Z;g++){const S=m.attributes.position.getX(g),w=m.attributes.position.getZ(g);m.attributes.position.setXYZ(g,S+z,0,w+M)}t=m}else{const[f,p]=j.wireIndexToPositionPair(c,s,r),[m,z]=j.wireIndexToPositionPair(u,s,r),M=new Float32Array([f[0],0,f[1],p[0],0,p[1],m[0],0,m[1],m[0],0,m[1],z[0],0,z[1],f[0],0,f[1]]);t.setAttribute("position",new es(M,3))}return t}static wireIndexToPosition(e,t=1){const s=e%8,r=(e-s)/8,n=t/8,o=n*s-n*7/2,a=Ee.dx[r]/2+j.sx[r]*o,c=Ee.dy[r]/2+j.sy[r]*o;return[a,c]}static wireIndexToPositionPair(e,t=1,s=.5){const r=e%8,n=(e-r)/8,o=t/8,[a,c]=this.wireIndexToPosition(e,t),u=[a-j.sx[n]*s*o/2,c-j.sy[n]*s*o/2],f=[a+j.sx[n]*s*o/2,c+j.sy[n]*s*o/2];return[u,f]}};let fe=j;d(fe,"sx",[1,0,-1,0]),d(fe,"sy",[0,-1,0,1]),d(fe,"material",new Mt({color:16777215}));class se{}d(se,"cpuPath",Rt),d(se,"partsPath",{PPC:Qe,Web:Oe,Crypto:Ye,Binary:_e,Pwn:qe,Misc:Xe,Shell:Je,Forensics:Ke,OSINT:je}),d(se,"partsBigPath",{PPC:Qe,Web:Oe,Crypto:Ye,Binary:_e,Pwn:qe,Misc:Xe,Shell:Je,Forensics:Ke,OSINT:je});class xi extends B{constructor(){super();d(this,"app");d(this,"texture");d(this,"nameText");d(this,"titleText");d(this,"needsUpdate",!1);const e=1024,t=48;this.app=new ts({width:e,height:t,autoStart:!1,backgroundAlpha:0}),this.nameText=new ft("string"),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new ft("string"),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const s=new pe(new Fe(e,t),new Mt({map:null,transparent:!0}));s.position.z=1e-4;const r=s.clone();r.rotation.y=Math.PI,r.position.z=-1e-5,this.texture=new ss(this.app.view),s.material.map=this.texture,r.material.map=this.texture,this.add(s,r)}redraw(e,t,s){const r=s.getStyle(),n=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style=new O({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:r,fontSize:20,lineJoin:"round",stroke:n,strokeThickness:2}),this.nameText.style.fill=r,this.nameText.style.stroke=n,this.titleText.text=t,this.titleText.style=new O({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:r,fontSize:20,lineJoin:"round",stroke:n,strokeThickness:2}),this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class wi extends B{constructor(){super();d(this,"question");d(this,"exclamation");d(this,"submissionInfo");d(this,"objects");this.objects=new bt,this.question=A.get(Ze).children[0],this.exclamation=A.get(Ze).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,Me(this.question,new E(16711680)),Me(this.exclamation,new E(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new xi),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){b.on("submit",e=>{const t=Pe.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=W.getUser(e.userid))==null?void 0:s.displayName,e.title,new E(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:Ae.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:Ae.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new E(65280))}),t.to(this.objects.position,.15,{z:0,ease:Ae.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:Ae.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*C.deltaTime*.3,this.position.y=Math.sin(C.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=C.time,this.exclamation.material[0].uniforms.time.value=C.time,this.question.material[1].uniforms.time.value=C.time,this.exclamation.material[1].uniforms.time.value=C.time}}class Ai extends B{constructor(){super();d(this,"objectPool",{});this.add(new wi)}start(){super.start(),this.setPrefabs(),this.position.add(new L(0,.1,0)),b.on("recalculatestart",()=>{}),b.on("recalculateend",()=>{this.removeAllObject(),this.createCircuit()}),this.createObject("CPU").position.set(-.5,0,-.5)}update(){super.update()}createCircuit(){let[e,t,s]=me.getCircuitInfo();const r=-e.sizeX/2-.5,n=0,o=-e.sizeY/2-.5;t.forEach(a=>{let c="",u=0,f=0;a.category==""?c="CPU":a.isBig?(c="Big"+a.category,u=.5,f=.5):c=a.category;const p=this.createObject(c);p!=null&&p.position.set(a.x+r+u,0+n,a.z+o+f)}),s.forEach(a=>{a.wires.forEach(c=>{const u=this.createObject("Wire"+c.toString());u!=null&&u.position.set(a.x+r,0+n,a.z+o)})})}setPrefabs(){var s,r,n;const e=(s=A.get(se.cpuPath))==null?void 0:s.clone();e.visible=!1,this.objectPool.CPU=[[e],1],this.add(e);for(const o in se.partsBigPath){const a=(r=A.get(se.partsBigPath[o]))==null?void 0:r.clone();a!=null&&(a.visible=!1,a.scale.set(2,2,2),this.objectPool["Big"+o]=[[a],1],this.add(a))}for(const o in se.partsPath){const a=(n=A.get(se.partsPath[o]))==null?void 0:n.clone();a!=null&&(a.visible=!1,this.objectPool[o]=[[a],1],this.add(a))}const t=o=>{const a=new fe(o),c=new pe(a.geometry,a.material);c.visible=!1,this.objectPool["Wire"+o.toString()]=[[c],1],this.add(c)};for(let o=0;o<32;o++){let a=[o,-1];t(a);const c=o%8,u=(o-c)/8;[15-c,23-c,31-c].forEach(p=>{const m=((p+8*u)%32+32)%32;a=[o,m],t(a)})}}createObject(e){if(this.objectPool[e]==null)return;const[t,s]=this.objectPool[e];let r;s>=t.length?(r=t[0].clone(),t.push(r),this.add(r)):r=t[s],r.visible=!0;const n=s+1;return this.objectPool[e]=[t,n],r}removeAllObject(){for(const e in this.objectPool)this.objectPool[e][0].forEach(t=>t.visible=!1),this.objectPool[e][1]=1}}const wt={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `},At={vertexShader:`
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
  `};class yi extends is{constructor(e,t,s,r){super();d(this,"camera");d(this,"scene");d(this,"material");d(this,"depthMaterial");d(this,"depthTexture");d(this,"oldClearColor");d(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new rs(s,r),this.depthMaterial=new re({uniforms:{progress:{value:0}},side:Tt,vertexShader:At.vertexShader,fragmentShader:At.fragmentShader}),this.material=new re({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:wt.vertexShader,fragmentShader:wt.fragmentShader}),this.oldClearColor=new E,this.fsQuad=new ns(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const r=e.getClearAlpha(),n=e.autoClear;e.autoClear=!1,C.time*.05&&(this.depthMaterial.uniforms.progress.value=C.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,C.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(r),e.autoClear=n}}const ot=class{constructor(){d(this,"renderer",null);d(this,"camera",null);d(this,"composer",null);d(this,"_tick",null);d(this,"isLoaded",!1);d(this,"isStartCalled",!1);d(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new ot,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new os({canvas:e,antialias:!0});t.setClearColor(new E(1114129));const s=new as(t);this.composer=s;const r=new ii,n=new cs;n.add(new Js,new si,new fi,new Ai),Fs(),b.on("start",()=>{console.log("start ctf")}),b.on("end",()=>{console.log("end ctf")}),b.on("recalculatestart",async()=>{console.log("recalculatestart")}),b.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new ls(n,r));const o=new yi(n,r,e.width,e.height);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(C.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),C.update(performance.now()),r.update(),n.children.map(c=>{(c instanceof B||c instanceof J)&&c.update()}),s.render())},this.renderer=t,this.camera=r,mi().then(()=>{this.isLoaded=!0,Ds()})}start(){this.isStartCalled=!0}};let ie=ot;d(ie,"instance");const Si=({width:i,height:e})=>{const t=v.exports.useRef(null),[s,r]=v.exports.useState({width:i,height:e}),[n,o]=v.exports.useState(new I(new ve)),[a,c]=v.exports.useState("loading");h.exports.useTick(()=>{n.update();const m=ie.getInstance().tick;m&&m()}),v.exports.useEffect(()=>{ie.getInstance().resize(i,e),n.update(),r({width:i,height:e})},[i,e]);const u=()=>{const m=document.createElement("canvas");document.body.appendChild(m),t.current=m,ie.getInstance().setup(m),ie.getInstance().resize(i,e),o(new I(ve.from(m))),c("splashscreen")},f=()=>{ie.getInstance().start(),c("visualizer")};return l(X,{children:(m=>m==="loading"?l(Vs,{width:i,height:e,loadedHandler:u}):m==="splashscreen"?l(_s,{width:i,height:e,onComplete:f}):l(h.exports.Sprite,{texture:n,width:s.width,height:s.height}))(a)})},Ne=i=>("00"+i).slice(-2),Ci=({x:i,y:e,width:t,height:s})=>{const[r,n]=v.exports.useState(""),[o,a]=v.exports.useState("");return h.exports.useTick(()=>{const c=new Date;if(n(`${c.getHours()}:${Ne(c.getMinutes())}:${Ne(c.getSeconds())}`),!ie.getInstance().isInitialized)return;const u=Math.ceil((Ie.endTime.getTime()-c.getTime())/1e3/60);a(`\u6B8B\u308A: ${Math.floor(u/60)}\u6642\u9593${Ne(u%60)}\u5206`)}),D(h.exports.Container,{mask:v.exports.useMemo(()=>new Et().drawRect(i,e,t,s),[i,e,t,s]),children:[l(h.exports.Text,{text:r,anchor:.5,position:[t/2,s/2],style:new O({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),l(h.exports.Text,{text:o,anchor:.5,position:[t/2,s/2-50],style:new O({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},bi=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,Pi=({x:i,y:e,width:t,height:s})=>l(h.exports.Container,{mask:v.exports.useMemo(()=>new Et().drawRect(i,e,t,s),[i,e,t,s]),children:l(h.exports.Text,{text:bi,anchor:0,position:[0,0],style:new O({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:32,lineHeight:43,fill:"#000000"})})}),ke=class{static initialize(){if(ke.sheet===null){const e=location.pathname.replace(/index\.html.*/gm,"");mt.shared.add("uisprites",`${e}sprites/spritesheet.json`).load(()=>{var t;ke.sheet=(t=mt.shared.resources.uisprites.spritesheet)!=null?t:null,this.loaded=!0,this.onLoadFunc&&this.onLoadFunc()})}}static get(e){return this.sheet?this.sheet.textures[e]:null}static onLoad(e){this.loaded?e():this.onLoadFunc=e}};let k=ke;d(k,"sheet",null),d(k,"loaded",!1),d(k,"onLoadFunc",null);k.initialize();const Ti={Component:null,icon:()=>k.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Nt={visualizer:{Component:Si,icon:()=>k.get("Visualizer.png"),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:Ci,icon:()=>k.get("Clock.png"),title:"Clock.exe",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:Pi,icon:()=>k.get("ReadMe.png"),title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},he=H/5,zi=({id:i,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:r,starting:n}}=v.exports.useContext(Y),o=v.exports.useRef(0),a=()=>{const f=o.current;if(o.current=performance.now(),o.current-f>600)return;const p=Nt[i];s[i]||!p||r(i,p)},c=v.exports.useCallback(f=>{f.clear(),n===i&&(f.beginFill(11184895,.5),f.drawRect(0,0,H,H))},[n]),u=e.icon();return D(h.exports.Container,{position:t,interactive:!0,click:a,children:[l(h.exports.Graphics,{draw:c}),u?l(h.exports.Sprite,{texture:u,position:[he/2,0],width:H-he,height:H-he}):null,l(h.exports.Text,{text:e.title,anchor:[.5,0],position:[H/2,H-he],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:he,fill:"#000"})})]})};var Ii="/Visualizer/assets/BackGround.6ba2a63c.png";const We=12,Mi=()=>{const{width:i,height:e}=v.exports.useContext(Y),t=Math.max(1,Math.floor((e-N-(H+We))/H));return D(X,{children:[l(h.exports.Sprite,{image:Ii,anchor:0,x:0,y:0,width:i,height:e-N}),l(h.exports.Container,{position:[H/2,H/2],children:Object.entries(Nt).map(([s,r],n)=>l(zi,{id:s,iconInfo:r,position:[Math.floor(n/t)*(H+We),n%t*(H+We)]},s))})]})},Ei=(i,e,t,s)=>{const r=P,n=16,o=[0,0],a=[0,0];let c="none";const u={x:0,y:0};let f=!1,p="pointer",m={x:0,y:0,width:0,height:0};return{mouseDownHandler:g=>S=>{u.x=S.data.global.x,u.y=S.data.global.y,g.fullscreen?m={x:0,y:0,width:t,height:s-N}:m=g.rect,e.focus(i),!(o[0]===0&&o[1]===0&&u.y-m.y>r)&&(a[0]=o[0],a[1]=o[1],c=o[0]===0&&o[1]===0?"move":"scale",e.update(i,T(y({},g),{rect:m,fullscreen:!1})))},mouseMoveHandler:g=>S=>{if(c!=="none")if(c==="move")p="grabbing",e.update(i,T(y({},g),{rect:{x:m.x+S.offsetX-u.x,y:m.y+S.offsetY-u.y,width:g.rect.width,height:g.rect.height}}));else{const w=y({},m),Q=200,K=200;a[0]===1?w.width=Math.max(Q,m.width-u.x+S.offsetX):a[0]===-1&&(w.width=Math.max(Q,u.x+m.width-S.offsetX),w.x=Math.min(m.x+m.width-Q,m.x-u.x+S.offsetX)),a[1]===1?w.height=Math.max(K,m.height-u.y+S.offsetY):a[1]===-1&&(w.height=Math.max(K,u.y+m.height-S.offsetY),w.y=Math.min(m.y+m.height-K,m.y-u.y+S.offsetY)),w.width=Math.max(200,w.width),w.height=Math.max(P,w.height),e.update(i,T(y({},g),{rect:w}))}},mouseUpHandler:()=>()=>{c="none"},cursorMouseMoveHandler:g=>S=>{const w=g.fullscreen?{x:0,y:0,width:t,height:s-N}:g.rect;S.data.global.x-w.x<n?o[0]=-1:w.x+w.width-S.data.global.x<n?o[0]=1:o[0]=0,S.data.global.y-w.y<n?o[1]=-1:w.y+w.height-S.data.global.y<n?o[1]=1:o[1]=0,o[0]*o[1]===1?p="nwse-resize":o[0]*o[1]===-1?p="nesw-resize":o[0]!==0?p="ew-resize":o[1]!==0?p="ns-resize":S.data.global.y-w.y<r?p="grab":p="default"},mouseOverHandler:()=>{f=!0},mouseOutHandler:()=>{f=!1},getCursor:()=>f?p:""}};let rt="";const Wt=()=>rt,ki=i=>{rt=i},Fi=()=>{rt=""},Gt=({width:i,height:e,bgColor:t=16777215})=>{const s=v.exports.useCallback(r=>{r.clear(),r.beginFill(t),r.drawRect(0,0,i,e),r.endFill()},[i,e]);return l(h.exports.Graphics,{draw:s})};var Di="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const $=new ve(Di),ee={topLeft:new I($,new F(0,0,6,26)),top:new I($,new F(6,0,3,26)),topRight:new I($,new F(9,0,6,26)),right:new I($,new F(9,26,6,3)),bottomRight:new I($,new F(9,29,6,6)),bottom:new I($,new F(6,29,3,6)),bottomLeft:new I($,new F(0,29,6,6)),left:new I($,new F(0,26,6,3))},Ui=({width:i,height:e})=>D(X,{children:[l(h.exports.Sprite,{texture:ee.topLeft,position:[0,0],width:x,height:P}),l(h.exports.Sprite,{texture:ee.top,position:[x,0],width:i-x*2,height:P}),l(h.exports.Sprite,{texture:ee.topRight,position:[i-x,0],width:x,height:P}),l(h.exports.Sprite,{texture:ee.right,position:[i-x,P],width:x,height:e-P-x}),l(h.exports.Sprite,{texture:ee.bottomRight,position:[i-x,e-x],width:x,height:x}),l(h.exports.Sprite,{texture:ee.bottom,position:[x,e-x],width:i-x*2,height:x}),l(h.exports.Sprite,{texture:ee.bottomLeft,position:[0,e-x],width:x,height:x}),l(h.exports.Sprite,{texture:ee.left,position:[0,P],width:x,height:e-P-x})]}),_=()=>(P-Ce*2)*.9,le=16/14,Bi=({onKill:i,onMinimize:e,onMaximize:t})=>{const s=[];let r=0,n=0;const o=k.get("WindowButtonClose.png"),a=k.get("WindowButtonMaximize.png"),c=k.get("WindowButtonMinimize.png");return!o||!a||!c?l(X,{children:null}):(i&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:o,width:_()*le,height:_(),position:[-r*_()*le,0],interactive:!0,click:i},"kill")),r++,n=-2*ge),t&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:a,width:_()*le,height:_(),position:[-r*_()*le+n,0],interactive:!0,click:t},"maximize")),r++),e&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:c,width:_()*le,height:_(),position:[-r*_()*le+n,0],interactive:!0,click:e},"minimize")),r++),l(X,{children:s}))},Vt=i=>i-x*2,ue=i=>i-P-x,nt=({icon:i,width:e,height:t,title:s,isActive:r=!0,onMinimize:n,onMaximize:o,onKill:a,children:c})=>{const u=k.get(r?"WindowTitleBarActive.png":"WindowTitleBarInactive.png");return D(X,{children:[D(h.exports.Container,{position:[0,0],children:[l(Ui,{width:e,height:t}),u?l(h.exports.Sprite,{texture:u,width:e-x*2,height:P-Ce*2,position:[x,Ce]}):null,i?l(h.exports.Sprite,{texture:i,width:_(),height:_(),position:[x+2,Ce]}):null,l(h.exports.Text,{text:s,anchor:[0,.5],position:[x+2+(i?_()+2:0),P/2],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})}),l(h.exports.Container,{position:[e-x,P/2],children:l(Bi,{onKill:a,onMaximize:o,onMinimize:n})})]}),D(h.exports.Container,{position:[x,P],children:[c?l(Gt,{width:e-x*2,height:t-P-x}):null,c]})]})},Ri=({id:i,windowInfo:e,focus:t})=>{const{width:s,height:r}=v.exports.useContext(Y),{title:n,visible:o,fullscreen:a,Component:c}=e,[u,f]=v.exports.useState(!1),p=a?{x:0,y:0,width:s,height:r-N}:e.rect,{windowSettings:m}=v.exports.useContext(Y),z=v.exports.useRef(e),M=()=>{m.update(i,T(y({},e),{fullscreen:!e.fullscreen}))},G=()=>{m.minimize(i)},Z=()=>{m.kill(i)};v.exports.useEffect(()=>{z.current=e},[e]);const[g,S]=v.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return v.exports.useEffect(()=>{const w=setTimeout(()=>{f(!0)},1500),{mouseDownHandler:Q,mouseMoveHandler:K,mouseUpHandler:ne,cursorMouseMoveHandler:ae,mouseOutHandler:U,mouseOverHandler:de,getCursor:V}=Ei(i,m,s,r);S({mouseDownHandler:Q,cursorMouseMoveHandler:ae,mouseOverHandler:de,mouseOutHandler:U,getCursor:V});const xe=oe=>{K(z.current||e)(oe)},De=()=>{ne()()},ce=document.getElementById("pixicanvas");if(!!ce)return ce.addEventListener("mousemove",xe),ce.addEventListener("mouseup",De),()=>{clearTimeout(w),ce.removeEventListener("mousemove",xe),ce.removeEventListener("mouseup",De)}},[]),h.exports.useTick(()=>{g.getCursor&&g.getCursor()&&!Wt()&&ki(g.getCursor())}),l(h.exports.Container,{position:o?[p.x,p.y]:[p.x,-99999],interactive:!0,mousedown:g.mouseDownHandler?g.mouseDownHandler(e):()=>"",mousemove:g.cursorMouseMoveHandler?g.cursorMouseMoveHandler(e):()=>"",mouseover:g.mouseOverHandler?g.mouseOverHandler:()=>"",mouseout:g.mouseOutHandler?g.mouseOutHandler:()=>"",children:l(nt,{width:p.width,height:p.height,title:n,icon:e.icon(),isActive:t,onMinimize:G,onMaximize:M,onKill:i==="visualizer"?void 0:Z,children:u?c?l(c,{x:p.x+x,y:p.y+P,width:Vt(p.width),height:ue(p.height)}):l(h.exports.Container,{}):null})})};var Hi="/Visualizer/assets/youareanidiot_black.591803b6.png",Ni="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Wi=({width:i,height:e,trans:t})=>{const s=i*.7,r=s/1576*994,n=v.exports.useRef(null),o=v.exports.useRef([0,0]),a=v.exports.useRef([0,0]);return v.exports.useEffect(()=>{const c=Math.PI*Math.random();a.current=[Math.cos(c)*90,Math.sin(c)*90]},[]),h.exports.useTick(c=>{if(!n.current||!o.current||!a.current)return;a.current[1]+=98*c/30;const u=[o.current[0]+a.current[0]*c/30,o.current[1]+a.current[1]*c/30];u[0]<0?(u[0]=0,a.current[0]*=-1):u[0]>i-s?(u[0]=i-s,a.current[0]*=-1):u[1]>Math.max(1,e-r)&&(u[1]=Math.max(1,e-r),a.current[1]*=-1),o.current=u,n.current.position.set(u[0],u[1])}),l(h.exports.Container,{ref:n,children:l(nt,{width:s,height:r,title:"Hahahahahaha",children:l(h.exports.Sprite,{image:t?Hi:Ni,width:Vt(s),height:ue(r)})})})},Gi=({width:i,height:e})=>{const[t,s]=v.exports.useState(!1);return h.exports.useTick(()=>{const r=performance.now();s(Math.floor(r/500)%2==0)}),l(X,{children:new Array(10).fill(null).map((r,n)=>l(Wi,{width:i,height:e,index:n,trans:t},n))})},Vi=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s}}=v.exports.useContext(Y),[r,n]=v.exports.useState(!1);return v.exports.useEffect(()=>{const o=()=>{const c=new Date().getTime();Ie.endTime.getTime()<c&&n(!0)},a=()=>{n(!0)};return b.on("initialized",o),b.on("end",a),()=>{b.off("initialized",o),b.off("end",a)}},[]),D(X,{children:[l(Mi,{}),s.map((o,a)=>l(Ri,{windowInfo:t[o]||Ti,id:o,focus:a===s.length-1},o)),r?l(Gi,{width:i,height:e}):null]})},Li=({id:i,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:r,minimize:n}}=v.exports.useContext(Y),o=t[i];if(!o)return l(X,{children:null});const{title:a,visible:c}=o,u=c?k.get("TaskbarButtonActive.png"):k.get("TaskbarButtonInactive.png"),f=o.icon();return D(h.exports.Container,{position:[e*vt,N/2],interactive:!0,click:()=>s===i?n(i):r(i),children:[u?l(h.exports.Sprite,{width:vt*.9,height:N*.9,texture:u,anchor:[0,.5],position:[0,0]}):null,f?l(h.exports.Sprite,{width:N*.6,height:N*.6,texture:f,anchor:[0,.5],position:[7,0]}):null,l(h.exports.Text,{text:a,anchor:[0,.5],position:[14+N*.6,0],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:N*.5*.8,fill:"#000"})})]})},ji=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=v.exports.useContext(Y),s=k.get("WindowTitleBarActive.png");return D(h.exports.Container,{position:[0,e-N],children:[s?l(h.exports.Sprite,{texture:s,width:i,height:N,anchor:0,position:[0,0]}):null,l(h.exports.Container,{position:[200,0],children:t.map((r,n)=>l(Li,{id:r,index:n},r))})]})};var _i=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class Oi extends st{constructor(){super(void 0,_i,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var Yi=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class Qi extends st{constructor(){super(void 0,Yi,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var Xi=`precision mediump float;

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
}`;class Ki extends st{constructor(){super(void 0,Xi,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,r)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const qi="_main_11f2u_1";var Ji={main:qi};const Zi=()=>{const{width:i,height:e}=v.exports.useContext(Y),[t,s]=v.exports.useState(!0),r={width:500,height:180,left:i*.5-250,top:e*.5-90};return t?D(h.exports.Container,{children:[l(Gt,{bgColor:0,width:i,height:e}),l(h.exports.Container,{position:[r.left,r.top],children:D(nt,{width:r.width,height:r.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[l(h.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})}),l(h.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[ue(r.width)-305,ue(r.height)-5],interactive:!0,click:()=>{gt(1),s(!1),ze("mousedown"),ze("mouseup"),Ge("hdd")},style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})}),l(h.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[ue(r.width)-5,ue(r.height)-5],interactive:!0,click:()=>{gt(0),s(!1)},style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:P*.5,fill:"#000"})})]})})]}):null},yt={default:"CursorDefault.png","ns-resize":"CursorNsResize.png","ew-resize":"CursorEwResize.png","nesw-resize":"CursorNeswResize.png","nwse-resize":"CursorNwseResize.png",grab:"CursorGrab.png",grabbing:"CursorGrabbing.png",wait:"CursorWait.png"},St=i=>{let e=i?"wait":Wt();return yt[e]||(e="default"),k.get(yt[e])},$i=()=>{const i=v.exports.useRef(null),{windowSettings:{starting:e}}=v.exports.useContext(Y),t=h.exports.useApp();h.exports.useTick(()=>{const r=t.renderer.plugins.interaction.mouse.global,n=St(e);i.current&&n&&(i.current.texture=n,i.current.x=r.x,i.current.y=r.y,Fi())});const s=St("default");return s?l(h.exports.Sprite,{ref:i,anchor:.5,width:pt,height:pt,texture:s}):l(X,{})},er=({children:i,Context:e,render:t})=>l(e.Consumer,{children:s=>t(l(e.Provider,{value:s,children:i}))}),tr=t=>{var s=t,{children:i}=s,e=lt(s,["children"]);const{width:r,height:n}=v.exports.useContext(Y);return l(er,{Context:Y,render:o=>l(h.exports.Stage,T(y({width:r,height:n},e),{children:o})),children:i})},sr=h.exports.withFilters(h.exports.Container,{hex:Ki,bloom:us,colorshift:ds,lensDistortion:Oi,visnetting:Qi}),ir=()=>{const i=()=>{ze("mousedown")},e=()=>{ze("mouseup")},[t,s]=v.exports.useState(!1),r=h.exports.useApp();return v.exports.useEffect(()=>{r.ticker.maxFPS=30,k.onLoad(()=>{s(!0)})},[]),t?D(sr,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:[D(h.exports.Container,{mousedown:i,mouseup:e,interactive:!0,children:[l(ji,{}),l(Vi,{}),l(Zi,{})]}),l($i,{})]}):l(X,{})},rr=()=>(v.exports.useEffect(()=>{document.body.style.cursor="none"},[]),l(ws,{children:l("main",{className:Ji.main,children:l(tr,{id:"pixicanvas",children:l(ir,{})})})}));hs.render(l(fs.StrictMode,{children:l(rr,{})}),document.getElementById("root"));
