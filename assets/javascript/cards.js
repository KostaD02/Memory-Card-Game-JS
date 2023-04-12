const cardsArrayName = [
  "10_of_clubs.png",
  "10_of_diamonds.png",
  "10_of_hearts.png",
  "10_of_spades.png",
  "2_of_clubs.png",
  "2_of_diamonds.png",
  "2_of_hearts.png",
  "2_of_spades.png",
  "3_of_clubs.png",
  "3_of_diamonds.png",
  "3_of_hearts.png",
  "3_of_spades.png",
  "4_of_clubs.png",
  "4_of_diamonds.png",
  "4_of_hearts.png",
  "4_of_spades.png",
  "5_of_clubs.png",
  "5_of_diamonds.png",
  "5_of_hearts.png",
  "5_of_spades.png",
  "6_of_clubs.png",
  "6_of_diamonds.png",
  "6_of_hearts.png",
  "6_of_spades.png",
  "7_of_clubs.png",
  "7_of_diamonds.png",
  "7_of_hearts.png",
  "7_of_spades.png",
  "8_of_clubs.png",
  "8_of_diamonds.png",
  "8_of_hearts.png",
  "8_of_spades.png",
  "9_of_clubs.png",
  "9_of_diamonds.png",
  "9_of_hearts.png",
  "9_of_spades.png",
  "ace_of_clubs.png",
  "ace_of_diamonds.png",
  "ace_of_hearts.png",
  "ace_of_spades2.png",
  "black_joker.png",
  "jack_of_clubs2.png",
  "jack_of_diamonds2.png",
  "jack_of_hearts2.png",
  "jack_of_spades2.png",
  "king_of_clubs2.png",
  "king_of_diamonds2.png",
  "king_of_hearts2.png",
  "king_of_spades2.png",
  "queen_of_clubs2.png",
  "queen_of_diamonds2.png",
  "queen_of_hearts2.png",
  "queen_of_spades2.png",
  "red_joker.png",
];

function getShuffledCards(cardsArray = [], count = cardsArray.length) {
  for (let i = cardsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
  }
  return cardsArray.slice(0, count);
}

function getShuffledWithDuplicates(cardsArray, count) {
  const shuffledCards = getShuffledCards(cardsArray, count);
  const duplicatedCards = [];
  for (let i = 0; i < count; i++) {
    duplicatedCards.push(shuffledCards[i], shuffledCards[i]);
  }
  for (let i = duplicatedCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [duplicatedCards[i], duplicatedCards[j]] = [duplicatedCards[j], duplicatedCards[i]];
  }
  return duplicatedCards;
}