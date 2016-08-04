/* Archmage Engine */
var AM_CLASS = {
	"Barbarian": {
		"stats": ["str", "con"],
		"background": ["clan champion", "caravan outrider", "fur trapper", "mountain tribeswoman", "wasteland survivalist", "gladiator"],
		"gear": {
			"text": "",
			"melee": 1,
			"ranged": 1,
			"armor": ["none", "light"],
			"class": []
		},
		"gold": [25, [6, 10]],
		"pd": 11,
		"md": 10,
		"hp": 7,
		"recoveries": 8,
		"recdice": 10,
		"ac": {
			"none": [10, 0],
			"light": [12, 0],
			"heavy": [13, -2],
			"shield": [1, 0]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "hand-axe",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "warclub",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "battleaxe",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "greataxe",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": -5
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "spear",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": -5
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": -5
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": 0
		}],
		"attack": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"],
		},
		"miss": {
			"melee":true,
			"ranged":false
		}
	},
	"Bard": {
		"stats": ["dex", "cha"],
		"background": ["wandering minstrel", "cathedral musician", "court jester", "mercenary", "tavern owner", "failed hedge wizard", "diplomat", "spy", "royal taster", "caravan guide", "smuggler", "battle skald"],
		"gear": {
			"text": "At 1st level, bards start with non-magical musical instruments, a melee and ranged weapon of their choice, some form of light armor, and any other minor elements of gear their backgrounds suggest.",
			"melee": 1,
			"ranged": 1,
			"armor": ["none", "light"],
			"class": ["Mundane Musical Instrument"]
		},
		"gold": [25, [6, 10]],
		"pd": 10,
		"md": 11,
		"hp": 7,
		"recoveries": 8,
		"recdice": 8,
		"talents": 3,
		"ac": {
			"none": [10, 0],
			"light": [12, 0],
			"heavy": [13, -2],
			"shield": [1, -1]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "mace",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "scimitar",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": -2,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "dire flail",
			"damage": "d10",
			"attack": -2,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": -1
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": -2
		}],
		"attack": {
			"melee": ["str", "dex"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str", "dex"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":false
		}
	},
	"Cleric": {
		"stats": ["str", "wis"],
		"background": ["healer", "archivist", "military chaplain", "temple guard", "bartender", "reformed thief", "dwarven hierophant", "initiate", "bishop"],
		"gear": {
			"text": "At 1st level, a cleric starts with a melee weapon, decent armor, a holy symbol, and other minor possessions suggested by their backgrounds. They might even have a crossbow.",
			"melee": 1,
			"ranged": 1,
			"armor": ["none", "light", "heavy"],
			"class": ["Holy Symbol"]
		},
		"gold": [25, [6, 10]],
		"pd": 11,
		"md": 11,
		"hp": 7,
		"recoveries": 8,
		"recdice": 8,
		"ac": {
			"none": [10, 0],
			"light": [12, 0],
			"heavy": [14, 0],
			"shield": [1, 0]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "mace",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": -2,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "warhammer",
			"damage": "d8",
			"attack": -2,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": -2,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "dire flail",
			"damage": "d10",
			"attack": -2,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": -2
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": -1
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": -5
		}],
		"attack": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":false
		}
	},
	"Fighter": {
		"stats": ["str", "con"],
		"background": ["swordmaster", "mercenary captain", "sea raider", "shieldwall", "spearman", "explorer", "bouncer", "thug", "city guardsman", "former gladiator", "former orc captive", "bankrupt nobleman", "duelist", "goblin-hunter"],
		"gear": {
			"text": "At 1st level, a fighter starts with a melee weapon or two, a ranged weapon if they want it, armor, and standard non-magical gear that is suggested by the character's backgrounds.",
			"melee": 2,
			"ranged": 1,
			"armor": ["none", "light", "heavy"]
		},
		"gold": [25, [6, 10]],
		"pd": 10,
		"md": 10,
		"hp": 8,
		"recoveries": 9,
		"recdice": 10,
		"ac": {
			"none": [10, 0],
			"light": [13, 0],
			"heavy": [15, 0],
			"shield": [1, 0]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "handaxe",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "warhammer",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "greataxe",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": 0
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": 0
		}],
		"attack": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":false
		}
	},
	"Paladin": {
		"stats": ["str", "cha"],
		"background": ["city guardsman", "combat medic", "bodyguard", "outlaw hunter", "inquisitor"],
		"gear": {
			"text": "At 1st level, a paladin starts with a melee weapon or two, a ranged weapon if they want it, armor, a shield, and standard non-magical gear that is suggested by the character''s backgrounds.",
			"melee": 2,
			"ranged": 1,
			"armor": ["none", "light", "heavy", "shield"],
			"class": []
		},
		"gold": [25, [6, 10]],
		"pd": 10,
		"md": 12,
		"hp": 8,
		"recoveries": 8,
		"recdice": 10,
		"ac": {
			"none": [10, 0],
			"light": [12, 0],
			"heavy": [16, 0],
			"shield": [1, 0]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "scimitar",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "batlleaxe",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "halberd",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": 0
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": 0
		}],
		"attack": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":false
		}
	},
	"Ranger": {
		"stats": ["str", "dex", "wis"],
		"background": ["tracker", "bounty hunter", "beast slayer", "woodsy assassin", "orc slayer", "wanderer"],
		"gear": {
			"text": "At 1st level, a ranger starts with light armor, a melee weapon or two, a ranged weapon or two, and other mundane gear as suggested by their backgrounds.",
			"melee": 2,
			"ranged": 2,
			"armor": ["none", "light"],
			"class": []
		},
		"gold": [25, [6, 10]],
		"pd": 11,
		"md": 10,
		"hp": 7,
		"recoveries": 8,
		"recdice": 8,
		"ac": {
			"none": [10, 0],
			"light": [14, 0],
			"heavy": [15, -2],
			"shield": [1, -2]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "handaxe",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "warhammer",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "greataxe",
			"damage": "d10",
			"attack": 0,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": 0
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": 0
		}],
		"attack": {
			"melee": ["str", "dex"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":true
		}
	},
	"Rogue": {
		"stats": ["dex", "cha"],
		"background": ["street thug", "cat burglar", "diplomat", "professional gambler", "courtier", "jewel thief", "acrobat", "con artist", "bartender", "spy master", "pirate", "dandy", "rat catcher"],
		"gear": {
			"text": "At 1st level, rogues start with the clothes on their back and the dice in their pockets. They also start with various bladed weapons and some armor. Plus various oddments suggested by their backgrounds.",
			"melee": 3,
			"ranged": 3,
			"class": ["dice"],
			"armor": ["none", "light"]
		},
		"gold": [25, [6, 10]],
		"pd": 12,
		"md": 10,
		"hp": 6,
		"recoveries": 8,
		"recdice": 8,
		"ac": {
			"none": [11, 0],
			"light": [12, 0],
			"heavy": [13, -2],
			"shield": [1, -2]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "club",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "wicked knife",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d8",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "scimitar",
			"damage": "d8",
			"attack": -2,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": -2,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": -2,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": -1
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": -2
		}],
		"attack": {
			"melee": ["dex"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["dex"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":true
		}
	},
	"Sorcerer": {
		"stats": ["dex", "cha"],
		"background": ["tribal shaman", "pirate captain", "spell-arena gladiator", "failed wizard", "sahuagin hunter"],
		"gear": {
			"text": "At 1st level, a sorcerer usually has a simple melee weapon, a few changes of clothing, a wand or staff, and other paraphernalia suggested by their backgrounds.",
			"melee": 1,
			"ranged": 0,
			"armor": ["none"],
			"class": ["Wand or Staff"]
		},
		"gold": [25, [6, 10]],
		"pd": 11,
		"md": 10,
		"hp": 6,
		"recoveries": 8,
		"recdice": 6,
		"ac": {
			"none": [10, 0],
			"light": [10, 0],
			"heavy": [11, -2],
			"shield": [1, -2]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "staff",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": 0,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": 0,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": -2,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": -2,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": -1
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": -2
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": -3
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": -4
		}],
		"attack": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":true,
			"ranged":false
		}
	},
	"Wizard": {
		"stats": ["int", "wis"],
		"background": ["magical prodigy", "spell thief", "hedge wizard", "transformed familiar", "ship's wizard", "royal poisoner"],
		"gear": {
			"text": "At 1st level, a wizard usually has a dagger, a robe or two, a wand, ritual components in pouches, and other minor accouterments suggested by their backgrounds",
			"melee": 1,
			"ranged": 0,
			"armor": ["none"],
			"class": ["wand", "ritual components in pouches"]
		},
		"gold": [25, [6, 10]],
		"pd": 10,
		"md": 12,
		"hp": 6,
		"recoveries": 8,
		"recdice": 6,
		"ac": {
			"none": [10, 0],
			"light": [12, 0],
			"heavy": [13, -2],
			"shield": [1, 0]
		},
		"melee": [{
			"type": "small",
			"name": "dagger",
			"damage": "d4",
			"attack": 0,
			"hands": 1
		}, {
			"type": "small",
			"name": "staff",
			"damage": "d6",
			"attack": 0,
			"hands": 2
		}, {
			"type": "light",
			"name": "shortsword",
			"damage": "d6",
			"attack": -2,
			"hands": 1
		}, {
			"type": "light",
			"name": "spear",
			"damage": "d8",
			"attack": -2,
			"hands": 2
		}, {
			"type": "heavy",
			"name": "longsword",
			"damage": "d8",
			"attack": -5,
			"hands": 1
		}, {
			"type": "heavy",
			"name": "greatsword",
			"damage": "d10",
			"attack": -5,
			"hands": 2
		}],
		"ranged": [{
			"type": "thrown",
			"name": "dagger",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "crossbow",
			"name": "hand crossbow",
			"damage": "d4",
			"attack": 0
		}, {
			"type": "thrown",
			"name": "axe",
			"damage": "d6",
			"attack": -2
		}, {
			"type": "thrown",
			"name": "javelin",
			"damage": "d6",
			"attack": -2
		}, {
			"type": "crossbow",
			"name": "light crossbow",
			"damage": "d6",
			"attack": -1
		}, {
			"type": "bow",
			"name": "shortbow",
			"damage": "d6",
			"attack": -2
		}, {
			"type": "crossbow",
			"name": "heavy crossbow",
			"damage": "d8",
			"attack": -4
		}, {
			"type": "bow",
			"name": "longbow",
			"damage": "d8",
			"attack": -5
		}],
		"attack": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"damage": {
			"melee": ["str"],
			"ranged": ["dex"]
		},
		"miss": {
			"melee":false,
			"ranged":false
		}
	}
}

