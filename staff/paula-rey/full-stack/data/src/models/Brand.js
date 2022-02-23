const { model } = require('mongoose')
const { brand } = require('../Schemas')

const Brand = model('Brand', brand)

module.exports = Brand