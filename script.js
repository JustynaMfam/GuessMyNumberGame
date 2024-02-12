'use strict';
// console.log(document.querySelector('#guessing-message').textContent);
// document.querySelector('#guessing-message').textContent = 'Correct Number!';
// document.querySelector('#the-correct-number').textContent = 13;
// document.querySelector('#score').textContent = 10;

// document.querySelector('#input').value = 23;
// console.log(document.querySelector('#input').value);

//get input from input filed after clicking a button Check!

//selecting element.add event listerner(type of event, what to do (function) - event handler )

//define a secret numeber outside of function  so there is 1 secret numer

let number = Math.trunc(Math.random() * 20) + 1;
//define score
let score = 20;
//define highscore
let highscore = 0;

// adding functionality to check! btn after clicking it

document.querySelector('.check-btn').addEventListener('click', function (e) {
  // Prevent the default form submission behavior(there was noting in the console when this was not set - it flashed for a sec and then disapeared)
  e.preventDefault();

  // store input value in the variable and change it to a number and log to the console together with type of the varaible

  const input = Number(document.querySelector('.input').value);
  console.log(input, typeof input);

  // check if there is no guess in the input and display message No Number if there is no input

  if (!input) {
    document.querySelector('.guessing-message').textContent = 'No Number!';
    // if user privides number greater that 20 or less than 1, display message worng number
  } else if (input > 20 || input < 1) {
    document.querySelector('.guessing-message').textContent = 'Wrong number🚩';
    // if the provided numer is equal secret number display correct number message
  } else if (input === number) {
    document.querySelector('.guessing-message').textContent =
      'Correct Number!🏆';
    //display secret number
    document.querySelector('.the-correct-number').textContent = number;
    //changing page color to green when player wins.
    //selecing the body element.style.what we want to change = "new value" ( a string)
    document.querySelector('body').style.backgroundColor = '#bdccb4';
    //changing size of the secret number when player wins
    document.querySelector('.the-correct-number').style.fontSize = '150px';

    //highscore --> checing if the  score is greater than highscore and if it is it should be the new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when the provided number is different from secret number
  } else if (input !== number) {
    // when score is >1 the below logic applies: if the provided number is greated than secret number, the displayed message should be " too high" and if it is not, the message should be "too low"
    if (score > 1) {
      document.querySelector('.guessing-message').textContent =
        input > number ? 'Too high 📈' : 'Too low 📉';
      // the score should  descrese by 1
      score--;
      //the score should be assigned to score value
      document.querySelector('.score').textContent = score;
    } else {
      // if the score is not greater than 1 the message should be "you lost the game"
      document.querySelector('.guessing-message').textContent =
        'You lost the game 🙈';
      // and the score should be changed to 0
      document.querySelector('.score').textContent = 0;
    }
  }

  // if provided number is higher than secret nuber and if score is >1 dispaly "too high" and when score is 0 and less display " you loast the game" and change score to 0
  //   else if (input > number) {
  //     if (score > 1) {
  //       document.querySelector('.guessing-message').textContent = 'Too high';
  //       //descrease score number and display it
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guessing-message').textContent =
  //         'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // if provided number is lower than secret nuber and if score is >1 dispaly "too low" and when score is 0 and less display " you lost the game" and change score to 0
  //   } else if (input < number) {
  //     if (score > 1) {
  //       document.querySelector('.guessing-message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guessing-message').textContent =
  //         'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Again button functionality
document.querySelector('.again-btn').addEventListener('click', function () {
  //restoring score
  score = 20;
  // restoring secrect number
  number = Math.trunc(Math.random() * 20) + 1;
  //chaning background color back to pink after clicking again button
  document.querySelector('body').style.backgroundColor = '#ffe2f3';
  //resetting secret number back to "?" afetr clicing again button
  document.querySelector('.the-correct-number').textContent = '?';
  //chaning font size of secret numer back to 100px after clicking again button
  document.querySelector('.the-correct-number').style.fontSize = '100px';
  // resseting message back to "start guessing" after clicking again button
  document.querySelector('.guessing-message').textContent = 'Start guessing...';
  // resetting score to 20
  document.querySelector('.score').textContent = score;
  // resetting input field
  document.querySelector('.input').value = '';
});
