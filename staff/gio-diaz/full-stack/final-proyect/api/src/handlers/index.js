const registerUser = require ('./RegisterUser')
const authenticateUser = require ('./AuthenticateUser')
const retrieveUser = require ('./RetrieveUser')
const updateUser = require ('./UpdateUser')
const updateUserPassword = require ('./UpdateUserPassword')
const deleteUser = require ('./DeleteUser')
const createNote = require ('./CreateNote')
const retrieveNote = require ('./retrieveNote')
const retrieveNoteByDate = require ('./RetrieveNoteByDate')



module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updateUserPassword,
    deleteUser,
    createNote,
    retrieveNote,
    retrieveNoteByDate
}