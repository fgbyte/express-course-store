//En este archivo se van a configurar los routers
import express from "express";
import { productsRouter } from "./products.router.js";
import { usersRouter } from "./users.router.js";

// import { router } from

export function routerApi(app) {
  //* Generando Rutas por las Versiones de la API *//
  const routerV1 = express.Router()
  app.use('/api/v1', routerV1, (req, res) => {
    res.send('Hola v1')
  })
  routerV1.use('/products', productsRouter)
  routerV1.use('/users', usersRouter)

  //si quiero poner routers para la v2
  //solamente creo otra const routerV2 y genero la ruta
  const routerV2 = express.Router()
  app.use('/api/v2', routerV2, (req, res) => {
    res.send('Hola v2')
  })
}


