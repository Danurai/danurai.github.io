_roles = [{
	"id": 1,
	"rolename": "Street Samurai",
	"rolecode": "S",
	"rolecolour":	"000000",
	"startdeck": [1, 1 ,1 ,1 ,2 ,3 ,4]
}, {
	"id": 2,
	"rolename": "Mage",
	"rolecode": "M",
	"rolecolour":	"333399",
	"startdeck": [2, 2, 2, 2, 1, 3, 4]
}, {
	"id": 3,
	"rolename": "Decker",
	"rolecode": "D",
	"rolecolour":	"006600",
	"startdeck": [3, 3, 3, 3, 1, 2, 4]
}, {
	"id": 4,
	"rolename": "Face",
	"rolecode": "F",
	"rolecolour":	"cc0000",
	"startdeck": [4, 4, 4, 4, 1, 2, 3]
}];

_metas = [{
	"id": 1,
	"meta": "Elf",
	"sex": "F",
	"starthits": 4,
	"startcards": 4,
	"startnuyen": 4
}, {
	"id": 2,
	"meta": "Human",
	"sex": "M",
	"starthits": 5,
	"startcards": 4,
	"startnuyen": 3
}, {
	"id": 3,
	"meta": "Troll",
	"sex": "F",
	"starthits": 7,
	"startcards": 3,
	"startnuyen": 2
}, {
	"id": 4,
	"meta": "Ork",
	"sex": "M",
	"starthits": 6,
	"startcards": 5,
	"startnuyen": 1
}];

