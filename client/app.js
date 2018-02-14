import React from 'react';
import reactDOM from 'react-dom';
import styles from './dist/styles.css';
import axios from 'axios';
import MovieForm from './MovieForm.jsx';
import MovieList from './MovieList.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			movies: [],
			newMovie: ''
		}
		this.storeInput = this.storeInput.bind(this)
		this.addMovie = this.addMovie.bind(this)
	}

	componentDidMount(){
		axios.get('/movies')
		.then(function(response){
			this.setState({movies :response.data})
		})
		.catch((err)=>{
			console.log('err retrieving movies', err.response)
		})
	}

	storeInput(e){
    this.setState({
    	newMovie: e.target.value
    })
	}

	addMovie(){
		axios.post('/movies', {
			movie : {
				title: this.state.newMovie,
				votes : 0
			}
		})
		.then((response)=> {
			this.setState({
				newMovie: ''
			})
		})
	}

  render() {
    return ([
      <div>Hello World</div>,
      <MovieForm addMovie={this.addMovie} storeInput={this.storeInput}/>,
      <MovieList movies={this.state.movies}/>]
    )
  }
};

reactDOM.render(<App/>, document.getElementById('app'));