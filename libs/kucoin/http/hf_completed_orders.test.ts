import { load } from "https://deno.land/std@0.210.0/dotenv/mod.ts";
import { Credentials } from "../kucoin_headers.ts";
import { hf_completed_orders } from "./hf_completed_orders.ts";
import { assert } from "https://deno.land/std@0.210.0/assert/assert.ts";

const credentials = await load() as Credentials;

Deno.test("Kucoin API: hf_completed_orders", async () => {
  const res = await hf_completed_orders({
    symbol: "BTC-USDT",
  }, credentials);

  if (res.data !== null) {
    assert(Array.isArray(res?.data?.items));
  }
});
