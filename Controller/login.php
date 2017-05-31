<?php
include '../../Model/send.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $fname = test_input($_POST["eesnimi"]);
        $sname = test_input($_POST["perenimi"]);
        $tase = test_input($_POST["tase"]);
    }
    ?>

<?php
session_start();
    $_SESSION['start']     = time();
    $_SESSION['expire'] = $_SESSION['start'] + (30 * 60);
    $_SESSION["eesnimi"] =$fname;
    $_SESSION["perenimi"] = $sname;
    $_SESSION["tase"] = $tase;
    header('Location: ../../Model/yl1.html');


//sessiooni järele jäänud aeg:
if ($now > $_SESSION['expire']) {
    session_destroy();
    echo "Your session has expired! <a href='http://www.delfi.ee'></a>";
}
else {}; //Starting this else one [else1]


if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 1800)) {
    // last request was more than 30 minutes ago
    session_unset();     // unset $_SESSION variable for the run-time
    session_destroy();   // destroy session data in storage
}
$_SESSION['LAST_ACTIVITY'] = time()


if ($tase == 1) {
    header('Location: ../../View/yl1.html');
    exit;

} elseif ($tase == 2) {
    header('Location: ../../View/yl20.html');
    exit;

}elseif ($tase == 3) {
    header('Location: ../../View/yl21.html');
    exit;

} else {
    echo "palun vali raskusaste";
    header('Location:index.html');
}
?>

