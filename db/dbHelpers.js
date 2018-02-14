var models = require('./schema.js')

function addMovie (movie) {
  return models.movies.create({
    title: movie.title,
    votes: 0
  })
  .then(()=>{
  	console.log('saved movie')
  })
  .catch((err)=>{
  	console.log('err', err)
  })
}

function getMovies() {
	return models.movies.findAll({order: ['votes' , 'DESC']})
	.then((response)=>{
		console.log('got movies')
	})
	.catch((err)=>{
		console.log('could not retrieve from db')
	})
}

module.exports.addMovie = addMovie;
module.exports.getMovies = getMovies;