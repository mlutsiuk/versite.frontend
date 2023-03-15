<template>
  <div class="flex items-center select-none">
    <img
      v-if="user?.avatar"
      class="avatar"
      :src="user?.avatar"
      alt="Avatar"
    />
    <div
      v-else-if="user"
      :style="{ 'background-color' : avatarColor }"
      class="missing-avatar"
    >
      <div>
        {{ user!.name.charAt(0) }}
      </div>
    </div>
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
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const user = computed(() => authStore.user);

const avatarColor = computed(() => {
  if (!user.value) {
    return;
  }

  let hash = 0;
  for (let i = 0; i < user.value!.nickname.length; i++) {
    hash = user.value!.nickname.charCodeAt(i) + ((hash << 5) - hash);
  }
  console.info(hash);

  const h = hash % 360;
  const s = 40;
  const l = 65;
  return `hsl(${ h }, ${ s }%, ${ l }%)`;
});
</script>

<style scoped>
.avatar {
  @apply h-[40px]
    rounded-md
    cursor-pointer;
}

.missing-avatar {
  @apply h-[40px] w-[40px] flex items-center justify-center rounded-md
  text-2xl text-white font-medium
  transition-colors;
}
</style>
