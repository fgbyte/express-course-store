import express from 'express'
// import { faker } from '@faker-js/faker'

//importando servicios
import { ProductsServices } from '../services/product.services';

export const productsRouter = express.Router();
//creando instacia del servicio
const service = new ProductsServices()

//Ahora como estoy en products.router no necesito poner el '/products' sino que solo dejo el '/' y lo que le sigue a 'products"/..."' porque el endpoint ya esta especificado

//De esta forma estamos siguiendo el Simple Resposibility Priciple xq en products.router.js vamos a encontrar todos los endpoints de 'products'


//* Products Endpoints

//* GET
productsRouter.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10

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


productsRouter.get('/filter', (req, res) => {
  res.send('Soy un filter')
})

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params
  //poninedo un id en 404
  if (id === '999') {//-> todos los parametros enviados por GET los recive como 'string'
    res.status(404).json({
      message: 'not found'
    })
  }else {
    res.status(200).json({
      id,
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
})


//* POST
//los POST deben enviarse por Inomnia o Postman
productsRouter.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'created',
    data: body
  })
})

//* PATCH
//debemos pasar el id
productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'update',
    data: body,
    id
  })
})

//* DELETE
//debemos pasar el id
//no necesitamos res del body del object, solo queremos eliminarlo
productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})