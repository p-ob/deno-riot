// import { MatchApi } from "./apis/match.ts";
import { RiotApi } from "../src/riot/index.ts";
import { Summoner } from "../src/riot/models/summoner.ts";

async function main() {
	const api = new RiotApi();
	const summoner = await api.summoners.getSummonerByName("drunk7irishman");
	const matchHistory = await api.matches.getMatchListByAccount(summoner.accountId, {
		beginIndex: 0,
		endIndex: 20
	});
	console.log(summoner);
	console.log(matchHistory);

	for (const m of matchHistory.matches) {
		const match = api.matches.getMatch(m.gameId);
		// console.log(match);
	}
}

await main();
