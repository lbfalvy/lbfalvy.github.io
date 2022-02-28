import { Temporal } from "@js-temporal/polyfill";

function lt(one: Temporal.Duration, other: Temporal.DurationLike): boolean {
    return Temporal.Duration.compare(one, other) < 0
}

export default function printTime(time: Temporal.ZonedDateTime): string {
    const delta = time.until(Temporal.Now.zonedDateTimeISO())
    if (lt(delta, { minutes: 1 })) return 'now'
    if (lt(delta, { hours: 1 })) return `${delta.minutes} minutes ago`
    if (lt(delta, { days: 1 })) return `${delta.hours} hours ago`
    if (lt(delta, { days: 7 })) return `${delta.round({ smallestUnit: 'days' }).days} days ago`
    return `${time.toPlainDate().toString()} ${time.toPlainTime().toString({ smallestUnit: 'minutes' })}`
}