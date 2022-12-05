//importando express para usar los Router
import express from 'express'

//importando servicios
import { ProductsServices } from '../services/product.services.js';

//importando validadores de requests y schemas
import { validatorHandler } from '../middlewares/validator.handler.js';
import { createProductSchema, updateProductSchema, getProductSchema } from '../schemas/product.schema.js'


//exportando routers
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
productsRouter.get('/', async (req, res, next) => {
  try {
    const products = await service.find()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

//service.findOne()
productsRouter.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params//sobre este se va a ejecutar el validator
      const product = await service.findOne(id)//sobre este se va a ejecutar el service
      res.json(product)//respuesta del server
    } catch (err) {
      next(err)//procesado de errores
    }
  })


//* POST
//service.create()
//los POST deben enviarse por Inomnia o Postman
productsRouter.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newProduct = await service.create(body)
      res.status(201).json(newProduct)
    } catch (err) {
      next(err)
    }
  })

//* PUT
//debemos pasar el id
//service.update()
productsRouter.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    next(err)
  }
})

//* PATCH
//debemos pasar el id
//service.update()
productsRouter.patch('/:id',
  validatorHandler(updateProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const product = await service.update(id, body)
      res.json(product)
    } catch (error) {
      next(err)
    }
  })

//* DELETE
//debemos pasar el id
//no necesitamos res del body del object, solo queremos eliminarlo
//service.delete()
productsRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const rsta = await service.delete(id)
    res.json(rsta)
  } catch (err) {
    next(err)
  }
})