import { LOGIN_USER, REFRESH_TOKEN, TOKEN } from "./actionTypes";
import { getItem } from "./utils";

export const INITIAL_STATE = {
  token: getItem("token"),
  refreshToken: "",
  user: null,
  errors: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
