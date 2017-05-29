<?php

// This sends a persistent cookie that lasts a day.86400
session_start();
$_SESSION['name']='login';

// Storing session data
$_SESSION["firstname"] = "Peter";
$_SESSION["lastname"] = "Parker";

session_start([
    'cookie_lifetime' => 60,
]);

?>