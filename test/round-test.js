const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card.js');
const { createDeck, countCards } = require('../src/deck.js');

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

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

    it('takeTurn', function () {
        expect(takeTurn).to.be.a('function');
    });

    it("should update the turns count, evaluate guesses, give feedback, and store ids of incorrect guesses when the guess is correct", function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);

        const round = createRound(deck);

        const guess = 'sea otter';

        const feedback = takeTurn(guess, round);

        expect(round.deck).to.deep.equal({cards: [card1, card2, card3]});
        expect(round.curentCard).to.equal(card2);
        expect(round.turns).to.equal(1);
        expect(round.incorrectGuesses).to.deep.equal([]);

        expect(feedback).to.equal('correct')
    });

    it("should update the turns count, evaluate guesses, give feedback, and store ids of incorrect guesses when the guess is incorrect", function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);

        const round = createRound(deck);

        const guess = 'pug';

        const feedback = takeTurn(guess, round);

        expect(round.deck).to.deep.equal({cards: [card1, card2, card3]});
        expect(round.curentCard).to.equal(card2);
        expect(round.turns).to.equal(1);
        expect(round.incorrectGuesses).to.deep.equal([1]);

        expect(feedback).to.equal('incorrect')
    });

    it('should be able to take mulitple turns', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);

        const round = createRound(deck);

        const guess = 'pug';

        takeTurn(guess, round);
        const feedback2 = takeTurn(guess, round);

        expect(round.deck).to.deep.equal({cards: [card1, card2, card3]});
        expect(round.curentCard).to.equal(card3);
        expect(round.turns).to.equal(2);
        expect(round.incorrectGuesses).to.deep.equal([1, 14]);

        expect(feedback2).to.equal('incorrect')
    });

    it('calculatePercentCorrect', function () {
        expect(calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate and return the percentage of correct guesses', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);

        const round = createRound(deck);
        const turns = round.turns;
        const incorrectGuesses = round.incorrectGuesses;

        const correctGuesses = calculatePercentCorrect(round);

        expect(correctGuesses).to.equal(1);
    });

    it('should calculate and return the percentage of correct guesses for multiple turns', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const deck = createDeck([card1, card2, card3]);

        const round = createRound(deck);

        takeTurn('pug', round);
        takeTurn('appendix', round);
        takeTurn('Fitzgerald', round);
        
        const turns = 3;
        const incorrectGuesses = 2;
        const correctGuesses = 1;

        const correctGuessesPercent = calculatePercentCorrect(round);

        expect(correctGuessesPercent).to.equal(correctGuesses/turns);
    })

    it('endRound', function () {
        expect(endRound).to.be.a('function');
    });
});