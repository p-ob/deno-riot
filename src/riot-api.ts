import { MatchApi, SummonerApi } from "./apis/index.ts";

export class RiotApi {
	matches: MatchApi;
	summoners: SummonerApi;

	constructor() {
		this.matches = new MatchApi();
		this.summoners = new SummonerApi();
	}
}
