import { connect } from 'react-redux'
import { fetchCryptocurrencies } from '../actions'
import App from '../components/App';

const mapStateToProps = state => ({
    cryptocurrencies: state.cryptocurrencies.items,
    loading: state.cryptocurrencies.loading,
    error: state.cryptocurrencies.error,
    addingLimitReached: state.cryptocurrencies.addingLimitReached
});

const mapDispatchToProps = dispatch => ({
    fetchCryptocurrencies: () => dispatch(fetchCryptocurrencies())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
