import "https://deno.land/x/dotenv/load.ts";

export const config = buildConfig();

function buildConfig(): IConfig {
	return {
		APP_ID: get("APP_ID"),
		API_KEY: get("API_KEY"),
		API_BASE_URL: get("API_BASE_URL"),
		STATIC_BASE_URL: get("STATIC_BASE_URL"),
		CACHE_DIR: get("CACHE_DIR")
	};
}

function assertDefined(value: string | undefined): asserts value is string {
	if (value === undefined) {
		throw new Error("Environment value must be defined.");
	}
}

function get(variable: string): string {
	const value = Deno.env.get(variable);

	assertDefined(value);

	return value;
}


interface IConfig {
	APP_ID: string;
	API_KEY: string;
	API_BASE_URL: string;
	STATIC_BASE_URL: string;
	CACHE_DIR: string;
}
