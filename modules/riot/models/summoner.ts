export class Summoner implements ISummoner {
	accountId: string;
	profileIconId: number;
	revisionDate: number;
	name: string;
	id: string;
	puuid: string;
	summonerLevel: number;

	constructor(src: ISummoner) {
		this.accountId = src.accountId;
		this.profileIconId = src.profileIconId;
		this.revisionDate = src.revisionDate;
		this.name = src.name;
		this.id = src.id;
		this.puuid = src.puuid;
		this.summonerLevel = src.summonerLevel;
	}
}

interface ISummoner {
	accountId: string;
	profileIconId: number;
	revisionDate: number;
	name: string;
	id: string;
	puuid: string;
	summonerLevel: number;
}
