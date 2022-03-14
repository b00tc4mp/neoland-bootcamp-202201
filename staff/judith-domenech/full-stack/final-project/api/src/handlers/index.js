const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updatePassword = require('./updatePassword')
const deleteUser = require('./deleteUser')
const toggleFavorite = require('./toggleFavorite')
const listFavorites = require('./listFavorites')
const createComment = require('./createComment')
const listComments = require('./listComments')
const retrieveComment = require('./retrieveComment')
const deleteComment = require('./deleteComment')
const searchRackets = require('./searchRackets')
const retrieveRacket = require('./retrieveRacket')
const searchYourRacket = require('./searchYourRacket')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updatePassword,
    deleteUser,
    createComment,
    listComments,
    retrieveComment,
    deleteComment,
    toggleFavorite,
    listFavorites,
    searchRackets,
    retrieveRacket,
    searchYourRacket

}