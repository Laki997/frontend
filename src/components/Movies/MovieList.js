import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import {
  getMoviesAction,
  setCurrentPage,
  setSearchParam,
} from "../../store/movies/actions";
import {
  selectMovies,
  selectCurrentPage,
  selectNextPage,
  selectPreviousPage,
  selectSearchParam,
} from "../../store/movies/selectors";
import MovieItem from "./MovieItem";
const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies());
  const currentPage = useSelector(selectCurrentPage());
  const nextPage = useSelector(selectNextPage());
  const previousPage = useSelector(selectPreviousPage());
  const searchParam = useSelector(selectSearchParam());

  const handlePreviousButton = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextButton = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleInputChange = debounce(({ target }) => {
    dispatch(setSearchParam(target.value));
  }, 750);

  useEffect(() => {
    dispatch(getMoviesAction(currentPage, searchParam));
  }, [currentPage, searchParam]);
  const renderMovieList = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <div>
        <input type="text" onChange={handleInputChange} name="search" />
      </div>
      <ul>{renderMovieList}</ul>
      <button disabled={!previousPage} onClick={handlePreviousButton}>
        Previuos
      </button>
      <button disabled={!nextPage} onClick={handleNextButton}>
        Next
      </button>
    </div>
  );
};

export default MovieList;
