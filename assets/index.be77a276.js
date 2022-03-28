var nt=Object.defineProperty,rt=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Me=(i,e,t)=>e in i?nt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,g=(i,e)=>{for(var t in e||(e={}))Ge.call(e,t)&&Me(i,t,e[t]);if(te)for(var t of te(e))Ye.call(e,t)&&Me(i,t,e[t]);return i},y=(i,e)=>rt(i,ot(e));var ke=(i,e)=>{var t={};for(var s in i)Ge.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&te)for(var s of te(i))e.indexOf(s)<0&&Ye.call(i,s)&&(t[s]=i[s]);return t};var w=(i,e,t)=>(Me(i,typeof e!="symbol"?e+"":e,t),t);import{r as d,j as ye,T as at,G as wt,F as ct,m as lt,B as O,a as b,R as k,b as u,c as R,M as ce,d as Re,S as Dt,e as _,C as z,V as oe,E as Mt,f as Ue,P as $,D as ut,g as H,h as le,i as dt,k as ue,l as ht,n as ft,o as gt,A as mt,p as Te,q as vt,s as se,t as pt,W as xt,u as Bt,v as Pt,w as Ct,x as yt,y as Ee,z as Et,H as bt,I as Qt,J as It}from"./vendor.7735ab97.js";const St=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))s(A);new MutationObserver(A=>{for(const n of A)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(A){const n={};return A.integrity&&(n.integrity=A.integrity),A.referrerpolicy&&(n.referrerPolicy=A.referrerpolicy),A.crossorigin==="use-credentials"?n.credentials="include":A.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(A){if(A.ep)return;A.ep=!0;const n=t(A);fetch(A.href,n)}};St();const zt=()=>{const[i,e]=d.exports.useState({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",update:(s,A)=>{e(n=>{const r=g({},n.windowSettings.windows);r[s]=A;const o=[...n.windowSettings.windowIndices],a=[...n.windowSettings.windowStack];return o.includes(s)||(a.push(s),o.push(s)),y(g({},n),{windowSettings:y(g({},n.windowSettings),{windows:r,windowIndices:o,windowStack:a})})})},kill:s=>{e(A=>{const n=g({},A.windowSettings.windows);delete n[s];const r=A.windowSettings.windowIndices.filter(c=>c!==s),o=A.windowSettings.windowStack.filter(c=>c!==s),a=r.filter(c=>{var h;return(h=n[c])==null?void 0:h.visible}),l=a.length>0?a[a.length-1]:"";return y(g({},A),{windowSettings:y(g({},A.windowSettings),{windows:n,windowIndices:r,windowStack:o,focused:l})})})},focus:s=>{e(A=>{const n=g({},A.windowSettings.windows),r=n[s];if(!r)throw new Error("invalid id");n[s]=y(g({},r),{visible:!0});const o=A.windowSettings.windowIndices.filter(a=>a!==s);return o.push(s),y(g({},A),{windowSettings:y(g({},A.windowSettings),{windows:n,windowIndices:o,focused:s})})})},minimize:s=>{e(A=>{const n=g({},A.windowSettings.windows),r=n[s];if(!r)throw new Error("invalid id");n[s]=y(g({},r),{visible:!1});const o=A.windowSettings.windowIndices.filter(l=>{var c;return l!==s&&((c=n[l])==null?void 0:c.visible)}),a=o.length>0?o[o.length-1]:"";return y(g({},A),{windowSettings:y(g({},A.windowSettings),{windows:n,focused:a})})})}}});return[i,()=>{e(s=>y(g({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},D=ye.exports.jsx,I=ye.exports.jsxs,V=ye.exports.Fragment,Y=d.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),Gt=({children:i})=>{const[e,t]=zt();return d.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),D(Y.Provider,{value:e,children:i})},Yt="ws://localhost:8000",Ze=["nanika","doreka","soreka"];var be="/Visualizer/assets/testicon.8f219171.jpg";const W=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:be,point:0,rank:-1})),kt=()=>({userid:W[Math.floor(Math.random()*W.length)].id,point:Math.random()*1e3,genre:Ze[Math.floor(Math.random()*Ze.length)],title:"\u30AA\u30E2\u30B7\u30ED\u554F\u984C -\u3053\u308C\u306F\u9069\u5F53\u306B\u8003\u3048\u305F\u30BF\u30A4\u30C8\u30EB-"}),Oe=()=>(W.forEach(i=>{i.point+=Math.random()*1e3}),W.sort((i,e)=>i.point-e.point),W.forEach((i,e)=>{i.rank=e+1}),{ranking:W,circuit:{}}),Tt=()=>{const i=new Date;i.setMinutes(i.getMinutes()-5);const e=new Date;return e.setMinutes(e.getMinutes()+5),{users:W.map(({id:t,name:s,iconUrl:A})=>({id:t,name:s,iconUrl:A})),recalculate:Oe(),startTime:i.toString(),endTime:e.toString()}},de=i=>g({data:{type:"recalculate",result:null},lastEventId:"",origin:"",ports:[],source:null,initMessageEvent:function(e,t,s,A,n,r,o,a){throw new Error("Function not implemented.")},bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:null,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:null,target:null,timeStamp:0,type:"",composedPath:function(){throw new Error("Function not implemented.")},initEvent:function(e,t,s){throw new Error("Function not implemented.")},preventDefault:function(){throw new Error("Function not implemented.")},stopImmediatePropagation:function(){throw new Error("Function not implemented.")},stopPropagation:function(){throw new Error("Function not implemented.")},AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0},i),ve=i=>new Promise(e=>{setTimeout(()=>e(),i)}),j={startTime:new Date,endTime:new Date};class je{static async initial(){return await ve(1e3),Tt()}static async recalculate(){return await ve(1e3),Oe()}}const pe={texture:new at,gltf:new wt,fbx:new ct},We=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{pe.gltf.load(i,A=>{t(A.scene)},()=>0,A=>{s(A)});break}case"texture":{pe.texture.load(i,A=>{t(A)},()=>0,A=>{s(A)});break}}});class v{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const A=this.queue.length;if(A!==0)return this.queue.map(([n,r])=>{t?t=t.then(()=>We(n,r)):t=We(n,r),t=t.then((o=>{s+=1,this.resources[n]={type:r,data:o},e({path:n,data:o,total:A,count:s})}).bind(this)).catch(o=>{console.log("loaderror",o)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}w(v,"resources",{}),w(v,"queue",[]);class Zt extends EventTarget{constructor(e){super();w(this,"id");w(this,"_point",0);w(this,"_rank",-1);w(this,"_displayName","");w(this,"_icon",null);w(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,A){var n;this._point=e,this._rank=t,this._displayName=s,(!this._iconPath||this._iconPath!==A)&&(this._iconPath=A,(n=this._icon)==null||n.dispose(),this._icon=pe.texture.load(A))}}class q{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const A=new Zt(e);this.users[e]=A,A.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:A,rank:n}){var r;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(r=this.users[e])==null||r.set(A,n,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,A;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((A=this.users[t])==null?void 0:A.rank)||999999999)})}static getUser(e){return this.users[e]}}w(q,"users",{}),w(q,"_ranking");const B=lt(),Wt=()=>{const i=new WebSocket(Yt);i.addEventListener("message",ne.bind(globalThis)),i.addEventListener("error",()=>{B.emit("disconnect")}),Ht()},Ft=()=>{B.emit("initialized")},Ht=()=>{setInterval(()=>{ne(de({data:{type:"recalculate"}}))},3e4),setInterval(()=>{ne(de({data:{type:"end"}}))},3e5),setInterval(()=>{ne(de({data:{type:"submit",result:kt()}}))},3e3)},ne=i=>{switch(i.data.type){case"submit":{B.emit("submit",i.data.result);break}case"start":{j.startTime=new Date,B.emit("start");break}case"end":{j.endTime=new Date,B.emit("end");break}case"recalculate":{(async()=>{B.emit("recalculatestart"),await Rt(),B.emit("recalculateend")})();break}}},Rt=async()=>{const{ranking:i}=await je.recalculate();i.forEach(e=>{q.updateUser(e)}),q.updateRanking(),await ve(4e3)};let Qe="";const qe=()=>Qe,Ut=i=>{Qe=i},Ot=()=>{Qe=""},De=1.5,G=54*De,C=32*De,S=64*De,Fe=200*De;var jt="/Visualizer/assets/clock-icon.77140fc3.png",qt="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const Vt=[{src:qt,id:"visualizer",title:"Visualizer.exe"},{src:jt,id:"clock",title:"Clock.exe"}];var Nt="data:image/png;base64,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",Xt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",Ve="/Visualizer/assets/recalculating.60ffccdf.glb",Ne="/Visualizer/assets/monitor.894de1ca.glb",Kt="/Visualizer/assets/face.e8cae3d3.png",xe="/Visualizer/assets/cpu.e2805bf7.glb",Xe="/Visualizer/assets/graphicBoard.55921c83.glb",Je="/Visualizer/assets/hdd.e239c3b8.glb",Ke="/Visualizer/assets/memory.702b66b8.glb",Le="/Visualizer/assets/powerSupply.816ce95f.glb",_e="/Visualizer/assets/tipSet.041d1b48.glb",Be="/Visualizer/assets/symbols.3d122568.glb";const Lt=()=>{v.addGLTF(Ve),v.addGLTF(Ne),v.addTexture(Kt),v.addTexture(be),v.addGLTF(xe),v.addGLTF(Xe),v.addGLTF(Je),v.addGLTF(Ke),v.addGLTF(Le),v.addGLTF(_e),v.addGLTF(Be)},_t=({width:i,height:e,loadedHandler:t})=>{const[s,A]=d.exports.useState(""),[n,r]=d.exports.useState(0),[o,a]=d.exports.useState({textures:[],index:-1});return d.exports.useEffect(()=>{(async()=>{Lt(),await v.load(({path:M,total:E,count:p})=>{A(M),r(p/E)}),t()})();const c=new O(Nt);a({index:0,textures:[new b(c,new k(64*0,0,64,64)),new b(c,new k(64*1,0,64,64)),new b(c,new k(64*2,0,64,64)),new b(c,new k(64*3,0,64,64)),new b(c,new k(64*4,0,64,64)),new b(c,new k(64*5,0,64,64)),new b(c,new k(64*6,0,64,64)),new b(c,new k(64*7,0,64,64))]});const h=setInterval(()=>{a(M=>({index:(M.index+1)%M.textures.length,textures:M.textures}))},100);return()=>{clearInterval(h)}},[]),I(u.exports.Container,{position:[i/2,e/2],children:[o.index<0?null:D(u.exports.Sprite,{texture:o.textures[o.index],anchor:.5,position:[0,-50],width:64,height:64}),D(u.exports.Text,{text:s,anchor:.5,position:[0,0],style:new R({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),D(u.exports.Sprite,{image:Xt,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*n)).fill(null).map((l,c)=>D(u.exports.Sprite,{image:Jt,anchor:[0,.5],position:[(c-8)*16,0],width:16,height:32},c))})]})};var $t="/Visualizer/assets/traP_logo.25c1c1d8.png";const es=new O($t),he=50,Ae=24,ts=({width:i,height:e,onComplete:t})=>{const[s,A]=d.exports.useState(0);return d.exports.useEffect(()=>{const n=setInterval(()=>{A(r=>r===he+Ae*2?(clearInterval(n),setTimeout(()=>{t()},1),r):r+1)},1e3/Ae)},[]),D(u.exports.Container,{position:[i/2,e/2],children:D(u.exports.Sprite,{texture:new b(es,new k(0,280*Math.min(s,he-1),1920,280)),alpha:1-Math.max(0,s-he-Ae)/Ae,anchor:.5,width:i*.9,height:i*.9/1920*280})})};class x{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}w(x,"startTime",-1),w(x,"_time",-1),w(x,"_deltaTime",-1),w(x,"prevTime",-1);class Z extends ce{constructor(e,t){super(e,t);w(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof Q||e instanceof Z)&&e.update()}))}}class Q extends Re{constructor(){super();w(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof Q||e instanceof Z)&&e.update()}))}}const ss=`
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
`,As=`
uniform vec3 colorA; 
uniform vec3 colorB;
uniform vec3 sunColorA;
uniform vec3 sunColorB;
uniform vec3 sunPos;
uniform float time;
varying vec3 vUv;
varying vec4 vWorldPos;
varying vec4 vViewPos;
varying vec4 vScreenPos;

void main() {
  vec4 sky = vec4(mix(colorA, colorB, 1.0 - pow(1.0 - smoothstep(0.0, 1000.0, vWorldPos.y), 16.0)), 1.0);
  vec4 sun = vec4(mix(sunColorA, sunColorB, smoothstep(0.0, 100.0, vWorldPos.y)), 1.0);
  vec4 sunBloom = sun * exp(-distance(vWorldPos.xyz, sunPos) * 0.005);
  sun = sun * step(distance(vWorldPos.xyz + vec3(0.0, sin(time * 0.01) * 100.0, sin(vWorldPos.y * 0.1 + time * 0.4) * pow(max(0.0, sunPos.y - vWorldPos.y) * 0.01, 4.0)), sunPos), 300.0) + sunBloom;
  gl_FragColor = sky + sun;
}
`;class is extends Z{constructor(){super(new Dt(1e3),new _({uniforms:{colorA:{value:new z("#db2784")},colorB:{value:new z("#1c1330")},sunColorA:{value:new z("#db2784")},sunColorB:{value:new z("#f2ca2b")},sunPos:{value:new oe(-1e3,0,0).applyEuler(new Mt(0,0,-Math.PI*.06))},time:{value:0}},side:Ue,vertexShader:ss,fragmentShader:As}))}update(){super.update(),this.material.uniforms.time.value=x.time}}const ns=`
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
`,rs=`
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
`;class os extends Z{constructor(){super(new $(100,100,50,50),new _({uniforms:{colorA:{value:new z(16729343)},colorB:{value:new z(1127423)},time:{value:0}},vertexShader:ns,fragmentShader:rs,side:ut}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=x.time}}class as extends Q{constructor(){super();this.add(new os),this.add(new is)}start(){}update(){super.update()}}var ws=`uniform sampler2D face;
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
}`,cs=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,ls="/Visualizer/assets/face.e8cae3d3.png";class Ds extends Z{constructor(){super(new $(4*.5,3*.5),new _({vertexShader:cs,fragmentShader:ws,uniforms:{face:{value:v.get(ls)},icon:{value:v.get(be)},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1.1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}start(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;!e||!t||setTimeout(()=>{setInterval(()=>{e.value=1,t.value=1,H.to(t,.3,{value:0}),setTimeout(()=>{e.value=Math.random()<.5?0:2,t.value=1,H.to(t,.3,{value:0})},2e3),setTimeout(()=>{e.value=-1,t.value=1,H.to(t,.3,{value:0})},4e3)},1e4)},Math.random()*1e4)}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=x.time)}}class fe extends Q{constructor(){super();const e=v.get(Ne).clone();e.material=new le({color:65280}),this.add(e),this.add(new Ds)}start(){}update(){super.update()}}class Ms extends Q{constructor(){super();this.position.y=3;let e=20;new Array(e).fill(null).forEach((t,s)=>{const A=new fe,n=s/e*Math.PI*2;A.position.set(Math.sin(n)*4,0,Math.cos(n)*4),A.scale.set(.4,.4,.4),A.lookAt(0,-2,0),this.add(A)}),e=60,new Array(e).fill(null).forEach((t,s)=>{const A=new fe,n=s/e*Math.PI*2;A.position.set(Math.sin(n)*4.5,-1,Math.cos(n)*4.5),A.scale.set(.15,.15,.15),A.lookAt(0,-2,0),this.add(A)}),e=120,new Array(e).fill(null).forEach((t,s)=>{const A=new fe,n=s/e*Math.PI*2;A.position.set(Math.sin(n)*5,-1.5,Math.cos(n)*5),A.scale.set(.1,.1,.1),A.lookAt(0,-2,0),this.add(A)})}}class us extends dt{constructor(){super(60,1,1,2e3);B.on("recalculatestart",()=>{H.to(this.position,2,{y:-3})}),B.on("recalculateend",()=>{H.to(this.position,2,{y:1})})}start(){this.position.set(Math.sin(x.time*.1)*4,1,Math.cos(x.time*.1)*4)}update(){this.position.set(Math.sin(x.time*.1)*4,this.position.y,Math.cos(x.time*.1)*4),this.lookAt(0,this.position.y+.5,0)}}class ds extends Z{constructor(){super(new $(1,1),new le({color:Math.floor(Math.random()*256*256*256)}));this.rotation.set(-Math.PI/2,0,0)}to(e){const t=H.timeline(),s=this.position;t.to(this.position,.2,{x:s.x,y:s.y+.3,z:s.z,ease:ue.easeOut}).to(this.position,.6,{x:e.x,y:e.y+.3,z:e.z,ease:ue.easeOut}).to(this.position,.2,{x:e.x,y:e.y,z:e.z,ease:ue.easeOut})}}const hs=()=>{const i=Math.floor(Math.random()*9),e=Math.floor(Math.random()*8),t=e<i?e:e+1;return[i,t]};class fs extends Q{constructor(){super();w(this,"children",[]);w(this,"animationTimeout",null);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){const s=new ds;s.position.set(t,0,e),this.add(s)}}animate(){this.exchange()}exchange(){const[e,t]=hs(),s=this.children[e];this.children[e]=this.children[t],this.children[t]=s,this.children[e].to(new oe(e%3-1,0,Math.floor(e/3)-1)),this.children[t].to(new oe(t%3-1,0,Math.floor(t/3)-1)),this.animationTimeout=setTimeout(this.exchange.bind(this),300)}stop(){!this.animationTimeout||(clearTimeout(this.animationTimeout),this.animationTimeout=null)}}class gs extends Q{constructor(){super();w(this,"recLabel");const e=new fs;e.scale.set(.5,.5,.5),this.add(e),this.position.set(0,-4,0),this.recLabel=v.get(Ve),this.recLabel.children[0].material.transparent=!0,this.recLabel.position.set(0,.5,0),this.recLabel.scale.set(1.5,1.5,1.5),this.add(this.recLabel)}start(){B.on("recalculatestart",()=>{var e;(e=this.children[0])==null||e.animate()}),B.on("recalculateend",()=>{var e;(e=this.children[0])==null||e.stop()})}update(){super.update(),this.recLabel.rotation.y+=x.deltaTime}}const ms=async()=>{const i=await je.initial();i.users.forEach(e=>{q.addUser(e)}),j.startTime=new Date(i.startTime),j.endTime=new Date(i.endTime)};class Pe{constructor(e,t){this.sizeX=e,this.sizeY=t}}class $e{constructor(e,t,s,A){this.x=e,this.z=t,this.isBig=s,this.category=A}}class et{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class tt{static jsonToInfo(e){const t=JSON.parse(e);let s=new Pe(0,0);const A=new Array(0),n=new Array(0);return t.forEach(r=>{if(r.class=="basis"){const o=r;s=new Pe(o.sizeX,o.sizeY)}else if(r.class=="parts"){const o=r;A.push(new $e(o.x,o.z,o.isBig,o.category))}else if(r.class=="wires"){const o=r;n.push(new et(o.x,o.z,o.wires))}}),[s,A,n]}static infoToJson(e,t,s){const A=new Array(0),n={class:"basis",sizeX:e.sizeX,sizeY:e.sizeY};return A.push(n),t.forEach(r=>{const o={class:"parts",x:r.x,z:r.z,isBig:r.isBig,category:r.category};A.push(o)}),s.forEach(r=>{const o={class:"wires",x:r.x,z:r.z,wires:r.wires};A.push(o)}),JSON.stringify(A)}}class vs{constructor(e,t){w(this,"x");w(this,"y");w(this,"parts");w(this,"wires");w(this,"wirePoints");this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,A)=>{this.wires[A]=new xs(A)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const A=s.getWirePointsInt(e,t);this.wirePoints.forEach((n,r)=>{this.wirePoints[r]=A[r]==1}),this.wires.forEach(n=>{n.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class ps{constructor(e){w(this,"notdir");w(this,"wireInd",0);w(this,"priority",[0,1,2]);w(this,"end",!1);w(this,"dir");w(this,"beforeDir");w(this,"counter",0);w(this,"straightCounter",0);w(this,"straightMax",2);w(this,"counterMax",2);this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class xs{constructor(e){w(this,"ind");w(this,"from");w(this,"to");w(this,"canTo");this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let A=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let n=0;n<3;n++){const r=t[n];if(this.canTo[r]!=-1&&r!=e){A=this.canTo[r];break}}return this.cantTo(),A==-1?(this.from=-1,-1):(this.to=A,A)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,A=0;for(let r=0;r<32;r++){const o=(e.from+r)%32;if(o==e.to){A++;continue}if(o==this.from){s=A;continue}const a=this.canTo.findIndex(l=>l==o);a!=-1&&(t[a]=A)}const n=new Array(3).fill(-1);this.canTo.forEach((r,o)=>{s==t[o]?n[o]=r:n[o]=-1}),this.canTo=n}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const ae=class{constructor(e,t){w(this,"sizeX");w(this,"sizeY");w(this,"cells");w(this,"partsCellDict",{});w(this,"parts",new Array(0));this.sizeX=e,this.sizeY=t,this.cells=new Array(this.sizeY*this.sizeX);for(let s=0;s<t;s++)for(let A=0;A<e;A++)this.cells[s*e+A]=new vs(A,s)}putParts(e,t,s){if(!this.canPutParts(e,t,s))return!1;const A=s.sizeY,n=s.sizeX,r=new Array(0);for(let o=0;o<A;o++)for(let a=0;a<n;a++){const l=t+o,c=e+a,h=this.getCell(c,l);h.setParts(a,o,s),r.push(h)}return s.setPosition(e,t),this.partsCellDict[s.id]=r,this.parts.push(s),!0}getPartsCells(e){return e.id in this.partsCellDict?this.partsCellDict[e.id]:new Array(0)}extendWires(e){const t=e.x,s=e.y;e.getActiveWirePointsIndex().forEach(n=>{let r=t,o=s;const a=n%8,l=(n-a)/8,c=new ps(l);for(;n!=-1;){const[h,M]=this.indexConvertToAroundIndex(n);r+=ae.dx[h],o+=ae.dy[h];const E=this.getCell(r,o);if(E==null||(c.update(M,h),n=E.setWire(c),n==-1))break}})}convertToCircuitInfos(){const e=new Pe(this.sizeX,this.sizeY),t=new Array(0),s=new Array(0);return this.cells.forEach(A=>{const n=new Array(0);A.getAllWires().forEach(r=>{r.isEmpty()||(r.isHole()?n.push([r.ind,r.to]):n.push([r.from,r.to]))}),n.length!=0&&s.push(new et(A.x,A.y,n))}),this.parts.forEach(A=>{const[n,r]=A.getPosition();t.push(new $e(n,r,A.isBig,A.problemCategory))}),[e,t,s]}canPutParts(e,t,s){const A=s.sizeY,n=s.sizeX;for(let r=0;r<A;r++)for(let o=0;o<n;o++){const a=t+r,l=e+o,c=this.getCell(l,a);if(c==null)return!1;if(c.isParts())return!1}return!0}getCell(e,t){if(0<=t&&t<this.sizeY&&0<=e&&e<this.sizeX)return this.cells[t*this.sizeX+e]}indexConvertToAroundIndex(e){const t=e%8,s=(e-t)/8,n=((s+2)%4+1)*8-t-1;return[s,n]}};let U=ae;w(U,"dy",[1,0,-1,0]),w(U,"dx",[0,1,0,-1]);const T=class extends Q{constructor(e){super();e.forEach(t=>{const s=this.createWireGeometry(t);this.add(new ce(s,new le({color:0})))})}start(){}update(){super.update()}createWireGeometry(e){let t=new ht;const s=1,A=.25,n=.5,r=.25,o=16,[a,l]=e;if(l==-1){console.log("hole from"+a.toString());const c=s*n/8/2,h=s*r/8/2,M=new ft(h,c,o);M.rotateX(-Math.PI/2);let[E,p]=this.wireIndexToPosition(a,s);const N=(a-a%8)/8;N==0||N==2?p-=Math.sign(p)*(c-h):E-=Math.sign(E)*(c-h);const ee=M.attributes.position.count;for(let P=0;P<ee;P++){const m=M.attributes.position.getX(P),f=M.attributes.position.getZ(P);M.attributes.position.setXYZ(P,m+E,0,f+p)}t=M}else{const[c,h]=this.wireIndexToPositionPair(a,s,A),[M,E]=this.wireIndexToPositionPair(l,s,A),p=new Float32Array([c[0],0,c[1],h[0],0,h[1],M[0],0,M[1],M[0],0,M[1],E[0],0,E[1],c[0],0,c[1]]);t.setAttribute("position",new gt(p,3))}return t}wireIndexToPosition(e,t=1){const s=e%8,A=(e-s)/8,n=t/8,r=n*s-n*7/2,o=U.dx[A]/2+T.sx[A]*r,a=U.dy[A]/2+T.sy[A]*r;return[o,a]}wireIndexToPositionPair(e,t=1,s=.5){const A=e%8,n=(e-A)/8,r=t/8,[o,a]=this.wireIndexToPosition(e,t),l=[o-T.sx[n]*s*r/2,a-T.sy[n]*s*r/2],c=[o+T.sx[n]*s*r/2,a+T.sy[n]*s*r/2];return[l,c]}};let re=T;w(re,"sx",[1,0,-1,0]),w(re,"sy",[0,-1,0,1]);const we=class{constructor(e){w(this,"id");w(this,"isBig");w(this,"x",0);w(this,"y",0);this.isBig=e,this.id=we.counter,we.counter++}getWirePointsInt(e,t){return this.wirePointsInts[e+t*this.sizeX]}getPosition(){return[this.x,this.y]}setPosition(e,t){this.x=e,this.y=t}};let Ce=we;w(Ce,"counter",0);class Bs extends Ce{constructor(e){super(e);w(this,"sizeX",1);w(this,"sizeY",1);w(this,"wirePointsInts",new Array(this.sizeY*this.sizeX));w(this,"problemCategory","None");this.wirePointsInts[0+0*this.sizeX]=[1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}class Ps{constructor(){w(this,"sizeX",50);w(this,"sizeY",50);w(this,"basis");this.basis=new U(this.sizeX,this.sizeY)}getJson(){const e=new Bs(!1);this.basis.putParts(25,25,e),this.basis.getPartsCells(e).forEach(r=>this.basis.extendWires(r));const[s,A,n]=this.basis.convertToCircuitInfos();return console.log(s),console.log(A),console.log(n),tt.infoToJson(s,A,n)}}class L{}w(L,"cpuPath",xe),w(L,"partsPath",{None:xe,Reversing:Xe,Pwn:Je,PPC:Ke,Crypto:Le,Shell:_e,Forensics:"",Web:"",OSINT:"",Misc:""}),w(L,"partsBigPath",{None:"",Reversing:"",Pwn:"",PPC:"",Crypto:"",Shell:"",Forensics:"",Web:"",OSINT:"",Misc:""});const Cs=`
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
`,ys=`
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
`,Es=`
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
`,bs=`
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
`,Qs=i=>new _({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:ys,vertexShader:Cs,transparent:!0}),Is=i=>new _({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:bs,vertexShader:Es,transparent:!0,side:Ue}),He=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[Qs(e),Is(e)]};class Ss extends Q{constructor(){super();w(this,"app");w(this,"texture");w(this,"nameText");w(this,"titleText");w(this,"needsUpdate",!1);const e=1024,t=48;this.app=new mt({width:e,height:t,autoStart:!1,backgroundAlpha:0});const s=new R({dropShadowAngle:6.7,dropShadowDistance:3,fill:"red",fontSize:20,lineJoin:"round",stroke:"#8a0000",strokeThickness:2});this.nameText=new Te("string",s),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new Te("string",s.clone()),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const A=new ce(new $(e,t),new le({map:null,transparent:!0}));A.position.z=1e-4;const n=A.clone();n.rotation.y=Math.PI,n.position.z=-1e-5,this.texture=new vt(this.app.view),A.material.map=this.texture,n.material.map=this.texture,this.add(A,n)}redraw(e,t,s){const A=s.getStyle(),n=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style.fill=A,this.nameText.style.stroke=n,this.titleText.text=t,this.titleText.style.fill=A,this.titleText.style.stroke=n,this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class zs extends Q{constructor(){super();w(this,"question");w(this,"exclamation");w(this,"submissionInfo");w(this,"objects");this.objects=new Re,this.question=v.get(Be).children[0],this.exclamation=v.get(Be).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,He(this.question,new z(16711680)),He(this.exclamation,new z(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new Ss),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){B.on("submit",e=>{const t=H.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=q.getUser(e.userid))==null?void 0:s.displayName,e.title,new z(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:se.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:se.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new z(65280))}),t.to(this.objects.position,.15,{z:0,ease:se.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:se.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*x.deltaTime*.3,this.position.y=Math.sin(x.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=x.time,this.exclamation.material[0].uniforms.time.value=x.time,this.question.material[1].uniforms.time.value=x.time,this.exclamation.material[1].uniforms.time.value=x.time}}class Gs extends Q{constructor(){super();const[e,t,s]=this.testData();console.log(e),console.log(t),console.log(s),this.importCircuitInfo(e,t,s,!0),this.add(new zs)}start(){super.start()}update(){super.update()}importCircuitInfo(e,t,s,A){const n=-e.sizeX/2,r=0,o=-e.sizeY/2;if(t.forEach(a=>{let l="";a.isBig?l=L.partsBigPath[a.category]:l=L.partsPath[a.category];const c=v.get(l);c.position.set(a.x+n,0+r,a.z+o),A&&c.scale.set(0,0,0),this.add(c)}),s.forEach(a=>{const l=new re(a.wires);l.position.set(a.x+n,0+r,a.z+o),this.add(l)}),A){const a=new $(e.sizeX,e.sizeY,e.sizeX,e.sizeY);a.rotateX(-Math.PI/2);const l=new pt({color:16777215,wireframe:!0}),c=new ce(a,l);c.position.add(new oe(.5,0,.5)),this.add(c)}}testData(){const t=new Ps().getJson();return console.log(t),tt.jsonToInfo(t)}}const Ie=class{constructor(){w(this,"renderer",null);w(this,"camera",null);w(this,"tick",null);w(this,"_isInitialized",!1);w(this,"isStartCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new Ie,this.instance)}get isInitialized(){return this._isInitialized}resize(e,t){!this.renderer||!this.camera||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}setup(e){const t=new xt({canvas:e,antialias:!0});t.setClearColor(new z(1114129));const s=new Bt(t),A=new us,n=new Pt;n.add(new as,new Ms,new gs,new Gs),Wt(),B.on("start",()=>{console.log("start ctf")}),B.on("end",()=>{console.log("end ctf")}),B.on("recalculatestart",async()=>{console.log("recalculatestart")}),B.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new Ct(n,A)),this.tick=r=>{this.tick&&requestAnimationFrame(this.tick),x.update(r),A.update(),n.children.map(o=>{(o instanceof Q||o instanceof Z)&&o.update()}),t.render(n,A)},this.renderer=t,this.camera=A,ms().then(()=>{this._isInitialized=!0,Ft(),this.isStartCalled&&this.start()})}start(){var e;this._isInitialized&&this.tick?(x.start(performance.now()),(e=this.camera)==null||e.start(),requestAnimationFrame(this.tick)):this.isStartCalled=!0}};let F=Ie;w(F,"instance");const Ys=({width:i,height:e})=>{const t=d.exports.useRef(null),[s,A]=d.exports.useState({width:i,height:e}),[n,r]=d.exports.useState(new b(new O)),[o,a]=d.exports.useState("loading");u.exports.useTick(()=>{n.update()}),d.exports.useEffect(()=>{F.getInstance().resize(i,e),n.update(),A({width:i,height:e})},[i,e]);const l=()=>{const M=document.createElement("canvas");t.current=M,F.getInstance().setup(M),F.getInstance().resize(i,e),r(new b(O.from(M))),a("splashscreen")},c=()=>{F.getInstance().start(),a("visualizer")};return D(V,{children:(M=>M==="loading"?D(_t,{width:i,height:e,loadedHandler:l}):M==="splashscreen"?D(ts,{width:i,height:e,onComplete:c}):D(u.exports.Sprite,{texture:n,width:s.width,height:s.height}))(o)})},ge=i=>("00"+i).slice(-2),ks=({x:i,y:e,width:t,height:s})=>{const[A,n]=d.exports.useState(""),[r,o]=d.exports.useState("");return u.exports.useTick(()=>{const a=new Date;if(n(`${a.getHours()}:${ge(a.getMinutes())}:${ge(a.getSeconds())}`),!F.getInstance().isInitialized)return;const l=Math.ceil((j.endTime.getTime()-a.getTime())/1e3/60);o(`\u6B8B\u308A: ${Math.floor(l/60)}\u6642\u9593${ge(l%60)}\u5206`)}),I(u.exports.Container,{mask:new yt().drawRect(i,e,t,s),children:[D(u.exports.Text,{text:A,anchor:.5,position:[t/2,s/2],style:new R({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),D(u.exports.Text,{text:r,anchor:.5,position:[t/2,s/2-50],style:new R({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},Ts={Component:null,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Zs={visualizer:{Component:Ys,title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:ks,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1}},ie=S/4,Ws=({iconInfo:i,position:e})=>{const{windowSettings:{windows:t,update:s}}=d.exports.useContext(Y),A=()=>{const n=Zs[i.id];t[i.id]||!n||s(i.id,n)};return I(u.exports.Container,{position:e,interactive:!0,click:A,children:[D(u.exports.Sprite,{image:i.src,position:[6,0],width:S-ie,height:S-ie}),D(u.exports.Text,{text:i.title,anchor:[.5,0],position:[S/2,S-ie],style:new R({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:ie,fill:"#000"})})]})};var Fs="/Visualizer/assets/xp.3ff07b20.jpg";const me=12,Hs=()=>{const{width:i,height:e}=d.exports.useContext(Y),t=Math.floor((e-G-(S+me))/S);return I(V,{children:[D(u.exports.Sprite,{image:Fs,anchor:0,x:0,y:0,width:i,height:e-G}),D(u.exports.Container,{position:[S/2,S/2],children:Vt.map((s,A)=>D(Ws,{iconInfo:s,position:[Math.floor(A/t)*(S+me),A%t*(S+me)]},s.id))})]})},Rs=(i,e,t,s)=>{const A=C,n=16,r=[0,0],o=[0,0];let a="none";const l={x:0,y:0};let c=!1,h="pointer",M={x:0,y:0,width:0,height:0};return{mouseDownHandler:P=>m=>{l.x=m.data.global.x,l.y=m.data.global.y,P.fullscreen?M={x:0,y:0,width:t,height:s-G}:M=P.rect,e.focus(i),!(r[0]===0&&r[1]===0&&l.y-M.y>A)&&(o[0]=r[0],o[1]=r[1],a=r[0]===0&&r[1]===0?"move":"scale",e.update(i,y(g({},P),{rect:M,fullscreen:!1})))},mouseMoveHandler:P=>m=>{if(a!=="none")if(a==="move")h="grabbing",e.update(i,y(g({},P),{rect:{x:M.x+m.offsetX-l.x,y:M.y+m.offsetY-l.y,width:P.rect.width,height:P.rect.height}}));else{const f=g({},M),X=200,J=200;o[0]===1?f.width=Math.max(X,M.width-l.x+m.offsetX):o[0]===-1&&(f.width=Math.max(X,l.x+M.width-m.offsetX),f.x=Math.min(M.x+M.width-X,M.x-l.x+m.offsetX)),o[1]===1?f.height=Math.max(J,M.height-l.y+m.offsetY):o[1]===-1&&(f.height=Math.max(J,l.y+M.height-m.offsetY),f.y=Math.min(M.y+M.height-J,M.y-l.y+m.offsetY)),f.width=Math.max(200,f.width),f.height=Math.max(C,f.height),e.update(i,y(g({},P),{rect:f}))}},mouseUpHandler:()=>()=>{a="none"},cursorMouseMoveHandler:P=>m=>{const f=P.fullscreen?{x:0,y:0,width:t,height:s-G}:P.rect;m.data.global.x-f.x<n?r[0]=-1:f.x+f.width-m.data.global.x<n?r[0]=1:r[0]=0,m.data.global.y-f.y<n?r[1]=-1:f.y+f.height-m.data.global.y<n?r[1]=1:r[1]=0,r[0]*r[1]===1?h="nwse-resize":r[0]*r[1]===-1?h="nesw-resize":r[0]!==0?h="ew-resize":r[1]!==0?h="ns-resize":m.data.global.y-f.y<A?h="grab":h="default"},mouseOverHandler:()=>{c=!0},mouseOutHandler:()=>{c=!1},getCursor:()=>c?h:""}};var Us="/Visualizer/assets/close.d415dcd5.png",Os="/Visualizer/assets/fullscreen.f7ccf43f.png",js="data:image/png;base64,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",st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2IAAABgCAYAAADPVrKGAAAPNElEQVR4Ae3bMQ0AMQwEQfOnEizB5CgctpyXnoA13V5mfC7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAu0Fzt31uwEDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDQGRjH7I7plm7JAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPfgBDrRbAX0QwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjhYODDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxgQfYHfGKCz+vBQAAAABJRU5ErkJggg==";const qs=({width:i,height:e})=>{const t=d.exports.useCallback(s=>{s.clear(),s.beginFill(16777215),s.drawRect(0,0,i,e),s.endFill()},[i,e]);return D(u.exports.Graphics,{draw:t})},Vs=({id:i,windowInfo:e})=>{const{width:t,height:s}=d.exports.useContext(Y),{title:A,visible:n,fullscreen:r,Component:o}=e,a=r?{x:0,y:0,width:t,height:s-G}:e.rect,{windowSettings:l}=d.exports.useContext(Y),c=d.exports.useRef(e),h=()=>{l.update(i,y(g({},e),{fullscreen:!e.fullscreen}))},M=()=>{l.minimize(i)},E=()=>{l.kill(i)};d.exports.useEffect(()=>{c.current=e},[e]);const[p,N]=d.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return d.exports.useEffect(()=>{const{mouseDownHandler:ee,mouseMoveHandler:P,mouseUpHandler:m,cursorMouseMoveHandler:f,mouseOutHandler:X,mouseOverHandler:J,getCursor:At}=Rs(i,l,t,s);N({mouseDownHandler:ee,cursorMouseMoveHandler:f,mouseOverHandler:J,mouseOutHandler:X,getCursor:At});const Se=it=>{P(c.current||e)(it)},ze=()=>{m()()},K=document.getElementById("pixicanvas");if(!!K)return K.addEventListener("mousemove",Se),K.addEventListener("mouseup",ze),()=>{K.removeEventListener("mousemove",Se),K.removeEventListener("mouseup",ze)}},[]),u.exports.useTick(()=>{p.getCursor&&p.getCursor()&&!qe()&&Ut(p.getCursor())}),I(u.exports.Container,{position:n?[a.x,a.y]:[a.x,-99999],interactive:!0,mousedown:p.mouseDownHandler?p.mouseDownHandler(e):()=>"",mousemove:p.cursorMouseMoveHandler?p.cursorMouseMoveHandler(e):()=>"",mouseover:p.mouseOverHandler?p.mouseOverHandler:()=>"",mouseout:p.mouseOutHandler?p.mouseOutHandler:()=>"",children:[I(u.exports.Container,{position:[0,0],children:[D(u.exports.Sprite,{anchor:[0,0],image:st,width:a.width,height:C,position:[0,0]}),D(u.exports.Text,{text:A,anchor:[0,.5],position:[5,C/2],style:new R({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:C*.5,fill:"#000"})}),I(u.exports.Container,{position:[a.width,C/2],children:[D(u.exports.Sprite,{anchor:[1,.5],image:js,width:C,height:C,position:[-C*(i==="visualizer"?1:2),0],interactive:!0,click:M}),D(u.exports.Sprite,{anchor:[1,.5],image:Os,width:C,height:C,position:[-C*(i==="visualizer"?0:1),0],interactive:!0,click:h}),i!=="visualizer"?D(u.exports.Sprite,{anchor:[1,.5],image:Us,width:C,height:C,position:[0,0],interactive:!0,click:E}):null]})]}),I(u.exports.Container,{position:[0,C],children:[D(qs,{width:a.width,height:a.height-C}),o?D(o,{x:a.x,y:a.y+C,width:a.width,height:a.height-C}):D(u.exports.Container,{})]})]})};var Ns="/Visualizer/assets/youareanidiot_black.591803b6.png",Xs="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Js=({index:i,width:e,height:t,trans:s})=>{const A=e*.7,n=A/1576*994;return D(V,{children:D(u.exports.Sprite,{image:s?Ns:Xs,position:[i*1e3%(e-A),i*1e3%Math.max(1,t-n)],width:A,height:n})})},Ks=({width:i,height:e})=>{const[t,s]=d.exports.useState(!1);return u.exports.useTick(()=>{const A=performance.now();s(Math.floor(A/500)%2==0)}),D(V,{children:new Array(10).fill(null).map((A,n)=>D(Js,{width:i,height:e,index:n,trans:t},n))})},Ls=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s}}=d.exports.useContext(Y);u.exports.useTick(()=>{document.body.style.cursor=qe()||"default",Ot()});const[A,n]=d.exports.useState(!1);return d.exports.useEffect(()=>{const r=()=>{const a=new Date().getTime();j.endTime.getTime()<a&&n(!0)},o=()=>{n(!0)};return B.on("initialized",r),B.on("end",o),()=>{B.off("initialized",r),B.off("end",o)}},[]),I(V,{children:[D(Hs,{}),s.map(r=>D(Vs,{windowInfo:t[r]||Ts,id:r,focus:!1},r)),A?D(Ks,{width:i,height:e}):null]})};var _s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFnUlEQVR4Ae3YsXFCURAEQUInDqWgIIhAMX2VEtiSMd61gfWqMLg2Znm9vz6Pj9+AAQYYYIABBgoDr+JLfAeMDDDAAAMMMPBnQFj4x8Y/VgwwwAADDGQGhAVMGSZrxVphgAEGGBAWwkJYMMAAAwwwkBkQFjBlmCwVS4UBBhhgQFgIC2HBAAMMMMBAZkBYwJRhslQsFQYYYICBf4fF98/z+PgNGGCAAQYYYGAZEBaCSTAywAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBkQFjBlmKyRG2vEnd2ZAQaWAWEhLIQFAwwwwAADmQFhAVOGaRWsNwuHAQYYuGFAWAgLYcEAAwwwwEBmQFjAlGGyRm6sEXd2ZwYYWAaEhbAQFgwwwAADDGQGhAVMGaZVsN4sHAYYYOCGAWEhLIQFAwwwwAADmQFhAVOGyRq5sUbc2Z0ZYGAZEBbCQlgwwAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBn4BbHYyZnBHIeHAAAAAElFTkSuQmCC",$s="data:image/png;base64,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";const eA=({id:i,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:A,minimize:n}}=d.exports.useContext(Y),r=t[i];if(!r)return D(V,{children:"null"});const{title:o,visible:a}=r,l=d.exports.useMemo(()=>new b(new O(_s)),[]),c=d.exports.useMemo(()=>new b(new O($s)),[]);return I(u.exports.Container,{position:[e*Fe,G/2],interactive:!0,click:()=>s===i?n(i):A(i),children:[D(u.exports.Sprite,{width:Fe*.9,height:G*.9,texture:a?l:c,anchor:[0,.5],position:[0,0]}),D(u.exports.Text,{text:o,anchor:[0,.5],position:[5,0],style:new R({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:G*.5*.8,fill:"#000"})})]})},tA=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=d.exports.useContext(Y);return I(u.exports.Container,{position:[0,e-G],children:[D(u.exports.Sprite,{image:st,width:i,height:G,anchor:0,position:[0,0]}),D(u.exports.Container,{position:[200,0],children:t.map((s,A)=>D(eA,{id:s,index:A},s))})]})};var sA=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class AA extends Ee{constructor(){super(void 0,sA,{dimensions:[0,0]})}apply(e,t,s,A){const{width:n,height:r}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=r,e.applyFilter(this,t,s,A)}}var iA=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class nA extends Ee{constructor(){super(void 0,iA,{dimensions:[0,0]})}apply(e,t,s,A){const{width:n,height:r}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=r,e.applyFilter(this,t,s,A)}}var rA=`precision mediump float;

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
}`;class oA extends Ee{constructor(){super(void 0,rA,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,A){const{width:n,height:r}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=r,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,A)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const aA="_main_11f2u_1";var wA={main:aA};const cA=({children:i,Context:e,render:t})=>D(e.Consumer,{children:s=>t(D(e.Provider,{value:s,children:i}))}),lA=t=>{var s=t,{children:i}=s,e=ke(s,["children"]);return D(cA,{Context:Y,render:A=>D(u.exports.Stage,y(g({},e),{children:A})),children:i})},DA=u.exports.withFilters(u.exports.Container,{hex:oA,bloom:Et,colorshift:bt,lensDistortion:AA,visnetting:nA}),MA=()=>{const{width:i,height:e}=d.exports.useContext(Y);return D("main",{className:wA.main,children:D(lA,{width:i,height:e,id:"pixicanvas",children:I(DA,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:[D(tA,{}),D(Ls,{})]})})})},uA=()=>D(Gt,{children:D(MA,{})});Qt.render(D(It.StrictMode,{children:D(uA,{})}),document.getElementById("root"));
