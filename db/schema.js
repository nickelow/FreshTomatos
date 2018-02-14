var Sequelize = require('sequelize');
var env = 'development'
var config = require('../config.json')[env]

var models = {
  sequelize: new Sequelize(config.database, config.username, config.password, config)
}

var Movies = models.sequelize.define('movies', {
  id: {
  	type: Sequelize.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true
  },
  title: {
  	type: Sequelize.STRING
  },
  votes : {
  	type:Sequelize.INTEGER
  }
})

models.movies = Movies;

models.sequelize.sync().then(()=>{
	console.log('connected to database')
})
.catch((err)=>{
	console.log('err', err)
})

module.exports = models;