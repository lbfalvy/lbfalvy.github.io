import{r as p}from"./vendor.ee1415c3.js";var t={exports:{}},r={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=p.exports,h=60103;r.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var c=Symbol.for;h=c("react.element"),r.Fragment=c("react.fragment")}var u=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function d(o,n,s){var e,i={},a=null,l=null;s!==void 0&&(a=""+s),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(e in n)m.call(n,e)&&!y.hasOwnProperty(e)&&(i[e]=n[e]);if(o&&o.defaultProps)for(e in n=o.defaultProps,n)i[e]===void 0&&(i[e]=n[e]);return{$$typeof:h,type:o,key:a,ref:l,props:i,_owner:u.current}}r.jsx=d;r.jsxs=d;t.exports=r;function g(o={}){const{wrapper:n}=o.components||{};return n?t.exports.jsx(n,Object.assign({},o,{children:t.exports.jsx(s,{})})):s();function s(){const e=Object.assign({p:"p",h3:"h3",em:"em",a:"a",ul:"ul",li:"li"},o.components);return t.exports.jsxs(t.exports.Fragment,{children:[t.exports.jsx(e.p,{children:`When one thinks about starting a blog, the first go-to solution is probably WordPress.
Unfortunately (or fortunately) I'm a web developer, so the inefficiency, inconvenience
and general quality of WordPress bother me a lot, not to mention that it's a server-side
system and my deployment target is Github Pages, which only accepts static files.`}),`
`,t.exports.jsx(e.h3,{children:"Why?"}),`
`,t.exports.jsxs(e.p,{children:[`You may think that this entire endeavor is stupid and I wasted my time. And you would have
a point, it was certainly a huge effort, and there are certainly existing solutions for
static-site blogging, probably even better than I can afford to make this.
But here's the thing: `,t.exports.jsx(e.em,{children:"I really like React."}),` To be precise, I really like how the entire
ecosystem is composed of small and flexible programs that do one thing and do it well.
This is the same principle, popularised by UNIX, that enables Bash together with the GNU
coreutils to do everything from
`,t.exports.jsx(e.a,{href:"https://gist.github.com/lbfalvy/676e7f31dc55b8e2ff71d4b9c639dfd3",children:"collecting the news"}),`
through various minor automation tasks all the way to container orchestration as seen in
Docker Compose.`]}),`
`,t.exports.jsxs(e.p,{children:[`The entire projects is built in this spirit. Despite its looks, I'm confident
that Vite can also be classed as a UNIX-like program, because its one job is to act
as a facade. It delegates nearly all of its tasks to other programs and restricts itself
to configuring these to work together. On the other hand, I found that React's Suspense
is a deviation from the ideas of flexibility and simplicity because it forces both
fetch library authors and child components to acknowledge it. Because of this, I'm
actually using `,t.exports.jsx(e.a,{href:"https://github.com/lbfalvy/react-await",children:"a custom solution"}),` for
lazy loading which fulfills these principles much better, at a small cost of efficiency.`]}),`
`,t.exports.jsx(e.h3,{children:"How?"}),`
`,t.exports.jsx(e.p,{children:`The key concept is actually very simple: lazy loading doesn't require any runtime
information about the loaded resource besides the URL, so the total size of a website
segmented into lazy loaded pages is unbounded. In the current form of the blog every
article is represented by a component which is lazy loaded and some metadata which is
currently eagerly loaded with the article list view, but as the content grows that may
change. If need arises, I can write scripts to generate`}),`
`,t.exports.jsxs(e.ul,{children:[`
`,t.exports.jsx(e.li,{children:"separate chunks for pagination"}),`
`,t.exports.jsx(e.li,{children:"filtered versions of the index for tag-based search"}),`
`,t.exports.jsx(e.li,{children:"word-frequency indexes to imitate full text search"}),`
`]})]})}}export{g as default};
