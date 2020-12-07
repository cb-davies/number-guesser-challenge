let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/* 3. generateTarget() function created -called at the start of each round to generate a new secret target number -returns a random integer between 0 and 9 */
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
   }
   
/* 7a. getAbsoluteDistance() function created 
    -takes two numbers and returns the distance from both the computerGuess() and humanGuess() to the secretTarget()
    -used inside the compareGuesses() function */
const getAbsoluteDistance = (a, b) => Math.abs(a-b);

/* 4. compareGuesses function created
    -has 3 parameters -> human guess, computer guess and secret target number (to be guessed)
    -returns true if human wins of there is a draw
    -returns false if computer wins */
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {

/* 7b. alert created to check if humanGuess() is between 0 and 9.  If not, user is prompted by a pop up to enter a number between 0 and 9.  Computer wins the round by default  */  
  if (humanGuess < 0 || humanGuess > 9) {
    return alert('Your chosen number is out of range. Please choose a number between 0 and 9');
  } else if ((getAbsoluteDistance(humanGuess, secretTarget)) <= (getAbsoluteDistance(computerGuess, secretTarget))) {
    return true;
  } else {
    return false;
  };
};

/* 5. updatScore() function created -to increase winners score by 1 after each round
      -has a single string parameter passed in -> either 'human' or 'computer'
      -does not need to return a value */
  const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  };
};

/* 6. advanceRound() function created to update the round number after each round
      -increases currentRoundNumber by 1 */
  let advanceRound = () => currentRoundNumber++;
   
     