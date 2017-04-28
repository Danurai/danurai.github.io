//props to https://www.phpied.com/3-ways-to-define-a-javascript-class/

function XFPlayer(metaType,roleType)	{		//OptionalArg = 'defaultValue'
	this.metaId = metaType.id;
	this.roleID = roleType.id;
	this.hits = this.maxhits = metaType.starthits;
	this.nuyen = metaType.startnuyen;
	//this.startcards = metaType.startcards;
	this.cards = new XFDeck(roleType.startdeck);
}

function XFDeck(cardIDs)	{
	this.deck = cardIDs.slice();
	this.hand = [];
	this.discard = [];
	
	this.draw = function()	{
		if (this.deck.length == 0)	{
			this.deck = shuffle(this.discard.splice());
		}
		this.hand.push(this.deck.shift());
	}
	this.discard = function(id)	{
		
	}
}

/* Fisher-Yates Shuffle  */
function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle…
	while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}