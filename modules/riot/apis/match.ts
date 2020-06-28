import { ApiBase } from "./base.ts";
import { Match } from "../models/match.ts";
import { MatchList } from "../models/match-list.ts";
import { RiotAPIError } from "../api-error.ts";

/**
 * Collection of apis to interact with the "match" resource
 * @link https://developer.riotgames.com/apis#match-v4
 */
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

  /**
   * Get a match by its id.
   * @link https://developer.riotgames.com/apis#match-v4/GET_getMatch
   * @param id The unique id for a given match
   */
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

  /**
   * Get the matchlist for an accountId.
   * @link https://developer.riotgames.com/apis#match-v4/GET_getMatchlist
   * @param accountId The unique id of an account (aka "summoner")
   * @param params Optional parameters for scoping this request
   */
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
  /**
   * Set of champion IDs for filtering the matchlist.
   */
  champion?: number[];
  /**
   * Set of queue IDs for filtering the matchlist.
   */
  queue?: number[];
  /**
   * Set of season IDs for filtering the matchlist.
   */
  season?: number[];
  /**
   * The end time to use for filtering matchlist specified as epoch milliseconds. If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case). If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation. If both are specified, then endTime should be greater than beginTime. The maximum time range allowed is one week, otherwise a 400 error code is returned.
   */
  endTime?: number;
  /**
   * The begin time to use for filtering matchlist specified as epoch milliseconds. If beginTime is specified, but not endTime, then endTime defaults to the the current unix timestamp in milliseconds (the maximum time range limitation is not observed in this specific case). If endTime is specified, but not beginTime, then beginTime defaults to the start of the account's match history returning a 400 due to the maximum time range limitation. If both are specified, then endTime should be greater than beginTime. The maximum time range allowed is one week, otherwise a 400 error code is returned.
   */
  beginTime?: number;
  /**
   * The end index to use for filtering matchlist. If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100. If endIndex is specified, but not beginIndex, then beginIndex defaults to 0. If both are specified, then endIndex must be greater than beginIndex. The maximum range allowed is 100, otherwise a 400 error code is returned.
   */
  endIndex?: number;
  /**
   * The begin index to use for filtering matchlist. If beginIndex is specified, but not endIndex, then endIndex defaults to beginIndex+100. If endIndex is specified, but not beginIndex, then beginIndex defaults to 0. If both are specified, then endIndex must be greater than beginIndex. The maximum range allowed is 100, otherwise a 400 error code is returned.
   */
	beginIndex?: number;
}
