const { validators: { validateId } } = require('commons')
const { models: { User, Location, Comment } } = require('data')

function listLocationComments(userId, locationId) {
    validateId(userId)
    validateId(locationId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Location.find({ user: userId })
        })
        .then(location => {
            if (!location) throw new Error(`location with id ${locationId} not found`)

            return Comment.find({ location: locationId }).lean()
                .then(comments => {
                    comments.forEach(comment => {
                        //comment.id = comment._id.toString()
                        comment.user = comment.user.toString()

                        delete comment._id
                        delete comment.location
                        delete comment.__v

                        return comment
                })
                    return comments
                        
                })
        })

}

module.exports = listLocationComments