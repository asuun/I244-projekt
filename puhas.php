<?php

$inactive = 1;
if(isset($_SESSION['timeout']) ) {
  $session_life = time() - $_SESSION['timeout'];
	header('Location:../View/index.html');

  if($session_life > $inactive) { 
    header('Location: ../View/index.html'); 
  }
}

$_SESSION['timeout'] = time();

?>

