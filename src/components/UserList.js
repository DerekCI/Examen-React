import React, { useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import ModalUpdate from "./UI/ModalUpdate";
import ModalView from "./UI/ModalView";
import AddUser from "./AddUser";

const UserList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [users, setUsers] = useState([]);

  const [user,setUser] = useState({
    userId: 0,
    userName: "",
    userType: 0,
    email: "",
    phone: ""
  });
  

  //Get all users from DB
  const handleGetUsers = () => {
    fetch("https://localhost:7292/api/User/GetUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setUsers(result));
  };

  useEffect(() => {
    handleGetUsers();
  }, [])

  const handleUpdateUser = async () =>{
    
    await fetch('https://localhost:7292/api/User/UpdateUser', {
        method: 'PUT',
        headers:{
            'Conent-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    handleGetUsers();
  }

  const handleAddUser = async (uId, uName, uType, uEmail, uPhone) => {
    let newUser = {
      userId: uId,
      name: uName,
      userType: uType,
      email: uEmail,
      phone: uPhone
    }
    await fetch('https://localhost:7292/api/User/AddUser', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newUser) // body data type must match "Content-Type" header
    });
    handleGetUsers();
  }

  const handleDeleteUser = async (index) => {
    
    await fetch('https://localhost:7292/api/User/DeleteUser?id='+ index, {
      method: 'DELETE',  
      headers: {
        'Content-Type': 'application/json'
      },   
    });
    handleGetUsers();
  };
  

  return (
    <>
      <AddUser handleAddUser={handleAddUser}/>
      <p></p>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="text-primary">Nombre</th>
            <th>Tipo de usuario</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Accion</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.userType}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-primary" 
                    onClick={() => setIsOpen(true)}
                  >
                    Actualizar
                  </button>{" "}
                  {"   "}
                  <button
                    className="btn btn-info" 
                    onClick={() => setOpen(true)}
                  >
                    Ver items
                  </button>
                  {open && <ModalView setIsOpen={setOpen} user={parseInt(user.userId)}/>}
                </td>
                <td><button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(parseInt(user.userId))}
                  >
                    X
                  </button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {isOpen && <ModalUpdate setIsOpen={setIsOpen} handleUpdateUser={handleUpdateUser}/>}
      {open && <ModalView setIsOpen={setOpen}/>}
    </>
  );
};

export default UserList;
