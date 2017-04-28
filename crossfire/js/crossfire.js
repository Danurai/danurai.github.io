//_roles
//_metas

$(document).ready(function () {	
// SETUP

// #1 - Pick a role and meta type
// #2 - Build starter deck & shuffle, draw
// #3 #4 - Set health & nuyen
	var plr = new XFPlayer(_metas[0],_roles[0]);
	shuffle(plr.cards.deck);
	for (var i=0; i<_metas[0].startcards; i++)	{
		plr.cards.draw();
	}
	
// #5 - Setup Black Market deck & Black Market
	var deckids = [];
	deckids = [];
	_BMDB = TAFFY(_blackmarket);
	_BMDB({"basic":0}).each(function (bmcard) {
		for (var i=0; i < bmcard.count; i++)	{	deckids.push(bmcard.id);	}
	});
	
	var bmkt = new XFDeck(deckids);
	shuffle(bmkt.deck);
	for (var i=0; i<6; i++)	{	bmkt.draw();	}
	
// #6 - Setup Obstacles - Normal and Hard
	deckids = [];
	_OBS = TAFFY(_obstacles);
	
	var obstacleN = new XFDeck(_OBS({"level":1}).select("id"));
	shuffle(obstacleN.deck);
	
	var obstacleH = new XFDeck(_OBS({"level":2}).select("id"));
	shuffle(obstacleH.deck);
	
// #7
// Setup Crossfire Deck
	deckids = [];
	_XF = TAFFY(_crossfire);
	
	var crossfire = new XFDeck(_XF().select("id"));
	shuffle(crossfire.deck);
	
	
	// #8 play
	/*
	1. Play Cards
	2. Apply Damage
	3. Take Damage
	4. Draw & Buy Cards
	5. End Turn
	*/
	
	
	// log stuff
	console.log (plr);
	console.log (bmkt);
	console.log (obstacleN);
	console.log (obstacleH);
	console.log (crossfire);
	
	$('#output').html (plr.playsheet());
	
});



