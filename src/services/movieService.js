import BaseService from "./baseService";

const ENDPOINTS = {
  CREATE_MOVIE: "api/movies/",
};

class MovieService extends BaseService {
  async createMovie(movie) {
    const { data } = await this.client.post(ENDPOINTS.CREATE_MOVIE, movie);
    return data;
  }
}

const movieService = new MovieService();
export default movieService;
