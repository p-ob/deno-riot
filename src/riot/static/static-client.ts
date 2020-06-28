import { config } from "../config.ts";

class StaticRiotClient implements IStaticRiotClient {
	private static _instance?: IStaticRiotClient;
	public baseUrl: string

	private constructor() {
		this.baseUrl = config.STATIC_BASE_URL;
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	async get(path: string): Promise<Response> {
		const u = new URL(path, this.baseUrl);
		const response = await fetch(u.toString());

		return response;
	}
}

export interface IStaticRiotClient {
	baseUrl: string;
	get(path: string): Promise<Response>;
}

const client = StaticRiotClient.instance;
export { client as StaticRiotClient };
