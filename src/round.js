const { evaluateGuess } = require('../src/turns.js');

function createRound(deck) {
    const round = {
        deck: deck,
        curentCard: deck.cards[0],
        turns: 0,
        incorrectGuesses: [],
    };
    return round;
}

function takeTurn(guess, round) {
    const result = evaluateGuess(guess, round.curentCard.correctAnswer);
    round.turns += 1;
    if (result === 'incorrect') {
        round.incorrectGuesses.push(round.curentCard.id);
    };

    const cardIndex = round.deck.cards.indexOf(round.curentCard);
    round.curentCard = round.deck.cards[cardIndex + 1];
    return result;
}

function calculatePercentCorrect() {

}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect
}