import { Link } from "react-router-dom";

const PopularMovies = ({ popularMovies }) => {
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
