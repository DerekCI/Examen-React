import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
//import Button from "react-bootstrap/Button";
import UserList from "./components/UserList";
import ItemList from "./components/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uEmail, uPhone) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          email: uEmail,
          phone: uPhone,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const handleDeleteTableRows = (index) => {
    const rows = [...usersList];
    rows.splice(index, 1);
    setUsersList(rows);
  };

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddUser onAddUser={addUserHandler} />} />
          <Route path="usuarios" element={<UserList users={usersList} handleDeleteTableRows={handleDeleteTableRows}/>} />
          <Route path="items" element={<ItemList users={usersList} handleDeleteTableRows={handleDeleteTableRows}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
      
  
  
}

export default App;
