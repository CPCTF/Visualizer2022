var Qt=Object.defineProperty,Xt=Object.defineProperties;var Kt=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var tt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var Ue=(i,e,t)=>e in i?Qt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,A=(i,e)=>{for(var t in e||(e={}))tt.call(e,t)&&Ue(i,t,e[t]);if(Ae)for(var t of Ae(e))st.call(e,t)&&Ue(i,t,e[t]);return i},P=(i,e)=>Xt(i,Kt(e));var it=(i,e)=>{var t={};for(var s in i)tt.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&Ae)for(var s of Ae(i))e.indexOf(s)<0&&st.call(i,s)&&(t[s]=i[s]);return t};var d=(i,e,t)=>(Ue(i,typeof e!="symbol"?e+"":e,t),t);import{r as v,j as Ke,T as pt,G as qt,F as Jt,m as Zt,B as pe,a as M,R as F,b as h,c as O,M as xe,d as xt,S as $t,e as re,C as E,V as L,E as es,f as gt,P as De,D as yt,g as he,h as At,i as zt,k as ts,l as Re,n as rt,U as nt,o as ot,p as ss,q as St,s as is,t as rs,u as ns,A as os,v as at,w as as,x as ze,y as cs,W as ls,z as us,H as ds,I as hs,J as fs,K as ms,L as Ct,N as ct,O as qe,Q as vs,X as ws,Y as ps,Z as xs}from"./vendor.6615a397.js";const gs=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};gs();const ge=1.5,H=64*ge,lt=200*ge,x=6*ge,Ce=x/3*2,b=x/6*26,N=b*1.2,ut=20*ge;let bt=0;const dt=i=>{bt=i},Te=()=>bt;var ys="/Visualizer/assets/clickup.207be81c.mp3",As="/Visualizer/assets/clickdown.92e482ed.mp3",zs="/Visualizer/assets/hdd.670515d8.mp3";const R={mouseup:new Audio(ys),mousedown:new Audio(As),hdd:new Audio(zs)},Me=i=>{Te()!==0&&(!R[i]||(R[i].paused||(R[i].pause(),R[i].currentTime=0),R[i].volume=Te(),R[i].play()))},Le=i=>{Te()!==0&&(!R[i]||(R[i].paused||(R[i].pause(),R[i].currentTime=Math.min(R[i].currentTime,5)),R[i].volume=Te(),R[i].play()))},Ss=()=>{const[i,e]=v.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,r)=>{e(n=>{if(n.windowSettings.starting)return n;if(!n.windowSettings.windowIndices.includes(s))return Le("hdd"),setTimeout(()=>{e(u=>{const f=A({},u.windowSettings.windows);f[s]=r;const w=[...u.windowSettings.windowIndices],m=[...u.windowSettings.windowStack];return w.includes(s)||(m.push(s),w.push(s)),P(A({},u),{windowSettings:P(A({},u.windowSettings),{windows:f,windowIndices:w,windowStack:m,starting:""})})})},2e3),P(A({},n),{windowSettings:P(A({},n.windowSettings),{starting:s})});const o=A({},n.windowSettings.windows);o[s]=r;const a=[...n.windowSettings.windowIndices],c=[...n.windowSettings.windowStack];return a.includes(s)||(c.push(s),a.push(s),Le("hdd")),P(A({},n),{windowSettings:P(A({},n.windowSettings),{windows:o,windowIndices:a,windowStack:c})})})},kill:s=>{e(r=>{const n=A({},r.windowSettings.windows);delete n[s];const o=r.windowSettings.windowIndices.filter(f=>f!==s),a=r.windowSettings.windowStack.filter(f=>f!==s),c=o.filter(f=>{var w;return(w=n[f])==null?void 0:w.visible}),u=c.length>0?c[c.length-1]:"";return P(A({},r),{windowSettings:P(A({},r.windowSettings),{windows:n,windowIndices:o,windowStack:a,focused:u})})})},focus:s=>{e(r=>{const n=A({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=P(A({},o),{visible:!0});const a=r.windowSettings.windowIndices.filter(c=>c!==s);return a.push(s),P(A({},r),{windowSettings:P(A({},r.windowSettings),{windows:n,windowIndices:a,focused:s})})})},minimize:s=>{e(r=>{const n=A({},r.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=P(A({},o),{visible:!1});const a=r.windowSettings.windowIndices.filter(u=>{var f;return u!==s&&((f=n[u])==null?void 0:f.visible)}),c=a.length>0?a[a.length-1]:"";return P(A({},r),{windowSettings:P(A({},r.windowSettings),{windows:n,focused:c})})})}}}));return[i,()=>{e(s=>P(A({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},l=Ke.exports.jsx,D=Ke.exports.jsxs,X=Ke.exports.Fragment,Y=v.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),Cs=({children:i})=>{const[e,t]=Ss();return v.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),l(Y.Provider,{value:e,children:i})},bs="ws://cpctf.space/ws/visualizer",Pt=["Newbie","PPC","Web","Crypto","Binary","Pwn","Misc","Shell","Forensics","OSINT"];var Je="/Visualizer/assets/testicon.8f219171.jpg",Ps=[{class:"basis",sizeX:20,sizeY:20},{class:"parts",x:10,z:10,isBig:!1,category:""},{class:"parts",x:19,z:12,isBig:!1,category:"Newbie"},{class:"parts",x:9,z:15,isBig:!1,category:"Pwn"},{class:"parts",x:9,z:2,isBig:!1,category:"PPC"},{class:"parts",x:3,z:9,isBig:!1,category:"Crypto"},{class:"wires",x:9,z:0,wires:[[15,-1]]},{class:"wires",x:10,z:0,wires:[[7,24]]},{class:"wires",x:12,z:0,wires:[[15,-1]]},{class:"wires",x:13,z:0,wires:[[7,24]]},{class:"wires",x:15,z:0,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:16,z:0,wires:[[5,26],[6,25],[7,24]]},{class:"wires",x:17,z:0,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1]]},{class:"wires",x:7,z:1,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:8,z:1,wires:[[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25],[15,24]]},{class:"wires",x:9,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:10,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:11,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:12,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:13,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:14,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:15,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1]]},{class:"wires",x:16,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,18],[6,17],[7,16]]},{class:"wires",x:17,z:1,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18]]},{class:"wires",x:8,z:2,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0]]},{class:"wires",x:17,z:2,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,9],[31,0]]},{class:"wires",x:18,z:2,wires:[[30,1]]},{class:"wires",x:8,z:3,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9],[23,8]]},{class:"wires",x:17,z:3,wires:[[23,0],[24,-1],[25,-1],[26,-1],[27,-1],[28,-1],[29,-1],[30,-1],[31,-1]]},{class:"wires",x:18,z:3,wires:[[22,-1]]},{class:"wires",x:7,z:4,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:8,z:4,wires:[[13,26],[14,25],[15,24]]},{class:"wires",x:9,z:4,wires:[[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,26],[22,25],[23,24]]},{class:"wires",x:10,z:4,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:11,z:4,wires:[[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:12,z:4,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:13,z:4,wires:[[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:14,z:4,wires:[[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:15,z:4,wires:[[16,7],[17,6],[18,5],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:16,z:4,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:17,z:4,wires:[[23,-1]]},{class:"wires",x:8,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1]]},{class:"wires",x:9,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[16,31],[17,30],[18,29],[19,28],[20,27]]},{class:"wires",x:10,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:11,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:12,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:13,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:14,z:5,wires:[[8,-1],[9,-1],[10,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25]]},{class:"wires",x:15,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29]]},{class:"wires",x:16,z:5,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:5,z:7,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:6,z:7,wires:[[5,26],[6,25],[7,24]]},{class:"wires",x:7,z:7,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1]]},{class:"wires",x:1,z:8,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:2,z:8,wires:[[6,-1],[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25],[15,24]]},{class:"wires",x:3,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:4,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:5,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1]]},{class:"wires",x:6,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,18],[6,17],[7,16]]},{class:"wires",x:7,z:8,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18],[6,17]]},{class:"wires",x:9,z:8,wires:[[15,-1]]},{class:"wires",x:10,z:8,wires:[[7,24]]},{class:"wires",x:12,z:8,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1]]},{class:"wires",x:2,z:9,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,17],[15,16]]},{class:"wires",x:7,z:9,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:8,z:9,wires:[[7,-1],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[31,0]]},{class:"wires",x:9,z:9,wires:[[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25]]},{class:"wires",x:10,z:9,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:11,z:9,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24]]},{class:"wires",x:12,z:9,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18]]},{class:"wires",x:13,z:9,wires:[[6,-1]]},{class:"wires",x:2,z:10,wires:[[8,7],[9,6],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10]]},{class:"wires",x:7,z:10,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:8,z:10,wires:[[8,-1],[23,-1],[31,16]]},{class:"wires",x:9,z:10,wires:[[0,31],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,16]]},{class:"wires",x:12,z:10,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,9],[31,8]]},{class:"wires",x:13,z:10,wires:[[30,17],[31,0]]},{class:"wires",x:18,z:10,wires:[[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:19,z:10,wires:[[3,28],[4,27],[5,26],[6,25],[7,24]]},{class:"wires",x:1,z:11,wires:[[15,-1]]},{class:"wires",x:2,z:11,wires:[[15,24],[16,-1],[17,-1]]},{class:"wires",x:3,z:11,wires:[[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:4,z:11,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:5,z:11,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:6,z:11,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:9,z:11,wires:[[8,23],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9]]},{class:"wires",x:12,z:11,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,10],[30,1],[31,0]]},{class:"wires",x:13,z:11,wires:[[23,-1],[29,2]]},{class:"wires",x:17,z:11,wires:[[8,-1],[9,-1],[10,-1]]},{class:"wires",x:18,z:11,wires:[[8,31],[9,30],[10,29]]},{class:"wires",x:19,z:11,wires:[[0,31],[1,30],[2,29],[3,20],[4,19],[5,18],[6,17],[7,16]]},{class:"wires",x:2,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:3,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25]]},{class:"wires",x:4,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25]]},{class:"wires",x:5,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:6,z:12,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:8,z:12,wires:[[14,-1],[15,-1]]},{class:"wires",x:9,z:12,wires:[[14,25],[15,24]]},{class:"wires",x:10,z:12,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:11,z:12,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:12,z:12,wires:[[22,1],[23,0]]},{class:"wires",x:13,z:12,wires:[[21,-1]]},{class:"wires",x:18,z:12,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0]]},{class:"wires",x:8,z:13,wires:[[15,-1]]},{class:"wires",x:9,z:13,wires:[[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:10,z:13,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:11,z:13,wires:[[7,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:12,z:13,wires:[[6,25],[7,24],[22,-1],[23,-1]]},{class:"wires",x:13,z:13,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1]]},{class:"wires",x:17,z:13,wires:[[15,-1]]},{class:"wires",x:18,z:13,wires:[[8,7],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9],[23,24]]},{class:"wires",x:7,z:14,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:8,z:14,wires:[[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25]]},{class:"wires",x:9,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:10,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:11,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:12,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,17],[7,16]]},{class:"wires",x:13,z:14,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18],[6,17]]},{class:"wires",x:14,z:14,wires:[[7,-1]]},{class:"wires",x:17,z:14,wires:[[8,-1]]},{class:"wires",x:18,z:14,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0],[16,31]]},{class:"wires",x:8,z:15,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,16]]},{class:"wires",x:13,z:15,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:14,z:15,wires:[[6,-1],[7,-1],[31,16]]},{class:"wires",x:17,z:15,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:18,z:15,wires:[[8,7],[9,6],[10,5],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,26],[22,25],[23,24]]},{class:"wires",x:8,z:16,wires:[[8,7],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9]]},{class:"wires",x:13,z:16,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,9],[31,8]]},{class:"wires",x:14,z:16,wires:[[30,17],[31,16]]},{class:"wires",x:17,z:16,wires:[[9,-1],[10,-1]]},{class:"wires",x:18,z:16,wires:[[1,30],[2,29],[8,7],[9,6],[10,5],[11,4],[12,3],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13]]},{class:"wires",x:8,z:17,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,-1],[16,15]]},{class:"wires",x:13,z:17,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:14,z:17,wires:[[7,-1],[31,0]]},{class:"wires",x:18,z:17,wires:[[8,7],[9,22],[10,21],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11]]},{class:"wires",x:7,z:18,wires:[[14,-1]]},{class:"wires",x:8,z:18,wires:[[8,7],[9,6],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,25]]},{class:"wires",x:13,z:18,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:14,z:18,wires:[[23,-1],[31,16]]},{class:"wires",x:17,z:18,wires:[[14,-1],[15,-1]]},{class:"wires",x:18,z:18,wires:[[14,25],[15,24],[16,-1]]},{class:"wires",x:19,z:18,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:8,z:19,wires:[[16,15],[17,14]]},{class:"wires",x:9,z:19,wires:[[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0],[24,-1],[25,-1]]},{class:"wires",x:10,z:19,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:11,z:19,wires:[[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:12,z:19,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:18,z:19,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:19,z:19,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]}];const ae=new Array(100).fill(null).map((i,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:Je,point:0,rank:-1})),Ts=()=>({userId:ae[Math.floor(Math.random()*ae.length)].id,point:Math.random()*1e3,genre:Math.floor(Math.random()*Pt.length),title:"\u30AA\u30E2\u30B7\u30ED\u554F\u984C -\u3053\u308C\u306F\u9069\u5F53\u306B\u8003\u3048\u305F\u30BF\u30A4\u30C8\u30EB-"}),Tt=()=>(ae.forEach(i=>{i.point+=Math.random()*1e3}),ae.sort((i,e)=>i.point-e.point),ae.forEach((i,e)=>{i.rank=e+1}),{ranking:ae,circuit:{data:JSON.stringify(Ps)}}),Ms=()=>{const i=new Date;i.setMinutes(i.getMinutes()-5);const e=new Date;return e.setMinutes(e.getMinutes()+5),{users:ae.map(({id:t,name:s,iconUrl:r})=>({id:t,name:s,iconUrl:r})),recalculate:Tt(),startTime:i.toString(),endTime:e.toString()}},He=i=>A({data:{type:0,data:null},lastEventId:"",origin:"",ports:[],source:null,initMessageEvent:function(e,t,s,r,n,o,a,c){throw new Error("Function not implemented.")},bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:null,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:null,target:null,timeStamp:0,type:"",composedPath:function(){throw new Error("Function not implemented.")},initEvent:function(e,t,s){throw new Error("Function not implemented.")},preventDefault:function(){throw new Error("Function not implemented.")},stopImmediatePropagation:function(){throw new Error("Function not implemented.")},stopPropagation:function(){throw new Error("Function not implemented.")},AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0},i),je=i=>new Promise(e=>{setTimeout(()=>e(),i)}),Ie={startTime:new Date,endTime:new Date},Is=()=>{C.emit("start")},Es=()=>{C.emit("end")},_e={texture:new pt,gltf:new qt,fbx:new Jt},ht=(i,e)=>new Promise((t,s)=>{switch(e){case"gltf":{_e.gltf.load(i,r=>{t(r.scene)},()=>0,r=>{s(r)});break}case"texture":{_e.texture.load(i,r=>{t(r)},()=>0,r=>{s(r)});break}}});class y{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const r=this.queue.length;if(r!==0)return this.queue.map(([n,o])=>{t?t=t.then(()=>ht(n,o)):t=ht(n,o),t=t.then((a=>{s+=1,this.resources[n]={type:o,data:a},e({path:n,data:a,total:r,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}d(y,"resources",{}),d(y,"queue",[]);class ks extends EventTarget{constructor(e){super();d(this,"id");d(this,"_point",0);d(this,"_rank",-1);d(this,"_displayName","");d(this,"_icon",null);d(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,r){var n;this._point=e,this._rank=t,this._displayName=s,(!this._iconPath||this._iconPath!==r)&&(this._iconPath=r,(n=this._icon)==null||n.dispose(),this._icon=_e.texture.load(r))}}class W{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const r=new ks(e);this.users[e]=r,r.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:r,rank:n}){var o;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(o=this.users[e])==null||o.set(r,n,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,r;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((r=this.users[t])==null?void 0:r.rank)||999999999)})}static getUser(e){return this.users[e]}}d(W,"users",{}),d(W,"_ranking",[]);const Fs=({userId:i,name:e,iconUrl:t})=>{W.addUser({id:i,name:e,iconUrl:t})},Ds=({userId:i,point:e,genre:t,title:s})=>{C.emit("submit",{userid:i,point:e,genre:Pt[t],title:s})},Bs=({userId:i,name:e,iconUrl:t})=>{var r,n;const s=W.getUser(i);!s||W.updateUser({point:(r=s.point)!=null?r:0,rank:(n=s.rank)!=null?n:0,id:i,name:e,iconUrl:t})};class Mt{static async initial(){return await je(1e3),Ms()}static async recalculate(){return await je(1e3),Tt()}}class Oe{constructor(e,t){this.sizeX=e,this.sizeY=t}}class It{constructor(e,t,s,r){this.x=e,this.z=t,this.isBig=s,this.category=r}}class Et{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class Us{static jsonToInfo(e){const t=JSON.parse(e);let s=new Oe(0,0);const r=new Array(0),n=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new Oe(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;r.push(new It(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;n.push(new Et(a.x,a.z,a.wires))}}),[s,r,n]}}class we{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=Us.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}d(we,"circuitBasisInfo"),d(we,"circuitPartsInfos"),d(we,"circuitWiresInfos");const Rs=()=>{(async()=>{C.emit("recalculatestart"),await Hs(),C.emit("recalculateend")})()},Hs=async()=>{const i=await Mt.recalculate();if(!i)return;const{ranking:e,circuit:t}=i;e.forEach(s=>{W.updateUser(s)}),W.updateRanking(),await je(4e3),we.setCircuitInfo(t.data)},C=Zt(),Ns=()=>{const i=new WebSocket(bs);i.addEventListener("message",be.bind(globalThis)),i.addEventListener("error",()=>{C.emit("disconnect")}),Gs()},Ws=()=>{C.emit("initialized")},Gs=()=>{setInterval(()=>{be(He({data:{type:7}}))},3e4),setInterval(()=>{be(He({data:{type:6}}))},3e5),setInterval(()=>{be(He({data:{type:2,data:Ts()}}))},3e3)},be=i=>{const{type:e,data:t}=i.data;if(!!e)switch(i.data.type){case 0:break;case 1:{Fs(t);break}case 2:{Ds(t);break}case 3:break;case 4:{Bs(t);break}case 5:{Is();break}case 6:{Es();break}case 7:{Rs();break}}};var Vs="data:image/png;base64,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",Ls="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",js="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",_s="/Visualizer/assets/recalculating.60ffccdf.glb",kt="/Visualizer/assets/monitor.81b9fd78.glb",Os="/Visualizer/assets/face.e8cae3d3.png",Ft="/Visualizer/assets/cpu.57abf837.glb",Dt="/Visualizer/assets/graphicBoard.df969daf.glb",Bt="/Visualizer/assets/hdd.57193f05.glb",Ut="/Visualizer/assets/memory.4bfe027c.glb",Rt="/Visualizer/assets/powerSupply.2ca11cfa.glb",Ht="/Visualizer/assets/tipSet.f2956ffc.glb",Nt="/Visualizer/assets/audio.5e239d55.glb",Wt="/Visualizer/assets/condenser.07eb820d.glb",Gt="/Visualizer/assets/ports.6ad72da3.glb",Vt="/Visualizer/assets/ssd.523d4501.glb",Ye="/Visualizer/assets/symbols.3d122568.glb",Qe="/Visualizer/assets/emergency.19e4efc2.glb";const Ys=()=>{y.addGLTF(_s),y.addGLTF(kt),y.addTexture(Os),y.addTexture(Je),y.addGLTF(Ft),y.addGLTF(Dt),y.addGLTF(Bt),y.addGLTF(Ut),y.addGLTF(Rt),y.addGLTF(Ht),y.addGLTF(Nt),y.addGLTF(Wt),y.addGLTF(Gt),y.addGLTF(Vt),y.addGLTF(Ye),y.addGLTF(Qe)},Qs=({width:i,height:e,loadedHandler:t})=>{const[s,r]=v.exports.useState(""),[n,o]=v.exports.useState(0),[a,c]=v.exports.useState({textures:[],index:-1});return v.exports.useEffect(()=>{(async()=>{Ys(),await y.load(({path:m,total:T,count:I})=>{r(m),o(I/T)}),t()})();const f=new pe(Vs);c({index:0,textures:[new M(f,new F(64*0,0,64,64)),new M(f,new F(64*1,0,64,64)),new M(f,new F(64*2,0,64,64)),new M(f,new F(64*3,0,64,64)),new M(f,new F(64*4,0,64,64)),new M(f,new F(64*5,0,64,64)),new M(f,new F(64*6,0,64,64)),new M(f,new F(64*7,0,64,64))]});const w=setInterval(()=>{c(m=>({index:(m.index+1)%m.textures.length,textures:m.textures}))},200);return()=>{clearInterval(w)}},[]),D(h.exports.Container,{position:[i/2,e/2],children:[a.index<0?null:l(h.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),l(h.exports.Text,{text:s,anchor:.5,position:[0,0],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),l(h.exports.Sprite,{image:Ls,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*n)).fill(null).map((u,f)=>l(h.exports.Sprite,{image:js,anchor:[0,.5],position:[(f-8)*16,0],width:16,height:32},f))})]})};var Xs="/Visualizer/assets/traP_logo.25c1c1d8.png";const Ks=new pe(Xs),Ne=50,Se=24,qs=({width:i,height:e,onComplete:t})=>{const[s,r]=v.exports.useState(0);return v.exports.useEffect(()=>{const n=setInterval(()=>{r(o=>o===Ne+Se*2?(clearInterval(n),setTimeout(()=>{t()},1),o):o+1)},1e3/Se)},[]),l(h.exports.Container,{position:[i/2,e/2],children:l(h.exports.Sprite,{texture:new M(Ks,new F(0,280*Math.min(s,Ne-1),1920,280)),alpha:1-Math.max(0,s-Ne-Se)/Se,anchor:.5,width:i*.9,height:i*.9/1920*280})})};class z{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}d(z,"startTime",-1),d(z,"_time",-1),d(z,"_deltaTime",-1),d(z,"prevTime",-1);class J extends xe{constructor(e,t){super(e,t);d(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof U||e instanceof J)&&e.update()}))}}class U extends xt{constructor(){super();d(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof U||e instanceof J)&&e.update()}))}}const Js=`
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
`;class $s extends J{constructor(){super(new $t(100),new re({uniforms:{radius:{value:100},colorA:{value:new E("#db2784")},colorB:{value:new E("#1c1330")},sunColorA:{value:new E("#db2784")},sunColorB:{value:new E("#f2ca2b")},sunPos:{value:new L(-100,0,0).applyEuler(new es(0,0,-Math.PI*.06))},time:{value:0}},side:gt,vertexShader:Js,fragmentShader:Zs}))}update(){super.update(),this.material.uniforms.time.value=z.time}}const ei=`
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
`,ti=`
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
`;class si extends J{constructor(){super(new De(100,100,50,50),new re({uniforms:{colorA:{value:new E(16729343)},colorB:{value:new E(1127423)},time:{value:0}},vertexShader:ei,fragmentShader:ti,side:yt}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=z.time}}class ii extends U{constructor(){super();this.add(new si),this.add(new $s)}start(){}update(){super.update()}}var ri=`uniform sampler2D face;
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
}`,oi="/Visualizer/assets/face.e8cae3d3.png";class ai extends J{constructor(){super(new De(4*.5,3*.5),new re({vertexShader:ni,fragmentShader:ri,uniforms:{face:{value:y.get(oi)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1.1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||y.get(Je)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=he.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=z.time)}}class We extends U{constructor(){super();d(this,"display");d(this,"user",null);const e=y.get(kt).clone();this.add(e),this.display=new ai,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){const t=W.getUser(e);t?(this.user=t,this.display.setIcon(t.icon)):this.user=null}start(){}update(){super.update()}}class ci extends U{constructor(){super();d(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,r)=>{const n=new We,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4,0,Math.cos(o)*4),n.scale.set(.4,.4,.4),n.lookAt(0,-2,0),this.add(n),n});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,r)=>{const n=new We,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),n.scale.set(.15,.15,.15),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,r)=>{const n=new We,o=r/e*Math.PI*2;return n.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),n.scale.set(.1,.1,.1),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t)}start(){W.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),C.on("submit",({userid:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),C.on("recalculateend",()=>{W.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class li extends At{constructor(){super(60,1,1,2e3);C.on("recalculatestart",()=>{he.to(this.position,2,{y:10})}),C.on("recalculateend",()=>{he.to(this.position,2,{y:4})})}start(){this.position.set(Math.sin(z.time*.1)*8,4,Math.cos(z.time*.1)*8)}update(){this.position.set(Math.sin(z.time*.1)*8,this.position.y,Math.cos(z.time*.1)*8),this.lookAt(0,0,0)}}const ui=`
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
`,di=`
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
`,hi=`
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
`,mi=i=>new re({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:di,vertexShader:ui,transparent:!0}),vi=i=>new re({uniforms:{colorA:{value:i},time:{value:0}},fragmentShader:fi,vertexShader:hi,transparent:!0,side:gt}),Ee=(i,e)=>{const t=i.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),i.material=[mi(e),vi(e)]},te=class extends U{constructor(e=0){super();d(this,"emergencyBlack");d(this,"emergencyRed");d(this,"offsetTime");d(this,"loopTime",2);var t,s;if(te.emergencyBlackGeom==null){const r=(t=y.get(Qe))==null?void 0:t.clone();te.emergencyBlackGeom=r.children[0].geometry}if(te.emergencyRedGeom==null){const r=(s=y.get(Qe))==null?void 0:s.clone();te.emergencyRedGeom=r.children[1].geometry}this.offsetTime=e,this.emergencyBlack=new xe(te.emergencyBlackGeom),this.emergencyRed=new xe(te.emergencyRedGeom),Ee(this.emergencyBlack,new E(0)),Ee(this.emergencyRed,new E(16711680)),this.add(this.emergencyBlack),this.add(this.emergencyRed)}start(){super.start()}update(){super.update();let e=Math.sin((z.time+this.offsetTime)/this.loopTime*Math.PI*2);e=e<0?0:e,this.scale.set(e,e,e),this.emergencyBlack.material[0].uniforms.time.value=z.time+this.offsetTime,this.emergencyRed.material[0].uniforms.time.value=z.time+this.offsetTime,this.emergencyBlack.material[1].uniforms.time.value=z.time+this.offsetTime,this.emergencyRed.material[1].uniforms.time.value=z.time+this.offsetTime}};let Pe=te;d(Pe,"emergencyBlackGeom"),d(Pe,"emergencyRedGeom");class wi extends U{constructor(){super();d(this,"size",30);d(this,"positionOffset",2/Math.sqrt(3));d(this,"offsetTimeUnit",.1);d(this,"emergencies",new Array(0));for(let e=0;e<this.size;e++){const t=e*(this.positionOffset*3/2)-Math.floor(this.size/2),s=e*this.offsetTimeUnit;for(let r=0;r<this.size;r++){const n=r*(Math.sqrt(3)*this.positionOffset)+(e%2==1?this.positionOffset*(Math.sqrt(3)/2):0)-Math.floor(this.size/2),o=new Pe(s);o.position.setX(n),o.position.setZ(t),this.emergencies.push(o),this.add(o)}}}}class Lt extends J{constructor(e){const t=e.clipBias!==void 0?e.clipBias:0,s=e.alpha!==void 0?e.alpha:1,r=e.time!==void 0?e.time:0,n=e.waterNormals!==void 0?e.waterNormals:null,o=e.sunDirection!==void 0?e.sunDirection:new L(.70707,.70707,0),a=new E(e.sunColor!==void 0?e.sunColor:16777215),c=new E(e.waterColor!==void 0?e.waterColor:8355711),u=e.eye!==void 0?e.eye:new L(0,0,0),f=e.distortionScale!==void 0?e.distortionScale:20,w=e.side!==void 0?e.side:zt,m=e.fog!==void 0?e.fog:!1,T=new ts,I=new L,G=new L,Z=new L,p=new Re,S=new L(0,0,-1),g=new rt,Q=new L,K=new L,ne=new rt,ce=new Re,B=new At,fe={uniforms:nt.merge([ot.fog,ot.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Re},sunColor:{value:new E(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new E(5592405)}}]),vertexShader:`
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
				}`},V=new re({fragmentShader:fe.fragmentShader,vertexShader:fe.vertexShader,uniforms:nt.clone(fe.uniforms),lights:!0,side:w,fog:m});V.uniforms.textureMatrix.value=ce,V.uniforms.alpha.value=s,V.uniforms.time.value=r,V.uniforms.normalSampler.value=n,V.uniforms.sunColor.value=a,V.uniforms.waterColor.value=c,V.uniforms.sunDirection.value=o,V.uniforms.distortionScale.value=f,V.uniforms.eye.value=u;const ye=new De(1e3,1e3);super(ye,V);d(this,"isWater",!0);this.onBeforeRender=function(Be,le,oe){if(G.setFromMatrixPosition(this.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld),p.extractRotation(this.matrixWorld),I.set(0,0,1),I.applyMatrix4(p),Q.subVectors(G,Z),Q.dot(I)>0)return;Q.reflect(I).negate(),Q.add(G),p.extractRotation(oe.matrixWorld),S.set(0,0,-1),S.applyMatrix4(p),S.add(Z),K.subVectors(G,S),K.reflect(I).negate(),K.add(G),B.position.copy(Q),B.up.set(0,1,0),B.up.applyMatrix4(p),B.up.reflect(I),B.lookAt(K),B.far=oe.far,B.updateMatrixWorld(),B.projectionMatrix.copy(oe.projectionMatrix),ce.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ce.multiply(B.projectionMatrix),ce.multiply(B.matrixWorldInverse),T.setFromNormalAndCoplanarPoint(I,G),T.applyMatrix4(B.matrixWorldInverse),g.set(T.normal.x,T.normal.y,T.normal.z,T.constant);const q=B.projectionMatrix;ne.x=(Math.sign(g.x)+q.elements[8])/q.elements[0],ne.y=(Math.sign(g.y)+q.elements[9])/q.elements[5],ne.z=-1,ne.w=(1+q.elements[10])/q.elements[14],g.multiplyScalar(2/g.dot(ne)),q.elements[2]=g.x,q.elements[6]=g.y,q.elements[10]=g.z+1-t,q.elements[14]=g.w,u.setFromMatrixPosition(oe.matrixWorld)}}}Lt.prototype.isWater=!0;var pi="/Visualizer/assets/Water_1_M_Normal.6d782546.jpg";class xi extends U{constructor(){super();d(this,"water");const e={textureWidth:512,textureHeight:512,waterNormals:new pt().load(pi,function(t){t.wrapS=t.wrapT=ss}),alpha:1,waterColor:4098510,distortionScale:2.7,fog:void 0,sunDirection:void 0,sunColor:void 0,clipBias:void 0,time:void 0,eye:void 0,side:zt};this.water=new Lt(e),this.water.rotation.x=-Math.PI/2,this.add(this.water)}start(){super.start()}update(){super.update(),this.water.material.uniforms.time.value=z.time}}class gi extends U{constructor(){super();d(this,"startY",-2);d(this,"endY",2);d(this,"emergencyAnimation");d(this,"waterAnimation");this.emergencyAnimation=new wi,this.waterAnimation=new xi,this.add(this.emergencyAnimation),this.add(this.waterAnimation)}start(){super.start(),this.visible=!1,this.emergencyAnimation.position.y=.5,this.position.y=this.startY,C.on("recalculatestart",()=>{this.visible=!0,he.to(this.position,1,{y:this.endY})}),C.on("recalculateend",()=>{he.to(this.position,1,{y:this.startY}).eventCallback("onComplete",()=>{this.visible=!1})})}update(){super.update()}}const yi=async()=>{const i=await Mt.initial();i.users.forEach(e=>{W.addUser(e)}),W.updateRanking(),Ie.startTime=new Date(i.startTime),Ie.endTime=new Date(i.endTime)};class Ai{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,r)=>{this.wires[r]=new Si(r)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const r=s.getWirePointsInt(e,t);this.wirePoints.forEach((n,o)=>{this.wirePoints[o]=r[o]==1}),this.wires.forEach(n=>{n.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class zi{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMax=2,this.counterMax=2,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class Si{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let r=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let n=0;n<3;n++){const o=t[n];if(this.canTo[o]!=-1&&o!=e){r=this.canTo[o];break}}return this.cantTo(),r==-1?(this.from=-1,-1):(this.to=r,r)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,r=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){r++;continue}if(a==this.from){s=r;continue}const c=this.canTo.findIndex(u=>u==a);c!=-1&&(t[c]=r)}const n=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?n[a]=o:n[a]=-1}),this.canTo=n}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const Xe=class{constructor(i,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=i,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.cells[t*i+s]=new Ai(s,t)}putParts(i,e,t){if(!this.canPutParts(i,e,t))return!1;const s=t.sizeY,r=t.sizeX,n=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<r;a++){const c=e+o,u=i+a,f=this.getCell(u,c);f.setParts(a,o,t),n.push(f)}return t.setPosition(i,e),this.partsCellDict[t.id]=n,this.parts.push(t),!0}getPartsCells(i){return i.id in this.partsCellDict?this.partsCellDict[i.id]:new Array(0)}getAllPartsCells(){const i=new Array(0);for(const e in this.partsCellDict)i.push(this.partsCellDict[e]);return i}extendWires(i){const e=i.x,t=i.y;i.getActiveWirePointsIndex().forEach(r=>{let n=e,o=t;const a=r%8,c=(r-a)/8,u=new zi(c);for(;r!=-1;){const[f,w]=this.indexConvertToAroundIndex(r);n+=Xe.dx[f],o+=Xe.dy[f];const m=this.getCell(n,o);if(m==null||(u.update(w,f),r=m.setWire(u),r==-1))break}})}convertToCircuitInfos(){const i=new Oe(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const r=new Array(0);s.getAllWires().forEach(n=>{n.isEmpty()||(n.isHole()?r.push([n.ind,n.to]):r.push([n.from,n.to]))}),r.length!=0&&t.push(new Et(s.x,s.y,r))}),this.parts.forEach(s=>{const[r,n]=s.getPosition();e.push(new It(r,n,s.isBig,s.problemCategory!=null?s.problemCategory:""))}),[i,e,t]}canPutParts(i,e,t){const s=t.sizeY,r=t.sizeX;for(let n=0;n<s;n++)for(let o=0;o<r;o++){const a=e+n,c=i+o,u=this.getCell(c,a);if(u==null)return!1;if(u.isParts())return!1}return!0}getCell(i,e){if(0<=e&&e<this.sizeY&&0<=i&&i<this.sizeX)return this.cells[e*this.sizeX+i]}indexConvertToAroundIndex(i){const e=i%8,t=(i-e)/8,r=((t+2)%4+1)*8-e-1;return[t,r]}};let ke=Xe;ke.dy=[1,0,-1,0];ke.dx=[0,1,0,-1];const j=class extends J{constructor(e){const t=j.createWireGeometry(e);super(t,j.material)}start(){}update(){super.update()}static createWireGeometry(e){let t=new is;const s=1,r=.25,n=.5,o=.25,a=16;console.log(e);const[c,u]=e;if(u==-1){const f=s*n/8/2,w=s*o/8/2,m=new rs(w,f,a);m.rotateX(-Math.PI/2);let[T,I]=this.wireIndexToPosition(c,s);const G=(c-c%8)/8;G==0||G==2?I-=Math.sign(I)*(f-w):T-=Math.sign(T)*(f-w);const Z=m.attributes.position.count;for(let p=0;p<Z;p++){const S=m.attributes.position.getX(p),g=m.attributes.position.getZ(p);m.attributes.position.setXYZ(p,S+T,0,g+I)}t=m}else{const[f,w]=j.wireIndexToPositionPair(c,s,r),[m,T]=j.wireIndexToPositionPair(u,s,r),I=new Float32Array([f[0],0,f[1],w[0],0,w[1],m[0],0,m[1],m[0],0,m[1],T[0],0,T[1],f[0],0,f[1]]);t.setAttribute("position",new ns(I,3))}return t}static wireIndexToPosition(e,t=1){const s=e%8,r=(e-s)/8,n=t/8,o=n*s-n*7/2,a=ke.dx[r]/2+j.sx[r]*o,c=ke.dy[r]/2+j.sy[r]*o;return[a,c]}static wireIndexToPositionPair(e,t=1,s=.5){const r=e%8,n=(e-r)/8,o=t/8,[a,c]=this.wireIndexToPosition(e,t),u=[a-j.sx[n]*s*o/2,c-j.sy[n]*s*o/2],f=[a+j.sx[n]*s*o/2,c+j.sy[n]*s*o/2];return[u,f]}};let ve=j;d(ve,"sx",[1,0,-1,0]),d(ve,"sy",[0,-1,0,1]),d(ve,"material",new St({color:16777215}));class se{}d(se,"cpuPath",Ft),d(se,"partsPath",{Newbie:Dt,PPC:Bt,Web:Ut,Crypto:Rt,Binary:Ht,Pwn:Nt,Misc:Wt,Shell:Gt,Forensics:Vt,OSINT:""}),d(se,"partsBigPath",{Newbie:"",PPC:"",Web:"",Crypto:"",Binary:"",Pwn:"",Misc:"",Shell:"",Forensics:"",OSINT:""});class Ci extends U{constructor(){super();d(this,"app");d(this,"texture");d(this,"nameText");d(this,"titleText");d(this,"needsUpdate",!1);const e=1024,t=48;this.app=new os({width:e,height:t,autoStart:!1,backgroundAlpha:0}),this.nameText=new at("string"),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new at("string"),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const s=new xe(new De(e,t),new St({map:null,transparent:!0}));s.position.z=1e-4;const r=s.clone();r.rotation.y=Math.PI,r.position.z=-1e-5,this.texture=new as(this.app.view),s.material.map=this.texture,r.material.map=this.texture,this.add(s,r)}redraw(e,t,s){const r=s.getStyle(),n=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style=new O({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:r,fontSize:20,lineJoin:"round",stroke:n,strokeThickness:2}),this.nameText.style.fill=r,this.nameText.style.stroke=n,this.titleText.text=t,this.titleText.style=new O({fontFamily:"GNUUnifont",dropShadowAngle:6.7,dropShadowDistance:3,fill:r,fontSize:20,lineJoin:"round",stroke:n,strokeThickness:2}),this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class bi extends U{constructor(){super();d(this,"question");d(this,"exclamation");d(this,"submissionInfo");d(this,"objects");this.objects=new xt,this.question=y.get(Ye).children[0],this.exclamation=y.get(Ye).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,Ee(this.question,new E(16711680)),Ee(this.exclamation,new E(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new Ci),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){C.on("submit",e=>{const t=he.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=W.getUser(e.userid))==null?void 0:s.displayName,e.title,new E(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:ze.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:ze.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new E(65280))}),t.to(this.objects.position,.15,{z:0,ease:ze.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:ze.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*z.deltaTime*.3,this.position.y=Math.sin(z.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=z.time,this.exclamation.material[0].uniforms.time.value=z.time,this.question.material[1].uniforms.time.value=z.time,this.exclamation.material[1].uniforms.time.value=z.time}}class Pi extends U{constructor(){super();d(this,"objectPool",{});this.add(new bi)}start(){super.start(),this.setPrefabs(),this.position.add(new L(0,.1,0)),C.on("recalculatestart",()=>{}),C.on("recalculateend",()=>{this.removeAllObject(),this.createCircuit()}),this.createObject("CPU").position.set(-.5,0,-.5)}update(){super.update()}createCircuit(){const[e,t,s]=we.getCircuitInfo();console.log(e,t,s);const r=-e.sizeX/2-.5,n=0,o=-e.sizeY/2-.5;t.forEach(a=>{let c="";a.category==""?c="CPU":a.isBig?c="Big"+a.category:c=a.category;const u=this.createObject(c);u!=null&&u.position.set(a.x+r,0+n,a.z+o)}),s.forEach(a=>{a.wires.forEach(c=>{const u=this.createObject("Wire"+c.toString());u!=null&&u.position.set(a.x+r,0+n,a.z+o)})})}setPrefabs(){const e=y.get(se.cpuPath);e.visible=!1,this.objectPool.CPU=[[e],1],this.add(e);for(const s in se.partsBigPath){const r=y.get(se.partsBigPath[s]);r!=null&&(r.visible=!1,this.objectPool["Big"+s]=[[r],1],this.add(r))}for(const s in se.partsPath){const r=y.get(se.partsPath[s]);r!=null&&(r.visible=!1,this.objectPool[s]=[[r],1],this.add(r))}const t=s=>{const r=new ve(s),n=new xe(r.geometry,r.material);n.visible=!1,this.objectPool["Wire"+s.toString()]=[[n],1],this.add(n)};for(let s=0;s<32;s++){let r=[s,-1];t(r);const n=s%8,o=(s-n)/8;[15-n,23-n,31-n].forEach(c=>{const u=((c+8*o)%32+32)%32;r=[s,u],t(r)})}}createObject(e){if(this.objectPool[e]==null)return;const[t,s]=this.objectPool[e];let r;s>=t.length?(r=t[0].clone(),t.push(r),this.add(r)):r=t[s],r.visible=!0;const n=s+1;return this.objectPool[e]=[t,n],r}removeAllObject(){for(const e in this.objectPool)this.objectPool[e][0].forEach(t=>t.visible=!1),this.objectPool[e][1]=1}}const ft={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `},mt={vertexShader:`
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
  `};class Ti extends cs{constructor(e,t,s,r){super();d(this,"camera");d(this,"scene");d(this,"material");d(this,"depthMaterial");d(this,"depthTexture");d(this,"oldClearColor");d(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new ls(s,r),this.depthMaterial=new re({uniforms:{progress:{value:0}},side:yt,vertexShader:mt.vertexShader,fragmentShader:mt.fragmentShader}),this.material=new re({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:ft.vertexShader,fragmentShader:ft.fragmentShader}),this.oldClearColor=new E,this.fsQuad=new us(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const r=e.getClearAlpha(),n=e.autoClear;e.autoClear=!1,z.time*.05&&(this.depthMaterial.uniforms.progress.value=z.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,z.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(r),e.autoClear=n}}const et=class{constructor(){d(this,"renderer",null);d(this,"camera",null);d(this,"composer",null);d(this,"_tick",null);d(this,"isLoaded",!1);d(this,"isStartCalled",!1);d(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new et,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new ds({canvas:e,antialias:!0});t.setClearColor(new E(1114129));const s=new hs(t);this.composer=s;const r=new li,n=new fs;n.add(new ii,new ci,new gi,new Pi),Ns(),C.on("start",()=>{console.log("start ctf")}),C.on("end",()=>{console.log("end ctf")}),C.on("recalculatestart",async()=>{console.log("recalculatestart")}),C.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new ms(n,r));const o=new Ti(n,r,e.width,e.height);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(z.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),z.update(performance.now()),r.update(),n.children.map(c=>{(c instanceof U||c instanceof J)&&c.update()}),s.render())},this.renderer=t,this.camera=r,yi().then(()=>{this.isLoaded=!0,Ws()})}start(){this.isStartCalled=!0}};let ie=et;d(ie,"instance");const Mi=({width:i,height:e})=>{const t=v.exports.useRef(null),[s,r]=v.exports.useState({width:i,height:e}),[n,o]=v.exports.useState(new M(new pe)),[a,c]=v.exports.useState("loading");h.exports.useTick(()=>{n.update();const m=ie.getInstance().tick;m&&m()}),v.exports.useEffect(()=>{ie.getInstance().resize(i,e),n.update(),r({width:i,height:e})},[i,e]);const u=()=>{const m=document.createElement("canvas");document.body.appendChild(m),t.current=m,ie.getInstance().setup(m),ie.getInstance().resize(i,e),o(new M(pe.from(m))),c("splashscreen")},f=()=>{ie.getInstance().start(),c("visualizer")};return l(X,{children:(m=>m==="loading"?l(Qs,{width:i,height:e,loadedHandler:u}):m==="splashscreen"?l(qs,{width:i,height:e,onComplete:f}):l(h.exports.Sprite,{texture:n,width:s.width,height:s.height}))(a)})},Ge=i=>("00"+i).slice(-2),Ii=({x:i,y:e,width:t,height:s})=>{const[r,n]=v.exports.useState(""),[o,a]=v.exports.useState("");return h.exports.useTick(()=>{const c=new Date;if(n(`${c.getHours()}:${Ge(c.getMinutes())}:${Ge(c.getSeconds())}`),!ie.getInstance().isInitialized)return;const u=Math.ceil((Ie.endTime.getTime()-c.getTime())/1e3/60);a(`\u6B8B\u308A: ${Math.floor(u/60)}\u6642\u9593${Ge(u%60)}\u5206`)}),D(h.exports.Container,{mask:v.exports.useMemo(()=>new Ct().drawRect(i,e,t,s),[i,e,t,s]),children:[l(h.exports.Text,{text:r,anchor:.5,position:[t/2,s/2],style:new O({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),l(h.exports.Text,{text:o,anchor:.5,position:[t/2,s/2-50],style:new O({align:"right",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},Ei=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,ki=({x:i,y:e,width:t,height:s})=>l(h.exports.Container,{mask:v.exports.useMemo(()=>new Ct().drawRect(i,e,t,s),[i,e,t,s]),children:l(h.exports.Text,{text:Ei,anchor:0,position:[0,0],style:new O({align:"left",fontFamily:"GNUUnifont, Roboto, Helvetica, sans-serif",fontSize:32,lineHeight:43,fill:"#000000"})})}),Fe=class{static initialize(){if(Fe.sheet===null){const e=location.pathname.replace(/index\.html.*/gm,"");ct.shared.add("uisprites",`${e}sprites/spritesheet.json`).load(()=>{var t;Fe.sheet=(t=ct.shared.resources.uisprites.spritesheet)!=null?t:null,this.loaded=!0,this.onLoadFunc&&this.onLoadFunc()})}}static get(e){return this.sheet?this.sheet.textures[e]:null}static onLoad(e){this.loaded?e():this.onLoadFunc=e}};let k=Fe;d(k,"sheet",null),d(k,"loaded",!1),d(k,"onLoadFunc",null);k.initialize();const Fi={Component:null,icon:()=>k.get("Clock.png"),title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},jt={visualizer:{Component:Mi,icon:()=>k.get("Visualizer.png"),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:Ii,icon:()=>k.get("Clock.png"),title:"Clock.exe",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:ki,icon:()=>k.get("ReadMe.png"),title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},me=H/5,Di=({id:i,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:r,starting:n}}=v.exports.useContext(Y),o=v.exports.useRef(0),a=()=>{const f=o.current;if(o.current=performance.now(),o.current-f>600)return;const w=jt[i];s[i]||!w||r(i,w)},c=v.exports.useCallback(f=>{f.clear(),n===i&&(f.beginFill(11184895,.5),f.drawRect(0,0,H,H))},[n]),u=e.icon();return D(h.exports.Container,{position:t,interactive:!0,click:a,children:[l(h.exports.Graphics,{draw:c}),u?l(h.exports.Sprite,{texture:u,position:[me/2,0],width:H-me,height:H-me}):null,l(h.exports.Text,{text:e.title,anchor:[.5,0],position:[H/2,H-me],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:me,fill:"#000"})})]})};var Bi="/Visualizer/assets/BackGround.6ba2a63c.png";const Ve=12,Ui=()=>{const{width:i,height:e}=v.exports.useContext(Y),t=Math.max(1,Math.floor((e-N-(H+Ve))/H));return D(X,{children:[l(h.exports.Sprite,{image:Bi,anchor:0,x:0,y:0,width:i,height:e-N}),l(h.exports.Container,{position:[H/2,H/2],children:Object.entries(jt).map(([s,r],n)=>l(Di,{id:s,iconInfo:r,position:[Math.floor(n/t)*(H+Ve),n%t*(H+Ve)]},s))})]})},Ri=(i,e,t,s)=>{const r=b,n=16,o=[0,0],a=[0,0];let c="none";const u={x:0,y:0};let f=!1,w="pointer",m={x:0,y:0,width:0,height:0};return{mouseDownHandler:p=>S=>{u.x=S.data.global.x,u.y=S.data.global.y,p.fullscreen?m={x:0,y:0,width:t,height:s-N}:m=p.rect,e.focus(i),!(o[0]===0&&o[1]===0&&u.y-m.y>r)&&(a[0]=o[0],a[1]=o[1],c=o[0]===0&&o[1]===0?"move":"scale",e.update(i,P(A({},p),{rect:m,fullscreen:!1})))},mouseMoveHandler:p=>S=>{if(c!=="none")if(c==="move")w="grabbing",e.update(i,P(A({},p),{rect:{x:m.x+S.offsetX-u.x,y:m.y+S.offsetY-u.y,width:p.rect.width,height:p.rect.height}}));else{const g=A({},m),Q=200,K=200;a[0]===1?g.width=Math.max(Q,m.width-u.x+S.offsetX):a[0]===-1&&(g.width=Math.max(Q,u.x+m.width-S.offsetX),g.x=Math.min(m.x+m.width-Q,m.x-u.x+S.offsetX)),a[1]===1?g.height=Math.max(K,m.height-u.y+S.offsetY):a[1]===-1&&(g.height=Math.max(K,u.y+m.height-S.offsetY),g.y=Math.min(m.y+m.height-K,m.y-u.y+S.offsetY)),g.width=Math.max(200,g.width),g.height=Math.max(b,g.height),e.update(i,P(A({},p),{rect:g}))}},mouseUpHandler:()=>()=>{c="none"},cursorMouseMoveHandler:p=>S=>{const g=p.fullscreen?{x:0,y:0,width:t,height:s-N}:p.rect;S.data.global.x-g.x<n?o[0]=-1:g.x+g.width-S.data.global.x<n?o[0]=1:o[0]=0,S.data.global.y-g.y<n?o[1]=-1:g.y+g.height-S.data.global.y<n?o[1]=1:o[1]=0,o[0]*o[1]===1?w="nwse-resize":o[0]*o[1]===-1?w="nesw-resize":o[0]!==0?w="ew-resize":o[1]!==0?w="ns-resize":S.data.global.y-g.y<r?w="grab":w="default"},mouseOverHandler:()=>{f=!0},mouseOutHandler:()=>{f=!1},getCursor:()=>f?w:""}};let Ze="";const _t=()=>Ze,Hi=i=>{Ze=i},Ni=()=>{Ze=""},Ot=({width:i,height:e,bgColor:t=16777215})=>{const s=v.exports.useCallback(r=>{r.clear(),r.beginFill(t),r.drawRect(0,0,i,e),r.endFill()},[i,e]);return l(h.exports.Graphics,{draw:s})};var Wi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const $=new pe(Wi),ee={topLeft:new M($,new F(0,0,6,26)),top:new M($,new F(6,0,3,26)),topRight:new M($,new F(9,0,6,26)),right:new M($,new F(9,26,6,3)),bottomRight:new M($,new F(9,29,6,6)),bottom:new M($,new F(6,29,3,6)),bottomLeft:new M($,new F(0,29,6,6)),left:new M($,new F(0,26,6,3))},Gi=({width:i,height:e})=>D(X,{children:[l(h.exports.Sprite,{texture:ee.topLeft,position:[0,0],width:x,height:b}),l(h.exports.Sprite,{texture:ee.top,position:[x,0],width:i-x*2,height:b}),l(h.exports.Sprite,{texture:ee.topRight,position:[i-x,0],width:x,height:b}),l(h.exports.Sprite,{texture:ee.right,position:[i-x,b],width:x,height:e-b-x}),l(h.exports.Sprite,{texture:ee.bottomRight,position:[i-x,e-x],width:x,height:x}),l(h.exports.Sprite,{texture:ee.bottom,position:[x,e-x],width:i-x*2,height:x}),l(h.exports.Sprite,{texture:ee.bottomLeft,position:[0,e-x],width:x,height:x}),l(h.exports.Sprite,{texture:ee.left,position:[0,b],width:x,height:e-b-x})]}),_=()=>(b-Ce*2)*.9,ue=16/14,Vi=({onKill:i,onMinimize:e,onMaximize:t})=>{const s=[];let r=0,n=0;const o=k.get("WindowButtonClose.png"),a=k.get("WindowButtonMaximize.png"),c=k.get("WindowButtonMinimize.png");return!o||!a||!c?l(X,{children:null}):(i&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:o,width:_()*ue,height:_(),position:[-r*_()*ue,0],interactive:!0,click:i},"kill")),r++,n=-2*ge),t&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:a,width:_()*ue,height:_(),position:[-r*_()*ue+n,0],interactive:!0,click:t},"maximize")),r++),e&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],texture:c,width:_()*ue,height:_(),position:[-r*_()*ue+n,0],interactive:!0,click:e},"minimize")),r++),l(X,{children:s}))},Yt=i=>i-x*2,de=i=>i-b-x,$e=({icon:i,width:e,height:t,title:s,isActive:r=!0,onMinimize:n,onMaximize:o,onKill:a,children:c})=>{const u=k.get(r?"WindowTitleBarActive.png":"WindowTitleBarInactive.png");return D(X,{children:[D(h.exports.Container,{position:[0,0],children:[l(Gi,{width:e,height:t}),u?l(h.exports.Sprite,{texture:u,width:e-x*2,height:b-Ce*2,position:[x,Ce]}):null,i?l(h.exports.Sprite,{texture:i,width:_(),height:_(),position:[x+2,Ce]}):null,l(h.exports.Text,{text:s,anchor:[0,.5],position:[x+2+(i?_()+2:0),b/2],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:b*.5,fill:"#000"})}),l(h.exports.Container,{position:[e-x,b/2],children:l(Vi,{onKill:a,onMaximize:o,onMinimize:n})})]}),D(h.exports.Container,{position:[x,b],children:[c?l(Ot,{width:e-x*2,height:t-b-x}):null,c]})]})},Li=({id:i,windowInfo:e,focus:t})=>{const{width:s,height:r}=v.exports.useContext(Y),{title:n,visible:o,fullscreen:a,Component:c}=e,[u,f]=v.exports.useState(!1),w=a?{x:0,y:0,width:s,height:r-N}:e.rect,{windowSettings:m}=v.exports.useContext(Y),T=v.exports.useRef(e),I=()=>{m.update(i,P(A({},e),{fullscreen:!e.fullscreen}))},G=()=>{m.minimize(i)},Z=()=>{m.kill(i)};v.exports.useEffect(()=>{T.current=e},[e]);const[p,S]=v.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return v.exports.useEffect(()=>{const g=setTimeout(()=>{f(!0)},1500),{mouseDownHandler:Q,mouseMoveHandler:K,mouseUpHandler:ne,cursorMouseMoveHandler:ce,mouseOutHandler:B,mouseOverHandler:fe,getCursor:V}=Ri(i,m,s,r);S({mouseDownHandler:Q,cursorMouseMoveHandler:ce,mouseOverHandler:fe,mouseOutHandler:B,getCursor:V});const ye=oe=>{K(T.current||e)(oe)},Be=()=>{ne()()},le=document.getElementById("pixicanvas");if(!!le)return le.addEventListener("mousemove",ye),le.addEventListener("mouseup",Be),()=>{clearTimeout(g),le.removeEventListener("mousemove",ye),le.removeEventListener("mouseup",Be)}},[]),h.exports.useTick(()=>{p.getCursor&&p.getCursor()&&!_t()&&Hi(p.getCursor())}),l(h.exports.Container,{position:o?[w.x,w.y]:[w.x,-99999],interactive:!0,mousedown:p.mouseDownHandler?p.mouseDownHandler(e):()=>"",mousemove:p.cursorMouseMoveHandler?p.cursorMouseMoveHandler(e):()=>"",mouseover:p.mouseOverHandler?p.mouseOverHandler:()=>"",mouseout:p.mouseOutHandler?p.mouseOutHandler:()=>"",children:l($e,{width:w.width,height:w.height,title:n,icon:e.icon(),isActive:t,onMinimize:G,onMaximize:I,onKill:i==="visualizer"?void 0:Z,children:u?c?l(c,{x:w.x+x,y:w.y+b,width:Yt(w.width),height:de(w.height)}):l(h.exports.Container,{}):null})})};var ji="/Visualizer/assets/youareanidiot_black.591803b6.png",_i="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Oi=({width:i,height:e,trans:t})=>{const s=i*.7,r=s/1576*994,n=v.exports.useRef(null),o=v.exports.useRef([0,0]),a=v.exports.useRef([0,0]);return v.exports.useEffect(()=>{const c=Math.PI*Math.random();a.current=[Math.cos(c)*90,Math.sin(c)*90]},[]),h.exports.useTick(c=>{if(!n.current||!o.current||!a.current)return;a.current[1]+=98*c/30;const u=[o.current[0]+a.current[0]*c/30,o.current[1]+a.current[1]*c/30];u[0]<0?(u[0]=0,a.current[0]*=-1):u[0]>i-s?(u[0]=i-s,a.current[0]*=-1):u[1]>Math.max(1,e-r)&&(u[1]=Math.max(1,e-r),a.current[1]*=-1),o.current=u,n.current.position.set(u[0],u[1])}),l(h.exports.Container,{ref:n,children:l($e,{width:s,height:r,title:"Hahahahahaha",children:l(h.exports.Sprite,{image:t?ji:_i,width:Yt(s),height:de(r)})})})},Yi=({width:i,height:e})=>{const[t,s]=v.exports.useState(!1);return h.exports.useTick(()=>{const r=performance.now();s(Math.floor(r/500)%2==0)}),l(X,{children:new Array(10).fill(null).map((r,n)=>l(Oi,{width:i,height:e,index:n,trans:t},n))})},Qi=()=>{const{width:i,height:e,windowSettings:{windows:t,windowIndices:s}}=v.exports.useContext(Y),[r,n]=v.exports.useState(!1);return v.exports.useEffect(()=>{const o=()=>{const c=new Date().getTime();Ie.endTime.getTime()<c&&n(!0)},a=()=>{n(!0)};return C.on("initialized",o),C.on("end",a),()=>{C.off("initialized",o),C.off("end",a)}},[]),D(X,{children:[l(Ui,{}),s.map((o,a)=>l(Li,{windowInfo:t[o]||Fi,id:o,focus:a===s.length-1},o)),r?l(Yi,{width:i,height:e}):null]})},Xi=({id:i,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:r,minimize:n}}=v.exports.useContext(Y),o=t[i];if(!o)return l(X,{children:null});const{title:a,visible:c}=o,u=c?k.get("TaskbarButtonActive.png"):k.get("TaskbarButtonInactive.png"),f=o.icon();return D(h.exports.Container,{position:[e*lt,N/2],interactive:!0,click:()=>s===i?n(i):r(i),children:[u?l(h.exports.Sprite,{width:lt*.9,height:N*.9,texture:u,anchor:[0,.5],position:[0,0]}):null,f?l(h.exports.Sprite,{width:N*.6,height:N*.6,texture:f,anchor:[0,.5],position:[7,0]}):null,l(h.exports.Text,{text:a,anchor:[0,.5],position:[14+N*.6,0],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:N*.5*.8,fill:"#000"})})]})},Ki=()=>{const{width:i,height:e,windowSettings:{windowStack:t}}=v.exports.useContext(Y),s=k.get("WindowTitleBarActive.png");return D(h.exports.Container,{position:[0,e-N],children:[s?l(h.exports.Sprite,{texture:s,width:i,height:N,anchor:0,position:[0,0]}):null,l(h.exports.Container,{position:[200,0],children:t.map((r,n)=>l(Xi,{id:r,index:n},r))})]})};var qi=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class Ji extends qe{constructor(){super(void 0,qi,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var Zi=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class $i extends qe{constructor(){super(void 0,Zi,{dimensions:[0,0]})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,r)}}var er=`precision mediump float;

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
}`;class tr extends qe{constructor(){super(void 0,er,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,r){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,r)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const sr="_main_11f2u_1";var ir={main:sr};const rr=()=>{const{width:i,height:e}=v.exports.useContext(Y),[t,s]=v.exports.useState(!0),r={width:500,height:180,left:i*.5-250,top:e*.5-90};return t?D(h.exports.Container,{children:[l(Ot,{bgColor:0,width:i,height:e}),l(h.exports.Container,{position:[r.left,r.top],children:D($e,{width:r.width,height:r.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[l(h.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:b*.5,fill:"#000"})}),l(h.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[de(r.width)-305,de(r.height)-5],interactive:!0,click:()=>{dt(1),s(!1),Me("mousedown"),Me("mouseup"),Le("hdd")},style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:b*.5,fill:"#000"})}),l(h.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[de(r.width)-5,de(r.height)-5],interactive:!0,click:()=>{dt(0),s(!1)},style:new O({align:"center",fontFamily:'GNUUnifont, "Source Sans Pro", Helvetica, sans-serif',fontSize:b*.5,fill:"#000"})})]})})]}):null},vt={default:"CursorDefault.png","ns-resize":"CursorNsResize.png","ew-resize":"CursorEwResize.png","nesw-resize":"CursorNeswResize.png","nwse-resize":"CursorNwseResize.png",grab:"CursorGrab.png",grabbing:"CursorGrabbing.png",wait:"CursorWait.png"},wt=i=>{let e=i?"wait":_t();return vt[e]||(e="default"),k.get(vt[e])},nr=()=>{const i=v.exports.useRef(null),{windowSettings:{starting:e}}=v.exports.useContext(Y),t=h.exports.useApp();h.exports.useTick(()=>{const r=t.renderer.plugins.interaction.mouse.global,n=wt(e);i.current&&n&&(i.current.texture=n,i.current.x=r.x,i.current.y=r.y,Ni())});const s=wt("default");return s?l(h.exports.Sprite,{ref:i,anchor:.5,width:ut,height:ut,texture:s}):l(X,{})},or=({children:i,Context:e,render:t})=>l(e.Consumer,{children:s=>t(l(e.Provider,{value:s,children:i}))}),ar=t=>{var s=t,{children:i}=s,e=it(s,["children"]);const{width:r,height:n}=v.exports.useContext(Y);return l(or,{Context:Y,render:o=>l(h.exports.Stage,P(A({width:r,height:n},e),{children:o})),children:i})},cr=h.exports.withFilters(h.exports.Container,{hex:tr,bloom:vs,colorshift:ws,lensDistortion:Ji,visnetting:$i}),lr=()=>{const i=()=>{Me("mousedown")},e=()=>{Me("mouseup")},[t,s]=v.exports.useState(!1),r=h.exports.useApp();return v.exports.useEffect(()=>{r.ticker.maxFPS=30,k.onLoad(()=>{s(!0)})},[]),t?D(cr,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:[D(h.exports.Container,{mousedown:i,mouseup:e,interactive:!0,children:[l(Ki,{}),l(Qi,{}),l(rr,{})]}),l(nr,{})]}):l(X,{})},ur=()=>(v.exports.useEffect(()=>{document.body.style.cursor="none"},[]),l(Cs,{children:l("main",{className:ir.main,children:l(ar,{id:"pixicanvas",children:l(lr,{})})})}));ps.render(l(xs.StrictMode,{children:l(ur,{})}),document.getElementById("root"));