_obstacles = [{
	"id": 1,
	"name": "Out of Ammo",
	"level": 1,
	"role": "S",
	"type": "Tech",
	"nuyen": 4,
	"attack": 1,
	"ability": "You can't play more than 2 cards on your turn.",
	"track": ["W", "3"]
}, {
	"id": 2,
	"name": "Corporate Adept",
	"level": 1,
	"role": "M",
	"type": "Human",
	"nuyen": 4,
	"attack": 1,
	"ability": "You can't be healed or heal any runner.",
	"track": ["M", "4"]
}, {
	"id": 3,
	"name": "Ork Fixer",
	"level": 1,
	"role": "F",
	"type": "Ork",
	"nuyen": 4,
	"attack": 1,
	"ability": "You can't buy cards.",
	"track": ["S", "3"]
}, {
	"id": 4,
	"name": "Deckhead",
	"level": 1,
	"role": "S",
	"type": "Human",
	"nuyen": 4,
	"attack": 1,
	"ability": "",
	"track": ["2", "H", "1", "W"]
}, {
	"id": 5,
	"name": "Astral Shiver",
	"level": 1,
	"role": "M",
	"type": "6th World",
	"nuyen": 4,
	"attack": 1,
	"ability": "",
	"track": ["3", "M", "M"]
}, {
	"id": 6,
	"name": "Sudden Fade",
	"level": 1,
	"role": "H",
	"type": "Tech",
	"nuyen": 4,
	"attack": 1,
	"ability": "",
	"track": ["3", "H", "H"]
}, {
	"id": 7,
	"name": "Eye Alarm",
	"level": 1,
	"role": "F",
	"type": "6th World",
	"nuyen": 4,
	"attack": 1,
	"ability": "",
	"track": ["2", "S", "1", "M"]
}, {
	"id": 8,
	"name": "Ancients Ganger",
	"level": 1,
	"role": "S",
	"type": "Elf",
	"nuyen": 5,
	"attack": 2,
	"ability": "",
	"track": ["M", "3", "W"]
}, {
	"id": 9,
	"name": "Fire Adept",
	"level": 1,
	"role": "M",
	"type": "Human",
	"nuyen": 5,
	"attack": 2,
	"ability": "",
	"track": ["3", "M", "W"]
}, {
	"id": 10,
	"name": "Trip Beams",
	"level": 1,
	"role": "H",
	"type": "Tech",
	"nuyen": 5,
	"attack": 2,
	"ability": "",
	"track": ["S", "3", "H"]
}, {
	"id": 11,
	"name": "Gutter Punks",
	"level": 1,
	"role": "S",
	"type": "Human",
	"nuyen": 5,
	"attack": 1,
	"ability": "DEFEATED: Choose a runner. That runner heals 1 HP.",
	"track": ["2", "W", "3"]
}, {
	"id": 13,
	"name": "Customs Officer",
	"level": 1,
	"role": "F",
	"type": "Human",
	"nuyen": 5,
	"attack": 1,
	"ability": "DEFEATED: Chose another runner. That runner draws 1 card.",
	"track": ["3", "S", "2"]
}, {
	"id": 14,
	"name": "Elf Shaman",
	"level": 1,
	"role": "M",
	"type": "Elf",
	"nuyen": 6,
	"attack": 1,
	"ability": "When THIS attacks, it heals 1 level.",
	"track": ["2", "2", "S", "2", "M"]
}, {
	"id": 15,
	"name": "Light Combat Drone",
	"level": 1,
	"role": "H",
	"type": "Tech",
	"nuyen": 6,
	"attack": 1,
	"ability": "FLIPPED: You discard 1 card.",
	"track": ["4", "H", "1", "W", "1"]
}, {
	"id": 16,
	"name": "Demolittions Expert",
	"level": 1,
	"role": "F",
	"type": "Human",
	"nuyen": 8,
	"attack": 2,
	"ability": "DEFEATED: Deal 1 level of damage to another obstacle.",
	"track": ["3", "2", "S", "2", "W"]
}, {
	"id": 17,
	"name": "Aerial Combat Drone",
	"level": 1,
	"role": "H",
	"type": "Tech",
	"nuyen": 8,
	"attack": 2,
	"ability": "DEFEATED: Choose another runner. That runner draws 1 card, then discards 1 card.",
	"track": ["2", "H", "1", "W", "1", "H", "1", "S"]
}, {
	"id": 41,
	"name": "Lightning Mage",
	"level": 2,
	"role": "M",
	"type": "Human",
	"nuyen": 3,
	"attack": 1,
	"ability": "Runners can’t be healed.",
	"track": ["3", "M", "M", "1"]
}, {
	"id": 42,
	"name": "Knight Errant Field Agent",
	"level": 2,
	"role": "F",
	"type": "Dwarf",
	"nuyen": 3,
	"attack": 2,
	"ability": "",
	"track": ["4", "H", "3", "S"]
}, {
	"id": 43,
	"name": "Armored Troopers",
	"level": 2,
	"role": "S",
	"type": "Human",
	"nuyen": 4,
	"attack": 2,
	"ability": "DEFEATED: Choose a runner. That runner heals 2 HP.",
	"track": ["4", "W", "2", "S", "2", "W"]
}, {
	"id": 44,
	"name": "Spirit of Fire",
	"level": 2,
	"role": "M",
	"type": "6th World",
	"nuyen": 4,
	"attack": 2,
	"ability": "FLIPPED: Deal 1 level of damage to another obstacle.",
	"track": ["3", "4", "W", "2", "M"]
}, {
	"id": 45,
	"name": "Warded Decker",
	"level": 2,
	"role": "H",
	"type": "Human",
	"nuyen": 4,
	"attack": 2,
	"ability": "FLIPPED: You draw 2 cards, then discard 1 card.",
	"track": ["2", "M", "S", "3", "3", "H"]
}, {
	"id": 46,
	"name": "Chromed Samurai",
	"level": 2,
	"role": "S",
	"type": "Human",
	"nuyen": 5,
	"attack": 2,
	"ability": "",
	"track": ["4", "H", "W", "2", "M", "2", "W"]
}, {
	"id": 47,
	"name": "Drone Rigger",
	"level": 2,
	"role": "H",
	"type": "Human",
	"nuyen": 5,
	"attack": 2,
	"ability": "",
	"track": ["5", "W", "1", "H", "3", "H"]
}, {
	"id": 48,
	"name": "Security Chief",
	"level": 2,
	"role": "F",
	"type": "Human",
	"nuyen": 5,
	"attack": 2,
	"ability": "",
	"track": ["4", "S", "W", "3", "S", "2"]
}];

