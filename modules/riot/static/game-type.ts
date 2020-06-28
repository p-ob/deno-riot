import { StaticApiBase } from "./base.ts"
import { GameType } from "../models/game-type.ts";
import type { IGameType } from "../models/game-type.ts";

export class GameTypeApi extends StaticApiBase {
	#filename = "gameTypes.json";

	async getGameTypeByName(name: string): Promise<GameType | undefined> {
		const gameTypes = await this.getGameTypes();
		const q = gameTypes.find(x => x.gametype?.toLowerCase() === name.toLowerCase());
		return q ? new GameType(q) : undefined;
	}

	async getGameTypes(): Promise<GameType[]> {
		const gameTypes = await this.get(this.#filename);
		return (gameTypes as IGameType[]).map(x => new GameType(x));
	}
}
