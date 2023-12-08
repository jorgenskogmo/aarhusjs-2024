import { proxy } from "valtio/vanilla";
import { GeckoPorts } from "./examples/ble/BLEConnection";

type GeckoPortType = keyof typeof GeckoPorts;

interface Store {
  connected: boolean;
  values: Record<GeckoPortType, any> | [];
}

export const store = proxy<Store>({
  connected: false,
  values: [],
});
