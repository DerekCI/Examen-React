import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const AddUser = (props) => {
  
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
   
    props.onAddUser(enteredName, enteredEmail, enteredPhone);
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
  };

  return (
    <>
        <Container>
              <Form onSubmit={addUserHandler}>
                <Form.Group controlId="form.Name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text"  ref={nameInputRef} placeholder="Ingresa un nombre" />
                </Form.Group>
                <Form.Group controlId="form.Email">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="text" ref={emailInputRef} placeholder="Ingresa un correo" />
                </Form.Group>
                <Form.Group controlId="form.Phone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" ref={phoneInputRef} placeholder="Ingresa un numero de telefono"/>
                </Form.Group>
                <Button type="submit">Agregar usuario</Button>
              </Form>
            </Container>
    </>
  );
};

export default AddUser;