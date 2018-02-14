import React from 'react';
import {Table} from 'react-bootstrap';
import Movie from './Movie.jsx';

var MovieList = (props) => {
	const movies = props.movies.map(movie => <Movie movie={movie}/>)
  return ([
  	<h1>Movies</h1>,
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
      {movies}
      </tbody>
    </Table>
  ])
}

export default MovieList