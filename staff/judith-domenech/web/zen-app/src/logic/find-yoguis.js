import { yoguis } from '../data'
/* import {zens} from '../data'
import {fortunes} from '../data'
import {we} from '../data' */
import { validateQuery } from './helpers/validators'


function findYoguis(query) {
    validateQuery(query)

    const results = yoguis.filter(yogui => yogui.toLowerCase().includes(query.toLowerCase()))

    return results
}

export default findYoguis 