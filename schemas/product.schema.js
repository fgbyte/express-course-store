//importar Joi
import Joi from "joi"

//* Validacion
//id -> de tipo uuid
const id = Joi.string().uuid()

//name -> string alfanumerico entre 3 y 15 caracteres
const name = Joi.string().alphanum().min(3).max(15)

//price -> numero entero mayor que 10
const price = Joi.number().integer().min(10)

//* Schemas
//create()
export const createProductSchema = Joi.object({
  name: name.required(),//requerido para la creacion
  price: price.required()//requerido para la creacion
  //!id se genera auto, no lo ponemos
})

//update()
export const updateProductSchema = Joi.object({
  name: name,
  price: price
  //no son requeridos para update
})

//get()
export const getProductSchema = Joi.object({
  id: id.required()
})