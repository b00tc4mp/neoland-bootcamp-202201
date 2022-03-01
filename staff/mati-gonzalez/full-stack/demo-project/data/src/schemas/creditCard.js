const { schema } = require('mongoose')

const creditCard = new schema({    
    fullName: {
        type: String,
        required: true
    },
    
    number: {
        type: String,
        required: true,
    },

    expiration: {
        type: Date,
        required: true
    }
})

module.exports = user