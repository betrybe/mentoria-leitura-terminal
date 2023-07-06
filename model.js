class newError extends Error {
  constructor(message) {
    super(message)
  }
}

const model = (arg) => {
  if (!arg) {
    throw new Error('missing argument')
  }


  throw new newError('argument must be undefined')
}

module.exports = model