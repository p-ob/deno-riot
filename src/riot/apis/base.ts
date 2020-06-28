import { RiotClient } from "./client.ts";
import type { IRiotClient } from "./client.ts";

export abstract class ApiBase {
	protected _client: IRiotClient;

	constructor() {
		this._client = RiotClient;
	}
}
