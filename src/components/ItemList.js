import React, { useState} from "react";
import Table from "react-bootstrap/Table";
import ModalUpdate from "./UI/ModalUpdate";
import ModalView from "./UI/ModalView";

const ItemList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([]);

  //Get all items from DB
  const handleGetItems = () => {
    fetch("https://localhost:7292/api/Inventory/GetAllItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setItems(result));
  };
  handleGetItems();
  

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="text-primary">Nombre</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.userId}</td>
                <td>
                  <button
                    className="btn btn-primary" 
                    onClick={() => setIsOpen(true)}
                  >
                    Actualizar
                  </button>{" "}
                  {"   "}
                  <button
                    className="btn btn-danger"
                    onClick={() => setOpen(true)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {isOpen && <ModalUpdate setIsOpen={setIsOpen} />}
      {open && <ModalView setIsOpen={setOpen} />}
    </>
  );
};

export default ItemList;
