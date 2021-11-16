<?php
	include "/websyslab7.php";

	$rcsid = $_POST['rcsid'];
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$city = $_POST['city'];
    $state = $_POST['state'];
    $street = $_POST['street'];

$sql = mq("insert into member (rcsid,fname,lname,city,state,street) values('".$rcsid."','".$fname."','".$lname."','".$city."','".$state."','".$street."')");

?>
<meta charset="utf-8" />
<script type="text/javascript">alert('Submission Completed.');</script>
<meta http-equiv="refresh" content="0 url=/">