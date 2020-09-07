import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDisplay, fetchQuotes, triggerAddingLimit } from '../../actions';
import './AddList.scss';



const AddList = (props) => {
    const { addListItems, cryptocurrencies, addCryptocurrency, getQuote, preventAdding } = props;
    const trackedItems = cryptocurrencies.filter(t => t.isInTrackTable);

    const onClick = async item => {
        if (trackedItems.length < 10) {
            await getQuote([item.id]);
            addCryptocurrency(item.id);
        } else {
            preventAdding();
        }
    }

    return (
        <ul>
            {addListItems.map(addListItem =>
                <li key={addListItem.id} onClick={onClick.bind(this, addListItem)}>
                    {addListItem.symbol}
                </li>
            )}
        </ul>
    )
}

AddList.propTypes = {
    addListItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isInTrackTable: PropTypes.bool.isRequired,
        symbol: PropTypes.string.isRequired
    }).isRequired).isRequired,
    addCryptocurrency: PropTypes.func.isRequired,
    getQuote: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    cryptocurrencies: state.cryptocurrencies.items,
});

const mapDispatchToProps = dispatch => ({
    addCryptocurrency: id => dispatch(toggleDisplay(id)),
    getQuote: ids => dispatch(fetchQuotes(ids)),
    preventAdding: () => dispatch(triggerAddingLimit())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
