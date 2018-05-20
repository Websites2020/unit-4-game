var spade = Math.floor(Math.random() * 10);
var diamond = Math.floor(Math.random() * 10);
var clover = Math.floor(Math.random() * 10);
var heart = Math.floor(Math.random() * 10);
var computer = Math.floor(Math.random() * (100-30) + 30);
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
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;
    }

});//ends button1.on function

$("#button2").on("click", function() {

    player += diamond;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;
    }

});//ends button2.on function

$("#button3").on("click", function() {

    player += clover;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;
    }

});//ends button3.on function

$("#button4").on("click", function() {

    player += heart;

    $('#playerNo').text(player);

    if (computer === player) {
        console.log(true);
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var winTally = document.getElementById("wins");
        wins = z++;
        winTally.innerHTML = "Wins: " + wins;
    
    } else {
        console.log(false);
    } if (computer < player + 1) {
        // document.getElementById("playerNo").innerHTML = 0;
        computer = Math.floor(Math.random() * (100-30) + 30);
        player = 0;
        spade = Math.floor(Math.random() * 10);
        diamond = Math.floor(Math.random() * 10);
        clover = Math.floor(Math.random() * 10);
        heart = Math.floor(Math.random() * 10);
        $('#compNo').text(computer);
        $('#playerNo').text(player);

        var lossTally = document.getElementById("losses");
            losses = y++;
            lossTally.innerHTML = "Losses: " + losses;
    }

});//ends button4.on function

});//ends document.ready function