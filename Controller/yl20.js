/**
 * Created by The Dog on 29.05.2017.
 */
var vastatud;
function vastatudKüsimused() {
    $(".kysimustik").hover(function(){
            $(this).css("background-color", "#FF0000");
        },
        //Skeemielementide värvi tagastumine
        function(){
            $(this).css("background-color", "#09f");
        });
}
