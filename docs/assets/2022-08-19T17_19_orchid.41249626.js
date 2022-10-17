import{j as e}from"./jsx-runtime.9411e71b.js";import{L as n,H as a}from"./LambdaHighlight.05b45743.js";import"./index.af73a0ff.js";function d(o={}){const{wrapper:r}=o.components||{};return r?e.exports.jsx(r,Object.assign({},o,{children:e.exports.jsx(s,{})})):s();function s(){const t=Object.assign({h3:"h3",a:"a",i:"i",p:"p",em:"em"},o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs(t.h3,{id:"the-story-so-far",children:[e.exports.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-story-so-far",children:e.exports.jsx(t.i,{className:"linkbtn gg-link"})}),"The story so far"]}),`
`,e.exports.jsxs(t.p,{children:[`Almost half a year ago
`,e.exports.jsx(t.a,{href:"/blog/2022-02-27T21:25_lambda_calculus_for_practical_use",children:"I wrote an article"}),` about a
programming language I was working on. In it I avoided naming the language, spoke very vaguely
about the motivations behind the project and made several logical errors in my code samples.
Since then I've been working a lot on
`,e.exports.jsx(t.a,{href:"https://github.com/lbfalvy/orchid",children:"the language now called Orchid"}),`, which I still hope to
somehow incorporate into my final year project.`]}),`
`,e.exports.jsx(t.p,{children:`Orchid is essentially Lambda calculus, with the addition of type annotations.
Polymorphism is parametric and typeclasses are somewhat similar to Rust's traits, although
they support HKTs and handle incoherence with override rules rather than the rigid orphan rules.
I don't want to go into much more detail here because the type system is still under planning,
these are essentially the design parameters.`}),`
`,e.exports.jsx(t.p,{children:"The language works with file-based namespaces not unlike Rust."}),`
`,e.exports.jsx(t.p,{children:`The key feature that makes Orchid useful and sets it apart somewhat is the macro system.
Macros consist of substitution rules with placeholders and a real numbered priority.
Macros have no clear range of effect, but they operate on namespaced tokens which means that
invoking a module is always intentional but rules from that module file are then free to
propagate the effects of that invocation all around the expression tree. This network of
effect-vines growing all over the tree and transforming it is where the language gets its name
from. The macro engine is also the only part of the language that exists at the time of writing
and is the topic of this article.`}),`
`,e.exports.jsxs(t.p,{children:[`This macro language is based on generalized kerning, a well-known Turing-complete problem.
An excellent breakdown of the proof can be seen in `,e.exports.jsx(t.a,{href:"https://youtu.be/8_npHZbe3qM",children:"this video"}),`.
The part of the proof that caught my attention was how "carriages" can be used for scanning
or traversing the token sequence. A carriage can be intuitively recognized as a distinguishing
token and possibly some payload for which a special traversal rule(set) exists that moves it
recursively in some direction. Below is a typical carriage:`]}),`
`,e.exports.jsx(n,{children:`start_collection =9=> collection_carriage(())
collection_carriage($payload) $data =10=> $data collection_carriage($payload)
collection_carriage($payload) add $item =11=> collection_carriage(($item $payload))
collection_carriage($payload) end_collection =11=> $payload`}),`
`,e.exports.jsx(t.p,{children:`This carriage goes from any start_collection token until the next end_collection, collecting
all tokens prefixed by an add command and ignoring the rest. The start and end tokens are
consumed with the end token being replaced by the carriage's payload:`}),`
`,e.exports.jsx(n,{children:`a b start_collection c d add e add f g add add h end_collection i --r1
a b collection_carriage(()) c d add e add f g add add h end_collection i --r2
a b c collection_carriage(()) d add e add f g add add h end_collection i --r2
a b c d collection_carriage(()) add e add f g add add h end_collection i --r3
a b c d collection_carriage((e ())) add f g add add h end_collection i --r3
a b c d collection_carriage((f (e ()))) g add add h end_collection i --r2
a b c d g collection_carriage((f (e ()))) add add h end_collection i --r3
a b c d g collection_carriage((add (f (e ())))) h end_collection i --r2
a b c d g h collection_carriage((add (f (e ())))) end_collection i --r4
a b c d g h (add (f (e ()))) i --no match`}),`
`,e.exports.jsx(t.p,{children:`Of course, this carriage isn't particularly useful, and defining stuff like infix operators in
this fashion would be needlessly painful, so Orchid also comes with vectorial (as opposed to
scalar) placeholders. Two variants are available:`}),`
`,e.exports.jsx(n,{children:`...$data:2 -- matches 1..n tokens
..$data:2 -- matches 0..n tokens`}),`
`,e.exports.jsxs(t.p,{children:["The 2 in these placeholders is their ",e.exports.jsx(t.em,{children:"growth priority"}),`. This has nothing to do with the rules'
priority, and it's an integer value. In essence, if there are multiple ways for a pattern to
match a given sequence, the one where the vectorial placeholder with the greatest priority
matches the longest subsequence will be replaced first. In case of a tie the second
placeholder in priority is considered and so forth. These growth priorities are only relevant
within a token sequence, vectorials inside braces are always prioritized lower than vectorials
outside them. The default priority is the minimum, 0.`]}),`
`,e.exports.jsx(t.p,{children:"With this knowledge, infix operators may be defined like so:"}),`
`,e.exports.jsx(n,{children:`...$lhs:1 + ...$rhs =50=> add (...$lhs) (...$rhs)
...$lhs:1 * ...$rhs =45=> mul (...$lhs) (...$rhs)
...$arg -> ...$ret:1 =55=> fn (...$arg) (...$ret)
-- Haskell's function-notation is right-associative`}),`
`,e.exports.jsx(t.p,{children:`Notice that multiplication has lower priority than addition, because both operators are eager.
We could've also defined them both using scalar placeholders and their normal priority order, but
that way to add something to the result of a function call we would have had to parenthesize
the call. In practice, we would like for function calls to have the highest perceived priority, so
operators are located in reverse order and assumed to apply to the entire preceding and following
section of the expression.`}),`
`,e.exports.jsx(t.p,{children:`To demonstrate the utility of this system, here's a set of rules to transform a  classic array
expression in square brackets into a conslist:`}),`
`,e.exports.jsx(n,{children:`-------- In main --------
main := [foo, bar, baz, quz]

-------- In prelude --------
[...$data] =1001=> (cons_start ...$data cons_carriage(none)) -- Entry point
[] =1001=> none -- Shortcut
...$rest:2 , ...$item:1 cons_carriage($tail) =10_002=> ...$rest cons_carriage(
    (some (cons (...$item) $tail))
) -- Carriage step
cons_start ...$rest cons_carriage($tail) =10_001=> some (cons (...$rest) $tail) -- Cleanup`}),`
`,e.exports.jsx(t.p,{children:`I was going to include the ruleset for a match expression in this article too, but I realized
that the specifics of how control may flow and types may be annotated across match arms depends
heavily on the type system because ultimately the handlers need to be converted to
N-ary lambda functions (N being the number of distinct placeholders) and the type checker
needs to be able to statically assert from the match expression that N arguments will in fact
be provided.`}),`
`,e.exports.jsxs(t.p,{children:[`I also wrote a small demo using the example of monads to demonstrate how lambda expressions are
embedded in templates. For the purposes of this demo, `,e.exports.jsx(a,{c:"@T."}),` indicates a generic over
`,e.exports.jsx(a,{c:"T"}),", and ",e.exports.jsx(a,{c:"@:T U V."}),` indicates a generic constraint for the existence of
the relation or trait `,e.exports.jsx(a,{c:"T"})," for parameters ",e.exports.jsx(a,{c:"U"})," and ",e.exports.jsx(a,{c:"V"}),`.
For a rough explanation of how these work consult
`,e.exports.jsx(t.a,{href:"https://github.com/lbfalvy/orchid#auto-parameters-generics-polymorphism",children:"the project readme"}),`.
Minor differences in semantics are to be expected, the type system is still in early development.`]}),`
`,e.exports.jsx(n,{children:`-------- In main --------
import std::io::(readln, print)
import std::string::f

export main := (
    print "Username: ";
    username = readln;
    print(f"Password for {}:" username);
    -- auth code...
)

-------- In prelude --------
--[ Functions defined:
    export bind: @M. @:Monad M. @T. @U. (T -> M U) -> M T -> M U
    export wrap: @M. @:Monad M. @T. T -> M T
    export inject: @M. @:Monad M. @T. @U. M U -> M T -> M U
]--
-- Monads that wrap a value support procedural-like assignment syntax
$_name = ...$first ; ...$second =2002=> bind ($_name. ...$second) (...$first)
-- Monads of any sort can be chained
...$first ; ...$second =2001=> inject (...$second) (...$first)
-- Plus the above conslist example
export ::(=, ;)

-------- In std::string --------
--[ Functions defined:
    export format: String -> Cons String -> String
    export to_string: @T. @:ToString T. T -> String
]--
import std::static::static_map
-- Transform variadic arguments to conslist of strings
export ..$prefix:1 f $template ..$values =501=> ..$prefix format $template static_map to_string [..$values]

-------- In std::static --------
-- Recursively prefix every element of a statically known conslist with a function
static_map $fn (some (cons $item $tail)) =801=> (some (cons ($fn $item) static_map $fn $tail))
static_map $fn none =801=> none
export ::(static_map)`}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(a,{c:"static_map"})," as used by the ",e.exports.jsx(a,{c:"f"}),` shorthand is also a fine example of a
carriage, and of a helper rule being invoked by another rule without the programmer's knowledge
to automate some subtask. Rules can form ecosystems like this, providing hooks or delegating work.`]}),`
`,e.exports.jsxs(t.p,{children:[`An important property of this system is that compile-time structures can leak into runtime code.
This is very useful in general because it enables a lot of powerful patterns for optimizing
runtime, value-universe code depending on calling context, but in some cases it can cause
problems on the boundary that are difficult to trace, for example, if `,e.exports.jsx(a,{c:"static_map"}),`
is called on a runtime conslist it will be left in the source even though it doesn't (and
depending on the capabilities of the type system possibly can't) have a runtime definition. For
this reason, elaborate macro-debugging tools will eventually be necessary.`]})]})}}export{d as default};
