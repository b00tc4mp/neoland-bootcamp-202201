const { mongoose: { connect, disconnect }, models: { User, Question, Answer, Comment } } = require('data')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    // deleteUser,
    addQuestion,
    retrieveQuestion,
    listQuestions,
    addAnswer,
    listAnswers,
    retrieveAnswer,
    addComment,
    listComments,
    retrieveComment,
    toggleFavorite
} = require('./index')
const updateComment = require('./updateComment')

let questionId
let questionId2

let answerId
let answerId2
let answerId3

let commentId
let commentId2
let commentId3


connect('mongodb://localhost:27017/thylemma-db')
    .then(() => Promise.all([
        User.deleteOne({ email: 'pepito@grillo.com' }),
        Question.deleteMany(),
        Answer.deleteMany(),
        Comment.deleteMany()
    ]))

    .then(() => registerUser('pepitogrillo', 'pepito@grillo.com', '123123123', 20))
    .then(() => console.log('user registered'))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(() => userId => console.log('user id', userId))

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUser(userId, 'notMati', 'pepito@grillo.com')
            .then(() => console.log('user updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return retrieveUser(userId)
            .then(user =>  console.log(user))
    })

    .then(() => authenticateUser('pepito@grillo.com', '123123123'))
    .then(userId => {
        return updateUserPassword(userId, '123123123', '234234234')
            .then(() => console.log('password updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addQuestion(userId, 'What is life\'s biggest illusion? ', ['granjitechno', 'electroCumbia'])
            .then(_questionId =>{
                questionId = _questionId
                console.log('question created')})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addQuestion(userId, 'I told you I would never leave you', ['granjitechno', 'electroCumbia'])
            .then(_questionId =>{
                questionId2 = _questionId
                console.log('question created')})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return retrieveQuestion(userId, questionId)
            .then(question => console.log(question))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(() => {
        return listQuestions()
        .then(questions => console.log(questions))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addAnswer(userId, questionId, 'innocence')
            .then(_answerId => {
                answerId = _answerId
                console.log('answer created', )})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addAnswer(userId, questionId2, 'but I lied')
            .then(_answerId => {
                answerId2 = _answerId
                
                console.log('answer created', )})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addAnswer(userId, questionId2, 'I also lied')
            .then(_answerId => {
                answerId3 = _answerId
                
                console.log('answer created', )})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(() => {
        return listAnswers(questionId)
        .then(answers => console.log(answers))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(() => {
        return listAnswers(questionId2)
        .then(answers => console.log(answers))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return retrieveAnswer(userId, answerId)
            .then(answer => console.log(answer))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return retrieveAnswer(userId, answerId2)
            .then(answer => console.log(answer))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addComment(userId, answerId, 'It\'s in our nature to  make mistakes, so we always end up being guilty of something, hence innocence becomes an illusion')
            .then(_commentId => {
                commentId = _commentId
                
                console.log('comment created' )})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addComment(userId, answerId2, 'And I\'m sorry :\'(')
            .then(_commentId => {
                commentId2 = _commentId
                
                console.log('comment created' )})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return addComment(userId, answerId2, 'Very sorry :\'(')
            .then(_commentId => {
                commentId3 = _commentId
                
                console.log('comment created')})
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(() => {
        return listComments(answerId)
        .then(comments => console.log(comments))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(() => {
        return listComments(answerId2)
        .then(comments => console.log(comments))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return updateComment(userId, commentId, 'Man I love you very f*king much !')
            .then(() => console.log('comment updated'))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return retrieveComment(userId, commentId)
            .then(comment => console.log(comment))
    })

    .then(() => authenticateUser('pepito@grillo.com', '234234234'))
    .then(userId => {
        return toggleFavorite(userId, questionId)
            .then(() => console.log('favorite toggled'))
    })

    



    .catch(error => console.error(error.message))
    .then(disconnect)