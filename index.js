import express from 'express';
import { routerApi } from './routes/index.js';

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


//otras rutas en la function routerApi -> esta en routes/index.js
routerApi(app)

//* RETO
//crea nuevos paths para los endpoints y poner 'api' delante
///api/products
///api/users
///api/categories