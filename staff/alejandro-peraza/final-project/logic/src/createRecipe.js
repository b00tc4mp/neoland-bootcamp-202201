const { models: { Recipe } } = require('data')
const { validators: { validateString } } = require('commons')


function createRecipe(name, type, destilled, description, /*image,*/comment) {
    
    validateString(type, 'type')
    validateString(name, 'name')
    validateString(destilled, 'destilled')
    validateString(description, 'description')
    /*validateString(image, 'image')*/
    validateString(comment, 'comment')

    return Recipe.create({ type, name, destilled, description, /*image,*/ comment })
    .then(recipe => { })
}

module.exports = createRecipe