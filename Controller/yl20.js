/**
 * Created by The Dog on 29.05.2017.
 */
var vastus1;
var vastus2;
var vastus3;
var vastus4;
var vastus5;
var vastus6;
var punkte=0;

function kontroll(){
        if(document.querySelector('input[name="1"]:checked')){
            document.getElementById("3").style.color="#FF00FF";
            varvi();
           punktid();
        }else{
            eisaapunkte()
        }
    if(document.querySelector('input[name="2"]:checked')){
        varvi();
        punktid();
    }else{}
    if(document.querySelector('input[name="3"]:checked')){
        varvi();
        punktid();
    }else{}
    if(document.querySelector('input[name="4"]:checked')){
        varvi();
        punktid();
    }else{}
    if(document.querySelector('input[name="5"]:checked')){
        varvi();
        punktid();
    }else{}
    if(document.querySelector('input[name="6"]:checked')){
        varvi();
        punktid();
    }else{}

    saada();
console.log(punkte);

}

function varvi() {
    document.getElementById("1").style.visibility="hidden";
    document.getElementById("2").style.visibility="hidden";
    document.getElementById("4").style.visibility="hidden";
}

function saada() {
    punkte=0;
    document.getElementById('punkte').value =punkte;
    document.getElementById("saatmine").style.visibility="visible";
    document.getElementById("kontrollimine").style.visibility="hidden";

}
window.onload = function autom() {
    document.getElementById("saatmine").style.visibility="hidden";
};

function punktid() {
    document.getElementById('punktid').innerHTML ="Punkti: "+punkte;
    document.getElementById('punkte').value =punkte;
    punkte++;
}
function eisaapunkte() {
    punkte=0;
    document.getElementById('punktid').innerHTML ="Punkti: "+punkte;
    document.getElementById('punkte').value =punkte;

}