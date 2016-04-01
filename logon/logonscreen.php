<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';
 
sec_session_start();

if (login_check($mysqli) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Secure Logon: Logon</title>
	
	<?php include "res/header.php" ?>
	
	<script type="text/JavaScript" src="js/sha512.js"></script> 
	<script type="text/JavaScript" src="js/forms.js"></script> 
	
	<script>
	$(document).ready( function () {
		$('button[name=btn-logon]').on('click',function () {
			formhash(this.form, this.form.password);
		});
	});
	</script>
</head>

<body>
	<?php include "res/navbar.php" ?>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Log in</h3>
					</div>
					<div class="panel-body">
						<?php
						if (isset($_GET['error'])) {
							echo '<p class="error">Error Logging In!</p>';
						}
						?> 
						<form action="includes/process_login.php" method="post" name="logon" role="form">
							<div class="form-group">
								<label for="email">Email</label>
								<input type="text" class="form-control" name="email" placeholder="Enter Email"></input>
							</div>
							<div class="form-group">
								<label for="password">Password:</label>
								<input type="password" class="form-control" name="password" placeholder="Enter password"></input>
							</div>
							<button type="button" name="btn-logon" class="btn btn-default">Logon</button>
						</form>
					</div>
				</div>
				<?php
					if (login_check($mysqli) == true) {
						echo '<p>Currently logged ' . $logged . ' as ' . htmlentities($_SESSION['username']) . '.</p>';
						echo '<p>Do you want to change user? <a href="includes/logout.php">Log out</a>.</p>';
					} else {
						echo '<p>Currently logged ' . $logged . '.</p>';
						echo "<p>If you don't have a login, please <a href='registerscreen.php'>register</a></p>";
					}
				?>      
			</div>
		</div>
	</div>
</body>
</html>

