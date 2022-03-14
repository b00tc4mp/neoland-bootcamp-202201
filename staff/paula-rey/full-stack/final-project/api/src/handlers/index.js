const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const createLocation = require('./createLocation')
const retrieveLocation = require('./retrieveLocation')
const updateLocation = require('./updateLocation')
const listUserLocations = require('./listUserLocations')
const deleteLocation = require('./deleteLocation')
const searchLocations = require('./searchLocations')
const listFavorites = require('./listFavorites')
const listFollows = require('./listFollows')
const createComment = require('./createComment')
const retrieveComment = require('./retrieveComment')
const listLocationComments = require('./listLocationComments')
const deleteComment = require('./deleteComment')
const toggleFavorite = require('./toggleFavorite')
const toggleFollow = require('./toggleFollow')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    listUserLocations,
    toggleFavorite,
    listFavorites,
    toggleFollow,
    listFollows,
    deleteUser,
    createLocation,
    retrieveLocation,
    updateLocation,
    deleteLocation,
    searchLocations,
    createComment,
    retrieveComment,
    listLocationComments,
    deleteComment
}