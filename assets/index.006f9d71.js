var bt=Object.defineProperty,St=Object.defineProperties;var Qt=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var me=(n,e,t)=>e in n?bt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,f=(n,e)=>{for(var t in e||(e={}))Ze.call(e,t)&&me(n,t,e[t]);if(oe)for(var t of oe(e))He.call(e,t)&&me(n,t,e[t]);return n},C=(n,e)=>St(n,Qt(e));var Re=(n,e)=>{var t={};for(var s in n)Ze.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&oe)for(var s of oe(n))e.indexOf(s)<0&&He.call(n,s)&&(t[s]=n[s]);return t};var w=(n,e,t)=>(me(n,typeof e!="symbol"?e+"":e,t),t);import{r as d,j as Ie,T as It,G as zt,F as Gt,m as Tt,B as N,a as b,R as W,b as M,c as T,M as he,d as Le,S as kt,e as O,C as G,V as ie,E as Ft,f as _e,P as re,D as $e,g as j,h as fe,i as Yt,k as ge,l as Wt,n as Zt,o as Ht,A as Rt,p as Ue,q as Ut,s as ae,t as jt,u as Ot,W as Vt,v as Xt,w as Nt,x as qt,y as Kt,z as Jt,H as et,I as ze,J as Lt,K as _t,L as $t,N as es}from"./vendor.da819f68.js";const ts=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const A of r.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&s(A)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};ts();const Ae=1.5,Y=54*Ae,p=32*Ae,Q=64*Ae,je=200*Ae,tt=2*Ae;let st=0;const Oe=n=>{st=n},ue=()=>st;var ss="/Visualizer/assets/clickup.207be81c.mp3",is="/Visualizer/assets/clickdown.92e482ed.mp3",ns="/Visualizer/assets/hdd.670515d8.mp3";const S={mouseup:new Audio(ss),mousedown:new Audio(is),hdd:new Audio(ns)},De=n=>{ue()!==0&&(!S[n]||(S[n].paused||(S[n].pause(),S[n].currentTime=0),S[n].volume=ue(),S[n].play()))},Pe=n=>{ue()!==0&&(!S[n]||(S[n].paused||(S[n].pause(),S[n].currentTime=Math.min(S[n].currentTime,5)),S[n].volume=ue(),S[n].play()))},rs=()=>{const[n,e]=d.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,i)=>{e(r=>{if(r.windowSettings.starting)return r;if(!r.windowSettings.windowIndices.includes(s))return Pe("hdd"),setTimeout(()=>{e(l=>{const c=f({},l.windowSettings.windows);c[s]=i;const h=[...l.windowSettings.windowIndices],D=[...l.windowSettings.windowStack];return h.includes(s)||(D.push(s),h.push(s)),C(f({},l),{windowSettings:C(f({},l.windowSettings),{windows:c,windowIndices:h,windowStack:D,starting:""})})})},2e3),C(f({},r),{windowSettings:C(f({},r.windowSettings),{starting:s})});const A=f({},r.windowSettings.windows);A[s]=i;const o=[...r.windowSettings.windowIndices],a=[...r.windowSettings.windowStack];return o.includes(s)||(a.push(s),o.push(s),Pe("hdd")),C(f({},r),{windowSettings:C(f({},r.windowSettings),{windows:A,windowIndices:o,windowStack:a})})})},kill:s=>{e(i=>{const r=f({},i.windowSettings.windows);delete r[s];const A=i.windowSettings.windowIndices.filter(c=>c!==s),o=i.windowSettings.windowStack.filter(c=>c!==s),a=A.filter(c=>{var h;return(h=r[c])==null?void 0:h.visible}),l=a.length>0?a[a.length-1]:"";return C(f({},i),{windowSettings:C(f({},i.windowSettings),{windows:r,windowIndices:A,windowStack:o,focused:l})})})},focus:s=>{e(i=>{const r=f({},i.windowSettings.windows),A=r[s];if(!A)throw new Error("invalid id");r[s]=C(f({},A),{visible:!0});const o=i.windowSettings.windowIndices.filter(a=>a!==s);return o.push(s),C(f({},i),{windowSettings:C(f({},i.windowSettings),{windows:r,windowIndices:o,focused:s})})})},minimize:s=>{e(i=>{const r=f({},i.windowSettings.windows),A=r[s];if(!A)throw new Error("invalid id");r[s]=C(f({},A),{visible:!1});const o=i.windowSettings.windowIndices.filter(l=>{var c;return l!==s&&((c=r[l])==null?void 0:c.visible)}),a=o.length>0?o[o.length-1]:"";return C(f({},i),{windowSettings:C(f({},i.windowSettings),{windows:r,focused:a})})})}}}));return[n,()=>{e(s=>C(f({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},u=Ie.exports.jsx,I=Ie.exports.jsxs,J=Ie.exports.Fragment,k=d.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),As=({children:n})=>{const[e,t]=rs();return d.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),u(k.Provider,{value:e,children:n})},os="ws://localhost:8000",Ve=["nanika","doreka","soreka"];var Ge="/Visualizer/assets/testicon.8f219171.jpg";const U=new Array(100).fill(null).map((n,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:Ge,point:0,rank:-1})),as=()=>({userid:U[Math.floor(Math.random()*U.length)].id,point:Math.random()*1e3,genre:Ve[Math.floor(Math.random()*Ve.length)],title:"\u30AA\u30E2\u30B7\u30ED\u554F\u984C -\u3053\u308C\u306F\u9069\u5F53\u306B\u8003\u3048\u305F\u30BF\u30A4\u30C8\u30EB-"}),it=()=>(U.forEach(n=>{n.point+=Math.random()*1e3}),U.sort((n,e)=>n.point-e.point),U.forEach((n,e)=>{n.rank=e+1}),{ranking:U,circuit:{}}),ws=()=>{const n=new Date;n.setMinutes(n.getMinutes()-5);const e=new Date;return e.setMinutes(e.getMinutes()+5),{users:U.map(({id:t,name:s,iconUrl:i})=>({id:t,name:s,iconUrl:i})),recalculate:it(),startTime:n.toString(),endTime:e.toString()}},ve=n=>f({data:{type:"recalculate",result:null},lastEventId:"",origin:"",ports:[],source:null,initMessageEvent:function(e,t,s,i,r,A,o,a){throw new Error("Function not implemented.")},bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:null,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:null,target:null,timeStamp:0,type:"",composedPath:function(){throw new Error("Function not implemented.")},initEvent:function(e,t,s){throw new Error("Function not implemented.")},preventDefault:function(){throw new Error("Function not implemented.")},stopImmediatePropagation:function(){throw new Error("Function not implemented.")},stopPropagation:function(){throw new Error("Function not implemented.")},AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0},n),ye=n=>new Promise(e=>{setTimeout(()=>e(),n)}),q={startTime:new Date,endTime:new Date};class nt{static async initial(){return await ye(1e3),ws()}static async recalculate(){return await ye(1e3),it()}}const Ee={texture:new It,gltf:new zt,fbx:new Gt},Xe=(n,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Ee.gltf.load(n,i=>{t(i.scene)},()=>0,i=>{s(i)});break}case"texture":{Ee.texture.load(n,i=>{t(i)},()=>0,i=>{s(i)});break}}});class m{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const i=this.queue.length;if(i!==0)return this.queue.map(([r,A])=>{t?t=t.then(()=>Xe(r,A)):t=Xe(r,A),t=t.then((o=>{s+=1,this.resources[r]={type:A,data:o},e({path:r,data:o,total:i,count:s})}).bind(this)).catch(o=>{console.log("loaderror",o)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}w(m,"resources",{}),w(m,"queue",[]);class cs extends EventTarget{constructor(e){super();w(this,"id");w(this,"_point",0);w(this,"_rank",-1);w(this,"_displayName","");w(this,"_icon",null);w(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,i){var r;this._point=e,this._rank=t,this._displayName=s,(!this._iconPath||this._iconPath!==i)&&(this._iconPath=i,(r=this._icon)==null||r.dispose(),this._icon=Ee.texture.load(i))}}class K{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const i=new cs(e);this.users[e]=i,i.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:i,rank:r}){var A;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(A=this.users[e])==null||A.set(i,r,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,i;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((i=this.users[t])==null?void 0:i.rank)||999999999)})}static getUser(e){return this.users[e]}}w(K,"users",{}),w(K,"_ranking");const B=Tt(),ls=()=>{const n=new WebSocket(os);n.addEventListener("message",ce.bind(globalThis)),n.addEventListener("error",()=>{B.emit("disconnect")}),Ds()},us=()=>{B.emit("initialized")},Ds=()=>{setInterval(()=>{ce(ve({data:{type:"recalculate"}}))},3e4),setInterval(()=>{ce(ve({data:{type:"end"}}))},3e5),setInterval(()=>{ce(ve({data:{type:"submit",result:as()}}))},3e3)},ce=n=>{switch(n.data.type){case"submit":{B.emit("submit",n.data.result);break}case"start":{q.startTime=new Date,B.emit("start");break}case"end":{q.endTime=new Date,B.emit("end");break}case"recalculate":{(async()=>{B.emit("recalculatestart"),await Ms(),B.emit("recalculateend")})();break}}},Ms=async()=>{const{ranking:n}=await nt.recalculate();n.forEach(e=>{K.updateUser(e)}),K.updateRanking(),await ye(4e3)};let Te="";const rt=()=>Te,ds=n=>{Te=n},hs=()=>{Te=""};var Ne="/Visualizer/assets/clock-icon.77140fc3.png",fs="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const ms=[{src:fs,id:"visualizer",title:"Visualizer"},{src:Ne,id:"clock",title:"Clock.exe"},{src:Ne,id:"readme",title:"Readme.txt"}];var gs="data:image/png;base64,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",vs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",ps="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",At="/Visualizer/assets/recalculating.60ffccdf.glb",ot="/Visualizer/assets/monitor.894de1ca.glb",xs="/Visualizer/assets/face.e8cae3d3.png",be="/Visualizer/assets/cpu.57abf837.glb",at="/Visualizer/assets/graphicBoard.df969daf.glb",wt="/Visualizer/assets/hdd.57193f05.glb",ct="/Visualizer/assets/memory.4bfe027c.glb",lt="/Visualizer/assets/powerSupply.2ca11cfa.glb",ut="/Visualizer/assets/tipSet.f2956ffc.glb",Dt="/Visualizer/assets/audio.5e239d55.glb",Mt="/Visualizer/assets/condenser.07eb820d.glb",dt="/Visualizer/assets/ports.6ad72da3.glb",ht="/Visualizer/assets/ssd.523d4501.glb",Se="/Visualizer/assets/symbols.3d122568.glb";const Cs=()=>{m.addGLTF(At),m.addGLTF(ot),m.addTexture(xs),m.addTexture(Ge),m.addGLTF(be),m.addGLTF(at),m.addGLTF(wt),m.addGLTF(ct),m.addGLTF(lt),m.addGLTF(ut),m.addGLTF(Dt),m.addGLTF(Mt),m.addGLTF(dt),m.addGLTF(ht),m.addGLTF(Se)},Bs=({width:n,height:e,loadedHandler:t})=>{const[s,i]=d.exports.useState(""),[r,A]=d.exports.useState(0),[o,a]=d.exports.useState({textures:[],index:-1});return d.exports.useEffect(()=>{(async()=>{Cs(),await m.load(({path:D,total:y,count:F})=>{i(D),A(F/y)}),t()})();const c=new N(gs);a({index:0,textures:[new b(c,new W(64*0,0,64,64)),new b(c,new W(64*1,0,64,64)),new b(c,new W(64*2,0,64,64)),new b(c,new W(64*3,0,64,64)),new b(c,new W(64*4,0,64,64)),new b(c,new W(64*5,0,64,64)),new b(c,new W(64*6,0,64,64)),new b(c,new W(64*7,0,64,64))]});const h=setInterval(()=>{a(D=>({index:(D.index+1)%D.textures.length,textures:D.textures}))},200);return()=>{clearInterval(h)}},[]),I(M.exports.Container,{position:[n/2,e/2],children:[o.index<0?null:u(M.exports.Sprite,{texture:o.textures[o.index],anchor:.5,position:[0,-50],width:64,height:64}),u(M.exports.Text,{text:s,anchor:.5,position:[0,0],style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),u(M.exports.Sprite,{image:vs,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*r)).fill(null).map((l,c)=>u(M.exports.Sprite,{image:ps,anchor:[0,.5],position:[(c-8)*16,0],width:16,height:32},c))})]})};var Ps="/Visualizer/assets/traP_logo.25c1c1d8.png";const ys=new N(Ps),pe=50,we=24,Es=({width:n,height:e,onComplete:t})=>{const[s,i]=d.exports.useState(0);return d.exports.useEffect(()=>{const r=setInterval(()=>{i(A=>A===pe+we*2?(clearInterval(r),setTimeout(()=>{t()},1),A):A+1)},1e3/we)},[]),u(M.exports.Container,{position:[n/2,e/2],children:u(M.exports.Sprite,{texture:new b(ys,new W(0,280*Math.min(s,pe-1),1920,280)),alpha:1-Math.max(0,s-pe-we)/we,anchor:.5,width:n*.9,height:n*.9/1920*280})})};class v{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}w(v,"startTime",-1),w(v,"_time",-1),w(v,"_deltaTime",-1),w(v,"prevTime",-1);class R extends he{constructor(e,t){super(e,t);w(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof z||e instanceof R)&&e.update()}))}}class z extends Le{constructor(){super();w(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof z||e instanceof R)&&e.update()}))}}const bs=`
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
`,Ss=`
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
`;class Qs extends R{constructor(){super(new kt(100),new O({uniforms:{radius:{value:100},colorA:{value:new G("#db2784")},colorB:{value:new G("#1c1330")},sunColorA:{value:new G("#db2784")},sunColorB:{value:new G("#f2ca2b")},sunPos:{value:new ie(-100,0,0).applyEuler(new Ft(0,0,-Math.PI*.06))},time:{value:0}},side:_e,vertexShader:bs,fragmentShader:Ss}))}update(){super.update(),this.material.uniforms.time.value=v.time}}const Is=`
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
`,zs=`
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
`;class Gs extends R{constructor(){super(new re(100,100,50,50),new O({uniforms:{colorA:{value:new G(16729343)},colorB:{value:new G(1127423)},time:{value:0}},vertexShader:Is,fragmentShader:zs,side:$e}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=v.time}}class Ts extends z{constructor(){super();this.add(new Gs),this.add(new Qs)}start(){}update(){super.update()}}var ks=`uniform sampler2D face;
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
}`,Fs=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,Ys="/Visualizer/assets/face.e8cae3d3.png";class Ws extends R{constructor(){super(new re(4*.5,3*.5),new O({vertexShader:Fs,fragmentShader:ks,uniforms:{face:{value:m.get(Ys)},icon:{value:m.get(Ge)},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1.1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}start(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;!e||!t||setTimeout(()=>{setInterval(()=>{e.value=1,t.value=1,j.to(t,.3,{value:0}),setTimeout(()=>{e.value=Math.random()<.5?0:2,t.value=1,j.to(t,.3,{value:0})},2e3),setTimeout(()=>{e.value=-1,t.value=1,j.to(t,.3,{value:0})},4e3)},1e4)},Math.random()*1e4)}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=v.time)}}class xe extends z{constructor(){super();const e=m.get(ot).clone();e.material=new fe({color:65280}),this.add(e),this.add(new Ws)}start(){}update(){super.update()}}class Zs extends z{constructor(){super();this.position.y=3;let e=20;new Array(e).fill(null).forEach((t,s)=>{const i=new xe,r=s/e*Math.PI*2;i.position.set(Math.sin(r)*4,0,Math.cos(r)*4),i.scale.set(.4,.4,.4),i.lookAt(0,-2,0),this.add(i)}),e=60,new Array(e).fill(null).forEach((t,s)=>{const i=new xe,r=s/e*Math.PI*2;i.position.set(Math.sin(r)*4.5,-1,Math.cos(r)*4.5),i.scale.set(.15,.15,.15),i.lookAt(0,-2,0),this.add(i)}),e=120,new Array(e).fill(null).forEach((t,s)=>{const i=new xe,r=s/e*Math.PI*2;i.position.set(Math.sin(r)*5,-1.5,Math.cos(r)*5),i.scale.set(.1,.1,.1),i.lookAt(0,-2,0),this.add(i)})}}class Hs extends Yt{constructor(){super(60,1,1,2e3);B.on("recalculatestart",()=>{j.to(this.position,2,{y:-3})}),B.on("recalculateend",()=>{j.to(this.position,2,{y:1})})}start(){this.position.set(Math.sin(v.time*.1)*4,1,Math.cos(v.time*.1)*4)}update(){this.position.set(Math.sin(v.time*.1)*4,this.position.y,Math.cos(v.time*.1)*4),this.lookAt(0,this.position.y+.5,0)}}class Rs extends R{constructor(){super(new re(1,1),new fe({color:Math.floor(Math.random()*256*256*256)}));this.rotation.set(-Math.PI/2,0,0)}to(e){const t=j.timeline(),s=this.position;t.to(this.position,.2,{x:s.x,y:s.y+.3,z:s.z,ease:ge.easeOut}).to(this.position,.6,{x:e.x,y:e.y+.3,z:e.z,ease:ge.easeOut}).to(this.position,.2,{x:e.x,y:e.y,z:e.z,ease:ge.easeOut})}}const Us=()=>{const n=Math.floor(Math.random()*9),e=Math.floor(Math.random()*8),t=e<n?e:e+1;return[n,t]};class js extends z{constructor(){super();w(this,"children",[]);w(this,"animationTimeout",null);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){const s=new Rs;s.position.set(t,0,e),this.add(s)}}animate(){this.exchange()}exchange(){const[e,t]=Us(),s=this.children[e];this.children[e]=this.children[t],this.children[t]=s,this.children[e].to(new ie(e%3-1,0,Math.floor(e/3)-1)),this.children[t].to(new ie(t%3-1,0,Math.floor(t/3)-1)),this.animationTimeout=setTimeout(this.exchange.bind(this),300)}stop(){!this.animationTimeout||(clearTimeout(this.animationTimeout),this.animationTimeout=null)}}class Os extends z{constructor(){super();w(this,"recLabel");const e=new js;e.scale.set(.5,.5,.5),this.add(e),this.position.set(0,-4,0),this.recLabel=m.get(At),this.recLabel.children[0].material.transparent=!0,this.recLabel.position.set(0,.5,0),this.recLabel.scale.set(1.5,1.5,1.5),this.add(this.recLabel)}start(){B.on("recalculatestart",()=>{var e;(e=this.children[0])==null||e.animate()}),B.on("recalculateend",()=>{var e;(e=this.children[0])==null||e.stop()})}update(){super.update(),this.recLabel.rotation.y+=v.deltaTime}}const Vs=async()=>{const n=await nt.initial();n.users.forEach(e=>{K.addUser(e)}),q.startTime=new Date(n.startTime),q.endTime=new Date(n.endTime)};class Qe{constructor(e,t){this.sizeX=e,this.sizeY=t}}class ft{constructor(e,t,s,i){this.x=e,this.z=t,this.isBig=s,this.category=i}}class mt{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class gt{static jsonToInfo(e){const t=JSON.parse(e);let s=new Qe(0,0);const i=new Array(0),r=new Array(0);return t.forEach(A=>{if(A.class=="basis"){const o=A;s=new Qe(o.sizeX,o.sizeY)}else if(A.class=="parts"){const o=A;i.push(new ft(o.x,o.z,o.isBig,o.category))}else if(A.class=="wires"){const o=A;r.push(new mt(o.x,o.z,o.wires))}}),[s,i,r]}static infoToJson(e,t,s){const i=new Array(0),r={class:"basis",sizeX:e.sizeX,sizeY:e.sizeY};return i.push(r),t.forEach(A=>{const o={class:"parts",x:A.x,z:A.z,isBig:A.isBig,category:A.category};i.push(o)}),s.forEach(A=>{const o={class:"wires",x:A.x,z:A.z,wires:A.wires};i.push(o)}),JSON.stringify(i)}}class Xs{constructor(e,t){w(this,"x");w(this,"y");w(this,"parts");w(this,"wires");w(this,"wirePoints");this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,i)=>{this.wires[i]=new qs(i)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const i=s.getWirePointsInt(e,t);this.wirePoints.forEach((r,A)=>{this.wirePoints[A]=i[A]==1}),this.wires.forEach(r=>{r.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class Ns{constructor(e){w(this,"notdir");w(this,"wireInd",0);w(this,"priority",[0,1,2]);w(this,"end",!1);w(this,"dir");w(this,"beforeDir");w(this,"counter",0);w(this,"straightCounter",0);w(this,"straightMax",2);w(this,"counterMax",2);this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class qs{constructor(e){w(this,"ind");w(this,"from");w(this,"to");w(this,"canTo");this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let i=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let r=0;r<3;r++){const A=t[r];if(this.canTo[A]!=-1&&A!=e){i=this.canTo[A];break}}return this.cantTo(),i==-1?(this.from=-1,-1):(this.to=i,i)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,i=0;for(let A=0;A<32;A++){const o=(e.from+A)%32;if(o==e.to){i++;continue}if(o==this.from){s=i;continue}const a=this.canTo.findIndex(l=>l==o);a!=-1&&(t[a]=i)}const r=new Array(3).fill(-1);this.canTo.forEach((A,o)=>{s==t[o]?r[o]=A:r[o]=-1}),this.canTo=r}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const Me=class{constructor(e,t){w(this,"sizeX");w(this,"sizeY");w(this,"cells");w(this,"partsCellDict",{});w(this,"parts",new Array(0));this.sizeX=e,this.sizeY=t,this.cells=new Array(this.sizeY*this.sizeX);for(let s=0;s<t;s++)for(let i=0;i<e;i++)this.cells[s*e+i]=new Xs(i,s)}putParts(e,t,s){if(!this.canPutParts(e,t,s))return!1;const i=s.sizeY,r=s.sizeX,A=new Array(0);for(let o=0;o<i;o++)for(let a=0;a<r;a++){const l=t+o,c=e+a,h=this.getCell(c,l);h.setParts(a,o,s),A.push(h)}return s.setPosition(e,t),this.partsCellDict[s.id]=A,this.parts.push(s),!0}getPartsCells(e){return e.id in this.partsCellDict?this.partsCellDict[e.id]:new Array(0)}getAllPartsCells(){return this.partsCellDict}extendWires(e){const t=e.x,s=e.y;e.getActiveWirePointsIndex().forEach(r=>{let A=t,o=s;const a=r%8,l=(r-a)/8,c=new Ns(l);for(;r!=-1;){const[h,D]=this.indexConvertToAroundIndex(r);A+=Me.dx[h],o+=Me.dy[h];const y=this.getCell(A,o);if(y==null||(c.update(D,h),r=y.setWire(c),r==-1))break}})}convertToCircuitInfos(){const e=new Qe(this.sizeX,this.sizeY),t=new Array(0),s=new Array(0);return this.cells.forEach(i=>{const r=new Array(0);i.getAllWires().forEach(A=>{A.isEmpty()||(A.isHole()?r.push([A.ind,A.to]):r.push([A.from,A.to]))}),r.length!=0&&s.push(new mt(i.x,i.y,r))}),this.parts.forEach(i=>{const[r,A]=i.getPosition();t.push(new ft(r,A,i.isBig,i.problemCategory))}),[e,t,s]}canPutParts(e,t,s){const i=s.sizeY,r=s.sizeX;for(let A=0;A<i;A++)for(let o=0;o<r;o++){const a=t+A,l=e+o,c=this.getCell(l,a);if(c==null)return!1;if(c.isParts())return!1}return!0}getCell(e,t){if(0<=t&&t<this.sizeY&&0<=e&&e<this.sizeX)return this.cells[t*this.sizeX+e]}indexConvertToAroundIndex(e){const t=e%8,s=(e-t)/8,r=((s+2)%4+1)*8-t-1;return[s,r]}};let X=Me;w(X,"dy",[1,0,-1,0]),w(X,"dx",[0,1,0,-1]);const Z=class extends z{constructor(e){super();e.forEach(t=>{const s=this.createWireGeometry(t);this.add(new he(s,new fe({color:16777215})))})}start(){}update(){super.update()}createWireGeometry(e){let t=new Wt;const s=1,i=.25,r=.5,A=.25,o=16,[a,l]=e;if(l==-1){console.log("hole from"+a.toString());const c=s*r/8/2,h=s*A/8/2,D=new Zt(h,c,o);D.rotateX(-Math.PI/2);let[y,F]=this.wireIndexToPosition(a,s);const L=(a-a%8)/8;L==0||L==2?F-=Math.sign(F)*(c-h):y-=Math.sign(y)*(c-h);const E=D.attributes.position.count;for(let P=0;P<E;P++){const x=D.attributes.position.getX(P),g=D.attributes.position.getZ(P);D.attributes.position.setXYZ(P,x+y,0,g+F)}t=D}else{const[c,h]=this.wireIndexToPositionPair(a,s,i),[D,y]=this.wireIndexToPositionPair(l,s,i),F=new Float32Array([c[0],0,c[1],h[0],0,h[1],D[0],0,D[1],D[0],0,D[1],y[0],0,y[1],c[0],0,c[1]]);t.setAttribute("position",new Ht(F,3))}return t}wireIndexToPosition(e,t=1){const s=e%8,i=(e-s)/8,r=t/8,A=r*s-r*7/2,o=X.dx[i]/2+Z.sx[i]*A,a=X.dy[i]/2+Z.sy[i]*A;return[o,a]}wireIndexToPositionPair(e,t=1,s=.5){const i=e%8,r=(e-i)/8,A=t/8,[o,a]=this.wireIndexToPosition(e,t),l=[o-Z.sx[r]*s*A/2,a-Z.sy[r]*s*A/2],c=[o+Z.sx[r]*s*A/2,a+Z.sy[r]*s*A/2];return[l,c]}};let le=Z;w(le,"sx",[1,0,-1,0]),w(le,"sy",[0,-1,0,1]);const de=class{constructor(e){w(this,"id");w(this,"isBig");w(this,"x",0);w(this,"y",0);this.isBig=e,this.id=de.counter,de.counter++}getWirePointsInt(e,t){return this.wirePointsInts[e+t*this.sizeX]}getPosition(){return[this.x,this.y]}setPosition(e,t){this.x=e,this.y=t}};let ne=de;w(ne,"counter",0);class Ks extends ne{constructor(e){super(e);w(this,"sizeX",1);w(this,"sizeY",1);w(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));w(this,"problemCategory","Web");this.wirePointsInts.forEach((t,s)=>this.wirePointsInts[s]=new Array(32)),this.wirePointsInts[0+0*this.sizeX]=[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]}}class Js extends ne{constructor(e){super(e);w(this,"sizeX",2);w(this,"sizeY",2);w(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));w(this,"problemCategory","None");this.wirePointsInts.forEach((t,s)=>this.wirePointsInts[s]=new Array(32)),this.wirePointsInts[0+0*this.sizeX]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],this.wirePointsInts[1+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],this.wirePointsInts[0+1*this.sizeX]=[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[1+1*this.sizeX]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}class Ls extends ne{constructor(e){super(e);w(this,"sizeX",1);w(this,"sizeY",6);w(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));w(this,"problemCategory","Reversing");this.wirePointsInts.forEach((t,s)=>this.wirePointsInts[s]=new Array(32)),this.wirePointsInts[0+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],this.wirePointsInts[1+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[2+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[3+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[4+0*this.sizeX]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],this.wirePointsInts[5+0*this.sizeX]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]}}class _s{constructor(){w(this,"sizeX",50);w(this,"sizeY",50);w(this,"basis");this.basis=new X(this.sizeX,this.sizeY)}getJson(){const e=new Js(!1),t=new Ks(!1),s=new Ls(!1);this.basis.putParts(24,24,e),this.basis.putParts(23,23,t),this.basis.putParts(26,23,s);const i=this.basis.getPartsCells(e),r=this.basis.getPartsCells(t),A=this.basis.getPartsCells(s);i.forEach(c=>this.basis.extendWires(c)),r.forEach(c=>this.basis.extendWires(c)),A.forEach(c=>this.basis.extendWires(c));const[o,a,l]=this.basis.convertToCircuitInfos();return console.log(o),console.log(a),console.log(l),gt.infoToJson(o,a,l)}}class se{}w(se,"cpuPath",be),w(se,"partsPath",{None:be,Reversing:at,Pwn:wt,PPC:ct,Crypto:lt,Shell:ut,Forensics:Dt,Web:Mt,OSINT:dt,Misc:ht}),w(se,"partsBigPath",{None:"",Reversing:"",Pwn:"",PPC:"",Crypto:"",Shell:"",Forensics:"",Web:"",OSINT:"",Misc:""});const $s=`
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
`,ei=`
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
`,ti=`
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
`,si=`
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
`,ii=n=>new O({uniforms:{colorA:{value:n},time:{value:0}},fragmentShader:ei,vertexShader:$s,transparent:!0}),ni=n=>new O({uniforms:{colorA:{value:n},time:{value:0}},fragmentShader:si,vertexShader:ti,transparent:!0,side:_e}),qe=(n,e)=>{const t=n.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),n.material=[ii(e),ni(e)]};class ri extends z{constructor(){super();w(this,"app");w(this,"texture");w(this,"nameText");w(this,"titleText");w(this,"needsUpdate",!1);const e=1024,t=48;this.app=new Rt({width:e,height:t,autoStart:!1,backgroundAlpha:0});const s=new T({dropShadowAngle:6.7,dropShadowDistance:3,fill:"red",fontSize:20,lineJoin:"round",stroke:"#8a0000",strokeThickness:2});this.nameText=new Ue("string",s),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new Ue("string",s.clone()),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const i=new he(new re(e,t),new fe({map:null,transparent:!0}));i.position.z=1e-4;const r=i.clone();r.rotation.y=Math.PI,r.position.z=-1e-5,this.texture=new Ut(this.app.view),i.material.map=this.texture,r.material.map=this.texture,this.add(i,r)}redraw(e,t,s){const i=s.getStyle(),r=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style.fill=i,this.nameText.style.stroke=r,this.titleText.text=t,this.titleText.style.fill=i,this.titleText.style.stroke=r,this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class Ai extends z{constructor(){super();w(this,"question");w(this,"exclamation");w(this,"submissionInfo");w(this,"objects");this.objects=new Le,this.question=m.get(Se).children[0],this.exclamation=m.get(Se).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,qe(this.question,new G(16711680)),qe(this.exclamation,new G(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new ri),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){B.on("submit",e=>{const t=j.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=K.getUser(e.userid))==null?void 0:s.displayName,e.title,new G(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:ae.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:ae.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new G(65280))}),t.to(this.objects.position,.15,{z:0,ease:ae.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:ae.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*v.deltaTime*.3,this.position.y=Math.sin(v.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=v.time,this.exclamation.material[0].uniforms.time.value=v.time,this.question.material[1].uniforms.time.value=v.time,this.exclamation.material[1].uniforms.time.value=v.time}}class oi extends z{constructor(){super();const[e,t,s]=this.testData();console.log(e),console.log(t),console.log(s),this.importCircuitInfo(e,t,s,!1),this.add(new Ai),this.position.add(new ie(0,.1,0))}start(){super.start()}update(){super.update()}importCircuitInfo(e,t,s,i){const r=-e.sizeX/2+.5,A=0,o=-e.sizeY/2+.5;if(t.forEach(a=>{let l="";a.isBig?l=se.partsBigPath[a.category]:l=se.partsPath[a.category];const c=m.get(l);c.position.set(a.x+r,0+A,a.z+o),i&&c.scale.set(0,0,0),this.add(c)}),s.forEach(a=>{const l=new le(a.wires);l.position.set(a.x+r,0+A,a.z+o),this.add(l)}),i){const a=new re(e.sizeX,e.sizeY,e.sizeX,e.sizeY);a.rotateX(-Math.PI/2);const l=new jt({color:16777215,wireframe:!0}),c=new he(a,l);c.position.add(new ie(.5,0,.5)),this.add(c)}}testData(){const t=new _s().getJson();return console.log(t),gt.jsonToInfo(t)}}const Ke={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `},Je={vertexShader:`
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
  `};class ai extends Ot{constructor(e,t,s,i){super();w(this,"camera");w(this,"scene");w(this,"material");w(this,"depthMaterial");w(this,"depthTexture");w(this,"oldClearColor");w(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new Vt(s,i),this.depthMaterial=new O({uniforms:{progress:{value:0}},side:$e,vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader}),this.material=new O({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader}),this.oldClearColor=new G,this.fsQuad=new Xt(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const i=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,v.time*.05&&(this.depthMaterial.uniforms.progress.value=v.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,v.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(i),e.autoClear=r}}const Fe=class{constructor(){w(this,"renderer",null);w(this,"camera",null);w(this,"composer",null);w(this,"_tick",null);w(this,"isLoaded",!1);w(this,"isStartCalled",!1);w(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new Fe,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new Nt({canvas:e,antialias:!0});t.setClearColor(new G(1114129));const s=new qt(t);this.composer=s;const i=new Hs,r=new Kt;r.add(new Ts,new Zs,new Os,new oi),ls(),B.on("start",()=>{console.log("start ctf")}),B.on("end",()=>{console.log("end ctf")}),B.on("recalculatestart",async()=>{console.log("recalculatestart")}),B.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new Jt(r,i));const A=new ai(r,i,e.width,e.height);s.addPass(A),this._tick=()=>{var o;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(v.start(performance.now()),(o=this.camera)==null||o.start(),this.isFirstTickCalled=!0),v.update(performance.now()),i.update(),r.children.map(a=>{(a instanceof z||a instanceof R)&&a.update()}),s.render())},this.renderer=t,this.camera=i,Vs().then(()=>{this.isLoaded=!0,us()})}start(){this.isStartCalled=!0}};let H=Fe;w(H,"instance");const wi=({width:n,height:e})=>{const t=d.exports.useRef(null),[s,i]=d.exports.useState({width:n,height:e}),[r,A]=d.exports.useState(new b(new N)),[o,a]=d.exports.useState("loading");M.exports.useTick(()=>{r.update();const D=H.getInstance().tick;D&&D()}),d.exports.useEffect(()=>{H.getInstance().resize(n,e),r.update(),i({width:n,height:e})},[n,e]);const l=()=>{const D=document.createElement("canvas");document.body.appendChild(D),t.current=D,H.getInstance().setup(D),H.getInstance().resize(n,e),A(new b(N.from(D))),a("splashscreen")},c=()=>{H.getInstance().start(),a("visualizer")};return u(J,{children:(D=>D==="loading"?u(Bs,{width:n,height:e,loadedHandler:l}):D==="splashscreen"?u(Es,{width:n,height:e,onComplete:c}):u(M.exports.Sprite,{texture:r,width:s.width,height:s.height}))(o)})},Ce=n=>("00"+n).slice(-2),ci=({x:n,y:e,width:t,height:s})=>{const[i,r]=d.exports.useState(""),[A,o]=d.exports.useState("");return M.exports.useTick(()=>{const a=new Date;if(r(`${a.getHours()}:${Ce(a.getMinutes())}:${Ce(a.getSeconds())}`),!H.getInstance().isInitialized)return;const l=Math.ceil((q.endTime.getTime()-a.getTime())/1e3/60);o(`\u6B8B\u308A: ${Math.floor(l/60)}\u6642\u9593${Ce(l%60)}\u5206`)}),I(M.exports.Container,{mask:new et().drawRect(n,e,t,s),children:[u(M.exports.Text,{text:i,anchor:.5,position:[t/2,s/2],style:new T({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),u(M.exports.Text,{text:A,anchor:.5,position:[t/2,s/2-50],style:new T({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},li=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,ui=({x:n,y:e,width:t,height:s})=>u(M.exports.Container,{mask:new et().drawRect(n,e,t,s),children:u(M.exports.Text,{text:li,anchor:0,position:[0,0],style:new T({align:"left",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:32,fill:"#000000"})})}),Di={Component:null,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Mi={visualizer:{Component:wi,title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:ci,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:ui,title:"Readme",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},te=Q/5,di=({iconInfo:n,position:e})=>{const{windowSettings:{windows:t,update:s,starting:i}}=d.exports.useContext(k),r=d.exports.useRef(0),A=()=>{const a=r.current;if(r.current=performance.now(),r.current-a>600)return;const l=Mi[n.id];t[n.id]||!l||s(n.id,l)},o=d.exports.useCallback(a=>{a.clear(),i===n.id&&(a.beginFill(11184895,.5),a.drawRect(0,0,Q,Q))},[i]);return I(M.exports.Container,{position:e,interactive:!0,click:A,children:[u(M.exports.Graphics,{draw:o}),u(M.exports.Sprite,{image:n.src,position:[te/2,0],width:Q-te,height:Q-te}),u(M.exports.Text,{text:n.title,anchor:[.5,0],position:[Q/2,Q-te],style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:te,fill:"#000"})})]})};var hi="/Visualizer/assets/xp.3ff07b20.jpg";const Be=12,fi=()=>{const{width:n,height:e}=d.exports.useContext(k),t=Math.max(1,Math.floor((e-Y-(Q+Be))/Q));return I(J,{children:[u(M.exports.Sprite,{image:hi,anchor:0,x:0,y:0,width:n,height:e-Y}),u(M.exports.Container,{position:[Q/2,Q/2],children:ms.map((s,i)=>u(di,{iconInfo:s,position:[Math.floor(i/t)*(Q+Be),i%t*(Q+Be)]},s.id))})]})},mi=(n,e,t,s)=>{const i=p,r=16,A=[0,0],o=[0,0];let a="none";const l={x:0,y:0};let c=!1,h="pointer",D={x:0,y:0,width:0,height:0};return{mouseDownHandler:P=>x=>{l.x=x.data.global.x,l.y=x.data.global.y,P.fullscreen?D={x:0,y:0,width:t,height:s-Y}:D=P.rect,e.focus(n),!(A[0]===0&&A[1]===0&&l.y-D.y>i)&&(o[0]=A[0],o[1]=A[1],a=A[0]===0&&A[1]===0?"move":"scale",e.update(n,C(f({},P),{rect:D,fullscreen:!1})))},mouseMoveHandler:P=>x=>{if(a!=="none")if(a==="move")h="grabbing",e.update(n,C(f({},P),{rect:{x:D.x+x.offsetX-l.x,y:D.y+x.offsetY-l.y,width:P.rect.width,height:P.rect.height}}));else{const g=f({},D),_=200,$=200;o[0]===1?g.width=Math.max(_,D.width-l.x+x.offsetX):o[0]===-1&&(g.width=Math.max(_,l.x+D.width-x.offsetX),g.x=Math.min(D.x+D.width-_,D.x-l.x+x.offsetX)),o[1]===1?g.height=Math.max($,D.height-l.y+x.offsetY):o[1]===-1&&(g.height=Math.max($,l.y+D.height-x.offsetY),g.y=Math.min(D.y+D.height-$,D.y-l.y+x.offsetY)),g.width=Math.max(200,g.width),g.height=Math.max(p,g.height),e.update(n,C(f({},P),{rect:g}))}},mouseUpHandler:()=>()=>{a="none"},cursorMouseMoveHandler:P=>x=>{const g=P.fullscreen?{x:0,y:0,width:t,height:s-Y}:P.rect;x.data.global.x-g.x<r?A[0]=-1:g.x+g.width-x.data.global.x<r?A[0]=1:A[0]=0,x.data.global.y-g.y<r?A[1]=-1:g.y+g.height-x.data.global.y<r?A[1]=1:A[1]=0,A[0]*A[1]===1?h="nwse-resize":A[0]*A[1]===-1?h="nesw-resize":A[0]!==0?h="ew-resize":A[1]!==0?h="ns-resize":x.data.global.y-g.y<i?h="grab":h="default"},mouseOverHandler:()=>{c=!0},mouseOutHandler:()=>{c=!1},getCursor:()=>c?h:""}};var gi="/Visualizer/assets/close.d415dcd5.png",vi="/Visualizer/assets/fullscreen.f7ccf43f.png",pi="data:image/png;base64,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",vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2IAAABgCAYAAADPVrKGAAAPNElEQVR4Ae3bMQ0AMQwEQfOnEizB5CgctpyXnoA13V5mfC7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAu0Fzt31uwEDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDQGRjH7I7plm7JAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPfgBDrRbAX0QwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjhYODDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxgQfYHfGKCz+vBQAAAABJRU5ErkJggg==";const pt=({width:n,height:e,bgColor:t=16777215})=>{const s=d.exports.useCallback(i=>{i.clear(),i.beginFill(t),i.drawRect(0,0,n,e),i.endFill()},[n,e]);return u(M.exports.Graphics,{draw:s})},xt=n=>n-tt*2,V=n=>n-p-tt*2,ke=({width:n,height:e,title:t,onMinimize:s,onMaximize:i,onKill:r,children:A})=>{const o=[];let a=0;return r&&(o.push(u(M.exports.Sprite,{anchor:[1,.5],image:gi,width:p,height:p,position:[-a*p,0],interactive:!0,click:r},"kill")),a++),i&&(o.push(u(M.exports.Sprite,{anchor:[1,.5],image:vi,width:p,height:p,position:[-a*p,0],interactive:!0,click:i},"maximize")),a++),s&&(o.push(u(M.exports.Sprite,{anchor:[1,.5],image:pi,width:p,height:p,position:[-a*p,0],interactive:!0,click:s},"minimize")),a++),I(J,{children:[I(M.exports.Container,{position:[0,0],children:[u(M.exports.Sprite,{anchor:[0,0],image:vt,width:n,height:p,position:[0,0]}),u(M.exports.Text,{text:t,anchor:[0,.5],position:[5,p/2],style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:p*.5,fill:"#000"})}),u(M.exports.Container,{position:[n,p/2],children:o})]}),I(M.exports.Container,{position:[0,p],children:[A?u(pt,{width:n,height:e-p}):null,A]})]})},xi=({id:n,windowInfo:e})=>{const{width:t,height:s}=d.exports.useContext(k),{title:i,visible:r,fullscreen:A,Component:o}=e,[a,l]=d.exports.useState(!1),c=A?{x:0,y:0,width:t,height:s-Y}:e.rect,{windowSettings:h}=d.exports.useContext(k),D=d.exports.useRef(e),y=()=>{h.update(n,C(f({},e),{fullscreen:!e.fullscreen}))},F=()=>{h.minimize(n)},L=()=>{h.kill(n)};d.exports.useEffect(()=>{D.current=e},[e]);const[E,P]=d.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return d.exports.useEffect(()=>{const x=setTimeout(()=>{l(!0)},1500),{mouseDownHandler:g,mouseMoveHandler:_,mouseUpHandler:$,cursorMouseMoveHandler:Ct,mouseOutHandler:Bt,mouseOverHandler:Pt,getCursor:yt}=mi(n,h,t,s);P({mouseDownHandler:g,cursorMouseMoveHandler:Ct,mouseOverHandler:Pt,mouseOutHandler:Bt,getCursor:yt});const Ye=Et=>{_(D.current||e)(Et)},We=()=>{$()()},ee=document.getElementById("pixicanvas");if(!!ee)return ee.addEventListener("mousemove",Ye),ee.addEventListener("mouseup",We),()=>{clearTimeout(x),ee.removeEventListener("mousemove",Ye),ee.removeEventListener("mouseup",We)}},[]),M.exports.useTick(()=>{E.getCursor&&E.getCursor()&&!rt()&&ds(E.getCursor())}),u(M.exports.Container,{position:r?[c.x,c.y]:[c.x,-99999],interactive:!0,mousedown:E.mouseDownHandler?E.mouseDownHandler(e):()=>"",mousemove:E.cursorMouseMoveHandler?E.cursorMouseMoveHandler(e):()=>"",mouseover:E.mouseOverHandler?E.mouseOverHandler:()=>"",mouseout:E.mouseOutHandler?E.mouseOutHandler:()=>"",children:u(ke,{width:c.width,height:c.height,title:i,onMinimize:F,onMaximize:y,onKill:n==="visualizer"?void 0:L,children:a?o?u(o,{x:c.x,y:c.y+p,width:xt(c.width),height:V(c.height)}):u(M.exports.Container,{}):null})})};var Ci="/Visualizer/assets/youareanidiot_black.591803b6.png",Bi="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Pi=({width:n,height:e,trans:t})=>{const s=n*.7,i=s/1576*994,r=d.exports.useRef(null),A=d.exports.useRef([0,0]),o=d.exports.useRef([0,0]);return d.exports.useEffect(()=>{const a=Math.PI*Math.random();o.current=[Math.cos(a)*90,Math.sin(a)*90]},[]),M.exports.useTick(a=>{if(!r.current||!A.current||!o.current)return;o.current[1]+=98*a/30;const l=[A.current[0]+o.current[0]*a/30,A.current[1]+o.current[1]*a/30];l[0]<0?(l[0]=0,o.current[0]*=-1):l[0]>n-s?(l[0]=n-s,o.current[0]*=-1):l[1]>Math.max(1,e-i)&&(l[1]=Math.max(1,e-i),o.current[1]*=-1),A.current=l,r.current.position.set(l[0],l[1])}),u(M.exports.Container,{ref:r,children:u(ke,{width:s,height:i,title:"Hahahahahaha",children:u(M.exports.Sprite,{image:t?Ci:Bi,width:xt(s),height:V(i)})})})},yi=({width:n,height:e})=>{const[t,s]=d.exports.useState(!1);return M.exports.useTick(()=>{const i=performance.now();s(Math.floor(i/500)%2==0)}),u(J,{children:new Array(10).fill(null).map((i,r)=>u(Pi,{width:n,height:e,index:r,trans:t},r))})},Ei=()=>{const{width:n,height:e,windowSettings:{windows:t,windowIndices:s,starting:i}}=d.exports.useContext(k);M.exports.useTick(()=>{document.body.style.cursor=i?"wait":rt()||"default",hs()});const[r,A]=d.exports.useState(!1);return d.exports.useEffect(()=>{const o=()=>{const l=new Date().getTime();q.endTime.getTime()<l&&A(!0)},a=()=>{A(!0)};return B.on("initialized",o),B.on("end",a),()=>{B.off("initialized",o),B.off("end",a)}},[]),I(J,{children:[u(fi,{}),s.map(o=>u(xi,{windowInfo:t[o]||Di,id:o,focus:!1},o)),r?u(yi,{width:n,height:e}):null]})};var bi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFnUlEQVR4Ae3YsXFCURAEQUInDqWgIIhAMX2VEtiSMd61gfWqMLg2Znm9vz6Pj9+AAQYYYIABBgoDr+JLfAeMDDDAAAMMMPBnQFj4x8Y/VgwwwAADDGQGhAVMGSZrxVphgAEGGBAWwkJYMMAAAwwwkBkQFjBlmCwVS4UBBhhgQFgIC2HBAAMMMMBAZkBYwJRhslQsFQYYYICBf4fF98/z+PgNGGCAAQYYYGAZEBaCSTAywAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBkQFjBlmKyRG2vEnd2ZAQaWAWEhLIQFAwwwwAADmQFhAVOGaRWsNwuHAQYYuGFAWAgLYcEAAwwwwEBmQFjAlGGyRm6sEXd2ZwYYWAaEhbAQFgwwwAADDGQGhAVMGaZVsN4sHAYYYOCGAWEhLIQFAwwwwAADmQFhAVOGyRq5sUbc2Z0ZYGAZEBbCQlgwwAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBn4BbHYyZnBHIeHAAAAAElFTkSuQmCC",Si="data:image/png;base64,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";const Qi=({id:n,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:i,minimize:r}}=d.exports.useContext(k),A=t[n];if(!A)return u(J,{children:"null"});const{title:o,visible:a}=A,l=d.exports.useMemo(()=>new b(new N(bi)),[]),c=d.exports.useMemo(()=>new b(new N(Si)),[]);return I(M.exports.Container,{position:[e*je,Y/2],interactive:!0,click:()=>s===n?r(n):i(n),children:[u(M.exports.Sprite,{width:je*.9,height:Y*.9,texture:a?l:c,anchor:[0,.5],position:[0,0]}),u(M.exports.Text,{text:o,anchor:[0,.5],position:[5,0],style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:Y*.5*.8,fill:"#000"})})]})},Ii=()=>{const{width:n,height:e,windowSettings:{windowStack:t}}=d.exports.useContext(k);return I(M.exports.Container,{position:[0,e-Y],children:[u(M.exports.Sprite,{image:vt,width:n,height:Y,anchor:0,position:[0,0]}),u(M.exports.Container,{position:[200,0],children:t.map((s,i)=>u(Qi,{id:s,index:i},s))})]})};var zi=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class Gi extends ze{constructor(){super(void 0,zi,{dimensions:[0,0]})}apply(e,t,s,i){const{width:r,height:A}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=A,e.applyFilter(this,t,s,i)}}var Ti=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class ki extends ze{constructor(){super(void 0,Ti,{dimensions:[0,0]})}apply(e,t,s,i){const{width:r,height:A}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=A,e.applyFilter(this,t,s,i)}}var Fi=`precision mediump float;

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
}`;class Yi extends ze{constructor(){super(void 0,Fi,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,i){const{width:r,height:A}=t.filterFrame;this.uniforms.dimensions[0]=r,this.uniforms.dimensions[1]=A,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,i)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const Wi="_main_11f2u_1";var Zi={main:Wi};const Hi=()=>{const{width:n,height:e}=d.exports.useContext(k),[t,s]=d.exports.useState(!0),i={width:500,height:180,left:n*.5-250,top:e*.5-90};return t?I(M.exports.Container,{children:[u(pt,{bgColor:0,width:n,height:e}),u(M.exports.Container,{position:[i.left,i.top],children:I(ke,{width:i.width,height:i.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[u(M.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:p*.5,fill:"#000"})}),u(M.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[V(i.width)-305,V(i.height)-5],interactive:!0,click:()=>{Oe(1),s(!1),De("mousedown"),De("mouseup"),Pe("hdd")},style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:p*.5,fill:"#000"})}),u(M.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[V(i.width)-5,V(i.height)-5],interactive:!0,click:()=>{Oe(0),s(!1)},style:new T({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:p*.5,fill:"#000"})})]})})]}):null},Ri=({children:n,Context:e,render:t})=>u(e.Consumer,{children:s=>t(u(e.Provider,{value:s,children:n}))}),Ui=t=>{var s=t,{children:n}=s,e=Re(s,["children"]);const{width:i,height:r}=d.exports.useContext(k);return u(Ri,{Context:k,render:A=>u(M.exports.Stage,C(f({width:i,height:r},e),{children:A})),children:n})},ji=M.exports.withFilters(M.exports.Container,{hex:Yi,bloom:Lt,colorshift:_t,lensDistortion:Gi,visnetting:ki}),Oi=()=>{const n=()=>{De("mousedown")},e=()=>{De("mouseup")},t=M.exports.useApp();return d.exports.useEffect(()=>{t.ticker.maxFPS=30},[]),u(ji,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:I(M.exports.Container,{mousedown:n,mouseup:e,interactive:!0,children:[u(Ii,{}),u(Ei,{}),u(Hi,{})]})})},Vi=()=>u(As,{children:u("main",{className:Zi.main,children:u(Ui,{id:"pixicanvas",children:u(Oi,{})})})});$t.render(u(es.StrictMode,{children:u(Vi,{})}),document.getElementById("root"));
