var decks = {};
var players = {};
var regions = {};
var handsize = 7;
var playerids = ['p1','p2'];

$(document).ready(function ()	{
// Initialisation
	var _cards = TAFFY(CARDS);
	var htmlout = '';
	
	htmlout = '<li data-deckidx="-1"><a role="menuitem"><b><em>Paste Deck</em></b></a></li>';
	$.each(_decks, function (idx,strdeck)	{
		htmlout += '<li data-deckidx="' + idx + '"><a role="menuitem">' + strdeck.match(/(.+)/g)[0] + '</a></li>';
	});
	
	$.each(playerids,function(id,faction)	{
	// Pre-populate list of decks :: Alt: get published decklist from netrunnerdb\thronesdb etc https://netrunnerdb.com/api/2.0/public/decklist/29088
		$('#' + faction + 'decks').html(htmlout);
	// Set region arrays
		regions[faction] = {};
	// Create new Player and decks
		players[faction] = new agot2Player(faction);
		loadDeck(_decks[id],faction);
	// Update Player Display area(s) - Part of resetDeck
	})
	
	function loadDeck(decklist,faction)	{
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
		// Shuffle, draw, clear & render
		var faction = deck.getMeta('faction');
		deck.resetCards();
		players[faction].reset();
		regions[faction][faction + "hand"] = [];
		regions[faction][faction + "char"] = [];
		regions[faction][faction + "loc"] = [];
		regions[faction][faction + "deck"] = [];
		regions[faction][faction + "discard"] = [];
		regions[faction][faction + "dead"] = [];
		updateInfo(faction);
		updatePlots(faction);
	//Draw
		for (var n=0; n<handsize; n++)	{drawCard(deck);}
		//updateRegion(faction);
	}
	function drawCard(deck, idx=0)	{
		var faction = deck.getMeta('faction');
		var code = deck.draw(idx);
		var isRoot = false;
		if (code != "00000")	{
			isRoot = _cards({"code":code,}).first().type_code != 'ice';
			regions[faction][faction + 'hand'].push({"code":code,"counters":0,"standing":true});
			updateRegion(faction);
		}
	}
// Create deck from decklist data. Returns deck = {title,id,idname,agenda,agendaid,data[card codes],plot[card codes]}
	function parseDeck(data)	{
		var crd;
		var deck = {};
		
	// Deck Name, Faction and Agenda
		var res = data.match(/(.+)/g);
		deck.title = res[0];
		deck.idname = res[1];
		deck.agenda = res[2];
		
		deck.id = _cards({"name":deck.idname}).first().code; 		//Special Characters - CT fixed by not using \\uuml; on textarea
		deck.agendaid = _cards({"name":deck.agenda}).first().code; 
		
		deck.data = [];
		deck.plot = [];
		
		var regex = /([0-9])x\s(.+)\s\((.+)\)/g;						// Nx <Card name> (<pack name>)		/([0-9])x\s((.+)\s\s\W+|(.+))/g;				// Look out for STAR special character (ANR)
		var res = data.match(regex);
				
		$.each(res, function (id, item) {
			item.match(regex);
			var qty = parseInt(RegExp.$1, 10);
			crd = _cards({"name":RegExp.$2,"Set":RegExp.$3}).first();
			if (crd.Type == 'Plot')	{
				deck.plot.push(crd.code);
			} else {
				for (var i=0; i < qty; i++)	{deck.data.push(crd.code);}
			}
		});
		console.log('Deck Loaded:');
		console.log(deck);
		
		return deck;		
	}
			
			
// Listeners

// Load Decks
	// Select Deck
	$('.dropdown-deck').on('click','li',function()	{
		var idx = $(this).data('deckidx');
		var faction = $(this).closest('ul').attr('for');
		if (idx < 0)	{
			//$('#decklist').val('');
			$('#loadModal').data('faction',faction);
			$('#loadModal').modal('show');
		}	else {
			loadDeck(_decks[idx],faction);
		}
	});
	// Paste and Load Deck
	$('.btn-load').on('click',function () {
		$('#loadModal').modal('hide');
		loadDeck($('#decklist').val(),$('#loadModal').data('faction'));
	});
	
// Update Resources
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
		})
		;
	
