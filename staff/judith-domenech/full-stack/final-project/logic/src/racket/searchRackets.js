const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')

function searchRackets(query) {
    validateString(query, 'query')

    const QUERY_REGEX = new RegExp(query, 'i' )

    return Racket.find().lean().populate('brand')
        .then(rackets => {
            const founds = rackets.filter(racket =>
            (QUERY_REGEX.test(racket.brand.name) ||
                QUERY_REGEX.test(racket.model) ||
                QUERY_REGEX.test(racket.type) ||
                QUERY_REGEX.test(racket.player) ||
                QUERY_REGEX.test(racket.level)))

            const docs = founds.map(_racket => {

                _racket.id = _racket._id.toString()
                delete _racket._id
                delete _racket.__v

                _racket.brand = _racket.brand.name
                

                return _racket
            })

            return docs
        })
            }

module.exports = searchRackets