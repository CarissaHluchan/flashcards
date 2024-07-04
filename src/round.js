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

function calculatePercentCorrect(round) {
    if (round.turns === 0) {
        return 1;
    }
    const turns = round.turns
    const incorrectGuesses = round.incorrectGuesses.length
    const correctGuesses = turns - incorrectGuesses
    const correctGuessesPercent = correctGuesses/turns
    return correctGuessesPercent;
}

function endRound(round) {
    console.log(`** Round over! ** You answered ${calculatePercentCorrect(round) * 100}% of the questions correctly!`)
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}