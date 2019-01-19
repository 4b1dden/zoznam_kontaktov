import {
  put, takeEvery,
} from 'redux-saga/effects';
import { Alert } from 'react-native';
import Api from '../Services/api';
import constants from '../constants';

export function* getOrdersList() {
  try {
    const response = yield Api.get(constants.api.routes.contacts);

    if (response.ok) {
      const orders = response.data.items;
      yield put({ type: 'FETCH_ORDERS_SUCCESS', orders });
    } else {
      yield put({ type: 'FETCH_ORDERS_FAILURE', error: response.problem });
    }
  } catch (err) {
    yield put({ type: 'FETCH_ORDERS_FAILURE', error: err });
  }
}

export function* getSingleContactData(action) {
  try {
    const url = constants.api.routes.getSingleContactOrders.replace(':USER_ID', action.userId);
    const response = yield Api.get(url);

    if (response.ok) {
      const { items } = response.data;
      yield put({ type: 'FETCH_SINGLE_CONTACT_SUCCESS', items, userId: action.userId });
    } else {
      yield put({ type: 'FETCH_SINGLE_CONTACT_FAILURE', error: 'Errrrrrrrr' });
    }
  } catch (err) {
    yield put({ type: 'FETCH_SINGLE_CONTACT_FAILURE', error: err });
  }
}

export function* addNewOrder(action) {
  try {
    const { credentials } = action;
    const response = yield Api.post(constants.api.routes.contacts, credentials);

    if (response.ok) {
      yield put({ type: 'ADD_NEW_ORDER_SUCCESS', user: credentials });
    } else {
      Alert.alert(response.problem);
      yield put({ type: 'ADD_NEW_ORDER_FAILURE', error: response.problem });
    }
  } catch (err) {
    yield put({ type: 'ADD_NEW_ORDER_FAILURE', error: err });
  }
}

function* ordersSaga() {
  yield takeEvery('FETCH_ORDERS_REQUEST', getOrdersList);
  yield takeEvery('FETCH_SINGLE_CONTACT_REQUEST', getSingleContactData);
  yield takeEvery('ADD_NEW_ORDER_REQUEST', addNewOrder);
}

export default ordersSaga;
