var decks = {};
var players = {};
var regions = {};
var handsize = 5;
var regCount;	//Corp Only
var playerids = ['corp','run'];
var turn;

$(document).ready(function ()	{
// Initialisation
	
	// Get latest card data - needs to be synchronous!
	//$.getJSON('https://netrunnerdb.com/api/2.0/public/cards', {_: new Date().getTime()}, function (json) {
	//	nrdb_cards = json.data
	//});
		
	var _cards = TAFFY(nrdb_cards.data);
	var htmlout = '';
	var imgurl = nrdb_cards.imageUrlTemplate;
	regCount = 0;
	
	regions['corp'] = {"stolen":[],"scored":[],"corphand":[],"hq":[],"archives":[],"randd":[]};
	regions['run'] = {"runhand":[],"resource":[],"hardware":[],"program":[],"identity":[]};
		
	$.each(playerids,function(id,faction)	{
		htmlout = '<li data-deckidx="-1"><a role="menuitem"><b><em>Paste Deck</em></b></a></li>';
		$.each(_decks[faction], function (idx,strdeck)	{
			htmlout += '<li data-deckidx="' + idx + '"><a role="menuitem">' + strdeck.match(/(.+)/g)[0] + '</a></li>';
		});
	// Pre-populate list of decks :: Alt: get published decklist from netrunnerdb\thronesdb etc https://netrunnerdb.com/api/2.0/public/decklist/29088
		$('#' + faction + 'decks').html(htmlout);
	// Load Initial Deck
		$('#' + faction + 'dl').html(_decks[faction][0]);
	// Create new Player and decks
		players[faction] = new anrPlayer(faction);
		loadDeck(_decks[faction][0]);
	});
	function loadDeck(decklist)	{
		//var decklist = $('#' + faction + 'dl').val();
		var deckinfo;
		var faction;
		
		deckinfo = parseDeck(decklist);
		
		faction = deckinfo.faction;
		
		if (faction != 'none')	{
			decks[faction] = new anrDeck(deckinfo.data);
			
			decks[faction].setMeta("title",deckinfo.title);
			decks[faction].setMeta("idcode",deckinfo.idcode);
			decks[faction].setMeta("idname",deckinfo.idname);
			decks[faction].setMeta("faction",faction);
			
			resetDeck(faction);
			
			updateInfo(faction);
			updateRegion(faction);
		}	else	{
			console.log ('Deck Load Failed: ' + deckinfo);
		}
	}	
	function resetDeck(faction)	{
		// Shuffle, draw, clear & render
		var deck = decks[faction];
		deck.resetCards();
		players[faction].reset();
		// Clear Regions
		if (faction == 'corp')	{
			$.each(regions['corp'],function(key,rng) {
				if (key.match(/^region/g))	{
					if ($('#' + key).length > 0 )	{
						$('#' + key).remove();
					}
				}
			});
			regions['corp'] = {"stolen":[],"scored":[],"corphand":[],"hq":[],"archives":[],"randd":[]};
			regCount = 0;
		}
		if (faction == 'run')	{
			regions['run'] = {"stack":[],"heap":[],"runhand":[],"resource":[],"hardware":[],"program":[],"identity":[]};
		// Special
			if ($('#bios').length != 0)	{ $('#bios').remove(); }
		}
		//Draw
		for (var n=0; n<5; n++)	{drawCard(deck);}
		switch(deck.getMeta('idcode'))	{
		// Andromeda: Dispossessed Ristie
			case '02083':
				handsize = 9
				while(regions.run.runhand.length < handsize)	{drawCard(deck);}
				break;
		// Ayla \"Bios\" Rahim: Simulant Specialist
			case '13012':
				drawCard(deck);
				regions['run']['bios'] = [];
				if ($('#bios').length == 0)	{
					$('#runarea').append ('<div class="col-md-12 region" id="bios" name="Bios" align="center" for="run"></div>');
				}
				for (var i=0; i<6; i++)	{
					moveCrd(regions.run.runhand,0,regions.run.bios);
				}
				break;
			default:
		}
	}
	function drawCard(deck, idx=0)	{
		var faction = deck.getMeta('faction');
		var code = deck.draw(idx);
		var isRoot = false;
		if (code != "00000")	{
			isRoot = _cards({"code":code,}).first().type_code != 'ice';
			regions[faction][faction + 'hand'].push({"code":code,"counters":0,"root":isRoot,"rez":faction=='run'});
			updateRegion(faction);
		}
	}
	// Create deck from decklist data. Returns deck = {title,id,idname,agenda,agendaid,data[card codes],plot[card codes]}
	
	function quickLoad(deckid)	{
		var decklist;
		var cardinfo;
				
		$.getJSON('https://netrunnerdb.com/api/2.0/public/deck/' + deckid, {_: new Date().getTime()}, function (json) {
						
			
			$.each(json.data[0].cards, function (code,qty)	{
				cardinfo = _cards({"code":code}).first();
				if (cardinfo.type_code == 'identity')	{
					decklist = json.data[0].name + '\n\n' +  cardinfo.title + '\n\n' + decklist;
				}	else	{
					decklist += qty + 'x ' + cardinfo.title + '\n';
				}
			});
			loadDeck(decklist);
		});
		
		
	}
	function parseDeck(data)	{
		var crd;
		var deck = {};
		
	// Deck name and ID
		var res = data.match(/(.+)/g);
		deck.title = res[0];
		deck.idname = res[1];
		
		var idcard = _cards({"title":deck.idname}).first();
		deck.idcode = idcard.code;
		//Special Characters - CT fixed by not using \\uuml; on textarea - Fixed with <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		deck.faction = idcard.side_code == 'runner' ? 'run' : 'corp';
		
		var regex = /([0-9])x\s((.+)\s\s\W+|(.+))/g;				// Look out for STAR special character
		//var regex = /([0-9])x\s((.+)(\s\u2605)|(.+)(\s\s\u25CF)|(.+))/g;
		
		var res = data.match(regex);
		
		deck.data = [];
		$.each(res, function (id, item) {
			item.match(regex);
			
			var qty = parseInt(RegExp.$1, 10);
			var cname = (RegExp.$3 != "" ? RegExp.$3 : RegExp.$2);
			
			crd = _cards({"title":cname}).first();
			for (var i=0; i < qty; i++)	{deck.data.push(crd.code);}
		});
		return deck;
	}
			
// Listeners
// Load Decks
	// Quickload
	$('#quickload').submit(function(e)	{
		e.preventDefault();
		var deckid = $('#txtquickload').val();
		quickLoad(deckid);
	});
	// Select Deck
	$('.dropdown-deck').on('click','li',function()	{
		var idx = $(this).data('deckidx');
		var faction = $(this).closest('ul').attr('for');
		if (idx < 0)	{
			//$('#decklist').val();
			$('#loadModal').modal('show');
		}	else {
			loadDeck(_decks[faction][idx]);
		}
	});
	// Paste and Load Deck
	$('.btn-load').on('click',function () {		
		$('#loadModal').modal('hide');
		loadDeck($('#decklist').val());
	});
	
	$('.btn-draw').on('click',function() {
		var faction = $(this).closest('div').attr('for');
		var deck = decks[faction];
		if ($(this).attr('val') == 0) {
			resetDeck(faction);
		} else {
			var n = $(this).attr('val') == "all" ? deck.cardsInDeck() : $(this).attr('val');
			for (var i=0; i<n; i++) {drawCard(deck)};
		}
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
		})
		.on('click','.btn-mu',function()	{
			var faction = $(this).closest('.btn-group').attr('for');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addMU(value);
			updateInfo(faction);
		})
		.on('click','.btn-click',function()	{
			var faction = $(this).closest('.btn-group').attr('for');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addClicks(value);
			updateInfo(faction);
		})
		.on('click','.btn-tag',function()	{
			var faction = $(this).closest('.btn-group').attr('for');
			var value = parseInt($(this).attr('val'),10);
			players[faction].addTags(value);
			updateInfo(faction);
		})
		.on('click','.btn-action',function() {
			var faction = $(this).closest('div').attr('for');
			var action = $(this).data('action');
			if (action == 'act_newturn')	{
				//if (players[faction].getClicks() == 0)	{
					players[faction].resetClicks();
					updateInfo(faction);
					if (faction == 'corp')	{ 
						changeState('act_draw','corp',[],1,null,null,null);
					} 
					players[faction].addTurn();
					updateInfo(faction);
					// Set Toggle
          var oldstate = $('#turncheck').prop("checked");
          $('#turncheck').prop("checked",(faction == "run"));
          if (oldstate != (faction == "run"))  {
            $('#turncheck').change();
          }
          
			} else if (players[faction].getClicks() > 0)	{
				//players[faction].addClicks(-1);
				// newturn, credit, draw
				if (action == 'act_credit')	{
					players[faction].addCreds(1);
					updateInfo(faction);
				} else  {
					changeState(action,faction,[],1,null,null,null);
				}
			}
		})
	// Brain Damage
		;
// Card info
	$(document)
		.on('click','.card-info',function(ev) {
			var outp = '';
			var card;
			var code = $(this).data('code').toString();
			
			if (typeof code !== 'undefined') {
				card = _cards({"code":code}).first();
				outp += '<img class="card-popup" src="' + getImageUrl(card) + '"></img>';
			}
			$('#popupmenu').html(outp);
			$('#popupmenu').css({"left":Math.max(ev.pageX - 150,0),"top":ev.pageY - 20});
			$('#popupmenu').toggle();
		})
		.on('click','.card-popup',function () {
			$('#popupmenu').css("display","none");
		});
	
// Create Menus
	$(document)
		.on('click','.card-deck', function(ev)	{
			var outp = '';
			var src  = $(this).closest('div.region').attr('id');
			var idx = $(this).data('idx');
			var faction = $(this).closest('div.region').attr('for');
			var rezzed = regions[faction][src][idx].rez;
			
			// New Options
			// Play, Score, Discard, Rez\Derez, Add Counter, Remove counter
			// Return to > Hand, Top of Deck, Deck and Shuffle 
			outp = '<div class="small"><b>Action</b></div>'
				+ '<div class="btn-group-vertical btn-group" style="padding: 5px;">'
				+ menuButton(src,idx,'act_' + faction + 'play',faction,"Play")
				+ menuButton(src,idx,'scored',faction, '<span class="icon-agenda"></span> Score')
				+ menuButton(src,idx,'act_addcounter',faction,"Add Counter")
				+ menuButton(src,idx,'act_rezunrez',faction,(rezzed ? 'UnRez' : 'Rez'))
				+ menuButton(src,idx,'act_discard',faction,"Discard")
				+ menuButton(src,idx,'act_rtn_hand',faction,"Hand")
				+ menuButton(src,idx,'act_rtn_topdeck',faction,"Top of Deck")
				+ menuButton(src,idx,'act_rtn_btmdeck',faction,"Bottom of Deck")
				+ '</div>';
			
			showPopUp(ev, outp);
		})
		.on('click','.card-counter',function(ev)	{
			var outp = '';
			var src  = $(this).closest('div.region').attr('id');
			var idx = $(this).parent().find('.card-deck').data('idx');
			var faction = $(this).closest('div.region').attr('for');
			outp = '<div class="small"><b>Move To:</b></div>'
				+ '<div class="btn-group-vertical btn-group" style="padding: 5px;">'
				+ menuButton(src,idx,"act_addcounter",faction,'<span class="icon-click"></span> Add Counter')
				+ menuButton(src,idx,"act_rmvcounter",faction,'<span class="icon-click"></span> Remove Counter')
				+ menuButton(src,idx,"act_rmvallcounter",faction,'<span class="icon-click"></span> Remove All')
				+ '</div>';
			
			$('#popupmenu').html(outp);
			$('#popupmenu').css({"left":ev.pageX,"top":ev.pageY});
			$('#popupmenu').toggle();
		})
		.on('click','.card-root',function(ev)	{
			var faction = $(this).closest('div').attr('for');
			var reg = $(this).closest('div').data('region');
			var outp = '';
			var regCardCodes = [];
			var card;
			
			outp = '<div><b>Draw Cards</b></div>';
			switch (reg)	{
				case 'randd':
				case 'stack':
					outp += '<div class="btn-group" for="' + faction + '" style="padding: 5px;">'
						+ (decks[faction].getMeta('idcode') == '07029' ? menuButton(reg,7029,'act_draw',faction,"Maxx") : '')	//MaxX: Maximum Punk Rock
						+ menuButton('',1,'act_draw',faction,"1")
						+ menuButton('',2,'act_draw',faction,"2")
						+ menuButton('',3,'act_draw',faction,"3")
						+ menuButton('',99,'act_draw',faction,"All")
						+ menuButton('',0,'act_draw',faction,"Mulligan")
						+ menuButton('',-1,'act_draw',faction,"Reset")
						+ menuButton('',-2,'act_draw',faction,"Shuffle")
					+ '</div>';
					regCardCodes = decks[faction].getDeck();
					break;
				case 'archives':
				case 'heap':
					regCardCodes = decks[faction].getDiscard();
					break;
				default:
					$.each(regions[faction][reg], function (id,cardInfo)	{
						regCardCodes.push(cardInfo.code);
					});
			}
			
			outp += '<div class="btn-group drop' + ( (ev.pageY - $(window).scrollTop()) / $(window).height() > 0.5 ? 'up' : 'down') + '" style="padding: 5px;">'
				+ '<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">Choose <span class="caret"></span></button>';
			outp += '<ul class="dropdown-menu scrollable-menu" role="menu" for="' + faction + '" data-src="' + reg + '">';	
		
			$.each(regCardCodes, function(id,cardCode)	{
				card = _cards({"code":cardCode}).first();
				//if (id == 10) { outp += '<li class="divider"></li>'; }	// Divider
				outp += '<li style="cursor: pointer;" role="presentation" class="card-picker" data-index="' + id + '">'
					+ '<a role="menuitem">' + card.title + '</a></li>';
					//+ '<a role="menuitem" data-code="' + cardCode + '">' + card.title + '</a></li>';
				});		
			outp += '</ul>';
			outp += '</div>';
			
			showPopUp(ev, outp);
		})
		.on('click','.btn-access',function(ev)	{
			var crdlist = [];
			var accessdeck;
			var crd;
			var src = '';
			var accessSrc;
			var tgt = 'stolen';
			var idx;
			
			accessSrc = $(this).data('tgt');
			
			if (accessSrc == "hand")	{
				$.each(regions['corp']['corphand'],function(idx,item)	{
					crdlist.push(item.code);
				})
				accessdeck = new anrDeck(crdlist);
				accessdeck.resetCards();	//shuffles
				src = 'corphand';
			} else {
				accessdeck = decks['corp'];
			}
			crds = accessdeck.getDeck();
			var outp = "<div>Access:</div>"
				+ '<div class="btn-group-vertical">'
			$.each(crds,function(idx,code)	{
				crd = _cards({"code":code}).first();
				if (accessSrc == "hand") {
					$.each(regions['corp']['corphand'],function (i,handcrd)	{	// Loop through hand to find Index of shuffled card.code
						if (handcrd.code == crd.code) {
							idx = i;
						}
					});
				}
				outp += menuButton(src,idx,tgt,'corp',crd.title,true);
			})
			outp += '</div>';
			$('#popupmenu').html(outp);
			$('#popupmenu').css({"left":ev.pageX,"top":ev.pageY});
			$('#popupmenu').toggle();
		})
		;
	function moveToPopUp(faction,src,idx,ev)	{
		outp = '<div><b>Move to</b></div>'
			+ '<div class="btn-group-vertical btn-group" style="padding: 5px;">';
		$.each(regions[faction],function(tgt,crds)	{
			if ( !tgt.match(/^region/g) || crds.length > 0 )	{
				outp += menuButton(src,idx,tgt,faction,$('#' + tgt).attr('name') + (tgt == src ? ' >>' : ''));
			}
		});
		outp += menuButton(src,idx,"act_newregion",faction,"New Region");
		outp += '</div>';
			
		showPopUp(ev,outp);
	}
	function menuButton(src,idx,tgt,faction,btnTxt,secret=false)	{
		var btn = '<button type="button" class="btn btn-default btn-select'
				+ (secret ? ' btn-secret" ' : '" ')
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
	
// Click Menu
	$('#popupmenu')
		.on('click','.btn-select',function(ev)	{
			var faction = $(this).attr('for');
			var src = regions[faction][$(this).data('src')];
			var tgt = regions[faction][$(this).data('tgt')];
			var idx = $(this).data('idx');
			var action = $(this).data('tgt');
			
			$('#popupmenu').toggle();
			
			if (typeof src === 'undefined') {
				src = [];	// Deck
			}
			if ($(this).data('tgt') == 'stolen' || $(this).data('tgt') == 'scored') 	{ 
				// if src[idx].counters < crd.advancement_cost && $(this).data('tgt') = 'scored'
				if (src.length == 0)	{	//  Steal from Deck
					drawCard(decks[faction],idx);
					src = regions['corp']['corphand'];
					idx = src.length - 1;
				} 
				var crd = _cards({"code":src[idx].code}).first();
				src[idx].rez = true;
				players[$(this).data('tgt') == 'stolen' ? 'run' : 'corp'].addScore(getAgendaPoints(crd));
				changeState(action,faction,src,idx,tgt,ev,$(this).data('src'));
			} else {
			// act_host - how to host a card
				changeState(action,faction,src,idx,tgt,ev,$(this).data('src'));
			}
		})
		.on('click','li.card-picker',function () {
			var faction = $(this).closest('ul').attr('for');
			var reg = $(this).closest('ul').data('src');
			var idx = $(this).data('index');
			var src;
			$('#popupmenu').toggle();
			
			switch (reg)	{
				case 'heap':
				case 'archives':
				case 'stack':
				case 'randd':
					src = [];
					break;
				default:
					src = regions[faction][reg];
			}
			
			changeState('act_drawid',faction,src,idx,regions[faction][faction + 'hand'],null,reg);
		})
		.on('mouseleave',function()	{
			//$(this).css('display','none');
		})
		;
		
	function changeState(action,faction,src,idx,tgt,ev,srcrgn)	{
		var cost = 0;
		var crd;
		var loginfo = '';
		var clicks = 0;
		
		if (src.length > 0) {
			crd = _cards({"code":src[idx].code}).first();
			cost = parseInt(crd.Cost,10);
		}
		switch (action)	{
			case 'act_corpplay':
				if (crd.type_code == 'operation')	{
					if (crd.cost <= players["corp"].getCreds())	{
						players['corp'].addCreds(parseInt(crd.cost,10) * -1);
						players['corp'].addClicks(-1);
						
						loginfo = 'Corp Played ' + crd.title;
						clicks = 1;
						
						var res = crd.text.match(/Gain [0-9]*\[credit\]|\nGain [0-9]*\[credit\]/g);
						if (res)	{
							res[0].match(/Gain ([0-9]*)\[credit\]/g)	//RegExp.$1;
							var creds = RegExp.$1;
							players['corp'].addCreds(parseInt(creds,10));
							loginfo += ' to gain ' + creds + ' creds';
						}
						decks['corp'].discardCard(src[idx].code);
						src.splice(idx,1);
					}	else	{
					// show error border
						console.log ('Not enough creds!');
					}
				} else {
					moveToPopUp(faction,srcrgn,idx,ev);
				}
				break;
			case 'act_runplay':
				if (crd.cost <= players['run'].getCreds())	{	// #afford
					players['run'].addCreds(parseInt(crd.cost,10) * -1);
					players['run'].addMU(getMUCost(crd));
					players['run'].addClicks(-1);
					
					loginfo = "Runner played " + crd.title;
					clicks = 1;
					
					if (crd.text.match(/^Gain ([0-9]*)\[credit\]/g))	{
						var creds = RegExp.$1;
						loginfo += 'Runner played ' + crd.title;
						players['run'].addCreds(parseInt(creds,10));
						loginfo += ' to gain ' + creds + ' creds';
					}
					
					if (crd.type_code == 'event') {
						decks['run'].discardCard(src[idx].code);
						src.splice(idx,1);
					} else {
						moveCrd(src,idx,regions['run'][crd.type_code]);
					}
				} else	{
					// show error border
					console.log ('Not enough creds!');
				}
				break;
			case 'act_rezunrez':
				if (crd.type_code == 'agenda')	{
					src[idx].rez = !src[idx].rez;					
				}
				if (crd.cost <= players['corp'].getCreds())	{
					players['corp'].addCreds(crd.cost * -1);
					src[idx].rez = !src[idx].rez;
				}
				break;
			case 'act_addcounter':
				src[idx].counters ++;
				break;
			case 'act_rmvcounter':
				src[idx].counters --;
				break;
			case 'act_rmvallcounter':
				src[idx].counters = 0;
				break;
			case 'act_discard':
				decks[faction].discardCard(src[idx].code);
				src.splice(idx,1);
				break;
			case 'act_rtn_hand':
				moveCrd(src,idx,regions[faction][faction + 'hand']);
				break;
			case 'act_rtn_topdeck':
				decks[faction].returnToDeck(src[idx].code,true);	// card code, top?
				src.splice(idx,1);
				break;
			case 'act_rtn_btmdeck':
				decks[faction].returnToDeck(src[idx].code,false);
				src.splice(idx,1);
				break;
			case 'act_draw':
				switch (idx)	{
					case -2:	//shuffle
						decks[faction].shuffleDeck();
						break;
					case -1:	// Reset
						resetDeck(faction);
						break;
					case 0:	// Mulligan
						while (regions[faction][faction+'hand'].length > 0)	{
							decks[faction].returnToDeck(regions[faction][faction+'hand'][0].code);
							regions[faction][faction+'hand'].splice(0,1);
						}
            decks[faction].shuffleDeck();
						for (var i=0; i<handsize; i++)	{ drawCard(decks[faction]); }
						break;
					case 99:	// All
						while (decks[faction].cardsInDeck() > 0) {drawCard(decks[faction])};
						break;
					case 7029:	// MaxX
						//trash, trash, draw
						src = regions.run.runhand;
						idx = src.length;
						for (var i=0; i<2; i++)	{
							drawCard(decks[faction]);
							decks.run.discardCard(src[idx].code);
							src.splice(idx,1);							
						}
						drawCard(decks[faction]);
						break;
					default:
						for (var i=0; i<idx; i++) { drawCard(decks[faction]); }
						break;
				}
				break;
			case 'act_drawid':
				if (srcrgn == 'randd' || srcrgn == 'stack')	{	// deck
					drawCard(decks[faction],idx);
				} else if (srcrgn == 'archives' || srcrgn == 'heap')	{
					regions[faction][faction + 'hand'].push({"code":decks[faction].discardToHand(idx),"counters":0,"root":false,"rez":faction=='run'});
					updateRegion(faction);
				} else {
					moveCrd(src,idx,regions[faction][faction + 'hand']);
				}
				break;
			case 'act_newregion':
				regCount++;
				$('#corparea').append ('<div class="col-md-12 region" id="region' + regCount + '" name="Server ' + regCount + '" "="" for="corp"><div class="region-title">Server ' + regCount + '</div></div>')
				tgt = regions['corp']['region' + regCount] = [];
				moveCrd(src,idx,tgt);
				break;
			case 'act_removetag':
				if (players[faction].getCreds() > 1 && players[faction].getTags() > 0)	{
					players[faction].addCreds(-2);
					players[faction].addTags(-1);
				}
				break;
			case 'act_damage':
				// trash a random card from the runners grip
				src = regions['run']['runhand'];
				if (src.length > 0)	{
					var idx = Math.floor(Math.random() * src.length)
					decks['run'].discardCard(src[idx].code);
					src.splice(idx,1);
				}
				updateRegion('run');
				break;
			default:
				moveCrd(src,idx,tgt);
				break;
		}
		updateInfo(faction);
		updateRegion(faction);
		//console.log(regions[faction]);
	}
	function moveCrd(src,idx,tgt)	{
		var crd = _cards({"code":src[idx].code}).first();
		
		if (crd.type_code == "asset" || crd.type_code == "agenda" || crd.type_code == "upgrade")	{
			tgt.splice(0,0,src.splice(idx,1)[0]);
		} else	{
			tgt.push(src.splice(idx,1)[0]);
		}
		
		$.each(['corp','run'],function(idx,faction) {
			updateInfo(faction);
			updateRegion(faction);
		});
	}
	
// Screen Rendering Functions
	
	function updateInfo(faction)	{
		var deck = decks[faction];
		$('#' + faction + 'info').html ('<h3>' + deck.getMeta('title') + '</h3><b>' + deck.getMeta('idname') + '</b>');
		$('#' + faction + 'creds').html(players[faction].getCreds());
		$('#' + faction + 'score').html(players[faction].getScore());
		$('#' + faction + 'clicks').html(players[faction].getClicks());
		$('#' + faction + 'tags').html(players[faction].getTags());
		$('#' + faction + 'turn').html(players[faction].getTurn());
		if (faction == 'run') {
			$('#runmu').html(players['run'].getMU());
		}
	}
	
	function updateRegion(faction)	{
		var outp;
		// Remove empty corp regions
		$('#corparea').find('.remote').each(function(idx,ele)	{
			var rgn = $(ele).attr('id');
			if (regions['corp'][rgn].length == 0)	{
				delete regions['corp'][rgn];
				ele.remove();
			}
		});
		$.each(regions[faction], function(rgn,crds)	{
			outp = '<div class="region-title">' + $('#' + rgn).attr('name') + '</div>';
		// Add Root for HQ, Archives & R&D
			switch (rgn)	{
				case ('randd'):
				case ('stack'):
					outp += '<div class="region-root" for="' + faction + '" data-region="' + rgn + '">';
					outp += '<img src="img\\' + faction + '_back.png" class="card card-root" draggable="false"'
						+ (decks[faction].cardsInDeck() == 0 ? ' style="opacity: 0.5;"' : '')
						+ '></img>';
					outp += '<span class="card-count">' + decks[faction].cardsInDeck() + '</span>';
					break;
				case ('archives'):
				case ('heap'):
					outp += '<div class="region-root" for="' + faction + '" data-region="' + rgn + '">';
					outp += '<img src="img\\' + faction + '_back.png" class="card card-root" draggable="false"'
						+ (decks[faction].cardsInDiscard() == 0 ? ' style="opacity: 0.5;"' : '')
						+ '></img>';
					outp += '<span class="card-count">' + decks[faction].cardsInDiscard() + '</span>';
					break;
				case ('hq'):
					var idcard = _cards({'code':decks[faction].getMeta('idcode')}).first();
					outp += '<div class="region-installed region-installed-' + faction + '">'
					   + '<div class="region-root" data-region="' + rgn + '" for="' + faction + '">'
						+ '<img src="' + getImageUrl(idcard) + '" '
						+ 'class="card" '
						+ 'draggable="false">'
						+ '</img>'
						+ '<span class="card-info" data-code="' + idcard.code + '">'
						+ '<i class="fa fa-info-circle fa-lg" aria-hidden="true"></i></span>';
					break;
				case ('identity'):
					var idcard = _cards({'code':decks[faction].getMeta('idcode')}).first();
					outp += '<div class="region-installed region-installed-' + faction + '">'
					   + '<div class="region-root" data-region="' + rgn + '" for="' + faction + '">'
						+ '<img src="' + getImageUrl(idcard) + '" '
						+ 'class="card" '
						+ 'draggable="false">'
						+ '</img>'
						+ '<span class="card-info" data-code="' + idcard.code + '">'
						+ '<i class="fa fa-info-circle fa-lg" aria-hidden="true"></i></span>'
						+ '</div>';
					break;
			}
			$.each(crds, function(idx,regCrd)	{
				outp += getCardImgEle(faction,rgn,regCrd,idx);
			});
			$('#' + rgn).html(outp);
						
			$('#corparea').find('.card-unrezzed').css('opacity',0.5 - ($('#navbar-run').css("opacity")/2));
			
			// close empty regions
			if (rgn.match(/^region/g))	{
				if (regions['corp'][rgn].length == 0 && $('#' + rgn).length > 0 )	{
					$('#' + rgn).remove();
				}
			}
			//console.log (regions[faction]);
		});
	}
	function getCardImgEle(faction,rgn,regCrd,idx)	{
		var crd = _cards({"code":regCrd.code}).first();
		var outp = '<div class="region-installed region-installed-' + faction + '">';
		outp += '<img '
			+ 'src="' + getImageUrl(crd) + '"'
			+ 'class="card card-deck'
			+ (!regCrd.rez && $.inArray(rgn,['corphand'])==-1 ? ' card-unrezzed' : '')
			+ '" draggable="true" '
			+ 'alt="' + crd.title + '" '
			+ 'data-code="'+ crd.code + '" '
			+ 'data-idx="'+ idx + '">'
			+ '</img>';
		if (regCrd.counters > 0)	{
			outp += '<span class="card-counter"><span class="counter-value">' + regCrd.counters + '</span></span>';
		}
		outp += '<span class="card-info" data-code="' + crd.code + '"><i class="fa fa-info-circle fa-lg" aria-hidden="true"></i></span>';
		outp += '</div>';
		return outp;
	}
	function getImageUrl(crd)	{
		var rtnurl = crd.image_url;
		if (typeof rtnurl === 'undefined')	{
			rtnurl = imgurl.replace('{code}',crd.code)
		}
		return rtnurl;
	}

// Turn Transitions
	$('#turncheck').on('change', function() {
		var opmod = $('#navbar-run').css("opacity");
		$('#navbar-run').fadeTo(400,1 - opmod);
		$('#corparea').find('.card-unrezzed').fadeTo(400,(opmod/2));
	});
	
// Drag and Drop
	$(document)
		.on('dragstart','.card-deck', function(ev)	{
			var jsonData = {};
			jsonData["faction"] = $(this).closest('div.region').attr('for');
			jsonData["src"] = $(this).closest('div.region').attr('id');
			jsonData["idx"] = $(this).data('idx');
			//console.log(jsonData);
			ev.originalEvent.dataTransfer.setData('text/plain',JSON.stringify(jsonData));
		})
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
		})
		;
});

function getMUCost(card)	{
	var mu = 0;
	if (typeof card.memory_cost !== 'undefined')	{
		mu = parseInt(card.memory_cost,10) * -1;
	} else if (card.text.match(/\+([0-9])\[mu\]/g)) {
		mu = RegExp.$1;
	}
	return parseInt(mu,10);
}
function getAgendaPoints(card,region)	{
	var agenda = 0;
	if (typeof card.agenda_points !== 'undefined')	{
		agenda = parseInt(card.agenda_points,10);
	}
	// Food
	if (card.title == 'Global Food Initiative' && region == 'stolen')	{
		agenda --;
	}
	return agenda;
}