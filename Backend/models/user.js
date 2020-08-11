const mongoose = require('mongoose');

const mortgageSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    validated: false
})

module.exports = mongoose.model('mortgage', mortgageSchema)