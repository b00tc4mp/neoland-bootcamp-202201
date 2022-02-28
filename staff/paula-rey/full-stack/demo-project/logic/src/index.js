const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const updateUser = require('./updateUser')
const retrieveUser = require('./retrieveUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require ('./deleteUser')
const createNote = require('./createNote')
const listNotes = require('./listNotes')

module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    createNote,
    listNotes
}