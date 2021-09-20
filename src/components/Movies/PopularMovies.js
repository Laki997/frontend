import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const PopularMovies = ({ popularMovies }) => {
  return (
    <div className="sidebar">
      <ul>
        <h2>Popular Movies</h2>
        {popularMovies.map((movie) => {
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <h2>
                <AiFillStar />
                {movie.title}
              </h2>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularMovies;
