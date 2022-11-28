import express from 'express'
import { faker } from '@faker-js/faker'

export const router = express.Router();

//Ahora como estoy en products.router no necesito poner el '/products' sino que solo dejo el '/' y lo que le sigue a 'products"/..."' porque el endpoint ya esta especificado

//De esta forma estamos siguiendo el Simple Resposibility Priciple xq en products.router.js vamos a encontrar todos los endpoints de 'products'


//* Products Endpoints
router.get('/', (req, res) => {
  const categories = []
  const { size } = req.query
  const limit = size || 10

  for (let index = 0; index < limit; index++) {
    categories.push({
      name: faker.name(),
      price: parseInt(faker.commerce.price(), 10),//numero en base 10 entero
      image: faker.image.imageUrl()
    })
  }
  //respuesta
  res.json(categories)
})


router.get('/filter', (req, res) => {
  res.send('Soy un filter')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: faker.commerce.product(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl()
  })
})
