import React from 'react';

function ProductsChartRows(props) {
    return (
        <tr>
            <td><img className=' img-fluid width:5px ' src={props.image} alt="imagen producto" /></td>
            <td>{props.product_id}</td>
            <td>{props.product_name}</td>
            <td>{props.price}</td>
            <td>{props.quantity_stock}</td>
            <td>{props.categories.category_name}</td>

        </tr>
    )
}

export default ProductsChartRows;