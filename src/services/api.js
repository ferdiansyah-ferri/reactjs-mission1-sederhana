import axios from "axios";

const api = axios.create({
  baseURL: "https://670f589f3e715186165771a0.mockapi.io",
});

export default api;
