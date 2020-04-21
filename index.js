// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Count is in the function in counter1 and outside in counter2
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The second one, because the variable is declared outside of the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * If you don't want to use the count variable outside of the function counter 1 would be preferrable, otherwise counter two should be used.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let random = Math.round(Math.random() * 2);
  return random;

}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function getInningScore(inning, numInnings){
  let homeTeam = 0;
  let awayTeam = 0;
  for (let i = 0; i < numInnings; i++){
    homeTeam = homeTeam + inning();
    awayTeam = homeTeam + inning();
  }
  return { 'Home': homeTeam, 'Away': awayTeam};

};

console.log(getInningScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(numInnings, getInningScore, inning) {
  let scores = [];
  for (let i = 0; i < numInnings; i++){
    scores.push(getInningScore(inning, 1));
  };

  let finalHome = scores.reduce(function(accumulator, item){
    return accumulator + item.Home;
  },0);

  let finalAway = scores.reduce(function(accumulator, item){
    return accumulator + item.Away;
  },0);

  let inningNums = [];
  function getInnings(numInnings) {
  for(let i = 0; i < numInnings; i++){
    if (i === 0){
      inningNums.push(`1st inning: ${scores[i].Home} - ${scores[i].Away}`);
    } else if (i === 1){
      inningNums.push(`2nd inning: ${scores[i].Home} - ${scores[i].Away}`);
    } else if (i === 2){
      inningNums.push(`3rd inning: ${scores[i].Home} - ${scores[i].Away}`);
    } else {
      inningNums.push(`${i + 1}th inning: ${scores[i].Home} - ${scores[i].Away}`);
    }
  }
  inningNums.push(`Final Score: ${finalHome} - ${finalAway}`)
}
getInnings(numInnings);
  return inningNums;
}

console.log(scoreboard(9, getInningScore, inning));


