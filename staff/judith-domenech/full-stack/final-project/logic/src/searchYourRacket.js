const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')


function searchYourRacket(type, weight, player, level) {

    return Racket.find().lean().populate('racket')
        .then(rackets => {
            const founds = rackets.filter(racket =>
            (QUERY_REGEX.test(racket.type) &&
                QUERY_REGEX.test(racket.weight) &&
                QUERY_REGEX.test(racket.player) &&
                QUERY_REGEX.test(racket.level)))

            const docs = founds.map(racket => {

                racket.id = racket._id.toString()
                delete racket._id
                delete racket.__v
                racket.brand = racket.brand.name


                return racket
            })

            return docs
        })
}

module.exports = searchYourRacket

// find por los campos que queiras buscar y siempre debe dar un resultado
// ejemplo find({player, level, type, weight})