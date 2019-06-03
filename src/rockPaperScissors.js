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

const rockPaperScissors = (n) => {
  const weapons = ['rock', 'paper', 'scissors'];
  const hands = [];
  const rounds = n || 3;
  function recurse(roundsLeft, played) {
    if(roundsLeft === 0) {
      hands.push(played);
      return;
    }
    for(let i = 0; i < weapons.length; i++) {
      const current = weapons[i];
      recurse(roundsLeft - 1, played.concat(current));
    }
  };
  recurse(rounds, []);
  return hands;

};
