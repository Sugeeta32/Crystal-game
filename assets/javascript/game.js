var randomNumToStartGame = 0, loss = 0, win = 0;
var ruby, topaz, diamond, sapphaire;
var total = 0;

startGame();


// function to reset and restart the game
function startGame() {
    // Using .empty method to reset the random number on id "random-number"
    $("#random-number").empty();
    // set total to 0 and display it on id "display"
    total = 0;
    $("#display").text("Total points : " + " " + total);
    // Reset the new random number to DOM id "random-number"
    randomNumToStartGame = getRandomNumberToPlay();
    $("#random-number").text('Random number : ' + "  " + randomNumToStartGame);
    setRandomNumberOnCrystal();
}

// Function to create one number between 19  to 120 
function getRandomNumberToPlay() {
    return Math.floor(Math.random() * ((120 - 19) + 1) + 19);
}

// function to set randomly generated number in function "getRandomNumberForCrystal" to 4 crystals
function setRandomNumberOnCrystal() {
    ruby = getRandomNumberForCrystal();
    topaz = getRandomNumberForCrystal();
    diamond = getRandomNumberForCrystal();
    sapphaire = getRandomNumberForCrystal();
}
// Function to generate numbers between 1 to 12 for 4 crystals that are images

function getRandomNumberForCrystal() {
    var random = Math.floor(Math.random() * 12 + 1);
    return random;
}


// function to count the wins
function checkWin() {
    //  alert(total);
    if (total === randomNumToStartGame) {
        win++;
        $("#wins").text("Wins : " + win);
        // invoke the function "reset and restart" to begin a new game while holding the wins and losses
        startGame();
        alert("You won, WOHOO!");
    }
}
// function to count the losses
function checkLost() {
    if (total > randomNumToStartGame) {
        loss++;
        // place the loss count on "Losses " in HTMl
        $("#losses").text("Losses : " + loss);
        // // invoke the function "reset and restart" to begin a new game while holding the wins and losses
        startGame();
        alert("You lost, try again!");
    }

}

$(".ruby").on('click', function () {
    total += ruby;
    $("#display").text("Total points : " + " " + total);
    checkWin();
    checkLost();

});

$(".topaz").on('click', function () {
    total += topaz;
    $("#display").text("Total points : " + " " + total);
    checkWin();
    checkLost();


});

$(".diamond").on('click', function () {
    total += diamond;
    $("#display").text("Total points : " + " " + total);
    checkWin();
    checkLost();

});

$(".sapphire").on('click', function () {
    total += sapphaire;
    $("#display").text("Total points : " + " " + total);
    checkWin();
    checkLost();

});

//  4 crystal need to have different random number between 1 to 12
// a new random number need to be assigned every time  to the crystals we start new game
// when clicking any crystal , it should add with the previous number/ result/total until its eqaul to the randomNum
// if it is greater than the randomNum , increment the lost counter
//  if it is equal to randomNum, then increment the win counter
// 



