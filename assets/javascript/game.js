// Grab counters from HTML
var winDisplay = document.getElementById("win-counter");
var lossDisplay = document.getElementById("loss-counter");
var guessesLeftDisplay = document.getElementById("guesses-left-counter");
var lettersGuessedDisplay = document.getElementById("letters-guessed");

// Create counter variables
var winCount = 0;
var lossCount = 0;
var guessesLeftCount = 9;

// Initialize counters in HTML
winDisplay.textContent = winCount;
lossDisplay.textContent = lossCount;
guessesLeftDisplay.textContent = guessesLeftCount;

// Create random letter variable
var randomLetter = "";

// Create variable to hold user's last guess
var userGuess = "";

// Create variable to hold all user's guesses for current game
// var lettersGuessedDisplay = "";

// Create array of all letters in alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                "j", "k", "l", "m", "n", "o", "p", "q", "r",
                "s", "t", "u", "v", "w", "x", "y", "z"];

// Perform function whenever user presses key
document.onkeyup = function(event) {
    // Store user's keystroke
    userGuess = event.key;

    // Check if guesses left = 9 indicating a new game
    if (guessesLeftCount === 9) {
        // Generate a random letter
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(randomLetter);
    }

    // Check if user's guess is equal to random letter generated
    if (userGuess === randomLetter) {
        winCount++;
        resetGame();
    }
    else {
        // Check if guesses left = 1 indicating user just lost
        if (guessesLeftCount === 1) {
            lossCount++;
            resetGame();
        }
        // Update game to reflect incorrect guess
        guessesLeftCount--;
        guessesLeftDisplay.textContent = guessesLeftCount;
        lettersGuessedDisplay.textContent += userGuess + ",";
    }

    // Reset game if user won or lost
    function resetGame() {
        guessesLeftCount = 9;
        winDisplay.textContent = winCount;
        lossDisplay.textContent = lossCount;
        guessesLeftDisplay.textContent = guessesLeftCount;
        lettersGuessedDisplay.textContent = "";
    }
}