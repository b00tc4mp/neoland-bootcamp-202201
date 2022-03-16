const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const addQuestion = require('./addQuestion')
const retrieveQuestion = require('./retrieveQuestion')
const listQuestions = require('./listQuestions')
const addAnswer = require('./addAnswer')
const addComment = require('./addComment')
const listAnswers = require('./listAnswers')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    addQuestion,
    retrieveQuestion,
    listQuestions,
    addAnswer,
    addComment,
    listAnswers
}