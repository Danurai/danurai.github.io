

function drawMarine(marine,locdata,order)	{
	var mdata = '<td class="marineCell form-center grad-' + marine.team + '" name="' + marine.id + '" style="">';
	
	// break
	mdata += '<div>&nbsp;</div>';
	
	// Name, primary member and Facing
	var mname = '<span class="clickable marine-name" name="' + marine.id + '">' + marine.name + '</span>';
	var mface = '<span class="clickable facing" name="' + marine.id + '" title="Change Facing">' + (locdata.facingL ? '<i class="fa fa-caret-left"></i> ':' <i class="fa fa-caret-right"></i>') + '</span>';
	mdata += locdata.facingL ? mface + mname : mname + mface;
	
	// Movement 
	mdata += '<div class="topright move clickable" value=-1 title="Move up formation" name="' + marine.id + '"><i class="fa fa-angle-double-up"></i></div>';
	mdata += '<div class="bottomright move clickable" value=1 title="Move down formation" name="' + marine.id + '"><i class="fa fa-angle-double-down"></i></div>';
	
	// Support and Range
	mdata += '<div>'
		+ '<i class="fa fa-crosshairs"></i> ' + marine.range + '&emsp;'
		+ '<span class="clickable m_support"  data-id="' + marine.id + '" data-side="" title="Support"><i class="fa fa-power-off"></i> ' + locdata.support + '</pan>'
		+ '</div>';
	
	// break
	mdata += '<div>&nbsp;</div>';
	
	// Orders
	mdata += '<div class="clickable order">'
	if (order) {
		mdata += '<span class="action" id="' + order.id + '">' + acticon[order.type] + ' <i>' + order.name + ' ' + acticon[order.type] + '</i></span>'
	} else {
		mdata += '<i>+ receiving +</i>';
	}
	mdata += '</div>';
	
	
	mdata += '</td>';
	return mdata;
}

function drawTerrain(terrain)	{
	var tdata = '<div class="topright">'
	$.each(terrain, function (idx, terr) {
		//var t = _terrain({id:terr.id}).first();
		tdata += '<img src="/da/res/img/terrain_' + terr.id + '.png" class="card">';
	});
	tdata += '</div>';
	return tdata;
}	

var acticon = {
	'Support':'<i class="fi-shield icon-action"></i>',
	'Move + Activate':'<i class="fa fa-location-arrow"></i>',
	'Attack':'<i class="fa fa-crosshairs icon-action"></i>'
}