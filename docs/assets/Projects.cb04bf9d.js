import{R as e,c as l,s as n,u as c,a as m,b as u}from"./index.af73a0ff.js";const b="_main_b0dtv_1",_={main:b};function d({name:a,url:o,children:r}){return e.createElement("a",{href:o,className:l(_.main,n.linkbox)},e.createElement("article",null,e.createElement("h3",null,a),e.createElement("p",null,r)))}const f="_main_1qb79_1",p={main:f},g={name:"\xC1rny\xE9kegyetem",tags:["react","web","app","ts"],description:`
        (currently offline)
        A complex SPA for the ARG (Alternate Reality Game) of the same name. This is
        the homebase of the game, and it serves the role of a blog, wiki and forum.
    `},y=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),h={name:"Buffered Dispatch",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts"],description:`
        An in-thread worker pool manager for Typescript
    `},v=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),w={name:"R\xE9sum\xE9",url:"https://www.lbfalvy.com/cv/?lang=en",tags:["react","app"],description:`
        My CV is written in React, so internationalization and other advanced
        features are a breeze to implement.
    `},j=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),x={name:"\u03BBf.engine",url:"https://www.lbfalvy.com/f.engine/",tags:["react","web","app","ts"],description:`
        An interactive lambda calculus engine combined with a tutorial. I wrote it to
        explain lambda calculus to a friend.
    `},S=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),T={name:"This blog",url:"https://github.com/lbfalvy/lbfalvy.github.io",tags:["react","web","app","ts"],description:`
        This blog is written in React, and all content is managed through clever
        lazy-loading techniques. 
    `},O=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),P={name:"Mockable Timer",url:"https://github.com/lbfalvy/mockable-timer",tags:["library","ts"],description:`
        An API that wraps Date.now(), setTimeout and setImmediate for dependency
        injection, and a carefully crafted mock implementation with an easy to
        use interface.
    `},R=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),k={name:"React Await",url:"https://www.npmjs.com/package/@lbfalvy/react-await",tags:["react","web","library","ts"],description:`
        A React component for lazy-loading and extracting data fetching logic from the
        parent component.
    `},A=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),M={name:"React Context Menu",url:"https://www.npmjs.com/package/@lbfalvy/react-context-menu",tags:["react","web","library","ts"],description:`
        A multilevel custom context menu for React. The API relies on React context
        so that menus can be combined over nested containers
    `},z=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),E={name:"Simple RTR",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts","web"],description:`
        Refresh Token Rotation is a well-defined and widely used security policy,
        this library provides the universal strategy and leaves it to the user to
        define API calls.
    `},C=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),B=Object.assign({"./arnyekegyetem.tsx":y,"./buffered-dispatch.tsx":v,"./cv.tsx":j,"./f.engine.tsx":S,"./lbfalvy.github.io.tsx":O,"./mockable-timer.tsx":R,"./react-await.tsx":A,"./react-context-menu.tsx":z,"./simple-rtr.tsx":C}),I=Object.values(B).map(a=>a.default);function D(){const[a,o,r,i]=c(I,...m("filter"));return u("website","Projects","my humble portfolio",["portfolio"]),e.createElement("div",{className:l(p.main,n.sideBarContainer)},e.createElement("h2",null,"Projects"),e.createElement("header",{className:l(n.sideBar,n.filters)},o.map(t=>e.createElement("a",{href:"#",onClick:()=>i(t),className:l(r.includes(t)&&n.active,a.every(s=>!s.tags.includes(t))&&n.empty)},t))),e.createElement("main",null,a.map(t=>e.createElement(d,{name:t.name,url:t.url},t.description))))}export{D as default};
