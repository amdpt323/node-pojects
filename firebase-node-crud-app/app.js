const express = require('express')
const cors = require('cors')

const app = express()
const postRouter = require('./routes/route')
const authRouter = require('./routes/auth')

const authMiddleware = require('./middleware/authentication')

app.use(express.json())
app.use(cors())

app.use('/posts',authMiddleware,postRouter);
app.use('/auth',authRouter)

const port = 5000 || process.env.PORT

app.listen(port, () => {
  console.log(`app listening on the port ${port}`)
})
