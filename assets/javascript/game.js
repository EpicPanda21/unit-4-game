$(document).ready(function () {

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var youwon = "";
    var youlost = "";

    $(".pokeballs").each(function () {
        var random = Math.floor(Math.random() * 11 + 1);
        $(this).attr("data-value", random);
    });


    var max = 120;
    var min = 19;
    var compTotal = Math.floor(Math.random() * (max - min + 1)) + min;

    $("#computer").append(compTotal);


    $(".pokeballs").click(function () {

        var value = $(this).attr("data-value");
        userTotal += parseInt(value);

        $("#user").text(userTotal)

        if (userTotal === compTotal) {
            $("#youwon").text("You Won");
            wins++;
            $("#wins").text("wins" + " " + wins);
            reset()



        }

        if (userTotal > compTotal) {
            $("#lost").text("You Lost!");
            losses++;
            $("#losses").text("losses" + " " + losses);
            reset()
        }

    });

    function reset() {
        userTotal = 0;
        $("#user").text(userTotal);
        compTotal = Math.floor(Math.random() * (max - min + 1)) + min;
        $("#computer").text(compTotal);

        $(".pokeballs").each(function () {
            var random = Math.floor(Math.random() * 11 + 1);
            $(this).attr("data-value", random);
        });

        setTimeout(function () {
            $("#youwon").text("")
            $("#lost").text("")
        }, 1000);

    };


});