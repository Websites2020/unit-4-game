var spade = Math.floor(Math.random() * (12-1) + 1);
var diamond = Math.floor(Math.random() * (12-1) + 1);
var clover = Math.floor(Math.random() * (12-1) + 1);
var heart = Math.floor(Math.random() * (12-1) + 1);
var computer = Math.floor(Math.random() * (120-19) + 19);
var player = 0;
var z = 1;
var y = 1;

console.log (spade, diamond, clover, heart, computer);

$(document).ready(function() {

    $('#compNo').text(computer);

$("#button1").on("click", function() {

    player += spade;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;

        alert("You Win!");
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;

            alert("You Lose!");
    }

});//ends button1.on function

$("#button2").on("click", function() {

    player += diamond;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;

        alert("You Win!");
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;

            alert("You Lose!");
    }

});//ends button2.on function

$("#button3").on("click", function() {

    player += clover;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;

        alert("You Win!");
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;

            alert("You Lose!");
    }

});//ends button3.on function

$("#button4").on("click", function() {

    player += heart;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;

        alert("You Win!");
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * (12-1) + 1);
        diamond = Math.floor(Math.random() * (12-1) + 1);
        clover = Math.floor(Math.random() * (12-1) + 1);
        heart = Math.floor(Math.random() * (12-1) + 1);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;

        alert("You Lose!");
    }

});//ends button4.on function    

});//ends document.ready function