

import React from 'react'
import {useState} from "react"
import { Button, Form, Modal } from "react-bootstrap";

function MovieAdd({Movies,setMovie}) {
  const [show, setShow] = useState(false);

  /* [USEstate]]NEW MOVIES ADD */
const [newMovie, setNewMovie] = useState({
  title:""
,
posterUrl:""
,
description:"",
rate:"",


});
const handleAdd=()=>{setMovie([...Movies,newMovie]);handleClose()}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
click here to add Movies      </Button>

      <Modal show={show} onchange={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="text" placeholder="Movie Name" onChange={(e)=>setNewMovie({...newMovie,title:e.target.value})} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Image Url</Form.Label>
    <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setNewMovie({...newMovie,posterUrl:e.target.value})}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description"onChange={(e)=>setNewMovie({...newMovie,description:e.target.value})} />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>rating</Form.Label>
    <Form.Control type="text" placeholder="rating" onChange={(e)=>setNewMovie({...newMovie,rate:e.target.value})}/>
   
  </Form.Group>



</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  );
}

export default MovieAdd