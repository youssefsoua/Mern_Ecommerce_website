import express from 'express'
import cors from 'cors'
import ConnectDB from './db.js'
import config from './configs/index.js'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
const app = express()
ConnectDB(config.dbUrl)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRoute)
app.use('/api/user', userRoute)
app.get('/', (req, res) => res.send(`server started at port ${config.port}`))

app.listen(config.port, () =>
  console.log(`server started at port ${config.port}`)
)
