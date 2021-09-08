import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "@redux-saga/core";
// import rootReducer from "./rootReducer";
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;