const { model } = require('mongoose')
const { answer } = require('../schemas')

const Answer = model('Answer', answer)

module.exports = Answer