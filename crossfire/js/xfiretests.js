$(document).ready(function()	{
	var outp = '';
	var _OBS = TAFFY(_obstacles);
	var OBS;
	
	outp = '<ul class="list-group">'
	_OBS({"level":1}).each(function(obs)	{
		outp += '<li class="list-group-item" data-idx = "' + obs.id + '">' + obs.name + '</li>';
	});
	_OBS({"level":2}).each(function(obs)	{
		outp += '<li class="list-group-item list-group-item-danger" data-idx = "' + obs.id + '">' + obs.name + '</li>';
	});
	outp += '</ul>';
	$('#obstacles').html(outp);
	
	
	// Select Obstacle
	$('#obstacles').on('click','li',function() 	{
		var obsid = $(this).data('idx');
		var obscrd = _OBS({'id':obsid}).first();
		var outp;
		if (typeof obscrd != 'undefined')	{
			OBS = obscrd;
			var obsid = ('00' + obsid.toString()).substring(obsid.toString().length);
			var imgname = 'img\\obs_' + obsid + '.png';
			$('#obstacle').html(customObsCard(obscrd));
			$.get(imgname)
				.done(function() 	{
					//$('#obstacle').html('<img src="' + imgname + '" class="card-obstacle" alt="' + obscrd.name + '"></img>');
					$('#obstacle').find('.container-obstacle').css('background-image','url(img/obs_border.png), url(img/obs_bg_' + obsid + '.png)');
				})
				.fail(function()	{
					//$('#obstacle').html(customObsCard(obscrd));
				});
			/*$.ajax({
				url:	imgname,
				type: 'POST',
				error: function()
				{
					//file not exists
				},
				success: function()
				{
					//file exists
					$('#obstacle').html('<img src="' + imgname + '" class="card-obstacle" alt="' + obscrd.name + '"></img>');
				}
			});*/
			
			updateSolution();
		}
	});
	$('#icons')
		.on('keyup',updateSolution)
		.on('change',updateSolution)
		;
		
	function updateSolution(str)	{
		var str = $('#icons').val();
		var outp = '';
		var soln;
		var iconlist;
		
		if (typeof OBS !== 'undefined')	{
			iconlist = str.match(/W|H|S|M|[0-9]/g);
			
			soln = getSolution(OBS.track,iconlist);
		
			outp = '<p>Available: ';
			$.each(soln.surplus, function(id,icon)	{
				outp += icon + ' ';
			});
			
			$.each(soln.track,function(id,solution)	{
				outp += '<br>' + solution.target + ': ';
				$.each(solution.match, function(sid,sitem)	{
					outp += sitem + ' ';
				});
			});
			
		}
		$('#iconsout').html(outp);
	}
	
	function customObsCard(crd)	{
		var outp = '';
		var abilitytxt = crd.ability;
		
		abilitytxt = abilitytxt.replace(/THIS/g, crd.name);
		abilitytxt = abilitytxt.replace(/DEFEATED/, '<span class="obs-keyword">$&</span>');
		abilitytxt = abilitytxt.replace(/FLIPPED/, '<span class="obs-keyword">$&</span>');
		
		
		outp = '<div class="container-obstacle">';
		
		// Track
		$.each(crd.track,function(id,icon)	{
			outp += '<div class="obs-icon" style="left: ' + ((9.5 * id) + 4.5) + '%;">';
			if ($.isNumeric(icon))	{
				outp += '<div class="obs-icon-val">' + icon + '</div>';
			} else	{
				outp += '<img class="obs-icon-img" src="img\\' + icon + '.png"></img>';
			}
			outp += '</div>'
		});
		
		// Obstacle info - name, ability, type
		outp += '<div class="obs-info obs-' + crd.role + '">';
		outp += '<div class="obs-type obs-type-border obs-type-border-' + crd.role + '"></div>';
		outp += '<div class="obs-type">' + crd.type + '</div>';
		outp += '<div class="obs-id">' + ('00' + crd.id.toString()).substring(crd.id.toString().length) + '/80 <span class="xf-icon xf-icon-core"></span></div>'
		outp += '<div class="obs-info-val"><b>' + crd.name + '</b><small><br><br>' + abilitytxt + '</div>';
		outp += '</div>';
		// Obstacle Attack
		outp += '<div class="obs-dmg">'
			+ '<span class="obs-dmg-val">' + crd.attack + '</span>'
			+ '</div>';
		// Nuyen
		outp += '<div class="obs-nuyen">' + crd.nuyen + '</div>';
		outp += '</div>';
		
		
		return outp;
	}
	
	function getSolution (track,iconlist)	{
		var gs = {};
		var soln = {
			"obstacletrack":track,
			"runnericons":iconlist,
			"surplus":parseColourless(iconlist),
			"track":[]
		};
		
		// Match icons
		for (var x=0; x<track.length; x++)	{
			soln.track.push({"target":track[x],"match":false});
			if ( $.isNumeric(track[x]) )	{
				// Colourless - check there are available icons
				soln.track[x].match = iconCount(soln.surplus) >= iconCount(track.slice(0,x+1),'X');
			} else {
				// Find matching icon and allocate to solution
				var n = soln.surplus == null ? -1 :	soln.surplus.indexOf(track[x]);
				if (n !== -1 && iconCount(soln.surplus) >= iconCount(track.slice(0,x+1),'X') + 1 )	{
					soln.track[x].match = soln.surplus.splice(n,1);
				} else{
					soln.track[x].match = false;
				}
			}
		}
		
		// Assign colourless icons
		$.each(soln.track,function(id,item)	{
			if (item.match == true)	{
				item.match = soln.surplus.length >= parseInt(item.target,10) ? soln.surplus.splice(0,parseInt(item.target,10)) : false;
			}
		});
		
		return soln;
		
		/* Return JSON
			soln = {
				surplus:["X","X","X"],
				track:	[
					{
						"target":[],
						"match":[]
					},
					{
						"target":[],
						"match":[]
					}
				]
			}
			[
				{
					"track":"M",
					"soln":["M"],
					"surplus":["X","S","W"]
				},
				{
					"track":"2",
					"soln":["W","X"]
				}
			]
		*/
	}
	
	
		 
	function iconCount(iconlist,matchicon='')	{
	// matchicon == '' - All Icons ()
	// matchicon == 'X' - Colourless only
	// matchicon == ? - ? Only
	var x = 0;

		if (iconlist != null)	{
			var countArr = parseColourless(iconlist);
			if (matchicon == '')	{
				x = countArr.length;
			} else{
				x = countArr.reduce(function(n,icon)	{return n + (icon === matchicon);},0);
			}			 
		}
		 
		 return x;		 
	 }
	
	function parseColourless(iconlist)	{
		var done = false;
		while (!done)	{
			done = true;	//optimistic
			$.each(iconlist,function(id,icon)	{
				if ($.isNumeric(icon))	{
					iconlist.splice(id,1);
					for (var i=0; i<icon; i++)	{
						iconlist.splice(id,0,'X');
					}
					done = false;
				}
			});
		}
		return iconlist;
	}
});