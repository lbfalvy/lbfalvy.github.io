import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
	url: "2023-12-18T17:36_a_clever_trait_pattern",
	title: "Multiple First-party Blanket Implementations",
	author: `lbfalvy`,
	tags: ["programming", "rust"],
	time: Temporal.ZonedDateTime.from("2023-12-19T17:20Z[UTC]"),
	image: '',
	summary: `
		Breakdown of an interesting technique that gave me a new perspective on Rust traits
	`,
	unlisted: false,
	load: () => import("./2023-12-18T17:36_a_clever_trait_pattern.mdx")
} as Metadata
