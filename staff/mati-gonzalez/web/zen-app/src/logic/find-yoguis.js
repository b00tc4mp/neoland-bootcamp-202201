import { yoguis } from '../data'
import { yoguis } from '../data'

function findYoguis(query) {
    validateQuery(query)

    const results = yoguis.filter(yogui => yogui.includes(query))

    return results
}

export default findYoguis