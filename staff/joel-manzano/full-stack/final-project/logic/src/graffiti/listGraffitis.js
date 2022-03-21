const { validators: { validateId } } = require('commons')
const { models: { User, Graffiti } } = require('data')


function listGraffitis(userId) {
    
    validateId(userId, 'userId')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Graffiti.find({ user: userId }).lean()
                .then(graffitis => {
                    graffitis.forEach(graffiti => {
                        graffiti.id = graffiti._id.toString()
        
                        delete graffiti._id
                        delete graffiti.__v
                        delete graffiti.user
        
                        return graffiti
                    })
        
                    return graffitis
                })
        })
}

module.exports = listGraffitis