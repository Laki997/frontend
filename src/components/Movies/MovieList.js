import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { MOVIE_GENRE } from "./constants";
import MovieItem from "./MovieItem";
import PopularMovies from "./PopularMovies";
import {
  getMoviesAction,
  setCurrentPage,
  setSearchParam,
  setSearchFilter,
  getPopularMovies,
} from "../../store/movies/actions";
import {
  selectMovies,
  selectCurrentPage,
  selectNextPage,
  selectPreviousPage,
  selectSearchParam,
  selectFilterParam,
  selectPopularMovies,
} from "../../store/movies/selectors";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies());
  const currentPage = useSelector(selectCurrentPage());
  const nextPage = useSelector(selectNextPage());
  const previousPage = useSelector(selectPreviousPage());
  const popularMovies = useSelector(selectPopularMovies());
  const searchParam = useSelector(selectSearchParam());
  const filterParam = useSelector(selectFilterParam());

  const handlePreviousButton = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextButton = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleSelectChange = ({ target }) => {
    dispatch(setSearchFilter(target.value));
  };

  const handleInputChange = debounce(({ target }) => {
    dispatch(setSearchParam(target.value));
  }, 750);

  useEffect(() => {
    dispatch(getMoviesAction(currentPage, searchParam, filterParam));
    dispatch(getPopularMovies());
  }, [currentPage, searchParam, filterParam]);

  const renderMovieList = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <PopularMovies popularMovies={popularMovies} />
      <div>
        <select label="genre" name="genre" onChange={handleSelectChange}>
          <option label={MOVIE_GENRE.DRAMA.LABEL}>
            {MOVIE_GENRE.DRAMA.VALUE}
          </option>
          <option label={MOVIE_GENRE.COMEDY.LABEL}>
            {MOVIE_GENRE.COMEDY.VALUE}
          </option>
          <option label={MOVIE_GENRE.SF.LABEL}>{MOVIE_GENRE.SF.VALUE}</option>
          <option label={MOVIE_GENRE.HOROR.LABEL}>
            {MOVIE_GENRE.HOROR.VALUE}
          </option>
        </select>
      </div>
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
