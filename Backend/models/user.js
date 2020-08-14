const mongoose = require('mongoose');

const mortgageSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
    description: {type: String},
    yearBuilt: {type: String},
    loanPurpose: {type: String},
    ssn: {type: String},
    validated: false
})

module.exports = mongoose.model('mortgage', mortgageSchema)