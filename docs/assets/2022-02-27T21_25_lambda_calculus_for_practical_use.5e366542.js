var k=Object.defineProperty,w=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var x=(n,s,a)=>s in n?k(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,g=(n,s)=>{for(var a in s||(s={}))_.call(s,a)&&x(n,a,s[a]);if(m)for(var a of m(s))I.call(s,a)&&x(n,a,s[a]);return n},f=(n,s)=>w(n,v(s));import{j as t}from"./jsx-runtime.f040b5d2.js";import{R as r,c as b}from"./vendor.ed6a35f9.js";const N="_main_10ysk_5",E="_comment_10ysk_8",$="_name_10ysk_11",T="_global_10ysk_14",C="_operator_10ysk_17",L="_macro_10ysk_20",M="_placeholder_10ysk_23",A="_lambda_10ysk_26",z="_bkslash_10ysk_26",q="_colon_10ysk_26",O="_dot_10ysk_26";var o={main:N,comment:E,name:$,global:T,operator:C,macro:L,placeholder:M,lambda:A,bkslash:z,colon:q,dot:O};function j(n,s=!1){for(var a=0,e=0;0<=e&&a<n.length;a++)if(n[a]=="("||n[a]=="\\")e++;else if(n[a]==")"||n[a]==".")e--;else if(s&&n[a]==`
`&&e==0)break;return n.slice(0,a)}function S(n){n=n.slice(1);const s=/^[a-zA-Z0-9_]+\s*/.exec(n);if(!s)throw new Error(`Missing name in "${n}"`);const a=s[0].trim(),e=s[0].length;let h=[],i=e;if(n[e]==":"){const d=j(n.slice(e+1)).slice(0,-1);h=l(d),i+=d.length+1}if(n[i]!=".")throw new Error(`Missing dot in "${n.slice(i)}"`);const c=l(n.slice(i+1));return["lambda",a,h,c]}function l(n){if(n=="")return[];const s=/^(\s|\n)+/.exec(n);if(s)return[["whitespace",s[0]],...l(n.slice(s[0].length))];const a=/^[a-zA-Z0-9_]+/.exec(n);if(a)return[["name",a[0]],...l(n.slice(a[0].length))];const e=/^\-\-\[.*?\]\-\-/.exec(n);if(e)return[["comment",e[0]],...l(n.slice(e[0].length))];const h=/^--.*?(?:\n|$)/.exec(n);if(h)return[["comment",h[0]],...l(n.slice(h[0].length))];if(n.startsWith("\\")){const u=j(n);return[S(u),...l(n.slice(u.length))]}const i=/^\$[a-zA-Z0-9_]+/.exec(n);if(i)return[["placeholder",i[0]],...l(n.slice(i[0].length))];const c=/^<?=((\d+(\.\d+)?)?=>?)?/.exec(n);if(c)return[["macro",c[0]],...l(n.slice(c[0].length))];const d=/^[^\sa-zA-Z0-9_\$\\]+/.exec(n);if(d)return[["operator",d[0]],...l(n.slice(d[0].length))];throw new Error(`Logic error: none of the regices in a complete cover matched "${n}"`)}const y=r.createContext({});function p({children:n}){const s=r.useContext(y),a=Object.keys(s).length+1;let e;return typeof n=="string"?e=l(n):e=n,r.createElement("code",{className:o.main},e.map(([h,i,...c],d)=>{switch(h){case"comment":return r.createElement("span",{className:o.comment},i);case"name":return r.createElement("span",{className:b(o.name,s[i]||o.global),style:s[i]?{"--level":`${s[i]}`}:void 0},i);case"operator":return r.createElement("span",{className:o.operator},i);case"whitespace":return r.createElement("span",null,i);case"placeholder":return r.createElement("span",{className:o.placeholder},i);case"macro":return r.createElement("span",{className:o.macro},i);case"lambda":return r.createElement(y.Provider,{value:f(g({},s),{[i]:a})},r.createElement("span",{className:o.lambda,"data-name":i},r.createElement("span",{className:o.bkslash},"\\"),r.createElement("span",{className:b(o.param,o.name),style:{"--level":`${a}`}},i),c[0].length?r.createElement(r.Fragment,null,r.createElement("span",{className:o.colon},":"),r.createElement("span",null,r.createElement(p,null,c[0]))):null,r.createElement("span",{className:o.dot},"."),r.createElement("span",null,r.createElement(p,null,c[1]))))}}))}function F(n={}){const{wrapper:s}=n.components||{};return s?t.exports.jsx(s,Object.assign({},n,{children:t.exports.jsx(a,{})})):a();function a(){const e=Object.assign({h2:"h2",a:"a",i:"i",ul:"ul",li:"li",p:"p",h3:"h3",code:"code"},n.components);return t.exports.jsxs(t.exports.Fragment,{children:[t.exports.jsxs(e.h2,{id:"table-of-contents",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#table-of-contents",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Table of contents"]}),`
`,t.exports.jsxs(e.ul,{children:[`
`,t.exports.jsxs(e.li,{children:[t.exports.jsx(e.a,{href:"#rules",children:"Rules"}),`
`,t.exports.jsxs(e.ul,{children:[`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#substitution",children:"Substitution"})}),`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#macros",children:"Macros"})}),`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#types",children:"Types"})}),`
`]}),`
`]}),`
`,t.exports.jsxs(e.li,{children:[t.exports.jsx(e.a,{href:"#syntax",children:"Syntax"}),`
`,t.exports.jsxs(e.ul,{children:[`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#basics",children:"Basics"})}),`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#macros-1",children:"Macros"})}),`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#conclusion",children:"Conclusion"})}),`
`]}),`
`]}),`
`,t.exports.jsx(e.li,{children:t.exports.jsx(e.a,{href:"#future",children:"Future"})}),`
`]}),`
`,t.exports.jsx(e.h2,{id:"",children:t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})})}),`
`,t.exports.jsxs(e.p,{children:[`Lambda calculus is a mathematical approach to abstract machines that served as
the basis of languages such as Haskell and ML. As a programmer who had mainly
worked with procedural languages, it always intrigued me how such languages
are constructed. Recently I made an educational
`,t.exports.jsx(e.a,{href:"https://lbfalvy.github.io/f.engine",children:"Lambda calculus executor"}),`
combined with an interactive tutorial to show the language to a friend, and this gave
me a bit of insight into the general ideas of the language. In this series I hope to
successfully define a language which is both usable and pure by applying the code
quality principles I learned in Typescript onto Lambda Calculus.`]}),`
`,t.exports.jsxs(e.p,{children:[`If you aren't familiar with Lambda calculus, I suggest reading through the above tutorial
or the `,t.exports.jsx(e.a,{href:"https://en.wikipedida.org/wiki/Lambda_calculus",children:"Wikipedia page"}),"."]}),`
`,t.exports.jsxs(e.h2,{id:"rules",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rules",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Rules"]}),`
`,t.exports.jsxs(e.h3,{id:"substitution",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#substitution",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Substitution"]}),`
`,t.exports.jsx(e.p,{children:`The basic rule of the language is that of lambda calculus, that is, substitution or
function application. Evaluation at runtime is always lazy, and this is sufficient
for Turing-completeness. Of course, this one rule is not nearly enough for a usable
language, so let's set out some more.`}),`
`,t.exports.jsxs(e.h3,{id:"macros",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,t.exports.jsx(e.p,{children:"Preprocessor macros in C are a language of their own, frequently used for"}),`
`,t.exports.jsxs(e.ul,{children:[`
`,t.exports.jsx(e.li,{children:`defining invariants (except you can't be sure that it's an invariant and not a runtime
expression)`}),`
`,t.exports.jsx(e.li,{children:"changing the code depending on compiler flags (necessary for platform-specific behavior)"}),`
`,t.exports.jsx(e.li,{children:`constructing complex parameterised types (C's type system is turing complete if we
consider the preprocessor part of it, and we should because it's the official answer
to generics)`}),`
`]}),`
`,t.exports.jsx(e.p,{children:`Now, these are very different challenges and as far as I know no language apart from C
opted to solve all of them by embedding another Turing-complete language.`}),`
`,t.exports.jsx(e.p,{children:`Invariants are an important feature and we definitely need to support them. Since Lambda
expressions are both operators and values, these invariants will be both named functions
and constants.`}),`
`,t.exports.jsx(e.p,{children:`Platform-specific behavior is an antipattern. A lot of C programmers will fight me over
this, but in my opinion if two things share functionality but do slightly different
things then they should be separated into a function that always does the same thing
and two entry points which call it differently.`}),`
`,t.exports.jsx(e.p,{children:`One thing C's preprocessor doesn't do is define operators, but this is something I'd
like to solve in our case with macros. Infix operators are immensely useful in
mathematical code but they're one of those things lambda calculus doesn't have simply
because it was designed to be a mathematical lab rat and not a programming language. Do
take note though, that supporting user-defined operators implies that we must also
support overloading - resolving functions based on the types of their arguments.`}),`
`,t.exports.jsxs(e.h3,{id:"types",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Types"]}),`
`,t.exports.jsx(e.p,{children:`The best thing about functional languages is the type system. Lambda calculus doesn't
have types and it doesn't need them, since the only type is the lambda function that
is applied to a lambda function and evaluates to a lambda function. The named constants
you see in examples are actually an extension, usually representing the type of predicates
from simply typed lambda calculus (a "thing" that cannot be applied to anything).`}),`
`,t.exports.jsx(e.p,{children:`In many functional languages the type system is regarded as something isolated and untangible,
and entire language features are scrapped to keep type inference computable. Some lack syntax
for generics altogether. In my opinion code is written for humans to read and if they can't
figure it out then the lack of type annotations is a flaw. Consequently, I'd like my type
system to be as expressive as technically possible and intentionally ignore such questions as
the computability of type inference.`}),`
`,t.exports.jsx(e.p,{children:`On the other hand, I don't want to fall into C's trap and make the type system a
separate langauge, as that would increase the maintenance effort and steepen the
learning curve disproportionately. What I would ike is for the type system to operate
on the same principles as the language itself, with the same or similar syntax elements.`}),`
`,t.exports.jsx(e.p,{children:`As for syntax, I'm faced with an interesting challenge; choosing to ignore type inference
means that users may have to add type hints to intermediary values, but functional languages
doon't normally include variable declarations - or variables for that matter - so type hints
will have to be designed in such a way that any subsection of the program that has a type
can receive one.`}),`
`,t.exports.jsxs(e.h2,{id:"syntax",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#syntax",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Syntax"]}),`
`,t.exports.jsxs(e.h3,{id:"basics",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#basics",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Basics"]}),`
`,t.exports.jsx(e.p,{children:`While experimenting with f.engine, I found that the following syntax works really well
with common Lambda calculus:`}),`
`,t.exports.jsx(p,{children:`func=\\arg:type. operation arg
func value:type
-- this is a comment`}),`
`,t.exports.jsx(e.p,{children:`With a little bit of syntax highlighting this can be very clean and concise so I'll
stick to it. One thing to note here is that while Arg is required to be a name, Type
can be any valid lambda expression. A type preceded by a colon can be attached to any
expression, but in many cases (like the provided example) the language should be able
to infer the types if all expression parameters are typed correctly.`}),`
`,t.exports.jsxs(e.h3,{id:"macros-1",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros-1",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,t.exports.jsx(e.p,{children:`Macros are parsed and executed after tokenization but before parsing and specify
substitution rules in terms of a list of tokens. The basic syntax defines a source and
a target which share a number of placeholders, a floating point priority which defaults
to 1 and a direction of parsing.`}),`
`,t.exports.jsx(p,{children:`$a + $b =5=> (add $a $b)
$a * $b =6=> (mult $a $b)
if $a then $b else $c <=2= ($a $b $c) -- assuming Church booleans
-- These three map square bracketed lists to a custom function
-- and church booleans
[ == (begin_list
, == false
] == true)`}),`
`,t.exports.jsx(e.p,{children:`A $placeholder can represent either a single token or a group of tokens between balanced
parentheses. Parentheses aren't considered tokens for the purposes of macro resolution, but
they may appear in the target. Tokenization is done via a standard greedy strategy, with
the exact set of tokens defined by the macros.`}),`
`,t.exports.jsx(e.p,{children:`This should be enough for most things we might want to do, but it's far too verbose for
defining functions and invariants so we need a shorter syntax. If the source is a single
token literal followed by a single equals sign, the target is automatically parenthesized:`}),`
`,t.exports.jsx(p,{children:"true = \\true.\\false.true"}),`
`,t.exports.jsxs(e.h3,{id:"conclusion",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Conclusion"]}),`
`,t.exports.jsx(e.p,{children:`Given the above examples and fairly standard Lambda Calculus constants, the below example
is a reasonable guess at what the final code might look like:`}),`
`,t.exports.jsx(p,{children:`find = \\T. \\predicate:(\\item:T.Bool). \\list:Cons T. (
    (loop \\repeat. \\sublist:Cons T.
        if (predicate (head sublist))
        then (head sublist)
        else (repeat (tail sublist))
    ) list
)
`}),`
`,t.exports.jsxs(e.p,{children:["Here ",t.exports.jsx(e.code,{children:"loop"})," is a more accessible keyword for the Y combinator and ",t.exports.jsx(e.code,{children:"T"}),` is a generic parameter.
Also note that the type of sublist is specified even though it can easily be deduced from
context because the human reader parsing the code top-down would have to skip to the end of
the loop call to see the parameter. This is a good example of a case where adding superfluous
type hints improves readability.`]}),`
`,t.exports.jsxs(e.h2,{id:"future",children:[t.exports.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future",children:t.exports.jsx(e.i,{className:"linkbtn gg-link"})}),"Future"]}),`
`,t.exports.jsx(e.p,{children:`This is the first article in a series discussing aspects of programming language design.
In the following parts I'll discuss type checking and overloading, type inference,
guaranteed optimizations and elements of the standard library, in no particular order.
I hope to write an implementation of the language during the next academic year, by then
it would be best to settle on most high level design decisions.`})]})}}export{F as default};
