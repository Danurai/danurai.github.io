
{
// Action: clear action list
// Attack: Temporary Attack Array, refresh on formation update, use to show which swarms have attacked

// EV: Rescue Space Marine...
// Special Menu - add clickable names & info on discarded Marines. (Deactivate after use)

// ++ Alt 'Skins' - Wrath of Amaerthis
// ++ Alt 'Skins' - Dark Souls
// ++ Alt 'Skins' - Expansions

// Actions
// AA: Reorganize Move to anywhere in the formation.
// AA: Forward Scouting - view the top card of the Event deck and place at top or bottom
// AA: limit support to 'supportable' terrain

// Events
// EV: Second Wind - flag marine with effect - Roll 0 misses.
// EV: Gun Jam - block action
// Event card Null Swarm ?
// EV: player choice on blip pile
// NG: Automate Events

// Terrain
// Artefact - assign to Space Marine

// TRAVEL: Door action

// ++ Display: Location Text, terrain text
// ++ Event Text: replace Instinct (bold) [0] [1] [skull]



/* DONE */
// AA: Activate - Add support token to terrain
// ++ Display Phase Indicator/turn/support tokens
// EV: H: Intimidation - Shuffle stealer into smallest blip pile
// EV: H: Temporary Sanctuary (as intimidation) - manual
// EV: Full Scan - Discard one from a blip pile
// EV: The Swarm - Place 2 cards into each blip pile
// ++ Resolve Events - clear box (2)
// ++ Resolve Actions: add checkbox
// AA: Target Lock: Add a support token to a swarm, remove when swarm is defeated
// Change Terrain NAME to ID (file and script)
// TT: Discard A Terrain Card
}

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
	var _phase = ['Choose Actions','Resolve Actions','Attack','Event']; // Attack - set temporary array before attacking ;) Event - Resolve, Spawn(user input?), Move

// load json
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
	var eventDiscard = [];
	var currEvent;
	var stealerDeck = [];
	var stealerDiscard = [];
	var locationDeck = [];
	var currLocation;
	var voidLock;
	var formation = [];
	var blipDeckL = [];
	var blipDeckR = [];
	var support;
	var turn;
	var phase;
	var actionDeck = {};				// Actiondeck {cardnumber:state}
	var phaseDeck = [];
	var teams = [];
	var marineDiscard = [];
	
// Save\Load
	var savedstate = {};

/*******************
       Start
*******************/
	$(document).ajaxStop(function () {
		
		//setup(["blue","green","red"]);
		setup(["yellow","gray","purple"]);
		da_refresh();
		order_refresh();

	})

// Setup a new game
	function setup(teamlist) {
	// Combat Teams
		teams = teamlist;
		turn = 0;
		phase = 0;
		
	// 1. Setup Decks - Shuffle stealer and Event decks
		for (var i=1; i<=30; i++) {eventDeck.push(i)}
		eventDeck = shuffle(eventDeck);
		stealerDeck = shuffle(_stealer);
				
	// 2. Starting Location
		voidLock = (6-teams.length)+1;
		currLocation = _location({id:voidLock}).first();
		
		
	// 3. Setup location deck
		for (var i=0; i<currLocation['setup'].length; i++) {
			var cards = _location({deck:currLocation['setup'][i]}).select('id');
			x = Math.floor(Math.random() * cards.length);
			locationDeck.push(cards[x]);
		}
				
	// 4. Combat Teams + Orders
		console.log ('Teams: ' + teams);
		tmp = _marine({team:teams}).select('id');
		tmp = shuffle(tmp);
		
		resetOrders()
		// Hide menu
		$('#ordermenu').css('bottom', ( $('#ordertable').outerHeight() + 15 )* -1);
		console.log (actionDeck);
		
	// 5. FORMATION
		var tmparr = {};
		for (var i=0; i<tmp.length; i++) {
			tmparr = {};
			//marine = {"id":n,"facingL":b,"support":n}
			tmparr['marine']={id:tmp[i],facingL:(i<tmp.length/2),support:0};
			tmparr['blipL']=[];
			tmparr['blipR']=[];
			tmparr['blipSupport'] = [0,0];
			tmparr['terrainL']=[];	// {id:n,support:n}
			tmparr['terrainR']=[];	// {id:n,support:n}
			formation.push(tmparr);
		}
	// 6. Support tokens
		support = _maxsupport;
		
	// 7. replaced by travelFunctions 
		travelFunctions();
		
	// 8. Draw Event and spawn Stealers
		drawEvent();
		spawnEvent();
	}

/*********************************************************************
*                    ENGINE                                          *
*********************************************************************/
	
/*****************************************
*  Update Screen
*****************************************/

