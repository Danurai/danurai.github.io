//props to https://www.phpied.com/3-ways-to-define-a-javascript-class/

function XFGame()	{
	// add player
	// setup decks
	
}

// Shadowrun CrossFire (XF) Player Class
function XFPlayer(metaType,roleType)	{		//OptionalArg = 'defaultValue'
	this.meta = metaType;
	this.role = roleType;
	this.hits = this.maxhits = metaType.starthits;
	this.nuyen = metaType.startnuyen;
	this.cards = new XFDeck(roleType.startdeck);
	
	this.playsheet_info = function() {
		var outp;
		
		outp = '<div>' + this.meta.meta + ' - ' + this.role.rolename + '</div>'
			+ '<div>' + this.hits + '/' + this.maxhits + ' hits'
			+ '<br>' + this.nuyen + ' nuYen';
			+ '<br>Deck: (' + this.cards.cardsInDeck() + ')'
			+ '</div>';
		return outp;
	}
	this.playsheet_hand = function()	{
		var outp = '';;
		var card;
			
		$.each(this.cards.getHand(), function (idx, crdID)	{
			card = _BMDB({"id":crdID}).first()
			outp += '<img class="card-bmkt" data-id="' + card.id + '" alt="' + card.name + '"></img>'	// src="img\\bmkt_' + ('00' + crd.id).substring(crd.id.toString().length) + '.png"></img>';
		})
		return outp;				
	}
}

// Shadowrun CrossFire (XF) Deck Class
function XFDeck(cardIDs)	{
	this.deck = cardIDs.slice();
	this.hand = [];
	this.discard = [];
	
	this.draw = function()	{
		if (this.deck.length == 0)	{
			this.deck = shuffle(this.discard.splice());
		}
		this.hand.push(this.deck.shift());
		return this.hand.slice(-1)[0];
	}
	this.discard = function(id)	{
		this.discard.push( this.hand.splice(id,1) );
	}
	this.getHand = function() {
		return this.hand;
	}
	this.cardsInDeck = function()	{
		return this.deck.length;
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