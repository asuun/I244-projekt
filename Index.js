var truevastus;
var vale;
var toene;
var nimi1;
var nimi2;
var tase;


function kasutaja() {
    nimi1=document.getElementById("eesnimi").valueOf().value;
    nimi2=document.getElementById("perenimi").valueOf().value;
}

function raskus() {
    tase = document.querySelector('input[name="tase"]:checked').value;
    console.log(tase);
}

function logimine() {
    console.log(nimi1);
    console.log(nimi2);
    console.log(tase);
    if(tase!==null && nimi1 !==null && nimi2!==null ){
            }else{
                console.log("tase võrdum null")
            }

    if (nimi1 ==null || nimi2==null){
        window.alert("Palun sisesta nimi")
            }else{
                return
            }

    if(tase==1){
        console.log(tase);
        window.location.href='\ylesanne1.html';

            }
            else if(tase==2){
                console.log(tase);
            }
            else if(tase==3){
                console.log(tase);
            }
            else if(tase==4){
                console.log(tase);
            }
            else if(tase==5){
                console.log(tase);
            }
            else {


                window.alert("palun vali raskusaste")
            }
}

function check() {
    if(document.getElementById("tase").checked==false)
        planhide();
}

function kontroll() {

    var vastus=document.getElementById("vastus").value

    console.log(truevastus);
    console.log(vastus);
    console.log(vale);
    if (truevastus==vastus) {
        document.getElementById("tulemus").innerHTML ="õige";
        toene++
    }
    else if (truevastus!=vastus){
        document.getElementById("tulemus").innerHTML ="vale";
        vale++}
}

function tulemuseks() {
    document.getElementById("wrong").value=vale;
    document.getElementById("right").value=toene;
    console.log(vale);
}
