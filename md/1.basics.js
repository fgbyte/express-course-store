//Llamamos a express
import express from 'express';

//app = express ejecutado
const app = express();

//nuestro puerto
const port = 3002;

//? app.listen
//que escuche en el puerto $port
app.listen(port, () => {
  console.log('Mi port ' + port)//eslint me hace warn del console.log para que no se vaya a produccion
})
//si ejecutamos `yarn dev` me arranca nodemon -> 'My port $port'
//si vamos a localhost:$port -> 'Hola mi server en express'

//De esta forma estamos corriendo una app del lado del Backend con Express 🙂


//* Creando Endpoints 😼
//express dame un request o un response en la ruta '/' = 'localhost:3000/'
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
  //en caso de res enviame 'string'
})



//* Creando rutas (endpoints)
app.get('/nueva-ruta', (req, res) => {
  res.send('Soy un nuevo endpoint');
})

// ruta /products me devuelve un json
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
//   //!en caso de res enviame 'json'
})
//* La finalidad de esto es hacer una API por lo que necesitamos obtener jsons en las responses

//Endpoint especifico antes que el dinamico que le sigue
app.get('/products/filter', (req, res) => {
  res.send('Soy un filter')
})

//* Creando el endpoint Dinamico de product/:id
//en este caso (como no tenemos DB) el id es generado segun la request(req)
//lo q pongamos en la barra de busqueda como id va a ser el id
app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 200
  })
})

//* Creando el endpoint categories/:catId/products/:prodID
//que de una categoria especifica me de ciertos productos especificos
app.get('/categories/:catId/products/:prodId', (req, res) => {
  const { catId, prodId } = req.params
  res.json({
    catId,
    prodId,
  })
})

//* Reto:
//Crea los endpoints GET para array de products, users, people



app.get('/users/people/:id/', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Federico',
    email: 'federico@gmail.com'
  })
})

//* Recogiendo Query Params
//como los parametros 'son opcionales' no vienen en nuestra ruta, sino que forman parate del request
//estos en ves de 'params' son 'querys'
//vamos a recojer los query params 'limit' y 'offset'

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  //como son opcionales tengo q hacer una validacion
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
})
//para ello deberiamos pasar por la barra:
//http://localhost:3002/users?limit=__&offset=__

//? Faker -> falsa DB
//Para generar data fake para usar en nuestra API
//yarn add -D @faker-js/faker
//para usarlo hay q tener el type en module y usar import
//tener cuidado con el eslinter que puede banear el import

import { faker } from '@faker-js/faker';

app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10

  //generar limit cantidad de productos fakes(si se lo especificamos) OR' genera solo 10 por defecto
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),//numero en base 10 entero
      image: faker.image.imageUrl()
    })
  }
//respuesta
  res.json(products)
})
//para generar un limit debemos poner:
//localhost:port/products?size=__


//! Error comun que se comete con routing en Express
// app.get('/products/filter', (req, res) => {
//   res.send('Soy un filter')
// })
/* me devuelve un
{
  "id": "filter",
  "name": "Product 2",
  "price": 200
}
*///no va al routing esperado sino que lo está tomando com un ID
//! Y ocurre porque ya existe el Routing 'products/:id'

//* COMO lo solucionamos?
// Todo lo que sea 'especifico' debe ir ANTES de lo que es 'dinamico'
//por tanto colocamos la funcion routing especifica antes de declarar la dinamica 'products/:id'