import { RiotClient } from "../client.ts";
import type { IRiotClient } from "../client.ts";

export class MatchApi {
	#client: IRiotClient;
	private static _instance?: MatchApi;

	constructor() {
		this.#client = RiotClient;
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	getMatch(id: string) {
		throw new Error();
	}
}
