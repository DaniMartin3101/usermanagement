//importamos las funciones relacionadas con la autenticación de los usuarios
const userController = require("../controllers/userController")

//Creamos una nueva instancia del enrutador de express
const router = require("express").Router()

//Definimos la ruta /login => localhost:4000/login
router.route("/login")
    //podemos definir varios metodos http para cada ruta: al método post le pasamos una función declarada
    //en /controllers/userController.js
    .post(userController.login)
    //Tambien podemos definir expresamente la función en caso de que sea necesario. Debe recibir req y res
    .get(function(req, res){
        return res.sendStatus(201)
    })
//Definimos la ruta /register y le pasamos la funcion
router.route("/register")
    .post(userController.register)

module.exports = router