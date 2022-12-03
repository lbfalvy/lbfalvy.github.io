import{R as t,c as f}from"./index.4815d703.js";const b="_main_pr973_5",E="_comment_pr973_14",p="_name_pr973_17",w="_global_pr973_20",k="_operator_pr973_23",y="_macro_pr973_26",N="_placeholder_pr973_29",$="_keyword_pr973_32",L="_string_pr973_35",z="_number_pr973_38",A="_lambda_pr973_41",M="_bkslash_pr973_41",C="_colon_pr973_41",Z="_dot_pr973_41",c={main:b,comment:E,name:p,global:w,operator:k,macro:y,placeholder:N,keyword:$,string:L,number:z,lambda:A,bkslash:M,colon:C,dot:Z};function u(e,r=!1){for(var a=0,s=0;0<=s&&a<e.length;a++)if(e[a]=="("||e[a]=="\\")s++;else if(e[a]==")"||e[a]==".")s--;else if(r&&e[a]==`
`&&s==0)break;return e.slice(0,a)}function F(e){e=e.slice(1);const r=/^[a-zA-Z0-9_]+\s*/.exec(e);if(!r)throw new Error(`Missing name in "${e}"`);const a=r[0].trim(),s=r[0].length;let i=[],n=s;if(e[s]==":"){const _=u(e.slice(s+1)).slice(0,-1);i=l(_),n+=_.length+1}if(e[n]!=".")throw new Error(`Missing dot in "${e.slice(n)}"`);const m=l(e.slice(n+1));return["lambda",a,i,m]}function l(e){if(e=="")return[];const r=/^(\s|\n)+/.exec(e);if(r)return[["whitespace",r[0]],...l(e.slice(r[0].length))];const a=/^(export|import|default|replacing)\s/.exec(e);if(a)return[["keyword",a[0]],...l(e.slice(a[0].length))];const s=/^:=|^=\-?([\d\_a-fA-F]+(\.[\d\_a-fA-F]+)?(p\-?[\d_]+)?)?=>/.exec(e);if(s)return[["macro",s[0]],...l(e.slice(s[0].length))];const i=/^\d\S*/.exec(e);if(i)return[["number",i[0]],...l(e.slice(i[0].length))];const n=/^[A-Za-z0-9_]+/.exec(e);if(n)return[["name",n[0]],...l(e.slice(n[0].length))];if(e.startsWith("--[")){let o=e.indexOf("]--")+3;return[["comment",e.slice(0,o)],...l(e.slice(o))]}const m=/^\-\-.*?(?:\n|$)/.exec(e);if(m)return[["comment",m[0]],...l(e.slice(m[0].length))];if(e.startsWith("\\")){const o=u(e);return[F(o),...l(e.slice(o.length))]}if(e.startsWith('"')){let o=1;for(;o<=e.length&&(e[o]=="\\"&&o++,e[o]!='"');o++);return[["string",e.slice(0,o+1)],...l(e.slice(o+1))]}const _=/^\$[a-zA-Z0-9_]+/.exec(e);if(_)return[["placeholder",_[0]],...l(e.slice(_[0].length))];const h=/^[^\sa-zA-Z0-9_\$\\]+/.exec(e);if(h)return[["operator",h[0]],...l(e.slice(h[0].length))];throw new Error(`Logic error: none of the regices in a complete cover matched "${e}"`)}const g=t.createContext(new Map),H=({c:e})=>t.createElement(d,{children:e});function d({children:e}){const r=t.useContext(g),a=r.size+1;let s;return typeof e=="string"?s=l(e):s=e,t.createElement("code",{className:c.main},s.map(([i,n,...m],_)=>{switch(i){case"comment":return t.createElement("span",{className:c.comment},n);case"name":return t.createElement("span",{className:f(c.name,r.get(n)||c.global),style:r.has(n)?{"--level":`${r.get(n)}`}:void 0},n);case"operator":return t.createElement("span",{className:c.operator},n);case"whitespace":return t.createElement("span",null,n);case"placeholder":return t.createElement("span",{className:c.placeholder},n);case"macro":return t.createElement("span",{className:c.macro},n);case"keyword":return t.createElement("span",{className:c.keyword},n);case"string":return t.createElement("span",{className:c.string},n);case"number":return t.createElement("span",{className:c.number},n);case"lambda":return t.createElement(g.Provider,{value:(()=>{const h=new Map(r);return h.set(n,a),h})()},t.createElement("span",{className:c.lambda,"data-name":n},t.createElement("span",{className:c.bkslash},"\\"),t.createElement("span",{className:f(c.param,c.name),style:{"--level":`${a}`}},n),m[0].length?t.createElement(t.Fragment,null,t.createElement("span",{className:c.colon},":"),t.createElement("span",null,t.createElement(d,null,m[0]))):null,t.createElement("span",{className:c.dot},"."),t.createElement("span",null,t.createElement(d,null,m[1]))))}}))}export{H,d as L};
