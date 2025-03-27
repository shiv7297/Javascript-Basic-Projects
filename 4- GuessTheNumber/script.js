let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame = true;
let numGuess = 1;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    userInput.value = '';
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    userInput.value = '';
    alert('please enter a number lesser than 100');
  } else {
    if (numGuess === 11) {
      userInput.value = '';
      cleanUp(guess);
      displayMessage(`Game Over. The Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUp(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The Number is too low`);
  } else {
    displayMessage(`The Number is too high`);
  }
}

function cleanUp(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newButton = document.querySelector('#newGame');
  newButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
