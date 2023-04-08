<template>
  <div :style="{ width: props.size, height: props.size }" class="select-none">
    <img v-if="user?.avatar" :src="user?.avatar" alt="Avatar" class="avatar" />
    <div
      v-else-if="user"
      :style="{ 'background-color': avatarColor }"
      class="missing-avatar"
    >
      <div>
        {{ user!.name.charAt(0).toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const props = withDefaults(
  defineProps<{
    size?: string;
  }>(),
  {
    size: '40px'
  }
);

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
  return `hsl(${h}, ${s}%, ${l}%)`;
});
</script>

<style scoped>
.avatar {
  @apply cursor-pointer
  rounded-md;
}

.missing-avatar {
  @apply flex h-full w-full items-center justify-center rounded-md
  text-2xl font-medium text-white
  transition-colors;
}
</style>
