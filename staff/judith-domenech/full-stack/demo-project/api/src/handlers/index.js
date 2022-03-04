const registerUser = require('./registerUser')
const authenticateUser = require('./authenticateUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updatePassword = require('./updatePassword')
const deleteUser = require('./deleteUser')
const createNote = require('./createNote')
const retrieveNote = require('./retrieveNote')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const listNotes = require('./listNotes')
const listPublicNotes = require('./listPublicNotes')
const listPublicNotesFromUser = require('./listPublicNotesFromUser')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updatePassword,
    deleteUser,
    createNote,
    retrieveNote,
    updateNote,
    deleteNote,
    listNotes,
    listPublicNotes,
    listPublicNotesFromUser
}