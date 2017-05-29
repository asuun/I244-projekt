/**
 * Created by The Dog on 21.03.2017.
 */
//genereeritavad suurused
var E1;
var E2;
var R1;
var R2;
var R3;
var R4;
var R5;
//kasutaja poolt sisestatud suurused
var R345;
var I1;
var I2;
var I3;
var I4;
var U10;
var U20;
var U30;
var I34;
//arvutatud vastuste muutujad
var vastusI1;
var vastusI2;
var vastusI34;
var vastusI3;
var vastusI4;
var vastusU10;
var vastusU20;
var vastusU30;
var vastusR345;
//punktide loendur
var punktid=0;
//Ülesanne on jaotatud 4 etappi, see aitab loendada neid etappe
var etapp=0;
// kordussoorituste muutuja
var klick=0;
var vastus1;
var vastus2;
var vastus3;
//etappe saab kutsuda vaid korra
var e1lipp=true;
var e2lipp=true;
var e3lipp=true;
var e4lipp=true;


var vastatud=0;

//ülesande 1. etapp on leida ekvivalenttakistus
function yl10() {
    document.getElementById('teineetapp').style.visibility = "hidden";
    document.getElementById('kolmasetapp').style.visibility = "hidden";
    document.getElementById('neljasetapp').style.visibility = "hidden";

}
//õige vastuse esitades muudetakse skeemi vastavalt- segaahel kaotatakse ja tekitatakse ekvivalenttakistus
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

function yl12() {
    document.getElementById('teineetapp').readOnly = true;
    document.getElementById('kolmasetapp').style.visibility = "visible";

}
function yl13() {
    document.getElementById('kolmasetapp').readOnly = true;
    document.getElementById('neljasetapp').style.visibility = "visible";
}
function yl14() {
    document.getElementById('tehtud').style.visibility = "visible";
    document.getElementById('ahel').style.visibility = "hidden";
}
function genereeri() {
    E1 = document.getElementById("E1").innerHTML = +Math.round(Math.random() * 100);
    E2 = document.getElementById("E2").innerHTML = Math.round(Math.random() * 100);
    R1 = document.getElementById("R1").innerHTML = Math.round(Math.random() * 10);
    R2 = document.getElementById("R2").innerHTML = Math.round(Math.random() * 10);
    R3 = document.getElementById("R3").innerHTML = Math.round(Math.random() * 10);
    R4 = document.getElementById("R4").innerHTML = Math.round(Math.random() * 10);
    R5 = document.getElementById("R5").innerHTML = Math.round(Math.random() * 10);
    //kõik vastused on enne ümardamist korrutatud sajaga ja pärast ümardamist jagatud sajaga, et saada 2 kohta peale koma
    // I osa, leida R45 ekvivalent takistus
    vastusR345 =(Math.round( 1 / (1 / R3 + 1 / (R4 + R5)))*100)/100;

    // III osa, leida I1, I2 ja I34
    vastusI1 =(Math.round ((E1 * R2 + E1 * vastusR345 - E2 * vastusR345) / (R1 * R2 + R2 * R2 + vastusR345 * R1)*100))/100;
    vastusI2 = (Math.round (((E2 * R1 + E2 * vastusR345 - E1 * vastusR345) / (R1 * R2 + R1 * vastusR345 + vastusR345 * R2))*100))/100;
    vastusI34 =( Math.round((vastusI1 + vastusI2)*100))/100;

    // IV osa, leida I3 ja I4 ja I5
    vastusI3 =(Math.round(( vastusR345 * vastusI34 / (R3))*100))/100;
    vastusI4 =(Math.round(( vastusR345 * vastusI34 / (R4 + R5))*100))/100;

    // II osa, Leida kontuurvoolu meetodil U10, U20 U30
    vastusU10 =(Math.round ((R1 * vastusI1 + vastusR345 * vastusI34)*100))/100;
    vastusU20 =(Math.round(( R2 * vastusI2 + vastusR345 * vastusI34)*100))/100;
    vastusU30 = (Math.round((vastusU10 - vastusU20)*100))/100;

    // II osa, täita väljad
    //R1*I1+R3*I3=U10
    //R2*I2+R3*I3=U20
    //U10-U20=U30
    //I3=I1+I2

    console.log('I1', vastusI1);
    console.log('I2', vastusI2);
    console.log('I3', vastusI3);
    console.log('I4', vastusI4);
    console.log('R345', vastusR345);
    console.log('I34', vastusI34);
    console.log('U10', vastusU10);
    console.log('U20', vastusU20);
    console.log('U30', vastusU30);
    //console.log('I30',vastusI30);
}


