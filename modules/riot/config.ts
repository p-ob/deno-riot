export const config = buildConfig();

function buildConfig(): IConfig {
	return {
		API_KEY: get("API_KEY"),
		API_BASE_URL: get("API_BASE_URL"),
		STATIC_BASE_URL: get("STATIC_BASE_URL"),
		CACHE_DIR: get("CACHE_DIR")
	};
}

function assertDefined(value: string | undefined, variable: string): asserts value is string {
	if (value === undefined) {
		throw new Error(`Environment variable '${variable}' must be defined.`);
	}
}

function get(variable: string): string {
	const value = Deno.env.get(variable);

	assertDefined(value, variable);

	return value;
}


interface IConfig {
	API_KEY: string;
	API_BASE_URL: string;
	STATIC_BASE_URL: string;
	CACHE_DIR: string;
}
