import{R as e,c as l}from"./vendor.ed6a35f9.js";import{s as r,u as c,a as m}from"./index.d9b68da1.js";const u="_main_b0dtv_1";var _={main:u};function b({name:a,url:n,children:o}){return e.createElement("a",{href:n,className:l(_.main,r.linkbox)},e.createElement("article",null,e.createElement("h3",null,a),e.createElement("p",null,o)))}const d="_main_zqou6_1";var f={main:d},g={name:"\xC1rny\xE9kegyetem",url:"https://arnyekegyetem.hu",tags:["react","web","app","ts"],description:`
        A complex SPA for the ARG (Alternate Reality Game) of the same name. This is
        the homebase of the game, and it serves the role of a blog, wiki and forum.
    `},p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g}),h={name:"Buffered Dispatch",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts"],description:`
        An in-thread worker pool manager for Typescript
    `},y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h}),v={name:"R\xE9sum\xE9",url:"https://lbfalvy.github.io/cv/?lang=en",tags:["react","app"],description:`
        My CV is written in React, so internationalization and other advanced
        features are a breeze to implement.
    `},w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v}),x={name:"\u03BBf.engine",url:"https://lbfalvy.github.io/f.engine/",tags:["react","web","app","ts"],description:`
        An interactive lambda calculus engine combined with a tutorial. I wrote it to
        explain lambda calculus to a friend.
    `},S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x}),T={name:"This blog",url:"https://github.com/lbfalvy/lbfalvy.github.io",tags:["react","web","app","ts"],description:`
        This blog is written in React, and all content is managed through clever
        lazy-loading techniques. 
    `},R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T}),k={name:"Mockable Timer",url:"https://github.com/lbfalvy/mockable-timer",tags:["library","ts"],description:`
        An API that wraps Date.now(), setTimeout and setImmediate for dependency
        injection, and a carefully crafted mock implementation with an easy to
        use interface.
    `},j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k}),z={name:"React Await",url:"https://www.npmjs.com/package/@lbfalvy/react-await",tags:["react","web","library","ts"],description:`
        A React component for lazy-loading and extracting data fetching logic from the
        parent component.
    `},A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z}),E={name:"React Context Menu",url:"https://www.npmjs.com/package/@lbfalvy/react-context-menu",tags:["react","web","library","ts"],description:`
        A multilevel custom context menu for React. The API relies on React context
        so that menus can be combined over nested containers
    `},M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E}),O={name:"Simple RTR",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts","web"],description:`
        Refresh Token Rotation is a well-defined and widely used security policy,
        this library provides the universal strategy and leaves it to the user to
        define API calls.
    `},P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const C={"./arnyekegyetem.tsx":p,"./buffered-dispatch.tsx":y,"./cv.tsx":w,"./f.engine.tsx":S,"./lbfalvy.github.io.tsx":R,"./mockable-timer.tsx":j,"./react-await.tsx":A,"./react-context-menu.tsx":M,"./simple-rtr.tsx":P};var B=Object.values(C).map(a=>a.default);function D(){const[a,n,o,i]=c(B,...m("filter"));return e.createElement("div",{className:l(f.main,r.sideBarContainer)},e.createElement("h2",null,"Projects"),e.createElement("header",{className:l(r.sideBar,r.filters)},n.map(t=>e.createElement("a",{href:"#",onClick:()=>i(t),className:l(o.includes(t)&&r.active,a.every(s=>!s.tags.includes(t))&&r.empty)},t))),e.createElement("main",null,a.map(t=>e.createElement(b,{name:t.name,url:t.url},t.description))))}export{D as default};
