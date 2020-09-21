var guess = document.getElementById("guess");
var reset = document.getElementById("reset");
var numberToGuess = "";
var numbersOverall = 3;
var counterArray = [numbersOverall];
var elements;

// Setup up game
function setupGame() {
    // visual of numbers to choice from
    for (i = 0; i < numbersOverall; i++) {
        counterArray[i] = new Count();
        numberToGuess += Math.floor(Math.random() * 10);
    }
    $("input").prop("disabled", true);


    // test
    elements = document.getElementsByClassName("increase");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
}

// ---------------------------------------------------
// game mechanics
function checkGuess() {
    alert("number to guess: " + numberToGuess);
}
function resetGame() {
    alert("Game Reset");
}

guess.addEventListener("click", checkGuess);
reset.addEventListener("click", resetGame);
window.onload = setupGame;













// test-area ----------------------------------------------
function myFunction() {
    for (var i = 0; i < elements.length; i++) {
        e = counterArray[i];
        e.increaseNumber();
    }
}

// $(".increase").on("click", function() {
//     let count = counterArray[$(this).data('index')];
//     alert(count);
//     $("increase").html(count.countNumber);
// });