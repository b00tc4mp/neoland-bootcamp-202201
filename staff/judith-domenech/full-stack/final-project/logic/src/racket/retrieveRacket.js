const { models: { Racket } } = require('data')
const { validators: { validateId } } = require('commons')

function retriveRackets(racketId){
    validateId(racketId)

    return Racket.findById(racketId)
        .then(racket => {
            if(!racket) throw new Error(`racket with id ${racketId} does not exist`)

                   const doc = racket._doc
        
                    // sanitize
                    delete doc._id
                    delete doc.__v

                    doc.userId = doc.user._id
                    doc.userName = doc.user.name

                    delete doc.user
        
                    return doc 
        })
}

module.exports = retriveRackets