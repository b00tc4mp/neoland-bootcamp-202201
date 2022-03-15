const { models: { Graffiti } } = require('data')
const { validators: { validateString } } = require('commons')

function searchGraffitis(query) {
    validateString(query, 'query')
debugger
    const QUERY_REGEX = new RegExp(query, 'i')

    return Graffiti.find().lean()
        .then(graffitis => {
            debugger
            const founds = graffitis.filter(graffiti =>
                QUERY_REGEX.test(graffiti.artist) ||
                QUERY_REGEX.test(graffiti.city) ||
                QUERY_REGEX.test(graffiti.postalCode) ||
                QUERY_REGEX.test(graffiti.style) ||
                QUERY_REGEX.test(graffiti.status) ||
                QUERY_REGEX.test(graffiti.spray) ||
                QUERY_REGEX.test(graffiti.colors))

            founds.forEach(graffiti => {
                debugger
                graffiti.id = graffiti._id.toString()

                delete graffiti._id
                delete graffiti.__v
                return graffiti
            })

            return founds
        })
}

module.exports = searchGraffitis