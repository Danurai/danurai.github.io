//Deck Functions
// Load
// Parse

function loadDeck(decklist)	{
	var deckinfo = parseDeck(decklist);
	var deck = new gameDeck(deckinfo.data);
	deck.setMeta("decklist",deckinfo.decklist);
	deck.setMeta("title",deckinfo.title);
	deck.setMeta("idcode",deckinfo.idcode);
	deck.setMeta("idname",deckinfo.idname);
	deck.setMeta("agname",deckinfo.agenda);
	deck.setMeta("agcode",deckinfo.agendaid);
	deck.setMeta("plots",deckinfo.plot);
	deck.resetCards();
	return deck;
}

// Create deck from decklist data. Returns deck = {title,id,idname,agenda,agendaid,data[card codes],plot[card codes]}
function parseDeck(data)	{
	var crd;
	var deck = {};
	var _cards = TAFFY(CARDS);	//Temp
	
// Deck Name, Faction and Agenda
	var res = data.match(/(.+)/g);
	deck.title = res[0];
	deck.idname = res[1];
	deck.agenda = res[2];
	deck.decklist = data;
	
	deck.idcode = _cards({"name":deck.idname}).first().code; 		//Special Characters - CT fixed by not using \\uuml; on textarea
	deck.agendaid = _cards({"name":deck.agenda}).first().code; 
	
	deck.data = [];
	deck.plot = [];
	
	var regex = /([0-9])x\s(.+)\s\((.+)\)/g;						// Nx <Card name> (<pack name>)		/([0-9])x\s((.+)\s\s\W+|(.+))/g;				// Look out for STAR special character (ANR)
	var res = data.match(regex);
			
	$.each(res, function (id, item) {
		item.match(regex);
		var qty = parseInt(RegExp.$1, 10);
		crd = _cards({"name":RegExp.$2,"Set":RegExp.$3}).first();
		for (var i=0; i < qty; i++)	{
			if (crd.Type == 'Plot')	{
				deck.plot.push(crd.code);
			} else {
				deck.data.push(crd.code);
			}
		}
	});
	//console.log('Deck Loaded:');
	//console.log(deck);
	
	return deck;		
}