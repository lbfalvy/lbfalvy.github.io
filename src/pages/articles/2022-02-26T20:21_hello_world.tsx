
import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
    url: '2022-02-26T20:21_hello_world',
    title: "Hello World!",
    author: 'lbfalvy',
    tags: ['programming', 'web development', 'project', 'blog'],
    time: Temporal.ZonedDateTime.from("2022-02-26T20:21Z[UTC]"),
    summary: `
        How I wrote a backend-free blog using React
    `,
    unlisted: false,
    load: () => import("./2022-02-26T20:21_hello_world.mdx")
} as Metadata
