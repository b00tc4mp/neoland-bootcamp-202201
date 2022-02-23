//TODO implement me

const { Schema } = require('mongoose')

const brand = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = brand