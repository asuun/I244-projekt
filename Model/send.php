<?php
session_start();

$_SESSION['punkte'] = $_POST["punkte"];
if($_POST["punkte"]==null){
    $_SESSION['punkte']=="0";
}

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
   // echo "Tulemused salvestati andmebaasi 000I244tabelkatse" . "<br>" ."Eesnimi:". $eesnimi . "<br>" . "Perekonnanimi" . $perenimi  . "<br>" ."Punkte:" . $punkte;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();


?>
<!DOCTYPE html>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../View/format/ef_main.css">
<title>Sisse logimine</title>

<body>
<header>Tulemus
    <div id="aeg"></div></header>

<nav>

    <form id="vorm">
        <input type="text" readonly name="eesnimi" style="border-color:red" id="eesnimi" value=" Eesnimi: "+"<?php echo htmlspecialchars($eesnimi); ?>"><br>
        <input type="text" readonly name="perenimi" style="border-color:red" id="perenimi" value="Perekonnanimi"+"<?php echo htmlspecialchars($perenimi); ?>"><br>
        <input type="text" readonly name="tase" style="border-color:red" id="tase" value="tase"+"<?php echo htmlspecialchars($tase); ?>"><br>
        <input type="text" readonly  name="punkte" style="border-color:red" id="punkte" value="kogusid punkte"+"<?php echo htmlspecialchars($punkte); ?>"><br>

    </form>
</nav>


<footer>Copyright &copy; The dog</footer>
<script src="tasks/Taimer.js"></script>
</body>

</html>
