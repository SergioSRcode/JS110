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

// meta data
const rlSync = require("readline-sync");

const YES_OR_NO = ["yes", "y", "no", "n"];
const ACE = "A";
const FACE_10 = ["J", "Q", "K"];
const HIT_OR_STAY = [["hit", "h"], ["stay", "s"]];
const MINIMUM_TOTAL_VALUE = 17;
const TOTAL_VALUE_LIMIT = 21;

// helper functions
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayDealerStartsNow() {
  console.log("");
  console.log("!---------------------------!");
  prompt(`Dealer turn...`);
  console.log("!---------------------------!");
}

function displayDealerHits() {
  console.log("");
  prompt(`Dealer hits!`);
}

function playerChoosesHit(playerChoice) {
  return HIT_OR_STAY[0].includes(playerChoice);
}

function playerChoosesStay(playerChoice) {
  return HIT_OR_STAY[1].includes(playerChoice);
}

function getHitOrStay() {
  prompt(("hit or stay? (h/s)"));
  return rlSync.question().toLowerCase();
}

function displayHandOnHit(playerCards, playerTotal) {
  prompt("You chose to hit!");
  displayPlayerHand(playerCards, playerTotal);
}

function displayUpdatedDealerHand(dealerCards) {
  prompt(`Dealer's cards are now ${hand(dealerCards)}`);
  console.log("");
}

function displayPlayerStays(playerTotal) {
  console.clear();
  prompt(`You chose to stay at ${playerTotal}!`);
}

function welcome() {
  console.clear();
  prompt(`Welcome to "Twenty One"!`);
  console.log("=============================");
  console.log("");
  prompt(`The goal is to keep the value of your cards below 22 while having a higher score than the dealer!`);
  console.log("");
  prompt(`1. Both players have a starting hand of two cards.`);
  prompt(`2. The dealer always plays with one open card!`);
  prompt(`3. You start by comparing your cards' values to your oponents card`);
  prompt(`4. If you think, you can beat your oponents hand, you "stay" => end your turn`);
  prompt(`5. Otherwise you "hit" => draw a card`);
  prompt(`6. if your cards' values surpass 21, you "bust" and lose the game. Same goes for the dealer.
  
Note: An "Ace" has a value of 1 if total values surpass 21; A value of 11 otherwise.`);
  console.log("");
  prompt("Press Enter to start the game!");
  rlSync.question();
}

function answerIsHitOrStay(answer) {
  return HIT_OR_STAY[0].includes(answer) || HIT_OR_STAY[1].includes(answer);
}

function repeatPlayerChoice(msg) {
  prompt(msg);

  return rlSync.question().toLowerCase();
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
    if (value === ACE) {
      sum += 11;
    } else if (FACE_10.includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === ACE).forEach(_ => {
    if (sum > TOTAL_VALUE_LIMIT) sum -= 10;
  });

  return sum;
}

function busted(cardsValue) {
  return cardsValue > TOTAL_VALUE_LIMIT;
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(" ");
}

function openCard(cards) {
  let newArrangement = cards.map(card => `${card[1]}${card[0]}`);
  return newArrangement[0];
}

function addCardToHand(cards, deck) {
  cards.push(deck.pop());
}

function displayPlayerHand(cards, playerTotal) {
  console.log("");
  prompt(`Your cards are now: ${hand(cards)} amounting to ${playerTotal}`);
  console.log("");
}

function displayInitialHands(playerCards, dealerCards, playerTotal) {
  prompt(`Dealer has ${openCard(dealerCards)} and ?`);
  displayPlayerHand(playerCards, playerTotal);
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function getInitialHands(playerCards, dealerCards, deck) {
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));
}

function playerTurn(playerCards, deck, playerTotal) {
  while (true) {
    let playerChoice;
    do {
      playerChoice = getHitOrStay();

      while (!answerIsHitOrStay(playerChoice)) {
        playerChoice = repeatPlayerChoice("no...(h)it or (s)tay? Those are the only options");
      }

      if (playerChoosesHit(playerChoice)) {
        addCardToHand(playerCards, deck);
        playerTotal = totalCardsValue(playerCards);
        displayHandOnHit(playerCards, playerTotal);
      }
    } while (!playerChoosesStay(playerChoice) && !busted(playerTotal));

    if (busted(playerTotal)) break;

    displayPlayerStays(playerTotal);
    break;
  }

  return playerTotal;
}

function dealerTurn(dealerCards, deck, dealerTotal) {
  displayDealerStartsNow();

  while (totalCardsValue(dealerCards) < MINIMUM_TOTAL_VALUE) {
    displayDealerHits();
    addCardToHand(dealerCards, deck);
    dealerTotal = totalCardsValue(dealerCards);
    displayUpdatedDealerHand(dealerCards);
  }

  if (busted(dealerTotal)) {
    prompt(`Dealer total is now ${dealerTotal}`);
    return dealerTotal;
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
    return dealerTotal;
  }
}

function getResult(playerTotal, dealerTotal) {
  if (playerTotal > TOTAL_VALUE_LIMIT) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > TOTAL_VALUE_LIMIT) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResult(playerTotal, dealerTotal) {
  let result = getResult(playerTotal, dealerTotal);

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

function printResultOnStay(playerCards, dealerCards, playerTotal, dealerTotal) {
  console.log("");
  console.log("<================================>");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${dealerTotal}`);
  prompt(`You have ${hand(playerCards)}, for a total of: ${playerTotal}`);
  console.log("<================================>");
  console.log("");
  displayResult(playerTotal, dealerTotal);
}

function playRound(playerTotal, dealerTotal) {
  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  getInitialHands(playerCards, dealerCards, deck);
  playerTotal = totalCardsValue(playerCards);
  dealerTotal = totalCardsValue(dealerCards);
  displayInitialHands(playerCards, dealerCards, playerTotal);

  playerTotal = playerTurn(playerCards, deck, playerTotal);
  if (busted(playerTotal)) {
    return displayResult(playerTotal, dealerTotal);
  }
  dealerTotal = dealerTurn(dealerCards, deck, dealerTotal);
  if (busted(dealerTotal)) {
    return displayResult(playerTotal, dealerTotal);
  }

  return printResultOnStay(playerCards, dealerCards, playerTotal, dealerTotal);
}

function playAgain() {
  console.log("");
  prompt(`Would you like to play another round? (y/n)`);
  let answer = rlSync.question().toLowerCase();

  while (!YES_OR_NO.includes(answer)) {
    prompt(`I must have blinked..what were you saying? (y/n)`);
    answer = rlSync.question().toLowerCase();
  }

  return answer[0] === "y";
}

// start game
welcome();

while (true) {
  let playerTotal = 0;
  let dealerTotal = 0;

  console.clear();
  playRound(playerTotal, dealerTotal);
  if (!playAgain()) break;
}
console.clear();
prompt("Thanks for playing Twenty One!");