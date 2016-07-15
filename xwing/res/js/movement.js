
	var RADII = {
		"T":[70,126,180],
		"R":[70,126,180],
		"B":[160,260,360],
		"L":[160,260,360]
	};
	var ANGLES = {
		"T":Math.PI/2,
		"R":Math.PI/2,
		"B":Math.PI/4,
		"L":Math.PI/4
	};
	
	var tmpcanvas = document.createElement("canvas");	//document.getElementById("tmpmat")
	
	var rad;		// Turn Radius
	var adjRad;	// Adjust for Left Turn
	var ang; 	// Turn Angle
	var adjAng;	// Adjust for Left Turn
	
	var oldA;
	var oldB;
	var oldC;
	
	var newA;
	var newB;
	var newC;
	
// INPUT VARIABLES
	var ORIG = {"x":0,"y":0,"rot":0};
	var r;
	var maxR;
	var speed;
	var dir;
	var type;
	
	function init_path(shipIN, speedIN, typeIN, dirIN, col_ctx) {
		ship = shipIN;
		speed = speedIN;
		type = typeIN;
		dir = dirIN;

		r = 0;	// rotation along path
		
		if (type == 'S' || type == 'K')	{	// Straight
			rad=ship.size;
			ang=0;
		} else {
			rad = RADII[type][speed-1];
			ang = ANGLES[type];
		}
		adjRad = rad * (dir == 'L' ? -1 : 1);
		adjAng = ang * (dir == 'L' ? -1 : 1);
		
		if (dir == 'L') {ORIG.x -= rad;}
		
		ORIG.x = ship.posX + ship.size/2 + adjRad;
		ORIG.y = ship.posY;
		ORIG.rot = ship.rotation;

		oldA = {"x":ship.posX + ship.size/2,"y":ship.posY};
		oldB = {"x":oldA.x,"y":ship.posY + ship.size};
		oldC = {"x":oldA.x,"y":ship.posY + ship.size/2};
		
		maxR = getMaxRctx(col_ctx, ship, speed, type, dir);
	}
	
	function moveShip(ship, inc)	{
	// Variables
		var rRads;		// Angle in radians
		var d = dir == 'L' ? -1 : 1;
	
	// Initialise
		newA = {"x":0,"y":0};
		newB = {"x":0,"y":0};

		/* Amend newA and newB based on move type */
		/* Straight movement possible using tangent functionality but range to far at the end of a 5 straight */
		
		if (type=="S" || type =="K") {	// Straight or Koiogran
			r += inc;
			
			newA.x = oldA.x;
			newA.y = Math.max(oldA.y - r, oldA.y - (speed*80) - ship.size);
			
			newB.x = oldB.x;
			newB.y = newA.y + ship.size;
			
		} else {									// Turn, Bank, Segnor and Tallon
			r += inc;
			rRads = r.toRadians();
		
		// Locate newA.x and newA.y
			if (r>0 && r<=ang.toDegrees())	{	// On curve
				newA.x = oldA.x + adjRad - (adjRad * Math.cos(rRads));
				newA.y = oldA.y - (rad * Math.sin(rRads));
			} else {										// Off curve
				// Calculate Tangent
				var tTan = Math.min(rad * Math.tan(rRads - ang),ship.size);
				
				// reverse engineer angle based on capped tTan
				rRads = Math.atan(tTan/rad) + ang;
				
				// Final Curve position...
				newA.x = oldA.x + adjRad - (adjRad * Math.cos(ang));
				newA.y = oldA.y - (rad * Math.sin(ang));
				// ...plus calculate x,y from Tangent
				newA.x += tTan * Math.cos(Math.PI/2 - ang) * d;
				newA.y -= tTan * Math.sin(Math.PI/2 - ang);
			}
		
		// Locate newB.x and newB.y
			var i = Math.sqrt( Math.pow(newA.x-oldA.x,2) + Math.pow(oldA.y-newA.y,2) );
			if (i > ship.size) {
				// Find newB.x and newB.y from intersection of two arcs
				// Side a = Ship.size (opp angle a)
				// Side b = ORIG(x,y) -> newA(x,y) (opp angle b)
				// Side c = rad (opp angle c)
				
				var sA = ship.size;
				var sB = Math.sqrt( Math.pow(newA.x-ORIG.x,2) + Math.pow(ORIG.y-newA.y,2) );
				var sC = rad;				
				//console.log('Scalene - A:' + sA + ' B:' + sB + ' C:' + sC);
				
				// Law of cosines
				var angA = Math.acos( ( Math.pow(sB,2) + Math.pow(sC,2) - Math.pow(sA,2) ) / (2 * sB * sC) );
				var angnewB = rRads - angA;
				newB.x = oldA.x + adjRad - (adjRad * Math.cos(angnewB));
				newB.y = oldA.y - (rad * Math.sin(angnewB));				
			} else {
				// Fixed newB.x, Triangulate newB.y
				newB.x = oldB.x;
				newB.y = newA.y + Math.sqrt( Math.pow(ship.size,2) - Math.pow(newA.x-newB.x,2) );
			}
		}
		//drawPoint (newA,"#FF0000");
		//drawPoint(newB,"#0000FF");
		
		// Locate middle of Ship
		newC = {"x":0,"y":0};
		newC.x = newB.x + (newA.x - newB.x)/2;
		newC.y = newB.y - (newB.y - newA.y)/2;
		
		
		// Update based on Original position and rotation
		// Calculate distance and angle from original
		var dist = Math.sqrt( Math.pow(newC.x-oldC.x,2) + Math.pow(newC.y-oldC.y, 2) );
		var trans = Math.asin( (newC.x-oldC.x) / dist);
		// update based on original rotation
		trans = trans + ORIG.rot.toRadians();
		
		ship.posX = oldA.x + (dist * Math.cos((Math.PI/2)-trans)) - ship.size/2;		
		ship.posY = oldA.y - (dist * Math.sin((Math.PI/2)-trans));		
		ship.rotation = ORIG.rot + 90 - Math.acos(Math.min((newA.x-newB.x)/ship.size,1)).toDegrees();
		
		console.log ("R: " + r);
		console.log ("MaxR: " + maxR);
		if ( r >= maxR ) {
		// End of maneuver
			r = maxR;
			var end;
			if (ang == 0) {
				end = (speed * 80) + ship.size;
			} else {
				end = (ang + Math.atan(ship.size/rad)).toDegrees()
			}
			if (maxR >= end) {
				// No collisions
				switch (type) {
					case "K":
					case "L":
						ship.rotation+=180;
						break;
					case "R":
						ship.rotation+=d*90
				}
			}
			return false;
		} else {
			return true;
		}
	}
	
	function drawTrack(ctx)	{
	// Initialise location and track colour
		ctx.setTransform(1,0,0,1,0,0);
		ctx.strokeStyle = "#AAA";
		ctx.fillStyle = "rgba(255,0,0,0.5)";
		
	// Move to centre of ship and rotate canvas
		ctx.translate(oldA.x,oldA.y+ship.size/2);
		ctx.rotate(ORIG.rot.toRadians());
		// Revert translation
		ctx.translate(-oldA.x,-oldA.y-+ship.size/2);
	
	// Draw Start Track
		ctx.beginPath();
		ctx.rect(oldA.x-20,oldA.y,40,ship.size);
		ctx.moveTo(oldA.x,oldA.y);
		ctx.lineTo(oldA.x,oldA.y+ship.size);
		ctx.stroke();
		
		if (type == "S" || type == "K") {	// Straight Manoeuvers
			ctx.beginPath();
			ctx.rect(oldA.x-20,oldA.y,40,-(speed*80));
			ctx.moveTo(oldA.x,oldA.y);
			ctx.lineTo(oldA.x,oldA.y-(speed*80));
			ctx.stroke();
			
			ctx.rect(oldA.x-20,oldA.y-(speed*80),40,-ship.size);
			ctx.moveTo(oldA.x,oldA.y-(speed*80));
			ctx.lineTo(oldA.x,oldA.y-(speed*80)-ship.size);
			ctx.stroke();
		} else {										// Banks and Turns			
		// Manoeuver arc
			var arc = {"start":0,"end":0};
		// Determine direction
			if (dir == 'L')	{
				arc.start = Math.PI*2 - ang;
				arc.end = 0;
			} else {	//assume 'R'
				arc.start = Math.PI;
				arc.end = Math.PI + ang;
			}

			// Draw arc
			ctx.beginPath();
			ctx.arc(ORIG.x, ORIG.y, rad, arc.start, arc.end);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.arc(ORIG.x, ORIG.y, rad-20,arc.start, arc.end);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.arc(ORIG.x, ORIG.y, rad+20, arc.start, arc.end);
			ctx.stroke();
					
		// Draw end Track
			ctx.beginPath();			
			ctx.translate(ORIG.x-(adjRad*Math.cos(adjAng)),ORIG.y-(adjRad*Math.sin(adjAng)));
			ctx.rotate(adjAng);
			ctx.rect(-20,0,40,-ship.size);
			ctx.moveTo(0,0),
			ctx.lineTo(0,-ship.size);
			ctx.stroke();
			// Revert
			ctx.translate(-ORIG.x+(adjRad*Math.cos(adjAng)),-ORIG.y+(adjRad*Math.sin(adjAng)));
		}
		
	}
	
	function drawShip(ctx, ship)	{			
		ctx.strokeStyle = "#00FF00";
		ctx.beginPath();
		
	/* Set the relative location */
		ctx.setTransform(1,0,0,1,0,0)
		ctx.translate(ship.posX,ship.posY);
					
	/* Locate ship center and rotate */
		ctx.translate (ship.size/2,ship.size/2);
		ctx.rotate(ship.rotation.toRadians());
		ctx.translate (-ship.size/2,-ship.size/2);
		
	/* Draw Ship */
		ctx.rect(0,0,ship.size,ship.size);
		
		ctx.moveTo(ship.size/2,0);
		ctx.lineTo(ship.size/2,ship.size);
		
		ctx.moveTo(0,ship.size/2);
		ctx.lineTo(ship.size,ship.size/2);
		ctx.stroke();
		
	/* Draw Arrow */
		ctx.beginPath();
		ctx.moveTo (ship.size/2,2);
		ctx.lineTo (ship.size/2 + 5,7);
		ctx.lineTo (ship.size/2 + 3,7);
		ctx.lineTo (ship.size/2,4);
		ctx.lineTo (ship.size/2 - 3,7);
		ctx.lineTo (ship.size/2 - 5,7);
		ctx.lineTo (ship.size/2 - 5,7);
		ctx.lineTo (ship.size/2,2);
		ctx.fillStyle = "#00FF00";
		ctx.fill();
	}
	
	function getMaxRctx(col_ctx, ship, speed, type, direction)	{
		var mr = 0;
		var inc = 1;
		if (ang == 0) {
			mr = (speed * 80) + ship.size;
		} else {
			mr = (ang + Math.atan(ship.size/rad)).toDegrees()
		}
		
		var tship = {};
		tship["x"] = ship.posX;
		tship["y"] = ship.posY;
		tship["rotation"] = ship.rotation;
		tship.size = ship.size;
		moveShip(tship,mr);
		while (checkCollision(col_ctx, tship) == true && mr>0) {
			mr-=inc;
			moveShip(tship,-inc);
		}
		r=0;
		return mr;
	}
		
	function checkCollision(col_ctx, ship) {
		// Set Check Area parameters
		var area = {
			"x":0,
			"y":0,
			"s":0,
		};
		area.x = ship.posX - (ship.size/2);
		area.y = ship.posY - (ship.size/2);
		area.s = ship.size * 2;
		
		// Create temporary canvas
		var tmpctx = tmpcanvas.getContext("2d");
		tmpctx.canvas.width = 1000;
		tmpctx.canvas.height = 1000;
		
		// Draw ship
		tmpctx.setTransform(1,0,0,1,0,0);
		tmpctx.clearRect(0,0,1000,1000);
		tmpctx.translate(ship.posX, ship.posY);
		
		tmpctx.translate(ship.size/2,ship.size/2);
		tmpctx.rotate(ship.rotation.toRadians());
		tmpctx.translate(-ship.size/2,-ship.size/2);
		
		tmpctx.fillStyle = "#FF0000";
		tmpctx.fillRect(0,0,ship.size,ship.size);
		tmpctx.setTransform(1,0,0,1,0,0);
		
		// Save to ImageData
		var shipImg = tmpctx.getImageData(area.x,area.y,area.s,area.s);
		
		// Get Collision Map Data
		var colImg = col_ctx.getImageData(area.x,area.y,area.s,area.s);
		
		var collision = false;
		
		for (var i=0; i<shipImg.data.length; i+=4) {
			if (shipImg.data[i] > 0) {
				if (colImg.data[i+2] > 0)	{ 
					collision = true;
					break; 
				}
			}
		}
		return collision;
	}
	
	Number.prototype.toDegrees = function () { return this.valueOf() * 180 / Math.PI; }
	Number.prototype.toRadians = function () { return this.valueOf() * Math.PI / 180; }