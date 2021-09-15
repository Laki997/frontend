import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction, setCurrentPage } from "../../store/movies/actions";
import {
  selectMovies,
  selectCurrentPage,
  selectNextPage,
  selectPreviousPage,
} from "../../store/movies/selectors";
import MovieItem from "./MovieItem";
const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies());
  const currentPage = useSelector(selectCurrentPage());
  const nextPage = useSelector(selectNextPage());
  const previousPage = useSelector(selectPreviousPage());

  const handlePreviousButton = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextButton = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  useEffect(() => {
    dispatch(getMoviesAction(currentPage));
  }, [currentPage]);
  const renderMovieList = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <div>
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
