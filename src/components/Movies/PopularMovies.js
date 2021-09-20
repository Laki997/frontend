import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../../store/movies/actions";
import { selectPopularMovies } from "../../store/movies/selectors";
import { AiFillStar } from "react-icons/ai";

const PopularMovies = () => {
  const popularMovies = useSelector(selectPopularMovies());
  return (
    <div className="sidebar">
      <ul>
        <h2>Popular Movies</h2>
        {popularMovies.map((movie) => {
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <AiFillStar>
                <h3>{movie.title}</h3>
              </AiFillStar>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularMovies;
