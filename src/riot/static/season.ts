import { StaticApiBase } from "./base.ts"
import { Season } from "../models/season.ts";
import type { ISeason } from "../models/season.ts";

export class SeasonApi extends StaticApiBase {
	#filename = "seasons.json";

	async getSeason(id: number): Promise<Season | undefined> {
		const seasons = await this.getSeasons();
		const q = seasons.find(x => x.id === id);
		return q ? new Season(q) : undefined;
	}

	async getSeasonByName(name: string): Promise<Season | undefined> {
		const seasons = await this.getSeasons();
		const q = seasons.find(x => x.season?.toLowerCase() === name.toLowerCase());
		return q ? new Season(q) : undefined;
	}

	async getSeasons(): Promise<Season[]> {
		const seasons = await this.get(this.#filename);
		return (seasons as ISeason[]).map(x => new Season(x));
	}
}
