export class MatchList implements IMatchList {
	startIndex: number;
	totalGames: number;
	endIndex: number;
	matches: MatchReference[];

	constructor(src: IMatchList) {
		this.startIndex = src.startIndex;
		this.totalGames = src.totalGames;
		this.endIndex = src.endIndex;
		this.matches = src.matches?.map(x => new MatchReference(x));
	}
}

interface IMatchList {
	startIndex: number;
	totalGames: number;
	endIndex: number;
	matches: IMatchReference[];
}

export class MatchReference implements IMatchReference {
	gameId: number;
	role: string;
	season: number;
	platformId: string;
	champion: number;
	queue: number;
	lane: string;
	timestamp: number;

	constructor(src: IMatchReference) {
		this.gameId = src.gameId;
		this.role = src.role;
		this.season = src.season;
		this.platformId = src.platformId;
		this.champion = src.champion;
		this.queue = src.queue;
		this.lane = src.lane;
		this.timestamp = src.timestamp;
	}
}

interface IMatchReference {
	gameId: number;
	role: string;
	season: number;
	platformId: string;
	champion: number;
	queue: number;
	lane: string;
	timestamp: number;
}
