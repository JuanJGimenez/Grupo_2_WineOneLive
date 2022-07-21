import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';

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
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
                                    return <ChartRow {...row} key={i} />
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