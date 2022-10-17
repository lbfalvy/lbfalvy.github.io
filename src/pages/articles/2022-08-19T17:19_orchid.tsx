import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
    url: "2022-08-19T17:19_orchid",
    title: "Macros in Orchid",
    author: `lbfalvy`,
    tags: [],
    time: Temporal.ZonedDateTime.from("2022-08-23T17:19Z[UTC]"),
    image: '',
    summary: `
        A brief description and some demos of a preprocessor based on generalized kerning
        for my programming language.
    `,
    unlisted: true,
    load: () => import("./2022-08-19T17:19_orchid.mdx")
} as Metadata
