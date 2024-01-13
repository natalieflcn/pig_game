'use strict';

//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore0 = document.getElementById('current--0');
const currScore1 = document.getElementById('current--1');

//Event Handlers

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const num = Math.floor(Math.random() * 6) + 1;
    console.log(num);

    dice.classList.remove('hidden');
    dice.src = `dice-${num}.png`;

    if (num !== 1) {
      currentScore += num;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Hold Functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

//Restarting the Game
btnNew.addEventListener('click', function () {
  if (!playing) {
    //If the game was won
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    dice.classList.remove('hidden');
    playing = true;
  }

  //resetting current scores
  currentScore = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;

  //resetting cumulative scores
  scores[0] = 0;
  scores[1] = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  activePlayer = 0;
});
