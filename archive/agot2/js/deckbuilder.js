/* Deckbuilder Script */

$(document).ready(function () {
	// Cards and TAFFY loaded in prior includes
	_cards = TAFFY(CARDS);
	
	filter={};
	updateTableBody();
	
	function updateTableBody() {
		$('#tablebody').empty();
		_cards(filter).order("code").each(function(r) {
			$('#tablebody').append (buildRow(r));
		});
	}
	
	function buildRow (r) {
	/* Row: House, Name, Cost, Strength */
		var outp = '';
		
		var btns = '<div class="btn-group" data-toggle="buttons">';
		for (var i=0; i<4; i++) {
			btns += '<label class="btn btn-xs btn-default' + (i==0?' active':'') + '"><input type="radio" name="qty-' + r.code + '" value="' + i + '">' + i + '</label>';
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
	
});