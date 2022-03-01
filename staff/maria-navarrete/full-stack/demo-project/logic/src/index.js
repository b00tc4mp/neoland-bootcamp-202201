const authenticateUser = require('./authenticateUser')
const deleteUser = require('./deleteUser')
const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const updateUser = require('./updateUser')
const updateUserPassword = require('./updateUserPassword')
const createNote = require('./createNote')
const listNotes = require('./listNotes')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')

module.exports={
    authenticateUser,
    deleteUser,
    registerUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    createNote,
    listNotes, 
    updateNote,
    deleteNote
}