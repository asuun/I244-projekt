<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
echo "Siin toimub vormi töötlus";
echo "Andmed mida saame kasutada on:";
print_r($_POST);
$_POST["eesnimi"];
$servername = "localhost";
$username = "test";
$password = "t3st3r123";
$database = "test";

function alusta_session(){
    session_set_cookie_params(30*60);
    $expire=10*60; // aegumise aeg sekundites
// sessiooni aegumine serveris
    ini_set('session.gc-maxlifetime', $expire);
// alusta uus või jätka vana sessiooni
    session_start();
// viimase päringu aja kontroll aegumise jaoks
    if (isset($_SESSION['LAST_ACTIVITY']) &&
        (time()-$_SESSION['LAST_ACTIVITY'] > $expire))
    {
        session_destroy();  // kustuta sessioon
        session_start();  // alusta uut sessiooni
    }
// säti uus viimase päringu aeg
    $_SESSION['LAST_ACTIVITY'] = time();
}
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
$eesnimi= $_POST["eesnimi"];
$perenimi= $_POST["perenimi"];
$tase=$_POST["tase"];
$sql = "INSERT INTO 000I244tabelkatse (eesnimi, perenimi,tase)
VALUES ('$eesnimi', '$perenimi','$tase')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

die();