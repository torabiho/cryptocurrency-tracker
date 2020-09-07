import { connect } from 'react-redux'
import TableHeader from '../components/dataTable/TableHeader';
import { sortByKey } from '../actions';

const mapDispatchToProps = dispatch => ({
    sortByKey: (key, isAscending) => dispatch(sortByKey(key, isAscending))
})

export default connect(null, 
    mapDispatchToProps
)(TableHeader)
