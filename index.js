//express es el framework que crea el servidor y nos permite definir rutas
const express = require("express");
//importamos las rutas que definimos en el archivo /routers/userRouter.js
const router = require("./routers/userRouter");
//iniciamos una instancia del servidor express
const app = express();

//Modulo de express para poder tratar el json que recibimos en el cuerpo de la peticion
const bodyParser = require("body-parser")

//Le decimos a express que use el modulo que acabamos de cargar
app.use(bodyParser.json())
//Le decimos a express que use las rutas que hemos definido, revisar ese fichero para entender como funciona
app.use(router)

//Le decimos al servidor que escuche en el puerto 4000 e imprima un mensaje por pantalla
app.listen(4000, () => {
 console.log("El servidor está inicializado en el puerto 4000");
});