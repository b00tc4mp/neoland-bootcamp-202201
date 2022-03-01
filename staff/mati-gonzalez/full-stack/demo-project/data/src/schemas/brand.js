//TODO implement me

// properties
// -name

const { schemas } =  require ('mongoose')
const { schema } = require('../models/Note')

const brand = new schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = brand