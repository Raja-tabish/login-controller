const express = require('express')
const app = express()

const port = 3000

const user_route = require('./router/products')
const products_route =require ('./router/products')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//API ROUTES
app.use('/api',user_route);
app.use('/api',products_route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})