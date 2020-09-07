import {
    FETCH_QUOTES_SUCCESS,
    FETCH_CRYPTOCURRENCIES_BEGIN,
    FETCH_CRYPTOCURRENCIES_SUCCESS,
    FETCH_CRYPTOCURRENCIES_FAILURE,
    SORT_BY_KEY,
    TOGGLE_DISPLAY,
    ADD_LIMIT_REACHED
} from '../constants';
import { sortByKey } from '../helpers';

const initialState = {
    addingLimitReached: false,
    items: [],
    loading: false,
    error: null
};

export default function cryptocurrencies(state = initialState, action) {
    switch (action.type) {
        case FETCH_CRYPTOCURRENCIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_CRYPTOCURRENCIES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: Object.values(action.payload.cryptocurrencies).map((obj, index) => ({ id: obj.id, cmcRank: 0, symbol: obj.symbol, price: 0, isInTrackTable: index <5 ? true : false }))
            };
        
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map(item => {
                    let temp = Object.values(action.payload.quotes).find(quote => item.id === quote.id);
                    if(temp){
                        item.cmcRank= temp.cmc_rank;
                        item.price = temp.quote?.USD.price;
                    }
                        return item;
                    
                })
            };

        case FETCH_CRYPTOCURRENCIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case TOGGLE_DISPLAY:
            return {
                ...state, addingLimitReached: false, items: state.items.map(item =>
                (item.id === action.id)
                    ? { ...item, isInTrackTable: !item.isInTrackTable }
                    : item
            )}

        case SORT_BY_KEY:
            return {
                ...state, items: sortByKey(state.items, action.key, action.isAscending)
            }

        case ADD_LIMIT_REACHED:
            return {
                ...state, 
                addingLimitReached: true
            }

        default:
            return state;
    }
}