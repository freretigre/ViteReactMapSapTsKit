var f=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(n,t,o)=>t in n?f(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,m=(n,t)=>{for(var o in t||(t={}))x.call(t,o)&&v(n,o,t[o]);if(h)for(var o of h(t))S.call(t,o)&&v(n,o,t[o]);return n};import{c as b,t as I,s as N,a as $,b as k,l as E,j as c,d as e,O as g,r as s,B as d,u as R,e as C,_ as L,L as O,f as a,M as F,A as w,S as A,F as B,g as D,h as M,R as z,i as j,P as T}from"./vendor-35e15be4.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};H();const P={value:0},U=b({name:"counter",initialState:P,reducers:{increment:n=>{n.value+=1},decrement:n=>{n.value-=1},incrementByAmount:(n,t)=>{n.value+=t.payload}}}),p=m({},U);function*V(){}function*G(){yield I("USER_FETCH_REQUESTED",V)}const K=()=>{const n=N(),o=[...[n,k,E]],l=$({reducer:{counter:p.reducer},middleware:o,devTools:!0});return n.run(G),l},q=K();const J="index-module_login_3i7ll";var Q={login:J};const W=()=>c("div",{className:Q.logo,children:[e("h1",{children:"\u7528\u6237\u9996\u9875"}),e(g,{})]}),X="index-module_login_Up8TR";var Z={login:X};const Y=s.exports.memo(()=>e("div",{className:Z.logo,children:e("h1",{children:"\u7528\u6237\u767B\u5F55-\u9875\u9762"})})),ee="index-module_reg_1K7Si";var ne={reg:ee};const te=s.exports.memo(()=>e("div",{className:ne.reg,children:e("h1",{children:"\u7528\u6237\u6CE8\u518C-\u9875\u9762"})})),oe="index-module_analysis_3hpan";var re={analysis:oe};const se=n=>c(d,{children:[n.id,"-",n.lang]}),ie=s.exports.memo(()=>{const[n,t]=s.exports.useState("zh-CN"),o=()=>{t(!n||n==="zh-CN"?"en-US":"zh-CN")};return console.log("\u56FD\u9645\u5316\u8BED\u8A00\u5207\u6362: ",n),e("div",{className:re.analysis,children:c("div",{children:[e(d,{type:"primary",onClick:()=>{o()},children:"\u56FD\u9645\u5316\u8BED\u8A00\u5207\u6362"}),e(se,{id:"navbar.lang",lang:n})]})})}),y=()=>R(),_=C,ce=m({},p.actions),ae="index-module_counter_2XgD8";var le={counter:ae};const de=s.exports.memo(()=>{const n=y(),{decrement:t,increment:o,incrementByAmount:l}=ce,r=_(i=>i.counter.value);return console.log("count:",r),c("div",{className:le.count,children:[e("h1",{children:"\u4EE5\u4E0B\u662F\u4F7F\u7528 \u6700\u65B0\u7684 Redux \u5904\u7406\u6570\u636E"}),e(d,{"aria-label":"Increment value",onClick:()=>n(o()),children:"Increment"}),e("span",{children:r}),e(d,{"aria-label":"Decrement value",onClick:()=>n(t()),children:"Decrement"})]})}),ue="index-module_counter_1cZd7";var me={counter:ue};const he=s.exports.memo(()=>{y();const n=_(o=>o.counter.value),t={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"};return console.log("count:",n),e("div",{className:me.count,children:c(L,{autoplay:!0,children:[e("div",{children:e("h3",{style:t,children:"1"})}),e("div",{children:e("h3",{style:t,children:"2"})}),e("div",{children:e("h3",{style:t,children:"3"})}),e("div",{children:e("h3",{style:t,children:"4"})})]})})}),ve="index-module_normal_2ffiO";var ge={normal:ve},pe=s.exports.memo(()=>c("div",{className:ge.normal,children:[e("div",{className:"content"}),e("video",{className:"background",playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:e("source",{src:"https://static.frontendmasters.com/assets/fm/med/home/hero.mp4",type:"video/mp4"})})]}));const ye="index-module_normal_1VdVf";var _e={normal:ye},fe="/static/svg/icon_js-fdaa338d.svg",xe="/static/svg/icon_react-34cb58c9.svg",Se="/static/svg/icon_ts-ee962704.svg",be="/static/svg/icon_node-46884bfe.svg",Ie="/static/svg/icon_vue3-925cfd2c.svg",Ne="/static/svg/icon_angular-c4e004d8.svg",$e="/static/svg/icon_css3-e2101005.svg",ke="/static/svg/icon_d3-dc038787.svg",Ee="/static/svg/icon_webpack-48448520.svg",Re="/static/svg/icon_vite-c01b10bb.svg",Ce="/static/svg/icon_esbuild-d94350ac.svg",Le=s.exports.memo(()=>{const n=[{id:1001,name:"JS",icon:fe},{id:1002,name:"React",icon:xe},{id:1003,name:"TS",icon:Se},{id:1004,name:"Node",icon:be},{id:1005,name:"Vue3",icon:Ie},{id:1006,name:"Angular",icon:Ne},{id:1007,name:"CSS3",icon:$e},{id:1008,name:"D3",icon:ke},{id:1009,name:"Webpack",icon:Ee},{id:1010,name:"Vite",icon:Re},{id:1011,name:"EsBuild",icon:Ce}];return e("div",{className:_e.normal,children:e("div",{className:"wrap",children:n.map(t=>e("i",{className:"icon",children:e("img",{src:t.icon})},t.id))})})});const Oe="index-module_analysis_2vxcy";var Fe={analysis:Oe};const we=s.exports.memo(()=>c("div",{className:Fe.analysis,children:[e("h1",{children:"analysis-\u5206\u6790\u9875"}),e(pe,{}),e(Le,{}),e(he,{}),e(ie,{}),e("div",{children:e(de,{})})]})),Ae="index-module_analysis_RxqzT";var Be={analysis:Ae};const De=s.exports.memo(()=>e("div",{className:Be.analysis,children:c("div",{children:[e("h2",{children:"It looks like you're lost..."}),e("p",{children:e(O,{to:"/",children:"Go to the home page"})})]})})),Me="index-module_normal_3RwF7";var ze={normal:Me};const{SubMenu:je}=a;var Te=s.exports.memo(()=>{const[n,t]=s.exports.useState("mail"),o=l=>{console.log("click ",l),t(l.key)};return e("div",{className:ze.normal,children:c(a,{onClick:o,selectedKeys:[n],mode:"horizontal",children:[e(a.Item,{icon:e(F,{}),children:"Courses"},"mail"),e(a.Item,{disabled:!0,icon:e(w,{}),children:"Articles"},"app"),c(je,{icon:e(A,{}),title:"Learn",children:[c(a.ItemGroup,{title:"Item 1",children:[e(a.Item,{children:"Option 1"},"setting:1"),e(a.Item,{children:"Option 2"},"setting:2")]}),c(a.ItemGroup,{title:"Item 2",children:[e(a.Item,{children:"Option 3"},"setting:3"),e(a.Item,{children:"Option 4"},"setting:4")]})]},"SubMenu"),e(a.Item,{children:e("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer",children:"Navigation Four - Link"})},"alipay")]})})});const He=s.exports.memo(()=>c(B,{children:[e(Te,{}),e(g,{}),e("div",{children:e("h1",{children:"\u5E95\u90E8"})})]})),Pe=()=>M([{path:"/",element:e(He,{}),children:[{index:!0,element:e(we,{})},{path:"/user",element:e(W,{}),children:[{path:"/user/login",element:e(Y,{})},{path:"/user/reg",element:e(te,{})}]},{path:"*",element:e(De,{})}]}]),Ue=s.exports.memo(()=>e(D,{children:e(Pe,{})}));z.render(e(j.StrictMode,{children:e(T,{store:q,children:e(Ue,{})})}),document.getElementById("root"));
