import { defineStore } from 'pinia';
import { UserModel } from '~/api/user';
import { auth } from '~/api/repositories';

interface State {
  user: UserModel | null,
  token: string | null
}

export const useAuthStore = defineStore("auth", {
  state: (): State => ({
    user: null,
    token: useCookie("token").value ?? null,
  }),
  getters: {
    accessToken: state => state.token,
    check: state => state.user !== null
  },
  actions: {
    saveToken(token: string) {
      this.token = token;
      useCookie("token").value = token;
    },
    logout() {
      this.user = null;
      this.token = null;

      useCookie("token").value = null;
    },
    async fetchUser() {
      const { data } = await auth.getAuthenticatedUser.asyncData();

      if(data.value) {
        this.user = data.value.data;
      }
    }
  },
});
