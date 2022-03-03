const handlerRegisterUser = require('./handlerRegisterUser')
const handlerAuthenticateUser = require('./handlerAuthenticateUser')
const handlerRetrieveUser = require('./handlerRetrieveUser')
const handlerCreateNote = require('./handlerCreateNote')
const handlerListNotes = require('./handlerListNotes')
const handlerUpdateNote = require('./handlerUpdateNote')
const handlerUpdateUser = require('./handlerUpdateUser')
const handlerUpdateUserPassword = require('./handlerUpdateUserPassword')
const handlerListPublicNotes = require('./handlerListPublicNotes')
const handlerPublicNotesFromUser = require('./handlerPublicNotesFromUser')
const handlerDeleteNote = require('./handlerDeleteNote')
const handlerRetrieveNote = require('./handlerRetrieveNote')
const handlerDeleteUser = require('./handlerDeleteUser')


module.exports = {
    
    handlerDeleteUser,
    handlerRetrieveNote,
    handlerDeleteNote,
    handlerPublicNotesFromUser,
    handlerListPublicNotes,
    handlerUpdateUserPassword,
    handlerUpdateUser,
    handlerUpdateNote,
    handlerListNotes,
    handlerCreateNote,
    handlerRetrieveUser,
    handlerRegisterUser,
    handlerAuthenticateUser
}