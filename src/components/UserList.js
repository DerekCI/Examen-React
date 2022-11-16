import React, {useState} from "react";
import Table from 'react-bootstrap/Table';

import Button from "react-bootstrap/Button";
import ModalUpdate from './UI/ModalUpdate'
import ModalView from './UI/ModalView'

const UserList = (props) =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        
        <Table>
            <thead>
                <tr>
                    <th className="text-primary">Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                props.users.map((user, index) => {
                    return (<tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><Button className="btn btn-success" onClick={() => setIsOpen(true)}>Actualizar</Button></td>
                        <td><Button className="btn btn-info" onClick={() => setIsOpen(true)}>Ver</Button></td>
                        <td><Button className="btn btn-danger" onClick={() => props.handleDeleteTableRows(index)}>X</Button></td>
                    </tr>)
                })
            }
            </tbody>
        </Table>
        {isOpen && <ModalView setIsOpen={setIsOpen} users={props.users}/>}
        {isOpen && <ModalUpdate setIsOpen={setIsOpen} />}
        </>
    )
}

export default UserList;