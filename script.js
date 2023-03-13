const rock = document.getElementById('rock'); // assinged to the rock button
const paper = document.getElementById('paper'); // assigned to the paper button
const scissors = document.getElementById('scissors'); // assinged to the scissors button

let playerInput; // Will be set to the button(rock, paper or scissors) that is clicked
let computerWins = 0; // Computer win counter
let playerWins = 0; // Player win counter

const playerChoice = document.getElementById('playerChoice'); // for displaying players choice
const computerChoice = document.getElementById('computerChoice'); // displaying computers choice

const playerScore = document.querySelector('#playerScore'); // for displaying player score
const computerScore = document.querySelector('#computerScore'); // for displaying computer score

const yesButton = document.getElementById('yesButton'); // yes button to start a new game
const noButton = document.getElementById('noButton'); // no button

const results = document.getElementById('results');
// const newGame= document.querySelector("");

function roundWinner(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock': return ['Draw', null];
      case 'paper': return ['Round Lost', false];
      case 'scissors': return ['Round Won', true];
      default:// do nothing
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock': return ['Round Won', true];
      case 'paper': return ['Draw', null];
      case 'scissors': return ['Round Lost', false];
      default: // do nothing
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock': return ['Round Lost', false];
      case 'paper': return ['Round Won', true];
      case 'scissors': return ['Draw', null];
      default: // do nothing
    }
  }
}

function scoreUpdate(playerWins, computerWins, roundResult) {
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
  results.textContent = roundResult;
}

function selectionUpdate(playerSelection, computerSelection) {
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
}
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'scissors';
}

function isGameOver() {
  if ((playerWins === 5) || (computerWins === 5)) return true;
  return false;
}

function gameOver() {
  if (playerWins === 5) scoreUpdate(playerWins, computerWins, 'You Win!');
  else if (computerWins === 5) scoreUpdate(playerWins, computerWins, 'Computer Wins');
}
function resetGame() {
  playerWins = 0;
  computerWins = 0;
  scoreUpdate(playerWins, computerWins, 'choose a button below to start, first to 5 wins');
}

function game(playerInput) {
  const playerSelection = playerInput;
  const computerSelection = computerPlay();
  selectionUpdate(playerSelection, computerSelection);

  const scoreKeeper = roundWinner(playerSelection, computerSelection);

  if (scoreKeeper[1] === true) playerWins += 1;
  else if (scoreKeeper[1] === false) computerWins += 1;

  scoreUpdate(playerWins, computerWins, scoreKeeper[0]);
  if (isGameOver() === true) gameOver();
}

rock.addEventListener('click', () => {
  if (isGameOver() === true) return;
  playerInput = 'rock';
  game(playerInput);
});

paper.addEventListener('click', () => {
  if (isGameOver() === true) return;
  playerInput = 'paper';
  game(playerInput);
});

scissors.addEventListener('click', () => {
  if (isGameOver() === true) return;
  playerInput = 'scissors';
  game(playerInput);
});

yesButton.addEventListener('click', () => {
  if (isGameOver() === false) return;
  resetGame();
});

noButton.addEventListener('click', () => {
  if (isGameOver() === false) return;
  scoreUpdate(playerWins, computerWins, 'Have a good one then!');
});
