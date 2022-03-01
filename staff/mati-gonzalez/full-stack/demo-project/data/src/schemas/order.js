// // TODO implement me

// properties 
// - stock (object id)
// - user (object id)
// - quantity (number)

const { schema } = require('mongoose')
const {Types: { ObjectId } } = schema

const order = new schema({
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