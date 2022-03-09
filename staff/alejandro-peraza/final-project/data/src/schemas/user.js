const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const user = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true

    },

    favs: {
        type: ObjectId,
        unique: true
    },

})

module.exports = user