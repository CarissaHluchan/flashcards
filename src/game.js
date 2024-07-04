const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { countCards, createDeck } = require('./deck.js');
const { createRound } = require('./round.js');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const deck = createDeck(data.prototypeData);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };
