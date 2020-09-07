import React, { Component } from 'react';
import './App.scss';
import DataTable from '../components/dataTable/DataTable';
import { CRYPTOCURRENCY_TRACKER, LOADING_MESSAGE, ERROR_MESSAGE } from '../constants';
import Dropdown from './dropdownmenu/Dropdown';

class App extends Component{
    componentDidMount(){
        this.fetchCryptocurrencies();
    }

    fetchCryptocurrencies = () => {
        this.props.fetchCryptocurrencies();
    }
    
    render(){
        const { error, cryptocurrencies, addingLimitReached, loading } = this.props;

        return (
            <div className="app-container">
                <h1 className="app-container__title">{CRYPTOCURRENCY_TRACKER}</h1>
                {loading && <p className="loading">{LOADING_MESSAGE}</p>}
                {error ? <div className="error-container">{ERROR_MESSAGE} {error.message}<button className="fetch-button" onClick={this.fetchCryptocurrencies}>Try Again</button></div> : 
                <div>
                    <Dropdown menuItems={cryptocurrencies.filter(t => !t.isInTrackTable)} addingLimitReached={addingLimitReached} />
                    <DataTable />
                </div>
                }
            </div>
        )
    }
}

export default App