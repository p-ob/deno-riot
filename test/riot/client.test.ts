import { RiotClient, riotTokenHeader } from "../../src/riot/apis/client.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";
import { config } from "../../src/riot/config.ts";

Deno.test("getHeaders", async () => {
	let headers: Headers | undefined = undefined;
	const ogFetch = globalThis.fetch;
	globalThis.fetch = (input: string | Request | URL, init?: RequestInit) => {
		headers = new Headers(init?.headers);
		return Promise.resolve(new Response());
	}

	const response = await RiotClient.get("test");

	assert(headers !== undefined);
	assert(headers!.get(riotTokenHeader) === config.API_KEY);

	globalThis.fetch = ogFetch;
});
