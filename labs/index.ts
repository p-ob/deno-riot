import "https://deno.land/x/dotenv/load.ts";
import { RiotApi } from "../modules/riot/index.ts";

async function main() {
	const api = new RiotApi();
	const summoner = await api.summoners.getSummonerByName("drunk7irishman");
	const matchHistory = await api.matches.getMatchListByAccount(summoner.accountId, {
		beginIndex: 0,
		endIndex: 1,
		queue: [420]
	});

	for (const m of matchHistory.matches) {
		const match = await api.matches.getMatch(m.gameId);
		const queue = await api.queues.getQueue(match.queueId);
		const map = await api.maps.getMap(match.mapId);
		const gameType = await api.gameTypes.getGameTypeByName(match.gameType);
		const gameMode = await api.gameModes.getGameModeByName(match.gameMode);
		const season = await api.seasons.getSeason(match.seasonId);

		console.log(queue);
		console.log(map);
		console.log(gameType);
		console.log(gameMode);
		console.log(season);
	}
}

await main();
