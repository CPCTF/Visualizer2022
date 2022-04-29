var Lt=Object.defineProperty,jt=Object.defineProperties;var Xt=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var He=(i,e,t)=>e in i?Lt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,S=(i,e)=>{for(var t in e||(e={}))ct.call(e,t)&&He(i,t,e[t]);if(we)for(var t of we(e))lt.call(e,t)&&He(i,t,e[t]);return i},z=(i,e)=>jt(i,Xt(e));var ut=(i,e)=>{var t={};for(var s in i)ct.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&we)for(var s of we(i))e.indexOf(s)<0&&lt.call(i,s)&&(t[s]=i[s]);return t};var f=(i,e,t)=>(He(i,typeof e!="symbol"?e+"":e,t),t);import{r as p,j as et,T as Ct,G as Ot,F as Yt,m as qt,B as pe,a as M,R as F,b as d,c as U,M as ge,d as zt,S as Kt,e as re,C as I,V as j,E as Qt,f as Tt,P as Fe,D as Mt,g as de,h as kt,i as Et,k as Jt,l as Ue,n as dt,U as ht,o as ft,p as Zt,q as It,s as _t,t as $t,u as es,A as ts,v as mt,w as ss,x as ye,y as is,W as rs,z as ns,H as os,I as as,J as cs,K as ls,L as tt,N as vt,O as st,Q as us,X as ds,Y as hs,Z as fs}from"./vendor.6615a397.js";const ms=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};ms();const Ae=1.5,B=64*Ae,vs=200*Ae,A=6*Ae,Pe=A/3*2,C=A/6*26,W=C*1.2,pt=20*Ae;let Ft=0;const gt=i=>{Ft=i},ze=()=>Ft;var ps="/Visualizer/assets/clickup.207be81c.mp3",gs="/Visualizer/assets/clickdown.92e482ed.mp3",As="/Visualizer/assets/hdd.670515d8.mp3";const V={mouseup:new Audio(ps),mousedown:new Audio(gs),hdd:new Audio(As)},Te=i=>{ze()!==0&&(!V[i]||(V[i].paused||(V[i].pause(),V[i].currentTime=0),V[i].volume=ze(),V[i].play()))},Be=i=>{ze()!==0&&(!V[i]||(V[i].paused||(V[i].pause(),V[i].currentTime=Math.min(V[i].currentTime,5)),V[i].volume=ze(),V[i].play()))},xs=()=>{const[i,e]=p.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,r)=>{e(n=>{if(n.windowSettings.starting)return n;if(!n.windowSettings.windowIndices.includes(s))return Be("hdd"),setTimeout(()=>{e(u=>{const h=S({},u.windowSettings.windows);h[s]=r;const v=[...u.windowSettings.windowIndices],m=[...u.windowSettings.windowStack];return v.includes(s)||(m.push(s),v.push(s)),z(S({},u),{windowSettings:z(S({},u.windowSettings),{windows:h,windowIndices:v,windowStack:m,starting:""})})})},2e3),z(S({},n),{windowSettings:z(S({},n.windowSettings),{starting:s})});const o=S({},n.windowSettings.windows);o[s]=r;const a=[...n.windowSettings.windowIndices],c=[...n.windowSettings.windowStack];return a.includes(s)||(c.push(s),a.push(s),Be("hdd")),z(S({},n),{windowSettings:z(S({},n.windowSettings),{windows:o,windowIndices:a,windowStack:c})})})},kill:s=>{e(r=>{const n=S({},r.windowSettings.windows);delete n[s];const o=r.windowSettings.windowIndices.filter(h=>h!==s),a=r.windowSettings.windowStack.filter(h=>h!==s),c=o.filter(h=>{var v;return(v=n[h])==null?void 0:v.visible}),u=c.length>0?c[c.length-1]:"";return z(S({},r),{windowSettings:z(S({},r.windowSettings),{windows:n,windowIndices:o,windowStack:a,focused:u})})})},focus:s=>{e(r=>{const n=S({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=z(S({},o),{visible:!0});const a=r.windowSettings.windowIndices.filter(c=>c!==s);return a.push(s),z(S({},r),{windowSettings:z(S({},r.windowSettings),{windows:n,windowIndices:a,focused:s})})})},minimize:s=>{e(r=>{const n=S({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=z(S({},o),{visible:!1});const a=r.windowSettings.windowIndices.filter(u=>{var h;return u!==s&&((h=n[u])==null?void 0:h.visible)}),c=a.length>0?a[a.length-1]:"";return z(S({},r),{windowSettings:z(S({},r.windowSettings),{windows:n,focused:c})})})}}}));return[i,()=>{e(s=>z(S({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},l=et.exports.jsx,D=et.exports.jsxs,Y=et.exports.Fragment,q=p.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),ws=({children:i})=>{const[e,t]=xs();return p.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),l(q.Provider,{value:e,children:i})},ys=["PPC","Web","Crypto","Binary","Pwn","Misc","Shell","Forensics","OSINT"];var it="/Visualizer/assets/testicon.8f219171.jpg";const pr=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:it,point:0,rank:-1}));const At=i=>new Promise(e=>{setTimeout(()=>e(),i)}),Me={startTime:new Date,endTime:new Date},Ss=!1,bs=()=>{P.emit("start")},Ps=()=>{P.emit("end")},We={texture:new Ct,gltf:new Ot,fbx:new Yt},xt=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{We.gltf.load(i,r=>{t(r.scene)},()=>0,r=>{s(r)});break}case"texture":{We.texture.load(i,r=>{t(r)},()=>0,r=>{s(r)});break}}});class w{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const r=this.queue.length;if(r!==0)return this.queue.map(([n,o])=>{t?t=t.then(()=>xt(n,o)):t=xt(n,o),t=t.then((a=>{s+=1,this.resources[n]={type:o,data:a},e({path:n,data:a,total:r,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}f(w,"resources",{}),f(w,"queue",[]);class Cs extends EventTarget{constructor(e){super();f(this,"id");f(this,"_score",0);f(this,"_displayName","");f(this,"_icon",null);f(this,"_iconPath","");this.id=e}get score(){return this._score}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}updateInfo(e,t){var s;if(this._displayName=e,t&&(!this._iconPath||this._iconPath!==t)){const r=new URL(t).pathname;this._iconPath=r,(s=this._icon)==null||s.dispose(),this._icon=We.texture.load(r)}}updateScore(e){this._score=e}}class R{static get ranking(){return this._ranking}static addUser({id:e,userName:t,iconUrl:s}){const r=new Cs(e);this.users.set(e,r),r.updateInfo(t,s)}static updateUser({id:e,userName:t,iconUrl:s}){var r;!this.users.has(e)||(r=this.users.get(e))==null||r.updateInfo(t,s)}static updateRanking(e){this._ranking=e.map(({id:t,score:s})=>{const r=this.getUser(t);if(!r)throw Error(`This user does not exist : ${t}`);return r.updateScore(s),r})}static updateUserScore({id:e,score:t}){var s;(s=this.users.get(e))==null||s.updateScore(t)}static getUser(e){return this.users.get(e)}static size(){return this.users.size}}f(R,"users",new Map),f(R,"_ranking",[]);const zs=({userId:i,name:e,iconUrl:t})=>{R.addUser({id:i,userName:e,iconUrl:t})},Ts=({userId:i,point:e,genre:t,challengeName:s})=>{P.emit("submit",{userId:i,point:e,genre:ys[t],title:s})},Ms=({userId:i,name:e,iconUrl:t})=>{!R.getUser(i)||R.updateUser({id:i,userName:e,iconUrl:t})},Se=i=>{if(i.status!==200)throw new Error("\u901A\u4FE1\u30A8\u30E9\u30FC");return i.json()};class Dt{static async initial(){const e=fetch("/api/users").then(Se),t=this.recalculate(),s=fetch("/api/schedule").then(Se),[r,n,o]=await Promise.all([e,t,s]);return{users:r,recalculate:n,startTime:o.startTime,endTime:o.endTime}}static async recalculate(){const e=fetch("/visualizer/circuit.json").then(Se),t=fetch("/api/ranking?includeAdmin=false").then(Se),[s,r]=await Promise.all([e,t]);return{circuit:s,ranking:r}}}class Ge{constructor(e,t){this.sizeX=e,this.sizeY=t}}class Ht{constructor(e,t,s,r){this.x=e,this.z=t,this.isBig=s,this.category=r}}class Ut{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class ks{static jsonToInfo(e){const t=JSON.parse(e);let s=new Ge(0,0);const r=new Array(0),n=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new Ge(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;r.push(new Ht(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;n.push(new Ut(a.x,a.z,a.wires))}}),[s,r,n]}}class ve{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=ks.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}f(ve,"circuitBasisInfo"),f(ve,"circuitPartsInfos"),f(ve,"circuitWiresInfos");const Es=()=>{(async()=>{P.emit("recalculatestart"),await Is(),P.emit("recalculateend")})()},Is=async()=>{const i=await Dt.recalculate();if(!i)return;const{ranking:e,circuit:t}=i;R.updateRanking(e),await At(3e3),ve.setCircuitInfo(JSON.stringify(t)),await At(1e3)},P=qt(),Fs=()=>{try{const i=new WebSocket(`ws://${location.host}/ws/visualizer`);i.addEventListener("message",Hs.bind(globalThis)),i.addEventListener("error",e=>{console.error(e),P.emit("disconnect")})}catch(i){console.log(i)}},Ds=()=>{P.emit("initialized")};const Hs=i=>{if(!i.data)return;const{type:e,data:t}=JSON.parse(i.data);if(!!e)switch(Number(e)){case 0:break;case 1:{zs(t);break}case 2:{Ts(t);break}case 3:break;case 4:{Ms(t);break}case 5:{bs();break}case 6:{Ps();break}case 7:{Es();break}}};var Us="data:image/png;base64,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",Rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Ns="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",Vs="/Visualizer/assets/recalculating.60ffccdf.glb",Rt="/Visualizer/assets/monitor.81b9fd78.glb",Bs="/Visualizer/assets/face.e8cae3d3.png",Nt="/Visualizer/assets/cpu.57abf837.glb",Le="/Visualizer/assets/graphicBoard.4a06ae3d.glb",je="/Visualizer/assets/hdd.caa7427b.glb",Xe="/Visualizer/assets/memory.83673af4.glb",Oe="/Visualizer/assets/powerSupply.4d848de2.glb",Ye="/Visualizer/assets/tipSet.fad5f9b9.glb",qe="/Visualizer/assets/audio.3c50633a.glb",Ke="/Visualizer/assets/condenser.654b5786.glb",Qe="/Visualizer/assets/ports.6ad72da3.glb",Je="/Visualizer/assets/ssd.447a4b88.glb",Ze="/Visualizer/assets/symbols.3d122568.glb",_e="/Visualizer/assets/emergency.19e4efc2.glb";const Ws=()=>{w.addGLTF(Vs),w.addGLTF(Rt),w.addTexture(Bs),w.addTexture(it),w.addGLTF(Nt),w.addGLTF(Le),w.addGLTF(je),w.addGLTF(Xe),w.addGLTF(Oe),w.addGLTF(Ye),w.addGLTF(qe),w.addGLTF(Ke),w.addGLTF(Qe),w.addGLTF(Je),w.addGLTF(Ze),w.addGLTF(_e)},Gs=({width:i,height:e,loadedHandler:t})=>{const[s,r]=p.exports.useState(""),[n,o]=p.exports.useState(0),[a,c]=p.exports.useState({textures:[],index:-1});return p.exports.useEffect(()=>{(async()=>{Ws(),await w.load(({path:m,total:T,count:E})=>{r(m),o(E/T)}),t()})();const h=new pe(Us);c({index:0,textures:[new M(h,new F(64*0,0,64,64)),new M(h,new F(64*1,0,64,64)),new M(h,new F(64*2,0,64,64)),new M(h,new F(64*3,0,64,64)),new M(h,new F(64*4,0,64,64)),new M(h,new F(64*5,0,64,64)),new M(h,new F(64*6,0,64,64)),new M(h,new F(64*7,0,64,64))]});const v=setInterval(()=>{c(m=>({index:(m.index+1)%m.textures.length,textures:m.textures}))},200);return()=>{clearInterval(v)}},[]),D(d.exports.Container,{position:[i/2,e/2],children:[a.index<0?null:l(d.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),l(d.exports.Text,{text:s,anchor:.5,position:[0,0],style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),l(d.exports.Sprite,{image:Rs,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*n)).fill(null).map((u,h)=>l(d.exports.Sprite,{image:Ns,anchor:[0,.5],position:[(h-8)*16,0],width:16,height:32},h))})]})};var Ls="/Visualizer/assets/traP_logo.25c1c1d8.png";const js=new pe(Ls),Re=50,be=24,Xs=({width:i,height:e,onComplete:t})=>{const[s,r]=p.exports.useState(0);return p.exports.useEffect(()=>{const n=setInterval(()=>{r(o=>o===Re+be*2?(clearInterval(n),setTimeout(()=>{t()},1),o):o+1)},1e3/be)},[]),l(d.exports.Container,{position:[i/2,e/2],children:l(d.exports.Sprite,{texture:new M(js,new F(0,280*Math.min(s,Re-1),1920,280)),alpha:1-Math.max(0,s-Re-be)/be,anchor:.5,width:i*.9,height:i*.9/1920*280})})};class y{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}f(y,"startTime",-1),f(y,"_time",-1),f(y,"_deltaTime",-1),f(y,"prevTime",-1);class _ extends ge{constructor(e,t){super(e,t);f(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof N||e instanceof _)&&e.update()}))}}class N extends zt{constructor(){super();f(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof N||e instanceof _)&&e.update()}))}}const Os=`
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
`;class qs extends _{constructor(){super(new Kt(100),new re({uniforms:{radius:{value:100},colorA:{value:new I("#db2784")},colorB:{value:new I("#1c1330")},sunColorA:{value:new I("#db2784")},sunColorB:{value:new I("#f2ca2b")},sunPos:{value:new j(-100,0,0).applyEuler(new Qt(0,0,-Math.PI*.06))},time:{value:0}},side:Tt,vertexShader:Os,fragmentShader:Ys}))}update(){super.update(),this.material.uniforms.time.value=y.time}}const Ks=`
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
`,Qs=`
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
`;class Js extends _{constructor(){super(new Fe(100,100,50,50),new re({uniforms:{colorA:{value:new I(16729343)},colorB:{value:new I(1127423)},time:{value:0}},vertexShader:Ks,fragmentShader:Qs,side:Mt}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=y.time}}class Zs extends N{constructor(){super();const e=new Js;e.position.setY(-1),this.add(e),this.add(new qs)}start(){}update(){super.update()}}var _s=`uniform sampler2D face;
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
}`,ei="/Visualizer/assets/face.e8cae3d3.png";class ti extends _{constructor(){super(new Fe(4*.5,3*.5),new re({vertexShader:$s,fragmentShader:_s,uniforms:{face:{value:w.get(ei)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||w.get(it)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=de.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=y.time)}}class Ne extends N{constructor(){super();f(this,"display");f(this,"user",null);const e=w.get(Rt).clone();this.add(e),this.display=new ti,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){e?(this.user=e,this.display.setIcon(e.icon)):this.user=null}start(){}update(){super.update()}}class si extends N{constructor(){super();f(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,r)=>{const n=new Ne,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4,0,Math.cos(o)*4),n.scale.set(.4,.4,.4),n.lookAt(0,-2,0),this.add(n),n});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,r)=>{const n=new Ne,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),n.scale.set(.15,.15,.15),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,r)=>{const n=new Ne,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),n.scale.set(.1,.1,.1),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t)}start(){R.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),P.on("submit",({userId:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),P.on("recalculateend",()=>{R.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class ii extends kt{constructor(){super(60,1,1,2e3);P.on("recalculatestart",()=>{de.to(this.position,2,{y:10})}),P.on("recalculateend",()=>{de.to(this.position,2,{y:4})})}start(){this.position.set(0,20,0),this.position.set(Math.sin(y.time*.1)*8,4,Math.cos(y.time*.1)*8),this.lookAt(0,0,0)}update(){this.position.set(Math.sin(y.time*.1)*8,this.position.y,Math.cos(y.time*.1)*8),this.lookAt(0,0,0)}}const ri=`
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
`,ci=i=>new re({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ni,vertexShader:ri,transparent:!0}),li=i=>new re({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ai,vertexShader:oi,transparent:!0,side:Tt}),ke=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[ci(e),li(e)]},se=class extends N{constructor(e=0){super();f(this,"emergencyBlack");f(this,"emergencyRed");f(this,"offsetTime");f(this,"loopTime",2);var t,s;if(se.emergencyBlackGeom==null){const r=(t=w.get(_e))==null?void 0:t.clone();se.emergencyBlackGeom=r.children[0].geometry}if(se.emergencyRedGeom==null){const r=(s=w.get(_e))==null?void 0:s.clone();se.emergencyRedGeom=r.children[1].geometry}this.offsetTime=e,this.emergencyBlack=new ge(se.emergencyBlackGeom),this.emergencyRed=new ge(se.emergencyRedGeom),ke(this.emergencyBlack,new I(0)),ke(this.emergencyRed,new I(16711680)),this.add(this.emergencyBlack),this.add(this.emergencyRed)}start(){super.start()}update(){super.update();let e=Math.sin((y.time+this.offsetTime)/this.loopTime*Math.PI*2);e=e<0?0:e,this.scale.set(e,e,e),this.emergencyBlack.material[0].uniforms.time.value=y.time+this.offsetTime,this.emergencyRed.material[0].uniforms.time.value=y.time+this.offsetTime,this.emergencyBlack.material[1].uniforms.time.value=y.time+this.offsetTime,this.emergencyRed.material[1].uniforms.time.value=y.time+this.offsetTime}};let Ce=se;f(Ce,"emergencyBlackGeom"),f(Ce,"emergencyRedGeom");class ui extends N{constructor(){super();f(this,"size",30);f(this,"positionOffset",2/Math.sqrt(3));f(this,"offsetTimeUnit",.1);f(this,"emergencies",new Array(0));for(let e=0;e<this.size;e++){const t=e*(this.positionOffset*3/2)-Math.floor(this.size/2),s=e*this.offsetTimeUnit;for(let r=0;r<this.size;r++){const n=r*(Math.sqrt(3)*this.positionOffset)+(e%2==1?this.positionOffset*(Math.sqrt(3)/2):0)-Math.floor(this.size/2),o=new Ce(s);o.position.setX(n),o.position.setZ(t),this.emergencies.push(o),this.add(o)}}}}class Vt extends _{constructor(e){const t=e.clipBias!==void 0?e.clipBias:0,s=e.alpha!==void 0?e.alpha:1,r=e.time!==void 0?e.time:0,n=e.waterNormals!==void 0?e.waterNormals:null,o=e.sunDirection!==void 0?e.sunDirection:new j(.70707,.70707,0),a=new I(e.sunColor!==void 0?e.sunColor:16777215),c=new I(e.waterColor!==void 0?e.waterColor:8355711),u=e.eye!==void 0?e.eye:new j(0,0,0),h=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:Et,m=e.fog!==void 0?e.fog:!1,T=new Jt,E=new j,G=new j,$=new j,g=new Ue,b=new j(0,0,-1),x=new dt,K=new j,Q=new j,ne=new dt,ae=new Ue,H=new kt,he={uniforms:ht.merge([ft.fog,ft.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ue},sunColor:{value:new I(8355711)},sunDirection:{value:new j(.70707,.70707,0)},eye:{value:new j},waterColor:{value:new I(5592405)}}]),vertexShader:`
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
				}`},L=new re({fragmentShader:he.fragmentShader,vertexShader:he.vertexShader,uniforms:ht.clone(he.uniforms),lights:!0,side:v,fog:m});L.uniforms.textureMatrix.value=ae,L.uniforms.alpha.value=s,L.uniforms.time.value=r,L.uniforms.normalSampler.value=n,L.uniforms.sunColor.value=a,L.uniforms.waterColor.value=c,L.uniforms.sunDirection.value=o,L.uniforms.distortionScale.value=h,L.uniforms.eye.value=u;const xe=new Fe(1e3,1e3);super(xe,L);f(this,"isWater",!0);this.onBeforeRender=function(De,ce,oe){if(G.setFromMatrixPosition(this.matrixWorld),$.setFromMatrixPosition(oe.matrixWorld),g.extractRotation(this.matrixWorld),E.set(0,0,1),E.applyMatrix4(g),K.subVectors(G,$),K.dot(E)>0)return;K.reflect(E).negate(),K.add(G),g.extractRotation(oe.matrixWorld),b.set(0,0,-1),b.applyMatrix4(g),b.add($),Q.subVectors(G,b),Q.reflect(E).negate(),Q.add(G),H.position.copy(K),H.up.set(0,1,0),H.up.applyMatrix4(g),H.up.reflect(E),H.lookAt(Q),H.far=oe.far,H.updateMatrixWorld(),H.projectionMatrix.copy(oe.projectionMatrix),ae.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ae.multiply(H.projectionMatrix),ae.multiply(H.matrixWorldInverse),T.setFromNormalAndCoplanarPoint(E,G),T.applyMatrix4(H.matrixWorldInverse),x.set(T.normal.x,T.normal.y,T.normal.z,T.constant);const J=H.projectionMatrix;ne.x=(Math.sign(x.x)+J.elements[8])/J.elements[0],ne.y=(Math.sign(x.y)+J.elements[9])/J.elements[5],ne.z=-1,ne.w=(1+J.elements[10])/J.elements[14],x.multiplyScalar(2/x.dot(ne)),J.elements[2]=x.x,J.elements[6]=x.y,J.elements[10]=x.z+1-t,J.elements[14]=x.w,u.setFromMatrixPosition(oe.matrixWorld)}}}Vt.prototype.isWater=!0;var di="/Visualizer/assets/Water_1_M_Normal.6d782546.jpg";class hi extends N{constructor(){super();f(this,"water");const e={textureWidth:512,textureHeight:512,waterNormals:new Ct().load(di,function(t){t.wrapS=t.wrapT=Zt}),alpha:1,waterColor:4098510,distortionScale:2.7,fog:void 0,sunDirection:void 0,sunColor:void 0,clipBias:void 0,time:void 0,eye:void 0,side:Et};this.water=new Vt(e),this.water.rotation.x=-Math.PI/2,this.add(this.water)}start(){super.start()}update(){super.update(),this.water.material.uniforms.time.value=y.time}}class fi extends N{constructor(){super();f(this,"startY",-2);f(this,"endY",2);f(this,"emergencyAnimation");f(this,"waterAnimation");this.emergencyAnimation=new ui,this.waterAnimation=new hi,this.add(this.emergencyAnimation),this.add(this.waterAnimation)}start(){super.start(),this.visible=!1,this.emergencyAnimation.position.y=.5,this.position.y=this.startY,P.on("recalculatestart",()=>{this.visible=!0,de.to(this.position,1,{y:this.endY})}),P.on("recalculateend",()=>{de.to(this.position,1,{y:this.startY}).eventCallback("onComplete",()=>{this.visible=!1})})}update(){super.update()}}const mi=async()=>{var e;const i=await Dt.initial();i.users.forEach(t=>{R.addUser(t)}),R.updateRanking((e=i.recalculate)==null?void 0:e.ranking),Me.startTime=new Date(i.startTime),Me.endTime=new Date(i.endTime)};class vi{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,r)=>{this.wires[r]=new gi(r)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const r=s.getWirePointsInt(e,t);this.wirePoints.forEach((n,o)=>{this.wirePoints[o]=r[o]==1}),this.wires.forEach(n=>{n.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class pi{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMax=4,this.counterMax=10,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class gi{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let r=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let n=0;n<3;n++){const o=t[n];if(this.canTo[o]!=-1&&o!=e){r=this.canTo[o];break}}return this.cantTo(),r==-1?(this.from=-1,-1):(this.to=r,r)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,r=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){r++;continue}if(a==this.from){s=r;continue}const c=this.canTo.findIndex(u=>u==a);c!=-1&&(t[c]=r)}const n=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?n[a]=o:n[a]=-1}),this.canTo=n}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const $e=class{constructor(i,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=i,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.cells[t*i+s]=new vi(s,t)}putParts(i,e,t){if(!this.canPutParts(i,e,t))return!1;const s=t.SizeY(),r=t.SizeX(),n=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<r;a++){const c=e+o,u=i+a,h=this.getCell(u,c);h.setParts(a,o,t),n.push(h)}return t.setPosition(i,e),this.partsCellDict[t.id]=n,this.parts.push(t),!0}getPartsCells(i){return i.id in this.partsCellDict?this.partsCellDict[i.id]:new Array(0)}getAllPartsCells(){const i=new Array(0);for(const e in this.partsCellDict)i.push(this.partsCellDict[e]);return i}extendWires(i){const e=i.x,t=i.y;i.getActiveWirePointsIndex().forEach(r=>{let n=e,o=t;const a=r%8,c=(r-a)/8,u=new pi(c);for(;r!=-1;){const[h,v]=this.indexConvertToAroundIndex(r);n+=$e.dx[h],o+=$e.dy[h];const m=this.getCell(n,o);if(m==null||(u.update(v,h),r=m.setWire(u),r==-1))break}})}convertToCircuitInfos(){const i=new Ge(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const r=new Array(0);s.getAllWires().forEach(n=>{n.isEmpty()||(n.isHole()?r.push([n.ind,n.to]):r.push([n.from,n.to]))}),r.length!=0&&t.push(new Ut(s.x,s.y,r))}),this.parts.forEach(s=>{const[r,n]=s.getPosition();e.push(new Ht(r,n,s.isBig,s.problemCategory!=null?s.problemCategory:""))}),[i,e,t]}canPutParts(i,e,t){const s=t.SizeY(),r=t.SizeX();for(let n=0;n<s;n++)for(let o=0;o<r;o++){const a=e+n,c=i+o,u=this.getCell(c,a);if(u==null)return!1;if(u.isParts())return!1}return!0}getCell(i,e){if(0<=e&&e<this.sizeY&&0<=i&&i<this.sizeX)return this.cells[e*this.sizeX+i]}indexConvertToAroundIndex(i){const e=i%8,t=(i-e)/8,r=((t+2)%4+1)*8-e-1;return[t,r]}};let Ee=$e;Ee.dy=[1,0,-1,0];Ee.dx=[0,1,0,-1];const X=class extends _{constructor(e){const t=X.createWireGeometry(e);super(t,X.material)}start(){}update(){super.update()}static createWireGeometry(e){let t=new _t;const s=1,r=.25,n=.5,o=.25,a=16,[c,u]=e;if(u==-1){const h=s*n/8/2,v=s*o/8/2,m=new $t(v,h,a);m.rotateX(-Math.PI/2);let[T,E]=this.wireIndexToPosition(c,s);const G=(c-c%8)/8;G==0||G==2?E-=Math.sign(E)*(h-v):T-=Math.sign(T)*(h-v);const $=m.attributes.position.count;for(let g=0;g<$;g++){const b=m.attributes.position.getX(g),x=m.attributes.position.getZ(g);m.attributes.position.setXYZ(g,b+T,0,x+E)}t=m}else{const[h,v]=X.wireIndexToPositionPair(c,s,r),[m,T]=X.wireIndexToPositionPair(u,s,r),E=new Float32Array([h[0],0,h[1],v[0],0,v[1],m[0],0,m[1],m[0],0,m[1],T[0],0,T[1],h[0],0,h[1]]);t.setAttribute("position",new es(E,3))}return t}static wireIndexToPosition(e,t=1){const s=e%8,r=(e-s)/8,n=t/8,o=n*s-n*7/2,a=Ee.dx[r]/2+X.sx[r]*o,c=Ee.dy[r]/2+X.sy[r]*o;return[a,c]}static wireIndexToPositionPair(e,t=1,s=.5){const r=e%8,n=(e-r)/8,o=t/8,[a,c]=this.wireIndexToPosition(e,t),u=[a-X.sx[n]*s*o/2,c-X.sy[n]*s*o/2],h=[a+X.sx[n]*s*o/2,c+X.sy[n]*s*o/2];return[u,h]}};let me=X;f(me,"sx",[1,0,-1,0]),f(me,"sy",[0,-1,0,1]),f(me,"material",new It({color:16777215}));class ie{}f(ie,"cpuPath",Nt),f(ie,"partsPath",{PPC:Ye,Web:Xe,Crypto:Oe,Binary:je,Pwn:Qe,Misc:qe,Shell:Je,Forensics:Ke,OSINT:Le}),f(ie,"partsBigPath",{PPC:Ye,Web:Xe,Crypto:Oe,Binary:je,Pwn:Qe,Misc:qe,Shell:Je,Forensics:Ke,OSINT:Le});class Ai extends N{constructor(){super();f(this,"app");f(this,"texture");f(this,"nameText");f(this,"titleText");f(this,"needsUpdate",!1);const e=1024,t=48;this.app=new ts({width:e,height:t,autoStart:!1,backgroundAlpha:0}),this.nameText=new mt("string"),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new mt("string"),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const s=new ge(new Fe(e,t),new It({map:null,transparent:!0}));s.position.z=1e-4;const r=s.clone();r.rotation.y=Math.PI,r.position.z=-1e-5,this.texture=new ss(this.app.view),s.material.map=this.texture,r.material.map=this.texture,this.add(s,r)}redraw(e,t,s){const r=s.getStyle(),n=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style=new U({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:r,fontSize:20,lineJoin:"round",stroke:n,strokeThickness:2}),this.nameText.style.fill=r,this.nameText.style.stroke=n,this.titleText.text=t,this.titleText.style=new U({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:r,fontSize:20,lineJoin:"round",stroke:n,strokeThickness:2}),this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class xi extends N{constructor(){super();f(this,"question");f(this,"exclamation");f(this,"submissionInfo");f(this,"objects");this.objects=new zt,this.question=w.get(Ze).children[0],this.exclamation=w.get(Ze).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,ke(this.question,new I(16711680)),ke(this.exclamation,new I(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new Ai),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){P.on("submit",e=>{const t=de.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=R.getUser(e.userId))==null?void 0:s.displayName,e.title,new I(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:ye.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:ye.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new I(65280))}),t.to(this.objects.position,.15,{z:0,ease:ye.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:ye.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*y.deltaTime*.3,this.position.y=Math.sin(y.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=y.time,this.exclamation.material[0].uniforms.time.value=y.time,this.question.material[1].uniforms.time.value=y.time,this.exclamation.material[1].uniforms.time.value=y.time}}class wi extends N{constructor(){super();f(this,"objectPool",{});this.add(new xi)}start(){super.start(),this.setPrefabs(),this.position.add(new j(0,.1,0)),P.on("recalculatestart",()=>{}),P.on("recalculateend",()=>{this.removeAllObject(),this.createCircuit()}),this.createObject("CPU").position.set(-.5,0,-.5)}update(){super.update()}createCircuit(){const[e,t,s]=ve.getCircuitInfo(),r=-e.sizeX/2-.5,n=0,o=-e.sizeY/2-.5;t.forEach(a=>{let c="",u=0,h=0;a.category==""?c="CPU":a.isBig?(c="Big"+a.category,u=.5,h=.5):c=a.category;const v=this.createObject(c);v!=null&&v.position.set(a.x+r+u,0+n,a.z+o+h)}),s.forEach(a=>{a.wires.forEach(c=>{const u=this.createObject("Wire"+c.toString());u!=null&&u.position.set(a.x+r,0+n,a.z+o)})})}setPrefabs(){var s,r,n;const e=(s=w.get(ie.cpuPath))==null?void 0:s.clone();e.visible=!1,this.objectPool.CPU=[[e],1],this.add(e);for(const o in ie.partsBigPath){const a=(r=w.get(ie.partsBigPath[o]))==null?void 0:r.clone();a!=null&&(a.visible=!1,a.scale.set(2,2,2),this.objectPool["Big"+o]=[[a],1],this.add(a))}for(const o in ie.partsPath){const a=(n=w.get(ie.partsPath[o]))==null?void 0:n.clone();a!=null&&(a.visible=!1,this.objectPool[o]=[[a],1],this.add(a))}const t=o=>{const a=new me(o),c=new ge(a.geometry,a.material);c.visible=!1,this.objectPool["Wire"+o.toString()]=[[c],1],this.add(c)};for(let o=0;o<32;o++){let a=[o,-1];t(a);const c=o%8,u=(o-c)/8;[15-c,23-c,31-c].forEach(v=>{const m=((v+8*u)%32+32)%32;a=[o,m],t(a)})}}createObject(e){if(this.objectPool[e]==null)return;const[t,s]=this.objectPool[e];let r;s>=t.length?(r=t[0].clone(),t.push(r),this.add(r)):r=t[s],r.visible=!0;const n=s+1;return this.objectPool[e]=[t,n],r}removeAllObject(){for(const e in this.objectPool)this.objectPool[e][0].forEach(t=>t.visible=!1),this.objectPool[e][1]=1}}const wt={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `},yt={vertexShader:`
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
  `};class yi extends is{constructor(e,t,s,r){super();f(this,"camera");f(this,"scene");f(this,"material");f(this,"depthMaterial");f(this,"depthTexture");f(this,"oldClearColor");f(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new rs(s,r),this.depthMaterial=new re({uniforms:{progress:{value:0}},side:Mt,vertexShader:yt.vertexShader,fragmentShader:yt.fragmentShader}),this.material=new re({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:wt.vertexShader,fragmentShader:wt.fragmentShader}),this.oldClearColor=new I,this.fsQuad=new ns(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const r=e.getClearAlpha(),n=e.autoClear;e.autoClear=!1,y.time*.05&&(this.depthMaterial.uniforms.progress.value=y.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,y.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(r),e.autoClear=n}}const at=class{constructor(){f(this,"renderer",null);f(this,"camera",null);f(this,"composer",null);f(this,"_tick",null);f(this,"isLoaded",!1);f(this,"isStartCalled",!1);f(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new at,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new os({canvas:e,antialias:!0});t.setClearColor(new I(1114129));const s=new as(t);this.composer=s;const r=new ii,n=new cs;n.add(new Zs,new si,new fi,new wi),Fs(),s.addPass(new ls(n,r));const o=new yi(n,r,e.width,e.height);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(y.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),y.update(performance.now()),r.update(),n.children.map(c=>{(c instanceof N||c instanceof _)&&c.update()}),s.render())},this.renderer=t,this.camera=r,mi().then(()=>{this.isLoaded=!0,Ds()})}start(){this.isStartCalled=!0}};let Z=at;f(Z,"instance");const Si=({width:i,height:e})=>{const t=p.exports.useRef(null),[s,r]=p.exports.useState({width:i,height:e}),[n,o]=p.exports.useState(new M(new pe)),[a,c]=p.exports.useState("loading");d.exports.useTick(()=>{n.update();const m=Z.getInstance().tick;m&&m()}),p.exports.useEffect(()=>{Z.getInstance().resize(i,e),n.update(),r({width:i,height:e})},[i,e]);const u=()=>{const m=document.createElement("canvas");document.body.appendChild(m),t.current=m,Z.getInstance().setup(m),Z.getInstance().resize(i,e),o(new M(pe.from(m))),c("splashscreen")},h=()=>{Z.getInstance().start(),c("visualizer")};return l(Y,{children:(m=>m==="loading"?l(Gs,{width:i,height:e,loadedHandler:u}):m==="splashscreen"?l(Xs,{width:i,height:e,onComplete:h}):l(d.exports.Sprite,{texture:n,width:s.width,height:s.height}))(a)})};var bi="/Visualizer/assets/kusodasaBackGround.aa7102d2.png",Pi="/Visualizer/assets/kusodasaTitle.1b5d3374.png",Ci="/Visualizer/assets/kusodasaTitle2.25e09b49.png",zi="/Visualizer/assets/nazoCat.7266b510.png",Ti="data:image/png;base64,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";const St=i=>("00"+i).slice(-2),Mi=i=>("0000"+i).slice(-4),ki=({x:i,y:e,width:t,height:s})=>{const[r,n]=p.exports.useState(""),[o,a]=p.exports.useState("");d.exports.useTick(()=>{const u=new Date;if(n(`${u.getHours()}\u6642${St(u.getMinutes())}\u5206`),!Z.getInstance().isInitialized)return;const h=Math.ceil((Me.endTime.getTime()-u.getTime())/1e3/60);a(`${Math.floor(h/60)}\u6642\u9593${St(h%60)}\u5206`)});const c=Math.max(750,t);return l(d.exports.Container,{mask:p.exports.useMemo(()=>new tt().drawRect(i,e,t,s),[i,e,t,s]),children:D(d.exports.Container,{scale:t/c,children:[l(d.exports.Sprite,{image:bi,position:[0,0],width:c,height:c}),o?l(d.exports.Sprite,{image:Pi,anchor:[.5,0],position:[c/2,40]}):l(d.exports.Sprite,{image:Ci,anchor:[.5,0],position:[c/2,40]}),l(d.exports.Text,{text:o||r,anchor:[.5,0],position:[c/2,190],style:new U({dropShadow:!0,dropShadowAlpha:.6,dropShadowBlur:8,dropShadowDistance:16,fill:["fuchsia","blue","lime","yellow","#ff8000","red"],fillGradientType:1,fontFamily:"HGRPP1",fontSize:128,letterSpacing:3})}),l(d.exports.Sprite,{image:zi,anchor:[.5,0],position:[c/2,400]}),o?D(Y,{children:[l(d.exports.Sprite,{image:Ti,anchor:[.5,0],position:[c/2,550]}),l(d.exports.Text,{text:`${Mi(R.size())}`,anchor:.5,position:[c/2-60,603],style:new U({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:24,fill:"yellow"})})]}):null]})})},Ei=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,Ii=({x:i,y:e,width:t,height:s})=>l(d.exports.Container,{mask:p.exports.useMemo(()=>new tt().drawRect(i,e,t,s),[i,e,t,s]),children:l(d.exports.Text,{text:Ei,anchor:0,position:[0,0],style:new U({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:32,lineHeight:43,fill:"#000000"})})}),Ie=class{static initialize(){if(Ie.sheet===null){const e=location.pathname.replace(/index\.html.*/gm,"");vt.shared.add("uisprites",`${e}sprites/spritesheet.json`).load(()=>{var t;Ie.sheet=(t=vt.shared.resources.uisprites.spritesheet)!=null?t:null,this.loaded=!0,this.onLoadFunc&&this.onLoadFunc()})}}static get(e){return this.sheet?this.sheet.textures[e]:null}static onLoad(e){this.loaded?e():this.onLoadFunc=e}};let k=Ie;f(k,"sheet",null),f(k,"loaded",!1),f(k,"onLoadFunc",null);k.initialize();const rt=({width:i,height:e,bgColor:t=16777215})=>{const s=p.exports.useCallback(r=>{r.clear(),r.beginFill(t),r.drawRect(0,0,i,e),r.endFill()},[i,e]);return l(d.exports.Graphics,{draw:s})},Fi=i=>("00"+i).slice(-2),Di=i=>{const e=new Date;return`C:\xA5CPCTF\xA5Visualizer\xA5apps> .\xA5ranking
Welcome to Visualizer, USERNAME !

${i?`Ranking (Last Updated ${e.getHours()}:${Fi(e.getMinutes())}):`:"Fetching..."}`},Hi=({x:i,y:e,width:t,height:s})=>{const[r,n]=p.exports.useState(()=>R.ranking),[o,a]=p.exports.useState(!1);p.exports.useEffect(()=>{const h=()=>{a(!0)},v=()=>{a(!1),n(R.ranking)};return P.on("recalculatestart",h),P.on("recalculateend",v),()=>{P.off("recalculatestart",h),P.off("recalculateend",v)}},[]);const c=p.exports.useMemo(()=>new tt().drawRect(i,e,t,s),[i,e,t,s]),u=!o&&Z.getInstance().isInitialized;return D(d.exports.Container,{mask:c,children:[l(rt,{width:t,height:s,bgColor:0}),l(d.exports.Text,{text:Di(u),anchor:0,position:[0,0],style:new U({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:"#ffffff"})}),u?r.slice(0,10).map((h,v)=>{const m=v==0?"red":v==1||v==2?"yellow":"white";return l(d.exports.Text,{text:`${v+1} : ${h.displayName} / ${Math.floor(h.score)}pts`,anchor:0,position:[0,124+v*26],style:new U({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:m})},h.id)}):null]})},Ui={Component:null,icon:()=>k.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Bt={visualizer:{Component:Si,icon:()=>k.get("Visualizer.png"),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:ki,icon:()=>k.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:Ii,icon:()=>k.get("ReadMe.png"),title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1},ranking:{Component:Hi,icon:()=>k.get("Ranking.png"),title:"Ranking",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},fe=B/5,Ri=({id:i,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:r,starting:n}}=p.exports.useContext(q),o=p.exports.useRef(0),a=()=>{const h=o.current;if(o.current=performance.now(),o.current-h>600)return;const v=Bt[i];s[i]||!v||r(i,v)},c=p.exports.useCallback(h=>{h.clear(),n===i&&(h.beginFill(11184895,.5),h.drawRect(0,0,B,B))},[n]),u=e.icon();return D(d.exports.Container,{position:t,interactive:!0,click:a,children:[l(d.exports.Graphics,{draw:c}),u?l(d.exports.Sprite,{texture:u,position:[fe/2,0],width:B-fe,height:B-fe}):null,l(d.exports.Text,{text:e.title,anchor:[.5,0],position:[B/2,B-fe],style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:fe,fill:"#000",fontWeight:"bold",stroke:"#ffffff",strokeThickness:4})})]})};var Ni="/Visualizer/assets/BackGround.6ba2a63c.png";const Ve=12,Vi=()=>{const{width:i,height:e}=p.exports.useContext(q),t=Math.max(1,Math.floor((e-W-(B+Ve))/B));return D(Y,{children:[l(d.exports.Sprite,{image:Ni,anchor:0,x:0,y:0,width:i,height:e-W}),l(d.exports.Container,{position:[B/2,B/2],children:Object.entries(Bt).map(([s,r],n)=>l(Ri,{id:s,iconInfo:r,position:[Math.floor(n/t)*(B+Ve),n%t*(B+Ve)]},s))})]})},Bi=(i,e,t,s)=>{const r=C,n=16,o=[0,0],a=[0,0];let c="none";const u={x:0,y:0};let h=!1,v="pointer",m={x:0,y:0,width:0,height:0};return{mouseDownHandler:g=>b=>{u.x=b.data.global.x,u.y=b.data.global.y,g.fullscreen?m={x:0,y:0,width:t,height:s-W}:m=g.rect,e.focus(i),!(o[0]===0&&o[1]===0&&u.y-m.y>r)&&(a[0]=o[0],a[1]=o[1],c=o[0]===0&&o[1]===0?"move":"scale",e.update(i,z(S({},g),{rect:m,fullscreen:!1})))},mouseMoveHandler:g=>b=>{if(c!=="none")if(c==="move")v="grabbing",e.update(i,z(S({},g),{rect:{x:m.x+b.offsetX-u.x,y:m.y+b.offsetY-u.y,width:g.rect.width,height:g.rect.height}}));else{const x=S({},m),K=200,Q=200;a[0]===1?x.width=Math.max(K,m.width-u.x+b.offsetX):a[0]===-1&&(x.width=Math.max(K,u.x+m.width-b.offsetX),x.x=Math.min(m.x+m.width-K,m.x-u.x+b.offsetX)),a[1]===1?x.height=Math.max(Q,m.height-u.y+b.offsetY):a[1]===-1&&(x.height=Math.max(Q,u.y+m.height-b.offsetY),x.y=Math.min(m.y+m.height-Q,m.y-u.y+b.offsetY)),x.width=Math.max(200,x.width),x.height=Math.max(C,x.height),e.update(i,z(S({},g),{rect:x}))}},mouseUpHandler:()=>()=>{c="none"},cursorMouseMoveHandler:g=>b=>{const x=g.fullscreen?{x:0,y:0,width:t,height:s-W}:g.rect;b.data.global.x-x.x<n?o[0]=-1:x.x+x.width-b.data.global.x<n?o[0]=1:o[0]=0,b.data.global.y-x.y<n?o[1]=-1:x.y+x.height-b.data.global.y<n?o[1]=1:o[1]=0,o[0]*o[1]===1?v="nwse-resize":o[0]*o[1]===-1?v="nesw-resize":o[0]!==0?v="ew-resize":o[1]!==0?v="ns-resize":b.data.global.y-x.y<r?v="grab":v="default"},mouseOverHandler:()=>{h=!0},mouseOutHandler:()=>{h=!1},getCursor:()=>h?v:""}};let nt="";const Wt=()=>nt,Wi=i=>{nt=i},Gi=()=>{nt=""};var Li="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const ee=new pe(Li),te={topLeft:new M(ee,new F(0,0,6,26)),top:new M(ee,new F(6,0,3,26)),topRight:new M(ee,new F(9,0,6,26)),right:new M(ee,new F(9,26,6,3)),bottomRight:new M(ee,new F(9,29,6,6)),bottom:new M(ee,new F(6,29,3,6)),bottomLeft:new M(ee,new F(0,29,6,6)),left:new M(ee,new F(0,26,6,3))},ji=({width:i,height:e})=>D(Y,{children:[l(d.exports.Sprite,{texture:te.topLeft,position:[0,0],width:A,height:C}),l(d.exports.Sprite,{texture:te.top,position:[A,0],width:i-A*2,height:C}),l(d.exports.Sprite,{texture:te.topRight,position:[i-A,0],width:A,height:C}),l(d.exports.Sprite,{texture:te.right,position:[i-A,C],width:A,height:e-C-A}),l(d.exports.Sprite,{texture:te.bottomRight,position:[i-A,e-A],width:A,height:A}),l(d.exports.Sprite,{texture:te.bottom,position:[A,e-A],width:i-A*2,height:A}),l(d.exports.Sprite,{texture:te.bottomLeft,position:[0,e-A],width:A,height:A}),l(d.exports.Sprite,{texture:te.left,position:[0,C],width:A,height:e-C-A})]}),O=()=>(C-Pe*2)*.9,le=16/14,Xi=({onKill:i,onMinimize:e,onMaximize:t})=>{const s=[];let r=0,n=0;const o=k.get("WindowButtonClose.png"),a=k.get("WindowButtonMaximize.png"),c=k.get("WindowButtonMinimize.png");return!o||!a||!c?l(Y,{children:null}):(i&&(s.push(l(d.exports.Sprite,{anchor:[1,.5],texture:o,width:O()*le,height:O(),position:[-r*O()*le,0],interactive:!0,click:i},"kill")),r++,n=-2*Ae),t&&(s.push(l(d.exports.Sprite,{anchor:[1,.5],texture:a,width:O()*le,height:O(),position:[-r*O()*le+n,0],interactive:!0,click:t},"maximize")),r++),e&&(s.push(l(d.exports.Sprite,{anchor:[1,.5],texture:c,width:O()*le,height:O(),position:[-r*O()*le+n,0],interactive:!0,click:e},"minimize")),r++),l(Y,{children:s}))},Gt=i=>i-A*2,ue=i=>i-C-A,ot=({icon:i,width:e,height:t,title:s,isActive:r=!0,onMinimize:n,onMaximize:o,onKill:a,children:c})=>{const u=k.get(r?"WindowTitleBarActive.png":"WindowTitleBarInactive.png");return D(Y,{children:[D(d.exports.Container,{position:[0,0],children:[l(ji,{width:e,height:t}),u?l(d.exports.Sprite,{texture:u,width:e-A*2,height:C-Pe*2,position:[A,Pe]}):null,i?l(d.exports.Sprite,{texture:i,width:O(),height:O(),position:[A+2,Pe]}):null,l(d.exports.Text,{text:s,anchor:[0,.5],position:[A+2+(i?O()+2:0),C/2],style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:C*.5,fill:"#000"})}),l(d.exports.Container,{position:[e-A,C/2],children:l(Xi,{onKill:a,onMaximize:o,onMinimize:n})})]}),D(d.exports.Container,{position:[A,C],children:[c?l(rt,{width:e-A*2,height:t-C-A}):null,c]})]})},Oi=({id:i,windowInfo:e,focus:t})=>{const{width:s,height:r}=p.exports.useContext(q),{title:n,visible:o,fullscreen:a,Component:c}=e,[u,h]=p.exports.useState(!1),v=a?{x:0,y:0,width:s,height:r-W}:e.rect,{windowSettings:m}=p.exports.useContext(q),T=p.exports.useRef(e),E=()=>{m.update(i,z(S({},e),{fullscreen:!e.fullscreen}))},G=()=>{m.minimize(i)},$=()=>{m.kill(i)};p.exports.useEffect(()=>{T.current=e},[e]);const[g,b]=p.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return p.exports.useEffect(()=>{const x=setTimeout(()=>{h(!0)},1500),{mouseDownHandler:K,mouseMoveHandler:Q,mouseUpHandler:ne,cursorMouseMoveHandler:ae,mouseOutHandler:H,mouseOverHandler:he,getCursor:L}=Bi(i,m,s,r);b({mouseDownHandler:K,cursorMouseMoveHandler:ae,mouseOverHandler:he,mouseOutHandler:H,getCursor:L});const xe=oe=>{Q(T.current||e)(oe)},De=()=>{ne()()},ce=document.getElementById("pixicanvas");if(!!ce)return ce.addEventListener("mousemove",xe),ce.addEventListener("mouseup",De),()=>{clearTimeout(x),ce.removeEventListener("mousemove",xe),ce.removeEventListener("mouseup",De)}},[]),d.exports.useTick(()=>{g.getCursor&&g.getCursor()&&!Wt()&&Wi(g.getCursor())}),l(d.exports.Container,{position:o?[v.x,v.y]:[v.x,-99999],interactive:!0,mousedown:g.mouseDownHandler?g.mouseDownHandler(e):()=>"",mousemove:g.cursorMouseMoveHandler?g.cursorMouseMoveHandler(e):()=>"",mouseover:g.mouseOverHandler?g.mouseOverHandler:()=>"",mouseout:g.mouseOutHandler?g.mouseOutHandler:()=>"",children:l(ot,{width:v.width,height:v.height,title:n,icon:e.icon(),isActive:t,onMinimize:G,onMaximize:E,onKill:i==="visualizer"?void 0:$,children:u?c?l(c,{x:v.x+A,y:v.y+C,width:Gt(v.width),height:ue(v.height)}):l(d.exports.Container,{}):null})})};var Yi="/Visualizer/assets/youareanidiot_black.591803b6.png",qi="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Ki=({width:i,height:e,trans:t})=>{const s=i*.7,r=s/1576*994,n=p.exports.useRef(null),o=p.exports.useRef([0,0]),a=p.exports.useRef([0,0]);return p.exports.useEffect(()=>{const c=Math.PI*Math.random();a.current=[Math.cos(c)*90,Math.sin(c)*90]},[]),d.exports.useTick(c=>{if(!n.current||!o.current||!a.current)return;a.current[1]+=98*c/30;const u=[o.current[0]+a.current[0]*c/30,o.current[1]+a.current[1]*c/30];u[0]<0?(u[0]=0,a.current[0]*=-1):u[0]>i-s?(u[0]=i-s,a.current[0]*=-1):u[1]>Math.max(1,e-r)&&(u[1]=Math.max(1,e-r),a.current[1]*=-1),o.current=u,n.current.position.set(u[0],u[1])}),l(d.exports.Container,{ref:n,children:l(ot,{width:s,height:r,title:"Hahahahahaha",children:l(d.exports.Sprite,{image:t?Yi:qi,width:Gt(s),height:ue(r)})})})},Qi=({width:i,height:e})=>{const[t,s]=p.exports.useState(!1);return d.exports.useTick(()=>{const r=performance.now();s(Math.floor(r/500)%2==0)}),l(Y,{children:new Array(10).fill(null).map((r,n)=>l(Ki,{width:i,height:e,index:n,trans:t},n))})},Ji=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s}}=p.exports.useContext(q),[r,n]=p.exports.useState(!1);return p.exports.useEffect(()=>{const o=()=>{const c=new Date().getTime();Me.endTime.getTime()<c&&n(!0)},a=()=>{n(!0)};return P.on("initialized",o),P.on("end",a),()=>{P.off("initialized",o),P.off("end",a)}},[]),D(Y,{children:[l(Vi,{}),s.map((o,a)=>l(Oi,{windowInfo:t[o]||Ui,id:o,focus:a===s.length-1},o)),r?l(Qi,{width:i,height:e}):null]})},Zi=({id:i,index:e,tabWidth:t})=>{const{windowSettings:{windows:s,focused:r,focus:n,minimize:o}}=p.exports.useContext(q),a=s[i];if(!a)return l(Y,{children:null});const{title:c,visible:u}=a,h=u?k.get("TaskbarButtonActive.png"):k.get("TaskbarButtonInactive.png"),v=a.icon();return D(d.exports.Container,{position:[e*t,W/2],interactive:!0,click:()=>r===i?o(i):n(i),children:[h?l(d.exports.Sprite,{width:t*.96,height:W*.9,texture:h,anchor:[0,.5],position:[0,0]}):null,v?l(d.exports.Sprite,{width:W*.6,height:W*.6,texture:v,anchor:[0,.5],position:[7,0]}):null,l(d.exports.Text,{text:c,anchor:[0,.5],position:[14+W*.6,0],style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:W*.5*.8,fill:"#000"})})]})},_i=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=p.exports.useContext(q),s=k.get("WindowTitleBarActive.png"),r=Math.min(i/t.length,vs);return D(d.exports.Container,{position:[0,e-W],children:[s?l(d.exports.Sprite,{texture:s,width:i,height:W,anchor:0,position:[0,0]}):null,l(d.exports.Container,{position:[5,0],children:t.map((n,o)=>l(Zi,{id:n,index:o,tabWidth:r},n))})]})};var $i=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class er extends st{constructor(){super(void 0,$i,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var tr=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class sr extends st{constructor(){super(void 0,tr,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var ir=`precision mediump float;

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
}`;class rr extends st{constructor(){super(void 0,ir,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,r)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const nr="_main_11f2u_1";var or={main:nr};const ar=()=>{const{width:i,height:e}=p.exports.useContext(q),[t,s]=p.exports.useState(!0),r={width:500,height:180,left:i*.5-250,top:e*.5-90};return t?D(d.exports.Container,{children:[l(rt,{bgColor:0,width:i,height:e}),l(d.exports.Container,{position:[r.left,r.top],children:D(ot,{width:r.width,height:r.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[l(d.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:C*.5,fill:"#000"})}),l(d.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[ue(r.width)-305,ue(r.height)-5],interactive:!0,click:()=>{gt(1),s(!1),Te("mousedown"),Te("mouseup"),Be("hdd")},style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:C*.5,fill:"#000"})}),l(d.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[ue(r.width)-5,ue(r.height)-5],interactive:!0,click:()=>{gt(0),s(!1)},style:new U({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:C*.5,fill:"#000"})})]})})]}):null},bt={default:"CursorDefault.png","ns-resize":"CursorNsResize.png","ew-resize":"CursorEwResize.png","nesw-resize":"CursorNeswResize.png","nwse-resize":"CursorNwseResize.png",grab:"CursorGrab.png",grabbing:"CursorGrabbing.png",wait:"CursorWait.png"},Pt=i=>{let e=i?"wait":Wt();return bt[e]||(e="default"),k.get(bt[e])},cr=()=>{const i=p.exports.useRef(null),{windowSettings:{starting:e}}=p.exports.useContext(q),t=d.exports.useApp();d.exports.useTick(()=>{const r=t.renderer.plugins.interaction.mouse.global,n=Pt(e);i.current&&n&&(i.current.texture=n,i.current.x=r.x,i.current.y=r.y,Gi())});const s=Pt("default");return s?l(d.exports.Sprite,{ref:i,anchor:.5,width:pt,height:pt,texture:s}):l(Y,{})},lr=({children:i,Context:e,render:t})=>l(e.Consumer,{children:s=>t(l(e.Provider,{value:s,children:i}))}),ur=t=>{var s=t,{children:i}=s,e=ut(s,["children"]);const{width:r,height:n}=p.exports.useContext(q);return l(lr,{Context:q,render:o=>l(d.exports.Stage,z(S({width:r,height:n},e),{children:o})),children:i})},dr=d.exports.withFilters(d.exports.Container,{hex:rr,bloom:us,colorshift:ds,lensDistortion:er,visnetting:sr}),hr=()=>{const i=()=>{Te("mousedown")},e=()=>{Te("mouseup")},[t,s]=p.exports.useState(!1),r=d.exports.useApp();return p.exports.useEffect(()=>{r.ticker.maxFPS=30,k.onLoad(()=>{s(!0)})},[]),t?D(dr,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:[D(d.exports.Container,{mousedown:i,mouseup:e,interactive:!0,children:[l(_i,{}),l(Ji,{}),l(ar,{})]}),l(cr,{})]}):l(Y,{})},fr=()=>(p.exports.useEffect(()=>{document.body.style.cursor="none"},[]),l(ws,{children:l("main",{className:or.main,children:l(ur,{id:"pixicanvas",children:l(hr,{})})})}));hs.render(l(fs.StrictMode,{children:l(fr,{})}),document.getElementById("root"));
