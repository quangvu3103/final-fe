import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.2.22:4000/",
});

http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    ;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  async function (response) {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  async function (error) {
    if (error) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);
export default http;