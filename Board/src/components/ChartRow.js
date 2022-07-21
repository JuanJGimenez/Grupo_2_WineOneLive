import React from 'react';

function ChartRow(props) {
    return (
        <tr>
            <td>{props.user_id}</td>
            <td>{props.user_first_name}</td>
            <td>{props.user_email}</td>
            <td>{props.detail}</td>
        </tr>
    )
}

export default ChartRow;