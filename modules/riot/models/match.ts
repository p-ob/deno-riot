export class Match implements IMatch {
	gameId: number;
	queueId: number;
	gameType: string;
	gameDuration: number;
	platformId: string;
	gameCreation: number;
	seasonId: number;
	gameVersion: string;
	mapId: number;
	gameMode: string;
  participants: Participant[];
  // deno-lint-ignore no-explicit-any
  participantIdentities: any[]
  // deno-lint-ignore no-explicit-any
	teams: any[];

	constructor(src: IMatch) {
		this.gameId = src.gameId;
		this.queueId = src.queueId;
		this.gameType = src.gameType;
		this.gameDuration = src.gameDuration;
		this.platformId = src.platformId;
		this.gameCreation = src.gameCreation;
		this.seasonId = src.seasonId;
		this.gameVersion = src.gameVersion;
		this.mapId = src.mapId;
		this.gameMode = src.gameMode;
		this.participants = src.participants?.map(x => new Participant(x));
		this.participantIdentities = src.participantIdentities;
		this.teams = src.teams;
	}
}

interface IMatch {
	gameId: number;
	queueId: number;
	gameType: string;
	gameDuration: number;
	platformId: string;
	gameCreation: number;
	seasonId: number;
	gameVersion: string;
	mapId: number;
	gameMode: string;
  participants: IParticipant[];
  // deno-lint-ignore no-explicit-any
  participantIdentities: any[]
  // deno-lint-ignore no-explicit-any
	teams: any[];
}

export class Participant implements IParticipant {
	participantId: number;
	championId: number;
	runes: Rune[];
	stats: ParticipantStats;
  teamId: number;
  // deno-lint-ignore no-explicit-any
	timeline: any;
	spell1Id: number;
	spell2Id: number;
  highestAchievedSeasonTier: string;
  // deno-lint-ignore no-explicit-any
	masteries: any[];

	constructor(src: IParticipant) {
		this.participantId = src.participantId;
		this.championId = src.championId;
		this.runes = src.runes?.map(x => new Rune(x));
		this.stats = new ParticipantStats(src.stats);
		this.teamId = src.teamId;
		this.timeline = src.timeline;
		this.spell1Id = src.spell1Id;
		this.spell2Id = src.spell2Id;
		this.highestAchievedSeasonTier = src.highestAchievedSeasonTier;
		this.masteries = src.masteries;
	}
}

interface IParticipant {
	participantId: number;
	championId: number;
	runes: IRune[];
	stats: IParticipantStats;
  teamId: number;
  // deno-lint-ignore no-explicit-any
	timeline: any;
	spell1Id: number;
	spell2Id: number;
  highestAchievedSeasonTier: string;
  // deno-lint-ignore no-explicit-any
	masteries: any[];
}

export class Rune implements IRune {
	runeId: number;
	rank: number;

	constructor(src: IRune) {
		this.runeId = src.runeId;
		this.rank = src.rank;
	}
}

interface IRune {
	runeId: number;
	rank: number;
}

export class ParticipantStats implements IParticipantStats {
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	item6: number;
	totalUnitsHealed: number;
	largestMultiKill: number;
	goldEarned: number;
	firstInhibitorKill: boolean;
	physicalDamageTaken: number;
	nodeNeutralizeAssist: number;
	deaths: number;
	tripleKills: number;
	magicDamageDealtToChampions: number;
	wardsKilled: number;
	pentaKills: number;
	damageSelfMitigated: number;
	largestCriticalStrike: number;
	nodeNeutralize: number;
	totalTimeCrowdControlDealt: number;
	firstTowerKill: boolean;
	magicDamageDealt: number;
	totalScoreRank: number;
	nodeCapture: number;
	wardsPlaced: number;
	totalDamageDealt: number;
	timeCCingOthers: number;
	magicalDamageTaken: number;
	largestKillingSpree: number;
	totalDamageDealtToChampions: number;
	physicalDamageDealtToChampions: number;
	neutralMinionsKilledTeamJungle: number;
	totalMinionsKilled: number;
	firstInhibitorAssist: boolean;
	visionWardsBoughtInGame: number;
	objectivePlayerScore: number;
	kills: number;
	firstTowerAssist: boolean;
	combatPlayerScore: number;
	inhibitorKills: number;
	turretKills: number;
	participantId: number;
	trueDamageTaken: number;
	firstBloodAssist: boolean;
	nodeCaptureAssist: number;
	assists: number;
	teamObjective: number;
	altarsNeutralized: number;
	goldSpent: number;
	damageDealtToTurrets: number;
	altarsCaptured: number;
	win: boolean;
	totalHeal: number;
	unrealKills: number;
	visionScore: number;
	physicalDamageDealt: number;
	firstBloodKill: number;
	longestTimeSpentLiving: number;
	killingSprees: number;
	sightWardsBoughtInGame: number;
	trueDamageDealtToChampions: number;
	neutralMinionsKilledEnemyJungle: number;
	doubleKills: number;
	trueDamageDealt: number;
	quadraKills: number;
	playerScore0: number;
	playerScore1: number;
	playerScore2: number;
	playerScore3: number;
	playerScore4: number;
	playerScore5: number;
	playerScore6: number;
	playerScore7: number;
	playerScore8: number;
	playerScore9: number;
	perk0: number;
	perk0Var1: number;
	perk0Var2: number;
	perk0Var3: number;
	perk1: number;
	perk1Var1: number;
	perk1Var2: number;
	perk1Var3: number;
	perk2: number;
	perk2Var1: number;
	perk2Var2: number;
	perk2Var3: number;
	perk3: number;
	perk3Var1: number;
	perk3Var2: number;
	perk3Var3: number;
	perk4: number;
	perk4Var1: number;
	perk4Var2: number;
	perk4Var3: number;
	perk5: number;
	perk5Var1: number;
	perk5Var2: number;
	perk5Var3: number;
	perkPrimaryStyle: number;
	perkSubStyle: number;

