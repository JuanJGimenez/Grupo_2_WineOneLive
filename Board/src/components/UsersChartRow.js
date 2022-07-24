import React from 'react';
import { Link } from 'react-router-dom';

function UsersChartRow(props) {
    return (
        <tr>
            <td>{props.user_id}</td>
            <td>{props.user_first_name}</td>
            <td>{props.user_email}</td>
            <td><Link to={`/users/${props.user_id}`}>Detalle</Link></td>
        </tr>
    )
}

export default UsersChartRow;