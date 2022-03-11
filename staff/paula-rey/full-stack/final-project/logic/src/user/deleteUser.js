const { models: { User, Location, Comment } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

const anonymousId = '622b2a43756cff2b6efbe6dd'
// Esto se podría guardar en un env... como en api

function deleteUser(userId, password) {
        validateId(userId)
        validatePassword(password)

        return User.findOne({_id: userId, password})
        
        .then((user) => {

            if (!user) throw new Error(`wrong user ${userId} or password`)

            return Location.updateMany({ user: userId }, { user: anonymousId })
        })

        .then((result) => { // Aquí podrías manejar si las localizaciones se han pasado a anonymous o no
            return Comment.deleteMany({user: userId})
        })  

        .then((result) => User.deleteOne({ _id: userId, password }))
        
        .then(result => {
            if (result.deletedCount === 0) throw new Error(`user with ${userId} can't be deleted`)
        })
}

module.exports = deleteUser







