import { ApiBase } from "./base.ts";
import { Summoner } from "../models/summoner.ts";
import { RiotAPIError } from "../api-error.ts";

export class SummonerApi extends ApiBase {
	private static _instance?: SummonerApi;
	private _basePath: string;

	constructor() {
		super();

		this._basePath = "/lol/summoner/v4/summoners/"
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	async getSummonerByName(name: string): Promise<Summoner> {
		const p = `${this._basePath}by-name/${name}`;
		const response = await this._client.get(p);
		if (response.ok) {
			const result = await response.json();
			return Summoner.fromJSON(result);
		} else {
			throw new RiotAPIError("Error encountered trying to retrieve summoner.", response);
		}
	}
}
