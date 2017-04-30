<?php
$servername = "localhost";
$username = "test";
$password = "t3st3r123";
$database = "test";
$eesnimi= $_REQUEST["eesnimi"];
$perenimi= $_GET["perenimi"];
$tase=$_GET["tase"];
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT eesnimi FROM 000I244tabelkatse";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>ID</th><th>Name</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["eesnimi"]."</td><td>".$row["perenimi"]." ".$row["aeg"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>