//En los Servicios usamos POO (clases) para definir toda la logica y todas las interacciones a nivel transaccional que van a tener nuestros datos

//Lo debemos implementar de tal forma que el Routing no infiera en que tech se encuentren los datos, ya sea en SQL, noSQL o simplemente en Memoria

//Como andamos son DB tenemos q añadir un generador de productos Faker para poder trabajar sin datos

/*Debemos añadir funcionalidades de:
- crear -> create()
- buscar -> find()
- buscar solo un elemento -> findOne()
- editar -> update()
- borrar -> delete()
*/

//* Implementando Servicios
//traemos faker
import { faker } from "@faker-js/faker";

export class ProductsServices {
  //tada class necesita un constructor
  constructor() {
    this.products = [];//usamos un array en memoria ya que aun no contamos con DB
    this.generate()//corremos generate() en el constructor para que me cree 100 products al momento de ejecutarse
  }

  //usaremos Faker para generar productos, para ello creamos un metodo (una funcion) generadora y utilizamos el mismo codigo que genera fakers de products.router
  generate() {
    const limit = 100//usaremos 100 porducts
    for (let index = 0; index < limit; index++) {
      this.products.push({
        name: faker.commerce.product(),
        price: parseInt(faker.commerce.price(), 10),//numero en base 10 entero
        image: faker.image.imageUrl()
      })
    }
  }

  create() {

  }

  find() {
    return this.products
  }

  findOne() {

  }

  update() {

  }

  delete() {

  }

}
