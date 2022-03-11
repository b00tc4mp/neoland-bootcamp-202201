const { models: { Question } } = require('data')

function listQuestions(){
    return Question.find()
        .then(questions => questions)
}

module.exports = listQuestions