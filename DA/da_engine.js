$(document).ready(function () {
// Initialise Variables
// Card Lists
	var _location;	
	var _marine;
	var _event;
	var _terrain;
	var _stealer = ['b','b','b','b','b','b','b','b','b',
		'c','c','c','c','c','c','c','c','c',
		's','s','s','s','s','s','s','s','s',
		't','t','t','t','t','t','t','t','t'];
		
	$.ajax("/DA/res/json/locations.txt")
		.done (function(data) {
			_location = TAFFY(data);
		});
	$.ajax("/DA/res/json/marines.txt")
		.done(function(data) {
			_marine = TAFFY(data);
		});
	$.ajax("/DA/res/json/events.txt")
		.done(function(data) {
			_event = TAFFY(data);
		});
	$.ajax("/DA/res/json/terrain.txt")
		.done(function(data) {
			_terrain = TAFFY(data);
		});
// Globals	
	var _maxsupport = 12;
	var _squads = 6;
	
// decks
	var eventDeck = [];
	var currEvent;
	var stealerDeck = [];
	var stealerDiscard = [];
	var locationDeck = [];
	var currLocation;
	var formation = [];
	var blipDeckL = [];
	var blipDeckR = [];
	var support;

/*******************
/ Start
*******************/
	$(document).ajaxStop(function () {
		setup(["red","blue","green","purple"]);
		
		da_refresh();
	})

// Setup a new game
	function setup(teams) {
	// #Combat Teams
		
	// 1. Setup Decks - Shuffle stealer and Event decks
		for (var i=1; i<=30; i++) {eventDeck.push(i)}
		eventDeck = shuffle(eventDeck);
		stealerDeck = shuffle(_stealer);
		
		$('#blip_deck').html (stealerDeck.length);
		$('#event_deck').html (eventDeck.length);
		
	// 2. Starting Location
		var locid = (6-teams.length)+1;
		// MOVING 
		currLocation = _location({id:locid}).first();
		
		$("#location_active").html (currLocation.name + '<br>' + currLocation.spawn['major'] +  ' ' + currLocation.spawn['minor']);
		
	// 3. Setup location deck
		for (var i=0; i<currLocation['setup'].length; i++) {
			var cards = _location({deck:currLocation['setup'][i]}).select('id');
			x = Math.floor(Math.random() * cards.length);
			locationDeck.push(cards[x]);
		}
		
		$("#location_deck").html ('Deck ids: ' + locationDeck);
		
		/*$.each(locationDeck,function(i,item) {
			console.log(currLocation['setup'][i] + ': ' + _location({id:item}).first().name);
		});	*/
		
	// 4. Combat Teams
		console.log ('Teams: ' + teams);
		tmp = _marine({team:teams}).select('name');
		tmp = shuffle(tmp);
	// 5. FORMATION
		var tmparr = {};
		for (var i=0; i<tmp.length; i++) {
			tmparr = {};
			tmparr['marine_id'] = tmp[i];
			tmparr['facingL'] = i < tmp.length/2;
			tmparr['support'] = 0;
			tmparr['blipL']=[];
			tmparr['blipR']=[];
			tmparr['terrainL']=[];
			tmparr['terrainR']=[];
			formation.push(tmparr);
		}
	// 6. Support tokens
		support = _maxsupport;
	// 7. Terrain (MOVING - make function)
		console.log('Terrain: ' + currLocation['terrain'] + ' ' + currLocation['terrainlocation']);
		formation[currLocation['terrainlocation'][0]-1]['terrainL'].push (currLocation['terrain'][0]);
		formation[currLocation['terrainlocation'][1]-1]['terrainL'].push (currLocation['terrain'][1]);
		formation[formation.length - currLocation['terrainlocation'][2]]['terrainR'].push (currLocation['terrain'][2]);
		formation[formation.length - currLocation['terrainlocation'][3]]['terrainR'].push (currLocation['terrain'][3]);
	// 7. Blips (MOVING - make function)
		blipDeckL =  [];
		for (var i=0; i<currLocation['blipcount'][0]; i++) {
			blipDeckL.push (stealerDeck.pop())
			if (stealerDeck.length == 0) {
				stealerDeck = shuffle(stealerDiscard);
				stealerDiscard = [];
			}
		}
		blipDeckR = [];
		for (var i=0; i<currLocation['blipcount'][1]; i++) {
			blipDeckR.push (stealerDeck.pop())
			if (stealerDeck.length == 0) {
				stealerDeck = shuffle(stealerDiscard);
				stealerDiscard = [];
			}
		}
		
		$("#blipL").html (blipDeckL.length);
		$("#blipR").html (blipDeckR.length);
		$("#blip_deck").html (stealerDeck.length);
	
	// 8. Draw Event and spawn Stealers
		// EVERY TURN
		currEvent = eventDeck.pop();
		
		var event = _event({id:currEvent}).first();
		$("#event_active").html (event.name + '<br>' + event.spawn[0]['threat'] + ':' + event.spawn[0]['type'] + ' ' +  + event.spawn[1]['threat'] + ':' + event.spawn[1]['type'] )
		$("#event_deck").html (eventDeck.length);
		
	}

// Re-draw the playmat
	function da_refresh() {
		$("#playmat").empty();
		$.each(formation,function (i,item) {
			row = buildrow(item);
			$("#playmat").append(row);
		})
		console.log(formation);
	}
	
	function buildrow(item) {
	// blipL,locationL,marine,locationR,blipR
		var mdata = item['marine_id'] + ' (' + item['support'] + ')';
		var tldata = '';
		$.each(item['terrainL'],function (t,terrain) {
			var res = _terrain({name:terrain}).first();
			tldata += terrain + ' ' + threaticon[res.threat];
		})
		var trdata = '';
		$.each(item['terrainR'],function (t,terrain) {
			var res = _terrain({name:terrain}).first();
			trdata += terrain + ' ' + threaticon[res.threat];
		})
		var outp = '<tr>'
		 + '<td class="form-left" colspan="2">' + item['blipL'] + ' | ' + tldata + '</td>'
		 + '<td class="form-center">' + (item['facingL'] ? '<< ' + mdata : mdata + ' >>') + '</div>'
		 + '<td class="form-right" colspan="2">' + trdata + ' | ' + item['blipR'] + '</td>';
		 return (outp);		 
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

var threaticon = [
'',
'<i class="fa fa-battery-quarter" style="color:green;"></i>',
'<i class="fa fa-battery-half" style="color:yellow;"></i>',
'<i class="fa fa-battery-three-quarters" style="color:orange;"></i>',
'<i class="fa fa-battery-full" style="color:red;"></i>']