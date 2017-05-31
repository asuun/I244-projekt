
<?php

ini_set("session.cookie_lifetime",100000);
$_SESSION['LAST_ACTIVITY'] = time();

session_start();
$_SESSION['eesnimi'] = $_POST["eesnimi"];
$_SESSION['perenimi'] =  $_POST["perenimi"];
$_SESSION['tase'] = $_POST["tase"];
$_SESSION['punkte'] = $_POST["punkte"];

$expire=2000; // aegumise aeg sekundites
// sessiooni aegumine serveris

ini_set('session.gc-maxlifetime', $expire);

if ($_SESSION['tase']==1) {
    header('Location: ../View/yl20.html');
}
elseif ($_SESSION['tase']==2) {
    header('Location: ../View/yl1.html');
}
elseif ($_SESSION['tase']==3) {
    header('Location: ../View/yl21.html');
}else{
    header('Location: ../View/index.html');
}


// alusta uus vĆµi jĆ¤tka vana sessiooni
// viimase pĆ¤ringu aja kontroll aegumise jaoks
//if (isset($_SESSION['LAST_ACTIVITY']) &&
//    (time()-$_SESSION['LAST_ACTIVITY'] > $expire))
//{
  //  header('Location: ../VisualControl/labi.php');
//    tapa_sessioon();  // kustuta sessioon
//}
// sĆ¤ti uus viimase pĆ¤ringu aeg

?>