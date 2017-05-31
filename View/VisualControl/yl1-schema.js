/**
 * Created by The Dog on 30.05.2017.
 */
//õige vastuse esitades muudetakse skeemi vastavalt- siin on etappide kaupa kutsutavad funktsioonid




//Kasutaja peab ära tundma paralleelahela, kui Rekv on õigesti sisestatud siis kaovad R3 ja R4
function yl10() {
    document.getElementById('teineetapp').style.visibility = "hidden";
    document.getElementById('kolmasetapp').style.visibility = "hidden";
    document.getElementById('neljasetapp').style.visibility = "hidden";
}
// eelmise etapi vastused pannakse lukku, ja avanevad järgnevad väljad
function yl11() {
    document.getElementById('R345').readOnly = true;
    document.getElementById('teineetapp').style.visibility = "visible";
    document.getElementById('R3').style.display = "none";
    document.getElementById('R4').style.display = "none";
    document.getElementById('R5').style.opacity = "1";
    document.getElementsByClassName("nimiandmed")['R4'].style.display="none";
    document.getElementsByClassName("nimiandmed")['R3'].style.display="none";
    document.getElementsByClassName("nimiandmed")['R5'].style.opacity="1";
    document.getElementById('scheme30').style.visibility = "hidden";
    document.getElementById('scheme31').style.visibility = "hidden";
    document.getElementById('scheme40').style.visibility = "hidden";
    document.getElementById('scheme41').style.visibility = "hidden";
    document.getElementById('scheme52').style.visibility = "visible";
    document.getElementById('scheme54').style.visibility = "visible";
}

// eelmise etapi vastused pannakse lukku, ja avanevad järgnevad väljad
function yl12() {
    document.getElementById('teineetapp').readOnly = true;
    document.getElementById('kolmasetapp').style.visibility = "visible";
}

// eelmise etapi vastused pannakse lukku, ja avanevad järgnevad väljad
function yl13() {
    document.getElementById('kolmasetapp').readOnly = true;
    document.getElementById('neljasetapp').style.visibility = "visible";
}

// eelmise etapi vastused pannakse lukku, ja avanevad järgnevad väljad
function yl14() {
    document.getElementById('tehtud').style.visibility = "visible";
    document.getElementById('ahel').style.visibility = "hidden";
    document.getElementById('saada').style.visibility = "visible";
    document.getElementById('kontroll').style.visibility = "hidden";

}
