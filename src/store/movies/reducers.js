import {
  GET_MOVIES_SUCCESS,
  GET_MOVIE_SUCCESS,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_SEARCH_PARAM,
  SET_FILTER_PARAM,
  SET_COMMENTS_ACTION,
  SET_CURRENT_COMMENT_PAGE,
  SET_NEXT_COMMENT_PAGE,
  SET_CURRENT_WATCHLIST_FLAG,
  SET_POPULAR_MOVIES,
  SET_RELATED_MOVIES,
} from "./actionTypes";

export const INITIAL_STATE = {
  movies: [],
  movie: {},
  currentPage: 1,
  nextPage: null,
  previousPage: null,
  searchParam: "",
  filterParam: "",
  comments: [],
  currentCommentPage: 1,
  nextCommentPage: null,
  currentWatchListFlag: null,
  popularMovies: [],
  relatedMovies: [],
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
      };
    }
    case SET_CURRENT_COMMENT_PAGE: {
      return {
        ...state,
        currentCommentPage: action.currentCommentPage,
      };
    }
    case SET_COMMENTS_ACTION: {
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
      };
    }
    case SET_NEXT_COMMENT_PAGE: {
      return {
        ...state,
        nextCommentPage: action.nextCommentPage,
      };
    }
    case SET_CURRENT_WATCHLIST_FLAG: {
      return {
        ...state,
        currentWatchListFlag: action.payload,
      };
    }
    case SET_POPULAR_MOVIES: {
      return {
        ...state,
        popularMovies: action.popularMovies,
      };
    }
    case SET_RELATED_MOVIES: {
      return {
        ...state,
        relatedMovies: action.relatedMovies,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
