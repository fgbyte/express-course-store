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
  async generate() {
    const limit = 100//usaremos 100 porducts
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: parseInt(faker.commerce.price(), 10),//numero en base 10 entero
        image: faker.image.imageUrl()
      })
    }
  }

  async create(data) {
      const newProduct = {
        //el id ramdom generado x faker
        id: faker.datatype.uuid(),
        //los otros datos los genera un client frontend y viene en 'data'
        ...data//esto me genera un merge de los datos de 'data' con el 'id'
      }
      this.products.push(newProduct)//mando el newProduct para el array products
      return newProduct//para verlo pues, cuando se ejecute el metodo
  }

  async find() {
    const name = this.getTotal()//err forzado para probar Middleware Error
    return this.products
  }

  async findOne(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {//si no lo encuentra JS retorna -1
      throw new Error('product not found')
    }
    return this.products[index]
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {//si no lo encuentra JS retorna -1
      throw new Error('product not found')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }//mergea los changes en el producto indexado
    return this.products[index]//muestame el objeto modificado
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('product not found')
    }
    this.products.splice(index, 1)// eliminar '1' item a partir de 'index'(osea q se elimine el mismo)
    return { id }
  }

}