// Re-draw the playmat
	function da_refresh() {
	/* Head */
		$('#addinfo').html ('Turn: <b>' + turn + ' </b>Phase:<b> ' + _phase[phase] + ' </b>Support Pool:<b> ' + support + ' </b>Total Losses:<b> ' + marineDiscard.length + '</b>');
		$('#blip_discard').html ('<span class="counter-value">' +  stealerDiscard.length + '</span>');
		
		$('#blip_deck').html ('<span class="counter-value">' + stealerDeck.length + '</span>');
		//$("#location_deck").html ('Deck ids: ' + locationDeck);
		$('#event_deck').html ('<div class="topleft counter"><span class="counter-value">' + eventDeck.length + '</span></div><div class="topright"></div>');
		
		var blipLbuttons = '<div class="topright">' 
			+ '<i class="fa fa-level-down clickable btn-card" data-side="L" data-action="add" title="Add Blip"></i>'
			+ '<i class="fa fa-trash clickable btn-card" data-side="L" data-action="remove" title="Discard Blip"></i>'
			+ '</div>';
		var blipLcounter = '<div class="topleft counter"><span class="counter-value">' + blipDeckL.length + '</span></div>';
		$("#blipL").html (blipLcounter + blipLbuttons);
		
		var locData = '<div>'
			+ currLocation.name 
			+ '<span style="font-size: 12px; line-height: 1;"><br>' + currLocation.text + '</span>'
			+ '<br><i class="fa fa-caret-square-o-down spawn-major"></i>:' + currLocation.spawn['major'] +  '  <i class="fa fa-caret-square-o-down spawn-minor"></i>:' + currLocation.spawn['minor'] + '</div>'
			+ '<div class="clickable topright" id="travel" title="Travel!"><i class="fa fa-fast-forward btn-card"></i>'
			+ '</div>';
		
		$("#location_active").html (locData);
		
		var blipRbuttons = '<div class="topright">'
			+ '<i class="fa fa-level-down clickable btn-card" data-side="R" data-action="add" title="Add Blip"></i>'
			+ '<i class="fa fa-trash clickable btn-card" data-side="R" data-action="remove" title="Discard Blip"></i>'
			+ '</div>';
		var blipRcounter = '<div class="topleft counter"><span class="counter-value">' + blipDeckR.length + '</span></div>';
		$("#blipR").html (blipRcounter + blipRbuttons);
		
		var event = _event({id:currEvent}).first();
		var outp = '<div class="topoffset"><b>' + event.name + '</b>'
			+ '<br><span title="' + event.spawn[0]['type'].toProperCase() + ' spawn">'
			+ threaticon[event.spawn[0]['threat']] + ' <i class="fa fa-caret-square-o-down spawn-' + event.spawn[0]['type'] + '"></i></span>'
			+ '&nbsp;&nbsp;&nbsp;&nbsp;' 
			+ '<span title="' + event.spawn[1]['type'].toProperCase() + ' spawn">'
			+ threaticon[event.spawn[1]['threat']] + ' <i class="fa fa-caret-square-o-down spawn-' + event.spawn[1]['type'] + '"></i></span>'
			+ (turn == 1 ? '<div style="color: #AAAAAA;">' : '<div>')
			+ event.swarm[0] + ' ' + (event.action=="move" ? '<i class="fa fa-angle-double-up"></i>' : '<i class="fa fa-undo"></i>')
			+ '<br></div>'
			+ '<div class="small">' + event.text + '</div>'
			+ '</div>'
			+ '<div class="topright">'
			+ '<i class="fa fa-level-down clickable btn-card" id="drawevent" title="Draw"></i>'
			+ '<i class="fa fa-fast-forward clickable btn-card" id="spawnevent" title="Apply Spawn Event"></i>'
			+ '</div>';
		$("#event_active").html (outp);
	
		
	/* playmat */
		$("#playmat").empty();
		$.each(formation,function (i,item) {
			row = buildrow(item);
			$("#playmat").append(row);
		})
		if (debug) {console.log(formation);}
	}
	function buildrow(item) {
	// Blip | Terrain | Marine | Terrain  | Blip | _empty_
	
		/* Marine */
		var marine = _marine({id:item['marine']['id']}).first();
		var act_id = parseInt(phaseDeck[marine.team],10);
		var action = _action({id:act_id}).first();
		// da_drawing.js
		mdata = drawMarine(marine, item['marine'],action);
		
		/* Terrain: Left */
		var tldata = '';
		tldata += '<div class="spawn bottomleft clickable" data-id="' + marine.id + '" data-side="L" title="Spawn"><i class="fa fa-plus-circle"></i></div>';
		
		tldata += '<div style="float: right;">'
		$.each(item['terrainL'],function (t,terrain) {
			var res = _terrain({id:terrain.id}).first();
			tldata += '<span class="clickable terrain" data-id="' + res.id +'" data-side="L">'
				+ res.name
				+ (res.support ? '(' + terrain.support + ') ' : ' ')
				+ threaticon[res.threat]
				+ '</span>';
		})
		tldata += '</div>';
		
		//tldata = drawTerrain(item.terrainL);
		
		/* Terrain: Right */
		var trdata = '';
		trdata += '<div class="spawn bottomright clickable" data-id="' + marine.id + '" data-side="R" title="Spawn"><i class="fa fa-plus-circle"></i></div>'
		
		trdata += '<div style="float: left;">'
		$.each(item['terrainR'],function (t,terrain) {
			var res = _terrain({id:terrain.id}).first();
			trdata += '<span class="clickable terrain" data-id="' + res.id +'" data-side="R">'
				+ res.name
				+ (res.support ? '(' + terrain.support + ') ' : ' ')
				+ threaticon[res.threat]
				+ '</span>';
		})
		trdata += '</div>';
		
		//trdata =  drawTerrain(item.terrainR);
		
		var blipLdata = '';
		if (item['blipL'].length > 0) {
			blipLdata += '<div style="float: left;">';
			$.each(item['blipL'],function(b,blip){
				blipLdata += '<span class="blip-sel clickable" value="L' + b + '">' + getBlipImg(blip) + '</span>';
			});
			blipLdata += item['blipSupport'][0] > 0 ? ' (' + item['blipSupport'][0] + ')' : '';
			blipLdata += '</div>';
			
			// Blip Buttons
			blipLdata += '<div class="bottomright">'
				+ '<span class="swarm clickable" data-side="L" data-action="flank" data-id="' + marine.id + '">'
				+ '<i class="fa fa-undo" title="flank"></i>'
				+ '</span>'
				+ '<span class="swarm clickable" data-side="L" data-action="movedown" data-id="' + marine.id + '">'
				+ '<i class="fa fa-angle-double-down" title="move"></i>'
				+ '</span>'
				+ '</div>';
			blipLdata += '<div class="topright">'
				+ '<span class="swarm clickable" data-side="L" data-action="moveup" data-id="' + marine.id + '">'
				+ '<i class="fa fa-angle-double-up" title="move"></i>'
				+ '</span>'
				+ '</div>';
		}
		
		var blipRdata = '';
		if (item['blipR'].length > 0) {
			blipRdata += '<div style="float: right;">';
			$.each(item['blipR'],function(b,blip){
				blipRdata += '<span class="blip-sel clickable" value="R' + b + '">' + getBlipImg(blip) + '</span>';
			});
			blipRdata += item['blipSupport'][1] > 0 ? ' (' + item['blipSupport'][1] + ')' : '';
			blipRdata += '</div>';
			
			// Blip Buttons
			blipRdata += '<div class="bottomleft">'
				+ '<span class="swarm clickable" data-side="R" data-action="movedown" data-id="' + marine.id + '">'
				+ '<i class="fa fa-angle-double-down" title="move"></i>'
				+ '</span>'
				+ '<span class="swarm clickable" data-side="R" data-action="flank" data-id="' + marine.id + '">'
				+ '<i class="fa fa-undo" title="flank"></i>'
				+ '</span>'
				+ '</div>';
			blipRdata += '<div class="topleft">'
				+ '<span class="swarm clickable" data-side="R" data-action="moveup" data-id="' + marine.id + '">'
				+ '<i class="fa fa-angle-double-up" title="move"></i>'
				+ '</span>'
				+ '</div>';
		}
		
		var outp = '<tr>'
		 + '<td class="form-left" colspan="2">' + blipLdata + ' ' + tldata + '</td>'
		 + mdata
		 + '<td class="form-right">' + trdata + ' ' + blipRdata + '</td>'  //colspan="2"
		 + '<td></td>';
		 return (outp);		 
	}
	
