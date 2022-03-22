// // TODO implement me

// properties 
// - stock (object id)
// - user (object id)
// - quantity (number)

const { Schema } = require('mongoose')
const {Types: { ObjectId } } = Schema

const order = new Schema({
    stock: {
        type: ObjectId,
        ref: 'Stock',
        required: true

    },

    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
})

module.exports = order