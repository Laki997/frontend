import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import createRootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
