import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import ModalUpdate from "./UI/ModalUpdate";
import ModalView from "./UI/ModalView";

const UserList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="text-primary">Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Button
                    className="btn btn-success"
                    onClick={() => setIsOpen(true)}
                  >
                    Actualizar
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn btn-info"
                    onClick={() => setOpen(true)}
                  >
                    Ver Usuario
                  </Button>
                </td>
                <td>
                  <Button className="btn btn-info">Items</Button>{" "}
                  <Button
                    className="btn btn-danger"
                    onClick={() => props.handleDeleteTableRows(index)}
                  >
                    X
                  </Button>
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

export default UserList;
