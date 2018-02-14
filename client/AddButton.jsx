import React from 'react';
import {Button} from 'react-bootstrap';

var AddButton = (props) => {
  return(
    <Button onClick={props.addMovie}>Add Movie</Button>
  )
}

export default AddButton