_blackmarket = [{
	"id": 1,
	"role": "S",
	"basic": 1,
	"type": "Weapon",
	"name": "Quick Shot",
	"count": 8,
	"cost": 0,
	"damage": ["S"],
	"notes": ""
}, {
	"id": 2,
	"role": "M",
	"basic": 1,
	"type": "Spell",
	"name": "Mana",
	"count": 8,
	"cost": 0,
	"damage": ["M"],
	"notes": ""
}, {
	"id": 3,
	"role": "H",
	"basic": 1,
	"type": "Hacking",
	"name": "Mark",
	"count": 8,
	"cost": 0,
	"damage": ["H"],
	"notes": ""
}, {
	"id": 4,
	"role": "F",
	"basic": 1,
	"type": "Skill",
	"name": "Street Smarts",
	"count": 8,
	"cost": 0,
	"damage": ["F"],
	"notes": ""
}, {
	"id": 5,
	"role": "S",
	"basic": 0,
	"type": "Weapon",
	"name": "Monofilament Whip",
	"count": 3,
	"cost": 2,
	"damage": ["S"],
	"notes": "Move obstacle to you, which can't attack if you played another WEAPON card this turn"
}, {
	"id": 6,
	"role": "S",
	"basic": 0,
	"type": "Weapon",
	"name": "Remington Roomsweeper",
	"count": 3,
	"cost": 3,
	"damage": ["S", "1", "*"],
	"notes": "* = Deal this damage to all obstacles facing 1 runner"
}, {
	"id": 7,
	"role": "S",
	"basic": 0,
	"type": "Weapon",
	"name": "Katana",
	"count": 3,
	"cost": 4,
	"damage": ["S", "S"],
	"notes": "Other WEAPON cards get + 1 damage"
}, {
	"id": 8,
	"role": "S",
	"basic": 0,
	"type": "Weapon",
	"name": "RA SM-4 Sniper Rifle",
	"count": 2,
	"cost": 4,
	"damage": ["*"],
	"notes": "* = Deal last two levels of damage"
}, {
	"id": 9,
	"role": "S",
	"basic": 0,
	"type": "Weapon",
	"name": "Covering Fire",
	"count": 3,
	"cost": 5,
	"damage": ["S", "1"],
	"notes": "Heal other runner 1 - ASSIST: Obstacle can't attack & B damage"
}, {
	"id": 10,
	"role": "S",
	"basic": 0,
	"type": "Weapon",
	"name": "Aztechnology Striker",
	"count": 1,
	"cost": 9,
	"damage": ["S", "S", "2"],
	"notes": "Move # of obstacles equal to runner count in front of youObstacles can't attack this turn"
}, {
	"id": 11,
	"role": "M",
	"basic": 0,
	"type": "Spell",
	"name": "Clairvoyance",
	"count": 3,
	"cost": 2,
	"damage": ["M"],
	"notes": "Draw 1, discard 1 - ASSIST: Draw 1, discard 1, & L Damage"
}, {
	"id": 12,
	"role": "M",
	"basic": 0,
	"type": "Spell",
	"name": "Guiding Spirit",
	"count": 3,
	"cost": 3,
	"damage": ["M", "1"],
	"notes": "Discard and replace hand - Requires SPELL to Buy"
}, {
	"id": 13,
	"role": "M",
	"basic": 0,
	"type": "Spell",
	"name": "Stunbolt",
	"count": 2,
	"cost": 3,
	"damage": ["L", "X"],
	"notes": "Reveal and replace top card on deck: X Damage = Cost of reveal"
}, {
	"id": 14,
	"role": "M",
	"basic": 0,
	"type": "Spell",
	"name": "Deathtouch",
	"count": 4,
	"cost": 4,
	"damage": ["L", "L", "X"],
	"notes": "Reveal and replace top 3 cards in choice order: X = # SPELL cards"
}, {
	"id": 15,
	"role": "M",
	"basic": 0,
	"type": "Spell",
	"name": "Lightning Bolt",
	"count": 2,
	"cost": 6,
	"damage": ["*"],
	"notes": "* = Deal two levels of damage - Requires SPELL to Buy"
}, {
	"id": 16,
	"role": "M",
	"basic": 0,
	"type": "Spell",
	"name": "Fireball",
	"count": 1,
	"cost": 9,
	"damage": ["L", "L", "2", "*"],
	"notes": "* = Deal 1 level of damage to 3 different obstacles"
}, {
	"id": 17,
	"role": "H",
	"basic": 0,
	"type": "Hacking",
	"name": "Icon Grab",
	"count": 4,
	"cost": 2,
	"damage": ["H", "*"],
	"notes": "* = If you played another HACKING card + B, L, or R damage"
}, {
	"id": 18,
	"role": "H",
	"basic": 0,
	"type": "Hacking",
	"name": "Jacked In",
	"count": 4,
	"cost": 3,
	"damage": ["H", "1"],
	"notes": "Discard one card to return Jacked In from discard"
}, {
	"id": 19,
	"role": "H",
	"basic": 0,
	"type": "Hacking",
	"name": "Backdoor",
	"count": 2,
	"cost": 4,
	"damage": ["H", "2"],
	"notes": "ASSIST: Cancel obstacle abilities + G damage"
}, {
	"id": 20,
	"role": "H",
	"basic": 0,
	"type": "Hacking",
	"name": "Retrieval Agent",
	"count": 2,
	"cost": 4,
	"damage": ["H", "1"],
	"notes": "Return a HACKING card from discard"
}, {
	"id": 21,
	"role": "H",
	"basic": 0,
	"type": "Hacking",
	"name": "Pair Programming",
	"count": 2,
	"cost": 5,
	"damage": ["H", "H"],
	"notes": "Play card worth up to 3¥ from other runner's discard, or discard a HACKING card to play other's discarded card of any cost"
}, {
	"id": 22,
	"role": "H",
	"basic": 0,
	"type": "Hacking",
	"name": "Hack the World",
	"count": 1,
	"cost": 9,
	"damage": ["H", "H", "2"],
	"notes": "Play Black Market card of 6¥ or less and discard to Black Market"
}, {
	"id": 23,
	"role": "F",
	"basic": 0,
	"type": "Skill",
	"name": "Black Market Contacts",
	"count": 3,
	"cost": 2,
	"damage": ["F"],
	"notes": "Buy a card from Black Market into hand during Play Cards phase"
}, {
	"id": 24,
	"role": "F",
	"basic": 0,
	"type": "Skill",
	"name": "Negotiation",
	"count": 3,
	"cost": 3,
	"damage": ["F"],
	"notes": "Next SKILL card purchase cost -1¥ for each SKILL card played - ASSIST: Current runner pays -1¥ less on next buy + R1 Damage"
}, {
	"id": 25,
	"role": "F",
	"basic": 0,
	"type": "Skill",
	"name": "Coordinated Attack",
	"count": 3,
	"cost": 4,
	"damage": ["F", "1"],
	"notes": "Another runner draws 1 card and plays 1 card"
}, {
	"id": 26,
	"role": "F",
	"basic": 0,
	"type": "Skill",
	"name": "Doc Wagon Contract",
	"count": 3,
	"cost": 5,
	"damage": [],
	"notes": "Heal 2 anyone - ASSIST: Heal 1 and do R damage"
}, {
	"id": 27,
	"role": "F",
	"basic": 0,
	"type": "Skill",
	"name": "Press the Advantage",
	"count": 2,
	"cost": 5,
	"damage": ["F"],
	"notes": "Draw cards until duplicate color. Discard last dup, keep rest."
}, {
	"id": 28,
	"role": "F",
	"basic": 0,
	"type": "Skill",
	"name": "Hero Move",
	"count": 1,
	"cost": 9,
	"damage": ["F", "F", "2"],
	"notes": "Each runner draws a card"
}];

