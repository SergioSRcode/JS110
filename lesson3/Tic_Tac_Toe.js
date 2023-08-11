// 1. Display the initial empty 3x3 board.
// 2. Ask the user to mark a square.
// 3. Computer marks a square.
// 4. Display the updated board state.
// 5. If it's a winning board, display the winner.
// 6. If the board is full, display tie.
// 7. If neither player won and the board is not full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. Goodbye!

const RL_SYNC = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log('');
  console.log(`     |     |`);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log(`     |     |`);
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square by selecting one of these positions
    ${emptySquares(board).join(', ')}`);
    square = RL_SYNC.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that's not a valid choice. Try again!`);
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  prompt('Computer chooses:');  // displays on full board as well

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  // assuming value = 6 

  let square = emptySquares(board)[randomIndex];
  // [1, 2, 4, 5, 8, 9][6] => 9
  board[square] = COMPUTER_MARKER; // computer choice = position 9
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

// Program start

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  displayBoard(board);
  
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}



