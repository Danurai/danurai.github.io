/* Deckbuilder Script */

$(document).ready(function () {
	// Cards and TAFFY loaded in prior includes
	_cards = TAFFY(CARDS);
	var filter = {};
	var crdFilter = [];
	var facFilter = [];
	var setFilter = [];
	
	var decklist = TAFFY();
	
	updateSets()
	updateTableBody();

/* BUILD TAB */
	$('#tablebody').on('change','input[type=radio]',function() {
		var cardcode = this.name.substring(4);

		var card = _cards({"code":cardcode}).first();
		card["qty"] = parseInt($(this).val(),10);
		
		switch (card.Type) {
			case ("Faction"):
				decklist({"Type":"Faction"}).remove();
				if (card.qty>0) {decklist.insert(card)};
				break;
			case ("Agenda"):
				decklist({"Type":"Agenda"}).remove();
				if (card.qty>0) {decklist.insert(card)};
				break;
			default:
				decklist({"code":card.code}).remove();
				if (card.qty>0) {decklist.insert(card);}
		}
		
		updateTableBody();
		writedeck();
		writeoutput();
	});
	
	$('#cardfilter').on('change','input[type=checkbox]',function() {
		var idx = $.inArray($(this).attr('name'),crdFilter);
		if (idx == -1 && this.checked) {
			crdFilter.push ($(this).attr('name'));
		} else {
			if (!this.checked) {
				crdFilter.splice(idx,1);
			}
		}
		if (crdFilter.length > 0) {
			filter['Type'] = crdFilter;
		} else {
			delete filter.Type;
		}
		updateTableBody();
	});
	$('#factionfilter').on('change','input[type=checkbox]', function() {
		var idx = $.inArray($(this).attr('name'),facFilter);
		if (idx == -1 && this.checked) {
			facFilter.push ($(this).attr('name'));
		} else {
			if (!this.checked) {
				facFilter.splice(idx,1);
			}
		}
		//TODO - EMPTY FACTIONS
		if (facFilter.length > 0) {
			filter['Faction'] = facFilter;
		} else {
			delete filter.Faction;
		}
		updateTableBody();
	});
	$('#agendaFilter').on('change', function () {
		updateTableBody();
	});
	
	function updateTableBody() {
		$('#tablebody').empty();
		
		var fac_name = []; 
		fac_name.push (decklist({"Type":"Faction"}).count()>0 ? decklist({"Type":"Faction"}).first().Faction : '');
		if ( $.inArray('Neutral',facFilter) ) { fac_name.push('Neutral'); }
		var ag_name = decklist({"Type":"Agenda"}).count()>0 ? decklist({"Type":"Agenda"}).first().Faction : '';
		if (ag_name == '') { ag_name = "Neutral"; }
		
		if ($('#agendaFilter')[0].checked == true) {
			// Reset Filter based on Faction and Agenda
			filter = [{"Faction":fac_name}];
			if (ag_name != '') { filter.push ({"Faction":ag_name,"Loyal":false});}
			$.each(filter, function (id) {
				if (setFilter != '') { filter[id]["setcode"] = setFilter; }
				if (crdFilter != '') { filter[id]["Type"] = crdFilter; }
			});
			$('#factionfilter label').each(function(id,btn) {
				$(btn).addClass('btn-disabled');
			});
		} else {
			filter = {};
			if (facFilter != '') {filter["Faction"] = facFilter;}
			if (crdFilter != '') {filter["Type"] = crdFilter;}
			if (setFilter.length > 0) {filter["setcode"] = setFilter}
			$('#factionfilter label').each(function(id,btn) {
				$(btn).removeClass('btn-disabled');
			});
		}
		
		console.log (filter);
		_cards(filter).order("code").each(function(r) {
			$('#tablebody').append (buildRow(r));
		});
	}
	function buildRow (r) {
	/* Row: House, Name, Cost, Strength */
		var outp = '';
		var core = localStorage.getItem('set-core') == null ? 1 : localStorage.getItem('set-core') ;
		
		var inset = 0;
		var maxallowed = 0;
		
		switch (r.Type) {
			case ("Faction"):
			case ("Agenda"):
				maxallowed = 1;
				break;
			default:
				maxallowed = typeof r.limit !== "undefined" ? r.limit : 3;
				maxallowed = (r.Set == "Core Set" ? Math.min(r.Quantity * core, maxallowed) : maxallowed);
		}
		inset = decklist({"code":r.code}).count() != 0 ? decklist({"code":r.code}).first().qty : 0;
		
		var btns = '<div class="btn-group" data-toggle="buttons">';
		for (var i=0; i<=maxallowed; i++) {
			btns += '<label class="btn btn-xs btn-default' + (i==inset?' active':'') + '"><input type="radio" name="qty-' + r.code + '" value="' + i + '">' + i + '</label>';
		}
		btns += '</div>';
		
		outp = '<tr>'
			+ '<td>' + btns
			//+ '<td>' + (typeof r.Faction !== "undefined" ? r.Faction : "") + '</td>'
			+ '<td><span class="card" data-code="' + r.code + '">' + (r.Unique ? '&diams;&nbsp;' : '') + r.name + '</td>'
			+ '<td>' + (typeof r.Type !== "undefined" ? r.Type : "") + '</td>'
			+ '<td>' + (typeof r.Cost !== "undefined" ? r.Cost : "") + '</td>'
			+ '<td>' + (typeof r.Strength !== "undefined" ? r.Strength : "") + '</td>'
			//+ '<td>' + r.Set + ' #' + r.Number + '</td>'
			+ '</tr>';
		return (outp);
	}
	
	function writedeck()	{
		var outp = '';
		
		outp += '<h4>Faction: '
			+ (decklist({"Type":"Faction"}).count() > 0 ? decklist({"Type":"Faction"}).first().name : '')
			+ (decklist({"Type":"Agenda"}).count() > 0 ? ' (' + decklist({"Type":"Agenda"}).first().name + ')': '')
			+ '</h4>';
		
		outp += '<h4>Plot (' + decklist({"Type":"Plot"}).sum("qty") + ')</h4>';
		decklist({"Type":"Plot"}).order("name").each(function (card) {
			outp += '<div class="card" data-code="' + card.code + '">' + card.qty + 'x ' + card.name + '</div>';
		});
		
		
		deckTypes = ["Character","Attachment","Event","Location"];
		outp += '<h4>Total Cards: (' + decklist({"Type":deckTypes}).sum("qty") + ')</h4>';
		
		console.log (decklist({"Type":deckTypes}).stringify());
		
		$.each(deckTypes, function (id,cardtype) {
			if (decklist({"Type":cardtype}).count() > 0) {
				outp += '<div><b>' + cardtype + ' (' + decklist({"Type":cardtype}).sum("qty") + ')</b>';
				decklist({"Type":cardtype}).order("name").each(function (card) {
					outp += '<br>' + card.qty + 'x <a href="#" class="card" data-code="' + card.code + '">' + card.name + '</a>';
				});
				outp += '</div>';
			}
		});
		
		$('#decklist').html(outp);
	}
	function writeoutput() {
		var exp = '';
		
		exp = 'Created using danurai.github.io/agot2 deck builder\n\nFaction:\n ' + decklist({"Type":"Faction"}).first().name.replace('House ','');
		exp += '\n\nTotal Cards: (' + decklist({"Type":["Character","Attachment","Event","Location"]}).sum("qty") + ')';
		$.each(["Agenda","Plot","Character","Attachment","Event","Location"],function (id,type) {
			exp += '\n\n' + type;
			decklist({"Type":type}).order("name").each(function (card) {
				exp += '\n' + card.qty + 'x ' + card.name + ' (' + card.Set + ')'
			});
		});
		$('#deckload').val(exp);}

		
/* SETS TAB */
	// SETS: Json {Set: {code: code: number: number}}
	// <div id="setlist"></div>
	
	$('#setlist').on('click','input',function() {
		localStorage.setItem($(this).attr('name'),this.checked);
		updateSetFilter();
	});
	$('#setlist').on('change','input[type=radio]',function() {
		localStorage.setItem('set-core',$(this).val());
		updateSetFilter();
	});
	
	function updateSets()	{
		var outp = '';
		var core = localStorage.getItem('set-core') == null ? 1 : localStorage.getItem('set-core') ;
		
		$.each(SETS, function (key, set) {
			if (key == "Core Set") {
				outp += '<div class="btn-group" data-toggle="buttons">';
				for (var i=1; i<4; i++) {
					outp += '<label class="btn btn-xs btn-default' + (i==core?' active':'') + '"><input type="radio" name="qty-core" value="' + i + '">' + i + '</label>';
				}
				outp += '&nbsp;Core Sets</div>';
			} else {
				var setowned = localStorage.getItem('set-' + set.code);
				outp += '<div class="checkbox"><label><input type="checkbox" value="" name="set-' + set.code + '"' + (setowned=="true"?' checked':'') + '>' + key + '</label></div>';
			}
		});
		$('#setlist').html (outp);
		updateSetFilter();
	}
	
	function updateSetFilter() {
		/* build set filter */
		setFilter = [];
		$.each(SETS,function(key, set) {
			if (key == 'Core Set') {
				setFilter.push ('core');
			} else {
				if (localStorage.getItem('set-' + set.code) == "true") {
					setFilter.push (set.code)
				}
			}
		});
		filter['setcode'] = setFilter;
		console.log (filter);
		updateTableBody();
	}
	
/* CHECK TAB */
	$('#loaddeck').on('click',function () {
	// Create decklist from cards
		var str = $('#deckload').val();
		var crd;
		
		str.match(/Faction:\s+(.+)/g);
		faction = RegExp.$1;
		
		if (faction != '') {
			faction = (faction == "The Night's Watch" ? faction : 'House ' + faction);
			crd = _cards({"name":faction}).first();
			crd["qty"] = 1;
			decklist.insert(crd);
		}
		
		var regex = /([0-9])x\s(.+)\s\((.+)\)/g;
		var res = str.match(regex);
				
		$.each(res, function (id, item) {
			item.match(regex);
			var qty = parseInt(RegExp.$1, 10);
			crd = _cards({"name":RegExp.$2,"Set":RegExp.$3}).first();
			crd.qty = qty;
			
			decklist.insert(crd);
		});
		console.log('Deck Loaded');
		console.log (decklist);
		
		updateTableBody();
		writedeck();
		//newGame();
	});
	
	$('.btn-draw').on('click',function() {
		if ($(this).attr('val') == 0) {
			newGame();
		} else {
			var n = $(this).attr('val') == "all" ? deck.length : $(this).attr('val');
			drawCards(n);
		}
		$('#draw1').prop('disabled',deck.length == 0);
		$('#drawall').prop('disabled',deck.length == 0);
		$('#draw2').prop('disabled',deck.length < 2);
		$('#draw7').prop('disabled',deck.length < 7);
	});
	// Refresh Title
	$('#title_card').on('click','img',function () {
		drawTitle();
	});
	
	// Make cards 50% opaque when clicked
	$('#plot_cards').on('click','.card',function() {
		$(this).css('opacity', 1.5 - parseFloat($(this).css('opacity')));
		//var id = $(this).data('cardno');
		//var set = $(this).data('cardset')
		//var card = _cards({"Number":id,"Set":set}).first();
		
		var card = _cards({"code":$(this).data('code')}).first();
		$('#plot_data').html ('<h4>Plot: ' + card.name + '</h4>Gold: ' + card.Gold + ' Initiative: ' + card.Initiative + ' Claim: ' + card.Claim + ' Reserve: ' + card.Reserve); // + '<br><br>' + card.CardText);
	});
	$('#hand').on('click','.card',function() {
		$(this).css('opacity', 1.5 - parseFloat($(this).css('opacity')));
	})
			
	$('#deckload').on("mouseenter",function () {
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text: 'Paste in a decklist in <a href="http://www.cardgamedb.com">CardGameDB.com</a> format.'
				+ '<br><br>Faction should be in the format:<br><em>Faction:<br>&nbsp;&lt;faction&gt;</em>'
				+ '<br><br>Cards should be in the format:<br><em>3x &lt;card name&gt; (&lt;Card Set&gt;)</em>'
				+ '<br><br>Agenda listed as a standard card e.g. <em>1x Fealty (Core Set)</em>'
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false,
				width: 500
			},
			position: {
				my: 'left-center',
				at: 'right-center',
				viewport : $(window)
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});
	
	function newGame() {
		_deck = shuffle(_deck);
		deck = _deck.slice();
		drawFactionPlots();
		drawTitle();
		$('#hand').html ('');
		drawCards(7);
	}
});