var AM_RACE = {
	"Human": {
		"stats": ["str", "dex", "con", "wis", "int", "cha"],
		"power": [{
			"name": "Bonus Feat",
			"a": "At 1st level, human PCs start with two feats instead of one."
		}, {
			"name": "Quick to Fight",
			"a": "At the start of each battle, roll initiative twice and choose the result you want.",
			"c": "If you roll a natural 19 or 20 for initiative, increase the escalation die by 1 (usually from 0 to 1 since it's the start of the battle)."
		}]
	},
	"Dwarf": {
		"stats": ["con", "wis"],
		"power": [{
			"name": "That's Your Best Shot?",
			"a": "Once per battle as a free action after you have been hit by an enemy attack, you can heal using a recovery. If the escalation die is less than 2, you only get half the usual healing from the recovery. Unlike other recoveries that might allow you to take an average result, you have to roll this one!<p>Note that you can't use this ability if the attack drops you to 0 hp or below. You've got to be on your feet to sneer at their attack and recover.",
			"c": "If the escalation die is 2+ when you use that's your best shot, the recovery is free."
		}]
	},
	"Dark Elf": {
		"stats": ["dex", "cha"],
		"power": [{
			"name": "Heritage of the Sword",
			"a": "If you can already use swords that deal d6 and d8 damage without attack penalties, you gain a +2 damage bonus with them. (This bonus doesn't increase miss damage.)<p>Otherwise, if your class would ordinarily have an attack penalty with such swords, you can now use them without penalties."
		}, {
			"name": "Cruel",
			"a": "Once per battle, deal ongoing damage to a target you hit with a natural even attack roll as a free action. The ongoing damage equals 5 times your level. (For example, at 3rd level you would deal 15 ongoing damage against a single target.) As usual, a normal save (11+) ends the damage. A critical hit doesn't double this ongoing damage.",
			"c": "Once per day, you can instead use cruel to deal 5 ongoing damage per level against an enemy you miss or that you roll a natural odd attack against."
		}]
	},
	"High Elf": {
		"stats": ["int", "cha"],
		"power": [{
			"name": "Heritage of the Sword",
			"a": "If you can already use swords that deal d6 and d8 damage without attack penalties, you gain a +2 damage bonus with them. (This bonus doesn't increase miss damage.)<p>Otherwise, if your class would ordinarily have an attack penalty with such swords, you can now use them without penalties."
		}, {
			"name": "Highblood Teleport",
			"a": "Once per battle as a move action, place yourself in a nearby location you can see.",
			"c": "Deal damage equal to twice your level to one enemy engaged with you before or after you teleport."
		}]
	},
	"Wood Elf": {
		"stats": ["dex", "wis"],
		"power": [{
			"name": "Heritage of the Sword",
			"a": "If you can already use swords that deal d6 and d8 damage without attack penalties, you gain a +2 damage bonus with them. (This bonus doesn't increase miss damage.)<p>Otherwise, if your class would ordinarily have an attack penalty with such swords, you can now use them without penalties."
		}, {
			"name": "Elven Grace",
			"a": "At the start of each of your turns, roll a die to see if you get an extra standard action. If your roll is equal to or lower than the escalation die, you get an extra standard action that turn. At the start of battle, you roll a d6. Each time you successfully gain an extra action, the size of the die you roll increases by one step on the following progression: (d4), d6, d8, d10, d12, d20. If you get an extra action after rolling a d20, you can't get any more extra actions that battle.",
			"c": "Once per day, start a battle rolling a d4 for elven grace instead of a d6."
		}]
	},
	"Gnome": {
		"stats": ["dex", "int"],
		"power": [
			{
				"name": "small",
				"a": "Gnomes have a +2 AC bonus against opportunity attacks."
			}, {
				"name": "Confounding",
				"a": "Once per battle, when you roll a natural 16+ with an attack, you can also daze the target until the end of your next turn.",
				"c": "Instead of being dazed, the target of your confounding ability is weakened until the end of your next turn."
			}, {
				"name": "Minor Illusions",
				"a": "As a standard action, at-will, you can create a strong smell or a sound nearby. Nearby creatures that fail a normal save notice the smell or sound. Creatures that make the save may notice it but recognize it as not exactly real."
			}
		]
	},
	"Half-elf": {
		"stats": ["con", "cha"],
		"power": [{
			"name": "Surprising",
			"a": "Once per battle, subtract one from the natural result of one of your own d20 rolls.",
			"c": "You gain an additional use of surprising each battle, but you can only use it to affect a nearby ally's d20 roll."
		}]
	},
	"Halfling": {
		"stats": ["con", "dex"],
		"power": [
			{
				"name": "small",
				"a": "Halflings have a +2 AC bonus against opportunity attacks."
			}, {
				"name": "Evasive",
				"a": "Once per battle, force an enemy that hits you with an attack to reroll the attack with a -2 penalty.",
				"c": "The enemy's reroll takes a -5 penalty instead."
			}
		]
	},
	"Half-orc": {
		"stats": ["str", "dex"],
		"power": [{
			"name": "Lethal",
			"a": "Once per battle, reroll a melee attack and use the roll you prefer as the result.",
			"c": "If the lethal attack reroll is a natural 16+, you can use lethal again later this battle."
		}]
	},
	"Draconic": {
		"stats": ["str", "cha"],
		"power": [{
			"name": "Breath Weapon",
			"a": "Once per battle, make a close-quarters breath weapon attack as a quick action using your highest ability score against one nearby enemy's Physical Defense. On a hit, the attack deals 1d6 damage per your level of an energy type that makes sense for your character.",
			"c": "Your breath weapon attack targets 1d3 nearby enemies in a group instead."
		}]
	},
	"Holy One": {
		"stats": ["wis", "cha"],
		"power": [{
			"name": "Halo",
			"a": "Once per battle as a free action during your turn, gain a +2 bonus to all defenses until you are hit by an attack (or until the battle ends).",
			"c": "Halo also activates automatically any time you heal using a recovery."
		}]
	},
	"Forgeborn": {
		"stats": ["str", "con"],
		"power": [{
			"name": "Never Say Die",
			"a": "Whenever you drop to 0 hp or below, roll a normal save if you have a recovery available. On an 11+, instead of falling unconscious, you stay on your feet and can heal using a recovery. Add the recovery hit points to 0 hp to determine your hp total.",
			"c": "If you roll a 16+ on your never-say-die save, you gain an additional standard action during your next turn."
		}]
	},
	"Tiefling": {
		"stats": ["str", "int"],
		"power": [{
			"name": "Curse of Chaos",
			"a": "Once per battle as a free action when a nearby enemy rolls a natural 1-5 on an attack or a save, turn their roll into a natural 1 and improvise a further curse that shows how their attempt backfires horribly.<p>A curse should have about the same impact as a typical once-per-battle ability. For example, a typical curse might lead to the cursed attacker dealing half damage to themself with their fumbled attack and being dazed until the end of their next turn. The GM may reward storytelling flair and/or limit the suggested effects of the curse.",
			"c": "Whenever a nearby enemy rolls a natural 1 on an attack against you, you can use curse of chaos against them without expending it."
		}]
	}
}

