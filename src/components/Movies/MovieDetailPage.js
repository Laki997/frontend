import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../../store/movies/actions";
import { selectOneMovie } from "../../store/movies/selectors";
import { createMovieReaction } from "../../store/movies/actions";
import CommentForm from "../Comments/CommentsForm";

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectOneMovie());
  const params = useParams();

  const handleClick = (reaction) => {
    const payload = { movie: movie.id, reaction };
    dispatch(createMovieReaction(payload));
  };

  useEffect(() => {
    dispatch(getSingleMovie(params.id));
  }, []);

  return (
    <div>
      <h1>Title:{movie.title}</h1>
      <h2>Description:{movie.description}</h2>
      <h4>Genre:{movie.genre}</h4>
      <CommentForm id={params.id} />
      <h2>Comments</h2>
      <ul>
        {}
        {movie.comments &&
          movie.comments.map((comment) => {
            return <li key={comment.id}>{comment.content}</li>;
          })}
      </ul>
      <h3>Likes:{movie.likes}</h3>
      <h3>Dislikes:{movie.dislikes}</h3>
      <h3>Views: {movie.view_count}</h3>
      <img alt="img" src={movie.cover_image} height="200px" width="200px"></img>
      <button onClick={() => handleClick(true)} className="btn btn-primary">
        Like
      </button>
      <button onClick={() => handleClick(false)} className="btn btn-danger">
        Dislike
      </button>
    </div>
  );
};

export default MovieDetailPage;
