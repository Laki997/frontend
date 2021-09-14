import { combineReducers } from "redux";
import registerReducer from "./register/reducer";
import loginReducer from "./login/reducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
    loginReducer,
  });

export default rootReducer;
