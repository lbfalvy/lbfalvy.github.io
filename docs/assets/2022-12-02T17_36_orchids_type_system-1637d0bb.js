import{j as e}from"./jsx-runtime-0127b9df.js";import"./index-0e98de9a.js";function s(n){const i=Object.assign({h2:"h2",a:"a",i:"i",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",em:"em"},n.components);return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"unification-universe-recursion",children:[e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unification-universe-recursion",children:e.jsx(i.i,{className:"linkbtn gg-link"})}),"Unification, universe recursion"]}),`
`,e.jsx(i.p,{children:"Orchid will be a compiled variant of lambda calculus which supports dependent types. Because it's compiled, the type of every value must be known statically, and because it supports dependent types, values can spontaneously appear in type expressions. This makes the type system Turing complete, and introduces the concept of dead branches."}),`
`,e.jsx(i.p,{children:"As a matter of fact, Orchid's type system is Orchid. During unification, possible reductions of both type expressions are iterated breadth-first, and each of them are unified with each reduction of the opposite type until a match is found, the sequences end or a maximum number of steps is reached. In this way, by adding recognized reduction steps, we can support selected cases of infinite recursion in a manner that is backwards-compatibly extensible."}),`
`,e.jsx(i.p,{children:"Unfortunately, there's another kind of recursion, one which is much more difficult to detect. Recursion across universes. Through a certain kind of symmetry between values and types, functions and kinds, it's very easy to end up with a value that occurs in a dead branch of its own type. Eagerly type checking this value would reduce to the same problem in the universe of types."}),`
`,e.jsx(i.p,{children:"At this point it would make a lot of sense to just classify this as unsupported behavior. It would simplify the language substantially, and it would probably still leave a very expressive language. But saying no to myself isn't what got me so far. Instead, my solution is to employ gradual typing for type expressions. Above the universe of values, types are only unified when actually evaluating a function on a parameter."}),`
`,e.jsxs(i.h2,{id:"hkts-typeclasses",children:[e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hkts-typeclasses",children:e.jsx(i.i,{className:"linkbtn gg-link"})}),"HKTs, typeclasses"]}),`
`,e.jsxs(i.p,{children:["Orchid supports higher kinded types and typeclasses. Both are defined with a ",e.jsx(i.code,{children:"define Name $Param:kind,* as ...typeExpression"})," statement, which specifies all parameters and their kinds, and the backing type. For a demonstration, here's what the definition of List (type constructor) and Add (typeclass) might look like"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"hljs language-orchid",children:`define List $T:type as loop \\r. Option (Pair $T r)
define Add $A $B $R as $A -> $B -> $R
define Multiply $A $B $R as $A -> $B -> $R
define Default $T:type as $T
`})}),`
`,e.jsxs(i.p,{children:["This also demonstrates how recursive types work. These type constructors can be partially applied and even inferred in that form. For unification purposes, Add is an opaque function and can only unify with itself or a variable, not Multiply. The functions ",e.jsx(i.code,{children:"destruct"})," and ",e.jsx(i.code,{children:"construct"})," translate between defined types and definitions. To implement a typeclass, ",e.jsx(i.code,{children:"impl ...typeExpression via ...valueExpression"})," statements are used. These take a couple forms, but their general components are"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"impl @V. @:Superclass Variable. Class Variable"})," ",e.jsx(i.em,{children:"required"})," Uses that unify with this type are implemented by the candidate"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"by implementationName"})," ",e.jsx(i.em,{children:"optional"})," A value by this name is defined in the local scope and exported. The type of the value is the definition of the typeclass, not the typeclass itself."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"over otherImplementation, thirdImplementation"})," ",e.jsx(i.em,{children:'optional, requires "by"'})," The implementation supersedes these specified other implementations."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"via valueExpression"})," ",e.jsx(i.em,{children:"required"})," The value that will be applied wherever this typeclass successfully matches. This will receive all auto parameters and preconditions that occur in the type expression, and must have the same type as the definition of the typeclass."]}),`
`]}),`
`,e.jsx(i.p,{children:"Following are some examples of typeclass implementations."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"hljs language-orchid",children:`impl Add string string string via \\a.\\b. strcat a b
impl @T. -- variables
    @:Add T T T. @init:Default T. -- preconditions
    Multiply uint T T -- target
by iterativeMultiply
via \\n.\\t. (loop \\r. \\i.
    if i = 0 then init else t + r (i - 1)
) n
`})}),`
`,e.jsxs(i.p,{children:["Typeclasses are referenced in value-code the same way preconditions are referenced above. These instances are unified with every potential impl. A unifying candidate is accepted if it directly or indirectly overrides every other unifying candidate. ",e.jsx(i.em,{children:"Ambiguity is allowable in conceptual models, but the concrete decisions that influence compiled code always must be based on a traceable sequence of direct commands."})]}),`
`,e.jsxs(i.h2,{id:"sfinae",children:[e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sfinae",children:e.jsx(i.i,{className:"linkbtn gg-link"})}),"SFINAE"]}),`
`,e.jsx(i.p,{children:"This should hopefully produce a behavior very similar to C++'s SFINAE. You CAN pass an invalid argument to a type constructor, and you CAN then use that type in any kind of complex type expression, but this branch will never be reduced and will never unify with anything, so only expressions where that branch is eliminated can pair with it during impl resolution."})]})}function r(n={}){const{wrapper:i}=n.components||{};return i?e.jsx(i,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{r as default};
