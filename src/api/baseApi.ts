import axios from 'axios';
import { useAuthStore } from '@/store/useAuthStore';

const api = axios.create({
  baseURL: '/',
});

api.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  const token = authStore.token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${authStore.token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore();
    const originalRequest = error.config;

    if (originalRequest.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      await authStore.refreshAccessToken();
      originalRequest.headers['Authorization'] = `Bearer ${authStore.token}`;
      return axios(originalRequest);
    }

    return Promise.reject(error);
  },
);

export default api;
