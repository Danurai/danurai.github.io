<?php
include_once 'includes/register.inc.php';
include_once 'includes/functions.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Secure logon: Registration Form</title>
		
	<script type="text/JavaScript" src="js/sha512.js"></script> 
	<script type="text/JavaScript" src="js/forms.js"></script>
	
	<?php include "res/header.php" ?>
	
	<script>
	// Qtip headers
	$(document).ready(function () {
		$('#regname').qtip( {
			content: "Usernames may contain only digits, upper and lowercase letters and underscores",
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			}
		});
		$("#regemail").qtip( {
			content: "Emails must have a valid email format",
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			}
		});
		$("input[name^=_regpwd]").qtip( {
			content: {
				text: 'Passwords must be at least 6 characters long.<br>Passwords must contain:'
					+ '<ul>'
                    + '<li>At least one uppercase letter (A..Z)</li>'
                    + '<li>At least one lowercase letter (a..z)</li>'
                    + '<li>At least one number (0..9)</li>'
					+ '</ul>'
					+ 'Your password and confirmation must match exactly'
			},
			style: {
				classes: 'qtip-bootstrap',
				tip: false
			},
			position: {
				my:	'left center',
				at: 'right center'
			}
		});
	});
	
	</script>
	
	<style>
	</style>
</head>

<body>
	<?php include "res/navbar.php" ?>
<!-- Registration form to be output if the POST variables are not
set or if the registration script caused an error. -->
	<?php
		if (!empty($error_msg)) {
			echo $error_msg;
		}
	?>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">Register</h3>
					</div>
					<div class="panel-body">
						<form action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>" 
								method="post" 
								role="form" 
								name="registration_form"  >
							<div class="form-group">
								<label for="regname">Username</label>
								<input type="text" class="form-control" id="regname" name="regname"></input>
							</div>
							<div class="form-group">
								<label for="regemail">Email</label>
								<input type="email" class="form-control" id="regemail" name="regemail"></input>
							</div>
							<div class="form-group">
								<label for="regpwd">Password</label>
								<input type="password" class="form-control" id="regpwd" name="regpwd"></input>
							</div>
							<div class="form-group">
								<label for="regpwdconf">Re-enter Password</label>
								<input type="password" class="form-control" id="regpwdconf" name="regpwdconf"></input>
							</div>
							<button type="button"
								class="btn btn-primary"
								onclick="return regformhash(this.form,
                                   this.form.regname,
                                   this.form.regemail,
                                   this.form.regpwd,
                                   this.form.regpwdconf);" >Submit</button>
							<a class="btn btn-default pull-right" href="logonscreen.php">Logon</a>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>