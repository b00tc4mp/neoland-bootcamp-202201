import {validateQuery} from './helpers/validators'

function findQuotes(array, query){
    validateQuery(query)
    const results = array.filter(quote => quote.toLowerCase().includes(query.toLowerCase()))
    return results
}

export default findQuotes