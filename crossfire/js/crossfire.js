//_roles
//_metas
_BMDB = TAFFY(_blackmarket);

var activeObstacle;
var activeCards = [];

$(document).ready(function () {	
// SETUP

// #1 - Pick a role and meta type
// #2 - Build starter deck & shuffle, draw
// #3 #4 - Set health & nuyen
	var plyr = []
	var r = shuffle([0,1,2,3]);
	
	for (var p=0; p<4; p++)	{
		plyr.push(new XFPlayer(_metas[p],_roles[r[p]]));
		shuffle(plyr[p].cards.deck);
		for (var i=0; i<_metas[p].startcards; i++)	{
			plyr[p].cards.draw();
		}
	}
	
// #5 - Setup Black Market deck & Black Market
	var deckids = [];
	deckids = [];
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
	
// Mission - Initiation
	var mission = {
		"name":"INITIATION",
		"flavour":"Runners don't need any namby-pambby training missions. Live-fire all the way",
		"difficulty":"Moderate",
		"crossfire":1,
		"players-from":1,
		"players-to":4,
		"stages":
			{
				"mission goal":"Survive. Your team will encounter some of the &quot;local color&quot; in a standard run. Once you've defeated them, catch your breath, as you'll quickly encounter another <em>Shadowrun</em> &quot;Welcoming committee.&quot;",
				"setup":"Each player selects a role and character card. Then flip a Normal Obstacle in front of each runnner. The player with the highest HP (as noted on their character card) is the starting runner.",
				"catch your breath":"When there are no more obstacles in play, finish the current turn. Then remove the current Crossfire event from play (put it on the bottom of the Crossfire deck) and each runner heals 1 HP. Finally, each runner may buy 1 card from the Black Market Deck. Then...",
				"once more with feeling":"Flip up one obstacle to face each runner, but draw from the Hard Obstacle deck for obstacles facing the second and fourth runners. (In a 2-3 player game, you&quot;ll only get 1 Hard Obstacle.) Play continues as normal with the runner whose turn is next.",
				"game end":"If any runner\'s HP are reduced below 1 (to &quot;staggered&quot;), the mission immediately ends: return and try the run again.<p>If you defeat both groups of obstacles, <b>YOU WIN</b>!"
			}
	}
	

// Mission Setup - Initiation
	// Flip a normal obstacle in front of each player
	obstacleN.draw();
	
// Sequence of Play
	// Draw a new Crossfire Cards
	
	// Eack player takes a turn --
	/*
	1. Play Cards
	2. Apply Damage
	3. Take Damage
	4. Draw & Buy Cards
	5. End Turn
	*/
	
	
	// log stuff
	for (var i=0; i<4; i++)	{
		console.log (plyr[i]);		
	}
	console.log (bmkt);
	console.log (obstacleN);
	console.log (obstacleH);
	console.log (crossfire);
	
	var obsID;
	for (var i=0; i<4; i++)	{
		$('#p' + (i+1)).find('.plyr-info').html(plyr[i].playsheet_info());
		$('#p' + (i+1)).find('.plyr-hand').html(plyr[i].playsheet_hand());
		
		obsID = obstacleN.draw();
		$('#p' + (i+1)).find('.plyr-obs').append (renderObstacle(obsID));
	}
	
	$('#blackmarket').html (renderBMKT());
	$('#obstacle').html (renderObstacle(obsID));
	
	function renderBMKT()	{
		var card;
		var htmlout = '<div>Black Market</div><ul>';
		$.each(bmkt.getHand(), function(id,code)	{
			card = _BMDB({"id":code}).first();
			htmlout += '<img class="card-bmkt" data-id="' + card.id + '" alt="' + card.name + '">'	//src="img\\bmkt_' + ('00' + card.id).substring(card.id.toString().length) + '.png"></img>';
		});
		return htmlout;
	}
	function renderObstacle(obsID)	{
		var card;
		var htmlout = '<div class="obstacle" data-obsid="' + obsID + '">';
		card = _OBS({"id":obsID}).first();
		if (typeof card !== 'undefined')	{
			//htmlout = JSON.stringify(card);
			var sobs = obsID.toString();
			htmlout += '<img class="card-obstacle" alt="' + card.name + '">'	//"src="img\\obs_' + ('00' + sobs).substring(sobs.length) + '.png">'
		}
		htmlout += '</div>'
		return htmlout;
	}
	
	
/* LISTENERS */

	$(document)
		.on('click','.card-obstacle',function()	{
			// Add Obstacle to Crossfire View, include runner info
			var obsid = $(this).closest('div').data('obsid');
			$('#obstacle-image').attr('src',$(this).attr('src'));
			$('#obstacle-image').attr('alt',$(this).attr('alt'));
			$('#obstacle-image').data('obsid',obsid.toString());
			
			activeObstacle = obsid;
			// Clear committed cards & track
			updateTrack();
		})
		.on('click','.card-bmkt',function()	{
			var outp = '';
			if ( $(this).closest('div').hasClass('plyr-hand') )	{
				activeCards.push($(this).data('id'));
				updateTrack();
			}
		})
		;
		
	function updateTrack()	{
		var icons = [];
		var outp = 'dmg track: ';
		var obstacle = _OBS({"id":activeObstacle}).first();
		$.each(obstacle.track, function(idx,lvl)	{
			outp += lvl;
			outp += idx < obstacle.track.length -1 ? ' > ' : '';
		});
		
		$('#dmg-track').html(outp);
		
		outp = '';
		$('#plyr-cards').html('');
		var card;
		$.each(activeCards, function(acID,cardID)	{
			card = _BMDB({"id": cardID}).first();
			outp = '<span data-id="' + card.id + '">' + card.name + ': ';
			$.each(card.damage, function(id,dmg)	{
				outp += ' ' + dmg;
				icons.push(dmg);
			});
			outp += '</span>&nbsp;';
			$('#plyr-cards').append(outp);
			
		});
		
		$('#plyr-cards').append('<br>' + icons)
		
		var b = true;
		var x = 0;
		var iconcount = 0;
		$.each(obstacle.track,function(id,cost)	{
			iconcount += $.isNumeric(cost) ? parseInt(count,10) : 1;
			
		});
		
	}
			
		
	
});

