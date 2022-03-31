const { model } = require('mongoose')
const { recipe } = require('../schemas')

const Recipe = model('Recipe', recipe)

module.exports = Recipe 

