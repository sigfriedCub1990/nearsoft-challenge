import axios from "axios";

class HttpClient {
  constructor(url = "http://localhost:8080/api/") {
    this.axiosInstance = axios.create({
      baseURL: url,
      headers: {
        api_key: "g00dLuCk"
      }
    });
  }

  get(url) {
    return this.axiosInstance.get(`${url}`);
  }

  post(url, data) {
    return this.axiosInstance.post(`${url}`, data);
  }
}

const client = new HttpClient();

export default client;
