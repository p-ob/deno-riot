function appendResponse(message: string, response: Response) {
	return `${message}. StatusCode: ${response.status}; Reason: ${response.statusText}`;
}

export class RiotAPIError extends Error {
	response: Response;

	constructor(message: string, response: Response) {
		super(appendResponse(message, response));

		this.response = response;
		this.name = "RiotAPIError";
	}
}
