require('dotenv').config()
require('express-async-errors')


const express = require("express")
const app = express()
const cors = require('cors')

const router = require('./routes/routes')
const notFound = require('./middleware/NotFound')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
app.use(cors())

app.use('/api/v1',router)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.port || 5000

const start = async() =>{
 try {
  app.listen(port, () => {
    console.log(`app listening on port ${port}...`)
  })
 } catch (error) {
  console.log(error)
 }
}

start ()


