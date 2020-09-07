import React from 'react';
import './DataTable.scss';
import CryptocurrenciesTableHeader from '../../containers/CryptocurrenciesTableHeader'
import CryptocurrenciesTableRows from '../../containers/CryptocurrenciesTableRows';

const DataTable = () => {
    return (
        <table id='cryptocurrency-table'>
            <tbody>
                <CryptocurrenciesTableHeader />
                <CryptocurrenciesTableRows />
            </tbody>
        </table>
    )
}

export default DataTable
