var MA=Object.defineProperty,eA=Object.defineProperties;var tA=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var F=(w,A,t)=>A in w?MA(w,A,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[A]=t,h=(w,A)=>{for(var t in A||(A={}))U.call(A,t)&&F(w,t,A[t]);if(I)for(var t of I(A))N.call(A,t)&&F(w,t,A[t]);return w},g=(w,A)=>eA(w,tA(A));var V=(w,A)=>{var t={};for(var M in w)U.call(w,M)&&A.indexOf(M)<0&&(t[M]=w[M]);if(w!=null&&I)for(var M of I(w))A.indexOf(M)<0&&N.call(w,M)&&(t[M]=w[M]);return t};var Z=(w,A,t)=>(F(w,typeof A!="symbol"?A+"":A,t),t);import{r as c,j as O,M as sA,G as nA,B as L,a as _,T as H,b as R,P as rA,W as iA,E as oA,S as aA,R as cA,c as S,d as z,m as o,e as hA,f as v,g as lA,C as dA,h as gA,i as BA}from"./vendor.962821bd.js";const uA=function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))M(D);new MutationObserver(D=>{for(const e of D)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&M(r)}).observe(document,{childList:!0,subtree:!0});function t(D){const e={};return D.integrity&&(e.integrity=D.integrity),D.referrerpolicy&&(e.referrerPolicy=D.referrerpolicy),D.crossorigin==="use-credentials"?e.credentials="include":D.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function M(D){if(D.ep)return;D.ep=!0;const e=t(D);fetch(D.href,e)}};uA();const QA=()=>{const[w,A]=c.exports.useState({width:window.innerWidth,height:window.innerHeight,windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",update:(M,D)=>{A(e=>{const r=h({},e.windowSettings.windows);r[M]=D;const i=[...e.windowSettings.windowIndices],s=[...e.windowSettings.windowStack];return i.includes(M)||(s.push(M),i.push(M)),g(h({},e),{windowSettings:g(h({},e.windowSettings),{windows:r,windowIndices:i,windowStack:s})})})},kill:M=>{A(D=>{const e=h({},D.windowSettings.windows);delete e[M];const r=D.windowSettings.windowIndices.filter(Q=>Q!==M),i=D.windowSettings.windowStack.filter(Q=>Q!==M),s=r.filter(Q=>{var Y;return(Y=e[Q])==null?void 0:Y.visible}),a=s.length>0?s[s.length-1]:"";return g(h({},D),{windowSettings:g(h({},D.windowSettings),{windows:e,windowIndices:r,windowStack:i,focused:a})})})},focus:M=>{A(D=>{const e=h({},D.windowSettings.windows),r=e[M];if(!r)throw new Error("invalid id");e[M]=g(h({},r),{visible:!0});const i=D.windowSettings.windowIndices.filter(s=>s!==M);return i.push(M),g(h({},D),{windowSettings:g(h({},D.windowSettings),{windows:e,windowIndices:i,focused:M})})})},minimize:M=>{A(D=>{const e=h({},D.windowSettings.windows),r=e[M];if(!r)throw new Error("invalid id");e[M]=g(h({},r),{visible:!1});const i=D.windowSettings.windowIndices.filter(a=>{var Q;return a!==M&&((Q=e[a])==null?void 0:Q.visible)}),s=i.length>0?i[i.length-1]:"";return g(h({},D),{windowSettings:g(h({},D.windowSettings),{windows:e,focused:s})})})}}});return[w,()=>{A(M=>g(h({},M),{width:window.innerWidth,height:window.innerHeight}))}]},n=O.exports.jsx,p=O.exports.jsxs,q=O.exports.Fragment,G=c.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),fA=({children:w})=>{const[A,t]=QA();return c.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),n(G.Provider,{value:A,children:w})},E=54,B=32,f=64;var pA="/Visualizer/assets/clock-icon.77140fc3.png",EA="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const GA=[{src:EA,id:"visualizer",title:"Visualizer.exe"},{src:pA,id:"clock",title:"Clock.exe"}];class m{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(A){this.startTime=A,this.prevTime=A}static update(A){this._time=(A-this.startTime)/1e3,this._deltaTime=(A-this.prevTime)/1e3,this.prevTime=A}}Z(m,"startTime",-1),Z(m,"_time",-1),Z(m,"_deltaTime",-1),Z(m,"prevTime",-1);class x extends sA{constructor(){super(...arguments);Z(this,"initialized",!1)}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(A=>{(A instanceof C||A instanceof x)&&A.update()}))}}class C extends nA{constructor(){super();Z(this,"initialized",!1)}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(A=>{(A instanceof C||A instanceof x)&&A.update()}))}}class mA extends EventTarget{constructor(){super()}}const P=new mA;class ZA extends C{start(){}update(){super.update()}}class xA extends x{constructor(){super(new L(.1,.2,.05),new _({color:65280}))}start(){}update(){super.update()}}class CA extends C{constructor(){super();new Array(100).fill(null).forEach((A,t)=>{const M=new xA,D=t/100*Math.PI*2;M.position.set(Math.sin(D)*5,0,Math.cos(D)*5),M.rotation.y=D,this.add(M)})}start(){}update(){if(super.update(),Math.random()<.01){const A=this.children[Math.floor(Math.random()*100)];if(!A)return;new H(A.scale,.5,{x:3,y:3,z:3,ease:R.easeOut}),new H(A.position,.5,{x:A.position.x,y:1,z:A.position.z,ease:R.easeOut}),new H(A.rotation,.5,{x:0,y:A.rotation.y+Math.PI*1,z:0,ease:R.easeOut})}}}class YA extends x{constructor(){super(new L(1,1,1),new _({color:16711680}))}start(){console.log("circuit")}update(){super.update(),this.rotation.y=Math.PI*m.deltaTime}}class WA extends rA{constructor(){super(60,1,1,2e3)}start(){}update(){this.position.set(Math.sin(m.time*.1)*3,2,Math.cos(m.time*.1)*3),this.lookAt(0,0,0)}}const kA=w=>{const A=new iA({canvas:w,alpha:!0,antialias:!0}),t=new oA(A),M=new WA,D=(i,s)=>{A.setSize(i,s),A.setPixelRatio(window.devicePixelRatio),M.aspect=i/s,M.updateProjectionMatrix()},e=new aA;e.add(new ZA,new CA,new YA),P.addEventListener("start",()=>{console.log("start ctf")}),P.addEventListener("end",()=>{console.log("end ctf")}),P.addEventListener("recalcurate",async()=>{console.log("recalcurate")}),P.addEventListener("submit",()=>{console.log("submit")}),t.addPass(new cA(e,M));const r=i=>{requestAnimationFrame(r),m.update(i),A.render(e,M),M.update(),e.children.map(s=>{(s instanceof C||s instanceof x)&&s.update()})};return m.start(performance.now()),requestAnimationFrame(r),D},IA=({width:w,height:A})=>{const t=c.exports.useRef(null),M=c.exports.useRef(()=>{}),[D,e]=c.exports.useState({width:w,height:A}),[r,i]=c.exports.useState(new S(new z));return o.exports.useTick(()=>{r.update()}),c.exports.useEffect(()=>{M.current&&(M.current(w,A),r.update(),e({width:w,height:A}))},[w,A]),c.exports.useEffect(()=>{const s=document.createElement("canvas");t.current=s,M.current=kA(s),M.current(w,A),i(new S(z.from(s)))},[]),n(o.exports.Sprite,{texture:r,width:D.width,height:D.height})},PA=({x:w,y:A,width:t,height:M})=>{const[D,e]=c.exports.useState("");return o.exports.useTick(()=>{const r=new Date;e(`${r.getHours()}:${("00"+r.getMinutes()).slice(-2)}:${("00"+r.getSeconds()).slice(-2)}`)}),n(o.exports.Container,{mask:new hA().drawRect(w,A,t,M),children:n(o.exports.Text,{text:D,anchor:.5,position:[t/2,M/2],style:new v({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})})})},bA={Component:null,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},SA={visualizer:{Component:IA,title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},clock:{Component:PA,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1}},b=12,zA=({iconInfo:w,position:A})=>{const{windowSettings:{windows:t,update:M}}=c.exports.useContext(G),D=()=>{const e=SA[w.id];t[w.id]||!e||M(w.id,e)};return p(o.exports.Container,{position:A,interactive:!0,click:D,children:[n(o.exports.Sprite,{image:w.src,position:[6,0],width:f-b,height:f-b}),n(o.exports.Text,{text:w.title,anchor:[.5,0],position:[f/2,f-b],style:new v({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:b,fill:"#000"})})]})};var $="/Visualizer/assets/xp.3ff07b20.jpg";const y=12,vA=()=>{const{width:w,height:A}=c.exports.useContext(G),t=Math.floor((A-E-(f+y))/f);return p(q,{children:[n(o.exports.Sprite,{image:$,anchor:0,x:0,y:0,width:w,height:A-E}),n(o.exports.Container,{position:[f/2,f/2],children:GA.map((M,D)=>n(zA,{iconInfo:M,position:[Math.floor(D/t)*(f+y),D%t*(f+y)]},M.id))})]})},FA=(w,A)=>{const D=[0,0],e=[0,0];let r="none";const i={x:0,y:0};let s="pointer",a={x:0,y:0,width:0,height:0};return{mouseDownHandler:u=>d=>{i.x=d.data.global.x,i.y=d.data.global.y,u.fullscreen?a={x:0,y:0,width:window.innerWidth,height:window.innerHeight-E}:a=u.rect,A.focus(w),!(D[0]===0&&D[1]===0&&i.y-a.y>32)&&(e[0]=D[0],e[1]=D[1],r=D[0]===0&&D[1]===0?"move":"scale",A.update(w,g(h({},u),{rect:a,fullscreen:!1})))},mouseMoveHandler:u=>d=>{if(r!=="none")if(r==="move")s="grabbing",A.update(w,g(h({},u),{rect:{x:a.x+d.clientX-i.x,y:a.y+d.clientY-i.y,width:u.rect.width,height:u.rect.height}}));else{const l=h({},a),W=200,k=200;e[0]===1?l.width=Math.max(W,a.width-i.x+d.clientX):e[0]===-1&&(l.width=Math.max(W,i.x+a.width-d.clientX),l.x=Math.min(a.x+a.width-W,a.x-i.x+d.clientX)),e[1]===1?l.height=Math.max(k,a.height-i.y+d.clientY):e[1]===-1&&(l.height=Math.max(k,i.y+a.height-d.clientY),l.y=Math.min(a.y+a.height-k,a.y-i.y+d.clientY)),l.width=Math.max(200,l.width),l.height=Math.max(B,l.height),A.update(w,g(h({},u),{rect:l}))}},mouseUpHandler:()=>()=>{r="none"},cursorMouseMoveHandler:u=>d=>{const l=u.fullscreen?{x:0,y:0,width:window.innerWidth,height:window.innerHeight-E}:u.rect;d.data.global.x-l.x<8?D[0]=-1:l.x+l.width-d.data.global.x<8?D[0]=1:D[0]=0,d.data.global.y-l.y<8?D[1]=-1:l.y+l.height-d.data.global.y<8?D[1]=1:D[1]=0,D[0]*D[1]===1?s="nwse-resize":D[0]*D[1]===-1?s="nesw-resize":D[0]!==0?s="ew-resize":D[1]!==0?s="ns-resize":d.data.global.y-l.y<32?s="grab":s="default",document.body.style.cursor==="default"&&(document.body.style.cursor=s)}}};var HA="/Visualizer/assets/close.d415dcd5.png",RA="/Visualizer/assets/fullscreen.f7ccf43f.png",yA="data:image/png;base64,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",AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2IAAABgCAYAAADPVrKGAAAPNElEQVR4Ae3bMQ0AMQwEQfOnEizB5CgctpyXnoA13V5mfC7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAi7gAu0Fzt31uwEDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDQGRjH7I7plm7JAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAPfgBDrRbAX0QwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjhYODDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxASE2Pqh1g3UDAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwIsUKsdQMDDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDMQGhNj4oNYN1g0MMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMCDECrHWDQwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwEBsQYuODWjdYNzDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAgBArxFo3MMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMBAbECIjQ9q3WDdwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADQqwQa93AAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAOxgQfYHfGKCz+vBQAAAABJRU5ErkJggg==",OA="/Visualizer/assets/bg.824b0ae7.png";const qA=({id:w,windowInfo:A})=>{const{width:t,height:M}=c.exports.useContext(G),{title:D,visible:e,fullscreen:r,Component:i}=A,s=r?{x:0,y:0,width:t,height:M-E}:A.rect,{windowSettings:a}=c.exports.useContext(G),Q=c.exports.useRef(A),Y=()=>{a.update(w,g(h({},A),{fullscreen:!A.fullscreen}))},j=()=>{a.minimize(w)},J=()=>{a.kill(w)};c.exports.useEffect(()=>{Q.current=A},[A]);const[u,d]=c.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null});return c.exports.useEffect(()=>{const{mouseDownHandler:l,mouseMoveHandler:W,mouseUpHandler:k,cursorMouseMoveHandler:wA}=FA(w,a);d({mouseDownHandler:l,cursorMouseMoveHandler:wA});const T=DA=>{W(Q.current||A)(DA)},K=()=>{k()()};return window.addEventListener("mousemove",T),window.addEventListener("mouseup",K),()=>{window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",K)}},[]),p(o.exports.Container,{position:e?[s.x,s.y]:[s.x,-99999],interactive:!0,mousedown:u.mouseDownHandler?u.mouseDownHandler(A):()=>"",mousemove:u.cursorMouseMoveHandler?u.cursorMouseMoveHandler(A):()=>"",children:[n(o.exports.Sprite,{image:$,width:s.width,height:s.height}),p(o.exports.Container,{position:[0,0],children:[n(o.exports.Sprite,{anchor:[0,0],image:AA,width:s.width,height:B,position:[0,0]}),n(o.exports.Text,{text:D,anchor:[0,.5],position:[5,B/2],style:new v({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:B*.5,fill:"#000"})}),p(o.exports.Container,{position:[s.width,B/2],children:[n(o.exports.Sprite,{anchor:[1,.5],image:yA,width:B,height:B,position:[-B*(w==="visualizer"?1:2),0],interactive:!0,click:j}),n(o.exports.Sprite,{anchor:[1,.5],image:RA,width:B,height:B,position:[-B*(w==="visualizer"?0:1),0],interactive:!0,click:Y}),w!=="visualizer"?n(o.exports.Sprite,{anchor:[1,.5],image:HA,width:B,height:B,position:[0,0],interactive:!0,click:J}):null]})]}),p(o.exports.Container,{position:[0,B],children:[n(o.exports.Sprite,{anchor:[0,0],image:OA,width:s.width,height:s.height-B,position:[0,0]}),i?n(i,{x:s.x,y:s.y+B,width:s.width,height:s.height-B}):n(o.exports.Container,{})]})]})},jA=()=>{const{windowSettings:{windows:w,windowIndices:A}}=c.exports.useContext(G);return p(q,{children:[n(vA,{}),A.map(t=>n(qA,{windowInfo:w[t]||bA,id:t,focus:!1},t))]})};var JA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFnUlEQVR4Ae3YsXFCURAEQUInDqWgIIhAMX2VEtiSMd61gfWqMLg2Znm9vz6Pj9+AAQYYYIABBgoDr+JLfAeMDDDAAAMMMPBnQFj4x8Y/VgwwwAADDGQGhAVMGSZrxVphgAEGGBAWwkJYMMAAAwwwkBkQFjBlmCwVS4UBBhhgQFgIC2HBAAMMMMBAZkBYwJRhslQsFQYYYICBf4fF98/z+PgNGGCAAQYYYGAZEBaCSTAywAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBkQFjBlmKyRG2vEnd2ZAQaWAWEhLIQFAwwwwAADmQFhAVOGaRWsNwuHAQYYuGFAWAgLYcEAAwwwwEBmQFjAlGGyRm6sEXd2ZwYYWAaEhbAQFgwwwAADDGQGhAVMGaZVsN4sHAYYYOCGAWEhLIQFAwwwwAADmQFhAVOGyRq5sUbc2Z0ZYGAZEBbCQlgwwAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBn4BbHYyZnBHIeHAAAAAElFTkSuQmCC",TA="data:image/png;base64,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";const X=200,KA=({id:w,index:A})=>{const{windowSettings:{windows:t,focused:M,focus:D,minimize:e}}=c.exports.useContext(G),r=t[w];if(!r)return n(q,{children:"null"});const{title:i,visible:s}=r,a=c.exports.useMemo(()=>new S(new z(JA)),[]),Q=c.exports.useMemo(()=>new S(new z(TA)),[]);return p(o.exports.Container,{position:[A*X,E/2],interactive:!0,click:()=>M===w?e(w):D(w),children:[n(o.exports.Sprite,{width:X*.9,height:E*.9,texture:s?a:Q,anchor:[0,.5],position:[0,0]}),n(o.exports.Text,{text:i,anchor:[0,.5],position:[5,0],style:new v({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:E*.5*.8,fill:"#000"})})]})},UA=()=>{const{width:w,height:A,windowSettings:{windowStack:t}}=c.exports.useContext(G);return p(o.exports.Container,{position:[0,A-E],children:[n(o.exports.Sprite,{image:AA,width:w,height:E,anchor:0,position:[0,0]}),n(o.exports.Container,{position:[200,0],children:t.map((M,D)=>n(KA,{id:M,index:D},M))})]})},NA=({children:w,Context:A,render:t})=>n(A.Consumer,{children:M=>t(n(A.Provider,{value:M,children:w}))}),VA=t=>{var M=t,{children:w}=M,A=V(M,["children"]);return n(NA,{Context:G,render:D=>n(o.exports.Stage,g(h({},A),{children:D})),children:w})},XA=o.exports.withFilters(o.exports.Container,{rgbsplit:lA,crt:dA}),LA=()=>{const{width:w,height:A}=c.exports.useContext(G);return n(VA,{width:w,height:A,children:p(XA,{crt:{vignetting:.2,noiseSize:5},rgbsplit:{red:[-2.4,2.2],blue:[2.68,3.2],green:[-.26,2.2]},children:[n(UA,{}),n(jA,{})]})})},_A=()=>n(fA,{children:n(LA,{})});gA.render(n(BA.StrictMode,{children:n(_A,{})}),document.getElementById("root"));
