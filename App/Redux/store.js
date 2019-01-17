import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducer'
import OrdersSaga from '../Sagas/OrdersSaga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistedReducer, 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(OrdersSaga);

export const persistor = persistStore(store);