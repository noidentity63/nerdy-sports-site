<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>MySQL Connection test</title>
</head>
<body>
	<?php
	$servername = "localhost";
	$username = "root";
	$password = "roo";

	// Create connection
	$conn = new mysqli($servername, $username, $password);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	echo "Connected successfully";
	?>

</body>
</html>