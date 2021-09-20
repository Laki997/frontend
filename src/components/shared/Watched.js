const Watched = ({ watched }) => {
  return (
    <div>
      <h3>
        You have
        <span>
          {watched ? (
            <strong> watched </strong>
          ) : (
            <strong> not watched </strong>
          )}
        </span>
        this movie from your watchlist!
      </h3>
    </div>
  );
};

export default Watched;