/* Functions */

$(document).ready( function () {
	// populate dropdowns
	var outp = '';
	$.each(AM_CLASS, function(key,charclass) {
		outp += '<option>' + key + '</option>';
	});
	$('#char-class').html (outp);
	
	outp = '';
	$.each(AM_RACE, function(key,charrace) {
		outp += '<option>' + key + '</option>';
	});
	$('#char-race').html (outp);

	// update Adjustments and Stats 
	getPowers();
	getClassInfo();
	updateScore();
	updateSheet();
	
/* LISTENERS */
	$('input').on('change',function () {
		updateScore(this);
		lockadj();
	});
	
	$('#stats button').on('click',function() {
		var val = 0;
		var inp = $(this).closest('tr').find('input[type="text"]');
		val = $(this).hasClass('btn-minus') ? -1 : val;
		val = $(this).hasClass('btn-plus') ? 1 : val;
		inp.val( parseInt(inp.val(),10) + val);
		
		updateScore(inp);
		lockadj();
	});
	
	$('#stat-roll').on('click',function () {
		$.each($('input[type="text"]'), function(idx,ele) {
			$(ele).val (rollStat());
			updateScore(ele);
		});
	});
	
	$('#stat-reset').on('click',function () {				
		$.each($('input[type="checkbox"]'), function(idx,ele) {
			$(ele).attr('checked',false);
		});
		$.each($('input[type="text"]'), function(idx,ele) {
			$(ele).val (8);
			updateScore(ele);
		});
	});
	
	$('#char-class').on('change', function () {
		getPowers();
		getClassInfo();
		updateSheet();
	});	
	$('#char-race').on('change', function () {
		getPowers();
		//getClassInfo();
		updateSheet();
	});	
	$('#char-level').on('change', function () {
		updateSheet();
	});	
	
	$('#defenses').on('change', updateSheet);	
	
	/* Weapon Stats */
	$('#weapons')
		.on('change','[select-type="wpn"]',function() {
			updateWeapon(this);
		})
		.on('change','[select-type="stat"]',function() {
			weaponInfo();
		});
		
	
	function updateWeapon (ele) {		
		var cls = AM_CLASS[$('#char-class').val()];
		var wpn = $(ele).val().toLowerCase();
		var dmgmult = [1,1,1,1,2,2,2,3,3,3];
		var HotS = ["Dark Elf","Wood Elf","High Elf"];
		var HotSwpn = ["shortsword","longsword","scimitar"]
		
		/* Melee */
		if ($(ele).closest('tr').attr('id')[0] == "m") {
			var data = cls.melee.filter(function (entry) { return entry.name == wpn; });
			var atkstat = $('#melee-atk').val().toLowerCase();
			var dmgstat = $('#melee-dmg').val().toLowerCase();
			var miss = cls.miss.melee;
		} else {
			// assume ranged
			var data = cls.ranged.filter(function (entry) { return entry.name == wpn; });
			var atkstat = $('#ranged-atk').val().toLowerCase();
			var dmgstat = $('#ranged-dmg').val().toLowerCase();
			var miss = cls.miss.ranged;
		}
		
		var id = $(ele).closest('tr').attr('id');
		var lvl = getStat('level');
		var atk = lvl + getStat(atkstat) + data[0].attack;
		var dmg = (lvl + getStat(dmgstat)) * dmgmult[lvl-1];
		
	// Adjust atk and dmg for ELFs HotS ability
		if ($.inArray($('#char-race').val(),HotS) > -1 && $.inArray(data[0].name.toLowerCase(),HotSwpn) > -1) {
			atk -= data[0].attack;
			dmg += data[0].attack == 0 ? 2 : 0;
		}
	
		$('#' + id + 'att').html ( (atk>0 ? '+' : '') + atk);
		$('#' + id + 'hit').html ( lvl + data[0].damage + '+' + dmg );
		$('#' + id + 'mis').html ( miss == true ? lvl : '-' );
	}
	
	function updateScore(ele) {
		var stat = '#' + $(ele).closest('tr').attr('id');
		var score =  parseInt( $(stat + ' input[type="text"]').val(),10 );
		
		if ( $(stat + ' :checked').length > 0 ) {score += 2;}
		
		$(stat + ' [data-name="val"]').html ( score );
		$(stat + ' [data-name="mod"]').html ( getMod(score) );
		
		// Calculate remaining points
		var tot = 0;
		$.each($('input[type="text"]'), function(idx,ele) {
			tot += $(ele).val() > 8 ? $(ele).val() - 8 : 0;
			tot += $(ele).val() > 14 ? $(ele).val()-14 : 0;
			tot += $(ele).val() > 16 ? $(ele).val()-16 : 0;
		}); 
		
		$('#points').html ('Points remaining: ' + (28 - tot) );
		
		updateSheet();
	}
	
/* Update the Character Sheet */	
	function updateSheet()	{
		lockadj();
		statsOther();
		weaponInfo();
	}
		
	function lockadj()	{
	// Lock Stat Adjustment checkbox based on class and race 
	// TODO: Stat Increases for Level > 1
		var stats = [];
		
		$.each(AM_CLASS[$('#char-class').val()].stats, function (idx, stat) {
			stats.push (stat);
		});
		$.each(AM_RACE[$('#char-race').val()].stats, function (idx, stat) {
			stats.push (stat);
		});
		
		$.each($('#stats input[type="checkbox"]'),function(idx,ele) {
			if (stats.indexOf($(ele).closest('tr').attr('id')) == -1) {
				$(ele).attr('disabled',true);
				$(ele).attr('checked',false);
			} else {
				$(ele).attr('disabled',false);
			}
		});
		if ($('#stats :checked').length == 2) {
			$.each($('#stats input:checkbox:not(:checked)'),function(idx,ele) {
				$(ele).attr('disabled',true);
			});
		}
	}
	
	function statsOther()	{
	// Write other useful stats - AC/PD/MD/Hits/Initiative
		var lvl = parseInt($('#char-level').val(),10);
		var cls = $('#char-class').val();
		var stats = {};
		
		stats['str'] = parseInt($('#str [data-name="mod"]').html(),10);
		stats['con'] = parseInt($('#con [data-name="mod"]').html(),10);
		stats['dex'] = parseInt($('#dex [data-name="mod"]').html(),10);
		stats['wis'] = parseInt($('#wis [data-name="mod"]').html(),10);
		stats['int'] = parseInt($('#int [data-name="mod"]').html(),10);
		stats['cha'] = parseInt($('#cha [data-name="mod"]').html(),10);
		
		var hp_mult = [3,4,5,6,8,10,12,16,20,24];
		var hp = (AM_CLASS[cls].hp + stats.con) * hp_mult[lvl-1];
		
		var init = stats.dex + lvl;
		
		// Armor Class (shield and light armor) nn + middle mod of Con/Dex/Wis + Level
		var ac = AM_CLASS[cls].ac[$('#char-arm').val().toLowerCase()][0] + ($('#char-shield').is(':checked')?AM_CLASS[cls].ac['shield'][0]:0) + lvl + [stats.con,stats.dex,stats.wis].sort()[1];
		
		var atk = AM_CLASS[cls].ac['none'][1] + AM_CLASS[cls].ac[$('#char-arm').val().toLowerCase()][1] + ($('#char-shield').is(':checked')?AM_CLASS[cls].ac['shield'][1]:0);
		
		// Physical Defense nn + middle mod of Str/Con/Dex + Level
		var pd = AM_CLASS[cls].pd + lvl + [stats.str, stats.con, stats.dex].sort()[1];
		
		// Mental Defense nn + middle mod of Int/Wis/Cha + Level
		var md = AM_CLASS[cls].md + lvl + [stats.wis,stats.int,stats.cha].sort()[1];
		
		var outp = '<table class="table-condensed">'
		+ '<tr>'
		+ '<th><i class="fa fa-shield"></i> AC</th><td>' + ac + '</td>'
		+ '<th>HP</th><td>' + hp + '</td>'
		+ '</tr>'
		+ '<tr>'
		+ '<th><i class="fa fa-street-view"></i> PD</th><td>' + pd + '</td>'
		+ '<th>Initiative</th><td>' + (init>0?'+':'') + init + '</td>'
		+ '</tr>'
		+ '<tr>'
		+ '<th><i class="fa fa-user"></i> MD</th><td>' + md + '</td>'
		+ '<th>Attack Mod</th><td>' + (atk>0?'+':'') + atk + '</td>';
		+ '</tr>'
		$('#stats-other').html (outp);
	}
	
	function weaponInfo()	{
		$.each($('#weapons [select-type="wpn"]'), function(id, ele) {
			updateWeapon(ele);
		});
	}
	
	function getStat(stat)	{
		if (stat == 'level') {
			return parseInt($('#char-level').val(),10);
		} else {
			return parseInt($('#' + stat + ' [data-name="mod"]').html(),10);
		}
	}
	
	function getPowers()	{
	// Write Powers
		var race = $('#char-race').val();
		var outp = '';
		$.each(AM_RACE[race].power, function (idx, pow) {
			outp += '<h4>' + pow.name + '</h4>';
			outp += '<p>' + pow.a;
			if (typeof pow.c !== 'undefined') { outp += '<p><b>Champion:</b> ' + pow.c; }
		})
		
		$('#char-powers').html (outp);
	}
	
	function getClassInfo()	{
	// Write Class Info, weapons and attack values
	// Get class
		var cls = AM_CLASS[$('#char-class').val()];
		var oupt = '';
	
	// Background
		outp = '<form class="form-inline" role="form"><label for="sel-bg">Background: </label><select class="form-control" id="sel-bg">';
		var sel = Math.floor(Math.random() * cls.background.length);
		$.each(cls.background, function (idx,bg) {
			outp += '<option value="' + bg + '">' + bg.toProperCase() + '</option>';
		});
		outp += '</select></form>';
		
		$('#background').html(outp);
		$('#sel-bg').val(cls.background[sel]);

	// Gear
		$('#equipment').html(cls.gear.text);
	
	// Armour
		$.each($('#char-arm option'), function (idx,arm) {
			if ( $.inArray($(arm).val().toLowerCase(),cls.gear.armor) != -1 ) {
				$(arm).attr('disabled',false);
			} else {
				$(arm).attr('disabled',true);
			}
		});
	// Weapon Options in table - weapon / attribute - show attack and damage values
	// Weapon | Attack (stat) | Hit (stat) | Miss (summary of adjustments?)
		outp = '<table class="table-condensed table-striped">'
			+ '<tr><th>Weapon</th><th>Attack</th><th>Hit</th><th>Miss</th></td>';
		var att = '';
		var dmg = '';
		
		/* Melee table */
		if (cls.gear.melee > 0) {		
			outp += '<tr><th>Melee</th>';
			
			// Attack and Damage Stats
			outp += '<td><select id="melee-atk" select-type="stat">';
			for (var i=0; i<cls.attack.melee.length; i++) {
				outp += '<option>' + cls.attack.melee[i].toProperCase() + '</option>';
			}
			outp += '</select></td>';
			outp += '<td><select id="melee-dmg" select-type="stat">';
			for (var i=0; i<cls.damage.melee.length; i++) {
				outp += '<option>' + cls.damage.melee[i].toProperCase() + '</option>';
			}
			outp += '</select></td>';
			outp += '<td><i class="fa fa-' + (cls.miss.melee == true ? 'check':'times') + '" aria-hidden="true"></i></td></tr>';
			
			// Weapons
			for (var i=0; i<cls.gear.melee; i++) {
				outp += '<tr id="m' + i + '">';
				outp += '<td><select class="form-control" select-type="wpn">';
				$.each(cls.melee, function (idx, wpn) {
					outp += '<option>' + wpn.name.toProperCase() + '</option>';
				})
				outp += '</select></td>';
				outp += '<td id="m' + i + 'att"></td>';
				outp += '<td id="m' + i + 'hit"></td>';
				outp += '<td id="m' + i + 'mis"></td>';
				outp += '</tr>';
			}
		}
		/* Ranged Table */
		if (cls.gear.ranged > 0) {
			outp += '<tr><th>Ranged</th>';
			
			// Attack and Damage Stats
			outp += '<td><select id="ranged-atk" select-type="stat">';
			for (var i=0; i<cls.attack.ranged.length; i++) {
				outp += '<option>' + cls.attack.ranged[i].toProperCase() + '</option>';
			}
			outp += '</select></td>';
			outp += '<td><select id="ranged-dmg" select-type="stat">';
			for (var i=0; i<cls.damage.ranged.length; i++) {
				outp += '<option>' + cls.damage.ranged[i].toProperCase() + '</option>';
			}
			outp += '</select></td>';
			outp += '<td><i class="fa fa-' + (cls.miss.ranged == true ? 'check':'times') + '" aria-hidden="true"></i></td></tr>';
			
			// Weapons
			for (var i=0; i<cls.gear.melee; i++) {
				outp += '<tr id="r' + i + '">';
				outp += '<td><select class="form-control" select-type="wpn">'
				$.each(cls.ranged, function (idx, wpn) {
					outp += '<option>' + wpn.name.toProperCase() + '</option>';
				})
				outp += '</select></td>';
				outp += '<td id="r' + i + 'att"></td>';
				outp += '<td id="r' + i + 'hit"></td>';
				outp += '<td id="r' + i + 'mis"></td>';
				outp += '</tr>';
			}
		}
		outp += '</table>';
		$('#weapons').html (outp);
	}
	
});

function rollStat()	{
	var d1 = rollD(6);
	var d2 = rollD(6);
	var d3 = rollD(6);
	var d4 = rollD(6);
	return (d1 + d2 + d3 + d4 - Math.min (d1,d2,d3,d4));
}
function rollD(size) {
	return (Math.floor(Math.random() * size) + 1);
}

function getMod(stat)	{
	var n = Math.floor( (stat -10)/2 );
	return ( (n>0 ? '+' : '') + n );
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};