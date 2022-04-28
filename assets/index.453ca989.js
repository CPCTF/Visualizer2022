var Ut=Object.defineProperty,Vt=Object.defineProperties;var Ot=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Ie=(r,e,t)=>e in r?Ut(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,y=(r,e)=>{for(var t in e||(e={}))$e.call(e,t)&&Ie(r,t,e[t]);if(pe)for(var t of pe(e))et.call(e,t)&&Ie(r,t,e[t]);return r},P=(r,e)=>Vt(r,Ot(e));var tt=(r,e)=>{var t={};for(var s in r)$e.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&pe)for(var s of pe(r))e.indexOf(s)<0&&et.call(r,s)&&(t[s]=r[s]);return t};var d=(r,e,t)=>(Ie(r,typeof e!="symbol"?e+"":e,t),t);import{r as f,j as Ne,T as dt,G as jt,F as Nt,m as Lt,B as ae,a as z,R as I,b as h,c as j,M as me,d as ht,S as Jt,e as se,C as E,V as H,E as Xt,f as wt,P as be,D as At,g as de,h as ft,i as mt,k as Kt,l as Ge,n as st,U as it,o as rt,p as qt,q as vt,s as _t,t as $t,u as es,A as ts,v as nt,w as ss,x as ge,y as is,W as rs,z as ns,H as os,I as as,J as cs,K as ls,L as pt,N as Le,O as us,Q as ds,X as hs,Y as ws}from"./vendor.3e82da6d.js";const As=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}};As();const Je=1.5,Q=64*Je,ot=200*Je,p=6*Je,ye=p/3*2,B=p/6*26,Z=B*1.2;let gt=0;const at=r=>{gt=r},De=()=>gt;var fs="/Visualizer/assets/clickup.207be81c.mp3",ms="/Visualizer/assets/clickdown.92e482ed.mp3",vs="/Visualizer/assets/hdd.670515d8.mp3";const F={mouseup:new Audio(fs),mousedown:new Audio(ms),hdd:new Audio(vs)},ze=r=>{De()!==0&&(!F[r]||(F[r].paused||(F[r].pause(),F[r].currentTime=0),F[r].volume=De(),F[r].play()))},We=r=>{De()!==0&&(!F[r]||(F[r].paused||(F[r].pause(),F[r].currentTime=Math.min(F[r].currentTime,5)),F[r].volume=De(),F[r].play()))},ps=()=>{const[r,e]=f.exports.useState(()=>({width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4),windowSettings:{windows:{},windowIndices:[],windowStack:[],focused:"",starting:"",update:(s,i)=>{e(n=>{if(n.windowSettings.starting)return n;if(!n.windowSettings.windowIndices.includes(s))return We("hdd"),setTimeout(()=>{e(u=>{const A=y({},u.windowSettings.windows);A[s]=i;const m=[...u.windowSettings.windowIndices],w=[...u.windowSettings.windowStack];return m.includes(s)||(w.push(s),m.push(s)),P(y({},u),{windowSettings:P(y({},u.windowSettings),{windows:A,windowIndices:m,windowStack:w,starting:""})})})},2e3),P(y({},n),{windowSettings:P(y({},n.windowSettings),{starting:s})});const o=y({},n.windowSettings.windows);o[s]=i;const a=[...n.windowSettings.windowIndices],c=[...n.windowSettings.windowStack];return a.includes(s)||(c.push(s),a.push(s),We("hdd")),P(y({},n),{windowSettings:P(y({},n.windowSettings),{windows:o,windowIndices:a,windowStack:c})})})},kill:s=>{e(i=>{const n=y({},i.windowSettings.windows);delete n[s];const o=i.windowSettings.windowIndices.filter(A=>A!==s),a=i.windowSettings.windowStack.filter(A=>A!==s),c=o.filter(A=>{var m;return(m=n[A])==null?void 0:m.visible}),u=c.length>0?c[c.length-1]:"";return P(y({},i),{windowSettings:P(y({},i.windowSettings),{windows:n,windowIndices:o,windowStack:a,focused:u})})})},focus:s=>{e(i=>{const n=y({},i.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=P(y({},o),{visible:!0});const a=i.windowSettings.windowIndices.filter(c=>c!==s);return a.push(s),P(y({},i),{windowSettings:P(y({},i.windowSettings),{windows:n,windowIndices:a,focused:s})})})},minimize:s=>{e(i=>{const n=y({},i.windowSettings.windows),o=n[s];if(!o)throw new Error("invalid id");n[s]=P(y({},o),{visible:!1});const a=i.windowSettings.windowIndices.filter(u=>{var A;return u!==s&&((A=n[u])==null?void 0:A.visible)}),c=a.length>0?a[a.length-1]:"";return P(y({},i),{windowSettings:P(y({},i.windowSettings),{windows:n,focused:c})})})}}}));return[r,()=>{e(s=>P(y({},s),{width:Math.min(window.innerWidth,window.innerHeight*4/3),height:Math.min(window.innerHeight,window.innerWidth*3/4)}))}]},l=Ne.exports.jsx,k=Ne.exports.jsxs,ie=Ne.exports.Fragment,N=f.exports.createContext({width:0,height:0,windowSettings:{windows:{},windowIndices:[],windowStack:[],starting:"",focused:"",update:()=>"",kill:()=>"",focus:()=>"",minimize:()=>""}}),gs=({children:r})=>{const[e,t]=ps();return f.exports.useEffect(()=>(window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[]),l(N.Provider,{value:e,children:r})},xs="ws://cpctf.space/ws/visualizer",xt=["Newbie","PPC","Web","Crypto","Binary","Pwn","Misc","Shell","Forensics","OSINT"];var Xe="/Visualizer/assets/testicon.8f219171.jpg",ys=[{class:"basis",sizeX:20,sizeY:20},{class:"parts",x:10,z:10,isBig:!1,category:""},{class:"parts",x:19,z:12,isBig:!1,category:"Newbie"},{class:"parts",x:9,z:15,isBig:!1,category:"Pwn"},{class:"parts",x:9,z:2,isBig:!1,category:"PPC"},{class:"parts",x:3,z:9,isBig:!1,category:"Crypto"},{class:"wires",x:9,z:0,wires:[[15,-1]]},{class:"wires",x:10,z:0,wires:[[7,24]]},{class:"wires",x:12,z:0,wires:[[15,-1]]},{class:"wires",x:13,z:0,wires:[[7,24]]},{class:"wires",x:15,z:0,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:16,z:0,wires:[[5,26],[6,25],[7,24]]},{class:"wires",x:17,z:0,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1]]},{class:"wires",x:7,z:1,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:8,z:1,wires:[[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25],[15,24]]},{class:"wires",x:9,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:10,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:11,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:12,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:13,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:14,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:15,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1]]},{class:"wires",x:16,z:1,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,18],[6,17],[7,16]]},{class:"wires",x:17,z:1,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18]]},{class:"wires",x:8,z:2,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0]]},{class:"wires",x:17,z:2,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,9],[31,0]]},{class:"wires",x:18,z:2,wires:[[30,1]]},{class:"wires",x:8,z:3,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9],[23,8]]},{class:"wires",x:17,z:3,wires:[[23,0],[24,-1],[25,-1],[26,-1],[27,-1],[28,-1],[29,-1],[30,-1],[31,-1]]},{class:"wires",x:18,z:3,wires:[[22,-1]]},{class:"wires",x:7,z:4,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:8,z:4,wires:[[13,26],[14,25],[15,24]]},{class:"wires",x:9,z:4,wires:[[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,26],[22,25],[23,24]]},{class:"wires",x:10,z:4,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:11,z:4,wires:[[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:12,z:4,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:13,z:4,wires:[[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:14,z:4,wires:[[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:15,z:4,wires:[[16,7],[17,6],[18,5],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:16,z:4,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:17,z:4,wires:[[23,-1]]},{class:"wires",x:8,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1]]},{class:"wires",x:9,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[16,31],[17,30],[18,29],[19,28],[20,27]]},{class:"wires",x:10,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:11,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:12,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:13,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:14,z:5,wires:[[8,-1],[9,-1],[10,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25]]},{class:"wires",x:15,z:5,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29]]},{class:"wires",x:16,z:5,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:5,z:7,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:6,z:7,wires:[[5,26],[6,25],[7,24]]},{class:"wires",x:7,z:7,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1]]},{class:"wires",x:1,z:8,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:2,z:8,wires:[[6,-1],[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25],[15,24]]},{class:"wires",x:3,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:4,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:5,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1]]},{class:"wires",x:6,z:8,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,18],[6,17],[7,16]]},{class:"wires",x:7,z:8,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18],[6,17]]},{class:"wires",x:9,z:8,wires:[[15,-1]]},{class:"wires",x:10,z:8,wires:[[7,24]]},{class:"wires",x:12,z:8,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1]]},{class:"wires",x:2,z:9,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,17],[15,16]]},{class:"wires",x:7,z:9,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:8,z:9,wires:[[7,-1],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[31,0]]},{class:"wires",x:9,z:9,wires:[[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25]]},{class:"wires",x:10,z:9,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:11,z:9,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24]]},{class:"wires",x:12,z:9,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18]]},{class:"wires",x:13,z:9,wires:[[6,-1]]},{class:"wires",x:2,z:10,wires:[[8,7],[9,6],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10]]},{class:"wires",x:7,z:10,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:8,z:10,wires:[[8,-1],[23,-1],[31,16]]},{class:"wires",x:9,z:10,wires:[[0,31],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,16]]},{class:"wires",x:12,z:10,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,9],[31,8]]},{class:"wires",x:13,z:10,wires:[[30,17],[31,0]]},{class:"wires",x:18,z:10,wires:[[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:19,z:10,wires:[[3,28],[4,27],[5,26],[6,25],[7,24]]},{class:"wires",x:1,z:11,wires:[[15,-1]]},{class:"wires",x:2,z:11,wires:[[15,24],[16,-1],[17,-1]]},{class:"wires",x:3,z:11,wires:[[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:4,z:11,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:5,z:11,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:6,z:11,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:9,z:11,wires:[[8,23],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9]]},{class:"wires",x:12,z:11,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,10],[30,1],[31,0]]},{class:"wires",x:13,z:11,wires:[[23,-1],[29,2]]},{class:"wires",x:17,z:11,wires:[[8,-1],[9,-1],[10,-1]]},{class:"wires",x:18,z:11,wires:[[8,31],[9,30],[10,29]]},{class:"wires",x:19,z:11,wires:[[0,31],[1,30],[2,29],[3,20],[4,19],[5,18],[6,17],[7,16]]},{class:"wires",x:2,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:3,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25]]},{class:"wires",x:4,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25]]},{class:"wires",x:5,z:12,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:6,z:12,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:8,z:12,wires:[[14,-1],[15,-1]]},{class:"wires",x:9,z:12,wires:[[14,25],[15,24]]},{class:"wires",x:10,z:12,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:11,z:12,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:12,z:12,wires:[[22,1],[23,0]]},{class:"wires",x:13,z:12,wires:[[21,-1]]},{class:"wires",x:18,z:12,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0]]},{class:"wires",x:8,z:13,wires:[[15,-1]]},{class:"wires",x:9,z:13,wires:[[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:10,z:13,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]},{class:"wires",x:11,z:13,wires:[[7,-1],[14,-1],[15,-1],[16,31],[17,30],[18,29],[19,28],[20,27],[21,26],[22,25],[23,24]]},{class:"wires",x:12,z:13,wires:[[6,25],[7,24],[22,-1],[23,-1]]},{class:"wires",x:13,z:13,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1]]},{class:"wires",x:17,z:13,wires:[[15,-1]]},{class:"wires",x:18,z:13,wires:[[8,7],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9],[23,24]]},{class:"wires",x:7,z:14,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:8,z:14,wires:[[7,-1],[8,31],[9,30],[10,29],[11,28],[12,27],[13,26],[14,25]]},{class:"wires",x:9,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1]]},{class:"wires",x:10,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,24],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1]]},{class:"wires",x:11,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,25],[7,16],[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:12,z:14,wires:[[0,31],[1,30],[2,29],[3,28],[4,27],[5,26],[6,17],[7,16]]},{class:"wires",x:13,z:14,wires:[[0,23],[1,22],[2,21],[3,20],[4,19],[5,18],[6,17]]},{class:"wires",x:14,z:14,wires:[[7,-1]]},{class:"wires",x:17,z:14,wires:[[8,-1]]},{class:"wires",x:18,z:14,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,0],[16,31]]},{class:"wires",x:8,z:15,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,16]]},{class:"wires",x:13,z:15,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:14,z:15,wires:[[6,-1],[7,-1],[31,16]]},{class:"wires",x:17,z:15,wires:[[13,-1],[14,-1],[15,-1]]},{class:"wires",x:18,z:15,wires:[[8,7],[9,6],[10,5],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,26],[22,25],[23,24]]},{class:"wires",x:8,z:16,wires:[[8,7],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,9]]},{class:"wires",x:13,z:16,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,9],[31,8]]},{class:"wires",x:14,z:16,wires:[[30,17],[31,16]]},{class:"wires",x:17,z:16,wires:[[9,-1],[10,-1]]},{class:"wires",x:18,z:16,wires:[[1,30],[2,29],[8,7],[9,6],[10,5],[11,4],[12,3],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13]]},{class:"wires",x:8,z:17,wires:[[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1],[15,-1],[16,15]]},{class:"wires",x:13,z:17,wires:[[0,-1],[1,-1],[2,-1],[3,-1],[4,-1],[5,-1],[6,-1],[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:14,z:17,wires:[[7,-1],[31,0]]},{class:"wires",x:18,z:17,wires:[[8,7],[9,22],[10,21],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11]]},{class:"wires",x:7,z:18,wires:[[14,-1]]},{class:"wires",x:8,z:18,wires:[[8,7],[9,6],[10,-1],[11,-1],[12,-1],[13,-1],[14,-1],[15,-1],[16,15],[17,14],[18,13],[19,12],[20,11],[21,10],[22,25]]},{class:"wires",x:13,z:18,wires:[[24,23],[25,22],[26,21],[27,20],[28,19],[29,18],[30,17],[31,8]]},{class:"wires",x:14,z:18,wires:[[23,-1],[31,16]]},{class:"wires",x:17,z:18,wires:[[14,-1],[15,-1]]},{class:"wires",x:18,z:18,wires:[[14,25],[15,24],[16,-1]]},{class:"wires",x:19,z:18,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:8,z:19,wires:[[16,15],[17,14]]},{class:"wires",x:9,z:19,wires:[[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0],[24,-1],[25,-1]]},{class:"wires",x:10,z:19,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,24]]},{class:"wires",x:11,z:19,wires:[[14,-1],[15,-1],[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,1],[23,0]]},{class:"wires",x:12,z:19,wires:[[16,7],[17,6],[18,5],[19,4],[20,3],[21,2],[22,25],[23,24]]},{class:"wires",x:18,z:19,wires:[[8,-1],[9,-1],[10,-1],[11,-1],[12,-1],[13,-1]]},{class:"wires",x:19,z:19,wires:[[16,31],[17,30],[18,29],[19,28],[20,27],[21,26]]}];const oe=new Array(100).fill(null).map((r,e)=>({id:`user${e}`,name:`USER${e}`,iconUrl:Xe,point:0,rank:-1})),Ms=()=>({userId:oe[Math.floor(Math.random()*oe.length)].id,point:Math.random()*1e3,genre:Math.floor(Math.random()*xt.length),title:"\u30AA\u30E2\u30B7\u30ED\u554F\u984C -\u3053\u308C\u306F\u9069\u5F53\u306B\u8003\u3048\u305F\u30BF\u30A4\u30C8\u30EB-"}),yt=()=>(oe.forEach(r=>{r.point+=Math.random()*1e3}),oe.sort((r,e)=>r.point-e.point),oe.forEach((r,e)=>{r.rank=e+1}),{ranking:oe,circuit:{data:JSON.stringify(ys)}}),Cs=()=>{const r=new Date;r.setMinutes(r.getMinutes()-5);const e=new Date;return e.setMinutes(e.getMinutes()+5),{users:oe.map(({id:t,name:s,iconUrl:i})=>({id:t,name:s,iconUrl:i})),recalculate:yt(),startTime:r.toString(),endTime:e.toString()}},ke=r=>y({data:{type:0,data:null},lastEventId:"",origin:"",ports:[],source:null,initMessageEvent:function(e,t,s,i,n,o,a,c){throw new Error("Function not implemented.")},bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:null,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:null,target:null,timeStamp:0,type:"",composedPath:function(){throw new Error("Function not implemented.")},initEvent:function(e,t,s){throw new Error("Function not implemented.")},preventDefault:function(){throw new Error("Function not implemented.")},stopImmediatePropagation:function(){throw new Error("Function not implemented.")},stopPropagation:function(){throw new Error("Function not implemented.")},AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0},r),Re=r=>new Promise(e=>{setTimeout(()=>e(),r)}),Be={startTime:new Date,endTime:new Date},Ds=()=>{D.emit("start")},zs=()=>{D.emit("end")},Ye={texture:new dt,gltf:new jt,fbx:new Nt},ct=(r,e)=>new Promise((t,s)=>{switch(e){case"gltf":{Ye.gltf.load(r,i=>{t(i.scene)},()=>0,i=>{s(i)});break}case"texture":{Ye.texture.load(r,i=>{t(i)},()=>0,i=>{s(i)});break}}});class x{static addGLTF(e){this.queue.push([e,"gltf"])}static addTexture(e){this.queue.push([e,"texture"])}static addFBX(e){this.queue.push([e,"fbx"])}static load(e){let t=null,s=0;const i=this.queue.length;if(i!==0)return this.queue.map(([n,o])=>{t?t=t.then(()=>ct(n,o)):t=ct(n,o),t=t.then((a=>{s+=1,this.resources[n]={type:o,data:a},e({path:n,data:a,total:i,count:s})}).bind(this)).catch(a=>{console.log("loaderror",a)})}),this.queue=[],t}static get(e){var t;return(t=this.resources[e])==null?void 0:t.data}}d(x,"resources",{}),d(x,"queue",[]);class Bs extends EventTarget{constructor(e){super();d(this,"id");d(this,"_point",0);d(this,"_rank",-1);d(this,"_displayName","");d(this,"_icon",null);d(this,"_iconPath","");this.id=e}get point(){return this._point}get rank(){return this._rank}get displayName(){return this._displayName}get icon(){if(!this._icon)throw new Error("Icon is not initialized.");return this._icon}get iconPath(){return this._iconPath}set(e,t,s,i){var n;this._point=e,this._rank=t,this._displayName=s,(!this._iconPath||this._iconPath!==i)&&(this._iconPath=i,(n=this._icon)==null||n.dispose(),this._icon=Ye.texture.load(i))}}class W{static get ranking(){return this._ranking}static addUser({id:e,name:t,iconUrl:s}){const i=new Bs(e);this.users[e]=i,i.set(-1,-1,t,s)}static updateUser({id:e,name:t,iconUrl:s,point:i,rank:n}){var o;this.users[e]||this.addUser({id:e,name:t,iconUrl:s}),(o=this.users[e])==null||o.set(i,n,t,s)}static updateRanking(){this._ranking=Object.keys(this.users),this._ranking=this._ranking.sort((e,t)=>{var s,i;return(((s=this.users[e])==null?void 0:s.rank)||99999999)-(((i=this.users[t])==null?void 0:i.rank)||999999999)})}static getUser(e){return this.users[e]}}d(W,"users",{}),d(W,"_ranking",[]);const Ps=({userId:r,name:e,iconUrl:t})=>{W.addUser({id:r,name:e,iconUrl:t})},Ss=({userId:r,point:e,genre:t,title:s})=>{D.emit("submit",{userid:r,point:e,genre:xt[t],title:s})},bs=({userId:r,name:e,iconUrl:t})=>{var i,n;const s=W.getUser(r);!s||W.updateUser({point:(i=s.point)!=null?i:0,rank:(n=s.rank)!=null?n:0,id:r,name:e,iconUrl:t})};class Mt{static async initial(){return await Re(1e3),Cs()}static async recalculate(){return await Re(1e3),yt()}}class He{constructor(e,t){this.sizeX=e,this.sizeY=t}}class Ct{constructor(e,t,s,i){this.x=e,this.z=t,this.isBig=s,this.category=i}}class Dt{constructor(e,t,s){this.x=e,this.z=t,this.wires=s}}class Es{static jsonToInfo(e){const t=JSON.parse(e);let s=new He(0,0);const i=new Array(0),n=new Array(0);return t.forEach(o=>{if(o.class=="basis"){const a=o;s=new He(a.sizeX,a.sizeY)}else if(o.class=="parts"){const a=o;i.push(new Ct(a.x,a.z,a.isBig,a.category))}else if(o.class=="wires"){const a=o;n.push(new Dt(a.x,a.z,a.wires))}}),[s,i,n]}}class fe{static setCircuitInfo(e){[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]=Es.jsonToInfo(e)}static getCircuitInfo(){return[this.circuitBasisInfo,this.circuitPartsInfos,this.circuitWiresInfos]}}d(fe,"circuitBasisInfo"),d(fe,"circuitPartsInfos"),d(fe,"circuitWiresInfos");const Is=()=>{(async()=>{D.emit("recalculatestart"),await Gs(),D.emit("recalculateend")})()},Gs=async()=>{const r=await Mt.recalculate();if(!r)return;const{ranking:e,circuit:t}=r;e.forEach(s=>{W.updateUser(s)}),W.updateRanking(),await Re(4e3),fe.setCircuitInfo(t.data)},D=Lt(),ks=()=>{const r=new WebSocket(xs);r.addEventListener("message",Me.bind(globalThis)),r.addEventListener("error",()=>{D.emit("disconnect")}),Fs()},Ts=()=>{D.emit("initialized")},Fs=()=>{setInterval(()=>{Me(ke({data:{type:7}}))},3e4),setInterval(()=>{Me(ke({data:{type:6}}))},3e5),setInterval(()=>{Me(ke({data:{type:2,data:Ms()}}))},3e3)},Me=r=>{const{type:e,data:t}=r.data;if(!!e)switch(r.data.type){case 0:break;case 1:{Ps(t);break}case 2:{Ss(t);break}case 3:break;case 4:{bs(t);break}case 5:{Ds();break}case 6:{zs();break}case 7:{Is();break}}};let Ke="";const zt=()=>Ke,Qs=r=>{Ke=r},Zs=()=>{Ke=""};var Ws="data:image/png;base64,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",Rs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAgCAYAAAD0QgaeAAAAAXNSR0IArs4c6QAAAJhJREFUeJzt3TEKwkAURdE/4gotBFcYSJEtaiG5W4jgOdWUv7pM99bMzOv5eA/w17b9WEsMgNP9fGz7sa48BLjO+TG4XX0I8DsEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggABEEIIIARBCACAIQQQAiCEAEAYggADH2CmTNmIMHvoPPHw9GED8I9d58AAAAAElFTkSuQmCC",Ys="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAAXNSR0IArs4c6QAAADBJREFUSIljZGBgYOCRqfvPQAb48qSJkYkcjchg1IBRA0YNGDVg1IBRA0YNGGwGAADwGARAM3CimgAAAABJRU5ErkJggg==",Hs="/Visualizer/assets/recalculating.60ffccdf.glb",Bt="/Visualizer/assets/monitor.81b9fd78.glb",Us="/Visualizer/assets/face.e8cae3d3.png",Pt="/Visualizer/assets/cpu.57abf837.glb",St="/Visualizer/assets/graphicBoard.df969daf.glb",bt="/Visualizer/assets/hdd.57193f05.glb",Et="/Visualizer/assets/memory.4bfe027c.glb",It="/Visualizer/assets/powerSupply.2ca11cfa.glb",Gt="/Visualizer/assets/tipSet.f2956ffc.glb",kt="/Visualizer/assets/audio.5e239d55.glb",Tt="/Visualizer/assets/condenser.07eb820d.glb",Ft="/Visualizer/assets/ports.6ad72da3.glb",Qt="/Visualizer/assets/ssd.523d4501.glb",Ue="/Visualizer/assets/symbols.3d122568.glb",Ve="/Visualizer/assets/emergency.19e4efc2.glb";const Vs=()=>{x.addGLTF(Hs),x.addGLTF(Bt),x.addTexture(Us),x.addTexture(Xe),x.addGLTF(Pt),x.addGLTF(St),x.addGLTF(bt),x.addGLTF(Et),x.addGLTF(It),x.addGLTF(Gt),x.addGLTF(kt),x.addGLTF(Tt),x.addGLTF(Ft),x.addGLTF(Qt),x.addGLTF(Ue),x.addGLTF(Ve)},Os=({width:r,height:e,loadedHandler:t})=>{const[s,i]=f.exports.useState(""),[n,o]=f.exports.useState(0),[a,c]=f.exports.useState({textures:[],index:-1});return f.exports.useEffect(()=>{(async()=>{Vs(),await x.load(({path:w,total:S,count:b})=>{i(w),o(b/S)}),t()})();const A=new ae(Ws);c({index:0,textures:[new z(A,new I(64*0,0,64,64)),new z(A,new I(64*1,0,64,64)),new z(A,new I(64*2,0,64,64)),new z(A,new I(64*3,0,64,64)),new z(A,new I(64*4,0,64,64)),new z(A,new I(64*5,0,64,64)),new z(A,new I(64*6,0,64,64)),new z(A,new I(64*7,0,64,64))]});const m=setInterval(()=>{c(w=>({index:(w.index+1)%w.textures.length,textures:w.textures}))},200);return()=>{clearInterval(m)}},[]),k(h.exports.Container,{position:[r/2,e/2],children:[a.index<0?null:l(h.exports.Sprite,{texture:a.textures[a.index],anchor:.5,position:[0,-50],width:64,height:64}),l(h.exports.Text,{text:s,anchor:.5,position:[0,0],style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:20,fill:"#000"})}),l(h.exports.Sprite,{image:Rs,position:[0,50],anchor:.5,width:260,height:32,children:new Array(Math.floor(16*n)).fill(null).map((u,A)=>l(h.exports.Sprite,{image:Ys,anchor:[0,.5],position:[(A-8)*16,0],width:16,height:32},A))})]})};var js="/Visualizer/assets/traP_logo.25c1c1d8.png";const Ns=new ae(js),Te=50,xe=24,Ls=({width:r,height:e,onComplete:t})=>{const[s,i]=f.exports.useState(0);return f.exports.useEffect(()=>{const n=setInterval(()=>{i(o=>o===Te+xe*2?(clearInterval(n),setTimeout(()=>{t()},1),o):o+1)},1e3/xe)},[]),l(h.exports.Container,{position:[r/2,e/2],children:l(h.exports.Sprite,{texture:new z(Ns,new I(0,280*Math.min(s,Te-1),1920,280)),alpha:1-Math.max(0,s-Te-xe)/xe,anchor:.5,width:r*.9,height:r*.9/1920*280})})};class M{static get time(){return this._time}static get deltaTime(){return this._deltaTime}static start(e){this.startTime=e,this.prevTime=e}static update(e){this._time=(e-this.startTime)/1e3,this._deltaTime=(e-this.prevTime)/1e3,this.prevTime=e}}d(M,"startTime",-1),d(M,"_time",-1),d(M,"_deltaTime",-1),d(M,"prevTime",-1);class X extends me{constructor(e,t){super(e,t);d(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof T||e instanceof X)&&e.update()}))}}class T extends ht{constructor(){super();d(this,"initialized",!1);this.name=this.constructor.name}start(){}update(){!this.visible||(this.initialized||(this.start(),this.initialized=!0),this.children.map(e=>{(e instanceof T||e instanceof X)&&e.update()}))}}const Js=`
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
`,Xs=`
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
`;class Ks extends X{constructor(){super(new Jt(100),new se({uniforms:{radius:{value:100},colorA:{value:new E("#db2784")},colorB:{value:new E("#1c1330")},sunColorA:{value:new E("#db2784")},sunColorB:{value:new E("#f2ca2b")},sunPos:{value:new H(-100,0,0).applyEuler(new Xt(0,0,-Math.PI*.06))},time:{value:0}},side:wt,vertexShader:Js,fragmentShader:Xs}))}update(){super.update(),this.material.uniforms.time.value=M.time}}const qs=`
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
`,_s=`
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
`;class $s extends X{constructor(){super(new be(100,100,50,50),new se({uniforms:{colorA:{value:new E(16729343)},colorB:{value:new E(1127423)},time:{value:0}},vertexShader:qs,fragmentShader:_s,side:At}));this.rotation.x=-Math.PI*.5}update(){super.update(),this.material.uniforms.time.value=M.time}}class ei extends T{constructor(){super();this.add(new $s),this.add(new Ks)}start(){}update(){super.update()}}var ti=`uniform sampler2D face;
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
}`,si=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,ii="/Visualizer/assets/face.e8cae3d3.png";class ri extends X{constructor(){super(new be(4*.5,3*.5),new se({vertexShader:si,fragmentShader:ti,uniforms:{face:{value:x.get(ii)},icon:{value:null},mode:{value:-1},progress:{value:0},time:{value:0}}}));this.position.set(0,1.5,1.1),this.rotation.set(-.03+Math.PI,-Math.PI,Math.PI)}setIcon(e){this.material.uniforms.icon.value=e||x.get(Xe)}start(){}animation(){const e=this.material.uniforms.mode,t=this.material.uniforms.progress;if(!e||!t)return;e.value=1,t.value=1;const s=de.timeline();s.to(t,.3,{value:0}),s.call(()=>{e.value=Math.random()<.5?0:2,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0}),s.set({},{},1.7),s.call(()=>{e.value=-1,t.value=1},[],"+=1.7"),s.to(t,.3,{value:0})}update(){super.update();const e=this.material.uniforms.time;e&&(e.value=M.time)}}class Fe extends T{constructor(){super();d(this,"display");d(this,"user",null);const e=x.get(Bt).clone();this.add(e),this.display=new ri,this.add(this.display)}get userid(){var e;return(e=this.user)==null?void 0:e.id}animation(){this.display.animation()}updateUser(e){const t=W.getUser(e);t?(this.user=t,this.display.setIcon(t.icon)):this.user=null}start(){}update(){super.update()}}class ni extends T{constructor(){super();d(this,"users");this.position.y=3,this.users=[];let e=20,t=new Array(e).fill(null).map((s,i)=>{const n=new Fe,o=i/e*Math.PI*2;return n.position.set(Math.sin(o)*4,0,Math.cos(o)*4),n.scale.set(.4,.4,.4),n.lookAt(0,-2,0),this.add(n),n});this.users=this.users.concat(t),e=60,t=new Array(e).fill(null).map((s,i)=>{const n=new Fe,o=i/e*Math.PI*2;return n.position.set(Math.sin(o)*4.5,-1,Math.cos(o)*4.5),n.scale.set(.15,.15,.15),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t),e=120,t=new Array(e).fill(null).map((s,i)=>{const n=new Fe,o=i/e*Math.PI*2;return n.position.set(Math.sin(o)*5,-1.5,Math.cos(o)*5),n.scale.set(.1,.1,.1),n.lookAt(0,-2,0),this.add(n),n}),this.users=this.users.concat(t)}start(){W.ranking.forEach((e,t)=>{t>=this.users.length||this.users[t].updateUser(e)}),D.on("submit",({userid:e})=>{const t=this.users.filter(s=>s.userid===e);!t.length||t[0].animation()}),D.on("recalculateend",()=>{W.ranking.forEach((e,t)=>{this.users[t].updateUser(e)})})}}class oi extends ft{constructor(){super(60,1,1,2e3);D.on("recalculatestart",()=>{de.to(this.position,2,{y:10})}),D.on("recalculateend",()=>{de.to(this.position,2,{y:4})})}start(){this.position.set(Math.sin(M.time*.1)*8,4,Math.cos(M.time*.1)*8)}update(){this.position.set(Math.sin(M.time*.1)*8,this.position.y,Math.cos(M.time*.1)*8),this.lookAt(0,0,0)}}const ai=`
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
`,ci=`
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
`,li=`
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
`,ui=`
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
`,di=r=>new se({uniforms:{colorA:{value:r},time:{value:0}},fragmentShader:ci,vertexShader:ai,transparent:!0}),hi=r=>new se({uniforms:{colorA:{value:r},time:{value:0}},fragmentShader:ui,vertexShader:li,transparent:!0,side:wt}),Pe=(r,e)=>{const t=r.geometry;t.clearGroups(),t.addGroup(0,1/0,0),t.addGroup(0,1/0,1),r.material=[di(e),hi(e)]},$=class extends T{constructor(e=0){super();d(this,"emergencyBlack");d(this,"emergencyRed");d(this,"offsetTime");d(this,"loopTime",2);var t,s;if($.emergencyBlackGeom==null){const i=(t=x.get(Ve))==null?void 0:t.clone();$.emergencyBlackGeom=i.children[0].geometry}if($.emergencyRedGeom==null){const i=(s=x.get(Ve))==null?void 0:s.clone();$.emergencyRedGeom=i.children[1].geometry}this.offsetTime=e,this.emergencyBlack=new me($.emergencyBlackGeom),this.emergencyRed=new me($.emergencyRedGeom),Pe(this.emergencyBlack,new E(0)),Pe(this.emergencyRed,new E(16711680)),this.add(this.emergencyBlack),this.add(this.emergencyRed)}start(){super.start()}update(){super.update();let e=Math.sin((M.time+this.offsetTime)/this.loopTime*Math.PI*2);e=e<0?0:e,this.scale.set(e,e,e),this.emergencyBlack.material[0].uniforms.time.value=M.time+this.offsetTime,this.emergencyRed.material[0].uniforms.time.value=M.time+this.offsetTime,this.emergencyBlack.material[1].uniforms.time.value=M.time+this.offsetTime,this.emergencyRed.material[1].uniforms.time.value=M.time+this.offsetTime}};let Ce=$;d(Ce,"emergencyBlackGeom"),d(Ce,"emergencyRedGeom");class wi extends T{constructor(){super();d(this,"size",30);d(this,"positionOffset",2/Math.sqrt(3));d(this,"offsetTimeUnit",.1);d(this,"emergencies",new Array(0));for(let e=0;e<this.size;e++){const t=e*(this.positionOffset*3/2)-Math.floor(this.size/2),s=e*this.offsetTimeUnit;for(let i=0;i<this.size;i++){const n=i*(Math.sqrt(3)*this.positionOffset)+(e%2==1?this.positionOffset*(Math.sqrt(3)/2):0)-Math.floor(this.size/2),o=new Ce(s);o.position.setX(n),o.position.setZ(t),this.emergencies.push(o),this.add(o)}}}}class Zt extends X{constructor(e){const t=e.clipBias!==void 0?e.clipBias:0,s=e.alpha!==void 0?e.alpha:1,i=e.time!==void 0?e.time:0,n=e.waterNormals!==void 0?e.waterNormals:null,o=e.sunDirection!==void 0?e.sunDirection:new H(.70707,.70707,0),a=new E(e.sunColor!==void 0?e.sunColor:16777215),c=new E(e.waterColor!==void 0?e.waterColor:8355711),u=e.eye!==void 0?e.eye:new H(0,0,0),A=e.distortionScale!==void 0?e.distortionScale:20,m=e.side!==void 0?e.side:mt,w=e.fog!==void 0?e.fog:!1,S=new Kt,b=new H,R=new H,K=new H,v=new Ge,C=new H(0,0,-1),g=new st,O=new H,L=new H,re=new st,ce=new Ge,G=new ft,he={uniforms:it.merge([rt.fog,rt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ge},sunColor:{value:new E(8355711)},sunDirection:{value:new H(.70707,.70707,0)},eye:{value:new H},waterColor:{value:new E(5592405)}}]),vertexShader:`
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
				}`},Y=new se({fragmentShader:he.fragmentShader,vertexShader:he.vertexShader,uniforms:it.clone(he.uniforms),lights:!0,side:m,fog:w});Y.uniforms.textureMatrix.value=ce,Y.uniforms.alpha.value=s,Y.uniforms.time.value=i,Y.uniforms.normalSampler.value=n,Y.uniforms.sunColor.value=a,Y.uniforms.waterColor.value=c,Y.uniforms.sunDirection.value=o,Y.uniforms.distortionScale.value=A,Y.uniforms.eye.value=u;const ve=new be(1e3,1e3);super(ve,Y);d(this,"isWater",!0);this.onBeforeRender=function(Ee,le,ne){if(R.setFromMatrixPosition(this.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld),v.extractRotation(this.matrixWorld),b.set(0,0,1),b.applyMatrix4(v),O.subVectors(R,K),O.dot(b)>0)return;O.reflect(b).negate(),O.add(R),v.extractRotation(ne.matrixWorld),C.set(0,0,-1),C.applyMatrix4(v),C.add(K),L.subVectors(R,C),L.reflect(b).negate(),L.add(R),G.position.copy(O),G.up.set(0,1,0),G.up.applyMatrix4(v),G.up.reflect(b),G.lookAt(L),G.far=ne.far,G.updateMatrixWorld(),G.projectionMatrix.copy(ne.projectionMatrix),ce.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ce.multiply(G.projectionMatrix),ce.multiply(G.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(b,R),S.applyMatrix4(G.matrixWorldInverse),g.set(S.normal.x,S.normal.y,S.normal.z,S.constant);const J=G.projectionMatrix;re.x=(Math.sign(g.x)+J.elements[8])/J.elements[0],re.y=(Math.sign(g.y)+J.elements[9])/J.elements[5],re.z=-1,re.w=(1+J.elements[10])/J.elements[14],g.multiplyScalar(2/g.dot(re)),J.elements[2]=g.x,J.elements[6]=g.y,J.elements[10]=g.z+1-t,J.elements[14]=g.w,u.setFromMatrixPosition(ne.matrixWorld)}}}Zt.prototype.isWater=!0;var Ai="/Visualizer/assets/Water_1_M_Normal.6d782546.jpg";class fi extends T{constructor(){super();d(this,"water");const e={textureWidth:512,textureHeight:512,waterNormals:new dt().load(Ai,function(t){t.wrapS=t.wrapT=qt}),alpha:1,waterColor:4098510,distortionScale:2.7,fog:void 0,sunDirection:void 0,sunColor:void 0,clipBias:void 0,time:void 0,eye:void 0,side:mt};this.water=new Zt(e),this.water.rotation.x=-Math.PI/2,this.add(this.water)}start(){super.start()}update(){super.update(),this.water.material.uniforms.time.value=M.time}}class mi extends T{constructor(){super();d(this,"startY",-2);d(this,"endY",2);d(this,"emergencyAnimation");d(this,"waterAnimation");this.emergencyAnimation=new wi,this.waterAnimation=new fi,this.add(this.emergencyAnimation),this.add(this.waterAnimation)}start(){super.start(),this.visible=!1,this.emergencyAnimation.position.y=.5,this.position.y=this.startY,D.on("recalculatestart",()=>{this.visible=!0,de.to(this.position,1,{y:this.endY})}),D.on("recalculateend",()=>{de.to(this.position,1,{y:this.startY}).eventCallback("onComplete",()=>{this.visible=!1})})}update(){super.update()}}const vi=async()=>{const r=await Mt.initial();r.users.forEach(e=>{W.addUser(e)}),W.updateRanking(),Be.startTime=new Date(r.startTime),Be.endTime=new Date(r.endTime)};class pi{constructor(e,t){this.x=e,this.y=t,this.wirePoints=new Array(4*8).fill(!1),this.wires=new Array(4*8),new Array(4*8).fill(null).forEach((s,i)=>{this.wires[i]=new xi(i)})}isParts(){return this.parts!=null}setParts(e,t,s){this.parts=s;const i=s.getWirePointsInt(e,t);this.wirePoints.forEach((n,o)=>{this.wirePoints[o]=i[o]==1}),this.wires.forEach(n=>{n.cantTo()})}getActiveWirePointsIndex(){const e=new Array(0);return this.wirePoints.forEach((t,s)=>{t&&e.push(s)}),e}setWire(e){if(this.isParts())return-1;const t=this.wires[e.wireInd],s=t.setTo(e.notdir,e.priority,e.end);return this.updateWires(t),this.updateWirePoints(t),s}getAllWires(){return this.wires}updateWires(e){this.wires.forEach(t=>{t.updateCanTo(e)})}updateWirePoints(e){e.isHole()?this.wirePoints[e.ind]=!0:(this.wirePoints[e.from]=!0,this.wirePoints[e.to]=!0)}logWiresCanto(){console.log("(x:%d,y:%d)\u306E\u30BB\u30EB",this.x,this.y),this.wires.forEach(e=>{let t=`Wire %d:
