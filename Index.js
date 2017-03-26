var truevastus;
var vale;
var õige;
var nimi1;
var nimi2;
var tase;

function logimine() {
    console.log(nimi1);
    console.log(nimi2);
    console.log(tase);
    if(tase!==null && nimi1 !==null && nimi2!==null ){
        window.location.href='http://enos.itcollege.ee/~asuun/Praktikum2/Praktikum2vorm'+tase+'.html'
    }else{

        console.log("tase võrdum null")
    }

    if (nimi1 ==null || nimi2==null){
        window.alert("Palun sisesta nimi")
    }else{
        return
    }

    if(tase==1){
        window.location.href='https://www.w3schools.com/jsref/event_onselect.asp'
    }
    else if(tase==2){
        window.location.href='https://www.w3schools.com/jsref/event_onselect.asp'
    }
    else if(tase==3){

    }
    else if(tase==4){
        window.location.href='https://www.w3schools.com/jsref/event_onselect.asp'
    }
    else if(tase==5){
        window.location.href='https://mail.google.com/mail/u/0/?shva=1#inbox'
    }
    else {
        window.alert("palun vali raskusaste")
    }
}
function kasutaja() {
        nimi1=document.getElementById("eesnimi").valueOf().value;
        nimi2=document.getElementById("perekonnanimi").valueOf().value;
}
function raskus() {
        tase = document.querySelector('input[name="tase"]:checked').value;
        console.log(tase);
}

function check() {
    if(document.getElementById("tase").checked==false)
        planhide();
}


function genereeri(){
    var x=document.getElementById("x").innerHTML = Math.round(Math.random()*100);
    var y=document.getElementById("y").innerHTML = Math.round(Math.random()*100);
    //document.getElementById("vastus").innerHTML = x+y;
    truevastus=x+y;
}



function kontroll() {

    var vastus=document.getElementById("vastus").value

    console.log(truevastus);
    console.log(vastus);
    console.log(vale);
    if (truevastus==vastus) {
        document.getElementById("tulemus").innerHTML ="õige";
        õige++
    }
    else if (truevastus!=vastus){
        document.getElementById("tulemus").innerHTML ="vale";
        vale++}
}

function tulemuseks() {
    document.getElementById("wrong").value=vale;
    document.getElementById("right").value=õige;
    console.log(vale);

}