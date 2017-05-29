/**
 * Created by The Dog on 28.05.2017.
 */
//skeemiosade värvimine alalisvoolu ülesande puhul
function alalisvool() {

$(document).ready(function(){
    //Skeemi elementidest(takistid, elektromotoorjõud ja vooluallikad) üle liikudes muutuvad need punaseks
    $(".skeemielement").hover(function(){
            $(this).css("background-color", "#FF0000");
        },
        //Skeemielementide värvi tagastumine
        function(){
            $(this).css("background-color", "#09f");
        });

    //Skeemiosast (ahelast) üle liikudes muutub vastav osa punaseks
    $(".line").hover(function(){
            $(this).css("background-color", "#FF0000");
                var gets=($(this).attr('name').toString());
                console.log(($(this).attr('id').toString()));
            $(document.getElementsByName(gets)).css("background-color", "#FF0000");


        //Ahelate värvide tagastus
        },
        function(){
           $(this).css("background-color", "#000000");
           var reset=($(this).attr('name').toString());
           $(document.getElementsByName(reset)).css("background-color", "#000000");


        });

});
}