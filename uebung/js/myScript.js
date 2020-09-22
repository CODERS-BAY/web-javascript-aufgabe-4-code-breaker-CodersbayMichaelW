var guess = document.getElementById("guess");
var reset = document.getElementById("reset");
var numberToGuess = "";
var numbersOverall = 3;
var trysTotal = 12;
var attempt = 1;
var counterArray = [numbersOverall];
var elements;
var confirmentationIsOnScreen = false;
var won = false;

// ---------------------------------------------------
// Setup up game
function setupGame() {
    // visual of numbers to choice from
    for (i = 0; i < numbersOverall; i++) {
        counterArray[i] = new Count(i);
        numberToGuess += Math.floor(Math.random() * 10);
    }
    $("input").prop("disabled", true);
}

// ---------------------------------------------------
// Increase
function increaseByOne(index) {
    let text = "findObject" + index;
    let number = Number(document.getElementById(text).value);

    if (number < 9) { document.getElementById(text).value = number + 1; }
    else { document.getElementById(text).value = 0; }   
}
// Decrease
function decreaseByOne(index) {
    let text = "findObject" + index;
    let number = Number(document.getElementById(text).value);

    if (number > 0) { document.getElementById(text).value = number - 1; }
    else { document.getElementById(text).value = 9 }
}

// ---------------------------------------------------
// Check Guess
// To-Do
function checkGuess() {
    if (attempt <= trysTotal && !won) {
        let numbersAreInCode = 0;
        let numbersAreInRightSpot = 0;
        let alreadyguesses = [];

        for (let i = 0; i < counterArray.length; i++) {
            let text = "findObject" + i;
            let number = document.getElementById(text).value;

            for (let j = 0; j < numberToGuess.length; j++) {
                // number is on the right spot
                if (number === numberToGuess.charAt(j) && i === j) {
                    numbersAreInRightSpot++;
                }
                // number is in Code somewhere
                if (number === numberToGuess.charAt(j) && !alreadyguesses.includes(number)) {
                    numbersAreInCode++;
                    alreadyguesses.push(number);
                }
            }
        }

        won = (numbersAreInRightSpot === numbersOverall) ? true : false;

        // output Format under Result
        let text = "Attempt " + attempt + ": " + "In right spot: " + numbersAreInRightSpot + ", Number in Code: " + numbersAreInCode;
        let pTag = document.createElement("p");
        pTag.innerHTML = text;
        result.appendChild(pTag);

        // Game is won
        if (won) {
            let text = "Congratulation you guessed the right number combination!";
            let pTag = document.createElement("p");
            pTag.innerHTML = text;
            result.appendChild(pTag);
        }

        // debug
        console.log("number to guess: " + numberToGuess);
        // console.log("Round: " + attempt);
        // console.log("numbersAreInRightSpot: " + numbersAreInRightSpot);
        // console.log("numbersAreInCode: " + numbersAreInCode);
        // console.log("won: " + won);
        // console.log("-------------------");

        attempt++;
    }
    else if (won) {
        let text = "You already won the game. Try to reset game.";
        let pTag = document.createElement("p");
        pTag.innerHTML = text;
        result.appendChild(pTag);

        // debug
        // console.log("You already won the game. Try to reset game.");
    }
    else {
        let text = "You don't have a try left.";
        let pTag = document.createElement("p");
        pTag.innerHTML = text;
        result.appendChild(pTag);

        // debug
        // console.log("You don't have a try left.");
    }
}
// Reset Game
function confirmentationOfReset() {
    if (!confirmentationIsOnScreen) {
        confirmentationIsOnScreen = true;

        let confirmentationText= document.createElement("p");
        let divOfButtons = document.createElement("div");
        let resetButtonYes = document.createElement("button");
        let resetButtonNo = document.createElement("button"); 

        divOfButtons.appendChild(resetButtonYes);
        divOfButtons.appendChild(resetButtonNo);

        resetSection.appendChild(confirmentationText);
        resetSection.appendChild(divOfButtons);

        confirmentationText.innerHTML = "Are you sure?";
        resetButtonYes.outerHTML = '<button type="button" onclick="resetGame()">Yes</button>';
        resetButtonNo.outerHTML = '<button type="button" onclick="closeConfirmentationOfReset()">No</button>';
        resetSection.style.height = "3rem";
    }
}

// generate random number + set display to null
function resetGame() {
    numberToGuess = "";
    attempt = 1;
    won = false;
    for (i = 0; i < numbersOverall; i++) {
        numberToGuess += Math.floor(Math.random() * 10);

        let text = "findObject" + i;
        document.getElementById(text).value = 0;
    }
    closeConfirmentationOfReset();
}

// deletes display
function closeConfirmentationOfReset() {
    confirmentationIsOnScreen = false;
    // delete the section of confirmentationOfReset
    let section = document.getElementById("resetSection");
    section.style.height = "0";
    while (section.firstChild) {
        section.removeChild(section.lastChild);
    }
    // delete the section of Result
    section = document.getElementById("result");
    while (section.firstChild) {
        section.removeChild(section.lastChild);
    }
}


// ---------------------------------------------------
// Events
guess.addEventListener("click", checkGuess);
reset.addEventListener("click", confirmentationOfReset);
window.onload = setupGame;

// test-area ----------------------------------------------