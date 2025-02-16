/* qtip */

$(document).ready(function () {
	
	$("body").on("mouseenter",".card", function() {
		var card = _cards({"code":$(this).data('code').toString()}).first();
		
		var faction_s = typeof card.Faction !== "undefined" ? card.Faction.match(/\w+/) : "Neutral";
		var icons = '';
		
		if (typeof card.Icons !== "undefined") {
			icons += card.Icons.indexOf('Military') != -1 ? '<img src="/agot2/img/gt01_challengeicons_military.png" class="card-icon"></img>' : '<span class="card-icon"></span>';
			icons += card.Icons.indexOf('Intrigue') != -1 ? '<img src="/agot2/img/gt01_challengeicons_intrigue.png" class="card-icon"></img>' : '<span class="card-icon"></span>';
			icons += card.Icons.indexOf('Power') != -1 ? '<img src="/agot2/img/gt01_challengeicons_power.png" class="card-icon"></img>' : '<span style="display: inline-block; width: 30px;"></span>';
		}
			
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  '<div class="cardthumb cardthumb-' + card.Type.toLowerCase() + ' pull-right" style="background-image:url(' + card.img + ')"></div>'
					+ '<h4 class="card-title">' 
					+ (card.Unique ? '&diams;&nbsp;' : '')
					+ card.name + '</h4>'
					+ '<br>'
					+ (card.Type == "Plot" ? 'Gold: ' + card.Gold + ' Initiative: ' + card.Initiative + ' Claim: ' + card.Claim + ' Reserve: ' + card.Reserve : '')
					+ (typeof card.Cost !== "undefined" ? 'Cost: ' + card.Cost + ' ' : '' ) //+ (typeof card.Cost !== "undefined" ? '<div class="gold-icon"><div class="number">' + card.Cost + '</div></div>' : '')
					+ (typeof card.Strength !== "undefined" ? 'Str: ' + card.Strength + ' ' : '') 	//(typeof card.Strength !== "undefined" ? '<div class="strength-icon"><div class="number">' + card.Strength + '</div></div>' : '')
					+ (icons != '' ? icons : '')
					+ '<p class="' + faction_s + '-card">' + card.CardText
					+ (typeof card.Faction !== "undefined" ? '<div class="small" style="float: left;">' + card.Faction + (card.Loyal == true ? ' (Loyal)' : '') + '</div>' : 'Neutral')
					+ '<div class="small" style="text-align: right;">' + card.Set + ' #' + card.Number + '</div>'
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
	
/* CHECK Tab - Draw simulator */

	$("body").on("mouseenter",".check_card", function() {
		var card = _cards({"code":$(this).data('code').toString()}).first();
		
		var faction_s = typeof card.Faction !== "undefined" ? card.Faction.match(/\w+/) : "Neutral";
			
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  '<b>' 
					+ (card.Unique ? '&diams;&nbsp;' : '')
					+ card.name + '</b>'
					+ '<br>'
					+ (card.Type == "Plot" ? 'Gold: ' + card.Gold + ' Initiative: ' + card.Initiative + ' Claim: ' + card.Claim + ' Reserve: ' + card.Reserve : '')
					+ (typeof card.Cost !== "undefined" ? 'Cost: ' + card.Cost + ' ' : '' )
					+ (typeof card.Strength !== "undefined" ? 'Str: ' + card.Strength + ' ' : '')
//					+ (icons != '' ? icons : '')
					+ '<p class="' + faction_s + '-card">' + card.CardText
					+ (typeof card.Faction !== "undefined" ? '<div class="small" style="float: left;">' + card.Faction + (card.Loyal == true ? ' (Loyal)' : '') + '</div>' : 'Neutral')
					+ '<div class="small" style="text-align: right;">' + card.Set + ' #' + card.Number + '</div>'
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
	
	$('#filterlist').on('mouseenter', function () {
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  'Search tags:'
					+ '<br>e:&nbsp;&nbsp;Set Code'
					+ '<br>f:&nbsp;&nbsp;Faction Code'
					+ '<br>t:&nbsp;&nbsp;Type'
					+ '<br>x:&nbsp;&nbsp;Description'
					+ '<br>c:&nbsp;&nbsp;Claim'
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my: 'right top',
				at: 'right top',
				viewport : $(window)
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});
	
});