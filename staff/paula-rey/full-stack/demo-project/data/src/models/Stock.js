const { model } = require('mongoose')
const { stock } = require('../Schemas')

const Stock = model('Stock', stock)

module.exports = Stock