
var factionCol = {
	"rebel":{"stroke":"#FF0000","fill":"rgba(255,0,0,0.2)"},
	"imperial":{"stroke":"#00FF00","fill":"rgba(0,255,0,0.2)"},
	"scum":{"stroke":"#FF7700","fill":"rgba(255,128,0,0.2)"}
};
	
function drawShip(ctx, ship, move, phase)	{
/* Initialise Variables */
	var size = ship.size == 'large'?160:80;
	var stats = [ship.ps,ship.attack,ship.evade,ship.hull,ship.shield];
	var acts = ship.actions;
	var symbol = ship.symbol;
/* Set the relative location */
	ctx.setTransform(1,0,0,1,0,0)
	var x = ship.posX;
	var y = ship.posY;
	var r = ship.rotation;
	ctx.translate (x, y);
	// rotate around center
	ctx.translate (size/2,size/2);
	ctx.rotate(r*Math.PI/180);
	ctx.translate (-size/2,-size/2);

// Highlight
	if (ship.selected==true) {
		ctx.shadowBlur = 40; 
		ctx.shadowColor = factionCol[ship.faction].stroke;
		ctx.fillStyle="black";
		ctx.fillRect(0,0,size,size);
	}
	ctx.shadowBlur = 0;
// Background
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,size,size);
			
// Shooting Arc
	ctx.strokeStyle = factionCol[ship.faction].stroke;
	ctx.fillStyle = factionCol[ship.faction].fill;
	
	var arcOS = ship.size == "large" ? 4 : 2;
	ctx.beginPath();
	ctx.moveTo (arcOS,0);
	ctx.lineTo (size/2,size/2);
	ctx.lineTo (size-arcOS,0);
	ctx.stroke();
	ctx.fill();
	$.each(ship.arc, function(i,arc) {
	//base arc for all ships
		/*if (arc == "forward")	{		
			ctx.beginPath();			
			ctx.moveTo (arcOS,0);
			ctx.lineTo (size/2,size/2);
			ctx.lineTo (size-arcOS,0
		}*/
		if (arc=="rear")	{		
			ctx.beginPath();	
			ctx.moveTo (arcOS,size);
			ctx.lineTo (size/2,size/2);
			ctx.lineTo (size-arcOS,size);
			ctx.stroke();
			ctx.fill();
		}
		if(arc=="turret")	{
			ctx.beginPath();
			var inr = 30;
			var outr = 36;
			var arr=8;
			ctx.arc(size/2,size/2,outr,0,30*Math.PI/180,true);
			ctx.arc(size/2,size/2,inr,30*Math.PI/180,0,false);
			ctx.lineTo(size/2 + inr-arr,size/2);
			ctx.lineTo(size/2 + inr + (outr-inr)/2,size/2+(outr-inr+arr+arr)/2);
			ctx.lineTo(size/2 + outr+arr,size/2);
			ctx.lineTo(size/2 + outr,size/2);
			ctx.stroke();
			ctx.fill();
		}
	});
	
// Stats
	ctx.font = "14px Orbitron";
	ctx.textAlign = "left";
	ctx.textBaseline = "alphabetic";
	var statTxt = "";
	$.each(stats,function(i,stat) {
		statTxt += stat;
		if (i<stats.length-1) {statTxt += ' ';}
	});
	var statW = ctx.measureText(statTxt).width;
	var statL = (size - statW)/2;
	var clr = ["#FF7700","#FF0000","#00FF00","#FFFF00","#00AAFF"];
	$.each(stats, function(i,stat) {
		ctx.fillStyle = clr[i];
		ctx.fillText(stat,statL,size-3);
		statL += ctx.measureText(stat + ' ').width;
	})

// Actions
	ctx.font = "14px x-wing-symbols";
	ctx.fillStyle = "#00BB00";
	var actW = 0;
	var actH = 14;
	
	$.each(acts, function(i,act) {
		actW = Math.max(actW,ctx.measureText(act).width);
	});
	ctx.textAlign="center";
	var actL = size - (actW/2);
	var actT = actH-2;
	$.each(acts, function(i,act) {
		ctx.fillText(act,actL,actT);
		actT += actH;			
	});

// Symbol
	ctx.font = size + "px x-wing-ships";
	ctx.fillStyle = "rgba(255,255,255,0.8)";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(symbol,(size/2)-5,(size/2)-5);

