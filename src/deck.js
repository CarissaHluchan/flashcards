function createDeck(cards) {
    const deck = {
        cards: cards,
    };
    return deck;
}

function countCards(deck) {
    return deck.cards.length;
}

module.exports = {
    createDeck,
    countCards
}