import baseService from "./baseService";

const ENDPOINTS = {
  REGISTER: "api/users/",
  LOGIN: "login/",
};

class AuthService extends baseService {
  async register(user) {
    const { data } = await this.client.post(ENDPOINTS.REGISTER, user);
    return data;
  }

  async login(user) {
    const { data } = await this.client.post(ENDPOINTS.LOGIN, user);
    return data;
  }
}

const authService = new AuthService();

export default authService;
