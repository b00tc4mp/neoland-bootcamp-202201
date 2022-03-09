const { models: { Comment }} = require('data')
const { validators: { validateId }} = require('commons')

function deleteComment(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    
    return Comment.deleteOne({ _id: noteId, user: userId })
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`note with id ${commentId} and user id ${userId} does not exist`)
        })
}

module.exports = deleteComment