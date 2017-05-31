<?php
session_start();
$_SESSION['punkte'] = $_POST["punkte"];
print_r($_SESSION);

header('Location: ../Model/send.php');
?>