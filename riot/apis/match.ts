import { RiotClient } from "../client.ts";
import type { IRiotClient } from "../client.ts";

class MatchApi {
	#client: IRiotClient;
	private static _instance?: MatchApi;

	private constructor() {
		this.#client = RiotClient;
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	getMatch(id: string) {
		throw new Error();
	}
}

const api = MatchApi.instance;

export { api as MatchApi };
