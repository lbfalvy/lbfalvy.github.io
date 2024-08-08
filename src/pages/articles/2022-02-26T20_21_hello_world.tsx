
import { Temporal } from "@js-temporal/polyfill";
import Metadata from "./Metadata";

export default {
	url: '2022-02-26T20:21_hello_world',
	title: "Hello World!",
	author: 'lbfalvy',
	tags: ['programming', 'web development', 'project', 'blog'],
	time: Temporal.ZonedDateTime.from("2022-02-26T20:21Z[UTC]"),
	image: 'https://www.fox46.com/wp-content/uploads/sites/109/2018/04/92a7b31a-FD_409A20Space20Shuttle20Anniversary20RECT0_1523400530953.jpg_5314903_ver1.0.jpg?w=1280&h=720&crop=1',
	summary: `
		How I wrote a backend-free blog using React
	`,
	unlisted: false,
	load: () => import("./2022-02-26T20:21_hello_world.mdx")
} as Metadata
