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
var e1lipp=false;
var e2lipp=false;
var e3lipp=false;
var e4lipp=false;
// mänguloogikaga seotud muutujad- punktide arv, korduste arv,
var punkte=0;
var kordused=1;
var etapp;
function genereeri() {
    etapp=1;
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
};

function vaartused() {
    document.getElementById("E1").innerHTML = "E1 "+ E1 + "V";
        document.getElementById("E2").innerHTML ="E2= "+ E2 + " V";
        document.getElementById("R1").innerHTML ="R1= "+ R1 + " ohm";
        document.getElementById("R2").innerHTML = "R2= "+ R2 + " ohm";
        document.getElementById("R3").innerHTML = "R3= "+ R3 + " ohm";
        document.getElementById("R4").innerHTML ="R4= "+ R4 + " ohm";
        document.getElementById("R5").innerHTML = "R5= "+ R5 + " ohm";
}



function kordusedNulli() {
    e1lipp=false;
    e2lipp=false;
    e3lipp=false;
    e4lipp=false;
    kordused=1;
}


function punktid() {
    document.getElementById('punktid').innerHTML ="Punkti: "+punkte;
    punkte++;
    document.getElementById('punkte').value =punkte;
    console.log("punkte on"+punkte);

}


// ühe etapi vältel sooritatud kordused, kui neid on 4 siis viiakse vägisi järgmisse etappi
function kordus() {
    kordused++;
    if(kordused==4){
        etapp++;
        kordused=0;
        kordusedNulli();
        console.log("järgmine ül");
        edasiVedamine();
    }
}

// järgmisesse etappi vägisi viimine, kui oled valesti vastanud
function edasiVedamine() {
    if(etapp==2){
        document.getElementById('R345').readOnly = true;
        yl11();
    }else if(etapp==3){
        document.getElementById('I1').readOnly = true;
        document.getElementById('I2').readOnly = true;
        document.getElementById('I34').readOnly = true;
        yl12();
    }else if(etapp==4){
        document.getElementById('U10').readOnly = true;
        document.getElementById('U20').readOnly = true;
        document.getElementById('U30').readOnly = true;
        yl13();
    }else if(etapp==5){
        yl14();
        punkte=0;
        document.getElementById('punkte').value =punkte;
        console.log("mäng läbi");
        document.getElementById('I3').readOnly = true;
        document.getElementById('I4').readOnly = true;

    }
}

//positiivse soorituse korral edasi liikumine
function liiguedasi() {
    if(etapp==1){
        if(e1lipp==true){
            $.getScript('VisualControl/yl1-schema.js',function () {
                 });
        }
        yl11();
        kordusedNulli();
        etapp++;
        punktid();
    }else if(etapp==2){
        console.log("asun lippe kontrollima");
        if(e1lipp==true && e2lipp==true && e3lipp==true){
            console.log("lipud kontrollitud");
            $.getScript('VisualControl/yl1-schema.js',function () {
            });
            yl12();
            kordusedNulli();
            etapp++;
        }
    }else if(etapp==3){
        if(e1lipp==true & e2lipp==true & e3lipp==true){
            $.getScript('VisualControl/yl1-schema.js',function () {
            });
            kordusedNulli();
            yl13();
            etapp++;
        }
    }else if(etapp==4){
        if(e1lipp==true && e2lipp==true && e3lipp==true){
                $.getScript('VisualControl/yl1-schema.js',function () {
                });
            yl14();
            kordusedNulli();
            etapp++;
        }
    }else if(etapp==5){
        yl14();
    }

    document.getElementById('kontroll').innerHTML ="Etapp: "+etapp;
}


