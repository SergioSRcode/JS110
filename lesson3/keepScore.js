const WINNING_SCORE = 5;

function matchIsWon(scoreBoard) {
  return Object.values(scoreBoard).some(score => score === WINNING_SCORE);
}

function getplayMatchWinner(scoreBoard) {
  return scoreBoard.Player === WINNING_SCORE ? "You are" : "Computer is";
}

function startMatch() {
  let scoreBoard = {
    Player: 0,
    Computer: 0,
  }

  while (true) {
    
    if (detectWinner(board)) scoreBoard[detectWinner(board)] += 1;

    displayScore(scoreBoard.Player, scoreBoard.Computer);

    if (matchIsWon(scoreBoard)) {
      prompt(`${getMatchWinner(scoreBoard)} the winner of the match!`);
      break;
    }
  }
}

// Best of 5 match

// RULES
/*
- each time any player wins, report scores
  - when it's a tie too
- count rounds after every round (display current round)
- when a new match starts, reset rounds and scores
- don't use global variables
- use a global constant to represent the number of games needed to win a match.

DATA STRUCTURE:
Object

ALGORITHM:


1. create a loop to keep track of rounds (max 5)
2. check if current round has a winner
  -> if yes, record winner
  -> if no, continue
3. check if match has a winner (3 wins)
  3.1. if yes, break out of loop + announce winner
      - else continue

*/
