import axios from 'axios';
import { getToken } from '../auth/handleJWT';

export default function configureInterceptor() {
  axios.interceptors.request.use(
    function (config) {
      const token = getToken();

      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}

//to intercept all backend api calls and include JWT bearer Token details to request headers
