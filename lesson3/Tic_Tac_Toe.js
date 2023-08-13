// 1. Display the initial empty 3x3 board.
// 2. Ask the user to mark a square.
// 3. Computer marks a square.
// 4. Display the updated board state.
// 5. If it's a winning board, display the winner.
// 6. If the board is full, display tie.
// 7. If neither player won and the board is not full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. Goodbye! d

const RL_SYNC = require("readline-sync");

const HUMAN_MARKER = '❌';
const COMPUTER_MARKER = '⚪️';
const WINNING_SCORE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function display(message, message2 = "") {
  console.log(`${message} ${message2}`);
}

function playAgain() {
  let viableAnswers = ['yes', 'y', 'no', 'n'];
  
  prompt('Play again? (y or n)');
  let answerYesOrNo = RL_SYNC.question().toLowerCase();

  while (!viableAnswers.includes(answerYesOrNo)) {
    prompt("Sorry, I didn't catch that. Play again, yes or no?");
    answerYesOrNo = RL_SYNC.question().toLowerCase();
  }

  return answerYesOrNo;
}

function joinOr(availableSquares, delimiter = ", ", seperatorWord = "or") {
  let lastElement;

  if (availableSquares.length === 0) return "";
  
  if (availableSquares.length === 1) return String(availableSquares[0]);

  if (availableSquares.length === 2) return availableSquares.join(` ${seperatorWord} `);

  lastElement = seperatorWord + " " + availableSquares.pop();
  availableSquares.push(lastElement);

  return availableSquares.join(delimiter);
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log(`     |     |`);
  console.log(` ${board['1']}  | ${board['2']}  | ${board['3']}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(` ${board['4']}  | ${board['5']}  | ${board['6']}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(` ${board['7']}  | ${board['8']}  | ${board['9']}`);
  console.log(`     |     |`);
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = " " + square;
  }
  
  return board;
}

function emptySquares(board) {
  return Object.keys(board)
               .filter(key => (board[key] !== HUMAN_MARKER) && 
                              (board[key] !== COMPUTER_MARKER));
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square by selecting one of these positions
    ${joinOr(emptySquares(board), ', ')}`);
    square = RL_SYNC.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that's not a valid choice. Try again!`);
  }

  board[square] = HUMAN_MARKER;
}

function computerRequiresDefence(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if ((HUMAN_MARKER === board[sq1]) && 
        (HUMAN_MARKER === board[sq2]) && 
        (COMPUTER_MARKER !== board[sq3])) return sq3;

    if ((HUMAN_MARKER === board[sq2]) && 
        (HUMAN_MARKER === board[sq3]) && 
        (COMPUTER_MARKER !== board[sq1])) return sq1;

    if ((HUMAN_MARKER === board[sq3]) && 
        (HUMAN_MARKER === board[sq1]) && 
        (COMPUTER_MARKER !== board[sq2])) return sq2;

  }
  return null;
}

function computerChoosesSquare(board) {
  let square;

  if (!!computerRequiresDefence(board)) {
    square = computerRequiresDefence(board);
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER && // could be done with .every ?
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function matchIsWon(scoreBoard) {
  return Object.values(scoreBoard).some(score => score === WINNING_SCORE);
}

function getMatchWinner(scoreBoard) {
  return scoreBoard.Player === WINNING_SCORE ? "You are" : "Computer is";
}

function getScore(playerScore, computerScore) {
  return `[Player: ${playerScore} | Computer: ${computerScore}]`;
}

function playRound(board, score) {
  while (true) {
    console.clear();

    display(score);

    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);
}

function startMatch() {
  let scoreBoard = {
    Player: 0,
    Computer: 0,
  };

  while (true) {
    let board = initializeBoard();

    playRound(board, getScore(scoreBoard.Player, scoreBoard.Computer));

    if (detectWinner(board)) scoreBoard[detectWinner(board)] += 1;

    if (matchIsWon(scoreBoard)) {
      console.clear();
      prompt(`${getMatchWinner(scoreBoard)} the winner of the match!`);
      break;
    }
  }
}

// Program start
while (true) {
  console.clear();
  startMatch();
  if (playAgain()[0] !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');