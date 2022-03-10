const { models: { Location } } = require('data')
const { validators: { validateString } } = require('commons')


function searchLocations(query) {
    validateString (query, 'query')

    const QUERY_REGEX = new RegExp(`${query}`, "i")


    return Location.find({$or:[{name: QUERY_REGEX},{type: QUERY_REGEX},{address: QUERY_REGEX},{city: QUERY_REGEX}]})
        .then(results => {
           
            const docs = results.map(location => {

                const doc = location._doc
                
                doc.id = doc._id.toString()
                delete doc.user
                delete doc._id
                delete doc.__v


                return doc
            })

            return docs
        })
}

module.exports = searchLocations



