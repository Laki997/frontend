import {
  GET_MOVIES_SUCCESS,
  GET_MOVIE_SUCCESS,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_SEARCH_PARAM,
  SET_FILTER_PARAM,
} from "./actionTypes";

export const INITIAL_STATE = {
  movies: [],
  movie: {},
  currentPage: 1,
  nextPage: null,
  previousPage: null,
  searchParam: "",
  filterParam: "",
};

const movieReducer = (state = INITIAL_STATE, action) => {
  console.log(action.filterParam);
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
    case SET_SEARCH_PARAM: {
      return {
        ...state,
        searchParam: action.searchParam,
      };
    }
    case SET_FILTER_PARAM: {
      return {
        ...state,
        filterParam: action.filterParam,
        movies: state.movies.filter((movie) => {
          // console.log(action.filterParam);
          // console.log(state.movies);
          return movie.genre === action.filterParam;
        }),
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
