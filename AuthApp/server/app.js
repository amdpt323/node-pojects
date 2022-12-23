require('dotenv').config()
require('express-async-errors')


const express = require('express')

const app = express()



//database
const connectDB = require('./database/main')

//router
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

//middleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const authentication = require('./middleware/authenication')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('jobs api')
})  

app.use('/api/v1',authRouter)
app.use('/api/v1',authentication,jobsRouter)

app.all('*',(req,res)=>{
  res.status(404).send('Route does not exist')
})
app.use(errorHandlerMiddleware)

const port = process.env.PORT  ||5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server listening on the port ... ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
