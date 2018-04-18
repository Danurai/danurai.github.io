/* qtip */

$(document).ready(function () {
	
	$("body").on("mouseenter",".card-tooltip", function() {
		var card = _cards({"code":$(this).data('code').toString()}).first();
					
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  '<div class="cardthumb cardthumb-' + card.type_code + '" style="background-image:url(' + card.img + ')"></div>'
					+ '<h4 class="card-title">' 
					+ (card.unique ? '&bull;&nbsp;' : '')
					+ card.name + '</h4>'
					+ '<br>'
          + '<div class="my-2">'
					+ (typeof card.cost !== "undefined" ? '<i class="fas fa-cog"></i>: ' + card.cost + ' ' : '' ) 
					+ (typeof card.command_icons !== "undefined" ? '<i class="fas fa-gavel"></i>: ' + card.command_icons + ' ' : '' ) 
					+ (typeof card.shields !== "undefined" ? '<i class="fas fa-shield-alt"></i>: ' + card.shields + ' ' : '' ) 
					+ (typeof card.attack !== "undefined" ? '<i class="fas fa-bolt"></i>: ' + card.attack + ' ' : '') 	
					+ (typeof card.hp !== "undefined" ? '<i class="fas fa-heartbeat"></i>: ' + card.hp + ' ' : '') 	
          + '</div>'
					+ '<div class="' + card.faction_code + '-card">' + card.text + '</div>'
          + '<div class="d-flex justify-content-around">'
					+ '<div>' 
          + (typeof card.faction !== "undefined" ? card.faction + (card.signature_loyal == "Loyal" ? ' (Loyal)' : '') : 'Neutral')
          + '</div>'
					+ '<div style="text-align: right;">' + card.pack + ' #' + parseInt(card.position,10) + '</div>'
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my: 'left center',
				at: 'right center'
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
				at: 'bottom center'
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});
	
	$('#filterlist').on('mousemove', function () {
		$(this).qtip({
			overwrite: false,
			show: {
				ready: true
			},
			content: {
				text:  'Search tags:'
					+ '<br>e:&nbsp;&nbsp;pack code'
					+ '<br>f:&nbsp;&nbsp;faction code'
					+ '<br>r:&nbsp;&nbsp;resource cost'
					+ '<br>c:&nbsp;&nbsp;command icons'
					+ '<br>a:&nbsp;&nbsp;attack'
					+ '<br>h:&nbsp;&nbsp;hit points'
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my: 'right top',
				at: 'right top'
			},
			hide:	{
				//event: 'unfocus'
			}
		});
	});
	
});