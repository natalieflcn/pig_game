'use strict';

//Selecting elements
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

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num);

  dice.classList.remove('hidden');
  dice.src = `dice-${num}.png`;

  if (num !== 1) {
    currentScore += num;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
