<?php
if($_SERVER['REQUEST_METHOD']=='POST') {
	
	include_once "agot2db-includes/db-connect.php";

	$USER = (int)1000;
	$id = (int)$_POST["deckid"];
	$name = $_POST["deckname"];
	$desc = $_POST["deckdesc"];
	$cards = $_POST["deckcontent"];
	$date = date('Y-m-d H:i:s');
	
// Check Parameters
// echo $id . '<br>' . $name . '<br>' . $desc . '<br>' . $cards . '<br>' . $date;
//	echo $cards;
	
// Set autocommit to off
	$conn->autocommit(FALSE);
	
	if(isset($_POST["delete"])) {
		$stmt = $conn->prepare("DELETE FROM tbldeck_cards WHERE deck_id=" . $id);
		$stmt->execute();
		$rescards = $stmt;
		
		$stmt = $conn->prepare("DELETE FROM tbldeck WHERE deckid=" .$id);
		$stmt->execute();
		$resdeck = $stmt;
		
		if ($rescards && $resdeck) {
			$conn->commit();
			header('location: /agot2/');
		} else {
			echo "Delete failed";
			$conn->rollback();
		}
	}
	
	if (isset($_POST["save"])) {
	// update deck
		if ($id == 0) {
			$stmt = $conn->prepare("INSERT INTO tbldeck (ownerid,deckid,deckname,deckdesc,createdon,modifiedon) VALUES (?,?,?,?,?,?)");
			$stmt->bind_param('iissss',$USER,$id,$name,$desc,$date,$date);
			$stmt->execute();
			$id = $conn->insert_id;
		} else {
			$stmt = $conn->prepare("UPDATE tbldeck SET deckname=?, deckdesc=?, modifiedon=? WHERE deckid=?");
			$stmt->bind_param('sssi',$name,$desc,$date,$id);
			$stmt->execute();
		}
		$resdeck = $stmt;
		
		// update cards
		// 1. Delete cards
		$stmt = $conn->prepare("DELETE FROM tbldeck_cards WHERE deck_id = ?");
		$stmt->bind_param('i',$id);
		$stmt->execute();
		$resdel = $stmt;
		// 2. Insert new cards
		$card_code = '';
		$card_qty = 0;
		$stmt = $conn->prepare("INSERT INTO tbldeck_cards (deck_id, card_code, card_qty) VALUES (?,?,?)");
		
		$stmt->bind_param('isi',$id,$card_code,$card_qty);
		
		$cardarr = json_decode($cards, true);
		//print_r ($cardarr);
		foreach($cardarr as $card)	{
			$card_code = $card["code"];
			$card_qty = $card["qty"];
			$stmt->execute();
		}
		
		$rescards = true;
		
		if ($resdeck && $resdel && $rescards) {
	/* Commit transaction */
			$conn->commit();
			header('location: /agot2/?id=' . $id . '&save=true');
			exit();
		} else {
			echo "Update failed";
	/* Rollback transaction */
			$conn->rollback();
		}
	}
	$conn->close();
}
?>