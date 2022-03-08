var w=Object.defineProperty,k=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(t,s,a)=>s in t?w(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,x=(t,s)=>{for(var a in s||(s={}))v.call(s,a)&&g(t,a,s[a]);if(m)for(var a of m(s))I.call(s,a)&&g(t,a,s[a]);return t},f=(t,s)=>k(t,_(s));import{j as n}from"./jsx-runtime.f040b5d2.js";import{R as r,c as b}from"./vendor.ed6a35f9.js";const E="_main_djcd9_5",N="_comment_djcd9_8",$="_name_djcd9_11",L="_global_djcd9_14",T="_operator_djcd9_17",C="_macro_djcd9_20",M="_placeholder_djcd9_23",z="_lambda_djcd9_26",A="_bkslash_djcd9_26",q="_colon_djcd9_26",O="_dot_djcd9_26";var o={main:E,comment:N,name:$,global:L,operator:T,macro:C,placeholder:M,lambda:z,bkslash:A,colon:q,dot:O};function j(t,s=!1){for(var a=0,e=0;0<=e&&a<t.length;a++)if(t[a]=="("||t[a]=="\\")e++;else if(t[a]==")"||t[a]==".")e--;else if(s&&t[a]==`
`&&e==0)break;return t.slice(0,a)}function S(t){t=t.slice(1);const s=/^[a-zA-Z0-9_]+\s*/.exec(t);if(!s)throw new Error(`Missing name in "${t}"`);const a=s[0].trim(),e=s[0].length;let h=[],i=e;if(t[e]==":"){const d=j(t.slice(e+1)).slice(0,-1);console.log(d),h=l(d),i+=d.length+1}if(t[i]!=".")throw new Error(`Missing dot in "${t.slice(i)}"`);const c=l(t.slice(i+1));return["lambda",a,h,c]}function l(t){if(t=="")return[];const s=/^(\s|\n)+/.exec(t);if(s)return[["whitespace",s[0]],...l(t.slice(s[0].length))];const a=/^[a-zA-Z0-9_]+/.exec(t);if(a)return[["name",a[0]],...l(t.slice(a[0].length))];const e=/^\-\-\[.*?\]\-\-/.exec(t);if(e)return[["comment",e[0]],...l(t.slice(e[0].length))];const h=/^--.*?(?:\n|$)/.exec(t);if(h)return[["comment",h[0]],...l(t.slice(h[0].length))];if(t.startsWith("\\")){const u=j(t);return[S(u),...l(t.slice(u.length))]}const i=/^\$[a-zA-Z0-9_]+/.exec(t);if(i)return[["placeholder",i[0]],...l(t.slice(i[0].length))];const c=/^<?=((\d+(\.\d+)?)?=>?)?/.exec(t);if(c)return[["macro",c[0]],...l(t.slice(c[0].length))];const d=/^[^\sa-zA-Z0-9_\$\\]+/.exec(t);if(d)return[["operator",d[0]],...l(t.slice(d[0].length))];throw new Error(`Logic error: none of the regices in a complete cover matched "${t}"`)}const y=r.createContext({});function p({children:t}){const s=r.useContext(y),a=Object.keys(s).length+1;let e;return typeof t=="string"?(e=l(t),console.log(e)):e=t,r.createElement("code",{className:o.main},e.map(([h,i,...c],d)=>{switch(h){case"comment":return r.createElement("span",{className:o.comment},i);case"name":return r.createElement("span",{className:b(o.name,s[i]||o.global),style:s[i]?{"--level":`${s[i]}`}:void 0},i);case"operator":return r.createElement("span",{className:o.operator},i);case"whitespace":return r.createElement("span",null,i);case"placeholder":return r.createElement("span",{className:o.placeholder},i);case"macro":return r.createElement("span",{className:o.macro},i);case"lambda":return r.createElement(y.Provider,{value:f(x({},s),{[i]:a})},r.createElement("span",{className:o.lambda,"data-name":i},r.createElement("span",{className:o.bkslash},"\\"),r.createElement("span",{className:b(o.param,o.name),style:{"--level":`${a}`}},i),c[0].length?r.createElement(r.Fragment,null,r.createElement("span",{className:o.colon},":"),r.createElement("span",null,r.createElement(p,null,c[0]))):null,r.createElement("span",{className:o.dot},"."),r.createElement("span",null,r.createElement(p,null,c[1]))))}}))}function F(t={}){const{wrapper:s}=t.components||{};return s?n.exports.jsx(s,Object.assign({},t,{children:n.exports.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",a:"a",i:"i",ul:"ul",li:"li",p:"p",h3:"h3"},t.components);return n.exports.jsxs(n.exports.Fragment,{children:[n.exports.jsxs(e.h2,{id:"table-of-contents",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#table-of-contents",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Table of contents"]}),`
`,n.exports.jsxs(e.ul,{children:[`
`,n.exports.jsxs(e.li,{children:[n.exports.jsx(e.a,{href:"#rules",children:"Rules"}),`
`,n.exports.jsxs(e.ul,{children:[`
`,n.exports.jsx(e.li,{children:n.exports.jsx(e.a,{href:"#substitution",children:"Substitution"})}),`
`,n.exports.jsx(e.li,{children:n.exports.jsx(e.a,{href:"#macros",children:"Macros"})}),`
`,n.exports.jsx(e.li,{children:n.exports.jsx(e.a,{href:"#types",children:"Types"})}),`
`]}),`
`]}),`
`,n.exports.jsxs(e.li,{children:[n.exports.jsx(e.a,{href:"#syntax",children:"Syntax"}),`
`,n.exports.jsxs(e.ul,{children:[`
`,n.exports.jsx(e.li,{children:n.exports.jsx(e.a,{href:"#basics",children:"Basics"})}),`
`,n.exports.jsx(e.li,{children:n.exports.jsx(e.a,{href:"#macros-1",children:"Macros"})}),`
`]}),`
`]}),`
`,n.exports.jsx(e.li,{children:n.exports.jsx(e.a,{href:"#future",children:"Future"})}),`
`]}),`
`,n.exports.jsx(e.h2,{id:"",children:n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})})}),`
`,n.exports.jsxs(e.p,{children:[`Lambda calculus is a mathematical approach to abstract machines that served as
the basis of languages such as Haskell and ML. As a programmer who had mainly
worked with procedural languages, it always intrigued me how such languages
are constructed. Recently I made an educational
`,n.exports.jsx(e.a,{href:"https://lbfalvy.github.io/f.engine",children:"Lambda calculus executor"}),`
combined with an interactive tutorial to show the language to a friend, and this gave
me a bit of insight into the general ideas of the language. In this series I hope to
successfully define a language which is both usable and pure by applying the code
quality principles I learned in Typescript onto Lambda Calculus.`]}),`
`,n.exports.jsxs(e.p,{children:[`If you aren't familiar with Lambda calculus, I suggest reading through the above tutorial
or the `,n.exports.jsx(e.a,{href:"https://en.wikipedida.org/wiki/Lambda_calculus",children:"Wikipedia page"}),"."]}),`
`,n.exports.jsxs(e.h2,{id:"rules",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rules",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Rules"]}),`
`,n.exports.jsxs(e.h3,{id:"substitution",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#substitution",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Substitution"]}),`
`,n.exports.jsx(e.p,{children:`The basic rule of the language is that of lambda calculus, that is, substitution or
function application. Evaluation at runtime is always lazy, and this is sufficient
for Turing-completeness. Of course, this one rule is not nearly enough for a usable
language, so let's set out some more.`}),`
`,n.exports.jsxs(e.h3,{id:"macros",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,n.exports.jsx(e.p,{children:"Preprocessor macros in C are a language of their own, frequently used for"}),`
`,n.exports.jsxs(e.ul,{children:[`
`,n.exports.jsx(e.li,{children:`defining invariants (except you can't be sure that it's an invariant and not a runtime
expression)`}),`
`,n.exports.jsx(e.li,{children:"changing the code depending on compiler flags (necessary for platform-specific behavior)"}),`
`,n.exports.jsx(e.li,{children:`constructing complex parameterised types (C's type system is turing complete if we
consider the preprocessor part of it, and we should because it's the official answer
to generics)`}),`
`]}),`
`,n.exports.jsx(e.p,{children:`Now, these are very different challenges and as far as I know no language apart from C
opted to solve all of them by embedding another Turing-complete language.`}),`
`,n.exports.jsx(e.p,{children:`Invariants are an important feature and we definitely need to support them. Since Lambda
expressions are both operators and values, these invariants will be both named functions
and constants.`}),`
`,n.exports.jsx(e.p,{children:`Platform-specific behavior is an antipattern. A lot of C programmers will fight me over
this, but in my opinion if two things share functionality but do slightly different
things then they should be separated into a function that always does the same thing
and two entry points which call it differently.`}),`
`,n.exports.jsx(e.p,{children:`One thing C's preprocessor doesn't do is define operators, but this is something I'd
like to solve in our case with macros. Infix operators are immensely useful in
mathematical code but they're one of those things lambda calculus doesn't have simply
because it was designed to be a mathematical lab rat and not a programming language. Do
take note though, that supporting user-defined operators implies that we must also
support overloading - resolving functions based on the types of their arguments.`}),`
`,n.exports.jsxs(e.h3,{id:"types",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Types"]}),`
`,n.exports.jsx(e.p,{children:`The best thing about functional languages is the type system. Lambda calculus doesn't
have types and it doesn't need them, since the only type is the lambda function that
is applied to a lambda function and evaluates to a lambda function. The named constants
you see in examples are actually an extension, usually representing the type of predicates
from simply typed lambda calculus (a "thing" that cannot be applied to anything).`}),`
`,n.exports.jsx(e.p,{children:`In many functional languages the type system is regarded as something isolated and untangible,
and entire language features are scrapped to keep type inference computable. Some lack syntax
for generics altogether. In my opinion code is written for humans to read and if they can't
figure it out then the lack of type annotations is a flaw. Consequently, I'd like my type
system to be as expressive as technically possible and intentionally ignore such questions as
the computability of type inference.`}),`
`,n.exports.jsx(e.p,{children:`On the other hand, I don't want to fall into C's trap and make the type system a
separate langauge, as that would increase the maintenance effort and steepen the
learning curve disproportionately. What I would ike is for the type system to operate
on the same principles as the language itself, with the same or similar syntax elements.`}),`
`,n.exports.jsx(e.p,{children:`As for syntax, I'm faced with an interesting challenge; choosing to ignore type inference
means that users may have to add type hints to intermediary values, but functional languages
doon't normally include variable declarations - or variables for that matter - so type hints
will have to be designed in such a way that any subsection of the program that has a type
can receive one.`}),`
`,n.exports.jsxs(e.h2,{id:"syntax",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#syntax",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Syntax"]}),`
`,n.exports.jsxs(e.h3,{id:"basics",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#basics",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Basics"]}),`
`,n.exports.jsx(e.p,{children:`While experimenting with f.engine, I found that the following syntax works really well
with common Lambda calculus:`}),`
`,n.exports.jsx("pre",{children:n.exports.jsx(p,{children:`func=\\arg:type. operation arg
func value:type
-- this is a comment`})}),`
`,n.exports.jsx(e.p,{children:`With a little bit of syntax highlighting this can be very clean and concise so I'll
stick to it. One thing to note here is that while Arg is required to be a name, Type
can be any valid lambda expression. A type preceded by a colon can be attached to any
expression, but in many cases (like the provided example) the language should be able
to infer the types if all expression parameters are typed correctly.`}),`
`,n.exports.jsxs(e.h3,{id:"macros-1",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros-1",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,n.exports.jsx(e.p,{children:`Macros are parsed and executed after tokenization but before parsing and specify
substitution rules in terms of a list of tokens. The basic syntax defines a source and
a target which share a number of placeholders, a floating point priority which defaults
to 1 and a direction of parsing.`}),`
`,n.exports.jsx(p,{children:`$a + $b =5=> (add $a $b)
$a * $b =6=> (mult $a $b)
if $a then $b else $c <=2= ($a $b $c) -- assuming Church booleans
-- These three map square bracketed lists to a custom function
-- and church booleans
[ == (begin_list
, == false
] == true)`}),`
`,n.exports.jsx(e.p,{children:`A $placeholder can represent either a single token or a group of tokens between balanced
parentheses. Parentheses aren't considered tokens for the purposes of macro resolution, but
they may appear in the target. Tokenization is done via a standard greedy strategy, with
the exact set of tokens defined by the macros.`}),`
`,n.exports.jsx(e.p,{children:`This should be enough for most things we might want to do, but it's far too verbose for
defining functions and invariants so we need a shorter syntax. If the source is a single
token literal followed by a single equals sign, the target is automatically parenthesized:`}),`
`,n.exports.jsx(p,{children:"true = \\true.\\false.true"}),`
`,n.exports.jsxs(e.h2,{id:"future",children:[n.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future",children:n.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Future"]}),`
`,n.exports.jsx(e.p,{children:`This is the first article in a series discussing aspects of programming language design.
In the following parts I'll discuss type checking and overloading, type inference,
guaranteed optimizations and elements of the standard library, in no particular order.
I hope to write an implementation of the language during the next academic year, by then
it would be best to settle on most high level design decisions.`})]})}}export{F as default};
