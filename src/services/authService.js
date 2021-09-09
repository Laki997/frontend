import baseService from "./baseService";

class AuthService extends baseService {
  async register(user) {
    const { data } = await this.client.post("/api/users/", user);
    return data;
  }
}

const authService = new AuthService();

export default authService;
