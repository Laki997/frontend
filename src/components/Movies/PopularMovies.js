import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../../store/movies/actions";
import { selectPopularMovies } from "../../store/movies/selectors";

const PopularMovies = () => {
  const popularMovies = useSelector(selectPopularMovies());
  return (
    <div>
      <ul>
        <h2>Popular Movies</h2>
        {popularMovies.map((movie) => {
          return (
            <Link to={`movies/${movie.id}`}>
              <li key={movie.id}>
                <h3>{movie.title}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularMovies;
