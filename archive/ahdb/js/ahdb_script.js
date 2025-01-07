
$(document).ready(function ()	{
	var _cards;
	var _packs;
	var f = {};
	var f_faction = [];
	var f_type = [];
	var deck = [
		{"investigator":"","cards":{}},
		{"investigator":"","cards":{}},
		{"investigator":"","cards":{}},
		{"investigator":"","cards":{}}
		];
	var cDeck = 0;
	
	
	$.getJSON('js/ahdb_cards.js', function(json)	{
			_cards = TAFFY(json);
		$.getJSON('js/ahdb_packs.js', function(json)	{
			_packs = TAFFY(json);
				
		//Populate Pack and Set Option List
			updatePacks();
			updateSetFilter();
		// Populate table
			updateTableBody();
		// Deck Builder
			//pre-set deck[] from POST - php
		// Card Draw Sim
			// By deck and by party
			
		// Statistics
			// By deck and by party
		});
	});
	
// COLLECTION TAB
	$('#packlist').on('click','input',function() {
		localStorage.setItem($(this).attr('name'),this.checked);
		updateSetFilter();
		updateTableBody();
	});
	$('#coresets').on('change','input[type=radio]',function() {
		localStorage.setItem('ah-corecount',$(this).val());
		updateSetFilter();
		updateTableBody();
	});
	
	function updatePacks()	{
		var outp;
			
		// Write Pack list as checkboxes
		$('#packlist').empty();
		_packs().order("cycle_position,position").each(function(pack)	{
			outp = '<div class="checkbox">'
			 + '<label><input type="checkbox" value="" name="ah-pack-' + pack.code + '">' + pack.name + '</label>'
			 + '</div>';
			 // Position = 1 BOLD
			$('#packlist').append(outp);
		});
		// Set pack checkboxes as per local variables
		var corecount = localStorage.getItem('ah-corecount') == null ? 1 : localStorage.getItem('ah-corecount');
		_packs().each(function (pack)	{
			if (pack.code == "core")	{
				$('#coresets').find('input[value="' + corecount + '"]').closest('label').button('toggle');
			}
			if (localStorage.getItem('ah-pack-' + pack.code) == "true") {
				$('#packlist').find('input[name="ah-pack-' + pack.code + '"]').attr('checked',true);
			}
		});
	}
	
	function updateSetFilter() {
		/* build set filter */
		var f_pack = [];
		_packs().each(function (pack)	{			
			if (localStorage.getItem('ah-pack-' + pack.code) == "true") {
				f_pack.push (pack.code)
			}
		});
		
		f['pack_code'] = f_pack;
	}

// BUILD TAB

	$('#faction_code').on('change','input[type=checkbox]',function()	{
		var idx = $.inArray($(this).attr('name'),f_faction);
		if (idx == -1 && this.checked) {
			f_faction.push ($(this).attr('name'));
		} else {
			if (!this.checked) {
				f_faction.splice(idx,1);
			}
		}
		if (f_faction.length > 0) {
			f['faction_code'] = f_faction;
		} else {
			delete f.faction_code;
		}
		updateTableBody();
	});
	$('#type_code').on('change','input[type=checkbox]',function()	{
		var idx = $.inArray($(this).attr('name'),f_type);
		if (idx == -1 && this.checked) {
			f_type.push ($(this).attr('name'));
		} else {
			if (!this.checked) {
				f_type.splice(idx,1);
			}
		}
		if (f_type.length > 0) {
			f['type_code'] = f_type;
		} else {
			delete f.type_code;
		}
		updateTableBody();
	});
	$('#tblcards').on('change','input[type=radio]',function() {
		updateDeck(getActiveInvID(),this.name.substring(4), parseInt($(this).val(),10));
	});
	$('#navdecklist').on('shown.bs.tab', 'a[data-toggle="tab"]',function()	{
		console.log (getActiveInvID());
		updateTableBody();
	});
	
	function updateDeck(d,code,qty)	{
		var card = _cards({"code":code}).first();
		if (card.type_code == "investigator")	{
			deck[d].investigator = (qty > 0 ? code : "");
		} else {
			if (qty == 0 && typeof (deck[d].cards[code]) != 'undefined')	{
				delete deck[d].cards[code];
			} else {
				deck[d].cards[code] = qty;
			}
		}
		console.log (deck[d]);
		updateTableBody();
		updateDeckList(d);
	}
	
	function updateDeckList(d)	{
		var outp = '';
		var c;
		var deckdata = TAFFY();
		
		
		$.each(deck[d].cards, function(key,qty)	{
			c = _cards({"code":key}).first();
			c.qty = qty;
			deckdata.insert(c);
		});
		if (deck[d].investigator != "")	{
			c = _cards({"code":deck[d].investigator}).first();
			outp += '<h3 class="' + c.faction_code + ' card" data-code="' + c.code + '">' 
				+ c.name + ' - ' + c.subname 
				+ ' ' + '<span class="ah ah-' + c.faction_code + ' ' + c.faction_code + '"></span>'
				+  '</h3>';
			outp += '<div>Cards: ' + deckdata().sum("qty") 
				+ ' XP: ' + deckdata().sum("xp")
				+ '</div>';
			outp += '<span class="ah ah-willpower" />&nbsp;' + c.skill_willpower + '&nbsp;&nbsp;'
				+ '<span class="ah ah-intellect" />&nbsp;' + c.skill_intellect + '&nbsp;&nbsp;'
				+ '<span class="ah ah-combat" />&nbsp;' + c.skill_combat + '&nbsp;&nbsp;'
				+ '<span class="ah ah-agility"></span>&nbsp;' + c.skill_agility;
			$('#invtab' + d).html(c.name);
			
			outp += '<div class="small">Investigator Cards</div>';
			$.each(c.deck_requirements.card,function(key,card)	{
				c = _cards({"code":card}).first();
				outp += '<div class="card" data-code="' + c.code + '">' + c.name + ' (' + c.type_name + ')</div>';
			});
		}
		$.each(deckdata().distinct("type_name"),function(id,tn)	{
			outp += '<div class="small">' + tn + '</div>';
			deckdata({"type_name":tn}).order("name").each(function(c)	{
				outp += '<div class="card ' + c.faction_code + '" data-code="' + c.code + '">' + c.name + '</div>';
			});			
		});
		$('#decklist' + d).html(outp);
	}
	
	function updateTableBody()	{
		var d = getActiveInvID();
		$('#tblcards').empty();
		_cards(f).order("faction_code,type_code,name,xp").each(function(card)	{
			if (typeof card.restrictions == 'undefined') {
				$('#tblcards').append(buildrow(d,card));
			}
		})
	}
	function buildrow(d,card)	{
		var maxqty;
		var corecount = localStorage.getItem('ah-corecount') == null ? 1 : localStorage.getItem('ah-corecount') ;
		maxqty = card.pack_code == "core" ? corecount * card.quantity : card.quantity;
		maxqty = card.type_code == 'investigator' ? 1 : maxqty;
		
		var qtyInDeck = 0;
		
		var used = 0;
		for (var i=0; i<4; i++)	{
			used += (i != d && typeof deck[i].cards[card.code] != 'undefined' ? deck[i].cards[card.code] : 0);
		}
		
		if (card.type_code == "investigator")	{
			qtyInDeck = (card.code == deck[d].investigator ? 1 : 0);
		} else	{
			qtyInDeck = (typeof deck[d].cards[card.code] != 'undefined' ? deck[d].cards[card.code] : 0);
		}
		
		var btns = '<div class="btn-group" data-toggle="buttons">';
		for (var i=0; i<=maxqty; i++) {
			btns += '<label class="btn btn-xs btn-default' + (i==qtyInDeck?' active':'') + '"' + (i > maxqty - used ? ' disabled' : '') + '><input type="radio" name="qty-' + card.code + '" value="' + i + '">' + i + '</label>';
		}
		btns += '</div>';
		
		var outp = '<tr class="' + card.faction_code + '">'
			+ '<td>' + btns + '</td>'
			+ '<td class="card" data-code="' + card.code + '">' + card.name + '</td>'
			+ '<td>' + card.faction_name + '</td>'
			+ '<td>' + card.type_name + '</td>'
			+ '<td>' + (typeof card.xp != 'undefined' ? card.xp : '-') + '</td>'
			+ '</tr>';
		return outp;
	}
	
	function getActiveInvID()	{
		var i = 0;
		i = $('#navdecklist').find('li.active').index();
		return i;
	}
	
// QTIP
	$('body').on('mouseenter','.card',function()	{
		var card = _cards({"code":$(this).data('code')}).first();
		var outp = JSON.stringify(card);
		//console.log (outp);
		outp = '<h4 class="' + card.faction_code + '">' + card.name + '</h4>'
			+ '<br>' + card.text
			+ (typeof card.flavor != 'undefined' && card.flavor != "" ? '<br><br><em>' + card.flavor + '</em>' : '')
			+ '<br><span class="small">' + card.pack_name + ' #' + card.position + '</span>'
		
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  outp	//JSON.stringify(card)
				},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my: 'top center',
				at: 'bottom center',
				viewport : $(window)
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});

});