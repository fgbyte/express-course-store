//aqui crearemos los Middlewares Errors que vamos a pasar de forma global al codigo
//esto tambien nos permite unir a sistemas de traking

//sintaxis Middleware tipo Error
//incluyen el paramtero 'err' y 'next'
export function logErrors(err, req, res, next) {
  //console.log('logErrors')
  console.error(err)
  next(err)
}

export function errorHandler(err, req, res, next) {
  console.log('errorHandler😼')
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

//Boom Error Handler
export function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    console.log('boomErrorHandler😼')
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}
