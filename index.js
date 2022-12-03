import express from 'express';
import { routerApi } from './routes/index.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js'
import cors from 'cors'


//lanzando server
const app = express();
const port = 3002;
app.listen(port, () => {
  console.log('Mi port ' + port)
})

//implementando cors
const whitelist = [
  'http://localhost:8080',
  'http://localhost:9000',
  'https://juniorpool.vercel.app'
]

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('not alowed origin'))
    }
  }
}
app.use(cors(options))

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