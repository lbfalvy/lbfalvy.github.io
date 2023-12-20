import{R as e}from"./index-DfK4NImv.js";import{s as n,u as s,a as m}from"./useTags-e3RzN8YJ.js";import{c as o}from"./classList-dVscd13K.js";import{u}from"./useMetadata-Bo8LMgK5.js";import{S as d}from"./SsrReady-ikm2XiJp.js";import"./ssrReady--xosRwNU.js";const b="_main_b0dtv_1",_={main:b};function f({name:a,url:l,children:r}){return e.createElement("a",{href:l,className:o(_.main,n.linkbox),target:"_blank"},e.createElement("article",null,e.createElement("h3",null,a),e.createElement("p",null,r)))}const p="_main_1qb79_1",g={main:p},y={name:"Orchid",url:"https://github.com/lbfalvy/orchid",tags:["rust","orchid","library","app"],description:`
		A lazy, pure functional programming language designed to be embeded into Rust applications.
	`},h=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),v={name:"Árnyékegyetem",tags:["react","web","app","ts"],description:`
		(currently offline)
		A complex SPA for the ARG (Alternate Reality Game) of the same name. This is
		the homebase of the game, and it serves the role of a blog, wiki and forum.
	`},w=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j={name:"Buffered Dispatch",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts"],description:`
		An in-thread worker pool manager for Typescript
	`},O=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),S={name:"Résumé",url:"https://www.lbfalvy.com/cv/?lang=en&country=uk",tags:["react","app"],description:`
		My CV is written in React, so internationalization and other advanced
		features are a breeze to implement.
	`},T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),x={name:"λf.engine",url:"https://www.lbfalvy.com/f.engine/",tags:["react","web","app","ts"],description:`
		An interactive lambda calculus engine combined with a tutorial. I wrote it to
		explain lambda calculus to a friend.
	`},P=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),R={name:"This blog",url:"https://github.com/lbfalvy/lbfalvy.github.io",tags:["react","web","app","ts"],description:`
		This blog is written in React, and all content is managed through clever
		lazy-loading techniques. 
	`},k=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),z={name:"Mockable Timer",url:"https://github.com/lbfalvy/mockable-timer",tags:["library","ts"],description:`
		An API that wraps Date.now(), setTimeout and setImmediate for dependency
		injection, and a carefully crafted mock implementation with an easy to
		use interface.
	`},A=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),M={name:"React Await",url:"https://www.npmjs.com/package/@lbfalvy/react-await",tags:["react","web","library","ts"],description:`
		A React component for lazy-loading and extracting data fetching logic from the
		parent component.
	`},E=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),C={name:"React Context Menu",url:"https://www.npmjs.com/package/@lbfalvy/react-context-menu",tags:["react","web","library","ts"],description:`
		A multilevel custom context menu for React. The API relies on React context
		so that menus can be combined over nested containers
	`},I=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),N={name:"Simple RTR",url:"https://github.com/lbfalvy/buffered-dispatch",tags:["library","ts","web"],description:`
		Refresh Token Rotation is a well-defined and widely used security policy,
		this library provides the universal strategy and leaves it to the user to
		define API calls.
	`},B=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),D=Object.assign({"./Orchid.tsx":h,"./arnyekegyetem.tsx":w,"./buffered-dispatch.tsx":O,"./cv.tsx":T,"./f.engine.tsx":P,"./lbfalvy.github.io.tsx":k,"./mockable-timer.tsx":A,"./react-await.tsx":E,"./react-context-menu.tsx":I,"./simple-rtr.tsx":B}),q=Object.values(D).map(a=>a.default);function J(){const[a,l,r,i]=s(q,...m("filter"));return u("website","Projects","my humble portfolio",["portfolio"]),e.createElement("div",{className:o(g.main,n.sideBarContainer)},e.createElement(d,null),e.createElement("h2",null,"Projects"),e.createElement("header",{className:o(n.sideBar,n.filters)},l.map(t=>e.createElement("a",{href:"#",onClick:()=>i(t),className:o(r.includes(t)&&n.active,a.every(c=>!c.tags.includes(t))&&n.empty)},t))),e.createElement("main",null,a.map(t=>e.createElement(f,{name:t.name,url:t.url}," key=",t.name,t.description))))}export{J as default};
