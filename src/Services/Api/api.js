import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7167', // URL cơ sở của API của bạn
  timeout: 50000, // Thời gian chờ tối đa cho mỗi request (ms)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để thêm token vào header của mỗi request
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default api;