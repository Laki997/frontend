import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "../../store/movies/actions";
import { selectMovies } from "../../store/movies/selectors";
import MovieItem from "./MovieItem";
const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies());

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);
  const renderMovieList = movies.map((movie) => (
    <MovieItem key={movie.id} props={movie} />
  ));
  return <ul>{renderMovieList}</ul>;
};

export default MovieList;
