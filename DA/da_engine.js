
	$.get("/DA/marines.txt", function (data,status) {
		_marine = TAFFY(data);
	});
	
	var locationdeck = [];
	$.get("/DA/location.txt", function (data,status) {
		_location = TAFFY(data);
	});

$(document).ready(function () {
// Initialise Variables
	var _location;
	var _marine;
	// 9xClaw, 9xTail, 9xBite, 9xSkull
	var _stealers = [
		'b','b','b','b','b','b','b','b','b',
		'c','c','c','c','c','c','c','c','c',
		's','s','s','s','s','s','s','s','s',
		't','t','t','t','t','t','t','t','t']
	var _events = [];
	for (var i=1; i<=30; i++) {_events.push(i)}
	var _maxsupport = 12;
	var _squads = 6;
	
	
		setup();

	
	function setup() {
	// 1. Setup Decks - Shuffle stealer and Event decks
		var stealers = shuffle(_stealers);
		var events = shuffle(_events);
		
		console.log ('Stealer deck: ' + stealers);
		console.log ('Event deck: ' + events);
		
	// 2. Starting Location
		var activeloc = _location({id:1}).first();
		console.log ('Active Location: ' + activeloc.id);
		
		
	// 3. Setup location deck
		console.log (_location);
		var locationdeckids = [];
		for (var i=0; i<activeloc['setup'].length; i++) {
			var cards = _location({deck:activeloc['setup'][i]}).select('id');
			x = Math.floor(Math.random() * 3);
			console.log (x)
			locationdeckids.push(cards[x]);			
		}
		console.log ('Deck ids: ' + locationdeckids);
		
	// 4. Combat Teams
		console.log (_marines);
	}
	
	
/***********************************
functions
*************************************/

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
});