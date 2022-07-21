import React, { useState, useEffect } from 'react';
import usuariosCard from './usuariosCard';

const Users = () => {

    const [usuarios, setUsers] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3000/api/users')
        const users = await data.json()
        setUsers(users)
    }

    return (
        <div>
            <h1>hola</h1>
            <ul>
                
                {
                    usuarios.users.map(item => 
                        <li > {item.detail}</li>

                    )
                }
                    
                    
            </ul>
           
        </div>
    )
}

export default Users;