import { createReducer } from 'reduxsauce'
import Types from './types';

export const INITIAL_STATE = {
    orders: null,
    error: false,
}

export const onSuccessfullFetch = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: false,
        orders: action.orders
    }
}

export const onFetchError = (state = INITIAL_STATE, action) => {
    console.log('on fetch error');
    return {
        ...state,
        error: true,
        orders: null
    }
}

export const HANDLERS = {
    [Types.FETCH_ORDERS_SUCCESS]: onSuccessfullFetch,
    [Types.FETCH_ORDERS_FAILURE]: onFetchError
};

export default createReducer(INITIAL_STATE, HANDLERS);