import api from '@/api/baseApi';

export const authService = () => {
  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const login = async (name: string, password: string) => {
    try {
      const response = await api.post('/auth/login', {
        name,
        password,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    register,
    login,
  };
};
