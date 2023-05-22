import{j as e}from"./jsx-runtime-24dda297.js";import{L as n,H as a}from"./LambdaHighlight-8cde56a0.js";import"./index-2a8bec30.js";function o(r){const t=Object.assign({h3:"h3",a:"a",i:"i",p:"p",em:"em"},r.components);return e.jsxs(e.Fragment,{children:[e.jsxs(t.h3,{id:"the-story-so-far",children:[e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-story-so-far",children:e.jsx(t.i,{className:"linkbtn gg-link"})}),"The story so far"]}),`
`,e.jsxs(t.p,{children:["Almost nine months ago ",e.jsx(t.a,{href:"/blog/2022-02-27T21:25_lambda_calculus_for_practical_use",children:"I wrote an article"})," about a programming language I was working on. In it I avoided naming the language, spoke very vaguely about the motivations behind the project and made several logical errors in my code samples. Since then I've been working a lot on ",e.jsx(t.a,{href:"https://github.com/lbfalvy/orchid",children:"the language now called Orchid"}),". My final year project will be the type system, and I will complete the other parts later."]}),`
`,e.jsx(t.p,{children:"Orchid is essentially Lambda calculus, with the addition of type annotations. Polymorphism is parametric and typeclasses are somewhat similar to Rust's traits, although they support HKTs and handle incoherence with flexible overrides rather than the rigid orphan rules. I don't want to go into much more detail here because the type system is still under planning, these are essentially the design parameters."}),`
`,e.jsx(t.p,{children:"The language works with file-based namespaces not unlike Rust."}),`
`,e.jsx(t.p,{children:"The key feature that makes Orchid useful and sets it apart somewhat is the macro system. Macros consist of substitution rules with placeholders and a real numbered priority. Macros have no clear range of effect, but they operate on namespaced tokens which means that invoking a module is always intentional but rules from that module file are then free to propagate the effects of that invocation all around the expression tree. This network of effect-vines growing all over the tree and transforming it is where the language gets its name from. The macro engine is also the only part of the language that is fully completed at the time of writing and is the topic of this article."}),`
`,e.jsxs(t.p,{children:["This macro language is based on generalized kerning, a well-known Turing-complete problem. An excellent breakdown of the proof can be seen in ",e.jsx(t.a,{href:"https://youtu.be/8_npHZbe3qM",children:"this video"}),'. The part of the proof that caught my attention was how "carriages" can be used for scanning or traversing the token sequence. A carriage can be intuitively recognized as a distinguishing token and possibly some payload for which a special traversal rule(set) exists that moves it recursively in some direction. Below is a typical carriage:']}),`
`,e.jsx(n,{children:`start_collection =9=> collection_carriage(())
collection_carriage($payload) $data =10=> $data collection_carriage($payload)
collection_carriage($payload) add $item =11=> collection_carriage(($item $payload))
collection_carriage($payload) end_collection =11=> $payload`}),`
`,e.jsx(t.p,{children:"This carriage goes from any start_collection token until the next end_collection, collecting all tokens prefixed by an add command and ignoring the rest. The start and end tokens are consumed with the end token being replaced by the carriage's payload:"}),`
`,e.jsx(n,{children:`a b start_collection c d add e add f g add add h end_collection i --r1
a b collection_carriage(()) c d add e add f g add add h end_collection i --r2
a b c collection_carriage(()) d add e add f g add add h end_collection i --r2
a b c d collection_carriage(()) add e add f g add add h end_collection i --r3
a b c d collection_carriage((e ())) add f g add add h end_collection i --r3
a b c d collection_carriage((f (e ()))) g add add h end_collection i --r2
a b c d g collection_carriage((f (e ()))) add add h end_collection i --r3
a b c d g collection_carriage((add (f (e ())))) h end_collection i --r2
a b c d g h collection_carriage((add (f (e ())))) end_collection i --r4
a b c d g h (add (f (e ()))) i --no match`}),`
`,e.jsx(t.p,{children:"Of course, this carriage isn't particularly useful, and defining stuff like infix operators in this fashion would be needlessly painful, so Orchid also comes with vectorial (as opposed to scalar) placeholders. Two variants are available:"}),`
`,e.jsx(n,{children:`...$data:2 -- matches 1..n tokens
..$data:2 -- matches 0..n tokens`}),`
`,e.jsxs(t.p,{children:["The 2 in these placeholders is their ",e.jsx(t.em,{children:"growth priority"}),". This has nothing to do with the rules' priority, and it's an integer value. In essence, if there are multiple ways for a pattern to match a given sequence, the one where the vectorial placeholder with the greatest priority matches the longest subsequence will be replaced first. In case of a tie the second placeholder in priority is considered and so forth. These growth priorities are only relevant within a token sequence, vectorials inside braces are always prioritized lower than vectorials outside them. The default priority is the minimum, 0."]}),`
`,e.jsx(t.p,{children:"With this knowledge, infix operators may be defined like so:"}),`
`,e.jsx(n,{children:`...$lhs:1 + ...$rhs =50=> add (...$lhs) (...$rhs)
...$lhs:1 * ...$rhs =45=> mul (...$lhs) (...$rhs)
...$arg -> ...$ret:1 =55=> fn (...$arg) (...$ret)
-- Haskell's function-notation is right-associative`}),`
`,e.jsx(t.p,{children:"Notice that multiplication has lower priority than addition, because both operators are eager. We could've also defined them both using scalar placeholders and their normal priority order, but that way to add something to the result of a function call we would have had to parenthesize the call. In practice, we would like for function calls to have the highest perceived priority, so operators are located in reverse order and assumed to apply to the entire preceding and following section of the expression."}),`
`,e.jsx(t.p,{children:"To demonstrate the utility of this system, here's a set of rules to transform a  classic array expression in square brackets into a conslist:"}),`
`,e.jsx(n,{children:`-------- In main --------
main := [foo, bar, baz, quz]

-------- In prelude --------
[...$item , ...$rest:1] =2=> (some (pair (...$item) [...$rest]))
[...$only] =1=> (some (pair (...$only) []))
[] =1=> none`}),`
`,e.jsx(t.p,{children:"I was going to include the ruleset for a match expression in this article too, but I realized that the specifics of how control may flow and types may be annotated across match arms depends heavily on the type system because ultimately the handlers need to be converted to N-ary lambda functions (N being the number of distinct placeholders) and the type checker needs to be able to statically assert from the match expression that N arguments will in fact be provided."}),`
`,e.jsxs(t.p,{children:["I also wrote a small demo using the example of monads to demonstrate how lambda expressions are embedded in templates. For the purposes of this demo, ",e.jsx(a,{c:"@T."})," indicates a generic over ",e.jsx(a,{c:"T"}),", and ",e.jsx(a,{c:"@:T U V."})," indicates a generic constraint for the existence of the relation or trait ",e.jsx(a,{c:"T"})," for parameters ",e.jsx(a,{c:"U"})," and ",e.jsx(a,{c:"V"}),". For a rough explanation of how these work consult ",e.jsx(t.a,{href:"https://github.com/lbfalvy/orchid#auto-parameters-generics-polymorphism",children:"the project readme"}),". Minor differences in semantics are to be expected, the type system is still in early development."]}),`
`,e.jsx(n,{children:`-------- In main --------
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
    export put: @M. @:Monad M. @T. @U. M U -> M T -> M U
]--
-- Monads that wrap a value support procedural-like assignment syntax
$_name = ...$first ; ...$second =2002=> bind ($_name. ...$second) (...$first)
-- Monads of any sort can be chained
...$first ; ...$second =2001=> put (...$second) (...$first)
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
`,e.jsxs(t.p,{children:[e.jsx(a,{c:"static_map"})," as used by the ",e.jsx(a,{c:"f"})," shorthand is also a fine example of a carriage, and of a helper rule being invoked by another rule without the programmer's knowledge to automate some subtask. Rules can form ecosystems like this, providing hooks or delegating work."]}),`
`,e.jsxs(t.p,{children:["An ant property of this system is that compile-time structures can leak into runtime code. This is very useful in general because it enables a lot of powerful patterns for optimizing runtime, value-universe code depending on calling context, but in some cases it can cause problems on the boundary that are difficult to trace, for example, if ",e.jsx(a,{c:"static_map"})," is called on a runtime conslist it will be left in the source even though it doesn't (and depending on the capabilities of the type system possibly can't) have a runtime definition. This problem can be solved with very low priority error reporting rules. The following is just an example:"]}),`
`,e.jsx(n,{children:`-------- In std::macro_error --------
-- the first argument contains internal state, the second arguments
-- construct as "count_tokens () (..$some_sequence)"
count_tokens (..$increments) ($next ..$rest) =11_000=> count_tokens (..$increments + 1) (..$rest)
count_tokens (..$incrememnts) () =11_000=> (0 ..$increments)
-- traverse a layer up while recording position
(..$left macro_error ($path) $payload ..$right) =10_000=> macro_error (
    (count_tokens () (..$left)) $path
) $payload
-- translate any type of brackets into parentheses
[..$left macro_error ..$right] =10_000=> (..$left macro_error ..$right)
{..$left macro_error ..$right} =10_000=> (..$left macro_error ..$right)

export ::(macro_error)

-------- Addition to std::static --------
import std::macro_error::macro_error

static_map =-100=> macro_error () "Argument should be a conslist"`}),`
`,e.jsx(t.p,{children:"Now when static_map is accidentally left in the code after all other macros had been executed, it will be converted to an error which will then bubble up to the AST root. Debugging tools can recognize these and produce a human-readable error trace."})]})}function c(r={}){const{wrapper:t}=r.components||{};return t?e.jsx(t,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{c as default};
