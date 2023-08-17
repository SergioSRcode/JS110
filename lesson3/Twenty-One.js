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

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function answerIsHitOrStay(answer) {
  return HIT_OR_STAY[0].includes(answer) || HIT_OR_STAY[1].includes(answer)
}

function repeatUserInput(msg) {
  prompt(msg);

  return RL_SYNC.question();
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));  // num between 0 and index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];  //swap cards
  }
  return deck;
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

  return shuffle(deck);
}

function totalCardsValue(cards) {
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

function busted(cards) {
  return totalCardsValue(cards) > 21;
}

function playerTurn(playerTurn) {
  do {
    prompt(("hit or stay? (h/s)"));
    playerTurn = RL_SYNC.question().toLowerCase();

    while (!answerIsHitOrStay(playerTurn)) {
      playerTurn = repeatUserInput("no...hit or stay? Those are the only options");
    }

    if (HIT_OR_STAY[0].includes(playerTurn)) {
      // insert action of drawing a card
    }

  } while (!HIT_OR_STAY[1].includes(playerTurn) || !busted());

  if (busted()) {
    // end game. Play again?
  } else {
    prompt("You chose to stay!");
  }
}
// work in process
function dealerTurn(cardsValue) {
  let answer;
  do {
    if (cardsValue >= 17) {
      prompt("hit or stay? (h/s)");
      answer = RL_SYNC.question();
    } else {
      answer = "hit";
      prompt(`Dealer Value is too low to stay`);
    }
  } while (answer !== "stay" || busted());

  if (busted()) {
    // end game. Play again?
  } else {
    prompt("Dealer chose to stay!");
  }
}

function getResult(playerCards, dealerCards) {
  let playerTotal = totalCardsValue(playerCards);
  let dealerTotal = totalCardsValue(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResult(playerCards, dealerCards) {
  let result = getResult(playerCards, dealerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playRound() {
  while (true) {
    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];

    getInitialHands(playerCards, dealerCards, deck);
    displayInitialHands(playerCards, dealerCards);

    playerTurn(playerCards, deck);
    dealerTurn(dealerCards, deck);

    getResult(playerCards, dealerCards);
    displayResult(playerCards, dealerCards);

    if (!playAgain()) break;
  }
}