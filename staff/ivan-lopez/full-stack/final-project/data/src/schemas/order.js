
const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema
const purchase = require('./purchase')

const order = new Schema ({
  
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    purchase: {
        type: purchase,
        ref: 'Purchase',
        required: true
    }

    
})

module.exports = order