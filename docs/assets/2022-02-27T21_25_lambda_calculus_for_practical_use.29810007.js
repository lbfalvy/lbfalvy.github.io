import{j as e}from"./jsx-runtime.34bfffa0.js";import"./vendor.ee1415c3.js";function o(t={}){const{wrapper:s}=t.components||{};return s?e.exports.jsx(s,Object.assign({},t,{children:e.exports.jsx(a,{})})):a();function a(){const n=Object.assign({h2:"h2",a:"a",i:"i",ul:"ul",li:"li",p:"p",h3:"h3",pre:"pre",code:"code"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(n.h2,{id:"table-of-contents",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#table-of-contents",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Table of contents"]}),`
`,e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsxs(n.li,{children:[e.exports.jsx(n.a,{href:"#requirements",children:"Requirements"}),`
`,e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"#substitution",children:"Substitution"})}),`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"#macros",children:"Macros"})}),`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"#types",children:"Types"})}),`
`]}),`
`]}),`
`,e.exports.jsxs(n.li,{children:[e.exports.jsx(n.a,{href:"#syntax",children:"Syntax"}),`
`,e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"#basics",children:"Basics"})}),`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"#macros-1",children:"Macros"})}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(n.h2,{id:"",children:e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})})}),`
`,e.exports.jsxs(n.p,{children:[`Lambda calculus is a mathematical approach to abstract machines that served as
the basis of languages such as Haskell and ML. As a programmer who had mainly
worked with procedural languages, it always intrigued me how such languages
are constructed. Recently I made an educational
`,e.exports.jsx(n.a,{href:"https://lbfalvy.github.io/f.engine",children:"Lambda calculus executor"}),`
combined with an interactive tutorial to show the language to a friend, and this gave
me a bit of insight into the general ideas of the language. In this series I hope to
successfully define a language which is both usable and pure by applying the code
quality principles I learned in Typescript onto Lambda Calculus`]}),`
`,e.exports.jsxs(n.h2,{id:"requirements",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Requirements"]}),`
`,e.exports.jsxs(n.h3,{id:"substitution",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#substitution",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Substitution"]}),`
`,e.exports.jsx(n.p,{children:`The basic rule of the language is that of lambda calculus, that is, substitution or
function application. Evaluation at runtime is always lazy, and this is sufficient
for Turing-completeness. Of course, this one rule is not nearly enough for a usable
language, so let's set out some more.`}),`
`,e.exports.jsxs(n.h3,{id:"macros",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,e.exports.jsx(n.p,{children:"Preprocessor macros in C are a language of their own, frequently used for"}),`
`,e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsx(n.li,{children:`defining invariants (except you can't be sure that it's an invariant and not a runtime
expression)`}),`
`,e.exports.jsx(n.li,{children:"changing the code depending on compiler flags (necessary for platform-specific behavior)"}),`
`,e.exports.jsx(n.li,{children:`constructing complex parameterised types (C's type system is turing complete if we
consider the preprocessor part of it, and we should because it's the official answer
to generics)`}),`
`]}),`
`,e.exports.jsx(n.p,{children:`Now, these are very different tasks and as far as I know no language apart from C
opted to solve all of them by embedding another Turing-complete language.`}),`
`,e.exports.jsx(n.p,{children:`Invariants are an important feature and we definitely need to support them. Since Lambda
expressions are both operators and values, these invariants will be both named functions
and constants.`}),`
`,e.exports.jsx(n.p,{children:`Platform-specific behavior is an antipattern. A lot of C programmers will fight me over
this, but in my opinion if two things share functionality but do slightly different
things then they should be separated into a function that always does the same thing
and two entry points which call it differently.`}),`
`,e.exports.jsx(n.p,{children:`One thing C's preprocessor doesn't do is define operators, but this is something I'd
like to solve in our case with macros. Infix operators are immensely useful in
mathematical code but they're one of those things lambda calculus doesn't have simply
because it was designed to be a mathematical lab rat and not a programming language. Do
take note though, that supporting user-defined operators implies that we must also
support overloading.`}),`
`,e.exports.jsxs(n.h3,{id:"types",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Types"]}),`
`,e.exports.jsx(n.p,{children:`The best thing about functional languages is the type system. In many languages it's
regarded as something isolated and untangible, and entire language features are
scrapped to keep type inference computable. In my opinion vode is written for
humans to read and if they can't figure it out then the lack of type annotations is
a flaw. Consequently, I'd like my type system to be as expressive as technically
possible and intentionally ignore the computability of type inference.`}),`
`,e.exports.jsx(n.p,{children:`On the other hand, I don't want to fall into C's trap and make the type system a
separate langauge, as that would increase the maintenance effort and steepen the
learning curve disproportionately. What I would ike is for the type system to operate
on the same principles as the language itself, with the same or similar syntax elements.`}),`
`,e.exports.jsxs(n.h2,{id:"syntax",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#syntax",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Syntax"]}),`
`,e.exports.jsxs(n.h3,{id:"basics",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#basics",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Basics"]}),`
`,e.exports.jsx(n.p,{children:`While experimenting with f.engine, I found that the following syntax works really well
with common Lambda calculus:`}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{children:`func=(\\arg:type. operation arg)
func value:type
-- this is a comment
`})}),`
`,e.exports.jsx(n.p,{children:`With a little bit of syntax highlighting this can be very clean and concise so I'll
stick to it. One thing to note here is that while Arg is required to be a name, Type
can be any valid lambda expression. A type preceded by a colon can be attached to any
expression, but in many cases (like the provided example) the language should be able
to infer the types if all expression parameters are typed correctly.`}),`
`,e.exports.jsxs(n.h3,{id:"macros-1",children:[e.exports.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros-1",children:e.exports.jsx(n.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,e.exports.jsx(n.p,{children:`Macros are parsed and executed after tokenization but before parsing and specify
substitution rules in terms of a list of tokens. The basic syntax defines a source,
a target, a floating point priority which defaults to 1 and a direction of parsing.`}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{children:`$a + $b =5=> (add $a $b)
$a * $b =6=> (mult $a $b)
if $a then $b else $c <=2= ($a $b $c) -- assuming Church booleans
-- These three map square bracketed lists to a custom function
-- and church booleans
[ == (begin_list
, == false
] == true)
`})}),`
`,e.exports.jsx(n.p,{children:`A $placeholder can represent either a single token or a group of tokens between balanced
parentheses. Parentheses aren't considered tokens for the purposes of macro resolution, but
they may appear in the target. Tokenization is done via a standard greedy strategy, with
the exact set of tokens defined by the macros.`}),`
`,e.exports.jsx(n.p,{children:`This should be enough for most things we might want to do, but it's far too long for
defining functions and invariants so we need a shorter syntax. If the source is a single
token literal followed by a single equals sign, the target is automatically parenthesized.`}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{children:`true = \\t.\\f.t
`})})]})}}export{o as default};
