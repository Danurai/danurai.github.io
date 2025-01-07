//props to https://www.phpied.com/3-ways-to-define-a-javascript-class/

function gameDeck(cardIDs)	{
	this.initdeck = cardIDs.slice();
	this.deck = cardIDs.slice();
	this.hand = [];
	this.discard = [];
	this.meta = {};
	
	this.draw = function(idx=0)	{
		if (this.deck.length > 0)	{
			this.hand.push(idx == 0 ? this.deck.shift() : this.deck.splice(idx,1));
			return this.hand.slice(-1)[0].toString();
		} else	{
			return "00000";
		}
	}

	this.getHand = function() {
		return this.hand;
	}
	this.getDeck = function()	{
		return this.deck;
	}
	this.getCards = function()	{
		return this.initdeck;
	}
	this.cardsInDeck = function()	{
		return this.deck.length;
	}
	this.cardsInDiscard = function()	{
		return this.discard.length;
	}
	
	this.setMeta = function (key,value)	{
		this.meta[key] = value;
	}
	this.getMeta = function (key)	{
		return this.meta[key];
	}
	this.resetCards = function()	{
		this.deck = this.initdeck.slice();
		this.hand = [];
		this.discard = [];
		shuffle(this.deck);
	}
	this.returnToDeck = function (code,top=false)	{
		// Base on card code, can be more specific using hand Index
		var idx = this.hand.indexOf(code);
		if (idx == -1)	{	// no match
			return false;
		} else {
			this.deck.splice(0,0,this.hand.splice(idx,1));
			if (!top) {shuffle(this.deck)};
			return true;
		}
	}
	this.discardCard = function (code)	{
		// Base on card code, can be more specific using hand Index
		var idx = this.hand.indexOf(code);
		if (idx == -1)	{	// no match
			return false;
		} else {
			this.discard.push(this.hand.splice(idx,1));
			return true;
		}
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