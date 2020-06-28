import { MatchApi, SummonerApi } from "./apis/index.ts";
import { QueueApi, SeasonApi, GameModeApi, GameTypeApi, MapApi } from "./static/index.ts";

export class RiotApi {
	matches: MatchApi;
	summoners: SummonerApi;
	queues: QueueApi;
	seasons: SeasonApi;
	maps: MapApi;
	gameModes: GameModeApi;
	gameTypes: GameTypeApi;

	constructor() {
		this.matches = new MatchApi();
		this.summoners = new SummonerApi();
		this.queues = new QueueApi();
		this.seasons = new SeasonApi();
		this.maps = new MapApi();
		this.gameModes = new GameModeApi();
		this.gameTypes = new GameTypeApi();
	}
}
