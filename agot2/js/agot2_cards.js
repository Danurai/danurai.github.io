/* Card List Scripts */

$(document).ready(function () {
	// Cards SETS and TAFFY loaded in prior includes
	_cards = TAFFY(CARDS);
	
	write_sets();
	run_search($('#search-input').val());
	
	function write_sets() {
		var outp = '';
		$.each(SETS, function(key, set) {
			outp += '<div><a class="cardset" href="cardlist.php?q=e:' + set.code + '">' + key + '</a></div>';
		});
		$('#sets').html (outp);
	}
	
	function run_search(filter) {
		var outp = "";
		var f = parsefilter(filter);
		var cardfilter;
		if ( $.isEmptyObject(f) == false) {
			cardfilter  = f;
		}
		$('#search-cardlist').empty();
		_cards(cardfilter).order("code").each(function (r) {
			/*
				<th>Name</th>
				<th>Type</th>
				<th>Faction</th>
				<th>Cost</th>
				<th>Strength</th>
				<th>Set</th>
			*/
			outp = '<tr>'
				+ '<td><span class="card" data-code="' + r.code + '">' + (r.Unique ? '&diams;&nbsp;' : '') + r.name + '</td>'
				+ '<td>' + (typeof r.Type !== "undefined" ? r.Type : "") + '</td>'
				+ '<td>' + (typeof r.Faction !== "undefined" ? r.Faction : "") + '</td>'
				+ '<td>' + (typeof r.Cost !== "undefined" ? r.Cost : "") + (typeof r.Gold !== "undefined" ? r.Gold : "") + '</td>'
				+ '<td>' + (typeof r.Strength !== "undefined" ? r.Strength : "") + (typeof r.Initiative !== "undefined" ? r.Initiative : "") + '</td>'
				+ '<td>' + r.Set + ' #' + r.Number + '</td>';
			$('#search-cardlist').append (outp);
			//outp += '<div class="card" data-code="' + r.code + '">' + (r.Unique ? '&diams;&nbsp;' :'' ) + r.name + '</div>';
		});
	}
	
	
});
