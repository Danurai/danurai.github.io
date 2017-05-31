var decks = {};
var players = {};
var regions = {};
var regCount;	//Corp Only

$(document).ready(function ()	{
	// Alt: get published decklist from netrunnerdb https://netrunnerdb.com/api/2.0/public/decklist/29088
	// data.name, data.cards = {"{id}":{number}} !Includes ID
	$('#rundl').html("CT Litmus PreMWL\n\nChaos Theory: Wünderkind\n\nEvent (18)\n3x Diesel\n3x Legwork  &bull;&bull;&bull;&bull;&bull; &bull;\n1x Modded\n2x Quality Time\n3x Scavenge\n1x Stimhack  &bull;\n3x Test Run\n2x Vamp  &bull;&bull;&bull;&bull;\n\nHardware (8)\n2x Astrolabe\n3x Clone Chip\n3x R&D Interface\n\nIcebreaker (7)\n2x Cerberus \"Lady\" H1\n1x Femme Fatale  &bull;\n1x Mimic  &bull;\n1x Sharpshooter\n1x Torch\n1x ZU.13 Key Master\n\nProgram (7)\n1x Clot  &bull;&bull;\n3x Magnum Opus\n3x Self-modifying Code\n\n15 influence spent (max 15, available 0)\n40 cards (min 40)\nCards up to The Valley\n\nDeck built on https://netrunnerdb.com.");
	$('#corpdl').html("Skorpius HS\n\nSkorpios Defense Systems: Persuasive Power\n\nAgenda (10)\n2x Armored Servers\n1x Graft\n3x Hostile Takeover\n1x Paper Trail\n3x Project Atlas\n\nAsset (5)\n2x Illegal Arms Factory\n3x Snare!  &bull;&bull;&bull;&bull;&bull; &bull;\n\nUpgrade (1)\n1x SanSan City Grid  &star; &bull;&bull;&bull;\n\nOperation (13)\n3x Beanstalk Royalties\n3x Hedge Fund\n2x Housekeeping\n2x Hunter Seeker\n2x Scorched Earth\n1x SEA Source  &bull;&bull;\n\nBarrier (5)\n1x Fire Wall\n3x Ice Wall\n1x Wall of Static\n\nCode Gate (5)\n2x Enigma\n3x Hortum\n\nSentry (5)\n2x Archer\n2x Bloodletter\n1x Colossus\n\n12 influence spent (max 15, available 3)\n18 agenda points (between 18 and 19)\n44 cards (min 40)\nCards up to Terminal Directive\n\nDeck built on https://netrunnerdb.com.")
	
// Initialisation
	var _cards = TAFFY(nrdb_cards.data);
	var imgurl = nrdb_cards.imageUrlTemplate;
	
	// Code. Agenda\Asset\deck \ Upgrade \ Ice. Rezzed. 	
	regions['corp'] = {"corphand":[],"hq":[],"archives":[],"randd":[]};
	regions['run'] = {"runhand":[],"resource":[],"hardware":[],"program":[]};
	regCount = 0;
	
	$.each(['corp','run'],function(idx,faction)	{
		players[faction] = new anrPlayer(faction);
		loadDeck(faction);
		updateInfo(faction);
		updateRegion(faction);
		console.log(players[faction]);
		console.log(decks[faction]);
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
		} else {
			var n = $(this).attr('val') == "all" ? deck.cardsInDeck() : $(this).attr('val');
			for (var i=0; i<n; i++) {drawCard(deck)};
		}
	});
	
	$(document).on('click','li.card-picker',function () {
		var faction = decks[$(this).closest('ul').attr('for')];
		drawCard(faction, $(this).data('index'))
	});
	
	$(document).on('click','.btn-cred',function()	{
		var faction = $(this).closest('.btn-group').attr('for');
		var value = parseInt($(this).attr('val'),10);
		players[faction].addCreds(value);
		updateInfo(faction);
	})
	$(document).on('click','.btn-score',function()	{
		var faction = $(this).closest('.btn-group').attr('for');
		var value = parseInt($(this).attr('val'),10);
		players[faction].addScore(value);
		updateInfo(faction);
	});
	$(document).on('click','.btn-mu',function()	{
		var faction = $(this).closest('.btn-group').attr('for');
		var value = parseInt($(this).attr('val'),10);
		players[faction].addMU(value);
		updateInfo(faction);
	});
	
	// Create Move Menu
	$(document).on('click','.deck_card', function(ev)	{
		var outp = '';
		var thisregion  = $(this).closest('div').attr('id');
		var thisidx = $(this).data('idx');
		var faction = $(this).closest('div').attr('for');
		//$(this).css('opacity', 1.5 - parseFloat($(this).css('opacity')));
		outp = '<div class="small"><b>Move To:</b></div><div class="btn-group-vertical btn-group-sm" style="padding: 5px;">';
		$.each(regions[faction],function(rgn,crds)	{
			if (rgn != thisregion)	{
				outp += '<button type="button" class="btn btn-default" '
					+ 'data-src="' + thisregion + '" '
					+ 'data-idx="' + thisidx + '" '
					+ 'data-tgt="' + rgn + '" '
					+ 'for="' + faction + '" '
					+ '>' 
					+ $('#' + rgn).attr('name')
					+ '</button>';
			}
		});
		outp += '<button type="button" class="btn btn-default" '
			+ 'data-src="' + thisregion + '" '
			+ 'data-idx="' + thisidx + '" '
			+ 'data-tgt="" '
			+ 'for="' + faction + '" '
			+ '>New Region</button>';
		outp += '</div>';
		$('#popupmenu').html(outp);
		$('#popupmenu').css({"left":ev.pageX,"top":ev.pageY});
		$('#popupmenu').toggle();
	});

	$('#popupmenu').on('click','.btn',function()	{
		var faction = $(this).attr('for');
		var src = regions[faction][$(this).data('src')];
		var idx = $(this).data('idx');
		var tgt;
		
		if ($(this).data('tgt') == "")	{
		// new region
			regCount ++;
			$('#corparea').append('<div class="col-md-12 region remote" for="corp" name="Region ' + regCount + '" id="region' + regCount + '"></div>');
			tgt = regions[faction]["region" + regCount] = [];
		} else	{
			tgt = regions[faction][$(this).data('tgt')];
		}
		moveCrd(src,idx,tgt);
		$('#popupmenu').toggle();
	});

	function moveCrd(src,idx,tgt)	{
		tgt.push(src.splice(idx,1)[0]);
		updateRegion('corp');
		updateRegion('run');
	}
	
	function loadDeck(faction)	{
		var decklist = $('#' + faction + 'dl').val();
		var deckinfo = parseDeck(decklist);
		decks[faction] = new anrDeck(deckinfo.data);
		
		decks[faction].setMeta("title",deckinfo.title);
		decks[faction].setMeta("idcode",deckinfo.idcode);
		decks[faction].setMeta("idname",deckinfo.idname);
		decks[faction].setMeta("faction",faction);
		resetDeck(decks[faction]);
	}
	
	function resetDeck(deck)	{
		// Shuffle, draw 5, clear & render
		var faction = deck.getMeta('faction');
		deck.resetCards();
		players[faction].reset();
		// Clear Regions
		if (faction == 'corp')	{
			regions['corp'] = {"corphand":[],"hq":[],"archives":[],"randd":[]};
			regCount = 0;
		}
		if (faction == 'run')	{
			regions['run'] = {"runhand":[],"resource":[],"hardware":[],"program":[],"trash":[]};
		}
		//Draw 5
		for (var n=0; n<5; n++)	{drawCard(deck);}
		updateInfo(faction);
		updateRegion(faction);
	}
	
	function drawCard(deck, idx=0)	{
		var faction = deck.getMeta('faction');
		var code = deck.draw(idx);
		if (code != "00000")	{
			//var crd = _cards({"code":code}).first();
			regions[faction][faction + 'hand'].push(code);
			updateRegion(faction);
			updateChooseList(faction);
		}
	}
	
	function updateChooseList(faction)	{
		var outp='';
		outp += '<div class="btn-group"><button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">Choose <span class="caret"></span></button>';
		outp += '<ul class="dropdown-menu scrollable-menu" role="menu" for="' + faction + '">';
		
		$.each(decks[faction].getDeck(),function (id,code) {
			card = _cards({"code":code}).first();
			outp += '<li style="cursor: pointer;" role="presentation" class="card-picker" data-index="' + id + '"><a role="menuitem" class="card-picker" data-code="' + code + '">' + card.title + '</a></li>';
		});
		
		outp += '</ul>';
		outp += '</div>';
		$('#' + faction + 'cardlist').html (outp);
	}
	
	function updateInfo(faction)	{
		var deck = decks[faction];
		$('#' + faction + 'info').html ('<h3>' + deck.getMeta('title') + '</h3><b>' + deck.getMeta('idname') + '</b>');
		$('#' + faction + 'creds').html(players[faction].getCreds());
		$('#' + faction + 'score').html(players[faction].getScore());
		if (faction == 'run') {
			$('#runmu').html(players['run'].getMU());
		}
	}
	
	function updateRegion(faction)	{
		var outp;
		var crd;
		// Remove empty corp regions
		$('#corparea').find('.remote').each(function(idx,ele)	{
			var rgn = $(ele).attr('id');
			if (regions['corp'][rgn].length == 0)	{
				ele.remove();
				regions['corp'].splice(regions['corp'].indexOf(rgn),1);
				delete regions['corp'][rgn];
			}
		});
		$.each(regions[faction], function(rgn,crds)	{
			outp = '<div class="region-title">' + $('#' + rgn).attr('name') + '</div>';
			$.each(crds, function(idx,code)	{
				crd = _cards({"code":code}).first();
				outp += getCardImgEle(crd,idx);
			});
			$('#' + rgn).html(outp);
		});
	}
	function getCardImgEle(crd,idx)	{
		var outp = '<img '
			+ 'src="' + imgurl.replace('{code}',crd.code) + '"'
			+ 'class="deck_card" draggable="true" '
			+ 'alt="' + crd.title + '" '
			+ 'data-code="'+ crd.code + '" '
			+ 'data-idx="'+ idx + '">'
			+ '</img>';
		return outp;
	}
	
	function parseDeck(data)	{
	// Create decklist from cards
	
		var crd;
		var deck = {};
		deck.title = "";
		deck.idname = "";
		deck.data = [];
	// Find Identity
		var idregex = /(.+)/g
		var idres = data.match(idregex);
	// Simple
		deck.title = idres[0];
		deck.idname = idres[1];
		deck.id = _cards({"title":deck.idname}).first().code; //Special Characters - CT fixed by not using \\uuml; on textarea
			
	// 
		var regex = /([0-9])x\s((.+)\s\s\W+|(.+))/g;				// Look out for STAR special character
		var res = data.match(regex);
				
		$.each(res, function (id, item) {
			item.match(regex);
			var qty = parseInt(RegExp.$1, 10);
			var cname = (RegExp.$4 != "" ? RegExp.$2 : RegExp.$3);
			crd = _cards({"title":cname}).first();
			//console.log (qty + 'x ' + crd.title);
			for (var i=0; i < qty; i++)	{deck.data.push(crd.code);}
		});
		//console.log('Deck Loaded:');
		//console.log(deck);
		
		return deck;
//		console.log (decklist);
		
	}
	
		// Drag and Drop
	$(document)
		.on('dragstart','.deck_card', function(ev)	{
			var jsonData = '{"source":"' + $(this).closest('div').attr('id') + '","idx":"'+ $(this).data('idx') + '"}';
			console.log(jsonData);
			ev.originalEvent.dataTransfer.setData('text/plain',jsonData);
		});
	$('#corparea')
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
			
			var crdData = JSON.parse(ev.originalEvent.dataTransfer.getData('text'));
			var src = regionCrds[crdData.source];
			var tgt = regionCrds[$(this).attr('id')];
			moveCrd(src,crdData.idx,tgt);
		});
	
	
	
	
});