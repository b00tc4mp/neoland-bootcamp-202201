const sanitizeAction = (action) => {
    const doc = action._doc
    doc.id = doc._id.toString()
    doc.authorId = doc.author.id
    doc.authorUsername = doc.author.username
    delete doc.author
    delete doc._id
    delete doc.__v
    delete doc.public

    return doc
}

module.exports = {
    sanitizeAction
}