import { fortunes } from '../data'


function findFortunes(query) {
    validateQuery(query)

    const results = fortunes.filter(fortunes => fortunes.includes(query))

    return results
}

export default findFortunes