/* qtip */

$(document).ready(function () {
	
	$("body").on("mouseenter",".card", function() {
		var card = _cards({"code":$(this).data('code')}).first();
		
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
					+ (typeof card.Faction !== "undefined" ? '<div class="small" style="float: left;">' + card.Faction + '</div>' : 'Neutral')
					+ '<div class="small" style="text-align: right;">' + card.Set + ' #' + card.Number + '</div>'
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
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
	
});