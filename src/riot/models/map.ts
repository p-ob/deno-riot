export class Map implements IMap {
	mapId: number;
	mapName: string;
	notes: string;

	constructor(src: IMap) {
		this.mapId = src.mapId;
		this.mapName = src.mapName;
		this.notes = src.notes;
	}
}

export interface IMap {
	mapId: number;
	mapName: string;
	notes: string;
}
