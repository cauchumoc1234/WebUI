var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: String,
    fullname: String,
    address: String,
    phone: String
})
module.exports = mongoose.model('User',userSchema)