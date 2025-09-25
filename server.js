const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(8000, () => console.log("Server Listening on port 8000"))