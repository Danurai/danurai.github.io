//props to https://www.phpied.com/3-ways-to-define-a-javascript-class/

function anrDeck(cardIDs)	{
	this.initdeck = cardIDs.slice();
	this.deck = cardIDs.slice();
	this.hand = [];
	this.discard = [];
	this.meta = {};
	
	this.draw = function(idx=0)	{
		if (this.deck.length > 0)	{
			this.hand.push(idx == 0 ? this.deck.shift() : this.deck.splice(idx,1));
			return true;
		} else	{
			return false;
		}
	}

	this.getHand = function() {
		return this.hand;
	}
	this.getDeck = function()	{
		return this.deck;
	}
	this.cardsInDeck = function()	{
		return this.deck.length;
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
	this.faction = faction;
	this.maxclicks = faction == 'corp' ? 3 : 4;
	this.clicks = this.maxclicks;
	this.deck;
	
	this.addDeck = function (deck)	{
		this.deck = deck;
	}
	this.addCreds = function (n)	{
		this.creds += n;
	}
	this.addScore = function(n)	{
		this.score += n;
	}
	this.addClicks = function (n)	{
		this.clicks += n;
	}
	this.getFaction = function()	{
		return this.faction;
	}
	this.getCreds = function()	{
		return this.creds;
	}
	this.getScore = function()	{
		return this.score;
	}
}