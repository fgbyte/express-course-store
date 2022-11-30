import express from 'express'
// import { faker } from '@faker-js/faker'

//importando servicios
import { ProductsServices } from '../services/product.services.js';

export const productsRouter = express.Router();

//* creando instacia de servicios
const service = new ProductsServices()

//Ahora como estoy en products.router no necesito poner el '/products' sino que solo dejo el '/' y lo que le sigue a 'products"/..."' porque el endpoint ya esta especificado

//De esta forma estamos siguiendo el Simple Resposibility Priciple xq en products.router.js vamos a encontrar todos los endpoints de 'products'


//* Products Endpoints
//con los servicios incluidos
//* GET
//agregados los services
//service.find()
productsRouter.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

//service.findOne()
productsRouter.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  res.json(product)
})


//* POST
//service.create()
//los POST deben enviarse por Inomnia o Postman
productsRouter.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})

//* PUT
//debemos pasar el id
//service.update()
productsRouter.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})

//* PATCH
//debemos pasar el id
//service.update()
productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})

//* DELETE
//debemos pasar el id
//no necesitamos res del body del object, solo queremos eliminarlo
//service.delete()
productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  const rsta = service.delete(id)
  res.json(rsta)
})