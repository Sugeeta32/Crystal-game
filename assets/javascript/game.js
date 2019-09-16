var randomNum =0,loss = 0, win = 0;
var ruby, topaz,diamond, sapphaire ;
var total = 0;

resetAndStart();

function getRandomNumberForCrystal() {
    var random = Math.floor(Math.random() * 12 + 1);
    console.log(random);
    return random;
}

function getRandomNumberToPlay() {
  return Math.floor(Math.random() * ((120 - 19) + 1) + 19);
}

function setRandomNumberOnCrystal() {
  ruby = getRandomNumberForCrystal();
  topaz = getRandomNumberForCrystal();
  diamond = getRandomNumberForCrystal();
  sapphaire = getRandomNumberForCrystal();
}
// randomly generate number of four crystals

function checkWin() {
    //  alert(total);
    if (total === randomNum) {
        win++;
        $("#wins").text("Wins : " + win);
        resetAndStart();
        alert("You won, WOHOO!");
    }
}

function checkLost() {
    if (total > randomNum) {
        loss++;
        $("#losses").text("Losses : " + loss);
        resetAndStart();
        alert("You lost, try again!");
    }

}
function resetAndStart() {
    $("#random-number").empty();
    total = 0;
    $("#display").text("Total points : " + " " + total);
    randomNum = getRandomNumberToPlay();
     $("#random-number").text('Random number : ' +"  "+ randomNum);
     setRandomNumberOnCrystal() ;
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



