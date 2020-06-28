// import { MatchApi } from "./apis/match.ts";
import { SummonerApi } from "./riot/apis/summoner.ts";

async function main() {
	const result = await SummonerApi.getSummonerByName("drunk7irishman");
}

await main();
