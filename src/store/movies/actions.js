import {
  CREATE_MOVIE,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_SEARCH_PARAM,
  SET_FILTER_PARAM,
  CREATE_MOVIE_REACTION,
  CREATE_COMMENT,
  GET_COMMENTS_ACTION,
  SET_COMMENTS_ACTION,
  SET_CURRENT_COMMENT_PAGE,
  SET_NEXT_COMMENT_PAGE,
  CREATE_WATCHLIST_ACTION,
  SET_CURRENT_WATCHLIST_FLAG,
  GET_POPULAR_MOVIES,
  SET_POPULAR_MOVIES,
  GET_RELATED_MOVIES,
  SET_RELATED_MOVIES,
} from "./actionTypes";

export const createMovieAction = (movie) => ({
  type: CREATE_MOVIE,
  payload: movie,
});

export const getMoviesAction = (currentPage, searchParam, filterParam) => ({
  type: GET_MOVIES,
  currentPage,
  searchParam,
  filterParam,
});

export const setMoviesAction = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  movies,
});

export const getSingleMovie = (id) => ({
  type: GET_MOVIE,
  id,
});

export const setSingleMovieAction = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  movie,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setNextPage = (nextPage) => ({
  type: SET_NEXT_PAGE,
  nextPage,
});

export const setPreviousPage = (previousPage) => ({
  type: SET_PREVIOUS_PAGE,
  previousPage,
});

export const setSearchParam = (searchParam) => ({
  type: SET_SEARCH_PARAM,
  searchParam,
});

export const setSearchFilter = (filterParam) => ({
  type: SET_FILTER_PARAM,
  filterParam,
});

export const createMovieReaction = (payload) => ({
  type: CREATE_MOVIE_REACTION,
  payload,
});

export const createCommentAction = (payload) => ({
  type: CREATE_COMMENT,
  payload,
});

export const getCommentsAction = (payload, currentCommentPage) => ({
  type: GET_COMMENTS_ACTION,
  payload,
  currentCommentPage,
});

export const setCommentsAction = (payload) => ({
  type: SET_COMMENTS_ACTION,
  payload,
});

export const setCurrentCommentPage = (currentCommentPage) => ({
  type: SET_CURRENT_COMMENT_PAGE,
  currentCommentPage,
});

export const setNextCommentPage = (nextCommentPage) => ({
  type: SET_NEXT_COMMENT_PAGE,
  nextCommentPage,
});

export const createWatchListAction = (payload) => ({
  type: CREATE_WATCHLIST_ACTION,
  payload,
});

export const setCurrentWatchListFlag = (payload) => ({
  type: SET_CURRENT_WATCHLIST_FLAG,
  payload,
});

export const getPopularMovies = () => ({
  type: GET_POPULAR_MOVIES,
});

export const setPopularMovies = (popularMovies) => ({
  type: SET_POPULAR_MOVIES,
  popularMovies,
});

export const getRelatedMovies = (id) => ({
  type: GET_RELATED_MOVIES,
  id,
});

export const setRelatedMovies = (relatedMovies) => ({
  type: SET_RELATED_MOVIES,
  relatedMovies,
});
