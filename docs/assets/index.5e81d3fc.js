import{R as e,N as p,O as T,t as u,u as x,r as $,c as w,L as N,a as y,B as k,b as P,d as m,A as g}from"./vendor.ed6a35f9.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};B();const M="modulepreload",b={},z="/",d=function(n,i){return!i||i.length===0?n():Promise.all(i.map(o=>{if(o=`${z}${o}`,o in b)return;b[o]=!0;const t=o.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":M,t||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),t)return new Promise((_,a)=>{s.addEventListener("load",_),s.addEventListener("error",a)})})).then(()=>n())};const O="_main_1l4jy_1";var V={main:O};function R(){return e.createElement("svg",{className:V.main,fill:"currentColor",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M9.35762 2.14496C8.13548 1.86102 6.86444 1.86102 5.6423 2.14497C4.93642 1.71169 4.39704 1.51286 4.00502 1.42909C3.79189 1.38354 3.62296 1.37216 3.4959 1.37556C3.43249 1.37725 3.38001 1.38261 3.33821 1.38905C3.31733 1.39226 3.29919 1.39573 3.28375 1.39911C3.27603 1.4008 3.26899 1.40247 3.26264 1.40408L3.25362 1.40643L3.2495 1.40756L3.24753 1.40811L3.24563 1.40865C3.24562 1.40865 3.24563 1.40864 3.24563 1.40865C3.2452 1.40884 3.24731 1.41452 3.38299 1.88895L3.24563 1.40865C3.1036 1.44926 2.9868 1.55061 2.92657 1.68549C2.75841 2.06202 2.66657 2.46816 2.65635 2.88041C2.64875 3.18677 2.68634 3.49199 2.76743 3.78633C2.55433 4.04445 2.3807 4.33349 2.25276 4.64407C2.08484 5.05173 1.99894 5.4885 1.99998 5.92939C2.00011 7.48194 2.45815 8.52582 3.23873 9.19657C3.78563 9.66653 4.45048 9.91658 5.11619 10.0598C5.00626 10.3652 4.97773 10.6883 4.99998 11.0176V11.6158C4.59263 11.7015 4.31135 11.6744 4.11082 11.6082C3.85884 11.525 3.66566 11.3578 3.48139 11.1175C3.38806 10.9959 3.30208 10.8623 3.21179 10.7161L3.15448 10.6228C3.08377 10.5073 3.00746 10.3828 2.93045 10.2692C2.73964 9.9878 2.45813 9.63616 2.00195 9.51639L1.51834 9.38942L1.2644 10.3566L1.74801 10.4836C1.82746 10.5045 1.93204 10.5786 2.10279 10.8304C2.16553 10.9229 2.22538 11.0206 2.29372 11.1321C2.31518 11.1671 2.33753 11.2036 2.36102 11.2417C2.45488 11.3936 2.56253 11.5627 2.68796 11.7262C2.94119 12.0563 3.28597 12.389 3.79742 12.5578C4.14883 12.6738 4.54603 12.7016 4.99998 12.6319V14.5C4.99998 14.7761 5.22384 15 5.49998 15H9.49998C9.77613 15 9.99998 14.7761 9.99998 14.5V10.9375C9.99998 10.6217 9.98623 10.333 9.89735 10.0636C10.5597 9.92381 11.2193 9.67353 11.7626 9.20319C12.5429 8.52773 13 7.47445 13 5.9125L13 5.91089C12.9975 5.13212 12.7242 4.38197 12.2325 3.78635C12.3136 3.492 12.3512 3.18678 12.3436 2.88041C12.3334 2.46816 12.2416 2.06202 12.0734 1.68549C12.0131 1.55057 11.8963 1.44921 11.7542 1.40861L11.6169 1.88937C11.7542 1.40861 11.7528 1.40821 11.7523 1.40807L11.7504 1.40752L11.7462 1.4064L11.7372 1.40405C11.7309 1.40245 11.7238 1.40078 11.7161 1.39909C11.7007 1.39571 11.6826 1.39225 11.6617 1.38904C11.6199 1.38261 11.5674 1.37725 11.504 1.37556C11.3769 1.37216 11.2079 1.38354 10.9947 1.42908C10.6026 1.51286 10.0633 1.71168 9.35762 2.14496Z"}))}const j="_main_1tefe_1";var A={main:j};function S(){return e.createElement("svg",{className:A.main,xmlns:"http://www.w3.org/2000/svg",viewBox:"290 200 980 640",role:"img",fill:"currentColor"},e.createElement("path",{d:"M1263.192 395.43c-13.593-71.776-52.224-116.493-91.843-144.154-40.954-28.585-90.016-43.276-139.96-43.276H322.492c-24.67 0-34.113 24.069-34.199 36.135-.021 1.57-1.118 321.497 1.076 489.01C296.058 831.956 394.979 832 395.15 832c0 0 323.497-.946 478.642-1.914a91.564 91.564 0 0021.617-2.581c88.316-22.112 97.457-104.169 96.51-149.919 177.558 9.873 302.827-115.417 271.273-282.156zM811.824 538.702C760.998 598.024 648.162 701.01 648.162 701.01s-4.926 4.818-12.626.925a38.743 38.743 0 01-4.431-3.657c-18.09-18.003-137.443-124.387-164.61-161.361-28.929-39.383-42.458-110.148-3.677-151.381s122.601-44.33 178.009 16.605c0 0 63.882-72.7 141.508-39.297 77.648 33.404 74.701 122.817 29.49 175.858zm251.915 19.509a319.982 319.982 0 01-68.636 1.183V327.526h46.589c30.8 0 60.505 12.82 80.594 36.157 14.153 16.433 25.467 39.555 25.467 71.496 0 78.078-40.222 108.836-84.014 123.032z"}))}const D="_main_tlvh3_1";var F={main:D};function I(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:F.main,viewBox:"0 0 16 16"},e.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))}var H={};function Z(){return e.createElement("svg",{className:H.main,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},e.createElement("path",{fill:"#C12127",d:"M0 256V0h256v256z"}),e.createElement("path",{fill:"#FFF",d:"M48 48h160v160h-32V80h-48v128H48z"}))}const U="_main_1sz43_1";var q={main:U};function K(){return e.createElement("svg",{className:q.main,viewBox:"0 -4.5 256 256",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},e.createElement("g",null,e.createElement("path",{d:"M45.1355837,0 L45.1355837,246.35001 L0,246.35001 L0,0 L45.1355837,0 Z M163.657111,0 C214.65668,0 256,41.3433196 256,92.3428889 C256,143.342458 214.65668,184.685778 163.657111,184.685778 C112.657542,184.685778 71.3142222,143.342458 71.3142222,92.3428889 C71.3142222,41.3433196 112.657542,0 163.657111,0 Z",fill:"#FF424D"})))}const W="_main_ukag1_1";var Y={main:W};function G(){return e.createElement("svg",{className:Y.main,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},e.createElement("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e.createElement("path",{d:"M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"}))}let v=!1;function X(l){const{current:n}=e.useRef(document.title);e.useEffect(()=>{if(v)throw new Error("A title hook is already present in the application");return v=!0,document.title=l,()=>{v=!1,document.title=n}})}const J="_main_rsr9b_2",Q="_pagehead_rsr9b_15",ee="_content_rsr9b_57",te="_contact_rsr9b_62";var f={main:J,pagehead:Q,content:ee,contact:te};function ae(){return X("Lawrence Bethlenfalvy"),e.createElement("div",{className:f.main},e.createElement("header",{className:f.pagehead},e.createElement("h1",null,"Lawrence Bethlenfalvy"),e.createElement("nav",null,e.createElement(p,{to:"/"},"Blog"),e.createElement(p,{to:"/projects"},"Projects"),e.createElement(p,{to:"/about"},"About me"))),e.createElement("main",{className:f.content},e.createElement(T,null)),e.createElement("footer",{className:f.contact},e.createElement("h2",null,"Contact"),e.createElement("div",null,e.createElement("a",{href:"mailto:lbfalvy@protonmail.com",className:"email"},e.createElement("i",{style:{background:"white",color:"black"},className:"gg-mail"})),e.createElement("a",{href:"https://www.linkedin.com/in/lawrence-bethlenfalvy/"},e.createElement(I,null)),e.createElement("a",{href:"https://github.com/lbfalvy"},e.createElement(R,null)),e.createElement("a",{href:"https://www.npmjs.com/~lbfalvy"},e.createElement(Z,null)),e.createElement("a",{href:"https://ko-fi.com/lbfalvy"},e.createElement(S,null)),e.createElement("a",{href:"https://www.patreon.com/lbfalvy"},e.createElement(K,null)),e.createElement("a",{href:"/feed"},e.createElement(G,null)))))}const ne="_list_lvm94_1",le="_empty_lvm94_11",re="_active_lvm94_14";var E={list:ne,empty:le,active:re},oe={url:"2022-02-26T20:21_hello_world",title:"Hello World!",author:"lbfalvy",tags:["programming","web development","project","blog"],time:u.ZonedDateTime.from("2022-02-26T20:21Z[UTC]"),summary:`
        How I wrote a backend-free blog using React
    `,unlisted:!1,load:()=>d(()=>import("./2022-02-26T20_21_hello_world.d32856e9.js"),["assets/2022-02-26T20_21_hello_world.d32856e9.js","assets/jsx-runtime.f040b5d2.js","assets/vendor.ed6a35f9.js"])},se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe}),ie={url:"2022-02-27T21:25_lambda_calculus_for_practical_use",title:"Lambda Calculus for Practical Use",author:"lbfalvy",tags:["programming","programming language development","project"],time:u.ZonedDateTime.from("2022-02-27T21:25Z[UTC]"),summary:`
        Designing a functional programming language
    `,unlisted:!1,load:()=>d(()=>import("./2022-02-27T21_25_lambda_calculus_for_practical_use.d696924e.js"),["assets/2022-02-27T21_25_lambda_calculus_for_practical_use.d696924e.js","assets/2022-02-27T21_25_lambda_calculus_for_practical_use.82d8a4e4.css","assets/jsx-runtime.f040b5d2.js","assets/vendor.ed6a35f9.js"])},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module"});const ue={"./2022-02-26T20:21_hello_world.tsx":se,"./2022-02-27T21:25_lambda_calculus_for_practical_use.tsx":ce,"./Metadata.tsx":me};var de=Object.values(ue).map(l=>l.default);function h(l,n){return u.Duration.compare(l,n)<0}function _e(l){const n=l.until(u.Now.zonedDateTimeISO());return h(n,{minutes:1})?"now":h(n,{hours:1})?`${n.minutes} minutes ago`:h(n,{days:1})?`${n.hours} hours ago`:h(n,{days:7})?`${n.round({smallestUnit:"days"}).days} days ago`:`${l.toPlainDate().toString()} ${l.toPlainTime().toString({smallestUnit:"minutes"})}`}const fe="_linkbox_1lu2f_1",he="_sideBarContainer_1lu2f_12",pe="_sideBar_1lu2f_12";var C={linkbox:fe,sideBarContainer:he,sideBar:pe};function ge(l,n){var t;const[i,o]=x();return[(t=i.get(l))!=null?t:n,r=>{i.set(l,r),o(i)}]}function ve(){var _;const l=de.filter(a=>a&&!a.unlisted),n=[...new Set(l.flatMap(a=>a.tags))],[i,o]=ge("filter"),t=(_=i==null?void 0:i.split(",").filter(a=>a.length))!=null?_:[],r=$.exports.useCallback(a=>{t.includes(a)?o(t.filter(c=>c!=a).join(",")):o(`${t.join(",")},${a}`)},[t]),s=l.filter(a=>t.every(c=>a.tags.includes(c))).sort((a,c)=>u.ZonedDateTime.compare(c.time,a.time));return e.createElement("div",{className:w(E.list,C.sideBarContainer)},e.createElement("h2",null,"Latest ",t.map(a=>`"${a}"`).join(", ")," articles"),e.createElement("header",{className:C.sideBar},n.map(a=>e.createElement("a",{href:"#",onClick:()=>r(a),className:w(t.includes(a)&&E.active,s.every(c=>!c.tags.includes(a))&&E.empty)},a))),e.createElement("main",null,s.map(a=>e.createElement(N,{key:a.url,to:`/blog/${a.url}`,className:C.linkbox},e.createElement("article",null,e.createElement("h3",null,a.title),e.createElement("time",null,_e(a.time)),e.createElement("address",null,a.author),e.createElement("summary",null,a.summary))))))}const Ee=()=>d(()=>import("./Projects.3d3a9d9e.js"),["assets/Projects.3d3a9d9e.js","assets/Projects.f5c4fd0b.css","assets/vendor.ed6a35f9.js"]),Ce=()=>d(()=>import("./index.2a0e1074.js"),["assets/index.2a0e1074.js","assets/index.3a11a556.css","assets/vendor.ed6a35f9.js"]),we=()=>d(()=>import("./Article.9103c91f.js"),["assets/Article.9103c91f.js","assets/Article.1e388e63.css","assets/vendor.ed6a35f9.js"]),L=()=>e.createElement(k,null,e.createElement(P,null,e.createElement(m,{path:"/",element:e.createElement(ae,null)},e.createElement(m,{path:"projects",element:e.createElement(g,{obtainFor:Ee})}),e.createElement(m,{path:"about",element:e.createElement(g,{obtainFor:Ce})}),e.createElement(m,{index:!0,element:e.createElement(ve,null)}),e.createElement(m,{path:"blog/:article",element:e.createElement(g,{obtainFor:we})}))));document.body.onload=()=>{const l=document.getElementById("root");if(l)y.hydrate(L(),l);else{const n=document.createElement("div");n.id="root",document.body.append(n),y.render(L(),n)}};export{de as a,_e as p,C as s};