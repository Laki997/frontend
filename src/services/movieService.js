import BaseService from "./baseService";

const ENDPOINTS = {
  CREATE_MOVIE: "api/movies/",
  MOVIES: "api/movies/",
  MOVIE: "api/movies/",
  CREATE_MOVIE_REACTION: "api/movies/reaction/",
  CREATE_COMMENT: "api/comments/",
};

class MovieService extends BaseService {
  async createMovie(movie) {
    const { data } = await this.client.post(ENDPOINTS.CREATE_MOVIE, movie);
    return data;
  }

  async createComment(comment) {
    const { data } = await this.client.post(ENDPOINTS.CREATE_COMMENT, comment);

    return data;
  }
  async getMovies({ currentPage, searchParam, filterParam }) {
    const { data } = await this.client.get(ENDPOINTS.MOVIES, {
      params: { page: currentPage, search: searchParam, genre: filterParam },
    });
    return data;
  }

  async getMovie({ id }) {
    const { data } = await this.client.get(`${ENDPOINTS.MOVIE}${id}/`);
    return data;
  }

  async creteMovieReaction(payload) {
    const { data } = await this.client.post(
      `${ENDPOINTS.CREATE_MOVIE_REACTION}`,
      payload
    );

    return data;
  }
}

const movieService = new MovieService();
export default movieService;