CanTo:`;e.canTo.forEach(s=>t+=`
`+s.toString()),console.log(t,e.ind)})}}class gi{constructor(e){this.wireInd=0,this.priority=[0,1,2],this.end=!1,this.counter=0,this.straightCounter=0,this.straightMax=2,this.counterMax=2,this.dir=e,this.beforeDir=e,this.notdir=(e+2)%4}update(e,t){if(this.counter++,this.wireInd=e,this.beforeDir==t?this.straightCounter++:this.straightCounter=0,this.counter>this.counterMax){this.end=!0;return}this.rand(this.straightCounter/this.straightMax)?t==this.dir?this.rand(.5)?this.priority=[0,2,1]:this.priority=[2,0,1]:t==(this.dir+1)%4?this.priority=[0,1,2]:this.priority=[2,1,0]:this.rand(.5)?this.priority=[1,0,2]:this.priority=[1,2,0],this.beforeDir=t}rand(e){return Math.random()<=e}}class xi{constructor(e){this.ind=e,this.from=e,this.to=-1;const t=e%8,s=(e-t)/8;this.canTo=[15-t,23-t,31-t],this.shift(s)}isCanTo(){return this.canTo.length!=0}cantTo(){this.canTo=new Array(0)}eraseCanTo(e){this.canTo.forEach((t,s)=>{t==e&&(this.canTo[s]=-1)})}isFull(){return this.from==this.ind&&this.to!=-1}isHole(){return this.from==-1}isEmpty(){return this.from==this.ind&&this.to==-1}setTo(e,t,s){let i=-1;if(!this.isCanTo()){if(this.isHole()||this.isFull())return-1;if(this.isEmpty())return this.from=-1,-1}if(s)return this.cantTo(),this.from=-1,-1;for(let n=0;n<3;n++){const o=t[n];if(this.canTo[o]!=-1&&o!=e){i=this.canTo[o];break}}return this.cantTo(),i==-1?(this.from=-1,-1):(this.to=i,i)}updateCanTo(e){if(!this.isCanTo())return;if(e.isHole()){this.eraseCanTo(e.ind);return}if(this.ind==e.ind||this.ind==e.to){this.cantTo();return}this.eraseCanTo(e.from),this.eraseCanTo(e.to);const t=new Array(3).fill(-1);let s=0,i=0;for(let o=0;o<32;o++){const a=(e.from+o)%32;if(a==e.to){i++;continue}if(a==this.from){s=i;continue}const c=this.canTo.findIndex(u=>u==a);c!=-1&&(t[c]=i)}const n=new Array(3).fill(-1);this.canTo.forEach((o,a)=>{s==t[a]?n[a]=o:n[a]=-1}),this.canTo=n}shift(e){this.canTo.forEach((t,s)=>{this.canTo[s]=((t+8*e)%32+32)%32})}}const Oe=class{constructor(r,e){this.partsCellDict={},this.parts=new Array(0),this.sizeX=r,this.sizeY=e,this.cells=new Array(this.sizeY*this.sizeX);for(let t=0;t<e;t++)for(let s=0;s<r;s++)this.cells[t*r+s]=new pi(s,t)}putParts(r,e,t){if(!this.canPutParts(r,e,t))return!1;const s=t.sizeY,i=t.sizeX,n=new Array(0);for(let o=0;o<s;o++)for(let a=0;a<i;a++){const c=e+o,u=r+a,A=this.getCell(u,c);A.setParts(a,o,t),n.push(A)}return t.setPosition(r,e),this.partsCellDict[t.id]=n,this.parts.push(t),!0}getPartsCells(r){return r.id in this.partsCellDict?this.partsCellDict[r.id]:new Array(0)}getAllPartsCells(){const r=new Array(0);for(const e in this.partsCellDict)r.push(this.partsCellDict[e]);return r}extendWires(r){const e=r.x,t=r.y;r.getActiveWirePointsIndex().forEach(i=>{let n=e,o=t;const a=i%8,c=(i-a)/8,u=new gi(c);for(;i!=-1;){const[A,m]=this.indexConvertToAroundIndex(i);n+=Oe.dx[A],o+=Oe.dy[A];const w=this.getCell(n,o);if(w==null||(u.update(m,A),i=w.setWire(u),i==-1))break}})}convertToCircuitInfos(){const r=new He(this.sizeX,this.sizeY),e=new Array(0),t=new Array(0);return this.cells.forEach(s=>{const i=new Array(0);s.getAllWires().forEach(n=>{n.isEmpty()||(n.isHole()?i.push([n.ind,n.to]):i.push([n.from,n.to]))}),i.length!=0&&t.push(new Dt(s.x,s.y,i))}),this.parts.forEach(s=>{const[i,n]=s.getPosition();e.push(new Ct(i,n,s.isBig,s.problemCategory!=null?s.problemCategory:""))}),[r,e,t]}canPutParts(r,e,t){const s=t.sizeY,i=t.sizeX;for(let n=0;n<s;n++)for(let o=0;o<i;o++){const a=e+n,c=r+o,u=this.getCell(c,a);if(u==null)return!1;if(u.isParts())return!1}return!0}getCell(r,e){if(0<=e&&e<this.sizeY&&0<=r&&r<this.sizeX)return this.cells[e*this.sizeX+r]}indexConvertToAroundIndex(r){const e=r%8,t=(r-e)/8,i=((t+2)%4+1)*8-e-1;return[t,i]}};let Se=Oe;Se.dy=[1,0,-1,0];Se.dx=[0,1,0,-1];const U=class extends X{constructor(e){const t=U.createWireGeometry(e);super(t,U.material)}start(){}update(){super.update()}static createWireGeometry(e){let t=new _t;const s=1,i=.25,n=.5,o=.25,a=16;console.log(e);const[c,u]=e;if(u==-1){const A=s*n/8/2,m=s*o/8/2,w=new $t(m,A,a);w.rotateX(-Math.PI/2);let[S,b]=this.wireIndexToPosition(c,s);const R=(c-c%8)/8;R==0||R==2?b-=Math.sign(b)*(A-m):S-=Math.sign(S)*(A-m);const K=w.attributes.position.count;for(let v=0;v<K;v++){const C=w.attributes.position.getX(v),g=w.attributes.position.getZ(v);w.attributes.position.setXYZ(v,C+S,0,g+b)}t=w}else{const[A,m]=U.wireIndexToPositionPair(c,s,i),[w,S]=U.wireIndexToPositionPair(u,s,i),b=new Float32Array([A[0],0,A[1],m[0],0,m[1],w[0],0,w[1],w[0],0,w[1],S[0],0,S[1],A[0],0,A[1]]);t.setAttribute("position",new es(b,3))}return t}static wireIndexToPosition(e,t=1){const s=e%8,i=(e-s)/8,n=t/8,o=n*s-n*7/2,a=Se.dx[i]/2+U.sx[i]*o,c=Se.dy[i]/2+U.sy[i]*o;return[a,c]}static wireIndexToPositionPair(e,t=1,s=.5){const i=e%8,n=(e-i)/8,o=t/8,[a,c]=this.wireIndexToPosition(e,t),u=[a-U.sx[n]*s*o/2,c-U.sy[n]*s*o/2],A=[a+U.sx[n]*s*o/2,c+U.sy[n]*s*o/2];return[u,A]}};let Ae=U;d(Ae,"sx",[1,0,-1,0]),d(Ae,"sy",[0,-1,0,1]),d(Ae,"material",new vt({color:16777215}));class ee{}d(ee,"cpuPath",Pt),d(ee,"partsPath",{Newbie:St,PPC:bt,Web:Et,Crypto:It,Binary:Gt,Pwn:kt,Misc:Tt,Shell:Ft,Forensics:Qt,OSINT:""}),d(ee,"partsBigPath",{Newbie:"",PPC:"",Web:"",Crypto:"",Binary:"",Pwn:"",Misc:"",Shell:"",Forensics:"",OSINT:""});class yi extends T{constructor(){super();d(this,"app");d(this,"texture");d(this,"nameText");d(this,"titleText");d(this,"needsUpdate",!1);const e=1024,t=48;this.app=new ts({width:e,height:t,autoStart:!1,backgroundAlpha:0});const s=new j({dropShadowAngle:6.7,dropShadowDistance:3,fill:"red",fontSize:20,lineJoin:"round",stroke:"#8a0000",strokeThickness:2});this.nameText=new nt("string",s),this.nameText.anchor.set(.5,0),this.nameText.position.set(e/2,0),this.app.stage.addChild(this.nameText),this.titleText=new nt("string",s.clone()),this.titleText.anchor.set(.5,0),this.titleText.position.set(e/2,24),this.app.stage.addChild(this.titleText);const i=new me(new be(e,t),new vt({map:null,transparent:!0}));i.position.z=1e-4;const n=i.clone();n.rotation.y=Math.PI,n.position.z=-1e-5,this.texture=new ss(this.app.view),i.material.map=this.texture,n.material.map=this.texture,this.add(i,n)}redraw(e,t,s){const i=s.getStyle(),n=s.clone().multiplyScalar(.8).getStyle();this.nameText.text=e,this.nameText.style.fill=i,this.nameText.style.stroke=n,this.titleText.text=t,this.titleText.style.fill=i,this.titleText.style.stroke=n,this.needsUpdate=!0}update(){super.update(),this.needsUpdate&&(this.app.render(),this.texture.needsUpdate=!0,this.needsUpdate=!1)}}class Mi extends T{constructor(){super();d(this,"question");d(this,"exclamation");d(this,"submissionInfo");d(this,"objects");this.objects=new ht,this.question=x.get(Ue).children[0],this.exclamation=x.get(Ue).children[1],this.question.position.y=.4,this.exclamation.position.y=.4,this.question.visible=!1,this.exclamation.visible=!1,Pe(this.question,new E(16711680)),Pe(this.exclamation,new E(65280)),this.objects.add(this.question),this.objects.add(this.exclamation),this.add(this.objects),this.add(this.submissionInfo=new yi),this.submissionInfo.scale.set(.01,.01,.01),this.position.y=.5}start(){D.on("submit",e=>{const t=de.timeline();t.timeScale(1/2.5),t.call(()=>{var s;this.question.visible=!0,this.objects.rotation.x=Math.PI*.3,this.objects.position.z=0,this.submissionInfo.visible=!0,this.submissionInfo.redraw((s=W.getUser(e.userid))==null?void 0:s.displayName,e.title,new E(16711680))}),t.to(this.objects.rotation,.3,{x:0,ease:ge.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:.1,ease:ge.easeIn.config(1,.3)},"+=0.1"),t.call(()=>{this.question.visible=!1,this.exclamation.visible=!0,this.submissionInfo.redraw("Solved!","",new E(65280))}),t.to(this.objects.position,.15,{z:0,ease:ge.easeOut.config(1,.3)}),t.to(this.objects.position,.15,{z:-.1,ease:ge.easeIn.config(1,.3)},"+=0.15"),t.call(()=>{this.exclamation.visible=!1,this.submissionInfo.visible=!1})})}update(){super.update(),this.rotation.y+=Math.PI*M.deltaTime*.3,this.position.y=Math.sin(M.time*Math.PI/2)*.1+.5,this.question.material[0].uniforms.time.value=M.time,this.exclamation.material[0].uniforms.time.value=M.time,this.question.material[1].uniforms.time.value=M.time,this.exclamation.material[1].uniforms.time.value=M.time}}class Ci extends T{constructor(){super();d(this,"objectPool",{});this.add(new Mi)}start(){super.start(),this.setPrefabs(),this.position.add(new H(0,.1,0)),D.on("recalculatestart",()=>{}),D.on("recalculateend",()=>{this.removeAllObject(),this.createCircuit()}),this.createObject("CPU").position.set(-.5,0,-.5)}update(){super.update()}createCircuit(){const[e,t,s]=fe.getCircuitInfo();console.log(e,t,s);const i=-e.sizeX/2-.5,n=0,o=-e.sizeY/2-.5;t.forEach(a=>{let c="";a.category==""?c="CPU":a.isBig?c="Big"+a.category:c=a.category;const u=this.createObject(c);u!=null&&u.position.set(a.x+i,0+n,a.z+o)}),s.forEach(a=>{a.wires.forEach(c=>{const u=this.createObject("Wire"+c.toString());u!=null&&u.position.set(a.x+i,0+n,a.z+o)})})}setPrefabs(){const e=x.get(ee.cpuPath);e.visible=!1,this.objectPool.CPU=[[e],1],this.add(e);for(const s in ee.partsBigPath){const i=x.get(ee.partsBigPath[s]);i!=null&&(i.visible=!1,this.objectPool["Big"+s]=[[i],1],this.add(i))}for(const s in ee.partsPath){const i=x.get(ee.partsPath[s]);i!=null&&(i.visible=!1,this.objectPool[s]=[[i],1],this.add(i))}const t=s=>{const i=new Ae(s),n=new me(i.geometry,i.material);n.visible=!1,this.objectPool["Wire"+s.toString()]=[[n],1],this.add(n)};for(let s=0;s<32;s++){let i=[s,-1];t(i);const n=s%8,o=(s-n)/8;[15-n,23-n,31-n].forEach(c=>{const u=((c+8*o)%32+32)%32;i=[s,u],t(i)})}}createObject(e){if(this.objectPool[e]==null)return;const[t,s]=this.objectPool[e];let i;s>=t.length?(i=t[0].clone(),t.push(i),this.add(i)):i=t[s],i.visible=!0;const n=s+1;return this.objectPool[e]=[t,n],i}removeAllObject(){for(const e in this.objectPool)this.objectPool[e][0].forEach(t=>t.visible=!1),this.objectPool[e][1]=1}}const lt={uniforms:{tDiffuse:{value:null},progress:{value:0}},vertexShader:`
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
  `},ut={vertexShader:`
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
  `};class Di extends is{constructor(e,t,s,i){super();d(this,"camera");d(this,"scene");d(this,"material");d(this,"depthMaterial");d(this,"depthTexture");d(this,"oldClearColor");d(this,"fsQuad");this.camera=t,this.scene=e,this.depthTexture=new rs(s,i),this.depthMaterial=new se({uniforms:{progress:{value:0}},side:At,vertexShader:ut.vertexShader,fragmentShader:ut.fragmentShader}),this.material=new se({defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},tDepth:{value:this.depthTexture.texture},near:{value:t.near},far:{value:t.far},progress:{value:0}},vertexShader:lt.vertexShader,fragmentShader:lt.fragmentShader}),this.oldClearColor=new E,this.fsQuad=new ns(this.material)}setSize(e,t){this.depthTexture.setSize(e,t)}render(e,t,s){e.getClearColor(this.oldClearColor);const i=e.getClearAlpha(),n=e.autoClear;e.autoClear=!1,M.time*.05&&(this.depthMaterial.uniforms.progress.value=M.time*.2%1,this.scene.overrideMaterial=this.depthMaterial,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.depthTexture),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.material.uniforms.tDiffuse.value=s.texture),this.material.uniforms.near.value=this.camera.near,this.material.uniforms.far.value=this.camera.far,this.material.uniforms.progress.value=Math.min(1,M.time*.05),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor),e.setClearAlpha(i),e.autoClear=n}}const _e=class{constructor(){d(this,"renderer",null);d(this,"camera",null);d(this,"composer",null);d(this,"_tick",null);d(this,"isLoaded",!1);d(this,"isStartCalled",!1);d(this,"isFirstTickCalled",!1)}static getInstance(){return this.instance?this.instance:(this.instance=new _e,this.instance)}get tick(){return this._tick}get isInitialized(){return this.isLoaded}resize(e,t){!this.renderer||!this.camera||!this.composer||(this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t))}setup(e){const t=new os({canvas:e,antialias:!0});t.setClearColor(new E(1114129));const s=new as(t);this.composer=s;const i=new oi,n=new cs;n.add(new ei,new ni,new mi,new Ci),ks(),D.on("start",()=>{console.log("start ctf")}),D.on("end",()=>{console.log("end ctf")}),D.on("recalculatestart",async()=>{console.log("recalculatestart")}),D.on("recalculateend",async()=>{console.log("recalculateend")}),s.addPass(new ls(n,i));const o=new Di(n,i,e.width,e.height);s.addPass(o),this._tick=()=>{var a;!this.isLoaded||!this.isStartCalled||(this.isFirstTickCalled||(M.start(performance.now()),(a=this.camera)==null||a.start(),this.isFirstTickCalled=!0),M.update(performance.now()),i.update(),n.children.map(c=>{(c instanceof T||c instanceof X)&&c.update()}),s.render())},this.renderer=t,this.camera=i,vi().then(()=>{this.isLoaded=!0,Ts()})}start(){this.isStartCalled=!0}};let te=_e;d(te,"instance");const zi=({width:r,height:e})=>{const t=f.exports.useRef(null),[s,i]=f.exports.useState({width:r,height:e}),[n,o]=f.exports.useState(new z(new ae)),[a,c]=f.exports.useState("loading");h.exports.useTick(()=>{n.update();const w=te.getInstance().tick;w&&w()}),f.exports.useEffect(()=>{te.getInstance().resize(r,e),n.update(),i({width:r,height:e})},[r,e]);const u=()=>{const w=document.createElement("canvas");document.body.appendChild(w),t.current=w,te.getInstance().setup(w),te.getInstance().resize(r,e),o(new z(ae.from(w))),c("splashscreen")},A=()=>{te.getInstance().start(),c("visualizer")};return l(ie,{children:(w=>w==="loading"?l(Os,{width:r,height:e,loadedHandler:u}):w==="splashscreen"?l(Ls,{width:r,height:e,onComplete:A}):l(h.exports.Sprite,{texture:n,width:s.width,height:s.height}))(a)})},Qe=r=>("00"+r).slice(-2),Bi=({x:r,y:e,width:t,height:s})=>{const[i,n]=f.exports.useState(""),[o,a]=f.exports.useState("");return h.exports.useTick(()=>{const c=new Date;if(n(`${c.getHours()}:${Qe(c.getMinutes())}:${Qe(c.getSeconds())}`),!te.getInstance().isInitialized)return;const u=Math.ceil((Be.endTime.getTime()-c.getTime())/1e3/60);a(`\u6B8B\u308A: ${Math.floor(u/60)}\u6642\u9593${Qe(u%60)}\u5206`)}),k(h.exports.Container,{mask:f.exports.useMemo(()=>new pt().drawRect(r,e,t,s),[r,e,t,s]),children:[l(h.exports.Text,{text:i,anchor:.5,position:[t/2,s/2],style:new j({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:50,fill:"#000000"})}),l(h.exports.Text,{text:o,anchor:.5,position:[t/2,s/2-50],style:new j({align:"right",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:30,fill:"#000000"})})]})},Pi=`# VisualizerOS(\u4EEE\u79F0)
