import { MatchApi, SummonerApi } from "./apis/index.ts";
import { QueueApi, SeasonApi, GameModeApi, GameTypeApi, MapApi } from "./static/index.ts";

/**
 * Interface to use to communicate with all Riot APIs
 */
export class RiotApi {
  /**
 * Collection of apis to interact with the "match" resource
 * @link https://developer.riotgames.com/apis#match-v4
 */
  matches: MatchApi;
  /**
 * Collection of apis to interact with the "summoner" resource
 * @link https://developer.riotgames.com/apis#summoner-v4/
 */
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
