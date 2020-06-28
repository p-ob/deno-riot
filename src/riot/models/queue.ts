export class Queue implements IQueue {
	queueId: number;
	map: string;
	description: string;
	notes: string;

	constructor(src: IQueue) {
		this.queueId = src.queueId;
		this.map = src.map;
		this.description = src.description;
		this.notes = src.notes;
	}
}

export interface IQueue {
	queueId: number;
	map: string;
	description: string;
	notes: string;
}
