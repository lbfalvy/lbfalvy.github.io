import{j as e}from"./jsx-runtime-PBIfeoir.js";import"./index-L6re6fKW.js";function a(t){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",i:"i",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["I recently saw a clever techinque ",e.jsx(s.a,{href:"https://users.rust-lang.org/t/two-blanket-implementations-for-different-classes-of-objects/100173/3",children:"on the Rust forum"})," which reshaped my understanding of traits. It took me a while to fully understand why this technique works and I found the conclusion very satisfying, so I'll break it down in this article."]}),`
`,e.jsx(s.p,{children:"Let's suppose that we have the following structure. This is a contrived example vaguely inspired by Minecraft, but the general situation is fairly common."}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Entity"}),` {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Block"}),` {}

`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Player"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Entity"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Player"}),` {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Enemy"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Entity"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Enemy"}),` {}

`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Stone"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Block"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Stone"}),` {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Ore"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Block"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Ore"}),` {}

`,e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTarget"}),` {}
`]})}),`
`,e.jsxs(s.p,{children:["Now let's suppose that we want to implement ",e.jsx(s.code,{children:"HitTarget"})," for all blocks and entities."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTarget ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Block {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTarget ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Entity {}
`]})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"hljs language-error",children:"error[E0119]: conflicting implementations of trait `HitTarget'\n"})}),`
`,e.jsxs(s.p,{children:["The above code doesn't compile, because there could be a type which implements both ",e.jsx(s.code,{children:"Block"})," and ",e.jsx(s.code,{children:"Entity"}),". In general, we can't make negative statements (statements about the absence of an implementation) about traits so in order to prove that a trait's implementations never overlap, only one blanket implementation is ever permitted. So how do we proceed?"]}),`
`,e.jsxs(s.h1,{id:"sets-of-traits",children:[e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sets-of-traits",children:e.jsx(s.i,{className:"linkbtn gg-link"})}),"Sets of traits"]}),`
`,e.jsxs(s.p,{children:["A generic trait or a generic type is an infinite set of traits or types that share some properties and so you can reason about the whole set, or subsets of it, with your logic applying to elements you don't (can't) know about. I used  to think about the generic itself as the trait or type, this was one of my major misconceptions. Think of ",e.jsx(s.code,{children:"Index<T>"}),", which can invoke entirely different (though logically related) behaviour on the same containers as ",e.jsx(s.code,{children:"Index<usize>"})," and ",e.jsx(s.code,{children:"Index<Range<usize>>"}),"."]}),`
`,e.jsx(s.p,{children:"With this in mind, an impl is actually an infinite set of associations, each between a trait and a type. We already covered blanket implementations, but consider the following impl, which actually appears in the source code of Orchid:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T: ?",e.jsx(s.span,{className:"hljs-built_in",children:"Sized"}),"> Index<T> ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"VPath"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"})," ",e.jsx(s.span,{className:"hljs-type",children:"Vec"}),"<Tok<",e.jsx(s.span,{className:"hljs-type",children:"String"}),`>>: Index<T> {  }
`]})}),`
`,e.jsxs(s.p,{children:["This asserts, in common English, that ",e.jsx(s.code,{children:"VPath"})," can be indexed by anything ",e.jsx(s.code,{children:"Vec<Tok<String>>"})," can be indexed by. Because the set of possible values of ",e.jsx(s.code,{children:"T"})," is open the only thing this implementation can do with its argument is index a vector, but in this case ",e.jsx(s.code,{children:"VPath"})," is a thin wrapper around a vector with some convenience features so this works out just fine."]}),`
`,e.jsxs(s.p,{children:["With this in mind, we can try to implement ",e.jsx(s.code,{children:"HitTarget"})," by using a generic trait to be able to talk about both all of something and one of it:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTargetHelper"}),`<T> {}

`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"BlockHitHelper"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"EntityHitHelper"}),`;

`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTargetHelper<BlockHitHelper> ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Block {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTargetHelper<EntityHelper> ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Entity {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T, U> HitTarget ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: HitTargetHelper<U> {}
`]})}),`
`,e.jsxs(s.p,{children:["At a first glance, that's a lot of ",e.jsx(s.code,{children:"*Helper"})," types, but this can be resolved by establishing clear vocabulary for the pattern. Either way, this doesn't compile either:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"hljs language-error",children:"error[E0207]: the type parameter `U` is not constrained by the impl trait, self type, or predicates\n"})}),`
`,e.jsxs(s.p,{children:["The problem with type parameters that don't appear in the trait or type is that this isn't actually a single implementation for each combination of traits and type. We want to use functionality within ",e.jsx(s.code,{children:"HitTargetHelper<U>"})," to implement ",e.jsx(s.code,{children:"HitTarget"}),", and when we look at the potential implementations to choose from we bump into the original problem; a type could implement both ",e.jsx(s.code,{children:"HitTargetHelper<BlockHitHelper>"})," and ",e.jsx(s.code,{children:"HitTargetHelper<EntityHitHelper>"}),"."]}),`
`,e.jsxs(s.p,{children:["We might try to replace ",e.jsx(s.code,{children:"U"})," with ",e.jsx(s.code,{children:"T"}),", but then the first two impls become identical again. We need a way to make the value of ",e.jsx(s.code,{children:"U"})," uniquely dependent on ",e.jsx(s.code,{children:"T"})," to fix the abovementioned error, and we need to be able to explicitly state mutually exclusive values of ",e.jsx(s.code,{children:"U"})," for ",e.jsx(s.code,{children:"Block"})," and ",e.jsx(s.code,{children:"Entity"})," implementors."]}),`
`,e.jsxs(s.h1,{id:"unique-types",children:[e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unique-types",children:e.jsx(s.i,{className:"linkbtn gg-link"})}),"Unique types"]}),`
`,e.jsxs(s.p,{children:["Since constraints are never negative, no two trait expressions can ever be mutually exclusive. Traits are unique to the implementor and parameter values but they aren't disjoint, and types are always disjoint but the implementors and parameters of a trait aren't unique. There's another kind of relation a type can have with a trait, though; associated types are disjoint from each other and unique to the implementation, which is in turn unique to the combination of trait and implementor. Let's define a trait that ",e.jsx(s.em,{children:"uniquely selects one of"})," the implementations of ",e.jsx(s.code,{children:"HitTarget"})," by way of an associated type;"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-comment",children:"// General boilerplate"}),`
`,e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTargetImpl"}),`<T> {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTarget ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: HitTargetPick + HitTargetImpl<T::Key> {}
`,e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTargetPick"}),` {
  `,e.jsx(s.span,{className:"hljs-keyword",children:"type"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Key"}),`;
}

`,e.jsx(s.span,{className:"hljs-comment",children:"// specific to Block"}),`
`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTargetByBlock"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTargetImpl<HitTargetByBlock> ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"}),`
`,e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Block + HitTargetPick<Key = HitTargetByBlock>
{}

`,e.jsx(s.span,{className:"hljs-comment",children:"// specific to Entity"}),`
`,e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTargetByEntity"}),`;
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTargetImpl<HitTargetByEntity> ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"T"}),`
`,e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Entity + HitTargetPick<Key = HitTargetByEntity>
{}
`]})}),`
`,e.jsxs(s.p,{children:["This way the two ",e.jsx(s.code,{children:"HitTargetImpl"})," implementations are mutually exclusive and the ",e.jsx(s.code,{children:"HitTarget"})," implementation selects one unambiguously."]}),`
`,e.jsxs(s.p,{children:["With this in place, any ",e.jsx(s.code,{children:"Block"})," or ",e.jsx(s.code,{children:"Entity"})," can become a ",e.jsx(s.code,{children:"HitTarget"})," without reimplementing any of the logic by just selecting the correct Key for the implementation:"]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"impl"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"HitTargetPick"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Enemy"}),` {
  `,e.jsx(s.span,{className:"hljs-keyword",children:"type"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Key"}),` = HitTargetByEntity;
}
`]})}),`
`,e.jsxs(s.p,{children:['To make more traits "proxy" ',e.jsx(s.code,{children:"HitTarget"}),", you can define new values of ",e.jsx(s.code,{children:"Key"})," and implement ",e.jsx(s.code,{children:"HitTargetImpl"})," for them. These implementations can be defined on their own or in terms of any combination of other traits. You could even define a different implementation that also proxies through ",e.jsx(s.code,{children:"Entity"}),", with a different ",e.jsx(s.code,{children:"Key"})," value. Indeed, the ",e.jsx(s.code,{children:"Entity"})," and ",e.jsx(s.code,{children:"Block"})," constraints in the ",e.jsx(s.code,{children:"HitTargetImpl"})," implementations above aren't even really part of the main mechanism."]}),`
`,e.jsxs(s.p,{children:["In Minecraft all blocks are breakable, or at least act like they are breakable even if you never actually finish breaking them. If you want to mandate that all implementors of a certain trait select the same implementation of another, you can add it as a supertrait, which allows you to simply reference ",e.jsx(s.code,{children:"Block"})," and use ",e.jsx(s.code,{children:"HitTarget"})," functionality. You can also of course add ",e.jsx(s.code,{children:"HitTarget"})," as a supertrait directly but this doesn't force a particular implementation."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"trait"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"Block"}),`: HitTargetPick<Key = HitTargetByBlock>;
`]})}),`
`,e.jsxs(s.p,{children:["Don't forget though that blanket impl limitations still apply to ",e.jsx(s.code,{children:"HitTargetPick"}),", so you can't just implement it once for all types that implement ",e.jsx(s.code,{children:"Block"}),". Each block will have to implement ",e.jsx(s.code,{children:"HitTargetPick"})," separately, you just get a handy error reminding you to do it."]}),`
`,e.jsxs(s.p,{children:["It's easy and potentially helpful to qualify valid values of ",e.jsx(s.code,{children:"HitTargetPick::Key"}),", here ",e.jsx(s.code,{children:"HitTargetByBlock"})," and ",e.jsx(s.code,{children:"HitTargetByEntity"})," with another marker trait, eg. ",e.jsx(s.code,{children:"HitTargetChoice"}),", so that if users accidentally select the wrong struct and don't immediately rely on the ",e.jsx(s.code,{children:"HitTarget"})," implementation they still get a type error."]}),`
`,e.jsxs(s.h1,{id:"when-to-use-and-avoid",children:[e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use-and-avoid",children:e.jsx(s.i,{className:"linkbtn gg-link"})}),"When to use and avoid"]}),`
`,e.jsx(s.p,{children:"Whenever programmers discover a neat gadget like this one, we have a tendency to apply it over-eagerly. Let's consider the strengths, weaknesses, and alternatives of this pattern."}),`
`,e.jsxs(s.p,{children:["As mentioned above, the set of implementations is extensible by just defining ",e.jsx(s.code,{children:"HitTargetImpl"})," for new values of ",e.jsx(s.code,{children:"Key"}),". This of course refers to an internal extension, as blanket implementations of external traits aren't allowed. Importantly, this means that when used in an external interface, this trait creates a divide between first party implementations and third party implementations which need to use a newtype. The newtype pattern iw discussed below as an alternative."]}),`
`,e.jsxs(s.p,{children:["Modifications and extensions to the trait itself don't affect the indirect implementors, so it's much more flexible with respect to the trait itself than, say, exposing the indirect implementations as functions and then having the individual blocks and entities implement ",e.jsx(s.code,{children:"HitTarget"})," using those functions."]}),`
`,e.jsxs(s.p,{children:["The most notable problem is that this selector mechanism is extremely heavy, and it isn't ",e.jsx(s.em,{children:"really"})," a blanket implementation, just a sort of shared implementation body. The individual types still need to request the implementation, even if they can be statically forced to do so. The mental overhead of such a system can be daunting in Rust code which already tends to be very concept-heavy."]}),`
`,e.jsxs(s.h2,{id:"newtype",children:[e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#newtype",children:e.jsx(s.i,{className:"linkbtn gg-link"})}),"Newtype"]}),`
`,e.jsx(s.p,{children:"The most plausible alternative I could find was to define a generic newtype:"}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-rust",children:[e.jsx(s.span,{className:"hljs-keyword",children:"struct"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"EntityHitTarget"}),"<T: Entity>(",e.jsx(s.span,{className:"hljs-keyword",children:"pub"}),` T);
`,e.jsx(s.span,{className:"hljs-keyword",children:"impl"}),"<T> HitTarget ",e.jsx(s.span,{className:"hljs-keyword",children:"for"})," ",e.jsx(s.span,{className:"hljs-title class_",children:"EntityHitTarget"}),"<T> ",e.jsx(s.span,{className:"hljs-keyword",children:"where"}),` T: Entity {}
`]})}),`
`,e.jsxs(s.p,{children:["In contrast to the above discussed pattern, this one is absolutely tiny and extremely straightforward. The main drawback is that the newtype which is synonymous to the choice of ",e.jsx(s.code,{children:"HitTarget"})," implementation is now stated every time a type is cast into ",e.jsx(s.code,{children:"HitTarget"}),". Additionally, this can't be combined with other trait bounds at all."]}),`
`,e.jsx(s.p,{children:"Where this pattern really shines therefore is if you want to implement a large trait for a large number of first party disjoint groups which together contain many objects, just like the interaction model of a game."}),`
`,e.jsxs(s.h1,{id:"terminology",children:[e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#terminology",children:e.jsx(s.i,{className:"linkbtn gg-link"})}),"Terminology"]}),`
`,e.jsx(s.p,{children:"Earlier I mentioned the need to establish vocabulary, and I tried to establish one with the final example. This isn't by any means authoritative, it's what I use for internal consistency in Orchid. To reiterate:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The trait which is generic over the choice is simply suffixed ",e.jsx(s.code,{children:"*Impl"}),". This also pairs well with another much more general trait pattern I call impl/dyn separation which relates to trait objects, I'll venture to describe it once I understand its consequences better."]}),`
`,e.jsxs(s.li,{children:["The trait with a single associated type is suffixed ",e.jsx(s.code,{children:"*Pick"})," and the associated type is ",e.jsx(s.code,{children:"Key"}),". These are chosen to be as short as possible because the whole trait often appears on one line."]}),`
`,e.jsxs(s.li,{children:["The optional marker trait for valid values of ",e.jsx(s.code,{children:"Key"})," is suffixed ",e.jsx(s.code,{children:"Choice"})]}),`
`,e.jsx(s.li,{children:"The pattern itself is called Multiple First-party Blanket Implementations, or MFBI. It sounds nowhere near as nice as CRTP, but unlike CRTP it actually describes what the pattern does succintly and accurately."}),`
`]})]})}function l(t={}){const{wrapper:s}=t.components||{};return s?e.jsx(s,{...t,children:e.jsx(a,{...t})}):a(t)}export{l as default};