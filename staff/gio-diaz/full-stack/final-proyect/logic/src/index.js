const authenticateUser = require ('./authenticateUser')
const registerUser = require ('./registerUser')
const retrieveUser = require ('./retrieveUser')
const updateUser = require ('./updateUser')
const deleteUser = require ('./deleteUser')
const createNote = require ('./createNote')
const updateUserPassword = require ('./updateUserPassword')
const retrieveNoteByDate = require ('./retrieveNoteByDate')
const retrieveNote = require ('./retrieveNote')


module.exports =  {
    authenticateUser,
    registerUser,
    retrieveUser,
    updateUser,
    deleteUser, 
    createNote,
    updateUserPassword,
    retrieveNoteByDate,
    retrieveNote
    
}