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
const YES_OR_NO = ["yes", "y", "no", "n"];
const ACE = "A";
const FACE_10 = ["J", "Q", "K"];
const HIT_OR_STAY = [["hit", "h"], ["stay", "s"]];

function prompt(msg) {
  console.log(`=> ${msg}`);
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
  prompt(`6. if your cards' values surpass 21, you "bust" and lose the game. Same goes for the dealer`);
  console.log("");
  prompt("Press Enter to start the game!");
  RL_SYNC.question();
}

function answerIsHitOrStay(answer) {
  return HIT_OR_STAY[0].includes(answer) || HIT_OR_STAY[1].includes(answer);
}

function repeatPlayerChoice(msg) {
  prompt(msg);

  return RL_SYNC.question().toLowerCase();
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
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return totalCardsValue(cards) > 21;
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

function displayHand(cards) {
  prompt(`Your cards are now: ${hand(cards)}`);
}

function displayInitialHands(playerCards, dealerCards) {
  prompt(`Dealer has ${openCard(dealerCards)} and ?`);
  displayHand(playerCards);
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function getInitialHands(playerCards, dealerCards, deck) {
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));
}

// eslint-disable-next-line max-lines-per-function
function playerTurn(playerCards, deck) {
  while (true) {
    let playerChoice;
    do {
      prompt(("hit or stay? (h/s)"));
      playerChoice = RL_SYNC.question().toLowerCase();

      while (!answerIsHitOrStay(playerChoice)) {
        playerChoice = repeatPlayerChoice("no...(h)it or (s)tay? Those are the only options");
      }

      if (HIT_OR_STAY[0].includes(playerChoice)) {
        addCardToHand(playerCards, deck);
        prompt("You chose to hit!");
        displayHand(playerCards);
      }
    } while (!HIT_OR_STAY[1].includes(playerChoice) && !busted(playerCards));

    if (busted(playerCards)) break;

    prompt(`You chose to stay at ${totalCardsValue(playerCards)}!`);
    break;
  }
}

function dealerTurn(dealerCards, deck) {
  prompt(`Dealer turn...`);

  while (totalCardsValue(dealerCards) < 17) {
    prompt(`Dealer hits!`);
    addCardToHand(dealerCards, deck);
    prompt(`Dealer's cards are now ${hand(dealerCards)}`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer total is now ${totalCardsValue(dealerCards)}`);
  } else {
    prompt(`Dealer stays at ${totalCardsValue(dealerCards)}`);
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

function displayResultWhenBothStay(playerCards, dealerCards) {
  console.log("");
  console.log("<================================>");
  prompt(`Dealer has ${dealerCards}, for a total of: ${totalCardsValue(dealerCards)}`);
  prompt(`You have ${playerCards}, for a total of: ${totalCardsValue(playerCards)}`);
  console.log("<================================>");
  console.log("");
  displayResult(playerCards, dealerCards);
}

function playRound() {
  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  getInitialHands(playerCards, dealerCards, deck);
  displayInitialHands(playerCards, dealerCards);
  debugger;
  playerTurn(playerCards, deck);
  if (busted(playerCards)) {
    return displayResult(playerCards, dealerCards);
  }
  dealerTurn(dealerCards, deck);
  if (busted(dealerCards)) {
    return displayResult(playerCards, dealerCards);
  }
  return displayResultWhenBothStay(playerCards, dealerCards);
}

function playAgain() {
  prompt(`Would you like to play another round? (y/n)`);
  let answer = RL_SYNC.question().toLowerCase();

  while (!YES_OR_NO.includes(answer)) {
    prompt(`I must have blinked..what were you saying? (y/n)`);
    answer = RL_SYNC.question().toLowerCase();
  }

  return answer[0] === "y";
}

// start game
welcome();

while (true) {
  console.clear();
  playRound();
  if (!playAgain()) break;
}
console.clear();
prompt("Thanks for playing Twenti One!");