const { model  } = require('mongoose')
const { comment } = require('../schemas')

const Comment = model('Comment', comment) /// Preguntar 

module.exports = Comment