// VIEW KUTSUMINE- ühekordseks kutsumiseks lippudega, prindib õiged vastused välja
function etapp0vastused(){
    if(etapp==0 & e1lipp==true){
        document.getElementById("R345").value=vastusR345;
        yl11();
        e1lipp=false;
    }
}
function etapp1vastused() {
    if(etapp==1 & e2lipp==true){
        document.getElementById("I1").value=vastusI1;
        document.getElementById("I2").value=vastusI2;
        document.getElementById("34").value=vastusI34;
        yl12();
        e2lipp=false;
    }
}
function etapp2vastused() {
    if(etapp==4 & e3lipp==true)
    {
        document.getElementById("U10").value=vastusU10;
        document.getElementById("U20").value=vastusU20;
        document.getElementById("U30").value=vastusU30;
        yl13();
        e3lipp=false;

    }
}
function etapp3vastused() {
    if(etapp==7 & e4lipp==true){
        document.getElementById("I3").value=vastusI3;
        document.getElementById("I4").value=vastusI4;
        e4lipp=false;
    }
}


function kontroll() {
    R345=document.getElementById("R345").valueOf().value;
    I1=document.getElementById("I1").valueOf().value;
    I2=document.getElementById("I2").valueOf().value;
    I3=document.getElementById("I3").valueOf().value;
    I4=document.getElementById("I4").valueOf().value;
    U10=document.getElementById("U10").valueOf().value;
    U20=document.getElementById("U20").valueOf().value;
    U30=document.getElementById("U30").valueOf().value;
    I34=document.getElementById("34").valueOf().value;
    /*karistuspunktid, 3 katset on igas etapis, kui õigesti ei vasta,
    hüppab programm uude etappi ja vastab sinu eest ära
     */
    if(etapp==0){
        kontroll01(R345,vastusR345);
    }
    else if(etapp<4){
        etapp0vastused();


        kontroll11(I1,vastusI1);
        kontroll12(I2,vastusI2);
        kontroll13(I34,vastusI34);
    }
    else if(etapp<7){
        etapp1vastused();

        kontroll20(U10,vastusU10);
        kontroll21(U20,vastusU20);
        kontroll22(U30,vastusU30);
    }
    else if(etapp<10){
        etapp3vastused();

        kontroll30(I3,vastusI3);
        kontroll31(I4,vastusI4);
    }

    document.getElementById('punktid').innerHTML ="Punkti: "+punktid;
}

//PIISAVALT VALESID VASTUSEID ANDES LIIGUB PROGRAMM ISE EDASI JA PUNKTE EI SAA
function saabpunkte() {
    punktid=punktid+1/vastatud;
    etapp++;
    if(etapp==1){
        jargmineEtapp();
    }if(etapp==4){
        jargmineEtapp();
    }if(etapp==7){

    }
}

function vastusteloendur() {

    vastatud++;
        if(vastatud==4){
            vastatud=1;
        }
}
var uusetapp=0;

function jargmineEtapp() {
    etapp++;
    uusetapp++;

    if(uusetapp==1){
        etapp0vastused();
        yl11();
    }else if(uusetapp==2){

        //etapp1vastused();
        yl12();
    }else if(uusetapp==3){

        //etapp2vastused();
        yl13()
    }else if(uusetapp==4){
        //etapp3vastused();
    }else if(uusetapp==5){

    }
}