// Arrow
	ctx.beginPath();
	ctx.moveTo (size/2,2);
	ctx.lineTo (size/2 + 5,7);
	ctx.lineTo (size/2 + 3,7);
	ctx.lineTo (size/2,4);
	ctx.lineTo (size/2 - 3,7);
	ctx.lineTo (size/2 - 5,7);
	ctx.lineTo (size/2 - 5,7);
	ctx.lineTo (size/2,2);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();


// Rotation or Move Stats
	if (move.rotate == true || move.on == true ) {
		ctx.font = "10px Orbitron";
		ctx.textAlign = "right";
		ctx.textBaseline = "bottom";
		ctx.fillStyle = "#FF0000";
		ctx.fillText ('x: ' + ship.posX + ' y: ' + ship.posY + ' ' + ship.rotation + ': deg',size,0);
	}
	
// Reset Transformation
	ctx.setTransform(1,0,0,1,0,0);
	
// Template	
	if (typeof ship.planning !== 'undefined') {
		drawShipTemplate(ctx,ship);
	}
	
	
}

function drawShipCollision(colctx, ship)	{
	var size = ship.size == 'large' ? 160 : 80;
// Collision Map
	colctx.setTransform(1,0,0,1,0,0)
	colctx.translate (ship.posX, ship.posY);
	colctx.translate (size/2,size/2);
	colctx.rotate(ship.rotation*Math.PI/180);
	colctx.translate (-size/2,-size/2);
	colctx.fillStyle = "rgb(" + (ship.faction == "rebel" ? ship.id : "0" ) + "," + (ship.faction == "imperial" ? ship.id : "0" ) + "," + (ship.faction == "scum" ? ship.id : "0" ) + ")";
	colctx.fillRect(0,0,size,size);
	colctx.setTransform(1,0,0,1,0,0)
}

function drawShipTemplate(ctx, ship)	{
	var size = ship.size == 'large' ? 160 : 80;
// Locate
	ctx.translate(ship.posX + size/2,ship.posY + size/2);
	ctx.rotate(ship.rotation*Math.PI/180);
	ctx.translate(-size/2,-size/2);
// Movement Template
	ctx.strokeStyle = factionCol[ship.faction].stroke;
	ctx.fillStyle = "#FFFFFF";	//factionCol[ship.faction].fill;
	switch (ship.planning.type) {
		case 'S':
		case 'K':
			ctx.rect((size-40)/2, 0, 40, -ship.planning.speed * 80);
			break;
		case 'B':
		case 'L':
			var rads = [140,240,340];
			var rad = rads[ship.planning.speed - 1];
			if (ship.planning.dir == 'R') {
				rad += 40;
				ctx.arc(((size-40)/2)+rad,0,rad,Math.PI,225*Math.PI/180);
				//ctx.lineTo(((size-40)/2)+rad,-rad+40);
				ctx.arc(((size-40)/2)+rad,0,rad-40,225*Math.PI/180,Math.PI,true);
				ctx.lineTo(((size-40)/2),0);
			} else {
				ctx.arc(((size-40)/2)-rad,0,rad,0,315*Math.PI/180,true);
				//ctx.lineTo(((size-40)/2)-rad,-rad-40);
				ctx.arc(((size-40)/2)-rad,0,rad+40,315*Math.PI/180,0);
				ctx.lineTo(((size-40)/2),0);
			}
			break;
		case 'T':
			var rads = [50,103,160];
			var rad = rads[ship.planning.speed - 1];
			if (ship.planning.dir == 'R') {
				rad += 40;
				ctx.arc(((size-40)/2)+rad,0,rad,Math.PI,1.5*Math.PI);
				ctx.lineTo(((size-40)/2)+rad,-rad+40);
				ctx.arc(((size-40)/2)+rad,0,rad-40,1.5*Math.PI,Math.PI,true);
				ctx.lineTo(((size-40)/2),0);
			} else {
				ctx.arc(((size-40)/2)-rad,0,rad,0,1.5*Math.PI,true);
				ctx.lineTo(((size-40)/2)-rad,-rad-40);
				ctx.arc(((size-40)/2)-rad,0,rad+40,1.5*Math.PI,0);
				ctx.lineTo(((size-40)/2),0);
			}
			break;
	}
	ctx.fill();
	ctx.stroke();
	// Write number and Symbol
	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";
	ctx.font = "20px Orbitron";
	ctx.strokeText (ship.planning.speed,size/2,0);
	ctx.font="20px x-wing-symbols";
	ctx.strokeText(_moveMap[ship.planning.type + ship.planning.dir],size/2,-25);
}