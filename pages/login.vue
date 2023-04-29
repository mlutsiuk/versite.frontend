<template>
  <div class="w-[350px] rounded-md px-4 py-4 text-center">
    <h2 class="mb-20 text-5xl font-bold">Versite</h2>

    <div class="mb-9 text-2xl font-semibold">Увійти</div>

    <TextField class="mb-1" name="email" placeholder="E-Mail" />
    <TextField
      class="mb-3"
      name="password"
      placeholder="Пароль"
      type="password"
    />

    <MdButton
      class="text-[#3A84AD]"
      size="x-large"
      :loading="isLoading"
      block
      @click="passwordLogin"
    >
      Увійти
    </MdButton>

    <div class="my-4 font-normal text-gray-600">або</div>

    <LoginWithGoogle />
  </div>
</template>

<script setup lang="ts">
import { object, string } from 'zod';
import { useAuthStore } from '~~/store/auth';
import { PasswordLoginRequest } from '~/api/auth';
import { auth } from '~/api/repositories';

definePageMeta({
  layout: 'auth'
});

const authStore = useAuthStore();

const form = useForm<PasswordLoginRequest>({
  validationSchema: object({
    email: string().email(),
    password: string().min(8)
  })
});

const isLoading = ref(false);

async function passwordLogin() {
  if (!(await form.validate()).valid) {
    return;
  }

  isLoading.value = true;
  const { data, error } = await auth.passwordLogin.asyncData({
    body: form.values
  });

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
