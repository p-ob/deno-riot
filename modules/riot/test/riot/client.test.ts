import "./env.ts";
import { RiotClient, riotTokenHeader, appRateLimitCountHeader, appRateLimitHeader } from "../../apis/client.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { config } from "../../config.ts";


Deno.test("appliesApiHeader", async () => {
	let headers: Headers | undefined = undefined;
	const ogFetch = globalThis.fetch;
	globalThis.fetch = (input: string | Request | URL, init?: RequestInit) => {
		headers = new Headers(init?.headers);
		return Promise.resolve(new Response());
	}

	const _response = await RiotClient.get("test");

	assert(headers !== undefined);
	assert(headers!.get(riotTokenHeader) === config.API_KEY, "Expected api key to be supplied to header.");

	globalThis.fetch = ogFetch;
});

Deno.test("appliesRateLimiting", async () => {
	let tries = 0;
	const ogFetch = globalThis.fetch;
	globalThis.fetch = (_input: string | Request | URL, _init?: RequestInit) => {
		const headers = new Headers();
		if (tries === 0) {
			headers.set(appRateLimitHeader, "1,1:1,1");
			headers.set(appRateLimitCountHeader, "1,1:1,1");
		}
		const response = new Response(null, {
			headers
		});
		tries++;
		return Promise.resolve(response);
	}

	const _response = await RiotClient.get("test");

	assert(tries > 1, `Expected API call to retry blocked call. Tries: ${tries}`);
	globalThis.fetch = ogFetch;
});

Deno.test("setsBasicQueryParams", async () => {
  let url: URL | undefined = undefined;
  const ogFetch = globalThis.fetch;
	globalThis.fetch = (input: string | Request | URL, init?: RequestInit) => {
    if (input instanceof Request) {
      url = new URL(input.url);
    } else {
      url = new URL(input);
    }
		return Promise.resolve(new Response());
  }

  const _response = await RiotClient.get("test", { q: "val" });

  assert(url !== undefined);
  assert(url!.searchParams !== undefined);
  assert(url!.searchParams.get("q") === "val");

  globalThis.fetch = ogFetch;
});

Deno.test("setsArrayQueryParams", async () => {
  let url: URL | undefined = undefined;
  const ogFetch = globalThis.fetch;
	globalThis.fetch = (input: string | Request | URL, init?: RequestInit) => {
    if (input instanceof Request) {
      url = new URL(input.url);
    } else {
      url = new URL(input);
    }
		return Promise.resolve(new Response());
  }

  const values = ["val1", "val2"];
  const _response = await RiotClient.get("test", { q: ["val1", "val2"] });

  assert(url !== undefined);
  assert(url!.searchParams !== undefined);

  const qs = url!.searchParams.getAll("q");
  for (const val of values) {
    assert(qs.includes(val));
  }

  globalThis.fetch = ogFetch;
});
