import { ApiBase } from "./base.ts";
import { Summoner } from "../models/summoner.ts";
import { RiotAPIError } from "../api-error.ts";

export class SummonerApi extends ApiBase {
	private static _instance?: SummonerApi;
	#basePath: string;

	constructor() {
		super();

		this.#basePath = "/lol/summoner/v4"
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	async getSummonerByName(name: string): Promise<Summoner> {
		const p = `${this.#basePath}/summoners/by-name/${name}`;
		const response = await this.get(p);
		if (response.ok) {
			const result = await response.json();
			return new Summoner(result);
		} else {
			throw new RiotAPIError("Error encountered trying to retrieve summoner.", response);
		}
	}
}
