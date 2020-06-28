export class GameType implements IGameType {
	gametype: string; // RITO LIES
	description: string;

	constructor(src: IGameType) {
		this.gametype = src.gametype;
		this.description = src.description;
	}
}

export interface IGameType {
	gametype: string;
	description: string;
}
