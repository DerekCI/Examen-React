import React from "react";
import "./App.css";
//import Button from "react-bootstrap/Button";
import UserList from "./components/UserList";
import ItemList from "./components/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="adduser" element={<AddUser/> } /> */}
          <Route path="usuarios" element={<UserList/>} />
          <Route path="items" element={<ItemList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
      
  
  
}

export default App;
