const model = require('./model')

const handle = () => {
  try {
    model()
  } catch (error) {
    console.log(error)
  }
} 

handle()