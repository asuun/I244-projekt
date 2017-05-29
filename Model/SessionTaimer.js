function sessionTimer() {
    var today=new Date().getTime();
    // poolteist tundi on 5 400 000ms
    //prooviks 2s,
    var countDownDate = today+5400000;

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="sessioon"
        document.getElementById("sessioon").innerHTML =  hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            window.location.href = '../Model/send.php';
            document.getElementById("sessioon").innerHTML = "EXPIRED";
        }
    }, 1000);
}
window.onload = function alusta() {
    sessionTimer();
};