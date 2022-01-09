import React from "react";

export default function Anchor({ to: to }: { to: string }): React.ReactElement {
    return <a href={`https://${to}`}>{to}</a>
}