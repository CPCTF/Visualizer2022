var jt=Object.defineProperty,Xt=Object.defineProperties;var Ot=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var Be=(i,e,t)=>e in i?jt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,S=(i,e)=>{for(var t in e||(e={}))dt.call(e,t)&&Be(i,t,e[t]);if(be)for(var t of be(e))ht.call(e,t)&&Be(i,t,e[t]);return i},P=(i,e)=>Xt(i,Ot(e));var Ve=(i,e)=>{var t={};for(var s in i)dt.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&be)for(var s of be(i))e.indexOf(s)<0&&ht.call(i,s)&&(t[s]=i[s]);return t};var h=(i,e,t)=>(Be(i,typeof e!="symbol"?e+"":e,t),t);import{r as p,j as nt,T as zt,G as Yt,F as qt,m as Kt,a as d,B as xe,b as k,R as H,c as D,M as we,d as Tt,S as Qt,e as le,C as I,V as j,E as Jt,f as Mt,P as De,D as Zt,g as fe,h as Et,i as kt,k as _t,l as Ne,n as ft,U as mt,o as pt,p as $t,q as It,s as es,t as ts,u as ss,A as is,v as vt,w as ns,x as Ce,y as rs,z as os,W as as,H as cs,I as ls,J as us,K as ds,L as Ue,N as gt,O as rt,Q as hs,X as fs,Y as ms,Z as ps}from"./vendor.b8c31f6d.js";const vs=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};vs();const ye=1.5,W=64*ye,gs=200*ye,w=6*ye,ze=w/3*2,T=w/6*26,G=T*1.2,At=30*ye;let Ht=0;const xt=i=>{Ht=i},Me=()=>Ht;var As="/Visualizer/assets/clickup.207be81c.mp3",xs="/Visualizer/assets/clickdown.92e482ed.mp3",ws="/Visualizer/assets/hdd.670515d8.mp3";const N={mouseup:new Audio(As),mousedown:new Audio(xs),hdd:new Audio(ws)},Ee=i=>{Me()!==0&&(!N[i]||(N[i].paused||(N[i].pause(),N[i].currentTime=0),N[i].volume=Me(),N[i].play()))},je=i=>{Me()!==0&&(!N[i]||(N[i].paused||(N[i].pause(),N[i].currentTime=Math.min(N[i].currentTime,5)),N[i].volume=Me(),N[i].play()))},ys=()=>{const[i,e]=p.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,n)=>{e(r=>{if(r.windowSettings.starting)return r;if(!r.windowSettings.windowIndices.includes(s))return je("hdd"),setTimeout(()=>{e(u=>{const f=S({},u.windowSettings.windows);f[s]=n;const v=[...u.windowSettings.windowIndices],m=[...u.windowSettings.windowStack];return v.includes(s)||(m.push(s),v.push(s)),P(S({},u),{windowSettings:P(S({},u.windowSettings),{windows:f,windowIndices:v,windowStack:m,starting:""})})})},2e3),P(S({},r),{windowSettings:P(S({},r.windowSettings),{starting:s})});const o=S({},r.windowSettings.windows);o[s]=n;const a=[...r.windowSettings.windowIndices],l=[...r.windowSettings.windowStack];return a.includes(s)||(l.push(s),a.push(s),je("hdd")),P(S({},r),{windowSettings:P(S({},r.windowSettings),{windows:o,windowIndices:a,windowStack:l})})})},kill:s=>{e(n=>{const r=S({},n.windowSettings.windows);delete r[s];const o=n.windowSettings.windowIndices.filter(f=>f!==s),a=n.windowSettings.windowStack.filter(f=>f!==s),l=o.filter(f=>{var v;return(v=r[f])==null?void 0:v.visible}),u=l.length>0?l[l.length-1]:"";return P(S({},n),{windowSettings:P(S({},n.windowSettings),{windows:r,windowIndices:o,windowStack:a,focused:u})})})},focus:s=>{e(n=>{const r=S({},n.windowSettings.windows),o=r[s];if(!o)throw new Error("invalid id");r[s]=P(S({},o),{visible:!0});const a=n.windowSettings.windowIndices.filter(l=>l!==s);return a.push(s),P(S({},n),{windowSettings:P(S({},n.windowSettings),{windows:r,windowIndices:a,focused:s})})})},minimize:s=>{e(n=>{const r=S({},n.windowSettings.windows),o=r[s];if(!o)throw new Error("invalid id");r[s]=P(S({},o),{visible:!1});const a=n.windowSettings.windowIndices.filter(u=>{var f;return u!==s&&((f=r[u])==null?void 0:f.visible)}),l=a.length>0?a[a.length-1]:"";return P(S({},n),{windowSettings:P(S({},n.windowSettings),{windows:r,focused:l})})})}}}));return[i,()=>{e(s=>P(S({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},c=nt.exports.jsx,F=nt.exports.jsxs,U=nt.exports.Fragment,Y=p.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),Ss=({children:i})=>{const[e,t]=ys();return p.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),c(Y.Provider,{value:e,children:i})},bs=["PPC","Web","Crypto","Binary","Pwn","Misc","Shell","Forensics","OSINT"];var ot="/Visualizer/assets/testicon.8f219171.jpg";const xn=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:ot,point:0,rank:-1}));const wt=i=>new Promise(e=>{setTimeout(()=>e(),i)}),ne={startTime:new Date,endTime:new Date},Cs=!1,Ps=()=>{C.emit("start")},Fs=()=>{C.emit("end")},Xe={texture:new zt,gltf:new Yt,fbx:new qt},yt=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Xe.gltf.load(i,n=>{t(n.scene)},()=>0,n=>{s(n)});break}case"texture":{Xe.texture.load(i,n=>{t(n)},()=>0,n=>{s(n)});break}}});class y{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const n=this.queue.length;if(n!==0)return this.queue.map(([r,o])=>{t?t=t.then(()=>yt(r,o)):t=yt(r,o),t=t.then((a=>{s+=1,this.resources[r]={type:o,data:a},e({path:r,data:a,total:n,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}h(y,"resources",{}),h(y,"queue",[]);class zs extends EventTarget{constructor(e){super();h(this,"id");h(this,"_score",0);h(this,"_displayName","");h(this,"_icon",null);h(this,"_iconPath","");this.id=e}get score(){return this._score}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}updateInfo(e,t){var s;if(this._displayName=e,t&&(!this._iconPath||this._iconPath!==t)){const n=new URL(t).pathname;this._iconPath=n,(s=this._icon)==null||s.dispose(),this._icon=Xe.texture.load(n)}}updateScore(e){this._score=e}}class q{static get ranking(){return this._ranking}static addUser({id:e,userName:t,iconUrl:s}){const n=new zs(e);this.users.set(e,n),n.updateInfo(t,s)}static updateUser({id:e,userName:t,iconUrl:s}){var n;!this.users.has(e)||(n=this.users.get(e))==null||n.updateInfo(t,s)}static updateRanking(e){this._ranking=e.map(({id:t,score:s})=>{const n=this.getUser(t);if(!n)throw Error(`This user does not exist : ${t}`);return n.updateScore(s),n})}static updateUserScore({id:e,score:t}){var s;(s=this.users.get(e))==null||s.updateScore(t)}static getUser(e){return this.users.get(e)}static size(){return this.users.size}}h(q,"users",new Map),h(q,"_ranking",[]);const Ts=({userId:i,name:e,iconUrl:t})=>{q.addUser({id:i,userName:e,iconUrl:t})},Ms=({userId:i,point:e,genre:t,challengeName:s})=>{C.emit("submit",{userId:i,point:e,genre:bs[t],title:s})},Es=({userId:i,name:e,iconUrl:t})=>{!q.getUser(i)||q.updateUser({id:i,userName:e,iconUrl:t})},Pe=i=>{if(i.status!==200)throw new Error("\u901A\u4FE1\u30A8\u30E9\u30FC");return i.json()};class Dt{static async initial(){const e=fetch("/api/users").then(Pe),t=fetch("/api/schedule").then(Pe),[s,n]=await Promise.all([e,t]);return{users:s,startTime:n.startTime,endTime:n.endTime}}static async recalculate(){const e=fetch("/visualizer/circuit.json").then(Pe),t=fetch("/api/ranking?includeAdmin=false").then(Pe),[s,n]=await Promise.all([e,t]);return{circuit:s,ranking:n}}}class Oe{constructor(e,t){this.sizeX=e,this.sizeY=t}}class Ut{constructor(e,t,s,n){this.x=e,this.z=t,this.isBig=s,this.category=n}}class Rt{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class ks{static jsonToInfo(e){const t=JSON.parse(e);let s=new Oe(0,0);const n=new Array(0),r=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new Oe(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;n.push(new Ut(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;r.push(new Rt(a.x,a.z,a.wires))}}),[s,n,r]}}class Ae{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=ks.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}h(Ae,"circuitBasisInfo"),h(Ae,"circuitPartsInfos"),h(Ae,"circuitWiresInfos");const Bt=()=>{(async()=>{C.emit("recalculatestart"),await Is(),C.emit("recalculateend")})()},Is=async()=>{const i=await Dt.recalculate();if(!i)return;const{ranking:e,circuit:t}=i;q.updateRanking(e),await wt(3e3),Ae.setCircuitInfo(JSON.stringify(t)),await wt(1e3)},C=Kt(),Hs=()=>{try{const i=new WebSocket(`ws://${location.host}/ws/visualizer`);i.addEventListener("message",Us.bind(globalThis)),i.addEventListener("error",e=>{console.error(e),C.emit("disconnect")})}catch(i){console.log(i)}},Ds=()=>{C.emit("initialized")};const Us=i=>{if(!i.data)return;const{type:e,data:t}=JSON.parse(i.data);if(!!e)switch(Number(e)){case 0:break;case 1:{Ts(t);break}case 2:{Ms(t);break}case 3:break;case 4:{Es(t);break}case 5:{Ps();break}case 6:{Fs();break}case 7:{Bt();break}}};var Rs="data:image/png;base64,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",Bs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Vs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",Ns="/Visualizer/assets/recalculating.60ffccdf.glb",Vt="/Visualizer/assets/monitor.81b9fd78.glb",Ws="/Visualizer/assets/face.e8cae3d3.png",Nt="/Visualizer/assets/cpu.57abf837.glb",Ye="/Visualizer/assets/graphicBoard.4a06ae3d.glb",qe="/Visualizer/assets/hdd.caa7427b.glb",Ke="/Visualizer/assets/memory.83673af4.glb",Qe="/Visualizer/assets/powerSupply.4d848de2.glb",Je="/Visualizer/assets/tipSet.fad5f9b9.glb",Ze="/Visualizer/assets/audio.3c50633a.glb",_e="/Visualizer/assets/condenser.654b5786.glb",$e="/Visualizer/assets/ports.6ad72da3.glb",et="/Visualizer/assets/ssd.447a4b88.glb",tt="/Visualizer/assets/symbols.3d122568.glb",st="/Visualizer/assets/emergency.19e4efc2.glb";const Gs=()=>{y.addGLTF(Ns),y.addGLTF(Vt),y.addTexture(Ws),y.addTexture(ot),y.addGLTF(Nt),y.addGLTF(Ye),y.addGLTF(qe),y.addGLTF(Ke),y.addGLTF(Qe),y.addGLTF(Je),y.addGLTF(Ze),y.addGLTF(_e),y.addGLTF($e),y.addGLTF(et),y.addGLTF(tt),y.addGLTF(st)},ce=({width:i,height:e,bgColor:t=16777215})=>{const s=p.exports.useCallback(n=>{n.clear(),n.beginFill(t),n.drawRect(0,0,i,e),n.endFill()},[i,e]);return c(d.exports.Graphics,{draw:s})},Ls=({width:i,height:e,loadedHandler:t})=>{const[s,n]=p.exports.useState(""),[r,o]=p.exports.useState(0),[a,l]=p.exports.useState({textures:[],index:-1});return p.exports.useEffect(()=>{(async()=>{Gs(),await y.load(({path:m,total:z,count:M})=>{n(m),o(M/z)}),t()})();const f=new xe(Rs);l({index:0,textures:[new k(f,new H(64*0,0,64,64)),new k(f,new H(64*1,0,64,64)),new k(f,new H(64*2,0,64,64)),new k(f,new H(64*3,0,64,64)),new k(f,new H(64*4,0,64,64)),new k(f,new H(64*5,0,64,64)),new k(f,new H(64*6,0,64,64)),new k(f,new H(64*7,0,64,64))]});const v=setInterval(()=>{l(m=>({index:(m.index+1)%m.textures.length,textures:m.textures}))},200);return()=>{clearInterval(v)}},[]),F(U,{children:[c(ce,{bgColor:16777215,width:i,height:e}),F(d.exports.Container,{position:[i/2,e/2],children:[a.index<0?null:c(d.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),c(d.exports.Text,{text:s,anchor:.5,position:[0,0],style:new D({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),c(d.exports.Sprite,{image:Bs,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*r)).fill(null).map((u,f)=>c(d.exports.Sprite,{image:Vs,anchor:[0,.5],position:[(f-8)*16,0],width:16,height:32},f))})]})]})};var js="/Visualizer/assets/traP_logo.25c1c1d8.png";const Xs=new xe(js),We=50,Fe=24,Os=({width:i,height:e,onComplete:t})=>{const[s,n]=p.exports.useState(0);return p.exports.useEffect(()=>{const r=setInterval(()=>{n(o=>o===We+Fe*2?(clearInterval(r),setTimeout(()=>{t()},1),o):o+1)},1e3/Fe)},[]),F(U,{children:[c(ce,{bgColor:16777215,width:i,height:e}),c(d.exports.Container,{position:[i/2,e/2],children:c(d.exports.Sprite,{texture:new k(Xs,new H(0,280*Math.min(s,We-1),1920,280)),alpha:1-Math.max(0,s-We-Fe)/Fe,anchor:.5,width:i*.9,height:i*.9/1920*280})})]})};class b{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}h(b,"startTime",-1),h(b,"_time",-1),h(b,"_deltaTime",-1),h(b,"prevTime",-1);class $ extends we{constructor(e,t){super(e,t);h(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof V||e instanceof $)&&e.update()}))}}class V extends Tt{constructor(){super();h(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof V||e instanceof $)&&e.update()}))}}const Ys=`
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
`,qs=`
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
`;class Ks extends ${constructor(){super(new Qt(100),new le({uniforms:{radius:{value:100},colorA:{value:new I("#db2784")},colorB:{value:new I("#1c1330")},sunColorA:{value:new I("#db2784")},sunColorB:{value:new I("#f2ca2b")},sunPos:{value:new j(-100,0,0).applyEuler(new Jt(0,0,-Math.PI*.06))},time:{value:0}},side:Mt,vertexShader:Ys,fragmentShader:qs}))}update(){super.update(),this.material.uniforms.time.value=b.time}}const Qs=`
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
`,Js=`
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
`;class Zs extends ${constructor(){super(new De(100,100,50,50),new le({uniforms:{colorA:{value:new I(16729343)},colorB:{value:new I(1127423)},time:{value:0}},vertexShader:Qs,fragmentShader:Js,side:Zt}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=b.time}}class _s extends V{constructor(){super();const e=new Zs;e.position.setY(-1),this.add(e),this.add(new Ks)}start(){}update(){super.update()}}var $s=`uniform sampler2D face;
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
}`,ei=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,ti="/Visualizer/assets/face.e8cae3d3.png";class si extends ${constructor(){super(new De(4*.5,3*.5),new le({vertexShader:ei,fragmentShader:$s,uniforms:{face:{value:y.get(ti)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||y.get(ot)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=fe.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=b.time)}}class Ge extends V{constructor(){super();h(this,"display");h(this,"user",null);const e=y.get(Vt).clone();this.add(e),this.display=new si,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){e?(this.user=e,this.display.setIcon(e.icon)):this.user=null}start(){}update(){super.update()}}class ii extends V{constructor(){super();h(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,n)=>{const r=new Ge,o=n/e*Math.PI*2;return r.position.set(Math.sin(o)*4,0,Math.cos(o)*4),r.scale.set(.4,.4,.4),r.lookAt(0,-2,0),this.add(r),r});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,n)=>{const r=new Ge,o=n/e*Math.PI*2;return r.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),r.scale.set(.15,.15,.15),r.lookAt(0,-2,0),this.add(r),r}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,n)=>{const r=new Ge,o=n/e*Math.PI*2;return r.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),r.scale.set(.1,.1,.1),r.lookAt(0,-2,0),this.add(r),r}),this.users=this.users.concat(t)}start(){q.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),C.on("submit",({userId:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),C.on("recalculateend",()=>{q.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class ni extends Et{constructor(){super(60,1,1,2e3);C.on("recalculatestart",()=>{fe.to(this.position,2,{y:10})}),C.on("recalculateend",()=>{fe.to(this.position,2,{y:4})})}start(){this.position.set(0,20,0),this.position.set(Math.sin(b.time*.1)*8,4,Math.cos(b.time*.1)*8),this.lookAt(0,0,0)}update(){this.position.set(Math.sin(b.time*.1)*8,this.position.y,Math.cos(b.time*.1)*8),this.lookAt(0,0,0)}}const ri=`
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
`,li=i=>new le({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:oi,vertexShader:ri,transparent:!0}),ui=i=>new le({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ci,vertexShader:ai,transparent:!0,side:Mt}),ke=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[li(e),ui(e)]},se=class extends V{constructor(e=0){super();h(this,"emergencyBlack");h(this,"emergencyRed");h(this,"offsetTime");h(this,"loopTime",2);var t,s;if(se.emergencyBlackGeom==null){const n=(t=y.get(st))==null?void 0:t.clone();se.emergencyBlackGeom=n.children[0].geometry}if(se.emergencyRedGeom==null){const n=(s=y.get(st))==null?void 0:s.clone();se.emergencyRedGeom=n.children[1].geometry}this.offsetTime=e,this.emergencyBlack=new we(se.emergencyBlackGeom),this.emergencyRed=new we(se.emergencyRedGeom),ke(this.emergencyBlack,new I(0)),ke(this.emergencyRed,new I(16711680)),this.add(this.emergencyBlack),this.add(this.emergencyRed)}start(){super.start()}update(){super.update();let e=Math.sin((b.time+this.offsetTime)/this.loopTime*Math.PI*2);e=e<0?0:e,this.scale.set(e,e,e),this.emergencyBlack.material[0].uniforms.time.value=b.time+this.offsetTime,this.emergencyRed.material[0].uniforms.time.value=b.time+this.offsetTime,this.emergencyBlack.material[1].uniforms.time.value=b.time+this.offsetTime,this.emergencyRed.material[1].uniforms.time.value=b.time+this.offsetTime}};let Te=se;h(Te,"emergencyBlackGeom"),h(Te,"emergencyRedGeom");class di extends V{constructor(){super();h(this,"size",30);h(this,"positionOffset",2/Math.sqrt(3));h(this,"offsetTimeUnit",.1);h(this,"emergencies",new Array(0));for(let e=0;e<this.size;e++){const t=e*(this.positionOffset*3/2)-Math.floor(this.size/2),s=e*this.offsetTimeUnit;for(let n=0;n<this.size;n++){const r=n*(Math.sqrt(3)*this.positionOffset)+(e%2==1?this.positionOffset*(Math.sqrt(3)/2):0)-Math.floor(this.size/2),o=new Te(s);o.position.setX(r),o.position.setZ(t),this.emergencies.push(o),this.add(o)}}}}class Wt extends ${constructor(e){const t=e.clipBias!==void 0?e.clipBias:0,s=e.alpha!==void 0?e.alpha:1,n=e.time!==void 0?e.time:0,r=e.waterNormals!==void 0?e.waterNormals:null,o=e.sunDirection!==void 0?e.sunDirection:new j(.70707,.70707,0),a=new I(e.sunColor!==void 0?e.sunColor:16777215),l=new I(e.waterColor!==void 0?e.waterColor:8355711),u=e.eye!==void 0?e.eye:new j(0,0,0),f=e.distortionScale!==void 0?e.distortionScale:20,v=e.side!==void 0?e.side:kt,m=e.fog!==void 0?e.fog:!1,z=new _t,M=new j,R=new j,Z=new j,g=new Ne,A=new j(0,0,-1),x=new ft,K=new j,Q=new j,re=new ft,ue=new Ne,B=new Et,me={uniforms:mt.merge([pt.fog,pt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ne},sunColor:{value:new I(8355711)},sunDirection:{value:new j(.70707,.70707,0)},eye:{value:new j},waterColor:{value:new I(5592405)}}]),vertexShader:`
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
				}`},L=new le({fragmentShader:me.fragmentShader,vertexShader:me.vertexShader,uniforms:mt.clone(me.uniforms),lights:!0,side:v,fog:m});L.uniforms.textureMatrix.value=ue,L.uniforms.alpha.value=s,L.uniforms.time.value=n,L.uniforms.normalSampler.value=r,L.uniforms.sunColor.value=a,L.uniforms.waterColor.value=l,L.uniforms.sunDirection.value=o,L.uniforms.distortionScale.value=f,L.uniforms.eye.value=u;const Se=new De(1e3,1e3);super(Se,L);h(this,"isWater",!0);this.onBeforeRender=function(Re,de,oe){if(R.setFromMatrixPosition(this.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld),g.extractRotation(this.matrixWorld),M.set(0,0,1),M.applyMatrix4(g),K.subVectors(R,Z),K.dot(M)>0)return;K.reflect(M).negate(),K.add(R),g.extractRotation(oe.matrixWorld),A.set(0,0,-1),A.applyMatrix4(g),A.add(Z),Q.subVectors(R,A),Q.reflect(M).negate(),Q.add(R),B.position.copy(K),B.up.set(0,1,0),B.up.applyMatrix4(g),B.up.reflect(M),B.lookAt(Q),B.far=oe.far,B.updateMatrixWorld(),B.projectionMatrix.copy(oe.projectionMatrix),ue.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ue.multiply(B.projectionMatrix),ue.multiply(B.matrixWorldInverse),z.setFromNormalAndCoplanarPoint(M,R),z.applyMatrix4(B.matrixWorldInverse),x.set(z.normal.x,z.normal.y,z.normal.z,z.constant);const J=B.projectionMatrix;re.x=(Math.sign(x.x)+J.elements[8])/J.elements[0],re.y=(Math.sign(x.y)+J.elements[9])/J.elements[5],re.z=-1,re.w=(1+J.elements[10])/J.elements[14],x.multiplyScalar(2/x.dot(re)),J.elements[2]=x.x,J.elements[6]=x.y,J.elements[10]=x.z+1-t,J.elements[14]=x.w,u.setFromMatrixPosition(oe.matrixWorld)}}}Wt.prototype.isWater=!0;var hi="/Visualizer/assets/Water_1_M_Normal.6d782546.jpg";class fi extends V{constructor(){super();h(this,"water");const e={textureWidth:512,textureHeight:512,waterNormals:new zt().load(hi,function(t){t.wrapS=t.wrapT=$t}),alpha:1,waterColor:4098510,distortionScale:2.7,fog:void 0,sunDirection:void 0,sunColor:void 0,clipBias:void 0,time:void 0,eye:void 0,side:kt};this.water=new Wt(e),this.water.rotation.x=-Math.PI/2,this.add(this.water)}start(){super.start()}update(){super.update(),this.water.material.uniforms.time.value=b.time}}class mi extends V{constructor(){super();h(this,"startY",-2);h(this,"endY",2);h(this,"emergencyAnimation");h(this,"waterAnimation");this.emergencyAnimation=new di,this.waterAnimation=new fi,this.add(this.emergencyAnimation),this.add(this.waterAnimation)}start(){super.start(),this.visible=!1,this.emergencyAnimation.position.y=.5,this.position.y=this.startY,C.on("recalculatestart",()=>{this.visible=!0,fe.to(this.position,1,{y:this.endY})}),C.on("recalculateend",()=>{fe.to(this.position,1,{y:this.startY}).eventCallback("onComplete",()=>{this.visible=!1})})}update(){super.update()}}const pi=async()=>{const i=await Dt.initial();i.users.forEach(e=>{q.addUser(e)}),ne.startTime=new Date(i.startTime),ne.endTime=new Date(i.endTime),setTimeout(()=>{Bt()},4500)};class vi{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,n)=>{this.wires[n]=new Ai(n)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const n=s.getWirePointsInt(e,t);this.wirePoints.forEach((r,o)=>{this.wirePoints[o]=n[o]==1}),this.wires.forEach(r=>{r.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class gi{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMax=4,this.counterMax=10,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class Ai{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let n=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let r=0;r<3;r++){const o=t[r];if(this.canTo[o]!=-1&&o!=e){n=this.canTo[o];break}}return this.cantTo(),n==-1?(this.from=-1,-1):(this.to=n,n)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,n=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){n++;continue}if(a==this.from){s=n;continue}const l=this.canTo.findIndex(u=>u==a);l!=-1&&(t[l]=n)}const r=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?r[a]=o:r[a]=-1}),this.canTo=r}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const it=class{constructor(i,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=i,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.cells[t*i+s]=new vi(s,t)}putParts(i,e,t){if(!this.canPutParts(i,e,t))return!1;const s=t.SizeY(),n=t.SizeX(),r=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<n;a++){const l=e+o,u=i+a,f=this.getCell(u,l);f.setParts(a,o,t),r.push(f)}return t.setPosition(i,e),this.partsCellDict[t.id]=r,this.parts.push(t),!0}getPartsCells(i){return i.id in this.partsCellDict?this.partsCellDict[i.id]:new Array(0)}getAllPartsCells(){const i=new Array(0);for(const e in this.partsCellDict)i.push(this.partsCellDict[e]);return i}extendWires(i){const e=i.x,t=i.y;i.getActiveWirePointsIndex().forEach(n=>{let r=e,o=t;const a=n%8,l=(n-a)/8,u=new gi(l);for(;n!=-1;){const[f,v]=this.indexConvertToAroundIndex(n);r+=it.dx[f],o+=it.dy[f];const m=this.getCell(r,o);if(m==null||(u.update(v,f),n=m.setWire(u),n==-1))break}})}convertToCircuitInfos(){const i=new Oe(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const n=new Array(0);s.getAllWires().forEach(r=>{r.isEmpty()||(r.isHole()?n.push([r.ind,r.to]):n.push([r.from,r.to]))}),n.length!=0&&t.push(new Rt(s.x,s.y,n))}),this.parts.forEach(s=>{const[n,r]=s.getPosition();e.push(new Ut(n,r,s.isBig,s.problemCategory!=null?s.problemCategory:""))}),[i,e,t]}canPutParts(i,e,t){const s=t.SizeY(),n=t.SizeX();for(let r=0;r<s;r++)for(let o=0;o<n;o++){const a=e+r,l=i+o,u=this.getCell(l,a);if(u==null)return!1;if(u.isParts())return!1}return!0}getCell(i,e){if(0<=e&&e<this.sizeY&&0<=i&&i<this.sizeX)return this.cells[e*this.sizeX+i]}indexConvertToAroundIndex(i){const e=i%8,t=(i-e)/8,n=((t+2)%4+1)*8-e-1;return[t,n]}};let Ie=it;Ie.dy=[1,0,-1,0];Ie.dx=[0,1,0,-1];const X=class extends ${constructor(e){const t=X.createWireGeometry(e);super(t,X.material)}start(){}update(){super.update()}static createWireGeometry(e){let t=new es;const s=1,n=.25,r=.5,o=.25,a=16,[l,u]=e;if(u==-1){const f=s*r/8/2,v=s*o/8/2,m=new ts(v,f,a);m.rotateX(-Math.PI/2);let[z,M]=this.wireIndexToPosition(l,s);const R=(l-l%8)/8;R==0||R==2?M-=Math.sign(M)*(f-v):z-=Math.sign(z)*(f-v);const Z=m.attributes.position.count;for(let g=0;g<Z;g++){const A=m.attributes.position.getX(g),x=m.attributes.position.getZ(g);m.attributes.position.setXYZ(g,A+z,0,x+M)}t=m}else{const[f,v]=X.wireIndexToPositionPair(l,s,n),[m,z]=X.wireIndexToPositionPair(u,s,n),M=new Float32Array([f[0],0,f[1],v[0],0,v[1],m[0],0,m[1],m[0],0,m[1],z[0],0,z[1],f[0],0,f[1]]);t.setAttribute("position",new ss(M,3))}return t}static wireIndexToPosition(e,t=1){const s=e%8,n=(e-s)/8,r=t/8,o=r*s-r*7/2,a=Ie.dx[n]/2+X.sx[n]*o,l=Ie.dy[n]/2+X.sy[n]*o;return[a,l]}static wireIndexToPositionPair(e,t=1,s=.5){const n=e%8,r=(e-n)/8,o=t/8,[a,l]=this.wireIndexToPosition(e,t),u=[a-X.sx[r]*s*o/2,l-X.sy[r]*s*o/2],f=[a+X.sx[r]*s*o/2,l+X.sy[r]*s*o/2];return[u,f]}};let ge=X;h(ge,"sx",[1,0,-1,0]),h(ge,"sy",[0,-1,0,1]),h(ge,"material",new It({color:16777215}));class ie{}h(ie,"cpuPath",Nt),h(ie,"partsPath",{PPC:Je,Web:Ke,Crypto:Qe,Binary:qe,Pwn:$e,Misc:Ze,Shell:et,Forensics:_e,OSINT:Ye}),h(ie,"partsBigPath",{PPC:Je,Web:Ke,Crypto:Qe,Binary:qe,Pwn:$e,Misc:Ze,Shell:et,Forensics:_e,OSINT:Ye});class xi extends V{constructor(){super();h(this,"app");h(this,"texture");h(this,"nameText");h(this,"titleText");h(this,"needsUpdate",!1);const e=1024,t=48;this.app=new is({width:e,height:t,autoStart:!1,backgroundAlpha:0}),this.nameText=new vt("string"),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new vt("string"),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const s=new we(new De(e,t),new It({map:null,transparent:!0}));s.position.z=1e-4;const n=s.clone();n.rotation.y=Math.PI,n.position.z=-1e-5,this.texture=new ns(this.app.view),s.material.map=this.texture,n.material.map=this.texture,this.add(s,n)}redraw(e,t,s){const n=s.getStyle(),r=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style=new D({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:n,fontSize:20,lineJoin:"round",stroke:r,strokeThickness:2}),this.nameText.style.fill=n,this.nameText.style.stroke=r,this.titleText.text=t,this.titleText.style=new D({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:n,fontSize:20,lineJoin:"round",stroke:r,strokeThickness:2}),this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class wi extends V{constructor(){super();h(this,"question");h(this,"exclamation");h(this,"submissionInfo");h(this,"objects");h(this,"animationTimeline",null);this.objects=new Tt,this.question=y.get(tt).children[0],this.exclamation=y.get(tt).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,ke(this.question,new I(16711680)),ke(this.exclamation,new I(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new xi),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){C.on("submit",e=>{const t=fe.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=q.getUser(e.userId))==null?void 0:s.displayName,e.title,new I(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:Ce.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:Ce.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new I(65280))}),t.to(this.objects.position,.15,{z:0,ease:Ce.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:Ce.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1}),this.animationTimeline&&this.animationTimeline.kill(),this.animationTimeline=t})}update(){super.update(),this.rotation.y+=Math.PI*b.deltaTime*.3,this.position.y=Math.sin(b.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=b.time,this.exclamation.material[0].uniforms.time.value=b.time,this.question.material[1].uniforms.time.value=b.time,this.exclamation.material[1].uniforms.time.value=b.time}}class yi extends V{constructor(){super();h(this,"objectPool",{});this.add(new wi)}start(){super.start(),this.setPrefabs(),this.position.add(new j(0,.1,0)),C.on("recalculatestart",()=>{}),C.on("recalculateend",()=>{this.removeAllObject(),this.createCircuit()}),this.createObject("CPU").position.set(-.5,0,-.5)}update(){super.update()}createCircuit(){const[e,t,s]=Ae.getCircuitInfo(),n=-e.sizeX/2-.5,r=0,o=-e.sizeY/2-.5;t.forEach(a=>{let l="",u=0,f=0;a.category==""?l="CPU":a.isBig?(l="Big"+a.category,u=.5,f=.5):l=a.category;const v=this.createObject(l);v!=null&&v.position.set(a.x+n+u,0+r,a.z+o+f)}),s.forEach(a=>{a.wires.forEach(l=>{const u=this.createObject("Wire"+l.toString());u!=null&&u.position.set(a.x+n,0+r,a.z+o)})})}setPrefabs(){var s,n,r;const e=(s=y.get(ie.cpuPath))==null?void 0:s.clone();e.visible=!1,this.objectPool.CPU=[[e],1],this.add(e);for(const o in ie.partsBigPath){const a=(n=y.get(ie.partsBigPath[o]))==null?void 0:n.clone();a!=null&&(a.visible=!1,a.scale.set(2,2,2),this.objectPool["Big"+o]=[[a],1],this.add(a))}for(const o in ie.partsPath){const a=(r=y.get(ie.partsPath[o]))==null?void 0:r.clone();a!=null&&(a.visible=!1,this.objectPool[o]=[[a],1],this.add(a))}const t=o=>{const a=new ge(o),l=new we(a.geometry,a.material);l.visible=!1,this.objectPool["Wire"+o.toString()]=[[l],1],this.add(l)};for(let o=0;o<32;o++){let a=[o,-1];t(a);const l=o%8,u=(o-l)/8;[15-l,23-l,31-l].forEach(v=>{const m=((v+8*u)%32+32)%32;a=[o,m],t(a)})}}createObject(e){if(this.objectPool[e]==null)return;const[t,s]=this.objectPool[e];let n;s>=t.length?(n=t[0].clone(),t.push(n),this.add(n)):n=t[s],n.visible=!0;const r=s+1;return this.objectPool[e]=[t,r],n}removeAllObject(){for(const e in this.objectPool)this.objectPool[e][0].forEach(t=>t.visible=!1),this.objectPool[e][1]=1}}const St={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
  `,fragmentShader:`
uniform sampler2D tDiffuse;
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
  vec4 texeln = texture2D( tDiffuse, floor(vUv * 100.0) / 100.0 );
  texeln = floor(texeln * 4.0) / 4.0;
  vec4 texel = texture2D( tDiffuse, vUv );

  vec4 edge = texeln;

  vec4 main = mix(texel, edge, step(vUv.y, 1.0 - progress));
  float gray = main.r * 0.3 + main.g * 0.59 + main.b * 0.11;
  main = mix(main, vec4(gray, gray, gray, 1.0), 0.3);
  gl_FragColor = vec4(main.rgb, 1.0);
}
  `};class Si extends rs{constructor(e){super();h(this,"camera");h(this,"material");h(this,"oldClearColor");h(this,"fsQuad");h(this,"progress",0);this.camera=e,this.material=new le({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},near:{value:e.near},far:{value:e.far},progress:{value:0}},vertexShader:St.vertexShader,fragmentShader:St.fragmentShader}),this.oldClearColor=new I,this.fsQuad=new os(this.material)}render(e,t,s){e.getClearColor(this.oldClearColor);const n=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,this.material.uniforms.tDiffuse.value=s.texture,this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.progress=Math.min(1,this.progress+(Math.random()<.05?Math.random()*.1:0)),this.material.uniforms.progress.value=this.progress,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(n),e.autoClear=r}}const ut=class{constructor(){h(this,"renderer",null);h(this,"camera",null);h(this,"composer",null);h(this,"_tick",null);h(this,"isLoaded",!1);h(this,"isStartCalled",!1);h(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new ut,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new as({canvas:e,antialias:!0});t.setClearColor(new I(1114129));const s=new cs(t);this.composer=s;const n=new ni,r=new ls;r.add(new _s,new ii,new mi,new yi),Hs(),s.addPass(new us(r,n)),s.addPass(new ds(.7,.3,void 0,0));const o=new Si(n);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(b.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),b.update(performance.now()),n.update(),r.children.map(l=>{(l instanceof V||l instanceof $)&&l.update()}),s.render())},this.renderer=t,this.camera=n,pi().then(()=>{this.isLoaded=!0,Ds()})}start(){this.isStartCalled=!0}};let _=ut;h(_,"instance");const pe=i=>("00"+i).slice(-2),bi=({x:i,y:e,width:t,height:s})=>{const n=p.exports.useRef(null),[r,o]=p.exports.useState({width:t,height:s}),[a,l]=p.exports.useState(new k(new xe)),[u,f]=p.exports.useState("loading"),v=p.exports.useRef(null),m=p.exports.useRef(null),z=p.exports.useMemo(()=>new Ue().drawRect(i,e,t,s),[i,e,t,s]);d.exports.useTick(()=>{a.update();const g=_.getInstance().tick;if(g&&g(),v.current&&m.current){const A=new Date;v.current.text=`${A.getFullYear()}-${pe(A.getMonth())}-${pe(A.getDate())} ${pe(A.getHours())}:${pe(A.getMinutes())}:${pe(A.getSeconds())}`,ne.startTime&&ne.endTime&&ne.startTime<A&&A<ne.endTime?m.current.text=`
\uFF8B\uFF9E\uFF7C\uFF9E\uFF6D\uFF71\uFF97\uFF72\uFF7B\uFF9E-\uFF77\uFF6E\uFF73\uFF77\uFF9E\uFF81\uFF6D\uFF73`:m.current.text=`
\uFF8B\uFF9E\uFF7C\uFF9E\uFF6D\uFF71\uFF97\uFF72\uFF7B\uFF9E`}}),p.exports.useEffect(()=>{_.getInstance().resize(t,s),a.update(),o({width:t,height:s})},[t,s]);const M=()=>{const g=document.createElement("canvas");document.body.appendChild(g),n.current=g,_.getInstance().setup(g),_.getInstance().resize(t,s),l(new k(xe.from(g))),f("splashscreen")},R=()=>{_.getInstance().start(),f("visualizer")};return c(U,{children:(g=>g==="loading"?c(Ls,{width:t,height:s,loadedHandler:M}):g==="splashscreen"?c(Os,{width:t,height:s,onComplete:R}):F(d.exports.Container,{mask:z,children:[c(d.exports.Sprite,{texture:a,width:r.width,height:r.height}),c(d.exports.Text,{ref:m,text:`
\uFF8B\uFF9E\uFF7C\uFF9E\uFF6D\uFF71\uFF97\uFF72\uFF7B\uFF9E`,anchor:[0,0],position:[20,20],style:new D({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:48,fill:"#ffffff"})}),c(d.exports.Text,{ref:v,text:"",anchor:[0,0],position:[20,10],style:new D({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:48,fill:"#ffffff"})})]}))(u)})};var Ci="/Visualizer/assets/kusodasaBackGround.aa7102d2.png",Pi="/Visualizer/assets/kusodasaTitle.1b5d3374.png",Fi="/Visualizer/assets/kusodasaTitle2.25e09b49.png",zi="/Visualizer/assets/nazoCat.7266b510.png",Ti="data:image/png;base64,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";const bt=i=>("00"+i).slice(-2),Mi=i=>("0000"+i).slice(-4),Ei=({x:i,y:e,width:t,height:s})=>{const[n,r]=p.exports.useState(""),[o,a]=p.exports.useState("");d.exports.useTick(()=>{const u=new Date;if(r(`${u.getHours()}\u6642${bt(u.getMinutes())}\u5206`),!_.getInstance().isInitialized)return;const f=Math.ceil((ne.endTime.getTime()-u.getTime())/1e3/60);a(`${Math.floor(f/60)}\u6642\u9593${bt(f%60)}\u5206`)});const l=Math.max(750,t);return F(d.exports.Container,{mask:p.exports.useMemo(()=>new Ue().drawRect(i,e,t,s),[i,e,t,s]),children:[c(ce,{bgColor:16777215,width:t,height:s}),F(d.exports.Container,{scale:t/l,children:[c(d.exports.Sprite,{image:Ci,position:[0,0],width:l,height:l}),o?c(d.exports.Sprite,{image:Pi,anchor:[.5,0],position:[l/2,40]}):c(d.exports.Sprite,{image:Fi,anchor:[.5,0],position:[l/2,40]}),c(d.exports.Text,{text:o||n,anchor:[.5,0],position:[l/2,190],style:new D({dropShadow:!0,dropShadowAlpha:.6,dropShadowBlur:8,dropShadowDistance:16,fill:["fuchsia","blue","lime","yellow","#ff8000","red"],fillGradientType:1,fontFamily:"HGRPP1",fontSize:128,letterSpacing:3})}),c(d.exports.Sprite,{image:zi,anchor:[.5,0],position:[l/2,400]}),o?F(U,{children:[c(d.exports.Sprite,{image:Ti,anchor:[.5,0],position:[l/2,550]}),c(d.exports.Text,{text:`${Mi(q.size())}`,anchor:.5,position:[l/2-60,603],style:new D({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:24,fill:"yellow"})})]}):null]})]})},ki=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,Ii=({x:i,y:e,width:t,height:s})=>F(d.exports.Container,{mask:p.exports.useMemo(()=>new Ue().drawRect(i,e,t,s),[i,e,t,s]),children:[c(ce,{bgColor:16777215,width:t,height:s}),c(d.exports.Text,{text:ki,anchor:0,position:[0,0],style:new D({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:32,lineHeight:43,fill:"#000000"})})]}),He=class{static initialize(){if(He.sheet===null){const e=location.pathname.replace(/index\.html.*/gm,"");gt.shared.add("uisprites",`${e}sprites/spritesheet.json`).load(()=>{var t;He.sheet=(t=gt.shared.resources.uisprites.spritesheet)!=null?t:null,this.loaded=!0,this.onLoadFunc&&this.onLoadFunc()})}}static get(e){return this.sheet?this.sheet.textures[e]:null}static onLoad(e){this.loaded?e():this.onLoadFunc=e}};let E=He;h(E,"sheet",null),h(E,"loaded",!1),h(E,"onLoadFunc",null);E.initialize();const Hi=i=>("00"+i).slice(-2),Di=i=>{const e=new Date;return`C:\xA5CPCTF\xA5Visualizer\xA5apps> .\xA5ranking
Welcome to Visualizer, USERNAME !

${i?`Ranking (Last Updated ${e.getHours()}:${Hi(e.getMinutes())}):`:"Fetching..."}`},Ui=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th"],Ri=({x:i,y:e,width:t,height:s})=>{const[n,r]=p.exports.useState(!1);p.exports.useEffect(()=>{const l=()=>{r(!0)},u=()=>{r(!1)};return C.on("recalculatestart",l),C.on("recalculateend",u),()=>{C.off("recalculatestart",l),C.off("recalculateend",u)}},[]);const o=p.exports.useMemo(()=>new Ue().drawRect(i,e,t,s),[i,e,t,s]),a=!n&&_.getInstance().isInitialized;return F(d.exports.Container,{mask:o,children:[c(ce,{width:t,height:s,bgColor:0}),c(d.exports.Text,{text:Di(a),anchor:0,position:[0,0],style:new D({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:"#ffffff"})}),a?q.ranking.slice(0,20).map((l,u)=>{const f=u==0?"red":u==1||u==2?"yellow":"white";return c(d.exports.Text,{text:`${Ui[u]} : ${l.displayName} / ${Math.floor(l.score)}pts`,anchor:0,position:[0,124+u*26],style:new D({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:f})},l.id)}):null]})},Bi={Component:null,icon:()=>E.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Gt={visualizer:{Component:bi,icon:()=>E.get("Visualizer.png"),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:Ei,icon:()=>E.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:Ii,icon:()=>E.get("ReadMe.png"),title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1},ranking:{Component:Ri,icon:()=>E.get("Ranking.png"),title:"Ranking",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},ve=W/5,Vi=({id:i,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:n,starting:r}}=p.exports.useContext(Y),o=p.exports.useRef(0),a=()=>{const f=o.current;if(o.current=performance.now(),o.current-f>600)return;const v=Gt[i];s[i]||!v||n(i,v)},l=p.exports.useCallback(f=>{f.clear(),r===i&&(f.beginFill(11184895,.5),f.drawRect(0,0,W,W))},[r]),u=e.icon();return F(d.exports.Container,{position:t,interactive:!0,click:a,children:[c(d.exports.Graphics,{draw:l}),u?c(d.exports.Sprite,{texture:u,position:[ve/2,0],width:W-ve,height:W-ve}):null,c(d.exports.Text,{text:e.title,anchor:[.5,0],position:[W/2,W-ve],style:new D({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:ve,fill:"#000",fontWeight:"bold",stroke:"#ffffff",strokeThickness:4})})]})};var Ni="/Visualizer/assets/BackGround.6ba2a63c.png";const Le=12,Wi=()=>{const{width:i,height:e}=p.exports.useContext(Y),t=Math.max(1,Math.floor((e-G-(W+Le))/W));return F(U,{children:[c(d.exports.Sprite,{image:Ni,anchor:0,x:0,y:0,width:i,height:e-G}),c(d.exports.Container,{position:[W/2,W/2],children:Object.entries(Gt).map(([s,n],r)=>c(Vi,{id:s,iconInfo:n,position:[Math.floor(r/t)*(W+Le),r%t*(W+Le)]},s))})]})},Gi=(i,e,t,s)=>{const n=T,r=16,o=[0,0],a=[0,0];let l="none";const u={x:0,y:0};let f=!1,v="pointer",m={x:0,y:0,width:0,height:0};return{mouseDownHandler:g=>A=>{u.x=A.data.global.x,u.y=A.data.global.y,g.fullscreen?m={x:0,y:0,width:t,height:s-G}:m=g.rect,e.focus(i),!(o[0]===0&&o[1]===0&&u.y-m.y>n)&&(a[0]=o[0],a[1]=o[1],l=o[0]===0&&o[1]===0?"move":"scale",e.update(i,P(S({},g),{rect:m,fullscreen:!1})))},mouseMoveHandler:g=>A=>{if(l!=="none")if(l==="move")v="grabbing",e.update(i,P(S({},g),{rect:{x:m.x+A.offsetX-u.x,y:m.y+A.offsetY-u.y,width:g.rect.width,height:g.rect.height}}));else{const x=S({},m),K=200,Q=200;a[0]===1?x.width=Math.max(K,m.width-u.x+A.offsetX):a[0]===-1&&(x.width=Math.max(K,u.x+m.width-A.offsetX),x.x=Math.min(m.x+m.width-K,m.x-u.x+A.offsetX)),a[1]===1?x.height=Math.max(Q,m.height-u.y+A.offsetY):a[1]===-1&&(x.height=Math.max(Q,u.y+m.height-A.offsetY),x.y=Math.min(m.y+m.height-Q,m.y-u.y+A.offsetY)),x.width=Math.max(200,x.width),x.height=Math.max(T,x.height),e.update(i,P(S({},g),{rect:x}))}},mouseUpHandler:()=>()=>{l="none"},cursorMouseMoveHandler:g=>A=>{const x=g.fullscreen?{x:0,y:0,width:t,height:s-G}:g.rect;A.data.global.x-x.x<r?o[0]=-1:x.x+x.width-A.data.global.x<r?o[0]=1:o[0]=0,A.data.global.y-x.y<r?o[1]=-1:x.y+x.height-A.data.global.y<r?o[1]=1:o[1]=0,o[0]*o[1]===1?v="nwse-resize":o[0]*o[1]===-1?v="nesw-resize":o[0]!==0?v="ew-resize":o[1]!==0?v="ns-resize":A.data.global.y-x.y<n?v="grab":v="default"},mouseOverHandler:()=>{f=!0},mouseOutHandler:()=>{f=!1},getCursor:()=>f?v:""}};let at="";const Lt=()=>at,Li=i=>{at=i},ji=()=>{at=""};var Xi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const ee=new xe(Xi),te={topLeft:new k(ee,new H(0,0,6,26)),top:new k(ee,new H(6,0,3,26)),topRight:new k(ee,new H(9,0,6,26)),right:new k(ee,new H(9,26,6,3)),bottomRight:new k(ee,new H(9,29,6,6)),bottom:new k(ee,new H(6,29,3,6)),bottomLeft:new k(ee,new H(0,29,6,6)),left:new k(ee,new H(0,26,6,3))},Oi=({width:i,height:e})=>F(U,{children:[c(d.exports.Sprite,{texture:te.topLeft,position:[0,0],width:w,height:T}),c(d.exports.Sprite,{texture:te.top,position:[w,0],width:i-w*2,height:T}),c(d.exports.Sprite,{texture:te.topRight,position:[i-w,0],width:w,height:T}),c(d.exports.Sprite,{texture:te.right,position:[i-w,T],width:w,height:e-T-w}),c(d.exports.Sprite,{texture:te.bottomRight,position:[i-w,e-w],width:w,height:w}),c(d.exports.Sprite,{texture:te.bottom,position:[w,e-w],width:i-w*2,height:w}),c(d.exports.Sprite,{texture:te.bottomLeft,position:[0,e-w],width:w,height:w}),c(d.exports.Sprite,{texture:te.left,position:[0,T],width:w,height:e-T-w})]}),O=()=>(T-ze*2)*.9,he=16/14,Yi=({onKill:i,onMinimize:e,onMaximize:t})=>{const s=[];let n=0,r=0;const o=E.get("WindowButtonClose.png"),a=E.get("WindowButtonMaximize.png"),l=E.get("WindowButtonMinimize.png");return!o||!a||!l?c(U,{children:null}):(i&&(s.push(c(d.exports.Sprite,{anchor:[1,.5],texture:o,width:O()*he,height:O(),position:[-n*O()*he,0],interactive:!0,click:i},"kill")),n++,r=-2*ye),t&&(s.push(c(d.exports.Sprite,{anchor:[1,.5],texture:a,width:O()*he,height:O(),position:[-n*O()*he+r,0],interactive:!0,click:t},"maximize")),n++),e&&(s.push(c(d.exports.Sprite,{anchor:[1,.5],texture:l,width:O()*he,height:O(),position:[-n*O()*he+r,0],interactive:!0,click:e},"minimize")),n++),c(U,{children:s}))},ct=i=>i-w*2,ae=i=>i-T-w,lt=({icon:i,width:e,height:t,title:s,isActive:n=!0,onMinimize:r,onMaximize:o,onKill:a,children:l})=>{const u=E.get(n?"WindowTitleBarActive.png":"WindowTitleBarInactive.png");return F(U,{children:[F(d.exports.Container,{position:[0,0],children:[c(Oi,{width:e,height:t}),u?c(d.exports.Sprite,{texture:u,width:e-w*2,height:T-ze*2,position:[w,ze]}):null,i?c(d.exports.Sprite,{texture:i,width:O(),height:O(),position:[w+2,ze]}):null,c(d.exports.Text,{text:s,anchor:[0,.5],position:[w+2+(i?O()+2:0),T/2],style:new D({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:T*.5,fill:"#000"})}),c(d.exports.Container,{position:[e-w,T/2],children:c(Yi,{onKill:a,onMaximize:o,onMinimize:r})})]}),c(d.exports.Container,{position:[w,T],children:l})]})},qi=({id:i,windowInfo:e,focus:t})=>{const{width:s,height:n}=p.exports.useContext(Y),{title:r,visible:o,fullscreen:a,Component:l}=e,[u,f]=p.exports.useState(!1),v=a?{x:0,y:0,width:s,height:n-G}:e.rect,{windowSettings:m}=p.exports.useContext(Y),z=p.exports.useRef(e),M=()=>{m.update(i,P(S({},e),{fullscreen:!e.fullscreen}))},R=()=>{m.minimize(i)},Z=()=>{m.kill(i)};p.exports.useEffect(()=>{z.current=e},[e]);const[g,A]=p.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return p.exports.useEffect(()=>{const x=setTimeout(()=>{f(!0)},1500),{mouseDownHandler:K,mouseMoveHandler:Q,mouseUpHandler:re,cursorMouseMoveHandler:ue,mouseOutHandler:B,mouseOverHandler:me,getCursor:L}=Gi(i,m,s,n);A({mouseDownHandler:K,cursorMouseMoveHandler:ue,mouseOverHandler:me,mouseOutHandler:B,getCursor:L});const Se=oe=>{Q(z.current||e)(oe)},Re=()=>{re()()},de=document.getElementById("pixicanvas");if(!!de)return de.addEventListener("mousemove",Se),de.addEventListener("mouseup",Re),()=>{clearTimeout(x),de.removeEventListener("mousemove",Se),de.removeEventListener("mouseup",Re)}},[]),d.exports.useTick(()=>{g.getCursor&&g.getCursor()&&!Lt()&&Li(g.getCursor())}),c(d.exports.Container,{position:o?[v.x,v.y]:[v.x,-99999],interactive:!0,mousedown:g.mouseDownHandler?g.mouseDownHandler(e):()=>"",mousemove:g.cursorMouseMoveHandler?g.cursorMouseMoveHandler(e):()=>"",mouseover:g.mouseOverHandler?g.mouseOverHandler:()=>"",mouseout:g.mouseOutHandler?g.mouseOutHandler:()=>"",children:c(lt,{width:v.width,height:v.height,title:r,icon:e.icon(),isActive:t,onMinimize:R,onMaximize:M,onKill:i==="visualizer"?void 0:Z,children:u?l?c(l,{x:v.x+w,y:v.y+T,width:ct(v.width),height:ae(v.height)}):c(d.exports.Container,{}):null})})};var Ki="/Visualizer/assets/youareanidiot_black.591803b6.png",Qi="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Ji=({width:i,height:e,trans:t})=>{const s=i*.7,n=s/1576*994,r=p.exports.useRef(null),o=p.exports.useRef([0,0]),a=p.exports.useRef([0,0]);return p.exports.useEffect(()=>{const l=Math.PI*Math.random();a.current=[Math.cos(l)*90,Math.sin(l)*90]},[]),d.exports.useTick(l=>{if(!r.current||!o.current||!a.current)return;a.current[1]+=98*l/30;const u=[o.current[0]+a.current[0]*l/30,o.current[1]+a.current[1]*l/30];u[0]<0?(u[0]=0,a.current[0]*=-1):u[0]>i-s?(u[0]=i-s,a.current[0]*=-1):u[1]>Math.max(1,e-n)&&(u[1]=Math.max(1,e-n),a.current[1]*=-1),o.current=u,r.current.position.set(u[0],u[1])}),c(d.exports.Container,{ref:r,children:c(lt,{width:s,height:n,title:"Hahahahahaha",children:c(d.exports.Sprite,{image:t?Ki:Qi,width:ct(s),height:ae(n)})})})},Zi=({width:i,height:e})=>{const[t,s]=p.exports.useState(!1);return d.exports.useTick(()=>{const n=performance.now();s(Math.floor(n/500)%2==0)}),c(U,{children:new Array(10).fill(null).map((n,r)=>c(Ji,{width:i,height:e,index:r,trans:t},r))})},_i=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s}}=p.exports.useContext(Y),[n,r]=p.exports.useState(!1);return p.exports.useEffect(()=>{const o=()=>{const l=new Date().getTime();ne.endTime.getTime()<l&&r(!0)},a=()=>{r(!0)};return C.on("initialized",o),C.on("end",a),()=>{C.off("initialized",o),C.off("end",a)}},[]),F(U,{children:[c(Wi,{}),s.map((o,a)=>c(qi,{windowInfo:t[o]||Bi,id:o,focus:a===s.length-1},o)),n?c(Zi,{width:i,height:e}):null]})},$i=({id:i,index:e,tabWidth:t})=>{const{windowSettings:{windows:s,focused:n,focus:r,minimize:o}}=p.exports.useContext(Y),a=s[i];if(!a)return c(U,{children:null});const{title:l,visible:u}=a,f=u?E.get("TaskbarButtonActive.png"):E.get("TaskbarButtonInactive.png"),v=a.icon();return F(d.exports.Container,{position:[e*t,G/2],interactive:!0,click:()=>n===i?o(i):r(i),children:[f?c(d.exports.Sprite,{width:t*.96,height:G*.9,texture:f,anchor:[0,.5],position:[0,0]}):null,v?c(d.exports.Sprite,{width:G*.6,height:G*.6,texture:v,anchor:[0,.5],position:[7,0]}):null,c(d.exports.Text,{text:l,anchor:[0,.5],position:[14+G*.6,0],style:new D({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:G*.5*.8,fill:"#000"})})]})},en=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=p.exports.useContext(Y),s=E.get("WindowTitleBarActive.png"),n=Math.min(i/t.length,gs);return F(d.exports.Container,{position:[0,e-G],children:[s?c(d.exports.Sprite,{texture:s,width:i,height:G,anchor:0,position:[0,0]}):null,c(d.exports.Container,{position:[5,0],children:t.map((r,o)=>c($i,{id:r,index:o,tabWidth:n},r))})]})};var tn=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class sn extends rt{constructor(){super(void 0,tn,{dimensions:[0,0]})}apply(e,t,s,n){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,n)}}var nn=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class rn extends rt{constructor(){super(void 0,nn,{dimensions:[0,0]})}apply(e,t,s,n){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,n)}}var on=`precision mediump float;

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
}`;class an extends rt{constructor(){super(void 0,on,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,n){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,n)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const cn="_main_11f2u_1";var ln={main:cn};const Ct=s=>{var n=s,{text:i,click:e}=n,t=Ve(n,["text","click"]);const r=E.get("InButton.png");return r?F(d.exports.Container,P(S({},t),{children:[c(d.exports.Sprite,{width:150,height:T,texture:r,anchor:[.5,.5],position:[0,0],interactive:!0,click:e}),c(d.exports.Text,{text:i,anchor:.5,position:0,style:new D({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:T*.5,fill:"#000"})})]})):c(U,{})},un=()=>{const{width:i,height:e}=p.exports.useContext(Y),[t,s]=p.exports.useState(!0),n={width:500,height:180,left:i*.5-250,top:e*.5-90};return t?F(d.exports.Container,{children:[c(ce,{bgColor:0,width:i,height:e}),c(d.exports.Container,{position:[n.left,n.top],children:F(lt,{width:n.width,height:n.height,title:"\u97F3\u306E\u78BA\u8A8D",children:[c(ce,{bgColor:13027014,width:ct(n.width),height:ae(n.height)}),c(d.exports.Text,{text:"\u97F3\u3092\u9CF4\u3089\u3057\u3066\u3082\uFF1F",anchor:[0,0],position:[5,5],style:new D({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:T*.5,fill:"#000"})}),c(Ct,{text:"\u3044\u3044\u306D",anchor:[1,.5],position:[ae(n.width)-215,ae(n.height)-30],click:()=>{xt(1),s(!1),Ee("mousedown"),Ee("mouseup"),je("hdd")}}),c(Ct,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,.5],position:[ae(n.width)-60,ae(n.height)-30],click:()=>{xt(0),s(!1)}})]})})]}):null},Pt={default:"CursorDefault.png","ns-resize":"CursorNsResize.png","ew-resize":"CursorEwResize.png","nesw-resize":"CursorNeswResize.png","nwse-resize":"CursorNwseResize.png",grab:"CursorGrab.png",grabbing:"CursorGrabbing.png",wait:"CursorWait.png"},Ft=i=>{let e=i?"wait":Lt();return Pt[e]||(e="default"),E.get(Pt[e])},dn=()=>{const i=p.exports.useRef(null),{windowSettings:{starting:e}}=p.exports.useContext(Y),t=d.exports.useApp();d.exports.useTick(()=>{const n=t.renderer.plugins.interaction.mouse.global,r=Ft(e);i.current&&r&&(i.current.texture=r,i.current.x=n.x,i.current.y=n.y,ji())});const s=Ft("default");return s?c(d.exports.Sprite,{ref:i,anchor:.5,width:At,height:At,texture:s}):c(U,{})},hn=({children:i,Context:e,render:t})=>c(e.Consumer,{children:s=>t(c(e.Provider,{value:s,children:i}))}),fn=t=>{var s=t,{children:i}=s,e=Ve(s,["children"]);const{width:n,height:r}=p.exports.useContext(Y);return c(hn,{Context:Y,render:o=>c(d.exports.Stage,P(S({width:n,height:r},e),{children:o})),children:i})},mn=d.exports.withFilters(d.exports.Container,{hex:an,bloom:hs,colorshift:fs,lensDistortion:sn,visnetting:rn}),pn=()=>{const i=()=>{Ee("mousedown")},e=()=>{Ee("mouseup")},[t,s]=p.exports.useState(!1),n=d.exports.useApp();return p.exports.useEffect(()=>{n.ticker.maxFPS=30,E.onLoad(()=>{s(!0)})},[]),t?F(mn,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:[F(d.exports.Container,{mousedown:i,mouseup:e,interactive:!0,children:[c(en,{}),c(_i,{}),c(un,{})]}),c(dn,{})]}):c(U,{})},vn=()=>(p.exports.useEffect(()=>{document.body.style.cursor="none"},[]),c(Ss,{children:c("main",{className:ln.main,children:c(fn,{id:"pixicanvas",children:c(pn,{})})})}));ms.render(c(ps.StrictMode,{children:c(vn,{})}),document.getElementById("root"));
