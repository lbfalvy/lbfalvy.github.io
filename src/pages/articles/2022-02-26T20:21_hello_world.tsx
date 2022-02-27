
import { Temporal } from "@js-temporal/polyfill";
import { Metadata } from "../Blog";

export default {
    url: '2022-02-26T20:21_hello_world',
    title: "Hello World!",
    time: Temporal.ZonedDateTime.from("2022-02-26T20:21Z[UTC]"),
    summary: `
        How I wrote a backend-free blog using React
    `,
    load: () => import("./2022-02-26T20:21_hello_world.mdx")
} as Metadata
