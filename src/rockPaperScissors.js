/* exported rockPaperScissors */

/*
 * Write a function that generates every sequence of throws a single
 * player could play over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change your function so that it return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */

// Forced solution
const rockPaperScissors = (rounds = 3) => {
  const options = ["rock", "paper", "scissors"];

  const recurse = (rounds, inputArray) => {
    const outputArray = [];
    if (rounds > 0) {
        inputArray.forEach((inputArrayItem) => {
          options.forEach((option) => {
            Array.isArray(inputArrayItem) ? outputArray.push([...inputArrayItem, option]) : outputArray.push([inputArrayItem, option])
          })
        })
        return recurse(rounds - 1, outputArray);
    } else {
      return inputArray;
    }
  }

  return recurse(rounds - 1, options);
};
