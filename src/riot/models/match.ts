export class Match implements IMatch {
	gameId: number;
	queueId: number;
	gameType: string;
	gameDuration: number;
	platformId: string;
	gameCreation: number;
	seasonId: number;
	gameVersion: string;
	mapId: number;
	gameMode: string;
	participants: any[];
	participantIdentities: any[]
	teams: any[];

	constructor(src: IMatch) {
		this.gameId = src.gameId;
		this.queueId = src.queueId;
		this.gameType = src.gameType;
		this.gameDuration = src.gameDuration;
		this.platformId = src.platformId;
		this.gameCreation = src.gameCreation;
		this.seasonId = src.seasonId;
		this.gameVersion = src.gameVersion;
		this.mapId = src.mapId;
		this.gameMode = src.gameMode;
		this.participants = src.participants;
		this.participantIdentities = src.participantIdentities;
		this.teams = src.teams;
	}
}

interface IMatch {
	gameId: number;
	queueId: number;
	gameType: string;
	gameDuration: number;
	platformId: string;
	gameCreation: number;
	seasonId: number;
	gameVersion: string;
	mapId: number;
	gameMode: string;
	participants: any[];
	participantIdentities: any[]
	teams: any[];
}
