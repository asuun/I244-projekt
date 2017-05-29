
<?php
ini_set("session.cookie_lifetime",10);
session_start();
$_SESSION['tulemused']='tulemuse';

$_SESSION['eesnimi'] = $eesnimi;
$_SESSION['perenimi'] = $perenimi;
$_SESSION['tase'] = $tase;

$punktid=$_POST["punktid"];


header('Location: ../../View/yl1.html');

$expire=10; // aegumise aeg sekundites
// sessiooni aegumine serveris

ini_set('session.gc-maxlifetime', $expire);

// alusta uus vĆµi jĆ¤tka vana sessiooni
// viimase pĆ¤ringu aja kontroll aegumise jaoks
if (isset($_SESSION['LAST_ACTIVITY']) &&
    (time()-$_SESSION['LAST_ACTIVITY'] > $expire))
{
    header('Location: ../../Model/send.html');
    tapa_sessioon();  // kustuta sessioon
}
// sĆ¤ti uus viimase pĆ¤ringu aeg
$_SESSION['LAST_ACTIVITY'] = time();

?>