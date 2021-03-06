import { REGISTER_FAILURE } from "./actionTypes";

const INITIAL_STATE = {
  user: null,
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
