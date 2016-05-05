$(document).ready(function () {
	var debug = false;

// Initialise Variables
// Card Lists
	var _location;	
	var _marine;
	var _event;
	var _terrain;
	var _action;
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
	$.ajax("/DA/res/json/actions.txt")
		.done(function(data) {
			_action = TAFFY(data);
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
	var turn;
// Actiondeck {cardnumber:state}
	var actionDeck = {};
	var phaseDeck = [];
	var teams = [];

/*******************
/ Start
*******************/
	$(document).ajaxStop(function () {
		setup(["blue","green","purple"]);
		
		da_refresh();
		
		order_refresh();
		
	})

// Setup a new game
	function setup(teamlist) {
	// #Combat Teams
		teams = teamlist;
		turn = 0;
		
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
		
	// 4. Combat Teams + Orders
		console.log ('Teams: ' + teams);
		tmp = _marine({team:teams}).select('id');
		tmp = shuffle(tmp);
		
		resetOrders()
		console.log (actionDeck);
		
	// 5. FORMATION
		var tmparr = {};
		for (var i=0; i<tmp.length; i++) {
			tmparr = {};
			//marine = {"id":n,"facingL":b,"support":n}
			tmparr['marine']={id:tmp[i],facingL:(i<tmp.length/2),support:0};
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
		
		// match spawn#1, then spawn#2 and update formation
		// PLAYER CHOICE?
		for (var x=0; x<2; x++) {
			$.each(formation,function (i,item) {
				//event.spawn[0]['threat'] + ':' + event.spawn[0]['type']
				if (_terrain({name:item['terrainL']}).first().threat == event.spawn[x]['threat']) {
					for (var s=0; s<currLocation.spawn[event.spawn[x]['type']]; s++) {
						if (blipDeckL.length != 0) {formation[i]['blipL'].push (blipDeckL.pop());}
					}
				}
				if (_terrain({name:item['terrainR']}).first().threat == event.spawn[x]['threat']) {
					for (var s=0; s<currLocation.spawn[event.spawn[x]['type']]; s++) {
						if (blipDeckR.length != 0) {formation[i]['blipR'].push (blipDeckR.pop());}
					}
				}
			})
		}
		
		$("#blipL").html (blipDeckL.length);
		$("#blipR").html (blipDeckR.length);
		$("#blip_deck").html (stealerDeck.length);
		var outp = '<b>' + event.name + '</b>'
			+ '<br>' + threaticon[event.spawn[0]['threat']] + ' ' + event.spawn[0]['type'] 
			+ ' ' + threaticon[event.spawn[1]['threat']] + ' ' + event.spawn[1]['type']
			+ (turn == 0 ? '<span style="color: grey">' : '<span>')
			+ '<br>' + event.swarm[0] + ' ' + (event.action=="move" ? '<i class="fa fa-angle-double-up"></i>' : '<i class="fa fa-undo"></i>')
			+ '<br><div class="small">' + event.text + '</div>'
			+ '</span>';
		
		$("#event_active").html (outp);
		$("#event_deck").html (eventDeck.length);
		
	}

/*********************************************************************
*                    ENGINE                                          *
*********************************************************************/
	
/*****************************************
*  Update Screen
*****************************************/

// Re-draw the playmat
	function da_refresh() {
		$("#playmat").empty();
		$.each(formation,function (i,item) {
			row = buildrow(item);
			$("#playmat").append(row);
		})
		if (debug) {console.log(formation);}
	}
	function buildrow(item) {
	// blipL,locationL,marine,locationR,blipR
		var marine = _marine({id:item['marine']['id']}).first();
		var mdata = '<span class="move clickable" value="-1" title="move up" name="' + marine.id + '"><i class="fa fa-angle-double-up"></i></span>'
			+ '<div>'
			+ (item['marine']['facingL'] ? '<span class="facing clickable" name="' + marine.id + '" ><<</span> <span class="marine-name" id="' + marine.id + '">' + marine.name + '</span>': '<span class="marine-name"  id="' + marine.id + '">' + marine.name +  '</span> <span class="facing clickable" name="' + marine.id + '">>></span>')
			+ '<br>' 
			+ marine.squad + ' ' + marine.team
			+ '</div>'
			+ ' R:' + marine.range
			+ ' S:<span class="support clickable" value="-1" name="' + marine.id + '">[-]</span> ' + item['marine']['support'] + '<span class="support clickable" value="1" name="' + marine.id + '">[+]</span>'
			+ '<br><span class="move clickable" value="1" title="move down" name="' + marine.id + '"><i class="fa fa-angle-double-down"></i></span>';
		mdata = '<td class="form-center marine" name="' + marine.id + '">' + mdata + '</div>';
		
		var tldata = '';
		if (item['blipL'].length > 0) {
			tldata += '<div class="bottomright">'
				+ '<span class="swarm clickable" data-side="L" data-action="flank" data-id="' + marine.id + '"><i class="fa fa-undo" title="flank"></i></span>'
				+ ' <span class="swarm clickable" data-side="L" data-action="movedown" data-id="' + marine.id + '"><i class="fa fa-angle-double-down" title="move"></i></span>'
				+ '</div>'
				+ '<div class="topright">'
				+ '<span class="swarm clickable" data-side="L" data-action="moveup" data-id="' + marine.id + '"><i class="fa fa-angle-double-up" title="move"></i></span>'
				+ '</div>';
		}
		$.each(item['terrainL'],function (t,terrain) {
			var res = _terrain({name:terrain}).first();
			tldata += terrain + ' ' + threaticon[res.threat];
		})
		
		var trdata = '';
		if (item['blipR'].length > 0) {
			trdata += '<div class="topleft">'
				+ '<span class="swarm clickable" data-side="R" data-action="moveup" data-id="' + marine.id + '"><i class="fa fa-angle-double-up" title="move"></i></span>'
				+ ' <span class="swarm clickable" data-side="R" data-action="flank" data-id="' + marine.id + '"><i class="fa fa-undo" title="flank"></i></span>'
				+ '</div>'
				+ '<div class="bottomleft">'
				+ '<span class="swarm clickable" data-side="R" data-action="movedown" data-id="' + marine.id + '"><i class="fa fa-angle-double-down" title="move"></i></span>'
				+ '</div>';
		}
		$.each(item['terrainR'],function (t,terrain) {
			var res = _terrain({name:terrain}).first();
			trdata += terrain + ' ' + threaticon[res.threat];
		})
		
		var blipLdata = '';
		$.each(item['blipL'],function(b,blip){
			blipLdata += '<span class="blip-sel" value="L' + b + '">[ ' + blip + ' ]</span>';
		});
		var blipRdata = '';
		$.each(item['blipR'],function(b,blip){
			blipRdata += '<span class="blip-sel" value="R' + b + '">[ ' + blip + ' ]</span>';
		});
		var outp = '<tr>'
		 + '<td class="form-left" colspan="2">' + blipLdata + ' ' + tldata + '</td>'
		 + mdata
		 + '<td class="form-right" colspan="2">' + trdata + ' ' + blipRdata + '</td>';
		 return (outp);		 
	}

// update action\phase section	
	function order_refresh() {
		var outp = '';
		var ords = '';
		$.each(teams,function (i,tm) {
			ords = '<div style="color: ' + tm + ';"><b>'  + tm.toProperCase() + ' Team Orders</b></div><form>';
			_action({team:tm}).each(function(record) {
				ords += '<input type="radio" name="' + tm + '" value="' + record.number + '" ' + (actionDeck[record.number] ? '' : 'disabled') + ' title="' + record.text + '">' + record.type + ': ' + record.name + '<br>';
			});
			ords += '</form>';
			outp += ords;
		});
		$('#choosephase').html (outp);
	}
	
	function resolveRefresh() {
		var outp = '';
		_action({team:teams}).order('number').each( function (record) {
			if (phaseDeck[record.team] == record.number) {
				outp += '<div style="color: ' + record.team + ';">+++ <b>' + record.number + ':</b> ' + record.name + ' +++ (' + record.type + ')</div>';
			}
		});
		$('#resolvephase').html (outp);
	}
	
	
	
/***********************************
            functions
***********************************/

	/* Orders */
	function addOrder(team,order) {
		phaseDeck[team] = order;
		resolveRefresh();
	}
	function resetOrders() {
		_action({team:teams}).each(function(record) {
			actionDeck[record.number] = phaseDeck[record.team] == record.number ? false : true;
		});
		order_refresh();
	}
	/* Movement - marine */
	function updateSupport(marine_id, value) {
		var i = getMarineIndex(marine_id);
		var item = formation[i];
		
		if (support - value >= 0 && support - value <= _maxsupport && item['marine']['support'] + value >= 0) {
			item['marine']['support'] += value;
			support -= value;
			da_refresh();
			//console.log('Support: ' + support);
			return false;
		}
	}
	function updateFormation(marine_id, value) {
		$.each(formation, function (i,item) {
			if (item['marine']['id'] == marine_id ) {
				if (i+value >= 0 && i+value < formation.length) {
					var tmp = item['marine'];
					formation[i]['marine'] = formation[i+value]['marine'];
					formation[i+value]['marine'] = tmp;
					da_refresh();
					return false;
				}
			}
		});
	}
	function changeFacing(marine_id) {
		$.each(formation, function (i,item) {
			if (item['marine']['id'] == marine_id ) {
				item['marine']['facingL'] = !item['marine']['facingL']
				da_refresh();
				return false;
			}
		});
	}
	/* Movement - Swarm */
	function updateSwarm(marine_id, side, action) {
		var idx = getMarineIndex(marine_id);
		if (action == 'flank') {
			flankSwarm(idx,side);
		} else {
			var value = action == 'moveup' ? -1 : 1 ;
			moveSwarm(idx,side,value);
		}
	}
	function moveSwarm (idx, side, value) {
		var newloc = (idx+value)%formation.length;
		newloc += (newloc < 0 ? formation.length : 0);
		//console.log ('move to ' + newloc);
		if (side == 'R') {
			formation[newloc]['blipR']=formation[newloc]['blipR'].concat(formation[idx]['blipR']);
			formation[idx]['blipR']=[];
		} else {
			formation[newloc]['blipL']=formation[newloc]['blipL'].concat(formation[idx]['blipL']);
			formation[idx]['blipL']=[];
		}
		da_refresh();
	}
	function flankSwarm(idx, side) {
		if (side == 'L') {
			formation[idx]['blipR'] = formation[idx]['blipR'].concat(formation[idx]['blipL']);
			formation[idx]['blipL'] = [];
		} else {
			formation[idx]['blipL'] = formation[idx]['blipL'].concat(formation[idx]['blipR']);
			formation[idx]['blipR'] = [];
		}
		da_refresh();
	}
	/* Slayer */
	function removeMarine(marine_id)	{
		// 1. remove from formation
		// 2. re-align blips and locations
		if (formation.length == 1) {
			alert ('Game Over, Man!');
		} else {
			var idx = getMarineIndex(marine_id);
			shiftFormation(idx);
			da_refresh();
		}
	}
	function removeStealer(id,idx)	{
		// Left or right?
		var blipPile = id.match(/^L/) == 'L' ? 'blipL' : 'blipR';
		formation[idx][blipPile].splice([id.match(/[0-9]+$/)],1);
		da_refresh();
	}
	function shiftFormation(idx)	{
		// First Marine - move items to location 1
		// Last Marine - move items to final location
		// 
		var x = 0;
		switch (idx) {
			case (0):
				x = idx + 1;
				break;
			case (formation.length - 1):
				x = idx - 1;
				break;
		} 
		formation[x]['blipL'] = formation[x]['blipL'].concat(formation[idx]['blipL']);
		formation[x]['blipR'] = formation[x]['blipR'].concat(formation[idx]['blipR']);
		formation[x]['terrainL'] = formation[x]['terrainL'].concat(formation[idx]['terrainL']);
		formation[x]['terrainR'] = formation[x]['terrainR'].concat(formation[idx]['terrainR']);
		formation.splice(idx,1);
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
	function getMarineIndex(m_id) {
		for (var i=0; i<formation.length; i++)	{
			if (formation[i]['marine']['id'] == m_id) {
				return i;
			}
		}
	}
	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	

/*******************************************
*  Listeners
/******************************************/

	$('#choosephase').on('change','[type="radio"]',function() {
		addOrder(this.name, this.value);
	});
	$('#resolve').on('click',function() {
		resetOrders();
	});
	$('#playmat')
	  .on('click','.move',function(event) {
		updateFormation($(this).attr('name'),parseInt($(this).attr('value'),10))
	}).on('click','.support',function() {		
		updateSupport($(this).attr('name'),parseInt($(this).attr('value'),10));
	}).on('click','.swarm',function() {
		updateSwarm($(this).data('id'),$(this).data('side'),$(this).data('action'));
	}).on('click','.facing',function() {
		changeFacing($(this).attr('name'));
	}).on('click','.marine-name',function(event) {
		$('#menu').css({'left':event.pageX +20,'top': Math.max(event.pageY - $('#menu').height() + 20,0)});
		$('#menu').toggle();
		$('#menu-data').val( $('#menu').is(':hidden') ? '' : '{"type":"marine","row":' + $(this).closest('tr').index() + ',"id":"' + this.id + '"}');
	}).on('click','.blip-sel',function(event) {
		$('#menu').css({'left':event.pageX +20,'top': Math.max(event.pageY - $('#menu').height() + 20,0)});
		$('#menu').toggle();
		$('#menu-data').val( $('#menu').is(':hidden') ? '' : '{"type":"genestealer","row":' + $(this).closest('tr').index() + ',"id":"' + $(this).attr('value') + '"}');
	});
	
	$('#menu').on('click','.clickable',function() {
		$('#menu').toggle();
		switch (this.id) {
			case ('btn-slay'):
				var info = JSON.parse($('#menu-data').val());
				console.log (info);
				if (info['type'] == 'marine') {
					removeMarine(info['id']);
				} else {
					removeStealer(info['id'],info['row']);
				}
				break;
			default:
		}
	});
			
	
// Dice roller
	$('#dice').on({
		mousedown: function() {
			$('#dice').html ('');
		},
		mouseup: function() {
			i = Math.floor(Math.random() * 6);
			outp = i + (i>0 && i<4 ? 'X' : '');
			$('#dice').html (outp);
		}
	});
	
// TESTS
	$('#testbutton').on('click',function () {
		// Increase support to 13 - support should not exceed 12
			for (var x=0; x<14; x++)	{
				updateSupport(1,1);
			}
			var res = formation[getMarineIndex(1)]['marine']['support'] == 12 ? 'pass' : 'fail';
			console.log ('Support test 1: ' + res + ' support=' + support);
			
		// Decrease support to -1 - support should not exceed 0
			for (var x=0; x<14; x++)	{
				updateSupport(1,-1);
			}
			res = formation[getMarineIndex(1)]['marine']['support'] == 0 ? 'pass' : 'fail';
			console.log ('Support test 2: ' + res + ' support=' + support);
			
		// Increase Support for 1 marine
			updateSupport(1,1);
			
		
		// Increase support to 13 - support should not exceed 11
			for (var x=0; x<14; x++)	{
				updateSupport(2,1);
			}
			var res = formation[getMarineIndex(2)]['marine']['support'] == 11 ? 'pass' : 'fail';
			console.log ('Support test 3: ' + res + ' support=' + support);
			
		// Decrease support to -1 - support should not exceed 0
			for (var x=0; x<14; x++)	{
				updateSupport(2,-1);
			}
			res = formation[getMarineIndex(2)]['marine']['support'] == 0 ? 'pass' : 'fail';
			console.log ('Support test 4: ' + res + ' support=' + support);
	});
});

var threaticon = [
'',
'<i class="fa fa-battery-quarter" style="color:green;"></i>',
'<i class="fa fa-battery-half" style="color:yellow;"></i>',
'<i class="fa fa-battery-three-quarters" style="color:orange;"></i>',
'<i class="fa fa-battery-full" style="color:red;"></i>']

