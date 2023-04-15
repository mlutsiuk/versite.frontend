<template>
  <div class="w-[350px] rounded-md px-4 py-4 text-center">
    <h2 class="mb-20 text-5xl font-bold">Versite</h2>

    <div class="mb-9 text-2xl font-semibold">Реєстрація</div>

    <TextField class="mb-1" name="name" placeholder="Ім'я" />
    <TextField class="mb-1" name="email" placeholder="E-Mail" />
    <TextField
      class="mb-1"
      name="password"
      placeholder="Пароль"
      type="password"
    />
    <TextField
      class="mb-1"
      name="passwordRepeat"
      placeholder="Повторіть пароль"
      type="password"
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
import { object, string } from 'zod';

import { toFormValidator } from '@vee-validate/zod';

import { useAuthStore } from '~~/store/auth';
import { PasswordRegistrationRequest } from '~/api/auth';
import { auth } from '~/api/auth/repositories';

definePageMeta({
  layout: 'auth'
});

const authStore = useAuthStore();

const form = useForm<PasswordRegistrationRequest>({
  validationSchema: toFormValidator(
    object({
      name: string().min(2).max(32),
      email: string().email(),
      password: string().min(8),
      passwordRepeat: string()
    }).refine(data => data.password === data.passwordRepeat, {
      message: 'Паролі не співпадають',
      path: ['passwordRepeat']
    })
  )
});

const isLoading = ref(false);

async function passwordRegistration() {
  if (!(await form.validate()).valid) {
    return;
  }

  isLoading.value = true;
  const { data, error } = await auth.passwordRegistration.asyncData({
    body: form.values
  });

  if (data.value && !error.value) {
    authStore.saveToken(data.value.access_token);
    await authStore.fetchUser();

    navigateTo('/');
  }
  isLoading.value = false;
}
</script>
