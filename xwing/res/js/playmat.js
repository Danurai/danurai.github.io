/* FUNCTIONS */

function getShipDataHtml(ship)	{
	/* Exemplar
		<div class="ship ship-small">
			<div class="shipicon">x</div>
			<div class="action">f<br>l</div>
			<div class="statblock">
				<span class="stats ps">4 </span>
				<span class="stats attack">2 </span>
				<span class="stats evade">3 </span>
				<span class="stats hull">3 </span>
				<span class="stats shield">2</span>
			</div>
		</div>
	*/
	var outp = '<div class="ship ship-' + ship.size + '">';
		outp += '<div class="shipicon">' + ship.symbol + '</div>';
		outp += '<div class="action">';
		//f<br>l
		outp += '</div>';
		outp += '<div class="statblock">'
			+ '<span class="stats ps">' + ship.ps + ' </span>'
			+ '<span class="stats attack">' + ship.attack + ' </span>'
			+ '<span class="stats evade">' + ship.evade + ' </span>'
			+ '<span class="stats hull">' + ship.hull + ' </span>'
			+ '<span class="stats shield">' + ship.shield + '</span>'
			+ '</div>';
	outp += '</div>';
	return outp;
}

function getShipMovesHtml(ship)	{
	var outp = '';
	var mvset = ship.moveset;
	outp += '<b>' + ship.pilot + ': ' + ship.name + '</b>';
	outp += '<table class="wheel">';
	for (var i=5; i>=0; i--)	{
		if (typeof mvset[i] !== "undefined")	{	// Has Manoeuvres at speed
			outp += '<tr><td>' + i + '</td>'
			// Turn
				+ getMove('T','L',i,mvset[i])
			// Bank
				+ getMove('B','L',i,mvset[i])
			// Straight
				+ getMove('S',(i==0?'0':''),i,mvset[i])		
			// Bank	
				+ getMove('B','R',i,mvset[i])			
			// Turn
				+ getMove('T','R',i,mvset[i])
			// Extra
				+ getMove('K','',i,mvset[i])
				+ getMove('L','L',i,mvset[i])
				+ getMove('L','R',i,mvset[i])
				+ '</tr>';
		}
	}
	outp += '</table>';
	return outp;
}

function getMove(mv,dir,spd,set)	{
	var outmv = '';
	var val = set[mv];
	if (typeof val != 'undefined')	{
		outmv += '<td class="xicon xicon-' +  val + '" data-speed="' + spd + '" data-move="' + mv + '" data-dir="' + dir + '">' + _moveMap[mv+dir] + '</td>';
	} else	{
		outmv = '<td></td>';
	}
	return outmv;
}

function getSquadListHtml(squad)	{
	var outp = '';
	var shipout = '';
	var points = 0;
	$.each(squad,function(faction,shiplist) {
		points = 0;
		shipout = '';
		if (shiplist.length != 0) {
			$.each(shiplist, function (i,ship)	{
				shipout += '<span class="shipname" data-faction="' + faction + '" data-ident="' + i + '">' + ship.pilot + ': ' + ship.name + ' (' + ship.points + ')</span><br>';
				points += parseInt(ship.points,10);
			});
			
			outp += '<div id="' + faction + '"><h4>' + faction + ' ( ' + points + ')</h4>';
			outp += shipout;
			outp += '</div>'
		}
	});
	return outp;
	}

function getShipAtLocation (colctx, ox, oy, squad)	{
	var factions = ["rebel","imperial","scum"];
	var tmpShip;
	var imgData = colctx.getImageData(ox,oy,1,1);
	$.each(factions,function(i,faction) {
		if (imgData.data[i] != 0) {
			tmpShip = squad[faction][imgData.data[i]-1];
			return false;
		}
	});
	return tmpShip;
}

function stickyRotate(angle, startangle) {
	var sticky = 25;
	var step = 45;
	var newangle = 0;
	var maxangle = (360 + (sticky * 360/step));
	if (angle < 0)	{
		angle = maxangle + (angle % maxangle);
	}
	newangle = Math.floor(angle/(step+sticky)) * step;
	newangle += Math.max ((angle % (step+sticky))-sticky,0);
	
	newangle += startangle;
	newangle = newangle % 360;
	return newangle;
}
