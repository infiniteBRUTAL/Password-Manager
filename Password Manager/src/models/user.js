const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    websiteData: []
})

module.exports = User