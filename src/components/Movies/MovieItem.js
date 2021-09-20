import { Link } from "react-router-dom";
import "./style.scss";
import Watched from "../shared/Watched";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={movie.cover_image} alt="img" />
            <Link to={`movies/${movie.id}`}>
              <h1>{movie.title}</h1>
            </Link>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.description}</p>
          </div>
          <div className="movie_social"></div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
      <div>
        <h2>Likes: {movie.likes}</h2>
      </div>
      <div>
        <h2>Dislikes: {movie.dislikes}</h2>
      </div>
      <div>
        <h2>Views: {movie.view_count}</h2>
      </div>
      <Watched watched={movie?.isWatched[0]?.watched} />
    </div>
  );
};

export default MovieItem;
