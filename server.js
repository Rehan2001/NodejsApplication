const express = require('express')
const app = express()
const { PORT = 3000 } = process.env

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Sample app listening on PORT ${PORT}`)
})