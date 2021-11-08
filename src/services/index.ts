import axios from "axios";

const api = axios.create({
  baseURL: "https://hungry-traveler-json-server.herokuapp.com/",
});

export default api;
