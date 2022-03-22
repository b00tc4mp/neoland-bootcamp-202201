const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const deleteUser = require('./deleteUSer')
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
const updateComment = require('./updateComment')
const deleteComment = require('./deleteComment')
const toggleFavorite = require('./toggleFavorites')
const listFavorites = require('./listFavorites')
const findQuestions = require('./findQuestions')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    deleteUser,
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
    updateComment,
    deleteComment,
    toggleFavorite,
    listFavorites,
    findQuestions,
    deleteComment
}