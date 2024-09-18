import { defineStore } from 'pinia';
import { IUser } from '@/shared/types';
import { authService } from '@/api/authService';

interface IAuthStore {
  user: IUser | null;
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthStore => ({
    user: null,
    token: null,
  }),
  getters: {},
  actions: {
    async register(name: string, email: string, password: string) {
      const service = authService();

      try {
        const response = await service.register(name, email, password);
        return response.message;
      } catch (error) {
        console.log(error);
      }
    },
    async login(name: string, password: string) {
      const service = authService();

      try {
        const user = await service.login(name, password);
        this.user = { id: user.id, name: user.name };
        this.token = user.token;
        localStorage.setItem('user', JSON.stringify({ id: user.id, name: user.name }));
        localStorage.setItem('accessToken', user.token);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      const service = authService();
      this.user = null;
      this.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');

      try {
        await service.logout();
      } catch (error) {
        console.error(error);
      }
    },
    async refreshAccessToken() {
      const service = authService();

      try {
        const accessToken = await service.refreshToken();
        this.token = accessToken;
        localStorage.setItem('accessToken', accessToken);
      } catch (error) {
        console.error(error);
      }
    },
    tokenVerification() {
      const userData = localStorage.getItem('user');
      this.user = userData ? JSON.parse(userData) : null;
      this.token = localStorage.getItem('accessToken');
    },
  },
});