_crossfire = [{
	"id": 1,
	"name": "Take the Merchandise and Run",
	"continuous": "Each runner with 5 HP or more takes 2 damage and places the top card of the Black Market deck into their hand.",
	"timebomb": "When this card is placed in the discard, each runner takes 1 damage.",
	"crossfirelevel": "",
	"crossfire": "",
	"flavour": "We thought we'd be smart and pick up Ares' new sniper rifle on the black market as soon as it showed up. So did everybody else. Adrenaline hit me so hard, I swear I outran a few bullets."
}, {
	"id": 2,
	"name": "Timebomb",
	"continuous": "",
	"timebomb": "When this card is placed in the discard, each runner takes 1 damage.",
	"crossfirelevel": 8,
	"crossfire": "Instead of taking 1 damage, each runner takes 3 damage.",
	"flavour": "You wanna know how I lost my hand? I’ll tell you how I lost my hand. What kind of asshole sets his bomb in metric time?"
}, {
	"id": 3,
	"name": "Instinct",
	"continuous": "The current runner takes 1 damage at the end of their turn if they played cards of more than one color that turn.",
	"timebomb": "",
	"crossfirelevel": 4,
	"crossfire": "Instead of 1 damage, the current runner takes 2 damage.",
	"flavour": "The middle of a shootout isn’t the right time to mess around with new toys. Stick to what you know."
}, {
	"id": 4,
	"name": "No Holding Back",
	"continuous": "Each turn, immediately before the Draw & Buy step, the current runner takes 1 damage for each card in their hand.",
	"timebomb": "",
	"crossfirelevel": "",
	"crossfire": "",
	"flavour": "My opinion is, you don’t go in guns blazing, you don’t deserve to survive the fight. What are you waiting for?"
}, {
	"id": 5,
	"name": "Win One, Lose One",
	"continuous": "At the start of each turn, the current runner gains 1[nuyen] and discards 1 card.",
	"timebomb": "",
	"crossfirelevel": "",
	"crossfire": "",
	"flavour": "We were sent to retrieve one commlink, but the body we found had two. We took both—never hurts to have something you can sell for quick cash."
}, {
	"id": 6,
	"name": "Chummers",
	"continuous": "The Attack Strength of each Human obstacle is increased by +1.",
	"timebomb": "",
	"crossfirelevel": 5,
	"crossfire": "In addition, reveal cards from the Normal Obstacle deck until you reveal a Human obstacle and place it facing the runner whose role color matches it. Discard the rest.",
	"flavour": "I don’t know how that ugly, lying, back-stabbing, thick-headed son-ofa-bitch made any friends. I guess even the lousiest bastard has some chummers that will stand up for him in a fight."
}, {
	"id": 7,
	"name": "Enemy Comms",
	"continuous": "The Attack Strength of each Green obstacle and Red obstacle is increased by +1.",
	"timebomb": "",
	"crossfirelevel": 4,
	"crossfire": "In addition, each Green obstacle and Red obstacle heals all levels.",
	"flavour": "When we pinned two guards by the chemical tank and a few others approached and lobbed smoke grenades right into our position, we learned we hadn’t jammed their communications as well as we thought."
}, {
	"id": 8,
	"name": "Unfriendly Fire",
	"continuous": "The Attack Strength of each Black obstacle and Blue obstacle is increased by +1.",
	"timebomb": "",
	"crossfirelevel": 4,
	"crossfire": "In addition, each Black obstacle and Blue obstacle heals all levels.",
	"flavour": "I don’t know what the hell just happened! It’s like their guns drew guns of their own!"
}]

