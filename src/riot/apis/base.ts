import { RiotClient } from "./client.ts";
import type { IRiotClient } from "./client.ts";

export abstract class ApiBase {
	#client: IRiotClient;

	constructor() {
		this.#client = RiotClient;
	}

	protected get(path: string, params?: object) {
		return this.#client.get(path, params);
	}
}
