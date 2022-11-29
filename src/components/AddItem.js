import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const AddItem = (props) => {
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const quantityInputRef = useRef();
  const useridInputRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();
    const enteredId = parseInt(idInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuantity = parseInt(quantityInputRef.current.value);
    const enteredUserid =  parseInt(useridInputRef.current.value);

    props.handleAddItem(
      enteredId,
      enteredName,
      enteredDescription,
      enteredQuantity,
      enteredUserid
    );
    idInputRef.current.value = "";
    nameInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    quantityInputRef.current.value = "";
    useridInputRef.current.value = "";
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="form.Id">
            <Form.Label>ID Item</Form.Label>
            <Form.Control
              type="number"
              ref={idInputRef}
              placeholder="ID del item"
            />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              ref={nameInputRef}
              placeholder="Nombre del item"
            />
          </Form.Group>
          <p></p>
          <Form.Group controlId="form.Description">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              ref={descriptionInputRef}
              placeholder="Descripcion del item"
            />
          </Form.Group>
          <Form.Group controlId="form.Quantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              ref={quantityInputRef}
              placeholder="Ingresa la cantidad"
            />
          </Form.Group>
          <Form.Group controlId="form.Userid">
            <Form.Label>UserID</Form.Label>
            <Form.Control
              type="text"
              ref={useridInputRef}
              placeholder="ID del usuario que pertenece"
            />
          </Form.Group>
          <p></p>
          <Button onClick={addItemHandler}>Agregar usuario</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddItem;
