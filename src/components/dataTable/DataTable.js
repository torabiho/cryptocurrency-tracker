import React from 'react';
import './DataTable.scss';
import CryptocurrenciesTableHeader from '../../containers/CryptocurrenciesTableHeader'
import CryptocurrenciesTableRows from '../../containers/CryptocurrenciesTableRows';

const DataTable = () => {
    return (
        <table id='cryptocurrency-table'>
            <thead>
                <CryptocurrenciesTableHeader />
            </thead>
            <tbody>
                <CryptocurrenciesTableRows />
            </tbody>
        </table>
    )
}

export default DataTable
