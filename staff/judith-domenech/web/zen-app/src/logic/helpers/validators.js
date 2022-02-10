function validateQuery(query) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (query === '') throw new Error('empty query')
}

export {
    validateQuery
}