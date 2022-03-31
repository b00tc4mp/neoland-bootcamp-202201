const registerUser = require('./user/registerUser')
const authenticateUser = require('./user/authenticateUser')
const retrieveUser = require('./user/retrieveUser')
const updateUser = require('./user/updateUser')
const updateUserPassword = require('./user/updateUserPassword')
const deleteUser = require('./user/deleteUser')
const createGraffiti = require('./graffiti/createGraffiti')
const modifyGraffiti = require('./graffiti/modifyGraffiti')
const deleteGraffiti = require('./graffiti/deleteGraffiti')
const listGraffitis = require('./graffiti/listGraffitis')
const retrieveGraffiti = require('./graffiti/retrieveGraffiti')
const searchGraffiti = require('./graffiti/searchGraffitis')
const toggleFavorite = require('./graffiti/toggleFavorite')
const listFavorites = require('./graffiti/listFavorites')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    createGraffiti,
    modifyGraffiti,
    deleteGraffiti,
    listGraffitis,
    retrieveGraffiti,
    searchGraffiti,
    toggleFavorite,
    listFavorites
}