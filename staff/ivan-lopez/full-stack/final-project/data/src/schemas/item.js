const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const item = new Schema({
    product: {
        type: ObjectId,
        ref: 'Product'
    
    },
    quantity: {
        type: Number,
        
    },

})

module.exports = item