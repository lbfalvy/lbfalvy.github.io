import{j as e}from"./jsx-runtime.34bfffa0.js";import"./vendor.ee1415c3.js";function r(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(i,{})})):i();function i(){const t=Object.assign({p:"p",h3:"h3",a:"a",i:"i",em:"em",ul:"ul",li:"li"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.p,{children:`When one thinks about starting a blog, the first go-to solution is probably WordPress.
Unfortunately (or fortunately) I'm a web developer, so the inefficiency, inconvenience
and general quality of WordPress bother me a lot, not to mention that it's a server-side
system and my deployment target is Github Pages, which only accepts static files.`}),`
`,e.exports.jsxs(t.h3,{id:"why",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Why?"]}),`
`,e.exports.jsxs(t.p,{children:[`You may think that this entire endeavor is stupid and I wasted my time. And you would have
a point, it was certainly a huge effort, and there are certainly existing solutions for
static-site blogging, probably even better than I can afford to make this.
But here's the thing: `,e.exports.jsx(t.em,{children:"I really like React."}),` To be precise, I really like how the entire
ecosystem is composed of small and flexible programs that do one thing and do it well.
This is the same principle, popularised by UNIX, that enables Bash together with the GNU
coreutils to do everything from
`,e.exports.jsx(t.a,{href:"https://gist.github.com/lbfalvy/676e7f31dc55b8e2ff71d4b9c639dfd3",children:"collecting the news"}),`
through various minor automation tasks all the way to container orchestration as seen in
Docker Compose.`]}),`
`,e.exports.jsxs(t.p,{children:[`The entire projects is built in this spirit. Despite its looks, I'm confident
that Vite can also be classed as a UNIX-like program, because its one job is to act
as a facade. It delegates nearly all of its tasks to other programs and restricts itself
to configuring these to work together. On the other hand, I found that React's Suspense
is a deviation from the ideas of flexibility and simplicity because it forces both
fetch library authors and child components to acknowledge it. Because of this, I'm
actually using `,e.exports.jsx(t.a,{href:"https://github.com/lbfalvy/react-await",children:"a custom solution"}),` for
lazy loading which fulfills these principles much better, at a small cost of efficiency.`]}),`
`,e.exports.jsx(t.p,{children:`And the result is actually a really good blog engine. I have React Router's lightning
fast page loads, server-side rendering through Puppeteer (go check the repo, the script
was actually a lot of work) and scaffolding with my own Node and Bash scripts. I'm
currently writing this article in Markdown but if I wnated to I could include React
components without any special effort thanks to MDX. Styling is all done via Sass and
I have access to all the styles, and I have a dev server with hot reload so that I know
exactly what the articles will look like without publishing. What's not to love?`}),`
`,e.exports.jsxs(t.h3,{id:"how",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"How?"]}),`
`,e.exports.jsx(t.p,{children:`The key concept is actually very simple: lazy loading doesn't require any runtime
information about the loaded resource besides the URL, so the total size of a website
segmented into lazy loaded pages is unbounded. In the current form of the blog every
article is represented by a component which is lazy loaded and some metadata which is
currently eagerly loaded with the article list view, but as the content grows that may
change. If need arises, I can write scripts to generate`}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"separate chunks for pagination"}),`
`,e.exports.jsx(t.li,{children:"filtered versions of the index for tag-based search"}),`
`,e.exports.jsx(t.li,{children:"word-frequency indexes to imitate full text search"}),`
`]})]})}}export{r as default};
