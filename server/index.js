var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var addMovie = require('../db/dbHelpers').addMovie
var getMovies = require('../db/dbHelpers').getMovies
var app = express();
const sourceName = path.resolve(__dirname + '/../client/dist/index.html');



app.use(bodyParser.json());


app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
});

app.get('/', (req, res) => {
  res.sendFile(sourceName);
});

app.post('/movies',(req, res) => {
  return addMovie(req.body.movie)
  .then((response)=>{
  	console.log('saved movie')
  })
  .catch((err)=>{
  	console.log('err saving movie', err.response)
  })
})

app.get('/movies', (req, res)=>{
  return getMovies()
  .then((response)=>{
  	res.send(response)
  })
  .catch((err)=>{
  	console.log('failed to get', err)
  })
})


app.listen(3000, function() {
  console.log('listening on port', 3000, '...');
});