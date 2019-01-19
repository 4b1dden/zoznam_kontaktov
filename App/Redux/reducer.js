// @flow

import { createReducer } from 'reduxsauce'
import Types from './types';

export const INITIAL_STATE = {
    orders: null,
    error: false,
}

type Initial_State = {
    orders: any,
    error: boolean
}

type Action = {
    type: string,
    items?: Array<Object>,
    orders?: Array<Object>,
    user?: Object,
    userId?: string
}

export const onSuccessfullFetch = (state:Initial_State = INITIAL_STATE, action: Action) => {
    return {
        ...state,
        error: false,
        orders: action.orders
    }
}

export const onFetchError = (state:Initial_State = INITIAL_STATE, action: Action) => {
    return {
        ...state,
        error: true,
        orders: null
    }
}

export const onSingleContactFetch = (state:Initial_State = INITIAL_STATE, action: Action) => {
    let userId = action.userId;
    for (var i = 0; i < state.orders.length; i++) {
        if (state.orders[i].id == userId) state.orders[i].items = action.items
    }

    return {
        ...state,
        error: false,
    }
}

export const onNewContactAdded = (state:Initial_State = INITIAL_STATE, action: Action) => {
    const { user } = action;
    state.orders.push(user);

    return {
        ...state,
        error: false,
    }
}

export const HANDLERS = {
    [Types.FETCH_ORDERS_SUCCESS]: onSuccessfullFetch,
    [Types.FETCH_ORDERS_FAILURE]: onFetchError,
    [Types.FETCH_SINGLE_CONTACT_SUCCESS]: onSingleContactFetch,
    [Types.ADD_NEW_ORDER_SUCCESS]: onNewContactAdded
};

export default createReducer(INITIAL_STATE, HANDLERS);