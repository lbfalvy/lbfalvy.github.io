import{R as i,b as e}from"./index-b343c6e9.js";function n(r,a){const t=i.useRef(document.createElement("meta"));i.useEffect(()=>(t.current.setAttribute("data-ssr","data-ssr"),document.head.appendChild(t.current),()=>t.current.remove()),[]),i.useEffect(()=>{t.current.setAttribute("property",`og:${r}`)},[r]),i.useEffect(()=>{t.current.setAttribute("content",a??"")},[a])}let u=!1;const l=document.title;function f(r){i.useEffect(()=>{if(u)throw new Error("A title hook is already present in the application");return u=!0,document.title=r,()=>{u=!1,document.title=l}})}function m(r,a,t,c,o,s){f(`${o??"lbfalvy"} - ${a}`),e("author",o),e("description",t),e("keywords",["lbfalvy","lawrence bethlenfalvy",...c].join(",")),n("title",a),n("type",r),n("description",t),n("image",s),e("twitter:card",s?"summary_large_image":"summary"),e("twitter:site","@lbfalvy"),e("twitter:title",a),e("twitter:description",t),e("twitter:image",s??"https://github.com/lbfalvy.png")}export{m as u};
