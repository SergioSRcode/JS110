/*
DATA STRUCTURE:
Arrays -> more suitable for manipulation


ALGORITHM:

1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.


3. Player turn:
- Ask player to hit or stay.
- If stay, stop asking.
- if hit && sum > 21 => bust
- Otherwise, go to 1.
*/
const RL_SYNC = require("readline-sync");
const DECK_OF_CARDS = initializeDeck();
const ACE = "A";
const FACE_10 = ["J", "Q", "K"];
const HIT_OR_STAY = [["hit", "h"], ["stay", "s"]];

function repeatUserInput(msg) {
  console.log(msg);

  return RL_SYNC.question();
}

function initializeDeck() {
  let deck = [];

  for (let cards = 1; cards <= 52; cards++) {
    if (cards <= 13) deck.push(["H", String(cards + 1)]);
    if (cards > 13 && cards <= 26) deck.push(["D", String(cards + 1 - 13)]);
    if (cards > 26 && cards <= 39) deck.push(["C", String(cards + 1 - 26)]);
    if (cards > 39 && cards <= 52) deck.push(["S", String(cards + 1 - 39)]);
  }
  deck.forEach(card => {
    if (card[1] === "11") card[1] = "J";
    if (card[1] === "12") card[1] = "Q";
    if (card[1] === "13") card[1] = "K";
    if (card[1] === "14") card[1] = "A";
  });

  return deck;
}

function answerIsHitOrStay(answer) {
  return HIT_OR_STAY[0].includes(answer) || HIT_OR_STAY[1].includes(answer)
}

function shuffleDeck(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));  // num between 0 and index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];  //swap cards
  }
}

function total(cards) {
  let values = cards.map(card => card[1]);
  let sum = 0;

  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (FACE_10.includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === ACE).forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function playerTurn() {
  do {
    console.log(("hit or stay? (h/s)"));
    let answer = RL_SYNC.question();

    while (!answerIsHitOrStay(answer)) {
      answer = repeatUserInput("no...hit or stay? Those are the only options");
    }

  } while (answer !== "stay" || busted());

  if (busted()) {
    // end game. Play again?
  } else {
    console.log("You chose to stay!");
  }
}
// work in process
function dealerTurn(cardsValue) {
  do {
    console.log(("hit or stay? (h/s)"));
    let answer = RL_SYNC.question();
  } while (answer !== "stay" || busted());

  if (busted()) {
    // end game. Play again?
  } else {
    console.log("You chose to stay!");
  }
}

