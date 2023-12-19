import React from "react";
import { ssrReady } from "../helpers/ssrReady";

export function SsrReady(): React.ReactElement {
  React.useEffect(ssrReady);
  return <></>;
}