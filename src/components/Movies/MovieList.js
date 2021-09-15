import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieAction, getMoviesAction } from "../../store/movies/actions";
import { selectMovies } from "../../store/movies/selectors";
import MovieItem from "./MovieItem";
const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies());
  console.log(movies);

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);
  const movieList = movies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      title={movie.title}
      description={movie.description}
      genre={movie.genre}
      cover_image={movie.cover_image}
    />
  ));
  return <ul>{movieList}</ul>;
};

export default MovieList;
