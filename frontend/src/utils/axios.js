import axios from 'axios';

const axiosCall = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`, // Your API base URL
  timeout: 5000, // Timeout after 5 seconds
});
axiosCall.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");  // Retrieve token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Set token in request header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosCall;
