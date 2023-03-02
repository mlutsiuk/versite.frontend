<template>
  <div class="w-[350px] text-center py-4 px-4 rounded-md">
    <h2 class="text-5xl mb-20 font-bold">Versite</h2>

    <div class="text-2xl font-semibold mb-9">Реєстрація</div>

    <TextField
      v-model="registrationForm.name"
      class="mb-1"
      name="name"
      placeholder="Ім'я"
    />
    <TextField
      v-model="registrationForm.email"
      class="mb-1"
      name="email"
      placeholder="E-Mail"
    />
    <TextField
      v-model="registrationForm.password"
      class="mb-1"
      name="password"
      placeholder="Пароль"
      password
    />
    <TextField
      v-model="registrationForm.passwordRepeat"
      class="mb-1"
      name="passwordRepeat"
      placeholder="Повторіть пароль"
      password
    />

    <MdButton
      @click="passwordRegistration"
      class="text-[#3A84AD]"
      size="x-large"
      :loading="isLoading"
      block
    >
      Зареєструватися
    </MdButton>

    <div class="my-4 font-normal text-gray-600">або</div>

    <LoginWithGoogle />
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { string, object, ref as yupRef } from 'yup';

import { useAuthStore } from '~~/store/auth';
import { authRepository, passwordRegistrationEndpoint, PasswordRegistrationRequest } from '~/api';

definePageMeta({
  layout: 'auth',
});

const authStore = useAuthStore();

const registrationForm: PasswordRegistrationRequest = reactive({
  name: '',
  email: '',
  password: '',
  passwordRepeat: ''
});

const form = useForm<PasswordRegistrationRequest>({
  validationSchema: object({
    name: string().required().min(2).max(32),
    email: string().required().email(),
    password: string().required().min(8),
    passwordRepeat: string().required().oneOf([yupRef('password')], 'Паролі не співпадають')
  }),
  validateOnMount: false
});


const isLoading = ref(false);
async function passwordRegistration() {
  if(!(await form.validate()).valid) {
    return;
  }

  isLoading.value = true;
  const { data, error } = await useApiAsyncData(passwordRegistrationEndpoint, registrationForm);

  if(data.value && !error.value) {
    authStore.saveToken(data.value.access_token);
    await authStore.fetchUser();
  }
  isLoading.value = false;
}
</script>

