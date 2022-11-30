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
usersRouter.get('/', (req, res) => {
  const users = service.find()
  res.json(users)
})

//findOne()
usersRouter.get('/:id', (req, res) => {
  const { id } = req.params
  const user = service.findOne(id)
  res.json(user)
})

//filter
// usersRouter.get('/filter', (req, res) => {
//   res.send('Soy un filter')
// })



//* POST
//create()
usersRouter.post('/', (req, res) => {
  const body = req.body
  const newUser = service.create(body)
  res.status(201).json(newUser)
})

//* PUT
//update()
usersRouter.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const user = service.update(id, body)
  res.json(user)
})

//* PATCH
//update()
usersRouter.patch('/:id', (req, res) => {
  const { id } = req.params //se pasa como parametro en la navbar
  const body = req.body//es el puto body
  const user = service.update(id, body)
  res.json(user)
})

//* DELETE
//delete()
usersRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  const respuesta = service.delete(id)
  res.json(respuesta)
})