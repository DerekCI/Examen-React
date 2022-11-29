import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import AddItem from "./AddItem";
import ModalUpdateItem from "./UI/ModalUpdateItem";
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
  useEffect(() => {
    handleGetItems();
  }, []);

  const handleAddItem = async (
    uId,
    uName,
    uDescription,
    uQuantity,
    uUserid
  ) => {
    let newItem = {
      itemId: uId,
      name: uName,
      description: uDescription,
      quantity: uQuantity,
      userId: uUserid,
    };
    await fetch("https://localhost:7292/api/Inventory/AddItem", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newItem), // body data type must match "Content-Type" header
    });
    handleGetItems();
  };
  const handleDeleteItem = async (index) => {
    await fetch("https://localhost:7292/api/Inventory/DeleteItem?id=" + index, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleGetItems();
  };

  return (
    <>
      <AddItem handleAddItem={handleAddItem} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="text-primary">Nombre</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>User ID</th>
            <th>Accion</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.itemId}</td>
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
                  <button className="btn btn-info">Intercambiar</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteItem(parseInt(item.itemId))}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {isOpen && <ModalUpdateItem setIsOpen={setIsOpen} />}
      {open && <ModalView setIsOpen={setOpen} />}
    </>
  );
};

export default ItemList;
