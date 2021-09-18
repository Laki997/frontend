import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createWatchListAction,
  getSingleMovie,
  setCurrentCommentPage,
} from "../../store/movies/actions";
import {
  selectComments,
  selectCurrentCommentPage,
  selectCurrentWatchListFlag,
  selectNextCommentPage,
  selectOneMovie,
} from "../../store/movies/selectors";
import {
  createMovieReaction,
  getCommentsAction,
} from "../../store/movies/actions";
import CommentForm from "../Comments/CommentsForm";

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectOneMovie());
  const currentCommentPage = useSelector(selectCurrentCommentPage());
  const nextCommentPage = useSelector(selectNextCommentPage());
  const currentWatchListFlag = useSelector(selectCurrentWatchListFlag());
  const comments = useSelector(selectComments());
  const params = useParams();

  const handleClick = (reaction) => {
    const payload = { movie: movie.id, reaction };
    dispatch(createMovieReaction(payload));
  };

  const handleWatchList = (watched) => {
    const payload = { movie: movie.id, watched };
    dispatch(createWatchListAction(payload));
  };

  const handleLoadMoreClick = () => {
    dispatch(setCurrentCommentPage(currentCommentPage + 1));
  };

  useEffect(() => {
    dispatch(getSingleMovie(params.id));
    dispatch(getCommentsAction(params.id, currentCommentPage));
  }, [currentCommentPage, currentWatchListFlag]);
  console.log(movie);
  console.log(currentWatchListFlag);
  return (
    <div>
      {movie && (
        <div>
          <h1>Title:{movie.title}</h1>
          <h2>Description:{movie.description}</h2>
          <h4>Genre:{movie.genre}</h4>
          <h3>Likes:{movie.likes}</h3>
          <h3>Dislikes:{movie.dislikes}</h3>
          <h3>Views: {movie.view_count}</h3>
          <img
            alt="img"
            src={movie.cover_image}
            height="200px"
            width="200px"
          ></img>
          {currentWatchListFlag && (
            <div>
              <h1>YOU HAVE WATCHED THIS MOVIE FROM YOUR WATCHLIST! </h1>
            </div>
          )}
        </div>
      )}

      <button onClick={() => handleClick(true)} className="btn btn-primary">
        Like
      </button>
      <button onClick={() => handleClick(false)} className="btn btn-danger">
        Dislike
      </button>
      <button
        onClick={() => handleWatchList(!movie.gledao[0].watched)}
        className="btn btn-success"
      >
        Watchlist
      </button>
      <CommentForm id={params.id} />
      <h2>Comments</h2>
      <ul>
        {comments &&
          comments.map((comment) => {
            return <li key={comment.id}>{comment.content}</li>;
          })}
      </ul>
      <button
        style={{ display: nextCommentPage ? "block" : "none" }}
        onClick={handleLoadMoreClick}
        className="btn btn-danger"
      >
        Load More
      </button>
    </div>
  );
};

export default MovieDetailPage;
