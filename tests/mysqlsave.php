<?php
if($_SERVER['REQUEST_METHOD']=='POST') {
	
	$conn = mysqli_connect("localhost", "gandalf", "wizard", "lotrlcg");
	
	$id = $_POST["deckid"];
	$name = $_POST["deckname"];
	$desc = $_POST["deckdesc"];
	$cards = $_POST["deckcards"];
	$date = date('Y-m-d H:i:s');
	
	print_r($cards);
	
	$cardarr = json_decode($cards);
	
	echo '<p>';
	print_r($cardarr);
	echo count($cardarr);
	
	foreach($cardarr as $card)	{
		echo '<br>';
		print_r($card);
		echo '<br>' . $card->qty . ' x ' . $card->code;
	}
	
	
// Set autocommit to off
	mysqli_autocommit($conn,FALSE);

// Create or update DECK
	$sqldeck = "INSERT INTO tbldeck (deckid, deckname, deckdesc, createdon, modifiedon) "
		. "VALUES "
		. "(" . $id . ",'" . $name . "','" .$desc ."','" .$date ."','" .$date ."') "
		. "ON DUPLICATE KEY UPDATE deckname='" .$name . "', deckdesc='" .$desc . "', modifiedon='" .$date . "'";
	echo '<p>' . $sqldeck;
	$resdeck = mysqli_query($conn,$sqldeck);
	echo '<p>';
	print_r ($resdeck);

// Clear previous cards
	$sqldel = "DELETE FROM tbldeck_cards where deckid = " .$id;
	echo '<p>' . $sqldel;
	$resdel = mysqli_query($conn,$sqldel);
	echo '<p>';
	print_r ($resdel);

// Load new cards
	$resload = 1;
	if (count($cardarr)>0) {
		$sqlload = "INSERT INTO tbldeck_cards (deckid, cardcode, cardqty, saved, modifiedon) VALUES ";
		foreach ($cardarr as $card) {
			$sqlload .= "(" .$id .",'" . $card->code . "'," .$card->qty . ",1,'" .$date . "'),";
		}
		$sqlload = substr($sqlload,0,-1);
		echo '<p>' . $sqlload;
		$resload = mysqli_query($conn,$sqlload);
		echo '<p>';
		print_r ($resdel);
	}
	
	if ($resdeck && $resdel && $resload) {
// Commit transaction
		mysqli_commit($conn);
		mysqli_close($conn);
		header('location: mysqlload.php');
		exit();
// Redirect
	} else {
		echo "Update failed";
// Rollback transaction
		mysqli_rollback($conn);
		mysqli_close($conn);
	}
// Close connection
}
?>