// update action\phase section	
	function order_refresh() {
		var outp = '';
		var ords = '';
		
		
		$.each(teams,function (i,tm) {
			ords = '<div style="color: ' + tm + ';"><b>'  + tm.toProperCase() + ' Team Orders</b></div><form>';
			_action({team:tm}).each(function(record) {
				ords += '<span class="actionCard" id="' + record.id + '"><input type="radio" name="' + tm + '" value="' + record.number + '" ' + (actionDeck[record.number] ? '' : 'disabled') + '>' + record.type + ': ' + record.name + '</span><br>';
			});
			ords += '</form>';
			outp += ords;
		});
		$('#choosephase').html (outp);
		$('#resolvephase').html ('');
	}	
	function resolveRefresh() {
		var outp = '';
		_action({team:teams}).order('number').each( function (record) {
			if (phaseDeck[record.team] == record.number) {
				outp += '<div style=color: ' + record.team + ';"><span class="actionCard" id="' + record.id + '"><input type="checkbox"></input> +++ <b>' + record.number + ':</b> ' + record.name + ' +++ (' + record.type + ')</span></div>';
			}
		});
		$('#resolvephase').html (outp);
	}
	
	
	
/***********************************
            functions
***********************************/
	/* Display */
	function getBlipImg(blip)	{
		var img = '';
		switch (blip)	{
			case 'b':
				img = '<img src="/DA/res/img/tongue_icon.png" class="icon"></img>';
				break;
			case 'c':
				img = '<img src="/DA/res/img/claw_icon.png" class="icon"></img>';
				break;
			case 's':
				img = '<img src="/DA/res/img/skull_icon.png" class="icon""></img>';
				break;
			case 't':
				img = '<img src="/DA/res/img/tail_icon.png" class="icon"></img>';
				break;
			default:
				img='[' + blip + ']';
		}
		return img;
	}

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
	
	/* Blip Piles */
	function returnBlip(idx,id,side) {
		var blipDeck = side == 'L' ? blipDeckL : blipDeckR;
		var blipSide = 'blip' + id.match(/[LR]/);
		var blipID = id.match(/[0-9]+/);
		blipDeck.push (formation[idx][blipSide][blipID]);
		formation[idx][blipSide].splice(blipID,1);
		da_refresh();
	}
	function discardBlip(side) {
		var blipDeck = side == 'L' ? blipDeckL : blipDeckR;
		if (blipDeck.length > 0) {
			stealerDiscard.push (blipDeck.shift());
		}
	}
	function addBlip(side) {
		var blipDeck = side == 'L' ? blipDeckL : blipDeckR;
		if (stealerDeck.length == 0) {
			stealerDeck = stealerDiscard.slice(0);
			stealerDiscard.length = 0;
			stealerDeck = shuffle(stealerDeck);
		}
		blipDeck.push (stealerDeck.shift());
	}
	
	/* Movement - marine */
	function updateSupport(idx, value) {
		var item = formation[idx];
		
		if (support - value >= 0 && support - value <= _maxsupport && item['marine']['support'] + value >= 0) {
			item['marine']['support'] += value;
			support -= value;
			da_refresh();
		}
	}
	function updateTerrainSupport(idx, id, side, value) {
		id = parseInt(id,10);
		if (_terrain({'id':id}).select('support')[0] != false) {
			var item = formation[idx]
			var terrain = side == 'L' ? 'terrainL' : 'terrainR';
			var tidx = 0;
			for (x=0; x<item[terrain].length; x++) {
				if (item[terrain][x]['id'] == id) {
					tidx = x;
				}
			}
			if (support - value >= 0 && support - value <= _maxsupport && item[terrain][tidx] ['support']+ value >= 0) {
				item[terrain][tidx]['support'] += value;
				support -= value;
				da_refresh();
			}
		}
	}
	function updateSwarmSupport(idx,side,value) {
		var swarmid = side == 'L' ? 0 : 1;
		if (support - value >= 0 && support - value <= _maxsupport && formation[idx]['blipSupport'][swarmid] + value >= 0) {
			formation[idx]['blipSupport'][swarmid] += value;
			support -= value;
			da_refresh();
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
			marineDiscard.push(marine_id);
			shiftFormation(idx);
			da_refresh();
		}
	}
	function removeStealer(id,idx)	{
		// Left or right?
		var blipPile = id.match(/^L/) == 'L' ? 'blipL' : 'blipR';
		var supportid = id.match(/^L/) == 'L' ? 0 : 1;
		stealerDiscard.push(formation[idx][blipPile][id.match(/[0-9]+$/)]);
		formation[idx][blipPile].splice([id.match(/[0-9]+$/)],1);
		
		if (formation[idx][blipPile].length == 0) {
			support += formation[idx]['blipSupport'][supportid];
			formation[idx]['blipSupport'][supportid] = 0;
		}
		da_refresh();
	}
	function removeTerrain(id,idx,side)	{
		id = parseInt(id,0);
		var terrain = side == 'L' ? 'terrainL' : 'terrainR';
		$.each(formation[idx][terrain], function(i,item) {
			if (item.id == id) {
				/* return support tokens and remove*/
				support += item.support;
				formation[idx][terrain].splice(i);
			}
		});
		da_refresh();
	}
	function shiftFormation(idx)	{
		// First Marine - move items to location 1
		// Last Marine - move items to final location
		var x = 0;
		if (idx == 0) {
			x = idx + 1;
		} else {
			if (idx == formation.length - 1) {
				x = idx - 1;
			} else {
				if (idx>formation.length/2) {
					x = idx + 1;
				} else {
					x = idx - 1;
				}
			}
		}
		formation[x]['blipL'] = formation[x]['blipL'].concat(formation[idx]['blipL']);
		formation[x]['blipR'] = formation[x]['blipR'].concat(formation[idx]['blipR']);
		formation[x]['terrainL'] = formation[x]['terrainL'].concat(formation[idx]['terrainL']);
		formation[x]['terrainR'] = formation[x]['terrainR'].concat(formation[idx]['terrainR']);
		formation.splice(idx,1);
	}
	
	/* Events */
	function drawEvent() {
		eventDiscard.push(currEvent);
		if (eventDeck.length == 0)	{
			eventDeck = shuffle(eventDiscard);
			eventDiscard = [];
		}
		currEvent = eventDeck.pop();
		turn ++;
		da_refresh()
	}
	function spawnEvent() {
		var event = _event({id:currEvent}).first();
		// Spawn: match spawn#1, then spawn#2 and update formation
		/* PLAYER CHOICE? */
		for (var x=0; x<2; x++) {
			$.each(formation,function (i, item) {
				/* Left formation */
				$.each(item['terrainL'], function(t,terrain) {
					if (_terrain({id:terrain.id}).first().threat == event.spawn[x]['threat']) {
						for (var s=0; s<currLocation.spawn[event.spawn[x]['type']]; s++) {
							if (blipDeckL.length != 0) {formation[i]['blipL'].push (blipDeckL.pop());}
						}
					}
				});
				/* Right formation */
				$.each(item['terrainR'], function(t,terrain) {
					if (_terrain({id:terrain.id}).first().threat == event.spawn[x]['threat']) {
						for (var s=0; s<currLocation.spawn[event.spawn[x]['type']]; s++) {
							if (blipDeckR.length != 0) {formation[i]['blipR'].push (blipDeckR.pop());}
						}
					}
				});
			});
		}
		//da_refresh();
		// Move
		// If the swarm is already behind the Space Marine, it does not move.
		if (turn > 1) {
			var tmpBlipL = Array.apply(null, Array(formation.length)).map(function() { return [] });
			var tmpBlipR = Array.apply(null, Array(formation.length)).map(function() { return [] });;
			var newloc;
			$.each(formation,function (i,item) {
				if ($.inArray(event['swarm'][0],item['blipL']) > -1) {
					if (event['action'] == "move") {
						newloc = i==formation.length-1 ? 0 : i+1;
						tmpBlipL[newloc] = item['blipL'];
						item['blipL'] = [];
					} else { //flank
						if (item['marine']['facingL']) {
							tmpBlipR[i] = item['blipL'];
							item['blipL'] = [];
						}
					}
				}
				if ($.inArray(event['swarm'][0],item['blipR']) > -1) {
					if (event['action'] == "move") {
						newloc = i==0 ? formation.length-1 : i-1;
						tmpBlipR[newloc] = item['blipR'];
						item['blipR'] = [];
					} else { //flank
						if (!item['marine']['facingL']) {
							tmpBlipL[i] = item['blipR'];
							item['blipR'] = [];
						}
					}
				}
			});
			for (var i=0; i<formation.length; i++) {
				formation[i]['blipL'] = formation[i]['blipL'].concat(tmpBlipL[i]);
				formation[i]['blipR'] = formation[i]['blipR'].concat(tmpBlipR[i]);
			}
		}
		da_refresh();
	}
	function spawnOne(m_id,side) {
		var idx = getMarineIndex(m_id);
		if (side == 'L') {
			if (blipDeckL.length != 0) {formation[idx]['blipL'].push (blipDeckL.pop());}
		} else {
			if (blipDeckR.length != 0) {formation[idx]['blipR'].push (blipDeckR.pop());}
		}
		da_refresh();
	}
	
	/* Travel! */
	function travel() {
		// 1. Place new Location Card
		if (locationDeck.length > 0) {
			var locid = locationDeck.shift();
			currLocation = setLocation(locid);
			travelFunctions();
			da_refresh();
		}
	}
	function travelFunctions() {
		// 2. Place Terrain Cards
			// remove existing locations
			for (var i=0; i<formation.length; i++) {
				formation[i]['terrainL'].length = 0;
				formation[i]['terrainR'].length = 0;
			}
			console.log('Terrain: ' + currLocation['terrain'] + ' ' + currLocation['terrainlocation']);
			formation[ Math.min(currLocation['terrainlocation'][0],formation.length) -1 ]['terrainL'].push ({'id':(currLocation['terrain'][0]),'support':0});
			formation[ Math.min(currLocation['terrainlocation'][1],formation.length) -1 ]['terrainL'].push ({'id':(currLocation['terrain'][1]),'support':0});
			formation[ Math.max(formation.length - currLocation['terrainlocation'][2],0) ]['terrainR'].push ({'id':(currLocation['terrain'][2]),'support':0});
			formation[ Math.max(formation.length - currLocation['terrainlocation'][3],0) ]['terrainR'].push ({'id':(currLocation['terrain'][3]),'support':0});
		// 3. Discard/Refill Blip piles
			// Discard
			while (blipDeckL.length > 0)	{ stealerDiscard.push (blipDeckL.pop()); }
			while (blipDeckR.length > 0)	{ stealerDiscard.push (blipDeckR.pop()); }
			// Refill
			for (var i=0; i<currLocation['blipcount'][0]; i++) {
				if (stealerDeck.length == 0) {
					stealerDeck = stealerDiscard.slice(0);
					stealerDiscard.length = 0;
					stealerDeck = shuffle(stealerDeck);
				}
				blipDeckL.push (stealerDeck.shift());
			}
			for (var i=0; i<currLocation['blipcount'][1]; i++) {
				if (stealerDeck.length == 0) {
					stealerDeck = stealerDiscard.slice(0);
					stealerDiscard.length = 0;
					stealerDeck = shuffle(stealerDeck);
				}
				blipDeckR.push (stealerDeck.shift());
			}
			
		// 4. Follow Location "Upon Entering" Ability (if necessary)
	}
	function getCard(deck,discard)	{
		if (deck.length == 0) {
			deck = shuffle(discard.slice(0));
			discard.length = 0;
		}
		return deck.shift();
	}
	function setLocation(locid)	{
		// Get major\minor spawn from voidlock, everything else from new location
		var voidInfo = _location({id:voidLock}).first();
		var locInfo = _location({id:locid}).first();
		locInfo['spawn']=voidInfo['spawn'];
		return locInfo;
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

	$('#event_active').on('click','#drawevent',drawEvent);
	$('#event_active').on('click','#spawnevent',spawnEvent);
	$('#location_active').on('click','#travel',travel);
	
	$('#playmat')
		.on('click','.move',function(event) {
			updateFormation($(this).attr('name'),parseInt($(this).attr('value'),10))
		})
		.on('click','.support',function() {		
			updateSupport($(this).attr('name'),parseInt($(this).attr('value'),10));
		})
		.on('click','.swarm',function() {
			updateSwarm($(this).data('id'),$(this).data('side'),$(this).data('action'));
		})
		.on('click','.facing',function() {
			changeFacing($(this).attr('name'));
		})
		.on('click','.marine-name',function(event) {
			$('#menu-marine').css({'left':event.pageX +20,'top': Math.max(event.pageY - $('#menu-marine').height() + 20,0)});
			$('#menu-marine').toggle();
			$('#menu-marine-data').val( $('#menu').is(':hidden') ? '' : '{"type":"marine","row":' + $(this).closest('tr').index() + ',"id":"' + this.id + '"}');
		})
		.on('click','.blip-sel',function(event) {
			$('#menu-stealer').css({'left':event.pageX +20,'top': Math.max(event.pageY - $('#menu-stealer').height() + 20,0)});
			$('#menu-stealer').toggle();
			$('#menu-stealer-data').val( $('#menu').is(':hidden') ? '' : '{"type":"genestealer","row":' + $(this).closest('tr').index() + ',"id":"' + $(this).attr('value') + '"}');
		})
		.on('click','.spawn',function () {
			spawnOne($(this).data('id'),$(this).data('side'));
		})
		.on('click','.terrain',function () {
			$('#btn-remove').show();
			$('#menu-support').css({'left':event.pageX +20,'top': Math.max(event.pageY - $('#menu-terrain').height() + 20,0)});
			$('#menu-support').toggle();
			$('#menu-support-data').val( $('#menu-support').is(':hidden') ? '' : '{"type":"terrain","row":' + $(this).closest('tr').index() + ',"id":"' + $(this).data('id') + '","side":"' + $(this).data('side') + '"}');
		})
		.on('click','.m_support',function () {
			$('#btn-remove').hide();
			$('#menu-support').css({'left':event.pageX +20,'top': Math.max(event.pageY - $('#menu-support').height() + 20,0)});
			$('#menu-support').toggle();
			$('#menu-support-data').val( $('#menu-support').is(':hidden') ? '' : '{"type":"marine","row":' + $(this).closest('tr').index() + ',"id":"' + $(this).data('id') + '","side":""}');
		})
		.on('click','.order', function () {
			var m_id = parseInt($(this).closest('td').attr('name'),10);
			var marine = _marine({id:m_id}).first();
			var outp = marine.team.toProperCase() + " Team Orders";
			outp += '<table class="table-condensed"><tr>';
			_action({team:marine.team}).each(function (record) {
				outp += '<td class="order" id=' + record.id + ' name="' + marine.team + '">'
					+ '<div class="topright">' + record.number + '</div>'
					+ '<span style="color: ' + marine.team + ';"><b>' + record.name + '</b>'
					+ '<br><i>' + record.type + '</i></span>'
					+ '<p class="small">' + record.text
					+ '</td>';
			});
			outp += '</tr></table>';
			$('#teamorders').html (outp);
			$('#teamorders').toggle();
		});
	$('#menu-marine').on('click','.clickable',function() {
		$('#menu-marine').toggle();
		var data = JSON.parse($('#menu-marine-data').val());
		switch (this.id) {
			case ('btn-slay'):
				removeMarine(data['id']);
				break;
			default:
		}
	});
	$('#menu-support').on('click','.clickable',function() {
		$('#menu-support').toggle();
		var data = JSON.parse($('#menu-support-data').val());
		var amt = 0;
		switch (this.id) {
			case 'support-add':
				amt = 1;
				break;
			case 'support-sub':
				amt = -1;
				break;
			case 'btn-remove':
				removeTerrain(data.id,data.row,data.side);
			default:
				amt = 0;
				break;
		}
		if (amt != 0) {
			switch (data.type) {
				case 'terrain':
					updateTerrainSupport(data.row,data.id,data.side,amt)
					break;
				case 'marine':
					updateSupport(data.row,amt)
					break;
				case 'swarm':
					break;
			}
		}
	});
	$('#menu-stealer').on('click','.clickable',function() {
		$('#menu-stealer').toggle();
		var data = JSON.parse($('#menu-stealer-data').val());
		switch (this.id) {
			case ('btn-slay'):
				removeStealer(data.id,data.row);
				break;
			case ('btn-rtnblipL'):
				returnBlip(data.row,data.id,'L');
				break;
			case ('btn-rtnblipR'):
				returnBlip(data.row,data.id,'R');
				break;
			case('support-add'):
				updateSwarmSupport(data.row,data.id.match(/[LR]/),1);
				break;
			case('support-sub'):
				updateSwarmSupport(data.row,data.id.match(/[LR]/),-1);
				break;
			default:
				break;
		}
	});
	
	$('#blipL').on('click','.clickable',function() {
		switch ($(this).data('action')) {
			case 'add':
				addBlip('L');
				break;
			case 'remove':
				discardBlip('L');
				break;
			default:
				break;
		}
		da_refresh();
	});
	$('#blipR').on('click','.clickable',function() {
		switch ($(this).data('action')) {
			case 'add':
				addBlip('R');
				break;
			case 'remove':
				discardBlip('R');
				break;
			default:
				break;
		}
		da_refresh();
	});

	// Orders
	$('#teamorders').on('click','td',function() {
		if ($(this).hasClass('order-disabled') == false) {
			$(this).parent().find('td').removeClass('order-selected');
			$(this).addClass('order-selected');
			addOrder($(this).attr('name'), this.id);
			$('#teamorders').toggle();
			da_refresh();
		}
   });
	
	$('#choosephase').on('change','[type="radio"]',function() {
		addOrder(this.name, this.value);
	});
	$('#resolve').on('click', resetOrders);
	
	

// QTIPS
	$('#choosephase, #resolvephase').on("mouseenter","span[class=actionCard]", function() {
		var act_id = parseInt($(this).attr('id'),10);
		var action = _action({id:act_id}).select('text');
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text: action
			},
			style: {
				classes: 'qtip-dark qtip-rounded qtip-shadow',
				tip: false
			}
		});
	});
	$('#playmat')
		.on('mouseenter','.terrain',function() {
			var ter_id = $(this).data('id');
			var terrain = _terrain({id:ter_id}).select('text');
			if (terrain != '') {
				$(this).qtip({
					overwrite: false,
					show: {
						ready: true
					},
					content: {
						text: terrain
					},
					style: {
						classes: 'qtip-dark qtip-rounded qtip-shadow',
						tip: false
					}
				});
			}
		})
		.on('mouseenter','span[class=action]', function () {
			var act_id = parseInt($(this).attr('id'),10);
			var action = _action({id:act_id}).select('text');
			$(this).qtip({
				overwrite: false,
				show: {
					ready: true
				},
				content: {
					text: action
				},
				style: {
					classes: 'qtip-dark qtip-rounded qtip-shadow',
					tip: false
				}
			});
		});
	$('img').on('mouseenter',function () {
		var tt = $(this).data('tt');
		if (tt !== '') {
			$(this).qtip({
				overwrite: false,
				show: {
					ready: true
				},
				content: {
					text: tt
				},
				style: {
					classes: 'qtip-dark qtip-rounded qtip-shadow',
					tip: false
				},
				position: {
					my: 'bottom center',
					at: 'bottom center',
					target: $(this)
				}
			});
		}
	});

	
