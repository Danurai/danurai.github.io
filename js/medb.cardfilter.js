if (typeof MEDB != "object")
	var MEDB = { data_loaded: jQuery.Callbacks() };

MEDB.cardfilter = {};
(function (cardfilter,$) {
	
	var filterQry = {};
	cardfilter.getFilter = function() {
		return filterQry;
	};
	
	cardfilter.setFilter = function (filterTxt, callback)	{
		var filterConds = parseQueryText(filterTxt);
		filterQry = {};
				
		for (var i=0; i<filterConds.length; i++) {
			var c = filterConds[i];
			var field = c[0];
			var op = c[1];
			var vals = c[2];
			
/* i - card code nnnnn
/*
/* s - Set
/* p - sPhere
/* t - Type
/* x - card teXt
/* u - unique (0/1)
/*
/* e - thrEat (gt; lt;)
/* c - Cost (gt; lt;)
/* w\a\d\h - Will\Attack\Defense\Hits (gt; lt;)
/* r - tRaits
/* b - aBilities
*/
			switch (field)	{
				case ("s"):
					addFilter("string","setcode",op,vals);
					break;
				case("p"):
					addFilter("string","spherecode",op,vals);
					break;
				case ("t"):
					addFilter("string","typecode",op,vals);
					break;
				case ("x"):
					addFilter("string","cardtext",op,vals);
					break;
				case ("u"):
					addFilter("boolean","unique",op,vals);
					break;
				case ("e"):
					addFilter("int","threat",op,vals);
					break;
				case ("c"):
					addFilter("int","cost",op,vals);
					break;
				case ("w"):
					addFilter("int","willpower",op,vals);
					break;
				case ("a"):
					addFilter("int","attack",op,vals);
					break;
				case ("d"):
					addFilter("int","defense",op,vals);
					break;
				case ("h"):
					addFilter("int","hitpoints",op,vals);
					break;
				case ("r"):
					addFilter("string","traits",op,vals);
					break;
				case ("b"):
					addFilter("string","abilities",op,vals);
					break;
				default:	//assume groups of Code or Name
					if ( vals[0].match(/^[0-9]{5}$/) )	{
						addFilter("string","code",op,vals);
					} else {
						addFilter("string","cardname",op,vals);
					}
			}
			
		}
		filterQry["deckcode"] = {is:"p"};
	};
	
	function addFilter(variableType,fieldName,operator,values)	{
		switch (variableType)	{
			case ("int"):
				for (var j = 0; j < values.length; j++) {
					values[j] = parseInt(values[j], 10);
				}
				switch (operator)	{
					case ("!"):
						filterQry[fieldName] = {"!is":values};
						break;
					case ("<"):
						filterQry[fieldName] = {lt:values};
						break;
					case (">"):
						filterQry[fieldName] = {gt:values};
						break;
					default:
						filterQry[fieldName] = {is:values};
						break;
				}
				break;
			case ("boolean"):
				var value = values[0];
				if (operator == "!")	{
					filterQry[fieldName] = {is: value ? "false" : "true" };
				} else {
					filterQry[fieldName] = {is: value ? "true" : "false" };					
				}
				break;
			default:
			// Strings
				if (operator == "!")	{
					filterQry[fieldName] = {"!likenocase":values};
				} else {
					filterQry[fieldName] = {"likenocase":values};
				}
		}
	}
	function parseQueryText(qry)	{
		var parsed = [];
		var cond = null;
		var index = 1;
		while (qry != '')	{
			if (index==1) {cond=null};
		// Strip leading space
			if (qry.match(/(^ )(.*)/)) {qry = RegExp.$2;}
			
			if (qry.match(/(^[a-zA-Z][:!<>])(.*)/) ) {					// Matches letter a-z or A-Z and condition : ! < >
				cond=[RegExp.$1[0],RegExp.$1[1],[]]
				index = 3;
				qry = RegExp.$2;
			} else {
				if (qry.match(/(^\w+)(.*)/) || qry.match(/^\"([\w\s]+)\"(.*)/))	{			//(^\w+|^\"[\w\s]+\")(.*) word otherstuff or "word and" otherstuff
					qryvals = [];
					while ( qry.match(/(^\w+)(.*)/) || qry.match(/^\"([\w\s]+)\"(.*)/) ) {
						qryvals.push(RegExp.$1);
						qry = RegExp.$2;
						// strip "|" OR
						if (qry.match(/(^\|)(.*)/)) {qry = RegExp.$2;}
					}
					if (index==1) 
						{ cond=["cardname",":"]; }
					cond[2] = qryvals;
					index = 1;
				} else {qry="";index=4;}
			}
			if (index == 1) {parsed.push(cond);}
		}
		return(parsed);
	}
	
}) (MEDB.cardfilter, jQuery);

/* i - card code nnnnn
/* s - Set
/* p - sPhere
/* t - Type
/* x - card teXt
/* e - thrEat
/* u - unique (0/1)

/* c - Cost (gt; lt;)
/* w\a\d\h - Will\Attack\Defense\Hits (gt; lt;)
/* r - tRaits
/* b - aBilities
/*
/* d - Deck (default to 'p'layer)
*/