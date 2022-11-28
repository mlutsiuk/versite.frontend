<template>
  <button @click="login" class="flex items-center justify-center w-full px-4 h-[60px] font-normal rounded-md bg-gray-50">
    <span class="flex items-center text-gray-600">
      <span class="font-bold text-2xl">
        <MdIcon
          class="cursor-pointer"
          :icon="google"
          :width="24"
        />
      </span>

      <span class="ml-1.5">Google</span>
    </span>
  </button>
</template>

<script setup lang="ts">
import google from '@iconify-icons/mdi/google';
import { useAuthStore } from '~~/store/auth';
import Cookies from "js-cookie";
import { useEventListener } from "@vueuse/core";
import { authRepository } from "~/api";

const authStore = useAuthStore();
const config = useRuntimeConfig();
const GOOGLE_CALLBACK_MESSAGE_EVENT = 'versite@auth-google-callback';

async function login() {
  const { data } = await authRepository.getGoogleLoginUrl();
  if(data.value) {
    openWindow(data.value.data.url, 'Google Login');
  }
}

function openWindow(url: string, title: string) {
    let options = {
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

    if(window.focus) {
      loginWindow.focus();
    }
}

function onMessage(e: MessageEvent) {
  if(e.origin !== config.public.apiBase) { return; }
  if(e.data.source !== GOOGLE_CALLBACK_MESSAGE_EVENT) { return; }

  authStore.saveToken(e.data.payload.access_token);
  authStore.fetchUser();

  const intendedUrl = Cookies.get('intended_url');
  if(intendedUrl) {
    Cookies.remove('intended_url');
    navigateTo(intendedUrl);
  } else {
    navigateTo('/');
  }
}
useEventListener('message', onMessage);
</script>
