
import { Temporal } from "@js-temporal/polyfill";
import { Metadata } from "../Blog";

export default {
    url: "2022-02-27T21:25_lambda_calculus_for_practical_use",
    title: "Lambda Calculus for Practical Use",
    time: Temporal.ZonedDateTime.from("2022-02-27T21:25Z[UTC]"),
    summary: `
        Designing a functional programming language
    `,
    load: () => import("./2022-02-27T21:25_lambda_calculus_for_practical_use.mdx")
} as Metadata
