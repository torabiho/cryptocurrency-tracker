import React from 'react';
import { REMOVE } from '../../constants';

const TableRows = ({rows, removeRow}) => {
    return rows.map(row => {
        const { id, cmcRank, symbol, price } = row;
        return (
            <tr key={id}>
                <td>{symbol}</td>
                <td>{cmcRank}</td>
                <td>{price}</td>
                {rows.length > 1 ? <td onClick={removeRow.bind(this, id)}>{REMOVE}</td> : <td className="disabled">{REMOVE}</td>}
            </tr>
        )
    })
}

export default TableRows;