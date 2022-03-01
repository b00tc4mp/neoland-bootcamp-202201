const { schema } = require('mongoose')
const { Types: { ObjectId } } = schema

const property = new schema({
    cadastral: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    area: {
        type : Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    owners: [{
        type: ObjectId,
        ref: 'User',
        required: true
    }]
})

module.exports = property