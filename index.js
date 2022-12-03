import express from 'express';
import { routerApi } from './routes/index.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js'


//lanzando server
const app = express();
const port = 3002;
app.listen(port, () => {
  console.log('Mi port ' + port)
})


//root del server
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

//Middlerware para recibir info tipo json que nos envien por POST
app.use(express.json())

//otras rutas en la function routerApi -> esta en routes/index.js
//!esto se pone al fondo para que no cause interferencias
routerApi(app)

//Implementando los Middlewares
//en el orden que los pongamos va a ser en el que se ejecuten uno tras del otro
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)