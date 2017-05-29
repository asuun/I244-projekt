var moodul;
var kraad;
var reaktiiv;
var aktiiv;
var reaktkomp;
var xkontroll;
var xkomp;

//väärtuse genereerimine
function näivtakistus() {
    //karakteristiku joonistamine
    var näivKomponent=document.createElement("div");
    näivKomponent.className='joonestamine';
    näivKomponent.id='takistus';
    //suvalise pikkuse saamine
    moodul=Math.round((Math.random())*200);

    näivKomponent.style.width=moodul;
    näivKomponent.style.background="blue";

    //olemasoleva joone pööramine, kuna canvas ei ole väga usaldusväärne sellejaoks
    kraad=Math.round((Math.random()*360)/Math.PI);
    console.log("z="+moodul)
    console.log("kraadi"+kraad);
    näivKomponent.style.transform = "rotate("+kraad+"deg)";

    document.getElementById('takistus').appendChild(näivKomponent);
    // reaktiivtakistuse tüübi kindlaks tegemine, kui kraad>90= induktiivne, kui kraad<90=mahtuvuslik
    if(kraad>90){
        reaktkomp=2;
    }else if(kraad<90){
        reaktkomp=1;
    }
}
//skaala loomine

function teljestik() {
    //aktiivtelje skaala loomine
        var xtelg=moodul*Math.cos(kraad);
        var deg=kraad*Math.PI/180;
        if (kraad<90){
            xx= 550+Math.abs((Math.cos(deg)*200));
        } else if (kraad>90){
            xx= 550+Math.abs((Math.cos(deg)*200));
        }
    // y pos on pool trapsu pikkusest 4/2
        var xy=400-2;

    //reaktiivtelje skaala loomine
        var ytelg=moodul*Math.sin(kraad);
        if (kraad>90){
            yy=Math.abs(400-(Math.abs((Math.sin(deg)*200))));
            xkomp=moodul*Math.cos(deg);
            rkomp=moodul*Math.sin(deg);
        } else if(kraad<90){
            yy=Math.abs(400+(Math.abs((Math.sin(deg)*200))));
            xkomp=moodul*Math.sin(deg);
            rkomp=moodul*Math.cos(deg);
        }
        var yx=550-2;

    reaktiiv = document.createElement("div");
    reaktiiv.id='yt';
    var styleReaktiiv = 'border: 1px solid black; '
        + 'width: ' + 4 + 'px; '
        + 'height: '+2+'px; '
        + 'position: fixed; '
        + 'top: ' + yy + 'px; '
        + 'left: ' + yx + 'px; ';
    reaktiiv.setAttribute('style', styleReaktiiv);
    reaktiiv.innerHTML=xkomp;
    console.log(yy+"     "+yx);

    aktiiv = document.createElement("div");
    aktiiv.id='xt';
    var styleAktiiv = 'border: 1px solid black; '
        + 'width: ' + 2 + 'px; '
        + 'height: 4px; '
        + 'position: fixed; '
        + 'top: ' + xy + 'px; '
        + 'left: ' + xx + 'px; ';
    aktiiv.setAttribute('style', styleAktiiv);
    aktiiv.innerHTML=rkomp;
    document.getElementById('xt').appendChild(aktiiv);
    document.getElementById('yt').appendChild(reaktiiv);
}
//kontroll kas näivtakistus jõudis õigesse veerandisse

function kontroll() {
    xkontroll = document.querySelector('input[name="reaktiivKomponent"]:checked').value;
  if(reaktkomp==xkontroll){
        teljestik();
  }else{
      document.getElementById("reaktiivKomponent").style.borderColor = "red";
  }
    console.log(reaktkomp);
    console.log(xkontroll);

    }





