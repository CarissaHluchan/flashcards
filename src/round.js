function createRound(deck) {
    const round = {
        deck: deck,
        curentCard: deck.cards[0],
        turns: 0,
        incorrectGuesses: []
    };
    return round;
}

module.exports = {
    createRound
}