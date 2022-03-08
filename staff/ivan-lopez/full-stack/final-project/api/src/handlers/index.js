const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')


module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
}