const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const orders = new Schema({
    stock: {
        type: ObjectId,
        ref: ''
        required: true

    },


})

module.exports = order

// properties
// - stock (object id)
// - user (object id)
// - quantity (number)