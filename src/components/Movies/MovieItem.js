import { Link } from "react-router-dom";
import "./style.scss";
const MovieItem = ({ movie }) => {
  return (
    <div>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={movie.cover_image} alt="img" />
            <h1>{movie.title}</h1>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.description}</p>
          </div>
          <div className="movie_social"></div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
    </div>
  );
};

export default MovieItem;
