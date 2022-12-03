//Middleware validadore de Schemas

//Los schemas se producen de "forma dinamica" por eso necesitamos obtener primeramete los esquemas y propiedades para retornar el Middleware como tal


//usamos boom para tratar los errores
import { badRequest, Boom } from "@hapi/boom"

//so, este codigo esta complejo
//Usamos la prop de Closures de JS
//es una function que retorna otra function
//esto nos permite crear nuestro Middleware de forma dinamica
export function validatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data)
    if (error) {
      console.log('joiHandler😼')
      next(new Boom(badRequest(error)))
    }
    next()
  }
}