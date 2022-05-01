var Kt=Object.defineProperty,Qt=Object.defineProperties;var Jt=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var Ge=(i,e,t)=>e in i?Kt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,S=(i,e)=>{for(var t in e||(e={}))vt.call(e,t)&&Ge(i,t,e[t]);if(Me)for(var t of Me(e))gt.call(e,t)&&Ge(i,t,e[t]);return i},F=(i,e)=>Qt(i,Jt(e));var Le=(i,e)=>{var t={};for(var s in i)vt.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&Me)for(var s of Me(i))e.indexOf(s)<0&&gt.call(i,s)&&(t[s]=i[s]);return t};var u=(i,e,t)=>(Ge(i,typeof e!="symbol"?e+"":e,t),t);import{r as v,j as ct,T as Bt,G as Zt,F as _t,m as $t,a as h,B as Ce,b as E,R as U,c as W,M as we,d as Dt,S as es,e as fe,C as B,V as H,E as ts,f as Rt,P as ze,D as ss,g as _,h as lt,i as is,k as ns,l as rs,A as os,n as At,o as as,p as ke,q as xt,s as Ht,t as Ut,u as cs,v as Ye,w as wt,U as yt,x as St,y as ls,z as us,H as ds,W as hs,I as ms,J as fs,K as ps,L as vs,N as Ne,O as bt,Q as ut,X as gs,Y as As,Z as xs,_ as ws}from"./vendor.341bf12e.js";const ys=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};ys();const Fe=1.5,Y=64*Fe,Ss=200*Fe,w=6*Fe,Be=w/3*2,M=w/6*26,O=M*1.2,Pt=30*Fe;let Wt=0;const Ct=i=>{Wt=i},De=()=>Wt;var bs="/Visualizer/assets/clickup.207be81c.mp3",Ps="/Visualizer/assets/clickdown.92e482ed.mp3",Cs="/Visualizer/assets/hdd.670515d8.mp3";const L={mouseup:new Audio(bs),mousedown:new Audio(Ps),hdd:new Audio(Cs)},Re=i=>{De()!==0&&(!L[i]||(L[i].paused||(L[i].pause(),L[i].currentTime=0),L[i].volume=De(),L[i].play()))},qe=i=>{De()!==0&&(!L[i]||(L[i].paused||(L[i].pause(),L[i].currentTime=Math.min(L[i].currentTime,5)),L[i].volume=De(),L[i].play()))},zs=()=>{const[i,e]=v.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,n)=>{e(r=>{if(r.windowSettings.starting)return r;if(!r.windowSettings.windowIndices.includes(s))return qe("hdd"),setTimeout(()=>{e(d=>{const m=S({},d.windowSettings.windows);m[s]=n;const p=[...d.windowSettings.windowIndices],f=[...d.windowSettings.windowStack];return p.includes(s)||(f.push(s),p.push(s)),F(S({},d),{windowSettings:F(S({},d.windowSettings),{windows:m,windowIndices:p,windowStack:f,starting:""})})})},2e3),F(S({},r),{windowSettings:F(S({},r.windowSettings),{starting:s})});const o=S({},r.windowSettings.windows);o[s]=n;const a=[...r.windowSettings.windowIndices],c=[...r.windowSettings.windowStack];return a.includes(s)||(c.push(s),a.push(s),qe("hdd")),F(S({},r),{windowSettings:F(S({},r.windowSettings),{windows:o,windowIndices:a,windowStack:c})})})},kill:s=>{e(n=>{const r=S({},n.windowSettings.windows);delete r[s];const o=n.windowSettings.windowIndices.filter(m=>m!==s),a=n.windowSettings.windowStack.filter(m=>m!==s),c=o.filter(m=>{var p;return(p=r[m])==null?void 0:p.visible}),d=c.length>0?c[c.length-1]:"";return F(S({},n),{windowSettings:F(S({},n.windowSettings),{windows:r,windowIndices:o,windowStack:a,focused:d})})})},focus:s=>{e(n=>{const r=S({},n.windowSettings.windows),o=r[s];if(!o)throw new Error("invalid id");r[s]=F(S({},o),{visible:!0});const a=n.windowSettings.windowIndices.filter(c=>c!==s);return a.push(s),F(S({},n),{windowSettings:F(S({},n.windowSettings),{windows:r,windowIndices:a,focused:s})})})},minimize:s=>{e(n=>{const r=S({},n.windowSettings.windows),o=r[s];if(!o)throw new Error("invalid id");r[s]=F(S({},o),{visible:!1});const a=n.windowSettings.windowIndices.filter(d=>{var m;return d!==s&&((m=r[d])==null?void 0:m.visible)}),c=a.length>0?a[a.length-1]:"";return F(S({},n),{windowSettings:F(S({},n.windowSettings),{windows:r,focused:c})})})}}}));return[i,()=>{e(s=>F(S({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},l=ct.exports.jsx,T=ct.exports.jsxs,V=ct.exports.Fragment,J=v.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),Fs=({children:i})=>{const[e,t]=zs();return v.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),l(J.Provider,{value:e,children:i})},Ae=["PPC","Web","Crypto","Binary","Pwn","Misc","Shell","Forensics","OSINT"];var dt="/Visualizer/assets/testicon.8f219171.jpg";const Sn=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:dt,point:0,rank:-1}));const zt=i=>new Promise(e=>{setTimeout(()=>e(),i)}),le={startTime:new Date,endTime:new Date},Ts=!1,Ms=()=>{b.emit("start")},ks=()=>{b.emit("end")},Ke={texture:new Bt,gltf:new Zt,fbx:new _t},Ft=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Ke.gltf.load(i,n=>{t(n.scene)},()=>0,n=>{s(n)});break}case"texture":{Ke.texture.load(i,n=>{t(n)},()=>0,n=>{s(n)});break}}});class y{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const n=this.queue.length;if(n!==0)return this.queue.map(([r,o])=>{t?t=t.then(()=>Ft(r,o)):t=Ft(r,o),t=t.then((a=>{s+=1,this.resources[r]={type:o,data:a},e({path:r,data:a,total:n,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}u(y,"resources",{}),u(y,"queue",[]);class Is extends EventTarget{constructor(e){super();u(this,"id");u(this,"_score",0);u(this,"_displayName","");u(this,"_icon",null);u(this,"_iconPath","");this.id=e}get score(){return this._score}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}updateInfo(e,t){var s;if(this._displayName=e,t&&(!this._iconPath||this._iconPath!==t)){const n=new URL(t).pathname;this._iconPath=n,(s=this._icon)==null||s.dispose(),this._icon=Ke.texture.load(n)}}updateScore(e){this._score=e}}class Z{static get ranking(){return this._ranking}static addUser({id:e,userName:t,iconUrl:s}){const n=new Is(e);this.users.set(e,n),n.updateInfo(t,s)}static updateUser({id:e,userName:t,iconUrl:s}){var n;!this.users.has(e)||(n=this.users.get(e))==null||n.updateInfo(t,s)}static updateRanking(e){this._ranking=e.map(({id:t,score:s})=>{const n=this.getUser(t);if(!n)throw Error(`This user does not exist : ${t}`);return n.updateScore(s),n})}static updateUserScore({id:e,score:t}){var s;(s=this.users.get(e))==null||s.updateScore(t)}static getUser(e){return this.users.get(e)}static size(){return this.users.size}}u(Z,"users",new Map),u(Z,"_ranking",[]);const Es=({userId:i,name:e,iconUrl:t})=>{Z.addUser({id:i,userName:e,iconUrl:t})},Bs=({userId:i,point:e,genre:t,challengeName:s})=>{b.emit("submit",{userId:i,point:e,genre:Ae[t],title:s})},Ds=({userId:i,name:e,iconUrl:t})=>{!Z.getUser(i)||Z.updateUser({id:i,userName:e,iconUrl:t})},Ie=i=>{if(i.status!==200)throw new Error("\u901A\u4FE1\u30A8\u30E9\u30FC");return i.json()};class Vt{static async initial(){const e=fetch("/api/users").then(Ie),t=fetch("/api/schedule").then(Ie),[s,n]=await Promise.all([e,t]);return{users:s,startTime:n.startTime,endTime:n.endTime}}static async recalculate(){const e=fetch("/visualizer/circuit.json").then(Ie),t=fetch("/api/ranking?includeAdmin=false").then(Ie),[s,n]=await Promise.all([e,t]);return{circuit:s,ranking:n}}}class Qe{constructor(e,t){this.sizeX=e,this.sizeY=t}}class Nt{constructor(e,t,s,n){this.x=e,this.z=t,this.isBig=s,this.category=n}}class jt{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class Rs{static jsonToInfo(e){const t=JSON.parse(e);let s=new Qe(0,0);const n=new Array(0),r=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new Qe(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;n.push(new Nt(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;r.push(new jt(a.x,a.z,a.wires))}}),[s,n,r]}}class xe{static getBasisSize(){var e,t;return this.circuitBasisInfo==null?this.initBasisSize:[Math.max((e=this.circuitBasisInfo)==null?void 0:e.sizeX,this.initBasisSize[0]),Math.max((t=this.circuitBasisInfo)==null?void 0:t.sizeY,this.initBasisSize[1])]}static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=Rs.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}u(xe,"circuitBasisInfo"),u(xe,"circuitPartsInfos"),u(xe,"circuitWiresInfos"),u(xe,"initBasisSize",[30,30]);const Gt=()=>{(async()=>{b.emit("recalculatestart"),await Hs(),b.emit("recalculateend")})()},Hs=async()=>{const i=await Vt.recalculate();if(!i)return;const{ranking:e,circuit:t}=i;Z.updateRanking(e),await zt(3e3),xe.setCircuitInfo(JSON.stringify(t)),await zt(1e3)},b=$t(),Us=()=>{try{const i=new WebSocket(`ws://${location.host}/ws/visualizer`);i.addEventListener("message",Vs.bind(globalThis)),i.addEventListener("error",e=>{console.error(e),b.emit("disconnect")})}catch(i){console.log(i)}},Ws=()=>{b.emit("initialized")};const Vs=i=>{if(!i.data)return;const{type:e,data:t}=JSON.parse(i.data);if(!!e)switch(Number(e)){case 0:break;case 1:{Es(t);break}case 2:{Bs(t);break}case 3:break;case 4:{Ds(t);break}case 5:{Ms();break}case 6:{ks();break}case 7:{Gt();break}}};var Ns="data:image/png;base64,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",js="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Gs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",Ls="/Visualizer/assets/recalculating.60ffccdf.glb",Lt="/Visualizer/assets/monitor.81b9fd78.glb",Ys="/Visualizer/assets/face.e8cae3d3.png",Yt="/Visualizer/assets/cpu.57abf837.glb",Je="/Visualizer/assets/graphicBoard.4a06ae3d.glb",Ze="/Visualizer/assets/hdd.caa7427b.glb",_e="/Visualizer/assets/memory.83673af4.glb",$e="/Visualizer/assets/powerSupply.4d848de2.glb",et="/Visualizer/assets/tipSet.fad5f9b9.glb",tt="/Visualizer/assets/audio.3c50633a.glb",st="/Visualizer/assets/condenser.654b5786.glb",it="/Visualizer/assets/ports.6ad72da3.glb",nt="/Visualizer/assets/ssd.447a4b88.glb",rt="/Visualizer/assets/symbols.3d122568.glb",ot="/Visualizer/assets/emergency.19e4efc2.glb";const Os=()=>{y.addGLTF(Ls),y.addGLTF(Lt),y.addTexture(Ys),y.addTexture(dt),y.addGLTF(Yt),y.addGLTF(Je),y.addGLTF(Ze),y.addGLTF(_e),y.addGLTF($e),y.addGLTF(et),y.addGLTF(tt),y.addGLTF(st),y.addGLTF(it),y.addGLTF(nt),y.addGLTF(rt),y.addGLTF(ot)},me=({width:i,height:e,bgColor:t=16777215})=>{const s=v.exports.useCallback(n=>{n.clear(),n.beginFill(t),n.drawRect(0,0,i,e),n.endFill()},[i,e]);return l(h.exports.Graphics,{draw:s})},Xs=({width:i,height:e,loadedHandler:t})=>{const[s,n]=v.exports.useState(""),[r,o]=v.exports.useState(0),[a,c]=v.exports.useState({textures:[],index:-1});return v.exports.useEffect(()=>{(async()=>{Os(),await y.load(({path:f,total:C,count:z})=>{n(f),o(z/C)}),t()})();const m=new Ce(Ns);c({index:0,textures:[new E(m,new U(64*0,0,64,64)),new E(m,new U(64*1,0,64,64)),new E(m,new U(64*2,0,64,64)),new E(m,new U(64*3,0,64,64)),new E(m,new U(64*4,0,64,64)),new E(m,new U(64*5,0,64,64)),new E(m,new U(64*6,0,64,64)),new E(m,new U(64*7,0,64,64))]});const p=setInterval(()=>{c(f=>({index:(f.index+1)%f.textures.length,textures:f.textures}))},200);return()=>{clearInterval(p)}},[]),T(V,{children:[l(me,{bgColor:16777215,width:i,height:e}),T(h.exports.Container,{position:[i/2,e/2],children:[a.index<0?null:l(h.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),l(h.exports.Text,{text:s,anchor:.5,position:[0,0],style:new W({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),l(h.exports.Sprite,{image:js,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*r)).fill(null).map((d,m)=>l(h.exports.Sprite,{image:Gs,anchor:[0,.5],position:[(m-8)*16,0],width:16,height:32},m))})]})]})};var qs="/Visualizer/assets/traP_logo.25c1c1d8.png";const Ks=new Ce(qs),Oe=50,Ee=24,Qs=({width:i,height:e,onComplete:t})=>{const[s,n]=v.exports.useState(0);return v.exports.useEffect(()=>{const r=setInterval(()=>{n(o=>o===Oe+Ee*2?(clearInterval(r),setTimeout(()=>{t()},1),o):o+1)},1e3/Ee)},[]),T(V,{children:[l(me,{bgColor:16777215,width:i,height:e}),l(h.exports.Container,{position:[i/2,e/2],children:l(h.exports.Sprite,{texture:new E(Ks,new U(0,280*Math.min(s,Oe-1),1920,280)),alpha:1-Math.max(0,s-Oe-Ee)/Ee,anchor:.5,width:i*.9,height:i*.9/1920*280})})]})};class k{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}u(k,"startTime",-1),u(k,"_time",-1),u(k,"_deltaTime",-1),u(k,"prevTime",-1);class re extends we{constructor(e,t){super(e,t);u(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof G||e instanceof re)&&e.update()}))}}class G extends Dt{constructor(){super();u(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof G||e instanceof re)&&e.update()}))}}const Js=`
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
`,Zs=`
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
`;class _s extends re{constructor(){super(new es(100),new fe({uniforms:{radius:{value:100},colorA:{value:new B("#db2784")},colorB:{value:new B("#1c1330")},sunColorA:{value:new B("#db2784")},sunColorB:{value:new B("#f2ca2b")},sunPos:{value:new H(-100,0,0).applyEuler(new ts(0,0,-Math.PI*.06))},time:{value:0}},side:Rt,vertexShader:Js,fragmentShader:Zs}))}update(){super.update(),this.material.uniforms.time.value=k.time}}const $s=`
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
`,ei=`
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
`;class ti extends re{constructor(){super(new ze(100,100,50,50),new fe({uniforms:{colorA:{value:new B(16729343)},colorB:{value:new B(1127423)},time:{value:0}},vertexShader:$s,fragmentShader:ei,side:ss}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=k.time}}class si extends G{constructor(){super();const e=new ti;e.position.setY(-1),this.add(e),this.add(new _s)}start(){}update(){super.update()}}var ii=`uniform sampler2D face;
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
}`,ni=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,ri="/Visualizer/assets/face.e8cae3d3.png";class oi extends re{constructor(){super(new ze(4*.5,3*.5),new fe({vertexShader:ni,fragmentShader:ii,uniforms:{face:{value:y.get(ri)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||y.get(dt)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=_.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=k.time)}}class ai extends G{constructor(){super();u(this,"display");u(this,"user",null);const e=y.get(Lt).clone();this.add(e),this.display=new oi,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){e?(this.user=e,this.display.setIcon(e.icon)):this.user=null}start(){}update(){super.update()}}const te=class extends G{constructor(){super();u(this,"radius",10);u(this,"radian",Math.PI);u(this,"dir",3);u(this,"dirToNumWH",[[4,3],[8,5],[16,8]]);u(this,"displaySizeWH",[2.8,2.5]);u(this,"startY",0);u(this,"endY",3);u(this,"animationDuration",3);te.users=[]}start(){this.createDisplayObjects(),Z.ranking.forEach((e,t)=>{t>=te.users.length||te.users[t].updateUser(e)}),b.on("recalculatestart",()=>{_.to(this.position,this.animationDuration,{y:this.endY})}),b.on("recalculateend",()=>{_.to(this.position,this.animationDuration,{y:this.startY})}),b.on("submit",({userId:e})=>{const t=te.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),b.on("recalculateend",()=>{Z.ranking.forEach((e,t)=>{t>=te.users.length||te.users[t].updateUser(e)})})}createDisplayObjects(){for(let e=0;e<this.dir;e++){const[t,s]=this.displaySizeWH,[n,r]=this.dirToNumWH[e],o=this.radian/this.dir/n,c=Math.sqrt(2*this.radius*this.radius*(1-Math.cos(o)))/t,d=s*c;new Array(n*r).fill(0).map((m,p)=>p).sort(()=>Math.random()-.5).forEach(m=>{const p=m%n,f=Math.floor(m/n),z=p-n/2<0?-1:1;let D=o*p+o/2;D+=this.radian/2-this.radian/this.dir/2;const X=D+z*e*this.radian/this.dir/2,[g,A]=[Math.cos(X)*this.radius,Math.sin(X)*this.radius],x=d*f,R=new ai;R.position.set(g,x,A),R.scale.setScalar(c),R.lookAt(0,x,0),this.add(R),te.users.push(R)})}}static getUserDisplay(e){const t=te.users.filter(s=>s.userid===e);if(!!t.length)return t[0]}};let He=te;u(He,"users");class ci{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,n)=>{this.wires[n]=new ui(n)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const n=s.getWirePointsInt(e,t);this.wirePoints.forEach((r,o)=>{this.wirePoints[o]=n[o]==1}),this.wires.forEach(r=>{r.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class li{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMin=4,this.straightMax=10,this.counterMax=200,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)&&this.straightCounter>this.straightMin?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class ui{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let n=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let r=0;r<3;r++){const o=t[r];if(this.canTo[o]!=-1&&o!=e){n=this.canTo[o];break}}return this.cantTo(),n==-1?(this.from=-1,-1):(this.to=n,n)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,n=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){n++;continue}if(a==this.from){s=n;continue}const c=this.canTo.findIndex(d=>d==a);c!=-1&&(t[c]=n)}const r=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?r[a]=o:r[a]=-1}),this.canTo=r}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const at=class{constructor(i,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=i,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.cells[t*i+s]=new ci(s,t)}putParts(i,e,t){if(!this.canPutParts(i,e,t))return!1;const s=t.SizeY(),n=t.SizeX(),r=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<n;a++){const c=e+o,d=i+a,m=this.getCell(d,c);m.setParts(a,o,t),r.push(m)}return t.setPosition(i,e),this.partsCellDict[t.id]=r,this.parts.push(t),!0}getPartsCells(i){return i.id in this.partsCellDict?this.partsCellDict[i.id]:new Array(0)}getAllPartsCells(){const i=new Array(0);for(const e in this.partsCellDict)i.push(this.partsCellDict[e]);return i}extendWires(i){const e=i.x,t=i.y;i.getActiveWirePointsIndex().forEach(n=>{let r=e,o=t;const a=n%8,c=(n-a)/8,d=new li(c);for(;n!=-1;){const[m,p]=this.indexConvertToAroundIndex(n);r+=at.dx[m],o+=at.dy[m];const f=this.getCell(r,o);if(f==null||(d.update(p,m),n=f.setWire(d),n==-1))break}})}convertToCircuitInfos(){const i=new Qe(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const n=new Array(0);s.getAllWires().forEach(r=>{r.isEmpty()||(r.isHole()?n.push([r.ind,r.to]):n.push([r.from,r.to]))}),n.length!=0&&t.push(new jt(s.x,s.y,n))}),this.parts.forEach(s=>{const[n,r]=s.getPosition();e.push(new Nt(n,r,s.isBig,s.problemCategory!=null?s.problemCategory:""))}),[i,e,t]}canPutParts(i,e,t){const s=t.SizeY(),n=t.SizeX();for(let r=0;r<s;r++)for(let o=0;o<n;o++){const a=e+r,c=i+o,d=this.getCell(c,a);if(d==null)return!1;if(d.isParts())return!1}return!0}getCell(i,e){if(0<=e&&e<this.sizeY&&0<=i&&i<this.sizeX)return this.cells[e*this.sizeX+i]}indexConvertToAroundIndex(i){const e=i%8,t=(i-e)/8,n=((t+2)%4+1)*8-e-1;return[t,n]}};let Ue=at;Ue.dy=[1,0,-1,0];Ue.dx=[0,1,0,-1];const K=class extends re{constructor(e){const t=K.createWireGeometry(e);super(t,K.material)}start(){}update(){super.update()}static createWireGeometry(e){let t=new is;const s=1,n=.25,r=.5,o=.25,a=16,[c,d]=e;if(d==-1){const m=s*r/8/2,p=s*o/8/2,f=new ns(p,m,a);f.rotateX(-Math.PI/2);let[C,z]=this.wireIndexToPosition(c,s);const D=(c-c%8)/8;D==0||D==2?z-=Math.sign(z)*(m-p):C-=Math.sign(C)*(m-p);const X=f.attributes.position.count;for(let g=0;g<X;g++){const A=f.attributes.position.getX(g),x=f.attributes.position.getZ(g);f.attributes.position.setXYZ(g,A+C,0,x+z)}t=f}else{const[m,p]=K.wireIndexToPositionPair(c,s,n),[f,C]=K.wireIndexToPositionPair(d,s,n),z=new Float32Array([m[0],0,m[1],p[0],0,p[1],f[0],0,f[1],f[0],0,f[1],C[0],0,C[1],m[0],0,m[1]]);t.setAttribute("position",new rs(z,3))}return t}static wireIndexToPosition(e,t=1){const s=e%8,n=(e-s)/8,r=t/8,o=r*s-r*7/2,a=Ue.dx[n]/2+K.sx[n]*o,c=Ue.dy[n]/2+K.sy[n]*o;return[a,c]}static wireIndexToPositionPair(e,t=1,s=.5){const n=e%8,r=(e-n)/8,o=t/8,[a,c]=this.wireIndexToPosition(e,t),d=[a-K.sx[r]*s*o/2,c-K.sy[r]*s*o/2],m=[a+K.sx[r]*s*o/2,c+K.sy[r]*s*o/2];return[d,m]}};let Pe=K;u(Pe,"sx",[1,0,-1,0]),u(Pe,"sy",[0,-1,0,1]),u(Pe,"material",new lt({color:16777215}));class ce{}u(ce,"cpuPath",Yt),u(ce,"partsPath",{PPC:et,Web:_e,Crypto:$e,Binary:Ze,Pwn:it,Misc:tt,Shell:nt,Forensics:st,OSINT:Je}),u(ce,"partsBigPath",{PPC:et,Web:_e,Crypto:$e,Binary:Ze,Pwn:it,Misc:tt,Shell:nt,Forensics:st,OSINT:Je});const di=`
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
`,hi=`
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
`,mi=`
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
`,fi=`
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
`,pi=i=>new fe({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:hi,vertexShader:di,transparent:!0}),vi=i=>new fe({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:fi,vertexShader:mi,transparent:!0,side:Rt}),We=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[pi(e),vi(e)]};class gi extends G{constructor(){super();u(this,"app");u(this,"texture");u(this,"nameText");u(this,"titleText");u(this,"needsUpdate",!1);const e=1024,t=48;this.app=new os({width:e,height:t,autoStart:!1,backgroundAlpha:0}),this.nameText=new At("string"),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new At("string"),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const s=new we(new ze(e,t),new lt({map:null,transparent:!0}));s.position.z=1e-4;const n=s.clone();n.rotation.y=Math.PI,n.position.z=-1e-5,this.texture=new as(this.app.view),s.material.map=this.texture,n.material.map=this.texture,this.add(s,n)}redraw(e,t,s){const n=s.getStyle(),r=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style=new W({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:n,fontSize:20,lineJoin:"round",stroke:r,strokeThickness:2}),this.nameText.style.fill=n,this.nameText.style.stroke=r,this.titleText.text=t,this.titleText.style=new W({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:n,fontSize:20,lineJoin:"round",stroke:r,strokeThickness:2}),this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class Ai extends G{constructor(){super();u(this,"question");u(this,"exclamation");u(this,"submissionInfo");u(this,"objects");u(this,"animationTimeline",null);this.objects=new Dt,this.question=y.get(rt).children[0],this.exclamation=y.get(rt).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,We(this.question,new B(16711680)),We(this.exclamation,new B(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new gi),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){b.on("submit",e=>{const t=_.timeline();t.timeScale(1/5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=Z.getUser(e.userId))==null?void 0:s.displayName,e.title,new B(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:ke.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:ke.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new B(65280))}),t.to(this.objects.position,.15,{z:0,ease:ke.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:ke.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1}),this.animationTimeline&&this.animationTimeline.kill(),this.animationTimeline=t})}update(){super.update(),this.rotation.y+=Math.PI*k.deltaTime*.3,this.position.y=Math.sin(k.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=k.time,this.exclamation.material[0].uniforms.time.value=k.time,this.question.material[1].uniforms.time.value=k.time,this.exclamation.material[1].uniforms.time.value=k.time}}const P=class extends G{constructor(){super();u(this,"basisPlane");u(this,"maxBasisScale",1);u(this,"basisSize",13);P.randomPartsObjectKeys=new Array(Ae.length*2).fill("").map((t,s)=>s<Ae.length?Ae[s]:"Big"+Ae[s-Ae.length]).sort(()=>Math.random()-.5);const e=new we(new ze(1,1,1,1),new lt({color:272143}));e.rotation.x=-Math.PI*.5,e.position.set(0,-.1,0),e.scale.set(10,10,0),this.basisPlane=e,this.add(e),this.add(new Ai)}start(){super.start(),this.setPrefabs(),b.on("recalculatestart",()=>{}),b.on("recalculateend",()=>{this.removeAllObject(),this.createCircuit()}),this.createObject("CPU").position.set(-.5,0,-.5)}update(){super.update()}static getCPUBox(){if(P.objectPool.CPU==null)return;const t=P.objectPool.CPU[0][1];return new xt().setFromObject(t)}static getRandomPartsBox(){P.randomIndex=(P.randomIndex+1)%(P.randomPartsObjectKeys.length*2);for(let e=0;e<P.randomPartsObjectKeys.length*2;e++){const t=P.randomPartsObjectKeys[P.randomIndex];if(P.objectPool[t]==null)continue;const s=P.objectPool[t][0];if(s.length>0){let n=0;for(const r of s)r.visible&&(n+=1);if(n>0){const r=s[Math.floor(Math.random()*n)+1];return new xt().setFromObject(r)}else continue}}}createCircuit(){const[e,t,s]=xe.getCircuitInfo(),n=Math.min(this.basisSize/e.sizeX,this.maxBasisScale);P.currentBasisScale=n,this.basisPlane.scale.set(e.sizeX+4,e.sizeY+4,1);const r=-e.sizeX/2-.5,o=0,a=-e.sizeY/2-.5;t.forEach(c=>{let d="",m=0,p=0;c.category==""?d="CPU":c.isBig?(d="Big"+c.category,m=.5,p=.5):d=c.category;const f=this.createObject(d);f!=null&&f.position.set(c.x+r+m,0+o,c.z+a+p)}),s.forEach(c=>{c.wires.forEach(d=>{const m=this.createObject("Wire"+d.toString());m!=null&&m.position.set(c.x+r,0+o,c.z+a)})}),this.scale.setScalar(n)}setPrefabs(){var s,n,r;const e=(s=y.get(ce.cpuPath))==null?void 0:s.clone();e.visible=!1,P.objectPool.CPU=[[e],1],this.add(e);for(const o in ce.partsBigPath){const a=(n=y.get(ce.partsBigPath[o]))==null?void 0:n.clone();a!=null&&(a.visible=!1,a.scale.set(2,2,2),P.objectPool["Big"+o]=[[a],1],this.add(a))}for(const o in ce.partsPath){const a=(r=y.get(ce.partsPath[o]))==null?void 0:r.clone();a!=null&&(a.visible=!1,P.objectPool[o]=[[a],1],this.add(a))}const t=o=>{const a=new Pe(o),c=new we(a.geometry,a.material);c.visible=!1,P.objectPool["Wire"+o.toString()]=[[c],1],this.add(c)};for(let o=0;o<32;o++){let a=[o,-1];t(a);const c=o%8,d=(o-c)/8;[15-c,23-c,31-c].forEach(p=>{const f=((p+8*d)%32+32)%32;a=[o,f],t(a)})}}createObject(e){if(P.objectPool[e]==null)return;const[t,s]=P.objectPool[e];let n;s>=t.length?(n=t[0].clone(),t.push(n),this.add(n)):n=t[s],n.visible=!0;const r=s+1;return P.objectPool[e]=[t,r],n}removeAllObject(){for(const e in P.objectPool)P.objectPool[e][0].forEach(t=>t.visible=!1),P.objectPool[e][1]=1}};let se=P;u(se,"objectPool",{}),u(se,"currentBasisScale",1),u(se,"randomPartsObjectKeys"),u(se,"randomIndex",0);class xi extends Ht{constructor(){super(60,1,.01,500);u(this,"state","parts");u(this,"timeline",_.timeline());u(this,"defaultPosY",5);u(this,"minR",2);u(this,"maxR",3);u(this,"cpuCamWaitTime",5);u(this,"partsCamMinWaitTime",5);u(this,"partsCamMaxWaitTime",15);u(this,"userId","")}start(){this.position.set(0,3,-6),this.lookAt(0,0,0),b.on("submit",({userId:e})=>{this.state=="cpu"||this.state=="display"||(this.userId=e,this.changeState("cpu"),_.delayedCall(2,()=>{this.changeState("display")}))}),b.on("recalculatestart",()=>{this.changeState("recalculate")}),b.on("recalculateend",()=>{_.delayedCall(4,()=>{this.changeState("parts")})})}cpuCam(){const e=se.getCPUBox();if(e!=null)this.setCamFromBox(e);else{const t=new H(0,0,0),s=this.defaultPosY*Math.random()*(this.maxR-this.minR)+this.minR,n=Math.random()*2*Math.PI,r=new H(s*Math.cos(n),this.defaultPosY,s*Math.sin(n));r.multiplyScalar(1);const o=t.clone().add(r);o.setY(this.defaultPosY*se.currentBasisScale),this.position.set(o.x,o.y,o.z),this.lookAt(t)}this.setRandomDelay(this.cpuCamWaitTime,this.cpuCamWaitTime)}partsCam(){const e=se.getRandomPartsBox();e!=null?this.setCamFromBox(e):this.cpuCam(),this.setRandomDelay(this.partsCamMinWaitTime,this.partsCamMaxWaitTime)}recalculateCam(){this.position.set(0,10,-10),this.lookAt(0,0,5),this.setRandomDelay(1e9,1e9)}displayCam(){const e=He.getUserDisplay(this.userId);if(e!=null){const t=new H;e.getWorldDirection(t);const s=e.position.clone().add(t.multiplyScalar(e.scale.z*5));s.add(new H(0,e.scale.y*2.5/2,0)),this.position.set(s.x,s.y,s.z);const n=e.position.clone().add(new H(0,e.scale.y*2.5/2,0));this.lookAt(n),this.setRandomDelay(3,3),_.delayedCall(3,()=>{this.changeState("parts")})}else this.changeState("parts")}setCamFromBox(e){const t=e.min.clone().add(e.max).multiplyScalar(.5),s=e.max.clone().sub(e.min),n=Math.max(s.x,s.z),r=Math.random()*(this.maxR-this.minR)+this.minR,o=Math.random()*2*Math.PI,a=new H(r*Math.cos(o),this.defaultPosY,r*Math.sin(o));a.multiplyScalar(n);const c=t.clone().add(a);c.setY(this.defaultPosY*se.currentBasisScale),this.position.set(c.x,c.y,c.z),this.lookAt(t)}setRandomDelay(e,t){const s=_.timeline();s.call(()=>{}).delay(Math.random()*(t-e)+e),this.timeline.add(s,0)}stateMethods(){switch(this.state){case"cpu":this.cpuCam();return;case"parts":this.partsCam();return;case"recalculate":this.recalculateCam();return;case"display":this.displayCam();return}}stateMachine(){this.timeline.isActive()||(this.timeline.clear(),this.stateMethods(),this.timeline.play(0))}changeState(e){this.timeline.clear(),this.state=e}update(){this.stateMachine()}}const j=class extends G{constructor(e=0){super();u(this,"emergencyBlack");u(this,"emergencyRed");u(this,"offsetTime");u(this,"loopTime",2);var t,s;if(j.emergencyBlackGeom==null){const n=(t=y.get(ot))==null?void 0:t.clone();j.emergencyBlackGeom=n.children[0].geometry}if(j.emergencyRedGeom==null){const n=(s=y.get(ot))==null?void 0:s.clone();j.emergencyRedGeom=n.children[1].geometry}this.offsetTime=e,this.emergencyBlack=new we(j.emergencyBlackGeom),this.emergencyRed=new we(j.emergencyRedGeom),j.emergencyBlackMaterial==null?(We(this.emergencyBlack,new B(0)),j.emergencyBlackMaterial=this.emergencyBlack.material):this.emergencyBlack.material=j.emergencyBlackMaterial,j.emergencyRedMaterial==null?(We(this.emergencyRed,new B(16711680)),j.emergencyRedMaterial=this.emergencyRed.material):this.emergencyRed.material=j.emergencyRedMaterial,this.add(this.emergencyBlack),this.add(this.emergencyRed)}start(){super.start()}update(){super.update();let e=Math.sin((k.time+this.offsetTime)/this.loopTime*Math.PI*2);e=e<0?0:e,this.scale.set(e,e,e)}};let ie=j;u(ie,"emergencyBlackGeom"),u(ie,"emergencyRedGeom"),u(ie,"emergencyBlackMaterial"),u(ie,"emergencyRedMaterial");class wi extends G{constructor(){super();u(this,"size",30);u(this,"positionOffset",2/Math.sqrt(3));u(this,"offsetTimeUnit",.1);u(this,"emergencies",new Array(0));for(let e=0;e<this.size;e++){const t=e*(this.positionOffset*3/2)-Math.floor(this.size/2),s=e*this.offsetTimeUnit;for(let n=0;n<this.size;n++){const r=n*(Math.sqrt(3)*this.positionOffset)+(e%2==1?this.positionOffset*(Math.sqrt(3)/2):0)-Math.floor(this.size/2),o=new ie(s);o.position.setX(r),o.position.setZ(t),this.emergencies.push(o),this.add(o)}}}start(){super.start()}update(){super.update(),ie.emergencyBlackMaterial[0].uniforms.time.value=k.time,ie.emergencyRedMaterial[0].uniforms.time.value=k.time,ie.emergencyBlackMaterial[1].uniforms.time.value=k.time,ie.emergencyRedMaterial[1].uniforms.time.value=k.time}}class Ot extends re{constructor(e){const t=e.clipBias!==void 0?e.clipBias:0,s=e.alpha!==void 0?e.alpha:1,n=e.time!==void 0?e.time:0,r=e.waterNormals!==void 0?e.waterNormals:null,o=e.sunDirection!==void 0?e.sunDirection:new H(.70707,.70707,0),a=new B(e.sunColor!==void 0?e.sunColor:16777215),c=new B(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new H(0,0,0),m=e.distortionScale!==void 0?e.distortionScale:100,p=e.side!==void 0?e.side:Ut,f=e.fog!==void 0?e.fog:!1,C=new cs,z=new H,D=new H,X=new H,g=new Ye,A=new H(0,0,-1),x=new wt,R=new H,$=new H,ue=new wt,pe=new Ye,N=new Ht,ye={uniforms:yt.merge([St.fog,St.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ye},sunColor:{value:new B(8355711)},sunDirection:{value:new H(.70707,.70707,0)},eye:{value:new H},waterColor:{value:new B(5592405)}}]),vertexShader:`
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
				}`},q=new fe({fragmentShader:ye.fragmentShader,vertexShader:ye.vertexShader,uniforms:yt.clone(ye.uniforms),lights:!0,side:p,fog:f});q.uniforms.textureMatrix.value=pe,q.uniforms.alpha.value=s,q.uniforms.time.value=n,q.uniforms.normalSampler.value=r,q.uniforms.sunColor.value=a,q.uniforms.waterColor.value=c,q.uniforms.sunDirection.value=o,q.uniforms.distortionScale.value=m,q.uniforms.eye.value=d;const Te=new ze(100,100);super(Te,q);u(this,"isWater",!0);this.onBeforeRender=function(je,ve,de){if(D.setFromMatrixPosition(this.matrixWorld),X.setFromMatrixPosition(de.matrixWorld),g.extractRotation(this.matrixWorld),z.set(0,0,1),z.applyMatrix4(g),R.subVectors(D,X),R.dot(z)>0)return;R.reflect(z).negate(),R.add(D),g.extractRotation(de.matrixWorld),A.set(0,0,-1),A.applyMatrix4(g),A.add(X),$.subVectors(D,A),$.reflect(z).negate(),$.add(D),N.position.copy(R),N.up.set(0,1,0),N.up.applyMatrix4(g),N.up.reflect(z),N.lookAt($),N.far=de.far,N.updateMatrixWorld(),N.projectionMatrix.copy(de.projectionMatrix),pe.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),pe.multiply(N.projectionMatrix),pe.multiply(N.matrixWorldInverse),C.setFromNormalAndCoplanarPoint(z,D),C.applyMatrix4(N.matrixWorldInverse),x.set(C.normal.x,C.normal.y,C.normal.z,C.constant);const ee=N.projectionMatrix;ue.x=(Math.sign(x.x)+ee.elements[8])/ee.elements[0],ue.y=(Math.sign(x.y)+ee.elements[9])/ee.elements[5],ue.z=-1,ue.w=(1+ee.elements[10])/ee.elements[14],x.multiplyScalar(2/x.dot(ue)),ee.elements[2]=x.x,ee.elements[6]=x.y,ee.elements[10]=x.z+1-t,ee.elements[14]=x.w,d.setFromMatrixPosition(de.matrixWorld)}}}Ot.prototype.isWater=!0;var yi="/Visualizer/assets/Water_1_M_Normal.6d782546.jpg";class Si extends G{constructor(){super();u(this,"water");const e={textureWidth:512,textureHeight:512,waterNormals:new Bt().load(yi,function(t){t.wrapS=t.wrapT=ls}),alpha:1,waterColor:4098510,distortionScale:20,fog:void 0,sunDirection:void 0,sunColor:void 0,clipBias:void 0,time:void 0,eye:void 0,side:Ut};this.water=new Ot(e),this.water.rotation.x=-Math.PI/2,this.add(this.water)}start(){super.start()}update(){super.update(),this.water.material.uniforms.time.value=k.time}}class bi extends G{constructor(){super();u(this,"startY",-2);u(this,"endY",1);u(this,"animationDuration",3);u(this,"emergencyAnimation");u(this,"waterAnimation");this.emergencyAnimation=new wi,this.waterAnimation=new Si,this.add(this.emergencyAnimation),this.add(this.waterAnimation),this.rotateY(Math.PI)}start(){super.start(),this.visible=!1,this.emergencyAnimation.position.y=.5,this.position.y=this.startY,b.on("recalculatestart",()=>{this.visible=!0,_.to(this.position,this.animationDuration,{y:this.endY})}),b.on("recalculateend",()=>{_.to(this.position,this.animationDuration,{y:this.startY}).eventCallback("onComplete",()=>{this.visible=!1})})}update(){super.update()}}const Pi=async()=>{const i=await Vt.initial();i.users.forEach(e=>{Z.addUser(e)}),le.startTime=new Date(i.startTime),le.endTime=new Date(i.endTime),setTimeout(()=>{Gt()},4500)},Tt={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `};class Ci extends us{constructor(e){super();u(this,"camera");u(this,"material");u(this,"oldClearColor");u(this,"fsQuad");u(this,"progress",0);this.camera=e,this.material=new fe({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},near:{value:e.near},far:{value:e.far},progress:{value:0}},vertexShader:Tt.vertexShader,fragmentShader:Tt.fragmentShader}),this.oldClearColor=new B,this.fsQuad=new ds(this.material)}render(e,t,s){e.getClearColor(this.oldClearColor);const n=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,this.material.uniforms.tDiffuse.value=s.texture,this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.progress=Math.min(1,this.progress+(Math.random()<.05?Math.random()*.1:0)),this.material.uniforms.progress.value=this.progress,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(n),e.autoClear=r}}const pt=class{constructor(){u(this,"renderer",null);u(this,"camera",null);u(this,"composer",null);u(this,"_tick",null);u(this,"isLoaded",!1);u(this,"isStartCalled",!1);u(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new pt,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new hs({canvas:e,antialias:!0});t.setClearColor(new B(1114129));const s=new ms(t);this.composer=s;const n=new xi,r=new fs;r.add(new si,new He,new bi,new se),Us(),s.addPass(new ps(r,n)),s.addPass(new vs(.7,.3,void 0,0));const o=new Ci(n);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(k.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),k.update(performance.now()),n.update(),r.children.map(c=>{(c instanceof G||c instanceof re)&&c.update()}),s.render())},this.renderer=t,this.camera=n,Pi().then(()=>{this.isLoaded=!0,Ws()})}start(){this.isStartCalled=!0}};let ne=pt;u(ne,"instance");const Se=i=>("00"+i).slice(-2),zi=({x:i,y:e,width:t,height:s})=>{const n=v.exports.useRef(null),[r,o]=v.exports.useState({width:t,height:s}),[a,c]=v.exports.useState(new E(new Ce)),[d,m]=v.exports.useState("loading"),p=v.exports.useRef(null),f=v.exports.useRef(null),C=v.exports.useMemo(()=>new Ne().drawRect(i,e,t,s),[i,e,t,s]);h.exports.useTick(()=>{a.update();const g=ne.getInstance().tick;if(g&&g(),p.current&&f.current){const A=new Date;p.current.text=`${A.getFullYear()}-${Se(A.getMonth())}-${Se(A.getDate())} ${Se(A.getHours())}:${Se(A.getMinutes())}:${Se(A.getSeconds())}`,le.startTime&&le.endTime&&le.startTime<A&&A<le.endTime?f.current.text=`
\uFF8B\uFF9E\uFF7C\uFF9E\uFF6D\uFF71\uFF97\uFF72\uFF7B\uFF9E-\uFF77\uFF6E\uFF73\uFF77\uFF9E\uFF81\uFF6D\uFF73`:f.current.text=`
\uFF8B\uFF9E\uFF7C\uFF9E\uFF6D\uFF71\uFF97\uFF72\uFF7B\uFF9E`}}),v.exports.useEffect(()=>{ne.getInstance().resize(t,s),a.update(),o({width:t,height:s})},[t,s]);const z=()=>{const g=document.createElement("canvas");document.body.appendChild(g),n.current=g,ne.getInstance().setup(g),ne.getInstance().resize(t,s),c(new E(Ce.from(g))),m("splashscreen")},D=()=>{ne.getInstance().start(),m("visualizer")};return l(V,{children:(g=>g==="loading"?l(Xs,{width:t,height:s,loadedHandler:z}):g==="splashscreen"?l(Qs,{width:t,height:s,onComplete:D}):T(h.exports.Container,{mask:C,children:[l(h.exports.Sprite,{texture:a,width:r.width,height:r.height}),l(h.exports.Text,{ref:f,text:`
\uFF8B\uFF9E\uFF7C\uFF9E\uFF6D\uFF71\uFF97\uFF72\uFF7B\uFF9E`,anchor:[0,0],position:[20,20],style:new W({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:48,fill:"#ffffff"})}),l(h.exports.Text,{ref:p,text:"",anchor:[0,0],position:[20,10],style:new W({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:48,fill:"#ffffff"})})]}))(d)})};var Fi="/Visualizer/assets/kusodasaBackGround.aa7102d2.png",Ti="/Visualizer/assets/kusodasaTitle.1b5d3374.png",Mi="/Visualizer/assets/kusodasaTitle2.25e09b49.png",ki="/Visualizer/assets/nazoCat.7266b510.png",Ii="data:image/png;base64,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";const Mt=i=>("00"+i).slice(-2),Ei=i=>("0000"+i).slice(-4),Bi=({x:i,y:e,width:t,height:s})=>{const[n,r]=v.exports.useState(""),[o,a]=v.exports.useState("");h.exports.useTick(()=>{const d=new Date;if(r(`${d.getHours()}\u6642${Mt(d.getMinutes())}\u5206`),!ne.getInstance().isInitialized)return;const m=Math.ceil((le.endTime.getTime()-d.getTime())/1e3/60);a(`${Math.floor(m/60)}\u6642\u9593${Mt(m%60)}\u5206`)});const c=Math.max(750,t);return T(h.exports.Container,{mask:v.exports.useMemo(()=>new Ne().drawRect(i,e,t,s),[i,e,t,s]),children:[l(me,{bgColor:16777215,width:t,height:s}),T(h.exports.Container,{scale:t/c,children:[l(h.exports.Sprite,{image:Fi,position:[0,0],width:c,height:c}),o?l(h.exports.Sprite,{image:Ti,anchor:[.5,0],position:[c/2,40]}):l(h.exports.Sprite,{image:Mi,anchor:[.5,0],position:[c/2,40]}),l(h.exports.Text,{text:o||n,anchor:[.5,0],position:[c/2,190],style:new W({dropShadow:!0,dropShadowAlpha:.6,dropShadowBlur:8,dropShadowDistance:16,fill:["fuchsia","blue","lime","yellow","#ff8000","red"],fillGradientType:1,fontFamily:"HGRPP1",fontSize:128,letterSpacing:3})}),l(h.exports.Sprite,{image:ki,anchor:[.5,0],position:[c/2,400]}),o?T(V,{children:[l(h.exports.Sprite,{image:Ii,anchor:[.5,0],position:[c/2,550]}),l(h.exports.Text,{text:`${Ei(Z.size())}`,anchor:.5,position:[c/2-60,603],style:new W({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:24,fill:"yellow"})})]}):null]})]})},Di=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,Ri=({x:i,y:e,width:t,height:s})=>T(h.exports.Container,{mask:v.exports.useMemo(()=>new Ne().drawRect(i,e,t,s),[i,e,t,s]),children:[l(me,{bgColor:16777215,width:t,height:s}),l(h.exports.Text,{text:Di,anchor:0,position:[0,0],style:new W({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:32,lineHeight:43,fill:"#000000"})})]}),Ve=class{static initialize(){if(Ve.sheet===null){const e=location.pathname.replace(/index\.html.*/gm,"");bt.shared.add("uisprites",`${e}sprites/spritesheet.json`).load(()=>{var t;Ve.sheet=(t=bt.shared.resources.uisprites.spritesheet)!=null?t:null,this.loaded=!0,this.onLoadFunc&&this.onLoadFunc()})}}static get(e){return this.sheet?this.sheet.textures[e]:null}static onLoad(e){this.loaded?e():this.onLoadFunc=e}};let I=Ve;u(I,"sheet",null),u(I,"loaded",!1),u(I,"onLoadFunc",null);I.initialize();const Hi=i=>("00"+i).slice(-2),Ui=i=>{const e=new Date;return`C:\xA5CPCTF\xA5Visualizer\xA5apps> .\xA5ranking
Welcome to Visualizer, USERNAME !

${i?`Ranking (Last Updated ${e.getHours()}:${Hi(e.getMinutes())}):`:"Fetching..."}`},Wi=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th"],Vi=({x:i,y:e,width:t,height:s})=>{const[n,r]=v.exports.useState(!1);v.exports.useEffect(()=>{const c=()=>{r(!0)},d=()=>{r(!1)};return b.on("recalculatestart",c),b.on("recalculateend",d),()=>{b.off("recalculatestart",c),b.off("recalculateend",d)}},[]);const o=v.exports.useMemo(()=>new Ne().drawRect(i,e,t,s),[i,e,t,s]),a=!n&&ne.getInstance().isInitialized;return T(h.exports.Container,{mask:o,children:[l(me,{width:t,height:s,bgColor:0}),l(h.exports.Text,{text:Ui(a),anchor:0,position:[0,0],style:new W({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:"#ffffff"})}),a?Z.ranking.slice(0,20).map((c,d)=>{const m=d==0?"red":d==1||d==2?"yellow":"white";return l(h.exports.Text,{text:`${Wi[d]} : ${c.displayName} / ${Math.floor(c.score)}pts`,anchor:0,position:[0,124+d*26],style:new W({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:m})},c.id)}):null]})},Ni={Component:null,icon:()=>I.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Xt={visualizer:{Component:zi,icon:()=>I.get("Visualizer.png"),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:Bi,icon:()=>I.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:Ri,icon:()=>I.get("ReadMe.png"),title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1},ranking:{Component:Vi,icon:()=>I.get("Ranking.png"),title:"Ranking",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},be=Y/5,ji=({id:i,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:n,starting:r}}=v.exports.useContext(J),o=v.exports.useRef(0),a=()=>{const m=o.current;if(o.current=performance.now(),o.current-m>600)return;const p=Xt[i];s[i]||!p||n(i,p)},c=v.exports.useCallback(m=>{m.clear(),r===i&&(m.beginFill(11184895,.5),m.drawRect(0,0,Y,Y))},[r]),d=e.icon();return T(h.exports.Container,{position:t,interactive:!0,click:a,children:[l(h.exports.Graphics,{draw:c}),d?l(h.exports.Sprite,{texture:d,position:[be/2,0],width:Y-be,height:Y-be}):null,l(h.exports.Text,{text:e.title,anchor:[.5,0],position:[Y/2,Y-be],style:new W({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:be,fill:"#000",fontWeight:"bold",stroke:"#ffffff",strokeThickness:4})})]})};var Gi="/Visualizer/assets/BackGround.6ba2a63c.png";const Xe=12,Li=()=>{const{width:i,height:e}=v.exports.useContext(J),t=Math.max(1,Math.floor((e-O-(Y+Xe))/Y));return T(V,{children:[l(h.exports.Sprite,{image:Gi,anchor:0,x:0,y:0,width:i,height:e-O}),l(h.exports.Container,{position:[Y/2,Y/2],children:Object.entries(Xt).map(([s,n],r)=>l(ji,{id:s,iconInfo:n,position:[Math.floor(r/t)*(Y+Xe),r%t*(Y+Xe)]},s))})]})},Yi=(i,e,t,s)=>{const n=M,r=16,o=[0,0],a=[0,0];let c="none";const d={x:0,y:0};let m=!1,p="pointer",f={x:0,y:0,width:0,height:0};return{mouseDownHandler:g=>A=>{d.x=A.data.global.x,d.y=A.data.global.y,g.fullscreen?f={x:0,y:0,width:t,height:s-O}:f=g.rect,e.focus(i),!(o[0]===0&&o[1]===0&&d.y-f.y>n)&&(a[0]=o[0],a[1]=o[1],c=o[0]===0&&o[1]===0?"move":"scale",e.update(i,F(S({},g),{rect:f,fullscreen:!1})))},mouseMoveHandler:g=>A=>{if(c!=="none")if(c==="move")p="grabbing",e.update(i,F(S({},g),{rect:{x:f.x+A.offsetX-d.x,y:f.y+A.offsetY-d.y,width:g.rect.width,height:g.rect.height}}));else{const x=S({},f),R=200,$=200;a[0]===1?x.width=Math.max(R,f.width-d.x+A.offsetX):a[0]===-1&&(x.width=Math.max(R,d.x+f.width-A.offsetX),x.x=Math.min(f.x+f.width-R,f.x-d.x+A.offsetX)),a[1]===1?x.height=Math.max($,f.height-d.y+A.offsetY):a[1]===-1&&(x.height=Math.max($,d.y+f.height-A.offsetY),x.y=Math.min(f.y+f.height-$,f.y-d.y+A.offsetY)),x.width=Math.max(200,x.width),x.height=Math.max(M,x.height),e.update(i,F(S({},g),{rect:x}))}},mouseUpHandler:()=>()=>{c="none"},cursorMouseMoveHandler:g=>A=>{const x=g.fullscreen?{x:0,y:0,width:t,height:s-O}:g.rect;A.data.global.x-x.x<r?o[0]=-1:x.x+x.width-A.data.global.x<r?o[0]=1:o[0]=0,A.data.global.y-x.y<r?o[1]=-1:x.y+x.height-A.data.global.y<r?o[1]=1:o[1]=0,o[0]*o[1]===1?p="nwse-resize":o[0]*o[1]===-1?p="nesw-resize":o[0]!==0?p="ew-resize":o[1]!==0?p="ns-resize":A.data.global.y-x.y<n?p="grab":p="default"},mouseOverHandler:()=>{m=!0},mouseOutHandler:()=>{m=!1},getCursor:()=>m?p:""}};let ht="";const qt=()=>ht,Oi=i=>{ht=i},Xi=()=>{ht=""};var qi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const oe=new Ce(qi),ae={topLeft:new E(oe,new U(0,0,6,26)),top:new E(oe,new U(6,0,3,26)),topRight:new E(oe,new U(9,0,6,26)),right:new E(oe,new U(9,26,6,3)),bottomRight:new E(oe,new U(9,29,6,6)),bottom:new E(oe,new U(6,29,3,6)),bottomLeft:new E(oe,new U(0,29,6,6)),left:new E(oe,new U(0,26,6,3))},Ki=({width:i,height:e})=>T(V,{children:[l(h.exports.Sprite,{texture:ae.topLeft,position:[0,0],width:w,height:M}),l(h.exports.Sprite,{texture:ae.top,position:[w,0],width:i-w*2,height:M}),l(h.exports.Sprite,{texture:ae.topRight,position:[i-w,0],width:w,height:M}),l(h.exports.Sprite,{texture:ae.right,position:[i-w,M],width:w,height:e-M-w}),l(h.exports.Sprite,{texture:ae.bottomRight,position:[i-w,e-w],width:w,height:w}),l(h.exports.Sprite,{texture:ae.bottom,position:[w,e-w],width:i-w*2,height:w}),l(h.exports.Sprite,{texture:ae.bottomLeft,position:[0,e-w],width:w,height:w}),l(h.exports.Sprite,{texture:ae.left,position:[0,M],width:w,height:e-M-w})]}),Q=()=>(M-Be*2)*.9,ge=16/14,Qi=({onKill:i,onMinimize:e,onMaximize:t})=>{const s=[];let n=0,r=0;const o=I.get("WindowButtonClose.png"),a=I.get("WindowButtonMaximize.png"),c=I.get("WindowButtonMinimize.png");return!o||!a||!c?l(V,{children:null}):(i&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:o,width:Q()*ge,height:Q(),position:[-n*Q()*ge,0],interactive:!0,click:i},"kill")),n++,r=-2*Fe),t&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:a,width:Q()*ge,height:Q(),position:[-n*Q()*ge+r,0],interactive:!0,click:t},"maximize")),n++),e&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:c,width:Q()*ge,height:Q(),position:[-n*Q()*ge+r,0],interactive:!0,click:e},"minimize")),n++),l(V,{children:s}))},mt=i=>i-w*2,he=i=>i-M-w,ft=({icon:i,width:e,height:t,title:s,isActive:n=!0,onMinimize:r,onMaximize:o,onKill:a,children:c})=>{const d=I.get(n?"WindowTitleBarActive.png":"WindowTitleBarInactive.png");return T(V,{children:[T(h.exports.Container,{position:[0,0],children:[l(Ki,{width:e,height:t}),d?l(h.exports.Sprite,{texture:d,width:e-w*2,height:M-Be*2,position:[w,Be]}):null,i?l(h.exports.Sprite,{texture:i,width:Q(),height:Q(),position:[w+2,Be]}):null,l(h.exports.Text,{text:s,anchor:[0,.5],position:[w+2+(i?Q()+2:0),M/2],style:new W({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:M*.5,fill:"#000"})}),l(h.exports.Container,{position:[e-w,M/2],children:l(Qi,{onKill:a,onMaximize:o,onMinimize:r})})]}),l(h.exports.Container,{position:[w,M],children:c})]})},Ji=({id:i,windowInfo:e,focus:t})=>{const{width:s,height:n}=v.exports.useContext(J),{title:r,visible:o,fullscreen:a,Component:c}=e,[d,m]=v.exports.useState(!1),p=a?{x:0,y:0,width:s,height:n-O}:e.rect,{windowSettings:f}=v.exports.useContext(J),C=v.exports.useRef(e),z=()=>{f.update(i,F(S({},e),{fullscreen:!e.fullscreen}))},D=()=>{f.minimize(i)},X=()=>{f.kill(i)};v.exports.useEffect(()=>{C.current=e},[e]);const[g,A]=v.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return v.exports.useEffect(()=>{const x=setTimeout(()=>{m(!0)},1500),{mouseDownHandler:R,mouseMoveHandler:$,mouseUpHandler:ue,cursorMouseMoveHandler:pe,mouseOutHandler:N,mouseOverHandler:ye,getCursor:q}=Yi(i,f,s,n);A({mouseDownHandler:R,cursorMouseMoveHandler:pe,mouseOverHandler:ye,mouseOutHandler:N,getCursor:q});const Te=de=>{$(C.current||e)(de)},je=()=>{ue()()},ve=document.getElementById("pixicanvas");if(!!ve)return ve.addEventListener("mousemove",Te),ve.addEventListener("mouseup",je),()=>{clearTimeout(x),ve.removeEventListener("mousemove",Te),ve.removeEventListener("mouseup",je)}},[]),h.exports.useTick(()=>{g.getCursor&&g.getCursor()&&!qt()&&Oi(g.getCursor())}),l(h.exports.Container,{position:o?[p.x,p.y]:[p.x,-99999],interactive:!0,mousedown:g.mouseDownHandler?g.mouseDownHandler(e):()=>"",mousemove:g.cursorMouseMoveHandler?g.cursorMouseMoveHandler(e):()=>"",mouseover:g.mouseOverHandler?g.mouseOverHandler:()=>"",mouseout:g.mouseOutHandler?g.mouseOutHandler:()=>"",children:l(ft,{width:p.width,height:p.height,title:r,icon:e.icon(),isActive:t,onMinimize:D,onMaximize:z,onKill:i==="visualizer"?void 0:X,children:d?c?l(c,{x:p.x+w,y:p.y+M,width:mt(p.width),height:he(p.height)}):l(h.exports.Container,{}):null})})};var Zi="/Visualizer/assets/youareanidiot_black.591803b6.png",_i="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const $i=({width:i,height:e,trans:t})=>{const s=i*.7,n=s/1576*994,r=v.exports.useRef(null),o=v.exports.useRef([0,0]),a=v.exports.useRef([0,0]);return v.exports.useEffect(()=>{const c=Math.PI*Math.random();a.current=[Math.cos(c)*90,Math.sin(c)*90]},[]),h.exports.useTick(c=>{if(!r.current||!o.current||!a.current)return;a.current[1]+=98*c/30;const d=[o.current[0]+a.current[0]*c/30,o.current[1]+a.current[1]*c/30];d[0]<0?(d[0]=0,a.current[0]*=-1):d[0]>i-s?(d[0]=i-s,a.current[0]*=-1):d[1]>Math.max(1,e-n)&&(d[1]=Math.max(1,e-n),a.current[1]*=-1),o.current=d,r.current.position.set(d[0],d[1])}),l(h.exports.Container,{ref:r,children:l(ft,{width:s,height:n,title:"Hahahahahaha",children:l(h.exports.Sprite,{image:t?Zi:_i,width:mt(s),height:he(n)})})})},en=({width:i,height:e})=>{const[t,s]=v.exports.useState(!1);return h.exports.useTick(()=>{const n=performance.now();s(Math.floor(n/500)%2==0)}),l(V,{children:new Array(10).fill(null).map((n,r)=>l($i,{width:i,height:e,index:r,trans:t},r))})},tn=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s}}=v.exports.useContext(J),[n,r]=v.exports.useState(!1);return v.exports.useEffect(()=>{const o=()=>{const c=new Date().getTime();le.endTime.getTime()<c&&r(!0)},a=()=>{r(!0)};return b.on("initialized",o),b.on("end",a),()=>{b.off("initialized",o),b.off("end",a)}},[]),T(V,{children:[l(Li,{}),s.map((o,a)=>l(Ji,{windowInfo:t[o]||Ni,id:o,focus:a===s.length-1},o)),n?l(en,{width:i,height:e}):null]})},sn=({id:i,index:e,tabWidth:t})=>{const{windowSettings:{windows:s,focused:n,focus:r,minimize:o}}=v.exports.useContext(J),a=s[i];if(!a)return l(V,{children:null});const{title:c,visible:d}=a,m=d?I.get("TaskbarButtonActive.png"):I.get("TaskbarButtonInactive.png"),p=a.icon();return T(h.exports.Container,{position:[e*t,O/2],interactive:!0,click:()=>n===i?o(i):r(i),children:[m?l(h.exports.Sprite,{width:t*.96,height:O*.9,texture:m,anchor:[0,.5],position:[0,0]}):null,p?l(h.exports.Sprite,{width:O*.6,height:O*.6,texture:p,anchor:[0,.5],position:[7,0]}):null,l(h.exports.Text,{text:c,anchor:[0,.5],position:[14+O*.6,0],style:new W({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:O*.5*.8,fill:"#000"})})]})},nn=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=v.exports.useContext(J),s=I.get("WindowTitleBarActive.png"),n=Math.min(i/t.length,Ss);return T(h.exports.Container,{position:[0,e-O],children:[s?l(h.exports.Sprite,{texture:s,width:i,height:O,anchor:0,position:[0,0]}):null,l(h.exports.Container,{position:[5,0],children:t.map((r,o)=>l(sn,{id:r,index:o,tabWidth:n},r))})]})};var rn=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class on extends ut{constructor(){super(void 0,rn,{dimensions:[0,0]})}apply(e,t,s,n){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,n)}}var an=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class cn extends ut{constructor(){super(void 0,an,{dimensions:[0,0]})}apply(e,t,s,n){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,n)}}var ln=`precision mediump float;

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
}`;class un extends ut{constructor(){super(void 0,ln,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,n){const{width:r,height:o}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,n)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const dn="_main_11f2u_1";var hn={main:dn};const kt=s=>{var n=s,{text:i,click:e}=n,t=Le(n,["text","click"]);const r=I.get("InButton.png");return r?T(h.exports.Container,F(S({},t),{children:[l(h.exports.Sprite,{width:150,height:M,texture:r,anchor:[.5,.5],position:[0,0],interactive:!0,click:e}),l(h.exports.Text,{text:i,anchor:.5,position:0,style:new W({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:M*.5,fill:"#000"})})]})):l(V,{})},mn=()=>{const{width:i,height:e}=v.exports.useContext(J),[t,s]=v.exports.useState(!0),n={width:500,height:180,left:i*.5-250,top:e*.5-90};return t?T(h.exports.Container,{children:[l(me,{bgColor:0,width:i,height:e}),l(h.exports.Container,{position:[n.left,n.top],children:T(ft,{width:n.width,height:n.height,title:"\u97F3\u306E\u78BA\u8A8D",children:[l(me,{bgColor:13027014,width:mt(n.width),height:he(n.height)}),l(h.exports.Text,{text:"\u97F3\u3092\u9CF4\u3089\u3057\u3066\u3082\uFF1F",anchor:[0,0],position:[5,5],style:new W({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:M*.5,fill:"#000"})}),l(kt,{text:"\u3044\u3044\u306D",anchor:[1,.5],position:[he(n.width)-215,he(n.height)-30],click:()=>{Ct(1),s(!1),Re("mousedown"),Re("mouseup"),qe("hdd")}}),l(kt,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,.5],position:[he(n.width)-60,he(n.height)-30],click:()=>{Ct(0),s(!1)}})]})})]}):null},It={default:"CursorDefault.png","ns-resize":"CursorNsResize.png","ew-resize":"CursorEwResize.png","nesw-resize":"CursorNeswResize.png","nwse-resize":"CursorNwseResize.png",grab:"CursorGrab.png",grabbing:"CursorGrabbing.png",wait:"CursorWait.png"},Et=i=>{let e=i?"wait":qt();return It[e]||(e="default"),I.get(It[e])},fn=()=>{const i=v.exports.useRef(null),{windowSettings:{starting:e}}=v.exports.useContext(J),t=h.exports.useApp();h.exports.useTick(()=>{const n=t.renderer.plugins.interaction.mouse.global,r=Et(e);i.current&&r&&(i.current.texture=r,i.current.x=n.x,i.current.y=n.y,Xi())});const s=Et("default");return s?l(h.exports.Sprite,{ref:i,anchor:.5,width:Pt,height:Pt,texture:s}):l(V,{})},pn=({children:i,Context:e,render:t})=>l(e.Consumer,{children:s=>t(l(e.Provider,{value:s,children:i}))}),vn=t=>{var s=t,{children:i}=s,e=Le(s,["children"]);const{width:n,height:r}=v.exports.useContext(J);return l(pn,{Context:J,render:o=>l(h.exports.Stage,F(S({width:n,height:r},e),{children:o})),children:i})},gn=h.exports.withFilters(h.exports.Container,{hex:un,bloom:gs,colorshift:As,lensDistortion:on,visnetting:cn}),An=()=>{const i=()=>{Re("mousedown")},e=()=>{Re("mouseup")},[t,s]=v.exports.useState(!1),n=h.exports.useApp();return v.exports.useEffect(()=>{n.ticker.maxFPS=30,I.onLoad(()=>{s(!0)})},[]),t?T(gn,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:[T(h.exports.Container,{mousedown:i,mouseup:e,interactive:!0,children:[l(nn,{}),l(tn,{}),l(mn,{})]}),l(fn,{})]}):l(V,{})},xn=()=>(v.exports.useEffect(()=>{document.body.style.cursor="none"},[]),l(Fs,{children:l("main",{className:hn.main,children:l(vn,{id:"pixicanvas",children:l(An,{})})})}));xs.render(l(ws.StrictMode,{children:l(xn,{})}),document.getElementById("root"));
