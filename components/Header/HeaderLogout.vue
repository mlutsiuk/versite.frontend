<template>
  <div class="hover:bg-gray-200 rounded-full cursor-pointer transition-all p-[4px]">
    <Icon
      class="text-gray-600"
      name="mdi:logout-variant"
      size="28"
      @click="logout"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';

function logout() {
  useAuthStore().logout();

  navigateTo('/login');
}
</script>
