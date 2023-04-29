import { useAuthStore } from '~~/store/auth';

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();

  if (!authStore.check && authStore.accessToken) {
    await authStore.fetchUser();
  }
});
