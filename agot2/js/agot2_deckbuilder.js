/* Deckbuilder Script */

$(document).ready(function () {
	// Cards and TAFFY loaded in prior includes
	_cards = TAFFY(CARDS);
	var filter = {};
	var crdFilter = [];
	var facFilter = [];
	var deck = {"Faction":"","Agenda":"","Plot":{},"Deck":{}};
	
	updateSets()
	updateTableBody();
	
	function updateTableBody() {
		$('#tablebody').empty();
		console.log (filter);
		_cards(filter).order("code").each(function(r) {
			$('#tablebody').append (buildRow(r));
		});
	}
	
	function buildRow (r) {
	/* Row: House, Name, Cost, Strength */
		var outp = '';
		var core = localStorage.getItem('set-core') == null ? 1 : localStorage.getItem('set-core') ;
		
		var btns = '<div class="btn-group" data-toggle="buttons">';
		var inset = 0;
		
		switch (r.Type) {
			case ("Faction"):
				inset = (r.code == deck.Faction ? 1 : 0);
				maxallowed = 1;
				break;
			case ("Agenda"):
				inset = (r.code == deck.Agenda ? 1 : 0);
				maxallowed = 1;
				break;
			case ("Plot"):
				maxallowed = r.limit;
				inset = deck.Plot[r.code] != null ? deck.Plot[r.code] : 0;
				break;
			default:
				maxallowed = (r.Set == "Core Set" ? Math.min(r.Quantity * core, 3) : 3);
				inset = deck.Deck[r.code] != null ? deck.Deck[r.code] : 0;
		}
		
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
	
/* SETS */
	// SETS: Json {Set: {code: code: number: number}}
	// <div id="setlist"></div>
	
	
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
	
	$('#setlist').on('click','input',function() {
		localStorage.setItem($(this).attr('name'),this.checked);
		updateSetFilter();
	});
	$('#setlist').on('change','input[type=radio]',function() {
		localStorage.setItem('set-core',$(this).val());
		updateSetFilter();
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
	
	$('#tablebody').on('change','input[type=radio]',function() {
		var cardcode = this.name.substring(4);
		var cardqty = $(this).val();
		
		var card = _cards({"code":cardcode}).first();
		
		switch (card.Type) {
			case ("Faction"):
				deck.Faction = cardcode;
				break;
			case ("Agenda"):
				deck.Agenda = cardcode;
				break;
			case ("Plot"):
				delete deck.Plot[cardcode];
				if (cardqty>0) {deck.Plot[cardcode] = cardqty;}
				break;
			default:
				delete deck.Deck[cardcode];
				if (cardqty>0) {deck.Deck[cardcode] = cardqty;}
				
		}
		writedeck();
		updateTableBody();
	})
	
	function writedeck()	{
	// Deck:
	// { "Faction":code, "Agenda":code, "Plot":[], "Deck":[]}
		console.log(deck);
		var outp = '';
		
		outp = '<h4>' + _cards({"code":deck.Faction}).first().name + '</h4>'
			+ '<b>' + deck.Agenda + '</b>';
		
		outp += '<p><b>Plots</b>:';
		$.each(deck.Plot, function (key,val) {
			card = _cards({"code":key}).first();
			outp += '<br><span class="card" data-code=' + key + '>' + card.name + ' (' + val + ')</span>';
		});
		
		$('#decklist').html(outp);
	}
	
	
	function updateSetFilter() {
		/* build set filter */
		var setfilter = [];
		$.each(SETS,function(key, set) {
			if (key == 'Core Set') {
				setfilter.push ('core');
			} else {
				if (localStorage.getItem('set-' + set.code) == "true") {
					setfilter.push (set.code)
				}
			}
		});
		filter['setcode'] = setfilter;
		console.log (filter);
		updateTableBody();
	}
	
});