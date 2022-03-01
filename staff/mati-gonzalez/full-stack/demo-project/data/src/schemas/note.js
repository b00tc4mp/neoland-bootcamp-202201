const { Schemas } = require('mongoose')
const { Types: { ObjectId } } = schema

const note = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    text: {
        type: String,
        required: true
    },

    color: {
        type: String,
        required: true,
        default: 'thistle'
    }
})

module.exports = note