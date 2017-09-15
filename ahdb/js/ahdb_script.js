
$(document).ready(function ()	{
	var _cards;
	var _packs;
	var f = {};
	var f_faction = [];
	var f_type = [];
	
	$.getJSON('js/ahdb_packs.js', function(json)	{
		_packs = json;
		$.getJSON('js/ahdb_cards.js', function(json)	{
				_cards = TAFFY(json);
				
				
				console.log(_packs);
				//Populate Pack List and Set Option List
					
				// Deck Builder
				
				// Populate table
				updateTableBody();
				// Card Draw Sim
				
				// Statistics
				
		});
	});
	
	function updateTableBody()	{
		var oupt;
		$('#tblcards').empty();
		_cards(f).order("faction_code,type_code,name,xp").each(function(card)	{
			outp = '<tr class="' + card.faction_code + '">'
				+ '<td class="card" data-code="' + card.code + '">' + card.name + '</td>'
				+ '<td>' + card.faction_name + '</td>'
				+ '<td>' + card.type_name + '</td>'
				+ '<td>' + (typeof card.xp != 'undefined' ? card.xp : '-') + '</td>'
				+ '</tr>';
			$('#tblcards').append(outp);
		})
	}
	
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
	
	$('body').on('mouseenter','.card',function()	{
		var cardinfo = _cards({"code":$(this).data('code')}).first();
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  JSON.stringify(cardinfo)
				},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my: 'left center',
				at: 'right center',
				viewport : $(window)
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});
});