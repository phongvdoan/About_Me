'use strict';

var correct = 0;
var firstName;

while (firstName === undefined || firstName === null || firstName.length <= 0) {
  firstName = prompt('What is your name?');
}
// console.log('Welcome ' + firstName + '! Have a great day!');
alert('Welcome ' + firstName + '! Let\'s see if you can guess things about me');

///
/// FUNCTION SECTION
///

// Function accepts a string and evaluates if it is equal to a 'YES' answer
function yesAnswerPersonalQues(guess) {
  if (guess === 'YES' || guess === 'yes') {
    alert('You are correct!');
    correct++;
  } else {
    alert('Your input was incorrect!');
  }
}

// Function accepts a string and evaluates if it is equal to a 'NO' answer
function noAnswerPersonalQues(guess) {
  if (guess === 'NO' || guess === 'no') {
    alert('You are correct!');
    correct++;
  } else {
    alert('Your input was incorrect!');
  }
}

// function plays guessing game with user
function gameGuess() {
  var favNum = 2;
  var guess;
  var counter = 1;

  while (counter < 5) {
    guess = parseInt(prompt('What is Phong\'s favorite Number?'));

    if (guess > favNum) {
      alert('The number you have guessed is TOO HIGH. You have ' + (4 - counter) + ' tries left.');
      counter++;
    } else if (guess < favNum) {
      alert('The number you have guessed is TOO LOW. You have ' + (4 - counter) + ' tries left.');
      counter++;
    } else if (isNaN(guess)) {
      alert('That is not a number. Input a number. You have ' + (4 - counter) + ' tries left.');
      counter++;
    } else if (guess === 2) {
      alert('CONGRATS! You have guess Phong\'s favorite number with in ' + counter + ' tries!');
      correct++;
      break;
    }
  }

  alert('The correct answer was ' + favNum);
}

// function plays guessing game with fav food
function foodGame() {
  var food = ['salad', 'porkchops', 'chocolate', 'buffalo wings', 'tacos', 'sushi'];
  var foodGuess;
  var count = 0;
  var flag = false;

  while (count < 6 && !flag) {
    foodGuess = prompt('What is Phong\'s favorite food? You have ' + (6 - count) + ' tries left.').toLowerCase();
    count++;
    for (var i = 0; i < food.length; i++) {
      if (foodGuess === food[i]) {
        alert('Great job! Sushi is Phong\'s favorite food!');
        correct++;
        flag = true;
      }
    }
    if (count !== 6 && !flag) {
      alert('No, ' + foodGuess + ' is not Phong\'s favorite food.');
    }
  }
  if (count === 6 && !flag) {
    alert('You did not guess correctly within 6 tries!');
  }
  alert('My favorite foods include: ' + food);
}


var kids = prompt('Do you have kids?').toLowerCase();
// console.log('Have kids: ', kids);
yesAnswerPersonalQues(kids);

var instrument = prompt('Do you play a musical instrument?').toUpperCase();
// console.log('Plays an instrument: ', instrument);
yesAnswerPersonalQues(instrument);

var maritalStatus = prompt('Are you married?').toLowerCase();
// console.log('Is married: ', maritalStatus);
yesAnswerPersonalQues(maritalStatus);

var drinkBeer = prompt('Do you like beer?').toUpperCase();
// console.log('Likes beer: ', drinkBeer);
noAnswerPersonalQues(drinkBeer);

// start number guessing game
gameGuess();

// start food guessing game
foodGame();

// Users score out of 7
alert('You scored ' + correct + 'out of 7!');
