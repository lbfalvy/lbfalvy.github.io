import React from "react";
import { SsrReady } from "../components/SsrReady";

// call this with
// ```
// const channel = new MessageChannel();
// iframe.contentWindow.postMessage({
//     command: "wasMartinRefShown",
//     replyPort: chan.port1
// }, "*", [chan.port1]);
// const wasMartinRefShownAtLorinc = await new Promise(r => channel.port2.onmessage = r);
// ```
window.addEventListener("message", ev => {
  const command: string = ev.data.command;
  const replyPort: MessagePort = ev.data.replyPort;
  if (command === "wasMartinRefShown") {
    const result = window.localStorage.getItem("martinRefShown") !== null;
    replyPort.postMessage({ result });
  } else {
    replyPort.postMessage({ error: "Unrecognized command" });
  }
})

export default function EmbedPort(): React.ReactElement {
  return <SsrReady />
}