import { connect, disconnect } from "./examples/ble/example";
import { subscribeKey } from "valtio/utils";
import { store } from "./store";

// ui glue

const connectBtn = document.querySelector("#bleconnect")!;
const disconnectBtn = document.querySelector("#bledisconnect")!;

connectBtn.addEventListener("click", connect);
disconnectBtn.addEventListener("click", disconnect);
disconnectBtn.setAttribute("disabled", "true");

subscribeKey(store, "connected", (v) => {
  console.log("state.connected has changed to", v);
  v
    ? connectBtn.setAttribute("disabled", "true")
    : connectBtn.removeAttribute("disabled");
  v
    ? disconnectBtn.removeAttribute("disabled")
    : disconnectBtn.setAttribute("disabled", "");
});
