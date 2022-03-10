const { validators: { validateId, validateString } } = require('commons')
const { models: { Note, User } } = require('data')


function createNote(userId, text, mood){  // 
    validateString(text)
    validateString(mood)
    validateId(userId)

    return User.findById(userId)
    .then(user => {
        if (!user) throw new Error(`User with ${userId} does not exist`)

        const newNote = new Note( { text, mood } )
        user.notes.push(newNote)

        return user.save()

})
}

module.exports = createNote