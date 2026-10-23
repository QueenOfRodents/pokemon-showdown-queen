// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
	{
		name: "[Gen 5] VGC Restricted",
		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Chatot', 'Dark Void', 'Sky Drop', 'Soul Dew'],
	}
];
