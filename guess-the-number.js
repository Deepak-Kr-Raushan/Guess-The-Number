let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector("#sbmt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const playAgain = document.querySelector("#playAgain");

let previousGuess = [];
let numOfGuesses = 10;
const p = document.createElement("p");
let playGame = true;

if(playGame){
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid Number");
    } else if(guess > 100){
        alert("Please enter a number less than 100");
    } else if(guess < 1){
        alert("Please enter a number more than 1");
    } else {
        previousGuess.push(guess);
        if(numOfGuesses === 1){
            displayGuess(guess);
            displayMessage(`Game Over! Random number was: ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right!`);
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is TOO low!`);
    } else if(guess > randomNumber){
        displayMessage(`Number is TOO high!`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numOfGuesses--;
    remaining.innerHTML = numOfGuesses;
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
    lowOrHi.style.display = 'block'; 
}

function endGame(){
    userInput.value = '';
    submit.disabled = true;
    userInput.disabled = true;
    newGame();
}

function newGame(){
    playAgain.style.display = 'block';
    playAgain.addEventListener("click", () => {
        randomNumber = parseInt((Math.random() * 3) + 1);
        previousGuess = [];
        numOfGuesses = 10;
        guessSlot.innerHTML = '';
        userInput.value = '';
        submit.disabled = false;
        userInput.disabled = false;
        remaining.innerHTML = 10;
        playAgain.style.display = 'none';
        lowOrHi.style.display = 'none';
    })
}