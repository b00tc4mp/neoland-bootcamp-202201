const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')
const { brand } = require('data/src/schemas')

function searchRackets(query) {
    validateString(query, 'query')

    const QUERY_REGEX = new RegExp(`${query}`, 'i' )

    return Racket.find().lean().populate('brand')
        .then(rackets => {
            const founds = rackets.filter(racket =>
            (QUERY_REGEX.test(racket._doc.brand.name) ||
                QUERY_REGEX.test(racket.model) ||
                QUERY_REGEX.test(racket.type) ||
                QUERY_REGEX.test(racket.player) ||
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

module.exports = searchRackets