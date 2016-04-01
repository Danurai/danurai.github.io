<?php
$error = filter_input(INPUT_GET, 'err', $filter = FILTER_SANITIZE_STRING);
 
if (! $error) {
    $error = 'Oops! An unknown error happened.';
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Secure Login: Error</title>
		<?php include "res/header.php" ?>
    </head>
    <body>
		<?php include "res/navbar.php" ?>
		<div class="container">
			<div class="row">
				<h1>There was a problem</h1>
				<p class="error"><?php echo $error; ?></p>  
			</div>
		</div>
    </body>
</html>