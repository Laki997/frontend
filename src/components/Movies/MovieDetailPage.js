import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Watched from "../shared/Watched";
import RelatedMovies from "./RelatedMovies";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

import {
  createWatchListAction,
  getSingleMovie,
  addNewComment,
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
  }, [currentWatchListFlag]);

  useEffect(() => {
    dispatch(getCommentsAction(params.id, currentCommentPage));
  }, [currentCommentPage]);

  const addNewCommentHandler = (comment) => {
    dispatch(addNewComment(comment.content));
  };

  return (
    <div>
      <RelatedMovies id={params.id} />
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
          <Watched watched={currentWatchListFlag} />
        </div>
      )}

      <AiFillLike onClick={() => handleClick(true)}>Like</AiFillLike>
      <AiFillDislike onClick={() => handleClick(false)}>Dislike</AiFillDislike>
      <BsFillBookmarkFill
        onClick={() => handleWatchList(!movie?.isWatched[0]?.watched)}
        type="button"
      >
        Watchlist
      </BsFillBookmarkFill>
      <CommentForm id={params.id} onSubmitComment={addNewCommentHandler} />
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
