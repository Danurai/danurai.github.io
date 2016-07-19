function addShipToSquad(ident, squad) {
	var posX = 5;
	var posY = 5;
	var shipdata = _shipdata[ident];
	$.each(squad[shipdata.faction],function(i,ship) {
		posX += ship.size == "small" ? 85 : 165;
	});
	switch (shipdata.faction) {
		case "rebel":
			posY = 5;
			break;
		case "imperial":
			posY = 170;
			break;
		default:	//scum
			posY = 335;
			break;
	}
	
	shipdata['posX'] = posX;
	shipdata['posY'] = posY;
	shipdata['rotation'] = 0;
	shipdata['selected'] = false;
	shipdata['PHASE'] = 'planning';
	var maxID = 0;
	$.each(squad[shipdata.faction],function (i,ship) {
		maxID = Math.max(maxID,ship.id);
	});
	shipdata['id'] = maxID + 1;
	squad[shipdata.faction].push( $.extend(true,{}, shipdata) );
	
	// Update Squads
	$("#squadlist").html  (getSquadListHtml(squad));
}
	
function writeShipList(selectedId)	{
	var outp = ""
	$.each(_shipdata, function(i,ship) {
		outp += '<div data-id = "' + i + '"'
			+ (selectedId == i ? ' class="selected"' : '')
			+ ' style="cursor:pointer;">'
			+ ship.faction + ' - ' + ship.name + ' '
			+ (selectedId == i ? ' <i class="fa fa-plus-square-o" style="cursor: pointer;"></i>' : '' )
			+ '</div>';
	});
	$("#shiplist").html(outp);				
}