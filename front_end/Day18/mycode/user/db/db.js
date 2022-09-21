let mongoose = require('mongoose')
let {Schema} = mongoose

mongoose.connect("mongodb://localhost/xtbase")

let users_schema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String || Number,
        unique: true
    },
    nickname: {
        type: String,
        unique: true
    }
})

let users = mongoose.model('user', users_schema)

module.exports = {
    users
}