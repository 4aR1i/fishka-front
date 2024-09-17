import { defineStore } from 'pinia';
import { IUser } from '@/shared/types';

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
    // async register(name: string, password: string) {},
  },
});
