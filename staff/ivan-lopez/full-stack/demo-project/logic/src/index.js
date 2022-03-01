const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const createNote = require('./createNote')
const listNotes = require('./listNotes')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createNote,
    listNotes,
    updateNote,
    updateUser,
    updateUserPassword,
    deleteNote

}