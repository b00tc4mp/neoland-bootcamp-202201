const registerUser = require('./user/registerUser')
const authenticateUser = require('./user/authenticateUser')
const updateUser = require('./user/updateUser')
const retrieveUser = require('./user/retrieveUser')
const updateUserPassword = require('./user/updateUserPassword')
const deleteUser = require ('./user/deleteUser')
const toggleFavorite = require ('./user/toggleFavorite')
const listFavorites = require ('./user/listFavorites')
const toggleFollow = require ('./user/toggleFollow')
const listFollows = require ('./user/listFollows')
const createComment = require ('./comment/createComment')
const listLocationComments = require ('./comment/listLocationComments')
const deleteComment = require ('./comment/deleteComment')
const createLocation = require ('./location/createLocation')
const listUserLocations = require ('./location/listUserLocations')
const retrieveLocation = require ('./location/retrieveLocation')
const updateLocation = require ('./location/updateLocation')
const searchLocations = require ('./location/searchLocations')
const deleteLocation = require ('./location/deleteLocation')


module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    toggleFavorite,
    listFavorites,
    toggleFollow,
    listFollows,
    createComment,
    listLocationComments,
    deleteComment,
    createLocation,
    listUserLocations,
    retrieveLocation,
    updateLocation,
    searchLocations,
    deleteLocation

}