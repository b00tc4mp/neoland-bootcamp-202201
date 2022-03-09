const registerUser = require('./user/registerUser')
const authenticateUser = require('./user/authenticateUser')
const updateUser = require('./user/updateUser')
const retrieveUser = require('./user/retrieveUser')
const updateUserPassword = require('./user/updateUserPassword')
const deleteUser = require ('./user/deleteUser')
const createLocation = require ('./location/createLocation')
const toggleFavorite = require ('./user/toggleFavorite')
const listFavorites = require ('./user/listFavorites')
const listFollows = require ('./user/listFollows')
const toggleFollow = require ('./user/toggleFollow')
const createComment = require ('./comment/createComment')
const deleteComment = require ('./comment/deleteComment')
const retrieveComment = require ('./comment/retrieveComment')
const listLocationsComments = require ('./comment/listLocationsComments')


module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    createLocation,
    toggleFavorite,
    listFavorites,
    toggleFollow,
    listFollows,
    createComment,
    deleteComment,
    retrieveComment,
    listLocationsComments
}