	constructor(src: IParticipantStats) {
		this.item0 = src.item0;
		this.item1 = src.item1;
		this.item2 = src.item2;
		this.item3 = src.item3;
		this.item4 = src.item4;
		this.item5 = src.item5;
		this.item6 = src.item6;
		this.totalUnitsHealed = src.totalUnitsHealed;
		this.largestMultiKill = src.largestMultiKill;
		this.goldEarned = src.goldEarned;
		this.firstInhibitorKill = src.firstInhibitorKill;
		this.physicalDamageTaken = src.physicalDamageTaken;
		this.nodeNeutralizeAssist = src.nodeNeutralizeAssist;
		this.deaths = src.deaths;
		this.tripleKills = src.tripleKills;
		this.magicDamageDealtToChampions = src.magicDamageDealtToChampions;
		this.wardsKilled = src.wardsKilled;
		this.pentaKills = src.pentaKills;
		this.damageSelfMitigated = src.damageSelfMitigated;
		this.largestCriticalStrike = src.largestCriticalStrike;
		this.nodeNeutralize = src.nodeNeutralize;
		this.totalTimeCrowdControlDealt = src.totalTimeCrowdControlDealt;
		this.firstTowerKill = src.firstTowerKill;
		this.magicDamageDealt = src.magicDamageDealt;
		this.totalScoreRank = src.totalScoreRank;
		this.nodeCapture = src.nodeCapture;
		this.wardsPlaced = src.wardsPlaced;
		this.totalDamageDealt = src.totalDamageDealt;
		this.timeCCingOthers = src.timeCCingOthers;
		this.magicalDamageTaken = src.magicalDamageTaken;
		this.largestKillingSpree = src.largestKillingSpree;
		this.totalDamageDealtToChampions = src.totalDamageDealtToChampions;
		this.physicalDamageDealtToChampions = src.physicalDamageDealtToChampions;
		this.neutralMinionsKilledTeamJungle = src.neutralMinionsKilledTeamJungle;
		this.totalMinionsKilled = src.totalMinionsKilled;
		this.firstInhibitorAssist = src.firstInhibitorAssist;
		this.visionWardsBoughtInGame = src.visionWardsBoughtInGame;
		this.objectivePlayerScore = src.objectivePlayerScore;
		this.kills = src.kills;
		this.firstTowerAssist = src.firstTowerAssist;
		this.combatPlayerScore = src.combatPlayerScore;
		this.inhibitorKills = src.inhibitorKills;
		this.turretKills = src.turretKills;
		this.participantId = src.participantId;
		this.trueDamageTaken = src.trueDamageTaken;
		this.firstBloodAssist = src.firstBloodAssist;
		this.nodeCaptureAssist = src.nodeCaptureAssist;
		this.assists = src.assists;
		this.teamObjective = src.teamObjective;
		this.altarsNeutralized = src.altarsNeutralized;
		this.goldSpent = src.goldSpent;
		this.damageDealtToTurrets = src.damageDealtToTurrets;
		this.altarsCaptured = src.altarsCaptured;
		this.win = src.win;
		this.totalHeal = src.totalHeal;
		this.unrealKills = src.unrealKills;
		this.visionScore = src.visionScore;
		this.physicalDamageDealt = src.physicalDamageDealt;
		this.firstBloodKill = src.firstBloodKill;
		this.longestTimeSpentLiving = src.longestTimeSpentLiving;
		this.killingSprees = src.killingSprees;
		this.sightWardsBoughtInGame = src.sightWardsBoughtInGame;
		this.trueDamageDealtToChampions = src.trueDamageDealtToChampions;
		this.neutralMinionsKilledEnemyJungle = src.neutralMinionsKilledEnemyJungle;
		this.doubleKills = src.doubleKills;
		this.trueDamageDealt = src.trueDamageDealt;
		this.quadraKills = src.quadraKills;
		this.playerScore0 = src.playerScore0;
		this.playerScore1 = src.playerScore1;
		this.playerScore2 = src.playerScore2;
		this.playerScore3 = src.playerScore3;
		this.playerScore4 = src.playerScore4;
		this.playerScore5 = src.playerScore5;
		this.playerScore6 = src.playerScore6;
		this.playerScore7 = src.playerScore7;
		this.playerScore8 = src.playerScore8;
		this.playerScore9 = src.playerScore9;
		this.perk0 = src.perk0;
		this.perk0Var1 = src.perk0Var1;
		this.perk0Var2 = src.perk0Var2;
		this.perk0Var3 = src.perk0Var3;
		this.perk1 = src.perk1;
		this.perk1Var1 = src.perk1Var1;
		this.perk1Var2 = src.perk1Var2;
		this.perk1Var3 = src.perk1Var3;
		this.perk2 = src.perk2;
		this.perk2Var1 = src.perk2Var1;
		this.perk2Var2 = src.perk2Var2;
		this.perk2Var3 = src.perk2Var3;
		this.perk3 = src.perk3;
		this.perk3Var1 = src.perk3Var1;
		this.perk3Var2 = src.perk3Var2;
		this.perk3Var3 = src.perk3Var3;
		this.perk4 = src.perk4;
		this.perk4Var1 = src.perk4Var1;
		this.perk4Var2 = src.perk4Var2;
		this.perk4Var3 = src.perk4Var3;
		this.perk5 = src.perk5;
		this.perk5Var1 = src.perk5Var1;
		this.perk5Var2 = src.perk5Var2;
		this.perk5Var3 = src.perk5Var3;
		this.perkPrimaryStyle = src.perkPrimaryStyle;
		this.perkSubStyle = src.perkSubStyle;
	}
}

