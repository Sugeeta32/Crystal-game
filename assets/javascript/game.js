var randomNum;
var loss;
var win;




// randomly generated number

randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

$("#random-number").text('Random number: ' + randomNum);
//console.log(randomNum);

var ruby = getRandomNumber();
var topaz = getRandomNumber();
var diamond = getRandomNumber();
var sapphaire = getRandomNumber();
var total=0;
function getRandomNumber() {
    var random= Math.floor(Math.random() * 12 + 1);
    console.log(random);
    return random;
}

function win() {
    // alert(total);
    if (total === randomNum) {
        // win++;
        alert("you won");
    }
}

function lost() {
    if (total > randomNum) {
        // loss++;
        alert("lost");
    }

}


//  $(".btn-info").text(getRandomNumber());
/* $(".btn-light").text(getRandomNumber());
 $(".btn-dark").text(getRandomNumber());
 $(".btn-purple").text(getRandomNumber());*/

$(".btn-info").on('click', function () {
    total += ruby;
$("#display").text("Total points : "+ " "+total);
    win();
    lost();

});

$(".btn-light").on('click', function () {
    total += topaz;
    $("#display").text("Total points : "+ " "+total);
    win();
    lost();

});

$(".btn-dark").on('click', function () {
    total += diamond;
    $("#display").text("Total points : "+ " "+total);
    win();
    lost();

});

$(".btn-purple").on('click', function () {
    total += sapphaire;
    $("#display").text("Total points : "+ " "+total);
    win();
    lost();

});

//  4 crystal need to have different random number between 1 to 12
// a new random number need to be assigned every time  to the crystals we start new game
// when clicking any crystal , it should add with the previous number/ result/total until its eqaul to the randomNum
// if it is greater than the randomNum , increment the lost counter
//  if it is equal to randomNum, then increment the win counter
// 



