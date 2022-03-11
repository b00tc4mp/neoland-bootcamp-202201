const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const question = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    
    text: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },

    categories: {
        type: [String],
    },

    like: {
        type: Number
    }

})

module.exports = question