// Create Menus
	$(document)
		.on('click','.card-deck', function(ev)	{
			var outp = '';
			var src  = $(this).closest('div.region').attr('id');
			var idx = $(this).data('idx');
			var faction = $(this).closest('div.region').attr('for');
			
			var kneelstand = regions[faction][src][getFrontCardId(regions[faction][src],idx)].standing?'Kneel':'Stand';
		
			// New Options
			// Play, Dead, Discard, Stand\Kneel, Add Power, Remove Power, Add Icon > Mil\Int\Pwr
			// Return to > Hand, Top of Deck, Deck and Shuffle 
			outp = '<div class="small"><b>Action</b></div>'
				+ '<div class="btn-group-vertical btn-group-sm" style="padding: 5px;">'
				+ menuButton(src,idx,'act_play',faction,"Play")
				+ menuButton(src,idx,'act_kneelstand',faction, kneelstand )
				+ menuButton(src,idx,'act_addpower',faction,"Add Power")
				+ menuButton(src,idx,'act_dead',faction,"Dead")
				+ menuButton(src,idx,'act_discard',faction,"Discard")
				+ menuButton(src,idx,'act_rtn_hand',faction,"Hand")
				+ menuButton(src,idx,'act_rtn_topdeck',faction,"Top of Deck")
				+ menuButton(src,idx,'act_rtn_deckshuffle',faction,"Deck and Shuffle")
				+ '</div>';
			
			showPopUp(ev, outp);
		})
		.on('click','.card-counter',function(ev)	{
			var outp = '';
			var src  = $(this).closest('div.region').attr('id');
			var idx = $(this).parent().find('.card-deck').data('idx');
			var faction = $(this).closest('div.region').attr('for');
			outp = '<div class="small"><b>Move To:</b></div>'
				+ '<div class="btn-group-vertical btn-group-sm" style="padding: 5px;">'
				+ menuButton(src,idx,"act_addpower",faction,'<span class="icon-power"></span> Add Power')
				+ menuButton(src,idx,"act_rmvpower",faction,'<span class="icon-power"></span> Remove Power')
				+ menuButton(src,idx,"act_rmvallpower",faction,'<span class="icon-power"></span> Remove All Power')
				+ '</div>';
				
			showPopUp(ev, outp);
		})
		.on('click','.card-root',function(ev)	{
			var faction = $(this).closest('div').attr('for');
			var reg = $(this).closest('div').data('region');
			var outp = '';
			var regCardCodes = [];
			var card;
			
			outp = '<div><b>Draw Cards</b></div>';
			if (reg == 'deck')	{
				outp += '<div class="btn-group" for="' + faction + '" style="padding: 5px;">'
					+ menuButton(faction + 'deck',1,'act_draw',faction,"1")
					+ menuButton(faction + 'deck',2,'act_draw',faction,"2")
					+ menuButton(faction + 'deck',7,'act_draw',faction,"to 7")
					+ menuButton(faction + 'deck',99,'act_draw',faction,"All")
					+ menuButton(faction + 'deck',0,'act_draw',faction,"Reset")
				+ '</div>';
				regCardCodes = decks[faction].getDeck();
			} else	{
				$.each(regions[faction][faction + reg], function (id,cardInfo)	{
					regCardCodes.push(cardInfo.code);
				});
			}
			
			outp += '<div class="btn-group drop' + ( (ev.pageY - $(window).scrollTop()) / $(window).height() > 0.5 ? 'up' : 'down') + '" style="padding: 5px;">'
				+ '<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">Choose <span class="caret"></span></button>';
			outp += '<ul class="dropdown-menu scrollable-menu" role="menu" for="' + faction + '" data-src="' + reg + '">';	
		
			$.each(regCardCodes, function(id,cardCode)	{
				card = _cards({"code":cardCode}).first();
				if (id == 10) { outp += '<li class="divider"></li>'; }
				outp += '<li style="cursor: pointer;" role="presentation" class="card-picker" data-index="' + id + '">'
					+ '<a role="menuitem" class="card-picker" data-code="' + cardCode + '">' + card.name + '</a></li>';
				});		
			outp += '</ul>';
			outp += '</div>';
			
			showPopUp(ev, outp);
		})
		.on('click','.card-plot',function()	{
			$(this).css('opacity',1.5 - $(this).css('opacity'));
			var crd = _cards({"code":$(this).data("code")}).first();
			var faction = $(this).data("faction");
			players[faction].setCreds(crd.Gold);
			updateInfo(faction);
		});
	// Menu Functions
	function menuButton(src,idx,tgt,faction,btnTxt)	{
		var btn = '<button type="button" class="btn btn-default btn-select" '
				+ 'data-src="' + src + '" '
				+ 'data-idx="' + idx + '" '
				+ 'data-tgt="' + tgt + '" '
				+ 'for="' + faction + '" '
				+ '>' 
				+ btnTxt
				+ '</button>'
		return btn;
	}
	function showPopUp(ev, outp)	{
		$('#popupmenu').html(outp);
		$('#popupmenu').css({"left":ev.pageX - 20,"top":ev.pageY - 20});
		$('#popupmenu').toggle();
	}

