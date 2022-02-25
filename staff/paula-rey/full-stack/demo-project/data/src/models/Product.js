const { model } = require('mongoose')
const { product } = require('../Schemas')

const Product = model('Product', product)

module.exports = Product