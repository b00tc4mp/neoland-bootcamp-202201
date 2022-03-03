const handlerRegisterUser = require('./handlerRegisterUser')
const handlerAuthenticateUser = require('./handlerAuthenticateUser')
const handlerRetrieveUser = require('./handlerRetrieveUser')
const handlerUpdateUser = require('./handlerUpdateUser')
const handlerUpdateUserPassword = require('./handlerUpdateUserPassword')
const handlerDeleteUser = require('./handlerDeleteUser')
const handlerCreateNote = require('./handlerCreateNote')
const handlerListNotes = require('./handlerListNotes')
const handlerListPublicNotes = require('./handlerListPublicNotes')
const handlerListPublicNotesFromUser = require('./handlerListPublicNotesFromUser')
const handlerRetrieveNote = require('./handlerRetrieveNote')
const handlerUpdateNote = require('./handlerUpdateNote')
const handlerDeleteNote = require('./handlerDeleteNote')


module.exports = {
    handlerRegisterUser,
    handlerAuthenticateUser,
    handlerRetrieveUser,
    handlerUpdateUser,
    handlerUpdateUserPassword,
    handlerDeleteUser,
    handlerCreateNote,
    handlerListNotes,
    handlerListPublicNotes,
    handlerListPublicNotesFromUser,
    handlerRetrieveNote,
    handlerUpdateNote,
    handlerDeleteNote
}