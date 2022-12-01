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
productsRouter.get('/', async (req, res) => {
  try {
    const products = await service.find()
    res.json(products)
  } catch (err) {
    res.json({
      message: err.message
    })
  }
})

//service.findOne()
productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const product = await service.findOne(id)
    res.json(product)
  } catch(err) {
    res.json({
      message: err.message
    })
  }
})


//* POST
//service.create()
//los POST deben enviarse por Inomnia o Postman
productsRouter.post('/', async (req, res) => {
  try {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
  } catch (err) {
    res.json({
      message: err.message
    })
  }
})

//* PUT
//debemos pasar el id
//service.update()
productsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

//* PATCH
//debemos pasar el id
//service.update()
productsRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

//* DELETE
//debemos pasar el id
//no necesitamos res del body del object, solo queremos eliminarlo
//service.delete()
productsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const rsta = await service.delete(id)
    res.json(rsta)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})