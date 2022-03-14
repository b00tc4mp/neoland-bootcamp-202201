const { models: { Racket } } = require('data')
const { validators: { validateString, validateId } } = require('commons')


function searchYourRacket(userId, { type, weight, player, level }) {

    validateId(userId)
    validateString(type, 'type')
    validateString(weight, 'weigth')
    validateString(player, 'player')
    validateString(level, 'level')

    const TYPE_REGEX = new RegExp(type, "i")
    const WEIGHT_REGEX = new RegExp(weight, 'i')
    const PLAYER_REGEX = new RegExp(player, "i")
    const LEVEL_REGEX = new RegExp(level, "i")

    return Racket.find({
        // condicional en objeto ( un if dentro de un Objeto)
        ...(type && { type: TYPE_REGEX }),
        ...(weight && { weight: WEIGHT_REGEX }),
        ...(player && { player: PLAYER_REGEX }),
        ...(level && { level: LEVEL_REGEX })
    }).lean().populate('brand')
        .then(results => {

            const docs = results.map(racket => {

                racket.id = racket._id.toString()
                delete racket.user
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