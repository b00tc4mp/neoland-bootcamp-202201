const { validators: { validateId } } = require('commons')
const { models: { Recipe } } = require('data')


function listRecipe(userId) {
    validateId(userId, 'userId')
  

    return Recipe.find({ user: userId })
        .then(recipe => {
            const docs = recipe.map(recipe => {
                const doc = recipe._doc

                doc.id = doc._id.toString()
                delete doc._id
                delete doc.user
                delete doc.__v

                return doc
            })

            return docs
        })
}

module.exports = listRecipe


