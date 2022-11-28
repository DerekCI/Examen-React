import React, { useState } from "react";
import styles from "./Modal.module.css";

import Table from "react-bootstrap/Table";

const ModalView = ({ setIsOpen }) => {
  const [items, setItems] = useState([]);
  

  //get items
  const handleGetItems = (userId) => {
    fetch('https://localhost:7292/api/Inventory/GetByUser?userId=1', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setItems(result));
  };

  handleGetItems()
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal2}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Items del usuario</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div>
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
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className="btn btn-danger"
                onClick={() => setIsOpen(false)}
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalView;
