import { combineReducers } from "redux";
import registerReducer from "./register/reducer";
import loginReducer from "./login/reducer";
import movieReducer from "./movies/reducers";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    registerReducer,
    loginReducer,
    movieReducer,
  });

export default rootReducer;
