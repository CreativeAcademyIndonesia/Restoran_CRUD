require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const menuRoute = require('./src/routes/menuRoute')
app.use(express.json())
app.get('/', (req, res)=>{
  res.status(200).json({
    message : "Selamat datang di Basic API Menggunakan Node js"
  })
})
app.use('/menu', menuRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
