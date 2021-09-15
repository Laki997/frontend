import BaseService from "./baseService";

const ENDPOINTS = {
  CREATE_MOVIE: "api/movies/",
  MOVIES: "api/movies/",
  MOVIE: "api/movies/",
};

class MovieService extends BaseService {
  async createMovie(movie) {
    const { data } = await this.client.post(ENDPOINTS.CREATE_MOVIE, movie);
    return data;
  }
  async getMovies({ currentPage, searchParam }) {
    const { data } = await this.client.get(ENDPOINTS.MOVIES, {
      params: { page: currentPage, search: searchParam },
    });
    return data;
  }

  async getMovie({ id }) {
    const { data } = await this.client.get(`${ENDPOINTS.MOVIE}${id}/`);
    return data;
  }
}

const movieService = new MovieService();
export default movieService;
