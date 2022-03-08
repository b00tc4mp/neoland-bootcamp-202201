const { Schema } = require('mongoose')

const item = require('./item')

const cart = new Schema ({

    items: [item] 
})

module.exports = cart