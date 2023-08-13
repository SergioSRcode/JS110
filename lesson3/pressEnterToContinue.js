// INPUT: ""
// OUTPUT: -> none => further execution of program

// ALGORITHM:
/*
1. Congrats to who won
2. if input is ""
  => continue
*/

function continueToNextRound() {
  prompt(`${detectWinner(board)} won this round!`)
  if (detectWinner(board) === "Player") prompt('Congrats!');

  prompt('Press Enter to continue to the next round!');
  RL_SYNC.question();
}