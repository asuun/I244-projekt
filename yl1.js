/**
 * Created by The Dog on 21.03.2017.
 */
var E1;
var E2;
var R1;
var R2;
var R3;
var R4;
var R5;
var I1;
var I2;
var I3;
var I4;
var I5;

var vastusI1;
var vastusI2;
var vastusI34
var vastusI3;
var vastusI4;
var vastusU10;
var vastusU20;
var vastusU30;
var vastusR345

function genereeri() {

    E1 = document.getElementById("E1").innerHTML = +Math.round(Math.random() * 100);
    E2 = document.getElementById("E2").innerHTML = Math.round(Math.random() * 100);
    R1 = document.getElementById("R1").innerHTML = Math.round(Math.random() * 10);
    R2 = document.getElementById("R2").innerHTML = Math.round(Math.random() * 10);
    R3 = document.getElementById("R3").innerHTML = Math.round(Math.random() * 10);
    R4 = document.getElementById("R4").innerHTML = Math.round(Math.random() * 10);
    R5 = document.getElementById("R5").innerHTML = Math.round(Math.random() * 10);

    // I osa, leida R45 ekvivalent takistus
    vastusR345 = 1 / (1 / R3 + 1 / (R4 + R5));

    // III osa, leida I1, I2 ja I34
    vastusI1 = (E1 * R2 + E1 * vastusR345 - E2 * vastusR345) / (R1 * R2 + R2 * R2 + vastusR345 * R1);
    vastusI2 = (E2 * R1 + E2 * vastusR345 - E1 * vastusR345) / (R1 * R2 + R1 * vastusR345 + vastusR345 * R2);
    vastusI34 = vastusI1 + vastusI2;

    // IV osa, leida I3 ja I4 ja I5
    vastusI3 = vastusR345 * vastusI34 / (R3);
    vastusI4 = vastusR345 * vastusI34 / (R4 + R5);

    // II osa, Leida kontuurvoolu meetodil U10, U20 U30
    vastusU10 = (R1 * vastusI1 + vastusR345 * vastusI34);
    vastusU20 = R2 * vastusI2 + vastusR345 * vastusI34;
    vastusU30 = vastusU10 - vastusU20;

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

function proov() {
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

function kontroll() {
    I1=document.getElementById("I1").valueOf().value;
    I2=document.getElementById("I2").valueOf().value;
    I3=document.getElementById("I3").valueOf().value;
    I4=document.getElementById("I4").valueOf().value;
    I5=document.getElementById("I5").valueOf().value;


    if (I1==vastusI1){
        window.alert('õige vastus nohik')
        punktid++;
        console.log(punktid);
    }else{
        document.getElementById("I1").style.borderColor="red";
    }

    if (I2==vastusI2){
        window.alert('õige vastus nohik')
        punktid++;
        console.log(punktid);
    }else{
        document.getElementById("I2").style.borderColor="red";
    }

    if (I3==vastusI3){
        window.alert('õige vastus nohik')
        punktid++;
        console.log(punktid);
    }else{
        document.getElementById("I3").style.borderColor="red";
    }
    if (I4==vastusI4){
        window.alert('õige vastus nohik')
        punktid++;
        console.log(punktid);
    }else{
        document.getElementById("I4").style.borderColor="red";
    }
    if (I5==vastusI5){
        window.alert('õige vastus nohik')
        punktid++;
        console.log(punktid);
    }else{
        document.getElementById("I5").style.borderColor="red";
    }

    console.log('õige vastus',vastusI1);
    console.log('sa vastasid',I1);
}