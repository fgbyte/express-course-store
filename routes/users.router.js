import express from 'express'
import { faker } from '@faker-js/faker'

export const usersRouter = express.Router();

//Ahora como estoy en products.router no necesito poner el '/products' sino que solo dejo el '/' y lo que le sigue a 'products"/..."' porque el endpoint ya esta especificado

//De esta forma estamos siguiendo el Simple Resposibility Priciple xq en products.router.js vamos a encontrar todos los endpoints de 'products'


//* Products Endpoints
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
