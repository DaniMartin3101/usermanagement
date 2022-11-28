let mongoose = require("mongoose")
//Nos conectamos al servidor de mongoDB usando mongoose, por defecto está en el puerto 27017
//El /Users del final indica la BBDD que vamos a utilizar
mongoose.connect("mongodb://127.0.0.1:27017/Users")

//Importamos el modelo que siguen los usuarios del fichero  /models/userModel
let User = require("../models/userModel")

//exportamos login como una funcion asincrona que recibe una request y una response
exports.login = async function (req, res){
    //cogemos el nombre de usuario y la contraseña del cuerpo de la peticion
    var uname = req.body.username
    var password = req.body.password
    //Usamos el modelo y buscamos los documentos que cumplen el filtro que hemos especificado
    User.findOne({ username : uname}, function(err, user){
        if(err)
            console.log(err)
        else
            if(password == user.password)
                return res.sendStatus(200)
            else
                return res.sendStatus(403)
    })
}

exports.register = async function (req, res){
    var user = new User(req.body)
    if(verificarUsuario(user))
        user.save();
    console.log(user)
    return res.jsonp(user)
}

function verificarUsuario(user){
    return true;
}