// Dice roller
	$('#dice').on({
		mousedown: function() {
			$('#dice').html ('');
		},
		mouseup: function() {
			i = Math.floor(Math.random() * 6);
			outp = '<span class="dice-value inset">' + i + ' ' + (i>0 && i<4 ? '<i class="fi-skull"></i>' : '') + '</span>';
			$('#dice').html (outp);
		}
	});

});
	
// TESTS
	$('#testbutton').on('click',function () {
		// Increase support to 13 - support should not exceed 12
			for (var x=0; x<14; x++)	{
				updateSupport(1,1);
			}
			var res = formation[1]['marine']['support'] == 12 ? 'pass' : 'fail';
			console.log ('Support test 1: ' + res + ' support=' + support);
			
		// Decrease support to -1 - support should not exceed 0
			for (var x=0; x<14; x++)	{
				updateSupport(1,-1);
			}
			res = formation[1]['marine']['support'] == 0 ? 'pass' : 'fail';
			console.log ('Support test 2: ' + res + ' support=' + support);
			
		// Increase Support for 1 marine
			updateSupport(1,1);
		// Increase support for 1 location
			updateTerrainSupport(0,'Door','L',1)
		
		// Increase support to 13 - support should not exceed 10
			for (var x=0; x<14; x++)	{
				updateSupport(2,1);
			}
			var res = formation[2]['marine']['support'] == 10 ? 'pass' : 'fail';
			console.log ('Support test 3: ' + res + ' support=' + support);
			
		// Decrease support to -1 - support should not exceed 0
			for (var x=0; x<14; x++)	{
				updateSupport(2,-1);
			}
			res = formation[2]['marine']['support'] == 0 ? 'pass' : 'fail';
			console.log ('Support test 4: ' + res + ' support=' + support);
		
		// Event Deck - Draw 32
			for (var x=0; x<31; x++)	{
				drawEvent();
			}
			res = eventDeck.length == 29 && eventDiscard.length == 1 ? "pass" : "fail";
			console.log ("Event test 1: " + res + ' event deck/discard: ' + eventDeck.length + '/' + eventDiscard.length);
	});
