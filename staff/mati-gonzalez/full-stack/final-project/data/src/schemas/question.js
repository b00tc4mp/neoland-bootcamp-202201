const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const question = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    
    text: {
        type: String,
        required: true
    },

    date: {
        type: Date
    },

    categories: {
        type: [String],
    },

    like: {
        type: Number
    }

})

module.exports = question