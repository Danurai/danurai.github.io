<?php
// ALTER TABLE tbldeck AUTO_INCREMENT = 4
// get or create deck info
	$conn = mysqli_connect("localhost", "gandalf", "wizard", "lotrlcg");
	$modifiedon = date('Y-m-d H:i:s');
	if (isset($_GET["q"])) {
		$deckid = $_GET["q"];
	} else {
		$qry = "INSERT INTO tbldeck (deckname, createdon, modifiedon) VALUES ('New Deck','" . $modifiedon . "','" . $modifiedon . "')";
		if (mysqli_query($conn,$qry)) {
			$deckid = mysqli_insert_id($conn);
		}
	}
	echo $deckid
?>