import "./env.ts";
import { StaticApiBase } from "../../src/riot/static/base.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";

class TestStaticApi extends StaticApiBase {
  async get(jsonFileName: string) {
    return await super.get(jsonFileName);
  }
}

const api = new TestStaticApi();

Deno.test("loadsFromNetwork", async () => {
  const body = {
    test: 1
  };

  const ogFetch = globalThis.fetch;
	globalThis.fetch = (_input: string | Request | URL, _init?: RequestInit) => {
    const bodyStr = JSON.stringify(body);
		return Promise.resolve(new Response(bodyStr, {
      status: 200,
      statusText: "Success"
    }));
  }

  const result = await api.get("network.json");
  assert(result !== undefined);
  assert(result !== null);
  assert((result as any).test === body.test);
  globalThis.fetch = ogFetch;
});

Deno.test("loadsFromNetworkThenCache", async () => {
  const path = "networkthencache.json";
  let tries = 0;
  const body = {
    test: 1
  };

  const ogFetch = globalThis.fetch;
	globalThis.fetch = (_input: string | Request | URL, _init?: RequestInit) => {
    if (tries === 0) {
      tries++;
      const bodyStr = JSON.stringify(body);
      return Promise.resolve(new Response(bodyStr, {
        status: 200,
        statusText: "Success"
      }));
    } else {
      tries++;
      return Promise.resolve(new Response(null, {
        status: 418,
        statusText: "Expected to resolve from cache."
      }));
    }
  }

  await api.get(path);
  const result = await api.get(path);
  assert(result !== undefined);
  assert(result !== null);
  assert((result as any).test === body.test);
  globalThis.fetch = ogFetch;
});
