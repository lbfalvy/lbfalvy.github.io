import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
    url: "2022-02-27T21:25_lambda_calculus_for_practical_use",
    title: "Lambda Calculus for Practical Use",
    author: 'lbfalvy',
    tags: ['programming', 'programming language development', 'project'],
    time: Temporal.ZonedDateTime.from("2022-03-07T21:25Z[UTC]"),
    image: 'https://i.ibb.co/cYXydKk/Screenshot-2022-03-08-at-16-44-15-Lambda-Calculus-for-Practical-Use.png',
    summary: `
        Designing a functional programming language
    `,
    unlisted: false,
    load: () => import("./2022-02-27T21:25_lambda_calculus_for_practical_use.mdx")
} as Metadata
