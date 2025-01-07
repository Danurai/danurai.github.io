/* Shared Functions */


/* Parse Filter */
//e: setcode
//f: faction
//t: Type
//x: Text (one word)
//x: "Some Text" (quotes)

function parsefilter(f)	{
	var res;
	var outp = {};
	
	var set = /e:(\w+)/;
	res = RegExp(set).exec(f)
	if (res !== null)	{
		outp["setcode"] = res[1];
	}
	
	var faction = /f:(\w+)/;
	res = RegExp(faction).exec(f)
	if (res !== null)	{
		outp["factioncode"] = res[1];
	}
	
	var type = /t:(\w+)/;
	res = RegExp(type).exec(f)
	if (res !== null)	{
		outp["Type"] = res[1];
	}
	
	var text = /x:(.+)/;
	res = RegExp(text).exec(f)
	if (res !== null)	{
		outp["CardText"] = {likenocase:res[1].split('|')};
	}
	
	var claim = /c:([0-9])/;
	res = RegExp(claim).exec(f);
	if (res != null)	{
		outp["Claim"] = res[1];
	}
	
	return outp;
}


/* Fisher-Yates Shuffle  */
function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle…
	while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}