<template>
  <MdButton
    @click="login"
    prepend-icon="mdi:google"
    class="text-[#6F5274]"
    size="x-large"
    :loading="fetchingUrl"
    block
  >
    Google
  </MdButton>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/store/auth';
import { useEventListener } from '@vueuse/core';
import { auth } from '~/api/auth/repositories';

const authStore = useAuthStore();
const config = useRuntimeConfig();
const GOOGLE_CALLBACK_MESSAGE_EVENT = 'versite@auth-google-callback';

const fetchingUrl = ref(false);

async function login() {
  fetchingUrl.value = true;
  const { data } = await auth.getGoogleLoginUrl.asyncData();
  if (data.value) {
    openWindow(data.value.data.url, 'Google Login');
  }
  fetchingUrl.value = false;
}

// TODO: Create composable
function openWindow(url: string, title: string) {
  let options: Record<string, any> = {
    url,
    title,
    width: window.screen.width / 2,
    height: window.screen.height / 2,
    left: window.screen.width / 4,
    top: window.screen.height / 8
  };
  const optionsStr = Object.keys(options).reduce((acc, key) => {
    return `${acc}${key}=${options[key]},`;
  }, '');
  optionsStr.slice(0, -1);    // Removing last comma
  let loginWindow = window.open(
    url,
    title,
    optionsStr
  );

  if (loginWindow?.focus) {
    loginWindow.focus();
  }
}

function onMessage(e: MessageEvent) {
  if (e.origin !== config.public.apiBase) {
    return;
  }
  if (e.data.source !== GOOGLE_CALLBACK_MESSAGE_EVENT) {
    return;
  }

  authStore.saveToken(e.data.payload.access_token);
  authStore.fetchUser();

  const intendedUrl = useCookie('intended_url');

  if (intendedUrl) {
    useCookie('intended_url').value = null;
    navigateTo(intendedUrl.value);
  } else {
    navigateTo('/');
  }
}

useEventListener('message', onMessage);
</script>
