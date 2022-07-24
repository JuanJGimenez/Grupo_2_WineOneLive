import React, { useState, useEffect } from 'react';
import ProductsChartRows from './ProductsChartRows';

const ProductsList = () => {

    const [productos, setProducts] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:3000/api/products')
        const products = await data.json()
        setProducts(products.products)
    }

    return (

        /* <!-- DataTales Example --> */
        <div className='card shadow mb-4'>
            <div className='card-body'>
                <div className='table-responsive'>
                    <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                productos.map((row, i) => {
                                    return <ProductsChartRows {...row} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ProductsList;