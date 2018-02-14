import React from 'react';
import {Table} from 'react-bootstrap';

var Movie = (props) => {
  return (
    <tr>
      <td>{props.movie.title}</td>
      <td>{props.movie.votes}</td>
    </tr>
  )
}

export default Movie