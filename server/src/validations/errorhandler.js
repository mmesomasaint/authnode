const handleDuplicateError = (err, res) => {
  const field = Object.keys(err.keyValue),
    code = 409,
    error = `${field} already taken`,
    errObj = {}
  errObj[field] = error

  res.status(code).send(errObj)
}

const handleValidationError = (err, res) => {
  const errors = Object.values(err.errors).map((el) => el.message),
    fields = Object.values(err.errors).map((el) => el.path),
    code = 400,
    errObj = {}

  for (let i = 0; i < errors.length && i < fields.length; i++) {
    errObj[fields[i]] = errors[i]
  }

  res.status(code).send(errObj)
}

const handleOtherErrors = (err, res) => {
  const errObj = {}
  errObj[err.cause] = err.message
  res.status(400).send(errObj)
}

const errorHandler = (err, req, res, next) => {
  try {
    console.log("congrats you've hit the error middleware")
    console.log(err)
    const otherErrors = [
      'email',
      'password',
      'notLoggedIn'
    ]

    if (err.name === 'ValidationError') handleValidationError(err, res)
    if (err.code && err.code == 11000) handleDuplicateError(err, res)
    if (otherErrors.includes(err.cause)) handleOtherErrors(err, res)
  } catch (error) {
    res.status(500).send('An unknown error occured')
  }
}

export default errorHandler
