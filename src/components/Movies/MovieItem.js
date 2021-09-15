import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <li>
      <div>{movie.description}</div>
      <div>
        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
      </div>
      <img src={movie.cover_image} alt="img"></img>
    </li>
  );
};

export default MovieItem;
