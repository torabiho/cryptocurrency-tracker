import { 
    FETCH_QUOTES_SUCCESS, 
    FETCH_CRYPTOCURRENCIES_BEGIN, 
    FETCH_CRYPTOCURRENCIES_SUCCESS, 
    FETCH_CRYPTOCURRENCIES_FAILURE, 
    ADD_LIMIT_REACHED, 
    TOGGLE_DISPLAY, 
    SORT_BY_KEY
} from '../constants';

export const toggleDisplay = id => ({
    type: TOGGLE_DISPLAY,
    id
})

export const sortByKey = (key, isAscending) => ({
    type: SORT_BY_KEY,
    key,
    isAscending
})

export function fetchQuotes(ids) {
    return async dispatch => {
        dispatch(fetchCryptocurrenciesBegin());
        return fetch(`https://www.stackadapt.com/coinmarketcap/quotes?id=${ids.join()}`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchQuotesSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchCryptocurrenciesFailure(error)));
    };
}

export function fetchCryptocurrencies() {
    return async dispatch => {
        dispatch(fetchCryptocurrenciesBegin());
        return fetch("https://www.stackadapt.com/coinmarketcap/map")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchQuotes([1, 2, 3, 4, 5]));
                dispatch(fetchCryptocurrenciesSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchCryptocurrenciesFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchCryptocurrenciesBegin = () => ({
    type: FETCH_CRYPTOCURRENCIES_BEGIN
});

export const fetchCryptocurrenciesSuccess = cryptocurrencies => ({
    type: FETCH_CRYPTOCURRENCIES_SUCCESS,
    payload: { cryptocurrencies }
});

export const fetchQuotesSuccess = quotes => ({
    type: FETCH_QUOTES_SUCCESS,
    payload: { quotes }
});

export const fetchCryptocurrenciesFailure = error => ({
    type: FETCH_CRYPTOCURRENCIES_FAILURE,
    payload: { error }
});

export const triggerAddingLimit = addingLimitReached => ({
    type: ADD_LIMIT_REACHED,
    payload: { addingLimitReached }
});



