import{R as e,c as l}from"./vendor.ed6a35f9.js";import{s as r,u as c,a as m,b as u}from"./index.f5518caa.js";const b="_main_b0dtv_1";var _={main:b};function d({name:a,url:n,children:o}){return e.createElement("a",{href:n,className:l(_.main,r.linkbox)},e.createElement("article",null,e.createElement("h3",null,a),e.createElement("p",null,o)))}const f="_main_zqou6_1";var g={main:f},p={name:"\xC1rny\xE9kegyetem",url:"https://arnyekegyetem.hu",tags:["react","web","app","ts"],description:`
        A complex SPA for the ARG (Alternate Reality Game) of the same name. This is
        the homebase of the game, and it serves the role of a blog, wiki and forum.
    `},h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p}),y={name:"Buffered Dispatch",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts"],description:`
        An in-thread worker pool manager for Typescript
    `},v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),w={name:"R\xE9sum\xE9",url:"https://lbfalvy.github.io/cv/?lang=en",tags:["react","app"],description:`
        My CV is written in React, so internationalization and other advanced
        features are a breeze to implement.
    `},x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w}),S={name:"\u03BBf.engine",url:"https://lbfalvy.github.io/f.engine/",tags:["react","web","app","ts"],description:`
        An interactive lambda calculus engine combined with a tutorial. I wrote it to
        explain lambda calculus to a friend.
    `},T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S}),R={name:"This blog",url:"https://github.com/lbfalvy/lbfalvy.github.io",tags:["react","web","app","ts"],description:`
        This blog is written in React, and all content is managed through clever
        lazy-loading techniques. 
    `},j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R}),k={name:"Mockable Timer",url:"https://github.com/lbfalvy/mockable-timer",tags:["library","ts"],description:`
        An API that wraps Date.now(), setTimeout and setImmediate for dependency
        injection, and a carefully crafted mock implementation with an easy to
        use interface.
    `},z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k}),A={name:"React Await",url:"https://www.npmjs.com/package/@lbfalvy/react-await",tags:["react","web","library","ts"],description:`
        A React component for lazy-loading and extracting data fetching logic from the
        parent component.
    `},M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A}),E={name:"React Context Menu",url:"https://www.npmjs.com/package/@lbfalvy/react-context-menu",tags:["react","web","library","ts"],description:`
        A multilevel custom context menu for React. The API relies on React context
        so that menus can be combined over nested containers
    `},O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E}),P={name:"Simple RTR",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts","web"],description:`
        Refresh Token Rotation is a well-defined and widely used security policy,
        this library provides the universal strategy and leaves it to the user to
        define API calls.
    `},C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const B={"./arnyekegyetem.tsx":h,"./buffered-dispatch.tsx":v,"./cv.tsx":x,"./f.engine.tsx":T,"./lbfalvy.github.io.tsx":j,"./mockable-timer.tsx":z,"./react-await.tsx":M,"./react-context-menu.tsx":O,"./simple-rtr.tsx":C};var I=Object.values(B).map(a=>a.default);function q(){const[a,n,o,i]=c(I,...m("filter"));return u("website","Projects","my humble portfolio",["portfolio"]),e.createElement("div",{className:l(g.main,r.sideBarContainer)},e.createElement("h2",null,"Projects"),e.createElement("header",{className:l(r.sideBar,r.filters)},n.map(t=>e.createElement("a",{href:"#",onClick:()=>i(t),className:l(o.includes(t)&&r.active,a.every(s=>!s.tags.includes(t))&&r.empty)},t))),e.createElement("main",null,a.map(t=>e.createElement(d,{name:t.name,url:t.url},t.description))))}export{q as default};
