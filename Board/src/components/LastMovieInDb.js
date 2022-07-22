import React, { useState, useEffect } from 'react';

function LastMovieInDb() {

    const [productos, setProducts] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3000/api/products')
        const products = await data.json()
        let i = products.count - 1
        setProducts(products.products[i])
    }
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <p>{productos.product_name}</p>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 8 + 'rem' }} src={productos.image} alt="imagen producto" />
                    </div>
                    <div className='text-center'>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
