lotr_cycles = [
	{"position": 1, "code": "core", "name": "Core Set"},
	{"position": 2, "code": "rc", "name": "Revised Core Set (Campaign Only)","optional":true},
	{"position": 10, "code": "somc", "name": "Shadows of Mirkwood Cycle"},
	{"position": 11, "code": "kd", "name": "Khazad-dûm"},
	{"position": 12, "code": "dc", "name": "Dwarrowdelf Cycle"},
	{"position": 13, "code": "hon", "name": "Heirs of N\u00famenor"},
	{"position": 14, "code": "atsc", "name": "Against the Shadow Cycle"},
	{"position": 15, "code": "tvoi", "name": "The Voice of Isengard"},
	{"position": 16, "code": "trmc", "name": "The Ring-maker cycle"},
	{"position": 17, "code": "tlr", "name": "The Lost Realm"},
	{"position": 18, "code": "aac", "name": "Angmar Awakened Cycle"},
	{"position": 19, "code": "aace", "name": "Angmar Awakened Campaign Expansion","optional":true},
	{"position": 20, "code": "tgh", "name": "The Grey Havens"},
	{"position": 21, "code": "dcc", "name": "Dream-chaser Cycle"},
	{"position": 22, "code": "dcce", "name": "Dream-chaser Campaign Expansion","optional":true},
	{"position": 23, "code": "tsoh", "name": "The Sands of Harad"},
	{"position": 24, "code": "hc", "name": "Haradrim Cycle"},
	{"position": 25, "code": "twor", "name": "The Wilds of Rhovanion"},
	{"position": 26, "code": "emc", "name": "Ered Mithrin Cycle"},
	{"position": 27, "code": "emce", "name": "Ered Mithrin Campaign Expansion"},
	{"position": 28, "code": "asite", "name": "A Shadow in the East"},
	{"position": 29, "code": "vomc", "name": "Vengeance of Mordor Cycle"},
	{"position": 30, "code": "coe", "name": "ALeP - Children of Eorl","optional":true},
	{"position": 31, "code": "alep", "name": "Oaths of the Rohirrim Cycle (unofficial)","optional":true},
	{"position": 40, "code": "th", "name": "The Hobbit"},
	{"position": 41, "code": "lotrse", "name": "Lord of the Rings Saga Expansions"},
	{"position": 50, "code": "pod", "name": "Print on Demand"},
	{"position": 60, "code": "tples", "name": "Two-Player Limited Edition Starter"},
	{"position": 61, "code": "sd", "name": "Starter Decks"}
]

lotr_types = [
	{"code": "hero", "name": "Hero", "Position": 1, "is_subtype": false, "side_code": "player"},
	{"code": "ally", "name": "Ally", "Position": 2, "is_subtype": false, "side_code": "player"},
	{"code": "event", "name": "Event", "Position": 3, "is_subtype": false, "side_code": "player"},
	{"code": "attachment", "name": "Attachment", "Position": 4, "is_subtype": false, "side_code": "player"},
	{"code": "treasure", "name": "Treasure", "Position": 5, "is_subtype": false, "side_code": "player"},
	{"code": "player side-quest", "name": "Player Side-Quest", "Position": 6, "is_subtype": false, "side_code": "player"},
	{"code": "contract", "name": "Contract", "Position": 7, "is_subtype": false, "side_code": "player"},
	{"code": "player-objective", "name": "Player Objective", "Position": 8, "is_subtype": false, "side_code": "player"},
]

lotr_spheres = [
	{"side_code": "player", "color": "#ad62a5","code": "leadership", "name": "Leadership", "is_mini": false, "is_neutral": false},
	{"side_code": "player", "color": "#c00106","code": "tactics", "name": "Tactics", "is_mini": false, "is_neutral": false},
	{"side_code": "player", "color": "#00b1d4","code": "spirit", "name": "Spirit", "is_mini": false, "is_neutral": false},
	{"side_code": "player", "color": "#51b848","code": "lore", "name": "Lore", "is_mini": false, "is_neutral": false},
	{"side_code": "player", "color": "#616161","code": "neutral", "name": "Neutral", "is_mini": false, "is_neutral": true},
	{"side_code": "player", "color": "#b39e26","code": "baggins", "name": "Baggins", "is_mini": false, "is_neutral": false},
	{"side_code": "player", "color": "#b56c0c","code": "fellowship", "name": "Fellowship", "is_mini": false, "is_neutral": false},
]