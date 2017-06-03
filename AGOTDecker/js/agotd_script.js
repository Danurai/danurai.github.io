var decks = {};
var players = {};
var regions = {};
var handsize = 7;
//var regCount;	//Expandable Regions Only

$(document).ready(function ()	{
	// Alt: get published decklist from netrunnerdb https://netrunnerdb.com/api/2.0/public/decklist/29088
	// data.name, data.cards = {"{id}":{number}} !Includes ID
	$('#p1dl').html("Summer Stag Do\n\nCreated using danurai.github.io/agot2 deck builder\n\nFaction:\n Baratheon\n\nTotal Cards: (60)\n\nAgenda\n1x Kings of Summer (Called to Arms)\n\nPlot\n1x A Clash of Kings (Core Set)\n1x A Feast for Crows (Core Set)\n1x A Song of Summer (Wolves of the North)\n1x Calm Over Westeros (Core Set)\n1x Summer Harvest (Called to Arms)\n1x Summons (Core Set)\n1x The King's Peace (The King's Peace)\n\nCharacter\n3x Asshai Priestess (For Family Honor)\n2x Bastard in Hiding (Core Set)\n3x Dragonstone Faithful (Core Set)\n3x Fiery Followers (Core Set)\n3x Gendry (No Middle Ground)\n2x Maester Cressen (Core Set)\n3x Melisandre (Core Set)\n3x Ser Barristan Selmy (True Steel)\n2x Shireen Baratheon (Core Set)\n3x Stannis Baratheon (There Is My Claim)\n2x Vanguard Lancer (Core Set)\n3x White Raven (Across the Seven Kingdoms)\n\nAttachment\n2x Lightbringer (Core Set)\n1x Red God's Blessing (There Is My Claim)\n\nEvent\n2x Even-Handed Justice (Wolves of the North)\n2x In the Name of Your King! (The Road to Winterfell)\n3x Seen In Flames (Core Set)\n2x The Hand's Judgment (Core Set)\n\nLocation\n2x Chamber of the Painted Table (Core Set)\n3x Dragonstone Port (Core Set)\n2x The Iron Throne (Core Set)\n3x The Kingsroad (Core Set)\n3x The Red Keep (Core Set)\n3x The Roseroad (Core Set)")
	$('#p2dl').html("Dothrakip\n\nCreated using danurai.github.io/agot2 deck builder\n\nFaction:\n Targaryen\n\nTotal Cards: (60)\n\nAgenda\n1x Fealty (Core Set)\n\nPlot\n1x A Song of Summer (Wolves of the North)\n1x Calling the Banners (Core Set)\n1x Confiscation (Core Set)\n1x Heads on Spikes (Core Set)\n1x Muster the Realm (Taking the Black)\n1x Summer Harvest (Called to Arms)\n1x The Long Winter (Wolves of the North)\n\nCharacter\n2x Aggo (Wolves of the North)\n2x Braided Warrior (Core Set)\n3x Crone of Vaes Dothrak (The King's Peace)\n2x Devoted Bloodrider (For Family Honor)\n2x Dothraki Outriders (No Middle Ground)\n3x Jhogo (True Steel)\n3x Khal Drogo (Core Set)\n2x Mirri Maz Duur (Calm Over Westeros)\n3x Rakharo (The Road to Winterfell)\n2x Rhaegal (Core Set)\n2x Ser Jorah Mormont (Core Set)\n3x Targaryen Loyalist (Core Set)\n3x Viserion (Core Set)\n3x Viserys Targaryen (Across the Seven Kingdoms)\n\nAttachment\n2x Beggar King (Called to Arms)\n1x Crown of Gold (The Road to Winterfell)\n3x Drogo's Arakh (Core Set)\n\nEvent\n3x Dracarys! (Core Set)\n2x Fire and Blood (Core Set)\n2x Funeral Pyre (True Steel)\n3x Put to the Sword (Core Set)\n\nLocation\n3x Illyrio's Estate (Core Set)\n3x The Kingsroad (Core Set)\n3x The Roseroad (Core Set)");
	//$('#p2dl').html("The Long Watch\nCreated using danurai.github.io/agot2 deck builder\n\nFaction:\n The Night's Watch\n\nTotal Cards: (60)\n\nAgenda\n1x Banner of the Wolf (Core Set)\n\nPlot\n1x A Feast for Crows (Core Set)\n1x A Noble Cause (Core Set)\n1x Building Orders (Core Set)\n1x Confiscation (Core Set)\n1x Trading with the Pentoshi (The Road to Winterfell)\n2x Winter Festival (Called to Arms)\n\nCharacter\n2x Arya Stark (Core Set)\n3x Benjen Stark (Core Set)\n2x Bran Stark (Core Set)\n2x Dolorous Edd (Called to Arms)\n3x Eddard Stark (Wolves of the North)\n3x Maester Aemon (Core Set)\n2x Messenger Raven (Core Set)\n3x Old Bear Mormont (Core Set)\n3x Ranging Party (Core Set)\n3x Sansa Stark (Core Set)\n2x Septa Mordane (True Steel)\n2x Ser Alliser Thorne (The King's Peace)\n3x Steward at the Wall (Core Set)\n2x Thoren Smallwood (For Family Honor)\n\nAttachment\n3x Craven (Called to Arms)\n3x Old Bear's Raven (True Steel)\n\nEvent\n3x A Meager Contribution (Core Set)\n\nLocation\n2x Castle Black (Core Set)\n3x The Kingsroad (Core Set)\n3x The Roseroad (Core Set)\n2x The Shadow Tower (Wolves of the North)\n3x The Wall (Core Set)\n3x White Tree (Across the Seven Kingdoms)");
	
// Initialisation
	var _cards = TAFFY(CARDS);
	//var imgurl = agot2_cards.imageUrlTemplate;
	
	regions['p1'] = {"p1hand":[],"p1char":[],"p1loc":[],"p1deck":[],"p1discard":[],"p1dead":[]};
	regions['p2'] = {"p2hand":[],"p2char":[],"p2loc":[],"p2deck":[],"p2discard":[],"p2dead":[]};
	//regCount = 0;
	
	$.each(['p1','p2'],function(idx,faction)	{
		players[faction] = new agot2Player(faction);
		loadDeck(faction);
		updateInfo(faction);
		updateRegion(faction);
		updatePlots(faction);
		
		console.log(players[faction]);
		console.log(decks[faction]);
		console.log(regions[faction]);
	});
		
// Listeners
	$('.btn-load').on('click',function () {
		loadDeck($(this).attr('for'));
	});
	
	$('.btn-draw').on('click',function() {
		var faction = $(this).closest('div').attr('for');
		var deck = decks[faction];
		if ($(this).attr('val') == 0) {
			resetDeck(deck);
		} else if ($(this).attr('val') == 'to7')	{
			for (var i=regions[faction][faction + 'hand'].length; i<7; i++) {drawCard(deck)};
		} else {
			var n = $(this).attr('val') == "all" ? deck.cardsInDeck() : $(this).attr('val');
			for (var i=0; i<n; i++) {drawCard(deck)};
		}
	});
	
	$(document).on('click','li.card-picker',function () {
		var faction = decks[$(this).closest('ul').attr('for')];
		drawCard(faction, $(this).data('index'))
	});
	
// Resources
	$(document)
		.on('click','.btn-cred',function()	{
			var faction = $(this).closest('.btn-group').attr('for');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addCreds(value);
			updateInfo(faction);
		})
		.on('click','.btn-score',function()	{
			var faction = $(this).closest('.btn-group').attr('for');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addScore(value);
			updateInfo(faction);
		});
	
// Create Menu
	$(document)
		.on('click','.card-deck', function(ev)	{
			var outp = '';
			var src  = $(this).closest('div.region').attr('id');
			var idx = $(this).data('idx');
			var faction = $(this).closest('div.region').attr('for');
			
			// Move To: Regions
			outp = '<div class="small"><b>Move To:</b></div>'
				+ '<div class="btn-group-vertical btn-group-sm" style="padding: 5px;">';
			$.each(regions[faction],function(tgt,crds)	{
				outp += menuButton(src,idx,tgt,faction,$('#' + tgt).attr('name') + (tgt == src ? ' >>' : ''));
			});
			// New Region
			/*if (faction == 'corp')	{
				outp += '<span class="btn-separator"></span>';
				outp += menuButton(src,idx,"new",faction,"New Region");
			}*/
			// Return to Deck
			outp += menuButton(src,idx,"deck",faction,"Deck & Shuffle");
			
			// Add\Remove counters
			outp += menuButton(src,idx,"actAddCount",faction,'<span class="icon-power"></span> Add Counter');
			outp += menuButton(src,idx,"actRemAll",faction,'<span class="icon-power"></span> Remove Counters');
			
			// Stand \ Kneel
			outp += menuButton(src,idx,"actKneel",faction,'Kneel');
			outp += menuButton(src,idx,"actStand",faction,'Stand');
			
			outp += '</div>';
			
			$('#popupmenu').html(outp);
			$('#popupmenu').css({"left":ev.pageX,"top":ev.pageY});
			$('#popupmenu').toggle();
		})
		.on('click','.card-counter',function(ev)	{
			var outp = '';
			var src  = $(this).closest('div.region').attr('id');
			var idx = $(this).parent().find('.card-deck').data('idx');
			var faction = $(this).closest('div.region').attr('for');
			outp = '<div class="small"><b>Move To:</b></div>'
				+ '<div class="btn-group-vertical btn-group-sm" style="padding: 5px;">'
				+ menuButton(src,idx,"actAddCount",faction,'<span class="icon-click"></span> Add Counter')
				+ menuButton(src,idx,"actRemCount",faction,'<span class="icon-click"></span> Remove Counter')
				+ menuButton(src,idx,"actRemAll",faction,'<span class="icon-click"></span> Remove All')
				+ '</div>';
			
			$('#popupmenu').html(outp);
			$('#popupmenu').css({"left":ev.pageX,"top":ev.pageY});
			$('#popupmenu').toggle();
		});
	function menuButton(src,idx,tgt,faction,btnTxt)	{
		var btn = '<button type="button" class="btn btn-default" '
				+ 'data-src="' + src + '" '
				+ 'data-idx="' + idx + '" '
				+ 'data-tgt="' + tgt + '" '
				+ 'for="' + faction + '" '
				+ '>' 
				+ btnTxt
				+ '</button>'
		return btn;
	}
// Click Menu
	$('#popupmenu').on('click','.btn',function()	{
		var faction = $(this).attr('for');
		var src = regions[faction][$(this).data('src')];
		var idx = $(this).data('idx');
		var tgt;
		$('#popupmenu').toggle();
		switch ($(this).data('tgt')) {
			case ("deck"):
				if (decks[faction].returnToDeck(src[idx].code))	{
					src.splice(idx,1);
				}
				break;
			case ("actTrash"):
				if (decks[faction].discardCard(src[idx].code))	{
					src.splice(idx,1);
				}
				break;
			case ("actAddCount"):
				src[idx].counters ++;
				break;
			case ("actRemCount"):
				src[idx].counters --;
				break;
			case ("actRemAll"):
				src[idx].counters = 0;
				break;
			case ('actKneel'):
				src[idx].standing = false
				break;
			case ('actStand'):
				src[idx].standing = true
				break;
			default:	// Region
				tgt = regions[faction][$(this).data('tgt')];
				if (typeof tgt !== "undefined")	{
					moveCrd(src,idx,tgt);
				}
		}
		$.each(['p1','p2'],function(idx,faction) {
			updateRegion(faction);
			updateChooseList(faction);
		});
	});

	function moveCrd(src,idx,tgt)	{
		var res, gain;
		tgt.push(src.splice(idx,1)[0]);
		tgt.slice(-1)[0].standing = true;
		// Adjust Runner Creds etc.
		var code = tgt.slice(-1)[0].code;
		var card = _cards({"code":code}).first();
		
		// Update gold when playing cards & undoing
		
		
		$.each(['p1','p2'],function(idx,faction) {
			updateInfo(faction);
			updateRegion(faction);
			updateChooseList(faction);
		});
	}
	
	function loadDeck(faction)	{
		var decklist = $('#' + faction + 'dl').val();
		var deckinfo = parseDeck(decklist);
		decks[faction] = new gameDeck(deckinfo.data);
		
		decks[faction].setMeta("title",deckinfo.title);
		decks[faction].setMeta("idcode",deckinfo.idcode);
		decks[faction].setMeta("idname",deckinfo.idname);
		decks[faction].setMeta("agname",deckinfo.agenda);
		decks[faction].setMeta("agcode",deckinfo.agendaid);
		decks[faction].setMeta("faction",faction);
		decks[faction].setMeta("plots",deckinfo.plot);
		resetDeck(decks[faction]);
	}
	
	function resetDeck(deck)	{
		// Shuffle, draw 5, clear & render
		var faction = deck.getMeta('faction');
		deck.resetCards();
		players[faction].reset();
		regions[faction][faction + "hand"] = [];
		regions[faction][faction + "char"] = [];
		regions[faction][faction + "loc"] = [];
		regions[faction][faction + "deck"] = [];
		regions[faction][faction + "discard"] = [];
		regions[faction][faction + "dead"] = [];
	//Draw
		for (var n=0; n<handsize; n++)	{drawCard(deck);}
		updateInfo(faction);
		updateRegion(faction);
	}
	
	function drawCard(deck, idx=0)	{
		var faction = deck.getMeta('faction');
		var code = deck.draw(idx);
		var isRoot = false;
		if (code != "00000")	{
			isRoot = _cards({"code":code,}).first().type_code != 'ice';
			regions[faction][faction + 'hand'].push({"code":code,"counters":0,"standing":true});
			updateRegion(faction);
			updateChooseList(faction);
		}
	}

// Screen Rendering Functions
	function updateChooseList(faction)	{
		var outp='';
		outp += '<div class="btn-group"><button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">Choose <span class="caret"></span></button>';
		outp += '<ul class="dropdown-menu scrollable-menu" role="menu" for="' + faction + '">';
		
		$.each(decks[faction].getDeck(),function (id,code) {
			card = _cards({"code":code}).first();
			outp += '<li style="cursor: pointer;" role="presentation" class="card-picker" data-index="' + id + '"><a role="menuitem" class="card-picker" data-code="' + code + '">' + card.name + '</a></li>';
		});
		
		outp += '</ul>';
		outp += '</div>';
		$('#' + faction + 'cardlist').html (outp);
	}
	
	function updateInfo(faction)	{
		var deck = decks[faction];
		var infoout = '<h3>' + deck.getMeta('title') + '</h3>'
			+ '<span data-code="' + deck.getMeta('idcode') + '">'
			+ '<b>' + deck.getMeta('idname') + '</b></span>'
			+ '<br><span data-code="' + deck.getMeta('agcode') + '">'
			+ '<b>' + deck.getMeta('agname') + '</b></span>';
		$('#' + faction + 'info').html (infoout);
		$('#' + faction + 'creds').html(players[faction].getCreds());
		$('#' + faction + 'score').html(players[faction].getScore());
		if (faction == 'run') {
			$('#runmu').html(players['run'].getMU());
		}
	}
	
	function updateRegion(faction)	{
		var outp;
		$.each(regions[faction], function(rgn,crds)	{
			outp = '<div class="region-title">' + $('#' + rgn).attr('name') + '</div>';
		// Add Root for Deck, Discard and Dead
			switch (rgn)	{
				case ('deck'):
					outp += '<div class="region-root">';
					outp += '<img src="img\\card_back.png" class="card card-root" draggable="false"'
						+ (decks[faction].cardsInDeck() == 0 ? ' style="opacity: 0.5;"' : '')
						+ '></img>';
					outp += '<span class="card-count">' + decks[faction].cardsInDeck() + '</span>';
					break;
				case ('discard'):
					outp += '<div class="region-root">';
					outp += '<img src="img\\corp_back.png" class="card card-root" draggable="false"'
						+ (decks[faction].cardsInDiscard() == 0 ? ' style="opacity: 0.5;"' : '')
						+ '></img>';
					outp += '<span class="card-count">' + decks[faction].cardsInDiscard() + '</span>';
					break;
			}
			$.each(crds, function(idx,regCrd)	{
				outp += getCardImgEle(regCrd,idx);
			});
			$('#' + rgn).html(outp);
			//console.log (regions[faction]);
		});
	}
	function getCardImgEle(regCrd,idx)	{
		var crd = _cards({"code":regCrd.code}).first();
		var outp = '<div class="region-installed">';
		outp += '<img '
			+ 'src="' + crd.img + '"'
			+ 'class="'
			+ 'card card-deck'
			+ (regCrd.standing == false ? ' card-kneel' : '')
			+ '"'
			+ 'draggable="true" '
			+ 'alt="' + crd.title + '" '
			+ 'data-code="'+ crd.code + '" '
			+ 'data-idx="'+ idx + '">'
			+ '</img>';
		if (regCrd.counters > 0)	{
			outp += '<span class="card-counter"><span class="counter-value">' + regCrd.counters + '</span></span>';
		}
		outp += '</div>';
		return outp;
	}
	function updatePlots(faction)	{
		var outp = '';
		$.each(decks[faction].getMeta("plots"),function(idx,code)	{
			var crd = _cards({"code":code});
			outp += '<img '
				+ 'src="' + crd.img + '"'
				+ 'class="card-plot" '
				+ 'draggable="false" '
				+ 'alt="' + crd.title + '" '
				+ 'data-code="'+ crd.code + '" '
				+ 'data-idx="'+ idx + '">'
				+ '</img>';
		});
		$('#' + faction + 'plot').html (outp);
	}

// Load Deck Text
	function parseDeck(data)	{
	// Create decklist from cards
	
		var crd;
		var deck = {};
		deck.title = "";
		deck.data = [];
		deck.plot = [];
	// Deck Name
		deck.title = data.match(/(.+)/g)[0];
	// Find Identity
		data.match(/Faction:\n\s(.+)/g);
		deck.idname = RegExp.$1;
		if (deck.idname != "The Night's Watch") { deck.idname = "House " + deck.idname; }
		deck.id = _cards({"name":deck.idname}).first().code; //Special Characters - CT fixed by not using \\uuml; on textarea
			
		//var regex = /([0-9])x\s((.+)\s\s\W+|(.+))/g;				// Look out for STAR special character (ANR)
		
		var regex = /([0-9])x\s(.+)\s\((.+)\)/g;
		var res = data.match(regex);
				
		$.each(res, function (id, item) {
			item.match(regex);
			var qty = parseInt(RegExp.$1, 10);
			crd = _cards({"name":RegExp.$2,"Set":RegExp.$3}).first();
			switch(crd.Type)	{
				case ('Agenda'):
					deck.agenda = crd.name;
					deck.agendaid = crd.code;
					break;
				case ('Plot'):
					deck.plot.push(crd.code);
					break;
				default:
					for (var i=0; i < qty; i++)	{deck.data.push(crd.code);}
			}
		});
		console.log('Deck Loaded:');
		console.log(deck);
		
		return deck;		
	}
	
// Drag and Drop
	$(document)
		.on('dragstart','.card-deck', function(ev)	{
			var jsonData = {};
			jsonData["faction"] = $(this).closest('div.region').attr('for');
			jsonData["src"] = $(this).closest('div.region').attr('id');
			jsonData["idx"] = $(this).data('idx');
			console.log(jsonData);
			ev.originalEvent.dataTransfer.setData('text/plain',JSON.stringify(jsonData));
		});
	$(document)
		.on('dragover','.region',function(ev)	{
			ev.preventDefault();
			ev.originalEvent.dataTransfer.dropEffect = 'move'; 
			$(this).addClass('region-drop');
		})
		.on('dragleave','.region',function(ev)	{
			$(this).removeClass('region-drop');
		})
		.on('drop','.region',function(ev)	{
			ev.preventDefault();
			$(this).removeClass('region-drop');
			
			var jsonData = JSON.parse(ev.originalEvent.dataTransfer.getData('text'));
			var tgt = $(this).attr('id');
			var tgtFaction = $(this).attr('for');
			
			moveCrd(regions[jsonData.faction][jsonData.src],jsonData.idx,regions[tgtFaction][tgt]);
		});
	
	
	
	
});
