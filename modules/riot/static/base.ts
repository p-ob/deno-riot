import { StaticRiotClient } from "./static-client.ts";
import { config } from "../config.ts";
import { exists, readJson, writeJson, ensureFile } from "https://deno.land/std/fs/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { RiotAPIError } from "../api-error.ts";
import type { IStaticRiotClient } from "./static-client.ts";

export abstract class StaticApiBase {
	#client: IStaticRiotClient;
	#cacheDir: string;

	constructor() {
		this.#client = StaticRiotClient;
		this.#cacheDir = config.CACHE_DIR;
	}

	protected async get(path: string): Promise<unknown> {
		const cachedResult = await this.getCache(path);
		if (cachedResult) {
			return cachedResult;
		}
		const response = await this.#client.get(path);
		if (response.ok) {
			const result = await response.json();
			await this.addCache(path, result);
			return result;
		} else {
			throw new RiotAPIError("Error encountered loading static assets.", response);
		}
	}

	private async addCache(path: string, obj: unknown) {
		const filepath = join(this.#cacheDir, path);
		await ensureFile(filepath);
		await writeJson(filepath, obj);
	}

	private async getCache(path: string): Promise<unknown | null> {
		const filepath = join(this.#cacheDir, path);
		const isCached = await exists(filepath);
		if (!isCached) return null;

		return await readJson(filepath);
	}
}
