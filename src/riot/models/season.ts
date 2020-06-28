export class Season implements ISeason {
	id: number;
	season: string;

	constructor(src: ISeason) {
		this.id = src.id;
		this.season = src.season;
	}
}

export interface ISeason {
	id: number;
	season: string;
}
