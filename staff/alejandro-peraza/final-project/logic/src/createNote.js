const { validators: { validateId, validateString } } = require('commons')
const { models: { Note } } = require('data')

function createNote(userId, text) {
    validateId(userId, 'userId')
    validateString(text, 'text')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with id ${userId} does not exist`)
    

    return Note.create({ user: userId, text })
        .then(Note => { })
})
}

module.exports = createNote

