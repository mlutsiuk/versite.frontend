<template>
  <div class="w-[350px] text-center py-4 px-4 rounded-md">
    <h2 class="text-5xl mb-20 font-bold">Versite</h2>

    <div class="text-2xl font-semibold mb-9">Увійти</div>

    <TextField
      v-model="loginForm.email"
      class="mb-1"
      name="email"
      placeholder="E-Mail"
    />
    <TextField
      v-model="loginForm.password"
      class="mb-3"
      name="password"
      placeholder="Пароль"
      password
    />

    <MdButton
      @click="passwordLogin"
      class="text-[#3A84AD]"
      size="x-large"
      :loading="isLoading"
      block
    >
      Увійти
    </MdButton>

    <div class="my-4 font-normal text-gray-600">або</div>

    <LoginWithGoogle/>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

import { useAuthStore } from '~~/store/auth';
import { passwordLoginEndpoint, PasswordLoginRequest } from '~/api';

definePageMeta({
  layout: 'auth'
});

const authStore = useAuthStore();

const loginForm: PasswordLoginRequest = reactive({
  email: '',
  password: ''
});

const form = useForm<PasswordLoginRequest>({
  validationSchema: object({
    email: string().required().email(),
    password: string().required().min(8)
  }),
  validateOnMount: false
});


const isLoading = ref(false);

async function passwordLogin() {
  if (!(await form.validate()).valid) {
    return;
  }

  isLoading.value = true;
  const { data, error } = await passwordLoginEndpoint.asyncData(loginForm);

  if (data.value && !error.value) {
    authStore.saveToken(data.value.access_token);
    await authStore.fetchUser();

    const intendedUrl = useCookie('intended_url');
    if (intendedUrl) {
      useCookie('intended_url').value = null;
      navigateTo(intendedUrl.value);
    } else {
      navigateTo('/');
    }
  }
  isLoading.value = false;
}
</script>

