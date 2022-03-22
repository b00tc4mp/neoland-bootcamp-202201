const { models: { Comment } } = require("data")
const { validators: { validateId, validateString } } = require('commons')

function updateComment(userId, commentId, text) {
    validateId(userId, 'userId')
    validateId(commentId, 'commentId')
    validateString(text)
    // primero buscas al usuario y te aseguras de que existe en bdd
    // luego haces updateOne del comentario buscando por userId y commentId y actualizando por text


    // return Comment.findOne(userId, commentId)// (userId, commentId)
    //     .then(comment => {
    //         if(!comment) throw Error(`user with id ${commentId} does not exist`)
            return Comment.updateOne({ _id: commentId, user: userId}, {text})
        // })
        .then(result => {
            // debugger
            if (result.modifiedCount === 0) throw Error('not updated')
        })
}

module.exports = updateComment