// Save\Load
	$('#savebutton').on('click',function () {
		savedstate = {};
		savedstate['formation'] = [];
		$.each(formation,function (i,item) {
			savedstate['formation'].push(JSON.parse(JSON.stringify(item)));
		});
		savedstate['teams'] = teams.slice(0);
		savedstate['marineDiscard'] = marineDiscard.slice(0);
		savedstate['locationDeck'] = locationDeck.slice(0);
		savedstate['eventDeck'] = eventDeck.slice(0);
		savedstate['eventDiscard'] = eventDiscard.slice(0);
		savedstate['currEvent'] = currEvent;
		savedstate['stealerDeck'] = stealerDeck.slice(0);
		savedstate['blipDeckL'] = blipDeckL.slice(0);
		savedstate['blipDeckR'] = blipDeckR.slice(0);
		savedstate['stealerDiscard'] = stealerDiscard.slice(0);
		savedstate['support'] = support;
		savedstate['turn'] = turn;
		savedstate['locid'] = currLocation['id'];
		//savedstate['actionDeck'] = actionDeck.slice(0);
		//savedstate['phaseDeck'] = phaseDeck.slice(0
		
		$('#savedstate').val(JSON.stringify(savedstate));
	});
	$('#loadbutton').on('click',function () {
		savedstate = JSON.parse($('#savedstate').val());
		formation = [];
		$.each(savedstate['formation'],function (i,item) {
			formation.push(JSON.parse(JSON.stringify(item)));
		});
		teams = savedstate['teams'].slice(0);
		marineDiscard = savedstate['marineDiscard'].slice(0);
		locationDeck = savedstate['locationDeck'].slice(0);
		eventDeck = savedstate['eventDeck'].slice(0);
		eventDiscard = savedstate['eventDiscard'].slice(0);
		currEvent = savedstate['currEvent'];
		stealerDeck = savedstate['stealerDeck'].slice(0);
		blipDeckL = savedstate['blipDeckL'].slice(0);
		blipDeckR = savedstate['blipDeckR'].slice(0);
		stealerDiscard = savedstate['stealerDiscard'].slice(0);
		support = savedstate['support'];
		turn = savedstate['turn'];
		currLocation = _location({id:savedstate['locid']}).first();
		
		//actionDeck = savedstate['actionDeck'].slice(0);
		//phaseDeck = savedstate['phaseDeck'].slice(0);

		da_refresh();
	});


var threaticon = [
'',
'<i class="fa fa-battery-quarter" style="color:green;"></i>',
'<i class="fa fa-battery-half" style="color:yellow;"></i>',
'<i class="fa fa-battery-three-quarters" style="color:orange;"></i>',
'<i class="fa fa-battery-full" style="color:red;"></i>']



