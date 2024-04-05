export type PalServerType = {
	version: string;
	name: string;
	description: string;
};

export type PalSettingsType = {
	Difficulty: string;
	DayTimeSpeedRate: number;
	NightTimeSpeedRate: number;
	ExpRate: number;
	PalCaptureRate: number;
	PalSpawnNumRate: number;
	PalDamageRateAttack: number;
	PalDamageRateDefense: number;
	PlayerDamageRateAttack: number;
	PlayerDamageRateDefense: number;
	PlayerStomachDecreaceRate: number;
	PlayerStaminaDecreaceRate: number;
	PlayerAutoHPRegeneRate: number;
	PlayerAutoHpRegeneRateInSleep: number;
	PalStomachDecreaceRate: number;
	PalStaminaDecreaceRate: number;
	PalAutoHPRegeneRate: number;
	PalAutoHpRegeneRateInSleep: number;
	BuildObjectDamageRate: number;
	BuildObjectDeteriorationDamageRate: number;
	CollectionDropRate: number;
	CollectionObjectHpRate: number;
	CollectionObjectRespawnSpeedRate: number;
	EnemyDropItemRate: number;
	DeathPenalty: string;
	bEnablePlayerToPlayerDamage: boolean;
	bEnableFriendlyFire: boolean;
	bEnableInvaderEnemy: boolean;
	bActiveUNKO: boolean;
	bEnableAimAssistPad: boolean;
	bEnableAimAssistKeyboard: boolean;
	DropItemMaxNum: number;
	DropItemMaxNum_UNKO: number;
	BaseCampMaxNum: number;
	BaseCampWorkerMaxNum: number;
	DropItemAliveMaxHours: number;
	bAutoResetGuildNoOnlinePlayers: boolean;
	AutoResetGuildTimeNoOnlinePlayers: number;
	GuildPlayerMaxNum: number;
	PalEggDefaultHatchingTime: number;
	WorkSpeedRate: number;
	bIsMultiplay: boolean;
	bIsPvP: boolean;
	bCanPickupOtherGuildDeathPenaltyDrop: boolean;
	bEnableNonLoginPenalty: boolean;
	bEnableFastTravel: boolean;
	bIsStartLocationSelectByMap: boolean;
	bExistPlayerAfterLogout: boolean;
	bEnableDefenseOtherGuildPlayer: boolean;
	CoopPlayerMaxNum: number;
	ServerPlayerMaxNum: number;
	ServerName: string;
	ServerDescription: string;
	PublicPort: number;
	PublicIP: string;
	RCONEnabled: boolean;
	RCONPort: number;
	Region: string;
	bUseAuth: boolean;
	BanListURL: string;
	RESTAPIEnabled: boolean;
	RESTAPIPort: number;
	bShowPlayerList: boolean;
	AllowConnectPlatform: string;
	bIsUseBackupSaveData: boolean;
	LogFormatType: string;
};

export type PalPlayerType = {
	name: string;
	playerid: number;
	userid: number;
	ip: string;
	ping: number;
	location_x: number;
	location_y: number;
	level: number;
};
[];

export type PalServerMetricsType = {
	FPS: number;
	currentPlayerNum: number;
	frametime: number;
	maxPlayerNum: number;
	uptime: number;
};

export type SteamUserIdType = `steam_${number}`;

export type PalResponseStatusType = 200 | 400 | 401 | number;
