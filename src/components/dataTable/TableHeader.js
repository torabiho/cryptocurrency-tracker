import React, { useState } from 'react';
import { HEADER_MAP, REMOVE } from '../../constants';

const TableHeader = props => {
    const { sortByKey } = props;
    const [isAscending, toggleSortOrder] = useState(false);

    return <tr>
        {Object.keys(HEADER_MAP).map((key, index) => {
            if (HEADER_MAP[key] !== REMOVE) {
                return (
                    <th key={index}>
                        <div className="cryptocurrency-table__header-wrapper">
                            {HEADER_MAP[key]}
                            <div className="cryptocurrency-table__sorting-wrapper" onClick={() => { toggleSortOrder(!isAscending); sortByKey(key, isAscending) }}>
                                <i className="arrow up"></i>
                                <i className="arrow down"></i>
                            </div>
                        </div>
                    </th>)
            }
            return <th key={index}></th>
        })}
    </tr>
}

export default TableHeader;