\u305B\u3044\u3055\u304F\u3057\u3083: Fogrex, Renard, Uzaki

## \u4F7F\u3044\u65B9
\u30A2\u30A4\u30B3\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u8D77\u52D5
(\u6CE8\u610F: Visualizer\u306F\u4E00\u5EA6\u3057\u304B\u8D77\u52D5\u3067\u304D\u307E\u305B\u3093)

\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u306B\u3042\u308B\u30DC\u30BF\u30F3\u306F
\u305D\u308C\u305E\u308C\u6700\u5C0F\u5316\u3001\u6700\u5927\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7D42\u4E86\u3067\u3059\u3002
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30D8\u30C3\u30C0\u30FC\u3092\u3064\u304B\u3093\u3067\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u79FB\u52D5\u304C\u51FA\u6765\u307E\u3059\u3057\u3001
\u30A6\u30A4\u30F3\u30C9\u30A6\u7AEF\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308C\u3070
\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u30B5\u30A4\u30BA\u3092\u5909\u3048\u3089\u308C\u307E\u3059\u3002`,Si=({x:r,y:e,width:t,height:s})=>l(h.exports.Container,{mask:f.exports.useMemo(()=>new pt().drawRect(r,e,t,s),[r,e,t,s]),children:l(h.exports.Text,{text:Pi,anchor:0,position:[0,0],style:new j({align:"left",fontFamily:"Roboto, Helvetica, sans-serif",fontSize:32,fill:"#000000"})})});var bi="/Visualizer/assets/clock-icon.77140fc3.png",Ei="/Visualizer/assets/visualizer-icon.4fa4c0d3.png";const je=z.from(bi),Ii={Component:null,icon:je,title:"Clock",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},Wt={visualizer:{Component:zi,icon:z.from(Ei),title:"Visualizer",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!0},clock:{Component:Bi,icon:je,title:"Clock.exe",rect:{x:0,y:0,width:500,height:500},visible:!0,fullscreen:!1},readme:{Component:Si,icon:je,title:"Readme.txt",rect:{x:0,y:0,width:850,height:600},visible:!0,fullscreen:!1}},we=Q/5,Gi=({id:r,iconInfo:e,position:t})=>{const{windowSettings:{windows:s,update:i,starting:n}}=f.exports.useContext(N),o=f.exports.useRef(0),a=()=>{const u=o.current;if(o.current=performance.now(),o.current-u>600)return;const A=Wt[r];s[r]||!A||i(r,A)},c=f.exports.useCallback(u=>{u.clear(),n===r&&(u.beginFill(11184895,.5),u.drawRect(0,0,Q,Q))},[n]);return k(h.exports.Container,{position:t,interactive:!0,click:a,children:[l(h.exports.Graphics,{draw:c}),l(h.exports.Sprite,{texture:e.icon,position:[we/2,0],width:Q-we,height:Q-we}),l(h.exports.Text,{text:e.title,anchor:[.5,0],position:[Q/2,Q-we],style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:we,fill:"#000"})})]})};var ki="/Visualizer/assets/xp.3ff07b20.jpg";const Ze=12,Ti=()=>{const{width:r,height:e}=f.exports.useContext(N),t=Math.max(1,Math.floor((e-Z-(Q+Ze))/Q));return k(ie,{children:[l(h.exports.Sprite,{image:ki,anchor:0,x:0,y:0,width:r,height:e-Z}),l(h.exports.Container,{position:[Q/2,Q/2],children:Object.entries(Wt).map(([s,i],n)=>l(Gi,{id:s,iconInfo:i,position:[Math.floor(n/t)*(Q+Ze),n%t*(Q+Ze)]},s))})]})},Fi=(r,e,t,s)=>{const i=B,n=16,o=[0,0],a=[0,0];let c="none";const u={x:0,y:0};let A=!1,m="pointer",w={x:0,y:0,width:0,height:0};return{mouseDownHandler:v=>C=>{u.x=C.data.global.x,u.y=C.data.global.y,v.fullscreen?w={x:0,y:0,width:t,height:s-Z}:w=v.rect,e.focus(r),!(o[0]===0&&o[1]===0&&u.y-w.y>i)&&(a[0]=o[0],a[1]=o[1],c=o[0]===0&&o[1]===0?"move":"scale",e.update(r,P(y({},v),{rect:w,fullscreen:!1})))},mouseMoveHandler:v=>C=>{if(c!=="none")if(c==="move")m="grabbing",e.update(r,P(y({},v),{rect:{x:w.x+C.offsetX-u.x,y:w.y+C.offsetY-u.y,width:v.rect.width,height:v.rect.height}}));else{const g=y({},w),O=200,L=200;a[0]===1?g.width=Math.max(O,w.width-u.x+C.offsetX):a[0]===-1&&(g.width=Math.max(O,u.x+w.width-C.offsetX),g.x=Math.min(w.x+w.width-O,w.x-u.x+C.offsetX)),a[1]===1?g.height=Math.max(L,w.height-u.y+C.offsetY):a[1]===-1&&(g.height=Math.max(L,u.y+w.height-C.offsetY),g.y=Math.min(w.y+w.height-L,w.y-u.y+C.offsetY)),g.width=Math.max(200,g.width),g.height=Math.max(B,g.height),e.update(r,P(y({},v),{rect:g}))}},mouseUpHandler:()=>()=>{c="none"},cursorMouseMoveHandler:v=>C=>{const g=v.fullscreen?{x:0,y:0,width:t,height:s-Z}:v.rect;C.data.global.x-g.x<n?o[0]=-1:g.x+g.width-C.data.global.x<n?o[0]=1:o[0]=0,C.data.global.y-g.y<n?o[1]=-1:g.y+g.height-C.data.global.y<n?o[1]=1:o[1]=0,o[0]*o[1]===1?m="nwse-resize":o[0]*o[1]===-1?m="nesw-resize":o[0]!==0?m="ew-resize":o[1]!==0?m="ns-resize":C.data.global.y-g.y<i?m="grab":m="default"},mouseOverHandler:()=>{A=!0},mouseOutHandler:()=>{A=!1},getCursor:()=>A?m:""}};var Rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAASCAYAAAANKtEjAAAAAXNSR0IArs4c6QAAAKxJREFUaIHt2cENhSAQhOHZ138rVmMDdvK8GRCJEb2w838XMe4aJJmIMdZl++upkKIYH4eLsSRFlCfVpdt7SaGyvVv/tr+ab10w1h9t/dv+Xn3T31nv2+e96E/u98VNfJYL2XwSAGBWBADWCACsDQWAPT+y4A0AawQA1ggArOUJwAwfJhPM0eknmJQpAMAAAgBrBADWCIA5rx1/iwDAGgGANQIAawTAjPue/2wHUxID2pDayCwAAAAASUVORK5CYII=",Qi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAASCAYAAAANKtEjAAAAAXNSR0IArs4c6QAAAIRJREFUaIHt0zEOg0AMRUE7R4+4N2kSCcECISko/kyD5HXBrvR6ek5z/aG7N9/hrLqqz2df7S/ORrOr+5tZve+wmh2d7c4+9/pxf/Q2V/ePZuked/8A3EkARBMA0QRANAEQTQBEEwDRBEA0ARBNAEQTANEEQDQBEE0ARBMA0QRANAEQ7QXZOwNyd1T76wAAAABJRU5ErkJggg==";const Yt=({width:r,height:e,bgColor:t=16777215})=>{const s=f.exports.useCallback(i=>{i.clear(),i.beginFill(t),i.drawRect(0,0,r,e),i.endFill()},[r,e]);return l(h.exports.Graphics,{draw:s})};var Zi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAjCAYAAABLuFAHAAAAAXNSR0IArs4c6QAAAMpJREFUSIntljEKwjAARV9sT+AJnARBB49gRzf1GuLkVpykm5N4Dt1cSuPgroNFwVnEycHZUgeplIYqqQoi/eMnj08I/B+x3axCMqjb62MCVKp1LdAZOgB3GGDnr7XTC9pETGbSCPZFAGqdkoi8i38KAQ7h8XPJOZzDOfw/sNIkRvkMQLxVkw3yneTpbJ56uN1qPoe5Gsilq9ie9JR6VmEzAEAu5KM901blh54KYDIeAbwcQAW2B3b2ZJ3Be//O0d7qSlgNK9PPAOAGSlQ1kR+eHVUAAAAASUVORK5CYII=";const q=new ae(Zi),_={topLeft:new z(q,new I(0,0,6,26)),top:new z(q,new I(6,0,3,26)),topRight:new z(q,new I(9,0,6,26)),right:new z(q,new I(9,26,6,3)),bottomRight:new z(q,new I(9,29,6,6)),bottom:new z(q,new I(6,29,3,6)),bottomLeft:new z(q,new I(0,29,6,6)),left:new z(q,new I(0,26,6,3))},Wi=({width:r,height:e})=>k(ie,{children:[l(h.exports.Sprite,{texture:_.topLeft,position:[0,0],width:p,height:B}),l(h.exports.Sprite,{texture:_.top,position:[p,0],width:r-p*2,height:B}),l(h.exports.Sprite,{texture:_.topRight,position:[r-p,0],width:p,height:B}),l(h.exports.Sprite,{texture:_.right,position:[r-p,B],width:p,height:e-B-p}),l(h.exports.Sprite,{texture:_.bottomRight,position:[r-p,e-p],width:p,height:p}),l(h.exports.Sprite,{texture:_.bottom,position:[p,e-p],width:r-p*2,height:p}),l(h.exports.Sprite,{texture:_.bottomLeft,position:[0,e-p],width:p,height:p}),l(h.exports.Sprite,{texture:_.left,position:[0,B],width:p,height:e-B-p})]});var Ri="/Visualizer/assets/close.d415dcd5.png",Yi="/Visualizer/assets/fullscreen.f7ccf43f.png",Hi="data:image/png;base64,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";const V=()=>(B-ye*2)*.9,Ui=({onKill:r,onMinimize:e,onMaximize:t})=>{const s=[];let i=0;return r&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],image:Ri,width:V(),height:V(),position:[-i*V(),0],interactive:!0,click:r},"kill")),i++),t&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],image:Yi,width:V(),height:V(),position:[-i*V(),0],interactive:!0,click:t},"maximize")),i++),e&&(s.push(l(h.exports.Sprite,{anchor:[1,.5],image:Hi,width:V(),height:V(),position:[-i*V(),0],interactive:!0,click:e},"minimize")),i++),l(ie,{children:s})},Ht=r=>r-p*2,ue=r=>r-B-p,qe=({icon:r,width:e,height:t,title:s,isActive:i=!0,onMinimize:n,onMaximize:o,onKill:a,children:c})=>k(ie,{children:[k(h.exports.Container,{position:[0,0],children:[l(Wi,{width:e,height:t}),l(h.exports.Sprite,{image:i?Rt:Qi,width:e-p*2,height:B-ye*2,position:[p,ye]}),r?l(h.exports.Sprite,{texture:r,width:V(),height:V(),position:[p+2,ye]}):null,l(h.exports.Text,{text:s,anchor:[0,.5],position:[p+2+(r?V()+2:0),B/2],style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:B*.5,fill:"#000"})}),l(h.exports.Container,{position:[e-p,B/2],children:l(Ui,{onKill:a,onMaximize:o,onMinimize:n})})]}),k(h.exports.Container,{position:[p,B],children:[c?l(Yt,{width:e-p*2,height:t-B-p}):null,c]})]}),Vi=({id:r,windowInfo:e,focus:t})=>{const{width:s,height:i}=f.exports.useContext(N),{title:n,visible:o,fullscreen:a,Component:c}=e,[u,A]=f.exports.useState(!1),m=a?{x:0,y:0,width:s,height:i-Z}:e.rect,{windowSettings:w}=f.exports.useContext(N),S=f.exports.useRef(e),b=()=>{w.update(r,P(y({},e),{fullscreen:!e.fullscreen}))},R=()=>{w.minimize(r)},K=()=>{w.kill(r)};f.exports.useEffect(()=>{S.current=e},[e]);const[v,C]=f.exports.useState({mouseDownHandler:null,cursorMouseMoveHandler:null,mouseOverHandler:null,mouseOutHandler:null,getCursor:null});return f.exports.useEffect(()=>{const g=setTimeout(()=>{A(!0)},1500),{mouseDownHandler:O,mouseMoveHandler:L,mouseUpHandler:re,cursorMouseMoveHandler:ce,mouseOutHandler:G,mouseOverHandler:he,getCursor:Y}=Fi(r,w,s,i);C({mouseDownHandler:O,cursorMouseMoveHandler:ce,mouseOverHandler:he,mouseOutHandler:G,getCursor:Y});const ve=ne=>{L(S.current||e)(ne)},Ee=()=>{re()()},le=document.getElementById("pixicanvas");if(!!le)return le.addEventListener("mousemove",ve),le.addEventListener("mouseup",Ee),()=>{clearTimeout(g),le.removeEventListener("mousemove",ve),le.removeEventListener("mouseup",Ee)}},[]),h.exports.useTick(()=>{v.getCursor&&v.getCursor()&&!zt()&&Qs(v.getCursor())}),l(h.exports.Container,{position:o?[m.x,m.y]:[m.x,-99999],interactive:!0,mousedown:v.mouseDownHandler?v.mouseDownHandler(e):()=>"",mousemove:v.cursorMouseMoveHandler?v.cursorMouseMoveHandler(e):()=>"",mouseover:v.mouseOverHandler?v.mouseOverHandler:()=>"",mouseout:v.mouseOutHandler?v.mouseOutHandler:()=>"",children:l(qe,{width:m.width,height:m.height,title:n,icon:e.icon,isActive:t,onMinimize:R,onMaximize:b,onKill:r==="visualizer"?void 0:K,children:u?c?l(c,{x:m.x+p,y:m.y+B,width:Ht(m.width),height:ue(m.height)}):l(h.exports.Container,{}):null})})};var Oi="/Visualizer/assets/youareanidiot_black.591803b6.png",ji="/Visualizer/assets/youareanidiot_white.b7e9dc2a.png";const Ni=({width:r,height:e,trans:t})=>{const s=r*.7,i=s/1576*994,n=f.exports.useRef(null),o=f.exports.useRef([0,0]),a=f.exports.useRef([0,0]);return f.exports.useEffect(()=>{const c=Math.PI*Math.random();a.current=[Math.cos(c)*90,Math.sin(c)*90]},[]),h.exports.useTick(c=>{if(!n.current||!o.current||!a.current)return;a.current[1]+=98*c/30;const u=[o.current[0]+a.current[0]*c/30,o.current[1]+a.current[1]*c/30];u[0]<0?(u[0]=0,a.current[0]*=-1):u[0]>r-s?(u[0]=r-s,a.current[0]*=-1):u[1]>Math.max(1,e-i)&&(u[1]=Math.max(1,e-i),a.current[1]*=-1),o.current=u,n.current.position.set(u[0],u[1])}),l(h.exports.Container,{ref:n,children:l(qe,{width:s,height:i,title:"Hahahahahaha",children:l(h.exports.Sprite,{image:t?Oi:ji,width:Ht(s),height:ue(i)})})})},Li=({width:r,height:e})=>{const[t,s]=f.exports.useState(!1);return h.exports.useTick(()=>{const i=performance.now();s(Math.floor(i/500)%2==0)}),l(ie,{children:new Array(10).fill(null).map((i,n)=>l(Ni,{width:r,height:e,index:n,trans:t},n))})},Ji=()=>{const{width:r,height:e,windowSettings:{windows:t,windowIndices:s,starting:i}}=f.exports.useContext(N);h.exports.useTick(()=>{document.body.style.cursor=i?"wait":zt()||"default",Zs()});const[n,o]=f.exports.useState(!1);return f.exports.useEffect(()=>{const a=()=>{const u=new Date().getTime();Be.endTime.getTime()<u&&o(!0)},c=()=>{o(!0)};return D.on("initialized",a),D.on("end",c),()=>{D.off("initialized",a),D.off("end",c)}},[]),k(ie,{children:[l(Ti,{}),s.map((a,c)=>l(Vi,{windowInfo:t[a]||Ii,id:a,focus:c===s.length-1},a)),n?l(Li,{width:r,height:e}):null]})};var Xi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFnUlEQVR4Ae3YsXFCURAEQUInDqWgIIhAMX2VEtiSMd61gfWqMLg2Znm9vz6Pj9+AAQYYYIABBgoDr+JLfAeMDDDAAAMMMPBnQFj4x8Y/VgwwwAADDGQGhAVMGSZrxVphgAEGGBAWwkJYMMAAAwwwkBkQFjBlmCwVS4UBBhhgQFgIC2HBAAMMMMBAZkBYwJRhslQsFQYYYICBf4fF98/z+PgNGGCAAQYYYGAZEBaCSTAywAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBkQFjBlmKyRG2vEnd2ZAQaWAWEhLIQFAwwwwAADmQFhAVOGaRWsNwuHAQYYuGFAWAgLYcEAAwwwwEBmQFjAlGGyRm6sEXd2ZwYYWAaEhbAQFgwwwAADDGQGhAVMGaZVsN4sHAYYYOCGAWEhLIQFAwwwwAADmQFhAVOGyRq5sUbc2Z0ZYGAZEBbCQlgwwAADDDCQGRAWMGWYVsF6s3AYYICBGwaEhbAQFgwwwAADDGQGhAVMGSZr5MYacWd3ZoCBZUBYCAthwQADDDDAQGZAWMCUYVoF683CYYABBm4YEBbCQlgwwAADDDCQGRAWMGWYrJEba8Sd3ZkBBpYBYSEshAUDDDDAAAOZAWEBU4ZpFaw3C4cBBhi4YUBYCAthwQADDDDAQGZAWMCUYbJGbqwRd3ZnBhhYBoSFsBAWDDDAAAMMZAaEBUwZplWw3iwcBhhg4IYBYSEshAUDDDDAAAOZAWEBU4bJGrmxRtzZnRlgYBkQFsJCWDDAAAMMMJAZEBYwZZhWwXqzcBhggIEbBoSFsBAWDDDAAAMMZAaEBUwZJmvkxhpxZ3dmgIFlQFgIC2HBAAMMMMBAZkBYwJRhWgXrzcJhgAEGbhgQFsJCWDDAAAMMMJAZEBYwZZiskRtrxJ3dmQEGlgFhISyEBQMMMMAAA5kBYQFThmkVrDcLhwEGGLhhQFgIC2HBAAMMMMBAZkBYwJRhskZurBF3dmcGGFgGhIWwEBYMMMAAAwxkBoQFTBmmVbDeLBwGGGDghgFhISyEBQMMMMAAA5kBYQFThskaubFG3NmdGWBgGRAWwkJYMMAAAwwwkBkQFjBlmFbBerNwGGCAgRsGhIWwEBYMMMAAAwxkBoQFTBkma+TGGnFnd2aAgWVAWAgLYcEAAwwwwEBmQFjAlGFaBevNwmGAAQZuGBAWwkJYMMAAAwwwkBn4BbHYyZnBHIeHAAAAAElFTkSuQmCC",Ki="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABgCAYAAABBozsmAAAFxklEQVR4Ae3Zy01cURRFwRca+ToWYsIiAU63WKNNWfLo+iP6lKy1zfPv8+vLT58BAwwwwAADDPxk4Hn1x09/iDfIGGCAAQYYYODbwKtd8QADDAMMMMAAAwxcBoSFb/H4FhcDDDDAAAOZAWEBU4bpqljvlg4DDDCwb0BYCAthwQADDDDAQGZAWMCUYbJE9peIG7sxAwxcBoSFsBAWDDDAAAMMZAaEBUwZpqtivVs6DDDAwL6B53k+XvoJwz4GN3ZjBhhggIHfGngpKr7j47d/kd8PKwMMMMAAA/sGhIVvhfhWCAMMMMAAA5kBYQFThskS2V8ibuzGDDBwGRAWwkJYMMAAAwwwkBkQFjBlmK6K9W7pMMAAA/sGhIWwEBYMMMAAAwxkBoQFTBkmS2R/ibixGzPAwGVAWAgLYcEAAwwwwEBmQFjAlGG6Kta7pcMAAwzsGxAWwkJYMMAAAwwwkBkQFjBlmCyR/SXixm7MAAOXAWEhLIQFAwwwwAADmQFhAVOG6apY75YOAwwwsG9AWAgLYcEAAwwwwEBmQFjAlGGyRPaXiBu7MQMMXAaEhbAQFgwwwAADDGQGhAVMGaarYr1bOgwwwMC+AWEhLIQFAwwwwAADmQFhAVOGyRLZXyJu7MYMMHAZEBbCQlgwwAADDDCQGRAWMGWYror1bukwwAAD+waEhbAQFgwwwAADDGQGhAVMGSZLZH+JuLEbM8DAZUBYCAthwQADDDDAQGZAWMCUYboq1rulwwADDOwbEBbCQlgwwAADDDCQGRAWMGWYLJH9JeLGbswAA5cBYSEshAUDDDDAAAOZAWEBU4bpqljvlg4DDDCwb0BYCAthwQADDDDAQGZAWMCUYbJE9peIG7sxAwxcBoSFsBAWDDDAAAMMZAaEBUwZpqtivVs6DDDAwL4BYSEshAUDDDDAAAOZAWEBU4bJEtlfIm7sxgwwcBkQFsJCWDDAAAMMMJAZEBYwZZiuivVu6TDAAAP7BoSFsBAWDDDAAAMMZAaEBUwZJktkf4m4sRszwMBlQFgIC2HBAAMMMMBAZkBYwJRhuirWu6XDAAMM7BsQFsJCWDDAAAMMMJAZEBYwZZgskf0l4sZuzAADlwFhISyEBQMMMMAAA5kBYQFThumqWO+WDgMMMLBvQFgIC2HBAAMMMMBAZkBYwJRhskT2l4gbuzEDDFwGhIWwEBYMMMAAAwxkBoQFTBmmq2K9WzoMMMDAvgFhISyEBQMMMMAAA5kBYQFThskS2V8ibuzGDDBwGRAWwkJYMMAAAwwwkBkQFjBlmK6K9W7pMMAAA/sGhIWwEBYMMMAAAwxkBoQFTBkmS2R/ibixGzPAwGVAWAgLYcEAAwwwwEBmQFjAlGG6Kta7pcMAAwzsGxAWwkJYMMAAAwwwkBkQFjBlmCyR/SXixm7MAAOXAWEhLIQFAwwwwAADmQFhAVOG6apY75YOAwwwsG9AWAgLYcEAAwwwwEBmQFjAlGGyRPaXiBu7MQMMXAaEhbAQFgwwwAADDGQGhAVMGaarYr1bOgwwwMC+AWEhLIQFAwwwwAADmQFhAVOGyRLZXyJu7MYMMHAZEBbCQlgwwAADDDCQGRAWMGWYror1bukwwAAD+waEhbAQFgwwwAADDGQGhAVMGSZLZH+JuLEbM8DAZUBYCAthwQADDDDAQGZAWMCUYboq1rulwwADDOwbEBbCQlgwwAADDDCQGRAWMGWYLJH9JeLGbswAA5cBYSEshAUDDDDAAAOZAWEBU4bpqljvlg4DDDCwb0BYCAthwQADDDDAQGbg5bB4Xv/x8cYf6tc+j8/AZ8AAAwww8BcNvFwWf/HD8TX7R4EBBhhggIH3DAgL/xPjf1cYYIABBhjIDAgLmDJMqv69qvd5+bwYYGDRgLAQFsKCAQYYYICBzICwgCnDtFjeviaLkgEGGHjPgLAQFsKCAQYYYICBzICwgCnDpOrfq3qfl8+LAQbmDPwHvh9rjRlR2xwAAAAASUVORK5CYII=";const qi=({id:r,index:e})=>{const{windowSettings:{windows:t,focused:s,focus:i,minimize:n}}=f.exports.useContext(N),o=t[r];if(!o)return l(ie,{children:null});const{title:a,visible:c}=o,u=f.exports.useMemo(()=>new z(new ae(Xi)),[]),A=f.exports.useMemo(()=>new z(new ae(Ki)),[]);return k(h.exports.Container,{position:[e*ot,Z/2],interactive:!0,click:()=>s===r?n(r):i(r),children:[l(h.exports.Sprite,{width:ot*.9,height:Z*.9,texture:c?u:A,anchor:[0,.5],position:[0,0]}),l(h.exports.Sprite,{width:Z*.6,height:Z*.6,texture:o.icon,anchor:[0,.5],position:[7,0]}),l(h.exports.Text,{text:a,anchor:[0,.5],position:[14+Z*.6,0],style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:Z*.5*.8,fill:"#000"})})]})},_i=()=>{const{width:r,height:e,windowSettings:{windowStack:t}}=f.exports.useContext(N);return k(h.exports.Container,{position:[0,e-Z],children:[l(h.exports.Sprite,{image:Rt,width:r,height:Z,anchor:0,position:[0,0]}),l(h.exports.Container,{position:[200,0],children:t.map((s,i)=>l(qi,{id:s,index:i},s))})]})};var $i=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class er extends Le{constructor(){super(void 0,$i,{dimensions:[0,0]})}apply(e,t,s,i){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,i)}}var tr=`// lens distortion https://www.shadertoy.com/view/4lSGRw

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
}`;class sr extends Le{constructor(){super(void 0,tr,{dimensions:[0,0]})}apply(e,t,s,i){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,e.applyFilter(this,t,s,i)}}var ir=`precision mediump float;

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
}`;class rr extends Le{constructor(){super(void 0,ir,{dimensions:[0,0],devicePixelRatio:0,lineWidth:[1,0],blend:.5})}apply(e,t,s,i){const{width:n,height:o}=t.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.devicePixelRatio=window.devicePixelRatio,e.applyFilter(this,t,s,i)}set lineWidth(e){this.uniforms.lineWidth=e}set blend(e){this.uniforms.blend=e}}const nr="_main_11f2u_1";var or={main:nr};const ar=()=>{const{width:r,height:e}=f.exports.useContext(N),[t,s]=f.exports.useState(!0),i={width:500,height:180,left:r*.5-250,top:e*.5-90};return t?k(h.exports.Container,{children:[l(Yt,{bgColor:0,width:r,height:e}),l(h.exports.Container,{position:[i.left,i.top],children:k(qe,{width:i.width,height:i.height,title:"\u97F3\u3092\u78BA\u8A8D\u3059\u308B(\u3057\u306A\u3055\u3044)",children:[l(h.exports.Text,{text:"\u97F3\u304C\u9E23\u30EA\u307E\u305A\u3088",anchor:[0,0],position:[5,5],style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:B*.5,fill:"#000"})}),l(h.exports.Text,{text:"\u3044\u3044\u306D",anchor:[0,1],position:[ue(i.width)-305,ue(i.height)-5],interactive:!0,click:()=>{at(1),s(!1),ze("mousedown"),ze("mouseup"),We("hdd")},style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:B*.5,fill:"#000"})}),l(h.exports.Text,{text:"\u3088\u304F\u306A\u3044\u306D",anchor:[1,1],position:[ue(i.width)-5,ue(i.height)-5],interactive:!0,click:()=>{at(0),s(!1)},style:new j({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:B*.5,fill:"#000"})})]})})]}):null},cr=({children:r,Context:e,render:t})=>l(e.Consumer,{children:s=>t(l(e.Provider,{value:s,children:r}))}),lr=t=>{var s=t,{children:r}=s,e=tt(s,["children"]);const{width:i,height:n}=f.exports.useContext(N);return l(cr,{Context:N,render:o=>l(h.exports.Stage,P(y({width:i,height:n},e),{children:o})),children:r})},ur=h.exports.withFilters(h.exports.Container,{hex:rr,bloom:us,colorshift:ds,lensDistortion:er,visnetting:sr}),dr=()=>{const r=()=>{ze("mousedown")},e=()=>{ze("mouseup")},t=h.exports.useApp();return f.exports.useEffect(()=>{t.ticker.maxFPS=30},[]),l(ur,{hex:{lineWidth:[2,2],blend:.5},bloom:{threshold:.1,bloomScale:.5,brightness:1,blur:1,quality:4},colorshift:{red:[-2,0],green:[0,0],blue:[2,0]},children:k(h.exports.Container,{mousedown:r,mouseup:e,interactive:!0,children:[l(_i,{}),l(Ji,{}),l(ar,{})]})})},hr=()=>l(gs,{children:l("main",{className:or.main,children:l(lr,{id:"pixicanvas",children:l(dr,{})})})});hs.render(l(ws.StrictMode,{children:l(hr,{})}),document.getElementById("root"));
