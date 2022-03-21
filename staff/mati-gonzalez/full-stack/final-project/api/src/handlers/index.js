const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const addQuestion = require('./addQuestion')
const listQuestions = require('./listQuestions')
const retrieveQuestion = require('./retrieveQuestion')
const addAnswer = require('./addAnswer')
const listAnswers = require('./listAnswers')
const retrieveAnswer = require('./retrieveAnswer')
const addComment = require('./addComment')
const listComments = require('./listComments')
const updateComment = require('./updateComment')
const deleteComment = require('./deleteComment')
const toggleFavorite = require('./toggleFavorite')
const listFavorites = require('./listFavorites')
const findQuestions = require('./findQuestions')

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
    listAnswers,
    retrieveAnswer,
    addComment,
    listComments,
    updateComment,
    deleteComment,
    toggleFavorite,
    listFavorites,
    findQuestions
}