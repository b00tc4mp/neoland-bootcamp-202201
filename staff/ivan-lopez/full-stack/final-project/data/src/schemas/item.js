const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const item = new Schema({
    product: {
        type: ObjectId,
        ref: 'Product',
        required: true
    
    },
    quantity: {
        type: Number,
        required: true
    },

})

module.exports = item