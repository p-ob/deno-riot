import { StaticApiBase } from "./base.ts"
import { GameMode } from "../models/game-mode.ts";
import type { IGameMode } from "../models/game-mode.ts";

export class GameModeApi extends StaticApiBase {
	#filename = "gameModes.json";

	async getGameModeByName(name: string): Promise<GameMode | undefined> {
		const gameModes = await this.getGameModes();
		const q = gameModes.find(x => x.gameMode?.toLowerCase() === name.toLowerCase());
		return q ? new GameMode(q) : undefined;
	}

	async getGameModes(): Promise<GameMode[]> {
		const gameModes = await this.get(this.#filename);
		return (gameModes as IGameMode[]).map(x => new GameMode(x));
	}
}
