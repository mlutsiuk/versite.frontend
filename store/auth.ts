import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { authRepository, UserModel } from "~/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as UserModel | null,
    token: Cookies.get("token") ?? null,
  }),
  getters: {
    accessToken: state => state.token,
    check: state => state.user !== null
  },
  actions: {
    saveToken(token: string) {
      this.token = token;
      Cookies.set("token", token);
    },
    logout() {
      this.user = null;
      this.token = null;

      Cookies.remove("token");
    },
    async fetchUser() {
      const { data } = await authRepository.getAuthenticatedUser();

      if(data.value) {
        this.user = data.value.data;
      }
    }
  },
});
