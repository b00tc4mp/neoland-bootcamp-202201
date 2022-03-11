const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')
const { brand } = require('data/src/schemas')

function searchRackets(query) {
    validateString(query, 'query')

    const QUERY_REGEX = new RegExp(`${query}`, 'i' )

    return Racket.find().populate('brand')
        .then(rackets => {
            const founds = rackets.filter(racket =>
            (QUERY_REGEX.test(racket._doc.brand.name) ||
                QUERY_REGEX.test(racket.model) ||
                QUERY_REGEX.test(racket.type) ||
                QUERY_REGEX.test(racket.player) ||
                QUERY_REGEX.test(racket.level)))

            const docs = founds.map(racket => {

                const doc = racket._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.__v

                doc.brand = doc.brand.name
                

                return doc
            })

            return docs
        })
            }

module.exports = searchRackets