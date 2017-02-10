<?php 
	include_once "agot2db-includes/db-connect.php";
	
	$deckid = 0;
	$deckname = "";
	
	$deck = array();
	$alldecks = array();
	
	/* Load Deck List */
	if ($stmt = $conn->prepare("SELECT deckid, deckname FROM tbldeck ORDER BY deckname")) {
		$stmt->execute();	
		$stmt->bind_result($did,$dname);
		
		while ($stmt->fetch()) {
			array_push($alldecks,["deckid"=>$did,"deckname"=>$dname]);
		}
	}
	//print_r ($alldecks);
	
	
	if (isset($_GET['id'])) {
		$deckid = $_GET['id'];
		
		if ($stmt = $conn->prepare("SELECT deckid, deckname FROM tbldeck WHERE deckid=" . $deckid)) {
			$stmt->execute();
			$deckid = 0;
			$stmt->bind_result($id,$name);
			while ($stmt->fetch()) {
				$deckid = $id;
				$deckname = $name;
			}
			
			if ($stmt = $conn->prepare("SELECT card_code, card_qty FROM tbldeck_cards WHERE deck_id=" .$deckid)) {
				$stmt->execute();
				$stmt->bind_result($code, $qty);
				while ($stmt->fetch()) {
					array_push($deck,["code"=>$code,"qty"=>$qty]);
				}
				//print_r ($deck);
				//echo json_encode($deck);
 			}
			
		}
	}
	
	
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
	<script src="/agot2/js/agot2_tools.js"></script>
	<script src="/agot2/js/agot2_deckbuilder.js"></script>
	<script src="/agot2/js/agot2_qtip.js"></script>
	
	<link href="/agot2/css/agot2.css" rel="stylesheet">
	
	<script>
		$(document).ready( function() {
	
		});
		
	</script>
