const { models: { Location } } = require('data')
const { validators: { validateString } } = require('commons')


function searchLocations(query) {
    validateString(query, 'query')
    validateString(type, 'type') 
    validateString(city, 'city')

    const QUERY_REGEX = new RegExp(query, 'i')
    const TYPE_REGEX = new RegExp(`^${type}$`, 'i')
    const CITY_REGEX = new RegExp(`^${city}$`, 'i')


    return Location.find({$or:[{title: QUERY_REGEX},{type: TYPE_REGEX},{address: QUERY_REGEX},{city: CITY_REGEX}]})
    
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
























// const { models: { Location } } = require('data')
// const { validators: { validateString } } = require('commons')


// function searchLocations(query) {
//     validateString (query, 'query')

//     const QUERY_REGEX = new RegExp(query, 'i')


//     return Location.find({$or:[{title: QUERY_REGEX},{type: QUERY_REGEX},{address: QUERY_REGEX},{city: QUERY_REGEX}]})
//         .then(results => {
           
//             const docs = results.map(location => {

//                 const doc = location._doc
                
//                 doc.id = doc._id.toString()
//                 delete doc.user
//                 delete doc._id
//                 delete doc.__v


//                 return doc
//             })

//             return docs
//         })
// }

// module.exports = searchLocations



