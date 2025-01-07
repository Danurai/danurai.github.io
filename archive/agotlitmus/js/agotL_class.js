//props to https://www.phpied.com/3-ways-to-define-a-javascript-class/

var _carddata = TAFFY(CARDS);

function gameDeck(cardIDs)	{
	this.cardcodes = cardIDs.slice();
	this.decklist = [];	// Card Data in ID order
	this.deck = [];		// List of card IDs in Deck
	this.hand = [];		// List of card IDs in Hand/Play
	this.discard = [];	// List of card IDs in Discard
	this.meta = {};
	
	this.resetCards = function () 	{
		this.decklist = [];	// Card Data in ID order
		this.deck = [];		// List of card IDs in Deck
		this.hand = [];		// List of card IDs in Hand/Play
		this.discard = [];	// List of card IDs in Discard
		for (var i=0; i<this.cardcodes.length; i++)	{
			this.decklist.push(_carddata({"code":this.cardcodes[i]}).first());
			this.deck.push(i);
		}
		shuffle(this.deck);
	}
	
	this.setMeta = function(key,val)	{
		this.meta[key] = val;
	}
	this.getMeta = function(key)	{
		return this.meta[key];
	}
	
	this.draw = function (idx = 0)	{
		if (this.deck.length > 0)	{
			this.hand.push(idx == 0 ? this.deck.shift() : this.deck.splice(idx,1));
			return this.hand.slice(-1)[0].toString();
		} else	{
			return -1;
		}
	}
	this.discardCard = function(cardid)	{
		var idx = this.hand.indexOf(cardid);
		this.discard.push(this.hand.splice(idx,1));
	}
	this.getCard = function (id)	{
		return this.decklist[id];
	}
	this.cardsInDiscard = function()	{
		return this.discard.length;
	}
}


/* Fisher-Yates Shuffle  */
function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle…
	while (m) {

		// Pick a random remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

function anrPlayer(faction)	{
	this.creds = 5;
	this.score = 0;
	this.mu = 4;
	this.faction = faction;
	this.maxclicks = faction == 'corp' ? 3 : 4;
	this.clicks = this.maxclicks;
	this.deck;
	
	this.addDeck = function (deck)	{
		this.deck = deck;
	}
	
	this.addCreds = function (n)	{
		this.creds = Math.max(this.creds+n, 0);
	}
	this.getCreds = function()	{
		return this.creds;
	}
	this.addScore = function(n)	{
		this.score = Math.max(this.score+n, 0);
	}
	this.getScore = function()	{
		return this.score;
	}
	this.addClicks = function (n)	{
		this.clicks = Math.max(this.clicks+n, 0);
	}
	this.addMU = function (n)	{
		this.mu = Math.max(this.mu+n, 0)
	}
	this.getFaction = function()	{
		return this.faction;
	}
	this.getMU = function()	{
		return this.mu;
	}
	this.reset = function()	{
		this.creds = 5;
		this.score = 0;
		this.mu = 4;
		return true;
	}
}

function agot2Player(faction)	{
	this.power = 0;
	this.gold = 8;
	this.faction = faction;
	
	this.reset = function()	{
		this.power = 0;
		this.gold = 8;
	}
	
	this.setCreds = function (n)	{
		this.gold = parseInt(n,10);
	}
	this.addCreds = function (n)	{
		this.gold = Math.max(this.gold + n, 0);
	}
	this.getCreds = function()	{
		return this.gold;
	}
	
	this.addScore = function(n)	{
		this.power = Math.max(this.power + n, 0);
	}
	this.getScore = function()	{
		return this.power;
	}
}