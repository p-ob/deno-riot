// import { MatchApi } from "./apis/match.ts";
import { RiotApi } from "./riot/index.ts";

async function main() {
	const api = new RiotApi();
	const result = await api.summoners.getSummonerByName("drunk7irishman");
	console.log(result);
}

await main();
