$(document).ready(function ()	{
	$('#rundl').html("CT Litmus PreMWL\n\nChaos Theory: Wünderkind\n\nEvent (18)\n3x Diesel\n3x Legwork  &bull;&bull;&bull;&bull;&bull; &bull;\n1x Modded\n2x Quality Time\n3x Scavenge\n1x Stimhack  &bull;\n3x Test Run\n2x Vamp  &bull;&bull;&bull;&bull;\n\nHardware (8)\n2x Astrolabe\n3x Clone Chip\n3x R&D Interface\n\nIcebreaker (7)\n2x Cerberus \"Lady\" H1\n1x Femme Fatale  &bull;\n1x Mimic  &bull;\n1x Sharpshooter\n1x Torch\n1x ZU.13 Key Master\n\nProgram (7)\n1x Clot  &bull;&bull;\n3x Magnum Opus\n3x Self-modifying Code\n\n15 influence spent (max 15, available 0)\n40 cards (min 40)\nCards up to The Valley\n\nDeck built on https://netrunnerdb.com.");
	$('#corpdl').html("Skorpius HS\n\nSkorpios Defense Systems: Persuasive Power\n\nAgenda (10)\n2x Armored Servers\n1x Graft\n3x Hostile Takeover\n1x Paper Trail\n3x Project Atlas\n\nAsset (5)\n2x Illegal Arms Factory\n3x Snare!  &bull;&bull;&bull;&bull;&bull; &bull;\n\nUpgrade (1)\n1x SanSan City Grid  &star; &bull;&bull;&bull;\n\nOperation (13)\n3x Beanstalk Royalties\n3x Hedge Fund\n2x Housekeeping\n2x Hunter Seeker\n2x Scorched Earth\n1x SEA Source  &bull;&bull;\n\nBarrier (5)\n1x Fire Wall\n3x Ice Wall\n1x Wall of Static\n\nCode Gate (5)\n2x Enigma\n3x Hortum\n\nSentry (5)\n2x Archer\n2x Bloodletter\n1x Colossus\n\n12 influence spent (max 15, available 3)\n18 agenda points (between 18 and 19)\n44 cards (min 40)\nCards up to Terminal Directive\n\nDeck built on https://netrunnerdb.com.")
	
	
	var decks = {};
	var players = {};
	var _cards = TAFFY(nrdb_cards.data);
	var imgurl = nrdb_cards.imageUrlTemplate;
	
	players['corp'] = new anrPlayer('corp');
	players['run'] = new anrPlayer('run');
	loadDeck('corp');
	loadDeck('run');
	updateResource('corp');
	updateResource('run');
	
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
		/*
		$('#draw1').prop('disabled',deck.length == 0);
		$('#drawall').prop('disabled',deck.length == 0);
		$('#draw2').prop('disabled',deck.length < 2);
		$('#draw7').prop('disabled',deck.length < 7);
		*/
	});
	
	$(document).on('click','.deck_card',function() {
		$(this).css('opacity', 1.5 - parseFloat($(this).css('opacity')));
	})
	
	$(document).on('click','a.card-picker',function () {
		//alert ($(this).closest('ul').attr('for') + ': ' + $(this).data('index'));
		var faction = decks[$(this).closest('ul').attr('for')];
		drawCard(faction, $(this).data('index'))
	});
	
	$(document).on('click','.btn-cred',function()	{
		var faction = $(this).closest('.btn-group').attr('for');
		var value = parseInt($(this).attr('val'),10);
		players[faction].addCreds(value);
		updateResource(faction);
	})
	$(document).on('click','.btn-score',function()	{
		var faction = $(this).closest('.btn-group').attr('for');
		var value = parseInt($(this).attr('val'),10);
		players[faction].addScore(value);
		updateResource(faction);
	})
	
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
		deck.resetCards();
		var faction = deck.getMeta('faction');
		$('#' + faction + 'info').html ('<h3>' + deck.getMeta('title') + '</h3><b>' + deck.getMeta('idname') + '</b>');
		$('#' + faction + 'hand').html('');
		for (var n=0; n<5; n++)	{drawCard(deck);}
		console.log (decks[faction]);
	}
	
	function drawCard(deck, idx=0)	{
		var faction = deck.getMeta('faction');
		if (deck.draw(idx))	{
			var code = deck.getHand().slice(-1)[0].toString();
			$('#' + faction + 'hand').append('<img draggable="true" src="' + imgurl.replace("{code}",code) + '" class="check_card deck_card" data-code="' + code + '"></img>');
			updateChooseList(faction);
		}
	}
	
	function updateChooseList(faction)	{
		var outp='';
		outp += '<div class="btn-group"><button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">Choose <span class="caret"></span></button>';
		outp += '<ul class="dropdown-menu scrollable-menu" role="menu" for="' + faction + '">';
		
		$.each(decks[faction].getDeck(),function (id,code) {
			card = _cards({"code":code}).first();
			outp += '<li role="presentation"><a role="menuitem" class="card-picker" data-code="' + code + '" data-index="' + id + '">' + card.title + '</a></li>';
		});
		
		outp += '</ul>';
		outp += '</div>';
		$('#' + faction + 'cardlist').html (outp);
	}
	
	function updateResource(faction)	{
		$('#' + faction + 'creds').html(players[faction].getCreds());
		$('#' + faction + 'score').html(players[faction].getScore());
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
		console.log('Deck Loaded:');
		console.log(deck);
		
		return deck;
//		console.log (decklist);
		
	}
});