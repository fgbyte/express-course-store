import { faker } from "@faker-js/faker";
import { Boom, notFound } from "@hapi/boom";

export class UsersServices {

  constructor() {
    this.users = []
    this.generate()
  }

  async generate() {
    const limit = 50//voy a usar 50 users
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        locale: faker.random.locale()
      })
    }
  }

  async create(data) {
    //no requiere id, pero si la data
    const newUser = {//nuevo objeto
      id: faker.datatype.uuid(),//crea id fake
      ...data//mergea data
    }
    this.users.push(newUser)//agregalo al array users
    return newUser//muestramelo pa verlo
  }

  async find() {
    return this.users//muestrame el array users
  }

  async findOne(id) {
    //buscar si el id esta indexado en users
    const user = this.users.find(item => item.id === id)
    if (!user) {//si no lo encuentra JS retorna -1
      throw new Boom(notFound('missing user'))
    }
    return user//si existe muestrame el user
  }

  async update(id, changes) {
    //buscar si el id esta indexado
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Boom(notFound('missing user'))
    }
    //de estarlo agregarle los cambios
    const user = this.users[index];
    this.users[index] = {
      ...user,//mi usuario indexado
      ...changes//mergea los cambios que haya
    }
    return this.users[index]
  }

  async delete(id) {
     //buscar si el id esta indexado
     const index = this.users.findIndex(item => item.id === id)
     if (index === -1) {
       throw new Boom(notFound('missing user'))
     }
     //de estarlo eliminarlo con splice
     this.users.splice(index, 1)
     return { id }
  }
}