import express from 'express'
// import { faker } from '@faker-js/faker'
import { UsersServices } from '../services/users.services.js';

export const usersRouter = express.Router();

const service = new UsersServices()
//Ahora como estoy en products.router no necesito poner el '/products' sino que solo dejo el '/' y lo que le sigue a 'products"/..."' porque el endpoint ya esta especificado

//De esta forma estamos siguiendo el Simple Resposibility Priciple xq en products.router.js vamos a encontrar todos los endpoints de 'products'


//* Products Endpoints

//* GET
//find()
usersRouter.get('/', async (req, res) => {
  try {
    const users = await service.find()
    res.json(users)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})

//findOne()
usersRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await service.findOne(id)
    res.json(user)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})


//* POST
//create()
usersRouter.post('/', async (req, res) => {
  try {
    const body = req.body
    const newUser = await service.create(body)
    res.status(201).json(newUser)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})

//* PUT
//update()
usersRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const user = await service.update(id, body)
    res.json(user)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})

//* PATCH
//update()
usersRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params //se pasa como parametro en la navbar
    const body = req.body//es el puto body
    const user = await service.update(id, body)
    res.json(user)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})

//* DELETE
//delete()
usersRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const respuesta = await service.delete(id)
    res.json(respuesta)
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
})