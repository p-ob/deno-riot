import { StaticApiBase } from "./base.ts"
import { Map } from "../models/map.ts";
import type { IMap } from "../models/map.ts";

export class MapApi extends StaticApiBase {
	#filename = "maps.json";

	async getMap(id: number): Promise<Map | undefined> {
		const maps = await this.getMaps();
		const q = maps.find(x => x.mapId === id);
		return q ? new Map(q) : undefined;
	}

	async getMapByName(name: string): Promise<Map | undefined> {
		const maps = await this.getMaps();
		const q = maps.find(x => x.mapName?.toLowerCase() === name.toLowerCase());
		return q ? new Map(q) : undefined;
	}

	async getMaps(): Promise<Map[]> {
		const maps = await this.get(this.#filename);
		return (maps as IMap[]).map(x => new Map(x));
	}
}
