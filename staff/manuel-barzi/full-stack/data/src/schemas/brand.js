/*
TODO implement me

properties
- name
*/

const { Schema } = require('mongoose')

const brand = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = brand