import express from 'express'
import { faker } from '@faker-js/faker'

export const usersRouter = express.Router();

//Ahora como estoy en products.router no necesito poner el '/products' sino que solo dejo el '/' y lo que le sigue a 'products"/..."' porque el endpoint ya esta especificado

//De esta forma estamos siguiendo el Simple Resposibility Priciple xq en products.router.js vamos a encontrar todos los endpoints de 'products'


//* Products Endpoints

//* GET
usersRouter.get('/', (req, res) => {
  const users = []
  const { size } = req.query
  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
      locale: faker.random.locale()
    })
  }
  res.json(users)
})


usersRouter.get('/filter', (req, res) => {
  res.send('Soy un filter')
})

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    locale: faker.random.locale()
  })
})


//* POST
usersRouter.post('/', (req, res) => {
  //voy a enviarle con insomnia el body de un onjeto y mi endpoint lo va a asimilar y lo va a crear
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})

//* PUT
//actualizar todos los campos
//necesita ID
usersRouter.put('/:id', (req, res) => {
  const { id } = req.params //se pasa como parametro en la navbar
  const body = req.body//es el puto body
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

//* PATCH
//actualizar parcialente
//necesita ID
usersRouter.patch('/:id', (req, res) => {
  const { id } = req.params //se pasa como parametro en la navbar
  const body = req.body//es el puto body
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

//* DELETE
//elimina un objeto
//necesita ID
usersRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'deleted',
    id
  })
})