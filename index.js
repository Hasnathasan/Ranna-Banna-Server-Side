const express = require('express')
const app = express()
const port = 3000;
const chefs = require('./data/chef.json')
const deserts = require('./data/desert.json')

const cors = require('cors')


app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.get('/chefs', (req, res) => {
  res.send(chefs);
})



app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const chef = chefs.find(chef => chef._id == id);
  res.send(chef);
})

app.get('/deserts', (req, res) => {
  res.send(deserts)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})