//Vastuste kontrollimine kontrollitakse etapi kaupa
function vajutaKontroll() {

        if(etapp==1){
                if(e1lipp==false){
                    kontrollr();
                }else{}

        }else   if(etapp==2){

                if(e1lipp==false){
                console.log("kontroll");
                    kontrollI1();

                }
                if(e2lipp==false){
                    console.log("kontroll");
                    kontrollI2();
                }
                if(e3lipp==false){
                    console.log("kontroll");
                    kontrollI34();
                }
        }else if(etapp==3){
                if(e1lipp==false){
                    kontrollU1();
                }
                if(e2lipp==false){
                    kontrollU2();
                }
                if(e3lipp==false){
                    kontrollU3();
                }
        }else if(etapp==4){
                if(e1lipp==false){
                    kontrollI3();
                }
                if(e2lipp==false){
                    kontrollI4();
                }
                if(e1lipp==true && e2lipp==true){
                    liiguedasi();
                }
    }
    console.log("etapp on "+etapp);
    console.log("kordusi on"+kordused);
    console.log("punkte on "+punkte);
    console.log(e1lipp + "   "+ e2lipp + "    "+ e3lipp);
}



// SIIT EDASI ON VAID LAHTRITE VÕRDLEMINE PROGRAMMI POOLT ARVUTATUGA
function kontrollr() {
    R345=document.getElementById("R345").valueOf().value;
    if(vastusR345==R345){
        document.getElementById("R345").style.borderColor = "green";
        document.getElementById('R345').readOnly = true;
        punktid();
        liiguedasi();
        kordusedNulli();
        console.log("õige");
    }else{
        document.getElementById("R345").style.borderColor="red";
        kordus();
    }
}
function kontrollI1() {
    I1=document.getElementById("I1").valueOf().value;
    if (I1 == vastusI1) {
        document.getElementById("I1").style.borderColor = "green";
        document.getElementById('I1').readOnly = true;
        e1lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("I1").style.borderColor="red";
        kordus();
    }

}
function kontrollI2() {
    I2=document.getElementById("I2").valueOf().value;
    console.log(document.getElementById("I2").valueOf().value + 'print' + I2);
    if (I2 ==vastusI2) {
        document.getElementById("I2").style.borderColor = "green";
        document.getElementById('I2').readOnly = true;
        e2lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("I2").style.borderColor="red";

        kordus();
    }

}
function kontrollI34() {
    I34=document.getElementById("I34").valueOf().value;
    if (I34 ==vastusI34) {
        document.getElementById("I34").style.borderColor = "green";
        document.getElementById('I34').readOnly = true;
        e3lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("I34").style.borderColor="red";

        kordus();
    }
}
function kontrollU1() {
    U10=document.getElementById("U10").valueOf().value;
    if (U10 ==vastusU10) {
        document.getElementById("U10").style.borderColor = "green";
        document.getElementById('U10').readOnly = true;
        e1lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("U10").style.borderColor="red";

        kordus();
    }
}
function kontrollU2() {
    U20=document.getElementById("U20").valueOf().value;
    if (U20 == vastusU20) {
        document.getElementById("U20").style.borderColor = "green";
        document.getElementById('U20').readOnly = true;
        e2lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("U20").style.borderColor="red";

        kordus();
    }
}
function kontrollU3() {
    U30=document.getElementById("U30").valueOf().value;
    if (U30 == vastusU30) {
        document.getElementById("U30").style.borderColor = "green";
        document.getElementById('U30').readOnly = true;
        e3lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("U30").style.borderColor="red";

        kordus();
    }
}
function kontrollI3() {
    I3=document.getElementById("I3").valueOf().value;
    if (I3 ==vastusI3) {
        document.getElementById("I3").style.borderColor = "green";
        document.getElementById('I3').readOnly = true;
        e1lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("I3").style.borderColor="red";

        kordus();
    }
}

function kontrollI4() {
    I4=document.getElementById("I4").valueOf().value;
    if (I4 == vastusI4) {
        document.getElementById("I4").style.borderColor = "green";
        document.getElementById('I4').readOnly = true;
        e2lipp=true;
        punktid();
        console.log("õige");
    } else {
        document.getElementById("I4").style.borderColor="red";

        kordus();
    }
}


