import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from "react-bootstrap/Container";

const AddUser = (props) => {
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const typeInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("click");
    const enteredId = parseInt(idInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredType = parseInt(typeInputRef.current.value);
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    props.handleAddUser(
      enteredId,
      enteredName,
      enteredType,
      enteredEmail,
      enteredPhone
    );
    idInputRef.current.value = "";
    nameInputRef.current.value = "";
    typeInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneInputRef.current.value = "";
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="form.Id">
            <Form.Label>ID usuario</Form.Label>
            <Form.Control
              type="number"
              ref={idInputRef}
              placeholder="ID del usuario"
            />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              ref={nameInputRef}
              placeholder="Ingresa un nombre"
            />
          </Form.Group>
          <p></p>
          <span>Tipo de usuario</span>
          <p></p>
          <FloatingLabel controlId="floatingSelect" label="Tipo de usuario">
            <Form.Select aria-label="Tipo de usuario" ref={typeInputRef}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Form.Select>
          </FloatingLabel>
          <p></p>
          <Form.Group controlId="form.Email">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="text"
              ref={emailInputRef}
              placeholder="Ingresa un correo"
            />
          </Form.Group>
          <Form.Group controlId="form.Phone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              ref={phoneInputRef}
              placeholder="Ingresa un numero de telefono"
            />
          </Form.Group>
          <p></p>
          <Button onClick={addUserHandler}>Agregar usuario</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddUser;
