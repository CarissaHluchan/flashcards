function createCard(id, question, answers, correctAnswer) {
    const card = {
        id: id || 1,
        question: question || 'What allows you to define a set of related information using key-value pairs?',
        answers: answers || ['object', 'array', 'function'],
        correctAnswer: correctAnswer || 'object',
    };
    return card;
}

module.exports = {
    createCard,
}