//VASTUSTE KAUPA KAUPA KONTROLLFUNKTSIOONID
function kontroll01( R345, vastusR345) {

    if (R345==vastusR345 & vastatud<3) {

        document.getElementById("R345").style.borderColor = "green";
        document.getElementById('R345').readOnly = true;
        etapp0vastused();
        saabpunkte();
    } else if(vastatud<3){

        document.getElementById("R345").style.borderColor="red";
        vastusteloendur();
    }
    else if(vastatud==3) {
        jargmineEtapp();
        vastusteloendur();

    }
    }

//II ETAPI KONTROLL
function kontroll11(I1,vastusI1) {

    if (I1==vastusI1 & vastatud<3) {
        document.getElementById("I1").style.borderColor = "green";
        document.getElementById('I1').readOnly = true;
        saabpunkte();
    }else if(vastatud<3){

        vastusteloendur();
            document.getElementById("I1").style.borderColor="red";
        }else if(vastatud==3){
        jargmineEtapp();
    }
    }

function kontroll12(I2, vastusI2) {
    if (I2 == vastusI2 & (vastatud/3)<3) {
        document.getElementById("I2").style.borderColor = "green";
        document.getElementById('I2').readOnly = true;
        saabpunkte();
    } else if (vastatud<3){
        vastusteloendur();
        document.getElementById("I2").style.borderColor = "red";
    }else if(vastatud==3){
        jargmineEtapp();
    }
}

function kontroll13(I34,vastusI34) {
    if (I34==vastusI34 & (vastatud/3)<3){
        document.getElementById("34").style.borderColor="green";
        document.getElementById('34').readOnly = true;
        saabpunkte();
    }else if(vastatud<3){
        vastusteloendur();
        document.getElementById("34").style.borderColor="red";
    }else if(vastatud==3){
        jargmineEtapp();
    }
}

// III ETAPI KONTROLLIMINE
function kontroll20(U10,vastusU10) {
    if (U10==vastusU10 & vastatud<3){
        saabpunkte();
        document.getElementById("U10").style.borderColor="green";
        document.getElementById('U10').readOnly = true;

    }else if(vastatud<3){
        vastusteloendur();
        document.getElementById("U10").style.borderColor="red";
    }else if(vastatud==3){
        jargmineEtapp();
    }
}
function kontroll21(U20, vastusU20) {
    if (U20==vastusU20 & vastatud<3){
        saabpunkte();
        document.getElementById("U10").style.borderColor="green";
        document.getElementById('U10').readOnly = true;
    }else if(vastatud<3){
        vastusteloendur();
        document.getElementById("U20").style.borderColor="red";
    }else if (vastatud==3){
        jargmineEtapp();
    }
}

function kontroll22(U30,vastusU30) {
    if (U30==vastusU30 & vastatud<3){
        saabpunkte();
        document.getElementById("U30").style.borderColor="green";
        document.getElementById('U30').readOnly = true;
    }else if(vastatud<3){

        vastusteloendur();
        document.getElementById("U30").style.borderColor="red";
    }else if(vastatud==3){
        jargmineEtapp();
    }
}

//IV ETAPI KONTROLL
function kontroll30(I3,vastusI3) {
    if (I3==vastusI3 & vastatud<3){
        document.getElementById("I3").style.borderColor="green";
        document.getElementById('I3').readOnly = true;
        saabpunkte();
    }else if(vastatud<3){
        vastusteloendur();
        document.getElementById("I3").style.borderColor="red";
    }else if(vastatud==3){
        jargmineEtapp();
    }
}

function kontroll31(I4,vastus4) {

    if (I4==vastus4 & vastatud<3){
        saabpunkte();
        document.getElementById("I4").style.borderColor="green";
        document.getElementById('I4').readOnly = true;
        }else if(vastatud<3){
            document.getElementById("I4").style.borderColor="red";
            vastusteloendur();
        }else if(vastatud==3){
            jargmineEtapp();
    }
}
window.onload = function autom() {
    genereeri();
};