export class GameMode implements IGameMode {
	gameMode: string;
	description: string;

	constructor(src: IGameMode) {
		this.gameMode = src.gameMode;
		this.description = src.description;
	}
}

export interface IGameMode {
	gameMode: string;
	description: string;
}
