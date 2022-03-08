const { model } = require('mongoose')
const { question } = require('../schemas')

const Question = model('Question', question)

module.exports = Question