import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../Services/api'
import constants from '../constants';

export function * getOrdersList (action) {
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

export function * getSingleContactData (action) {
    try {
        let url = constants.api.routes.getSingleContactOrders.replace(":USER_ID", action.userId);
        const response = yield Api.get(url);

        if (response.ok) {
            const items = response.data.items;
            yield put({type: "FETCH_SINGLE_CONTACT_SUCCESS", items: items, userId: action.userId});
        } else {
            yield put({type: "FETCH_SINGLE_CONTACT_FAILURE", error: "Errrrrrrrr"});
        }
    } catch (err) {
        yield put({type: "FETCH_SINGLE_CONTACT_FAILURE", error: err});
    }
}

function* ordersSaga () {
    yield takeEvery("FETCH_ORDERS_REQUEST", getOrdersList);
    yield takeEvery("FETCH_SINGLE_CONTACT_REQUEST", getSingleContactData);
}

export default ordersSaga;