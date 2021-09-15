import { Link } from "react-router-dom";

const MovieItem = (props) => {
  return (
    <li>
      <div>{props.description}</div>
      <div>
        <Link to={`movies/${props.id}`}>{props.title}</Link>
      </div>
      <img src={props.cover_image} alt="img"></img>
    </li>
  );
};

export default MovieItem;
