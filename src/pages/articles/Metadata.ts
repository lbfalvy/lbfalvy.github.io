import { Temporal } from "@js-temporal/polyfill";

export default interface Metadata {
	url: string
	title: string
	summary: string
	image: string
	time: Temporal.ZonedDateTime
	unlisted: boolean
	author: string
	tags: string[]
	load: () => Promise<{ default: React.ComponentType }>
}