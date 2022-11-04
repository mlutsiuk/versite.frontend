import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { authRepository } from "~/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: Cookies.get("token") ?? null,
  }),
  getters: {
    accessToken: state => state.token,
    check: state => state.user !== null
  },
  actions: {
    saveToken(token) {
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

      this.user = data.value.data;
    }
  },
});
