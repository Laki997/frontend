import { Link } from "react-router-dom";

const PopularMovies = ({ popularMovies }) => {
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
