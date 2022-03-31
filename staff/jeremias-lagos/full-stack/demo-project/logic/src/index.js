const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const createNote = require('./createNote')
const listNotes = require('./listNotes')
const updateNote = require('./updateNote')
const listPublicNotes = require('./listPublicNotes')
const listPublicNotesFromUser = require('./listPublicNotesFromUser')
const deleteNote = require('./deleteNote')
const deleteUser = require('./deleteUser')
const retrieveNote = require('./retrieveNote')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createNote,
    listNotes,
    updateNote,
    listPublicNotes,
    listPublicNotesFromUser,
    deleteNote,
    deleteUser,
    retrieveNote,
    updateUser,
    updateUserPassword
}