</head>
<body>
	<?php 
		$pagename = "deckbuilder";
		include "/res/navbar.php";
	?>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div id="deckbuttons">
					<a class="btn btn-warning" href="/agot2/">New Deck</a>
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Load <span class="caret"></span></button>
						<ul class="dropdown-menu" role="menu">
							<?php 
								foreach($alldecks as $deckinfo) {
									echo '<li><a href="/agot2/?id=' . $deckinfo["deckid"] . '">' . $deckinfo["deckname"] . '</a></li>';
								}
							?>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="row" style="min-height: 200px;">
					<div id="decklist">No cards selected</div>
				</div>
				<div class="row">
					<form method="POST" action="api/deck/save.php" id="save_form" role="form">
						<input id="deck-id" name="deckid" value="<?php echo $deckid ?>" hidden>
						<input id="deck-desc" name="deckdesc" hidden>
						<input id="deck-content" name="deckcontent" value='<?php echo json_encode($deck) ?>' hidden>
						<div class="form-group">
							<label>Name</label>
							<input class="form-control" id="deck-name" name="deckname" value="<?php echo $deckname ?>">
						</div>
						<button type="submit" class="btn btn-warning" name="save">Save</button>
						<button type="submit" class="btn btn-danger" name="delete">Delete</button>
					</form>
				</div>
			</div>
			<div class="col-md-6">
				<ul class="nav nav-tabs">
					<li class="active"><a data-toggle="tab" href="#deckbuild">Build</a></li>
					<li><a data-toggle="tab" href="#deckcheck">Check</a></li>
					<li><a data-toggle="tab" href="#deckstats">Stats</a></li>
					<li><a data-toggle="tab" href="#decksets">Sets</a></li>
					<li><a data-toggle="tab" href="#deckloader">Load</a></li>
				</ul>
				<div class="tab-content" style="padding-top: 10px;">
					<div id="deckbuild" class="tab-pane active">
						<div class="row">
							<div class="col-md-12">
								<input type="text" class="form-control" placeholder="Filter List" id="filterlist">
								<div class="checkbox"><label><input type="checkbox" id="agendaFilter" value="" >Filter based on Faction and Agenda</label></div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<div class="btn-group" data-toggle="buttons" id="cardfilter">
									<label class="btn btn-default btn-sm" title="Faction"><input type="checkbox" name="Faction"><i class="fa fa-flag" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="Agenda"><input type="checkbox" name="Agenda"><i class="fa fa-user-plus" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="Plot"><input type="checkbox" name="Plot"><i class="fa fa-bookmark" aria-hidden="true"></i></label>
									<br>
									<label class="btn btn-default btn-sm" title="Character"><input type="checkbox" name="Character"><i class="fa fa-users" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="Attachment"><input type="checkbox" name="Attachment"><i class="fa fa-paperclip" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="Event"><input type="checkbox" name="Event"><i class="fa fa-bolt" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="Location"><input type="checkbox" name="Location"><i class="fa fa-map-marker" aria-hidden="true"></i></label>
								</div>
							</div>
							<div class="col-md-8">
								<div class="btn-group" data-toggle="buttons" id="factionfilter">
									<label class="btn btn-default btn-sm" title="House Lannister"><input type="checkbox" name="Lannister"><i class="icon icon-lannister"></i></label>
									<label class="btn btn-default btn-sm" title="House Martell"><input type="checkbox" name="Martell"><i class="icon icon-martell" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="The Night's Watch"><input type="checkbox" name="The Night's Watch"><i class="icon icon-watch" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="House Stark"><input type="checkbox" name="Stark"><i class="icon icon-stark" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="House Targaryen"><input type="checkbox" name="Targaryen"><i class="icon icon-targaryen" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="House Tyrell"><input type="checkbox" name="Tyrell"><i class="icon icon-tyrell" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="House Baratheon"><input type="checkbox" name="Baratheon"><i class="icon icon-baratheon" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="House Greyjoy"><input type="checkbox" name="Greyjoy"><i class="icon icon-greyjoy" aria-hidden="true"></i></label>
									<label class="btn btn-default btn-sm" title="Neutral"><input type="checkbox" name="Neutral"><i class="fa fa-plus" aria-hidden="true"></i></label>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<table id="cardtbl" class="table-condensed">
									<tr>
										<th>Quantity</th>
										<!--th>House</th-->
										<th>Name</th>
										<th>Type</th>
										<th>Cost</th>
										<th>Strength</th>
										<!--th>Set</th-->
									</tr>
									<tbody id="tablebody"></tbody>
								</table>
							</div>
						</div>
					</div>
					<div id="deckcheck" class="tab-pane">
						<div class="row">
							<div class="col-md-12">
								<div id="faction_name"></div>
								<div id="plot_cards"></div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div id="plot_data"></div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12" align="center">
								<b>Draw:&nbsp;</b>
								<div class="btn-group">
									<button type="button" class="btn btn-default btn-sm btn-draw" val="1" id="draw1">1</button>
									<button type="button" class="btn btn-default btn-sm btn-draw" val="2" id="draw2">2</button>
									<button type="button" class="btn btn-default btn-sm btn-draw" val="3" id="draw3">3</button>
									<button type="button" class="btn btn-default btn-sm btn-draw" val="4" id="draw4">4</button>
									<button type="button" class="btn btn-default btn-sm btn-draw" val="7" id="draw7">7</button>
									<button type="button" class="btn btn-default btn-sm btn-draw" val="all" id="drawall">All</button>
									<button type="button" class="btn btn-default btn-sm btn-draw" val="0" id="drawreset">Reset</button>
								</div>
								<span id="choosecardlist"></span>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12" align="center">
								<div id="hand"></div>
							</div>
						</div>
					</div>
					<div id="deckstats" class="tab-pane">
						<div class="row">
							<div class="col-md-12">
							</div>
						</div>
					</div>
					<div id="decksets" class="tab-pane">
						<div class="row">
							<div class="col-md-12">
								<div id="setlist"></div>
							</div>
						</div>
					</div>
					<div id="deckloader" class="tab-pane">
						<div class="row">
							<div class="col-md-6">
								<textarea class="form-control" type="text" id="deckload" rows="5"></textarea>
								<button class="btn btn-default" id="loaddeck">Load</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div style="background-color: #DDD; border-top: black solid 2px; padding: 10px 10px 100px;">
		<p><a href="https://icons8.com" target="_blank">Icon pack by Icons8</a>
	</div>
	
	<div id="cardmodal" class="modal" role="dialog"></div>
	
	<div id="snackbar"></div>
</body>
