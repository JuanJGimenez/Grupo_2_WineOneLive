import React from 'react';
import { Link } from 'react-router-dom';

function ProductsChartRows(props) {
    return (
        <tr>

            <td className='align-middle'>{props.product_id}</td>
            <td className='align-middle'>{props.product_name}</td>
            <td className='align-middle'>$ {props.price}</td>
            <td className='align-middle'>{props.quantity_stock}</td>
            <td className='align-middle'>{props.categories.category_name}</td>
            <td><Link to={`/products/${props.product_id}`}>
                <button type='button' class='btn btn-info'>Detalle</button>
            </Link>
            </td>
        </tr>
    )
}

export default ProductsChartRows;