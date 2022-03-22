const { models: { Question } } = require('data')

function listQuestions(){
    return Question.find({}).lean().populate('user')
    .then(_questions => {

        const questions = _questions.map(question => {
            question.id = question._id.toString()

            // question.user = question.user?.username
            question.user = question.user.username
            delete question._id
    
            delete question.__v
            return question
        
        })
        return questions
    })
} 

module.exports = listQuestions