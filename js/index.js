$(document).ready(function () {
    //This code will run after your page loads
    var score = 0;
    var highScore = 0;
    $("#yeti,#yeti1,#yeti2,#yeti3,#yeti4,#yeti5,#yeti6").mousedown(function () {
        new Audio("sounds/yetisound.mp3").play();
        $(this).addClass("active");
        alert("Devil is here!");
        score = 0;
        $("#scoreLabel").html("Score!");
        $("#currentScore").html(score);
        $("#gamePanel div").removeClass("active");
        $("#gamePanel").append(shuffle($("#gamePanel div")));
        $("#gamePanel2 div").removeClass("active");
        $("#gamePanel2").append(shuffle($("#gamePanel2 div")));
    });

    $("#penguin1,#penguin2,#penguin3,#penguin4,#penguin5,#penguin6,#penguin7,#penguin8,#penguin9,#penguin10,#penguin11,#penguin12,#penguin13,#penguin14,#penguin15,#penguin16,#penguin17,#penguin18,#penguin19,#penguin20,#penguin21,#penguin22,#penguin23").mousedown(function () {
        var baseUrl = "sounds/";
        var audio = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3", "sound6.mp3", "sound7.mp3", "sound8.mp3"];
        new Audio(baseUrl + audio[Math.floor(Math.random() * 7)]).play();

        if ($(this).hasClass("active") == false) {
            $("#currentScore").html(++score);
            if (score >= highScore) {
                highScore = score;
                $("#scoreLabel").html("High Score!");
            }
            $(this).addClass("active");
        }
    });

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    $("#level1").click(function () {
        $("#gamePanel2").hide();
        $("#gamePanel").show();
        score = 0;
        $("#scoreLabel").html("Score!");
        $("#currentScore").html(score);
        $("#gamePanel div").removeClass("active");
        $("#gamePanel").append(shuffle($("#gamePanel div")));
        $(this).attr("disabled", "disabled");
        $("#level2").removeAttr("disabled");
        alert("LEVEL-I Activate!");
    });
    $("#level2").click(function () {
        $("#gamePanel").hide();
        $("#gamePanel2").show();
        score = 0;
        $("#scoreLabel").html("Score!");
        $("#currentScore").html(score);
        $("#gamePanel2 div").removeClass("active");
        $("#gamePanel2").append(shuffle($("#gamePanel2 div")));
        $(this).attr("disabled", "disabled");
        $("#level1").removeAttr("disabled");
        alert("LEVEL-II Activate!");
    });
    $("#level1").click();
});