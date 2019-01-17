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
    return {
        ...state,
        error: true,
        orders: null
    }
}

export const onSingleContactFetch = (state = INITIAL_STATE, action) => {
    let userId = action.userId;
    for (var i = 0; i < state.orders.length; i++) {
        if (state.orders[i].id == userId) state.orders[i].items = action.items
    }

    return {
        ...state,
        error: false,
    }
}

export const HANDLERS = {
    [Types.FETCH_ORDERS_SUCCESS]: onSuccessfullFetch,
    [Types.FETCH_ORDERS_FAILURE]: onFetchError,
    [Types.FETCH_SINGLE_CONTACT_SUCCESS]: onSingleContactFetch
};

export default createReducer(INITIAL_STATE, HANDLERS);