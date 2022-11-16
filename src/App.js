import React, {useState} from "react";
import "./App.css";
import AddUser from "./components/AddUser";
//import Button from "react-bootstrap/Button";
import UserList from "./components/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uEmail, uPhone) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, email: uEmail, phone: uPhone,id: Math.random().toString() },
      ];
    });
  };
  const handleDeleteTableRows = (index)=>{
    const rows = [...usersList];
    rows.splice(index, 1);
    setUsersList(rows);
  }

  return(
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} handleDeleteTableRows={handleDeleteTableRows}/>;
    </>
  ) 
}

export default App;
