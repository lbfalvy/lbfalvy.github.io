import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
    url: "2022-12-02T17:36_orchids_type_system",
    title: "Orchid's type system: cross-universe recursion",
    author: `lbfalvy`,
    tags: [],
    time: Temporal.ZonedDateTime.from("2022-12-02T17:36Z[UTC]"),
    image: '',
    summary: `
        An early progress report on my plans for Orchid's type system
    `,
    unlisted: true,
    load: () => import("./2022-12-02T17:36_orchids_type_system.mdx")
} as Metadata