interface IParticipantStats {
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	item6: number;
	totalUnitsHealed: number;
	largestMultiKill: number;
	goldEarned: number;
	firstInhibitorKill: boolean;
	physicalDamageTaken: number;
	nodeNeutralizeAssist: number;
	deaths: number;
	tripleKills: number;
	magicDamageDealtToChampions: number;
	wardsKilled: number;
	pentaKills: number;
	damageSelfMitigated: number;
	largestCriticalStrike: number;
	nodeNeutralize: number;
	totalTimeCrowdControlDealt: number;
	firstTowerKill: boolean;
	magicDamageDealt: number;
	totalScoreRank: number;
	nodeCapture: number;
	wardsPlaced: number;
	totalDamageDealt: number;
	timeCCingOthers: number;
	magicalDamageTaken: number;
	largestKillingSpree: number;
	totalDamageDealtToChampions: number;
	physicalDamageDealtToChampions: number;
	neutralMinionsKilledTeamJungle: number;
	totalMinionsKilled: number;
	firstInhibitorAssist: boolean;
	visionWardsBoughtInGame: number;
	objectivePlayerScore: number;
	kills: number;
	firstTowerAssist: boolean;
	combatPlayerScore: number;
	inhibitorKills: number;
	turretKills: number;
	participantId: number;
	trueDamageTaken: number;
	firstBloodAssist: boolean;
	nodeCaptureAssist: number;
	assists: number;
	teamObjective: number;
	altarsNeutralized: number;
	goldSpent: number;
	damageDealtToTurrets: number;
	altarsCaptured: number;
	win: boolean;
	totalHeal: number;
	unrealKills: number;
	visionScore: number;
	physicalDamageDealt: number;
	firstBloodKill: number;
	longestTimeSpentLiving: number;
	killingSprees: number;
	sightWardsBoughtInGame: number;
	trueDamageDealtToChampions: number;
	neutralMinionsKilledEnemyJungle: number;
	doubleKills: number;
	trueDamageDealt: number;
	quadraKills: number;
	playerScore0: number;
	playerScore1: number;
	playerScore2: number;
	playerScore3: number;
	playerScore4: number;
	playerScore5: number;
	playerScore6: number;
	playerScore7: number;
	playerScore8: number;
	playerScore9: number;
	perk0: number;
	perk0Var1: number;
	perk0Var2: number;
	perk0Var3: number;
	perk1: number;
	perk1Var1: number;
	perk1Var2: number;
	perk1Var3: number;
	perk2: number;
	perk2Var1: number;
	perk2Var2: number;
	perk2Var3: number;
	perk3: number;
	perk3Var1: number;
	perk3Var2: number;
	perk3Var3: number;
	perk4: number;
	perk4Var1: number;
	perk4Var2: number;
	perk4Var3: number;
	perk5: number;
	perk5Var1: number;
	perk5Var2: number;
	perk5Var3: number;
	perkPrimaryStyle: number;
	perkSubStyle: number;
}
