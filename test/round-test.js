const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card.js');
const { createDeck, countCards } = require('../src/deck.js');
const { evaluateGuess } = require('../src/turns.js');

const { createRound } = require('../src/round');

describe('round', function () {
    it('createRound', function () {
        expect(createRound).to.be.a('function');
    });

    it('should be able to create a round', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);

        const round = createRound(deck);

        expect(round.deck).to.deep.equal({cards: [card1, card2, card3]});
        expect(round.curentCard).to.equal(card1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
});