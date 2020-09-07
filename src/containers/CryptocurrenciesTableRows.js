import { connect } from 'react-redux'
import TableRows from '../components/dataTable/TableRows';
import { toggleDisplay } from '../actions';

const mapStateToProps = state => ({
    rows: state.cryptocurrencies.items.filter(t => t.isInTrackTable)
})

const mapDispatchToProps = dispatch => ({
    removeRow: id => dispatch(toggleDisplay(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableRows)
