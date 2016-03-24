<?php
	$id = 3;
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>MySql Load & Save</title>
	
	<!-- BOOTSTRAP -->
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	

</head>
<body>
	<div class="container" style="margin-top:10px;">
		<form method="POST" action="mysqlsave.php" id="save_form" role="form-inline" style="margin-bottom:1em;">
			<div class="form-group">
				<label>Deck ID</label>
				<input class="form-control" name="deckid" value="<?php echo $id?>">
			</div>
			<div class="form-group">
				<label>Deck Name</label>
				<input class="form-control" name="deckname"  value="New Deck">
			</div>
			<div class="form-group">
				<label>Description</label>
				<input class="form-control" name="deckdesc">
			</div>
			<div class="form-group">
				<label>Content (json)</label>
				<input class="form-control" name="deckcards" value='[{"code":"01004","qty":1,"___id":"T000003R000002","___s":true},{"code":"01006","qty":1,"___id":"T000003R000003","___s":true},{"code":"01008","qty":1,"___id":"T000003R000004","___s":true}]'>
			</div>
			<button type="submit" class="btn btn-warning">Save</button>
		</form>
	</div>
</body>
</html>

<?php

$conn = mysqli_connect("localhost", "gandalf", "wizard", "lotrlcg");

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}
$qry = "SELECT deckid, deckname, deckdesc, createdon, modifiedon from tbldeck where deckid = " .$id;
$result = mysqli_query($conn, $qry);

if ( mysqli_num_rows($result) > 0 ) {
	$row = mysqli_fetch_assoc($result);
	echo '<p>' . $row["deckid"] . ': ' . $row["deckname"];
	echo '<br>' . $row["deckdesc"];
	echo '<p>Created on: ' . date('D j-M-Y H:i',strtotime($row["createdon"]));
	echo '<br>Last modified: ' . date('D j-M-Y H:i',strtotime($row["modifiedon"]));
	
	$cqry = "SELECT cardcode, sum(cardqty) as qty FROM tbldeck_cards WHERE deckid=" . $id . " GROUP BY cardcode HAVING sum(cardqty)>0";
	$cresult = mysqli_query($conn,$cqry);
	if ( mysqli_num_rows($cresult) > 0 ) {
		while($crow = mysqli_fetch_assoc($cresult)) {
			echo '<br>' . $crow["qty"] . " x " . $crow["cardcode"];
		}
	}
}

mysqli_close($conn);
?>
