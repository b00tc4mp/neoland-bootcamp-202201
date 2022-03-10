const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const deleteUser = require('./deleteUSer')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const addQuestion = require('./addQuestion')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    deleteUser,
    updateUser,
    updateUserPassword,
    addQuestion
}