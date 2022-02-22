import { zens } from '../data'

function findZens(query) {
    validateQuery(query)

    const results = zens.filter(zens => findZens.includes(query))

    return results
}

export default findZens