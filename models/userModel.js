let mongoose = require("mongoose")
let Schema = mongoose.Schema
//En principio todos deberían ser obligatorios, están de esta forma 
//para ejemplificar distintas formas de definir atributos

let user = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    FirstName: String,
    LastName: String
})

module.exports = mongoose.model("User", user)