// Click on Menu Item
	$('#popupmenu')
		.on('click','.btn-select',function()	{
			var faction = $(this).attr('for');
			var src = regions[faction][$(this).data('src')];
			var idx = $(this).data('idx');
			var action = $(this).data('tgt');
			
			$('#popupmenu').toggle();
			// Attachment - callback
			changeState(action,faction,src,idx,null);
		})
		.on('click','li.card-picker',function () {
			var faction = $(this).closest('ul').attr('for');
			var deck = decks[faction];
			var reg = $(this).closest('ul').data('src') ;
			var idx = $(this).data('index')
			if (reg != 'deck')	{
				changeState('act_drawid',faction,regions[faction][faction + reg],idx,regions[faction][faction + 'hand']);
			} else	{
				changeState('act_drawid',faction,[],idx,regions[faction][faction + 'hand']);
			}
			$('#popupmenu').toggle();
		})
		.on('mouseleave',function()	{
			$(this).css('display','none');
		});

// Process actions
	function changeState(action,faction,src,idx,tgt)	{
		var cost = 0;
		var crd;
		if (src.length > 0) {
			crd = _cards({"code":src[idx].code}).first();
			cost = parseInt(crd.Cost,10);
		}
		switch (action)	{
			case 'act_play':
				// Set Target Region
				switch (crd.Type)	{
					case 'Attachment':
					case 'Character':
						tgt = faction + 'char';
						break;
					case 'Location':
						tgt = faction + 'loc';
						break;
					default:
						tgt = faction + 'discard';
						break;
				}
				// Check Duplicates
				if ($('#' + tgt).find('div[data-code="' + crd.code + '"]').length > 0 && crd.Unique)	{	cost = 0; }
				// Check Cost
				if (cost <= players[faction].getCreds())	{
					players[faction].addCreds(cost * -1);
					moveCrd(src,idx,regions[faction][tgt]);
				}
				break;
			case 'act_kneelstand':
				// Stand or kneel foremost card if unique
				idx = getFrontCardId(src,idx);
				src[idx].standing = !src[idx].standing;
				break;
			case 'act_addpower':
				src[idx].counters ++;
				break;
			case 'act_rmvpower':
				src[idx].counters --;
				break;
			case 'act_rmvallpower':
				src[idx].counters = 0;
				break;
			case 'act_dead':
				moveCrd(src,idx,regions[faction][faction + 'dead']);
				break;
			case 'act_discard':
				//decks(faction).discardCard(src[idx].code);
				moveCrd(src,idx,regions[faction][faction + 'discard']);
				break;
			case 'act_rtn_hand':
				moveCrd(src,idx,regions[faction][faction + 'hand']);
				break;
			case 'act_rtn_topdeck':
				decks[faction].returnToDeck(src[idx].code,true);
				src.splice(idx,1);
				break;
			case 'act_rtn_deckshuffle':
				decks[faction].returnToDeck(src[idx].code);
				src.splice(idx,1);
				break;
			case 'act_draw':
				switch (idx)	{
					case 2:
						drawCard(decks[faction]);
					case 1:
						drawCard(decks[faction]);
						break;
					case 7:
					// Draw To 7
						for (var i=regions[faction][faction + 'hand'].length; i<7; i++) {drawCard(decks[faction])};
						break;
					case 99:
						while (decks[faction].cardsInDeck() > 0) {drawCard(decks[faction])};
						break;
					case 0:
						resetDeck(decks[faction]);
						break;
					default:
				}
				break;
			case 'act_drawid':
				if (src.length == 0)	{	// deck
					drawCard(decks[faction],idx);
				} else	{
					moveCrd(src,idx,regions[faction][faction + 'hand']);
				}
				break;
			default:
		}
		updateRegion(faction);
	}
	function moveCrd(src,idx,tgt)	{
		var res, gain;
		tgt.push(src.splice(idx,1)[0]);
		tgt.slice(-1)[0].standing = true;
		
		var code = tgt.slice(-1)[0].code;
		var card = _cards({"code":code}).first();
		
		$.each(['p1','p2'],function(idx,faction) {
			updateInfo(faction);
			updateRegion(faction);
		});
	}
	function getFrontCardId(src,idx)	{
		var crd = _cards({"code":src[idx].code}).first();
		if (crd.Unique) {
			for (var id=idx; id<src.length; id++)	{
				idx = src[idx].code == src[id].code ? id : idx
			}
		}
		return idx;
	}
	


