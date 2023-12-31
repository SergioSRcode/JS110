// Meta data
const RL_SYNC = require("readline-sync");

// Helper constants
const HUMAN_MARKER = '❌';
const COMPUTER_MARKER = '⚪️';
const WINNING_SCORE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
  [1, 5, 9], [3, 5, 7]              // diagonals
];
const WHO_GOES_FIRST = [["player", "p"], ["computer", "c"]];
const PLAYER = "Player";
const COMPUTER = "Computer";

// Helper functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function display(message, message2 = "") {
  console.log(`${message} ${message2}`);
}

function welcomeToTTT() {
  console.log("Welcome to Tic Tac Toe!");
  console.log(`-----------------------`);
  console.log("");
  console.log("* The game is played in a match format.");
  console.log("* When either player or computer wins 5 rounds, the match is concluded!");
  console.log("");
  console.log("-- Don't forget to have fun while losing to the 🤖! --");
  console.log("");
  console.log("");
  prompt("Press Enter to start the game!");
  RL_SYNC.question();
}

// eslint-disable-next-line consistent-return
function getStarterOfRound() {
  let playerIsStarter = PLAYER;
  let computerIsStarter = COMPUTER;

  prompt('Who gets the fist turn?');
  prompt(`${WHO_GOES_FIRST[0][0]} (${WHO_GOES_FIRST[0][1]}) or ` +
  `${WHO_GOES_FIRST[1][0]} (${WHO_GOES_FIRST[1][1]})`);

  let initialPlayer = RL_SYNC.question().toLowerCase();

  while (!WHO_GOES_FIRST[0].includes(initialPlayer) &&
         !WHO_GOES_FIRST[1].includes(initialPlayer)) {
    prompt('Wait, who is that?... Try again!');
    initialPlayer = RL_SYNC.question().toLowerCase();
  }

  if (WHO_GOES_FIRST[0].includes(initialPlayer)) return playerIsStarter;

  if (WHO_GOES_FIRST[1].includes(initialPlayer)) return computerIsStarter;
}

// Displays before new round begins
function congratulateRoundWinner(board) {
  if (!detectWinner(board)) {
    prompt("It's a tie!");
  } else {
    prompt(`${detectWinner(board)} won this round!`);
    if (detectWinner(board) === PLAYER) prompt('Congrats!');
  }
  console.log("");
}

function playAgain() {
  let viableAnswers = ['yes', 'y', 'no', 'n'];

  prompt('Play again? (y or n)');
  let answerYesOrNo = RL_SYNC.question().toLowerCase();

  while (!viableAnswers.includes(answerYesOrNo)) {
    prompt("Sorry, I didn't catch that. Play again, yes or no?");
    answerYesOrNo = RL_SYNC.question().toLowerCase();
  }

  return answerYesOrNo[0] === 'y';
}

// appends the last two number with "or" or a word of choice
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
  console.log(`You are ${HUMAN_MARKER}. ${COMPUTER} is ${COMPUTER_MARKER}`);

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

function computerRequiresOffence(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if ((COMPUTER_MARKER === board[sq1]) &&
        (COMPUTER_MARKER === board[sq2]) &&
        (HUMAN_MARKER !== board[sq3])) return sq3;

    if ((COMPUTER_MARKER === board[sq2]) &&
        (COMPUTER_MARKER === board[sq3]) &&
        (HUMAN_MARKER !== board[sq1])) return sq1;

    if ((COMPUTER_MARKER === board[sq3]) &&
        (COMPUTER_MARKER === board[sq1]) &&
        (HUMAN_MARKER !== board[sq2])) return sq2;

  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  if (computerRequiresOffence(board)) {
    square = computerRequiresOffence(board);
  } else if (computerRequiresDefence(board)) {
    square = computerRequiresDefence(board);
  } else if (board['5'] !== HUMAN_MARKER && board['5'] !== COMPUTER_MARKER) {
    square = '5';
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
      return PLAYER;
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return COMPUTER;
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
  return scoreBoard.Player === WINNING_SCORE ? "You are" : `${COMPUTER} is`;
}

function getPrintibleScore(playerScore, computerScore) {
  return `+${"-".repeat(25)}+
| ${PLAYER}: ${playerScore} | ${COMPUTER}: ${computerScore} |
+${"-".repeat(25)}+`;
}

// eslint-disable-next-line max-lines-per-function
function playRound(board, score, initialPlayer) {
  while (true) {
    if (initialPlayer === COMPUTER) {
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    console.clear();
    display(score);
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    if (initialPlayer === PLAYER) {
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }
  }

  console.clear();
  displayBoard(board);
  congratulateRoundWinner(board);
}

function startMatch() {
  let scoreBoard = {
    Player: 0,
    Computer: 0,
  };

  let initialPlayer = getStarterOfRound();

  while (true) {
    let board = initializeBoard();

    // eslint-disable-next-line max-len
    playRound(board, getPrintibleScore(scoreBoard.Player, scoreBoard.Computer), initialPlayer);

    if (detectWinner(board)) scoreBoard[detectWinner(board)] += 1;

    if (matchIsWon(scoreBoard)) {
      prompt(`${getMatchWinner(scoreBoard)} the winner of the match!`);
      break;
    } else {
      initialPlayer = getStarterOfRound();
    }
  }
}

// Program start

console.clear();
welcomeToTTT();

while (true) {
  console.clear();
  startMatch();
  if (!playAgain()) break;
}
console.clear();
prompt('Thanks for playing Tic Tac Toe!');