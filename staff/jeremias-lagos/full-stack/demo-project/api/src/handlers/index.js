const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const listNotes = require('./listNotes')
const listPublicNotes = require('./listPublicNotes')
const listPublicFromUser = require('./listPublicNotesFromUser')
const retrieveNote = require('./retrieveNote')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    createNote,
    listNotes,
    listPublicNotes,
    listPublicFromUser,
    retrieveNote,
    updateNote,
    deleteNote
}