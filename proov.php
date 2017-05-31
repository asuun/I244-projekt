<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $eesnimi = $_POST["eesnimi"];
    $perenimi = $_POST["perenimi"];
    $tase = $_POST["tase"];
}

echo "eesnimi on " . $eesnimi . "<br>";
echo "perenimi on " . $perenimi . "<br>";
echo "tase on " . $tase . "<br>";

ini_set("session.cookie_lifetime",1000);

session_start();
$_SESSION['tulemused']='tulemuse';
$_SESSION['eesnimi'] = $eesnimi;
$_SESSION['perenimi'] = $perenimi;
$_SESSION['tase'] = $tase;
$_SESSION['punktid']=$punktid;

header('Location: printimine.php');
?>