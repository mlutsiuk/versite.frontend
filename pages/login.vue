<template>
  <div class="bg-gray-400 text-white w-[350px] text-center py-4 px-4 rounded-md">
    <h2 class="text-5xl mb-28 font-bold">Versite</h2>

    <NuxtLink to="/">Home</NuxtLink>

    <div class="text-2xl font-medium mb-11">Login</div>

    {{ loginForm }}

    <TextField
      v-model="loginForm.email"
      class="mb-7"
      placeholder="email"
      hide-details
    />
    <TextField
      v-model="loginForm.password"
      class="mb-16"
      placeholder="password"
      hide-details
    />

    <button @click="passwordLogin" class="block w-full px-4 h-[60px] font-normal rounded-md bg-gray-50">
      <span class="text-gray-600">Увійти</span>
    </button>

    <div class="my-7 font-normal text-gray-600">або</div>

    <LoginWithGoogle />

    <button @click="logout" class="block w-full px-4 h-[40px] font-normal rounded-md bg-indigo-200 mt-2">
      <span class="text-gray-600">Logout</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/store/auth';
import { authRepository } from "~/api";

definePageMeta({
  layout: 'auth',
});

const authStore = useAuthStore();

const loginForm: PasswordLoginRequest = reactive({
  email: 'maksym.lutsiuk@oa.edu.ua',
  password: 'Mlutsiuk&309'
});

async function passwordLogin() {
  // TODO: Validate
  const { data } = await authRepository.passwordLogin(loginForm)

  authStore.saveToken(data.value.access_token);
  console.log(authStore.accessToken);
  await authStore.fetchUser();
}

function logout() {
  authStore.logout();
}
</script>

