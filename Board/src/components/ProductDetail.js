import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'



function ProductDetail() {

    const {id} = useParams() 

    const [productos, setProducts] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`http://localhost:3000/api/products/${id}`)
        const products = await data.json()

        setProducts(products)
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center">{productos.product_name} ({productos.quantity_stock})</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-thumbnail img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 8 + 'rem' }} src={productos.image} alt="imagen producto" />
                    </div>
                    <div className='text-center'>Categoria: </div>
                    <div className='text-center'>Precio:  {productos.price}</div>
                    <div>Descripción: {productos.product_description}</div>
                    <div className='text-center'>_____________________________________</div>
                    <div className='text-center'>
                    <a className="btn btn-danger" rel="nofollow" href={`/products/delete/${productos.product_id}`}>Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;