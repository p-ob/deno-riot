import { ApiBase } from "./base.ts";
import { Match } from "../models/match.ts";
import { MatchList } from "../models/match-list.ts";
import { RiotAPIError } from "../api-error.ts";

export class MatchApi extends ApiBase {
	private static _instance?: MatchApi;
	#basePath: string;

	constructor() {
		super();

		this.#basePath = "/lol/match/v4"
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	async getMatch(id: number): Promise<Match> {
		const p = `${this.#basePath}/matches/${id}`;
		const response = await this.get(p);
		if (response.ok) {
			const result = await response.json();
			return new Match(result);
		} else {
			throw new RiotAPIError("Error encountered trying to retrieve match.", response);
		}
	}

	async getMatchListByAccount(accountId: string, params?: IMatchListQueryParams): Promise<MatchList> {
		const p = `${this.#basePath}/matchlists/by-account/${accountId}`;
		const response = await this.get(p, params);
		if (response.ok) {
			const result = await response.json();
			return new MatchList(result);
		} else {
			throw new RiotAPIError("Error encountered trying to retrieve match.", response);
		}
	}
}

interface IMatchListQueryParams {
	champion?: number[];
	queue?: number[];
	season?: number[];
	endTime?: number;
	beginTime?: number;
	endIndex?: number;
	beginIndex?: number;
}
