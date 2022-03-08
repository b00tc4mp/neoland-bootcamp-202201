const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const item = require('./item')

const cart = new Schema ({
   
    id: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    items: [item] 
})

module.exports = cart