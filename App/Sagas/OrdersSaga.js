import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../Services/api'
import constants from '../constants';

export function * getOrdersList (api, action) {
    try {
        const response = yield Api.get(constants.api.routes.contacts)

        if (response.ok) {
            const orders = response.data.items;
            yield put({type: "FETCH_ORDERS_SUCCESS", orders: orders});
        } else {
            yield put({type: "FETCH_ORDERS_FAILURE"}, {error: "zatialplaceholder"})
        }
    } catch (err) {
        console.log(err);
    }
    
}

function* ordersSaga () {
    yield takeEvery("FETCH_ORDERS_REQUEST", getOrdersList);
}

export default ordersSaga;