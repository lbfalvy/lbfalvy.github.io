import{j as e}from"./jsx-runtime.e6dac2f9.js";import{L as n}from"./LambdaHighlight.f0b6078a.js";import"./index.4815d703.js";function a(s){const t=Object.assign({h2:"h2",a:"a",i:"i",ul:"ul",li:"li",p:"p",h3:"h3",code:"code",em:"em"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(t.h2,{id:"table-of-contents",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#table-of-contents",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Table of contents"]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.a,{href:"#rules",children:"Rules"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#substitution",children:"Substitution"})}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#macros",children:"Macros"})}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#types",children:"Types"})}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.a,{href:"#syntax",children:"Syntax"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#basics",children:"Basics"})}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#macros-1",children:"Macros"})}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#conclusion",children:"Conclusion"})}),`
`]}),`
`]}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.a,{href:"#future",children:"Future"})}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"",children:e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})})}),`
`,e.exports.jsxs(t.p,{children:["Lambda calculus is a mathematical approach to abstract machines that served as the basis of languages such as Haskell and ML. As a programmer who had mainly worked with procedural languages, it always intrigued me how such languages are constructed. Recently I made an educational ",e.exports.jsx("a",{href:"https://www.lbfalvy.com/f.engine",children:"Lambda calculus executor"})," combined with an interactive tutorial to show the language to a friend, and this gave me a bit of insight into the general ideas of the language. In this series I hope to successfully define a language which is both usable and pure by applying the code quality principles I learned in Typescript onto Lambda Calculus."]}),`
`,e.exports.jsxs(t.p,{children:["If you aren't familiar with Lambda calculus, I suggest reading through the above tutorial or the ",e.exports.jsx(t.a,{href:"https://en.wikipedida.org/wiki/Lambda_calculus",children:"Wikipedia page"}),"."]}),`
`,e.exports.jsxs(t.h2,{id:"rules",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rules",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Rules"]}),`
`,e.exports.jsxs(t.h3,{id:"substitution",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#substitution",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Substitution"]}),`
`,e.exports.jsx(t.p,{children:"The basic rule of the language is that of lambda calculus, that is, substitution or function application. Evaluation at runtime is always lazy, and this is sufficient for Turing-completeness. Of course, this one rule is not nearly enough for a usable language, so let's set out some more."}),`
`,e.exports.jsxs(t.h3,{id:"macros",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,e.exports.jsx(t.p,{children:"Preprocessor macros in C are a language of their own, frequently used for"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"defining invariants (except you can't be sure that it's an invariant and not a runtime expression)"}),`
`,e.exports.jsx(t.li,{children:"changing the code depending on compiler flags (necessary for platform-specific behavior)"}),`
`,e.exports.jsx(t.li,{children:"constructing complex parameterised types (C's type system is turing complete if we consider the preprocessor part of it, and we should because it's the official answer to generics)"}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Now, these are very different challenges and as far as I know no language apart from C opted to solve all of them by embedding another Turing-complete language."}),`
`,e.exports.jsx(t.p,{children:"Invariants are an important feature and we definitely need to support them. Since Lambda expressions are both operators and values, these invariants will be both named functions and constants."}),`
`,e.exports.jsx(t.p,{children:"Platform-specific behavior is an antipattern. A lot of C programmers will fight me over this, but in my opinion if two things share functionality but do slightly different things then they should be separated into a function that always does the same thing and two entry points which call it differently."}),`
`,e.exports.jsx(t.p,{children:"One thing C's preprocessor doesn't do is define operators, but this is something I'd like to solve in our case with macros. Infix operators are immensely useful in mathematical code but they're one of those things lambda calculus doesn't have simply because it was designed to be a mathematical lab rat and not a programming language. Do take note though, that supporting user-defined operators implies that we must also support overloading - resolving functions based on the types of their arguments."}),`
`,e.exports.jsxs(t.h3,{id:"types",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#types",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Types"]}),`
`,e.exports.jsx(t.p,{children:`The best thing about functional languages is the type system. Lambda calculus doesn't have types and it doesn't need them, since the only type is the lambda function that is applied to a lambda function and evaluates to a lambda function. The named constants you see in examples are actually an extension, usually representing the type of predicates from simply typed lambda calculus (a "thing" that cannot be applied to anything).`}),`
`,e.exports.jsx(t.p,{children:"In many functional languages the type system is regarded as something isolated and intangible, and entire language features are scrapped to keep type inference computable. Some lack syntax for generics altogether. In my opinion code is written for humans to read and if they can't figure it out then the lack of type annotations is a flaw. Consequently, I'd like my type system to be as expressive as technically possible and intentionally ignore such questions as the computability of type inference."}),`
`,e.exports.jsx(t.p,{children:"On the other hand, I don't want to fall into C's trap and make the type system a separate langauge, as that would increase the maintenance effort and steepen the learning curve disproportionately. What I would ike is for the type system to operate on the same principles as the language itself, with the same or similar syntax elements."}),`
`,e.exports.jsx(t.p,{children:"As for syntax, I'm faced with an interesting challenge; choosing to ignore type inference means that users may have to add type hints to intermediary values, but functional languages doon't normally include variable declarations - or variables for that matter - so type hints will have to be designed in such a way that any subsection of the program that has a type can receive one."}),`
`,e.exports.jsxs(t.h2,{id:"syntax",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#syntax",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Syntax"]}),`
`,e.exports.jsxs(t.h3,{id:"basics",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#basics",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Basics"]}),`
`,e.exports.jsx(t.p,{children:"While experimenting with f.engine, I found that the following syntax works really well with common Lambda calculus:"}),`
`,e.exports.jsx(n,{children:`func=\\arg:type. operation arg
func value:type
-- this is a comment`}),`
`,e.exports.jsx(t.p,{children:"With a little bit of syntax highlighting this can be very clean and concise so I'll stick to it. One thing to note here is that while Arg is required to be a name, Type can be any valid lambda expression. A type preceded by a colon can be attached to any expression, but in many cases (like the provided example) the language should be able to infer the types if all expression parameters are typed correctly."}),`
`,e.exports.jsxs(t.h3,{id:"macros-1",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#macros-1",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Macros"]}),`
`,e.exports.jsx(t.p,{children:"Macros are parsed and executed after tokenization but before parsing and specify substitution rules in terms of a list of tokens. The basic syntax defines a source and a target which share a number of placeholders, a floating point priority which defaults to 1 and a direction of parsing."}),`
`,e.exports.jsx(n,{children:`$a + $b =5=> (add $a $b)
$a * $b =6=> (mult $a $b)
if $a then $b else $c <=2= ($a $b $c) -- assuming Church booleans
-- These three map square bracketed lists to a custom function
-- and church booleans
[ := (begin_list
, := false
] := true)`}),`
`,e.exports.jsx(t.p,{children:"A $placeholder can represent either a single token or a group of tokens between balanced parentheses. Parentheses aren't considered tokens for the purposes of macro resolution, but they may appear in the target. Tokenization is done via a standard greedy strategy, with the exact set of tokens defined by the macros."}),`
`,e.exports.jsx(t.p,{children:"This should be enough for most things we might want to do, but it's far too verbose for defining functions and invariants so we need a shorter syntax. If the source is a single token literal followed by a single equals sign, the target is automatically parenthesized:"}),`
`,e.exports.jsx(n,{children:"true := \\true.\\false.true"}),`
`,e.exports.jsxs(t.h3,{id:"conclusion",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Conclusion"]}),`
`,e.exports.jsx(t.p,{children:"Given the above examples and fairly standard Lambda Calculus constants, the below example is a reasonable guess at what the final code might look like:"}),`
`,e.exports.jsx(n,{children:`find := \\T. \\predicate:(\\item:T.Bool). \\list:Cons T. (
    (loop \\repeat. \\sublist:Cons T.
        if (predicate (head sublist))
        then (head sublist)
        else (repeat (tail sublist))
    ) list
)`}),`
`,e.exports.jsxs(t.p,{children:["Here ",e.exports.jsx(t.code,{children:"loop"})," is a more accessible keyword for the Y combinator and ",e.exports.jsx(t.code,{children:"T"})," is a generic parameter. Also note that the type of sublist is specified even though it can easily be deduced from context because the human reader parsing the code top-down would have to skip to the end of the loop call to see the parameter. This is a good example of a case where adding superfluous type hints improves readability."]}),`
`,e.exports.jsxs(t.h2,{id:"future",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"Future"]}),`
`,e.exports.jsx(t.p,{children:"This is the first article in a series discussing aspects of programming language design. In the following parts I'll discuss type checking and overloading, type inference, guaranteed optimizations and elements of the standard library, in no particular order. I hope to write an implementation of the language during the next academic year, by then it would be best to settle on most high level design decisions."}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.em,{children:"ps: I updated the code samples in this article to keep the highlighting working. Changes:"})}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:e.exports.jsxs(t.em,{children:["replaced ",e.exports.jsx(t.code,{children:"="})," and ",e.exports.jsx(t.code,{children:"=="})," with ",e.exports.jsx(t.code,{children:":="})," in invariant rules"]})}),`
`]})]})}function l(s={}){const{wrapper:t}=s.components||{};return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(a,s)})):a(s)}export{l as default};
