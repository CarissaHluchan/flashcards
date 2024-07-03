const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');

describe('turns', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return correct if guess and correct answer are the same', function() {
    const guess = 'cat\'s are cute'
    const correctAnswer = 'cat\'s are cute'

    const result = evaluateGuess(guess, correctAnswer);

    expect(result).to.equal('correct');
  });  

  it('should return incorrect if guess and correct answer are not the same', function() {
    const guess = 'cat\'s are cute'
    const correctAnswer = 'dog\'s are cute'

    const result = evaluateGuess(guess, correctAnswer);

    expect(result).to.equal('incorrect');
  });  
});
