import { config } from "https://deno.land/x/dotenv/mod.ts";

const riotTokenHeader = "X-Riot-Token";
const appRateLimitHeader = "X-App-Rate-Limit";
const appRateLimitCountHeader = "X-App-Rate-Limit-Count";

class RiotClient implements IRiotClient {
	private static _instance?: RiotClient;

	public baseUrl: string

	#apiKey: string;

	#blocked?: Promise<any>;

	private constructor() {
		const c = config();
		this.baseUrl = c.API_BASE_URL;
		this.#apiKey = c.API_KEY;
	}

	static get instance() {
		return this._instance || (this._instance = new this());
	}

	async get(path: string, queryParams?: { [key: string]: unknown }): Promise<Response> {
		if (this.#blocked) {
			await this.#blocked;
		}
		const u = new URL(path, this.baseUrl);
		if (queryParams) {
			for (const k of Object.keys(queryParams)) {
				const val = queryParams[k];
				if (Array.isArray(val)) {
					for (const i of val) {
						u.searchParams.append(k, i.toString());
					}
				} else {
					u.searchParams.set(k, (val as any).toString());
				}
			}
		}

		const headers = new Headers();
		headers.set(riotTokenHeader, this.#apiKey);

		const response = await fetch(u.toString(), {
			headers
		});

		const isRateLimited = this.applyRateLimit(response);
		if (isRateLimited) {
			return this.get(path, queryParams);
		}

		return response;
	}

	private block(timeMs: number) {
		this.#blocked = new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, timeMs);
		});
	}

	private parseRateLimitHeaderValue(value: string | null): IRateLimitValuePair[] {
		const result: IRateLimitValuePair[] = [];
		if (value) {
			const splitVal = value.split(",");
			for (const v of splitVal) {
				const innerSplit = v.split(":");
				result.push({
					count: Number(innerSplit[0]),
					interval: Number(innerSplit[1])
				});
			}
		}

		return result;
	}

	private applyRateLimit(response: Response): boolean {
		const rateLimitHeaderValue = response.headers.get(appRateLimitHeader);
		const rateLimitCountHeaderValue = response.headers.get(appRateLimitCountHeader);
		const rateLimits = this.parseRateLimitHeaderValue(rateLimitHeaderValue);
		const rateLimitCount = this.parseRateLimitHeaderValue(rateLimitCountHeaderValue);
		for (const rl of rateLimitCount) {
			const rateLimitRule = rateLimits.find(x => x.interval === rl.interval);
			if (rl.count >= (rateLimitRule?.count ?? Number.MAX_SAFE_INTEGER)) {
				this.block(rl.interval);
				return true;
			}
		}
		return false;
	}
}

export interface IRiotClient {
	baseUrl: string;
	get(path: string, queryParams?: object): Promise<Response>;
}

const client = RiotClient.instance;
export { client as RiotClient };

interface IRateLimitValuePair {
	interval: number;
	count: number;
}
