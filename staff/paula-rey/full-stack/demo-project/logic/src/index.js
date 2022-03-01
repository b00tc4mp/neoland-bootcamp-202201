const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const updateUser = require('./updateUser')
const retrieveUser = require('./retrieveUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require ('./deleteUser')
const createNote = require('./createNote')
const listNotes = require('./listNotes')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')

module.exports = {
    registerUser,
    authenticateUser,
    updateUser,
    retrieveUser,
    updateUserPassword,
    deleteUser,
    createNote,
    listNotes,
    updateNote,
    deleteNote,
}