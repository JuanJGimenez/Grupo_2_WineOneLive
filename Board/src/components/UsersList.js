import React, { useState, useEffect } from 'react';
import UsersChartRow from './UsersChartRow';

const Users = () => {

    const [usuarios, setUsers] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3000/api/users')
        const users = await data.json()
        setUsers(users.users)
    }

    return (
        /* <!-- DataTales Example --> */
        <div className='card shadow mb-4'>
              <div className='card-header py-3'>
                    <h5 className='text-center m-0 font-weight-bold text-gray-800'>Listado de usuarios:</h5>
                </div>
            <div className='card-body'>
                <div className='table-responsive'>
                    <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Mail</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                usuarios.map((row, i) => {
                                    return <UsersChartRow {...row} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Users;