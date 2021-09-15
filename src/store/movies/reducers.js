import { GET_MOVIES_SUCCESS, GET_MOVIE_SUCCESS } from "./actionTypes";

export const INITIAL_STATE = {
  movies: [],
  movie: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
  console.log("Action type: " + action.type);
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      console.log("Movies:");
      console.log(action.movies);
      return {
        ...state,
        movies: action.movies,
      };
    case GET_MOVIE_SUCCESS: {
      console.log("Movie:");
      console.log(action.movie);
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
