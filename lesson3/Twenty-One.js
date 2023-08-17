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

*/

const DECK_OF_CARDS = initializeDeck();

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

console.log(DECK_OF_CARDS.length);