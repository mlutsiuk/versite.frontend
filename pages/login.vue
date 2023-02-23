<template>
  <div class="w-[350px] text-center py-4 px-4 rounded-md">
    <h2 class="text-5xl mb-20 font-bold">Versite</h2>

    <div class="text-2xl font-semibold mb-9">Увійти</div>

    <TextField
      v-model="loginForm.email"
      class="mb-7"
      name="email"
      placeholder="E-Mail"
    />
    <TextField
      v-model="loginForm.password"
      class="mb-16"
      name="password"
      placeholder="Пароль"
      password
    />

    <MdButton
      @click="passwordLogin"
      class="text-[#3A84AD]"
      size="x-large"
      block
    >
      Увійти
    </MdButton>

    <div class="my-4 font-normal text-gray-600">або</div>

    <LoginWithGoogle />
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import { useAuthStore } from '~~/store/auth';
import { authRepository, PasswordLoginRequest } from "~/api";

definePageMeta({
  layout: 'auth',
});

const authStore = useAuthStore();

interface SignInForm {
  email: string;
  password: string;
}

const loginForm: PasswordLoginRequest = reactive({
  email: 'f@f.ff',
  password: '12121212'
});

const form = useForm<SignInForm>({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  }),
  validateOnMount: false
});


async function passwordLogin() {
  if(!(await form.validate()).valid) {
    return;
  }

  const { data, error } = await authRepository.passwordLogin(loginForm);

  if(data.value && !error.value) {
    authStore.saveToken(data.value.access_token);
    console.log(authStore.accessToken);
    await authStore.fetchUser();
  }
}
</script>

