import React from 'react';
import { Link } from 'react-router-dom';

function ProductsChartRows(props) {
    return (
        <tr>
            <td><Link to={`/products/${props.product_id}`}>Detalle</Link></td>
            <td>{props.product_id}</td>
            <td>{props.product_name}</td>
            <td>{props.price}</td>
            <td>{props.quantity_stock}</td>
            <td>{props.categories.category_name}</td>

        </tr>
    )
}

export default ProductsChartRows;