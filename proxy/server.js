const express = require('express')
const axios = require('axios')

var app = express()
app.use('/', express.static('/Users/harjap/Desktop/fec/menu-proxy/proxy/public/'))
app.use('/restaurant/:id', express.static('/Users/harjap/Desktop/fec/menu-proxy/proxy/public/'))


app.get('/api/restaurants/:id/reviews', (req, res) => {
  var id = JSON.parse(req.params.id)
  axios.get(`http://localhost:3004/api/restaurants/${id}/reviews`).then((response) => res.json(response.data)).catch(function (error) {
    console.log(error);
  })
})
app.get('/api/restaurants/:id/filters', (req, res) => {
  var id = JSON.parse(req.params.id)
  axios.get(`http://localhost:3004/api/restaurants/${id}/filters`).then((response) => res.json(response.data)).catch(function (error) {
    console.log(error);
  })
})
app.get('/api/restaurant/:id', (req, res) => {
  var id = JSON.parse(req.params.id)
  axios.get(`http://localhost:3001/api/restaurant/${id}`).then((response) => res.json(response.data)).catch(function (error) {
    console.log(error);
  })
})
app.listen(3008, () => console.log('listening on the port 3008'))

