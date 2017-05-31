<?php
session_start();

$_SESSION['punkte'] = $_POST["punkte"];

$servername = "localhost";
$username = "test";
$password = "t3st3r123";
$database = "test";

$eesnimi= $_SESSION['eesnimi'];
$perenimi=$_SESSION['perenimi'];
$tase=$_SESSION['tase'];
$punkte=$_SESSION['punkte'];


// andmebaasi sisselogimine
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT eesnimi,perenimi,tase,punktid FROM 000I244tabelkatse WHERE eesnimi=$eesnimi";

$result = $conn->query($sql);


$sql = "INSERT INTO 000I244tabelkatse (eesnimi, perenimi,tase, punktid)
VALUES ('$eesnimi', '$perenimi','$tase', $punkte)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

if ($result->num_rows > 0) {
    echo "<table><tr><th>eesnimi</th><th>perenimi</th><th>aeg</th><th>ID</th></tr><table>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["eesnimi"]."</td><td>".$row["perenimi"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>