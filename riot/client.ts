import { config } from "https://deno.land/x/dotenv/mod.ts";

class RiotClient implements IRiotClient {
    private static _instance?: RiotClient;

    public baseUrl: string

    #apiKey: string;

    private constructor() {
        const c = config();
        this.baseUrl = c.API_BASE_URL;
        this.#apiKey = c.API_KEY;
    }

    static get instance() {
        return this._instance || (this._instance = new this());
    }

    get(path: string, queryParams?: { [key: string]: unknown }): Promise<Response> {
        if (!path.startsWith("/")) {
            path = `/${path}`;
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
                    u.searchParams.append(k, (val as any).toString());
                }
            }
				}

        const headers = new Headers();
        headers.set("X-Riot-Token", this.#apiKey);

        return fetch(u.toString(), {
            headers
        });
    }
}

export interface IRiotClient {
	baseUrl: string;
	get(path: string, queryParams?: { [key: string]: unknown }): Promise<Response>;
}

const client = RiotClient.instance;
export { client as RiotClient };
