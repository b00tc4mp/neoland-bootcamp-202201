const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
// const deleteUser = require('./deleteUSer')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const addQuestion = require('./addQuestion')
const retrieveQuestion = require('./retrieveQuestion')
const listQuestions = require('./listQuestions')
const addAnswer = require('./addAnswer')
const listAnswers = require('./listAnswers')
const retrieveAnswer = require('./retrieveAnswer')
const addComment = require('./addComment')
const listComments = require('./listComments')
const retrieveComment = require('./retrieveComment')
const updateComment = require('./updateComment')
const toggleFavorite = require('./toggleFavorites')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    // deleteUser,
    updateUser,
    updateUserPassword,
    addQuestion,
    retrieveQuestion,
    listQuestions,
    addAnswer,
    listAnswers,
    retrieveAnswer,
    addComment,
    listComments,
    retrieveComment,
    updateComment,
    toggleFavorite
}