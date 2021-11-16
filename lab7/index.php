<?php  
	include "/websyslab7.php";
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>GradeBook</title>
</head>
<body>
	<form method="post" action="member_ok.php">
		<h1>GradeBook Form</h1>
			<fieldset>
				<legend>Forms to fill</legend>
					<table>
						<tr>
							<td>RCSID</td>
							<td><input type="text" size="35" name="userid" placeholder="rcsid"></td>
						</tr>
						<tr>
							<td>First Name</td>
							<td><input type="text" size="35" name="fname" placeholder="fname"></td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td><input type="text" size="35" name="lname" placeholder="lname"></td>
						</tr>
						<tr>
							<td>City</td>
							<td><input type="text" size="35" name="city" placeholder="city"></td>
						</tr>
						<tr>
							<td>State</td>
							<td><input type="text" size="35" name="state" placeholder="state"></td>
						</tr>
                        <tr>
							<td>Street</td>
							<td><input type="text" size="35" name="street" placeholder="street"></td>
						</tr>
					</table>

				<input type="submit" value="Submit" /><input type="reset" value="reset" />
			
		</fieldset>
	</form>
</body>