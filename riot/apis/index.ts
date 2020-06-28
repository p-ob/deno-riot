import { SummonerApi } from "./summoner.ts";
import { MatchApi } from "./match.ts";

export class RiotApi {
	matches: MatchApi;
	summoners: SummonerApi;

	constructor() {
		this.matches = new MatchApi();
		this.summoners = new SummonerApi();
	}
}