/* Screen Rendering Functions */
		
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
		var count;
		var crd;
		$.each(regions[faction], function(rgn,crds)	{
			outp = '<div class="region-title">' + $('#' + rgn).attr('name') + '</div>';
			
			switch (rgn)	{
				case (faction + 'deck'):
					outp += '<div class="region-root" data-region="deck" for="' + faction + '">';
					outp += '<img src="img\\card_back.png" class="card card-root" draggable="false" '
						+ (decks[faction].cardsInDeck() == 0 ? ' style="opacity: 0.5;" ' : '')
						+ '></img>';
					outp += '<span class="card-count">' + decks[faction].cardsInDeck() + '</span>';
					break;
				case (faction + 'discard'):
					count = regions[faction][faction + 'discard'].length;
					outp += '<div class="region-root" data-region="discard" for="' + faction + '">';
					if (count == 0)	{
						outp += '<img src="img\\card_back.png" class="card card-root" draggable="false" style="opacity: 0.5;"></img>';
					} else{
						crd = _cards({"code":regions[faction][rgn][count-1].code}).first();
						outp += '<img src="' + crd.img + '" class="card card-root" draggable="false" style="opacity: 0.5;" alt="' + crd.name + '"></img>';
					}
					outp += '<span class="card-count">' + count + '</span>';
					break;
				case(faction + 'dead'):
					count = regions[faction][faction + 'dead'].length;
					outp += '<div class="region-root" data-region="dead" for="' + faction + '">';
					if (count == 0)	{
						outp += '<img src="img\\card_back.png" class="card card-root" draggable="false" style="opacity: 0.5;"></img>';
					} else {
						crd = _cards({"code":regions[faction][rgn][count-1].code}).first();
						outp += '<img src="' + crd.img + '" class="card card-root" draggable="false" style="opacity: 0.5;" alt="' + crd.name + '"></img>';
					}
					outp += '<span class="card-count">' + count + '</span>';
					break;
				default:
					if (rgn == faction + 'char' || rgn == faction + 'loc')	{
						updateRegionCards(faction, $('#' + rgn), crds);
					} else {						
						$.each(crds, function(idx,regCrd)	{
							outp += getCardImgEle(regCrd,idx);
						});
					}
			}
			if (rgn != faction + 'char' && rgn != faction + 'loc')	{
				$('#' + rgn).html(outp);
			}
		});
	}
	function updateRegionCards(faction,region,cardList)	{
		var card;
		var installedCard;
		var imgClass;
		var imgStyle;
		var i;
		
		region.empty();
		
		$.each(cardList, function (idx,listItem)	{
			card = _cards({"code":listItem.code}).first();
			installedCard = region.find('div[data-code="' + card.code + '"]');
			imgClass = 'card card-deck' + (!listItem.standing ? ' card-kneel' : '');
			if (installedCard.length == 0 || !card.Unique)	{
				region.append(
					'<div class="region-installed" data-code="' + card.code + '">' 
					+ '<img class="' + imgClass + '" src="' + card.img + '" '
						+ 'draggable="true" '
						+ 'alt="' + card.title + '" '
						+ 'data-code="'+ card.code + '" '
						+ 'data-idx="' + idx + '"></img>'
					+ '</div>');
			} else {
			// Duplicate
				var dupecounter = installedCard.find('.dupe-value');
				if (dupecounter.length == 0)	{
					installedCard.append('<span class="dupe-counter"><span class="dupe-value">2</span></span>');
				} else {
					dupecounter.html (parseInt(dupecounter.html(),10)+1);
				}
				/*
				i = installedCard.find('img').length * 10;
				imgStyle = 'position: absolute; left: ' + i * 2 + 'px; ' + 'top: ' + i + 'px';
				installedCard.append(
					'<img class="' + imgClass + '" src="' + card.img + '" style="' + imgStyle + '" '
						+ 'draggable="true" '
						+ 'alt="' + card.title + '" '
						+ 'data-code="'+ card.code + '" '
						+ 'data-idx="' + idx + '"></img>'
				);
				*/
			}
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
	
	function updatePlotsX(faction)	{
		var outp = '';
		$.each(decks[faction].getMeta("plots"),function(idx,code)	{
			var crd = _cards({"code":code}).first();
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
		updatePlots2(faction);
	}
	function updatePlots(faction)	{
		var outp = '';
		outp = '<label for="' + faction + 'plotsel">Plots</label>'
			+ '<select class="selectpicker" id="' + faction + 'plotsel">'
		$.each(decks[faction].getMeta("plots"),function(idx,code)	{
			var crd = _cards({"code":code}).first();
			outp += '<option data-content=\"'
				+ '<img '
				+ 'src=\'' + crd.img + '\''
				+ 'class=\'card-plot\' '
				+ 'draggable=\'false\' '
				+ 'alt=\'' + crd.name + '\' '
				+ 'data-code=\''+ crd.code + '\' '
				+ 'data-faction=\'' + faction + '\' '
				+ 'data-idx=\'' + idx + '\'>'
				+ '</img>"'
				+ '</option>';
		});
		outp += '</select>'
		$('#' + faction + 'plota').html(outp);
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
