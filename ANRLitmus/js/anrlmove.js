$(document).ready(function ()	{
	var regCorpCrds = {"corphand":[],"hq":[],"archives":[],"randd":[]};
	// Code. Agenda\Asset\deck \ Upgrade \ Ice. Rezzed. 
	var regCorpCount = 0;
	
	drawRegions('corp');
	
	
	// Drag and Drop
	$(document)
		.on('dragstart','.deck_card', function(ev)	{
			var jsonData = '{"source":"' + $(this).closest('div').attr('id') + '","idx":"'+ $(this).data('idx') + '"}';
			console.log(jsonData);
			ev.originalEvent.dataTransfer.setData('text/plain',jsonData);
		});
	$('#corparea')
		.on('dragover','.region',function(ev)	{
			ev.preventDefault();
			ev.originalEvent.dataTransfer.dropEffect = 'move'; 
			$(this).addClass('region-drop');
		})
		.on('dragleave','.region',function(ev)	{
			$(this).removeClass('region-drop');
		})
		.on('drop','.region',function(ev)	{
			ev.preventDefault();
			$(this).removeClass('region-drop');
			
			var crdData = JSON.parse(ev.originalEvent.dataTransfer.getData('text'));
			var src = regionCrds[crdData.source];
			var tgt = regionCrds[$(this).attr('id')];
			moveCrd(src,crdData.idx,tgt);
		});
	
	// Menu Move
	$(document)
		.on('click','.deck_card', function(ev)	{
			var outp = '';
			var thisregion  = $(this).closest('div').attr('id');
			var thisidx = $(this).data('idx');
			//$(this).css('opacity', 1.5 - parseFloat($(this).css('opacity')));
			outp = '<div class="small"><b>Move To:</b></div><div class="btn-group-vertical btn-group-sm" style="padding: 5px;">';
			$.each(regCorpCrds,function(rgn,crds)	{
				if (rgn != thisregion)	{
					outp += '<button type="button" class="btn btn-default" '
						+ 'data-src="' + thisregion + '" '
						+ 'data-idx="' + thisidx + '" '
						+ 'data-tgt="' + rgn + '" '
						+ '>' 
						+ $('#' + rgn).attr('name')
						+ '</button>';
				}
			});
			outp += '<button type="button" class="btn btn-default" '
				+ 'data-src="' + thisregion + '" '
				+ 'data-idx="' + thisidx + '" '
				+ 'data-tgt="" '
				+ '>New Region</button>';
			outp += '</div>';
			$('#popupmenu').html(outp);
			$('#popupmenu').css({"left":ev.pageX,"top":ev.pageY});
			$('#popupmenu').toggle();
		});

	$('#popupmenu')
		.on('click','.btn',function()	{
			var src = regionCrds[$(this).data('src')];
			var idx = $(this).data('idx');
			var tgt;
			
			if ($(this).data('tgt') == "")	{
				regionCount ++;
				$('#corparea').append('<div class="region remote" name="Region ' + regionCount + '" id="region' + regionCount + '"></div>');
				regions.push("region" + regionCount);
				tgt = regionCrds["region" + regionCount] = [];
			} else	{
				tgt = regionCrds[$(this).data('tgt')];
			}
			moveCrd(src,idx,tgt);
			$('#popupmenu').toggle();
		});
	
	function moveCrd(src,idx,tgt)	{
		tgt.push(src.splice(idx,1)[0]);
		drawRegions();
	}
	function drawRegions()	{
		var outp;
		var crd;
		// Remove empty regions
		$('#corparea').find('.remote').each(function(idx,ele)	{
			var rgn = $(ele).attr('id');
			if (regionCrds[rgn].length == 0)	{
				ele.remove();
				regions.splice(regions.indexOf(rgn),1);
				delete regionCrds[rgn];
			}
		});
		$.each(regCorpCrds, function(rgn,crds)	{
			outp = '<div class="region-title">' + $('#' + rgn).attr('name') + '</div>';
			$.each(crds, function(idx,code)	{
				crd = _imgs({"code":code}).first();
				outp += getCardImgEle(crd,idx);
			});
			$('#' + rgn).html(outp);
		});
	}
	function getCardImgEle(crd,idx)	{
		var outp = '<img '
			+ 'src="img\\' + crd.img + '"'
			+ 'class="card" draggable="true" '
			+ 'alt="' + crd.title + '" '
			+ 'data-code="'+ crd.code + '" '
			+ 'data-idx="'+ idx + '">'
			+ '</img>';
		return outp;
	}
	
})