import {
  GET_MOVIES_SUCCESS,
  GET_MOVIE_SUCCESS,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
} from "./actionTypes";

export const INITIAL_STATE = {
  movies: [],
  movie: {},
  currentPage: 1,
  previousPage: null,
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

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_NEXT_PAGE: {
      return {
        ...state,
        nextPage: action.nextPage,
      };
    }
    case SET_PREVIOUS_PAGE: {
      return {
        ...state,
        previousPage: action.previousPage,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
