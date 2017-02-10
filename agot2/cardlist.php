<?php
?>
<!DOCTYPE html>
<head>
<!-- JQuery -->
	<script src="https://code.jquery.com/jquery-2.2.2.min.js" integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=" crossorigin="anonymous"></script>
<!-- BOOTSTRAP -->
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	
<!-- jquery QTIPs -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.js"></script>
<!-- TAFFYdb -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/taffydb/2.7.2/taffy-min.js"></script>

<!-- FONT AWESOME -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
	
	<script src="/agot2/js/agot2_filter.js"></script>
	
	<script src="/agot2/js/agot2_data.js"></script>
	<!-- script src="/agot2/js/agot2_deckbuilder.js"></script -->
	<script src="/agot2/js/agot2_tools.js"></script>
	<script src="/agot2/js/agot2_cards.js"></script>
	<script src="/agot2/js/agot2_qtip.js"></script>
	
	<link href="/agot2/css/agot2.css" rel="stylesheet">
	
	<!--script>
		$(document).ready( function() {
			//$('#deckload').val("Deck Created with CardGameDB.com A Game of Thrones 2nd Edition Deckbuilder\n\n\nTotal Cards: (50)\n\nFaction: \n Targaryen\n\n\nAgenda: (1)\n1x Fealty (Core Set)\n\nPlot: (7)\n1x Counting Coppers (Core Set)\n1x Confiscation (Core Set)\n1x Fortified Position (Core Set)\n2x The Winds of Winter (Core Set)\n1x Supporting the Faith (Core Set)\n1x A Noble Cause (Core Set)\n\nCharacter: (35)\n3x Braided Warrior (Core Set)\n3x Daenerys Targaryen (Core Set)\n3x Drogon (Core Set)\n3x Handmaiden (Core Set)\n3x Khal Drogo (Core Set)\n2x Magister Illyrio (Core Set)\n3x Rhaegal (Core Set)\n3x Ser Jorah Mormont (Core Set)\n3x Targaryen Loyalist (Core Set)\n3x Unsullied (Core Set)\n3x Viserion (Core Set)\n3x Viserys Targaryen (Core Set)\n\nAttachment: (0)\n\n\nEvent: (9)\n3x Dracarys! (Core Set)\n3x Fire and Blood (Core Set)\n3x Waking the Dragon (Core Set)\n\nLocation: (6)\n3x Illyrio's Estate (Core Set)\n3x Plaza of Punishment (Core Set)");
		});
		
	</script-->
</head>
<body>
	<?php 
		$pagename = "cardlist";
		include "/res/navbar.php";
	?>
	<div class="container">
		<div class="col-sm-3">
			<div id = "sets"></div>
		</div>
		<div class="col-sm-9">
			<div class="row">
				<form method="GET">
					<div class="col-sm-4">
						<div class="input-group">
							<input class="form-control" name="q" id="search-input" value="<?php echo (isset($_GET['q']) ? $_GET['q'] : '' ) ?>">
							<span class="input-group-btn">
								<button class="btn btn-primary" id="search-submit">Search</button>
							</span>
						</div>
					</div>
					<div class="col-sm-6"></div>
				</form>
			</div>
			<div class="row">
				<table class="table-condensed table-striped">
					<tbody>
						<th>Name</th>
						<th>Type</th>
						<th>Faction</th>
						<th>Cost</th>
						<th>Strength</th>
						<th>Set</th>
					</tbody>
					<tbody id="search-cardlist"></tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>