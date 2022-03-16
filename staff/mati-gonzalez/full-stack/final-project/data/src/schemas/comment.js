const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const comment = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    
    answer: {
        type: ObjectId,
        ref: 'Answer',
        required: true
    },

    text: {
        type: String,
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    // likes: {
    //     type: Number
    // }
})

module.exports = comment