<template>
  <div class="flex items-center select-none">
    <img
      class="avatar"
      :src="user?.avatar"
      alt="Avatar"
    />
    <div class="flex flex-col ml-1">
      <div
        v-if="user?.nickname"
        v-text="`@${user?.nickname}`"
        class="text-gray-800 text-xs"
      />
      <div v-text="user?.name"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>

<style scoped>
.avatar {
  @apply h-[40px]
    rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm
    cursor-pointer;
}
</style>
