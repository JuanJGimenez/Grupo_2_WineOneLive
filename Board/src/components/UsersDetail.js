import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function UsersDetail() {

    const { id } = useParams()

    const [usuario, setProducts] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {

        const data = await fetch(`http://localhost:3000/api/users/${id}`)
        const users = await data.json()

        setProducts(users)

    }

    function isAdmin() {
        if (usuario.admin === 1) {
            return "Usuario ADMIN"
        } else {
            return "Usuario sin privilegios"
        }
    }

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center">{usuario.user_last_name} {usuario.user_first_name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <div> {isAdmin()} </div>
                        <img className="img-thumbnail img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 8 + 'rem' }} src={usuario.image} alt="imagen usuario" />
                    </div>
                    <div className='text-center'>ID: {usuario.user_id}</div>
                    <div className='text-center'>Email: {usuario.user_email}</div>
                    <div className='text-center'>_____________________________________</div>
                    <div className='text-center'>
                    <a className="btn btn-danger" rel="nofollow" href={`/users/delete/${usuario.user_id}`}>Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersDetail;