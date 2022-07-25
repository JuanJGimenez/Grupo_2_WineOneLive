import React from 'react';
import { Link } from 'react-router-dom';

function UsersChartRow(props) {
    return (
        <tr>
            <td className='align-middle'>{props.user_id}</td>
            <td className='align-middle'>{props.user_first_name}</td>
            <td className='align-middle'>{props.user_email}</td>
            <td className='align-middle'>
                <Link to={`/users/${props.user_id}`}><button type="button" class="btn btn-info">Detalle</button></Link>
            </td>
        </tr>
    )
}

export default UsersChartRow;