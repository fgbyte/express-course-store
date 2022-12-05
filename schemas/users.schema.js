import Joi from "joi";

//* validation
const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(1).max(30)
const email = Joi.string().email()
const password = Joi.string()

//* schema
//create()
export const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
})

//update()
export const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password
})

//get()
export const getUserSchema = Joi.object({
  id: id.required()
})