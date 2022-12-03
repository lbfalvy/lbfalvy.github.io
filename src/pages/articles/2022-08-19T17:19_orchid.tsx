import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
    url: "2022-08-19T17:19_orchid",
    title: "Macros in Orchid",
    author: `lbfalvy`,
    tags: ['programming', 'langdev', 'project', 'orchid'],
    time: Temporal.ZonedDateTime.from("2022-12-04T17:19Z[UTC]"),
    image: '',
    summary: `
        A preprocessor based on generalized kerning.
    `,
    unlisted: false,
    load: () => import("./2022-08-19T17:19_orchid.mdx")
} as Metadata
