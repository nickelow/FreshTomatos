import React from 'react';
import {FormControl} from 'react-bootstrap';
import AddButton from './AddButton.jsx'

var MovieForm = (props) => {
  return ([
    <FormControl type="text" onChange={props.storeInput} placeholder="Add a movie!"/>,
    <AddButton addMovie={props.addMovie}/>
    ]
  )
}

export default MovieForm;