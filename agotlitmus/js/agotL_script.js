//var _cards = TAFFY(CARDS);
var handsize = 7;
var playerids = ['p1','p2'];
var decks = {};
var players = {};


$(document).ready(function() {
	// Setup
	htmlout = '<li data-deckidx="-1"><a role="menuitem"><b><em>Paste Deck</em></b></a></li>';
	$.each(_decks, function (idx,strdeck)	{
		htmlout += '<li data-deckidx="' + idx + '"><a role="menuitem">' + strdeck.match(/(.+)/g)[0] + '</a></li>';
	});
	
	$.each(playerids,function(id,faction)	{
	// Pre-populate list of decks :: Alt: get published decklist from netrunnerdb\thronesdb etc https://netrunnerdb.com/api/2.0/public/decklist/29088
		$('#' + faction + 'decks').html(htmlout);
	// Create new Player and decks
		newDeck(_decks[id],faction);
	});
	
	function newDeck(decklist,faction)	{
	// (re)intialise player and deck
		players[faction] = new agot2Player(faction);
		decks[faction] = loadDeck(decklist);
	// Clear Regions
		$('#' + faction + 'area').find('.region-installed').remove();
	// deck info and plots
		updateInfo(faction);
		updatePlots(faction);
	// Draw to hand size
		for (var n = 0; n < handsize; n++)	{
			drawCard(decks[faction],faction);
		}
	}
	
	function drawCard(deck, faction, deckid=0)	{
		var idx = deck.draw(deckid);
		if (idx > -1)	{
			$('#' + faction + 'hand').append(getCardImgEle(faction,idx));
		}
	}
	
	function getCardImgEle(faction,idx)	{
		var card = decks[faction].getCard(idx);
		var outp = '<div class="region-installed' 
			+ '" data-code="' + card.code + '"'
			+ '" data-idx="' + idx + '"'
			+ '" data-faction="' + faction + '"'
			+ '>';
		outp += '<img '
			+ 'src="' + card.img + '" '
			+ 'class="card card-deck" '
			+ 'draggable="true" '
			+ 'alt="' + card.name + '" '
			+ '</img>';
		// Card Info Link
		outp += '<span class="card-info"><i class="fa fa-info-circle fa-lg" ></i></span>';
		outp += '</div>';
		return outp;
	}
			
// Listeners

// Load Decks
	// Select Deck / Paste and Load Deck
	$('.dropdown-deck').on('click','li',function()	{
		var idx = $(this).data('deckidx');
		var faction = $(this).closest('ul').data('faction');
		if (idx < 0)	{
			$('#loadModal').data('faction',faction);
			$('#loadModal').modal('show');
		}	else {
			newDeck(_decks[idx],faction);
		}
	});
	$('.btn-load').on('click',function () {
		$('#loadModal').modal('hide');
		newDeck($('#decklist').val(),$('#loadModal').data('faction'));
	});
	
// Update Resources
	$('[id$=resource]')
		.on('click','.btn-cred',function()	{
			var faction = $(this).closest('div').data('faction');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addCreds(value);
			updateInfo(faction);
		})
		.on('click','.btn-score',function()	{
			var faction = $(this).closest('div').data('faction');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addScore(value);
			updateInfo(faction);
		})
		;

// Plot actions
	$('[id$="plotarea"]')
		.on('click','.card-plot',function()	{
			var crd = _cards({"code":$(this).data("code")}).first();
			var faction = $(this).data("faction");
			
			var opacity = 1.5 - $(this).css('opacity');
			$(this).css('opacity',opacity);
			// Mark dropdown as 'Used'
			var option = $($('#' + faction + 'plotarea').find('option')[$(this).data('idx')]);
			if (opacity == 1)	{
				option.removeClass('plot-used');
			} else {
				option.addClass('plot-used');				
			}
			// Update Gold to match Faction 
			// TODO + [GOLD] modifiers 
			players[faction].setCreds(crd.Gold);
			updateInfo(faction);
		})
		.on('change','.select-plot',function()	{
			var option = $(this.selectedOptions[0]);
			var crd = _cards({"code":option.data('code')}).first();
			var faction = $(this).closest('div').data('faction');
			var idx = $(this).find(":selected").index();
			
			var plotcard = $('#' + faction + 'plotarea').find('img');
			var plotcardinfo = $('#' + faction + 'plotarea').find('.card-info');
			plotcard.attr('src',crd.img);
			plotcard.data('code',crd.code);
			plotcard.data('idx',idx);
			plotcardinfo.data('code',crd.code);
			if ( option.hasClass('plot-used') )	{
				plotcard.css('opacity',0.5);
			}	else	{
				plotcard.css('opacity',1);
			}
		})
		;
				
// Claim
	$('[id$=hand]')
		.on('click','.btn-claim-int',function()	{
	// Select Random card from hand and discard
			var src = $(this).siblings('.region-installed');
			if (src.length > 0)	{
				var idx = Math.floor(Math.random() * src.length);
				var claimEle = src.get(idx);
				// Discard
				updateDiscardCard(claimEle);
			}
		});
		
		
// Menus
	$(document)
		.on('click','.card-deck',function()	{
			if ( $(this).hasClass('card-selected'))	{
				$(document).find('.card-deck').removeClass('card-selected');
				$('#popupmenu').css('display','none');
			} else {
				$(this).addClass('card-selected');
				showCtxMenu(this);
			}
		})
		.on('click','.btn-select',function()	{
			$('#popupmenu').css('display','none');
			$(document).find('.card-deck').removeClass('card-selected');
			var action = $(this).data('action');
			var deckidx = $(this).closest('div').data('idx');
			var faction = $(this).closest('div').data('faction');
			var card = decks[faction].getCard(deckidx);
			var ele = $('#' + faction + 'area').find('[data-idx="' + deckidx + '"]');
			switch(action)	{
				case 'actPlay':
					// Determine Target
					switch (card.Type)	{
						case 'Character':
						case 'Location':
							ele.detach();
							ele.appendTo('#' + faction + 'char');
							break;
						default:
							updateDiscardCard(ele);
					}
					
			}
		})
		;
		
	function showCtxMenu(ele)	{
		var faction = $(ele).closest('.region-installed').data('faction');
		var idx = $(ele).closest('.region-installed').data('idx');
		var region = $(ele).closest('div.region').attr('name');
		// Context Menus
		var buttons = [];
		var outp;
		switch (region)	{
			case ('Hand'):
				buttons.push ({"title":"Play", "action":"actPlay"});
				buttons.push (
					$(ele).closest('div.region').hasClass('card-kneel')
						? {"title":"Stand", "action":"actStand"}
						: {"title":"Kneel", "action":"actKneel"}
				);	
				buttons.push ({"title":"Power", "action":"actPower"});
				buttons.push ({"title":"Token", "action":"actToken"});
				buttons.push ({"title":"Move", "action":"actMove"});
				break;
			case 'Play':
				buttons.push (
					$(ele).closest('div.region').hasClass('card-kneel')
						? {"title":"Stand", "action":"actStand"}
						: {"title":"Kneel", "action":"actKneel"}
				);	
				buttons.push ({"title":"Move", "action":"actMove"});
				break;
		}
		outp = '<div class="small"><b>Action</b></div>'
		outp += '<div class="btn-group-vertical btn-group-sm" '
			+ 'data-idx="' + idx + '" '
			+ 'data-faction="' + faction + '" '
			+ 'style="padding: 5px;">';
		$.each(buttons, function(id, btn)	{
			outp += '<button type="button" class="btn btn-default btn-select" '
				+ 'data-action="' + btn.action + '"'
				+ '>' 
				+ btn.title
				+ '</button>'
				
		});
		outp += '</div>';		
		
		var menuL = $(ele).offset().left + $(ele).closest('.region-installed').width() + 5;
		var menuT = $(ele).offset().top;
		$('#popupmenu').html(outp);
		var position = {"left": menuL, "top": menuT }
		$('#popupmenu').css(position);
		$('#popupmenu').css('display','block');
	}
	
	
	
	
// Screen Rendering
	function updateDiscardCard(ele)	{
		var faction = $(ele).closest('div').data('faction')
		decks[faction].discardCard($(ele).data('idx'));
		$('#' + faction + 'discard').find('img').attr('src',$(ele).find('img').attr('src'));
		$('#' + faction + 'discard').find('.card-count').html(decks[faction].cardsInDiscard());
		$(ele).remove();
	}
	
	function updateInfo(faction)	{
		var deck = decks[faction];
		var icon = '';
		deck.getMeta('idname').match(/House\s(.+)/);
		icon = RegExp.$1;
		icon = (icon == '' ? 'nightswatch' : icon.toLowerCase());
		var infoout = '<span class="deck-name">' + deck.getMeta('title') + '</span>'
			+ '<span class="card-info-id" data-code="' + deck.getMeta('idcode') + '">'
				+ '<b>' + deck.getMeta('idname') + '</b>'
				+ '&nbsp;<span class="icon-' + icon + '"></span>'
			+ '</span>'
			+ '<br>'
			+ '<span class="card-info-id" data-code="' + deck.getMeta('agcode') + '">'
				+ '<b>' + deck.getMeta('agname') + '</b>'
			+ '</span>';
		$('#' + faction + 'info').html (infoout);
		$('#' + faction + 'creds').html(players[faction].getCreds());
		$('#' + faction + 'score').html(players[faction].getScore());
		if (faction == 'run') {
			$('#runmu').html(players['run'].getMU());
		}
	}
		
	function updatePlots(faction)	{
		var outp = '';
		var _cards = TAFFY(CARDS);	// Temporary
	// Plot Select		
		outp += '<div class="input-group" data-faction="' + faction + '">'
			+ '<span class="input-group-addon">Plot</span>'
			+ '<select class="select-plot form-control input-sm" id="' + faction + 'plotsel">';
		$.each(decks[faction].getMeta("plots"),function(idx,code)	{
			var card = _cards({"code":code}).first();
			outp += '<option class="opt-plot" data-code="' + card.code + '" data-idx="' + idx + '">' 
				+ card.name 
				+ '&nbsp;&nbsp;'
				+ card.Gold + '/'
				+ card.Initiative + '/'
				+ card.Claim
				+ '&nbsp;(' + card.Reserve + ')'
				+ '</option>';
		});
		outp += '<select>'
			+ '</div>';
	// Image Block && Select first plot	
		card = _cards({"code":decks[faction].getMeta("plots")[0]}).first();
		outp += '<div class="region-installed">'
			+ '<img class="card-plot" data-faction="' + faction + '" data-code="' + card.code + '" data-idx=0 src="' + card.img + '"></img>'
			+ '<span class="card-info" data-code="' + card.code + '">'
			+ '<i class="fa fa-info-circle fa-lg"></i>'
			+ '</span>'
			+ '</div>';
		$('#' + faction + 'plotarea').html(outp);
	}
});