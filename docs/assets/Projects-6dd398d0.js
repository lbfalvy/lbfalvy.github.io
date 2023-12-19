import{R as e}from"./index-0e98de9a.js";import{s as n,u as s,a as m}from"./useTags-1565df48.js";import{c as o}from"./classList-dea12197.js";import{u}from"./useMetadata-d4a65e35.js";const b="_main_b0dtv_1",d={main:b};function _({name:a,url:l,children:r}){return e.createElement("a",{href:l,className:o(d.main,n.linkbox),target:"_blank"},e.createElement("article",null,e.createElement("h3",null,a),e.createElement("p",null,r)))}const f="_main_1qb79_1",p={main:f},g={name:"Orchid",url:"https://github.com/lbfalvy/orchid",tags:["rust","orchid","library","app"],description:`
        A lazy, pure functional programming language designed to be embeded into Rust applications.
    `},y=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),h={name:"Árnyékegyetem",tags:["react","web","app","ts"],description:`
        (currently offline)
        A complex SPA for the ARG (Alternate Reality Game) of the same name. This is
        the homebase of the game, and it serves the role of a blog, wiki and forum.
    `},v=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),w={name:"Buffered Dispatch",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts"],description:`
        An in-thread worker pool manager for Typescript
    `},j=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),O={name:"Résumé",url:"https://www.lbfalvy.com/cv/?lang=en&country=uk",tags:["react","app"],description:`
        My CV is written in React, so internationalization and other advanced
        features are a breeze to implement.
    `},S=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),T={name:"λf.engine",url:"https://www.lbfalvy.com/f.engine/",tags:["react","web","app","ts"],description:`
        An interactive lambda calculus engine combined with a tutorial. I wrote it to
        explain lambda calculus to a friend.
    `},x=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),P={name:"This blog",url:"https://github.com/lbfalvy/lbfalvy.github.io",tags:["react","web","app","ts"],description:`
        This blog is written in React, and all content is managed through clever
        lazy-loading techniques. 
    `},k=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),R={name:"Mockable Timer",url:"https://github.com/lbfalvy/mockable-timer",tags:["library","ts"],description:`
        An API that wraps Date.now(), setTimeout and setImmediate for dependency
        injection, and a carefully crafted mock implementation with an easy to
        use interface.
    `},z=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),A={name:"React Await",url:"https://www.npmjs.com/package/@lbfalvy/react-await",tags:["react","web","library","ts"],description:`
        A React component for lazy-loading and extracting data fetching logic from the
        parent component.
    `},M=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),E={name:"React Context Menu",url:"https://www.npmjs.com/package/@lbfalvy/react-context-menu",tags:["react","web","library","ts"],description:`
        A multilevel custom context menu for React. The API relies on React context
        so that menus can be combined over nested containers
    `},C=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),I={name:"Simple RTR",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts","web"],description:`
        Refresh Token Rotation is a well-defined and widely used security policy,
        this library provides the universal strategy and leaves it to the user to
        define API calls.
    `},N=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),B=Object.assign({"./Orchid.tsx":y,"./arnyekegyetem.tsx":v,"./buffered-dispatch.tsx":j,"./cv.tsx":S,"./f.engine.tsx":x,"./lbfalvy.github.io.tsx":k,"./mockable-timer.tsx":z,"./react-await.tsx":M,"./react-context-menu.tsx":C,"./simple-rtr.tsx":N}),D=Object.values(B).map(a=>a.default);function L(){const[a,l,r,i]=s(D,...m("filter"));return u("website","Projects","my humble portfolio",["portfolio"]),e.createElement("div",{className:o(p.main,n.sideBarContainer)},e.createElement("h2",null,"Projects"),e.createElement("header",{className:o(n.sideBar,n.filters)},l.map(t=>e.createElement("a",{href:"#",onClick:()=>i(t),className:o(r.includes(t)&&n.active,a.every(c=>!c.tags.includes(t))&&n.empty)},t))),e.createElement("main",null,a.map(t=>e.createElement(_,{name:t.name,url:t.url}," key=",t.name,t.description))))}export{L as default};
