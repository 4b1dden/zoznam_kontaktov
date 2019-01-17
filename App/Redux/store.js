import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import OrdersSaga from '../Sagas/OrdersSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer, 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(OrdersSaga);

export default store;