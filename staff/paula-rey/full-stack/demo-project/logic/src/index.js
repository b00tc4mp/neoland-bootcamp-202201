const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const updateUser = require('./updateUser')
const retrieveUser = require('./retrieveUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require ('./deleteUser')

module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser
}