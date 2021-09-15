import { GET_MOVIES_SUCCESS, GET_MOVIE_SUCCESS } from "./actionTypes";

export const INITIAL_STATE = {
  movies: [],
  movie: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };
    case GET_MOVIE_SUCCESS: {
      return {
        ...state,
        movie: action.movie,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
