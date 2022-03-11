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
const deleteLocation = require('.deleteLocation')
const searchLocations = require('./searchLocations')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    createLocation,
    retrieveLocation,
    updateLocation,
    listUserLocations,
    deleteLocation,
    searchLocations
   
}