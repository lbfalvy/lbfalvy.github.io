import{R as e,N as v,O as T,t as d,u as $,c as b,L as M,a as x,B,b as N,d as u,A as y}from"./vendor.ed6a35f9.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};P();const R="modulepreload",k={},z="/",f=function(t,r){return!r||r.length===0?t():Promise.all(r.map(c=>{if(c=`${z}${c}`,c in k)return;k[c]=!0;const n=c.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${s}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":R,n||(l.as="script",l.crossOrigin=""),l.href=c,document.head.appendChild(l),n)return new Promise((m,h)=>{l.addEventListener("load",m),l.addEventListener("error",h)})})).then(()=>t())};const O="_main_1l4jy_1";var j={main:O};function V(){return e.createElement("svg",{className:j.main,fill:"currentColor",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M9.35762 2.14496C8.13548 1.86102 6.86444 1.86102 5.6423 2.14497C4.93642 1.71169 4.39704 1.51286 4.00502 1.42909C3.79189 1.38354 3.62296 1.37216 3.4959 1.37556C3.43249 1.37725 3.38001 1.38261 3.33821 1.38905C3.31733 1.39226 3.29919 1.39573 3.28375 1.39911C3.27603 1.4008 3.26899 1.40247 3.26264 1.40408L3.25362 1.40643L3.2495 1.40756L3.24753 1.40811L3.24563 1.40865C3.24562 1.40865 3.24563 1.40864 3.24563 1.40865C3.2452 1.40884 3.24731 1.41452 3.38299 1.88895L3.24563 1.40865C3.1036 1.44926 2.9868 1.55061 2.92657 1.68549C2.75841 2.06202 2.66657 2.46816 2.65635 2.88041C2.64875 3.18677 2.68634 3.49199 2.76743 3.78633C2.55433 4.04445 2.3807 4.33349 2.25276 4.64407C2.08484 5.05173 1.99894 5.4885 1.99998 5.92939C2.00011 7.48194 2.45815 8.52582 3.23873 9.19657C3.78563 9.66653 4.45048 9.91658 5.11619 10.0598C5.00626 10.3652 4.97773 10.6883 4.99998 11.0176V11.6158C4.59263 11.7015 4.31135 11.6744 4.11082 11.6082C3.85884 11.525 3.66566 11.3578 3.48139 11.1175C3.38806 10.9959 3.30208 10.8623 3.21179 10.7161L3.15448 10.6228C3.08377 10.5073 3.00746 10.3828 2.93045 10.2692C2.73964 9.9878 2.45813 9.63616 2.00195 9.51639L1.51834 9.38942L1.2644 10.3566L1.74801 10.4836C1.82746 10.5045 1.93204 10.5786 2.10279 10.8304C2.16553 10.9229 2.22538 11.0206 2.29372 11.1321C2.31518 11.1671 2.33753 11.2036 2.36102 11.2417C2.45488 11.3936 2.56253 11.5627 2.68796 11.7262C2.94119 12.0563 3.28597 12.389 3.79742 12.5578C4.14883 12.6738 4.54603 12.7016 4.99998 12.6319V14.5C4.99998 14.7761 5.22384 15 5.49998 15H9.49998C9.77613 15 9.99998 14.7761 9.99998 14.5V10.9375C9.99998 10.6217 9.98623 10.333 9.89735 10.0636C10.5597 9.92381 11.2193 9.67353 11.7626 9.20319C12.5429 8.52773 13 7.47445 13 5.9125L13 5.91089C12.9975 5.13212 12.7242 4.38197 12.2325 3.78635C12.3136 3.492 12.3512 3.18678 12.3436 2.88041C12.3334 2.46816 12.2416 2.06202 12.0734 1.68549C12.0131 1.55057 11.8963 1.44921 11.7542 1.40861L11.6169 1.88937C11.7542 1.40861 11.7528 1.40821 11.7523 1.40807L11.7504 1.40752L11.7462 1.4064L11.7372 1.40405C11.7309 1.40245 11.7238 1.40078 11.7161 1.39909C11.7007 1.39571 11.6826 1.39225 11.6617 1.38904C11.6199 1.38261 11.5674 1.37725 11.504 1.37556C11.3769 1.37216 11.2079 1.38354 10.9947 1.42908C10.6026 1.51286 10.0633 1.71168 9.35762 2.14496Z"}))}const D="_main_1tefe_1";var S={main:D};function F(){return e.createElement("svg",{className:S.main,xmlns:"http://www.w3.org/2000/svg",viewBox:"290 200 980 640",role:"img",fill:"currentColor"},e.createElement("path",{d:"M1263.192 395.43c-13.593-71.776-52.224-116.493-91.843-144.154-40.954-28.585-90.016-43.276-139.96-43.276H322.492c-24.67 0-34.113 24.069-34.199 36.135-.021 1.57-1.118 321.497 1.076 489.01C296.058 831.956 394.979 832 395.15 832c0 0 323.497-.946 478.642-1.914a91.564 91.564 0 0021.617-2.581c88.316-22.112 97.457-104.169 96.51-149.919 177.558 9.873 302.827-115.417 271.273-282.156zM811.824 538.702C760.998 598.024 648.162 701.01 648.162 701.01s-4.926 4.818-12.626.925a38.743 38.743 0 01-4.431-3.657c-18.09-18.003-137.443-124.387-164.61-161.361-28.929-39.383-42.458-110.148-3.677-151.381s122.601-44.33 178.009 16.605c0 0 63.882-72.7 141.508-39.297 77.648 33.404 74.701 122.817 29.49 175.858zm251.915 19.509a319.982 319.982 0 01-68.636 1.183V327.526h46.589c30.8 0 60.505 12.82 80.594 36.157 14.153 16.433 25.467 39.555 25.467 71.496 0 78.078-40.222 108.836-84.014 123.032z"}))}const I="_main_tlvh3_1";var Z={main:I};function H(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:Z.main,viewBox:"0 0 16 16"},e.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))}var U={};function X(){return e.createElement("svg",{className:U.main,xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},e.createElement("path",{fill:"#C12127",d:"M0 256V0h256v256z"}),e.createElement("path",{fill:"#FFF",d:"M48 48h160v160h-32V80h-48v128H48z"}))}const G="_main_1sz43_1";var K={main:G};function Y(){return e.createElement("svg",{className:K.main,viewBox:"0 -4.5 256 256",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"},e.createElement("g",null,e.createElement("path",{d:"M45.1355837,0 L45.1355837,246.35001 L0,246.35001 L0,0 L45.1355837,0 Z M163.657111,0 C214.65668,0 256,41.3433196 256,92.3428889 C256,143.342458 214.65668,184.685778 163.657111,184.685778 C112.657542,184.685778 71.3142222,143.342458 71.3142222,92.3428889 C71.3142222,41.3433196 112.657542,0 163.657111,0 Z",fill:"#FF424D"})))}const q="_main_ukag1_1";var W={main:q};function J(){return e.createElement("svg",{className:W.main,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},e.createElement("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),e.createElement("path",{d:"M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z"}))}function Q(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 240 240",width:"16",height:"16"},e.createElement("defs",null,e.createElement("linearGradient",{id:"linear-gradient",x1:"120",y1:"240",x2:"120",gradientUnits:"userSpaceOnUse"},e.createElement("stop",{offset:"0","stop-color":"#1d93d2"}),e.createElement("stop",{offset:"1","stop-color":"#38b0e3"}))),e.createElement("circle",{cx:"120",cy:"120",r:"120",fill:"url(#linear-gradient)"}),e.createElement("path",{d:"M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z",fill:"#c8daea"}),e.createElement("path",{d:"M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763",fill:"#a9c6d8"}),e.createElement("path",{d:"M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z",fill:"#fff"}))}function ee(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 410.155 410.155",xmlSpace:"preserve",height:"16",width:"16"},e.createElement("path",{fill:"#76A9EA",d:`M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
            l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
            c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
            c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
            c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
            c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
            c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
            c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
            c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
            c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
            c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
            c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
            l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z`}))}function te(a,t,r){const c=e.useRef(document.createElement("link"));e.useEffect(()=>(c.current.setAttribute("data-ssr","data-ssr"),document.head.appendChild(c.current),()=>c.current.remove()),[]),e.useEffect(()=>{c.current.setAttribute("rel",a)},[a]),e.useEffect(()=>{c.current.setAttribute("href",t)},[t]),e.useEffect(()=>{r?c.current.setAttribute("type",r):c.current.removeAttribute("type")},[r])}function o(a,t){const r=e.useRef(document.createElement("meta"));e.useEffect(()=>(r.current.setAttribute("data-ssr","data-ssr"),document.head.appendChild(r.current),()=>r.current.remove()),[]),e.useEffect(()=>{r.current.name=a},[a]),e.useEffect(()=>{r.current.setAttribute("content",t!=null?t:"")},[t])}const ne="_main_iw998_2",re="_pagehead_iw998_15",ae="_content_iw998_57",le="_contact_iw998_62";var p={main:ne,pagehead:re,content:ae,contact:le};function ce(){return o("viewport","width=device-width, initial-scale=1.0"),o("theme-color","#222"),te("icon","https://github.com/lbfalvy.png"),e.createElement("div",{className:p.main},e.createElement("header",{className:p.pagehead},e.createElement("h1",null,"Lawrence Bethlenfalvy"),e.createElement("nav",null,e.createElement(v,{to:"/"},"Blog"),e.createElement(v,{to:"/projects"},"Projects"),e.createElement(v,{to:"/about"},"About me"))),e.createElement("main",{className:p.content},e.createElement(T,null)),e.createElement("footer",{className:p.contact},e.createElement("h2",null,"Contact"),e.createElement("div",null,e.createElement("a",{href:"mailto:lbfalvy@protonmail.com",className:"email"},e.createElement("i",{style:{background:"white",color:"black"},className:"gg-mail"})),e.createElement("a",{href:"https://www.linkedin.com/in/lawrence-bethlenfalvy/"},e.createElement(H,null)),e.createElement("a",{href:"https://github.com/lbfalvy"},e.createElement(V,null)),e.createElement("a",{href:"https://www.npmjs.com/~lbfalvy"},e.createElement(X,null)),e.createElement("a",{href:"https://ko-fi.com/lbfalvy"},e.createElement(F,null)),e.createElement("a",{href:"https://www.patreon.com/lbfalvy"},e.createElement(Y,null)),e.createElement("a",{href:"/feed"},e.createElement(J,null)),e.createElement("a",{href:"https://twitter.com/lbfalvy"},e.createElement(ee,null)),e.createElement("a",{href:"https://t.me/lbfalvy"},e.createElement(Q,null)))))}const se="_list_uikcb_1";var C={list:se},oe={url:"2022-02-26T20:21_hello_world",title:"Hello World!",author:"lbfalvy",tags:["programming","web development","project","blog"],time:d.ZonedDateTime.from("2022-02-26T20:21Z[UTC]"),image:"https://www.fox46.com/wp-content/uploads/sites/109/2018/04/92a7b31a-FD_409A20Space20Shuttle20Anniversary20RECT0_1523400530953.jpg_5314903_ver1.0.jpg?w=1280&h=720&crop=1",summary:`
        How I wrote a backend-free blog using React
    `,unlisted:!1,load:()=>f(()=>import("./2022-02-26T20_21_hello_world.6f4c9f08.js"),["assets/2022-02-26T20_21_hello_world.6f4c9f08.js","assets/jsx-runtime.f040b5d2.js","assets/vendor.ed6a35f9.js"])},ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe}),me={url:"2022-02-27T21:25_lambda_calculus_for_practical_use",title:"Lambda Calculus for Practical Use",author:"lbfalvy",tags:["programming","programming language development","project"],time:d.ZonedDateTime.from("2022-03-07T21:25Z[UTC]"),image:"https://i.ibb.co/cYXydKk/Screenshot-2022-03-08-at-16-44-15-Lambda-Calculus-for-Practical-Use.png",summary:`
        Designing a functional programming language
    `,unlisted:!1,load:()=>f(()=>import("./2022-02-27T21_25_lambda_calculus_for_practical_use.5e366542.js"),["assets/2022-02-27T21_25_lambda_calculus_for_practical_use.5e366542.js","assets/2022-02-27T21_25_lambda_calculus_for_practical_use.d87af595.css","assets/jsx-runtime.f040b5d2.js","assets/vendor.ed6a35f9.js"])},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const de={"./2022-02-26T20:21_hello_world.tsx":ie,"./2022-02-27T21:25_lambda_calculus_for_practical_use.tsx":ue};var fe=Object.values(de).map(a=>a.default);function _(a,t){return d.Duration.compare(a,t)<0}function he(a){const t=a.until(d.Now.zonedDateTimeISO());return _(t,{minutes:1})?"now":_(t,{hours:1})?`${t.minutes} minutes ago`:_(t,{days:1})?`${t.hours} hours ago`:_(t,{days:7})?`${t.round({smallestUnit:"days"}).days} days ago`:`${a.toPlainDate().toString()} ${a.toPlainTime().toString({smallestUnit:"minutes"})}`}const pe="_linkbox_1otae_1",_e="_sideBarContainer_1otae_12",ge="_sideBar_1otae_12",Ee="_filters_1otae_38",we="_empty_1otae_48",ve="_active_1otae_51";var g={linkbox:pe,sideBarContainer:_e,sideBar:ge,filters:Ee,empty:we,active:ve};function be(a,t){var n;const[r,c]=$();return[(n=r.get(a))!=null?n:t,s=>{r.set(a,s),c(r)}]}function ye(a,t,r){var m,h;const c=[...new Set(a.flatMap(i=>i.tags))],n=(h=(m=t==null?void 0:t.split(","))==null?void 0:m.filter(i=>i.length))!=null?h:[],s=e.useCallback(i=>{n.includes(i)?r(n.filter(w=>w!=i).join(",")):r(`${n.join(",")},${i}`)},[n]);return[a.filter(i=>n.every(w=>i.tags.includes(w))),c,n,s]}function E(a,t){const r=e.useRef(document.createElement("meta"));e.useEffect(()=>(r.current.setAttribute("data-ssr","data-ssr"),document.head.appendChild(r.current),()=>r.current.remove()),[]),e.useEffect(()=>{r.current.setAttribute("property",`og:${a}`)},[a]),e.useEffect(()=>{r.current.setAttribute("content",t!=null?t:"")},[t])}let L=!1;const Ce=document.title;function Le(a){e.useEffect(()=>{if(L)throw new Error("A title hook is already present in the application");return L=!0,document.title=a,()=>{L=!1,document.title=Ce}})}function xe(a,t,r,c,n,s){Le(`${n!=null?n:"lbfalvy"} - ${t}`),o("author",n),o("description",r),o("keywords",["lbfalvy","lawrence bethlenfalvy",...c].join(",")),E("title",t),E("type",a),E("description",r),E("image",s),o("twitter:card",s?"summary_large_image":"summary"),o("twitter:site","@lbfalvy"),o("twitter:title",t),o("twitter:description",r),o("twitter:image",s!=null?s:"https://github.com/lbfalvy.png")}function ke(){xe("website","Lawrence's Blog","I sometimes write about my projects or my experience with technologies",["blog"]);const a=fe.filter(l=>l&&!l.unlisted),[t,r,c,n]=ye(a,...be("filter")),s=t.sort((l,m)=>d.ZonedDateTime.compare(m.time,l.time));return e.createElement("div",{className:b(C.list,g.sideBarContainer)},e.createElement("h2",null,"Latest ",c.map(l=>`"${l}"`).join(", ")," articles"),e.createElement("header",{className:b(g.sideBar,g.filters)},r.map(l=>e.createElement("a",{href:"#",onClick:()=>n(l),className:b(c.includes(l)&&C.active,s.every(m=>!m.tags.includes(l))&&C.empty)},l))),e.createElement("main",null,s.map(l=>e.createElement(M,{key:l.url,to:`/blog/${l.url}`,className:g.linkbox},e.createElement("article",null,e.createElement("h3",null,l.title),e.createElement("time",null,he(l.time)),e.createElement("address",null,l.author),e.createElement("summary",null,l.summary))))))}const Ae=()=>f(()=>import("./Projects.0b84d7e6.js"),["assets/Projects.0b84d7e6.js","assets/Projects.0d2b33b0.css","assets/vendor.ed6a35f9.js"]),Te=()=>f(()=>import("./index.2a0e1074.js"),["assets/index.2a0e1074.js","assets/index.3a11a556.css","assets/vendor.ed6a35f9.js"]),$e=()=>f(()=>import("./Article.053313cc.js"),["assets/Article.053313cc.js","assets/Article.3bcb32c8.css","assets/vendor.ed6a35f9.js"]),A=()=>e.createElement(B,null,e.createElement(N,null,e.createElement(u,{path:"/",element:e.createElement(ce,null)},e.createElement(u,{index:!0,element:e.createElement(ke,null)}),e.createElement(u,{path:"blog/:article",element:e.createElement(y,{obtainFor:$e})}),e.createElement(u,{path:"projects",element:e.createElement(y,{obtainFor:Ae})}),e.createElement(u,{path:"about",element:e.createElement(y,{obtainFor:Te})}))));document.body.onload=()=>{const a=document.getElementById("root");if(a)x.hydrate(A(),a);else{const t=document.createElement("div");t.id="root",document.body.append(t),x.render(A(),t)}};export{be as a,xe as b,fe as c,he as p,g as s,ye as u};
