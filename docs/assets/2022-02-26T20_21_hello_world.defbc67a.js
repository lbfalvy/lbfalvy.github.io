import{j as e}from"./jsx-runtime.9411e71b.js";import"./index.af73a0ff.js";function r(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(i,{})})):i();function i(){const t=Object.assign({p:"p",img:"img",h3:"h3",a:"a",i:"i",em:"em",ul:"ul",li:"li"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.p,{children:e.exports.jsx(t.img,{src:"https://www.fox46.com/wp-content/uploads/sites/109/2018/04/92a7b31a-FD_409A20Space20Shuttle20Anniversary20RECT0_1523400530953.jpg_5314903_ver1.0.jpg?w=1280&h=720&crop=1",alt:"Space shuttle taking off"})}),`
`,e.exports.jsx(t.p,{children:`When one thinks about starting a blog, the first go-to solution is probably WordPress.
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
`,e.exports.jsx(t.p,{children:`The entire project is built in this spirit. I use Typescript and Scss for most of the work
and Vite bundles everything. Articles are written in MDX, which is a variant of Markdown
with React component support and itself connects Remark and Rehype to turn markdown into HTML.
The result is unparallelled flexibility, since I can add plugins separately to my bundler and
markdown parser and nothing has to know about anything else.`}),`
`,e.exports.jsxs(t.p,{children:[`Details like server-side rendering for search-engine support and RSS feed generation are done
using custom-made scripts. SSR uses simple-ssr which is basically a wrapper on Puppeteer which
is a scripting interface for Chromium. RSS dynamically loads metadata from the articles folder.
On the other hand, I found that React's Suspense is a deviation from the ideas of flexibility
and modularity because it forces both fetch library authors and child components to acknowledge
its existence. Because of this, I'm actually using
`,e.exports.jsx(t.a,{href:"https://github.com/lbfalvy/react-await",children:"a custom solution"}),` for lazy loading which fulfills
these principles much better, at a small cost of efficiency.`]}),`
`,e.exports.jsx(t.p,{children:`And the result is actually a really good blog engine. I have React Router's lightning
fast page loads, search engine indexing and scaffolding with my own Node and Bash scripts.
Styling is all done via Sass which is bliss to use and I have a dev server with hot reload
which feels almost as streamlined as a WYSIWYG editor except it doesn't break version control.
What's not to love?`}),`
`,e.exports.jsxs(t.h3,{id:"principle",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#principle",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Principle"]}),`
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
`]}),`
`,e.exports.jsxs(t.h3,{id:"usage",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Usage"]}),`
`,e.exports.jsxs(t.p,{children:[`If this sounds like something you would want on your blog, go check out
`,e.exports.jsx(t.a,{href:"https://github.com/lbfalvy/lbfalvy.github.io",children:"the repository"}),`. Do take note though,
this is not a public package and it requires a bit of tinkering to get it to work.
Maybe I'll release a framework later, but it would take a bit of rewiring and further
abstraction.`]})]})}}export{r as default};
